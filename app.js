// ===== DATOS DEL MENÚ =====

// Menús con descripciones mejoradas
const menuDesayunos = [
  { 
    nombre: "Tostada con tomate", 
    precio: "2.10€", 
    descripcion: "Pan de masa madre tostado con tomate fresco rallado y aceite de oliva virgen extra",
    alergenos: ["gluten"]
  },
  { 
    nombre: "Tostada con aguacate", 
    precio: "4.10€", 
    descripcion: "Pan de masa madre tostado con aguacate, tomate cherry y semillas",
    alergenos: ["gluten"]
  },
  { 
    nombre: "Tostada con jamón", 
    precio: "4.10€", 
    descripcion: "Pan de masa madre tostado con jamón serrano de primera calidad",
    alergenos: ["gluten"]
  },
  { 
    nombre: "Tostada con atún", 
    precio: "4.10€", 
    descripcion: "Pan de masa madre tostado con atún, tomate y mayonesa casera", 
    alergenos: ["gluten", "pescado", "huevo"]
  },
  { 
    nombre: "Croissant mixto", 
    precio: "2.50€", 
    descripcion: "Croissant recién horneado con jamón york y queso fundido",
    alergenos: ["gluten", "lácteos"]
  },
];

const menuCafes = [
  { 
    nombre: "Café solo", 
    precio: "1.30€", 
    descripcion: "Espresso de café 100% arábica de tueste natural",
    alergenos: []
  },
  { 
    nombre: "Cortado", 
    precio: "1.60€", 
    descripcion: "Espresso con una pequeña cantidad de leche",
    alergenos: ["lácteos"]
  },
  { 
    nombre: "Café con leche", 
    precio: "1.80€", 
    descripcion: "Café espresso con leche cremada",
    alergenos: ["lácteos"]
  },
  { 
    nombre: "Café bombón", 
    precio: "1.70€", 
    descripcion: "Espresso con leche condensada",
    alergenos: ["lácteos"]
  },
  { 
    nombre: "Carajillo", 
    precio: "2.00€", 
    descripcion: "Café con un toque de brandy o licor",
    alergenos: []
  },
  { 
    nombre: "Cremaet", 
    precio: "2.20€", 
    descripcion: "Café tradicional valenciano con brandy flambeado, azúcar y canela",
    alergenos: []
  },
];

const menuAlmuerzoPopular = [
  { 
    nombre: "Almuerzo Popular", 
    precio: "5.20€", 
    descripcion: "Incluye dos ingredientes a elegir y una consumición (agua, cerveza o refresco). Disponible hasta las 12:00 o fin de existencias.",
    alergenos: ["Consultar según ingredientes"]
  },
  { 
    nombre: "½ Almuerzo Popular", 
    precio: "4.20€", 
    descripcion: "Incluye un ingrediente y una bebida. Oferta individual, no se puede compartir.",
    alergenos: ["Consultar según ingredientes"]
  },
];

const ingredientesAlmuerzo = [
  { nombre: "Tortilla de patata", alergenos: ["huevo"] },
  { nombre: "Tortilla de patata y cebolla", alergenos: ["huevo"] },
  { nombre: "Revuelto de ajos tiernos", alergenos: ["huevo"] },
  { nombre: "Revuelto de morcilla", alergenos: ["huevo"] },
  { nombre: "Revuelto de chistorra", alergenos: ["huevo"] },
  { nombre: "Longaniza", alergenos: [] },
  { nombre: "Morcilla", alergenos: [] },
  { nombre: "Chorizo", alergenos: [] },
  { nombre: "Lomo", alergenos: [] },
  { nombre: "Bacon", alergenos: [] }, 
  { nombre: "Jamón serrano", alergenos: [] },
  { nombre: "Sobrasada", alergenos: [] },
  { nombre: "Puntilla con ajetes", alergenos: ["pescado"] },
  { nombre: "Ensalada de atún", alergenos: ["pescado"] },
  { nombre: "Esgarraet", alergenos: ["pescado"] },
  { nombre: "Boquerones", alergenos: ["pescado"] },
  { nombre: "Huevo", alergenos: ["huevo"] },
  { nombre: "Patatas", alergenos: [] },
  { nombre: "Pisto", alergenos: [] },
  { nombre: "Pimiento", alergenos: [] },
  { nombre: "Habas", alergenos: ["legumbres"] },
  { nombre: "Panceta", alergenos: [] },
  { nombre: "Lacon", alergenos: [] }
];

const menuExtrasAlmuerzo = [
  { nombre: "Ingrediente extra", precio: "+0.50€", descripcion: "", alergenos: [] },
];

// Menús de tapas con descripciones mejoradas
const menuFinde = [
  { 
    nombre: "Ajo Arriero", 
    precio: "6.80€", 
    descripcion: "Pasta de bacalao tradicional con ajo, aceite de oliva y pan rallado",
    alergenos: ["pescado", "gluten"]
  },
  { 
    nombre: "Ensalada con frutos secos", 
    precio: "7.20€", 
    descripcion: "Ensalada de hojas verdes, tomate, cebolla, nueces y vinagreta casera",
    alergenos: ["frutos secos"]
  },
  { 
    nombre: "Hummus de garbanzo", 
    precio: "5.80€", 
    descripcion: "Crema de garbanzos con tahini, aceite de oliva y pimentón servida con pan de pita",
    alergenos: ["legumbres", "gluten", "sésamo"]
  },
  { 
    nombre: "Patatas bravas", 
    precio: "6.20€", 
    descripcion: "Patatas fritas caseras con salsa brava y alioli",
    alergenos: ["huevo"]
  },
  { 
    nombre: "Boquerones", 
    precio: "6.80€", 
    descripcion: "Boquerones marinados en vinagre con aceite de oliva y perejil",
    alergenos: ["pescado"]
  },
  { 
    nombre: "Esgarraet", 
    precio: "8.20€", 
    descripcion: "Pimiento asado con bacalao, ajo y aceite de oliva. Plato tradicional valenciano",
    alergenos: ["pescado"]
  },
  { 
    nombre: "Calamar romana", 
    precio: "9.90€", 
    descripcion: "Calamares frescos rebozados con harina de trigo y fritos",
    alergenos: ["gluten", "moluscos"]
  },
  { 
    nombre: "Pan con tomate", 
    precio: "2.10€/uni.", 
    descripcion: "Rebanada de pan rústico con tomate rallado, aceite de oliva y sal",
    alergenos: ["gluten"]
  },
];

// Menús de bocadillos con descripciones mejoradas
const menuBocadillos = [
  { 
    nombre: "Tortilla de patata", 
    precio: "6.30€", 
    descripcion: "Bocadillo con tortilla casera de patata",
    alergenos: ["gluten", "huevo"]
  },
  { 
    nombre: "Revuelto de ajos tiernos", 
    precio: "6.30€", 
    descripcion: "Bocadillo con huevos revueltos y ajos tiernos",
    alergenos: ["gluten", "huevo"]
  },
  { 
    nombre: "Revuelto de morcilla", 
    precio: "6.30€", 
    descripcion: "Bocadillo con huevos revueltos y morcilla desmigada",
    alergenos: ["gluten", "huevo"]
  },
  { 
    nombre: "Revuelto de chistorra", 
    precio: "6.30€", 
    descripcion: "Bocadillo con huevos revueltos y chistorra picada",
    alergenos: ["gluten", "huevo"]
  },
  { 
    nombre: "Lomo con queso", 
    precio: "7.10€", 
    descripcion: "Bocadillo con lomo de cerdo a la plancha y queso fundido",
    alergenos: ["gluten", "lácteos"]
  },
  { 
    nombre: "Pechuga con tomate", 
    precio: "7.10€", 
    descripcion: "Bocadillo con pechuga de pollo a la plancha y tomate fresco",
    alergenos: ["gluten"]
  },
  { 
    nombre: "Bacón con queso", 
    precio: "6.10€", 
    descripcion: "Bocadillo con bacon crujiente y queso fundido",
    alergenos: ["gluten", "lácteos"]
  },
  { 
    nombre: "Ensalada de atún", 
    precio: "6.70€", 
    descripcion: "Bocadillo con atún, lechuga, tomate y mayonesa",
    alergenos: ["gluten", "pescado", "huevo"]
  },
  { 
    nombre: "Longaniza y morcilla", 
    precio: "6.70€", 
    descripcion: "Bocadillo con longaniza y morcilla a la plancha",
    alergenos: ["gluten"]
  },
  { 
    nombre: "Jamón serrano", 
    precio: "5.90€", 
    descripcion: "Bocadillo con jamón serrano de primera calidad",
    alergenos: ["gluten"]
  },
  { 
    nombre: "Esgarraet", 
    precio: "7.10€", 
    descripcion: "Bocadillo de pimiento asado con bacalao, tradicional valenciano",
    alergenos: ["gluten", "pescado"]
  },
];

// Menús de bebidas con descripciones mejoradas
const menuBebidas = [
  { 
    nombre: "Coca cola", 
    precio: "2.50€", 
    descripcion: "Refresco de cola", 
    alergenos: []
  },
  { 
    nombre: "Cerveza ⅓", 
    precio: "2.50€", 
    descripcion: "Caña de cerveza Mahou", 
    alergenos: ["gluten"]
  },
  { 
    nombre: "Cerveza 1/5", 
    precio: "1.80€", 
    descripcion: "Botellín de cerveza Mahou", 
    alergenos: ["gluten"]
  },
  { 
    nombre: "Cerveza estrella ⅓", 
    precio: "3.00€", 
    descripcion: "Caña de cerveza Estrella Galicia", 
    alergenos: ["gluten"]
  },
  { 
    nombre: "Agua 33ml", 
    precio: "1.20€", 
    descripcion: "Botella pequeña de agua mineral", 
    alergenos: []
  },
  { 
    nombre: "Agua 1,25L", 
    precio: "2.00€", 
    descripcion: "Botella grande de agua mineral", 
    alergenos: []
  },
  { 
    nombre: "Tinto de Verano", 
    precio: "2.50€", 
    descripcion: "Vino tinto con gaseosa y limón", 
    alergenos: ["sulfitos"]
  },
];

// Menús de vinos con descripciones mejoradas
const menuVinos = [
  { 
    nombre: "Sangría", 
    precio: "7.80€", 
    descripcion: "Jarra de sangría tradicional con frutas", 
    alergenos: ["sulfitos"]
  },
  { 
    nombre: "Vino SM tinto", 
    precio: "7.20€", 
    descripcion: "Botella de vino tinto semi-crianza San Miguel", 
    alergenos: ["sulfitos"]
  },
  { 
    nombre: "Vino Boyante tinto", 
    precio: "12.00€", 
    descripcion: "Botella de vino tinto Boyante D.O. Valencia", 
    alergenos: ["sulfitos"]
  },
  { 
    nombre: "Vino Boyante blanco", 
    precio: "8.50€", 
    descripcion: "Botella de vino blanco Boyante D.O. Valencia", 
    alergenos: ["sulfitos"]
  },
  { 
    nombre: "Vino Rioja casa Baldes", 
    precio: "8.20€", 
    descripcion: "Botella de vino tinto D.O. Rioja", 
    alergenos: ["sulfitos"]
  },
];

// Menú del día actualizado
const menuDelDia = [
  { 
    nombre: "Primer plato", 
    opciones: [
      "Ensalada mixta con atún y huevo", 
      "Crema de calabaza con picatostes",
      "Arroz a la cubana"
    ],
    alergenos: ["varios según elección"]
  },
  { 
    nombre: "Segundo plato", 
    opciones: [
      "Pollo al horno con patatas", 
      "Bacalao con tomate",
      "Carrillada ibérica con puré"
    ],
    alergenos: ["varios según elección"]
  },
  { 
    nombre: "Postre", 
    opciones: [
      "Flan casero", 
      "Fruta del tiempo",
      "Helado"
    ],
    alergenos: ["varios según elección"]
  },
  { 
    nombre: "Completo", 
    precio: "12.50€", 
    descripcion: "Bebida y postre o cafe incluidos. Disponible de lunes a viernes 13:30-15:30."
  },
  {
    nombre: "½ Menú", 
    precio: "10.50€", 
    descripcion: "Incluye primer o segundo plato a elegir, bebida y postre o café. Disponible de lunes a viernes 13:30-15:30."
  }
];

// Estructura completa del menú
const menuCategories = [
  { id: "desayunos", titulo: "Desayunos", items: menuDesayunos },
  { id: "cafe", titulo: "Cafés", items: menuCafes },
  { id: "almuerzo", titulo: "Almuerzo Popular", items: menuAlmuerzoPopular },
  { id: "menu-dia", titulo: "Menú del día", items: menuDelDia },
  { id: "menu-finde", titulo: "Menú fin de Semana", items: menuFinde },
  { id: "bocadillos", titulo: "Bocadillos", items: menuBocadillos },
  { id: "bebidas", titulo: "Bebidas", items: menuBebidas },
  { id: "vinos", titulo: "Vinos", items: menuVinos },
];

// Información del restaurante
const restaurantInfo = {
  nombre: "Café Restaurante L'Express",
  direccion: "Plaça de Mossén Sorell, 4 bajo derecha, Ciutat Vella, 46003 Valencia",
  telefono: "963 91 78 63",
  horario: "Lunes a Viernes: 7:00 - 16:30 Sabado: 8:00 - 16:30",
  instagram: "@restaurante_lexpress",
  logoUrl: "/logo.png"
};

// Lista de alérgenos comunes para filtrar
const alergenos = [
  "gluten", 
  "lácteos", 
  "huevo", 
  "pescado", 
  "crustáceos", 
  "moluscos", 
  "frutos secos", 
  "cacahuete", 
  "soja", 
  "sésamo", 
  "apio", 
  "mostaza", 
  "sulfitos", 
  "altramuces",
  "legumbres"
];

// ===== ESTADO GLOBAL =====
let activeCategory = 'desayunos';
let activeAllergens = [];
let searchQuery = '';
let darkMode = localStorage.getItem('darkMode') === 'true';

// ===== FUNCIONES DE UTILIDAD =====

// Función para detectar el tipo de dispositivo
function getDeviceType() {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

// Función para aplicar modo oscuro
function applyDarkMode() {
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// ===== FUNCIONES DE RENDERIZADO =====

// Función para renderizar un elemento de menú
function renderMenuItem(item, showCategory = false) {
  // Verificar si el elemento debe ocultarse debido a filtros de alérgenos
  const shouldHide = activeAllergens.length > 0 && 
    item.alergenos && 
    activeAllergens.some(allergen => 
      item.alergenos.includes(allergen) || 
      item.alergenos.includes("varios según elección"));
  
  if (shouldHide) return '';
  
  return `
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col gap-1 relative menu-item fade-in">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <div class="flex-1">
          <div class="text-lg font-medium text-gray-800">${item.nombre}</div>
          ${showCategory ? `<div class="text-xs text-gray-500">Categoría: ${item.categoria}</div>` : ''}
        </div>
        ${item.precio ? `<div class="text-lg font-bold text-yellow-600 sm:text-xl">${item.precio}</div>` : ''}
      </div>
      ${item.descripcion ? `<div class="text-sm text-gray-500 mt-1 leading-relaxed">${item.descripcion}</div>` : ''}
      
      ${item.opciones ? `
        <div class="text-sm text-gray-600 mt-2">
          <span class="font-medium">Opciones:</span>
          <ul class="list-disc ml-5 mt-1 space-y-1">
            ${item.opciones.map(opcion => `<li>${opcion}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${item.alergenos && item.alergenos.length > 0 ? `
        <div class="text-xs text-gray-400 mt-2 flex flex-wrap gap-1">
          ${item.alergenos.map(alergeno => 
            `<span class="px-2 py-1 bg-gray-100 rounded-full">${alergeno}</span>`
          ).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

// Función para renderizar los ingredientes del almuerzo
function renderIngredientesAlmuerzo() {
  return `
    <div class="mb-10">
      <h3 class="text-xl font-semibold mb-4 text-gray-700">
        Ingredientes a elegir
      </h3>
      <div class="ingredientes-grid">
        ${ingredientesAlmuerzo.map(ingrediente => {
          // Verificar si el ingrediente debe ocultarse debido a filtros de alérgenos
          const shouldHide = activeAllergens.length > 0 && 
            ingrediente.alergenos && 
            activeAllergens.some(allergen => ingrediente.alergenos.includes(allergen));
          
          if (shouldHide) return '';
          
          return `
            <div class="bg-white rounded-lg p-3 text-sm border border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 menu-item">
              <span class="font-medium">${ingrediente.nombre}</span>
              ${ingrediente.alergenos.length > 0 ? `
                <span class="text-xs px-2 py-1 bg-gray-100 rounded-full self-start sm:self-center">${ingrediente.alergenos.join(', ')}</span>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
      <div class="mt-6">
        <h4 class="text-lg font-medium mb-3 text-gray-700">Extras</h4>
        <div class="grid gap-2">
          ${menuExtrasAlmuerzo.map(extra => `
            <div class="bg-white rounded-lg p-3 text-sm border border-gray-200 flex justify-between items-center menu-item">
              <span class="font-medium">${extra.nombre}</span>
              <span class="text-gray-500 font-medium">${extra.precio}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Función para renderizar una categoría de menú
function renderMenuCategory(category) {
  // Manejar el formato especial para el menú del día
  if (category.id === 'menu-dia') {
    return `
      <div class="mb-10 menu-especial">
        <h2 class="text-2xl font-semibold mb-6 text-gray-900 border-b pb-3 border-gray-200 sticky top-0 bg-gray-50 z-10">
          ${category.titulo}
        </h2>
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 menu-del-dia-container fade-in">
          <div class="mb-6">
            <h3 class="text-lg font-medium text-gray-800 mb-4">Opciones disponibles</h3>
            
            <!-- Mostrar las opciones de primeros, segundos y postres -->
            ${category.items.slice(0, 3).map(item => `
              <div class="mb-6">
                <h4 class="font-medium text-gray-700 mb-3 text-base">${item.nombre}:</h4>
                <ul class="list-disc ml-5 text-sm text-gray-600 space-y-1">
                  ${item.opciones.map(opcion => `<li>${opcion}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
            
            <!-- Mostrar los precios del menú completo y medio menú -->
            <div class="border-t pt-6 mt-6">
              <h4 class="font-medium text-gray-700 mb-4">Precios</h4>
              ${category.items.slice(3).map(item => `
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 p-4 bg-gray-50 rounded-lg">
                  <div class="flex-1">
                    <div class="text-base font-medium text-gray-800">${item.nombre}</div>
                    <div class="text-sm text-gray-500 mt-1 leading-relaxed">${item.descripcion}</div>
                  </div>
                  <div class="text-xl font-bold text-yellow-600 mt-2 sm:mt-0 sm:ml-4">${item.precio}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Para la categoría de almuerzo popular
  if (category.id === 'almuerzo') {
    return `
      <div class="mb-10 menu-especial">
        <h2 class="text-2xl font-semibold mb-6 text-gray-900 border-b pb-3 border-gray-200 sticky top-0 bg-gray-50 z-10">
          ${category.titulo}
        </h2>
        <div class="almuerzo-container">
          <div class="grid gap-4 mb-8">
            ${category.items.map(item => renderMenuItem(item)).join('')}
          </div>
          ${renderIngredientesAlmuerzo()}
        </div>
      </div>
    `;
  }
  
  // Para las demás categorías
  return `
    <div class="mb-10">
      <h2 class="text-2xl font-semibold mb-6 text-gray-900 border-b pb-3 border-gray-200 sticky top-0 bg-gray-50 z-10">
        ${category.titulo}
      </h2>
      <div class="grid gap-4">
        ${category.items.map(item => renderMenuItem(item)).join('')}
      </div>
    </div>
  `;
}

// ===== FUNCIONES DE INTERACCIÓN =====

// Función para manejar la búsqueda
function handleSearch() {
  const query = document.getElementById('search-input').value.toLowerCase();
  searchQuery = query;
  
  if (query.trim() === '') {
    // Si no hay búsqueda, mostrar la categoría actual
    changeCategory(activeCategory);
    return;
  }
  
  // Buscar en todas las categorías
  const results = [];
  menuCategories.forEach(category => {
    category.items.forEach(item => {
      // Buscar en nombre y descripción
      if (item.nombre.toLowerCase().includes(query) || 
          (item.descripcion && item.descripcion.toLowerCase().includes(query))) {
        results.push({...item, categoria: category.titulo});
      }
    });
  });
  
  // Mostrar resultados de búsqueda
  const contentElement = document.getElementById('category-content');
  
  if (results.length === 0) {
    contentElement.innerHTML = `
      <div class="text-center py-16">
        <div class="text-6xl mb-4">🔍</div>
        <p class="text-gray-500 text-lg">No se encontraron resultados para "${query}"</p>
        <p class="text-gray-400 text-sm mt-2">Intenta con otros términos de búsqueda</p>
      </div>
    `;
  } else {
    contentElement.innerHTML = `
      <div class="mb-10">
        <h2 class="text-2xl font-semibold mb-6 text-gray-900 border-b pb-3 border-gray-200">
          Resultados de búsqueda (${results.length})
        </h2>
        <div class="grid gap-4">
          ${results.map(item => renderMenuItem(item, true)).join('')}
        </div>
      </div>
    `;
    
    // Actualizar los botones de categoría
    updateCategoryButtons('');
  }
}

// Función para cambiar de categoría
function changeCategory(categoryId) {
  // Actualizar el estado
  activeCategory = categoryId;
  
  // Actualizar los botones de navegación
  updateCategoryButtons(categoryId);
  
  // Limpiar la búsqueda cuando se cambia de categoría
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
    searchQuery = '';
  }
  
  // Obtener la categoría actual
  const currentCategory = menuCategories.find(cat => cat.id === categoryId);
  
  // Renderizar el contenido de la categoría
  const contentElement = document.getElementById('category-content');
  if (contentElement && currentCategory) {
    contentElement.innerHTML = renderMenuCategory(currentCategory);
  }
}

// Función para actualizar los botones de categoría
function updateCategoryButtons(categoryId) {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(button => {
    if (button.dataset.category === categoryId) {
      button.classList.remove('bg-gray-200', 'text-gray-700');
      button.classList.add('bg-yellow-500', 'text-white', 'font-medium');
    } else {
      button.classList.remove('bg-yellow-500', 'text-white', 'font-medium');
      button.classList.add('bg-gray-200', 'text-gray-700');
    }
  });
}

// Función para actualizar el contador de filtros de alérgenos
function updateAllergenFilterCount() {
  const filterCountElement = document.querySelector('.filter-count');
  const toggleButton = document.getElementById('allergen-toggle');
  
  if (filterCountElement && toggleButton) {
    if (activeAllergens.length > 0) {
      filterCountElement.textContent = `(${activeAllergens.length})`;
      toggleButton.classList.add('bg-yellow-500', 'text-white');
      toggleButton.classList.remove('bg-gray-200', 'text-gray-700');
    } else {
      filterCountElement.textContent = '';
      toggleButton.classList.remove('bg-yellow-500', 'text-white');
      toggleButton.classList.add('bg-gray-200', 'text-gray-700');
    }
  }
}

// Función para manejar el panel lateral
function toggleSidePanel(open = null) {
  const panel = document.getElementById('side-panel');
  const overlay = document.getElementById('overlay');
  const deviceType = getDeviceType();
  
  if (!panel || !overlay) return;
  
  if (open === null) {
    open = !panel.classList.contains('open');
  }
  
  if (open) {
    panel.classList.add('open');
    panel.classList.add('slide-in-left');
    overlay.style.opacity = '0.5';
    overlay.style.pointerEvents = 'auto';
    
    // En móvil, prevenir scroll del body
    if (deviceType === 'mobile') {
      document.body.style.overflow = 'hidden';
    }
  } else {
    panel.classList.remove('open');
    panel.classList.remove('slide-in-left');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    
    // Restaurar scroll del body
    document.body.style.overflow = '';
  }
}

// Función para manejar cambios de orientación y resize
function handleResize() {
  const deviceType = getDeviceType();
  const panel = document.getElementById('side-panel');
  
  // Cerrar panel si cambiamos a desktop
  if (deviceType === 'desktop' && panel && panel.classList.contains('open')) {
    toggleSidePanel(false);
  }
  
  // Actualizar estilos específicos por dispositivo
  updateDeviceSpecificStyles(deviceType);
}

// Función para actualizar estilos específicos del dispositivo
function updateDeviceSpecificStyles(deviceType) {
  const root = document.documentElement;
  
  // Remover clases anteriores
  root.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
  
  // Añadir clase actual
  root.classList.add(`device-${deviceType}`);
  
  // Ajustar la navegación de categorías según el dispositivo
  const categoryNav = document.getElementById('category-nav');
  if (categoryNav) {
    if (deviceType === 'mobile') {
      categoryNav.style.justifyContent = 'flex-start';
    } else {
      categoryNav.style.justifyContent = 'center';
    }
  }
}

// Función para manejar el desplazamiento y mostrar el botón de volver arriba
function handleScroll() {
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  }
}

// Función para volver arriba
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Función para compartir el menú
function shareMenu() {
  if (navigator.share) {
    navigator.share({
      title: `Menú de ${restaurantInfo.nombre}`,
      text: `Echa un vistazo a la carta de ${restaurantInfo.nombre}`,
      url: window.location.href
    })
    .then(() => console.log('Menú compartido con éxito'))
    .catch((error) => console.log('Error al compartir:', error));
  } else {
    // Fallback para navegadores que no admiten la API Web Share
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Enlace copiado al portapapeles');
    }).catch(() => {
      alert(`Comparte esta página: ${url}`);
    });
  }
}

// Función para cambiar entre modo claro y oscuro
function toggleTheme() {
  darkMode = !darkMode;
  
  // Guardar preferencia en localStorage
  localStorage.setItem('darkMode', darkMode);
  
  // Aplicar modo oscuro
  applyDarkMode();
  
  // Actualizar el botón
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.textContent = darkMode ? '☀️' : '🌙';
  }
}

// ===== FUNCIÓN PRINCIPAL DE RENDERIZADO =====

function renderApp() {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Elemento root no encontrado');
    return;
  }
  
  // Aplicar modo oscuro inicial
  applyDarkMode();
  
  // Crear la estructura principal
  rootElement.innerHTML = `
    <main class="max-w-2xl mx-auto py-6 bg-gray-50 min-h-screen">
      <header class="text-center mb-8">
        <div class="flex items-center justify-between mb-4">
          <button id="menu-btn" class="text-xl p-2 rounded hover:bg-gray-200 lg:hidden transition-all">
            <span class="menu-icon">≡</span>
          </button>
          
          <!-- Información del restaurante en desktop -->
          <div class="desktop-only hidden lg:block text-left">
            <h2 class="text-lg font-semibold text-gray-800">${restaurantInfo.nombre}</h2>
            <p class="text-sm text-gray-600">${restaurantInfo.telefono}</p>
          </div>
          
          <div class="theme-toggle">
            <button id="theme-toggle-btn" class="text-xl p-2 rounded hover:bg-gray-200 transition-all">
              ${darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
        
        <!-- Logo responsive -->
        <img
          src="${restaurantInfo.logoUrl}"
          alt="Logo ${restaurantInfo.nombre}"
          class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full mx-auto shadow-lg border"
          onerror="this.src='logo.png'; this.onerror=null;"
        />
        
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-gray-900">
          ${restaurantInfo.nombre}
        </h1>
        <p class="text-gray-600 mb-2 text-sm md:text-base">Carta digital</p>
        
        <!-- Barra de búsqueda responsive -->
        <div class="search-container mx-auto max-w-xs md:max-w-sm lg:max-w-md mb-4 mt-4">
          <input 
            type="text" 
            id="search-input" 
            placeholder="Buscar en el menú..." 
            class="w-full px-4 py-2 text-sm md:text-base rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          >
        </div>
        
        <!-- Filtro de alérgenos con mejor responsive -->
        <div class="allergen-filter mb-4">
          <button id="allergen-toggle" class="text-xs md:text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-700 transition-all">
            <span class="mobile-only">Filtros</span>
            <span class="tablet-only desktop-only">Filtrar alérgenos</span>
            <span class="filter-count"></span>
          </button>
          <div id="allergen-dropdown" class="hidden mt-2 p-4 bg-white rounded-lg shadow-lg text-left max-w-md mx-auto">
            <div class="grid grid-cols-2 gap-2">
              ${alergenos.map(alergeno => `
                <div class="flex items-center">
                  <input type="checkbox" id="allergen-${alergeno}" data-allergen="${alergeno}" class="allergen-checkbox mr-2">
                  <label for="allergen-${alergeno}" class="text-sm cursor-pointer">${alergeno.charAt(0).toUpperCase() + alergeno.slice(1)}</label>
                </div>
              `).join('')}
            </div>
            <div class="mt-4 flex justify-between">
              <button id="clear-allergens" class="text-xs px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-all">Borrar filtros</button>
              <button id="close-allergens" class="text-xs px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all">Aplicar</button>
            </div>
          </div>
        </div>
        
        <!-- Navigation Pills con scroll suave -->
        <div class="category-nav-container overflow-x-auto md:overflow-x-visible whitespace-nowrap pb-2 mb-2">
          <div class="flex gap-2 px-2 md:justify-center md:flex-wrap" id="category-nav">
            ${menuCategories.map(category => `
              <button
                data-category="${category.id}"
                class="category-btn px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-yellow-500 text-white font-medium"
                    : "bg-gray-200 text-gray-700"
                }"
              >
                ${category.titulo}
              </button>
            `).join('')}
          </div>
        </div>
      </header>

      <!-- Panel lateral mejorado -->
      <div id="side-panel" class="fixed top-0 left-0 h-full w-0 bg-white shadow-lg z-50 transition-all duration-300 overflow-hidden">
        <button id="close-panel" class="absolute top-2 right-2 text-xl p-2 z-50 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-all">&times;</button>
        
        <div class="p-4 pt-16 h-full overflow-y-auto">
          <h2 class="text-xl md:text-2xl font-bold mb-4 text-gray-800">${restaurantInfo.nombre}</h2>
          
          <div class="info-container space-y-4">
            <div class="flex items-start">
              <span class="icon mr-3 mt-1 text-lg">📍</span>
              <span class="text-sm md:text-base text-gray-700">${restaurantInfo.direccion}</span>
            </div>
            <div class="flex items-center">
              <span class="icon mr-3 text-lg">📞</span>
              <a href="tel:${restaurantInfo.telefono}" class="text-blue-600 text-sm md:text-base hover:underline">${restaurantInfo.telefono}</a>
            </div>
            <div class="flex items-start">
              <span class="icon mr-3 mt-1 text-lg">🕒</span>
              <span class="text-sm md:text-base text-gray-700">${restaurantInfo.horario}</span>
            </div>
            <div class="flex items-center">
              <span class="icon mr-3 text-lg">📱</span>
              <a href="https://www.instagram.com/${restaurantInfo.instagram.substring(1)}" target="_blank" class="text-blue-600 text-sm md:text-base hover:underline">${restaurantInfo.instagram}</a>
            </div>
          </div>
          
          <hr class="my-6">
          
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Opciones</h3>
          <ul class="space-y-2">
            <li>
              <button id="share-menu" class="flex items-center w-full text-left p-3 rounded hover:bg-gray-100 transition-all">
                <span class="icon mr-3 text-lg">📤</span>
                <span class="text-sm md:text-base">Compartir carta</span>
              </button>
            </li>
            <li class="desktop-only">
              <button id="print-menu" class="flex items-center w-full text-left p-3 rounded hover:bg-gray-100 transition-all">
                <span class="icon mr-3 text-lg">🖨️</span>
                <span class="text-sm md:text-base">Imprimir menú</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Overlay para cuando el panel lateral está abierto -->
      <div id="overlay" class="fixed inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-300 z-40"></div>

      <!-- Contenedor para los productos -->
      <div id="category-content" class="min-h-300">
        <!-- El contenido de las categorías se cargará aquí -->
      </div>
      
      <!-- Botón de volver arriba responsive -->
      <button id="back-to-top" class="fixed bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-yellow-500 text-white rounded-full shadow-md hidden transition-all duration-300 hover:bg-yellow-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400">
        <span class="text-lg md:text-xl">↑</span>
      </button>

      <!-- Footer responsive -->
      <footer class="text-center text-xs md:text-sm text-gray-500 mt-16 pb-10 px-4">
        <p class="mb-2 leading-relaxed">${restaurantInfo.direccion}</p>
        <p class="mb-1">Menú actualizado diariamente</p>
        <p class="text-xs mt-4 leading-relaxed max-w-2xl mx-auto">
          ESTE ESTABLECIMIENTO SIRVE ALIMENTOS QUE PUEDEN CONTENER ALÉRGENOS. 
          DISPONE DE INFORMACIÓN DETALLADA EN NUESTRA CARTA O PUEDE CONSULTAR AL PERSONAL.
        </p>
        
        <!-- Links adicionales en desktop -->
        <div class="desktop-only mt-6 space-x-4">
          <a href="#" class="text-blue-600 hover:underline">Política de privacidad</a>
          <a href="#" class="text-blue-600 hover:underline">Términos de uso</a>
          <a href="#" class="text-blue-600 hover:underline">Contacto</a>
        </div>
      </footer>
    </main>
  `;
}

// ===== INICIALIZACIÓN DE EVENT LISTENERS =====

function initializeEventListeners() {
  // Event listener para búsqueda
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  
  // Event listener para el filtro de alérgenos
  const allergenToggle = document.getElementById('allergen-toggle');
  if (allergenToggle) {
    allergenToggle.addEventListener('click', function() {
      const dropdown = document.getElementById('allergen-dropdown');
      if (dropdown) {
        dropdown.classList.toggle('hidden');
      }
    });
  }
  
  // Event listener para los checkboxes de alérgenos
  const allergenCheckboxes = document.querySelectorAll('.allergen-checkbox');
  allergenCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        if (!activeAllergens.includes(this.dataset.allergen)) {
          activeAllergens.push(this.dataset.allergen);
        }
      } else {
        activeAllergens = activeAllergens.filter(a => a !== this.dataset.allergen);
      }
      updateAllergenFilterCount();
    });
  });
  
  // Event listener para limpiar filtros de alérgenos
  const clearAllergensBtn = document.getElementById('clear-allergens');
  if (clearAllergensBtn) {
    clearAllergensBtn.addEventListener('click', function() {
      activeAllergens = [];
      allergenCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      updateAllergenFilterCount();
      const dropdown = document.getElementById('allergen-dropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
      changeCategory(activeCategory);
    });
  }
  
  // Event listener para cerrar el dropdown de alérgenos y aplicar filtros
  const closeAllergensBtn = document.getElementById('close-allergens');
  if (closeAllergensBtn) {
    closeAllergensBtn.addEventListener('click', function() {
      const dropdown = document.getElementById('allergen-dropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
      changeCategory(activeCategory);
    });
  }
  
  // Event listeners para el panel lateral
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      toggleSidePanel(true);
    });
  }
  
  const closePanel = document.getElementById('close-panel');
  if (closePanel) {
    closePanel.addEventListener('click', function() {
      toggleSidePanel(false);
    });
  }
  
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', function() {
      toggleSidePanel(false);
    });
  }
  
  // Event listener para compartir
  const shareMenuBtn = document.getElementById('share-menu');
  if (shareMenuBtn) {
    shareMenuBtn.addEventListener('click', shareMenu);
  }
  
  // Event listener para imprimir (desktop)
  const printMenuBtn = document.getElementById('print-menu');
  if (printMenuBtn) {
    printMenuBtn.addEventListener('click', function() {
      window.print();
    });
  }
  
  // Event listener para el botón de volver arriba
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
  }
  
  // Event listener para el cambio de tema
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  
  // Event listener para el scroll
  window.addEventListener('scroll', handleScroll);
  
  // Event listener para resize y orientación
  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', function() {
    setTimeout(handleResize, 100);
  });
  
  // Event listener para escape key (cerrar panel)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      toggleSidePanel(false);
      const dropdown = document.getElementById('allergen-dropdown');
      if (dropdown && !dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
      }
    }
  });
  
  // Agregar event listeners a los botones de categoría
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      changeCategory(this.dataset.category);
    });
  });
  
  // Detectar gestos de swipe en móvil
  if ('ontouchstart' in window) {
    let startX = 0;
    let currentX = 0;
    let tracking = false;
    
    document.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      tracking = true;
    });
    
    document.addEventListener('touchmove', function(e) {
      if (!tracking) return;
      currentX = e.touches[0].clientX;
    });
    
    document.addEventListener('touchend', function(e) {
      if (!tracking) return;
      tracking = false;
      
      const diffX = currentX - startX;
      const panel = document.getElementById('side-panel');
      
      // Swipe desde la izquierda para abrir
      if (startX < 50 && diffX > 100 && panel && !panel.classList.contains('open')) {
        toggleSidePanel(true);
      }
      
      // Swipe hacia la izquierda para cerrar
      if (diffX < -100 && panel && panel.classList.contains('open')) {
        toggleSidePanel(false);
      }
    });
  }
}

// ===== INICIALIZACIÓN PRINCIPAL =====

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  try {
    renderApp();
    initializeEventListeners();
    handleResize(); // Configuración inicial
    
    // Mostrar la categoría inicial
    changeCategory(activeCategory);
    
    // Inicializar el contador de filtros
    updateAllergenFilterCount();
    
    console.log('Aplicación inicializada correctamente');
  } catch (error) {
    console.error('Error al inicializar la aplicación:', error);
  }
});