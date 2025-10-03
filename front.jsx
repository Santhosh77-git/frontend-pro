import React, { useState } from 'react';
import './App.css'; // Optional: for custom styling

function PowerGridForm() {
  const [formData, setFormData] = useState({
    projectType: '',
    terrain: '',
    environment: '',
    materialCost: '',
    labourCost: '',
    regulatoryTime: '',
    delayHistory: '',
    weather: '',
    vendorPerformance: '',
    costEscalation: '',
    demandSupply: '',
    manpower: '',
  });

  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚡ POWERGRID Project Forecasting</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.grid}>
          <label>Project Type</label>
          <select name="projectType" value={formData.projectType} onChange={handleChange} style={styles.input}>
            <option value="">Select</option>
            <option value="Substation">Substation</option>
            <option value="Overhead Line">Overhead Line</option>
            <option value="Underground Cable">Underground Cable</option>
          </select>

          <label>Terrain Type</label>
          <input type="text" name="terrain" value={formData.terrain} onChange={handleChange} style={styles.input} />

          <label>Environmental Factors</label>
          <input type="text" name="environment" value={formData.environment} onChange={handleChange} style={styles.input} />

          <label>Material Cost (₹)</label>
          <input type="number" name="materialCost" value={formData.materialCost} onChange={handleChange} style={styles.input} />

          <label>Labour Cost (₹)</label>
          <input type="number" name="labourCost" value={formData.labourCost} onChange={handleChange} style={styles.input} />

          <label>Regulatory Timeline (days)</label>
          <input type="number" name="regulatoryTime" value={formData.regulatoryTime} onChange={handleChange} style={styles.input} />

          <label>Historical Delay Patterns</label>
          <textarea name="delayHistory" value={formData.delayHistory} onChange={handleChange} style={styles.input} />

          <label>Weather/Seasonal Data</label>
          <input type="text" name="weather" value={formData.weather} onChange={handleChange} style={styles.input} />

          <label>Vendor Performance Metrics</label>
          <input type="text" name="vendorPerformance" value={formData.vendorPerformance} onChange={handleChange} style={styles.input} />

          <label>Cost Escalation Reasons</label>
          <textarea name="costEscalation" value={formData.costEscalation} onChange={handleChange} style={styles.input} />

          <label>Demand-Supply Impact</label>
          <input type="text" name="demandSupply" value={formData.demandSupply} onChange={handleChange} style={styles.input} />

          <label>Resource & Trained Manpower</label>
          <input type="text" name="manpower" value={formData.manpower} onChange={handleChange} style={styles.input} />
        </div>

        <button type="submit" style={styles.button}>🔮 Predict Risks</button>
      </form>

      {showResults && (
        <div style={styles.results}>
          <h2>📊 Prediction Results</h2>
          <p><strong>Cost Overrun Probability:</strong> 72%</p>
          <p><strong>Timeline Delay Probability:</strong> 65%</p>
          <p><strong>Identified Risk Hotspots:</strong> Regulatory Delays, Vendor Performance</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: 'auto',
  },
  title: {
    textAlign: 'center',
    color: '#1abc9c',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #7f8c8d',
    backgroundColor: '#ecf0f1',
    color: '#2c3e50',
  },
  button: {
    marginTop: '20px',
    padding: '12px',
    backgroundColor: '#1abc9c',
    color: '#2c3e50',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  results: {
    marginTop: '30px',
    backgroundColor: '#34495e',
    padding: '20px',
    borderRadius: '10px',
  },
};

export default PowerGridForm;