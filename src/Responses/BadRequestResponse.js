/**
 * BadRequestResponse
 *
 * @param res
 * @param message
 * @param code
 */
export default (res, message, code = 3) => {
    res.status(400);
    res.json({
        success: false,
        error_code: code,
        message: message,
        data: null
    });
}