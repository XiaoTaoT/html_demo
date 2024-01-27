const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false, //是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
    devServer: {
        port: '8081',
        // open:true
        // before: require('./mock/mock-server'),
        proxy: {
            "/dev-api/8201": {
                target: "http://localhost:8201",
                changeOrigin: true,
                pathRewrite: {
                    '/dev-api/8201': '', // rewrite path
                },
            },
            "/dev-api/8202": {
                target: "http://localhost:8202",
                changeOrigin: true,
                pathRewrite: {
                    '/dev-api/8202': '', // rewrite path
                },
            },
            "/dev": {
                target: "http://localhost:8080",
                changeOrigin: true,
                pathRewrite: {
                    '/dev': ''
                }
            }
        },
        disableHostCheck: true,
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '~@': resolve('src')
            }
        }
    },
    /*css: {
        // requireModuleExtension: true,
        // 测试IE9的时候需要设置为true
        // extract: true, // dev:false,production:true;自动设置
        // sourceMap: true,
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            },
        }
    },*/
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [],
        },
    },

    chainWebpack(config) {
        // it can improve the speed of the first screen, it is recommended to turn on preload
        config.plugin('preload').tap(() => [
            {
                rel: 'preload',
                // to ignore runtime.js
                // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
                fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
                include: 'initial'
            }
        ])

        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}
