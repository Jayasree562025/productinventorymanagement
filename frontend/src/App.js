import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend-la irundhu data-vai fetch pandrom
    axios.get('http://localhost:5000/api/products/')
      .then(res => {
        console.log("Data received:", res.data);
        setProducts(res.data);
      })
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1 style={{ color: '#2c3e50' }}>Inventory Management 📦</h1>
      <table border="1" cellPadding="15" style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <thead style={{ backgroundColor: '#34495e', color: 'white' }}>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock (Quantity)</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(p => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>₹{p.price}</td>
                <td>{p.quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading products... Make sure server is running!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;