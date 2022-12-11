const handleHttpError = (res, message = 'Something Went Wrong', code = 403) => {
  res.status(code);
  res.json({ error: message });
};

module.exports = { handleHttpError };
