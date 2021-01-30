//Function(s) to randomize greetings on the home page
function titleTranslation(){

  let translations = ["Welcome!", "Willkommen!","¡Bienvenido!", "Bienvenue!", "Benvenuto!","Hoş geldin!", "Добро пожаловать!", "Kuwakaribisha!","Soo dhawow!", "እንኳን ደህና መጣህ!", "환영합니다!", "!أهلا بك"];
  let translationsRandom =  translations[Math.floor(Math.random() * translations.length)];
  return document.getElementById('maintitle').innerHTML = translationsRandom;
}

function timer(){
  let repeatTitle = setInterval(titleTranslation, 5000);
}
