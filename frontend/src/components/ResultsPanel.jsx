import React from 'react';
import ResultCard from './ResultCard';

const ResultsPanel = ({ results }) => {
  if (!results) {
    return null;
  }

  return (
    <div className="mt-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        📊 Resultados del Cálculo
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ResultCard 
          title="Rate per Mile" 
          value={results.ratePerMile} 
        />
        <ResultCard 
          title="Total Miles" 
          value={results.totalMiles} 
          isCurrency={false}
        />
        <ResultCard 
          title="Paid Miles (Driver)" 
          value={results.paidMiles} 
          isCurrency={false}
        />
        <ResultCard 
          title="Driver Pay" 
          value={results.driverPay} 
        />
        <ResultCard 
          title="Fuel Cost" 
          value={results.fuelCost} 
        />
        <ResultCard 
          title="Fixed Costs" 
          value={results.fixedCost} 
        />
        <ResultCard 
          title="Total Expenses" 
          value={results.totalExpenses} 
        />
        <ResultCard 
          title="Net Profit" 
          value={results.netProfit} 
          isHighlight={true}
        />
        <ResultCard 
          title="Profit per Mile" 
          value={results.profitPerMile} 
        />
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>📌 Nota:</strong> Las primeras 100 millas vacías NO se pagan al chofer. 
          Paid Miles = Loaded Miles + max(Empty Miles - 100, 0)
        </p>
      </div>
    </div>
  );
};

export default ResultsPanel;
