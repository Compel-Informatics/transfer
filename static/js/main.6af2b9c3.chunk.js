(this["webpackJsonppersonality-prediction"]=this["webpackJsonppersonality-prediction"]||[]).push([[0],{198:function(e,t,o){},199:function(e,t,o){},220:function(e,t,o){},224:function(e,t){},225:function(e,t){},226:function(e,t){},230:function(e,t){},232:function(e,t){},243:function(e,t){},245:function(e,t){},270:function(e,t){},272:function(e,t){},273:function(e,t){},279:function(e,t){},281:function(e,t){},299:function(e,t){},301:function(e,t){},313:function(e,t){},316:function(e,t){},342:function(e,t,o){},360:function(e,t,o){},362:function(e,t,o){"use strict";o.r(t);var s=o(3),i=o(1),n=o.n(i),r=o(21),a=o.n(r),c=(o(198),o(15)),l=(o(199),o(40)),d=o.n(l),h=o(64),u=o(54),b=o(82),j=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(b.a,{bg:"light",expand:"lg",fixed:"top",children:[Object(s.jsx)(b.a.Brand,{href:"/",children:"COINs Personality Prediction"}),Object(s.jsx)(b.a.Collapse,{id:"basic-navbar-nav"})]})})},p=o(179),f=o.n(p),m=(o(220),o(31)),O=o(380),x=o(381),g=o(384),w=o(382),y=o(383),v=o(30),T=Object(i.createContext)(null),S=function(){var e=n.a.useRef(),t=Object(i.useContext)(T),o=(t.emotions,t.setEmotions),r=Object(i.useState)(0),a=Object(c.a)(r,2),l=(a[0],a[1]);return Object(i.useEffect)((function(){Promise.all([v.f.tinyFaceDetector.loadFromUri("/models"),v.f.faceLandmark68Net.loadFromUri("/models"),v.f.faceRecognitionNet.loadFromUri("/models"),v.f.faceExpressionNet.loadFromUri("/models")]).then(Object(h.a)(d.a.mark((function e(){var o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={audio:!1,video:{width:1080,height:720}},s=document.querySelector("video"),e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia(o);case 5:t=e.sent,s.srcObject=t,s.onloadedmetadata=function(e){s.play()},e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.name+": "+e.t0.message);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[2,10]])}))));var t,s=[];return e.current.addEventListener("play",(function(){var t=v.b(e.current);document.body.append(t);var i={width:e.current.width,height:e.current.height};v.e(t,i);var n=setInterval(Object(h.a)(d.a.mark((function s(){var n,r;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,v.c(e.current,new v.a).withFaceLandmarks().withFaceExpressions();case 2:n=s.sent,r=v.g(n,i),"undefined"===typeof n[0]?o((function(e){return[].concat(Object(u.a)(e),["undefined"])})):(o((function(e){return[].concat(Object(u.a)(e),[n[0].expressions])})),l(n[0].expressions.neutral)),t.getContext("2d").clearRect(0,0,t.width,t.height),v.d.drawFaceLandmarks(t,r);case 7:case"end":return s.stop()}}),s)}))),100);s.push((function(){return clearInterval(n)}))})),function(){t.getTracks()[0].stop(),s.forEach((function(e){return e()}))}}),[]),Object(s.jsx)("video",{ref:e,width:"180",height:"140",autoPlay:!0,muted:!0})},N=o(180),I=o.n(N),k=(o(342),o(52)),A=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("p",{className:"black",children:Object(s.jsx)(k.b,{to:"/privacypolicy",style:{color:"black"},children:"Privacy policy "})})})},E=(o(35),function(){var e=Object(i.useState)(!0),t=Object(c.a)(e,2),o=t[0],n=t[1],r=Object(i.useState)(""),a=Object(c.a)(r,2),l=a[0],b=a[1],p=Object(i.useState)([]),v=Object(c.a)(p,2),N=v[0],E=v[1],F=Object(i.useContext)(T),P=F.emotions,C=F.setEmotions,D=Object(i.useState)(!1),L=Object(c.a)(D,2),R=L[0],G=L[1],H=Object(i.useState)(!1),M=Object(c.a)(H,2),W=M[0],z=M[1],U=Object(i.useState)(!1),q=Object(c.a)(U,2),B=q[0],_=q[1],J=Object(i.useState)(!1),Y=Object(c.a)(J,2),V=Y[0],K=Y[1],Q=Object(i.useState)(!1),Z=Object(c.a)(Q,2),X=Z[0],$=Z[1],ee=Object(i.useState)(0),te=Object(c.a)(ee,2),oe=te[0],se=te[1],ie=Object(i.useState)(0),ne=Object(c.a)(ie,2),re=ne[0],ae=ne[1],ce=Object(i.useState)([]),le=Object(c.a)(ce,2),de=le[0],he=le[1],ue=Object(i.useState)({emotion_mean:{averages:{angry:0,disgusted:0,fearful:0,happy:0,neutral:0,sad:0,surprised:0}}}),be=Object(c.a)(ue,2),je=be[0],pe=be[1],fe=(Math.floor(31*Math.random()),Object(i.useState)(null)),me=Object(c.a)(fe,2),Oe=(me[0],me[1],Object(i.useCallback)(Object(h.a)(d.a.mark((function e(){var t,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:l,emotions:N})},e.next=3,fetch("https://coinproject82.compel.ch/facerecognition/users",t);case 3:return o=e.sent,e.t0=pe,e.next=7,o.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)}))),[l,N]));return setTimeout((function(){K(B)}),2e3),Object(i.useEffect)((function(){setTimeout((function(){$(!X)}),1e4)}),[V]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{}),Object(s.jsxs)(m.a,{show:o,size:"xl",children:[Object(s.jsxs)(m.a.Dialog,{size:"lg",children:[Object(s.jsx)(m.a.Header,{children:Object(s.jsx)(m.a.Title,{children:"Research project of collaborative network (MIT, UoC, HSLU)"})}),Object(s.jsxs)(m.a.Body,{children:[Object(s.jsx)("p",{children:"Please provide your Happimeter email address."}),Object(s.jsxs)(O.a,{children:[Object(s.jsxs)(x.a,{xs:6,md:4,children:[Object(s.jsx)("div",{className:"email",children:Object(s.jsx)(y.a,{placeholder:"Happimeter Email",name:"email",onChange:function(e){return b(I.a.AES.encrypt(JSON.stringify(e.target.value),"JGvFdH7swkWJG5xuhycGSmDvcBydaQxJ4C3YEsNZppNnbR").toString())}})}),Object(s.jsx)("img",{className:"img",src:"./Instructions.jpeg"})]}),Object(s.jsx)(x.a,{xs:12,md:8,children:Object(s.jsxs)("p",{className:"font_position",children:[" If you have not completed the happimeter surveys yet, please proceed and:",Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[" Register  ",Object(s.jsx)("a",{href:"https://www.happimeter.org/subscribe",children:"here"}),"."]}),Object(s.jsx)("li",{children:" Complete the 4 surveys: NEO-FFI Survey, DOSPERT Survery, Schwartz Value Survery, Moral Survery."}),Object(s.jsx)("li",{children:" When you are logged in, you can find these surverys in the menu in the upper left corner at the Happimeter site. "})]})]})})]}),Object(s.jsx)("div",{className:"data",children:Object(s.jsxs)("div",{style:{marginBottom:"-15px"},children:[Object(s.jsx)("input",{type:"checkbox",name:"example",onClick:function(){z(!W)}}),Object(s.jsx)("label",{className:"chechbox",children:"I have completed the surveys and used the same email address for the registration in Happimeter."})]})}),Object(s.jsxs)("div",{className:"data",children:[Object(s.jsx)("input",{type:"checkbox",name:"example",onClick:function(){G(!R)}}),Object(s.jsx)("label",{className:"chechbox",children:"I accept the collection and storage of my emotion data for research purposes."}),Object(s.jsxs)("p",{children:[" Click ",Object(s.jsx)(k.b,{to:"/privacypolicy",children:" here  "})," for more details! "]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("li",{children:"The video lasts 9:22 minutes, please keep the time free as the video cannot be paused."}),Object(s.jsx)("li",{children:"Please try not to look away."}),Object(s.jsx)("li",{children:"Please do not cover your face and keep it unobstructed during the whole time."}),Object(s.jsx)("li",{children:"Please confirm the camera permission for this Website or activate the camera manually."}),Object(s.jsx)("li",{children:"If you have rejected the camera function, please reload the page."})]}),Object(s.jsxs)("div",{style:{marginTop:"20px"},children:[Object(s.jsx)("span",{style:{color:"#ff0000",fontSize:"20px"},children:" \u26a0 "}),Object(s.jsx)("span",{style:{fontSize:"18px"},children:Object(s.jsx)("font",{color:"#ff0000",children:"WARNING - This video contains graphical scenes that may be disturbing to some users."})})]})]})]}),Object(s.jsx)(g.a,{onClick:function(){n(!(R&&W&&l))},children:"Start Video"})]}),Object(s.jsx)("p",{className:"font_position=",children:Object(s.jsx)("center",{children:"Version: 0.2.3-001"})})]}),Object(s.jsx)(m.a,{show:V,children:Object(s.jsxs)(m.a.Dialog,{size:"xl",children:[Object(s.jsx)(m.a.Header,{children:Object(s.jsx)(m.a.Title,{children:"Research project of collaborative network (MIT, UoC, HSLU)"})}),Object(s.jsxs)(m.a.Body,{children:[Object(s.jsx)("p",{style:{fontWeight:"bold"},children:"Thanks for your emotions!"}),X?Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"The average emotions are loaded, this can take up to 10 seconds."}),Object(s.jsxs)("p",{children:[" Neutral ",Object(s.jsx)(w.a,{animation:"border",size:"sm"})," %  \ud83d\ude10"]}),Object(s.jsxs)("p",{children:[" Happy ",Object(s.jsx)(w.a,{animation:"border",size:"sm"})," %  \ud83d\ude00"]}),Object(s.jsxs)("p",{children:[" Suprised ",Object(s.jsx)(w.a,{animation:"border",size:"sm"})," %  \ud83d\ude2e"]}),Object(s.jsxs)("p",{children:[" Fear ",Object(s.jsx)(w.a,{animation:"border",size:"sm"})," %  \ud83d\ude28"]}),Object(s.jsxs)("p",{children:[" Disgusted ",Object(s.jsx)(w.a,{animation:"border",size:"sm"})," %  \ud83d\ude16"]}),Object(s.jsxs)("p",{children:[" Sad ",Object(s.jsx)(w.a,{animation:"border",size:"sm"})," %  \ud83d\ude2d"]}),Object(s.jsxs)("p",{children:[" Angry ",Object(s.jsx)(w.a,{animation:"border",size:"sm"})," %  \ud83d\ude21"]})]}):Object(s.jsxs)("div",{children:[" ",Object(s.jsxs)("p",{children:["Neutral ",Number(100*je.emotion_mean.averages.neutral).toFixed(2)," %  \ud83d\ude10"]}),Object(s.jsxs)("p",{children:["Happy ",Number(100*je.emotion_mean.averages.happy).toFixed(2)," %  \ud83d\ude00"]}),Object(s.jsxs)("p",{children:["Suprised ",Number(100*je.emotion_mean.averages.surprised).toFixed(2)," %  \ud83d\ude2e"]}),Object(s.jsxs)("p",{children:["Fear ",Number(100*je.emotion_mean.averages.fearful).toFixed(2)," %  \ud83d\ude28"]}),Object(s.jsxs)("p",{children:["Disgusted ",Number(100*je.emotion_mean.averages.disgusted).toFixed(2)," %  \ud83d\ude16"]}),Object(s.jsxs)("p",{children:["Sad ",Number(100*je.emotion_mean.averages.sad).toFixed(2)," %  \ud83d\ude2d"]}),Object(s.jsxs)("p",{children:["Angry ",Number(100*je.emotion_mean.averages.angry).toFixed(2)," %  \ud83d\ude21"]})]})]})]})}),Object(s.jsx)("div",{className:"camera",children:B?Object(s.jsx)(s.Fragment,{}):Object(s.jsx)(S,{})}),Object(s.jsx)("div",{style:{pointerEvents:"none"},children:Object(s.jsx)("div",{className:"video",children:Object(s.jsx)(f.a,{playing:!o,url:"https://vimeo.com/495184503",config:{youtube:{playerVars:{disablekb:1}}},onProgress:function(e){E([].concat(Object(u.a)(N),[[e.playedSeconds,P]])),ae(Math.floor((562-e.playedSeconds)/60)),se((562-e.playedSeconds)%60),C([]),he([].concat(Object(u.a)(de),[P]))},onEnded:function(e){_(!0),Oe()},width:"864px",height:"486px"})})}),Object(s.jsx)("div",{className:"minPos",children:B?Object(s.jsx)("p",{children:" 00:00 minutes left of the video."}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["0",re.toFixed(0),".",oe.toFixed(0)," minutes left of the video."]}),Object(s.jsx)("p",{})]})}),Object(s.jsx)(A,{})]})});o(360);var F=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{}),Object(s.jsxs)("div",{className:"datenschutz_position",children:[Object(s.jsx)("h4",{children:"PRIVACY POLICY"})," ",Object(s.jsx)("br",{})," ",Object(s.jsx)("h5",{children:"THE MOST IMPORTANT IN A NUTSHELL"}),Object(s.jsx)("p",{children:"This website is provided with a TLS certificate, the data exchange with your browser is encrypted. This website can be visited without functional restrictions, even if your browser does not allow cookies. No functions are integrated into this website that allow conclusions to be drawn about your person. Your data will not be shared with parties outside Tim Sch\xe4fer & without your express consent. A. RECOMMENDATION Log out of social media app and online accounts before visiting websites (e.g. YouTube, Facebook, LinkedIn, Instagram, Pinterest, Twitter, etc.). Otherwise, your surfing behavior will be recorded by the providers of these services and assigned to your profile. Without prior opt-out, these providers also record your visit to this website, although no connections to such providers are included on this website. B. DATA PROTECTION OFFICER Mr. Tim Sch\xe4fer, Subbelrather Stra\xdfe 168, 50823 Cologne Contact"}),Object(s.jsx)("p",{children:"C. BRIEF CONCERNING THE HANDLING OF PERSONAL DATA Personal data will be deleted if no contractual relationship is established within a reasonable period of time, if warranty periods have expired or if you so request and if this request is not opposed by legal or judicial restrictions."}),Object(s.jsx)("p",{children:"D. LEGAL We are obliged to protect personal data in accordance with Art. 13 of the Swiss Federal Constitution and the Swiss Federal Data Protection Act DSG and - where applicable - in accordance with the General Data Protection Regulation EU-DSGVO. We have taken all precautions and measures within our control and have entered into all possible agreements with external service providers so that we can guarantee the protection of this data online and offline to the best of our knowledge and belief."}),Object(s.jsx)("p",{children:'E. TECHNICAL We have taken technical precautions to ensure that your visit to this website is as anonymous as possible and that your privacy is protected. This website complies with the requirements of "Data Protection by Design" and "Data Protection by Default".'}),Object(s.jsx)("p",{children:"In detail 1. VISITING OUR WEBSITE, SERVER LOGFILES During the connection of your browser with our website, the following information (server log files) is exchanged between your browser and our website hoster: Date and time of the call to our website The files called up (texts, graphics, photos, videos, etc.) The HTTP status of the request (file found, file not found, etc.) The browser you are using (e.g. Firefox. The browser version (e.g. 61.0.2) and browser settings (e.g. preferred language) The operating system used and its version (e.g. Windows 10, 64-bit version) The amount of data transmitted (e.g. 198,979 bytes) The requesting IP address (e.g. 188.60.244.121) This information is absolutely necessary for the IP connection setup, does not allow any conclusions to be drawn about you personally and is not evaluated by us. Our hoster stores this access data for as long as you access our website. If there is no legal obligation to retain the data, the log files are deleted immediately after your visit to the website ends or overwritten by more recent log files. What is an IP address?"}),Object(s.jsx)("p",{children:'2. ANALYSIS TOOLS This website uses the analysis tool Google Analytics (Google Marketing Platform). However, your IP address is usually anonymized within Switzerland/EU/EEA and only subsequently transferred to Google servers in the USA, we have concluded the corresponding contract with Google. Therefore, Google will most likely not learn about your visit to this website, unless you are logged into a personal Google account during your visit to this website (Google account "myaccount", YouTube, Google Maps, etc.).'}),Object(s.jsx)("p",{children:"Google Analytics records referring and direct accesses to this website as well as movement patterns within this website on our behalf and provides us with this data so that we can learn which websites link to our website, under which search terms this website was found on which search engines and how often which content pages were accessed. For this reason, Google Analytics sets both volatile cookies (session cookies) and persistent cookies when you visit this website. Volatile cookies are deleted again when you close the browser, while persistent cookies remain on your terminal device for a maximum period of 14 months."}),Object(s.jsx)("p",{children:"We have configured Google Analytics as follows There are no links to other services of the 'Google Marketing Platform', for example to Google Ads. User recognition is deactivated. The function for recognition on websites other than this one is deactivated. If you never want to allow Google Analytics in principle, install the browser add-on to disable Google Analytics. Download: https://tools.google.com/dlpage/gaoptout"}),Object(s.jsx)("p",{children:"Additional information from Google about the Google Analytics analysis tool"}),Object(s.jsx)("p",{children:"To learn more about allowing, selectively allowing, preventing and deleting cookies, please read the file"}),Object(s.jsx)("p",{children:"What are cookies?"}),Object(s.jsx)("p",{children:"3. SCRIPT LIBRARIES JavaScript is used on this website. JavaScript are used to control visual and content functions, for example the expanding and collapsing question bars in the Digital Transformation chapter. JavaScript are embedded locally on this website, there are no external links to script libraries. Therefore, no operator of a script library learns about your visit to this website."}),Object(s.jsx)("p",{children:"4. fONTS LIBRARIES Web fonts are displayed on this website. Web fonts are fonts that ensure a consistent appearance across all browsers. The web fonts we use are locally embedded, there are no external links to font libraries. Therefore, no operator of a font library learns about your visit to this website."}),Object(s.jsx)("p",{children:"When you click on a link on website A to website B, browsers automatically send the Internet address of website A to the operator of website B. In this way, the operator of website B learns about your visit to this website. In this way, the operator of website B learns that a visitor to its website has clicked a link on website A. To protect your privacy, we have blocked this referral information from being forwarded to others on this website."}),Object(s.jsx)("p",{children:"6. SHARE AND LIKE FUNCTIONS No share or like functions are included on this website. Nevertheless, please refer to section A. RECOMMENDATION."}),Object(s.jsx)("p",{children:"7. COLLECTION AND HANDLING OF PERSONAL DATA When you ask us a question, request a quote from us or entrust us with an order, we collect the data necessary to respond to your request. This data will not be shared with parties outside COIN's seminar without your express consent. Personal data will be deleted if no contractual relationship is established within a reasonable period of time, warranty periods have expired or if you so request and this request is not contrary to legal or judicial restrictions."}),Object(s.jsx)("p",{children:"8. YOUR RIGHTS You have the possibility to exercise the following rights free of charge for all data related to your person"}),Object(s.jsx)("p",{children:"The right to be informed about the origin, disclosure, purpose of collection and use, the planned duration of storage and the type of processing The right to rectification of your data, for example correction, reduction or addition. The right to restriction of processing with regard to the duration of use and in-kind, including revocation of authorizations already granted The right to erasure or blocking of those data relating to your person The right to lodge a complaint with the competent supervisory authority. In Switzerland, this is the Federal Data Protection and Information Commissioner (FDPIC). https://www.edoeb.admin.ch Where we are unable to allocate requests relating to points 1. to 4. beyond doubt, we reserve the right to assure ourselves of the identity of the person making the request and to demand copies of meaningful documents. To exercise rights 1. to 4. please contact the Data Protection Officer."}),Object(s.jsx)("p",{children:"9. ADJUSTMENT OF PRIVACY POLICY As soon as we add, change or delete features or links on this website, we will adjust this privacy policy. The date of the last update is shown at the top of this section. The most recent Privacy Policy supersedes all previous versions."}),Object(s.jsx)("p",{children:"10. COMPLETE Access to websites and online stores as well as the sending and receiving of e-mails is never absolutely secure. Numerous security agencies and intelligence services monitor the use of the Internet without judicial permission and collect information that is not related to a specific suspicion or crime."})]})]})},P=o(13);var C=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),o=t[0],n=t[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(k.a,{children:Object(s.jsxs)(T.Provider,{value:{emotions:o,setEmotions:n},children:[Object(s.jsx)(P.a,{path:"/",exact:!0,component:E}),Object(s.jsx)(P.a,{path:"/privacypolicy",exact:!0,component:F})]})})})},D=(o(361),function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,385)).then((function(t){var o=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;o(e),s(e),i(e),n(e),r(e)}))});a.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),D()}},[[362,1,2]]]);
//# sourceMappingURL=main.6af2b9c3.chunk.js.map