export const API_URL = 'http://localhost:1337';
export const API_VERSION = 'v1';
export const APP_NAME = 'SAP Infrastructure';
export const DEFAULT_LOGIN_TYPE = 'LOCAL';

export const GET_DASHBOARD_STATS = 'GET_DASHBOARD_STATS';
export const GOT_DASHBOARD_STATS = 'GOT_DASHBOARD_STATS';
export const STATUS_CODES = {
  404: {
    message: 'Error 404 Not Found',
    statusCode: 404,
    level: 'error'
  },
  401: {
    message: 'Error Access Denied',
    statusCode: 404,
    level: 'error'
  }
};
