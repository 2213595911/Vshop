const productionPlugins = []
if (process.env.NODE_ENV === 'production') {
  productionPlugins.push('transform-remove-console')
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ...productionPlugins,
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
}
