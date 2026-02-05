import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  shippingAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true }
  },
  productDetails: {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  },
  totalAmount: { type: Number, required: true },
  paymentType: { type: String, enum: ['cod', 'upi'], default: 'cod' },
  status: { type: String, default: 'Pending' },
  
},{timestamps:true});

const Order = mongoose.model("Order", OrderSchema);
export default Order;