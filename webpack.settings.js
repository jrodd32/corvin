const path = require('path');

const libraryName = 'BaseSite';

const assetsOutputPath = path.resolve(__dirname, 'web/dist');
const assetsSourcePath = path.resolve(__dirname, 'src');

const entryCss = path.resolve(assetsSourcePath, 'sass', 'app.scss');
const entryJs = path.resolve(assetsSourcePath, 'js', 'app.js');

const productionFileName = '[name].[chunkhash]';
const productionChunkFileName = '[name].[chunkhash]';

const shouldGenerateAssetTemplates = false;
const assetTemplateDirName = 'assets';
const jsTemplateFilename = 'js.blade.php';
const cssTemplateFilename = 'css.blade.php';

const prerenderOutputPath = assetsOutputPath;
const prerenderFileName = 'index.html';
const prerenderHeadless = false;
const prerenderCallback = (html) => {
  return html.replace(/<script charset="utf-8" src="(.*).js"><\/script>/g, '')
    // .replace(/<script type="text\/javascript" src="(.*).js"><\/script>/g, '')
    .replace(/<link rel="stylesheet" type="text\/css" href="(.*).css">/g, '')
    // .replace(/<link href="(.*).css" rel="stylesheet">/g, '')
    .replace(/<script async="" src=""><\/script>/g, '')
    .replace('<!-- MANIFEST -->', '<link rel="manifest" href="/manifest.json">')
    .replace('<!-- FAVICON -->', '<link rel="icon" type="image/png" href="/favicon.png">');

    // .replace('<!-- CSS -->', "@include('assets.css')")
    // .replace('<!-- JS -->', "@include('assets.js')")
};

const cleanIgnoreFiles = [];

const manifestFilename = 'manifest.json';
const manifestEntryPath = `${assetsSourcePath}/${manifestFilename}`;
const manifestExportPath = `${assetsOutputPath}/${manifestFilename}`;

const fontsFolder = '/fonts/';
const fontsEntryPath = assetsSourcePath + fontsFolder;
const fontsExportPath = assetsOutputPath + fontsFolder;

const imagesFolder = '/images/';
const imagesEntryPath = assetsSourcePath + imagesFolder;
const imagesExportPath = assetsOutputPath + imagesFolder;

const serviceWorkerFilename = 'service-worker.js';
const serviceWorkerEntryPath = `${assetsSourcePath}/${serviceWorkerFilename}`;
const serviceWorkerExportPath = `${assetsOutputPath}/${serviceWorkerFilename}`;

const workboxFilename = 'workbox-sw.js';
const workboxEntryPath = `${assetsSourcePath}/${workboxFilename}`;
const workboxExportPath = `${assetsOutputPath}/${workboxFilename}`;

const faviconFilename = 'favicon.png';
const faviconEntryPath = `${assetsSourcePath}/${faviconFilename}`;
const faviconExportPath = `${assetsOutputPath}/${faviconFilename}`;

module.exports = {
  libraryName,
  pathHelper: path,
  entry: assetsSourcePath,
  export: assetsOutputPath,
  productionFileName,
  productionChunkFileName,
  entryCss,
  entryJs,
  cleanIgnoreFiles,
  copyPaths: [
    { from: imagesEntryPath, to: imagesExportPath },
    { from: fontsEntryPath, to: fontsExportPath },
    { from: manifestEntryPath, to: manifestExportPath },
    { from: workboxEntryPath, to: workboxExportPath },
    { from: faviconEntryPath, to: faviconExportPath }
  ],
  prerender: {
    export: prerenderOutputPath,
    filename: prerenderFileName,
    headless: prerenderHeadless,
    updateHtml: prerenderCallback
  },
  imagesPath: {
    entry: imagesEntryPath,
    export: imagesExportPath
  },
  serviceWorkerPath: {
    entry: serviceWorkerEntryPath,
    export: serviceWorkerExportPath
  },
  shouldGenerateAssetTemplates,
  assetTemplateDirName,
  jsTemplateFilename,
  cssTemplateFilename
};
