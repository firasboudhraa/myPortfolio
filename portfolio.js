let menuVisible = false;

function showHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList= "";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList="barreDeNavegation";
        menuVisible = true;
    }
}

function select(){

    document.getElementById("nav").classList= "";
    menuVisible= false;
}


function efectHobbies(){
    let skills = document.getElementById("skills");
    let distanceSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanceSkills >= 300){

        let hobbies = document.getElementsByClassName("progress");
       
        hobbies[0].classList.add("javascript");
        hobbies[1].classList.add("htmlcss");
        hobbies[2].classList.add("Photoshop");
        hobbies[3].classList.add("Python");
        hobbies[4].classList.add("Java");
        hobbies[5].classList.add("Communication");
        hobbies[6].classList.add("Teamwork");
        hobbies[7].classList.add("Creation");
        hobbies[8].classList.add("Dedication");
        hobbies[9].classList.add("projectmanagement");

    }
}

window.onscroll = function(){
    efectHobbies();
}

function validateForm() {

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    var name = document.getElementById("name").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your name" ;
    }

    if (phoneNumber === "") {
        document.getElementById("phoneError").innerHTML = "Please enter your phone number";
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email address";
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.match(email)) {
            document.getElementById("emailError").innerHTML = "Invalid email address format";
        }
    }

    if (message === "") {
        document.getElementById("messageError").innerHTML = "Please enter your message";
    }
}