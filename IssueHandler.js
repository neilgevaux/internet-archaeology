// JavaScript source code
// Import JSON to array, output to html from largest number first


var issue = {
    issueNumber : 1,
    issueTitle  : "title",
    issueDesc   : "desc"
};

var article = {
    issueNumber : 1,
    articleTitle: "artical title",
    articleImage: "article image",
    articleAuthor: "article author",
    articleDOI  : "DOI"
};

/*
var newDiv = document.createElement("div"); 
var newText = document.createTextNode("new text");
newDiv.appendChild(newText);

var element = document.getElementById("output");
element.appendChild(newText);
*/

document.body.onload = addElement;

function addElement() {
    // create a new div element 
    var newDiv = document.createElement("div");
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

