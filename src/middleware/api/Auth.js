import { _buildUrl } from './Utils';
import ApiBase from './ApiBase';

const Auth = {
  login: function login(data) {
    const loginType = data.loginType;
    ApiBase.post(
      _buildUrl('/auth/' + loginType),
      { username: data.username, password: data.password}
    )
    .then((response) => {
      console.debug(response);
    });
  }
};

export default Auth;
