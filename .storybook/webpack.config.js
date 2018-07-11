const path = require("path");

// module.exports = (baseConfig, env, defaultConfig) => {
//   defaultConfig.module.rules.push({
//       test: /\.css$/,
//       loaders: ["style-loader", "css-loader"],
//       include: path.resolve(__dirname, "../"),
//       exclude: /node_modules/
//   });
//   defaultConfig.module.rules.push(  {
//     test: /\.scss$/,
//     loaders: ["style-loader", "css-loader", "sass-loader"],
//     include: path.resolve(__dirname, "../"),
//     exclude: /node_modules/
//   });
//   defaultConfig.resolve.extensions.push(".css", ".scss");
//   return defaultConfig;
// };


module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "../"),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
        exclude: /node_modules/
      },
  //     {
  //       test: /\.md$/,
  //       include: path.resolve(__dirname, "../"),
  //       exclude: /node_modules/
  //       use: [
  //         {
  //           loader: 'html-loader',
  //         },
  //         {
  //           loader: 'markdown-loader',
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.(js)$/,
  //       exclude: /node_modules/,
  //       include: path.resolve(__dirname, "../"),
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['env', 'stage-0', 'react'],
  //           plugins: [
  //             "emotion",
  //             "babel-plugin-macros",
  //             ["transform-runtime", {
  //               polyfill: false,
  //               regenerator: true
  //             }]
  //           ]
  //         }
  //       }
  //     },
  //   ]
  // }
};
