import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import logging from "../../utils/log";

const errorHandler = (
  error: unknown,
  _request: Request,
  reply: Response,
  _next: NextFunction
) => {
  logging.error(error);
  if (error instanceof ZodError) {
    reply.status(403).json({
      status: false,
      message: error.message,
      error: error,
    });
  } else if (error instanceof Error) {
    reply.status(400).json({
      status: false,
      message: error.message,
      error: error,
    });
  } else {
    reply.status(500).json({
        status: false,
        message: "unknown error",
        error: error
    })
  }
};

export default errorHandler;
