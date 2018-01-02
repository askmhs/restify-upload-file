/**
 * InternalServerErrorResponse
 *
 * @param res
 * @param message
 * @param code
 */
export default (res, message, code = 5) => {
    res.status(500);
    res.json({
        success: false,
        error_code: code,
        message: message,
        data: null
    });
}