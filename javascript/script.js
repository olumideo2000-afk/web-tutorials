 document.getElementById("external").onclick = () => {
        alert("This is an External Javascript")
        console.log("I am an external Javascript file")
    }

function myFunction() {
  document.getElementById("demo2").innerHTML = "Hello JavaScript Function!";
}

function showMenu(){
    // alert("You just clicked my menu")
    var t = document.getElementById("topnav")
    var x = document.querySelector(".left-nav")
    var y = document.querySelector(".right-nav")
    var ya = document.querySelector(".w")

    if (x.className === 'left-nav') {
      if(t.className === 'topnav')
        t.className += ' col';
        x.className += ' responsive';
        // x.style.width='45%';
        // ya.style.width='50%';
    } else {
        t.className = 'topnav';
        x.className = "left-nav";
    }
}