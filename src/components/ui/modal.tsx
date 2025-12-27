import React from 'react';
import { Modal as FBModal, ModalHeader, ModalBody } from 'flowbite-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

export function Modal({ isOpen, onClose, title, children, size = '4xl' }: ModalProps) {
  return (
    <FBModal 
      show={isOpen} 
      onClose={onClose} 
      size={size}
      dismissible={true}
      theme={{
        content: {
          inner: "relative z-[100001] rounded-3xl bg-white shadow-2xl dark:bg-gray-900 flex flex-col max-h-[90vh] overflow-hidden"
        },
        root: {
          base: "fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto",
          sizes: {
            "2xl": "max-w-2xl",
            "3xl": "max-w-3xl",
            "4xl": "max-w-5xl",
            "xl": "max-w-xl"
          }
        },
        header: {
          base: "flex items-center justify-between border-b border-gray-100 dark:border-gray-800 p-6",
          title: "text-2xl font-bold text-[#001F42] dark:text-white",
          close: {
            base: "ml-auto inline-flex items-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700",
            icon: "h-5 w-5"
          }
        }
      }}
    >
      <ModalHeader>
        {title}
      </ModalHeader>
      <ModalBody className="p-0 overflow-y-auto custom-scrollbar">
        {children}
      </ModalBody>
    </FBModal>
  );
}
