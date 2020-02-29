module.exports = {


  friendlyName: 'Pisocket',


  description: 'Pisocket drone.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    console.log("afsd");
    if (!this.req.isSocket) {
      return this.res.badRequest();
    }
    sails.sockets.join(this.req.socket, 'jt601/pi');
    return;

  }


};
