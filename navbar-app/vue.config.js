const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  devServer: {
    port: 8082
  },
  publicPath: 'http://localhost:8082/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'navbar',
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          './Navbar': './src/Navbar'
        }
      })]
  }
}
