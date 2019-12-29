const paths = require('../paths');
const package = require('../../package.json');

// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
// Package Name
var slicePosition = package.name.indexOf('/');
slicePosition = slicePosition > 0 ? slicePosition + 1 : 0;
const packageName = package.name.slice(slicePosition);

module.exports = (mode) => {
    /**
     * Define configurations.
    */
    const configurations = {
        /**
         * Production
         */
        'production': ({ config }) => {
            config.mode = 'production';
            config.devtool = false;
            config.output = {
                path: `${paths.DISTRIBUTION}`,
                filename: `${packageName}.min.umd.js`,
                library: 'webVisual',
                libraryTarget: 'umd',
                globalObject: 'window'
            },
            // TODO: Experiment with Google Closure instead of Uglify
            config.plugins.push(new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        drop_console: true,
                        passes: 1
                    },
                    warnings: false
                }
            }));
            return config;
        },
        'development': ({ config }) => {
            config.mode = 'development';
            config.devtool = 'source-map';
            config.output = {
                path: `${paths.DISTRIBUTION}`,
                filename: `${packageName}.umd.js`,
                library: 'webVisual',
                libraryTarget: 'umd',
                globalObject: 'window'
            },
            // TODO: Experiment with Google Closure instead of Uglify
            config.module.rules.push({
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            })
            return config;
        }
    }

    /**
     * Create base configuration.
    */
    let config = {
        target: 'web',
        entry: `${paths.ROOT}/src/index.tsx`,
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },
        plugins: [],
        resolve: {
            plugins: [
                new TsConfigPathsPlugin()
            ],
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
        }
    }

    /**
     * Alter configuration based on the mode.
    */
    if(configurations[mode]) {
        config = configurations[mode]({config: {...config}});
    } else {
        throw new Error('No mode assigned.');
    }

    return config;
};