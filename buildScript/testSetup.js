// this file isn't transpile, so must use CommonJS and ES5


// Register babel to transpile before our test run
require('babel-register')();

// Disable webpack features that mocha doesn't understand.
require.extensions['.css'] = function(){};
