const names = [
  "Aiden",
  "Bella",
  "Caleb",
  "Daisy",
  "Ethan",
  "Fiona",
  "Gavin",
  "Hannah",
  "Isaac",
  "Jasmine",
  "Kaden",
  "Lily",
  "Dev",
  "Aman",
  "kp",
  "Mason",
  "Quinn",
  "Ryan",
  "Sophia",
  "Tyler",
  "Uma",
  "Violet",
  "Wyatt",
  "Xander",
  "Yara",
  "Zachary",
  "Aria",
  "Blake",
  "Chloe",
  "Dylan",
  "Eliana",
  "Finn",
  "Grace",
  "Hudson",
  "Isla",
  "Jace",
  "Kylie",
  "Leo",
  "Madison",
  "Nathan",
  "Olivia",
  "Parker",
  "Ruby",
  "Sawyer",
  "Tessa",
  "Uriah",
  "Victoria",
  "Willow",
  "Xavier",
  "Zoe",
];

function print(usernames) {
  var container = "";
  usernames.forEach(function (name) {
    container += `<h3 class= "tracking-tight px-3 py-2">${name}</h3>`;
  });

  document.querySelector(".scrollercustom").innerHTML = container;
}
print(names);

var input = document.querySelector("input");

input.addEventListener("input", function () {
  var ans = names.filter(function (name) {
    return name.toLowerCase().startsWith(input.value.toLowerCase());
  });

  print(ans);
});
