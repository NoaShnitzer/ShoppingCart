const db = require('./db');


// Fetch all categories from the database
const getCategoriesQuery = 'SELECT * FROM categories';

function getCategories(callback) {
  db.query(getCategoriesQuery, (err, results) => {
    if (err) {
      console.error('Error fetching categories:', err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getCategories,
};
