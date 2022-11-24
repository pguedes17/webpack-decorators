
export default {
  entry: {
    cli: "./src/index.js",
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                "@babel/plugin-proposal-decorators", 
                {
                  "legacy": true
                }
              ],
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
    ],
  }
};