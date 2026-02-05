import Order from '../models/order.model.js';

const createOrder = async (data) => {
  try {
    const { 
      fullName, email, phoneNumber, shippingAddress, 
      productDetails, totalAmount, paymentType = 'cod' 
    } = data;

    const newOrder = await Order.create({
      fullName,
      email,
      phoneNumber,
      shippingAddress,
      productDetails,
      totalAmount,
      paymentType
    });

    return newOrder;
  } catch (error) {
    throw error; 
  }
};

export default createOrder ;