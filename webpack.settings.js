const path = require('path');

const libraryName = 'corvin';

const assetsOutputPath = path.resolve(__dirname, 'web', 'static');
const assetsSourcePath = path.resolve(__dirname, 'src');

const entryCss = path.resolve(assetsSourcePath, 'sass', 'app.scss');
const entryJs = path.resolve(assetsSourcePath, 'js', 'app.js');

const productionFileName = '[name].[chunkhash]';
const productionChunkFileName = '[name].[chunkhash]';

const shouldGenerateAssetTemplates = true;
const assetTemplateDirName = '_twig';
const jsTemplateFilename = 'js.twig';
const cssTemplateFilename = 'css.twig';

const prerenderOutputPath = path.resolve(__dirname, 'templates');
const prerenderFileName = 'index.html';
const prerenderHeadless = false;
const prerenderCallback = (html) => {
  return html.replace(/<script charset="utf-8" src="(.*).js"><\/script>/g, '')
    .replace(/<script type="text\/javascript" src="(.*).js"><\/script>/g, '')
    .replace(/<link rel="stylesheet" type="text\/css" href="(.*).css">/g, '')
    .replace(/<link href="(.*).css" rel="stylesheet">/g, '')
    .replace(/<script async="" src=""><\/script>/g, '')
    .replace('<!-- MANIFEST -->', '<link rel="manifest" href="/static/manifest.json">')
    .replace('<!-- FAVICON -->', '<link rel="icon" type="image/png" href="/static/favicon.png">')

    .replace('<!-- CSS -->', "{% include '_twig/css' %}")
    .replace('<!-- JS -->', "{% include '_twig/js' %}")
    .replace('<body', '<body data-last-updated="{{ craft.superApi.pageDateUpdated(currentSite.handle, craft.app.request.pathInfo)|raw }}"')

    .replace('fade-enter-active', '')
    .replace('fade-enter-to', '')
    .replace('fade-enter', '')
    .replace('v-enter', '')
    .replace('v-enter-active', '')
    .replace(' style="overflow: hidden;"', '')
    .replace('<!-- CRAFT_CDN_VAR -->', '{% set cdnUrl = craft.superApi.cdnUrl %}')
    .replace('<!-- GTM_NOSCRIPT -->', '{% if craft.app.env != "dev" %}<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FMGX93" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>{% endif %}')
    .replace('<!-- PAGE_JSON -->', '{{ craft.superApi.pageJsonScript(currentSite.handle, craft.app.request.pathInfo)|raw }}')
    .replace('<meta name="csrf_token" content="">', '<meta name="csrf_token" content="{{ craft.app.request.getCsrfToken }}">')
    .replace('<meta name="site" content="en">', '<meta name="site" content="{{ currentSite.handle }}">')
    .replace('<html>', '<html lang="{{ craft.app.language }}">')
    .replace('name="cdn_url" content=""', 'name="cdn_url" content="{{ cdnUrl }}"')
    .replace('name="env" content=""', 'name="env" content="{{ craft.app.env }}"')
    .replace(new RegExp('<!-- CRAFT_HEAD_CACHE -->', 'g'), '{% cache globally if craft.app.env != "dev" %}')
    .replace(new RegExp('<!-- CRAFT_HEAD_CACHE_END -->', 'g'), '{% endcache %}')
    .replace(new RegExp('<img src="/static/images/', 'g'), '<img src="{{ cdnUrl }}/images/')
    .replace(new RegExp('<img src="/images/', 'g'), '<img src="{{ cdnUrl }}/images/')
    .replace(new RegExp('<img src="/images/', 'g'), '<img src="{{ cdnUrl }}images/')
    .replace(new RegExp('<img src="/uploads/', 'g'), '<img src="{{ cdnUrl }}uploads/')
    .replace(new RegExp('http://localhost:8000', 'g'), 'https://www.corvin.com')
    .replace(new RegExp('http://localhost:8080', 'g'), 'https://www.corvin.com')
    .replace(new RegExp('corvin.test', 'g'), 'www.corvin.com');
};

const cleanIgnoreFiles = [];

const devServerProxy = {
  '/api': {
    target: 'https://corvin.test',
    secure: false,
    changeOrigin: true
  }
};

const manifestFilename = 'manifest.json';
const manifestEntryPath = `${assetsSourcePath}/${manifestFilename}`;
const manifestExportPath = `${assetsOutputPath}/${manifestFilename}`;

const imagesFolder = '/images/';
const imagesEntryPath = assetsSourcePath + imagesFolder;
const imagesExportPath = assetsOutputPath + imagesFolder;

const serviceWorkerFilename = 'service-worker.js';
const serviceWorkerEntryPath = `${assetsSourcePath}/${serviceWorkerFilename}`;
const serviceWorkerExportPath = `${path.resolve(__dirname, 'web')}/${serviceWorkerFilename}`;

const workboxFilename = 'workbox-sw.js';
const workboxEntryPath = `${assetsSourcePath}/${workboxFilename}`;
const workboxExportPath = `${assetsOutputPath}/${workboxFilename}`;

const faviconFilename = 'favicon.png';
const faviconEntryPath = `${assetsSourcePath}/${faviconFilename}`;
const faviconExportPath = `${assetsOutputPath}/${faviconFilename}`;

const twigFolder = '_twig';
const twigEntryPath = `${assetsSourcePath}/${twigFolder}`;
const twigExportPath = `${prerenderOutputPath}/${twigFolder}`;

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
    { from: manifestEntryPath, to: manifestExportPath },
    { from: workboxEntryPath, to: workboxExportPath },
    { from: faviconEntryPath, to: faviconExportPath },
    { from: twigEntryPath, to: twigExportPath }
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
  cssTemplateFilename,
  devServerProxy
};
