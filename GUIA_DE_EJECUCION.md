# 🚀 Guía de Ejecución - Trucker Profit Calculator

## ✅ Estado Actual
La aplicación ha sido completamente desarrollada y probada localmente.

## 📋 Requisitos Previos
- Node.js instalado (v14 o superior)
- Dos terminales abiertas (una para backend, otra para frontend)

## 🔧 Pasos para Ejecutar la Aplicación

### 1. Iniciar el Backend (Terminal 1)

```powershell
cd C:\trucker-profit-calculator\backend
npm install   # Solo la primera vez
npm start
```

Deberías ver:
```
🚀 Server running on http://localhost:5000
📊 API endpoint: http://localhost:5000/api/calculate
```

### 2. Iniciar el Frontend (Terminal 2)

```powershell
cd C:\trucker-profit-calculator\frontend
npm install   # Solo la primera vez
npm run dev
```

Deberías ver:
```
VITE v7.2.4  ready in XXX ms
➜  Local:   http://localhost:5173/
```

### 3. Abrir la Aplicación

Abre tu navegador y ve a: **http://localhost:5173/**

## 🎯 Cómo Usar la Aplicación

1. **Datos de la Carga**
   - Precio de la Carga (USD)
   - Millas Cargadas
   - Millas Vacías (las primeras 100 no se pagan al chofer)
   - Precio del Combustible por galón
   - MPG del camión
   - Costos fijos por milla

2. **Pago al Chofer**
   - Selecciona el tipo: CPM o Porcentaje
   - Ingresa el valor correspondiente

3. **Calcular**
   - Presiona el botón "🧮 CALCULAR"
   - Los resultados aparecerán en tarjetas:
     * Rate per mile
     * Total miles / Paid miles
     * Driver pay
     * Fuel cost
     * Fixed costs
     * Total expenses
     * **Net profit** (destacado en verde)
     * Profit per mile

## 🔍 Regla Especial

**Las primeras 100 millas vacías NO se pagan al chofer**

Fórmula: `paid_empty_miles = max(empty_miles - 100, 0)`

## 📊 Ejemplo de Prueba

Usa estos datos para probar:
- Precio de la carga: $3000
- Millas cargadas: 500
- Millas vacías: 150
- Tipo de pago: CPM
- CPM: 45 centavos (0.45 por milla)
- Combustible: $4.00/galón
- MPG: 6.5
- Costos fijos: $0.50/milla

## ⚠️ Solución de Problemas

### El backend no inicia
- Verifica que no haya otro proceso en el puerto 5000
- Ejecuta: `npm install` en la carpeta backend

### El frontend no inicia
- Verifica que no haya otro proceso en el puerto 5173
- Ejecuta: `npm install` en la carpeta frontend
- Si hay errores con TailwindCSS, verifica que esté instalado: `npm install -D tailwindcss@^3.3.0 postcss autoprefixer`

### Error de conexión
- Asegúrate de que el backend esté corriendo ANTES de usar el frontend
- Verifica que los puertos 5000 y 5173 estén disponibles

## 📁 Estructura del Proyecto

```
trucker-profit-calculator/
├── backend/
│   ├── server.js          # API Express con lógica de cálculo
│   ├── package.json
│   └── node_modules/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CalculatorForm.jsx
│   │   │   ├── InputField.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   └── ResultsPanel.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── node_modules/
└── README.md
```

## ✨ Características Implementadas

✅ Frontend modular con React + TailwindCSS  
✅ Backend con Node.js + Express  
✅ Validación de inputs  
✅ Diseño responsive  
✅ Cálculos precisos según fórmulas especificadas  
✅ Regla de 100 millas vacías aplicada  
✅ Interfaz intuitiva y moderna  
✅ Manejo de errores  
✅ Documentación completa
