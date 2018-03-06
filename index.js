

module.exports = class Rename {
  constructor(options){
    this.options = {...options}
  }

  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      const {assets} = compilation;
      const {originNameReg, targetName} = this.options
      let originFiles = Object.keys(assets).filter(fileName => new RegExp(originNameReg).test(fileName))

      originFiles.forEach(fileName => {
        assets[fileName.replace(originNameReg, targetName)] = assets[fileName];
        delete assets[fileName]
      })

      callback()

    })
  }
}