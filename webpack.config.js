console.log(__dirname + "/build");
module.exports = {
  entry: "./src/main.es6",
  output: {
    path: __dirname + "/build",
    filename: "main.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.es6?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/, loader: "json!"
      }
    ]
  }
};