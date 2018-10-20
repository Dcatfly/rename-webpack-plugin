module.exports = class Rename {
  constructor(options) {
    this.options = {...options};
  }

  apply(compiler) {
    compiler.hooks.emit.tap('Rename.emit', compilation => {
      const {assets} = compilation;
      const {originNameReg, targetName} = this.options;
      const originFiles = Object.keys(assets).filter(fileName => new RegExp(originNameReg).test(fileName));

      originFiles.forEach(fileName => {
        assets[fileName.replace(originNameReg, targetName)] = assets[fileName];
        delete assets[fileName];
      });

    });
  }
};
