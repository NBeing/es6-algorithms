module.exports = {
    entry: "./src/merge_sort.js",
    output: {
        filename: "./dist/bundle.js"
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
}