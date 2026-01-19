import path from "node:path"
import vue from "@vitejs/plugin-vue"
import frappeui from "frappe-ui/vite"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [
        frappeui({
            frappeProxy: true,
            jinjaBootData: true,
            lucideIcons: true,
            buildConfig: {
                outDir: "../star_ecom/public/store",
                indexHtmlPath: "../star_ecom/www/store.html",
                emptyOutDir: true,
                sourcemap: true,
            },
        }),
        vue(),
    ],
    build: {
        chunkSizeWarningLimit: 1500,
        outDir: "../star_ecom/public/store",
        emptyOutDir: true,
        target: "es2015",
        sourcemap: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        },
    },
    optimizeDeps: {
        include: ["feather-icons", "showdown", "highlight.js/lib/core", "interactjs"],
    },
    server: {
        allowedHosts: true,
    },
})