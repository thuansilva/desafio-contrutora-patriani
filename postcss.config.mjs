const config = {
  theme: {
    extend: {
      colors: {
        // A cor da borda continua a mesma
        "gray-light": "#E2DEDC",
      },
      boxShadow: {
        // ATUALIZAÇÃO: Esta é a nova sombra, mais simples, com apenas uma camada.
        "card-shadow": "0 1px 2px 0 rgba(16, 24, 40, 0.06)",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
