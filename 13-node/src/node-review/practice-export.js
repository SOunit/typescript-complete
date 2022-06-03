// this is default
module.exports = {};

// this is possible because default already has object
module.exports.hello = 'hello';

// this is default too
exports = module.exports;

// this is possible because of exports = module.exports
exports.name = 'Jack';

// this is the most prioritized
// overwrite all changes so far
module.exports = {
  overwrite: true,
};
