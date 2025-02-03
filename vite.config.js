import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/dog-api": {
                target: "https://http.dog",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/dog-api/, ""),
            },
        },
    },
});
