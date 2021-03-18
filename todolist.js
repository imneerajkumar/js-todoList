var enterButton = document.querySelector("#enter");
var input = document.querySelector("#userInput");

var ul = document.querySelector("ul");
var item = document.querySelector("li");

function inputLength(){
  return input.value.length;
}

function itemLength(){
  return item.length;
}

enterButton.addEventListener("click", function(){
    if (inputLength() > 0){
      createElement();
    }
});

input.addEventListener("keydown", function(event){
  if (inputLength() > 0 && event.which === 13){
    createElement();
  }
});

function createElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));

  ul.appendChild(li);
  input.value = "";

  li.addEventListener("click", function(){
    li.classList.toggle("done");
  });

  var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);

	dBtn.addEventListener("click", function(){
    li.classList.add("delete");
  });
}
