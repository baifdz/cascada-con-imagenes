# Cascada con Imágenes

Este proyecto es una aplicación simple construida con **Node.js** y **Express** que sirve un archivo HTML estático con imágenes desde una carpeta pública.

---

## 📁 Estructura del Proyecto

Proyecto/
├ server.js
└─ public/
├── index.html
└── imagenes/
├─── imagen1.jpg
├─── imagen2.png
└─── ...otros archivos de imagen


---

## 🚀 Cómo ejecutar el proyecto

### Requisitos

- Tener [Node.js](https://nodejs.org/) y `npm` instalados en tu sistema.

### Pasos para iniciar

1. Inicializa el proyecto (si aún no lo has hecho):

```npm init -y```

2. Instala las dependencias necesarias:

   
  ```npm install express```

3. Ejecuta el servidor:
```node server.js```

4. Abre tu navegador y visita:

```http://localhost:3000```

# Notas
Las imágenes deben estar dentro de la carpeta public/imagenes/ para que puedan mostrarse correctamente en el navegador.

Puedes editar index.html para modificar el contenido visualizado.


