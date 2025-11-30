import React from 'react';

const ResultCard = ({ title, value, isCurrency = true, isHighlight = false }) => {
  const formatValue = (val) => {
    if (isCurrency) {
      return `$${parseFloat(val).toFixed(2)}`;
    }
    return parseFloat(val).toFixed(2);
  };

  const cardClass = isHighlight
    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white'
    : 'bg-white border border-gray-200';

  const titleClass = isHighlight ? 'text-green-100' : 'text-gray-600';
  const valueClass = isHighlight ? 'text-white' : 'text-gray-900';

  return (
    <div className={`${cardClass} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow`}>
      <h3 className={`${titleClass} text-sm font-medium mb-2`}>
        {title}
      </h3>
      <p className={`${valueClass} text-3xl font-bold`}>
        {formatValue(value)}
      </p>
    </div>
  );
};

export default ResultCard;
