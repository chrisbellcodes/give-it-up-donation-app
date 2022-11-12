const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      resolve:{
            fallback: { 
                "os": false,
                "fs": false,
            },
        }   
    },
  },
};