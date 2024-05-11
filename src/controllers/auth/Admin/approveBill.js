  import Bill from "../../../models/bill.js";

  const approveBill = async (req, res, next) => {
    try {
      const { billId } = req.body; // Assuming billId is passed as a URL parameter
      const updatedBill = await Bill.findByIdAndUpdate(billId, { status: "approved" }, { new: true });

      if (!updatedBill) {
        return res.status(404).json({ success: false, message: "Bill not found" });
      }

      return res.status(200).json({ success: true, message: "Bill approved successfully", bill: updatedBill });
    } catch (error) {
      console.error("Error approving bill:", error);
      next(error); // Pass the error to the error-handling middleware
    }
  };

  export default approveBill;
