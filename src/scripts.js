import * as EventHandler from "./js/eventhandler.js";
import * as CS from "./js/cs.js";

window.addEventListener("load", function initMixer() {
  // Whenever someone clicks on "Hello World", we'll send an event
  // to the game client on the control ID "hello-world"
  CS.setup();

  mixer.socket.on("event", EventHandler.handleEvents);
  mixer.isLoaded();
});
