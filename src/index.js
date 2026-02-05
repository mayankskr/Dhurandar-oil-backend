import app from './app.js';
import connectiondb from './db/connectionDB.js';
import dotenv from 'dotenv';
import orderRoutes from './routes/order.route.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Route Middleware
app.use('/api/orders', orderRoutes);

// Database & Server Initialization
connectiondb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running");
    })
})
