import React, { useState } from 'react';
import InputField from './InputField';

const CalculatorForm = ({ onCalculate, loading }) => {
  const [formData, setFormData] = useState({
    loadPrice: '',
    loadedMiles: '',
    emptyMiles: '',
    paymentType: 'cpm',
    paymentValue: '',
    fuelPrice: '',
    mpg: '',
    fixedCostPerMile: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handlePaymentTypeChange = (e) => {
    setFormData(prev => ({
      ...prev,
      paymentType: e.target.value,
      paymentValue: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación
    const requiredFields = ['loadPrice', 'loadedMiles', 'emptyMiles', 'paymentValue', 'fuelPrice', 'mpg', 'fixedCostPerMile'];
    const missingFields = requiredFields.filter(field => !formData[field] || parseFloat(formData[field]) < 0);
    
    if (missingFields.length > 0) {
      alert('Por favor, completa todos los campos con valores válidos.');
      return;
    }

    // Convertir datos
    const data = {
      loadPrice: parseFloat(formData.loadPrice),
      loadedMiles: parseFloat(formData.loadedMiles),
      emptyMiles: parseFloat(formData.emptyMiles),
      paymentType: formData.paymentType,
      paymentValue: formData.paymentType === 'cpm' 
        ? parseFloat(formData.paymentValue) 
        : parseFloat(formData.paymentValue) / 100, // Convertir porcentaje a decimal
      fuelPrice: parseFloat(formData.fuelPrice),
      mpg: parseFloat(formData.mpg),
      fixedCostPerMile: parseFloat(formData.fixedCostPerMile)
    };

    onCalculate(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🚛 Datos de la Carga
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Precio de la Carga (USD)"
          id="loadPrice"
          value={formData.loadPrice}
          onChange={handleChange}
          helpText="Total a recibir por la carga"
        />

        <InputField
          label="Millas Cargadas"
          id="loadedMiles"
          value={formData.loadedMiles}
          onChange={handleChange}
          helpText="Millas conducidas con carga"
        />

        <InputField
          label="Millas Vacías"
          id="emptyMiles"
          value={formData.emptyMiles}
          onChange={handleChange}
          helpText="Millas sin carga (primeras 100 no se pagan)"
        />

        <InputField
          label="Precio del Combustible (USD/galón)"
          id="fuelPrice"
          value={formData.fuelPrice}
          onChange={handleChange}
          helpText="Costo por galón de diesel"
        />

        <InputField
          label="MPG del Camión"
          id="mpg"
          value={formData.mpg}
          onChange={handleChange}
          step="0.1"
          helpText="Millas por galón del vehículo"
        />

        <InputField
          label="Costos Fijos por Milla (USD)"
          id="fixedCostPerMile"
          value={formData.fixedCostPerMile}
          onChange={handleChange}
          helpText="Seguro, mantenimiento, etc."
        />
      </div>

      <div className="mt-6 border-t pt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          💰 Pago al Chofer
        </h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Pago
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="cpm"
                checked={formData.paymentType === 'cpm'}
                onChange={handlePaymentTypeChange}
                className="mr-2"
              />
              <span>CPM (cents per mile)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="percentage"
                checked={formData.paymentType === 'percentage'}
                onChange={handlePaymentTypeChange}
                className="mr-2"
              />
              <span>% del Ingreso</span>
            </label>
          </div>
        </div>

        <InputField
          label={formData.paymentType === 'cpm' ? 'CPM (centavos)' : 'Porcentaje (%)'}
          id="paymentValue"
          value={formData.paymentValue}
          onChange={handleChange}
          helpText={
            formData.paymentType === 'cpm' 
              ? 'Ej: 45 para $0.45 por milla' 
              : 'Ej: 25 para 25% del ingreso'
          }
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Calculando...' : '🧮 CALCULAR'}
      </button>
    </form>
  );
};

export default CalculatorForm;
