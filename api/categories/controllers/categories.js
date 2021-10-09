"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOne: async (ctx) => {
    const { category } = ctx.params;
    return await strapi.services.categories.findByNameService(category);
  },
};
