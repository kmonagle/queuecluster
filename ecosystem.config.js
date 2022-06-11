module.exports = {
  apps : [{
    name: "queuecluster",
    script: "./index.js",
    instances: 4,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
