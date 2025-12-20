/// <reference types="vite/client" />

// Extend Vite's built-in asset types if needed
// The actual types are already included from 'vite/client'

// This file can be used to extend or override Vite's type definitions
// For example, to add custom environment variables:

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// SVG types are provided by vite/client

// If you need to override any other asset types, you can do so here
// But in most cases, Vite's built-in types should be sufficient
