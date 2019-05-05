const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const settings = require('./webpack.settings');

const isDev = process.env.NODE_ENV === 'development';

const plugins = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: settings.pathHelper.join(settings.entry, 'template.html')
  })
];

if (process.env.ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: [
    settings.entryJs,
    settings.entryCss
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [settings.entry]
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev } },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
              data: '@import "@/sass/abstracts/_all.scss";'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'vue-svg-loader',
            options: {
              svgo: {
                plugins: [
                  { removeDoctype: true },
                  { removeComments: true },
                  { cleanupIDs: false }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.(woff(2)?)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts'
            }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: isDev ? 'vue/dist/vue.js' : 'vue/dist/vue.min.js',
      '@': settings.entry,
      scrollmagic: settings.pathHelper.resolve('node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      'animation.gsap': settings.pathHelper.resolve('node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')
    }
  },
  plugins
};
