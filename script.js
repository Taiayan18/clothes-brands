let menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";

function ToggleMenu() {
  if (menulist.style.maxHeight === "0px") {
    menulist.style.maxHeight = "500px";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

let slider = document.getElementById("slider");

const img = [
  "https://cdn.prod.website-files.com/6881474bdd4d06d07447731e/68814d59cb2d49305bc4e1b0_Frame%202147223646%20(1).avif",
  "https://cdn.prod.website-files.com/6881474bdd4d06d07447731e/68864a49fd2175c633adabb5_Group%2036175%20(1).avif",
  "https://cdn.prod.website-files.com/6881474bdd4d06d07447731e/68864a494c79d5e6132f1b5b_Group%2036176%20(1).avif",
  "https://cdn.prod.website-files.com/6881474bdd4d06d07447731e/68864a49105219c62607b136_Group%2036177.avif"
];


let count=0

function show(){
    slider.src=img[count]
}

show()

setInterval(()=>{
    count ++
    if(count ===img.length)
        count =0
    show()
},3000)


let testimonialItems = document.querySelectorAll(".testimonial-item");
let nextbtn = document.querySelector("#btn-next");
let prevbtn = document.querySelector("#btn-prev");

let current = 0;

function showcount(index){
  testimonialItems.forEach(item => item.classList.remove("active"));
  testimonialItems[index].classList.add("active");
}

nextbtn.addEventListener("click", () => {
  current++;
  if (current >= testimonialItems.length) {
    current = 0;
  }
  showcount(current);
});

prevbtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = testimonialItems.length - 1;
  }
  showcount(current);
});


setInterval(()=>{
  current ++
  if(current>=testimonialItems.length)
    current=0
  showcount(current)
},3000)



// function toggleAns() {
//   let ans = document.querySelector(".ans");

//   if (ans.style.display === "block") {
//     ans.style.display = "none";
//     icon.classList.replace("fa-minus", "fa-plus");
//   } else {
//     ans.style.display = "block";
//     icon.classList.replace("fa-plus", "fa-minus");
//   }
// }


function toggleAns(element) {
  const ans = element.querySelector(".ans");
  const icon = element.querySelector("i");

  if (ans.style.display === "block") {
    ans.style.display = "none";
    icon.classList.replace("fa-minus", "fa-plus");
  } else {
    ans.style.display = "block";
    icon.classList.replace("fa-plus", "fa-minus");
  }
}

