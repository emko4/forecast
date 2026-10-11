import { createRequire } from 'node:module';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import translations from './vite/translations';

// The languages are the application's own configuration (it is a CommonJS
// file, read here the same way the old build read it).
const { languages } = createRequire(import.meta.url)('./src/config/languages');

export default defineConfig(({ mode }) => ({
    plugins: [
        translations({
            languages: Object.keys(languages),
            output: './src/services/translations/intl',
        }),
        react(),
    ],
    // The source decorates its classes (@connect, @withRouter, @injectIntl)
    // the way Babel's "legacy" decorators did.
    oxc: {
        decorator: { legacy: true },
    },
    define: {
        DEBUG: JSON.stringify(mode !== 'production'),
        // One of the libraries (local-storage) asks for Node's name of the
        // global object, which webpack used to supply.
        global: 'globalThis',
    },
    resolve: {
        // The stylesheets name packages the webpack way, ~package/file — and,
        // as webpack did, whatever stands before the LAST ~ is dropped: the
        // flags' addresses are put together from two such names.
        alias: [{ find: /^[^?]*~(.+)$/, replacement: `${path.resolve('node_modules')}/$1` }],
    },
    // The build goes straight into site/, the folder the server is handed
    // (.github/workflows/deploy.yml): building is what changes the page.
    build: {
        outDir: 'site',
        emptyOutDir: true,
        sourcemap: true,
        // Every flag stays a file of its own, fetched when it is shown — not
        // written into the stylesheet, which would carry all 500 to everyone.
        assetsInlineLimit: 0,
    },
}));
