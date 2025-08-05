// ===== VARIABLES GLOBALES =====
let activeCategory = 'desayunos';
let activeAllergens = [];
let darkMode = localStorage.getItem('darkMode') === 'true';

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Aplicar modo oscuro inicial
    applyDarkMode();
    
    // Configurar event listeners
    setupEventListeners();
    
    // Mostrar categoría inicial
    showCategory(activeCategory);
    
    // Configurar responsive
    handleResize();
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Navegación de categorías
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            showCategory(category);
            updateActiveButton(this);
        });
    });
    
    // Búsqueda - configuración simple
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            handleSearch.call(e.target);
        });
    }
    
    // Panel lateral
    const menuBtn = document.getElementById('menu-btn');
    const closePanel = document.getElementById('close-panel');
    const overlay = document.getElementById('overlay');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => toggleSidePanel(true));
    }
    
    if (closePanel) {
        closePanel.addEventListener('click', () => toggleSidePanel(false));
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => toggleSidePanel(false));
    }
    
    // Filtro de alérgenos
    const allergenToggle = document.getElementById('allergen-toggle');
    const allergenDropdown = document.getElementById('allergen-dropdown');
    const clearFilters = document.getElementById('clear-filters');
    const applyFilters = document.getElementById('apply-filters');
    
    if (allergenToggle) {
        allergenToggle.addEventListener('click', () => {
            allergenDropdown.classList.toggle('hidden');
        });
    }
    
    if (clearFilters) {
        clearFilters.addEventListener('click', clearAllergenFilters);
    }
    
    if (applyFilters) {
        applyFilters.addEventListener('click', applyAllergenFilters);
    }
    
    // Checkboxes de alérgenos
    const allergenCheckboxes = document.querySelectorAll('.allergen-grid input[type="checkbox"]');
    allergenCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateAllergenSelection);
    });
    
    // Modo oscuro
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Botón volver arriba
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
    }
    
    // Scroll para mostrar botón volver arriba
    window.addEventListener('scroll', handleScroll);
    
    // Resize para responsive
    window.addEventListener('resize', handleResize);
    
    // Compartir y imprimir
    const shareBtn = document.getElementById('share-menu');
    const printBtn = document.getElementById('print-menu');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', shareMenu);
    }
    
    if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
    }
    
    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', function(event) {
        const allergenFilter = document.querySelector('.allergen-filter');
        const dropdown = document.getElementById('allergen-dropdown');
        
        if (allergenFilter && dropdown && !allergenFilter.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
    
    // Esc para cerrar panel y dropdowns
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            toggleSidePanel(false);
            document.getElementById('allergen-dropdown').classList.add('hidden');
        }
    });
}

// ===== FUNCIONES DE NAVEGACIÓN =====
function showCategory(categoryId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(categoryId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // Actualizar categoría activa
    activeCategory = categoryId;
    
    // Aplicar filtros si están activos
    if (activeAllergens.length > 0) {
        applyAllergenFilters();
    }
    
    // Limpiar búsqueda
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
}

function updateActiveButton(activeBtn) {
    // Remover clase active de todos los botones
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Agregar clase active al botón seleccionado
    activeBtn.classList.add('active');
}

// ===== FUNCIONES DE BÚSQUEDA =====
function handleSearch() {
    const searchTerm = this.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // Si no hay búsqueda, mostrar todos los items de la categoría actual
        showAllItems();
        return;
    }
    
    // Ocultar todas las secciones primero
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Buscar en todos los items y mostrar resultados
    let hasResults = false;
    
    sections.forEach(section => {
        const items = section.querySelectorAll('.menu-item, .ingredient');
        let sectionHasResults = false;
        
        items.forEach(item => {
            // Buscar en nombre del plato
            const nameElement = item.querySelector('h3') || item.querySelector('span');
            const itemName = nameElement ? nameElement.textContent.toLowerCase() : '';
            
            // Buscar en descripción
            const descElement = item.querySelector('.description');
            const itemDescription = descElement ? descElement.textContent.toLowerCase() : '';
            
            // Si coincide con la búsqueda, mostrar el item
            if (itemName.includes(searchTerm) || itemDescription.includes(searchTerm)) {
                item.style.display = 'block';
                sectionHasResults = true;
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Mostrar sección si tiene resultados
        if (sectionHasResults) {
            section.classList.add('active');
        }
    });
    
    // Si no hay resultados, mostrar mensaje
    if (!hasResults) {
        showNoResults(searchTerm);
    } else {
        // Remover mensaje de "no results" si existe
        const existingMessage = document.getElementById('no-results');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
}

function showAllItems() {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        const items = section.querySelectorAll('.menu-item, .ingredient');
        items.forEach(item => {
            item.style.display = 'block';
        });
    });
    
    showCategory(activeCategory);
}

function showNoResults(searchTerm) {
    const mainContent = document.getElementById('main-content');
    const existingMessage = document.getElementById('no-results');
    
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const noResultsDiv = document.createElement('div');
    noResultsDiv.id = 'no-results';
    noResultsDiv.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">No se encontraron resultados</h3>
            <p>No hay elementos que coincidan con "${searchTerm}"</p>
            <button onclick="clearSearch()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #f59e0b; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">
                Ver todo el menú
            </button>
        </div>
    `;
    
    mainContent.appendChild(noResultsDiv);
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');
    
    if (searchInput) {
        searchInput.value = '';
    }
    
    if (noResults) {
        noResults.remove();
    }
    
    showAllItems();
}

// ===== FUNCIONES DE FILTROS DE ALÉRGENOS =====
function updateAllergenSelection() {
    const checkedBoxes = document.querySelectorAll('.allergen-grid input[type="checkbox"]:checked');
    activeAllergens = Array.from(checkedBoxes).map(box => box.value);
    updateFilterCount();
}

function updateFilterCount() {
    const filterCount = document.getElementById('filter-count');
    const allergenToggle = document.getElementById('allergen-toggle');
    
    if (activeAllergens.length > 0) {
        filterCount.textContent = `(${activeAllergens.length})`;
        allergenToggle.classList.add('active');
    } else {
        filterCount.textContent = '';
        allergenToggle.classList.remove('active');
    }
}

function clearAllergenFilters() {
    // Desmarcar todos los checkboxes
    const checkboxes = document.querySelectorAll('.allergen-grid input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Limpiar array de alérgenos activos
    activeAllergens = [];
    
    // Actualizar contador
    updateFilterCount();
    
    // Mostrar todos los items
    showAllItems();
    
    // Cerrar dropdown
    document.getElementById('allergen-dropdown').classList.add('hidden');
}

function applyAllergenFilters() {
    if (activeAllergens.length === 0) {
        showAllItems();
        document.getElementById('allergen-dropdown').classList.add('hidden');
        return;
    }
    
    // Filtrar items en la sección activa
    const activeSection = document.querySelector('.menu-section.active');
    if (!activeSection) return;
    
    const items = activeSection.querySelectorAll('.menu-item, .ingredient');
    
    items.forEach(item => {
        const itemAllergens = item.dataset.allergens || '';
        const allergenList = itemAllergens.split(',').map(a => a.trim()).filter(a => a);
        
        // Verificar si el item contiene algún alérgeno filtrado
        const hasFilteredAllergen = activeAllergens.some(allergen => 
            allergenList.includes(allergen)
        );
        
        if (hasFilteredAllergen) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
    
    // Cerrar dropdown
    document.getElementById('allergen-dropdown').classList.add('hidden');
}

// ===== FUNCIONES DE PANEL LATERAL =====
function toggleSidePanel(show) {
    const sidePanel = document.getElementById('side-panel');
    const overlay = document.getElementById('overlay');
    
    if (show) {
        sidePanel.classList.add('open');
        overlay.classList.add('active');
        // Solo prevenir scroll en móvil cuando el panel esté abierto
        if (window.innerWidth < 768) {
            document.body.style.overflow = 'hidden';
        }
    } else {
        sidePanel.classList.remove('open');
        overlay.classList.remove('active');
        // Restaurar scroll normal
        document.body.style.overflow = '';
    }
}

// ===== FUNCIONES DE TEMA =====
function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    applyDarkMode();
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = darkMode ? '☀️' : '🌙';
    }
}

function applyDarkMode() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = darkMode ? '☀️' : '🌙';
    }
}

// ===== FUNCIONES DE SCROLL =====
function handleScroll() {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== FUNCIONES RESPONSIVE =====
function handleResize() {
    const width = window.innerWidth;
    
    // Cerrar panel lateral en desktop
    if (width >= 1024) {
        toggleSidePanel(false);
    }
    
    // Actualizar estilos responsive
    updateResponsiveStyles(width);
}

function updateResponsiveStyles(width) {
    const body = document.body;
    
    // Remover clases anteriores
    body.classList.remove('mobile', 'tablet', 'desktop');
    
    // Agregar clase según tamaño
    if (width < 768) {
        body.classList.add('mobile');
    } else if (width < 1024) {
        body.classList.add('tablet');
    } else {
        body.classList.add('desktop');
    }
}

// ===== FUNCIONES DE COMPARTIR =====
function shareMenu() {
    if (navigator.share) {
        navigator.share({
            title: 'Café Restaurante L\'Express - Carta Digital',
            text: 'Echa un vistazo a la carta de Café Restaurante L\'Express',
            url: window.location.href
        })
        .then(() => console.log('Menú compartido con éxito'))
        .catch((error) => console.log('Error al compartir:', error));
    } else {
        // Fallback para navegadores que no admiten la API Web Share
        const url = window.location.href;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                showNotification('Enlace copiado al portapapeles');
            }).catch(() => {
                showNotification(`Comparte esta página: ${url}`);
            });
        } else {
            showNotification(`Comparte esta página: ${url}`);
        }
    }
}

function showNotification(message) {
    // Crear notificación temporal
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #1f2937;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 1000;
        font-size: 0.875rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 3000);
}

// ===== FUNCIONES DE ACCESIBILIDAD =====
// Navegación por teclado para botones de categoría
document.addEventListener('keydown', function(event) {
    if (event.target.classList.contains('category-btn')) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            event.target.click();
        }
    }
});

// ===== FUNCIONES DE UTILIDAD =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimizar la búsqueda con debounce
const debouncedSearch = debounce(function(event) {
    handleSearch.call(event.target);
}, 300);

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Configurar búsqueda con debounce después de la inicialización
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debouncedSearch);
    }
});

// ===== FUNCIONES DE PERFORMANCE =====
// Lazy loading para imágenes (si hay más en el futuro)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== INICIALIZACIÓN FINAL =====
// Verificar si hay elementos críticos y mostrar error si faltan
function checkCriticalElements() {
    const criticalElements = [
        'main-content',
        'desayunos',
        'category-nav'
    ];
    
    const missing = criticalElements.filter(id => !document.getElementById(id));
    
    if (missing.length > 0) {
        console.error('Elementos críticos faltantes:', missing);
        return false;
    }
    
    return true;
}

// Ejecutar verificación después de la carga
document.addEventListener('DOMContentLoaded', function() {
    if (!checkCriticalElements()) {
        console.error('Error: No se pudieron cargar todos los elementos necesarios');
    }
});
