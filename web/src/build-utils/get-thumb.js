const {ENV_CONFIG} = require('../../env-config');

module.exports = (url, thumb) => {
  const temp = url.split('%2F');
  const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${ENV_CONFIG.firebase.storageBucket}/o/`;

  return baseUrl +
    'generated%2F' +
    thumb +
    (temp.length > 1 ? temp[temp.length - 1] : url.split(baseUrl)[1]);
};
