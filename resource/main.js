// Constante comision por gestion

const comision = 1.0815;

// constantes de lina de inclusion financiara Santander Rio
const LISR = {
    sinc12: 122.55,
    sinc18: 95.24,
    sinc24: 82.13,
    sinc36: 70.03,
    sinc48: 64.86,
    sinc60: 62.33
}

// Objeto Constante linea convencional Santander Rio

const LCSR = {
    sconv12: 132.60,	
    sconv18: 105.71,	
    sconv24: 93.07,
    sconv36: 82.71,
    sconv48: 81.98,
    sconv60: 80.17
};

// Objeto Constante inclusion financiera HCBC

const IFHCBC = {
    hinc12: 105.17,
    hinc18: 77.49,
    hinc24: 63.94,
    hinc36: 50.95,
    hinc48: 44.98,
    hinc60: 41.78
};

// Arrays donde se almacen los valores de cuotas

const ValorCuotaIFHCBC = [];
const ValorCuotaLCSR = [];
const ValorCuotaLISR = [];

// Funciones para calcular el valor de las cuotas de los creditos + comision por gestion

function CalcCreditIFHCBC (a){
    let resultado;
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc12).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc18).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc24).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc36).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc48).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc60).toFixed(2)));
    return ValorCuotaIFHCBC;
}
function CalcCreditLCSR (a){
    let resultado;
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv12).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv18).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv24).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv36).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv48).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv60).toFixed(2)));
    return ValorCuotaLCSR;
}
function CalcCreditLISR (a){
    let resultado;
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc12).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc18).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc24).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc36).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc48).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc60).toFixed(2)));
    return ValorCuotaLISR;
}

// Arrow Function para limpiar los Arrays

const Clear = (Ar) => {
    for (let i = Ar.length; i > 0; i--) {
        Ar.pop();
      }
}

// Filtrar los arrays para obtener el valor de las cuotas coincidente con el plazo deseado

function filterAr (a) {
    let Cuota = [];
    ValorCuotaIFHCBC;
    ValorCuotaLCSR;
    ValorCuotaLISR;
    switch (Vcuota){
        case 12:
            Cuota.push(ValorCuotaIFHCBC[0]);
            Cuota.push(ValorCuotaLCSR[0]);
            Cuota.push(ValorCuotaLISR[0]);
            break;
        case 18:
            Cuota.push(ValorCuotaIFHCBC[1]);
            Cuota.push(ValorCuotaLCSR[1]);
            Cuota.push(ValorCuotaLISR[1]);
            break;
        case 24:
            Cuota.push(ValorCuotaIFHCBC[2]);
            Cuota.push(ValorCuotaLCSR[2]);
            Cuota.push(ValorCuotaLISR[2]);
            break;
        case 36:
            Cuota.push(ValorCuotaIFHCBC[3]);
            Cuota.push(ValorCuotaLCSR[3]);
            Cuota.push(ValorCuotaLISR[3]);
            break;
        case 48:
            Cuota.push(ValorCuotaIFHCBC[4]);
            Cuota.push(ValorCuotaLCSR[4]);
            Cuota.push(ValorCuotaLISR[4]);
            break;
        case 60:
            Cuota.push(ValorCuotaIFHCBC[5]);
            Cuota.push(ValorCuotaLCSR[5]);
            Cuota.push(ValorCuotaLISR[5]);
            break;
    }
    return Cuota;
}

// Capturar eventos formulario simulacion

    //Capturar mensaje de error html
let mensajeErrorName = document.getElementById('ErrorName');
let mensajeErrorLastName = document.getElementById('ErrorLastName');
let mensajeErrorDni = document.getElementById('ErrorDni');
let mensajeErrorSex = document.getElementById('ErrorSex');
let mensajeErrorMCredit = document.getElementById('ErrorMCredit');
let mensajeErrorCuota = document.getElementById('ErrorCuota');
let btncontinuar = document.getElementById('btncontinuar');

    //Capturar elementos del formulario y validacion

let nombre = document.getElementById('form-nombre');
nombre.onblur = () =>{
    let x = nombre.value;
    if(x == ''){
        mensajeErrorName.classList.remove('noneview');
        mensajeErrorName.classList.add('view');
        nombre.classList.add('ErrorInput');
    }else{
        mensajeErrorName.classList.remove('view');
        mensajeErrorName.classList.add('noneview');
        nombre.classList.remove('ErrorInput');
    }
} 
let apellido = document.getElementById('form-apellido');
apellido.onblur = () =>{
    let x = apellido.value;
    if(x == ''){
        mensajeErrorLastName.classList.remove('noneview');
        mensajeErrorLastName.classList.add('view');
        apellido.classList.add('ErrorInput');
    }else{
        mensajeErrorLastName.classList.remove('view');
        mensajeErrorLastName.classList.add('noneview');
        apellido.classList.remove('ErrorInput');
    }
}

let dni = document.getElementById('form-dni');
dni.onblur = () =>{
    let x = parseInt(dni.value);
    if(isNaN(x)){
        mensajeErrorDni.classList.remove('noneview');
        mensajeErrorDni.classList.add('view');
        dni.classList.add('ErrorInput');
    }else{
        mensajeErrorDni.classList.remove('view');
        mensajeErrorDni.classList.add('noneview');
        dni.classList.remove('ErrorInput');
    }
}

let sexo = document.getElementById('select-sexo');
sexo.onblur = () =>{
    let x = sexo.value;
    if(x == 0){
        mensajeErrorSex.classList.remove('noneview');
        mensajeErrorSex.classList.add('view');
        sexo.classList.add('ErrorInput');
    }else{
        mensajeErrorSex.classList.remove('view');
        mensajeErrorSex.classList.add('noneview');
        sexo.classList.remove('ErrorInput');
    }
}
let mcredit = document.getElementById('form-mcredit');
mcredit.onblur = () =>{
    let x = mcredit.value;
    if(mcredit > 100000 && mcredit < 6000000){
        mensajeErrorMCredit.classList.remove('noneview');
        mensajeErrorMCredit.classList.add('view');
        mcredit.classList.add('ErrorInput');

    }else{
        mensajeErrorMCredit.classList.remove('view');
        mensajeErrorMCredit.classList.add('noneview');
        mcredit.classList.remove('ErrorInput');

    }
}
let selectcuota = document.getElementById('select-cuota');
selectcuota.onblur = () =>{
    let x = selectcuota.value;
    if(x == ''){
        mensajeErrorCuota.classList.remove('noneview');
        mensajeErrorCuota.classList.add('view');
        selectcuota.classList.add('ErrorInput');
    }else{
        mensajeErrorCuota.classList.remove('view');
        mensajeErrorCuota.classList.add('noneview');
        selectcuota.classList.remove('ErrorInput');
    }
} 

 // funcion para valirdar el formulario antes del submit

 document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
 })

 function validarFormulario(evento) {
    evento.preventDefault();
    nombre.value;
    if(nombre.length == 0) {
        mensajeErrorName.classList.remove('noneview');
        mensajeErrorName.classList.add('view');
        nombre.classList.add('ErrorInput');
      return;
    }
    apellido.value;
    if (apellido.length > 0 && apellido.length < 20) {
        mensajeErrorLastName.classList.remove('noneview');
        mensajeErrorLastName.classList.add('view');
        apellido.classList.add('ErrorInput');
      return;
    }
    dni.value;
    if (dni.parseInt > 1000000 && dni.parseInt < 99999999){
        mensajeErrorDni.classList.remove('noneview');
        mensajeErrorDni.classList.add('view');
        dni.classList.add('ErrorInput');
        return;
    }

    mcredit.value;
    if(mcredit > 100000 && mcredit < 6000000){
        mensajeErrorMCredit.classList.remove('noneview');
        mensajeErrorMCredit.classList.add('view');
        mcredit.classList.add('ErrorInput');
        return;
    }
    selectcuota.value;
    if(selectcuota > 100000){
        mensajeErrorCuota.classList.remove('noneview');
        mensajeErrorCuota.classList.add('view');
        selectcuota.classList.add('ErrorInput');
        return;
    }
    this.submit();
  }

// Evento para mostrar/ocultar filtro

let valorfilter = false;
let clickFiltro = document.getElementById("textFilter");
let MostrarFiltro = document.getElementById("Filtro");

clickFiltro.onclick = () =>{
    if (valorfilter == false){
        MostrarFiltro.classList.remove('filtronone');
        MostrarFiltro.classList.add('filterview');
        valorfilter = true;
    }else {
        MostrarFiltro.classList.remove('filterview');
        MostrarFiltro.classList.add('filtronone');
        valorfilter = false;
    }
}


// Eventos en el filtro

let filtrovalorrec = document.getElementById('filtrovalorrec');
let filtrovalormenor = document.getElementById('filtrovalormenor');
let filtrovalormayor = document.getElementById('filtrovalormayor');
let filtrobankS = document.getElementById('filtrobankS');
let filtrobankHSBC = document.getElementById('filtrobankHSBC');
let elementfilter1 = document.getElementById('elementfilter1');
let elementfilter2 = document.getElementById('elementfilter2');
let elementfilter3 = document.getElementById('elementfilter3');
let elementfilter4 = document.getElementById('elementfilter4');
let elementfilter5 = document.getElementById('elementfilter5');

// Eliminar elemento del filtro y mostrar el elemento que se esta filtrando

filtrovalorrec.onclick = () =>{
    filtrovalorrec.classList.add('noneview');
    elementfilter1.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}

filtrovalormenor.onclick = () =>{
    filtrovalormenor.classList.add('noneview');
    filtrovalormayor.classList.add('noneview');
    elementfilter2.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}
filtrovalormayor.onclick = () =>{
    filtrovalormayor.classList.add('noneview');
    filtrovalormenor.classList.add('noneview');
    elementfilter3.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}
filtrobankS.onclick = () =>{
    filtrobankS.classList.add('noneview');
    elementfilter4.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}
filtrobankHSBC.onclick = () =>{
    filtrobankHSBC.classList.add('noneview');
    elementfilter5.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}

// eliminar el valor filtrado y volverlo a mostrar en el filtro

elementfilter1.onclick = () =>{
    elementfilter1.classList.add('noneview')
    filtrovalorrec.classList.remove('noneview')
}
elementfilter2.onclick = () =>{
    elementfilter2.classList.add('noneview')
    filtrovalormenor.classList.remove('noneview')
    filtrovalormayor.classList.remove('noneview');
}
elementfilter3.onclick = () =>{
    elementfilter3.classList.add('noneview')
    filtrovalormayor.classList.remove('noneview')
    filtrovalormenor.classList.remove('noneview');
}
elementfilter4.onclick = () =>{
    elementfilter4.classList.add('noneview')
    filtrobankS.classList.remove('noneview')
}

elementfilter5.onclick = () =>{
    elementfilter5.classList.add('noneview')
    filtrobankHSBC.classList.remove('noneview')
}

/* constantes para los select del formulario de simulacion */

const marcas = ["CHEVROLET","CITROEN","FIAT","DODGE","FORD","PEUGEOT","RENAULT","VOLKSWAGEN"];
const modelosCH = ["CRUZE","EQUINOX","S-10 PICK-UP","TRAILBLAZER"];
const modelosCI = ["C4 CACTUS","C4 LOUNGE","C5 AIRCROSS","C-ELYSÉE"];
const modelosFI = ["ARGO","CRONOS","MOBI","TORO"];
const modelosDG = ["JOURNEY"];
const modelosFO = ["BRONCO SPORT","ECOSPORT KD","FIESTA KD","FOCUS KD","KA","RANGER PICK-UP"];
const modelosPE = ["208","308","408","2008"];
const modelosRE = ["ALASKAN PICK-UP","CAPTUR","DUSTER","DUSTER OROCH PICK-UP"];
const modelosVW = ["AMAROK PICK-UP","NIVUS","GOL TREND","GOLF","TAOS"];
const VCRUZE = ["4P 1.8 LT","4P 1.8 LTZ","4P 1.8 LTZ AT","4P 2.0 DSL LT AT","4P 2.0 DSL LTZ AT","4P 1.4 T LT MT","4P 1.4 T LTZ MT","4P 1.4 T LTZ AT","4P 1.4 T LTZ PLUS AT","4P 1.4 T MIDNIGHT 6AT","4P 1.4 T PREMIER 6AT","5P 1.8 LT,5P 1.8 LTZ","5P 1.8 LTZ AT","5P 2.0 DSL LTZ AT","5P 1.4 T LT MT","5P 1.4 T LTZ MT","5P 1.4 T LTZ AT","5P 1.4 T LTZ PLUS AT","5P 1.4 T PREMIER AT","5P 1.4 T PREMIER 6AT"];
const VEQUINOX = ["5P 1.5 T 6AT LT 2WD","5P 1.5 T 6AT PREMIER AWD","5P 1.5 T 6AT RS 2WD"];
const VS10 = ["CS 2.8 CTDI LS 4X2 CV180","CS 2.8 CTDI LS 4X4 CV180","DC 2.8 CTDI LS 4X2 CV180","DC 2.8 CTDI LT 4X2 CV180","DC 2.8 CTDI LTZ 4X2 CV180","DC 2.8 CTDI LS 4X4 CV180","DC 2.8 CTDI LT 4X4 CV180","DC 2.8 CTDI LTZ 4X4 AT CV180","DC 2.8 TD HC 4X4 AT"];
const VTRAILBLAZER = ["5P 2.8 CTDI 4X4 LT AT","5P 2.8 CTDI 4X4 LTZ AT","5P 2.8 TD 4X4 PREMIER 7A 6AT"];
const VC4CACTUS = ["5P 1.2 T 6AT","5P 1.6 VTI 115 LIVE","5P 1.6 VTI 115 FEEL","5P 1.6 VTI 115 FEEL PACK","5P 1.6 VTI 115 FEEL PACK EAT6","5P 1.6 VTi 115 ORIGINS","5P 1.6 THP 165 SHINE EAT6","5P 1.6 THP 165 SHINE EAT6 BITONO","5P 1.6 VTI 115 C-SERIES","5P 1.6 VTI 115 C-SERIES EAT6","5P 1.6 VTI 115 RIP CURL","5P 1.6 VTI 115 RIP CURL  EAT6"];
const VC4LOUNG = ["4P 1.6 VTi 115 LIVE AM19","4P 1.6 THP 165 MT6 FEEL AM19","4P 1.6 THP 165 AT6 FEEL AM19","4P 1.6 THP 165 MT6 FEEL PACK AM19","4P 1.6 THP 165 AT6 SHINE AM19","4P 1.6 HDi 115 MT6 FEEL PACK AM19","4P 1.6 HDi 115 MT6 ORIGINS"];
const VC5AIRCROSS = ["5P 1.6 THP 165CV EAT6 FELL PACK"];
const VCELYSEE = ["4P 1.6 VTi 115 LIVE","4P 1.6 VTi 115 FELL","4P 1.6 VTi 115 6AT SHINE","4P 1.6 HDi 92 FEEL"];
const VARGO = ["5P 1.3 DRIVE GSE","5P 1.3 DRIVE GSE PACK CONECTIVIDAD","5P 1.8 PRECISION","5P 1.8 PRECISION PACK PREMIUM","5P 1.8 PRECISION PACK TECNHOLOGY","5P 1.8 PRECISION 6AT","5P 1.8 PRECISION PACK PREMIUM 6AT","5P 1.8 PRECISION PACK TECNHOLOGY 6AT","5P 1.8 HGT"];
const VCRONOS = ["4P 1.3 DRIVE GSE","4P 1.3 DRIVE GSE PACK CONECTIVIDAD","4P 1.8 PRECISION","4P 1.8 PRECISION PACK PREMIUM","4P 1.8 PRECISION PACK TECNHOLOGY","4P 1.8 PRECISION AT","4P 1.8 HGT PACK"];
const VMOBI = ["5P 1.0 EASY","5P 1.0 EASY TOP","5P 1.0 EASY TOP LIVE ON","5P 1.0 WAY","5P 1.0 WAY LIVE ON","5P 1.0 LIKE"];
const VTORO = ["DC 1.8 FREEDOM 4X2 6AT PACK SEG","DC 1.8 FREEDOM 4X2 6AT PACK SEG CHROME","DC 2.0 TD FREEDOM 4X2 6MT","DC 2.0 TD FREEDOM 4X4 6MT","DC 2.0 TD FREEDOM 4X4 6MT PACK XTREME","DC 2.0 TD FREEDOM 4X4 9AT","DC 2.0 TD FREEDOM 4X4 9AT PACK SEG","DC 2.0 TD FREEDOM 4X4 9AT NEW HOLLAN","DC 2.0 TD VOLCANO 4X4 9AT","DC 2.0 TD BLACKJACK 4X4 9AT","DC 2.0 TD VOLCANO 4X4 9AT PACK PREMIUM","DC 2.0 TD RANCH 4X4 9AT","DC 1.3 T VOLCANO 4X2 6AT","DC 2.0 16V TD MULTIJET ULTRA 4X4 9AT"]; 
const VJOURNEY = ["5P 2.7 SXT AT","5P 2.7 RT 3F AT","5P 2.7 RT 3F AT TC","5P 3.6 RT ATX AWD"];
const VBRONCOSPORT = ["5P 1.5 4WD 8AT BIG BEND","5P 2.0 4WD 8AT WILDTRAK"];
const VECOSPORTKD = ["5P 1.5 SE","5P 1.5 FREESTYLE","5P 1.5 TITANIUM","5P 1.5 TITANIUM AT","5P 2.0 FREESTYLE AT 4WD","5P 2.0 TITANIUM AT","5P 2.0 STORM 6AT AWD"];
const VFIESTAKD = ["5P 1.6 S PLUS","5P 1.6 SE","5P 1.6 SE AT","5P 1.6 SE PLUS","5P 1.6 SE PLUS AT","5P 1.6 TITANIUM","5P 1.6 TITANIUM AT"]; 
const VFOCUSKD = ["5P 1.6 S","5P 2.0 SE","5P 2.0 SE PLUS","5P 2.0 SE PLUS AT","5P 2.0 TITANIUM","5P 2.0 TITANIUM AT"];
const VKA = ["5P 1.5 12V S","5P 1.5 12V SE","5P 1.5 12V SE AT","5P 1.5 12V SEL","5P 1.5 12V SEL AT"];
const VRANGER = ["CS 2.5 NAFTA XL 4X2 5MT","CS 2.2 TDCi XL 4X2 6MT","CS 2.2 TDCi XL 4X4 6MT","DC 2.5 NAFTA XL 4X2 5MT","DC 2.5 NAFTA XLT 4X2 5MT","DC 2.2 TDCi XL 4X2 6MT","DC 2.2 TDCi XL 4X4 6MT","DC 2.2 TDCi XLT 4X2 6AT","DC 3.2 TDCi  XLS 4X2 6MT","DC 3.2 TDCi  XLS 4X2 6AT","DC 3.2 TDCi  XLS 4X4 6MT","DC 3.2 TDCi XLT 4X2 6MT","DC 3.2 TDCi XLT 4X2 6AT","DC 3.2 TDCi XLT 4X4 6MT","DC 3.2 TDCi XLT 4X4 6AT","DC 3.2 TDCi LIMITED 4X4 6MT","DC 3.2 TDCi LIMITED 4X4 6AT","DC 3.2 TDCi BLACK EDITION 4X4 6AT","DC 3.2 TDCi FX4 4X4 6AT","DC 2.0 T PANTHER RAPTOR"];
const V208 = ["5P 1.2 LIKE","5P 1.2 T GT 6TIPT","5P 1.2 T GT 6TIPT LINE","5P 1.6 ACTIVE","5P 1.6 ALLURE","5P 1.6 ALLURE TIPT","5P 1.6 FELINE TIPT","5P 1.6 STYLE","5P 1.6 STYLE TIPT","5P 1.6 ROADTRIP","5P 1.6 ROADTRIP TIPT"]
const V308 = ["5P 1.6 ALLURE","5P 1.6 THP FELINE","5P 1.6 THP FELINE TIPT","5P 1.6 HDi ALLURE","5P 1.6 HDi FELINE"];
const V408 = ["4P 1.6 HDi ALLURE","4P 1.6 HDi FELINE","4P 1.6 THP ALLURE TIPT","4P 1.6 THP FELLINE TIPT"];
const V2008 =["5P 1.6 ACTIVE","5P 1.6 ALLURE","5P 1.6 ALLURE TIPT","5P 1.6 FELINE","5P 1.6 FELINE TIPT","5P 1.6 THP SPORT TIPT"];
const VALASKAN = ["DC 2.3 DCI T 160CV 4X2 CONFORT 6MT","DC 2.3 DCI T 160CV 4X4 CONFORT 6MT","DC 2.3 DCI T 190CV 4X2 EMOTION 6MT","DC 2.3 DCI T 190CV 4X4 EMOTION 6MT","DC 2.3 DCI T 190CV 4X2 INTENS 6MT","DC 2.3 DCI T 190CV 4X4 INTENS 6MT","DC 2.3 DCI T 190CV 4X4 ICONIC 6MT","DC 2.3 DCI T 190CV 4X4 ICONIC 7AT","DC 2.3 DCI T 190CV 4X4 OUTSIDER 7AT"];
const VCAPTUR = ["5P 1.6 LIFE","5P 1.6 INTENS CVT","5P 1.6 INTENS CVT BOSE","5P 2.0 ZEN","5P 2.0 INTENS"];
const VDUSTER = ["5P 1.3 T 4X2 OUTSIDER CVT","5P 1.3 T 4X2 ICONIC","5P 1.3 T 4X4 ICONIC","5P 1.6 4X2 ZEN","5P 1.6 4X2 INTENS CVT","5P 1.6 4X2 EXPRESSION","5P 1.6 4X2 DYNAMIQUE","5P 1.6 4X2 CONFORT"];
const VDUSTEROROCH = ["DC 1.6 DYNAMIQUE","DC 1.6 OUTSIDER","DC 2.0 DYNAMIQUE","DC 2.0 PRIVELEGE","DC 2.0 OUTSIDER PLUS","DC 2.0 DYNAMIQUE 4X4","DC 2.0 OUTSIDER PLUS 4X4","DC 1.6 PROFESIONAL","DC 1.6 SCE EMOTION 114 2WD","DC 1.3 TCE ICONIC 163 2WD CVT","DC 1.3 TCE OUTSIDER 163 4WD"];
const VAMAROK = ["DC 2.0 TDI 140CV 4X2 TREND","DC 2.0 TDI 180CV 4X2 COMF","DC 2.0 TDI 180CV 4X2 COMF AT","DC 2.0 TDI 180CV 4X2 HIGH","DC 2.0 TDI 180CV 4X2 HIGH AT","DC 2.0 TDI 140CV 4X4 TREND","DC 2.0 TDI 180CV 4X4 COMF","DC 2.0 TDI 180CV 4X4 HIGH","DC 2.0 TDI 180CV 4X4 HIGH AT","DC 3.0 TDI V6 4X4 COMF AT 258CV","DC 3.0 TDI V6 4X4 8AT HIGH 258CV","DC 3.0 TDI V6 4X4 8AT EXTREME 258CV","DC 3.0 TDI V6 4X4 8AT BLACK STYLE 258CV"];
const VNIVUS = ["5P 1.0 TSI 5MT 170","5P 1.0 TSI 6AT COMFORTLINE 200","5P 1.0 TSI 6AT HIGHLINE 200","5P 1.0 TSI 6AT HERO 200"];
const VGOLTREND = ["5P 1.6 HIGHLINE","5P 1.6 HIGHLINE I MOTTION","5P 1.6 TRENDLINE","5P 1.6 TRENDLINE TIPT","5P 1.6 COMF","5P 1.6 COMF TIPT"];
const VGOLF = ["5P 1.4 TSI COMFORTLINE DSG","5P 250 TSI HIGHLINE DSG","5P GTI"];
const VTAOS = ["5P 1.4 TSI 250 COMFORTLINE TIPT","5P 1.4 TSI 250 HIGHLINE TIPT","5P 1.4 TSI 250 HERO TIPT"];


/* capturar <SELECT> del html para rellenarlos con las constantes */

let Smarca = document.getElementById('select-marca');
let Smodelo = document.getElementById('select-modelo');
let Sversion = document.getElementById('select-version');
let controlcarga = Smodelo.value;

function CargarSelect (a){
    for(let i = 0; i < a.length; i++){
        Smodelo.innerHTML += `<option value="${i}">${a[i]}</option>`;
        console.log (`${i} ---> ${a[i]}`);
    }
}

Smarca.onchange = () =>{
    let x = Smarca.value;
    switch (x){
        case "0":
            CargarSelect(modelosCH);
            break;
        case "1":
            CargarSelect(modelosCI);
            break;
        case "2":
            CargarSelect(modelosFI);
            break;
        case "3":
            CargarSelect(modelosDG);
            break;
        case "4":
            CargarSelect(modelosFO);
            break;
        case 5:
            CargarSelect(modelosPE);
            break;
        case 6:
            CargarSelect(modelosRE);
            break;
        case 7:
            CargarSelect(modelosVW);
            break;
    }
}