module.exports = class Rename {
  constructor(options) {
    this.options = { ...options };
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('Rename.emit', (compilation) => {
      compilation.hooks.optimizeAssets.tapAsync(
        'Rename.emit',
        (assets, callback) => {
          // Modify assets object here
          const { originNameReg, targetName } = this.options;
          const originFiles = Object.keys(assets).filter((fileName) =>
            new RegExp(originNameReg).test(fileName)
          );

          originFiles.forEach((fileName) => {
            assets[fileName.replace(originNameReg, targetName)] =
              assets[fileName];
            delete assets[fileName];
          });

          callback();
        }
      );
    });
  }
};
