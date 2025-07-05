module.exports = {
  apps: [
    {
      name: 'github-actions-app',
      script: './index.js',
      instances: 1,
      autorestart: true,
      watch: false
    }
  ]
};

