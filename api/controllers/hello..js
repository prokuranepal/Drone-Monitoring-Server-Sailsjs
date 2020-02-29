module.exports = {

    friendlyName: 'socket test',

    description: 'Socket test on hello',

    inputs: {
        drone_name: {
            description: 'Name of drone to view.',
            type: 'string',
            required: true
        }
    },
    
    fn: async function({drone_name}) {
        console.log(drone_name);
        drone = await Drone.find({drone_name:drone_name})
        console.log(drone.length);
        if (drone.length == 0) {
            return this.res.badRequest();
        }
        if (!this.req.isSocket) {
            return this.res.badRequest();
        }
        console.log(this.req.socket);
        // sails.io.of(`/${drone_name}`);
        sails.sockets.join(this.req.socket, 'funSockets');

        // return this.res.ok()
    }
}