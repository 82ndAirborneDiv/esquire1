const dotenv = require('dotenv')
const paths = require('./paths')

module.exports = function getEnvVariables(nodeEnv) {
  dotenv.config({ path: paths.appDotEnv })

  // Node env is lower case, while asp.net core is upper case, so capitalize first letter
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
  if (!env.APP_API_URL) { env.APP_API_URL = JSON.stringify('http://localhost:5000/api') }

  return env
}
