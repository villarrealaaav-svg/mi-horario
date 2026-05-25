# Brief — Mi Sistema Personal · Alejandro Villarreal
> Última actualización: 2026-05-25

## Contexto del usuario
- **Nombre**: Alejandro Villarreal (AAAV)
- **Fecha de nacimiento**: 16/09/1998
- **Ciudad**: Villahermosa, Tabasco
- **GitHub**: villarrealaaav-svg
- **Email**: villarrealaaav@gmail.com

---

## Visión del sistema
Un ecosistema de herramientas personales accesible desde un **launcher central** con identidad visual consistente (papel cálido + terracota). Vive en GitHub Pages; el repo podría renombrarse a `limitless` para que la URL sea `villarrealaaav-svg.github.io/limitless/`.

### Herramientas planeadas
| App | Estado | Archivo |
|-----|--------|---------|
| Mi Horario | ✅ Producción | `mi-horario.html` |
| Finanzas (CTRLFIN) | 🔜 Pendiente retheme | `C:\Users\paspa\Downloads\07_PENDIENTE_CLASIFICAR\FINANZAS ALONSO FINAL.html` |
| Launcher central | 🔜 Pendiente | `index.html` |

---

## Infraestructura actual

### GitHub Pages
- **Repo**: https://github.com/villarrealaaav-svg/mi-horario
- **URL pública**: https://villarrealaaav-svg.github.io/mi-horario/mi-horario.html
- **Deploy**: automático en `git push` (~1 min)
- **Archivos en repo**: `mi-horario.html`, `logo-av.png`, `icon-192.png`, `icon-512.png`, `manifest.json`, `sw.js`

### Firebase (Realtime Database)
- **Proyecto**: mi-horario-3746e
- **URL DB**: https://mi-horario-3746e-default-rtdb.firebaseio.com
- **API Key**: AIzaSyAf1fCH3Fuk0Y0UcrLXjJWCmldu3Aktrmo
- **Uso**: sync de bloques "hecho" entre dispositivos en tiempo real
- **Path en DB**: `s/h_YYYY-MM-DD` → array de índices completados

### Git local
- **Directorio**: `D:\Claude Code\EXPERIMENTOS\Sandbox\HORARIO VILLARREAL\`
- **Remote**: origin → github.com/villarrealaaav-svg/mi-horario.git
- **Para actualizar**: `git add -A && git commit -m "msg" && git push`

---

## Identidad Visual

### Carpeta
`D:\Claude Code\IDENTIDAD VISUAL\`

### Archivos
| Archivo | Descripción |
|---------|-------------|
| `tokens.css` | Todas las variables CSS del sistema |
| `guia-visual.html` | Guía original — **NO MODIFICAR NUNCA** |
| `guia-visual-extendida.html` | Guía extendida con más patrones |
| `logo-av.png` | Logo monograma "A" (720×720px) |
| `splash-av-limitless.html` | Splash screen original de referencia |

### Tokens principales
```css
--paper: #f4efe4      /* fondo principal */
--card:  #fbf8f1      /* tarjetas */
--ink:   #2a2520      /* texto */
--ink-soft: #5a5247   /* texto secundario */
--clay:  #b5603a      /* terracota — acento principal */
--line:  #ddd3bf      /* bordes */
--font-display: 'Fraunces', serif
--font-ui: 'Hanken Grotesk', sans-serif
```

### Google Fonts (agregar en head)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Mi Horario — Detalles técnicos

### Archivos locales
```
D:\Claude Code\EXPERIMENTOS\Sandbox\HORARIO VILLARREAL\
├── mi-horario.html    (38 KB)
├── logo-av.png        (48 KB)
├── icon-192.png       (PWA icon)
├── icon-512.png       (PWA icon)
├── manifest.json      (PWA manifest)
└── sw.js              (Service Worker — cache horario-v2)
```

### Servidor de preview local
- Puerto 8080 — configurado en `D:\Claude Code\.claude\launch.json` como "horario"
- Puerto 8081 — identidad visual, configurado como "identidad-visual"

### Vistas (4 tabs)
1. **Horario** — semana actual con navegación, bloques por día, last-week comparison
2. **Año** — heatmap 12 meses
3. **Mi vida** — grid 90×52 semanas desde 16/09/1998
4. **Stats** — barras por categoría vs semana pasada

### Storage
```javascript
// localStorage key: h_YYYY-MM-DD → JSON array de índices completados
// Firebase path: s/h_YYYY-MM-DD → mismo array (sync en tiempo real)
// Listener activo solo en la fecha visible actualmente
```

### Splash screen
- Logo `logo-av.png` con `mix-blend-mode: multiply`
- Texto: "Limitless *Systems*" (Fraunces + clay italic)
- Sub: "MI SISTEMA · SOSTENIBLE" (Hanken uppercase)
- Duración 1900ms + exit 650ms

---

## Próximos pasos

### Sesión siguiente: Launcher + Finanzas
1. **Launcher** (`index.html`) — pantalla central con tarjetas para cada herramienta, identidad visual, mismo splash
2. **Retheme Finanzas** — `FINANZAS ALONSO FINAL.html` tiene: transacciones, KPIs, metas de ahorro, gráficas de barras, PIN de seguridad. Solo cambiar CSS (paleta oscura → paper/clay), mantener JS intacto
3. **Renombrar repo** — `mi-horario` → `limitless`. Pasos: nuevo repo en GitHub, `git remote set-url origin nueva-url`, push, activar Pages, actualizar Firebase authorized domains

---

## Reglas del sistema
1. Vanilla HTML/CSS/JS — sin frameworks ni build tools
2. Tokens de identidad visual en todo — nunca colores hardcoded fuera de tokens
3. Firebase solo para sync, localStorage siempre como fallback offline
4. Cada app es PWA-ready (manifest + SW)
5. Archivos HTML bajo ~50KB (assets como PNGs van externos)
