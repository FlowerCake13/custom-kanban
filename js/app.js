var newItem = document.getElementById('new');
var done = document.getElementById('done');
var counter = 0;
document.addEventListener('keydown', function(event){
	if (event.keyCode == 13) {
		var input = prompt('New:');
		appendItem(input);
	}
})

function appendItem(description){
	var div = document.createElement('div');
	div.innerHTML = description;
	var checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	div.appendChild(checkbox);
	div.setAttribute('class', 'item');
	div.setAttribute('draggable', 'true');
	counter++;
	div.setAttribute('id', counter);
	div.setAttribute('ondragstart', 'drag(event)')
	newItem.appendChild(div);
	checkbox.addEventListener('change', function(){
		done.appendChild(div);
	})
}

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
}

function allowDrop(e){
	e.preventDefault();
}

function drop(e) {
	var data = e.dataTransfer.getData('text');
	var item = document.getElementById(data);
	e.target.appendChild(item);
}