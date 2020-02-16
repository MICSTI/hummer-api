const createError = (status, message) => {
  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
};

const handle = (err, _, res) => {
  const { message } = err;
  res.status(err.status || 500).json({
    message,
  });
};

module.exports.createError = createError;
module.exports.handle = handle;
