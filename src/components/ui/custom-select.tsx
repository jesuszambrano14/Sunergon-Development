import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

export function CustomSelect({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option",
  className = "",
  id
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<Array<HTMLDivElement | null>>([]);
  
  // Reset highlighted index when dropdown closes
  useEffect(() => {
    if (!isOpen) setHighlightedIndex(-1);
  }, [isOpen]);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };
  
  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
      e.preventDefault();
      setIsOpen(true);
      setHighlightedIndex(0);
      return;
    }
    
    if (!isOpen) return;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => (prev < options.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : options.length - 1));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleOptionClick(options[highlightedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };
  
  // Scroll highlighted option into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && optionsRef.current[highlightedIndex]) {
      optionsRef.current[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [isOpen, highlightedIndex]);

  const baseStyles = `h-12 w-full border border-gray-200 bg-slate-50 rounded-xl px-4 flex items-center justify-between cursor-pointer
                     hover:border-gray-300 focus-within:border-[#F37021] focus-within:ring-2 focus-within:ring-[#F37021] focus-within:ring-opacity-30 focus-within:shadow-sm transition-all duration-200`;

  return (
    <div className="relative w-full" ref={selectRef} id={id}>
      <div
        className={`${baseStyles} ${className}`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div
          className="absolute z-[99999] mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg p-1 max-h-60 overflow-auto pointer-events-auto"
          role="listbox"
        >
          {options.map((option, index) => (
            <div
              key={index}
              ref={el => { optionsRef.current[index] = el; return undefined; }}
              className={`select-option ${value === option ? 'selected' : ''}`}
              data-highlighted={highlightedIndex === index ? 'true' : 'false'}
              aria-selected={value === option}
              onClick={() => handleOptionClick(option)}
              role="option"
            >
              <span className="flex-grow">{option}</span>
              {value === option && (
                <span className="flex items-center justify-center">
                  <Check className="h-4 w-4 text-[#002B5B] font-bold" />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
