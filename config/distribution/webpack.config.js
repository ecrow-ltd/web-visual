const paths = require('../paths');
const argv = require('yargs');
const package = require('../../package.json');

// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

/**
 * Set the mode of the passed-in argument.
*/
let mode = argv.env;

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
            fileName: `${package.name}.min.umd.js`,
            library: 'visualweb',
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
            fileName: `${package.name}.min.umd.js`,
            library: 'visualweb',
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
    throw new Error('No mode assigned.')
}

module.exports = config;