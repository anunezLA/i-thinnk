# i+Thinnk® — Sitio Web

Sitio web oficial de **i+Thinnk®** — consultoría de ingeniería industrial e IA aplicada.

Los Ángeles, Región del Biobío, Chile.

## Estructura

```
.
├── index.html              # Página principal
├── colors_and_type.css     # Tokens de color y tipografía (design system)
├── components/             # Componentes React (JSX, transpilados en navegador)
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Ticker.jsx
│   ├── Services.jsx
│   ├── Partners.jsx        # Red Tecnológica (Brenpower, Nexopel, ITPhotonics)
│   ├── AIBlocks.jsx        # IA Industrial — 6 capacidades
│   ├── About.jsx
│   └── CTA.jsx
└── assets/
    └── partners/           # Logos de partners
        ├── brenpower-logo.png
        ├── nexopel-logo.png
        └── itphotonics-logo.png
```

## Secciones

1. **Hero** — Más rendimiento. Menos incertidumbre.
2. **Servicios** — 5 áreas de servicio propias
3. **Red Tecnológica** — Partners distribuidos e integrados
4. **IA Industrial** — Frentes de expertise (predictivo, optimización, NIR, energía, trazabilidad, reportería)
5. **Nosotros**
6. **CTA + Footer**

## Cómo correrlo localmente

Es HTML puro con React + Babel cargados desde CDN. No requiere build.

```bash
# Opción 1 — Python
python3 -m http.server 8000

# Opción 2 — Node
npx serve .
```

Después, abrir `http://localhost:8000`.

> Nota: abrir el `index.html` directamente con `file://` puede fallar a cargar los componentes JSX por restricciones de CORS. Siempre servir desde un servidor local.

## Deploy

Compatible con cualquier hosting estático: GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.

### GitHub Pages
1. Subir esta carpeta al repo
2. Settings → Pages → Source: `main` branch, root
3. URL: `https://<usuario>.github.io/<repo>/`

## Logos de partners

Los logos viven en `assets/partners/`. Cada card de Red Tecnológica usa:
- Una silueta en steel-blue (`#2F4855`) por defecto vía CSS `mask-image`
- El logo original a color al hacer hover/tap

Para reemplazar un logo, simplemente sustituir el archivo PNG manteniendo el mismo nombre.

## Stack

- HTML5 estático
- React 18 + Babel (vía CDN, sin build step)
- CSS custom properties (design tokens en `colors_and_type.css`)
- Fonts: Syne (display) · DM Sans (body) · DM Mono (mono) — desde Google Fonts

---

© i+Thinnk® · Los Ángeles, Chile
