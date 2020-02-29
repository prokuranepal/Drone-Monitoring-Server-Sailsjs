module.exports = {


  friendlyName: 'List',


  description: 'List drone.',


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/drone/list',
      description: 'Display the list of drones for authenticated users.'
    },

  },


  fn: async function () {
    // List of drone and its location
    var drone = await Drone.find({});
    // return the list of drones
    return{
      drones: drone
    };

  }


};
