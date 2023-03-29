function email_validation(){
    var form = document.getElementById("form")
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern =  "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    if(email.match(pattern))
    {
     form.classList.add("valid");
     form.classList.remove("invalid");
     text.innerHTML = "your email address is valid ";
     text.style.color = "#00ff00 ";

    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "please enter valid email ";
        text.style.color = "ff0000";

    }
    if (email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}
//password validation//

function getPasswordStrength(password){
	let s = 0;
	if(password.length > 6){
	  s++;
	}
	if(password.length > 10){
	  s++;
	}
	if(/[A-Z]/.test(password)){
	  s++;
	}
	if(/[0-9]/.test(password)){
	  s++;
	}
	if(/[^A-Za-z0-9]/.test(password)){
	  s++;
	}
	return s;
  }
  document.querySelector(".pw-meter #password").addEventListener("focus",function(){
	document.querySelector(".pw-meter .pw-strength").style.display = "block";
  });
  document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
	let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
	if(el.classList.contains("active")){
	  document.querySelector(".pw-meter #password").setAttribute("type","password");
	  el.classList.remove("active");
	} else {
	  document.querySelector(".pw-meter #password").setAttribute("type","text");
	  el.classList.add("active");
	}
  });
  
  document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
	let password = e.target.value;
	let strength = getPasswordStrength(password);
	let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
	strength = Math.max(strength,1);
	passwordStrengthSpans[1].style.width = strength*20 + "%";
	if(strength < 2){
	  passwordStrengthSpans[0].innerText = "Weak";
	  passwordStrengthSpans[0].style.color = "#111";
	  passwordStrengthSpans[1].style.background = "#d13636";
	} else if(strength >= 2 && strength <= 4){
	  passwordStrengthSpans[0].innerText = "Medium";
	  passwordStrengthSpans[0].style.color = "#111";
	  passwordStrengthSpans[1].style.background = "#e6da44";
	} else {
	  passwordStrengthSpans[0].innerText = "Strong";
	  passwordStrengthSpans[0].style.color = "#fff";
	  passwordStrengthSpans[1].style.background = "#20a820";
	}
  });
  //welcome message//
  function welcomepage(){
	$("#submit").click(function() {
		$("#form").slideUp(function() {
		  $(".form-container").hide();
		  $(".welcome-message").slideDown(function() {
			$(".welcome-message").fadeTo(400, 1);
		  });
		});
	  });
	
  }
  