import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BudgetDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const budgetData = [
    { category: 'Income', item: 'Regular Assessments', y2024: 297920, y2025: 320656 },
    { category: 'Administrative', item: 'Management Contract', y2024: 37914.24, y2025: 37792.72 },
    { category: 'Administrative', item: 'Legal Fees', y2024: 750, y2025: 1050 },
    { category: 'Administrative', item: 'Accounting/Legal', y2024: 3500, y2025: 3000 },
    { category: 'Administrative', item: 'Insurance', y2024: 8875, y2025: 9962 },
    { category: 'Administrative', item: 'Administrative Expenses', y2024: 2450, y2025: 2500 },
    { category: 'Administrative', item: 'CTA Filing Fee', y2024: 0, y2025: 500 },
    { category: 'Building', item: 'Gutter Cleaning', y2024: 4500, y2025: 5000 },
    { category: 'Building', item: 'Building Maintenance', y2024: 6500, y2025: 9246.28 },
    { category: 'Building', item: 'Roof Maintenance', y2024: 0, y2025: 4000 },
    { category: 'Building', item: 'Termite Warranty', y2024: 4900, y2025: 5200 },
    { category: 'Reserves', item: 'Reserve - Capital', y2024: 91840, y2025: 91840 },
    { category: 'Grounds', item: 'Grounds Contract', y2024: 71820, y2025: 71940 },
    { category: 'Grounds', item: 'Grounds Other', y2024: 21670.76, y2025: 25000 },
    { category: 'Grounds', item: 'BMP Maintenance', y2024: 9000, y2025: 11500 },
    { category: 'Grounds', item: 'Grounds Enhancements', y2024: 0, y2025: 8000 },
    { category: 'Recreation', item: 'Social', y2024: 0, y2025: 750 },
    { category: 'Pool', item: 'Pool Management', y2024: 17400, y2025: 17185 },
    { category: 'Pool', item: 'Pool Supplies/Repairs', y2024: 2500, y2025: 2500 },
    { category: 'Pool', item: 'Pool Permits', y2024: 1050, y2025: 1100 },
    { category: 'Pool', item: 'Pool Access System', y2024: 2500, y2025: 2500 },
    { category: 'Utilities', item: 'Utilities', y2024: 8500, y2025: 7840 },
    { category: 'Utilities', item: 'Utilities - Internet', y2024: 2250, y2025: 2250 },
  ];

  const categories = ['All', ...new Set(budgetData.map(item => item.category))];

  const filteredData = selectedCategory === 'All' 
    ? budgetData 
    : budgetData.filter(item => item.category === selectedCategory);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Townes at North Salem Budget Comparison 2024 vs 2025</h2>
      <div className="mb-4">
        <label htmlFor="category-select" className="mr-2">Select Category:</label>
        <select 
          id="category-select"
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-1"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <BarChart width={800} height={400} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="item" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="y2024" fill="#8884d8" name="2024" />
        <Bar dataKey="y2025" fill="#82ca9d" name="2025" />
      </BarChart>
    </div>
  );
};

export default BudgetDashboard;
