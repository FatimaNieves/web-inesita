# Inesita · Café de Especialidad

Web de Inesita, cafetería de especialidad en Ourense. Construida con [Astro](https://astro.build), Tailwind CSS v4 y desplegada en Netlify.

## Secciones

- **Hero** — presentación e identidad visual
- **Quiénes somos** — historia y filosofía del local
- **Carta** — menú online por categorías (cafés, bebidas, repostería, brunch)
- **Eventos** — desayunos de grupo, cumpleaños, eventos privados
- **Talleres y experiencias** — catas, cursos de café en casa, latte art
- **Reseñas** — reseñas reales de Google (4,8 · 55 opiniones)
- **Instagram** — publicaciones reales de [@inesita.cafe](https://instagram.com/inesita.cafe), cada una enlazada a su publicación original
- **Contacto** — dirección, horario, mapa (en el pie de página)

## Fotografía

- `public/images/inesita/real/` — fotos de producto reales que ha pasado Fátima. Se usan en el `Hero` y varias miniaturas de `Menu.astro` (Croissant, Cookies, Tosta dulce, Tosta salada, Zumo Natural).
- `public/images/inesita/instagram/` — miniaturas descargadas de publicaciones reales de @inesita.cafe (las URL firmadas de Instagram caducan a las pocas horas, por eso están guardadas localmente en vez de enlazadas en directo). Cada una en `Instagram.astro` enlaza a su publicación original. Para ampliar la cuadrícula: abrir el perfil, copiar el enlace de la publicación (`/p/CODIGO/` o `/reel/CODIGO/`) y descargar su imagen antes de que caduque el enlace firmado.
- `src/components/Reviews.astro` — reseñas reales de la ficha de Google (buscar "Inesita Cafe de Especialidad Ourense" en Google Maps para actualizar).

`About.astro`, `Events.astro` y `Workshops.astro` todavía usan fotos de stock de Unsplash (libres de derechos, pero genéricas — no son de Inesita) como marcador de posición para ambiente/local, ya que aún no hay fotos reales del espacio. Sustituir cada `src="https://images.unsplash.com/..."` por fotos reales en cuanto estén disponibles.

## Pendiente de contenido real

La carta (`src/components/Menu.astro`) ya tiene los productos y precios reales, y `Reviews.astro`/`Instagram.astro` ya usan contenido real. Queda pendiente:

- `src/components/Footer.astro` — horario real y email de contacto (`hola@inesitacafe.es` es un placeholder). El teléfono del footer (662 242 666, de la ficha de marca) no coincide con el de la ficha de Google (617 99 81 52) — confirmar cuál es el vigente.
- Fotos reales del interior/local para `About.astro`, `Events.astro` y `Workshops.astro` (ver sección Fotografía arriba)
- Considerar sustituir la cuadrícula manual de `Instagram.astro` por el embed de un servicio como [LightWidget](https://lightwidget.com) o [SnapWidget](https://snapwidget.com) para que se actualice sola en vez de a mano

## Comandos

| Comando           | Acción                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Instala las dependencias                      |
| `npm run dev`       | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`     | Genera el sitio de producción en `./dist/`    |
| `npm run preview`   | Previsualiza el build de producción           |

## Desplegar en Netlify

El proyecto ya incluye el adaptador `@astrojs/netlify`. Basta con conectar el repositorio en Netlify; detecta Astro automáticamente.
