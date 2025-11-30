# Vercel Configuration for Trucker Profit Calculator

## Backend Deployment

El backend necesita ser desplegado en un servicio separado como:
- **Vercel** (como Serverless Functions)
- **Heroku**
- **Railway**
- **Render**

### Opción 1: Backend en Vercel (Recomendado)

Crea un archivo `vercel.json` en la carpeta `backend/`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

### Opción 2: Backend en Render/Railway

Estas plataformas soportan Node.js directamente sin configuración adicional.

## Frontend Deployment en Vercel

El frontend React + Vite se puede desplegar directamente en Vercel:

1. Conecta tu repositorio de GitHub a Vercel
2. Configura el directorio raíz como `frontend`
3. Vercel detectará automáticamente que es un proyecto Vite
4. **Importante**: Actualiza la variable `API_URL` en `frontend/src/App.jsx` con la URL de tu backend desplegado

### Variables de Entorno en Vercel (Frontend)

Crea una variable de entorno en Vercel:
- `VITE_API_URL` = URL de tu backend desplegado

Y actualiza `App.jsx`:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

## Alternativa Simple: Monorepo en Vercel

Puedes desplegar ambos en Vercel usando la estructura actual:
- Frontend: Configurado desde la carpeta `frontend/`
- Backend: Configurado como Serverless Functions desde la carpeta `backend/`
