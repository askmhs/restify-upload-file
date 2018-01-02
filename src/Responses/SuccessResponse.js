/**
 * SuccessResponse
 *
 * @param res
 * @param message
 * @param data
 */
export default (res, message, data = null) => {
    res.status(200);
    res.json({
        success: true,
        error_code: null,
        message: message,
        data: data
    });
}