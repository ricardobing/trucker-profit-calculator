import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsPanel from './components/ResultsPanel';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCalculate = async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(`${API_URL}/calculate`, formData);
      
      if (response.data.success) {
        setResults(response.data.results);
      } else {
        setError('Error al calcular. Por favor verifica los datos.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error de conexión con el servidor. Asegúrate de que el backend esté corriendo en el puerto 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            🚚 Trucker Profit Calculator
          </h1>
          <p className="text-gray-600 text-lg">
            Calcula la rentabilidad de tus cargas de transporte
          </p>
        </header>

        {error && (
          <div className="max-w-4xl mx-auto mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            <strong>Error:</strong> {error}
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <CalculatorForm onCalculate={handleCalculate} loading={loading} />
          <ResultsPanel results={results} />
        </div>

        <footer className="text-center mt-12 text-gray-600 text-sm">
          <p>💡 Recuerda: Las primeras 100 millas vacías no se pagan al chofer</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
