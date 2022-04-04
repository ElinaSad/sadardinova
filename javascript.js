//Проверка поля Имя
function checkName() {
    var name = document.getElementById("name").value;
    var regex = /^[а-яА-я\ ]{2,15}$/; 
    if (regex.test(name)) { 
        document.getElementById("name_Check").style.color = "green";
        document.getElementById("name_Check").innerHTML = "Поле заполнено :)";
        return true;
    }
    else {
        document.getElementById("name_Check").style.color = "red";
        document.getElementById("name_Check").innerHTML = "Что-то пошло не так :(";
        return false;
    }
}
//Проверка поля E-mail
function checkMail() {
    var mail = document.getElementById("mail").value;
    var regex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    
    if (regex.test(mail)) { 
        document.getElementById("mail_Check").style.color = "green";
        document.getElementById("mail_Check").innerHTML = "Поле заполнено :)";
        return true;
    }
    else {
        document.getElementById("mail_Check").style.color = "red";
        document.getElementById("mail_Check").innerHTML = "Что-то пошло не так :(";
        return false;
    }
}
//Проверка поля Номер телефона
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^((8)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Поле заполнено :)";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Что-то пошло не так :(";
        return false;
    }
}
//Собрать и вывести все данные
function outputData() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = time + " "+ date;

    var typephoto = document.getElementById("typephoto").value;

    if (name != "" && mail != "" && phone != "" && date != "" && time != "" ) {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "<p style='font-weight: bold;'>Здравствуйте, " + name + "!";
        document.getElementById("summary").innerHTML += "<p>Ваша заявка на фотосессию успешно отправлена!</br> Детали заявки: </p>";
        document.getElementById("summary").innerHTML += "E-mail: " + mail + "</br>";
        document.getElementById("summary").innerHTML += "Номер телефона: " + phone + "</br>";
        document.getElementById("summary").innerHTML += "Время и дата: " + dateAndTime + "</br>";
        document.getElementById("summary").innerHTML += "Тип фотосессии: " + typephoto + "</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Спасибо, что выбрали нас! Фотограф свяжется с Вами в ближайшее время.</p>";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Пожалуйста, заполните все необходимые поля...";
    }
}

//изменение цвета текста при нажатии на другой текст
  function ChangeColor(Element) {
    let text = document.getElementById('lol');
    if(text.style.color === 'green') text.style.color='red';
    else text.style.color ='green';
    return false;
}

//показать или скрыть картинку при нажатии
function Showhide(obj_id) {
    doc=document.getElementById(obj_id);
    if(doc.style.display == "none") doc.style.display = "block";
    else doc.style.display = "none"
    }
