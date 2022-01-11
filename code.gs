var token = ""; 
var spreadsheetId=""
var id_google_app_script = "";

var webAppUrl = "https://script.google.com/macros/s/"+id_google_app_script+"/exec"; 
var telegramUrl = "https://api.telegram.org/bot" + token; 


const CANCELLA = "CANCELLA ";
const PRENOTAZIONI = "PRENOTAZIONI";
const EMAILME = "EMAILME";
const EMAIL = "";

const REGISTERED_BY_COLUMN_INDEX = 1;
const NOME_PRENOTAZIONE_COLUMN_INDEX = 3;
const COPERTI_COLUMN_INDEX = 4;
const ORARIO_COLUMN_INDEX = 5;
const RECEIVED_AT= 8;
const DELETED_BY_COLUMN_INDEX= 10;
const TOTAL_COLUMN_INDEX = 6;

const HEADER =["Registered by",	"Giorno prenotazione",	"Nome prenotazione",	"Coperti",	"Orario","Totale Coperti",,"received_at","plain_message","deleted_by"];

const HEADER_MAIN_BACKGROUND_COLOR = "#99e599";
const HEADER_TOT_BACKGROUND_COLOR = "yellow";
const HEADER_MAIN_FONT_SIZE = "12";
const HEADER_SECOND_FONT_COLOR = "grey";
const HEADER_MAIN_FONT_STYLE = "bold";
const HEADER_SECOND_FONT_STYLE = "italic";
const HEADER_HORIZONTAL_ALIGN = "center";
const HEADER_HORIZONTAL_TOT_ALIGN = "left";
const TESTO_BARRATO = "line-through";
const CANCELLATO = "canceled";



function setWebhook() {
  var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  var response = UrlFetchApp.fetch(url);
}

function sendMessage(chat_id, text) {
  var url = telegramUrl + "/sendMessage?chat_id=" + chat_id + "&text="+ text;
  var response = UrlFetchApp.fetch(url);
}

/**
 * CREATE SHEET
 */
function createSheet(giornoPrenotazione){
  var file = SpreadsheetApp.openById(spreadsheetId);
  file.insertSheet().setName(giornoPrenotazione);
  var sheet = file.getSheetByName(giornoPrenotazione);
  sheet.appendRow(HEADER);
  var rangeVerde= sheet.getRange("A1:E1");
  rangeVerde.setFontSize(HEADER_MAIN_FONT_SIZE);
  rangeVerde.setBackground(HEADER_MAIN_BACKGROUND_COLOR);
  rangeVerde.setFontWeight(HEADER_MAIN_FONT_STYLE);
  rangeVerde.setWrap(true);
  rangeVerde.setHorizontalAlignment(HEADER_HORIZONTAL_ALIGN);
  var rangeGiallo = sheet.getRange("F1:G1");
  rangeGiallo.setBackground(HEADER_TOT_BACKGROUND_COLOR);
  rangeGiallo.setFontWeight(HEADER_MAIN_FONT_STYLE);
  rangeGiallo.setWrap(true);
  rangeGiallo.setFontSize(HEADER_MAIN_FONT_SIZE);
  rangeGiallo.setHorizontalAlignment(HEADER_HORIZONTAL_TOT_ALIGN);
  var rangeGrigio= sheet.getRange("H1:J1");
  rangeGrigio.setFontColor(HEADER_SECOND_FONT_COLOR);
  rangeGrigio.setFontStyle(HEADER_SECOND_FONT_STYLE);
  var cell_tot = sheet.getRange("G1");
  cell_tot.setFormula("=SUM(D2:D100)"); 
  cell_tot.setFontSize(HEADER_MAIN_FONT_SIZE);
  cell_tot.setFontWeight(HEADER_MAIN_FONT_STYLE);
  cell_tot.setBackground(HEADER_TOT_BACKGROUND_COLOR);
}


/**
 * CREATE 
 */
function doReservation(user, giornoPrenotazione, text){
  var numeroPersone = 0;
  var orarioH = 00;
  var orarioM = '00'; //string to not crop 00
  var now = new Date();

  text = text.replace(/[.,:_]+/g, ' ');
  text = text.replace(/ a /g, ' ');
  text = text.replace(/ e /g, ' ');
  text = text.replace(/\s[\s]+/g, ' ');
  numbers = text.match(/^\d+|\d+\b|\d+(?=\w)/g);
  nomePrenotazione = text.substr(0,text.indexOf(numbers[0]));

  if (isNaN(numbers[0])) {
    return "Ciao "+ user + "! Errore nel registrare la prenotazione! Controlla il numero delle persone";
  }
  else{
    numeroPersone=numbers[0];
  }
  if (!isNaN(numbers[1])) {
    orarioH=numbers[1];
  }
  if(!isNaN(numbers[2])) {
    orarioM = numbers[2];
  }
  
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(giornoPrenotazione);
  if (sheet == null) {
    createSheet(giornoPrenotazione);
    sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(giornoPrenotazione);
  }
  sheet.appendRow([user, giornoPrenotazione, nomePrenotazione, numeroPersone, orarioH+':'+orarioM,,, now, text]);
  sheet.getRange(sheet.getLastRow(),COPERTI_COLUMN_INDEX).setHorizontalAlignment(HEADER_HORIZONTAL_ALIGN);
  sheet.getRange(sheet.getLastRow(),RECEIVED_AT,sheet.getLastRow(),DELETED_BY_COLUMN_INDEX).setFontColor(HEADER_SECOND_FONT_COLOR);
  sheet.getRange(sheet.getLastRow(),RECEIVED_AT,sheet.getLastRow(),DELETED_BY_COLUMN_INDEX).setFontStyle(HEADER_SECOND_FONT_STYLE); 
  return "Ciao "+ user + "! Prenotazione per "+numeroPersone +" persone alle "+orarioH+':'+orarioM+" memorizzata con successo!!";
}

/**
 * DELETE
 */
function deleteReservation(user, giornoPrenotazione, text){
  var nomePrenotazione = text.substr(CANCELLA.length);
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(giornoPrenotazione);
  var range = sheet.getRange(2,NOME_PRENOTAZIONE_COLUMN_INDEX,sheet.getLastRow(),NOME_PRENOTAZIONE_COLUMN_INDEX);
  var SHTvalues = range.createTextFinder(nomePrenotazione).findAll();
  var result = SHTvalues.map(r => (r.getRow()));
  var cell;
  var cell2;
  var cell3;
  var numPrenotFound = result.length;
  if(numPrenotFound == 0){
     return "Ciao "+ user+ "non ho trovato prenotazioni con questo nome. Ricontrolla il nome inserito.";
  }
  result.forEach(rowindex => {
    cell = sheet.getRange(rowindex,DELETED_BY_COLUMN_INDEX);
    cell.setValue(user);
    cell.setFontColor(HEADER_SECOND_FONT_COLOR);
    cell.setFontStyle(HEADER_SECOND_FONT_STYLE);    
    cell3 = sheet.getRange(rowindex,1,1,ORARIO_COLUMN_INDEX);
    if(numPrenotFound == 1){
      cell3.setFontLine(TESTO_BARRATO);
      cell2 = sheet.getRange(rowindex,COPERTI_COLUMN_INDEX);
      cell2.setValue(CANCELLATO);
      return "Ciao "+ user + " ho cancellato la prenotazione di "+ nomePrenotazione;
    }
    cell3.setBackground(HEADER_TOT_BACKGROUND_COLOR);  
  });
  return "Ciao "+ user+ " ho trovato più prenotazioni con lo stesso nome. Le ho evidenziate tutte in giallo.";
}

/**
 * GET ALL
 */
function getAllReservation(giornoPrenotazione){
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(giornoPrenotazione);
  var rows = sheet.getRange(1, NOME_PRENOTAZIONE_COLUMN_INDEX, sheet.getLastRow(), ORARIO_COLUMN_INDEX);
  var prenotazioni = "";
  var prenotazione;
  rows.getValues().forEach(row => {
    prenotazione = "";
    for (let i = 0; i < row.length; i++){
      if(row[i] == CANCELLATO){
        prenotazione = "";
        break;
      }
      prenotazione += row[i]+" %09 ";
    }
    prenotazioni += prenotazione+" %0A ";
  });
  return prenotazioni;
}

/**
 * EMAIL
 */
function emailMeReservation(giornoPrenotazione){
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(giornoPrenotazione);
  var rows = sheet.getRange(1, NOME_PRENOTAZIONE_COLUMN_INDEX, sheet.getLastRow(), ORARIO_COLUMN_INDEX).getValues();
  var prenotazioni = "Ecco le prenotazioni registrate per il: "+giornoPrenotazione.toString() + " \n";
  var prenotazione = "";
  rows.forEach(row => {
    prenotazione ="";
    row.forEach(campo => {
      prenotazione += campo+" \t ";
    });
    prenotazioni += prenotazione+" \n";
  });
  MailApp.sendEmail(EMAIL,'Prenotazioni pizzeria per il '+ giornoPrenotazione.toString(), prenotazioni);
}



function doPost(e) {
  var now = new Date();
  var giornoPrenotazione = now.toLocaleDateString("it-IT", {timeZone: "Europe/Amsterdam"});
  var contents = JSON.parse(e.postData.contents);
  var chat_id = contents.message.from.id; 
  var user = contents.message.chat.first_name; //+ " "+ contents.message.chat.last_name;
  var chat_answer = "Null";
  var text = contents.message.text.toUpperCase();

  if(text == "/start"){
    chat_answer = "Ciao "+ user + "! scrivi la prenotazione qui sotto per memorizzarla. "+
    +"Scrivi prenotazioni per sapere quali prenotazioni ci sono stasera!";
  }
  else if(text.startsWith(PRENOTAZIONI)){    
    chat_answer = "Ciao "+ user +". Ecco le prenotazioni del "+ giornoPrenotazione.toString()+ ": %0A ";
    chat_answer += getAllReservation(giornoPrenotazione);
  }
  else if(text == EMAILME){
    emailMeReservation(giornoPrenotazione);
    chat_answer = "Ciao "+ user + ". Prenotazioni del "+giornoPrenotazione.toString()+" inviate via email! ";
  }
  else if(text.startsWith(CANCELLA)){ 
    chat_answer = deleteReservation(user,giornoPrenotazione, text);
  }
  else {
    chat_answer = doReservation(user, giornoPrenotazione, text);
  } 
  sendMessage(chat_id, chat_answer);
}


  //SpreadsheetApp.getActiveSheet().getRange("K1").setFormula('Query(A:C,"SELECT A,B,C WHERE B="' + "SomeOne'" + ',1)'); //filter the data and populate to D1 onwards    
  //SpreadsheetApp.getActiveSheet().getRange("L:M").getValues();
