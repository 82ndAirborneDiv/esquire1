const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const dotenv = require('dotenv')
const paths = require('../config/paths')

// Taking all the variables from .env files and turning them in process.env variables
dotenv.config({ path: paths.appDotEnv })

// We only want variables that start with APP_, so filter those out
let env = Object.keys(process.env)
  .filter(key => key.startsWith('APP_'))
  .reduce((e, key) => {
    e[key] = JSON.stringify(process.env[key])
    return e
  }, {})

// Environment variables
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = parseInt(process.env.APP_PORT, 10) || 3000
const HOST = process.env.APP_HOST || '0.0.0.0'

// Webpack configuration
const webpackConfig = require('../config/webpack.dev.config')(env)
const compiler = webpack(webpackConfig)

// Since we're using the Node API, we have to set devServer options here
//const devServer = new WebpackDevServer(compiler, {
//  compress: true,
//  contentBase: paths.appPublic,
//  watchContentBase: true,
//  hot: true,
 // host: '0.0.0.0',
//  publicPath: paths.publicPath,
//  overlay: false,
//  historyApiFallback: true
//})

// Launch WebpackDevServer
/*devServer.listen(PORT, HOST, err => {
  if (err) {
    return console.log(err)
  }
  console.log(chalk.cyan(`Starting the development server on ${HOST}:${PORT}...\n`))
})*/
compiler.run((err, stats) => {
  console.log('\n')
  if (err) {
    console.log(chalk.red('Webpack failed to compile. Check your configuration.\n'))
    console.log(chalk.red(err.stack || err))
    if (err.details) {
      console.error(chalk.red(err.details))
    }
    return
  }

  const output = stats.toJson('normal')

  if (stats.hasErrors()) {
    console.log(chalk.redBright('Webpack failed to compile. Try again.\n'))
    console.log(chalk.redBright(`Webpack found ${output.errors.length} errors.`))
    console.log(chalk.redBright('Errors:'))
    output.errors.forEach(error => {
      console.log(chalk.redBright(`${error}`))
    })
    console.log('\n')
  }

  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright(`Webpack found ${output.warnings.length} warnings.`))
    console.log(chalk.yellowBright('WARNINGS:'))
    output.warnings.forEach((warning, i) => {
      console.log(chalk.yellowBright(`${warning}`))
    })
    console.log('\n')
  }

  console.log(chalk.green('Webpack build completed successfully.'))
  console.log(chalk.green(`Output is in ${paths.appBuild}`))
})
