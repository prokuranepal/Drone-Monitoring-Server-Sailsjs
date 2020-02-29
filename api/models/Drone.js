/**
 * Drone.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    drone_name: {
      type: 'string',
      required: true,
    },
    drone_location: {
      type: 'string',
      required: true,
    },
  },

};

