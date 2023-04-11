function sendMail() {
  const serviceID = "service_leqjc2h";
  const templateID = "template_1wnedo7";
  var mail = {
    email: document.getElementById("email").value
  }

  emailjs.send(serviceID, templateID, mail)
  .then(
  res =>{
    document.getElementById("email").value = "";
    console.log(res);
    alert("Your message sent successfully");
  }
  )
  .catch((err) => console.log(err));
}

