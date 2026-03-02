// vite.config.ts
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    transformer: 'lightningcss', // Use Lightning CSS for development transformation
    lightningcss: {
      // Optional: Configure browser targets based on your project's browserslist
      targets: browserslistToTargets(browserslist('>= 0.25%')),
      // Optional: Include specific features (e.g., nesting, colors)
      // include: Features.Nesting | Features.Colors,
    },
  },
  build: {
    cssMinify: 'lightningcss', // Use Lightning CSS for production minification
  },
});
