// ================= INHALTE =================
// Fragetypen: mc = Auswahl, open = offene Frage (keys: alle Gruppen müssen vorkommen; Alternative mit "=" am Anfang = exakte Antwort)

const CHAPTERS = [
// ---------------------------------------------------------------- 1
{
  id: "gewi", emoji: "🧭", color: "#e4572e", title: "Was ist Gewi?",
  short: "Das Fach und seine Fragen",
  learn: `
  <div class="box def"><b>Gewi</b> ist die Abkürzung für <b>Gesellschaftswissenschaften</b>.
  In diesem Fach lernst du, <b>wie Menschen zusammenleben</b> – heute, früher und an ganz verschiedenen Orten der Erde.</div>
  <h3>Was steckt in dem langen Wort?</h3>
  <div class="split">
    <div class="tile"><div class="big">👨‍👩‍👦‍👦</div><b>Gesellschaft</b><p>Alle Menschen, die zusammenleben: deine Familie, deine Klasse, dein Verein, deine Stadt, dein Land – und am Ende alle Menschen auf der Welt.</p></div>
    <div class="tile"><div class="big">🔎</div><b>Wissenschaft</b><p>Etwas ganz genau erforschen: Fragen stellen, Beweise suchen, prüfen und erklären.</p></div>
  </div>
  <h3>Drei große Fragen</h3>
  <p>Im Gewi-Unterricht suchst du Orientierung. Das heißt: Du lernst, dich zurechtzufinden …</p>
  <div class="three">
    <div class="tile c-geo"><div class="big">🗺️</div><b>… im Raum</b><p><i>Wo</i> leben Menschen? Wie sieht die Erde aus?</p></div>
    <div class="tile c-ges"><div class="big">⏳</div><b>… in der Zeit</b><p><i>Wie</i> haben Menschen <i>früher</i> gelebt?</p></div>
    <div class="tile c-pol"><div class="big">🤝</div><b>… in der Gesellschaft</b><p><i>Wie</i> leben wir <i>zusammen</i>? Welche Regeln gelten?</p></div>
  </div>
  <div class="box tip">💡 Schau mal auf deine Arbeitsblätter: Oben steht oft „Orientierung in der Zeit“ oder „Orientierung in der Gesellschaft“. Daran erkennst du, welcher Teil von Gewi gerade dran ist.</div>
  <h3>Gut zu wissen</h3>
  <p>In Berlin und Brandenburg ist Gewi in den Klassen 5 und 6 <b>ein</b> Fach. Ab Klasse 7 wird es in drei Fächer aufgeteilt: <b>Geschichte</b>, <b>Geografie</b> und <b>Politische Bildung</b>.</p>`,
  practice: [
    { type: "quiz", id: "g1", title: "Fragen zum Fach", questions: [
      { t:"open", q:"Wofür steht die Abkürzung „Gewi“?", keys:[["gesellschaftswissenschaft"]], muster:"Gesellschaftswissenschaften." },
      { t:"open", q:"Erkläre mit eigenen Worten: Was lernt man im Fach Gewi?", keys:[["zusammen","gesellschaft","miteinander"]], muster:"Man lernt, wie Menschen zusammenleben – heute, früher und an verschiedenen Orten der Erde." },
      { t:"mc", q:"Was ist eine Gesellschaft?", opts:["Ein einzelner Mensch","Menschen, die zusammenleben","Ein Land ohne Menschen","Ein Schulfach"], a:1 },
      { t:"open", q:"Nenne zwei Gruppen aus deinem Leben, die zur Gesellschaft gehören.", keys:[["familie","klasse","schule","verein","freund","team","mannschaft","stadt","nachbar","hort","ag"]], muster:"Zum Beispiel: Familie, Klasse, Verein, Freunde, Nachbarschaft.", min:2 },
      { t:"mc", q:"„Orientierung in der Zeit“ bedeutet …", opts:["Ich lerne die Uhr lesen","Ich finde mich in der Vergangenheit zurecht","Ich bin pünktlich","Ich lerne den Stundenplan"], a:1 },
      { t:"open", q:"In welche drei Fächer wird Gewi ab Klasse 7 aufgeteilt?", keys:[["geschicht"],["geograf","geograph","erdkunde"],["politi"]], muster:"Geschichte, Geografie und Politische Bildung." }
    ]}
  ],
  cards: [
    ["Gewi", "Gesellschaftswissenschaften – das Fach, in dem man lernt, wie Menschen zusammenleben."],
    ["Gesellschaft", "Alle Menschen, die zusammenleben – von der Familie bis zur ganzen Welt."],
    ["Wissenschaft", "Etwas genau erforschen: fragen, Beweise suchen, prüfen, erklären."],
    ["Orientierung im Raum", "Sich auf der Erde zurechtfinden (Geografie)."],
    ["Orientierung in der Zeit", "Sich in der Vergangenheit zurechtfinden (Geschichte)."],
    ["Orientierung in der Gesellschaft", "Verstehen, wie wir zusammenleben und welche Regeln gelten (Politik)."]
  ],
  test: [
    { t:"open", q:"Schreibe das Wort aus: Gewi = …", keys:[["gesellschaftswissenschaft"]], muster:"Gesellschaftswissenschaften" },
    { t:"open", q:"Was lernt man im Fach Gewi? Antworte in einem Satz.", keys:[["zusammen","miteinander","gesellschaft"]], muster:"Wie Menschen zusammenleben – heute, früher und an verschiedenen Orten." },
    { t:"open", q:"Was bedeutet das Wort „Wissenschaft“?", keys:[["forsch","untersuch","genau","wissen","prüf","erklär"]], muster:"Etwas ganz genau erforschen und erklären." },
    { t:"open", q:"Welcher Bereich von Gewi gehört zu „Orientierung im Raum“?", keys:[["geograf","geograph","erdkunde"]], muster:"Die Geografie." },
    { t:"mc", q:"Welche Frage gehört zu „Orientierung in der Gesellschaft“?", opts:["Wo liegt Afrika?","Wie lebten die Neandertaler?","Welche Regeln gelten in unserer Klasse?","Wie alt ist die Erde?"], a:2 },
    { t:"mc", q:"Wie viele Fächer stecken in Gewi?", opts:["Eins","Zwei","Drei","Fünf"], a:2 },
    { t:"mc", q:"Welche Gruppe gehört NICHT zur Gesellschaft?", opts:["Deine Klasse","Dein Sportverein","Ein Rudel Wölfe","Deine Familie"], a:2 },
    { t:"mc", q:"„Orientierung in der Zeit“ gehört zu …", opts:["Geografie","Geschichte","Politik","Mathe"], a:1 }
  ]
},
// ---------------------------------------------------------------- 2
{
  id: "bereiche", emoji: "🧩", color: "#f2a541", title: "Die drei Bereiche",
  short: "Geschichte, Geografie, Politik",
  learn: `
  <p>Gewi besteht aus drei Bereichen. Jeder Bereich stellt andere Fragen:</p>
  <div class="area c-ges"><div class="big">⏳</div><div><b>Geschichte</b> – Orientierung in der Zeit
    <p>Wie haben Menschen früher gelebt? Was ist passiert und warum? Dafür untersuchen wir <b>Quellen</b> und ordnen Ereignisse auf einem <b>Zeitstrahl</b> ein.</p>
    <p class="ex">Beispiele: Steinzeit, Neandertaler, Ritter, Berliner Mauer</p></div></div>
  <div class="area c-geo"><div class="big">🗺️</div><div><b>Geografie</b> – Orientierung im Raum
    <p>Wie sieht die Erde aus? Wo liegt was? Dafür arbeiten wir mit <b>Karten</b>, dem <b>Globus</b> und den <b>Himmelsrichtungen</b>.</p>
    <p class="ex">Beispiele: Kontinente, Weltmeere, Wetter und Klima, Berlin und Brandenburg</p></div></div>
  <div class="area c-pol"><div class="big">🤝</div><div><b>Politik</b> (Politische Bildung) – Orientierung in der Gesellschaft
    <p>Wie leben wir zusammen? Wer bestimmt die Regeln? Welche Rechte und Pflichten haben wir?</p>
    <p class="ex">Beispiele: Gruppen, Regeln in der Klasse, Klassensprecherwahl, Kinderrechte</p></div></div>
  <h3>Beispiel aus der Politik: Gruppen, in denen ich lebe</h3>
  <p>Jeder Mensch gehört zu vielen <b>Gruppen</b>: Familie, Klasse, Freunde, Verein …</p>
  <div class="box def">In Gruppen <b>gelten Regeln</b>. Man muss <b>Rücksicht nehmen</b>, es gibt <b>Aufgaben</b>, die man erfüllen muss, und die anderen haben <b>Erwartungen</b> an dich. Dafür erlebt man <b>Gemeinschaft</b>.</div>
  <p>Wenn jemand die Erwartungen der Gruppe nicht erfüllt, hat das <b>Konsequenzen</b> (Folgen):</p>
  <ul>
    <li>Wer das Training schwänzt, enttäuscht sein Team und wird vielleicht nicht aufgestellt.</li>
    <li>Wer ein Buch zu spät in der Bibliothek abgibt, muss eine Gebühr bezahlen.</li>
    <li>Wer bei den Proben der Theater-AG fehlt, darf vielleicht nicht mitspielen.</li>
  </ul>`,
  practice: [
    { type:"sort", id:"b1", title:"Welcher Bereich passt?", prompt:"Tippe ein Thema an und dann den passenden Bereich.",
      cats:[["ges","⏳ Geschichte"],["geo","🗺️ Geografie"],["pol","🤝 Politik"]],
      items:[["Himmelsrichtungen","geo"],["Faustkeil aus der Steinzeit","ges"],["Klassensprecherwahl","pol"],["Kontinente","geo"],["Neandertaler","ges"],["Kinderrechte","pol"],["Weltmeere","geo"],["Ritter und Burgen","ges"],["Regeln in der Klasse","pol"],["Wetter und Klima","geo"],["Alte Münzen untersuchen","ges"],["Regeln im Sportverein","pol"]] },
    { type:"sort", id:"b2", title:"Was gilt in Gruppen?", prompt:"Stimmt die Aussage oder nicht?",
      cats:[["ja","✅ stimmt"],["nein","❌ stimmt nicht"]],
      items:[["In Gruppen gelten Regeln.","ja"],["In Gruppen kann jeder tun, was ihm gefällt.","nein"],["In Gruppen muss man Rücksicht nehmen.","ja"],["In Gruppen gibt es keinen Streit.","nein"],["In Gruppen hat man keine Pflichten.","nein"],["In Gruppen wird erwartet, dass man sich an Regeln hält.","ja"],["In Gruppen sind alle Freunde.","nein"],["In Gruppen gibt es Aufgaben, die man erfüllen muss.","ja"],["In Gruppen erlebt man Gemeinschaft.","ja"],["In Gruppen muss man keine Konsequenzen fürchten.","nein"]] },
    { type:"quiz", id:"b3", title:"Konsequenzen in Gruppen", questions:[
      { t:"open", q:"Fall A: Jan schwänzt sein Fußballtraining. Welche Konsequenz könnte das haben?", keys:[["enttäusch","aufgestellt","bank","nicht spielen","ärger","trainer","strafe","sauer","wütend","nicht mitspielen","rausgeworfen","raus"]], muster:"Er enttäuscht sein Team und wird beim nächsten Spiel vielleicht nicht aufgestellt." },
      { t:"open", q:"Fall B: Celine gibt die ausgeliehene CD zu spät in der Stadtbibliothek ab. Was passiert?", keys:[["gebühr","bezahl","strafe","geld","zahlen","mahn"]], muster:"Sie muss eine Gebühr (Strafe) bezahlen." },
      { t:"open", q:"Fall C: Steffen kommt zur Theater-AG-Probe und hat nicht geübt. Welche Konsequenz könnte das haben?", keys:[["nicht mitspiel","nicht mitmach","rolle","auffühlung","aufführung","ärger","üben","enttäusch","ersetzt","sauer"]], muster:"Er darf bei der Aufführung vielleicht nicht mitmachen oder verliert seine Rolle." },
      { t:"open", q:"Nenne eine Erwartung, die deine Lehrerinnen und Lehrer an dich haben.", keys:[["respekt","ruhig","zuhör","mitmach","mitarbeit","pünktlich","hausaufgab","aufpass","melden","freundlich","höflich","lern","leise","regeln"]], muster:"Zum Beispiel: dass ich sie respektiere, zuhöre, mitmache und pünktlich bin." },
      { t:"mc", q:"Was ist eine Konsequenz?", opts:["Eine Regel","Eine Folge von etwas, das man getan hat","Ein Mitglied der Gruppe","Ein Spiel"], a:1 }
    ]}
  ],
  cards: [
    ["Geschichte", "Orientierung in der Zeit: Wie haben Menschen früher gelebt?"],
    ["Geografie", "Orientierung im Raum: Wie sieht die Erde aus, wo liegt was?"],
    ["Politik", "Orientierung in der Gesellschaft: Wie leben wir zusammen, wer bestimmt die Regeln?"],
    ["Gruppe", "Menschen, die zusammengehören, z. B. Familie, Klasse, Verein. In Gruppen gelten Regeln."],
    ["Erwartung", "Was die anderen in der Gruppe von dir erwarten, z. B. dass du pünktlich bist."],
    ["Konsequenz", "Die Folge, wenn man eine Regel oder Erwartung nicht erfüllt."]
  ],
  test: [
    { t:"open", q:"Nenne die drei Bereiche von Gewi.", keys:[["geschicht"],["geograf","geograph","erdkunde"],["politi"]], muster:"Geschichte, Geografie und Politik (Politische Bildung)." },
    { t:"open", q:"Mit welchem Bereich beschäftigt man sich, wenn man Karten liest?", keys:[["geograf","geograph","erdkunde"]], muster:"Geografie." },
    { t:"open", q:"Was untersucht man in Geschichte, um etwas über früher herauszufinden?", keys:[["quell"]], muster:"Quellen." },
    { t:"open", q:"Nenne zwei Dinge, die in jeder Gruppe gelten.", keys:[["regel","rücksicht","aufgabe","pflicht","erwart","gemeinschaft"]], muster:"Zum Beispiel: Es gelten Regeln, man muss Rücksicht nehmen, es gibt Aufgaben.", min:2 },
    { t:"open", q:"Was ist eine Konsequenz? Erkläre mit einem Beispiel.", keys:[["folge","passiert","strafe","dann"]], muster:"Eine Folge. Beispiel: Wer das Training schwänzt, wird nicht aufgestellt." },
    { t:"mc", q:"Zu welchem Bereich gehört die Klassensprecherwahl?", opts:["Geschichte","Geografie","Politik"], a:2 },
    { t:"mc", q:"Zu welchem Bereich gehören die Neandertaler?", opts:["Geschichte","Geografie","Politik"], a:0 },
    { t:"mc", q:"Welche Aussage stimmt?", opts:["In Gruppen sind alle Freunde.","In Gruppen gibt es keinen Streit.","In Gruppen erlebt man Gemeinschaft.","In Gruppen hat man keine Pflichten."], a:2 }
  ]
},
// ---------------------------------------------------------------- 3
{
  id: "quellen", emoji: "🏺", color: "#8a5a44", title: "Quellen",
  short: "Überreste, Bild- und Tonquellen, Schriftquellen",
  learn: `
  <p>Niemand von uns war in der Steinzeit dabei. Woher wissen wir trotzdem, wie die Menschen damals gelebt haben? Historikerinnen und Historiker arbeiten wie <b>Detektive</b>: Sie untersuchen <b>Quellen</b>.</p>
  <div class="box def"><b>Quellen</b> sind alle Dinge, die aus der Vergangenheit übrig geblieben sind und uns etwas über sie verraten.</div>
  <h3>Bei geschichtlichen Quellen unterscheidet man drei Arten</h3>
  <div class="src"><div class="big">🦴</div><div><b>Überreste</b>
    <p>Gegenstände und Bauwerke aus früherer Zeit.</p>
    <p class="ex">Knochen, Kleidung, Geschirr, Münzen, Werkzeuge, ein Fachwerkhaus, <b>Fossilien</b></p></div></div>
  <div class="src"><div class="big">📷</div><div><b>Bild- und Tonquellen</b>
    <p>Alles, was man sehen oder hören kann.</p>
    <p class="ex">Gemälde, Höhlenmalereien, Fotografien, Filme (z. B. Super-8-Filme), Schallplatten, Radioaufnahmen</p></div></div>
  <div class="src"><div class="big">📜</div><div><b>Schriftquellen</b>
    <p>Alles, was aufgeschrieben wurde.</p>
    <p class="ex">Bücher, Briefe, Zeitungen, Urkunden, Tagebücher, Pässe</p></div></div>
  <h3>Was ist ein Fossil?</h3>
  <div class="box def">Ein <b>Fossil</b> ist ein <b>versteinerter Überrest</b> eines Lebewesens aus uralter Zeit – zum Beispiel ein Knochen, eine Muschel oder der Abdruck einer Pflanze im Stein.</div>
  <p>Durch Fossilien wissen wir, dass es Dinosaurier gab, obwohl kein Mensch sie je gesehen hat.</p>
  <h3>Was verrät eine Quelle?</h3>
  <p>Beispiel <b>Kleidung</b> (ein Überrest): An den Farben und der Qualität des Stoffes konnte man erkennen, ob jemand reich oder arm war, also zu welcher <b>gesellschaftlichen Schicht</b> er gehörte.</p>
  <div class="box tip">💡 Detektiv-Fragen an jede Quelle: <b>Was</b> ist das? <b>Wie alt</b> ist es? <b>Wer</b> hat es gemacht oder benutzt? <b>Was</b> verrät es mir über die Vergangenheit?</div>`,
  practice: [
    { type:"sort", id:"q1", title:"Quellen sortieren", prompt:"Tippe eine Quelle an und dann die passende Quellenart.",
      cats:[["ue","🦴 Überreste"],["bt","📷 Bild- und Tonquellen"],["sc","📜 Schriftquellen"]],
      items:[["Knochen","ue"],["Kleidung","ue"],["Geschirr","ue"],["Münzen","ue"],["Fachwerkhaus","ue"],["Faustkeil","ue"],["Fossil","ue"],["Radioaufnahme","bt"],["Fotografie","bt"],["Super-8-Film","bt"],["Gemälde","bt"],["Schallplatte","bt"],["Höhlenmalerei","bt"],["Buch","sc"],["Brief","sc"],["Zeitung","sc"],["Pass","sc"],["Tagebuch","sc"],["Urkunde","sc"]] },
    { type:"quiz", id:"q2", title:"Detektiv-Fragen", questions:[
      { t:"open", q:"Was ist eine Quelle? Erkläre mit eigenen Worten.", keys:[["vergangen","früher","alt","geschichte"]], muster:"Alles, was aus der Vergangenheit übrig geblieben ist und uns etwas über früher verrät." },
      { t:"open", q:"Was ist ein Fossil?", keys:[["versteinert","stein"]], muster:"Ein versteinerter Überrest eines Lebewesens (z. B. Knochen, Muschel, Pflanzenabdruck)." },
      { t:"open", q:"Zu welcher Quellenart gehört ein Fossil?", keys:[["überrest","ueberrest"]], muster:"Zu den Überresten." },
      { t:"open", q:"Was kann man an alter Kleidung erkennen?", keys:[["reich","arm","schicht","stand","geld","wer","wohlhab","beruf","farbe","qualität","stoff"]], muster:"Ob jemand reich oder arm war, also zu welcher gesellschaftlichen Schicht er gehörte." },
      { t:"mc", q:"Ein alter Brief deiner Uroma ist eine …", opts:["Überrest","Bild- und Tonquelle","Schriftquelle"], a:2 },
      { t:"mc", q:"Eine Höhlenmalerei ist eine …", opts:["Bildquelle","Schriftquelle","Tonquelle"], a:0 }
    ]},
    { type:"write", id:"q3", title:"Schätze von zu Hause",
      prompt:"Welche alten Gegenstände gibt es bei dir zu Hause (z. B. Fotos, Schmuck, Briefe, ein altes Spielzeug)? Beschreibe einen davon: Was ist es, wie alt ist es ungefähr, und was verrät er dir über die Vergangenheit? Zu welcher Quellenart gehört er?",
      muster:"Beispiel: Bei uns gibt es ein altes Foto von meinem Opa als Kind. Es ist ungefähr 60 Jahre alt und schwarz-weiß. Man sieht, dass die Kinder damals andere Kleidung trugen und dass es noch keine Farbfotos gab. Das Foto ist eine Bildquelle." }
  ],
  cards: [
    ["Quelle", "Alles, was aus der Vergangenheit übrig geblieben ist und uns etwas über sie verrät."],
    ["Überreste", "Gegenstände und Bauwerke aus früherer Zeit: Knochen, Kleidung, Münzen, Werkzeuge, Fossilien."],
    ["Bild- und Tonquellen", "Was man sehen oder hören kann: Gemälde, Fotos, Filme, Schallplatten, Radioaufnahmen."],
    ["Schriftquellen", "Was aufgeschrieben wurde: Bücher, Briefe, Zeitungen, Urkunden."],
    ["Fossil", "Versteinerter Überrest eines Lebewesens aus uralter Zeit."],
    ["Historiker/in", "Forscher/in, die mit Quellen herausfindet, wie Menschen früher lebten."]
  ],
  test: [
    { t:"open", q:"Nenne die drei Arten von geschichtlichen Quellen.", keys:[["überrest","ueberrest"],["bild","ton"],["schrift"]], muster:"Überreste, Bild- und Tonquellen, Schriftquellen." },
    { t:"open", q:"Nenne zwei Beispiele für Überreste.", keys:[["knochen","kleid","geschirr","münze","werkzeug","haus","fossil","faustkeil","waffe","schmuck","topf","scherbe","gebäude","burg"]], muster:"Zum Beispiel Knochen, Münzen, Kleidung, Werkzeuge, Fossilien.", min:2 },
    { t:"open", q:"Nenne zwei Beispiele für Schriftquellen.", keys:[["buch","bücher","brief","zeitung","urkunde","tagebuch","pass","pässe","inschrift","vertrag","zeitschrift"]], muster:"Zum Beispiel Bücher, Briefe, Zeitungen, Urkunden.", min:2 },
    { t:"open", q:"Was ist ein Fossil?", keys:[["versteinert","stein"]], muster:"Ein versteinerter Überrest eines Lebewesens." },
    { t:"mc", q:"Zu welcher Quellenart gehört eine Schallplatte?", opts:["Überrest","Bild- und Tonquelle","Schriftquelle"], a:1 },
    { t:"mc", q:"Zu welcher Quellenart gehört eine alte Münze?", opts:["Überrest","Bild- und Tonquelle","Schriftquelle"], a:0 },
    { t:"mc", q:"Wer untersucht Quellen, um herauszufinden, wie Menschen früher lebten?", opts:["Astronauten","Historikerinnen und Historiker","Köche","Piloten"], a:1 },
    { t:"mc", q:"Woher wissen wir, dass es Dinosaurier gab?", opts:["Aus alten Zeitungen","Durch Fotos","Durch Fossilien","Aus Briefen"], a:2 }
  ]
},
// ---------------------------------------------------------------- 4
{
  id: "himmel", emoji: "🧭", color: "#2f7fb8", title: "Himmelsrichtungen",
  short: "Kompass, Merksatz, Übungen",
  learn: `
  <p>Damit wir beschreiben können, wo etwas liegt, gibt es <b>Himmelsrichtungen</b>.</p>
  <div class="rose-wrap" id="learnRose"></div>
  <h3>Die vier Haupthimmelsrichtungen</h3>
  <p><b>N</b>orden, <b>O</b>sten, <b>S</b>üden und <b>W</b>esten. Man liest sie im <b>Uhrzeigersinn</b>, oben beginnend.</p>
  <div class="box tip">💡 Merksatz: <b>N</b>ie <b>O</b>hne <b>S</b>eife <b>W</b>aschen</div>
  <h3>Die vier Nebenhimmelsrichtungen</h3>
  <p>Sie liegen <b>genau zwischen</b> zwei Haupthimmelsrichtungen:</p>
  <ul><li><b>Nordosten (NO)</b> – zwischen Norden und Osten</li><li><b>Südosten (SO)</b> – zwischen Süden und Osten</li><li><b>Südwesten (SW)</b> – zwischen Süden und Westen</li><li><b>Nordwesten (NW)</b> – zwischen Norden und Westen</li></ul>
  <div class="box def">Bei den Nebenhimmelsrichtungen steht <b>Norden oder Süden immer vorne</b>: Es heißt Nordosten, nicht „Ostnorden“.</div>
  <h3>Wie finde ich die Himmelsrichtungen?</h3>
  <div class="split">
    <div class="tile"><div class="big">🧲</div><b>Mit dem Kompass</b><p>Die Kompassnadel zeigt immer nach <b>Norden</b>.</p></div>
    <div class="tile"><div class="big">☀️</div><b>Mit der Sonne</b><p>Sie geht im <b>Osten</b> auf, steht mittags im <b>Süden</b> und geht im <b>Westen</b> unter.</p></div>
  </div>
  <div class="tile"><div class="big">🗺️</div><b>Auf der Karte</b><p>Auf den meisten Karten ist <b>Norden oben</b>. Das ist aber nur eine Gewohnheit! Im Kapitel „Kontinente“ findest du Karten, bei denen das nicht so ist.</p></div>`,
  practice: [
    { type:"compass", id:"h1", title:"Kompassrose beschriften" },
    { type:"grid", id:"h2", title:"Kästchen-Wanderung" },
    { type:"quiz", id:"h3", title:"Von Berlin aus gesehen …", note:"Schreibe die Himmelsrichtung als Abkürzung (z. B. NW) oder als ganzes Wort (z. B. Nordwesten).", questions: "BERLIN" },
    { type:"quiz", id:"h4", title:"Sonne und Kompass", questions:[
      { t:"open", q:"In welcher Himmelsrichtung geht die Sonne auf?", keys:[["=osten","=o","=ost"]], muster:"Im Osten." },
      { t:"open", q:"Wo steht die Sonne mittags (bei uns in Deutschland)?", keys:[["=süden","=s","=süd"]], muster:"Im Süden." },
      { t:"open", q:"In welcher Himmelsrichtung geht die Sonne unter?", keys:[["=westen","=w","=west"]], muster:"Im Westen." },
      { t:"open", q:"Wohin zeigt eine Kompassnadel?", keys:[["=norden","=n","=nord"]], muster:"Nach Norden." },
      { t:"mc", q:"Welche Himmelsrichtung liegt genau zwischen Süden und Westen?", opts:["Nordwesten","Südosten","Südwesten","Nordosten"], a:2 },
      { t:"mc", q:"Du schaust nach Norden. Was ist hinter dir?", opts:["Osten","Süden","Westen","Norden"], a:1 }
    ]}
  ],
  cards: [
    ["Haupthimmelsrichtungen", "Norden, Osten, Süden, Westen"],
    ["Merksatz", "Nie Ohne Seife Waschen (im Uhrzeigersinn, oben beginnend)"],
    ["Nebenhimmelsrichtungen", "Nordosten, Südosten, Südwesten, Nordwesten"],
    ["Kompass", "Die Nadel zeigt immer nach Norden."],
    ["Sonnenaufgang", "Im Osten"],
    ["Sonne am Mittag", "Im Süden"],
    ["Sonnenuntergang", "Im Westen"]
  ],
  test: [
    { t:"open", q:"Wie heißt der Merksatz für die Haupthimmelsrichtungen?", keys:[["nie"],["ohne"],["seife"],["wasch"]], muster:"Nie Ohne Seife Waschen" },
    { t:"open", q:"Nenne die vier Nebenhimmelsrichtungen.", keys:[["nordost","=no"],["südost","suedost"],["südwest","suedwest"],["nordwest"]], muster:"Nordosten, Südosten, Südwesten, Nordwesten" },
    { t:"open", q:"In welcher Himmelsrichtung geht die Sonne auf?", keys:[["=osten","=o","=ost"]], muster:"Im Osten." },
    { t:"open", q:"Von Berlin aus gesehen: In welcher Himmelsrichtung liegt Hamburg?", keys:[["nordwest","=nw"]], muster:"Im Nordwesten (NW)." },
    { t:"mc", q:"Welche Himmelsrichtung liegt zwischen Norden und Osten?", opts:["Nordwesten","Nordosten","Südosten","Südwesten"], a:1 },
    { t:"mc", q:"Wohin zeigt die Kompassnadel?", opts:["Osten","Süden","Westen","Norden"], a:3 },
    { t:"mc", q:"Wie liest man die Himmelsrichtungen auf der Kompassrose?", opts:["Gegen den Uhrzeigersinn","Im Uhrzeigersinn, oben beginnend","Von unten nach oben","Von links nach rechts"], a:1 },
    { t:"mc", q:"Von Berlin aus gesehen liegt München im …", opts:["Norden","Osten","Süden","Westen"], a:2 }
  ]
},
// ---------------------------------------------------------------- 5
{
  id: "kontinente", emoji: "🌍", color: "#2f9e6e", title: "Kontinente",
  short: "Sieben Erdteile – auch auf verdrehten Karten",
  learn: `
  <div class="box def">Ein <b>Kontinent</b> (Erdteil) ist ein sehr großes, zusammenhängendes Stück Festland. Auf der Erde gibt es <b>sieben Kontinente</b>.</div>
  <div class="map" id="learnContMap"></div>
  <div class="legend" id="learnContLegend"></div>
  <h3>Die Kontinente nach Größe</h3>
  <table class="tbl"><tr><th>#</th><th>Kontinent</th><th>Fläche (rund)</th></tr>
    <tr><td>1</td><td>Asien</td><td>44 Mio. km²</td></tr>
    <tr><td>2</td><td>Afrika</td><td>30 Mio. km²</td></tr>
    <tr><td>3</td><td>Nordamerika</td><td>25 Mio. km²</td></tr>
    <tr><td>4</td><td>Südamerika</td><td>18 Mio. km²</td></tr>
    <tr><td>5</td><td>Antarktis</td><td>14 Mio. km²</td></tr>
    <tr><td>6</td><td>Europa</td><td>10 Mio. km²</td></tr>
    <tr><td>7</td><td>Australien (und Ozeanien)</td><td>9 Mio. km²</td></tr></table>
  <h3>Spannende Fakten</h3>
  <ul>
    <li><b>Asien</b> ist der größte Kontinent, und dort leben auch die meisten Menschen.</li>
    <li><b>Europa und Asien</b> hängen zusammen. Die Grenze bildet unter anderem das <b>Uralgebirge</b>.</li>
    <li><b>Nord- und Südamerika</b> sind durch Mittelamerika verbunden.</li>
    <li>In <b>Afrika</b> sind die ersten Menschen entstanden.</li>
    <li>Die <b>Antarktis</b> liegt am Südpol unter einer dicken Eisschicht. Dort wohnt niemand dauerhaft, nur Forscherinnen und Forscher.</li>
    <li><b>Deutschland</b> liegt in Europa.</li>
  </ul>
  <div class="box tip">💡 Auf den meisten Karten ist Europa in der Mitte und Norden oben. Das ist aber nur eine Gewohnheit. Unter „Üben“ findest du ungewöhnliche Weltkarten – findest du dich trotzdem zurecht?</div>`,
  practice: [
    { type:"maptap", id:"k1", title:"Tippe den Kontinent an", mode:"cont", view:"normal" },
    { type:"order", id:"k2", title:"Nach Größe ordnen", prompt:"Tippe die Kontinente vom größten zum kleinsten an.",
      items:["Asien","Afrika","Nordamerika","Südamerika","Antarktis","Europa","Australien"] },
    { type:"maplabel", id:"k3", title:"Ungewöhnliche Weltkarte 1", view:"globeTilt" },
    { type:"maplabel", id:"k4", title:"Ungewöhnliche Weltkarte 2", view:"southUp" },
    { type:"maplabel", id:"k5", title:"Ungewöhnliche Weltkarte 3", view:"polar" },
    { type:"maptap", id:"k6", title:"Profi: Kontinente auf verdrehten Karten", mode:"cont", view:"mixed" },
    { type:"quiz", id:"k7", title:"Fragen zu den Kontinenten", questions:[
      { t:"open", q:"Wie heißt der größte Kontinent?", keys:[["asien"]], muster:"Asien." },
      { t:"open", q:"Auf welchem Kontinent liegt Deutschland?", keys:[["europa"]], muster:"Europa." },
      { t:"open", q:"Welcher Kontinent liegt am Südpol?", keys:[["antarkt"]], muster:"Die Antarktis." },
      { t:"open", q:"Welches Gebirge bildet einen Teil der Grenze zwischen Europa und Asien?", keys:[["ural"]], muster:"Das Uralgebirge." },
      { t:"mc", q:"Welche zwei Kontinente sind durch Mittelamerika verbunden?", opts:["Afrika und Europa","Nord- und Südamerika","Asien und Australien","Europa und Asien"], a:1 },
      { t:"mc", q:"Auf welchem Kontinent sind die ersten Menschen entstanden?", opts:["Europa","Asien","Afrika","Australien"], a:2 }
    ]}
  ],
  cards: [
    ["Kontinent", "Sehr großes, zusammenhängendes Festland (Erdteil). Es gibt sieben."],
    ["Die 7 Kontinente", "Asien, Afrika, Nordamerika, Südamerika, Antarktis, Europa, Australien"],
    ["Größter Kontinent", "Asien"],
    ["Kleinster Kontinent", "Australien"],
    ["Antarktis", "Kontinent am Südpol, unter dickem Eis, keine dauerhaften Einwohner"],
    ["Grenze Europa–Asien", "Unter anderem das Uralgebirge"]
  ],
  test: [
    { t:"open", q:"Wie viele Kontinente gibt es?", keys:[["sieben","=7"]], muster:"Sieben." },
    { t:"open", q:"Nenne vier Kontinente.", keys:[["asien","afrika","amerika","antarkt","europa","australien"]], muster:"Zum Beispiel Asien, Afrika, Europa, Australien.", min:4, pool:["asien","afrika","nordamerika","südamerika","antarktis","europa","australien"] },
    { t:"open", q:"Welcher ist der kleinste Kontinent?", keys:[["australien"]], muster:"Australien." },
    { t:"open", q:"Welcher Kontinent ist fast ganz mit Eis bedeckt?", keys:[["antarkt"]], muster:"Die Antarktis." },
    { t:"open", q:"Auf welchem Kontinent liegt Ägypten (ganz oben rechts an Afrika)?", keys:[["afrika"]], muster:"Afrika." },
    { t:"mc", q:"Welcher Kontinent ist der größte?", opts:["Afrika","Asien","Europa","Nordamerika"], a:1 },
    { t:"mc", q:"Welche Kontinente hängen direkt zusammen?", opts:["Europa und Asien","Australien und Asien","Afrika und Südamerika","Antarktis und Australien"], a:0 },
    { t:"mc", q:"Auf welchem Kontinent liegt Berlin?", opts:["Asien","Europa","Afrika","Nordamerika"], a:1 }
  ]
},
// ---------------------------------------------------------------- 6
{
  id: "meere", emoji: "🌊", color: "#1b6ca8", title: "Die drei Weltmeere",
  short: "Pazifik, Atlantik, Indischer Ozean",
  learn: `
  <p>Etwa <b>zwei Drittel</b> der Erde sind mit Wasser bedeckt. Die riesigen Meere zwischen den Kontinenten heißen <b>Ozeane</b> oder <b>Weltmeere</b>.</p>
  <div class="map" id="learnOceanMap"></div>
  <div class="ocean-cards">
    <div class="tile oc1"><div class="big">1</div><b>Pazifik</b> (Pazifischer Ozean, auch Stiller Ozean)<p>Der <b>größte</b> Ozean: rund 165 Mio. km². Er ist größer als alle Kontinente zusammen. Er liegt zwischen <b>Asien und Australien</b> auf der einen und <b>Amerika</b> auf der anderen Seite. Hier ist auch die tiefste Stelle der Erde, der Marianengraben (rund 11 000 m tief).</p></div>
    <div class="tile oc2"><div class="big">2</div><b>Atlantik</b> (Atlantischer Ozean)<p>Rund 106 Mio. km². Er liegt zwischen <b>Amerika</b> und <b>Europa und Afrika</b>. Zum Atlantik gehören auch die <b>Nordsee</b>, die <b>Ostsee</b> und das <b>Mittelmeer</b>.</p></div>
    <div class="tile oc3"><div class="big">3</div><b>Indischer Ozean</b><p>Rund 75 Mio. km². Er liegt zwischen <b>Afrika</b>, <b>Asien</b> und <b>Australien</b>.</p></div>
  </div>
  <div class="box tip">💡 Ganz im Norden und ganz im Süden gibt es noch das <b>Nordpolarmeer</b> und das <b>Südpolarmeer</b>. Manche Bücher zählen sie mit, dann sind es fünf Ozeane. In der Schule lernst du die <b>drei großen Weltmeere</b>.</div>
  <div class="box def">Achtung, Falle: Das <b>Kaspische Meer</b> heißt zwar Meer, ist aber eigentlich der <b>größte See</b> der Erde – es ist ringsum von Land umgeben.</div>`,
  practice: [
    { type:"maptap", id:"m1", title:"Tippe den Ozean an", mode:"ocean", view:"normal" },
    { type:"maptap", id:"m2", title:"Profi: Ozeane auf verdrehten Karten", mode:"ocean", view:"mixed" },
    { type:"maplabel", id:"m3", title:"Meere beschriften", view:"oceanSouth" },
    { type:"quiz", id:"m4", title:"Fragen zu den Weltmeeren", questions:[
      { t:"open", q:"Welchen Ozean überquert ein Flugzeug von Berlin nach New York?", keys:[["atlant"]], muster:"Den Atlantik." },
      { t:"open", q:"Welcher Ozean liegt zwischen Afrika und Australien?", keys:[["indisch"]], muster:"Der Indische Ozean." },
      { t:"open", q:"An welchen Ozean grenzt Japan?", keys:[["pazif","still"]], muster:"An den Pazifik." },
      { t:"open", q:"Zu welchem Ozean gehört die Ostsee?", keys:[["atlant"]], muster:"Zum Atlantik." },
      { t:"mc", q:"Welcher Ozean ist der größte?", opts:["Atlantik","Indischer Ozean","Pazifik"], a:2 },
      { t:"mc", q:"Das Kaspische Meer ist eigentlich …", opts:["ein Ozean","ein See","ein Fluss","ein Teil des Pazifiks"], a:1 }
    ]}
  ],
  cards: [
    ["Ozean / Weltmeer", "Riesiges Meer zwischen den Kontinenten"],
    ["Die 3 Weltmeere", "Pazifik, Atlantik, Indischer Ozean"],
    ["Pazifik", "Größter Ozean, zwischen Asien/Australien und Amerika"],
    ["Atlantik", "Zwischen Amerika und Europa/Afrika; dazu gehören Nordsee, Ostsee und Mittelmeer"],
    ["Indischer Ozean", "Zwischen Afrika, Asien und Australien"],
    ["Kaspisches Meer", "Eigentlich der größte See der Erde"]
  ],
  test: [
    { t:"open", q:"Nenne die drei Weltmeere.", keys:[["pazif","still"],["atlant"],["indisch"]], muster:"Pazifik, Atlantik, Indischer Ozean." },
    { t:"open", q:"Welcher ist der größte Ozean?", keys:[["pazif","still"]], muster:"Der Pazifik." },
    { t:"open", q:"Welcher Ozean liegt zwischen Europa und Amerika?", keys:[["atlant"]], muster:"Der Atlantik." },
    { t:"open", q:"Welcher Ozean ist nach einem Land benannt, das an ihm liegt?", keys:[["indisch"]], muster:"Der Indische Ozean (nach Indien)." },
    { t:"mc", q:"Wie viel der Erde ist ungefähr mit Wasser bedeckt?", opts:["Ein Viertel","Die Hälfte","Zwei Drittel","Alles"], a:2 },
    { t:"mc", q:"Zu welchem Ozean gehört das Mittelmeer?", opts:["Pazifik","Atlantik","Indischer Ozean"], a:1 },
    { t:"mc", q:"Welcher Ozean liegt zwischen Asien und Amerika?", opts:["Pazifik","Atlantik","Indischer Ozean"], a:0 },
    { t:"mc", q:"Wo liegt die tiefste Stelle der Erde?", opts:["Im Atlantik","Im Pazifik","In der Ostsee","Im Indischen Ozean"], a:1 }
  ]
},
// ---------------------------------------------------------------- 7
{
  id: "erde", emoji: "🌋", color: "#c0392b", title: "Entwicklung der Erde",
  short: "4,6 Milliarden Jahre in vier Zeitaltern",
  learn: `
  <p>Die Erde ist rund <b>4,6 Milliarden Jahre</b> alt. Das ist so lange, dass man es sich kaum vorstellen kann. Darum teilen Forscherinnen und Forscher die <b>Erdgeschichte</b> in vier große <b>Zeitalter</b> ein.</p>
  <div class="eras">
    <div class="era e1"><b>Erdfrühzeit</b><span>vor 4,6 Mrd. bis ca. 540 Mio. Jahren</span>
      <ul><li>Die Erde entsteht als glühender Feuerball und kühlt langsam ab.</li><li>Es bilden sich Urmeere.</li><li>Im Wasser entstehen die ersten Lebewesen: winzige <b>Einzeller</b>.</li><li>Einfache Lebewesen betreiben <b>Fotosynthese</b>. Dadurch entsteht <b>Sauerstoff</b> in der Luft.</li></ul></div>
    <div class="era e2"><b>Erdaltertum</b><span>ca. 540 bis 250 Mio. Jahre</span>
      <ul><li>Im Meer entsteht viel neues Leben, z. B. Trilobiten und die ersten <b>Fische</b>.</li><li>Pflanzen und Tiere erobern das <b>Land</b>, z. B. Amphibien (Lurche).</li><li>Riesige Wälder aus Farnen und Schachtelhalmen wachsen. Daraus wurde später <b>Steinkohle</b>.</li></ul></div>
    <div class="era e3"><b>Erdmittelalter</b><span>ca. 250 bis 66 Mio. Jahre</span>
      <ul><li>Das Zeitalter der <b>Dinosaurier</b>.</li><li>Es gibt die ersten kleinen <b>Säugetiere</b> und die ersten <b>Vögel</b>.</li><li>Vor 66 Mio. Jahren schlägt ein riesiger <b>Asteroid</b> (Meteorit) ein. Die Dinosaurier sterben aus.</li></ul></div>
    <div class="era e4"><b>Erdneuzeit</b><span>ca. 66 Mio. Jahre bis heute</span>
      <ul><li>Die <b>Säugetiere</b> breiten sich überall aus, auch Affen.</li><li>Es gibt mehrere <b>Eiszeiten</b> mit Mammuts und Wollnashörnern.</li><li>Die <b>Menschen</b> entstehen.</li></ul></div>
  </div>
  <h3>Die Erdgeschichte als ein einziger Tag</h3>
  <p>Stell dir vor, die ganze Erdgeschichte passt in <b>24 Stunden</b>. Um 0:00 Uhr entsteht die Erde, um Mitternacht ist heute.</p>
  <table class="tbl" id="dayTable"></table>
  <div class="box tip">💡 Die Menschen gibt es erst seit den <b>letzten Sekunden</b> dieses Tages!</div>
  <p>Woher wissen wir das alles? Aus <b>Fossilien</b> und Gesteinsschichten – also aus <b>Überresten</b> (siehe Kapitel Quellen).</p>`,
  practice: [
    { type:"sort", id:"e1", title:"In welches Zeitalter gehört das?", prompt:"Tippe ein Ereignis an und dann das passende Zeitalter.",
      cats:[["e1","Erdfrühzeit"],["e2","Erdaltertum"],["e3","Erdmittelalter"],["e4","Erdneuzeit"]],
      items:[["Die Erde entsteht","e1"],["Erste Einzeller im Wasser","e1"],["Durch Fotosynthese entsteht Sauerstoff","e1"],["Erste Fische","e2"],["Tiere gehen an Land","e2"],["Große Steinkohlewälder","e2"],["Dinosaurier","e3"],["Erste Vögel","e3"],["Asteroid schlägt ein","e3"],["Mammuts in der Eiszeit","e4"],["Erste Affen","e4"],["Erste Menschen","e4"]] },
    { type:"order", id:"e2", title:"Zeitstrahl ordnen", prompt:"Tippe die Ereignisse vom ältesten zum jüngsten an.",
      items:["Die Erde entsteht","Erste Einzeller","Erste Fische","Riesige Steinkohlewälder","Dinosaurier","Die Dinosaurier sterben aus","Mammuts in der Eiszeit","Erste Menschen"] },
    { type:"quiz", id:"e3", title:"Fragen zur Erdgeschichte", questions:[
      { t:"open", q:"Wie alt ist die Erde ungefähr?", keys:[["4,6","4.6","viereinhalb","4 komma 6","milliard"]], muster:"Rund 4,6 Milliarden Jahre." },
      { t:"open", q:"Welche Lebewesen gab es zuerst auf der Erde, und wo lebten sie?", keys:[["einzeller","bakterie","alge"],["wasser","meer","ozean"]], muster:"Einzeller im Wasser (in den Urmeeren)." },
      { t:"open", q:"Wodurch entstand der Sauerstoff in der Luft?", keys:[["fotosynth","photosynth","pflanze","alge","einzeller"]], muster:"Durch Fotosynthese von einfachen Lebewesen (z. B. Blaualgen)." },
      { t:"open", q:"Warum sind die Dinosaurier ausgestorben?", keys:[["asteroid","meteor","komet","einschlag","stein aus dem all"]], muster:"Vor 66 Millionen Jahren schlug ein riesiger Asteroid ein." },
      { t:"mc", q:"In welchem Zeitalter lebten die Dinosaurier?", opts:["Erdfrühzeit","Erdaltertum","Erdmittelalter","Erdneuzeit"], a:2 },
      { t:"mc", q:"In welchem Zeitalter leben wir heute?", opts:["Erdfrühzeit","Erdaltertum","Erdmittelalter","Erdneuzeit"], a:3 }
    ]}
  ],
  cards: [
    ["Alter der Erde", "Rund 4,6 Milliarden Jahre"],
    ["Erdfrühzeit", "Erde entsteht, Urmeere, erste Einzeller, Sauerstoff durch Fotosynthese"],
    ["Erdaltertum", "Erste Fische, Leben erobert das Land, Steinkohlewälder"],
    ["Erdmittelalter", "Dinosaurier, erste Säugetiere und Vögel; Ende durch Asteroideneinschlag"],
    ["Erdneuzeit", "Säugetiere breiten sich aus, Eiszeiten, die Menschen entstehen"],
    ["Fotosynthese", "Pflanzen und Algen machen aus Licht, Wasser und Kohlendioxid Nährstoffe – dabei entsteht Sauerstoff."]
  ],
  test: [
    { t:"open", q:"Nenne die vier Zeitalter der Erdgeschichte in der richtigen Reihenfolge.", keys:[["frühzeit","fruehzeit"],["altertum"],["mittelalter"],["neuzeit"]], muster:"Erdfrühzeit, Erdaltertum, Erdmittelalter, Erdneuzeit.", ordered:true },
    { t:"open", q:"Wie alt ist die Erde ungefähr?", keys:[["4,6","4.6","viereinhalb","milliard"]], muster:"Rund 4,6 Milliarden Jahre." },
    { t:"open", q:"Was entstand durch die Fotosynthese der ersten Lebewesen?", keys:[["sauerstoff"]], muster:"Sauerstoff." },
    { t:"open", q:"Was ist aus den riesigen Wäldern des Erdaltertums geworden?", keys:[["kohle"]], muster:"Steinkohle." },
    { t:"mc", q:"Wann starben die Dinosaurier aus?", opts:["Vor 66 Millionen Jahren","Vor 6600 Jahren","Vor 4,6 Milliarden Jahren","Vor 100 Jahren"], a:0 },
    { t:"mc", q:"In welchem Zeitalter entstanden die Menschen?", opts:["Erdfrühzeit","Erdaltertum","Erdmittelalter","Erdneuzeit"], a:3 },
    { t:"mc", q:"Wenn die Erdgeschichte ein Tag wäre – wann tauchen die Menschen auf?", opts:["Am Morgen","Mittags","Am Abend um 18 Uhr","In den letzten Sekunden vor Mitternacht"], a:3 },
    { t:"mc", q:"Wo entstanden die ersten Lebewesen?", opts:["Im Wasser","In der Wüste","Im Wald","Auf Bergen"], a:0 }
  ]
},
// ---------------------------------------------------------------- 8
{
  id: "mensch", emoji: "🦴", color: "#6d5bd0", title: "Entwicklung des Menschen",
  short: "Vom Australopithecus zum Homo sapiens",
  learn: `
  <h3>Wo gehört der Mensch hin?</h3>
  <p>Forscher ordnen alle Tiere und Pflanzen in Gruppen ein: <b>Stamm – Klasse – Ordnung – Familie – Gattung – Art</b>. So sieht das bei uns Menschen aus:</p>
  <table class="tbl"><tr><td>Stamm</td><td>Chordatiere – Wirbeltiere</td></tr><tr><td>Klasse</td><td>Säugetiere</td></tr><tr><td>Ordnung</td><td>Primaten</td></tr><tr><td>Familie</td><td>Menschenaffen</td></tr><tr><td>Gattung</td><td>Homo (Mensch)</td></tr><tr><td>Art</td><td>Homo sapiens</td></tr></table>
  <div class="box def">Der Mensch stammt <b>nicht vom Affen ab</b>! Menschen und heutige Menschenaffen haben aber <b>gemeinsame Vorfahren</b>: die <b>Dryopithecinen</b> (Baumaffen). Sie lebten vor rund 20 Millionen Jahren.</div>
  <h3>Der Stammbaum</h3>
  <div class="tree" id="tree"></div>
  <p>Die ersten Menschen entstanden in <b>Afrika</b>. Von dort aus haben sie sich über die ganze Welt verbreitet.</p>
  <h3>Steckbriefe</h3>
  <div class="cards" id="profiles"></div>
  <div class="box tip">💡 <b>Homo sapiens</b> heißt „der weise (kluge) Mensch“. <b>Homo sapiens sapiens</b> („der doppelt kluge Mensch“) ist ein älterer Name für uns moderne Menschen, den viele Schulbücher benutzen. Forscherinnen und Forscher sagen heute meist einfach Homo sapiens. Auch die Cro-Magnon-Menschen waren schon moderne Menschen wie wir.</div>`,
  practice: [
    { type:"order", id:"n1", title:"Stammbaum ordnen", prompt:"Tippe vom ältesten zum jüngsten.",
      items:["Dryopithecinen (Baumaffen)","Australopithecus","Homo habilis","Homo erectus","Neandertaler","Homo sapiens (Cro-Magnon)"] },
    { type:"sort", id:"n2", title:"Wer war das?", prompt:"Tippe eine Aussage an und dann den passenden Menschen.",
      cats:[["au","Australopithecus"],["er","Homo erectus"],["ne","Neandertaler"],["sa","Homo sapiens"]],
      items:[["Ging schon aufrecht, war aber noch kein Mensch","au"],["Lebte vor ca. 3 Millionen Jahren","au"],["„Lucy“ ist ein berühmtes Skelett","au"],["„Der aufgerichtete Mensch“","er"],["Benutzte ein Hackmesser (Chopper)","er"],["Warf Speere bis zu 60 Meter weit","er"],["Benannt nach einem Tal bei Düsseldorf","ne"],["Gut an die Kälte der Eiszeit angepasst","ne"],["Starb vor etwa 40 000 Jahren aus","ne"],["Malte Tiere an Höhlenwände","sa"],["Wurde in der Jungsteinzeit sesshaft","sa"],["„Der weise Mensch“","sa"]] },
    { type:"write", id:"n3", title:"Steckbrief schreiben: Neandertaler", prompt:"Schreibe mit diesen Stichwörtern einen eigenen kurzen Text über den Neandertaler:", keywords:["vor ca. 200 000 bis 40 000 Jahren","Europa und Westasien","Eiszeit, kräftiger Körper","Jäger: Mammut, Rentier","Faustkeil, Holzspeer, Feuer","Felle, Höhlen und Zelte","bestatteten ihre Toten"],
      muster:"Der Neandertaler lebte vor ungefähr 200 000 bis 40 000 Jahren in Europa und Westasien. Damals war Eiszeit, deshalb hatte er einen kräftigen, gedrungenen Körper. Er jagte große Tiere wie Mammuts und Rentiere mit Holzspeeren und benutzte Faustkeile. Er konnte Feuer machen, trug Kleidung aus Fellen und wohnte in Höhlen und Zelten. Die Neandertaler bestatteten ihre Toten." },
    { type:"write", id:"n4", title:"Steckbrief schreiben: Cro-Magnon-Mensch", prompt:"Schreibe mit diesen Stichwörtern einen eigenen kurzen Text über den Cro-Magnon-Menschen:", keywords:["Homo sapiens, kam aus Afrika","seit ca. 40 000 Jahren in Europa","Jäger und Sammler, Nomaden","Speerschleuder, Harpune, Nähnadel aus Knochen","Höhlenmalereien, Schmuck, Figuren"],
      muster:"Der Cro-Magnon-Mensch war ein Homo sapiens. Seine Vorfahren kamen aus Afrika, in Europa lebte er seit ungefähr 40 000 Jahren. Er war Jäger und Sammler und zog als Nomade den Tieren hinterher. Er erfand neue Werkzeuge wie die Speerschleuder, Harpunen und Nähnadeln aus Knochen. Er malte Tiere an Höhlenwände und stellte Schmuck und kleine Figuren her." },
    { type:"write", id:"n5", title:"Steckbrief schreiben: Jungsteinzeitmensch", prompt:"Schreibe mit diesen Stichwörtern einen eigenen kurzen Text über die Menschen der Jungsteinzeit (Homo sapiens):", keywords:["in Mitteleuropa ab ca. 5500 v. Chr.","sesshaft, feste Häuser, Dörfer","Ackerbau (Getreide) und Viehzucht","Tongefäße, Weben","geschliffene Steinbeile"],
      muster:"In der Jungsteinzeit (in Mitteleuropa ab ungefähr 5500 v. Chr.) wurden die Menschen sesshaft. Sie bauten feste Häuser und lebten in Dörfern. Sie bauten Getreide an und hielten Tiere wie Schafe, Ziegen und Rinder. Sie stellten Gefäße aus Ton her, webten Stoffe und benutzten geschliffene Steinbeile." },
    { type:"quiz", id:"n6", title:"Fragen zu unseren Vorfahren", questions:[
      { t:"open", q:"Stammt der Mensch vom Affen ab? Erkläre.", keys:[["nein","nicht"],["vorfahr","gemeinsam","verwandt"]], muster:"Nein. Menschen und Menschenaffen haben aber gemeinsame Vorfahren (die Dryopithecinen)." },
      { t:"open", q:"Auf welchem Kontinent entstanden die ersten Menschen?", keys:[["afrika"]], muster:"In Afrika." },
      { t:"open", q:"Was bedeutet „Homo erectus“?", keys:[["aufgericht","aufrecht"]], muster:"Der aufgerichtete Mensch." },
      { t:"open", q:"Woher hat der Neandertaler seinen Namen?", keys:[["neandertal","tal"]], muster:"Vom Neandertal bei Düsseldorf, wo 1856 Knochen gefunden wurden." },
      { t:"open", q:"Was änderte sich in der Jungsteinzeit am Leben der Menschen?", keys:[["sesshaft","ackerbau","acker","viehzucht","häuser","dorf","dörfer","bauer","landwirtschaft","anbau"]], muster:"Sie wurden sesshaft: Ackerbau, Viehzucht, feste Häuser und Dörfer." },
      { t:"mc", q:"Welche Menschenform lebte vor ca. 3 Millionen Jahren?", opts:["Australopithecus","Neandertaler","Homo sapiens","Cro-Magnon"], a:0 }
    ]}
  ],
  cards: [
    ["Dryopithecinen", "Baumaffen – gemeinsame Vorfahren von Menschen und Menschenaffen"],
    ["Australopithecus", "„Südaffe“, vor ca. 3 Mio. Jahren in Afrika; ging schon aufrecht, war aber noch kein Mensch"],
    ["Homo habilis", "„Der geschickte Mensch“, stellte die ersten Steinwerkzeuge her"],
    ["Homo erectus", "„Der aufgerichtete Mensch“, vor ca. 1,6 Mio. Jahren; Chopper, Wurfspeer, Grashütten"],
    ["Neandertaler", "Lebte in der Eiszeit in Europa; Faustkeil, Feuer, Fellkleidung; starb vor ca. 40 000 Jahren aus"],
    ["Homo sapiens", "„Der weise Mensch“ – wir; entstand vor ca. 300 000 Jahren in Afrika"],
    ["Cro-Magnon-Mensch", "Früher Homo sapiens in Europa (seit ca. 40 000 Jahren); Höhlenmalereien"],
    ["Jungsteinzeit", "Menschen werden sesshaft: Ackerbau, Viehzucht, Häuser"]
  ],
  test: [
    { t:"open", q:"Was bedeutet „Homo sapiens“?", keys:[["weise","klug","wissend","vernünftig"]], muster:"Der weise (kluge) Mensch." },
    { t:"open", q:"Womit arbeitete der Homo erectus? Nenne ein Werkzeug oder eine Waffe.", keys:[["chopper","hackmesser","speer","faustkeil","stein"]], muster:"Mit einem Hackmesser (Chopper) und einem Wurfspeer." },
    { t:"open", q:"Wie hießen die gemeinsamen Vorfahren von Menschen und Menschenaffen?", keys:[["dryopith","baumaff"]], muster:"Dryopithecinen (Baumaffen)." },
    { t:"open", q:"Nenne zwei Dinge, die der Neandertaler konnte oder benutzte.", keys:[["feuer","faustkeil","speer","fell","kleid","jag","höhle","bestatt","werkzeug"]], muster:"Zum Beispiel: Feuer machen, mit Speeren jagen, Faustkeile benutzen, Kleidung aus Fellen tragen.", min:2 },
    { t:"open", q:"Wodurch wurden die Cro-Magnon-Menschen berühmt? (Tipp: Kunst)", keys:[["höhlenmal","malerei","malte","bilder","höhle","kunst","schmuck","figur"]], muster:"Durch ihre Höhlenmalereien (und Schmuck und Figuren)." },
    { t:"mc", q:"Wo entstanden die ersten Menschen?", opts:["In Europa","In Afrika","In Amerika","In Australien"], a:1 },
    { t:"mc", q:"Welche Reihenfolge stimmt (alt → jung)?", opts:["Homo sapiens → Neandertaler → Homo erectus","Australopithecus → Homo erectus → Homo sapiens","Homo erectus → Australopithecus → Neandertaler","Neandertaler → Australopithecus → Homo sapiens"], a:1 },
    { t:"mc", q:"Was ist richtig?", opts:["Der Mensch stammt vom Schimpansen ab.","Menschen und Menschenaffen haben gemeinsame Vorfahren.","Neandertaler leben heute noch.","Der Australopithecus konnte schon schreiben."], a:1 }
  ]
}
];

// Von Berlin aus (Haupt-/Nebenhimmelsrichtung)
const BERLIN_DIRS = [
  ["Hamburg","nw"],["München","s"],["Rostock","n"],["Frankfurt am Main","sw"],["Hannover","w"],["Stettin (Szczecin)","no"],["Warschau","o"],["Kopenhagen","n"],["Dresden","s"],["London","w"],["Moskau","o"],["Rom","s"],["Madrid","sw"],["Oslo","n"]
];
const DIR_NAMES = { n:"Norden", no:"Nordosten", o:"Osten", so:"Südosten", s:"Süden", sw:"Südwesten", w:"Westen", nw:"Nordwesten" };

const PROFILES = [
  { name:"Australopithecus", sub:"„Südaffe“", time:"vor ca. 4 bis 2 Mio. Jahren (Arbeitsblatt: ca. 3 Mio.)", where:"Afrika", facts:["Zwischenform zwischen Menschenaffen und Menschen","Ging schon aufrecht – das machte ihn aber noch nicht zum Menschen","Etwa 1,10 bis 1,40 m groß, aß vor allem Pflanzen und Früchte","Berühmt: das Skelett „Lucy“ (ca. 3,2 Mio. Jahre alt), 1974 in Äthiopien gefunden"] },
  { name:"Homo erectus", sub:"„Der aufgerichtete Mensch“", time:"vor ca. 1,6 Mio. Jahren", where:"Afrika, später auch Asien und Europa", facts:["Arbeitete mit ersten Werkzeugen, z. B. einem Hackmesser (Chopper)","Lebte in einfachen Grashütten, die vor Wind und Regen schützten","Trug noch keine Kleidung, aber hatte eine starke Körperbehaarung","Jagte mit dem Wurfspeer (bis zu 60 m weit) und sammelte Beeren, Nüsse, Eier und Pilze","Nutzte vermutlich schon das Feuer; erste Kunstwerke: geritzte Knochen"] },
  { name:"Neandertaler", sub:"benannt nach dem Neandertal bei Düsseldorf", time:"vor ca. 200 000 bis 40 000 Jahren", where:"Europa und Westasien", facts:["Lebte in der Eiszeit: kräftiger, gedrungener Körper gegen die Kälte","Jagte Mammuts und Rentiere mit Holzspeeren, benutzte Faustkeile","Konnte Feuer machen, trug Kleidung aus Fellen","Wohnte in Höhlen und Zelten und bestattete seine Toten","1856 wurden im Neandertal Knochen gefunden – daher der Name"] },
  { name:"Homo sapiens", sub:"„Der weise Mensch“ – in Europa: Cro-Magnon-Mensch", time:"seit ca. 300 000 Jahren (in Europa seit ca. 40 000 Jahren)", where:"entstanden in Afrika, dann auf der ganzen Welt", facts:["Benannt nach dem Fundort Cro-Magnon in Frankreich","Jäger und Sammler, die als Nomaden den Tieren folgten","Erfand Speerschleuder, Harpune und Nähnadeln aus Knochen","Malte Tiere an Höhlenwände und schnitzte Figuren und Schmuck"] },
  { name:"Homo sapiens sapiens", sub:"„Der doppelt weise Mensch“ – das sind wir", time:"Jungsteinzeit (in Mitteleuropa ab ca. 5500 v. Chr.) bis heute", where:"auf der ganzen Welt", facts:["Älterer Name für uns heutige Menschen (heute meist nur Homo sapiens)","In der Jungsteinzeit wurden die Menschen sesshaft","Ackerbau (Getreide) und Viehzucht statt nur Jagen und Sammeln","Feste Häuser, Dörfer, Tongefäße, Weben, geschliffene Steinbeile"] }
];

// Ungewöhnliche Karten: Nummern zum Beschriften
const MAP_LABEL_SETS = {
  globeTilt: { intro:"Die Erde ist gekippt – Norden ist hier nicht oben! Schreibe zu jeder Nummer, was dort ist (Kontinent, Meer, Land oder Insel).",
    items:[["Afrika",[20,5],["afrika"]],["Madagaskar",[46.8,-19.5],["madagaskar"]],["Indischer Ozean",[75,-15],["indisch"]],["Indien",[78,22],["indien"]],["Asien",[95,50],["asien"]],["Kaspisches Meer",[50.6,41.5],["kaspi"]],["Australien",[134,-25],["australien"]],["Europa",[25,52],["europa"]]] },
  southUp: { intro:"Hier ist Süden oben und der Pazifik in der Mitte. Was verbirgt sich hinter den Nummern?",
    items:[["Pazifik",[-155,-5],["pazif","still"]],["Nordamerika",[-100,47],["nordamerika"]],["Südamerika",[-60,-12],["südamerika","suedamerika"]],["Australien",[134,-25],["australien"]],["Japan",[138.5,36.5],["japan"]],["Asien",[95,50],["asien"]],["Antarktis",[150,-77],["antarkt"]],["Grönland",[-42,71],["grönland","groenland"]],["Atlantik",[-35,20],["atlant"]]] },
  polar: { intro:"Wir schauen von oben auf den Nordpol. Welche Kontinente, Meere und Inseln erkennst du?",
    items:[["Nordpolarmeer",[40,86],["nordpolar","arktis","arktisch","eismeer"]],["Grönland",[-41,73],["grönland","groenland"]],["Europa",[3,47],["europa"]],["Ostsee",[19.5,57.5],["ostsee"]],["Nordamerika",[-100,47],["nordamerika"]],["Asien",[95,52],["asien"]],["Afrika",[20,8],["afrika"]],["Atlantik",[-35,30],["atlant"]],["Pazifik",[-170,30],["pazif","still"]]] },
  oceanSouth: { intro:"Eine Weltkarte auf dem Kopf. Schreibe zu jeder Nummer den Namen des Meeres oder Kontinents.",
    items:[["Pazifik",[-140,0],["pazif","still"]],["Atlantik",[-30,-20],["atlant"]],["Indischer Ozean",[80,-25],["indisch"]],["Nordpolarmeer",[0,85],["nordpolar","arktis","arktisch","eismeer"]],["Afrika",[20,5],["afrika"]],["Südamerika",[-60,-12],["südamerika","suedamerika"]],["Australien",[134,-25],["australien"]]] }
};

// ================= GROSSER ABSCHLUSSTEST =================
// pts = Punkte. Offene Fragen: Teilpunkte je gefundener Schlüsselgruppe (bzw. je Treffer bei "min").
const FINAL_EXAM = {
  minutes: 45,
  grades: [[96,1,"sehr gut"],[80,2,"gut"],[60,3,"befriedigend"],[45,4,"ausreichend"],[16,5,"mangelhaft"],[0,6,"ungenügend"]],
  sections: [
  { title:"Gewi und seine Bereiche", emoji:"🧩", tasks:[
    { t:"open", pts:1, q:"Schreibe die Abkürzung „Gewi“ aus.", keys:[["gesellschaftswissenschaft"]], muster:"Gesellschaftswissenschaften" },
    { t:"open", pts:1, q:"Was lernt man im Fach Gewi? Antworte in einem Satz.", keys:[["zusammen","miteinander","gesellschaft"]], muster:"Wie Menschen zusammenleben – heute, früher und an verschiedenen Orten der Erde." },
    { t:"open", pts:3, q:"Nenne die drei Bereiche von Gewi.", keys:[["geschicht"],["geograf","geograph","erdkunde"],["politi"]], muster:"Geschichte, Geografie, Politik (Politische Bildung)" },
    { t:"sort", pts:3, q:"Ordne jedes Thema dem richtigen Bereich zu.", cats:[["ges","Geschichte"],["geo","Geografie"],["pol","Politik"]],
      items:[["Neandertaler","ges"],["Weltmeere","geo"],["Klassensprecherwahl","pol"],["Alte Münzen","ges"],["Himmelsrichtungen","geo"],["Regeln im Verein","pol"]] },
    { t:"mc", pts:1, q:"Welche Aussage über Gruppen stimmt?", opts:["In Gruppen kann jeder tun, was er will.","In Gruppen gelten Regeln.","In Gruppen gibt es nie Streit.","In Gruppen hat man keine Pflichten."], a:1 },
    { t:"open", pts:1, q:"Max kommt immer zu spät zum Fußballtraining. Nenne eine mögliche Konsequenz.", keys:[["enttäusch","aufgestellt","bank","nicht spielen","ärger","trainer","strafe","sauer","wütend","nicht mitspielen","raus","runden","laufen"]], muster:"Er enttäuscht sein Team und wird zum Beispiel nicht aufgestellt." }
  ]},
  { title:"Quellen", emoji:"🏺", tasks:[
    { t:"open", pts:1, q:"Was ist eine geschichtliche Quelle?", keys:[["vergangen","früher","alt","geschichte"]], muster:"Alles, was aus der Vergangenheit übrig geblieben ist und uns etwas über sie verrät." },
    { t:"open", pts:3, q:"Nenne die drei Arten von geschichtlichen Quellen.", keys:[["überrest","ueberrest"],["bild","ton"],["schrift"]], muster:"Überreste, Bild- und Tonquellen, Schriftquellen" },
    { t:"sort", pts:3, q:"Ordne jede Quelle der richtigen Quellenart zu.", cats:[["ue","Überreste"],["bt","Bild- und Tonquellen"],["sc","Schriftquellen"]],
      items:[["Faustkeil","ue"],["Schallplatte","bt"],["Brief","sc"],["Münze","ue"],["Fotografie","bt"],["Zeitung","sc"]] },
    { t:"open", pts:2, q:"Erkläre, was ein Fossil ist.", keys:[["versteinert","stein"],["lebewes","tier","pflanze","knochen","muschel","abdruck","dinosaur"]], muster:"Ein versteinerter Überrest eines Lebewesens, z. B. ein Knochen, eine Muschel oder ein Pflanzenabdruck." }
  ]},
  { title:"Himmelsrichtungen", emoji:"🧭", tasks:[
    { t:"open", pts:1, q:"Wie lautet der Merksatz für die vier Haupthimmelsrichtungen?", keys:[["nie"],["ohne"],["seife"],["wasch"]], muster:"Nie Ohne Seife Waschen" },
    { t:"open", pts:2, q:"Nenne die vier Nebenhimmelsrichtungen.", keys:[["nordost","=no"],["südost","suedost","=so"],["südwest","suedwest","=sw"],["nordwest","=nw"]], muster:"Nordosten, Südosten, Südwesten, Nordwesten" },
    { t:"open", pts:1, q:"In welcher Himmelsrichtung geht die Sonne unter?", keys:[["=westen","=w","=west"]], muster:"Im Westen." },
    { t:"grid", pts:3, q:"Kästchen-Wanderung wie auf dem Arbeitsblatt: Starte beim Kästchen mit dem ★. Mache bei jedem Schritt ein Kreuz in das Kästchen, auf dem du landest. Oben ist Norden.", n:6, start:[1,1], steps:[["o",3],["s",2],["sw",1]] },
    { t:"open", pts:1, q:"In welcher Himmelsrichtung liegt Hamburg von Berlin aus?", keys:[["=nw","=nordwesten","=nordwest"]], muster:"Im Nordwesten (NW)." },
    { t:"open", pts:1, q:"In welcher Himmelsrichtung liegt Warschau von Berlin aus?", keys:[["=o","=osten","=ost"]], muster:"Im Osten (O)." },
    { t:"mc", pts:1, q:"Wohin zeigt die Nadel eines Kompasses?", opts:["Nach Osten","Nach Süden","Nach Norden","Nach Westen"], a:2 }
  ]},
  { title:"Kontinente", emoji:"🌍", tasks:[
    { t:"open", pts:3, q:"Nenne alle sieben Kontinente.", keys:[["asien"]], min:7, pool:["asien","afrika","nordamerika","südamerika","antarktis","europa","australien"], muster:"Asien, Afrika, Nordamerika, Südamerika, Antarktis, Europa, Australien" },
    { t:"maptap", pts:1, q:"Achtung, die Karte steht auf dem Kopf! Tippe auf Australien.", view:"southUp", target:{kind:"cont", id:"AU"}, muster:"Australien" },
    { t:"maplabel", pts:4, q:"Wir schauen von oben auf den Nordpol. Schreibe zu jeder Nummer den richtigen Namen.", view:"polar",
      items:[["Europa",[3,47],["europa"]],["Nordamerika",[-100,47],["nordamerika"]],["Grönland",[-42,71],["grönland","groenland"]],["Afrika",[20,8],["afrika"]]] },
    { t:"open", pts:1, q:"Welcher ist der größte Kontinent?", keys:[["asien"]], muster:"Asien" },
    { t:"open", pts:1, q:"Welches Gebirge bildet einen Teil der Grenze zwischen Europa und Asien?", keys:[["ural"]], muster:"Das Uralgebirge" }
  ]},
  { title:"Die drei Weltmeere", emoji:"🌊", tasks:[
    { t:"open", pts:3, q:"Nenne die drei Weltmeere.", keys:[["pazif","still"],["atlant"],["indisch"]], muster:"Pazifik, Atlantik, Indischer Ozean" },
    { t:"maptap", pts:1, q:"Diese Karte ist zur Seite gedreht. Tippe auf den Indischen Ozean.", view:"sideways", target:{kind:"ocean", id:"indik"}, muster:"Indischer Ozean" },
    { t:"open", pts:1, q:"Welchen Ozean überquert man auf dem Weg von Europa nach Amerika?", keys:[["atlant"]], muster:"Den Atlantik" },
    { t:"mc", pts:1, q:"Zu welchem Ozean gehört die Ostsee?", opts:["Pazifik","Atlantik","Indischer Ozean"], a:1 },
    { t:"open", pts:1, q:"Das Kaspische Meer heißt zwar „Meer“. Was ist es eigentlich?", keys:[["=see","binnensee","größter see","groesster see"]], muster:"Ein See (der größte See der Erde)." },
    { t:"mc", pts:1, q:"Wie viel der Erdoberfläche ist ungefähr mit Wasser bedeckt?", opts:["Ein Viertel","Die Hälfte","Zwei Drittel","Fast nichts"], a:2 }
  ]},
  { title:"Entwicklung der Erde", emoji:"🌋", tasks:[
    { t:"order", pts:2, q:"Bringe die Zeitalter der Erdgeschichte in die richtige Reihenfolge (vom ältesten zum jüngsten).", items:["Erdfrühzeit","Erdaltertum","Erdmittelalter","Erdneuzeit"] },
    { t:"sort", pts:4, q:"Ordne jedes Ereignis dem richtigen Zeitalter zu.", cats:[["e1","Erdfrühzeit"],["e2","Erdaltertum"],["e3","Erdmittelalter"],["e4","Erdneuzeit"]],
      items:[["Erste Einzeller","e1"],["Sauerstoff durch Fotosynthese","e1"],["Erste Fische","e2"],["Steinkohlewälder","e2"],["Dinosaurier","e3"],["Asteroideneinschlag","e3"],["Mammuts","e4"],["Erste Menschen","e4"]] },
    { t:"open", pts:1, q:"Wie alt ist die Erde ungefähr?", keys:[["4,6","4.6","viereinhalb","milliard"]], muster:"Rund 4,6 Milliarden Jahre" },
    { t:"open", pts:1, q:"Warum sind die Dinosaurier ausgestorben?", keys:[["asteroid","meteor","komet","einschlag"]], muster:"Vor 66 Millionen Jahren schlug ein riesiger Asteroid ein." }
  ]},
  { title:"Entwicklung des Menschen", emoji:"🦴", tasks:[
    { t:"order", pts:2, q:"Ordne vom ältesten zum jüngsten.", items:["Australopithecus","Homo erectus","Neandertaler","Homo sapiens"] },
    { t:"open", pts:2, q:"Stammt der Mensch vom Affen ab? Begründe deine Antwort.", keys:[["nein","nicht"],["vorfahr","gemeinsam","verwandt"]], muster:"Nein. Menschen und Menschenaffen haben aber gemeinsame Vorfahren (die Dryopithecinen)." },
    { t:"open", pts:1, q:"Was bedeutet „Homo erectus“?", keys:[["aufgericht","aufrecht"]], muster:"Der aufgerichtete Mensch" },
    { t:"open", pts:2, q:"Nenne zwei Dinge, die der Neandertaler konnte oder benutzte.", keys:[["feuer","faustkeil","speer","fell","kleid","jag","höhle","bestatt","werkzeug","zelt"]], min:2, muster:"Zum Beispiel: Feuer machen, mit Speeren jagen, Faustkeile benutzen, Kleidung aus Fellen tragen." },
    { t:"open", pts:1, q:"Was änderte sich in der Jungsteinzeit am Leben der Menschen?", keys:[["sesshaft","ackerbau","acker","viehzucht","häuser","dorf","dörfer","bauer","landwirtschaft","anbau"]], muster:"Sie wurden sesshaft: Ackerbau, Viehzucht, feste Häuser und Dörfer." },
    { t:"mc", pts:1, q:"Auf welchem Kontinent entstanden die ersten Menschen?", opts:["Europa","Asien","Afrika","Australien"], a:2 }
  ]}
  ]
};
