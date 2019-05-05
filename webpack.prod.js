const webpack = require('webpack');
const fs = require('fs');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const common = require('./webpack.common');
const routes = require('./webpack.routes.json');
const settings = require('./webpack.settings');

const cleanOptions = {
  cleanOnceBeforeBuildPatterns: [
    '**/*'
  ]
};

settings.cleanIgnoreFiles.forEach((file) => {
  cleanOptions.cleanOnceBeforeBuildPatterns.push(`!${file}`);
});

if (process.env.PRERENDER) {
  cleanOptions.cleanOnceBeforeBuildPatterns.push(`${settings.prerender.export}/**/*`);
}

const plugins = [
  new AssetsPlugin({
    filename: 'assets.json',
    useCompilerPath: true,
    entrypoints: true
  }),
  new CleanWebpackPlugin(cleanOptions),
  new CompressionPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: new RegExp('\\.(js|css)$'),
    threshold: 10240,
    minRatio: 0.8
  }),
  new webpack.HashedModuleIdsPlugin(),
  new MiniCssExtractPlugin({
    filename: `${settings.productionFileName}.css`,
    chunkFilename: `${settings.productionChunkFileName}.css`
  }),
  new CopyPlugin(settings.copyPaths),
  new InjectManifest({
    exclude: [
      /\.twig$/,
      /\.DS_Store$/,
      /\.keep$/,
      /\.gz$/,
      /\.jpg$/,
      /\.jpeg$/,
      /\.png$/,
      /\.svg$/
    ],
    swSrc: settings.serviceWorkerPath.entry,
    swDest: settings.serviceWorkerPath.export,
    importWorkboxFrom: 'disabled',
    importScripts: ['workbox-sw.js']
  }),
  {
    apply: (compiler) => {
      // This method runs after the webpack build finishes
      compiler.hooks.done.tap('afterDone', () => {
        if (!fs.existsSync(settings.pathHelper.join(settings.export, 'assets.json'))) {
          return;
        }

        if (!settings.shouldGenerateAssetTemplates) {
          // fs.unlinkSync(settings.pathHelper.join(settings.export, 'index.html'));
          fs.unlinkSync(settings.pathHelper.join(settings.export, 'assets.json'));
          return;
        }

        const assetsDir = settings.pathHelper.join(settings.prerender.export, settings.assetTemplateDirName);

        if (!fs.existsSync(assetsDir)) {
          fs.mkdirSync(assetsDir);
        }

        fs.readFile(require.resolve(settings.pathHelper.join(settings.export, 'assets.json')), (err, data) => {
          const assets = JSON.parse(data).main;

          // NOTE: inline script is needed for our component css extraction. It could be an external file, but we can save one extra resource load
          // via Evan You: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/85#issuecomment-379430752
          // Hopefully this issue in Webpack is resolved soon:
          // 1. https://github.com/webpack-contrib/mini-css-extract-plugin/issues/113
          // 2. https://github.com/webpack-contrib/mini-css-extract-plugin/issues/85
          const stylesFile = fs.readdirSync(settings.export).find(file => file.startsWith('styles') && file.endsWith('.js'));
          const stylesTag = `<script>${fs.readFileSync(settings.pathHelper.join(settings.export, stylesFile), 'utf8')}</script>`;

          fs.writeFileSync(settings.pathHelper.join(assetsDir, settings.jsTemplateFilename),
          `${stylesTag}
          <script type="text/javascript" src="${assets.js[1]}"></script>
          <script type="text/javascript" src="${assets.js[2]}"></script>`);

          fs.writeFileSync(settings.pathHelper.join(assetsDir, settings.cssTemplateFilename),
            `<link rel="stylesheet" href="${assets.css}">`);
        });

        // fs.unlinkSync(settings.pathHelper.join(settings.export, 'index.html'));
        fs.unlinkSync(settings.pathHelper.join(settings.export, 'assets.json'));
      });
    }
  }
];

if (process.env.PRERENDER) {
  const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

  plugins.push(new PrerenderSPAPlugin({
    indexPath: settings.pathHelper.join(settings.export, 'index.html'),
    outputDir: settings.prerender.export,
    postProcess(context) {
      context.html = settings.prerender.updateHtml(context.html);
      context.outputPath = settings.pathHelper.join(settings.prerender.export, context.route, settings.prerender.filename);

      return context;
    },
    routes,
    renderer: new Renderer({
      inject: {
        isPrendering: true
      },
      injectProperty: 'prerender',
      maxConcurrentRoutes: 10,
      renderAfterDocumentEvent: 'page-rendered',
      headless: settings.prerender.headless
    }),
    staticDir: settings.export
  }));
}

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: `${settings.productionFileName}.js`,
    path: settings.export,
    library: settings.libraryName,
    publicPath: '/',
    chunkFilename: `${settings.productionChunkFileName}.js`
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      }),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: false
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
         test: /[\\/]node_modules[\\/]/,
         chunks: 'all',
         name: 'vendor',
         enforce: true
        },
        styles: {
          name: 'styles',
          test: m => m.constructor.name === 'CssModule',
          chunks: 'all',
          minChunks: 1,
          enforce: true
        }
      }
    }
  },
  plugins
});
