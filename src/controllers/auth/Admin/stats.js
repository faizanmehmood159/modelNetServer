import Complaint from "../../../models/complaint.js";
import User from "../../../models/user.js";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import Installation from "../../../models/installation.js";


const stats = async (req, res, next) => {
        try {
            const stats = {
                totalComplaints:await Complaint.countDocuments({ }),
                totalResolvedComplaints:await Complaint.countDocuments({ status: "resolved" }),
                totalInstallation: await Installation.countDocuments({ status: "approved" }),
                totalUsers: await User.countDocuments({})

            }

            sendFinalResponse(res, 200, true, "Stats", stats)



      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }

}
export default stats