import { useCallback, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Locale } from '../i18n/types';
import { getSkillTip } from '../data/skillTips';
import { usePortalTip } from '../hooks/usePortalTip';

interface Props {
  skill: string;
  locale: Locale;
}

/** About-page skill tag with a portal tooltip kept inside the viewport. */
export default function SkillChip({ skill, locale }: Props) {
  const tip = getSkillTip(skill, locale);
  const tipId = useId();
  const [open, setOpen] = useState(false);
  const { anchorRef, tipRef, coords, place } = usePortalTip(open);

  const show = useCallback(() => {
    place();
    setOpen(true);
  }, [place]);

  const hide = useCallback(() => setOpen(false), []);

  const tipTransform = coords.below
    ? `translate(calc(-50% + ${coords.shiftX}px), 0.5rem)`
    : `translate(calc(-50% + ${coords.shiftX}px), calc(-100% - 0.5rem))`;

  return (
    <>
      <span
        ref={anchorRef}
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
            ref={tipRef}
            id={tipId}
            className={`skill-tip skill-tip--portal${coords.below ? ' skill-tip--below' : ''}`}
            role="tooltip"
            style={{ top: coords.top, left: coords.left, transform: tipTransform }}
          >
            {tip}
          </span>,
          document.body,
        )}
    </>
  );
}
