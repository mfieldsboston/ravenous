const clientId = 'Bd3wmgYqWnWIBz3v7z6XCw';
//const secret = 'X8ZOXwb67ctyznvbBxtqnc1UYCe5lTthwUzYfs9s0lLcm9iu8ugaYt9jJtn8qUtC';
const secret = '****************************************************************';
const accessToken;

const Yelp = {
  .getAccessToken() {
    if(accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    return fetch('https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + secret, {method: 'POST'});
  }
};
