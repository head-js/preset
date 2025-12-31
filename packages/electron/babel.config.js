module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          electron: '24'
        }
      }
    ]
  ]
};
