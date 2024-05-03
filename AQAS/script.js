document.addEventListener("DOMContentLoaded",function() {
  const navbar = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
close.style.display = "none";

hamburger.addEventListener('click',()=>{
  navbar.classList.toggle("func");
  hamburger.style.display = "none";
  close.style.display = "block";
})

close.addEventListener('click',()=>{
  close.style.display = "none";
  hamburger.style.display = "block";
  navbar.classList.remove("func");
})


const closebtn = document.querySelector('.close-btn');
const welcome = document.querySelector('.modal');

window.addEventListener("load",function(){
  setTimeout(
    function open(event) {
      document.querySelector(".modal").style.display = "flex";
    },
    1000
  )
})

closebtn.addEventListener('click',()=>
{
  welcome.style.display = "none";
})

})


const closebtn = document.querySelector(".modal-btn");
const modalform = document.querySelector(".modalform");


 function SendEmail(subject,body) {
  const welcome = document.querySelector('.modal');
  welcome.style.display = "none";
  Email.send({
    SecureToken : "802bf0e6-b89a-463b-ac4f-0878f2a473be",
    To : 'advancedqaservices@gmail.com',
    From : "donorftn@gmail.com",
    Subject : subject,
    Body : body
}
).then(
Swal.fire(
  'Done!',
  'Email sent successfully!',
  'success'
)
);

}


modalform.addEventListener('submit',(e)=>{
  e.preventDefault();
   closebtn.addEventListener('click',()=>{
      const nameInput = modalform.elements['name'];
      const emailInput = modalform.elements['email'];
      const phoneInput = modalform.elements['phone'];
    
      const name = nameInput.value;
      const email = emailInput.value;
      const phone = phoneInput.value;
  
      const subject = `Message from ${name}`;
      const body = `Respected sir,
                    I am ${name}. My mobile number is ${phone} and my email is ${email}. 
                    I want to know about offers.`;

      SendEmail(subject,body);        
})});