<div align="center">
  <img width="1200" height="475" alt="Pollo Campero Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  # 🍗 Pollo Campero - Experiencia Digital

  **Plataforma web moderna y responsiva para pedidos en línea (Delivery / Pickup), personalización de productos y programa de lealtad.**

  [![Live Preview](https://img.shields.io/badge/Demo%20en%20Vivo-Visitar%20App-FF6319?style=for-the-badge&logo=google-chrome&logoColor=white)](https://ais-pre-pdqmu6hsz54kgdbzls7omv-651500077203.us-east1.run.app)
  [![AI Studio](https://img.shields.io/badge/Google%20AI%20Studio-Ver%20Applet-FFD200?style=for-the-badge&logo=google&logoColor=black)](https://ai.studio/apps/e465cf28-af2f-43ba-8f57-7e1eec034060)
  [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Automated%20Deploy-008248?style=for-the-badge&logo=github&logoColor=white)](#-despliegue-en-github-pages)

  <br />

  [![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
</div>

---

## 🌐 Enlaces de Vista Previa (Live Preview)

Puedes probar la aplicación interactiva directamente sin necesidad de instalar nada en tu computadora:

* 🚀 **[Abrir Aplicación en Vivo (Shared Preview)](https://ais-pre-pdqmu6hsz54kgdbzls7omv-651500077203.us-east1.run.app)**
* 🛠️ **[Ver proyecto en Google AI Studio](https://ai.studio/apps/e465cf28-af2f-43ba-8f57-7e1eec034060)**

---

## ✨ Funcionalidades Principales

| Funcionalidad | Descripción |
| :--- | :--- |
| 🍗 **Menú Interactivo** | Navegación por categorías: **Combos**, **Menús Familiares**, **Desayunos**, **Postres** y **Bebidas**. Carrusel y barra horizontal desplazable optimizada para pantallas táctiles y escritorio. |
| ⚙️ **Personalización de Pedido** | Modal interactivo para configurar piezas de pollo (pechuga, cuadril, tradicional o extra crujiente), sabores de bebidas y aderezos antes de agregar al carrito. |
| 🛒 **Carrito Dinámico (Drawer)** | Panel lateral deslizable con cálculo en tiempo real de subtotal, costo de envío y total, controles incrementales (`+` / `-`), eliminación de productos y resumen detallado. |
| 💳 **Flujo de Pago y Confirmación** | Botón interactivo de **"CONTINUAR PAGO"** que genera automáticamente un número de orden único (`#CP-XXXXXX`), tiempo estimado de entrega y confirmación de compra. |
| 🛵 **Selector Delivery / Pickup** | Botón conmutable en la barra de navegación para alternar entre pedidos a domicilio o recogida en restaurante. |
| 🎁 **Programa de Lealtad (Campero Puntos)** | Visualización de saldo de puntos (ej. 1,250 pts), barra de progreso para recompensas y canje de cupones promocionales. |
| 📍 **Buscador de Sucursales** | Módulo de geolocalización y mapa informativo con acceso rápido a más de 300 puntos de venta y horarios. |
| 📱 **100% Responsivo** | Interfaz adaptada a smartphones, tablets y monitores de alta resolución con diseño de la paleta oficial (*Vibrant Palette*). |

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) con tokens de diseño personalizados
- **Animaciones:** [Motion (Framer Motion)](https://motion.dev/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Herramienta de Construcción:** [Vite 6](https://vitejs.dev/)

---

## 🚀 Cómo Ejecutar Localmente

### Requisitos Previos
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- `npm`, `pnpm` o `yarn`

### Pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   cd TU_REPOSITORIO
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos listos para producción se generarán en la carpeta `dist/`.

---

## 📦 Despliegue en GitHub Pages

El proyecto ya está 100% configurado para GitHub Pages con **dos métodos disponibles**:

### Opción 1: Automático con GitHub Actions (Recomendado)
El repositorio ya incluye el workflow en `.github/workflows/deploy.yml`:
1. Sube tu código a GitHub:
   ```bash
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```
2. En GitHub, ve a **Settings** > **Pages**.
3. En **Build and deployment > Source**, selecciona **GitHub Actions**.
4. ¡Listo! Se desplegará automáticamente en:
   ```
   https://<tu-usuario>.github.io/<nombre-del-repo>/
   ```

### Opción 2: Con el comando `npm run deploy` (gh-pages)
Si prefieres desplegar directamente desde la terminal con una sola línea:
```bash
npm run deploy
```
Este comando compilará el proyecto (`dist/`) y subirá los archivos generados a la rama `gh-pages` de tu repositorio. En **Settings > Pages**, solo selecciona desplegar desde la rama `gh-pages` / `/ (root)`.

---

<div align="center">
  <sub>Desarrollado con ❤️ para la experiencia digital de Pollo Campero.</sub>
</div>
