const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      // {
      //   test: /\.css$/i, //.(css|scss)$/,
      //   include: path.resolve(__dirname, 'src'),
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader', 'postcss-loader'],
      // },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'dist'),
    },
    proxy: {
      '/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/*': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/home/*': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/home/gameplayers/*': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/home/joingame': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/home/leavegame': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Recess',
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};
