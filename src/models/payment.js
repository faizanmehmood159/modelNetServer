// const mongoose = require('mongoose');

// const paymentSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },

//   paymentString: {
//     type: String,
//     required: true
//   },

//   installation: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Installation',
//     required: true
//   },
//   package: {
//     id: {
//       type: Number,
//       required: true
//     },
//     label: {
//       type: String,
//       required: true
//     },
//     price: {
//       type: Number,
//       required: true
//     },
//     status: {
//       type: String,
//       required: true
//     }
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Payment = mongoose.model('Payment', paymentSchema);

// module.exports = Payment;
