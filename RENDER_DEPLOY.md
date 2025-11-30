# 🚀 Desplegar en Render.com

## Configuración para Render

Este proyecto está configurado para desplegarse en Render.com con backend y frontend en un solo servicio.

### 📋 Pasos para Desplegar:

1. **Ve a [Render.com](https://render.com)** y crea una cuenta o inicia sesión

2. **Conecta tu repositorio de GitHub:**
   - Click en "New +" → "Web Service"
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio: `ricardobing/trucker-profit-calculator`

3. **Configura el Web Service:**

   **Configuración básica:**
   - **Name:** `trucker-profit-calculator`
   - **Region:** Elige el más cercano (ej: Oregon)
   - **Branch:** `main`
   - **Root Directory:** (dejar vacío)
   - **Runtime:** `Node`

   **Build & Deploy:**
   - **Build Command:**
     ```bash
     cd backend && npm install && cd ../frontend && npm install && npx vite build
     ```
   
   - **Start Command:**
     ```bash
     cd backend && node server.js
     ```

   **Environment Variables:**
   - `NODE_ENV` = `production`
   - `PORT` = (Render lo asigna automáticamente)

4. **Crear el servicio:**
   - Click en "Create Web Service"
   - Render comenzará a construir y desplegar tu aplicación

5. **¡Listo!** 
   - Una vez completado, recibirás una URL como: `https://trucker-profit-calculator.onrender.com`
   - La aplicación estará completamente funcional con frontend y backend en la misma URL

### ⚙️ Configuración Alternativa (Usando render.yaml)

Si prefieres usar el archivo `render.yaml` incluido:

1. En Render.com, ve a "New +" → "Blueprint"
2. Conecta tu repositorio
3. Render detectará automáticamente el `render.yaml` y configurará todo

### 🔍 Verificación

Después del despliegue:
- **Frontend:** `https://tu-app.onrender.com/`
- **API Health Check:** `https://tu-app.onrender.com/api/health`
- **API Calculate:** `https://tu-app.onrender.com/api/calculate`

### 💡 Notas Importantes:

- **Free Tier:** Render ofrece un plan gratuito que es perfecto para demos
- **Cold Starts:** En el plan gratuito, si no hay actividad por 15 minutos, el servicio se "duerme" y tardará ~30 segundos en despertar
- **Build Time:** El primer despliegue puede tomar 5-10 minutos

### 🐛 Solución de Problemas:

**Build falla:**
- Verifica que los comandos de build sean correctos
- Revisa los logs en Render Dashboard

**La app no carga:**
- Verifica que `NODE_ENV=production` esté configurado
- Revisa que el frontend se haya construido correctamente en `/frontend/dist`

**Errores de API:**
- Verifica que el backend esté usando `process.env.PORT`
- Revisa los logs del servidor en Render Dashboard

### 📊 Monitoreo:

Render proporciona:
- Logs en tiempo real
- Métricas de uso
- Notificaciones de despliegue
- Auto-despliegue cuando haces push a GitHub

## 🎉 ¡Tu aplicación estará lista para mostrar al cliente!
