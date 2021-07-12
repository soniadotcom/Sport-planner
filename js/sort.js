new Sortable(items, {
    group: {
        name: 'shared',
        pull: 'clone', // To clone: set pull to 'clone'
        put: false
    },
    animation: 150,
    sort: false // To disable sorting: set sort to false
});
		



var day1 = document.getElementById("day1");
new Sortable(day1, {
    group: {
        name: 'shared'
    },
    animation: 300, emptyInsertThreshold: -30
});
var day2 = document.getElementById("day2");
new Sortable(day2, {
    group: {
        name: 'shared'
    },
    animation: 300, emptyInsertThreshold: -30
});
var day3 = document.getElementById("day3");
new Sortable(day3, {
    group: {
        name: 'shared'
    },
    animation: 300, emptyInsertThreshold: -30
});
var day4 = document.getElementById("day4");
new Sortable(day4, {
    group: {
        name: 'shared'
    },
    animation: 300, emptyInsertThreshold: -30
});
var day5 = document.getElementById("day5");
new Sortable(day5, {
    group: {
        name: 'shared'
    },
    animation: 300, emptyInsertThreshold: -30
});
var day6 = document.getElementById("day6");
new Sortable(day6, {
    group: {
        name: 'shared'
    },
    animation: 300, emptyInsertThreshold: -30
});
var day7 = document.getElementById("day7");
new Sortable(day7, {
    group: {
        name: 'shared'
    },
    animation: 300, emptyInsertThreshold: -30
});



new Sortable(remove, {
    group: {
        name: 'shared'
    },
    animation: 150,
    sort: false // To disable sorting: set sort to false
});




function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'white';
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    
    event
    .dataTransfer
    .clearData();
}