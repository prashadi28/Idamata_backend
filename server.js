const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock property data
const properties = [
  { id: 1, title: 'Luxury Villa in Colombo 07', price: 'Rs. 150,000,000', location: 'Colombo 07', category: 'House', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=60' },
  { id: 2, title: 'Modern Apartment overlooking Ocean', price: 'Rs. 45,000,000', location: 'Colombo 03', category: 'Apartment', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=60' },
  { id: 3, title: 'Prime Land in Gampaha', price: 'Rs. 1,200,000 per perch', location: 'Gampaha', category: 'Land', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=60' },
];

app.get('/api/properties', (req, res) => {
  res.json(properties);
});

app.get('/', (req, res) => {
  res.send('idamata.lk Backend API Running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
