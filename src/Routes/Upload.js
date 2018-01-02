import BadRequestResponse from "../Responses/BadRequestResponse";
import InternalServerErrorResponse from "../Responses/InternalServerErrorResponse";
import {UploadController} from "../Controllers/UploadController";
import SuccessResponse from "../Responses/SuccessResponse";

module.exports = (server) => {

    /**
     * Upload route
     */
    server.post('/upload', async(req, res) => {
       if (typeof req.files.image === 'object') {
           try {
               const result = await new UploadController(req.files.image).upload();
               SuccessResponse(res, "Successfully upload image!", result);
           } catch (exception) {
               InternalServerErrorResponse(res, exception.message);
           }
       } else {
           BadRequestResponse(res, "Invalid image!");
       }
    });
};