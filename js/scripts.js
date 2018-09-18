
var removeButton = document.getElementById('removeButton');
var doneButton = document.getElementById('doneButton');


// user interaction with add bar
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) addItemTodo(value);

});

// adds items to the todo list
function addItemTodo(text){
var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var button = document.createElement('div');
  button.classList.add('button');


  var done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = doneButton;

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeButton;


  button.appendChild(remove);
  button.appendChild(done);
  item.appendChild(button);

  list.appendChild(item);
}
