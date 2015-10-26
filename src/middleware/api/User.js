import { _buildUrl } from './Utils';
import ApiBase from './ApiBase';

const User = {
  findAll: function findAll(token, params = { sort: 'id DESC', limit: 100 }) {
    return ApiBase.find(
      _buildUrl('user'),
      Object.assign({}, params, token),
    );
  }
};
export default User;
