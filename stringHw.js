var sentence = prompt("Enter name");
var count = "";

function secretString(sentence) {
    for (var i = 0; i < sentence.replace(" ", "").length - 2; i++) {
        count += "*";
    }
}
secretString(sentence);
document.write(
    sentence.replace(sentence.substring(1, sentence.length - 1), count) + "<br>"
);
