const config = {
  paths: ['tests/acceptance/features/**/*.feature'],
  require: ['tests/acceptance/step-definitions/**/*.ts'],
  requireModule: ['ts-node/register'],
  format: ['summary', 'progress-bar'],
  formatOptions: { snippetInterface: 'async-await' },
  worldParameters: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}

module.exports = {
  default: config
}
