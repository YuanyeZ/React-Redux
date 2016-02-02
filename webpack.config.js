/**
 * Created by tedz on 2/2/2016.
 */

var path = require('path');
var entryPath = path.join(__dirname, 'src/js');
var outputPath = path.join(__dirname, 'src');
module.exports = {
    entry: {
        javascript: path.join(entryPath, 'Main.js')
    },
    output: {
        path: outputPath,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};