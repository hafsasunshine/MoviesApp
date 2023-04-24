module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
   //added
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    //end of added
  };
};
