//  firts we are doing Froms
let form=document.querySelector(".Loging-box");

let nameInput=document.querySelector("#Name");
let emailInput=document.querySelector("#Email");
let passwordInput=document.querySelector("#Password");
const emailPartern =


form.addEventListener("submit", (e)=>{
  e.preventDefault();

  if(nameInput.value.trim() === ""){
    alert("Name is rquried");
    return;
  }
   if(emailInput.value.trim() === ""){
    alert("Email is rquried");
    return;

  }
   if(passwordInput.value.trim() === ""){
    alert("password is rquried");
    return;

  }
  alert("Form submitted successfully");
});





//  seconds parts changes parts of skiles

let percent=document.querySelectorAll(".percentage");
let progreSet=Document.querySelectorAll(".progress");

percent.forEach((percent, index) => {
  let count= 0;
  let target = Number(progress[index].dataset.target);
  let animation = setInterval(() => {
    count++;
    percent.textContent = count + "%";
    progreSet[index].style.width = count + "%";



    if(count>=target){
      clearInterval(animation);
    }
  }, 20);


});





































