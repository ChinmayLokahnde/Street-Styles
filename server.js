const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRouter.js');

dotenv.config(); 


connectDB();

const app = express();


app.use(express.json()); 
app.use(cors()); 


app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});