// controllers/paymentController.js

import stripe from 'stripe';
import Payment from '../../models/payment.js';

const stripeInstance = stripe('sk_test_51P08N3D4ZbkdtHaCiM4qIBnEN7LKQVjtFaTen5GrZtPNL30kVou3TqeUXIJGwlxTySi12NABrR69XXS7yrHZZkz9006HexL1ua');

 const processPayment = async (req, res) => {
  try {
    const { amount, description, token } = req.body;
    const charge = await stripeInstance.charges.create({
      amount: amount,
      currency: 'usd',
      description: description,
      source: token.id,
    });

    const payment = new Payment({
      amount: amount,
      description: description,
      status: 'success',
    });
    await payment.save();

    res.status(200).json({ success: true, payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your payment.' });
  }
};

export default processPayment;