let products = document.getElementById("products");
let ourProducts = document.getElementById("ourProducts");
let All = document.getElementById("All");
let Phones = document.getElementById("Phones");
let Laptops = document.getElementById("Laptops");
let Att = document.getElementById("Att");
let cat = document.getElementById("cat");
// console.log(Phones);

// function dedco(itemcolored, classColor) {
//     // Reset all buttons to black
//     All.style.color = "black";
//     Phones.style.color = "black";
//     Laptops.style.color = "black";
//     Att.style.color = "black";

//     if (itemcolored.classList.contains(classColor)) {
//       itemcolored.style.color = "red";
//     }
//   }

All.style.cssText = " color: red;";

All.addEventListener("click", function () {
  let classColor = "All";
  for (let index = 0; index < products.children.length; index++) {
    let item = products.children[index];
    if (!item.classList.contains("All")) {
      item.style.display = "none"; // hide
    } else {
      item.style.display = "block"; // show
    }
  }
  All.style.cssText = " color: red;";
  Phones.style.cssText = " color: black;";
  Laptops.style.cssText = " color: black;";
  Att.style.cssText = " color: black;";
});
Phones.addEventListener("click", function () {
  let classColor = "Phones";

  for (let index = 0; index < products.children.length; index++) {
    let item = products.children[index];
    if (!item.classList.contains("Phones")) {
      item.style.display = "none"; // hide
    } else {
      item.style.display = "block"; // show
    }
  }

  All.style.cssText = " color: black;";
  Phones.style.cssText = " color: red;";
  Laptops.style.cssText = " color: black;";
  Att.style.cssText = " color: black;";
});
Laptops.addEventListener("click", function () {
  let classColor = "Laptops";

  for (let index = 0; index < products.children.length; index++) {
    let item = products.children[index];
    if (!item.classList.contains("Laptops")) {
      item.style.display = "none"; // hide
    } else {
      item.style.display = "block"; // show
    }
  }
  All.style.cssText = " color: black;";
  Phones.style.cssText = " color: black;";
  Laptops.style.cssText = " color: red;";
  Att.style.cssText = " color: black;";
});
Att.addEventListener("click", function () {
  let classColor = "Att";

  for (let index = 0; index < products.children.length; index++) {
    let item = products.children[index];
    if (!item.classList.contains("Att")) {
      item.style.display = "none"; // hide
    } else {
      item.style.display = "block"; // show
    }
  }
  All.style.cssText = " color: black;";
  Phones.style.cssText = " color: black;";
  Laptops.style.cssText = " color: black;";
  Att.style.cssText = " color: red;";
});
// ////////////////////////////////////////
let statsOverview = document.getElementById("stats-overview");
let firstState = statsOverview.children[0].children[0].children[1].innerHTML;
let secState = statsOverview.children[0].children[1].children[1].innerHTML;
let theState = statsOverview.children[0].children[2].children[1].innerHTML;
let lastState = statsOverview.children[0].children[3].children[1].innerHTML;

let handler = setInterval(statf, 1);

let firstState1 = Number(firstState);
function statf() {
  firstState1 += 1;
  statsOverview.children[0].children[0].children[1].innerHTML = `+${firstState1}`;
  if (firstState1 >= 200) {
    clearInterval(handler);
  }
}
////////////////////////////////////////////
let handler2 = setInterval(stats, 1);

let secState1 = Number(secState);
function stats() {
  secState1 += 1;
  statsOverview.children[0].children[1].children[1].innerHTML = `+${secState1}`;
  if (secState1 >= 500) {
    clearInterval(handler2);
  }
}

let handler3 = setInterval(statt, 1);

let theState1 = Number(theState);
function statt() {
  theState1 += 1;
  statsOverview.children[0].children[2].children[1].innerHTML = `+${theState1}`;
  if (theState1 >= 370) {
    clearInterval(handler3);
  }
}
// //////////////////////////////////////////
let handler4 = setInterval(statl, 1);

let lastState1 = Number(lastState);
function statl() {
  lastState1 += 1;
  statsOverview.children[0].children[3].children[1].innerHTML = lastState1;
  if (lastState1 >= 150) {
    clearInterval(handler4);
  }
}
console.log(typeof firstState);
// //////////////////////////////////////////
let home = document.getElementById("home")
let about = document.getElementById("about")
let services = document.getElementById("services")
let portfolio = document.getElementById("portfolio")
let testimonial = document.getElementById("testimonial")
let blog = document.getElementById("blog")
let contact = document.getElementById("contact")
// console.log(home)
home.onclick = ()=>{
    document.getElementById("interface").scrollIntoView({
        behavior : "smooth"
    })
}
about.onclick = ()=>{
    document.getElementById("sec2").scrollIntoView({
        behavior : "smooth"
    })
}
home.onclick = ()=>{
    document.getElementById("interface").scrollIntoView({
        behavior : "smooth"
    })
}
home.onclick = ()=>{
    document.getElementById("interface").scrollIntoView({
        behavior : "smooth"
    })
}
home.onclick = ()=>{
    document.getElementById("interface").scrollIntoView({
        behavior : "smooth"
    })
}
home.onclick = ()=>{
    document.getElementById("interface").scrollIntoView({
        behavior : "smooth"
    })
}

// //////////////////////////////////

  function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

