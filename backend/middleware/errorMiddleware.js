/* 30-5-2026 : I tried understand below code and following is my understanding, later with chatGPT help i will re-visit again :-
  1. res - is a object will be edit by user on the flow. here 
  2. "res.status(404);" - it says set properties "status" to 404. and move forward. 
  3. next handler will receive res object with above set property. 
  4.

*/


const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // If Mongoose not found set error t to 404 and change message
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
