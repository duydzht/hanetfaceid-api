'use strict';

/**
 * new service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new.new');
