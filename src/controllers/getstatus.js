// import User from '../models/user'
// import Complaint from "../models/complaint.js";
// import submitInstallationForm from '../models/installationForm.js';
// import sendFinalResponse from "../utils/sendFinalResponse.js";


// const stats = async (req, res, next) => {
//     try {
//         const stats = {
//             totalUsers: await User.countDocuments({}),
//             totalComplaint: await AdminCompany.countDocuments({ adminType: "company" }),
//             totalConnection: await AdminCompany.countDocuments({ adminType: "company" }),
//             resolvedComplaint await AdminCompany.countDocuments({ adminType: "company" }),
//             approveCompany: await AdminCompany.countDocuments({ approved: true, adminType: "company" }),
//             pendingCompany: await AdminCompany.countDocuments({ pending: true }),
//             registrationsLocations: (await Company.find({}).select({ "address.states": 1, _id: 0 })).map(company => company.address.states),
//             mostSelectedCompany: await Appointments.aggregate([
//                 {
//                     $group: {
//                         _id: '$companyName',
//                         count: { $sum: 1 }
//                     }
//                 },
//                 {
//                     $sort: {
//                         count: -1
//                     }
//                 },
//                 {
//                     $project: {
//                         companyName: '$_id',
//                         count: 1,
//                         _id: 0
//                     }
//                 },
//                 {
//                     $limit: 5
//                 }
//             ]),
//             companiesWithCounts: await Appointments.aggregate([
//                 {
//                     $group: {
//                         _id: '$companyName',
//                         count: { $sum: 1 }
//                     }
//                 },
//                 {
//                     $project: {
//                         companyName: '$_id',
//                         count: 1,
//                         _id: 0
//                     }
//                 }
//             ]),
//             appointmentAccepted: await Appointments.aggregate([
//                 {
//                     $group: {
//                         _id: {
//                             isApproved: '$isApproved',
//                         },
//                         count: { $sum: 1 }
//                     }
//                 },
//                 {
//                     $project: {
//                         isApproved: '$_id.isApproved',
//                         count: 1,
//                         _id: 0
//                     }
//                 }
//             ]),
//             appointmentDecline: await Appointments.aggregate([
//                 {
//                     $group: {
//                         _id: {
//                             isReject: '$isReject'
//                         },
//                         count: { $sum: 1 }
//                     }
//                 },
//                 {
//                     $project: {
//                         isReject: '$_id.isReject',
//                         count: 1,
//                         _id: 0
//                     }
//                 }
//             ]),
//             notArrivedAtAppointment: await Appointments.aggregate([
//                 {
//                     $match: {
//                         deadline: { $lt: new Date() },
//                         isFinished: false
//                     }
//                 },
//                 {
//                     $group: {
//                         _id: null,
//                         count: { $sum: 1 }
//                     }
//                 },
//                 {
//                     $project: {
//                         _id: 0,
//                         count: 1
//                     }
//                 }
//             ])

//         }

//         sendFinalResponse(res, 200, true, "Stats", stats)
//     } catch (error) {
//         next(error)
//     }

// }
// export default stats