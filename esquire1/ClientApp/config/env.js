const dotenv = require('dotenv')
const paths = require('./paths')

module.exports = function getEnvVariables(nodeEnv) {
  dotenv.config({ path: paths.appDotEnv })

  const aspEnv = nodeEnv.replace(nodeEnv.charAt(0), nodeEnv.charAt(0).toUpperCase())
  process.env.NODE_ENV = nodeEnv
  process.env.ASPNETCORE_ENVIRONMENT = aspEnv

  let env = Object.keys(process.env)
    .filter(key => key.startsWith('APP_'))
    .reduce((e, key) => {
      e[key] = JSON.stringify(process.env[key])
      return e
    }, {})
  env = { ...env, ASPNETCORE_ENVIRONMENT: `"${aspEnv}"`, NODE_ENV: `"${nodeEnv}"` }

  return env
}
