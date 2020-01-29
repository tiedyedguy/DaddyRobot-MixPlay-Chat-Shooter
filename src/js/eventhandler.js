import * as CS from "./cs.js";
// function addText(text, username, usercolor, avatarURL, timestamp) {
function handleEvents(event) {
  switch (event.type) {
    case "addtext":
      CS.addText(
        event.text,
        event.username,
        event.usercolor,
        event.avatarURL,
        event.timestamp
      );
      break;
    case "updateleaderboard":
      CS.setleaderboard(event.leaders);
      break;
    case "startingoptions":
      CS.setnorandom(event.noRandomChats);
      CS.setleaderboard(event.leaders);
      break;
    default:
      console.log("Unknown Event Type: " + event.type);
      console.log(event);
  }
}

export { handleEvents };
