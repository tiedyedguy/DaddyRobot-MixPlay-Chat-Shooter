var norandom = false;

function setup() {}

function randomplacement() {
  let ranheight = Math.floor(Math.random() * $(window).height());
  let ranwidth = Math.floor(Math.random() * $(window).width());
  return "top:" + ranheight + "px;left:" + ranwidth + "px";
}

function randomendpoint() {
  let ranheight = Math.floor(Math.random() * ($(window).height() - 100));
  let ranwidth = Math.floor(Math.random() * ($(window).width() - 100));
  return { top: ranheight, left: ranwidth };
}

function addText(text, username, usercolor, avatarURL, timestamp) {
  let ranpos = randomplacement();
  console.log(ranpos);
  let textSpan = $("<span>");
  textSpan.text(text);
  let userSpan = $("<span>", {
    class: "Username",
    style: "color:" + usercolor
  });
  userSpan.text(username);
  let messageContent = $("<div>", { class: "messageContent" });
  messageContent.append(userSpan);
  messageContent.append(textSpan);
  let avatar = $("<img>", { class: "avatar", src: avatarURL });
  let message = $("<div>", { class: "message" });
  message.append(avatar);
  message.append(messageContent);

  var div = $("<div>", {
    id: timestamp,
    class: "textdiv",
    style: ranpos
  });
  div.append(message);
  div.boomed = 0;
  div.click(() => {
    if (div.boomed == 0) {
      div.boomed = 1;
      div.addClass("noborder");
      div.html("<img src='./boom.gif'>");
      mixer.socket.call(
        "giveInput",
        {
          controlID: "points",
          event: "mousedown",
          point: 1,
          id: timestamp
        },
        true
      );
      setTimeout(() => {
        div.remove();
      }, 750);
    }
  });
  $("body").prepend(div);

  div.animate(randomendpoint(), 3000, () => {
    div.remove();
  });
}

function setnorandom(norandomIn) {
  norandom = norandomIn;
}

function setleaderboard(leaders) {
  $("#leaderboard").hide();
  $("#lbtbody").empty();
  leaders.sort(function(a, b) {
    return b.points - a.points;
  });
  leaders.forEach(leader => {
    let html =
      "<tr><td>" + leader.username + "</td><td>" + leader.points + "</td></tr>";
    $("#lbtbody").append(html);
  });
  $("#leaderboard").show();
}

export { setup, addText, setnorandom, setleaderboard };
