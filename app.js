// ABOUT ME //

let shorttext = document.getElementById("shortPara").innerHTML;

function expendText(){

    let link = document.getElementById("link")
    let shortPara = document.getElementById("shortPara");
    let longPara = `Along with my technical learning, I also have six months of teaching experience 
        which has helped me build strong communication and problem-solving skills. 
        I am passionate about continuously improving my knowledge by exploring 
        new web technologies and modern design trends. My vision is to grow as 
        a skilled frontend developer, collaborate on creative projects, and 
        provide innovative web solutions that make a positive impact for users 
        and businesses alike.`;
     if(link.innerHTML === "Read More") {
           shortPara.innerHTML = shorttext + longPara;
            link.innerHTML = "Read Less";
     }else{
            shortPara.innerHTML = shorttext;
            link.innerHTML = "Read More";
     }
}

// CONTECT ME //


let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let messField = document.getElementById("mess");

function submit(){

  let name = nameField.value.trim().toLowerCase();
  let email = emailField.value.trim().toLowerCase();
  let mess = messField.value.trim().toLowerCase();

if(name === "" ||  email === "" || mess === "" ){
       alert("Please fill this field")
       return;
}   alert(`Form submitted successfully!
       Name: ${name}
       Email: ${email}
       Message: ${mess}`);

        nameField.value ="";
        emailField.value =""
       messField.value ="";
}