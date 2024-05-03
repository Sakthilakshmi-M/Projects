const btn = document.getElementById("btn");
const form = document.querySelector(".userForm");


function SendEmail(subject,body) {
  Email.send({
    SecureToken : "802bf0e6-b89a-463b-ac4f-0878f2a473be",
    To : 'advancedqaservices@gmail.com',
    From : "donorftn@gmail.com",
    Subject : subject,
    Body : body
}).then(()=>{
  Swal.fire(
    'Done!',
    'Email sent successfully!',
    'success'
  );
  form.reset();
}

  
);


}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const institutionInput = form.elements['iname'];
  const nameInput = form.elements['name'];
  const emailInput = form.elements['email'];
  const phoneInput = form.elements['phone'];
  const addressInput = form.elements['address'];
  const msgInput = form.elements['msg'];
  const serviceInput = form.elements['service'];

  const iname = institutionInput.value;
  const fname = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const address = addressInput.value;
  const msg = msgInput.value;
  const service = serviceInput.value;

  const otherInput = form.elements['other'];
  const otherValue = otherInput.value;

  const recipient = 'donorftn@gmail.com';
  const subject = `Message from ${fname}`;
  let body = `Respected sir,<br>
              Institution Name: ${iname}<br>
              Name: ${fname}<br>
              Email: ${email}<br>
              Phone: ${phone}<br>
              Address: ${address}<br>
              Message: ${msg}<br>
              Service: ${service}<br>`;

  if (otherValue) {
    body += `\nOther Service Needed: ${otherValue}`;
  }

  SendEmail(subject, body);
});
