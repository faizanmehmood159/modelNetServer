// import speedTest from "speed-test";
import sendFinalResponse from "../../../utils/sendFinalResponse.js";
import axios from "axios";



const speed = async (req,res,next)=>{

    try {
        const response = await axios.get('https://fast.com/download');
        console.log
        const speedInBytesPerSecond = response.data;
        const speedInMbps = speedInBytesPerSecond / 1024 / 1024 * 8;
        console.log('Download speed: ' + speedInMbps.toFixed(2) + ' Mbps');
        return sendFinalResponse(res, 200, true, 'Download speed: ' + speedInMbps.toFixed(2) + ' Mbps');
    } catch (error) {
        next(error)
    }
}

export default speed