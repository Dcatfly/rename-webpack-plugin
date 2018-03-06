# rename-webpack-plugin
> Webpack plugin for rename output files. Because webpack is named using hash mode, you can not specify only part of the file.

## Install
```js
npm install --save-dev rename-webpack-plugin
```
```js
yarn add --dev rename-webpack-plugin
```

## Usage
```js
const RenameWebpackPlugin = require('rename-webpack-plugin')

module.exports = {
  entry: 'app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.[chunkhash].js'
  },
  plugins: [
    new RenameWebpackPlugin({
        originNameReg: /(.*)thirdpart\..*\.js/,
        targetName: '$1thirdpart.js'
    })
  ]
}
```

## Options
|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**[`originNameReg`](#)**|`{RegExp}`||This regexp is to filter out the name of the webpack output file you want to replace|
|**[`targetName `](#)**|`{String}`||This string is the name you want, because the plug-in uses the string `replace` method, so the string can use the grouping like `$1`|