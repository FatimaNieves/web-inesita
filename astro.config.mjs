import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://inesitacafe.es',
    vite: {
        plugins: [tailwindcss()]
    },
    adapter: netlify({
        devFeatures: {
            edgeFunctions: false
        }
    })
});
