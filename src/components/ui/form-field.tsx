import * as React from "react";
import { cn } from "./utils";
import { Label } from "./label";

interface FormFieldProps {
  children: React.ReactNode;
  label: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
  error?: string;
}

export function FormField({ 
  children, 
  label, 
  htmlFor, 
  required = false,
  className,
  error
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label 
        htmlFor={htmlFor} 
        className="text-[#002B5B] font-medium text-sm"
      >
        {label} {required && <span className="text-[#F37021]">*</span>}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

export const inputStyles = cn(
  "h-10 w-full border-gray-200 bg-slate-50 rounded-xl px-4",
  "focus:border-[#F37021] focus:ring-[#F37021] focus:ring-2 focus:ring-opacity-30 focus:shadow-sm",
  "hover:border-gray-300",
  "transition-all duration-200",
  "placeholder:text-gray-400"
);

export const selectStyles = cn(
  "h-10 w-full border-gray-200 bg-slate-50 rounded-xl px-4",
  "focus:border-[#F37021] focus:ring-[#F37021] focus:ring-2 focus:ring-opacity-30 focus:shadow-sm",
  "hover:border-gray-300",
  "transition-all duration-200"
);

export const textareaStyles = cn(
  "min-h-[100px] w-full border-gray-200 bg-slate-50 rounded-xl p-4",
  "focus:border-[#F37021] focus:ring-[#F37021] focus:ring-2 focus:ring-opacity-30 focus:shadow-sm",
  "hover:border-gray-300",
  "transition-all duration-200",
  "resize-none",
  "placeholder:text-gray-400"
);

export const checkboxGroupStyles = cn(
  "grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-gray-200"
);

export const checkboxItemStyles = cn(
  "flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors"
);
