const titleList = ["ng", "penguen", "ahsen", "boby",];
let titleIndex = 0;

setInterval(() => {
    titleIndex = (titleIndex + 1) % titleList.length;
    document.title = titleList[titleIndex];
}, 1000);

let vid = document.getElementById("banakalsa.mp3");
vid.volume = 0.2;