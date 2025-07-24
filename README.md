# 🥑 Bolson Vegetal – Sistema de Pedidos para Verdulería

**Bolson Vegetal** es un sistema web completo para que una verdulería gestione sus productos y reciba pedidos por WhatsApp sin errores ni confusiones, agilizando el trabajo diario.

Incluye:

- **Frontend público (e-commerce simple)**
- **Backoffice (panel de administración)**
- **Backend con API y base de datos (MySQL)**

---

## 🚀 **Tecnologías utilizadas**

### Front (cliente y admin panel)

- React
- Vite
- React Router
- CSS puro
- Context API (manejo de estado)

### Backend

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- JWT (autenticación)
- Cloudinary (para manejo de imágenes)

---

## 🛒 **Funcionalidades del Frontend (Tienda)**

- Catálogo de productos con imágenes reales
- Carrito de compras (se guarda en localStorage)
- Checkout → genera un mensaje de WhatsApp preformateado con el pedido, listo para enviar
- Páginas informativas: Quiénes somos, Envíos, Contacto, Preguntas frecuentes

---

## 🗄️ **Funcionalidades del Backoffice (Admin Panel)**

- CRUD completo de productos (crear, editar, eliminar, cambiar imágenes)
- Gestión de precios, stock, categorías y ofertas
- Login con token
- Protección de rutas
- Subida de imágenes a Cloudinary

---

## 🗂️ **Funcionalidades del Backend**

- API RESTful construida con Express y Sequelize
- Middleware de autenticación con JWT
- Manejo de imágenes con Multer + Cloudinary
- Base de datos relacional en MySQL

---

## 🔑 Acceso de prueba al Backoffice

> Usá estas credenciales para probar el panel de administración:
> Usuario: elBolson
> Contraseña: admin1234

---
## 🎥 Videos demo

- 🛒 [Flujo de compra y checkout](https://www.loom.com/share/28c24fda29eb4d54805e3a18dc138be0?sid=7c72a064-8640-4d33-85b6-e5a97536a7df)
- 🛠️ [Gestión de productos desde el backoffice](https://www.loom.com/share/4b68335fcf36428ca46f08d0d0b3be4d?sid=d809abbf-c056-4eb6-bead-f828b49f62dd)
- 📷 [Ejemplo de mensaje generado](https://res.cloudinary.com/dueeddro0/image/upload/v1753400057/Captura_de_pantalla_2025-07-24_183222_xpwsf3.png)
---

## 🌎 **Deploy**

| Parte          | Link                                                               |
| -------------- | ------------------------------------------------------------------ |
| **Frontend**   | [VERCEL](https://bolson-vegetal-front.vercel.app/)       |
| **Backoffice** | [VERCEL](https://bolson-vegetal-admin-panel.vercel.app/) |
| **Backend**    | [RENDER](https://bolsonvegetal-iqs3.onrender.com)        |

---

## ⚙️ **Instalación local**

### 1️⃣ Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/bolson-vegetal.git
cd bolson-vegetal
```

### 2️⃣ Instalar dependencias:

```bash
cd client
npm install

cd ../admin-panel
npm install

cd ../server
npm install
```

### 3️⃣ Configurar variables de entorno:

Crear un archivo .env en la carpeta /server con el siguiente contenido:
```
DB_NAME=nombre_de_tu_db
DB_USER=usuario
DB_PASSWORD=contraseña
DB_HOST=localhost
JWT_SECRET=tu_clave_secreta
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
```
### 4️⃣ Crear la base de datos y poblarla:

Ejecutá el siguiente comando para crear la base de datos automáticamente:

```bash
npx sequelize-cli db:create
```

Luego corré las migraciones y seeders:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 5️⃣ Correr el servidor:

```bash
npm run dev
```

## 👨‍💻 **Autor**

Nicolás Muñoz

Desarrollador Fullstack

[LinkedIn](https://www.linkedin.com/in/nicolas-munoz-nmz/)

---

## 📢 **Disclaimer**

Este proyecto es una demo funcional realizada con fines educativos y de portfolio.

---

### 🚀 **¡Gracias por visitarlo!**
