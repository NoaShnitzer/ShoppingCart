const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const db = require('./db');
const categories = require('./categories');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())
const port = 8000;

// Define your API routes
app.get('/', (req, res) => {
  res.send('Hello, this is a simple API!');
});

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple Node API',
      version: '1.0.0',
      description: 'A simple Node.js API with Swagger documentation',
    },
  },
  apis: ['./index.js'], // Your API routes file(s)
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define your API routes
app.get('/categories', (req, res) => {
  categories.getCategories((err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.post('/orders', (req, res) => {
    
    console.log(req.body)
    const { name, address, email, orderDetails } = req.body;
  
    // Validate that the required attributes are present
    if (name === null || address === null || email === null || orderDetails === null) {
      return res.status(400).json({ error: 'Missing required attributes' });
    }
  
    // Insert the data into the "orders" table
    const insertQuery = 'INSERT INTO orders (name, address, email, order_data) VALUES (?, ?, ?, ?)';
    const values = [name, address, email, orderDetails];
  
    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      console.log('Data inserted:', result);
  
      // Respond with a success message or other appropriate response
      res.json({ message: 'Data saved successfully' });
    });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});