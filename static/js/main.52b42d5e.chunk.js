(this.webpackJsonpines_cv_site=this.webpackJsonpines_cv_site||[]).push([[0],[,function(e,t,i){e.exports={"language-section-container":"proficiency_language-section-container__2DDKh","language-bar-legend":"proficiency_language-bar-legend__2Co0H","language-bar-legend-wide":"proficiency_language-bar-legend-wide__1-1SG","grid-language":"proficiency_grid-language__1x8QH","grid-proficiency":"proficiency_grid-proficiency__rztOO","proficiency-bar":"proficiency_proficiency-bar__1LaOU"}},,function(e,t,i){e.exports={"about-me-container":"about_about-me-container__3P4if","about-me-desc":"about_about-me-desc__2WH3j",p1:"about_p1__4N3jt",p2:"about_p2__1s5UA"}},function(e,t,i){e.exports={"project-container":"project_project-container__4jKM0","work-container":"project_work-container__1IW06",description:"project_description__2NcbU"}},function(e,t,i){e.exports={"contact-container":"contact_contact-container__3uczP",email:"contact_email__3ib-w",linkedin:"contact_linkedin__15793"}},,,function(e,t,i){e.exports={grid:"experience_grid__AkKtr"}},function(e,t,i){e.exports={credits:"credits_credits__qBy9Q"}},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var r=i(2),c=i.n(r),n=i(7),s=i.n(n),a=(i(15),i(16),i(17),i(0));var o=function(){var e=function(e){return document.getElementById("#".concat(e)).scrollIntoView({block:"start",behavior:"smooth"})};return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://drive.google.com/file/d/1wGXj99yfBwQBjwJjfzVR6yMsSe-KAhFT/view?fbclid=IwAR1OvZYHrKOnPkuZxo9S9VtafdaGO2Kr2cLUj8J71F96rBD920TRLcodEPs",children:"CV"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#projects",onClick:function(){return e("projects")},children:"PROJECTS"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#contact",onClick:function(){return e("contact")},children:"CONTACT"})})]})})};i(19);var l=function(e){return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:e.title}),e.children]})},j=i(3),d=i.n(j);var p=function(){return Object(a.jsxs)("div",{className:d.a["about-me-container"],children:[Object(a.jsx)("img",{src:"./ines.png",alt:""}),Object(a.jsxs)("div",{className:d.a["about-me-desc"],children:[Object(a.jsx)("p",{id:d.a.p1,children:"Hello!"}),Object(a.jsx)("p",{id:d.a.p2,children:"My name is Ines Simonica. I am 24 years old, I am a 3D designer and video games enthustiast. My hobbies are painting, plant growing and reading."})]})]})},b=i(8),m=i.n(b);var g=function(e){return Object(a.jsx)("div",{className:m.a.grid,children:e.names.map((function(e){return Object(a.jsx)("div",{children:e})}))})},u=i(1),h=i.n(u);var f=function(e){var t=e.proficiencyPercentage;return Object(a.jsx)("div",{className:h.a["proficiency-bar"],style:{width:t}})};var x=function(e){return Object(a.jsxs)("div",{className:h.a["language-section-container"],children:[Object(a.jsx)("div",{className:h.a["language-bar-legend-wide"],children:e.levels.map((function(e,t){return Object(a.jsx)("span",{children:e.level},t)}))}),e.proficiencies.map((function(e,t){return Object(a.jsx)("div",{className:h.a["grid-language"],style:{gridRow:t+2},children:e.skill},t)})),e.proficiencies.map((function(e,t){return Object(a.jsx)("div",{className:h.a["grid-proficiency"],style:{gridRow:t+2},children:Object(a.jsx)(f,{proficiencyPercentage:e.proficiency})},t)}))]})},O=i(10),v=i(4),w=i.n(v),y={activeImageIndex:0};function _(e,t){switch(t.type){case"previous":return e.activeImageIndex?{activeImageIndex:e.activeImageIndex-1}:{activeImageIndex:t.numberOfImages-1};case"next":return{activeImageIndex:(e.activeImageIndex+1)%t.numberOfImages};default:console.log("error")}}var I=function(e){var t=Object(r.useReducer)(_,y),i=Object(O.a)(t,2),c=i[0],n=i[1],s=e.images.length;return Object(a.jsxs)("div",{className:w.a["project-container"],children:[Object(a.jsx)("h3",{children:e.title}),Object(a.jsxs)("div",{className:w.a["work-container"],children:[s>1?Object(a.jsx)("button",{onClick:function(){return n({type:"previous",numberOfImages:s})},children:"<"}):null,e.images[c.activeImageIndex],s>1?Object(a.jsx)("button",{onClick:function(){return n({type:"next",numberOfImages:s})},children:">"}):null]}),e.description?Object(a.jsxs)("div",{className:w.a.description,children:[Object(a.jsx)("h4",{children:"Description"}),Object(a.jsx)("p",{children:e.description})]}):null]})},k=i(5),B=i.n(k),P=i(9),C=i.n(P);var N=function(){return Object(a.jsx)("div",{className:C.a.credits,children:Object(a.jsxs)("a",{href:"https://fratiladaniel.github.io/LandingPage/",target:"_blank",rel:"noreferrer",children:["\xa9Daniel Fratila, ",(new Date).getFullYear()]})})};var R=function(){return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:B.a["contact-container"],id:"#contact",children:[Object(a.jsx)("p",{children:"You can contact me anytime via email or LinkedIn:"}),Object(a.jsxs)("div",{id:B.a.email,children:[Object(a.jsx)("img",{src:"./email.png",alt:"Email"}),"simonica.ines@gmail.com"]}),Object(a.jsx)("div",{id:B.a.linkedin,children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/ines-simonica-1b9222217/?fbclid=IwAR1GyPtp0iYfuV4i4Y1qS-hx4BILmal3BtuPgt5GQgi_hxyUI9fXOj97BTI",children:Object(a.jsx)("img",{src:"linkedin.png",alt:"LinkedIn"})})}),Object(a.jsx)(N,{})]})})},S=[Object(a.jsx)("img",{src:"./bosch.png",alt:"Robert Bosch GMBH"}),"2019-2020","Developer"],A=[Object(a.jsx)("img",{src:"./sigla_utcluj_white.svg",alt:"UTCN"}),"In Progress","Computer Science"],T=[{level:"Basic"},{level:"Intermediate"},{level:"Advanced"},{level:"Proficient"}],E=[{skill:"english",proficiency:"90%"},{skill:"french",proficiency:"22%"},{skill:"romanian",proficiency:"100%"}],U={images:[Object(a.jsx)("img",{src:"./bannervid.gif",alt:""})]},F=[{skill:"blender",proficiency:"73%"},{skill:"Unreal Engine",proficiency:"60%"},{skill:"Unity",proficiency:"35%"},{skill:"C#",proficiency:"30%"},{skill:"zbrush",proficiency:"25%"},{skill:"photoshop",proficiency:"48%"},{skill:"substance",proficiency:"20%"},{skill:"aseprite",proficiency:"55%"},{skill:"figma",proficiency:"70%"}],L=[{title:"Magic Sword in Stone",images:[Object(a.jsx)("img",{src:"./projects/sword/r1.webp",alt:"sword1"}),Object(a.jsx)("img",{src:"./projects/sword/r2.webp",alt:"sword2"})],description:"Created and rendered in Blender, this projects purpose was to use volumetric effects and model the sword by myself, create materials while also using existent PBR ones"},{title:"Robot Arm",images:[Object(a.jsx)("img",{src:"./projects/roboarm/roboarm.gif",alt:"robot arm"})],description:"This is one of my first projects in Blender in which I modelled the arm parts and applied inverse kinematics on the armature."},{title:"Wooden Board with Food",images:[Object(a.jsx)("img",{src:"./projects/plate/r1.webp",alt:"food2"}),Object(a.jsx)("img",{src:"./projects/plate/r2.1.webp",alt:"food2.1"}),Object(a.jsx)("img",{src:"./projects/plate/r2.2.webp",alt:"food2.2"}),Object(a.jsx)("img",{src:"./projects/plate/r3.webp",alt:"food3"})],description:"One of my latest projects in Blender, in which I am making high use of existent PBR materials while modelling almost everything by hand, using on most assets non-destructive geometry techniques."},{title:"Portal Stones",images:[Object(a.jsx)("img",{src:"./projects/portal/i1.webp",alt:"portal1"}),Object(a.jsx)("img",{src:"./projects/portal/i2.webp",alt:"portal2"}),Object(a.jsx)("img",{src:"./projects/portal/i3.webp",alt:"portal3"}),Object(a.jsx)("img",{src:"./projects/portal/i4.webp",alt:"portal4"}),Object(a.jsx)("img",{src:"./projects/portal/i5.webp",alt:"portal5"}),Object(a.jsx)("img",{src:"./projects/portal/i6.webp",alt:"portal6"}),Object(a.jsx)("img",{src:"./projects/portal/i7.webp",alt:"portal7"}),Object(a.jsx)("img",{src:"./projects/portal/i8.webp",alt:"portal8"}),Object(a.jsx)("img",{src:"./projects/portal/i9.webp",alt:"portal9"}),Object(a.jsx)("img",{src:"./projects/portal/i10.webp",alt:"portal10"})],description:"A Blender project started from zero with minimum usage of existent PBR materials (only for the stone effect) while the rest of the maps are baked after hand-sculting the objects. The final result is rendered in Unreal engine 4, with the foliage imported from megascans library."},{title:"Jewellery box",images:[Object(a.jsx)("img",{src:"./projects/jewellery/r1.webp",alt:"box1"}),Object(a.jsx)("img",{src:"./projects/jewellery/r2.webp",alt:"box2"}),Object(a.jsx)("img",{src:"./projects/jewellery/r2.1.webp",alt:"box3"})],description:"A Blender project representing a modular product, using PBR materials."},{title:"Motorcycle Helmet",images:[Object(a.jsx)("img",{src:"./projects/motorcyclehelmet/m1.webp",alt:"helmet"})],description:"A Blender project, rendered in Unreal Engine 4. The model parts are modelled by myself and I applied the automotive materials from Unreal Engine."},{title:"Cash Envelopes",images:[Object(a.jsx)("img",{src:"./projects/envelopes/r1.webp",alt:"envelope1"})],description:"A Blender project in which I modelled the real product representation from and with provided image references."},{title:"Icarus Candle",images:[Object(a.jsx)("img",{src:"./projects/icarus/r1.webp",alt:"icarus1"}),Object(a.jsx)("img",{src:"./projects/icarus/r1.1.webp",alt:"icarus2"})],description:"A Blender render with a model sculpted and exported from zBrush. The concept was part of a human male body anatomy study."}];var D=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("header",{children:Object(a.jsx)(o,{})}),Object(a.jsxs)("main",{children:[Object(a.jsx)(p,{}),Object(a.jsx)(l,{title:"Work Experience",children:Object(a.jsx)(g,{names:S})}),Object(a.jsx)(l,{title:"Education",children:Object(a.jsx)(g,{names:A})}),Object(a.jsx)(l,{title:"Reel",children:Object(a.jsx)(I,{title:U.title,images:U.images,description:U.description})}),Object(a.jsx)(l,{title:"Languages Spoken",children:Object(a.jsx)(x,{levels:T,proficiencies:E})}),Object(a.jsx)(l,{title:"Skills",children:Object(a.jsx)(x,{levels:T,proficiencies:F})}),Object(a.jsx)("div",{id:"#projects",children:Object(a.jsx)(l,{title:"Projects",children:L.map((function(e){return Object(a.jsx)(I,{title:e.title,images:e.images,description:e.description})}))})})]}),Object(a.jsx)("footer",{children:Object(a.jsx)(l,{title:"Contact",children:Object(a.jsx)(R,{})})})]})},M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(t){var i=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),r(e),c(e),n(e),s(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),M()}],[[20,1,2]]]);
//# sourceMappingURL=main.52b42d5e.chunk.js.map