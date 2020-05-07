var newItem = document.getElementById('new');
var progress = document.getElementById('progress');
var done = document.getElementById('done');
var counter = 0;

// console.log(localStorage.getItem('words'))

var obj = {new: [], progress: [], done: []};
if(localStorage.getItem('words')){
	//console.log(localStorage.getItem('words'))
	obj = JSON.parse(localStorage.getItem('words'));
}
//console.log(obj);
for(var i = 0; i < obj.new.length; i++){
	appendItem(obj.new[i], newItem)
}
for(var i = 0; i < obj.progress.length; i++){
	appendItem(obj.progress[i], progress)
}
for(var i = 0; i < obj.done.length; i++){
	appendItem(obj.done[i], done)
}

document.addEventListener('keydown', function(event){
	if (event.keyCode == 13) {
		var input = prompt('New:');
		appendItem(input, newItem);
		obj.new.push(input);
		localStorage.setItem('words', JSON.stringify(obj))
		console.log(localStorage.getItem('words'))
	}
})

function appendItem(description, place){
	var div = document.createElement('div');
	div.innerHTML = description;
	div.setAttribute('class', 'item');
	div.setAttribute('draggable', 'true');
	counter++;
	div.setAttribute('id', counter);
	
	div.addEventListener('click', function(){
		div.className += ' done'
		//console.log(div)
		console.log(div.parentElement.id)
		var par = div.parentElement.id;
		done.appendChild(div)
		//console.log(obj.done)
		console.log(div.innerHTML)
		obj.done.push(div.innerHTML)
		for(var i = 0; i < obj[par].length; i++){
			//console.log('here')
			if(obj[par][i] == div.innerHTML){
				//console.log('reciveved')
				//console.log(obj.done[i])
				obj[par].splice(i, 1);
			}
			localStorage.setItem('words', JSON.stringify(obj))
			console.log(localStorage.getItem('words'))
		}
	})
	div.setAttribute('ondragstart', 'drag(event)')
	place.appendChild(div);
}

var idd;
var frm;

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
	idd = ev.toElement.innerHTML;
	frm = ev.toElement.parentElement.id
	//console.log(id)
	//console.log(frm)
}

function allowDrop(e){
	e.preventDefault();
	//console.log(e)
}

function drop(e) {
	var data = e.dataTransfer.getData('text');
	var item = document.getElementById(data);
	e.target.appendChild(item);
	//console.log(obj[frm])
	//console.log(obj)
	//console.log(e.target.id);
	obj[e.target.id].push(item.innerHTML);
	//console.log(localStorage.getItem('words'))
	for(var i = 0; i < obj[frm].length; i++){
		if (obj[frm][i] == idd) {
			console.log(obj[frm][i])
			obj[frm].splice(i, 1);
			console.log(obj[frm])
		}
	}
	localStorage.setItem('words', JSON.stringify(obj))
}
