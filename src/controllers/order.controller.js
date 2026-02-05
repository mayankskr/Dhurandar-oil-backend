import createOrder from '../services/order.service.js';

export const handleCreateOrder = async (req, res) => {
  try {
    // Determine status: 400 if bad data, 500 if server error
    if (!req.body) return res.status(400).json({ message: "No data provided" });

    const order = await createOrder(req.body);
    
    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      orderId: order._id
    });

  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message || "Internal Server Error" 
    });
  }
};