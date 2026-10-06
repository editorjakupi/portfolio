import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Locale } from '../i18n/types';
import { getSkillTip } from '../data/skillTips';

interface Props {
  skill: string;
  locale: Locale;
}

/** About-page skill tag with a portal tooltip (what + how used). */
export default function SkillChip({ skill, locale }: Props) {
  const tip = getSkillTip(skill, locale);
  const chipRef = useRef<HTMLSpanElement>(null);
  const tipId = useId();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, below: false });

  const place = useCallback(() => {
    const el = chipRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const below = rect.top < 140;
    setCoords({
      top: below ? rect.bottom : rect.top,
      left: rect.left + rect.width / 2,
      below,
    });
  }, []);

  const show = useCallback(() => {
    place();
    setOpen(true);
  }, [place]);

  const hide = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onReposition = () => place();
    window.addEventListener('scroll', onReposition, true);
    window.addEventListener('resize', onReposition);
    return () => {
      window.removeEventListener('scroll', onReposition, true);
      window.removeEventListener('resize', onReposition);
    };
  }, [open, place]);

  return (
    <>
      <span
        ref={chipRef}
        className={`skill-chip${tip ? ' skill-chip--tip' : ''}`}
        tabIndex={tip ? 0 : undefined}
        aria-describedby={tip && open ? tipId : undefined}
        onMouseEnter={tip ? show : undefined}
        onMouseLeave={tip ? hide : undefined}
        onFocus={tip ? show : undefined}
        onBlur={tip ? hide : undefined}
      >
        {skill}
      </span>
      {tip &&
        open &&
        createPortal(
          <span
            id={tipId}
            className={`skill-tip skill-tip--portal${coords.below ? ' skill-tip--below' : ''}`}
            role="tooltip"
            style={{ top: coords.top, left: coords.left }}
          >
            {tip}
          </span>,
          document.body,
        )}
    </>
  );
}
