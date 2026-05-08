# Proyecto PASSWORD-GENERATOR Lit-Element

Este proyecto es una aplicación web desarrollada con **LitElement** y **JavaScript Vanilla**, enfocada en la generación de contraseñas seguras y configurables a través de múltiples opciones.

La aplicación permite al usuario personalizar la longitud, el tipo de caracteres y otros criterios para generar contraseñas robustas, utilizando la **Web Crypto API** para garantizar aleatoriedad criptográficamente segura.

Además, se integra la **Clipboard API**, permitiendo copiar las contraseñas generadas de forma rápida y eficiente al portapapeles.

El objetivo es combinar una experiencia de usuario sencilla con una arquitectura limpia, modular y escalable, basada en componentes web reutilizables.

Para el desarrollo se optó por una estructura de carpetas bien definida, que facilita el mantenimiento, la reutilización de componentes y el crecimiento del proyecto a futuro.

```sh
components/ → Componentes pequeños y reutilizables (UI).
views/ → Secciones grandes de la interfaz.
pages/ → Pantallas completas asociadas a rutas.
router/ → Lógica de navegación y renderizado de páginas.
services/ → lógica y datos.
```
​<!-- components → reutilizable y pequeño -->
​<!-- views → sección grande -->
​<!-- pages → pantalla completa / ruta -->
​<!-- layouts → estructura general -->
​<!-- services → lógica y datos -->

---

## Instalación y ejecución
```sh
cd nombre-del-proyecto
npm install
npm run dev
```

### Clonar el repositorio
- Abre tu terminal y ejecuta:

```sh
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
```

- Clonar rama develop:
```sh
git checkout -b develop origin/develop
```

- Instalar dependencias:
```sh
npm install
```

- Ejecutar el proyecto en modo desarrollo:
```sh
npm run dev
```

---

## Tecnologías utilizadas
![Lit](https://img.shields.io/badge/Lit-Element-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Vite](https://img.shields.io/badge/Vite-Bundler-purple)
![Crypto API](https://img.shields.io/badge/Web%20Crypto-Secure-green)
![Clipboard API](https://img.shields.io/badge/Clipboard-API-orange)
- **Lit (LitElement)** → Componentes web reactivos
- **JavaScript (Vanilla)** → Lógica principal de la aplicación
- **HTML5** → Estructura
- **CSS3** → Estilos y layout
- **Vite** → Entorno de desarrollo y bundling
- **Web Crypto API** → Generación segura de contraseñas
- **Clipboard API** → Copiado al portapapeles