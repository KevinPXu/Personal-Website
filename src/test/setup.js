// Runs once before the test files (see `test.setupFiles` in vite.config.js).
import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Unmount React trees between tests so queries don't leak across cases.
afterEach(() => {
  cleanup();
});

// jsdom doesn't implement window.matchMedia, but MUI's useMediaQuery
// (used in About.jsx) calls it during render. Provide a minimal stub that
// reports "no match" so components render their default (desktop) layout.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated, kept for older callers
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});
