/// <reference types="vitest" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
    plugins: [dts({ tsconfigPath: 'tsconfig.app.json' })],
    build: {
        lib: {
            entry: 'src/index.ts', // the entry point of our library
            name: 'opiece-core', // the name of our library
            fileName: 'opiece-core', // the name of our output file
        },
    },
    test: {
        coverage: {
            enabled: true,
        },
    },
});
