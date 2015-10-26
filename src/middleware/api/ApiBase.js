import Promise from 'bluebird';
var io = require('./sails.io')(require('socket.io-client'));
io.sails.url = 'http://localhost:1337';

const ApiBase = {
  // findOne: function findOne(path, options){
  //
  // },
  find: function find(path, options) {
    return new Promise(function loginPromise(resolve, reject) {
      return io.socket.get(
        path,
        options,
        function gotStats(body, JWR) {
          if (JWR.statusCode !== 200) {
            return reject(JWR);
          }
          return resolve(body);
        }
      );
    });
  }
  // create: function create(path, options){
  //
  // },
  // update: function update(path, options){
  //
  // },
  // destroy: function destroy(path, options){
  //
  // }
}

export default ApiBase;
