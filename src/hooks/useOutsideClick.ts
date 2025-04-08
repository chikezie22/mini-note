import { useEffect, useRef } from 'react';

export function useOutsideClick(handleClose: () => void) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) handleClose();
    }
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [handleClose]);
  return modalRef;
}
