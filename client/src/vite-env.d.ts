/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URI;
  readonly VITE_MAIN_TITLE;
  readonly VITE_GITHUB_LINK;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}