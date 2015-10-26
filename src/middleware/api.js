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
  login: function login(data) {
    return new Promise(function loginPromise(resolve, reject) {
      const loginType = data.loginType || App.DEFAULT_LOGIN_TYPE.toLowerCase();
      return io.socket.post(
        _buildUrl('/auth/' + loginType),
        {
          username: data.identity,
          password: data.password
        },
        function gotLoginResults(body, JWR) {
          if (JWR.statusCode !== 200) {
            return reject({ level: body.type.toLowerCase(), message: body.msg, raw: JWR });
          }

          return resolve(body);
        });
    });
  }
};

const Dashboard = {
  stats: function stats(params = { sort: 'id DESC', limit: 100 }) {
    return new Promise(function loginPromise(resolve, reject) {
      return io.socket.get(
        _buildUrl('/dashboard/stats'),
        params,
        function gotStats(body, JWR) {
          if (JWR.statusCode !== 200) {
            return reject({ error: App.STATUS_CODES[JWR.statusCode], raw: JWR });
          }
          return resolve(body);
        });
    });
  }
};

export default {
  Auth,
  Dashboard
};
