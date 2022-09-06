const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  const url = `${BASE_URL}/constellations`;
    axios.get(url)
  .then((response) => {
    console.log(response.data);
  });
}

function create(body) {
  const url = `${BASE_URL}/constellations`;
  axios.post(url, body)
  .then((response) => {
    console.log(response.data);
  });
}

function show(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios.get(url)
  .then((response) => {
    console.log(response.data)
  });
}

function update(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios.put(url, body)
  .then((response) =>{
    console.log(response.data)
  });
}

function destroy(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios.delete(url)
  .then((response) =>{
    console.log(response.data)
  })
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
