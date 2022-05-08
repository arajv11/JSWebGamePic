function newImage(filepath, left, bottom) {
    let object = document.createElement('img');
    object.src = filepath;
    object.style.position = 'fixed';
    object.style.left = left;
    object.style.bottom = bottom;
    document.body.append(object);
    return object;
}

for (var i = 0; i<= window.innerWidth; i+=100) {
    for (var j = 0; j<=400; j+=100) {
        newImage('assets/grass.png', `${i}px`, `${j}px`);
    }
}

for (var i = 0; i<= window.innerWidth; i+=100) {
    for (var j = 500; j<=window.innerHeight; j+=100) {
        newImage('assets/sky.png', `${i}px`, `${j}px`);
    }
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

function newItem(filepath, left, bottom) {

    let object = newImage(filepath, left, bottom);

    object.addEventListener('dblclick', function(){
        object.remove();
    })
}

newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');