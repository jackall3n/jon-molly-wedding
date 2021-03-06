module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        },
        colors: {
            main: 'rgb(249, 248, 247)'
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            playfair: ['Playfair Display SC', 'serif'],
            script: ['script', 'serif'],
            madi: ['Ms Madi', 'sans-serif'],
            lora: ['Lora', 'serif'],
            cormorant: ['Cormorant Garamond', 'serif'],
            lato: ['Lato',  'sans-serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
