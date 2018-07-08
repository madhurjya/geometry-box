import path from 'path';
import { NamedModulesPlugin, HotModuleReplacementPlugin } from 'webpack';
console.log('this is diectory ' + __dirname);
export default {
    target: 'web',
    mode: 'development',
    context: path.join(__dirname, '../src'),
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './app/index.jsx'
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'scripts/index.js',
        publicPath: '/scripts'
    },
    resolve: {
        alias: {
            'configureStore': './store/configureStore.dev'
        }
    },
    devtool: ' inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin()
    ]
};