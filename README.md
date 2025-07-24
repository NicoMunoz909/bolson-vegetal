# 🥑 Bolson Vegetal – Sistema de Pedidos para Verdulería

**Bolson Vegetal** es un sistema web completo para gestión de pedidos de una verdulería con envíos a domicilio.

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
- Checkout simple → envía el pedido por WhatsApp preformateado
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

- API RESTful
- Manejo de pedidos
- Manejo de productos y stock
- Autenticación con JWT
- Subida de imágenes con Cloudinary y Multer
- SQL estructurado con Sequelize

---

## 🔑 Acceso de prueba al Backoffice

> Usá estas credenciales para probar el panel de administración:
> Usuario: elBolson
> Contraseña: admin1234

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
