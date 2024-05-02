import Installation from "../../../models/installation.js"; 
import sendFinalResponse from "../../../utils/sendFinalResponse.js";

const getAllInstallations = async (req, res, next) => {
  try {
    // Fetch all installations from the database
    const installations = await Installation.find();
    console.log(installations)
    // Send response with fetched installations
    return sendFinalResponse(res, 200, true, "Installations retrieved successfully", { installations });
  } catch (error) {
    console.error("Error getting installations:", error);
    next(error);
  }
};

export default getAllInstallations;
