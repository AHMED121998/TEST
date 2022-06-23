// add default local storage
document.body.classList.add(localStorage.getItem("page color"));
var el=document.querySelectorAll('.Contenr .Color-sw li');
var classeslist = [];
// loopelmeents

for (var i = 0; i < el.length; i++){
    // get elmeent
    classeslist.push(el[i].getAttribute('data-color'));

    el[i].addEventListener(
        "click",
        function() {
         //remove ali old classes
         document.body.classList.remove(...classeslist);
        // add currntclass from li data attribute
         document.body.classList.add(this.getAttribute("data-color"));
         // add data local storage
         localStorage.setItem("page color",this.getAttribute("data-color") )
        },
        false
    );
}

console.log(classeslist);