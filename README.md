# ☕ Café Restaurante L'Express - Carta Digital

Carta digital moderna y responsive para Café Restaurante L'Express en Valencia. Sistema completo de gestión de menú con actualización automática desde Google Sheets, interfaz intuitiva y diseño optimizado para todos los dispositivos.

## 🌐 Información del Restaurante

**Café Restaurante L'Express**
📍 Plaça de Mossén Sorell, 4 bajo derecha, Ciutat Vella, 46003 Valencia
📞 963 91 78 63
📧 caferestaurantexpress@gmail.com
📱 [@restaurante_lexpress](https://www.instagram.com/restaurante_lexpress)

**Horario:** Lunes a Viernes: 7:00 - 17:00 | Sábados y Domingos: Cerrado

## 🏆 Premios y Reconocimientos

🥇 **Restaurant Guru 2025** - Recomendado

## ✨ Características Principales

✅ **Carta digital completa** - Desayunos, cafés, almuerzo popular, menú del día, bocadillos, bebidas y vinos

✅ **Actualización automática** - Menú del día actualizado en tiempo real desde Google Sheets

✅ **Diseño responsive** - Perfecto en móviles, tablets y desktop

✅ **Modo oscuro** - Tema claro/oscuro con preferencia guardada en localStorage

✅ **Multi-idioma** - Traducción automática con Google Translate

✅ **Buscador inteligente** - Encuentra rápidamente cualquier plato o bebida

✅ **Legalmente conforme** - Cumple con RGPD, LSSI y normativa española

✅ **PWA-ready** - Optimizado para funcionar como aplicación web progresiva

## 🛠️ Tecnologías Utilizadas

**Frontend:**
- HTML5 (Semántico y accesible)
- CSS3 (Grid, Flexbox, Variables CSS, Dark Mode)
- JavaScript Vanilla (ES6+, Async/Await, Fetch API)

**Servicios externos:**
- Google Sheets API (Actualización dinámica del menú)
- Google Translate (Multi-idioma)
- Restaurant Guru (Badge de premio)

**Hosting:**
- IONOS (Compatible con cualquier hosting estático)

**Diseño:**
- Responsive Design
- Mobile-first approach
- CSS clamp() para tipografía fluida
- Variables CSS para tematización

## 📁 Estructura del Proyecto

```
MenuBar-main/
├── index.html              # Página principal con la carta completa
├── aviso-legal.html        # Aviso legal (LSSI)
├── politica-privacidad.html # Política de privacidad (RGPD)
├── politica-cookies.html   # Política de cookies
├── style.css              # Estilos CSS con modo oscuro
├── script.js              # JavaScript principal (navegación, búsqueda, UI)
├── menu-connector.js      # Conexión con Google Sheets
├── logo.jpg               # Logo del restaurante
└── README.md              # Este archivo
```

## 🚀 Instalación y Despliegue

### Opción 1: Hosting Estático (IONOS, GitHub Pages, Netlify, etc.)

1. Sube todos los archivos a tu servidor
2. Asegúrate de que `index.html` esté en la raíz
3. Configura tu Google Sheet (ver sección Google Sheets)
4. ¡Listo!

### Opción 2: Desarrollo Local

```bash
# Clonar o descargar el proyecto
cd MenuBar-main

# Abrir con un servidor local (por ejemplo, con Python)
python -m http.server 8000

# Abrir en navegador
# http://localhost:8000
```

## 📊 Configuración de Google Sheets

El menú del día se actualiza automáticamente desde Google Sheets:

1. **ID de la hoja:** `1yL0V8gf9XVADb-FwI-kFyi9WcmMJEaPe4uDmaBxRKzA`
2. **Nombre de la hoja:** `MenuDia`
3. **Estructura de columnas:**
   - Columna A: Categoría (Primer plato, Segundo plato, Postre, Precio)
   - Columna B: Item (descripción o tipo)
   - Columna C: Texto (contenido a mostrar)

4. **Hacer la hoja pública:**
   - Archivo → Compartir → Publicar en la web
   - O: Compartir → Cualquier persona con el enlace puede ver

5. **Actualización:** El menú se actualiza automáticamente cada 30 minutos y al cargar la página

## 🎯 Funcionalidades Principales

### 🍽️ Navegación por Categorías
- Desayunos
- Cafés y bebidas calientes
- Almuerzo popular
- Menú del día (actualizado desde Google Sheets)
- Bocadillos
- Bebidas
- Vinos

### 🔍 Buscador Inteligente
- Búsqueda en tiempo real
- Resalta coincidencias
- Búsqueda en todos los campos (nombre, descripción, precio)

### 🌙 Modo Oscuro
- Toggle claro/oscuro
- Preferencia guardada en localStorage
- Transiciones suaves entre temas

### 🌍 Multi-idioma
- Google Translate integrado
- Soporte para múltiples idiomas
- Selector visible en el header

### 📱 Panel Lateral
- Información del restaurante
- Horarios
- Ubicación
- Redes sociales
- Opciones de compartir e imprimir

### ⚖️ Cumplimiento Legal
- Aviso Legal (LSSI)
- Política de Privacidad (RGPD)
- Política de Cookies
- Enlaces en el footer

## 🎨 Características de Diseño

- **Paleta de colores:** Naranja (#f59e0b) como color principal, grises neutros
- **Tipografía:** System fonts optimizadas para lectura
- **Layout:** CSS Grid para la carta, Flexbox para componentes
- **Animaciones:** Transiciones suaves y hover effects
- **Accesibilidad:** Contraste adecuado, tamaños de fuente legibles
- **Modo oscuro:** Fondo negro (#000000) con texto claro

## 💡 Personalización

### Cambiar información del restaurante

Edita la sección `#restaurant-info` en `index.html`:

```html
<section id="restaurant-info" style="display: none;">
    <h1>Tu Restaurante</h1>
    <p class="address">Tu dirección</p>
    <p class="phone">Tu teléfono</p>
    <!-- ... -->
</section>
```

### Modificar el menú estático

Edita las secciones correspondientes en `index.html`:
- Desayunos: `#desayunos`
- Cafés: `#cafe`
- Bocadillos: `#bocadillos`
- etc.

### Cambiar colores

Modifica las variables CSS en `style.css`:

```css
:root {
    --primary-color: #f59e0b;
    --hover-color: #d97706;
    /* ... */
}
```

### Conectar tu Google Sheet

Cambia el `sheetId` en `menu-connector.js`:

```javascript
constructor() {
    this.sheetId = 'TU_GOOGLE_SHEET_ID';
    // ...
}
```

## 🔧 Mantenimiento

### Actualizar el menú del día
1. Edita tu Google Sheet
2. Los cambios se reflejarán automáticamente en la web (máximo 30 min)
3. O usa el botón 📋 en la web para actualización manual

### Modificar precios o platos fijos
1. Edita `index.html`
2. Busca la sección correspondiente
3. Modifica el HTML
4. Guarda y sube el archivo

## 📱 Compatibilidad

✅ Chrome/Edge (últimas versiones)
✅ Firefox (últimas versiones)
✅ Safari (iOS 12+, macOS)
✅ Chrome Mobile (Android)
✅ Safari Mobile (iOS)

## 🔒 Seguridad y Privacidad

- No se recopilan datos personales de usuarios
- Solo cookies técnicas (modo oscuro, preferencias)
- Google Translate y Google Sheets con sus respectivas políticas
- Cumplimiento RGPD y LSSI
- Información completa en las páginas legales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE para más detalles.

## 💼 Caso de Uso Real

Este proyecto está actualmente en producción en **Café Restaurante L'Express**, Valencia, siendo utilizado por clientes reales diariamente.

---

⭐ **Si te gusta el proyecto, no dudes en darle una estrella en GitHub!** ⭐

*Desarrollado con ❤️ para Café Restaurante L'Express*
