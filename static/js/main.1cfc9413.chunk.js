(this.webpackJsonpsrinuprofile=this.webpackJsonpsrinuprofile||[]).push([[0],{14:function(e,a,t){},23:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),i=t.n(l),o=(t(28),t(14),t(17)),c=t(18),m=t(22),s=t(21),u=t(8),d=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.location.data.id,a=u.profiles[e];return r.a.createElement("section",{className:"parent"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-top"},r.a.createElement("h3",null," ",a.basicInformation.name," ")),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("a",{href:"mailto:"+a.basicInformation.email},a.basicInformation.email,"  ")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"tel:"+a.basicInformation.mobile},a.basicInformation.mobile))),r.a.createElement("div",{className:"card2"},r.a.createElement("div",{className:"card-bottom"},r.a.createElement("h2",null," Summary ")),r.a.createElement("div",{className:"card-top"},a.summary.map((function(e,a){return r.a.createElement("ul",null,r.a.createElement("p",null," ",e.exp," "))}))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("h2",null," Educational Qualifications")),r.a.createElement("div",{className:"card-top"},a.education.map((function(e,a){return r.a.createElement("ul",null,r.a.createElement("li",null," ",e.degree," "),r.a.createElement("p",null," ",e.institution," "))}))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("h2",null," Skillset")),r.a.createElement("div",{className:"card-top"},a.skillset.map((function(e,a){return r.a.createElement("ul",null,r.a.createElement("li",null,e.pro," "),r.a.createElement("br",null),r.a.createElement("li",null," ",e.fram," "),r.a.createElement("br",null),r.a.createElement("li",null,e.os," "),r.a.createElement("br",null),r.a.createElement("li",null," ",e.web," "),r.a.createElement("br",null))}))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("h2",null," Global Certifications")),r.a.createElement("div",{className:"card-top"},a.certifications.map((function(e,a){return r.a.createElement("ul",null,r.a.createElement("li",null,e.python," "),r.a.createElement("p",null," ",e.univercity," "))})))))}}]),t}(r.a.Component),E=t(9),p=t(5);var f=function(){var e=u.profiles;return r.a.createElement("section",{className:"parent"},e.map((function(e,a){return r.a.createElement("div",{className:"card",key:a},r.a.createElement("div",{className:"card-top"},r.a.createElement("h2",null," ",e.basicInformation.name," ")," ",r.a.createElement("br",null),r.a.createElement("h5",null," ",r.a.createElement("em",null," ",e.basicInformation.role))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("a",{href:"mailto:"+e.basicInformation.email}," ",e.basicInformation.email,"  ")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"tel:"+e.basicInformation.mobile}," ",e.basicInformation.mobile)," ",r.a.createElement("br",null),r.a.createElement(E.b,{to:{pathname:"/profile",data:{id:a}}}," View Profile ")))})),r.a.createElement("section",{className:"parent"}))},h=function(){var e=u.profiles;return r.a.createElement("section",null,r.a.createElement(E.a,null,r.a.createElement("header",{className:"header"},e.map((function(e,a){return r.a.createElement(E.b,{to:{pathname:"/profile",data:{id:a}},key:a}," ","Profile"+(a+1)," ")})))," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(p.a,{exact:!0,path:"/profile",component:d}),r.a.createElement(p.a,{exact:!0,path:"/",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"profiles":[{"basicInformation":{"name":"Srinivasa Reddy","role":"Technical skill Trainer","email":"nivas0803@gmail.com","mobile":"+91 8466865901"},"skillset":[{"pro":" Program Languages --\x3e python, java, C, php ","fram":"Framworks --\x3e django flask reactjs javascript","os":"Operating Systems --\x3e Linux Windows iOS","web":"Web Technologies --\x3e HTML5 CSS3 Bootstrap4"}],"summary":[{"exp":"Having 4+ years of experience in training students in engineering colleges throughout Andhra Pradesh on various technologies Trained approximately 5000 students so far in short term & long term training programs Good in technical mentoring, code reviews to deliver quality output Involved in knowledge sharing and knowledge transfer to the new members of the team & Preparation of knowledge transfer documents Participated in trainings offered in order to increase technical skills, Got consistent & good feedback from every training program."}],"certifications":[{"python":"Python for Everybody","univercity":"Michigan univercity"},{"python":"FullStack Certification","univercity":"Udacity"}],"education":[{"degree":"B-Tech (ECE)","institution":"St Ann\'s College of Engineering"},{"degree":"Diploma(ECE)","institution":"Bapatla Engineering College"},{"degree":"SSC","institution":"Z P High School"}]}]}')}},[[23,1,2]]]);
//# sourceMappingURL=main.1cfc9413.chunk.js.map