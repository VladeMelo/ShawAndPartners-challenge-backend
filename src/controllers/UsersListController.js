const axios = require('axios');
const api = require('../config/api');

class UsersListController {
  async index(request, response) {
    const { since } = request.query;

    const responseAxios = await axios({
      method: 'get',
      url: `${api.url}`,
      params: { since }
    })
    .then(response => response.data)
    .catch(response => console.log(response))

    return response.json(responseAxios);
  }
}

module.exports = UsersListController;
