/**
 *
 * @export
 * @class ResponseService
 */
export default class ResponseService {
  /**
     * Creates an instance of ResponseService.
     * @memberof ResponseService
     */
  /**
     *
     * @param  {statusCode} statusCode
     * @param  {message} message
     * @param  {data} data
     * @return {error}@memberof ResponseService
     */
  static setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = 'success';
  }

  /**
     *
     * @param  {statusCode} statusCode
     * @param  {message} message
     * @return {ResponseService}@memberof ResponseService
     */
  static setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'error';
  }

  /**
     *
     * @param  {res} res
     * @return
     * @return {ResponseService}@memberof ResponseService
     */
  static send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };

    if (this.type === 'success') {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.statusCode,
      message: this.message,
    });
  }
}