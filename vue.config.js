// eslint-disable-next-line no-unused-vars
const path = require('path');
const webpack = require('webpack');
const packageVersion = require('./package.json').version;
console.log(123456);
// webpack plugins
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
//產生版本號檔案static/
const GitRevisionPlugin = require('git-revision-webpack-plugin');

// init git revision plugin and get git commit hash
const gitRevisionPlugin = new GitRevisionPlugin();
let gitCommitHash = gitRevisionPlugin.commithash();
gitCommitHash = gitCommitHash && gitCommitHash.substr(0, 7);
// console.log('delete system', process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'production' && process.env.npm_lifecycle_event === 'version') {
//     process.env.VERSION = JSON.stringify(gitCommitHash);
//     console.log(`set version: ${gitCommitHash}`);
// }

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir),也可以是一个绝对路径
    indexPath: 'index.html',
    // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    filenameHashing: true,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: process.env.NODE_ENV === 'development',
    runtimeCompiler: true,
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 3000,
        https: false,
        hotOnly: false
    },
    css: {
        requireModuleExtension: false
    },
    // transpileDependencies: ['vue-echarts', 'resize-detector'],
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false
        },
        versionOptions: {
            path: resolve('dist'),
            env: process.env,
            versionDirectory: 'static'
        }
    },
    chainWebpack: config => {
        // Ref: https://cli.vuejs.org/migrating-from-v3/#vue-cli-plugin-typescript
        // Vue CLI v4預設優先解析.ts(x)檔案
        // 避免import vue元件的沒有加上副檔名時優先import .ts檔案
        config.resolve.extensions.prepend('.vue');

        config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');
        config.resolve.alias.set('@ajax', resolve('src/utils/ajax'));
        // config.resolve.alias.set('moment', resolve('node_modules/moment/min/moment.min.js')); // withoud bundle many locale js files

        config.plugin('ignore').use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)); // 忽略/moment/locale下的所有文件
        config.plugin('loadshReplace').use(new LodashModuleReplacementPlugin()); // 減少lodash的bundle size
        config.plugin('gitRevision').use(gitRevisionPlugin);

        config.optimization.minimizer('terser').tap(args => {
            args[0].terserOptions.compress.drop_console = true;
            args[0].terserOptions.compress.drop_debugger = true;
            return args;
        });

        // define 'VUE_APP_GIT_COMMIT_HASH', 'VUE_APP_PACKAGE_VERSION'
        config.plugin('define').tap(args => {
            // console.log(args);

            args[0]['process.env']['VUE_APP_GIT_COMMIT_HASH'] = JSON.stringify(gitCommitHash);
            args[0]['process.env']['VUE_APP_PACKAGE_VERSION'] = JSON.stringify(packageVersion);

            return args;
        });

        // inject git commit hash into index.html
        config.plugin('html').tap(args => {
            args[0]['GIT_COMMIT_HASH'] = JSON.stringify(gitCommitHash);
            args[0]['PACKAGE_VERSION'] = JSON.stringify(packageVersion);

            return args;
        });
    }
};
