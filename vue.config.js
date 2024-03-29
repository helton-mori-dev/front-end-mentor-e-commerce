const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/front-end-mentor-e-commerce/" : "/",
  devServer: {
    historyApiFallback: true,
  },
})