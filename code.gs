const TOKEN_TELEGRAM = "";
const SPREADSHEET_ID = "";
const ID_GOOGLE_APP_SCRIPT = "";
const TEST_CHAT_ID = "";

const WEBAPPURL = "https://script.google.com/macros/s/" + ID_GOOGLE_APP_SCRIPT + "/exec";
const TELEGRAMURL = "https://api.telegram.org/bot" + TOKEN_TELEGRAM;

const TELEGRAM_FILE_INFO_URL = "https://api.telegram.org/bot" + TOKEN_TELEGRAM + "/getFile?file_id=";
const TELEGRAM_FILE_DOWNLOAD_URL = "https://api.telegram.org/file/bot" + TOKEN_TELEGRAM + "/";

const GCP_PRIVATE_KEY = "";
const GCP_ISSUER_CLIENT_EMAIL = "";
const GCP_RECOGNIZE_URL = "https://speech.googleapis.com/v1/speech:recognize";
const GCP_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GCP_SCOPE = "https://www.googleapis.com/auth/cloud-platform";
const GCP_REQUEST_CONTENT_TYPE = "application/json";

const START = "START";
const CMD_START = "/START";
const CANCELLA = "CANCELLA ";
const PRENOTA = "PRENOTA";
const PRENOTAZIONI = "PRENOTAZIONI";
const EMAILME = "EMAILME";
const EMAIL_ADDRESS = "";

const REGISTERED_BY_COLUMN_INDEX = 1;
const NOME_PRENOTAZIONE_COLUMN_INDEX = 3;
const COPERTI_COLUMN_INDEX = 4;
const ORARIO_COLUMN_INDEX = 5;
const RECEIVED_AT = 8;
const DELETED_BY_COLUMN_INDEX = 10;
const TOTAL_COLUMN_INDEX = 6;

const TIMEZONE = "Europe/Amsterdam";
const LANGUAGE = "it-IT";

const HEADER = ["Registered by", "Giorno prenotazione", "Nome prenotazione", "Coperti", "Orario", "TOTALE COPERTI", , "received_at", "plain_message", "deleted_by"];
const MAIN_COMMAND = {
  "inline_keyboard": [
    [{
      "text": "Prenota",
      "callback_data": PRENOTA
    }],
    [{
      "text": "Cancella Prenotazione",
      "callback_data": CANCELLA
    }],
    [{
      "text": "Prenotazioni",
      "callback_data": PRENOTAZIONI
    }],
    [{
      "text": "Manda un email a Cesare",
      "callback_data": EMAILME
    }]
  ]
}


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

const MSG_SALUTO = "Ciao ";
const MSG_RESERVATION_ERROR_NUMBER_PERSON = "! Errore nel registrare la prenotazione! Controlla il numero delle persone";
const MSG_DELETE_RESERVATION_ERROR_NOT_FOUND = " non ho trovato prenotazioni con questo nome. Ricontrolla il nome inserito.";
const MSG_DELETE_MORE_RESERVATION = " ho trovato più prenotazioni con lo stesso nome. Le ho evidenziate tutte in giallo sul file.";
const MSG_START = "! scrivi la prenotazione qui sotto per memorizzarla. Scrivi prenotazioni per sapere quali prenotazioni ci sono stasera.";
const MSG_NOTIFY_EMAIL = ". Prenotazioni del ";
const MSG_DELETE_RESERVATION_SUCCESS = " ho cancellato la prenotazione di ";
const MSG_GET_RESERVATIONS = "Ecco le prenotazioni registrate per il ";
const MSG_GET_NO_RESERVATIONS = "Non ci sono prenotazione per questo giorno!";
const MSG_PICK_A_DATE= "Scegli la data per cui vuoi prenotare tra quelle qui sotto!";
const ASCII_NEW_LINE = " %0A ";
const ASCII_HORIZ_TAB = " %09 ";

const EMAIL_SUBJECT = "Prenotazioni pizzeria per il ";

function setWebhook() {
  var url = TELEGRAMURL + "/setWebhook?url=" + WEBAPPURL;
  var response = UrlFetchApp.fetch(url);
}

function sendMessage(chat_id, text) {
  var url = TELEGRAMURL + "/sendMessage?chat_id=" + chat_id + "&text=" + text;
  var response = UrlFetchApp.fetch(url);
}
function sendKeyboard(chatId, text, keyboard) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatId),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyboard)
    }
  };
  UrlFetchApp.fetch(TELEGRAMURL + '/', data);
}


function answerCallbackMessage(chat_id, text) {
  var url = TELEGRAMURL + "/answerCallbackQuery?chat_id=" + chat_id + "&text=" + text;
  var response = UrlFetchApp.fetch(url);
}


/**
 * GET FILE
 */
function getFilePath(file_id) {
  var url = TELEGRAM_FILE_INFO_URL + file_id;
  var response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText()).result["file_path"];
}

function getFile(file_id) {
  var filepath = getFilePath(file_id);
  var fileURL = TELEGRAM_FILE_DOWNLOAD_URL + filepath;
  var response = UrlFetchApp.fetch(fileURL);
  return response.getBlob();
}

/**
 * CREATE SHEET
 */
function createSheet(giornoPrenotazione) {
  var file = SpreadsheetApp.openById(SPREADSHEET_ID);
  file.insertSheet().setName(giornoPrenotazione);
  var sheet = file.getSheetByName(giornoPrenotazione);
  sheet.appendRow(HEADER);
  var rangeVerde = sheet.getRange("A1:E1");
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
  var rangeGrigio = sheet.getRange("H1:J1");
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
function doReservation(user, giornoPrenotazione, text) {
  var numeroPersone = 0;
  var orarioH = 00;
  var orarioM = '00'; //string to not crop 00
  var now = new Date();

  text = text.replace(/[.,:_]+/g, ' ');
  text = text.replace(/ a /g, ' ');
  text = text.replace(/ e /g, ' ');
  text = text.replace(/\s[\s]+/g, ' ');
  numbers = text.match(/^\d+|\d+\b|\d+(?=\w)/g);
  nomePrenotazione = text.substr(0, text.indexOf(numbers[0]));
  nomePrenotazione = nomePrenotazione.trim();

  if (isNaN(numbers[0])) {
    return MSG_SALUTO + user + MSG_RESERVATION_ERROR_NUMBER_PERSON;
  }
  else {
    numeroPersone = numbers[0];
  }
  if (!isNaN(numbers[1])) {
    orarioH = numbers[1];
  }
  if (!isNaN(numbers[2])) {
    orarioM = numbers[2];
  }

  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  if (sheet == null) {
    createSheet(giornoPrenotazione);
    sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  }
  sheet.appendRow([user, giornoPrenotazione, nomePrenotazione, numeroPersone, orarioH + ':' + orarioM, , , now, text]);
  sheet.getRange(sheet.getLastRow(), COPERTI_COLUMN_INDEX).setHorizontalAlignment(HEADER_HORIZONTAL_ALIGN);
  sheet.getRange(sheet.getLastRow(), RECEIVED_AT, sheet.getLastRow(), DELETED_BY_COLUMN_INDEX).setFontColor(HEADER_SECOND_FONT_COLOR);
  sheet.getRange(sheet.getLastRow(), RECEIVED_AT, sheet.getLastRow(), DELETED_BY_COLUMN_INDEX).setFontStyle(HEADER_SECOND_FONT_STYLE);
  return MSG_SALUTO + user + "! Prenotazione per " + numeroPersone + " persone alle " + orarioH + ':' + orarioM + " memorizzata con successo!!";
}

/**
 * DELETE
 */
function deleteReservation(user, giornoPrenotazione, text) {
  var nomePrenotazione = text.substr(CANCELLA.length);
  nomePrenotazione = nomePrenotazione.toUpperCase().trim();
  /* var user="Matteo";
   var nomePrenotazione = "GG";
   var giornoPrenotazione = "11/1/2022";*/
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  var range = sheet.getRange(2, NOME_PRENOTAZIONE_COLUMN_INDEX, sheet.getLastRow(), NOME_PRENOTAZIONE_COLUMN_INDEX);
  var SHTvalues = range.createTextFinder(nomePrenotazione).matchEntireCell(true).findAll();
  var result = SHTvalues.map(r => (r.getRow()));
  var cell;
  var cell2;
  var cell3;
  var numPrenotFound = result.length;
  if (numPrenotFound == 0) {
    return MSG_SALUTO + user + MSG_DELETE_RESERVATION_ERROR_NOT_FOUND;
  }
  var rowindex;
  for (let i = 0; i < result.length; i++) {
    rowindex = result[i];
    cell = sheet.getRange(rowindex, DELETED_BY_COLUMN_INDEX);
    cell.setValue(user);
    cell.setFontColor(HEADER_SECOND_FONT_COLOR);
    cell.setFontStyle(HEADER_SECOND_FONT_STYLE);
    cell3 = sheet.getRange(rowindex, 1, 1, ORARIO_COLUMN_INDEX);
    if (numPrenotFound == 1) {
      cell3.setFontLine(TESTO_BARRATO);
      cell2 = sheet.getRange(rowindex, COPERTI_COLUMN_INDEX);
      cell2.setValue(CANCELLATO);
      return MSG_SALUTO + user + MSG_DELETE_RESERVATION_SUCCESS + nomePrenotazione;
    }
    cell3.setBackground(HEADER_TOT_BACKGROUND_COLOR);
  };
  return MSG_SALUTO + user + MSG_DELETE_MORE_RESERVATION;
}

/**
 * GET ALL
 */
function getAllReservation(giornoPrenotazione) {
  if (!SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione))
    return MSG_GET_NO_RESERVATIONS;
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  var rows = sheet.getRange(1, NOME_PRENOTAZIONE_COLUMN_INDEX, sheet.getLastRow(), ORARIO_COLUMN_INDEX).getValues();
  var prenotazioni = "";
  var prenotazione;
  if (rows.length == 0) {
    return MSG_GET_NO_RESERVATIONS;
  }
  rows.forEach(row => {
    prenotazione = "";
    for (let i = 0; i < row.length; i++) {
      if (row[i] == CANCELLATO) {
        prenotazione = "";
        break;
      }
      prenotazione += row[i] + ASCII_HORIZ_TAB;
    }
    prenotazioni += prenotazione + ASCII_NEW_LINE;
  });
  return prenotazioni;
}

/**
 * EMAIL
 */
function emailMeReservation(giornoPrenotazione) {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  var rows = sheet.getRange(1, NOME_PRENOTAZIONE_COLUMN_INDEX, sheet.getLastRow(), ORARIO_COLUMN_INDEX).getValues();
  var prenotazioni = MSG_GET_RESERVATIONS + giornoPrenotazione.toString() + ": \n";
  var prenotazione = "";
  rows.forEach(row => {
    prenotazione = "";
    row.forEach(campo => {
      prenotazione += campo + " \t ";
    });
    prenotazioni += prenotazione + " \n";
  });
  MailApp.sendEmail(EMAIL_ADDRESS, EMAIL_SUBJECT + giornoPrenotazione.toString(), prenotazioni);
}

/**
 * GCP AUTHENTICATION
 
function getService() {
  return OAuth2.createService('Speech-To-Text Token')
      .setTokenUrl(GCP_TOKEN_URL)
      .setPrivateKey(GCP_PRIVATE_KEY)
      .setIssuer(GCP_ISSUER_CLIENT_EMAIL)
      .setPropertyStore(PropertiesService.getScriptProperties())
      .setScope(GCP_SCOPE);
}
function check() {
  var service = getService();
  if (service.hasAccess()) {
    Logger.log(service.getAccessToken());
  } else {
    Logger.log(service.getLastError());
  }
}
*/
/**
 *  TRANSCRIBE
 
function transcribe(contenuto){
  var payload = {
    "config": {
      "encoding" : "ENCODING_UNSPECIFIED",
      "sampleRateHertz": 48000,
      "languageCode": LANGUAGE,
      "enableWordTimeOffsets": false
    },
    "audio": {
      content: contenuto
    }
  };
  var response = UrlFetchApp.fetch(
    GCP_RECOGNIZE_URL, {
      method: "GET",
      headers: {
        "Authorization" : "Bearer " + getService().getAccessToken()
      },
      contentType: GCP_REQUEST_CONTENT_TYPE,
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });  
  Logger.log(response.getContentText());
  return response.getContentText();
}
*/

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


function doPost(e) {
  var now = new Date();
  var giornoPrenotazione = now.toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE });
  var contents = JSON.parse(e.postData.contents);
  var chat_id = null;
  var user = null;
  var chat_answer = "";

  if (contents.callback_query) {
    chat_id = contents.callback_query.from.id;
    user = contents.callback_query.message.chat.first_name;
    var text = contents.callback_query.data;
    chat_answer = MSG_SALUTO + user + "! ";
    if (text.startsWith(PRENOTAZIONI)) {
      chat_answer = MSG_SALUTO + user + ". " + MSG_GET_RESERVATIONS + giornoPrenotazione.toString() + ": " + ASCII_NEW_LINE;
      chat_answer += getAllReservation(giornoPrenotazione);
    }
    else if (text == EMAILME) {
      emailMeReservation(giornoPrenotazione);
      chat_answer = MSG_SALUTO + user + MSG_NOTIFY_EMAIL + giornoPrenotazione.toString() + " inviate via email! ";
    }
    else if (text.startsWith(PRENOTA)) {
      //gestire nomeprenotazione,numero e data
      var now = new Date();
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      chat_answer += MSG_PICK_A_DATE;
      var DATE_CMD = {
        "inline_keyboard": [
          [{
            "text": now.toLocaleDateString(LANGUAGE, options),
            "callback_data": PRENOTA+"_"+now.toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
          }],
          [{
            "text": now.addDays(1).toLocaleDateString(LANGUAGE, options),
            "callback_data": PRENOTA+"_"+now.addDays(1).toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
          }],
          [{
            "text": now.addDays(2).toLocaleDateString(LANGUAGE, options),
            "callback_data": PRENOTA+"_"+now.addDays(2).toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
          }],
          [{
            "text": now.addDays(3).toLocaleDateString(LANGUAGE, options),
            "callback_data": PRENOTA+"_"+now.addDays(3).toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
          }],
          [{
            "text": now.addDays(4).toLocaleDateString(LANGUAGE, options),
            "callback_data": PRENOTA+"_"+now.addDays(4).toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
          }]
        ]
      };
      return sendKeyboard(chat_id, chat_answer, DATE_CMD);
      //  chat_answer = chat_answer = doReservation(user, giornoPrenotazione, text);
    }
    else if (text.startsWith(CANCELLA)) {
      chat_answer = deleteReservation(user, giornoPrenotazione, text);
    }
    sendMessage(chat_id, chat_answer);
  }
  else if (contents.message) {
    chat_id = contents.message.from.id;
    user = contents.message.chat.first_name; //+ " "+ contents.message.chat.last_name;
    if (contents.message.text) {
      var text = contents.message.text.toUpperCase();
      if (text == CMD_START || text == START) {
        chat_answer = MSG_SALUTO + user + MSG_START;
        return sendKeyboard(chat_id, chat_answer, MAIN_COMMAND);
      }
      else if (text.startsWith(PRENOTAZIONI)) {
        chat_answer = MSG_SALUTO + user + ". " + MSG_GET_RESERVATIONS + giornoPrenotazione.toString() + ": " + ASCII_NEW_LINE;
        chat_answer += getAllReservation(giornoPrenotazione);
      }
      else if (text == EMAILME) {
        emailMeReservation(giornoPrenotazione);
        chat_answer = MSG_SALUTO + user + MSG_NOTIFY_EMAIL + giornoPrenotazione.toString() + " inviate via email! ";
      }
      else if (text.startsWith(CANCELLA)) {
        chat_answer = deleteReservation(user, giornoPrenotazione, text);
      }
      else {
        chat_answer = doReservation(user, giornoPrenotazione, text);
      }
      sendMessage(chat_id, chat_answer);

    }
    else if (contents.message.audio) {
      var audio_mex = contents.message.audio;
      chat_answer = "Inizio audio: ";
      sendMessage(chat_id, chat_answer);
      var audio_id = audio_mex.file_id;
      chat_answer += audio_id;
      sendMessage(chat_id, chat_answer);
      var audio_blob = getFile(audio_id);
      sendMessage(chat_id, chat_answer);
      chat_answer += "! Ok blob audio";
    }
  }
}

/**
 * 
 * TEST
 * 
 */
function test() {
  var now = new Date();
  var giornoPrenotazione = now.toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE });
  //var giornoPrenotazione = "11/1/2022";
  var user = "Admin";
  var chat_id = TEST_CHAT_ID;
  var tomorrow = now.addDays(1);

  var chat_answer = "Null";
  var text = 'start'; // prenotazione
  //var text = "/start"; // start
  //var text = "cancella matt"; // cancellazione
  //var text = "prenotazioni"; // prenotazioni
  //var text = "emailme"; //email me
  text = text.toUpperCase();


  if (text == "START") {
    chat_answer = MSG_SALUTO + user + MSG_START;
    sendKeyboard(chat_id, chat_answer, MAIN_COMMAND);
  }

  else if (text.startsWith(PRENOTAZIONI)) {
    chat_answer = MSG_SALUTO + user + ". " + MSG_GET_RESERVATIONS + giornoPrenotazione.toString() + ": " + ASCII_NEW_LINE;
    chat_answer += getAllReservation(giornoPrenotazione);
  }
  else if (text == EMAILME) {
    emailMeReservation(giornoPrenotazione);
    chat_answer = MSG_SALUTO + user + MSG_NOTIFY_EMAIL + giornoPrenotazione.toString() + " inviate via email! ";
  }
  else if (text.startsWith(CANCELLA)) {
    chat_answer = deleteReservation(user, giornoPrenotazione, text);
  }
  else {
    chat_answer = doReservation(user, giornoPrenotazione, text);
  }

  Logger.log("RISPOSTA: " + chat_answer);
  sendMessage(chat_id, chat_answer, keyboard);
}
