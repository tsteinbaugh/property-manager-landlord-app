const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/properties', async (req, res) => {
  const properties = await prisma.property.findMany({ include: { tenants: true, maintenance: true } });
  res.json(properties);
});

app.post('/property', async (req, res) => {
  const property = await prisma.property.create({ data: req.body });
  res.json(property);
});

// Add more routes here...

app.listen(3001, () => console.log('API running on http://localhost:3001'));
