const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData : `@import "@/components/estilos.sass";`,
      },
    },
  },
};