import { Request, Response, ErrorRequestHandler } from "express";

interface error extends ErrorRequestHandler {
  code?: number;
  message: string;
}

export const errorHandler = async (
  error: error,
	_req: Request,
	res: Response,
) => {
  error.code = error.code || 500;
  error.message = error.message || 'Internal server error';
  res.status(error.code).json({Error: error.message });
}

export const generateError = (message: string, code: number) => {
  const error = new Error(message) as error;
  error.code = code;
  return error;
};
