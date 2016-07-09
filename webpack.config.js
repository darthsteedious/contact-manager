module.exports = {
    context: '', // This is context of where we want webpack to look for directories
    entry: '', // This tells webpack where the entry point of this is`${__dirname}/app/index.js`,
    output: { // This whole section sets up output info. First, is where to output, second is name on output, optionally you can specify a sourceMap filename
        path: ``,
        filename: ``,
        sourceMapFilename: ''
    },
    module: { // There are various modules we will need to use, mostly going to be loaders
        loaders: [ // Loaders are plugins available to tell webpack what to deal
            {
                text: new RegExp(), // This should be a regex test to match file types,
                exclude: '', // Things this loader shouldn't look at,
                loader: '', // Name of the loader
                query: { } // This isn't always necessary, but it allows you to provide arguments to a loader
            }
        ]
    },
    resolve: {
        alias: { // This section allows you to define aliases for module imports
        }
    },
    devtool: '' // This specifies the devtool to be used
};