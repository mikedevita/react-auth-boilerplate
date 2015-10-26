export function _buildUrl(path, options = { version: 'v1', port: 1337 }) {
  const apiUrl = (options.version) ? '/' + options.version + '/' + path : path;
  return apiUrl;
}
