$("#promote").on("click", promote);
function promote() {
  Swal.fire({
    title: "Thanks for using this!",
    text:
      "This is one of DaddyRobot's MixPlay Experiences. Find out more at DaddyRobot.Live",
    imageUrl: "./dr.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "DaddyRobot",
    customClass: {
      image: "dr-image"
    }
  });
}
