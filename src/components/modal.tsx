import React, { useContext, useState, createContext, cloneElement } from 'react';
import { ReactNode } from 'react';
import { Button } from './ui/button';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface IModalContextType {
  openForm: string;
  close?: () => void;
  open?: (value: string) => void;
}

const ModalContext = createContext<IModalContextType | undefined>(undefined);

export default function Modal({ children }: { children: ReactNode }) {
  const [openForm, setOpenForm] = useState<string>('');
  const close = () => setOpenForm('');
  const open = (value: string) => setOpenForm(value);
  return (
    <ModalContext.Provider value={{ openForm, close, open }}>{children}</ModalContext.Provider>
  );
}

function Open({
  children,
  opens: modalName,
  variant,
}: {
  children: ReactNode;
  opens: string;
  variant?: string;
}) {
  const { open } = useContext(ModalContext);
  return (
    <>
      <Button
        variant={
          variant as
            | 'default'
            | 'link'
            | 'destructive'
            | 'outline'
            | 'secondary'
            | 'ghost'
            | undefined
        }
        onClick={() => open?.(modalName)}
      >
        {children}
      </Button>
    </>
  );
}

function Window({ children, name }: { children: ReactNode; name: string }) {
  const { openForm, close } = useContext(ModalContext);
  const modalRef = useOutsideClick(close);
  if (name !== openForm) return null;
  return (
    <>
      {createPortal(
        <div className="fixed top-0 left-0 min-w-full min-h-dvh backdrop-blur-2xl bg-transparent z-20">
          <div
            className="fixed grid gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-100/60 px-5 py-3 lg:px-10 lg:py-5 md:min-w-3xl rounded-2xl"
            ref={modalRef}
          >
            <Button onClick={close} className="place-self-end">
              <HiXMark />
            </Button>
            {React.isValidElement(children) &&
              cloneElement(children as React.ReactElement<{ onCloseModal?: () => void }>, {
                onCloseModal: close,
              })}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
Modal.Open = Open;
Modal.Window = Window;
