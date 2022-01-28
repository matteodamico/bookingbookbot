const TOKEN_TELEGRAM = "";
const SPREADSHEET_ID = "";
const ID_GOOGLE_APP_SCRIPT = "";
const TEST_CHAT_ID = "";

const GCP_ISSUER_CLIENT_EMAIL = "";
const GCP_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----";

const EMAIL_ADDRESS_M = "";
const EMAIL_ADDRESS_C = "";
const EMAIL_ADDRESS_A = "";
const EMAIL_ADDRESS_S = "";
const NAME_C = "";
const NAME_S = "";
const NAME_A = "";
const NAME_M = "";

const WEBAPPURL = "https://script.google.com/macros/s/" + ID_GOOGLE_APP_SCRIPT + "/exec";
const TELEGRAMURL = "https://api.telegram.org/bot" + TOKEN_TELEGRAM;

const TELEGRAM_FILE_INFO_URL = "https://api.telegram.org/bot" + TOKEN_TELEGRAM + "/getFile?file_id=";
const TELEGRAM_FILE_DOWNLOAD_URL = "https://api.telegram.org/file/bot" + TOKEN_TELEGRAM + "/";

const GCP_RECOGNIZE_URL = "https://speech.googleapis.com/v1/speech:recognize";
const GCP_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GCP_SCOPE = "https://www.googleapis.com/auth/cloud-platform";
const GCP_REQUEST_CONTENT_TYPE = "application/json";

const START = "START";
const CMD_START = "/START";
const CMD_OK = "OK";
const CMD_YES = "SI";
const CANCELLA = "CANCELLA ";
const PRENOTA = "PRENOTA";
const PRENOTAZIONI = "PRENOTAZIONI";
const EMAILME = "EMAILME";
const ASPORTO = "ASPORTO";

const CALLBACK_TAVOLO = "INSIDE";
const CALLBACK_ASPORTO = "TAKEAW";
const CALLBACK_LIST_PREN = "GETRESERVE";
const CALLBACK_PRENOTA_ORARIO = "TIME_PRNT";
const CALLBACK_PRENOTA = "PRNT";
const CALLBACK_CANCELLA = "CNCL";
const CALLBACK_NOT_PROPERLY_RECOGNIZED = "NPRZ";
const CALLBACK_VOICE = "VOICE";

const REGISTERED_BY_COLUMN_INDEX = 1;
const ASPORTO_COLUMN_INDEX = 6;
const GIORNO_PRENOTAZIONE_COLUMN_INDEX = 2;
const ORARIO_COLUMN_INDEX = 3;
const NOME_PRENOTAZIONE_COLUMN_INDEX = 4;
const COPERTI_COLUMN_INDEX = 5;
const TOTAL_COLUMN_INDEX = 7;
const RECEIVED_AT_COLUMN_INDEX = 9;
const DELETED_BY_COLUMN_INDEX = 11;


const DATE_OPTIONS_LONG = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const DATE_OPTIONS = { weekday: 'long', month: 'long', day: 'numeric' };
const TIMEZONE = "Europe/Amsterdam";
const LANGUAGE = "it-IT";
const ASCII_NEW_LINE = " %0A ";
const ASCII_HORIZ_TAB = " %09 ";
const HTTP_OK = 200;

const HEADER = ["Registered by", "Giorno prenotazione", "Orario", "Nome prenotazione", "Coperti/ Ordine", "Asporto", "TOTALE COPERTI", , "received_at", "plain_message", "deleted_by"];

const MAIN_EMAIL_COMMAND_BUTTONS = {
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
      "text": "Mandami un email con le prenotazioni per stasera",
      "callback_data": EMAILME
    }]
  ]
};
const MAIN_COMMAND_BUTTONS = {
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
    }]
  ]
};
const REPLY_COMMAND = {
  "force_reply": true
};

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

const EMAIL_SUBJECT_TAVOLO = "Prenotazioni Tavoli pizzeria per il ";
const EMAIL_SUBJECT_ASPORTO = "Prenotazioni Take-Away pizzeria per il ";

const MSG_OK = "OK";
const MSG_SALUTO = "Ciao ";
const MSG_RESERVATION_ERROR_NUMBER_PERSON = "! Errore nel registrare la prenotazione! Controlla il numero delle persone";
const MSG_DELETE_RESERVATION_ERROR_NOT_FOUND = " non ho trovato prenotazioni con questo nome. Ricontrolla il nome inserito.";
const MSG_DELETE_MORE_RESERVATION = " ho trovato più prenotazioni con lo stesso nome. Le ho evidenziate tutte in giallo sul file.";
const MSG_START = "! scrivi la prenotazione qui sotto per memorizzarla. Oppure premi uno dei pulsanti qui sotto.";
const MSG_NOTIFY_EMAIL = "Prenotazioni del ";
const MSG_DELETE_RESERVATION_SUCCESS = " ho cancellato la prenotazione di ";
const MSG_GET_RESERVATIONS = "Ecco le prenotazioni registrate ";
const MSG_GET_NO_RESERVATIONS = "Non ci sono prenotazioni per il giorno selezionato!";
const MSG_PICK_A_DATE = "Scegli la data tra quelle qui sotto ";
const MSG_PICK_A_LOCATION = "Scegli la posizione ";
const MSG_PICK_A_TIME = "Seleziona un orario tra quelli qui sotto ";
const MSG_DATE_TO_RESERVE = "per cui vuoi prenotare ";
const MSG_DATE_TO_RESERVE2 = " che vuoi prenotare ";
const MSG_DATE_TO_CANCEL = "per cui vuoi cancellare la prenotazione!";
const MSG_DATE_TO_CANCEL2 = " che vuoi cancellare";
const MSG_GIVE_ME_NAME_RESERVATION = "Scrivi il nome della prenotazione";
const MSG_OK_DAY_SELECTED = "Ok, giorno selezionato!";
const MSG_OK_TIME_SELECTED = "Ok, orario selezionato!";
const MSG_GIVE_ME_NUMBERS = "il numero di coperti separati da uno spazio";
const MSG_RESERVATION_OK = "Prenotazione memorizzata con successo!! ";
const MSG_CHAT_RENEW = "Vuoi effettuare una nuova operazione?";
const MSG_DATE_TO_GETLIST = "per cui vuoi vedere le prenotazioni!";
const MSG_NOT_RECOGNIZED = "Non sono riuscito a capire il messaggio audio";
const MSG_SORRY_RETRY = "Mi dispiace, riprova con un nuovo vocale.";
const MSG_TAKE_AWAY = "da ASPORTO";
const MSG_WITH_TABLE = "con TAVOLO";
const MSG_FOOD_AND_BEVERAGE = " cibo e bevande";

/**
 * SENDERS
 */
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
  var url = TELEGRAMURL + "/answerCallbackQuery?callback_query_id=" + chat_id + "&text=" + text;
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
 * DATES
 */
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
function parseDate(giorno_prenotazione_text) {
  var gg = giorno_prenotazione_text.split("/");
  return new Date(gg[2], gg[1] - 1, gg[0]);
}
function getDateFromText(text) {
  date = new Date();
  //PARSE DATE LONG
  var texts = text.split(" ")
  var text_date = texts[texts.length - 1];
  var count = (text_date.match(/\//g) || []).length;
  if (count == 1) {
    //PARSE DATE SHORT
    var year = date.getFullYear();
    text_date = text_date + "/" + year;
    return parseDate(text_date);
  }
  else if (count == 2) {
    var texts_y = text_date.split("/");
    var year_text = texts_y[2];
    if (year_text.length == 2) {
      year_text = "20" + year_text;
      text_date = texts_y[0] + "/" + texts_y[1] + "/" + year_text;
    }
    return parseDate(text_date);
  }
  return date;
}
function rimuoviData(nomePrenotazione) {
  var testo = nomePrenotazione.split(" ");
  var num_blocchi = testo.length;
  var testobonificato = "";
  for (i = 0; i < num_blocchi - 1; i++) {
    testobonificato += testo[i] + " ";
  }
  return testobonificato;
}
/**
 * BUTTONS
 */
function getMainButtons(user) {
  if (user == NAME_M || user == NAME_C || user == NAME_A || user == NAME_S) {
    return MAIN_EMAIL_COMMAND_BUTTONS;
  }
  return MAIN_COMMAND_BUTTONS;
}
function getNextDatesButton(action, now) {
  return {
    "inline_keyboard": [
      [{
        "text": now.toLocaleDateString(LANGUAGE, DATE_OPTIONS),
        "callback_data": action + "_" + now.toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
      }],
      [{
        "text": now.addDays(1).toLocaleDateString(LANGUAGE, DATE_OPTIONS),
        "callback_data": action + "_" + now.addDays(1).toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
      }],
      [{
        "text": now.addDays(2).toLocaleDateString(LANGUAGE, DATE_OPTIONS),
        "callback_data": action + "_" + now.addDays(2).toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
      }],
      [{
        "text": now.addDays(3).toLocaleDateString(LANGUAGE, DATE_OPTIONS),
        "callback_data": action + "_" + now.addDays(3).toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
      }],
      [{
        "text": now.addDays(4).toLocaleDateString(LANGUAGE, DATE_OPTIONS),
        "callback_data": action + "_" + now.addDays(4).toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
      }],
      [{
        "text": now.addDays(5).toLocaleDateString(LANGUAGE, DATE_OPTIONS),
        "callback_data": action + "_" + now.addDays(5).toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE })
      }]
    ]
  };
}
function getOrariButton(action, giornoPrenotazione) {
  return {
    "inline_keyboard": [
      [{
        "text": "19:30",
        "callback_data": action + "_" + giornoPrenotazione + "_19:30"
      },
      {
        "text": "19:45",
        "callback_data": action + "_" + giornoPrenotazione + "_19:45"
      }],
      [{
        "text": "20:00",
        "callback_data": action + "_" + giornoPrenotazione + "_20:00"
      },
      {
        "text": "20:15",
        "callback_data": action + "_" + giornoPrenotazione + "_20:15"
      }],
      [{
        "text": "20:30",
        "callback_data": action + "_" + giornoPrenotazione + "_20:30"
      },
      {
        "text": "20:45",
        "callback_data": action + "_" + giornoPrenotazione + "_20:45"
      }],
      [{
        "text": "21:00",
        "callback_data": action + "_" + giornoPrenotazione + "_21:00"
      }]
    ]
  };
}
function getYesOrNoButtons(action, response) {
  return {
    "inline_keyboard": [
      [{
        "text": "SI",
        "callback_data": action + "_" + response
      },
      {
        "text": "NO",
        "callback_data": action + "_" + CALLBACK_NOT_PROPERLY_RECOGNIZED
      }]
    ]
  };
}
function getLocationButtons(action) {
  return {
    "inline_keyboard": [
      [{
        "text": "Tavolo",
        "callback_data": action + "_" + CALLBACK_TAVOLO
      },
      {
        "text": "Asporto",
        "callback_data": action + "_" + CALLBACK_ASPORTO
      }]
    ]
  };
}
/**
 * CREATE SHEET
 */
function createSheet(giornoPrenotazione) {
  var file = SpreadsheetApp.openById(SPREADSHEET_ID);
  file.insertSheet().setName(giornoPrenotazione);
  var sheet = file.getSheetByName(giornoPrenotazione);
  sheet.appendRow(HEADER);
  var rangeVerde = sheet.getRange("A1:F1");
  rangeVerde.setFontSize(HEADER_MAIN_FONT_SIZE);
  rangeVerde.setBackground(HEADER_MAIN_BACKGROUND_COLOR);
  rangeVerde.setFontWeight(HEADER_MAIN_FONT_STYLE);
  rangeVerde.setWrap(true);
  rangeVerde.setHorizontalAlignment(HEADER_HORIZONTAL_ALIGN);
  var rangeGiallo = sheet.getRange("G1:H1");
  rangeGiallo.setBackground(HEADER_TOT_BACKGROUND_COLOR);
  rangeGiallo.setFontWeight(HEADER_MAIN_FONT_STYLE);
  rangeGiallo.setWrap(true);
  rangeGiallo.setFontSize(HEADER_MAIN_FONT_SIZE);
  rangeGiallo.setHorizontalAlignment(HEADER_HORIZONTAL_TOT_ALIGN);
  var rangeGrigio = sheet.getRange("I1:K1");
  rangeGrigio.setFontColor(HEADER_SECOND_FONT_COLOR);
  rangeGrigio.setFontStyle(HEADER_SECOND_FONT_STYLE);
  var cell_tot = sheet.getRange("H1");
  cell_tot.setFormula("=SUM(E2:E100)");
  cell_tot.setFontSize(HEADER_MAIN_FONT_SIZE);
  cell_tot.setFontWeight(HEADER_MAIN_FONT_STYLE);
  cell_tot.setBackground(HEADER_TOT_BACKGROUND_COLOR);
}
/**
 * RESERVATION 
 */
function doReservation(user,giornoPrenotazione, orario, nomePrenotazione, numeroPersone, text) {
  var now = new Date();
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  if (sheet == null) {
    createSheet(giornoPrenotazione);
    sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  }
  sheet.appendRow([user,giornoPrenotazione, orario, nomePrenotazione, numeroPersone, , , ,now, text]);
  sheet.getRange(sheet.getLastRow(), COPERTI_COLUMN_INDEX).setHorizontalAlignment(HEADER_HORIZONTAL_ALIGN);
  sheet.getRange(sheet.getLastRow(), RECEIVED_AT_COLUMN_INDEX, sheet.getLastRow(), DELETED_BY_COLUMN_INDEX).setFontColor(HEADER_SECOND_FONT_COLOR);
  sheet.getRange(sheet.getLastRow(), RECEIVED_AT_COLUMN_INDEX, sheet.getLastRow(), DELETED_BY_COLUMN_INDEX).setFontStyle(HEADER_SECOND_FONT_STYLE);
  return MSG_RESERVATION_OK + numeroPersone + " persone il " + giornoPrenotazione + " alle " + orario + " a nome: " + nomePrenotazione;
}
function doReservationTakeAway(user, giornoPrenotazione, orario, nomePrenotazione, ordinazione, text) {
  var now = new Date();
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  if (sheet == null) {
    createSheet(giornoPrenotazione);
    sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  }
  sheet.appendRow([user, giornoPrenotazione, orario, nomePrenotazione, ordinazione,ASPORTO, , ,now, text]);
  sheet.getRange(sheet.getLastRow(), COPERTI_COLUMN_INDEX).setHorizontalAlignment(HEADER_HORIZONTAL_ALIGN);
  sheet.getRange(sheet.getLastRow(), RECEIVED_AT_COLUMN_INDEX, sheet.getLastRow(), DELETED_BY_COLUMN_INDEX).setFontColor(HEADER_SECOND_FONT_COLOR);
  sheet.getRange(sheet.getLastRow(), RECEIVED_AT_COLUMN_INDEX, sheet.getLastRow(), DELETED_BY_COLUMN_INDEX).setFontStyle(HEADER_SECOND_FONT_STYLE);
  return MSG_RESERVATION_OK + ASPORTO + " per il " + giornoPrenotazione + " alle " + orario + " a nome: " + nomePrenotazione;
}
function processReservation(user, giornoPrenotazione, time, text) {

  var numeroPersone = 0;
  var orarioH = 00;
  var orarioM = '00'; //string to not crop 00 

  text = text.replace(/[.,:_]+/g, ' ');
  text = text.replace(/ a /g, ' ');
  text = text.replace(/ e /g, ' ');
  text = text.replace(/\s[\s]+/g, ' ');

  var prenotazione = text;

  if (prenotazione.includes("/")) {
    prenotazione = rimuoviData(prenotazione);
  }

  if (text.includes(ASPORTO)) {
    text_split = text.split(" ");
    var nomePrenotazione = text_split[0];
    var ordinazione = text.substring(nomePrenotazione.length + 1);
    ordinazione = ordinazione.replace(ASPORTO, "");
    //manca gestione time se inserito a mano
    return doReservationTakeAway(user, giornoPrenotazione, time, nomePrenotazione, ordinazione, text);
  }

  var numbers = prenotazione.match(/^\d+|\d+\b|\d+(?=\w)/g);
  var nomePrenotazione = prenotazione.substring(0, prenotazione.indexOf(numbers[0]));
  nomePrenotazione = nomePrenotazione.trim();

  if (isNaN(numbers[0])) {
    return MSG_SALUTO + user + MSG_RESERVATION_ERROR_NUMBER_PERSON;
  }
  else {
    numeroPersone = numbers[0];
  }
  if (!time) {
    if (!isNaN(numbers[1])) {
      orarioH = numbers[1];
    }
    if (!isNaN(numbers[2])) {
      orarioM = numbers[2];
    }
    time = orarioH + ':' + orarioM;
  }
  return doReservation(user, giornoPrenotazione, time, nomePrenotazione, numeroPersone, text);
}
/**
 * DELETE
 */
function deleteReservation(user, giornoPrenotazione, text) {
  var nomePrenotazione = text.substr(CANCELLA.length);
  if (nomePrenotazione.includes("/")) {
    nomePrenotazione = rimuoviData(nomePrenotazione);
  }
  nomePrenotazione = nomePrenotazione.toUpperCase().trim();
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
    cell3 = sheet.getRange(rowindex, 1, 1, COPERTI_COLUMN_INDEX);
    if (numPrenotFound == 1) {
      cell3.setFontLine(TESTO_BARRATO);
      cell2 = sheet.getRange(rowindex, COPERTI_COLUMN_INDEX);
      cell2.setValue(CANCELLATO);
      return MSG_SALUTO + user + MSG_DELETE_RESERVATION_SUCCESS + nomePrenotazione + " per il " + giornoPrenotazione;
    }
    cell3.setBackground(HEADER_TOT_BACKGROUND_COLOR);
  };
  return MSG_SALUTO + user + MSG_DELETE_MORE_RESERVATION;
}
/**
 * GET ALL
 */
function getAllReservation(giornoPrenotazione, asporto) {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  if (!sheet)
    return MSG_GET_NO_RESERVATIONS;  
  var rows = sheet.getRange(1, ORARIO_COLUMN_INDEX, sheet.getLastRow(), 4).getValues();
  var newRows = null;
  var prenotazioni =""; 
  if (asporto == true) {
    newRows = rows.filter(function (row) {
      return row[3] == "ASPORTO";
    });
  }
  else {
    var total = sheet.getRange(1, TOTAL_COLUMN_INDEX, sheet.getLastRow(), 2).getValues();
    prenotazioni = total[0] + total[1] + ASCII_NEW_LINE;   
    newRows = rows.filter(function (row) {
      return row[3] == "";
    });
  }
 
  prenotazioni = prenotazioni.replace(/[.,:_]+/g, ' ');
  var prenotazione;
  if (newRows.length == 0) {
    return MSG_GET_NO_RESERVATIONS;
  }
  newRows.forEach(row => {
    prenotazione = "";
    for (let i = 0; i < 3; i++) {
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
function emailMeReservation(user, giornoPrenotazione, asporto) {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(giornoPrenotazione);
  if (!sheet)
    return MSG_GET_NO_RESERVATIONS;
  var total = sheet.getRange(1, TOTAL_COLUMN_INDEX, sheet.getLastRow(), 2).getValues();
  var rows = sheet.getRange(1, ORARIO_COLUMN_INDEX, sheet.getLastRow(), 4).getValues();
  var newRows = null;
  if (asporto == true) {
    newRows = rows.filter(function (row) {
      return row[3] == "ASPORTO";
    });
  }
  else {
    newRows = rows.filter(function (row) {
      return row[3] == "";
    });
  }
  var prenotazioni = MSG_GET_RESERVATIONS + giornoPrenotazione.toString() + ": \n";
  prenotazioni += total[0] + total[1] + " \n";
  prenotazioni = prenotazioni.replace(/[.,:_]+/g, ' ');
  var prenotazione = "";
  newRows.forEach(row => {
    prenotazione = "";
    row.forEach(campo => {
      prenotazione += campo + " \t ";
    });
    prenotazioni += prenotazione + " \n";
  });
  var email = EMAIL_ADDRESS_M;
  if (user == NAME_C) {
    email = EMAIL_ADDRESS_C;
  }
  else if (user == NAME_S) {
    email = EMAIL_ADDRESS_S;
  }
  else if (user == NAME_A) {
    email = EMAIL_ADDRESS_A;
  }
  MailApp.sendEmail(email, EMAIL_SUBJECT_TAVOLO + giornoPrenotazione.toString(), prenotazioni);
  return MSG_NOTIFY_EMAIL + giornoPrenotazione.toString() + " inviate via email! ";
}
/**
 * GCP AUTHENTICATION
 */
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

/**
 *  TRANSCRIBE 
 * */
function transcribe(contenuto) {
  var payload = {
    "config": {
      "encoding": "WEBM_OPUS",
      "sampleRateHertz": 48000,
      "languageCode": LANGUAGE,
      "enableWordTimeOffsets": false
    },
    "audio": {
      "content": contenuto
      //"uri": "only GCS supported"
    }
  };
  var response = UrlFetchApp.fetch(
    GCP_RECOGNIZE_URL, {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + getService().getAccessToken()
    },
    contentType: GCP_REQUEST_CONTENT_TYPE,
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });
  Logger.log(response.getContentText());
  var json_response = JSON.parse(response.getContentText());
  var code = response.getResponseCode();
  if (code == HTTP_OK) {
    var results = json_response.results;
    var transcript = results[0].alternatives[0].transcript;
    return transcript;
  }
  return null;
}

function processCallback(contents) {
  var chat_answer = "";
  var now = new Date();
  var giornoPrenotazione = now.toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE });
  var chat_id = contents.callback_query.from.id;
  var query_id = contents.callback_query.id;
  var user = contents.callback_query.message.chat.first_name;
  var text = contents.callback_query.data;
  chat_answer = MSG_SALUTO + user + "! ";
  
  //PRENOTAZIONI - PICK A LOCATION
  if (text == PRENOTAZIONI) {
    chat_answer += MSG_PICK_A_LOCATION + MSG_DATE_TO_GETLIST;
    answerCallbackMessage(query_id, "");
    return sendKeyboard(chat_id, chat_answer, getLocationButtons(PRENOTAZIONI));
  }
  //PRENOTAZIONI - PICK A DATE
  else if (text.startsWith(PRENOTAZIONI)) {
    var now = new Date();
    var location = text.substring(PRENOTAZIONI.length + 1);
    var next_dates_button = getNextDatesButton(CALLBACK_LIST_PREN + "_" + location, now);
    chat_answer += MSG_PICK_A_DATE + MSG_DATE_TO_GETLIST;
    answerCallbackMessage(query_id, "");
    return sendKeyboard(chat_id, chat_answer, next_dates_button);
  }

  else if (text.startsWith(CALLBACK_LIST_PREN)) {
    var location = text.substring(CALLBACK_LIST_PREN.length + 1, CALLBACK_LIST_PREN.length + 1 + CALLBACK_ASPORTO.length);
    var asporto = false;
    var location_text = MSG_WITH_TABLE;
    if (location == CALLBACK_ASPORTO){
      asporto = true;
      location_text = MSG_TAKE_AWAY;
    }
    var giornoPrenotazione = text.substring(CALLBACK_LIST_PREN.length + 1 + CALLBACK_ASPORTO.length + 1);
    chat_answer = MSG_SALUTO + user + ". " + MSG_GET_RESERVATIONS + location_text + " per il : "+ giornoPrenotazione  + ASCII_NEW_LINE;
    chat_answer += getAllReservation(giornoPrenotazione, asporto);
    answerCallbackMessage(query_id, MSG_OK_DAY_SELECTED);
    sendMessage(chat_id, chat_answer);
    var chat_proposal_renew = MSG_CHAT_RENEW;
    sendMessage(chat_id, chat_proposal_renew);
  }
  else if (text == EMAILME) {
    chat_answer = MSG_SALUTO + user + "!";
    var asporto = false;
    chat_answer += emailMeReservation(user, giornoPrenotazione, asporto);
    answerCallbackMessage(query_id, "");
    sendMessage(chat_id, chat_answer);
    var chat_proposal_renew = MSG_CHAT_RENEW;
    sendMessage(chat_id, chat_proposal_renew);
  }
  //PRENOTA - PICK A LOCATION
  else if (text == PRENOTA) {
    chat_answer = MSG_PICK_A_LOCATION + MSG_DATE_TO_RESERVE;
    answerCallbackMessage(query_id, "");
    return sendKeyboard(chat_id, chat_answer, getLocationButtons(PRENOTA));
  }
  //PRENOTA - PICK A DATE
  else if (text.startsWith(PRENOTA) && text.length == (PRENOTA.length + 1 + CALLBACK_TAVOLO.length)) {
    var now = new Date();
    var location = text.substring(PRENOTA.length + 1);
    var location_text = MSG_WITH_TABLE;
    if(location==CALLBACK_ASPORTO)
    location_text= MSG_TAKE_AWAY;
    var next_dates_button = getNextDatesButton(text, now);
    chat_answer = MSG_PICK_A_DATE + MSG_DATE_TO_RESERVE+ location_text;
    answerCallbackMessage(query_id, "");
    return sendKeyboard(chat_id, chat_answer, next_dates_button);
  }
  //PRENOTA - PICK A TIME
  else if (text.startsWith(PRENOTA+"_"+CALLBACK_TAVOLO) || text.startsWith(PRENOTA+"_"+CALLBACK_ASPORTO)) {
    var giornoPrenotazione = text.substring(PRENOTA.length+1+CALLBACK_TAVOLO.length + 1);
    var location = text.substring(PRENOTA.length + 1,PRENOTA.length+1+CALLBACK_TAVOLO.length);
    var location_text = MSG_WITH_TABLE;
    if(location==CALLBACK_ASPORTO)
    location_text= MSG_TAKE_AWAY;
    var times_button = getOrariButton(CALLBACK_PRENOTA_ORARIO + "_" + text.substring(PRENOTA.length+1, PRENOTA.length+1+CALLBACK_TAVOLO.length), giornoPrenotazione);
    chat_answer = MSG_PICK_A_TIME + MSG_DATE_TO_RESERVE +location_text + " per il : " + giornoPrenotazione;
    answerCallbackMessage(query_id, MSG_OK_DAY_SELECTED);
    return sendKeyboard(chat_id, chat_answer, times_button);
  }
  //PRENOTA - GET A NAME
  else if (text.startsWith(CALLBACK_PRENOTA_ORARIO)) {
    var location = text.substring(CALLBACK_PRENOTA_ORARIO.length + 1, CALLBACK_PRENOTA_ORARIO.length + 1 + CALLBACK_TAVOLO.length);
    var datetime = text.substring(CALLBACK_PRENOTA_ORARIO.length + 1 + CALLBACK_TAVOLO.length + 1);
    var location_text = MSG_WITH_TABLE;
    if (location == CALLBACK_TAVOLO) {
      chat_answer += MSG_GIVE_ME_NAME_RESERVATION + " e " + MSG_GIVE_ME_NUMBERS + MSG_DATE_TO_RESERVE2 + location_text +" per il : " + datetime;
    }
    if (location == CALLBACK_ASPORTO) {
      location_text= MSG_TAKE_AWAY;
      chat_answer += MSG_GIVE_ME_NAME_RESERVATION + " e separati da spazio " + MSG_FOOD_AND_BEVERAGE + MSG_DATE_TO_RESERVE2 + MSG_TAKE_AWAY + " per il : " + datetime;
    }
    answerCallbackMessage(query_id, MSG_OK_TIME_SELECTED);
    return sendKeyboard(chat_id, chat_answer, REPLY_COMMAND);
  }
  else if (text == CANCELLA) {
    var now = new Date();
    var next_dates_button = getNextDatesButton(CALLBACK_CANCELLA, now);
    chat_answer += MSG_PICK_A_DATE + MSG_DATE_TO_CANCEL;
    answerCallbackMessage(query_id, "");
    return sendKeyboard(chat_id, chat_answer, next_dates_button);
  }
  else if (text.startsWith(CALLBACK_CANCELLA)) {
    chat_answer += MSG_GIVE_ME_NAME_RESERVATION + MSG_DATE_TO_CANCEL2 + " del : " + text.substring(CALLBACK_CANCELLA.length + 1);
    answerCallbackMessage(query_id, MSG_OK_DAY_SELECTED);
    return sendKeyboard(chat_id, chat_answer, REPLY_COMMAND);
  }
  else if (text == (CALLBACK_VOICE + "_" + CALLBACK_NOT_PROPERLY_RECOGNIZED)) {
    chat_answer = MSG_SORRY_RETRY;
    answerCallbackMessage(query_id, "");
    return sendMessage(chat_id, chat_answer);
  }
  else if (text.startsWith(CALLBACK_VOICE)) {
    answerCallbackMessage(query_id, "");
    processTextMessage(chat_id, user, text.substr(CALLBACK_VOICE.length + 1));
  }
}

function processTextMessage(chat_id, user, text, date, time) {
  var chat_answer = "";
  var text = text.toUpperCase();

  if (!date) {
    date = getDateFromText(text);
  }
  var giornoPrenotazione = date.toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE });

  if (text == CMD_START || text == START || text == CMD_OK || text == CMD_YES) {
    chat_answer = MSG_SALUTO + user + MSG_START;
    return sendKeyboard(chat_id, chat_answer, getMainButtons(user));
  }
  else if (text.startsWith(PRENOTAZIONI)) {
    var asporto = false;
    chat_answer = MSG_SALUTO + user + ". " + MSG_GET_RESERVATIONS + giornoPrenotazione + ": " + ASCII_NEW_LINE;
    chat_answer += getAllReservation(giornoPrenotazione, asporto);
  }
  else if (text.startsWith(EMAILME)) {
    var asporto = false;
    chat_answer = MSG_SALUTO + user;
    chat_answer += emailMeReservation(user, giornoPrenotazione, asporto);
  }
  else if (text.startsWith(CANCELLA)) {
    chat_answer = deleteReservation(user, giornoPrenotazione, text);
  }
  else {
    chat_answer = processReservation(user, giornoPrenotazione, time, text);
  }
  sendMessage(chat_id, chat_answer);
  var chat_proposal_renew = MSG_CHAT_RENEW;
  sendMessage(chat_id, chat_proposal_renew);
}

function processVoiceMessage(chat_id, user, voice_mex) {
  var audio_id = voice_mex.file_id;
  //var audio_id = "AwACAgQAAxkBAAICtGHudvA2mXNSvtbCyV6Vk1YOzr5KAAIDDAACrMJxU37n7S5prxBLIwQ";
  var chat_answer = MSG_SALUTO + user + "!";
  var audio_blob = getFile(audio_id);
  var contenutob64 = Utilities.base64Encode(audio_blob.getBytes());
  check();
  response = transcribe(contenutob64);
  if (!response) {
    chat_answer += MSG_NOT_RECOGNIZED;
  }
  chat_answer = 'Ho capito: "' + response + '".' + " E' corretto?";
  var yes_no_buttons = getYesOrNoButtons(CALLBACK_VOICE, response);
  sendKeyboard(chat_id, chat_answer, yes_no_buttons);
}

function doPost(e) {
  var contents = JSON.parse(e.postData.contents);
  if (contents.callback_query) {
    processCallback(contents);
  }
  else if (contents.message) {
    var chat_id = contents.message.from.id;
    var user = contents.message.chat.first_name;

    if (contents.message.reply_to_message) {
      var orig_text = contents.message.reply_to_message.text;
      var text = contents.message.text;
      if (orig_text.toUpperCase().includes(CANCELLA.trim())) {
        text = CANCELLA + text;
      }
      if (orig_text.toUpperCase().includes(ASPORTO)) {
        text = text + " " + ASPORTO;
      }
      var giorno_prenotazione_text = orig_text.substring(orig_text.indexOf(":") + 1);
      var time = null;
      if (giorno_prenotazione_text.includes("_")) {
        var datetime = giorno_prenotazione_text.split("_");
        giorno_prenotazione_text = datetime[0];
        time = datetime[1];
      }
      var date = parseDate(giorno_prenotazione_text);
      processTextMessage(chat_id, user, text, date, time);
    }
    else if (contents.message.text) {
      processTextMessage(chat_id, user, contents.message.text, null, null);
    }
    else if (contents.message.voice) {
      processVoiceMessage(chat_id, user, contents.message.voice);
    }
  }
}

/**
 * TEST
 */
function test() {
  var giorno_prenotazione_text = "22/1/2022";
  var giorno_prenotazione_text = "22/01/2022";
  var giorno_prenotazione_text = "2/1/2022";
  var giorno_prenotazione_text = "23/1/22";
  var giorno_prenotazione_text = "24/1";
  var giorno_prenotazione_text = "4/1";
  var giorno_prenotazione_text = "";
  var giorno_prenotazione_text = "2/2";

  //  var giornoPrenotazione = now.toLocaleDateString(LANGUAGE, { timeZone: TIMEZONE });
  //  var giornoPrenotazione = "11/1/2022";
  var user = "Admin";
  var chat_id = TEST_CHAT_ID;
  var date = null;
  //date = parseDate(giorno_prenotazione_text);

  var chat_answer = "Null";
  var text = "fernando 4 6 " + giorno_prenotazione_text;

  var text = "prenotazioni 25/1/2022";
  //var text = 'start'; // prenotazione
  //var text = "/start"; // start
  //var text = "cancella san fernando " + giorno_prenotazione_text; // cancellazione
  //var text = "prenotazioni"; // prenotazioni
  //var text = "emailme"; //email me
  text = text.toUpperCase();

  processTextMessage(chat_id, user, text, date, null);
  
  //processVoiceMessage(chat_id, user, null);

  if (text == "START") {
    chat_answer = MSG_SALUTO + user + MSG_START;
    sendKeyboard(chat_id, chat_answer, MAIN_COMMAND);
  }

  else if (text.startsWith(PRENOTAZIONI)) {
    var asporto = false;
    chat_answer = MSG_SALUTO + user + ". " + MSG_GET_RESERVATIONS + giornoPrenotazione.toString() + ": " + ASCII_NEW_LINE;
    chat_answer += getAllReservation(giornoPrenotazione, asporto);
  }
  else if (text == EMAILME) {
    chat_answer = MSG_SALUTO + user;
    var asporto = false;
    chat_answer += emailMeReservation(user, giornoPrenotazione, asporto);
  }
  else if (text.startsWith(CANCELLA)) {
    chat_answer = deleteReservation(user, giornoPrenotazione, text);
  }
  else {
    chat_answer = doReservation(user, giornoPrenotazione, text);
  }

  Logger.log("RISPOSTA: " + chat_answer);
  sendMessage(chat_id, chat_answer);
  var chat_proposal_renew = MSG_CHAT_RENEW;
  sendMessage(chat_id, chat_proposal_renew);
}
