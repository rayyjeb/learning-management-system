// server/razorpay.ts
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export const createRazorpayOrder = async (amount: number) => {
  const options = {
    amount: amount * 100, // in paise
    currency: 'INR',
    receipt: `receipt_order_${Math.random().toString(36).substring(7)}`,
  };

  return await razorpay.orders.create(options);
};
