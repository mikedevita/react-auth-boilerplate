import { _buildUrl } from './Utils';
import ApiBase from './ApiBase';

const Dashboard = {
  stats: function stats(token, params = { sort: 'id DESC', limit: 100 }) {
    ApiBase.find(
      _buildUrl('dashboard/stats'),
      Object.assign({}, params, token),
    )
    .then((response) => {
      console.debug(response);
    });
  }
};

export default Dashboard;
