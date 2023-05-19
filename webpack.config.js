const path = require('path')
const webpack_plugin = require('html-webpack-plugin')

//webpack中的所有的配置信息
module.exports = {

    mode: 'development',
    //指定入口文件
    entry: './src/index.ts',

    //指定打包文件所在的目录
    output: {
        //指定目录
        path: path.resolve(__dirname, 'dist'),

        //打包后文件的名字
        filename: 'bundle.js',

        //不使用箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    //指定webpack打包时要使用的模块
    module: {

        //指定要加载的规则
        rules: [
            {
                //test指定的是规则生效的文件
                test: /\.ts$/,
                //使用loader处理test指定的文件
                use: [
                    //配置babel
                    {
                        //指定加载器
                        loader: 'babel-loader',

                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",

                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome": "68",
                                            "ie": '10'
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",

                                        //使用corejs的方式,usage按需加载
                                        "useBuiltIns": 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                //要排除的文件
                exclude: /node_modules/
            },
            //设置less文件的处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            //兼容最新的两个版本的浏览器
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new webpack_plugin({
            title: '自定义title',
            //模版网页
            template: './src/index.html'
        })
    ],

    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }

}