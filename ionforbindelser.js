//########################################################################
//                                  Data 
//########################################################################
var CorrectAnswers = [
    {
        "name": "jern(<span class='CapitalI'>II</span>)chlorid",
        "plus": "Fe",
        "plusName": "jern(<span class='CapitalI'>II</span>)",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Cl",
        "minusName": "chlorid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "FeCl<sub>2</sub>"
    },

    {
        "name": "natriumoxid",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "O",
        "minusName": "oxid",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "Na<sub>2</sub>O"
    },

    {
        "name": "kobber(<span class='CapitalI'>II</span>)iodid",
        "plus": "Cu",
        "plusName": "kobber(<span class='CapitalI'>II</span>)",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "I",
        "minusName": "iodid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "CuI<sub>2</sub>"
    },

    {
        "name": "sølvsulfid",
        "plus": "Ag",
        "plusName": "sølv",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "S",
        "minusName": "sulfid",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "Ag<sub>2</sub>S"
    },

    {
        "name": "jern(<span class='CapitalI'>III</span>)bromid",
        "plus": "Fe",
        "plusName": "jern(<span class='CapitalI'>III</span>)",
        "plusCharge": "3+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Br",
        "minusName": "bromid",
        "minusCharge": "-",
        "minusCount": "3",
        "minusIonsNo": "",
        "html": "FeBr<sub>3</sub>"
    },

    {
        "name": "magnesiumbromid",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Br",
        "minusName": "bromid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "MgBr<sub>2</sub>"
    },

    {
        "name": "zinkbromid",
        "plus": "Zn",
        "plusName": "zink",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Br",
        "minusName": "bromid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "ZnBr<sub>2</sub>"
    },

    {
        "name": "ammoniumchlorid",
        "plus": "NH",
        "plusName": "ammonium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "4",
        "minus": "Cl",
        "minusName": "chlorid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "NH<sub>4</sub>Cl"
    },

    {
        "name": "ammoniumnitrat",
        "plus": "NH",
        "plusName": "ammonium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "4",
        "minus": "NO",
        "minusName": "nitrat",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "3",
        "html": "NH<sub>4</sub>NO<sub>3</sub>"
    },

    {
        "name": "ammoniumbromid",
        "plus": "NH",
        "plusName": "ammonium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "4",
        "minus": "Br",
        "minusName": "bromid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "NH<sub>4</sub>Br"
    },

    {
        "name": "ammoniumiodid",
        "plus": "NH",
        "plusName": "ammonium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "4",
        "minus": "I",
        "minusName": "iodid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "NH<sub>4</sub>I"
    },

    {
        "name": "ammoniumsulfat",
        "plus": "NH",
        "plusName": "ammonium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "4",
        "minus": "SO",
        "minusName": "sulfat",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "4",
        "html": "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>"
    },

    {
        "name": "ammoniumcarbonat",
        "plus": "NH",
        "plusName": "ammonium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "4",
        "minus": "CO",
        "minusName": "carbonat",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "3",
        "html": "(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>"
    },

    // Commented out by THAN 24-09-2015
    // {
    //     "name": "ammoniumhydroxid",
    //     "plus": "NH",
    //     "plusName": "ammonium",
    //     "plusCharge": "+",
    //     "plusCount": "1",
    //     "plusIonsNo": "4",
    //     "minus": "OH",
    //     "minusName": "hydroxid",
    //     "minusCharge": "-",
    //     "minusCount": "1",
    //     "minusIonsNo": "",
    //     "html": "NH<sub>4</sub>OH"
    // },

    {
        "name": "ammoniumsulfid",
        "plus": "NH",
        "plusName": "ammonium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "4",
        "minus": "S",
        "minusName": "sulfid",
        "minusCharge": "2-",
        "minusCount": "1",
        // "minusIonsNo": "3",  Commented out by THAN 14-08-2015
        "minusIonsNo": "",      // Added by THAN 14-08-2015
        "html": "(NH<sub>4</sub>)<sub>2</sub>S"
    },

    {
        "name": "ammoniumfosfat",
        "plus": "NH",
        "plusName": "ammonium",
        "plusCharge": "+",
        "plusCount": "3",
        "plusIonsNo": "4",
        "minus": "PO",
        "minusName": "fosfat",
        "minusCharge": "3-",
        "minusCount": "1",
        "minusIonsNo": "4",
        "html": "(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub>"
    },

    {
        "name": "ammoniumoxid",
        "plus": "NH",
        "plusName": "ammonium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "4",
        "minus": "O",
        "minusName": "oxid",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "(NH<sub>4</sub>)<sub>2</sub>O"
    },

    {
        "name": "natriumnitrat",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "NO",
        "minusName": "nitrat",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "3",
        "html": "NaNO<sub>3</sub>"
    },

    {
        "name": "natriumchlorid",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Cl",
        "minusName": "chlorid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "NaCl"
    },

    {
        "name": "natriumbromid",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Br",
        "minusName": "bromid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "NaBr"
    },

    {
        "name": "natriumiodid",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "I",
        "minusName": "iodid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "NaI"
    },

    {
        "name": "natriumsulfat",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "SO",
        "minusName": "sulfat",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "4",
        "html": "Na<sub>2</sub>SO<sub>4</sub>"
    },

    {
        "name": "natriumcarbonat",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "CO",
        "minusName": "carbonat",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "3",
        "html": "Na<sub>2</sub>CO<sub>3</sub>"
    },

    {
        "name": "natriumhydroxid",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "OH",
        "minusName": "hydroxid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "NaOH"
    },

    {
        "name": "natriumsulfid",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "S",
        "minusName": "sulfid",
        // "minusCharge": "-2",  // Commented out by THAN 24-09-2015
        "minusCharge": "2-",     // Added by THAN 24-09-2015
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "Na<sub>2</sub>S"
    },

    {
        "name": "natriumfosfat",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "3",
        "plusIonsNo": "",
        "minus": "PO",
        "minusName": "fosfat",
        "minusCharge": "3-",
        "minusCount": "1",
        "minusIonsNo": "4",
        "html": "Na<sub>3</sub>PO<sub>4</sub>"
    },

    {
        "name": "natriumoxid",
        "plus": "Na",
        "plusName": "natrium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "O",
        "minusName": "oxid",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "Na<sub>2</sub>O"
    },

    {
        "name": "kaliumnitrat",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "NO",
        "minusName": "nitrat",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "3",
        "html": "KNO<sub>3</sub>"
    },

    {
        "name": "kaliumchlorid",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Cl",
        "minusName": "chlorid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "KCl"
    },

    {
        "name": "kaliumbromid",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Br",
        "minusName": "bromid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "KBr"
    },

    {
        "name": "kaliumiodid",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "I",
        "minusName": "iodid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "KI"
    },

    {
        "name": "kaliumsulfat",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "SO",
        "minusName": "sulfat",
        // "minusCharge": "-2",  // Commented out by THAN 24-09-2015
        "minusCharge": "2-",     // Added by THAN 24-09-2015
        "minusCount": "1",
        "minusIonsNo": "4",
        "html": "K<sub>2</sub>SO<sub>4</sub>"
    },

    {
        "name": "kaliumcarbonat",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "CO",
        "minusName": "carbonat",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "3",
        "html": "K<sub>2</sub>CO<sub>3</sub>"
    },

    {
        "name": "kaliumhydroxid",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "OH",
        "minusName": "hydroxid",
        "minusCharge": "-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "KOH"
    },

    {
        "name": "kaliumsulfid",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "S",
        "minusName": "sulfid",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "K<sub>2</sub>S"
    },

    {
        "name": "kaliumfosfat",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "3",
        "plusIonsNo": "",
        "minus": "PO",
        "minusName": "fosfat",
        "minusCharge": "3-",
        "minusCount": "1",
        "minusIonsNo": "4",
        "html": "K<sub>3</sub>PO<sub>4</sub>"
    },

    {
        "name": "kaliumoxid",
        "plus": "K",
        "plusName": "kalium",
        "plusCharge": "+",
        "plusCount": "2",
        "plusIonsNo": "",
        "minus": "O",
        "minusName": "oxid",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "K<sub>2</sub>O"
    },

    {
        "name": "magnesiumnitrat",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "NO",
        "minusName": "nitrat",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "3",
        "html": "Mg(NO<sub>3</sub>)<sub>2</sub>"
    },

    {
        "name": "magnesiumchlorid",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Cl",
        "minusName": "chlorid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "MgCl<sub>2</sub>"
    },

    {
        "name": "magnesiumbromid",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Br",
        "minusName": "bromid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "MgBr<sub>2</sub>"
    },

    {
        "name": "magnesiumiodid",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "I",
        "minusName": "iodid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "MgI<sub>2</sub>"
    },

    {
        "name": "magnesiumsulfat",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "SO",
        "minusName": "sulfat",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "4",
        "html": "MgSO<sub>4</sub>"
    },

    {
        "name": "magnesiumcarbonat",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "CO",
        "minusName": "carbonat",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "3",
        "html": "MgCO<sub>3</sub>"
    },

    {
        "name": "magnesiumhydroxid",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "OH",
        "minusName": "hydroxid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "Mg(OH)<sub>2</sub>"
    },

    {
        "name": "magnesiumsulfid",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "S",
        "minusName": "sulfid",
        // "minusCharge": "-2",  // Commented out by THAN 24-09-2015
        "minusCharge": "2-",     // Added by THAN 24-09-2015
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "MgS"
    },

    {
        "name": "magnesiumfosfat",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "3",
        "plusIonsNo": "",
        "minus": "PO",
        "minusName": "fosfat",
        "minusCharge": "3-",
        "minusCount": "2",
        "minusIonsNo": "4",
        "html": "Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>"
    },

    {
        "name": "magnesiumoxid",
        "plus": "Mg",
        "plusName": "magnesium",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "O",
        "minusName": "oxid",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "",
        "html": "MgO"
    },

    {
        "name": "zinknitrat",
        "plus": "Zn",
        "plusName": "zink",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "NO",
        "minusName": "nitrat",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "3",
        "html": "Zn(NO<sub>3</sub>)<sub>2</sub>"
    },

    {
        "name": "zinkchlorid",
        "plus": "Zn",
        "plusName": "zink",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Cl",
        "minusName": "chlorid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "ZnCl<sub>2</sub>"
    },

    {
        "name": "zinkbromid",
        "plus": "Zn",
        "plusName": "zink",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "Br",
        "minusName": "bromid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "ZnBr<sub>2</sub>"
    },

    {
        "name": "zinkiodid",
        "plus": "Zn",
        "plusName": "zink",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "I",
        "minusName": "iodid",
        "minusCharge": "-",
        "minusCount": "2",
        "minusIonsNo": "",
        "html": "ZnI<sub>2</sub>"
    },

    {
        "name": "zinksulfat",
        "plus": "Zn",
        "plusName": "zink",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "SO",
        "minusName": "sulfat",
        "minusCharge": "2-",
        "minusCount": "1",
        "minusIonsNo": "4",
        "html": "ZnSO<sub>4</sub>"
    },

    {
        "name": "zinkcarbonat",
        "plus": "Zn",
        "plusName": "zink",
        "plusCharge": "2+",
        "plusCount": "1",
        "plusIonsNo": "",
        "minus": "CO",
        "minusName": "carbonat",
        "minusCharge": "2-",
        "minusCount": "1",
        // "minusIonsNo": "",      // Commented out byt THAN 24-09-2015
        "minusIonsNo": "3",        // Added by THAN 24-09-2015
        "html": "ZnCO<sub>3</sub>"
    }
    //53
];





//########################################################################
//                                  Variabler
//########################################################################

var audioElement;
var JsonObj;
// var thisAnswer = Math.floor(Math.random() * 53);  // Commented out by THAN 24-09-2015
var thisAnswer = Math.floor(Math.random() * 52);     // Added by THAN 24-09-2015
var answersArray;
var minusCount = 0;
var plusCount = 0;
var finalMinusCount = CorrectAnswers[thisAnswer].minusCount;
var finalPlusCount = CorrectAnswers[thisAnswer].plusCount;
var step = $('.opgaveFormulering').html().slice(5, 6);

var neededPlus = CorrectAnswers[thisAnswer].plus;
var neededPlusNumber = CorrectAnswers[thisAnswer].plusCharge;
neededPlusNumber = neededPlusNumber.replace('+', '');
neededPlus = neededPlus + neededPlusNumber;
console.log('neededPlus: ' + neededPlus);

var neededMinus = CorrectAnswers[thisAnswer].minus;
var neededMinusNumber = CorrectAnswers[thisAnswer].minusCharge;
neededMinusNumber = neededMinusNumber.replace('-', '');
neededMinus = neededMinus + neededMinusNumber;
console.log('neededMinus: ' + neededMinus);

//runde variabler
var roundCounter = 0;
var maxRounds = 10;
var correct = 0;

var SimpleError = 0; // Counts the total number of errors related to dragging draggables. If you drag a draggable not having the class "correctMinus" or "correctPlus", then the counter increases by one.

//########################################################################
//                              Funktioner
//########################################################################

function AjaxCallback(JSONdata) {
    //console.log("JsonObj - AjaxCallback: " + JSON.stringify(JSONdata));
}

function loadData(url) {
        $.ajax({
            url: url,
            // contentType: "application/json; charset=utf-8",  // Blot en test af tegnsaettet....
            dataType: 'json', // <------ VIGTIGT: Saadan boer en angivelse til en JSON-fil vaere! 
            // dataType: 'text', // <------ VIGTIGT: Pga. ???, saa bliver vi noedt til at angive JSON som text. 
            async: false, // <------ VIGTIGT: Sikring af at JSON hentes i den rigtige raekkefoelge (ikke asynkront). 
            success: function(data, textStatus, jqXHR) {
                JsonObj = JSON.parse(JSON.stringify(data));
                AjaxCallback(JsonObj);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error!!!\njqXHR:" + jqXHR + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown);
            }
        });
    }
    // var 

//Bestem om ionens skrift skal være i sort eller hvid
function getPlusFarve(ion, farve) {
    var Arr = JsonObj.ions.plus;
    for (var i in Arr) {
        if (Arr[i].ion == ion) {
            return Arr[i].farve;
        }
    }
}

function getMinusFarve(ion, farve) {
    var Arr = JsonObj.ions.minus;
    for (var i in Arr) {
        if (Arr[i].ion == ion) {
            return Arr[i].farve;
        }
    }
}

//Hent iontallet (det sænkede tal)
function getMinusCount(ion, farve) {
    var Arr = JsonObj.ions.minus;
    for (var i in Arr) {
        if (Arr[i].ion == ion) {
            return Arr[i].ionNumber;
        }
    }
}

function getPlusCount(ion, farve) {
        var Arr = JsonObj.ions.plus;
        for (var i in Arr) {
            if (Arr[i].ion == ion) {
                return Arr[i].ionNumber;
            }
        }
    }
    //opgavetekst genereres
function opgaveTekst1(CorrectAnswers) {
    var HTML = '';
    HTML += ' Byg ionforbindelsen der består af <span class="QuestionTask">' + CorrectAnswers[thisAnswer].plus + '<sub>' + CorrectAnswers[thisAnswer].plusIonsNo + '</sub><sup>' + CorrectAnswers[thisAnswer].plusCharge +
        '</sup></span> og <span class="QuestionTask">' + CorrectAnswers[thisAnswer].minus + '<sub>' + CorrectAnswers[thisAnswer].minusIonsNo + '</sub><sup>' + CorrectAnswers[thisAnswer].minusCharge + '</sup></span> ved at trække de rigtige byggeklodser ind i feltet.';
    $('#opgaveFormulering1').empty();
    $('#opgaveFormulering1').append(HTML);
}

function opgaveTekst2(CorrectAnswers) {
    var HTML = '';
    HTML += ' Byg ionforbindelsen der består af <span class="QuestionTask">' + CorrectAnswers[thisAnswer].plusName + '</span> og <span class="QuestionTask">' + CorrectAnswers[thisAnswer].minusName + '</span> ved at trække de rigtige byggeklodser ind i feltet.';
    $('#opgaveFormulering2').empty();
    $('#opgaveFormulering2').append(HTML);
}

function opgaveTekst3(CorrectAnswers) {
        var HTML = '';
        HTML += ' Byg ionforbindelsen <span class="QuestionTask">' + CorrectAnswers[thisAnswer].name + '</span> ved at trække de rigtige byggeklodser ind i feltet.';
        $('#opgaveFormulering3').empty();
        $('#opgaveFormulering3').append(HTML);
    }
    //feedback felt med antal rigtige genereres og opdateres
function feedbackTekst(roundCounter, correct) {
    $('.feedback .innerFeedbackWrapper').remove();
    var HTML = '';
    HTML += '<div class="innerFeedbackWrapper">Korrekte svar: <span class="QuestionTask">' + correct + '/' + maxRounds + '</span>' + ' Fejl: <span class="QuestionTask"><span class="SError">' + SimpleError + '</span></span></div>';
    
    $('.feedback').prepend(HTML);
    $('.SError:gt(0)').remove(); // The previous prepend(HTML) adds an extra error-counter - this removes the last added error-counter.
}

function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    // ion elementer genereres
function CreateIons(JsonObj) {
    shuffleArray(JsonObj.ions.plus);
    shuffleArray(JsonObj.ions.minus);
    var plusPresent = false;
    var minusPresent = false;
    var numberOfIons = 1;
    for (var i = 0; i <= numberOfIons + 2; i++) {
        //hvis ikke den positive ion man skal bruge for at klare opgaven er i objektet, så fjern et objekt og tilføj den rigtige ion
        var actualPlus = JsonObj.ions.plus[i].ion;
        var actualPlusCharge = JsonObj.ions.plus[i].charge;
        actualPlusCharge = actualPlusCharge.replace('+', '');
        actualPlus = actualPlus + actualPlusCharge;
        if (neededPlus == actualPlus) {
            plusPresent = true;
        }

    }
    if (plusPresent == false) {
        //hvilket random element skal erstattes:
        var replacedObj = Math.floor(Math.random() * numberOfIons);
        var plus = CorrectAnswers[thisAnswer].plus;
        //bestem om skriften skal være hvid eller sort
        var color = getPlusFarve(plus, 'farve');
        JsonObj.ions.plus[replacedObj].farve = color;
        //hent antal ioner
        var ionCount = getPlusCount(plus, ionNumber);
        JsonObj.ions.plus[replacedObj].ionNumber = ionCount;
        //hent og erstat ion navnet
        JsonObj.ions.plus[replacedObj].ion = plus;
        //hent og erstat ionens ladning
        var charge = CorrectAnswers[thisAnswer].plusCharge;
        JsonObj.ions.plus[replacedObj].charge = charge;
        var name = CorrectAnswers[thisAnswer].plus;
        var color = getPlusFarve(name, 'farve');
        //hent og erstat img src
        charge = charge.replace('+', '');
        var img = 'img/plus_' + plus + charge + '.png';
        JsonObj.ions.plus[replacedObj].imgSrc = img;
    }
    //generer de positive ioner
    for (var i = 0; i <= numberOfIons + 2; i++) {
        var plusIon = JsonObj.ions.plus[i].ion;
        var charge = JsonObj.ions.plus[i].charge;
        var imgSrc = JsonObj.ions.plus[i].imgSrc;
        var chargeValue = charge.slice(-1);
        var chargeClass = '';
        var ionNumber = JsonObj.ions.plus[i].ionNumber;
        var HTML = '';
        var ionClass = '';
        if (JsonObj.ions.plus[i].farve == 'sort') {
            ionClass = 'ion black-ion';
        } else {
            ionClass = 'ion';
        }
        chargeClass = 'plus';
        HTML += '<div class="' + ionClass + ' draggable ' + chargeClass + '">';
        HTML += '<h3>' + plusIon + '<sub>' + ionNumber + '</sub>' + '<sup>' + charge + '</sup></h3>';
        HTML += '<img src="' + imgSrc + '"></div>';
        $('.ionsWrapper').append(HTML);
    }
    for (var i = 0; i <= numberOfIons + 2; i++) {
        //hvis ikke den negative ion man skal bruge for at klare opgaven er i objektet, så fjernes et objekt og den rigtige ion tilføjes
        var actualMinus = JsonObj.ions.minus[i].ion;
        var actualMinusCharge = JsonObj.ions.minus[i].charge;
        actualMinusCharge = actualMinusCharge.replace('-', '');
        actualMinus = actualMinus + actualMinusCharge;
        if (neededMinus == actualMinus) {
            minusPresent = true;
        }
    }
    if (minusPresent == false) {
        //hvilket random element skal erstattes:
        var replacedObj = Math.floor(Math.random() * numberOfIons);
        var minus = CorrectAnswers[thisAnswer].minus;
        //bestem om skriften skal være hvid eller sort
        var color = getMinusFarve(minus, 'farve');
        JsonObj.ions.minus[replacedObj].farve = color;
        //hent antal ioner
        var ionCount = getMinusCount(minus, ionNumber);
        JsonObj.ions.minus[replacedObj].ionNumber = ionCount;
        //hent og erstat ion navnet
        JsonObj.ions.minus[replacedObj].ion = minus;
        //hent og erstat ionens ladning
        var charge = CorrectAnswers[thisAnswer].minusCharge;
        JsonObj.ions.minus[replacedObj].charge = charge;
        //hent og erstat img src
        charge = charge.replace('-', '');
        var img = 'img/minus_' + minus + charge + '.png';
        JsonObj.ions.minus[replacedObj].imgSrc = img;
    }
    //genererer de negative ioner
    for (var i = 0; i <= numberOfIons + 2; i++) {
        var minusIon = JsonObj.ions.minus[i].ion;
        var charge = JsonObj.ions.minus[i].charge;
        var imgSrc = imgSrc = JsonObj.ions.minus[i].imgSrc;
        var chargeValue = charge.slice(-1);
        var chargeClass = '';
        var ionNumber = JsonObj.ions.minus[i].ionNumber;
        var HTML = '';
        var ionClass = '';
        if (JsonObj.ions.minus[i].farve == 'sort') {
            ionClass = 'ion black-ion';
        } else {
            ionClass = 'ion';
        }
        chargeClass = 'minus';
        HTML += '<div class="' + ionClass + ' draggable ' + chargeClass + '">';
        HTML += '<h3>' + minusIon + '<sub>' + ionNumber + '</sub>' + '<sup>' + charge + '</sup></h3>';
        HTML += '<img src="' + imgSrc + '"></div>';
        $('.ionsWrapper').append(HTML);
    }
}

function makeDraggable() {
    $('.draggable').draggable({
        revert: 'invalid', // Makes the draggable revert back if does not have class correctPlus or correctMinus and is dropped in the corresponding div 
        helper: 'clone',
        start: function() {
            var element = $(this);
            var IonHtml = $(this).html();
            //gør html elementet sammenlignignsvenligt.
            var CurrentIon = IonHtml.slice(4, 35);
            //console.log('Pre-Slice-CurrentIon: ' + CurrentIon);
            CurrentIon = CurrentIon.replace('<span class="CapitalI">', '');
            CurrentIon = CurrentIon.replace('h3', '');
            CurrentIon = CurrentIon.replace('<sub>3</sub>', '');
            CurrentIon = CurrentIon.replace('<sub>4</sub>', '');
            CurrentIon = CurrentIon.replace('</sub>', '');
            CurrentIon = CurrentIon.replace(/sub/g, '');
            CurrentIon = CurrentIon.replace(/sup/g, '');
            CurrentIon = CurrentIon.replace('/', '');
            CurrentIon = CurrentIon.replace(/<i/g, '');
            CurrentIon = CurrentIon.replace(/<s/g, '');
            CurrentIon = CurrentIon.replace(/</g, '');
            CurrentIon = CurrentIon.replace(/>/g, '');
            CurrentIon = CurrentIon.replace('+', '');
            CurrentIon = CurrentIon.replace('-', '');
            CurrentIon = CurrentIon.replace('/', '');
            CurrentIon = CurrentIon.replace('pan', '');

            console.log('CurrentIon: ' + CurrentIon);
            CheckMinus(CurrentIon, this);
            CheckPlus(CurrentIon, this);
        },
        stop: function(event, ui) {
            // If the dragged draggable does not have "correctPlus" or "correctMinus" as a class, then increase SimpleError by one:
            if ( !$(this).hasClass( "correctPlus" ) && !$(this).hasClass( "correctMinus" ) ){
                ++SimpleError;
                $(".SError").text(SimpleError);
            }
            $(this).removeClass('correctMinus');
            $(this).removeClass('correctPlus');
        }

    });
}

function makeDroppable() {
    $('.DropMinus').droppable({
        accept: '.correctMinus',
        tolerance: 'touch',
        drop: function(event, ui) {
            $(ui.draggable.clone()).detach().css({
                top: -20,
                left: 0,
                margin: 0
            }).appendTo(this).addClass('clone'); //append clone til DropMinus
            original = false;
            minusCount++;
            $('.clone').draggable({
                revert: true,
            })
            CheckAnswer(minusCount, plusCount);
        },
        over: function(event, ui) {
            if (original) {
                $(ui.draggable).fadeTo('fast', 1.0);
                $('.clone').draggable({
                    revert: true,
                    start: function() {
                        $(this).css({
                            'z-index': '10'
                        });
                    },
                    stop: function() {
                        $(this).css({
                            'z-index': 'auto'
                        });
                        $('.draggable').draggable().data()['ui-draggable'].cancelHelperRemoval = true; //behold clone
                    }
                });
            }
        }
    });
    $('.DropPlus').droppable({
        accept: '.correctPlus',
        tolerance: 'touch',
        drop: function(event, ui) {
            $(ui.draggable.clone()).detach().css({
                top: 0,
                left: 0,
                margin: 0
            }).appendTo(this).addClass('clone'); //append clone til DropPlus
            original = false;
            plusCount++;
            $('.clone').draggable({
                revert: true,
            })
            CheckAnswer(minusCount, plusCount);
        },
        over: function(event, ui) {
            $(ui.draggable).fadeTo('fast', 1.0);
            $('.clone').draggable({
                revert: true,
                start: function() {
                    $(this).css({
                        'z-index': '10'
                    });
                },
                stop: function() {
                    $(this).css({
                        'z-index': 'auto'
                    });
                    $('.draggable').draggable().data()['ui-draggable'].cancelHelperRemoval = true; //behold clone
                }
            });
        }
    });
}

//check om den negative ion brugeren dragger er den rigtige negative ion
function CheckMinus(CurrentIon, element) {
    if (neededMinus == CurrentIon) {
        if (minusCount < finalMinusCount) {
            $(element).addClass('correctMinus');
        }
    }
}
//check om den positive ion brugeren dragger er den rigtige positive ion
function CheckPlus(CurrentIon, element) {
    if (neededPlus == CurrentIon) {
        if (plusCount < finalPlusCount) {
            $(element).addClass('correctPlus');
        }
    }
}
//læg overlay på dropzonen hvis der er nok af de rigtige ion elementer i dropzonen.
function CheckAnswer(minusCount, plusCount) {
    if (minusCount == finalMinusCount && plusCount == finalPlusCount) {
        correct++;
        feedbackOverlay(thisAnswer);
        feedbackTekst(roundCounter, correct);
        $('.opgaveFormulering').html("Rigtigt <br/> &nbsp;");  // This gives a posetive feedback to th student. A line-break and a blank-space character is inserted to avoid a "page jump" in between questions.   
    }
}
//generer feedbackoverlay
function feedbackOverlay(thisAnswer) {
    var HTML = "<div id='overlay'>";
    if (step == '1') { //hvis step 1 så:
        HTML += "<h2>" + CorrectAnswers[thisAnswer].html + "</h2>";
    } else if (step == '2') { //hvis step 2 så:
        HTML += "<h2>" + CorrectAnswers[thisAnswer].name + "</h2>";
    } else if (step == '3') { //hvis step 3 så:
        HTML += '<h2>' + CorrectAnswers[thisAnswer].html + '</h2>';
    }
    HTML += '<div class ="btn btn-default sound-btn"><span class="glyphicon glyphicon-volume-up playAnswer"></span></div>';
    HTML += '<audio src="audio/' + CorrectAnswers[thisAnswer].plusName + '.mp3" id="audioAnswer"></audio>';
    HTML += "</div>";
    $('.DropZone').prepend(HTML);
    $('#overlay').fadeIn('slow');
    setTimeout(function() {
        $('#overlay h2, #overlay .btn').fadeIn('slow')
    }, 300);
    if (correct == 10) {
        $('.btn-next').css('visibility', 'hidden');
        correct = 10;
        setTimeout(function() {

            // Commented out by THAN, 14-08-2015:
            // if (step == 1) {  
            //     UserMsgBox('body', 'Godt klaret, du har styr på ionforbindelserne. </br><a href="step1.html">Prøv igen</a>');
            // } else if (step == 2) {
            //     UserMsgBox('body', 'Godt klaret, du har styr på ionforbindelserne. </br><a href="step2.html">Prøv igen</a>');
            // } else if (step == 3) {
            //     UserMsgBox('body', 'Godt klaret, du har styr på ionforbindelserne. </br><a href="step3.html">Prøv igen</a>');
            // }

            // New "assignment complete" feedback to the student that resembles the one by ATO. THAN 14-08-2015:
            UserMsgBox("body", "<span class='feedbackbox_txtstyle_overskrift'>Flot</span><br/>Du har lavet " + maxRounds + " opgaver korrekt. <br/> Du havde " + SimpleError + " fejl undervejs.<br/>Klik og tag 10 opgaver mere.")
            $("#UserMsgBox").click(function() {
                location.reload();
            });

        }, 2000);
    } else {
        $('.btn-next').css('visibility', 'visible');
    }
    //læs højt funktionaliteter
     audioElement = $("#audioAnswer")[0];
    $('.glyphicon-volume-up').click(function() {
        $('.sound-btn').addClass('activeSound');
        console.log('playing audio');
        audioElement.play();
        audioElement.addEventListener('ended', playnextAudio);
    });
    $('.ion').css('pointer-events', 'none');
    if (step!= 2){
        console.log("this it not step 2"),
        MarkIAndLAsSpecial(["#overlay h2"], ["I", "l"], ["CapitalI"],"#");
    }
}

function playnextAudio() {
    console.log("playnext!");
    $("#audioAnswer").attr("src", "audio/" + CorrectAnswers[thisAnswer].minusName + ".mp3");
    audioElement.play();
    audioElement.removeEventListener('ended', playnextAudio);
    audioElement.addEventListener('ended', playfirstAudio);
    console.log('removing activeSound class');
    $('.sound-btn').removeClass('activeSound');
}

function playfirstAudio() {
    console.log("playfirst!");
    $("#audioAnswer").attr("src", "audio/" + CorrectAnswers[thisAnswer].plusName + ".mp3");
    
}
//nulstil ioner, opgavekrav, opgavetekst og tøm dropzonen
function resetAssignment() {
    loadData("ionforbindelser.json");
    CorrectAnswers.splice(thisAnswer, 1);
    arrayLength = CorrectAnswers.length;
    thisAnswer = Math.floor(Math.random() * arrayLength);
    shuffleArray(JsonObj.ions.plus);
    shuffleArray(JsonObj.ions.minus);
    // feedbackTekst(roundCounter, correct);

    finalMinusCount = CorrectAnswers[thisAnswer].minusCount;
    finalPlusCount = CorrectAnswers[thisAnswer].plusCount;

    neededPlus = CorrectAnswers[thisAnswer].plus;
    neededPlusNumber = CorrectAnswers[thisAnswer].plusCharge;
    neededPlusNumber = neededPlusNumber.replace('+', '');
    neededPlus = neededPlus + neededPlusNumber;

    neededMinus = CorrectAnswers[thisAnswer].minus;
    neededMinusNumber = CorrectAnswers[thisAnswer].minusCharge;
    neededMinusNumber = neededMinusNumber.replace('-', '');
    neededMinus = neededMinus + neededMinusNumber;

    $('.ion').css('pointer-events', 'auto');
    $('.ionsWrapper').empty();
    $('#overlay').fadeTo('fast', 0);
    $('#overlay').remove();
    $('.ion').remove();
    $('.btn-next').css('visibility', 'hidden');
    plusCount = 0;
    minusCount = 0;
    console.log('minusCount: ' + minusCount);
    console.log('plusCount: ' + plusCount);
    if (step == 1) {
        opgaveTekst1(CorrectAnswers);
    } else if (step == 2) {
        opgaveTekst2(CorrectAnswers);
    } else if (step == 3) {
        opgaveTekst3(CorrectAnswers);
    }
    CreateIons(JsonObj);
    makeDraggable();
    makeDroppable();
    MarkIAndLAsSpecial([".ion h3", "#opgaveFormulering1 .QuestionTask"], ["I", "l"], ["CapitalI"],"#");
}
//egen funktion til erstatning af I og l. Denne var nødvendig for at beholde markup til sænkning og hævning af koefficient tal
function MarkIAndLAsSpecial(TargetSelectorArray, LetterArray, LetterClassArray, Delimiter) {
    for (var TargetSelector in TargetSelectorArray) {
        $(TargetSelectorArray[TargetSelector]).each(function(index, element) {
            for (var l in LetterArray) { // First surround all letters (or clusters of letters) in LetterArray with delimiters, eg. If letter = L and delimiter = #, then #L#.
                var ElementText = $(element).html();
                if (ElementText.indexOf(LetterArray[l]) !== -1) {
                    $(element).html(ElementText.replace(LetterArray[l], Delimiter + LetterArray[l] + Delimiter));
                }
            }

            for (var l in LetterArray) { // second, replace all delimited letters, eg. #L#, with <span class="MyClass">L</span>
                var LetterClass = (LetterClassArray.length == LetterArray.length) ? LetterClassArray[l] : LetterClassArray[0];
                var ElementText = $(element).html();
                if (ElementText.indexOf(LetterArray[l]) !== -1) {
                    $(element).html(ElementText.replace(Delimiter + LetterArray[l] + Delimiter, '<span class="' + LetterClass + '">' + LetterArray[l] + '</span>'));
                }
            }
        });
    }
}
    //########################################################################
    //                        Run code....
    //########################################################################


$(document).ready(function() {
    feedbackTekst(roundCounter, correct);
    CreateIons(JsonObj);
    makeDraggable();
    makeDroppable();
    $('.draggable').mousedown(function() {
        original = true;
    })
    MarkIAndLAsSpecial([".ion h3", "#opgaveFormulering1 .QuestionTask"], ["I", "l"], ["CapitalI"],"#");


    $('.btn-next').click(function() {
        resetAssignment();
    });

});
