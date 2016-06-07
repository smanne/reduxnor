import defaultConfig from './default';

const config = {
  greeting: 'Hello, this app is running with production settings',
  api: "https://smanne-sails-demo.herokuapp.com"
};

export default Object.assign({}, defaultConfig, config);
