import Resolver from 'ember-resolver/resolvers/fallback';
// import Resolver from 'ember-resolver/resolvers/glimmer-wrapper';

import buildResolverConfig from 'ember-resolver/ember-config';
import config from '../config/environment';

let moduleConfig = buildResolverConfig(config.modulePrefix);
/*
 * If your application has custom types and collections, modify moduleConfig here
 * to add support for them.
 */

moduleConfig.types = Object.assign(moduleConfig.types, {

});

moduleConfig.collections.main.types.push('translation');

export default Resolver.extend({
  config: moduleConfig,
});
