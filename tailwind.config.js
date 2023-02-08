/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',                //Necesaria para poder activar el modo oscuro
  content: [
    "./src/html/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"//para usar la libreria de componentes flowbite
  ],
  theme: {
    extend: {                       //Para configurar un sistema de estilos
      backgroundImage:{             //Todo el conjunto de imagenes que serian utilizadas como background
        'imagen1':'url("./public/img/MyPicture.jpg")',  
        'imagen2':'url("./public/img/MyObjectives.png")'
      },
      backgroundColor: theme => ({  //Para definir colores a utilizar diferentes a los de tailwind 
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secundary': '#CC2D4A'
      }),
      textColor:{                   //Para definir los colores de los textos en nuestro sistema de estilos
        'primary': '#CC2D4A',
        'secundary': '#CC2D4A'
      },
      fontFamily:{                  //Las fuentes de nuestro sistema de estilos
        Monserrat:[                 //primero obtener la fuente de       https://fonts.google.com/
          'Monserrat',              //y desues se debe agregar la fuente obtenida al    index.html
          'sans-serif'              //por ultimo agregar aqui en tailwind.config.js
        ]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')      //para usar la libreria de componentes flowbite
  ],
}
