import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import './i18n/index';

vi.mock('lottie-web', () => ({
  default: {
    loadAnimation: () => ({
      play: vi.fn(),
      destroy: vi.fn(),
      setSpeed: vi.fn(),
      setDirection: vi.fn(),
    }),
  },
}));
