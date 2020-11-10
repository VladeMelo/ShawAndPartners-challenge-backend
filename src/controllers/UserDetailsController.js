const axios = require('axios');
const api = require('../config/api');

class UserDetailsController {
  async index(request, response) {
    const { username } = request.params;

    const responseAxios = await axios({
      method: 'get',
      url: `${api.url}/${username}/details`
    })
    .then(response => response.data)
    .catch(() => console.log('FAIL'))

    return response.json(responseAxios);
  }
}

module.exports = UserDetailsController;
