import request from 'request';
import Promise from 'bluebird';
import { App } from '../constants';
var socket = require('socket.io-client');
var io = require('./sails.io')(socket);

io.sails.url = App.API_URL;

function _buildUrl(path, params) {
  const apiUrl = (App.API_VERSION) ? App.API_URL + '/' + App.API_VERSION : App.API_URL;
  let baseUrl = apiUrl + (path.charAt(0) === '/' ? path : '/' + path);

  var cnt = 0;
  if (params) {
    for (var key in params) {
      var item = params[key];
      baseUrl = baseUrl + (cnt === 0 ? '?' : '&') + key + '=' + item;
      cnt++;
    }
  }
  return baseUrl;
}

const Auth = {
  login: function login(data, params) {
    return new Promise(function(resolve, reject){
      const loginType = data.loginType || 'ldap';
      return io.socket.post(
        _buildUrl('/auth/' + loginType),
        {
          username: data.username,
          password: data.password
        },
        function gotLoginResults(body, JWR) {
          if (JWR.statusCode !== 2001) {
            return reject(body);
          }

          return resolve(body);
        });
    });
  }
};

export default {
  Auth
};
