(this["webpackJsonpchallenge-20-react-portfolio"]=this["webpackJsonpchallenge-20-react-portfolio"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r(1),a=r.n(c),n=r(6),i=r.n(n),l=(r(12),r(2));r(13);var o=function(e){return Object(s.jsx)("ul",{className:"nav-list",children:["About","Projects","Resume","Contact"].map((function(t){return Object(s.jsx)("li",{className:"list-item",children:Object(s.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.setCurrentPage(t)},className:e.currentPage===t?"navActive":"nav-link",children:Object(s.jsx)("h2",{children:t})})},t)}))})},j=r.p+"static/media/image.ebb7f778.jpg";var d=function(){return Object(s.jsxs)("section",{children:[Object(s.jsx)("h2",{id:"about",className:"section-header",children:" About Me "}),Object(s.jsxs)("div",{className:"about-wrapper",children:[Object(s.jsx)("img",{src:j,style:{width:"25%"},alt:"cover",className:"picture"}),Object(s.jsx)("p",{className:"about-text",children:"My name is Jessica and I'm fairly new to Web Developing. I have been a Sign Language Interpreter since 2012. I have worked in various school settings working with students ranging from age 4 to age 21. I am a hard working, recently engaged, mother of 3. I decided to enroll at the University of Wisconsin Extended Campus-Coding Bootcamp to begin a new adventure in mine and my families' lives!"})]})]})},h=r(3),b=r(5);var u=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),r=t[0],a=t[1],n=r.name,i=r.email,o=r.message,j=Object(c.useState)(""),d=Object(l.a)(j,2),u=d[0],m=d[1];function p(e){var t,s=(t=e.target.name).charAt(0).toUpperCase()+t.slice(1);if("email"===e.target.name){var c=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(c),m(c?"":"Please enter a valid email.")}else e.target.value.length?m(""):m(s+" is required.");u||a(Object(b.a)(Object(b.a)({},r),{},Object(h.a)({},e.target.name,e.target.value)))}return Object(s.jsxs)("section",{className:"contact-page",children:[Object(s.jsx)("h2",{className:"section-header",children:"Contact Me"}),Object(s.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(r)},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(s.jsx)("input",{type:"text",name:"name",defaultValue:n,onBlur:p})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(s.jsx)("input",{type:"email",name:"email",defaultValue:i,onBlur:p})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{className:"message-form-group",htmlFor:"message",children:"Message:"}),Object(s.jsx)("textarea",{name:"message",rows:"15",defaultValue:o,onBlur:p})]}),u&&Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"error-text",children:u})}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]})},m=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("ul",{className:"nav-list footer-list",children:[{name:"GitHub",url:"https://github.com/jwade1327"},{name:"LinkedIn",url:"https://www.linkedin.com/in/jessica-wade-4646871a8"}].map((function(e){return Object(s.jsx)("li",{className:"list-item",children:Object(s.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.name})},e.name)}))})})},p=[{name:"Note Taker",liveUrl:"https://afternoon-harbor-01376.herokuapp.com/",githubUrl:"https://https://github.com/jwade1327/Challenge-11-note-taker",tech:"Express.js",style:"note-taker"},{name:"Tech Blog",liveUrl:"https://sheltered-brushlands-29071.herokuapp.com/",githubUrl:"https://github.com/jwade1327/Challenge-11-note-taker",tech:"MVC/Handlebars/Sequelize/Express-Session",style:"tech-blog"},{name:"Prestige Worldwide",liveUrl:"https://jwade1327.github.io/project-1-prestige-worldwide/",githubUrl:"https://github.com/jwade1327/project-1-prestige-worldwide",tech:"HTML/CSS/JavaScript/jQuery/Materialize/APIs",style:"prestige-worldwide"},{name:"Campground Inc",liveUrl:"https://agile-journey-10175.herokuapp.com/",githubUrl:"https://github.com/jwade1327/project-two-campgrounds-inc",tech:"MySQL2/Express/Sequelize",style:"campground-inc"}];var x=function(){return Object(s.jsxs)("section",{children:[Object(s.jsx)("h2",{className:"section-header",children:"Projects"}),Object(s.jsx)("div",{className:"project-wrapper",children:p.map((function(e){return Object(s.jsxs)("div",{className:"".concat(e.style," project-item"),children:[Object(s.jsxs)("div",{className:"project-header",children:[Object(s.jsx)("a",{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"project-title",children:e.name}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"project-github",children:"GitHub Repository"})]}),Object(s.jsx)("p",{className:"project-tech",children:e.tech})]},e.name)}))})]})},O=r.p+"static/media/resume.31d6cfe0.pdf";var g=function(){return Object(s.jsxs)("section",{children:[Object(s.jsx)("h2",{className:"section-header",children:"Resume"}),Object(s.jsxs)("p",{className:"res-link",children:[" Feel free to download my ",Object(s.jsx)("a",{href:O,download:O,children:"resume"}),"."]}),Object(s.jsx)("h3",{className:"res-pro",children:"Front-End Proficiencies"}),Object(s.jsxs)("ul",{className:"pro-list",children:[Object(s.jsx)("li",{children:"HTML"}),Object(s.jsx)("li",{children:"CSS"}),Object(s.jsx)("li",{children:"JavaScript"}),Object(s.jsx)("li",{children:"jQuery"}),Object(s.jsx)("li",{children:"React"}),Object(s.jsx)("li",{children:"Bootstrap"}),Object(s.jsx)("li",{children:"Materialize.css"}),Object(s.jsx)("li",{children:"Responsive Design"})]}),Object(s.jsx)("h3",{className:"res-pro",children:"Back-End Proficiencies"}),Object(s.jsxs)("ul",{className:"pro-list",children:[Object(s.jsx)("li",{children:"Express"}),Object(s.jsx)("li",{children:"Node"}),Object(s.jsx)("li",{children:"APIs"}),Object(s.jsx)("li",{children:"MySQL/Sequelize"}),Object(s.jsx)("li",{children:"MongoDB/Mongoose"})]})]})};var f=function(){var e=Object(c.useState)("Projects"),t=Object(l.a)(e,2),r=t[0],a=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{children:"Jessica Wade"}),Object(s.jsx)(o,{currentPage:r,setCurrentPage:a})]}),Object(s.jsx)("main",{className:"content-wrapper",children:function(){switch(r){case"Projects":return Object(s.jsx)(x,{});case"Resume":return Object(s.jsx)(g,{});case"Contact":return Object(s.jsx)(u,{});default:return Object(s.jsx)(d,{})}}()}),Object(s.jsx)("footer",{children:Object(s.jsx)(m,{})})]})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.734d2769.chunk.js.map