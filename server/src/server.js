require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db'); 

// Routes Import (Folder and File names check pannikonga)
// Unga folder name 'routes' nu irundha path kizhala irukkura madhiri irukkanum
const authRoutes = require('./routes/auth.routes'); 
const productRoutes = require('./routes/product.routes');

const app = express();

// Middlewares
app.use(express.json()); // JSON data-vai handle panna idhu mukkiam
app.use(cors());

// Database Connection
connectDB(); // "Database Connected Successfully! ✅" nu terminal-la varum

// API Routes
app.use('/api/auth', authRoutes); // Register & Login-ku idhu dhaan base path
app.use('/api/products', productRoutes); // Product management-ku idhu dhaan path

// Default Route
app.get('/', (req, res) => {
    res.send("Product Inventory API is running perfectly! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ✅`);
});