var personName = "";
personName = prompt("What is your Name?") || "";
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
if (personName !== null && personName !== "") {
    alert("Hello ".concat(personName, ",Here are your Name in:\n    lowercase: ").concat(lowercase, "\n    uppercase: ").concat(uppercase, "\n    titlecase: ").concat(titlecase));
}
else {
    alert("Please fill your Name!");
}
