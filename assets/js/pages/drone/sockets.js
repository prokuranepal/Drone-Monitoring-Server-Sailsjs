
function abc() {
  console.log("I amd here");
  console.log(window.location.pathname);
  io.socket.get(window.location.pathname+"/hello", function (data) {
    console.log('what is happening');
    console.log(data);
  });
}