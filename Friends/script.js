var arr = [
  {
    name: "Manoj",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A man of 30 years old and he was very mentally disabled.",
    status: "strangers",
  },
  {
    name: "Avantika",
    image:
      "https://images.unsplash.com/photo-1617331140180-e8262094733a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "she is a liitle girl and she is very cute and she is so hungry.",
    status: "strangers",
  },
  {
    name: "Seeta",
    image:
      "https://images.unsplash.com/photo-1618151313441-bc79b11e5090?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A woman is beautiful and her heart is golden every time.",
    status: "strangers",
  },
];

function print() {
  var container = "";
  arr.forEach(function (person, index) {
    container += `<div class="card w-60 h-60 p-4 rounded-md bg-zinc-700 text-white">
      <div class="img w-16 h-16 bg-red-500 rounded-full overflow-hidden">
        <img class="w-full h-full object-cover" src="${person.image}" alt="">
      </div>
      <h2 class="text-2xl mt-2">${person.name}</h2>
      <p class="text-xs mt-2">${person.desc}</p>
      <button id="${index}" class="btn text-xs px-3 py-2 mt-3 ${
      person.status === "strangers"
        ? "bg-blue-500"
        : person.status === "request sent"
        ? "bg-yellow-500"
        : "bg-red-500"
    } rounded-md">
        ${
          person.status === "strangers"
            ? "Add friend"
            : person.status === "request sent"
            ? "Request Sent"
            : "remove friend"
        }
      </button>
    </div>`;
  });

  document.querySelector(".cards").innerHTML = container;
}

print();

var timer ;
document.querySelector(".cards").addEventListener("click", function (e) {

  if (arr[e.target.id].status === "strangers") {
    arr[e.target.id].status = "request sent";
    print();

    let rnnum = Math.floor(Math.random() * 5);

    timer = setTimeout(function () {
      arr[e.target.id].status = "friends";
      print();
    }, rnnum * 1000);
    }

    else{
      arr[e.target.id].status = "strangers";
      clearTimeout(timer);
  }

  print();
});
