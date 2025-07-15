export default {
    content: [
        "./src/**/*.html",
        "./src/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                corporativo: "#0052cc",
                llamada: "#007bff",
                fondo: "#f4f4f4",
                texto: "#222"
            },
            fontFamily: {
                sans: ["Segoe UI", "sans-serif"]
            },
            spacing: {
                'hero-y': '60px',
                'btn-x': '24px',
                'btn-y': '12px'
            }
        },
    },
    plugins: [],
}
