import React, { useState } from 'react';

const models = [
  {
    id: 1,
    name: 'Random Forest',
    trainingDate: '2023-01-15',
    modelVersion: 'v1.0',
    description: 'An ensemble learning method for classification and regression.',
  },
  {
    id: 2,
    name: 'Logistic Regression',
    trainingDate: '2023-02-20',
    modelVersion: 'v1.2',
    description: 'A statistical model that in its basic form uses a logistic function.',
  },
  {
    id: 3,
    name: 'XGBoost',
    trainingDate: '2023-03-05',
    modelVersion: 'v1.5',
    description: 'An implementation of gradient boosted decision trees designed for speed and performance.',
  },
  {
    id: 4,
    name: 'K-Nearest Neighbors',
    trainingDate: '2023-04-10',
    modelVersion: 'v2.0',
    description: 'A non-parametric method used for classification and regression.',
  },
];

const ModelSelectionPage = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  const handleModelChange = (e) => {
    const selected = models.find(model => model.id === parseInt(e.target.value));
    setSelectedModel(selected);
  };

  const handleRunModel = () => {
    if (selectedModel) {
      alert(`Running the model: ${selectedModel.name}`);
      // Add logic to run the model here
    } else {
      alert('Please select a model first.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Select Customer Churn Model</h2>

        <select 
          onChange={handleModelChange} 
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Select a model</option>
          {models.map(model => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>

        {selectedModel && (
          <div className="mt-6 p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-semibold">{selectedModel.name}</h3>
            <p><strong>Training Date:</strong> {selectedModel.trainingDate}</p>
            <p><strong>Model Version:</strong> {selectedModel.modelVersion}</p>
            <p><strong>Description:</strong> {selectedModel.description}</p>
          </div>
        )}

        {/* Run the Model Button */}
        <button
          onClick={handleRunModel}
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none transition duration-200"
        >
          Run the Model
        </button>
      </div>
    </div>
  );
};

export default ModelSelectionPage;
