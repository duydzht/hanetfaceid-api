'use strict';

/**
 * face service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::face.face');
