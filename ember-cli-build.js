'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

// note that by default, the enabled flags on some things
// like minifying by default, already check
// if environment === 'production'
//
// the explicitness is for sanity checking during the
// exploration of bundle / dependency sizes...
module.exports = function(defaults) {
  let disabledAddons = [];
  let environment = EmberApp.env();
  let isProduction = environment === 'production';
  // let isTest = environment === 'test';

  let swDisabled = process.env.SW_DISABLED;

  console.log('\n---------------');
  console.log('environment: ', environment);
  console.log('isProduction: ', isProduction);
  console.log('SW_DISABLED: ', swDisabled);
  console.log('---------------\n');

  let app = new EmberApp(defaults, {
    // eslint slows down the dev-build-debug cycle significantly
    // hinting: false disables linting at build time.
    // tests: isTest,
    hinting: false,
    minifyJS: { enabled: isProduction },
    // TODO: find a way to remove legacy browser support from css
    minifyCSS: { enabled: isProduction },

    sourcemaps: {
      enabled: !isProduction,
      extensions: 'js',
    },

    'ember-cli-babel': {
      includePolyfill: false,
      disablePresetEnv: true,
      disableDebugTooling: isProduction,
      includeExternalHelpers: true,
      // Will not build if uncommented:
      // disableEmberModulesAPIPolyfill: true
      // compileModules: false,
    },

    eslint: {
      testGenerator: 'qunit',
      group: true,
      rulesDir: 'eslint-rules',
      extensions: ['js', 'ts'],
    },
    addons: { blacklist: disabledAddons },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return new Funnel(mergeTrees([app.toTree()]), {});
};
