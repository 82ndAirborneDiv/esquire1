const chalk = require('chalk')
const webpack = require('webpack')
const paths = require('../config/paths')

// Webpack configuration
const webpackConfig = require('../config/webpack.dev.config')()
const compiler = webpack(webpackConfig)

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
