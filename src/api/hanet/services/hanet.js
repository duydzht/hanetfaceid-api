'use strict';

/**
 * hanet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hanet.hanet');
