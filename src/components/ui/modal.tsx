import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const portalContainerRef = useRef<HTMLElement | null>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Restore scrolling when modal is closed
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const modalElement = modalContentRef.current;
    if (!modalElement) return;

    // Find all focusable elements
    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabPress = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // If shift + tab and on first element, move to last element
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // If tab and on last element, move to first element
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabPress);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabPress);
    };
  }, [isOpen]);

  // Trigger entrance animation
  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => setAnimateIn(true));
    return () => {
      cancelAnimationFrame(id);
      setAnimateIn(false);
    };
  }, [isOpen]);

  // Ensure a dedicated portal container exists and is the last child of body
  useEffect(() => {
    let container = document.getElementById('modal-root') as HTMLElement | null;
    if (!container) {
      container = document.createElement('div');
      container.id = 'modal-root';
      document.body.appendChild(container);
    }
    portalContainerRef.current = container;
    return () => {
      // Do not remove the container to allow reuse
    };
  }, []);

  // Make sure the portal container never blocks clicks when modal is closed
  useEffect(() => {
    const container = portalContainerRef.current;
    if (!container) return;
    if (isOpen) {
      container.style.pointerEvents = 'auto';
      container.style.position = '';
      container.style.inset = '';
      container.style.zIndex = '';
    } else {
      container.style.pointerEvents = 'none';
      container.style.position = '';
      container.style.inset = '';
      container.style.zIndex = '';
    }
  }, [isOpen]);

  // Handle click outside modal
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalContentRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-3xl',
    '3xl': 'max-w-5xl',
  } as const;

  return createPortal(
    <div 
      ref={modalRef}
      onClick={handleOverlayClick}
      className={`fixed inset-0 flex items-center justify-center z-[9999] p-2 sm:p-4 md:p-8 backdrop-blur-sm transition-opacity duration-200 ${animateIn ? 'bg-black/50 opacity-100' : 'bg-black/40 opacity-0'}`}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalContentRef}
        className={`bg-white rounded-xl shadow-2xl ${sizeClasses[size]} w-28 flex flex-col overflow-hidden transform transition-transform duration-200 ${animateIn ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'}`}
        style={{ maxHeight: '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-[#001F42]">{title}</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F37021]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 min-h-0">
          {children}
        </div>
      </div>
    </div>,
    portalContainerRef.current || document.body
  );
}
