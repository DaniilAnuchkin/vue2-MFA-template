const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  devServer: {
    port: 8080
  },
  publicPath: 'http://localhost:8080/',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          main: 'main@http://localhost:8081/remoteEntry.js',
          navbar: 'navbar@http://localhost:8082/remoteEntry.js'
        },
        exposes: {}
      })]
  }
}
