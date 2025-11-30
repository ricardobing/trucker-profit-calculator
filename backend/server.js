const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Función para calcular la rentabilidad
function calculateProfit(data) {
  const {
    loadPrice,
    loadedMiles,
    emptyMiles,
    paymentType, // 'cpm' o 'percentage'
    paymentValue, // CPM en centavos o porcentaje decimal (ej: 0.25 para 25%)
    fuelPrice,
    mpg,
    fixedCostPerMile
  } = data;

  // Validaciones
  if (loadPrice <= 0 || loadedMiles <= 0 || mpg <= 0) {
    throw new Error('Invalid input values');
  }

  // Cálculos básicos
  const totalMiles = loadedMiles + emptyMiles;
  const ratePerMile = loadPrice / loadedMiles;

  // Regla especial: Las primeras 100 millas vacías NO se pagan al chofer
  const paidEmptyMiles = Math.max(emptyMiles - 100, 0);
  const paidMiles = loadedMiles + paidEmptyMiles;

  // Pago al chofer según método
  let driverPay;
  if (paymentType === 'cpm') {
    // CPM viene en centavos, convertir a dólares
    const cpmDollars = paymentValue / 100;
    driverPay = paidMiles * cpmDollars;
  } else {
    // Porcentaje del ingreso
    driverPay = loadPrice * paymentValue;
  }

  // Costo de combustible
  const fuelCost = (totalMiles / mpg) * fuelPrice;

  // Costos fijos
  const fixedCost = totalMiles * fixedCostPerMile;

  // Ganancia neta
  const netProfit = loadPrice - (driverPay + fuelCost + fixedCost);

  // Ganancia por milla
  const profitPerMile = netProfit / totalMiles;

  return {
    totalMiles: totalMiles.toFixed(2),
    ratePerMile: ratePerMile.toFixed(2),
    paidMiles: paidMiles.toFixed(2),
    driverPay: driverPay.toFixed(2),
    fuelCost: fuelCost.toFixed(2),
    fixedCost: fixedCost.toFixed(2),
    netProfit: netProfit.toFixed(2),
    profitPerMile: profitPerMile.toFixed(2),
    totalExpenses: (driverPay + fuelCost + fixedCost).toFixed(2)
  };
}

// Endpoint para calcular
app.post('/api/calculate', (req, res) => {
  try {
    const results = calculateProfit(req.body);
    res.json({ success: true, results });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Trucker Profit Calculator API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API endpoint: http://localhost:${PORT}/api/calculate`);
});
