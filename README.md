# Mariano Vatri · Webs y sistemas a medida

Mi sitio de servicios: **[marianovatri.netlify.app](https://marianovatri.netlify.app)**

## Qué tiene

- Escena 3D con partículas (Three.js) que pasa "del caos al orden" mientras scrolleás.
- Trabajos con comparador antes/después.
- Cotizador en tres pasos que arma el mensaje y lo abre en WhatsApp.
- Modo presentación para proyector: recorre las secciones sola, sin mouse. Se activa con la tecla `P` o abriendo el link con `?presentar`.
- Funciona sin internet una vez visitado (service worker en `sw.js`).

## Cómo está hecho

HTML, CSS y JavaScript sin framework ni build. Three.js va dentro de `vendor/` para no depender de un CDN.

Para verlo local, serví la carpeta con cualquier servidor estático (el service worker no anda abriendo `file://`):

```bash
npx serve .
```

## Publicación

Netlify, configurado en `netlify.toml`: copia los archivos a `dist/`, que es lo que publica el panel.

El CV anterior, hecho en Vue, quedó en la rama `cv-vue-2024`.
