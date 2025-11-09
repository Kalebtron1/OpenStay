/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
      theme: {
    extend: {
      colors: {
        // I. Paleta de Colores "Modern Loft"
        'action-primary': '#00C853',    // Primario de Acción
        'base-background': '#FFFFFF',   // Fondo Base
        'primary': '#212121',           // Texto Principal
        'secondary': '#757575',         // Texto Secundario
        'selected-state': '#E8F5E9',    // Estado Seleccionado
        'divider': '#EEEEEE',           // Borde/Separador
      },
      // II. Geometría y Espaciado (Extendiendo Border Radius)
      borderRadius: {
        'md': '4px', // Botones e Inputs
        'lg': '8px', // Cards y Contenedores (Ajustado a la escala de Tailwind)
        'xl': '12px', // Para contenedores más grandes, si es necesario
      },
      // III. Tipografía (Asumiendo que has importado la fuente)
      // fontFamily: { 
      //   sans: ['Inter', 'Roboto', 'Montserrat', 'sans-serif'],
      // },
    },
  },
  plugins: [],
}
} 
