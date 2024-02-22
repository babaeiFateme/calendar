/** @type {import('tailwindcss').Config} */
module.exports = {
    rtl: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            green: {
                50: "#effefb",
                100: "#c7fff3",
                200: "#90ffe6",
                300: "#51f7d9",
                400: "#1de4c6",
                500: "#04c8ad",
                600: "#00a693",
                700: "#058073",
                800: "#0a655d",
                900: "#0d544d",
                950: "#003331",
            },
            gray: {
                700: "#242726",
            },
            red: {
                50: "#fff0f0",
                100: "#ffdddd",
                200: "#ffc0c0",
                300: "#ff9494",
                400: "#ff5757",
                500: "#ff2323",
                600: "#ff0000",
                700: "#d70000",
                800: "#b10303",
                900: "#920a0a",
                950: "#500000",
            },
        },
        extend: {},
    },
    plugins: [],
};
