(this["webpackJsonppersonality-prediction"]=this["webpackJsonppersonality-prediction"]||[]).push([[0],{187:function(e,n,t){},188:function(e,n,t){},208:function(e,n,t){},213:function(e,n){},214:function(e,n){},215:function(e,n){},219:function(e,n){},221:function(e,n){},232:function(e,n){},234:function(e,n){},259:function(e,n){},261:function(e,n){},262:function(e,n){},268:function(e,n){},270:function(e,n){},288:function(e,n){},290:function(e,n){},302:function(e,n){},305:function(e,n){},331:function(e,n,t){},332:function(e,n,t){},339:function(e,n,t){"use strict";t.r(n);var i=t(4),r=t(1),s=t.n(r),a=t(20),c=t.n(a),o=(t(187),t(29)),d=(t(188),t(62)),u=t(78),h=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(u.a,{bg:"light",expand:"lg",fixed:"top",children:[Object(i.jsx)(u.a.Brand,{href:"/",children:"COINs Personality Prediction"}),Object(i.jsx)(u.a.Collapse,{id:"basic-navbar-nav"})]})})},l=t(168),b=t.n(l),g=(t(208),t(31)),f=t(357),j=t(358),m=t(360),p=t(359),w=t(63),O=t.n(w),k=t(104),x=t(30),S=Object(r.createContext)(null),v=function(){var e=s.a.useRef(),n=Object(r.useContext)(S),t=(n.emotions,n.setEmotions),a=Object(r.useState)(!0),c=Object(o.a)(a,2);c[0],c[1];return Object(r.useEffect)((function(){Promise.all([x.f.tinyFaceDetector.loadFromUri("/models"),x.f.faceLandmark68Net.loadFromUri("/models"),x.f.faceRecognitionNet.loadFromUri("/models"),x.f.faceExpressionNet.loadFromUri("/models")]).then(Object(k.a)(O.a.mark((function e(){var t,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={audio:!1,video:{width:1080,height:720}},i=document.querySelector("video"),e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia(t);case 5:n=e.sent,i.srcObject=n,i.onloadedmetadata=function(e){i.play()},e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.name+": "+e.t0.message);case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,null,[[2,10]])}))));var n,i=[];return e.current.addEventListener("play",(function(){var n=x.b(e.current);document.body.append(n);var r={width:e.current.width,height:e.current.height};x.e(n,r);var s=setInterval(Object(k.a)(O.a.mark((function i(){var s,a;return O.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,x.c(e.current,new x.a).withFaceLandmarks().withFaceExpressions();case 2:s=i.sent,a=x.g(s,r),"undefined"===typeof s[0]?t((function(e){return[].concat(Object(d.a)(e),["undefined"])})):t((function(e){return[].concat(Object(d.a)(e),[s[0].expressions])})),n.getContext("2d").clearRect(0,0,n.width,n.height),x.d.drawFaceLandmarks(n,a);case 7:case"end":return i.stop()}}),i)}))),100);i.push((function(){return clearInterval(s)}))})),function(){n.getTracks()[0].stop(),i.forEach((function(e){return e()}))}}),[]),Object(i.jsx)("video",{ref:e,width:"180",height:"140",autoPlay:!0,muted:!0})},E=t(169),z=t.n(E),D=(t(331),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{className:"black",children:Object(i.jsx)("a",{href:"https://coinproject82.compel.ch/privacypolicy",children:" Privacy policy"})})})}),B=t(58);t(332);var I=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(h,{}),Object(i.jsxs)("div",{className:"datenschutz_position",children:[Object(i.jsx)("h1",{children:" DATENSCHUTZERKL\xc4RUNG "}),Object(i.jsx)("p",{children:"DAS WICHTIGSTE IN K\xdcRZE "}),Object(i.jsx)("p",{children:"Diese Website ist mit einem TLS-Zertifikat versehen, der Datenaustausch mit Ihrem Browser erfolgt verschl\xfcsselt. Diese Website kann ohne funktionelle Einschr\xe4nkungen besucht werden, selbst wenn Ihr Browser keine Cookies zul\xe4sst. In diese Website sind keine Funktionen eingebunden die R\xfcckschl\xfcsse auf Ihre Person zulassen. Ihre Daten werden ohne ausdr\xfcckliche Zustimmung nicht mit Parteien ausserhalb von Tim Sch\xe4fer & geteilt. A. EMPFEHLUNG Melden Sie sich bei Social Media-App und Online-Konten ab, bevor Sie Websites besuchen (z.B. bei YouTube, Facebook, LinkedIn, Instagram, Pinterest, Twitter etc.). Andernfalls wird Ihr Surfverhalten von den Anbietern dieser Dienste aufgezeichnet und Ihrem Profil zugeordnet. Ohne vorherige Abmeldung zeichnen diese Anbieter auch den Besuch dieser Website auf, obwohl auf dieser Website keine Verbindungen zu solchen Anbietern eingebunden sind. B. DATENSCHUTZBEAUFTRAGTER Herr Tim Sch\xe4fer, Subbelrather Stra\xdfe 168, 50823 K\xf6ln Kontakt"}),Object(i.jsx)("p",{children:"C. KURZFASSUNG ZUM UMGANG MIT PERSONENBEZOGENEN DATEN Personenbezogene Angaben werden gel\xf6scht, sofern innert angemessener Zeit kein Vertragsverh\xe4ltnis zustande kommt, Gew\xe4hrleistungsfristen abgelaufen sind oder wenn Sie das w\xfcnschen und diesem Begehren weder gesetzliche noch richterliche Einschr\xe4nkungen entgegenstehen."}),Object(i.jsx)("p",{children:"D. GESETZLICHES Wir sind gem\xe4ss Art. 13 der schweizerischen Bundesverfassung und dem schweizerischen Bundesgesetz \xfcber den Datenschutz DSG sowie \u2013 wo zutreffend \u2013 gem\xe4ss Datenschutzgrundverordnung EU-DSGVO zum Schutz personenbezogener Daten verpflichtet. Wir haben alle in unserem Einflussbereich stehenden Vorkehrungen und Massnahmen getroffen sowie alle m\xf6glichen Vereinbarungen mit externen Dienstleistern abgeschlossen, damit wir den Schutz dieser Daten nach bestem Wissen und Gewissen online und offline gew\xe4hrleisten k\xf6nnen."}),Object(i.jsx)("p",{children:"E. TECHNISCHES Wir haben technische Vorkehrungen getroffen, damit Ihr Besuch dieser Website m\xf6glichst anonym und Ihre Privatsph\xe4re gewahrt bleibt. Diese Website erf\xfcllt die Anforderungen an \xabData Protection by Design\xbb und \xabData Protection by Default\xbb."}),Object(i.jsx)("p",{children:"Im Detail 1. BESUCH UNSERER WEBSITE, SERVER-LOGFILES  W\xe4hrend der Verbindung Ihres Browsers mit unserer Website werden folgende Informationen (Server-Logfiles) zwischen Ihrem Browser und unserem Website-Hoster ausgetauscht: Datum und Zeitpunkt des Aufrufs unserer Website Die aufgerufenen Dateien (Texte, Grafiken, Fotos, Videos etc.) Der HTTP-Status der Anfrage (Datei gefunden, Datei nicht gefunden etc.) Der von Ihnen verwendete Browser (z.B. Firefox), die Browserversion (z.B. 61.0.2) sowie die Browsereinstellungen (z.B. bevorzugte Sprache) Das verwendete Betriebssystem und seine Version (z.B. Windows 10, Version 64-Bit) Die \xfcbermittelte Datenmenge (z.B. 198'979 Bytes) Die anfragende IP-Adresse (z.B. 188.60.244.121) Diese Angaben sind f\xfcr den IP-Verbindungsaufbau zwingend notwendig, lassen keine R\xfcckschl\xfcsse auf Ihre Person zu und werden von uns nicht ausgewertet. Unser Hoster speichert diese Zugriffsdaten so lange, wie Sie auf unsere Website zugreifen. Besteht keine gesetzliche Aufbewahrungspflicht, werden die Logfiles unmittelbar nach Beendigung Ihres Websitebesuches gel\xf6scht respektive durch aktuellere Logfiles \xfcberschrieben.  Was ist eine IP-Adresse?"}),Object(i.jsx)("p",{children:"2. ANALYSE-TOOLS Diese Website setzt das Analyse-Tool Google Analytics (Google Marketing Platform) ein. Ihre IP-Adresse wird jedoch in der Regel innerhalb der Schweiz/der EU/des EWR anonymisiert und erst anschliessend auf Google-Server in den USA \xfcbertragen, den entsprechenden Vertrag mit Google haben wir abgeschlossen. Deshalb wird Google mit gr\xf6sster Wahrscheinlichkeit nicht von Ihrem Besuch dieser Website erfahren, es sei denn, Sie sind w\xe4hrend dem Besuch dieser Website bei einem pers\xf6nlichen Google-Konto angemeldet (Google-Konto \xabmyaccount\xbb, YouTube, Google Maps etc.)."}),Object(i.jsx)("p",{children:"Google Analytics zeichnet in unserem Auftrag \xfcberweisende und direkte Zugriffe auf diese Website sowie Bewegungsmuster innerhalb dieser Website auf und stellt uns diese Daten zur Verf\xfcgung, damit wir erfahren, welche Websites auf unsere Website verlinken, unter welchen Suchbegriffen diese Website bei welchen Suchmaschinen gefunden wurde und wie oft welche Inhaltseiten aufgerufen wurden. Aus diesem Grund setzt Google Analytics beim Besuch dieser Website sowohl fl\xfcchtige Cookies (Session-Cookies) als auch dauerhafte Cookies. Fl\xfcchtige Cookies werden beim Schliessen des Browsers wieder gel\xf6scht, dauerhafte Cookies verbleiben mit einer Wirkungsdauer von l\xe4ngstens 14 Monate auf Ihrem Endger\xe4t."}),Object(i.jsx)("p",{children:"Wir haben Google Analytics wie folgt konfiguriert Es bestehen keine Verkn\xfcpfungen zu anderen Diensten der 'Google Marketing Platform', zum Beispiel zu Google Ads. Die Nutzer-Neuerkennung ist deaktiviert. Die Funktion zur Wiedererkennung auf anderen Websites als dieser ist deaktiviert. Falls Sie Google Analytics grunds\xe4tzlich nie zulassen wollen, installieren Sie das Browser Add-on zur Deaktivierung von Google Analytics. Download: https://tools.google.com/dlpage/gaoptout"}),Object(i.jsx)("p",{children:"Erg\xe4nzende Informationen von Google zum Analyse-Tool Google Analytics"}),Object(i.jsx)("p",{children:"Um mehr \xfcber das Zulassen, das selektive Zulassen, das Verhindern und das L\xf6schen von Cookies zu erfahren, lesen Sie bitte die Datei"}),Object(i.jsx)("p",{children:" Was sind Cookies?"}),Object(i.jsx)("p",{children:"3. SCRIPT-BIBLIOTHEKEN Auf dieser Website kommen JavaScript zum Einsatz. JavaScript werden genutzt, um optische und inhaltliche Funktionen zu steuern, zum Beispiel die auf- und zuklappenden Fragen-Balken im Kapitel Digitale Transformation. JavaScript sind auf dieser Website lokal eingebunden, es bestehen keine externen Links zu Script-Bibliotheken. Deshalb erf\xe4hrt kein Betreiber einer Script-Bibliothek von Ihrem Besuch dieser Website."}),Object(i.jsx)("p",{children:"4. SCHRIFTEN-BIBLIOTHEKEN  Auf dieser Website werden Webfonts angezeigt. Webfonts sind Schriften, die in allen Browsern ein einheitliches Erscheinungsbild gew\xe4hrleisten. Die von uns benutzten Webfonts sind lokal eingebunden, es bestehen keine externen Links zu Schriften-Bibliotheken. Deshalb erf\xe4hrt kein Betreiber einer Schriften-Bibliothek von Ihrem Besuch dieser Website."}),Object(i.jsx)("p",{children:"5. VERWEISINFORMATIONEN Beim Bet\xe4tigen eines Links auf einer Website A mit dem Ziel Website B senden Browser automatisch die Internet-Adresse der Website A an den Betreiber der Website B. Auf diese Weise erf\xe4hrt der Betreiber der Website B, dass ein Besucher seiner Website einen Link auf der Website A bet\xe4tigt hat. Zum Schutz Ihrer Privatsph\xe4re haben wir auf dieser Website die Weiterleitung dieser Verweisinformation an andere blockiert."}),Object(i.jsx)("p",{children:"6. SHARE- UND LIKE-FUNKTIONEN  Auf dieser Website sind keine Share- oder Like-Funktionen eingebunden. Beachten Sie bitte trotzdem den Abschnitt A. EMPFEHLUNG."}),Object(i.jsx)("p",{children:"7. ERHEBUNG UND UMGANG MIT PERSONENBEZOGENEN DATEN  Wenn Sie eine Frage an uns richten, von uns eine Offerte verlangen oder uns mit einem Auftrag betrauen, erheben wir diejenigen Daten die notwendig sind, um Ihren Anliegen zu entsprechen. Diese Daten werden ohne Ihre ausdr\xfcckliche Zustimmung nicht mit Parteien ausserhalb von COINs Seminar geteilt. Personenbezogene Angaben werden gel\xf6scht, sofern innert angemessener Zeit kein Vertragsverh\xe4ltnis zustande kommt, Gew\xe4hrleistungsfristen abgelaufen sind oder wenn Sie das w\xfcnschen und diesem Begehren weder gesetzliche noch richterliche Einschr\xe4nkungen entgegenstehen."}),Object(i.jsx)("p",{children:"8. IHRE RECHTE  Sie haben die M\xf6glichkeit, bei allen Daten mit Bezug zu Ihrer Person die folgenden, kostenfreien Rechte wahrzunehmen"}),Object(i.jsx)("p",{children:"Das Recht auf Auskunft \xfcber die Herkunft, die Weitergabe, den Erhebungs- und Verwendungszweck, die geplante Dauer der Speicherung sowie die Art der Verarbeitung Das Recht auf Berichtigung Ihrer Daten, zum Beispiel Richtigstellung, K\xfcrzung oder Erg\xe4nzung. Das Recht auf Einschr\xe4nkung der Verarbeitung hinsichtlich der zeitlichen Verwendungsdauer und des Sachbezugs, inklusive Widerruf bereits erteilter Erlaubnisse Das Recht auf L\xf6schung oder Sperrung derjenigen Daten, die Ihre Person betreffen Das Recht auf Beschwerde bei der zust\xe4ndigen Aufsichtsbeh\xf6rde. In der Schweiz ist das der Eidgen\xf6ssische Datenschutz- und \xd6ffentlichkeitsbeauftragte (ED\xd6B). https://www.edoeb.admin.ch Wo wir Anfragen zu den Punkten 1. bis 4. nicht zweifelsfrei zuordnen k\xf6nnen, behalten wir uns vor, uns der Identit\xe4t der anfragenden Person zu versichern und Kopien von aussagekr\xe4ftigen Unterlagen zu verlangen. F\xfcr die Wahrnehmung der Rechte 1. bis 4. kontaktieren Sie bitte den Datenschutzbeauftragten."}),Object(i.jsx)("p",{children:"9. ANPASSUNG DER DATENSCHUTZERKL\xc4RUNG  Sobald wir auf dieser Website Funktionen oder Verlinkungen hinzuf\xfcgen, ver\xe4ndern oder l\xf6schen, passen wir diese Datenschutzerkl\xe4rung an. Das Datum der letztmaligen Aktualisierung wird Ihnen zuoberst in diesem Kapitel angezeigt. Die j\xfcngste Datenschutzerkl\xe4rung ersetzt jeweils alle vorhergehenden Versionen."}),Object(i.jsx)("p",{children:"10. GANZ ZUM SCHLUSS  Der Zugriff auf Websites und Online-Shops sowie das Versenden und Empfangen von E-Mails ist nie absolut sicher. Zahlreiche Sicherheitsbeh\xf6rden und Geheimdienste \xfcberwachen die Nutzung des Internet ohne richterliche Erlaubnis und sammeln Informationen, die nicht in Zusammenhang mit einem konkreten Verdachtsmoment oder einer Straftat stehen."})]})]})},A=function(){var e=Object(r.useState)(!0),n=Object(o.a)(e,2),t=n[0],s=n[1],a=Object(r.useState)(""),c=Object(o.a)(a,2),u=c[0],l=c[1],w=Object(r.useState)([]),O=Object(o.a)(w,2),k=O[0],x=O[1],E=Object(r.useContext)(S),I=E.emotions,A=E.setEmotions,W=Object(r.useState)(!1),N=Object(o.a)(W,2),y=N[0],G=N[1],T=Object(r.useState)(!1),R=Object(o.a)(T,2),P=R[0],C=R[1],F=Object(r.useState)(null),U=Object(o.a)(F,2),L=(U[0],U[1]);return Object(r.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:u,emotions:k})};fetch("/facerecognition/users",e).then((function(e){return e.json()})).then((function(e){return L(e.id)}))}),[P]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{}),Object(i.jsx)(g.a,{show:t,size:"xl",children:Object(i.jsxs)(g.a.Dialog,{size:"xl",children:[Object(i.jsx)(g.a.Header,{children:Object(i.jsx)(g.a.Title,{children:"Research"})}),Object(i.jsxs)(g.a.Body,{children:[Object(i.jsx)("p",{children:"Please put in your Happimeter Email address:"}),Object(i.jsxs)(f.a,{children:[Object(i.jsx)(j.a,{xs:6,md:4,children:Object(i.jsx)("div",{className:"email",children:Object(i.jsx)(p.a,{placeholder:"Email",name:"email",onChange:function(e){return l(z.a.AES.encrypt(JSON.stringify(e.target.value),"JGvFdH7swkWJG5xuhycGSmDvcBydaQxJ4C3YEsNZppNnbR").toString())}})})}),Object(i.jsx)(j.a,{xs:12,md:8,children:Object(i.jsxs)("p",{className:"font_position",children:[" If you have not completed the happimeter surveys yet, please proceed and do them before. Click ",Object(i.jsx)("a",{href:"https://www.happimeter.org",children:"here"}),"."]})})]}),Object(i.jsxs)("div",{className:"data",children:[Object(i.jsx)("input",{type:"checkbox",name:"example",onClick:function(){G(!y)}}),Object(i.jsxs)("label",{className:"chechbox",children:["I accept the collection and storage of my emotion data for research purposes.",Object(i.jsx)("div",{})]}),Object(i.jsxs)("p",{children:[" Click ",Object(i.jsx)(B.b,{to:"/privacypolicy",children:" here  "})," for more details! "]})]})]}),Object(i.jsx)(m.a,{onClick:function(){s(!y||!u)},children:"Start Video"})]})}),Object(i.jsx)(g.a,{show:P,children:Object(i.jsxs)(g.a.Dialog,{size:"xl",children:[Object(i.jsx)(g.a.Header,{children:Object(i.jsx)(g.a.Title,{children:"Happiemeter Research"})}),Object(i.jsx)(g.a.Body,{children:Object(i.jsx)("p",{children:"Thanks for your emotions"})})]})}),Object(i.jsx)("div",{className:"camera",children:Object(i.jsx)(v,{})}),")",Object(i.jsx)("div",{style:{pointerEvents:"none"},children:Object(i.jsx)("div",{className:"video",children:Object(i.jsx)(b.a,{playing:!t,url:"https://www.youtube.com/watch?v=QTQwxStFEGY&feature=youtu.be",config:{youtube:{playerVars:{disablekb:1}}},onProgress:function(e){x([].concat(Object(d.a)(k),[[e.playedSeconds,I]])),A([])},onEnded:function(e){C(!0)}})})}),Object(i.jsx)(D,{})]})},W=t(13);var N=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],s=n[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(B.a,{children:Object(i.jsxs)(S.Provider,{value:{emotions:t,setEmotions:s},children:[Object(i.jsx)(W.a,{path:"/",exact:!0,component:A}),Object(i.jsx)(W.a,{path:"/privacypolicy",exact:!0,component:I})]})})})},y=(t(338),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,361)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),i(e),r(e),s(e),a(e)}))});c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),y()}},[[339,1,2]]]);
//# sourceMappingURL=main.c5e84be1.chunk.js.map