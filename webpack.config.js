const path = require('path');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: {
        src: PATHS.src
    },
    output: {
        path: PATHS.build,
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {

        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,
        //hot: true,
        //inline: true,
        //progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        contentBase: 'build'
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
    ]
};