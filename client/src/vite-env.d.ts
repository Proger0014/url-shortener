/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URI;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}