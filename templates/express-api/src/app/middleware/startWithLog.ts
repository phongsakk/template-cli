import { NextFunction, Request, Response } from "express";
import logging from "../../utils/log";

const startWithLog = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  logging.log(`${request.method.toUpperCase()} ${request.path}`);
  next();
};

export default startWithLog;
