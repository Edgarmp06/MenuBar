// custom-menu-updater.js - Adaptado a la estructura específica de L'Express
// Google Sheet ID: 1yL0V8gf9XVADb-FwI-kFyi9WcmMJEaPe4uDmaBxRKzA

class CustomMenuUpdater {
    constructor() {
        this.sheetId = '1yL0V8gf9XVADb-FwI-kFyi9WcmMJEaPe4uDmaBxRKzA';
        this.baseUrl = `https://docs.google.com/spreadsheets/d/${this.sheetId}/gviz/tq?tqx=out:json&sheet=`;
    }

    // Obtener datos de Google Sheets
    async fetchSheetData(sheetName) {
        try {
            const response = await fetch(`${this.baseUrl}${sheetName}`);
            const text = await response.text();
            
            // Extraer JSON de la respuesta de Google Sheets
            const jsonText = text.substring(47).slice(0, -2);
            const data = JSON.parse(jsonText);
            
            // Procesar filas (saltar header)
            const rows = data.table.rows || [];
            return rows.slice(1).map(row => {
                const cells = row.c || [];
                return cells.map(cell => cell ? String(cell.v) : '');
            }).filter(row => row.some(cell => cell !== ''));
            
        } catch (error) {
            console.error(`Error al obtener ${sheetName}:`, error);
            return [];
        }
    }

    // Actualizar menú del día - ADAPTADO a tu estructura
    async updateMenuDia() {
        const data = await this.fetchSheetData('MenuDia');
        const menu = { primeros: [], segundos: [], postres: [], precios: {} };

        console.log('📊 Datos recibidos de MenuDia:', data);

        // Si no hay datos, mostrar mensaje de error y salir
        if (!data || data.length === 0) {
            console.warn('⚠️ No se pudieron cargar datos del menú del día');
            this.showErrorMessage('#menu-dia', 'Menú del día no disponible temporalmente');
            return;
        }

        // Procesar datos según TU estructura
        data.forEach(row => {
            if (row.length >= 3) {
                const [categoria, item, texto] = row;

                // Mapear TUS categorías a las que espera el código
                if (categoria.includes('Primer plato')) {
                    menu.primeros.push(texto);
                } else if (categoria.includes('Segundo plato')) {
                    menu.segundos.push(texto);
                } else if (categoria.includes('Postre')) {
                    menu.postres.push(texto);
                } else if (categoria.includes('Precio')) {
                    // Manejar precios
                    if (item.includes('completo')) {
                        menu.precios.completo = texto.replace('€', '');
                    } else if (item.includes('medio')) {
                        menu.precios.medio = texto.replace('€', '');
                    }
                }
            }
        });

        console.log('🍽️ Menú procesado:', menu);

        // Actualizar HTML - Primeros platos
        const primerosUl = document.querySelector('#menu-dia .option-group:nth-child(1) ul');
        if (primerosUl) {
            if (menu.primeros.length > 0) {
                primerosUl.innerHTML = menu.primeros.map(plato => `<li>${plato}</li>`).join('');
                console.log('✅ Primeros platos actualizados:', menu.primeros);
            } else {
                primerosUl.innerHTML = '<li>Consultar disponibilidad</li>';
            }
        }

        // Actualizar HTML - Segundos platos
        const segundosUl = document.querySelector('#menu-dia .option-group:nth-child(2) ul');
        if (segundosUl) {
            if (menu.segundos.length > 0) {
                segundosUl.innerHTML = menu.segundos.map(plato => `<li>${plato}</li>`).join('');
                console.log('✅ Segundos platos actualizados:', menu.segundos);
            } else {
                segundosUl.innerHTML = '<li>Consultar disponibilidad</li>';
            }
        }

        // Actualizar HTML - Postres
        const postresUl = document.querySelector('#menu-dia .option-group:nth-child(3) ul');
        if (postresUl) {
            if (menu.postres.length > 0) {
                postresUl.innerHTML = menu.postres.map(postre => `<li>${postre}</li>`).join('');
                console.log('✅ Postres actualizados:', menu.postres);
            } else {
                postresUl.innerHTML = '<li>Consultar disponibilidad</li>';
            }
        }

        // Actualizar precios si están disponibles
        if (menu.precios.completo) {
            const precioCompleto = document.querySelector('#menu-dia .price-option:nth-child(1) h4');
            if (precioCompleto) {
                precioCompleto.textContent = `Completo - ${menu.precios.completo}€`;
                console.log('✅ Precio completo actualizado:', menu.precios.completo);
            }
        }

        if (menu.precios.medio) {
            const precioMedio = document.querySelector('#menu-dia .price-option:nth-child(2) h4');
            if (precioMedio) {
                precioMedio.textContent = `½ Menú - ${menu.precios.medio}€`;
                console.log('✅ Precio medio actualizado:', menu.precios.medio);
            }
        }
    }

    // Actualizar menú del día
    async updateMenus() {
        console.log('🔄 Actualizando menú del día...');

        try {
            await this.updateMenuDia();

            console.log('✅ Menú actualizado correctamente');
            this.showNotification('✅ Menú actualizado desde Google Sheets');

        } catch (error) {
            console.error('❌ Error al actualizar menú:', error);
            this.showNotification('❌ Error al actualizar menú');
        }
    }

    // Mostrar mensaje de error en lugar del loading
    showErrorMessage(sectionId, message) {
        const section = document.querySelector(sectionId);
        if (!section) return;

        const optionGroups = section.querySelectorAll('.option-group ul');
        optionGroups.forEach(ul => {
            ul.innerHTML = `<li style="color: #6b7280; font-style: italic;">${message}</li>`;
        });
    }

    // Mostrar notificación
    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${message.includes('✅') ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 3000);
    }

    // Agregar botón de actualización manual
    addUpdateButton() {
        const headerTop = document.querySelector('.header-top');
        if (!headerTop) return;

        const updateBtn = document.createElement('button');
        updateBtn.innerHTML = '📋';
        updateBtn.title = 'Actualizar menú del día';
        updateBtn.style.cssText = `
            background: #f59e0b;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            font-size: 16px;
            margin-left: 10px;
            transition: all 0.3s ease;
        `;

        updateBtn.addEventListener('click', () => {
            updateBtn.style.transform = 'rotate(360deg)';
            updateBtn.disabled = true;

            this.updateMenus().then(() => {
                setTimeout(() => {
                    updateBtn.style.transform = 'rotate(0deg)';
                    updateBtn.disabled = false;
                }, 1000);
            });
        });

        headerTop.appendChild(updateBtn);
        console.log('✅ Botón de actualización agregado');
    }

    // Inicializar
    init() {
        console.log('🚀 Iniciando Custom Menu Updater para L\'Express...');

        // Actualizar menú al cargar
        setTimeout(() => {
            this.updateMenus();
        }, 2000);

        // Actualizar cada 30 minutos
        setInterval(() => {
            this.updateMenus();
        }, 30 * 60 * 1000);

        // Agregar botón de actualización manual
        this.addUpdateButton();

        console.log('🔄 Auto-actualización cada 30 minutos');
    }
}

// Inicializar cuando la página esté lista
document.addEventListener('DOMContentLoaded', function() {
    const menuUpdater = new CustomMenuUpdater();
    menuUpdater.init();
    
    // Hacer disponible globalmente para debugging
    window.menuUpdater = menuUpdater;
});