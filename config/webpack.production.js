import webpackMerge from 'webpack-merge';

import common from './webpack.common.js';

export default webpackMerge.merge(common, {
  mode: 'production',
  output: {
    filename: "../dist/[name].bundle.js",
  },
  watchOptions: {
    ignored: /node_modules/,
  },
});