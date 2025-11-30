# Trucker Profit Calculator

Aplicación web completa para calcular la rentabilidad de cargas de transporte.

## 🚀 Tecnologías

- **Frontend**: React + TailwindCSS
- **Backend**: Node.js + Express
- **Sin base de datos**: Todos los cálculos son locales

## 📁 Estructura del Proyecto

```
trucker-profit-calculator/
├── backend/          # Servidor Node.js + Express
│   ├── server.js     # Servidor principal
│   └── package.json
├── frontend/         # Aplicación React
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## 🔧 Instalación y Ejecución

### Backend
```bash
cd backend
npm install
npm start
```
El servidor correrá en http://localhost:5000

### Frontend
```bash
cd frontend
npm install
npm run dev
```
La aplicación correrá en http://localhost:5173

## 📊 Reglas de Cálculo

### Regla Especial
**Las primeras 100 millas vacías NO se pagan al chofer.**

### Fórmulas Utilizadas

1. **Millas totales**: `total_miles = loaded_miles + empty_miles`
2. **Rate por milla**: `rate_per_mile = load_price / loaded_miles`
3. **Pago al chofer**:
   - CPM: `driver_pay = paid_miles * cents_per_mile`
   - Porcentaje: `driver_pay = load_price * driver_percentage`
4. **Combustible**: `fuel_cost = (total_miles / mpg) * fuel_price`
5. **Costos fijos**: `fixed_cost = total_miles * fixed_cost_per_mile`
6. **Ganancia neta**: `net_profit = load_price - (driver_pay + fuel_cost + fixed_cost)`
7. **Ganancia por milla**: `profit_per_mile = net_profit / total_miles`

## 💡 Características

- ✅ Interfaz moderna y responsive con Tailwind
- ✅ Componentes modulares y reutilizables
- ✅ Validación de inputs para evitar NaN
- ✅ Cálculos en tiempo real
- ✅ Visualización clara de resultados en tarjetas
