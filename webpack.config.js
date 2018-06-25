module.exports = {
    entry: "./app/App.js",
    output: {
      path: __dirname+"/public",
      filename: "vendor.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },
    mode: "development"
  }