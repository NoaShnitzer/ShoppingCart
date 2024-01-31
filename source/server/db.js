const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Noa',
  password: 'Noa123',
  database: 'mysql',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL');

  // Create the database if it doesn't exist
  db.query('CREATE DATABASE IF NOT EXISTS Groceries', (err) => {
    if (err) {
      console.error('Error creating database:', err);
    } else {
      console.log('Database created or already exists');
    }

    // Switch to the newly created or existing database
    db.changeUser({ database: 'Groceries' }, (err) => {
      if (err) {
        console.error('Error switching to database:', err);
      } else {
        console.log('Switched to database');
      }

      // Create the categories table if not exists
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS categories (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        )
      `;
      const createOrdersTableQuery = `
  CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    order_data TEXT NOT NULL
  )`;

  db.query(createOrdersTableQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Orders table is ready');
    }
  });

      

      db.query(createTableQuery, (err) => {
        if (err) {
          console.error('Error creating table:', err);
        } else {
          console.log('Categories table is ready');
        }
      });
    });
    
// Insert default categories if not exists
    const defaultCategories = ['Cleaning tools', "Dairy products", 'Fruits and vegetables', 'Pastries', 'Meat and fish'];
    const insertCategoriesQuery = `
      INSERT IGNORE INTO categories (name) VALUES ?
    `;

      db.query(insertCategoriesQuery, [defaultCategories.map(name => [name])], (err, result) => {
      if (err) {
        console.error('Error inserting default categories:', err);
      } else {
        console.log('Default categories inserted:', result.affectedRows);
      }
    });

    });
});

module.exports = db;