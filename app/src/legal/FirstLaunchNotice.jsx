import { useCallback, useEffect, useRef, useState } from 'react';
import LegalSections from './LegalSections.jsx';
import { CONFIDENTIALITE, MENTIONS_LEGALES, legalNotice } from './content.js';
import { setAcknowledged, shouldShowNotice } from './storage.js';

/**
 * Avertissement affiché à la première utilisation.
 *
 * Choix d'implémentation :
 * - Les mentions complètes sont une **seconde page de la modale**, jamais un
 *   écran situé derrière elle : la modale est l'élément le plus haut de la pile,
 *   un overlay ouvert dessous serait invisible — et l'avertissement resterait
 *   contournable par un appui sur ce qui se trouve dessous.
 * - La carte est une colonne flex à hauteur plafonnée : le texte défile au
 *   milieu, les deux boutons restent posés en bas. Un texte légal est toujours
 *   plus long qu'un écran de téléphone ; une action principale qu'il faut
 *   atteindre en défilant se lit comme une action absente.
 * - Une entrée d'historique est empilée à l'ouverture des détails, et dépilée
 *   quand un retour interne les referme : le bouton retour d'Android ferme les
 *   détails avant de quitter la page. Cette gestion reste cantonnée à la
 *   modale.
 */
export default function FirstLaunchNotice({ onDone }) {
  const [details, setDetails] = useState(false);
  const cardRef = useRef(null);
  const primaryRef = useRef(null);
  const scrollRef = useRef(null);
  const pushedRef = useRef(false);

  // Focus initial sur l'action principale.
  useEffect(() => {
    primaryRef.current?.focus();
  }, []);

  // Le contenu change de page : on repart en haut du texte.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [details]);

  const closeDetails = useCallback(() => {
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back(); // le popstate remettra `details` à false
    } else {
      setDetails(false);
    }
  }, []);

  const openDetails = useCallback(() => {
    window.history.pushState({ socLegalDetails: true }, '');
    pushedRef.current = true;
    setDetails(true);
  }, []);

  // Retour Android / navigateur : ferme les détails plutôt que de quitter.
  useEffect(() => {
    function onPop() {
      pushedRef.current = false;
      setDetails(false);
    }
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Piège de focus + Échap (ferme les détails ; l'avertissement, lui, se valide).
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && details) {
        e.preventDefault();
        closeDetails();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusables = cardRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [details, closeDetails]);

  function accept() {
    setAcknowledged();
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back();
    }
    onDone();
  }

  return (
    <div className="soc-legal-backdrop" role="presentation">
      <div
        className="soc-legal-card"
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="soc-legal-title"
      >
        <h2 id="soc-legal-title" className="soc-legal-title">
          {details ? MENTIONS_LEGALES.title : legalNotice.title}
        </h2>

        <div className="soc-legal-scroll soc-scroll" ref={scrollRef}>
          {details ? (
            <div className="soc-doc">
              <LegalSections doc={MENTIONS_LEGALES} headingLevel={3} />
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-heading-weight)',
                  fontSize: 19,
                  margin: '28px 0 10px',
                }}
              >
                {CONFIDENTIALITE.title}
              </h2>
              <LegalSections doc={CONFIDENTIALITE} headingLevel={3} />
            </div>
          ) : (
            legalNotice.shortWarning.map((p, i) => (
              <p key={i} style={{ fontSize: 14, lineHeight: 1.6, margin: '0 0 12px', textWrap: 'pretty' }}>
                {p}
              </p>
            ))
          )}
        </div>

        <div className="soc-legal-actions">
          {details ? (
            <button type="button" className="btn btn-ghost" onClick={closeDetails}>
              ← Revenir à l&apos;avertissement
            </button>
          ) : (
            <button type="button" className="btn btn-ghost" onClick={openDetails}>
              Voir les détails
            </button>
          )}
          <button type="button" className="btn btn-primary" ref={primaryRef} onClick={accept}>
            J&apos;ai compris
          </button>
        </div>
      </div>
    </div>
  );
}

/** Décide de l'affichage au montage, puis laisse l'application libre. */
export function LegalGate({ children }) {
  // Mode non strict : voir `shouldShowNotice` pour la re-demande sur montée de version.
  const [show, setShow] = useState(() => shouldShowNotice());

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <>
      {children}
      {show && <FirstLaunchNotice onDone={() => setShow(false)} />}
    </>
  );
}
