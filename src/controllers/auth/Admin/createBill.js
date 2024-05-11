// import Bill from '../../../models/bill.js';
// import sendFinalResponse from '../../../utils/sendFinalResponse.js'; // Import sendFinalResponse utility

// const createBill = async (req, res) => {
//     const { userId, name, email, phone_no, packageDetails } = req.body;
//     try {
//         // Validate input data
//         if (!userId || !name || !email || !phone_no || !packageDetails) {
//             return sendFinalResponse(res, 400, false, 'All fields are required');
//         }

//         // Create a new bill
//         const newBill = new Bill({
//             userId,
//             packageDetails,
//             status: 'pending', // Default status is pending
//         });

//         // Save the new bill to the database
//         await newBill.save();

//         // Send response with the created bill
//         sendFinalResponse(res, 201, true, 'Bill created successfully', { bill: newBill });
//     } catch (error) {
//         console.error('Error creating bill:', error);
//         sendFinalResponse(res, 500, false, 'Internal server error');
//     }
// };

// export default createBill;
