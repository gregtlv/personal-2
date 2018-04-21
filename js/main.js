// Greg

toggleButton.onclick = function menuHide() {
	    var x = document.getElementById("navList");
	    if (x.style.display === "none" || x.style.display === "") {
	        x.style.display = "flex";
	    } else {
	        x.style.display = "none";
	    }
	}



sendButton.onclick = function sendForm(event) { //event важная вещь для Firefox

	event.preventDefault();

	var userName = document.getElementById('inputName');
	var userNumber = document.getElementById('inputPhone');
	var userMail = document.getElementById('inputEmail');
	var userText = document.getElementById('inputText');

	var alertMessage = document.getElementById('alertMessage');



	var userName_Class = userName.classList;
	var userNumber_Class = userNumber.classList;
	var userMail_Class = userMail.classList;
	var userText_Class = userText.classList;

	var alertMessage_Class = alertMessage.classList;

  // User Name

	if (userName.value == "") {
		userName_Class.add("pink", "lighten-2");

	}
	else {
		userName_Class.remove("pink", "lighten-2");

	}

  // User Number

	if (userNumber.value == "") {
		userNumber_Class.add("pink", "lighten-2");

	}
	else {
		userNumber_Class.remove("pink", "lighten-2");

	}

  // User Email

	if (userMail.value == "") {
		userMail_Class.add("pink", "lighten-2");

	}
	else {
		userMail_Class.remove("pink", "lighten-2");

	}


	// Text Message

	if (userText.value == "") {
		userText_Class.add("pink", "lighten-2");
		console.log('Text mesage here');

	}
	else {
		userText_Class.remove("pink", "lighten-2");

	}


	console.log(userName.classList);
	console.log(userMail.classList);
	console.log(userText.classList);


	if (userName.value != "" && userNumber.value != "" && userMail.value != "" && userText.value != "") {
		// form.style.display = "none";
		// classNamesForm.remove("form");
		console.log('Form sent');
    alertMessage.style.opacity = "0";
    sendButton.style.margin = "20px auto auto auto";
		alert("Форма отправки пока что не подключена");
	}
  else {
		alertMessage.style.opacity = "1";
    sendButton.style.margin = "20px auto 15px auto";

	}

}



// Scroll


$(document).ready(function(){
 $("#headerNav").on("click","a", function (event) {
   //отменяем стандартную обработку нажатия по ссылке
   event.preventDefault();

   //забираем идентификатор бока с атрибута href
   var id  = $(this).attr('href'),

   //узнаем высоту от начала страницы до блока на который ссылается якорь
     top = $(id).offset().top;

   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, 1500);
 });
});
