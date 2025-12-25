import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Modal } from '../components/ui/modal';
import { GetQuoteForm } from '../components/GetQuoteForm';

interface QuoteModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}

interface QuoteModalProviderProps {
  children: ReactNode;
}

export function QuoteModalProvider({ children }: QuoteModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal} title="Request a Project Quote" size="3xl">
        <GetQuoteForm />
      </Modal>
    </QuoteModalContext.Provider>
  );
}
