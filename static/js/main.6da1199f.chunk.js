(this["webpackJsonppersonality-prediction"]=this["webpackJsonppersonality-prediction"]||[]).push([[0],{187:function(e,t,o){},188:function(e,t,o){},208:function(e,t,o){},213:function(e,t){},214:function(e,t){},215:function(e,t){},219:function(e,t){},221:function(e,t){},232:function(e,t){},234:function(e,t){},259:function(e,t){},261:function(e,t){},262:function(e,t){},268:function(e,t){},270:function(e,t){},288:function(e,t){},290:function(e,t){},302:function(e,t){},305:function(e,t){},331:function(e,t,o){},337:function(e,t,o){},339:function(e,t,o){"use strict";o.r(t);var i=o(4),s=o(1),n=o.n(s),r=o(21),a=o.n(r),c=(o(187),o(19)),l=(o(188),o(62)),d=o(78),h=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d.a,{bg:"light",expand:"lg",fixed:"top",children:[Object(i.jsx)(d.a.Brand,{href:"/",children:"COINs Personality Prediction"}),Object(i.jsx)(d.a.Collapse,{id:"basic-navbar-nav"})]})})},u=o(168),b=o.n(u),p=(o(208),o(31)),j=o(357),f=o(358),O=o(361),m=o(359),w=o(360),g=o(63),y=o.n(g),x=o(104),v=o(30),T=Object(s.createContext)(null),S=function(){var e=n.a.useRef(),t=Object(s.useContext)(T),o=(t.emotions,t.setEmotions);return Object(s.useEffect)((function(){Promise.all([v.f.tinyFaceDetector.loadFromUri("/models"),v.f.faceLandmark68Net.loadFromUri("/models"),v.f.faceRecognitionNet.loadFromUri("/models"),v.f.faceExpressionNet.loadFromUri("/models")]).then(Object(x.a)(y.a.mark((function e(){var o,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={audio:!1,video:{width:1080,height:720}},i=document.querySelector("video"),e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia(o);case 5:t=e.sent,i.srcObject=t,i.onloadedmetadata=function(e){i.play()},e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.name+": "+e.t0.message);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[2,10]])}))));var t,i=[];return e.current.addEventListener("play",(function(){var t=v.b(e.current);document.body.append(t);var s={width:e.current.width,height:e.current.height};v.e(t,s);var n=setInterval(Object(x.a)(y.a.mark((function i(){var n,r;return y.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,v.c(e.current,new v.a).withFaceLandmarks().withFaceExpressions();case 2:n=i.sent,r=v.g(n,s),"undefined"===typeof n[0]?o((function(e){return[].concat(Object(l.a)(e),["undefined"])})):o((function(e){return[].concat(Object(l.a)(e),[n[0].expressions])})),t.getContext("2d").clearRect(0,0,t.width,t.height),v.d.drawFaceLandmarks(t,r);case 7:case"end":return i.stop()}}),i)}))),100);i.push((function(){return clearInterval(n)}))})),function(){t.getTracks()[0].stop(),i.forEach((function(e){return e()}))}}),[]),Object(i.jsx)("video",{ref:e,width:"180",height:"140",autoPlay:!0,muted:!0})},I=o(169),k=o.n(I),N=(o(331),o(49)),E=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{className:"black",children:Object(i.jsx)(N.b,{to:"/privacypolicy",style:{color:"black"},children:"Privacy policy "})})})},A=function(){var e=Object(s.useState)(!0),t=Object(c.a)(e,2),o=t[0],n=t[1],r=Object(s.useState)(""),a=Object(c.a)(r,2),d=a[0],u=a[1],g=Object(s.useState)([]),y=Object(c.a)(g,2),x=y[0],v=y[1],I=Object(s.useContext)(T),A=I.emotions,P=I.setEmotions,C=Object(s.useState)(!1),F=Object(c.a)(C,2),D=F[0],R=F[1],G=Object(s.useState)(!1),L=Object(c.a)(G,2),H=L[0],M=L[1],W=Object(s.useState)(!1),q=Object(c.a)(W,2),B=q[0],U=q[1],Y=Object(s.useState)(!1),z=Object(c.a)(Y,2),J=z[0],V=z[1],_=Object(s.useState)(!1),K=Object(c.a)(_,2),Q=K[0],Z=K[1],X=Object(s.useState)(0),$=Object(c.a)(X,2),ee=$[0],te=$[1],oe=Object(s.useState)(0),ie=Object(c.a)(oe,2),se=ie[0],ne=ie[1],re=Math.floor(31*Math.random())+69,ae=Object(s.useState)(0),ce=Object(c.a)(ae,2),le=ce[0],de=ce[1],he=Object(s.useState)(null),ue=Object(c.a)(he,2),be=(ue[0],ue[1]);return Object(s.useEffect)((function(){if(le<1)de(le+1);else{var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:d,emotions:x})};fetch("https://coinproject82.compel.ch/facerecognition/users",e).then((function(e){return e.json()})).then((function(e){return be(e.id)}))}}),[B]),setTimeout((function(){V(B)}),2e3),Object(s.useEffect)((function(){setTimeout((function(){Z(!Q)}),4e3)}),[J]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{}),Object(i.jsx)(p.a,{show:o,size:"xl",children:Object(i.jsxs)(p.a.Dialog,{size:"lg",children:[Object(i.jsx)(p.a.Header,{children:Object(i.jsx)(p.a.Title,{children:"Research"})}),Object(i.jsxs)(p.a.Body,{children:[Object(i.jsx)("p",{children:"Please provide your Happimeter email address."}),Object(i.jsxs)(j.a,{children:[Object(i.jsx)(f.a,{xs:6,md:4,children:Object(i.jsx)("div",{className:"email",children:Object(i.jsx)(w.a,{placeholder:"Happimeter Email",name:"email",onChange:function(e){return u(k.a.AES.encrypt(JSON.stringify(e.target.value),"JGvFdH7swkWJG5xuhycGSmDvcBydaQxJ4C3YEsNZppNnbR").toString())}})})}),Object(i.jsx)(f.a,{xs:12,md:8,children:Object(i.jsxs)("p",{className:"font_position",children:[" If you have not completed the happimeter surveys yet, please proceed and:",Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[" Register  ",Object(i.jsx)("a",{href:"https://www.happimeter.org/subscribe",children:"here"}),"."]}),Object(i.jsx)("li",{children:" Complete the 4 surveys: NEO-FFI Survey, DOSPERT Survery, Schwartz Value Survery, Moral Survery."}),Object(i.jsx)("li",{children:" When you are logged in, you can find these surverys in the menu in the upper left corner at the Happimeter site. "})]})]})})]}),Object(i.jsx)("div",{className:"data",children:Object(i.jsxs)("div",{style:{marginBottom:"-15px"},children:[Object(i.jsx)("input",{type:"checkbox",name:"example",onClick:function(){M(!H)}}),Object(i.jsx)("label",{className:"chechbox",children:"I have completed the surveys and used the same email address for the registration in Happimeter."})]})}),Object(i.jsxs)("div",{className:"data",children:[Object(i.jsx)("input",{type:"checkbox",name:"example",onClick:function(){R(!D)}}),Object(i.jsx)("label",{className:"chechbox",children:"I accept the collection and storage of my emotion data for research purposes."}),Object(i.jsxs)("p",{children:[" Click ",Object(i.jsx)(N.b,{to:"/privacypolicy",children:" here  "})," for more details! "]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("li",{children:"The video lasts 9:22 minutes, please keep the time free as the video cannot be paused."}),Object(i.jsx)("li",{children:"Please try not to look away."}),Object(i.jsx)("li",{children:"Please do not cover your face and keep it unobstructed during the whole time."}),Object(i.jsx)("li",{children:"Please confirm the camera permission for this Website or activate the camera manually."}),Object(i.jsx)("li",{children:"If you have rejected the camera function, please reload the page."})]}),Object(i.jsxs)("div",{style:{marginTop:"20px"},children:[Object(i.jsx)("span",{style:{color:"#ff0000",fontSize:"20px"},children:" \u26a0 "}),Object(i.jsx)("span",{style:{fontSize:"18px"},children:Object(i.jsx)("font",{color:"#ff0000",children:"WARNING - This video contains graphical scenes that may be disturbing to some users."})})]})]})]}),Object(i.jsx)(O.a,{onClick:function(){n(!(D&&H&&d))},children:"Start Video"})]})}),Object(i.jsx)(p.a,{show:J,children:Object(i.jsxs)(p.a.Dialog,{size:"xl",children:[Object(i.jsx)(p.a.Header,{children:Object(i.jsx)(p.a.Title,{children:"Happimeter Research"})}),Object(i.jsxs)(p.a.Body,{children:[Object(i.jsx)("p",{children:"Thanks for your emotions \ud83d\ude00 \ud83d\ude21 \ud83d\ude2d \ud83d\ude2e \ud83d\ude28. "}),Q?Object(i.jsxs)("p",{children:[" You reacted like ",Object(i.jsx)(m.a,{animation:"border",size:"sm"})," % of the viewer. "]}):Object(i.jsxs)("p",{children:[" You reacted like ",re," % of the viewer."]})]})]})}),Object(i.jsx)("div",{className:"camera",children:B?Object(i.jsx)(i.Fragment,{}):Object(i.jsx)(S,{})}),Object(i.jsx)("div",{style:{pointerEvents:"none"},children:Object(i.jsx)("div",{className:"video",children:Object(i.jsx)(b.a,{playing:!o,url:"https://vimeo.com/495184503",config:{youtube:{playerVars:{disablekb:1}}},onProgress:function(e){v([].concat(Object(l.a)(x),[[e.playedSeconds,A]])),ne(Math.floor((562-e.playedSeconds)/60)),te((562-e.playedSeconds)%60),P([])},onEnded:function(e){U(!0)},width:"864px",height:"486px"})})}),Object(i.jsx)("div",{className:"minPos",children:Object(i.jsxs)("p",{children:[" ",se.toFixed(0),".",ee.toFixed(0)," minutes left of the video. "]})}),Object(i.jsx)(E,{})]})};o(337);var P=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(h,{}),Object(i.jsxs)("div",{className:"datenschutz_position",children:[Object(i.jsx)("h4",{children:"PRIVACY POLICY"})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("h5",{children:"THE MOST IMPORTANT IN A NUTSHELL"}),Object(i.jsx)("p",{children:"This website is provided with a TLS certificate, the data exchange with your browser is encrypted. This website can be visited without functional restrictions, even if your browser does not allow cookies. No functions are integrated into this website that allow conclusions to be drawn about your person. Your data will not be shared with parties outside Tim Sch\xe4fer & without your express consent. A. RECOMMENDATION Log out of social media app and online accounts before visiting websites (e.g. YouTube, Facebook, LinkedIn, Instagram, Pinterest, Twitter, etc.). Otherwise, your surfing behavior will be recorded by the providers of these services and assigned to your profile. Without prior opt-out, these providers also record your visit to this website, although no connections to such providers are included on this website. B. DATA PROTECTION OFFICER Mr. Tim Sch\xe4fer, Subbelrather Stra\xdfe 168, 50823 Cologne Contact"}),Object(i.jsx)("p",{children:"C. BRIEF CONCERNING THE HANDLING OF PERSONAL DATA Personal data will be deleted if no contractual relationship is established within a reasonable period of time, if warranty periods have expired or if you so request and if this request is not opposed by legal or judicial restrictions."}),Object(i.jsx)("p",{children:"D. LEGAL We are obliged to protect personal data in accordance with Art. 13 of the Swiss Federal Constitution and the Swiss Federal Data Protection Act DSG and - where applicable - in accordance with the General Data Protection Regulation EU-DSGVO. We have taken all precautions and measures within our control and have entered into all possible agreements with external service providers so that we can guarantee the protection of this data online and offline to the best of our knowledge and belief."}),Object(i.jsx)("p",{children:'E. TECHNICAL We have taken technical precautions to ensure that your visit to this website is as anonymous as possible and that your privacy is protected. This website complies with the requirements of "Data Protection by Design" and "Data Protection by Default".'}),Object(i.jsx)("p",{children:"In detail 1. VISITING OUR WEBSITE, SERVER LOGFILES During the connection of your browser with our website, the following information (server log files) is exchanged between your browser and our website hoster: Date and time of the call to our website The files called up (texts, graphics, photos, videos, etc.) The HTTP status of the request (file found, file not found, etc.) The browser you are using (e.g. Firefox. The browser version (e.g. 61.0.2) and browser settings (e.g. preferred language) The operating system used and its version (e.g. Windows 10, 64-bit version) The amount of data transmitted (e.g. 198,979 bytes) The requesting IP address (e.g. 188.60.244.121) This information is absolutely necessary for the IP connection setup, does not allow any conclusions to be drawn about you personally and is not evaluated by us. Our hoster stores this access data for as long as you access our website. If there is no legal obligation to retain the data, the log files are deleted immediately after your visit to the website ends or overwritten by more recent log files. What is an IP address?"}),Object(i.jsx)("p",{children:'2. ANALYSIS TOOLS This website uses the analysis tool Google Analytics (Google Marketing Platform). However, your IP address is usually anonymized within Switzerland/EU/EEA and only subsequently transferred to Google servers in the USA, we have concluded the corresponding contract with Google. Therefore, Google will most likely not learn about your visit to this website, unless you are logged into a personal Google account during your visit to this website (Google account "myaccount", YouTube, Google Maps, etc.).'}),Object(i.jsx)("p",{children:"Google Analytics records referring and direct accesses to this website as well as movement patterns within this website on our behalf and provides us with this data so that we can learn which websites link to our website, under which search terms this website was found on which search engines and how often which content pages were accessed. For this reason, Google Analytics sets both volatile cookies (session cookies) and persistent cookies when you visit this website. Volatile cookies are deleted again when you close the browser, while persistent cookies remain on your terminal device for a maximum period of 14 months."}),Object(i.jsx)("p",{children:"We have configured Google Analytics as follows There are no links to other services of the 'Google Marketing Platform', for example to Google Ads. User recognition is deactivated. The function for recognition on websites other than this one is deactivated. If you never want to allow Google Analytics in principle, install the browser add-on to disable Google Analytics. Download: https://tools.google.com/dlpage/gaoptout"}),Object(i.jsx)("p",{children:"Additional information from Google about the Google Analytics analysis tool"}),Object(i.jsx)("p",{children:"To learn more about allowing, selectively allowing, preventing and deleting cookies, please read the file"}),Object(i.jsx)("p",{children:"What are cookies?"}),Object(i.jsx)("p",{children:"3. SCRIPT LIBRARIES JavaScript is used on this website. JavaScript are used to control visual and content functions, for example the expanding and collapsing question bars in the Digital Transformation chapter. JavaScript are embedded locally on this website, there are no external links to script libraries. Therefore, no operator of a script library learns about your visit to this website."}),Object(i.jsx)("p",{children:"4. fONTS LIBRARIES Web fonts are displayed on this website. Web fonts are fonts that ensure a consistent appearance across all browsers. The web fonts we use are locally embedded, there are no external links to font libraries. Therefore, no operator of a font library learns about your visit to this website."}),Object(i.jsx)("p",{children:"When you click on a link on website A to website B, browsers automatically send the Internet address of website A to the operator of website B. In this way, the operator of website B learns about your visit to this website. In this way, the operator of website B learns that a visitor to its website has clicked a link on website A. To protect your privacy, we have blocked this referral information from being forwarded to others on this website."}),Object(i.jsx)("p",{children:"6. SHARE AND LIKE FUNCTIONS No share or like functions are included on this website. Nevertheless, please refer to section A. RECOMMENDATION."}),Object(i.jsx)("p",{children:"7. COLLECTION AND HANDLING OF PERSONAL DATA When you ask us a question, request a quote from us or entrust us with an order, we collect the data necessary to respond to your request. This data will not be shared with parties outside COIN's seminar without your express consent. Personal data will be deleted if no contractual relationship is established within a reasonable period of time, warranty periods have expired or if you so request and this request is not contrary to legal or judicial restrictions."}),Object(i.jsx)("p",{children:"8. YOUR RIGHTS You have the possibility to exercise the following rights free of charge for all data related to your person"}),Object(i.jsx)("p",{children:"The right to be informed about the origin, disclosure, purpose of collection and use, the planned duration of storage and the type of processing The right to rectification of your data, for example correction, reduction or addition. The right to restriction of processing with regard to the duration of use and in-kind, including revocation of authorizations already granted The right to erasure or blocking of those data relating to your person The right to lodge a complaint with the competent supervisory authority. In Switzerland, this is the Federal Data Protection and Information Commissioner (FDPIC). https://www.edoeb.admin.ch Where we are unable to allocate requests relating to points 1. to 4. beyond doubt, we reserve the right to assure ourselves of the identity of the person making the request and to demand copies of meaningful documents. To exercise rights 1. to 4. please contact the Data Protection Officer."}),Object(i.jsx)("p",{children:"9. ADJUSTMENT OF PRIVACY POLICY As soon as we add, change or delete features or links on this website, we will adjust this privacy policy. The date of the last update is shown at the top of this section. The most recent Privacy Policy supersedes all previous versions."}),Object(i.jsx)("p",{children:"10. COMPLETE Access to websites and online stores as well as the sending and receiving of e-mails is never absolutely secure. Numerous security agencies and intelligence services monitor the use of the Internet without judicial permission and collect information that is not related to a specific suspicion or crime."})]})]})},C=o(13);var F=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),o=t[0],n=t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(N.a,{children:Object(i.jsxs)(T.Provider,{value:{emotions:o,setEmotions:n},children:[Object(i.jsx)(C.a,{path:"/",exact:!0,component:A}),Object(i.jsx)(C.a,{path:"/privacypolicy",exact:!0,component:P})]})})})},D=(o(338),function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,362)).then((function(t){var o=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;o(e),i(e),s(e),n(e),r(e)}))});a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root")),D()}},[[339,1,2]]]);
//# sourceMappingURL=main.6da1199f.chunk.js.map