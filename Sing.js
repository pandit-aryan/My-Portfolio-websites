
// alert("connects");
const form = document.querySelector(".Singup-container");

form.addEventListener("submit", function(event){
 event.preventDefault();


 const names = document.getElementById("name").value.trim();

 const emails = document.getElementById("email").value.trim();

 const passwords = document.getElementById("password").value;

 const Confirmpassword = document.getElementById("ConPassword").value;


//   hm isliye # ka use nhi kr rahe ha ku ki hmm phle se hi bata de raha hu ki elemnts ko id se access kr raha hu isliye koi need nhi ha # ki 

//  (trim ) esliye use kr raha hu agar user inpute spce de kar kar raha ha to us space ko remove krne ka kmm krta ha exam = "   Aryan   "  => agar es trha se input krta ha to {trim } ka use krne se extra space hat jata ha 


const userData ={
  name: names,
  email:email,
  password:passwords,

};

localStorage.setItem("userData", JSON.stringify(userData));

const term= document.getElementById("terms").checked;

if(names === " "){
  alert("Please fill correct names");
  return;
}
if(emails === ""){
  alert("enetr fill  emails");
  return;
}
if(passwords === ""){
  alert("enetr password ");
  return;
}
if(Confirmpassword === ""){
  alert("enetr Conformpassword ");
  return;
}
if(!term){
 alert("Please accepts Terms & conditions");
 return;
} 
if(passwords !== Confirmpassword){
 alert("Password do not matchs");
 return;
} 

alert("Singup successful!");

});

