const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
   context: __dirname,
   entry: './client/src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true,
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'client/public/index.html'),
         filename: 'index.html'
      }),
      new CopyPlugin({
        patterns: [
            { from: "./client/public/build", to: "Build" },
            { from: "./client/public/assets", to: "assets"}
          ],
          options: {
            concurrency: 100,
          },
      })
   ]
};