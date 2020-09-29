//All the sites javascript will be written in this files

function titleTranslation(){

  var translations = ["Welcome!", "Willkommen!","¡Bienvenido!", "Bienvenue!", "Benvenuto!","Hoş geldin!", "Добро пожаловать!", "Kuwakaribisha!","Soo dhawow!", "እንኳን ደህና መጣህ!", "환영합니다!", "!أهلا بك"];
  var translationsLength = translations.length;

  var translationsRandom =  translations[Math.floor(Math.random() * translationsLength)];
  var title;
  var counter=0;
  for (var i = 0; i < translationsLength; i++) {
    if(translations[i] != translationsRandom){
    document.getElementById('maintitle').innerHTML = translationsRandom;
    }
  }
}

function timer(){
  var repeatTitle = setInterval(titleTranslation, 4000);
}
