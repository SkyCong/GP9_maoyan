
const path = require('path')
const serverConfig = require('./server-config')
const webpackConfig = require('./webpack-config')

// 全局的配置
const config = {
    path: { // 路径配置
        src: path.join(__dirname, '../src'),
        dist: path.join(__dirname, '../dist'),
        static: path.join(__dirname, '../src/static'),
        stylesheets :path.join(__dirname, '../src/stylesheets')
    },
    serverConfig,
    webpackConfig
}

module.exports = config

