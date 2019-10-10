const handleResponse = (data, res) => {
  return res.json(data);
};

const handleError = (err, res) => {
  return res.status(400).json(`Error: ${err}`);
};

module.exports = {
  handleResponse,
  handleError,
};
