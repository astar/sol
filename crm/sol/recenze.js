// Recenze na potrhaných papírcích. Při každém načtení jiné tři.
// Sebeironie je v brand contractu ("uznat vlastní blbost") — tohle je ona.
const RECENZE = [
  ["Chtěl jsem se jen v klidu vysaunovat a ne poslouchat nějaký vědecký kraviny.", "Zdeněk M., stálý host"],
  ["Nic nudnějšího jsem ještě nezažila. Kde je peeling?", "Jarmila, permanentka"],
  ["Do půlky jsem myslel, že zdechnu. Od půlky jsem si to už přál.", "anonym, 3. řada"],
  ["Vědecky nepřesný kýč jako vždycky.", "Ing. P. Vondráček, Ph.D."],
  ["Kde sou kurva ty slibované formuláře na stížnosti?", "nepodepsáno"],
  ["Přišel jsem na saunu. Odešel jsem s domácím úkolem.", "Radek, 41"],
  ["Manžel od té doby mluví o neutrinech. Chci ho zpátky.", "Věra H."],
  ["Dvě hvězdy. Jedna za páru, jedna za to, že to skončilo.", "L. Bartoš"],
  ["Slíbili zatmění. Přišel jsem a bylo světlo.", "Miroslav, Ostrava"],
  ["Celou dobu tam řvali o uhlí. Já topím plynem.", "pan Nový, Krnov"],
  ["Za ty peníze bych čekal aspoň to Slunce.", "hosté z chatky č. 4"],
  ["Ptal jsem se na wifi heslo, dostal jsem přednášku o Kelvinovi.", "Tomáš, recepce"],
  ["Bylo to dlouhý, hlasitý a nakonec někdo otevřel dveře. Jako doma.", "V. Sýkorová"],
  ["Prý se Měsíc vzdaluje. Já se vzdálil taky.", "odešel v 12. minutě"],
  ["Můj syn se ptal, co je fúze. Nevěděl jsem. Děkuji za nic.", "otec dvou dětí"],
  ["Saunér vysvětloval, proč Slunce nehoří. Přitom bylo vedro jak v peci.", "K. Řehák"],
  ["Nesnáším, když mi někdo v 90 stupních vysvětluje vazebnou energii. A přesto jsem tu zas.", "stálice, 6. sezóna"],
  ["Formuláře na stížnosti prý budou. Zatmění taky prý bude.", "nepodepsáno"],
];

// „vyděračský" styl — písmena vystřižená z novin
function vyderacsky(text) {
  return text.split("").map(z => {
    if (z === " ") return " ";
    const s = [
      "font-family:Georgia,serif", "font-family:'Courier New',monospace",
      "font-family:Impact,sans-serif", "font-family:'Times New Roman',serif",
      "font-family:Verdana,sans-serif",
    ][Math.floor(Math.random() * 5)];
    const rot = (Math.random() * 10 - 5).toFixed(1);
    const vel = (0.86 + Math.random() * 0.34).toFixed(2);
    const tmavy = Math.random() < 0.42;
    return `<span style="${s};display:inline-block;transform:rotate(${rot}deg);
      font-size:${vel}em;padding:.05em .1em;margin:.06em .02em;line-height:1;
      background:${tmavy ? "#2A2118" : "#F0E7D2"};
      color:${tmavy ? "#F0E7D2" : "#2A2118"}">${z}</span>`;
  }).join("");
}

function vyloz() {
  const cil = document.getElementById("recenze");
  if (!cil) return;
  const michane = [...RECENZE].sort(() => Math.random() - 0.5).slice(0, 3);
  cil.innerHTML = michane.map((r, i) => {
    const rans = Math.random() < 0.34;          // asi třetina vyděračsky
    const rot = (Math.random() * 4.6 - 2.3).toFixed(2);
    const posun = (Math.random() * 14 - 7).toFixed(0);
    return `<blockquote class="papirek ${rans ? "vyderac" : ""}"
              style="transform:rotate(${rot}deg) translateY(${posun}px)">
              <p>${rans ? vyderacsky(r[0]) : "„" + r[0] + "“"}</p>
              <cite>— ${r[1]}</cite>
            </blockquote>`;
  }).join("");
}
document.addEventListener("DOMContentLoaded", vyloz);
