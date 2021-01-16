(this["webpackJsonpjacksonmcnabb.com"]=this["webpackJsonpjacksonmcnabb.com"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"About":"I\'m a Computer Science and Electrical and Computer Engineering double major junior at Duke University! I\'m excited by software engineering and machine learning applications, especially in the medical field. I\'m currently taking classes and serving as a teaching assistant for Duke\'s Advanced Software Design and Implementation course. ","Research Description":"I am interested in answering interdisciplinary research questions particularly how to leverage emerging technologies and machine learning to enhance hospital software infrastructure and the point of care.","Research Papers":[{"title":"Pending Review!","affiliation":"Duke University Center for Water, Sanitation, Hygiene and Infectious Disease","conference":"Conference on Computer Vision and Pattern Recognition","date":"2021","file":"washaid.png","url":"/#","authors":""},{"title":"Implementation of Artificial Intelligence-Enabled Clinical Decision Support: A Systematic Review of Clinical Outcomes","conference":"American Medical Informatics Association","affiliation":"IBM Watson Health and Vanderbilt University Department of Biomedical Informatics","date":"2020","file":"ibm.png","url":"https://knowledge.amia.org/71623-amia-1.4589302/t0005-1.4590480/t0005-1.4590481/a213-1.4590659/an213-1.4590660?timeStamp=1609621990797","authors":"McNabb et al."},{"title":"Barriers and Facilitators to Adoption of Artificial Intelligence-Based Clinical Decision Support: Preliminary Findings of a Systematic Review","conference":"American Medical Informatics Association","affiliation":"IBM Watson Health and Vanderbilt University Department of Biomedical Informatics","date":"2020","file":"ibm.png","url":"https://knowledge.amia.org/71623-amia-1.4589302/t0005-1.4590480/t0005-1.4590481/a260-1.4590518/an260-1.4590519","authors":"Wan, McNabb et al."}],"Experience Description Part 1":"In addition to professional software experience with ","Experience Description Part 2":", I\'ve pursued collaborative, fast-paced, and interdisciplinary academic software projects for both academia and industry.","Professional Experience":[{"company":"GE Healthcare","location":"Remote","title":"Software Engineering Intern","description":"I designed and implemented a Python-enabled web tool for internal data processing and pipeline integration/management for medical device reliability data with an international, cross-functional Agile team.","date":"July 2020 - August 2020"},{"company":"IBM Watson Health","location":"Nashville, TN","title":"Biomedical Informatics, Software Engineering Intern","description":"I collaborated on multiple machine learning (PyTorch/TensorFlow) applications in biomedical informatics projects with Vanderbilt University Medical Center clinical, administrative, and cloud infrastructure.","date":"May 2019 - August 2019"}],"Selected Academic Projects":[{"company":"Duke University Center for Water, Sanitation, Hygiene, and Infectious Disease","location":"Durham, NC","title":"Project Software Engineer","description":"I engineered and prototyped a smart human waste screening system leveraging bioanalytics for intelligent diagnosis and prevention of gastrointestinal disease for market usage. Specifically, I designed, trained, and deployed neural networks (PyTorch) for predictive image and diagnostic classification for live stool samples.","date":"August 2019 - Present"},{"company":"Duke University School of Medicine Division of Brain Stimulation and Neurophysiology","location":"Durham, NC","title":"Research Project Engineer","description":"I assisted in the designing and prototyping of a controllable pulse parameter transcranial magnetic stimulation device with the Division of Brain Stimulation and Neurophysiology by developing electrical hardware and software with MATLAB.","date":"September 2019 - March 2020"},{"company":"Duke University Hospital","location":"Durham, NC","title":"Research Project Engineer","description":"I optimized use of Arduino, circuitry, and bioanalytical material science and employed engineering design to develop an automated pneumatic capsule opener for Duke University Hospital infrastructure and Ergonomics Division. I also had the opportunity to collaborate with Duke professors, Duke University Hospital and Ergonomics Division staff, and peer engineers to pitch our prototyped solution to Duke University faculty and clients.","date":"September 2018 - May 2019"}],"Languages":[{"name":"Python","file":"python.png"},{"name":"Java","file":"java.png"},{"name":"C","file":"cprogramming.png"},{"name":"C++","file":"cplusplus.png"},{"name":"Javascript","file":"javascript.png"},{"name":"MATLAB","file":"matlab.png"}],"Libraries":[{"name":"Pandas","file":"pandas.png"},{"name":"PyTorch","file":"pytorch.png"},{"name":"scikit-learn","file":"scikit-learn.png"},{"name":"Tensorflow","file":"tensorflow.png"},{"name":"NumPy","file":"numpy.png"}],"Web Development":[{"name":"React.js","file":"react.png"},{"name":"Node.js","file":"node.png"},{"name":"CSS","file":"css.png"}],"Other":[{"name":"Git","file":"git.png"},{"name":"Linux","file":"linux.png"},{"name":"Jenkins","file":"jenkins.png"},{"name":"REST API","file":"restapi.png"}]}')},34:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a.n(i),r=a(21),s=a.n(r),o=(a(34),a(3)),l=a(4),d=a(6),m=a(5),b=a(8),h=a(11),j="#FFFFFF",u="#000000",p="#528fff",f=j,g="#414141",O="#303030",x="#414141",v="#414141",y="#1357af",k=u,N="#d3d3d3",w="#b3b3b3",E="#dadada",P="#d3d3d3",S=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentHeading:"about",isLightMode:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){for(var e=this,t=["top buffer","about","experience","research","skills"],a=[0],n=1;n<t.length;n++)a[n]=document.getElementById(t[n]).clientHeight+a[n-1];document.addEventListener("scroll",(function(){for(var n=1;!(window.scrollY<a[n]-80);)n++;if(t[n]!==e.state.currentHeading){var i=t[n];e.setState({currentHeading:i})}})),document.getElementById("darkModeButton").addEventListener("click",(function(){var t=!e.state.isLightMode;e.setState({isLightMode:t}),t?(document.documentElement.style.setProperty("--app-base",E),document.documentElement.style.setProperty("--blue",y),document.documentElement.style.setProperty("--card",N),document.documentElement.style.setProperty("--section-card",w),document.documentElement.style.setProperty("--text-color",k),document.documentElement.style.setProperty("--nav",P)):(document.documentElement.style.setProperty("--app-base",x),document.documentElement.style.setProperty("--card",g),document.documentElement.style.setProperty("--blue",p),document.documentElement.style.setProperty("--section-card",O),document.documentElement.style.setProperty("--text-color",f),document.documentElement.style.setProperty("--nav",v))}))}},{key:"render",value:function(){return Object(n.jsxs)("aside",{className:"border-end border-primary rounded-end border-2 max-height",id:"nav-aside-base",children:[Object(n.jsx)("div",{className:"nav-text",children:Object(n.jsx)("header",{className:"nav-titling",children:Object(n.jsx)("a",{"data-text":"Jackson McNabb",href:"index.html",children:"Jackson McNabb"})})}),Object(n.jsxs)("div",{id:"socials-nav",children:[Object(n.jsxs)("a",{className:"mail-icon",href:"mailto:jacksondmcnabb@gmail.com;jackson.mcnabb@duke.edu",target:"_blank",rel:"noopener noreferrer",children:[Object(n.jsx)(b.a,{icon:h.a,size:"lg"})," "]}),Object(n.jsxs)("a",{className:"github-icon",href:"https://github.com/JacksonMcNabb",target:"_blank",rel:"noopener noreferrer",children:[Object(n.jsx)(b.a,{icon:["fab","github"],size:"lg"})," "]}),Object(n.jsxs)("a",{className:"linkedin-icon",href:"https://www.linkedin.com/in/jdmcnabb",target:"_blank",rel:"noopener noreferrer",children:[Object(n.jsx)(b.a,{icon:["fab","linkedin"],size:"lg"})," "]}),Object(n.jsxs)("a",{className:"instagram-icon",href:"https://www.instagram.com/jacksonmcnabb125/",target:"_blank",rel:"noopener noreferrer",children:[Object(n.jsx)(b.a,{icon:["fab","instagram"],size:"lg"})," "]})]}),Object(n.jsx)("nav",{id:"navbar-base",role:"navigation",className:"navbar",children:Object(n.jsx)("div",{id:"navbar",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"about"===this.state.currentHeading?"active":"none",children:Object(n.jsx)("a",{href:"#about","data-nav-section":"about",children:"ABOUT ME"})}),Object(n.jsx)("li",{className:"experience"===this.state.currentHeading?"active":"none",children:Object(n.jsx)("a",{href:"#experience","data-nav-section":"experience",children:"EXPERIENCE"})}),Object(n.jsx)("li",{className:"research"===this.state.currentHeading?"active":"none",children:Object(n.jsx)("a",{href:"#research","data-nav-section":"research",children:"RESEARCH"})}),Object(n.jsx)("li",{className:"skills"===this.state.currentHeading?"active":"none",children:Object(n.jsx)("a",{href:"#skills","data-nav-section":"skills",children:"SKILLS"})})]})})}),Object(n.jsx)("div",{className:"darkmode-button-position",children:Object(n.jsxs)("button",{id:"darkModeButton",type:"button",className:this.state.isLightMode?"btn btn-outline-dark":"btn btn-outline-light",children:[" ",Object(n.jsx)("i",{className:this.state.isLightMode?"fas fa-sun dark-mode-button-padding":"fas fa-moon dark-mode-button-padding"})]})})]})}}]),a}(i.Component),I=a(22),M=a(17),C=a(16),D=a(24),A=a(23);function L(){var e=Object(I.a)(["\n  .animated {\n    float: inline-end;\n    position: relative;\n    max-width: 150px;\n    width: 50%;\n    height: 50%;\n    margin-bottom: 0.47em;\n    stroke-dasharray: ",";\n    stroke-dashoffset: ",";\n  }\n  .animated.visible {\n    animation: draw 15s linear forwards;\n  }\n  @keyframes draw {\n    from {\n      stroke-dashoffset: ",";\n    }\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n"]);return L=function(){return e},e}var H=D.a.div(L(),(function(e){return e.pathLength}),(function(e){return e.pathLength}),(function(e){return e.pathLength})),B=function(e){var t=Object(A.a)({triggerOnce:!0}),a=Object(C.a)(t,2),c=a[0],r=a[1],s=Object(i.createRef)(),o=Object(i.useState)(),l=Object(C.a)(o,2),d=l[0],m=l[1];return Object(i.useEffect)((function(){s.current&&m(s.current.getTotalLength())}),[s]),Object(n.jsx)(H,{ref:c,pathLength:d,children:Object(n.jsxs)("h1",{className:"title-wrapper",children:["Hi, I'm",Object(n.jsx)("svg",Object(M.a)(Object(M.a)({className:r?"animated visible":"animated",viewBox:"0 0 89.467 37.475"},e),{},{children:Object(n.jsx)("g",{children:Object(n.jsx)("path",{ref:s,d:"M36.405 1.228c-.826 0-2.306.804-4.44 2.411-1.629.473-3.029.79-4.199.953-2.673.391-4.526.776-5.558 1.155-1.021.378-2.037 1.046-3.047 2.005-1.709 1.635-2.564 3.668-2.564 6.099 0 1.364.345 2.58 1.033 3.647.688 1.053 1.612 1.79 2.77 2.208l-.275.568c-1.262 2.62-2.518 5.234-3.769 7.84-.768 1.554-1.571 2.884-2.409 3.992-2.134 2.823-4.67 4.234-7.607 4.234-1.376 0-2.518-.364-3.424-1.094-.918-.716-1.377-1.607-1.377-2.674 0-.648.098-.973.293-.973.023.04.034.088.034.142.034.878.35 1.317.947 1.317.826 0 1.239-.54 1.239-1.62 0-.906-.379-1.358-1.136-1.358-.47 0-.866.236-1.188.709-.332.473-.499 1.047-.499 1.722 0 1.23.482 2.242 1.446 3.04.964.796 2.197 1.195 3.7 1.195 2.604 0 5.151-.926 7.64-2.776 1.561-1.162 2.829-2.485 3.804-3.971.987-1.486 2.197-3.951 3.631-7.395.62-1.486.964-2.317 1.033-2.493.16.028.361.041.602.041 1.583 0 3.075-.669 4.475-2.006 1.41-1.35 2.116-2.782 2.116-4.295 0-.135-.051-.203-.155-.203-.091 0-.16.108-.206.324-.264 1.378-.723 2.486-1.377 3.323-1.32 1.689-2.948 2.533-4.887 2.533h-.43c1.652-4.187 3.155-7.422 4.508-9.705A31.334 31.334 0 0132.137 3.8a19.666 19.666 0 003.132-1.296c.918-.5 1.377-.851 1.377-1.054 0-.148-.08-.223-.24-.223zm-4.767 2.736c-3.958 2.958-7.658 8.104-11.1 15.438-2.019-.797-3.029-2.262-3.029-4.396 0-2.188.987-4.275 2.96-6.26a11.53 11.53 0 013.08-2.23c1.125-.553 2.766-1.114 4.923-1.681 1.33-.351 2.386-.642 3.166-.871zm22.613 4.862l-6.315 12.44c-.44.905-.71 1.46-.988 2.028-.027.036-.049.055-.08.1-2.707 4.2-4.853 6.3-6.436 6.3-1.01 0-1.514-.634-1.514-1.904 0-1.512.694-3.383 2.082-5.612s2.559-3.343 3.51-3.343c.563 0 .844.304.844.912 0 .77-.407 1.391-1.222 1.864-1.055.608-1.583 1.27-1.583 1.985 0 .608.258.912.774.912.528 0 1.056-.466 1.584-1.398.539-.932.808-1.864.808-2.796 0-1.189-.424-1.783-1.273-1.783-.7 0-1.606.378-2.72 1.135-1.319.878-2.368 1.925-3.148 3.14-.289.449-.505.89-.687 1.327-.867 1.433-1.723 2.68-2.566 3.718-1.01 1.23-1.744 1.844-2.203 1.844-.447 0-.671-.318-.671-.952 0-.662.528-2.033 1.583-4.113l3.046-5.937c-.493.095-.895.142-1.204.142-.264 0-.568-.047-.912-.142l-.878 1.966c.091-.379.137-.683.137-.912 0-.81-.355-1.216-1.067-1.216-.837 0-1.938.446-3.304 1.337-3.109 2-4.663 4.296-4.663 6.889 0 .932.206 1.709.619 2.33.413.608.924.912 1.532.912.573 0 1.164-.331 1.772-.993.608-.662 1.486-1.938 2.633-3.83-.367.852-.55 1.642-.55 2.371 0 .703.166 1.29.499 1.763.332.46.763.689 1.29.689.78 0 1.847-.96 3.201-2.877.616-.859.996-1.429 1.386-2.01-.098.41-.164.819-.164 1.22 0 1 .287 1.864.86 2.593.574.716 1.263 1.074 2.066 1.074 1.239 0 2.742-1.135 4.509-3.404a85.456 85.456 0 001.426-1.899l-1.667 3.418c-.322.662-.614 1.257-.878 1.783.493-.08.866-.121 1.119-.121.298 0 .602.04.912.121l.223-.405c.47-.932 1.09-2.249 1.86-3.95a95.576 95.576 0 012.512-5.106l2.96-5.633a204.192 204.192 0 001.325-2.614 630.704 630.704 0 001.342-2.532c.195-.365.339-.642.43-.83-.504.107-.872.161-1.101.161-.23 0-.58-.054-1.05-.162zm9.156 6.14c-.39 0-.786.337-1.188 1.012-.401.676-.7 1.486-.895 2.432a112.79 112.79 0 01-1.652 2.41l-1.376 1.986a.598.598 0 00-.31-.08c-.654 0-1.29.479-1.91 1.438-.6.945-.9 1.917-.909 2.915-1.241 1.739-2.207 2.616-2.895 2.616-.378 0-.568-.176-.568-.527 0-.216.121-.608.362-1.175.562-1.35.843-2.263.843-2.735 0-.851-.597-1.6-1.79-2.25.597-.31 1.371-1.107 2.324-2.39.745-1.027 1.365-1.54 1.858-1.54.356 0 .534.162.534.486 0 .42-.155.743-.465.973-.746.554-1.119 1.074-1.119 1.56 0 .527.247.79.74.79.436 0 .872-.317 1.308-.952.448-.648.672-1.297.672-1.945 0-.973-.436-1.459-1.308-1.459-.712 0-1.406.46-2.083 1.378-1.262 1.715-2.18 2.722-2.753 3.019a2.513 2.513 0 00-1.016-.203c-.378 0-.567.115-.567.345 0 .27.2.405.602.405.287 0 .648-.108 1.084-.324.379.256.568.533.568.83 0 .243-.109.615-.327 1.115l-.017.08c-.642 1.5-.963 2.466-.963 2.898 0 .5.19.945.568 1.337.378.392.814.588 1.307.588.774 0 1.816-.888 3.115-2.626.042.758.259 1.382.671 1.856.47.513 1.096.77 1.876.77 1.377 0 2.564-.446 3.563-1.337 1.01-.892 1.514-1.946 1.514-3.161 0-.581-.155-1.297-.465-2.148-.608-1.702-.912-2.944-.912-3.728 0-.31.035-.675.104-1.094 1.434-1.607 2.15-2.681 2.15-3.221 0-.23-.09-.345-.275-.345zm7.503 3.565c-1.055 0-2.398.682-4.027 2.046-2.317 1.932-3.476 3.938-3.476 6.018 0 .932.24 1.736.723 2.411.493.662 1.084.993 1.772.993 1.331 0 2.754-1.263 4.268-3.789.275.162.59.243.947.243.849 0 1.778-.594 2.788-1.783.46-.542.75-.938.898-1.211.055-.027.127-.11.22-.268 1.72-2.904 2.874-4.356 3.46-4.356.286 0 .43.203.43.608 0 .716-.764 2.505-2.29 5.369l-2.684 5.004a7.567 7.567 0 011.136-.08c.115 0 .453.026 1.015.08 3.488-7.32 6.07-10.981 7.744-10.981.493 0 .74.277.74.83 0 .446-.465 1.48-1.394 3.1-.895 1.54-1.451 2.574-1.67 3.1a4.465 4.465 0 00-.309 1.682c0 .69.172 1.27.516 1.743.356.472.792.709 1.308.709.78 0 1.853-.96 3.219-2.877 1.663-2.337 2.495-3.647 2.495-3.93 0-.082-.034-.122-.103-.122-.058 0-.115.067-.173.202-2.5 4.282-4.262 6.423-5.283 6.423-.47 0-.705-.277-.705-.83 0-.528.539-1.743 1.617-3.648 1.056-1.864 1.584-3.248 1.584-4.153 0-.716-.173-1.317-.517-1.803-.344-.487-.768-.73-1.273-.73-.62 0-1.297.405-2.03 1.216-.724.81-1.762 2.316-3.116 4.518.86-1.54 1.29-2.742 1.29-3.606 0-.581-.137-1.081-.412-1.5-.276-.419-.608-.628-.998-.628-.608 0-1.79 1.385-3.545 4.154l-.265.41c-.058.03-.132.104-.235.258A6.941 6.941 0 0172.89 25.4c-.688.567-1.29.85-1.807.85a1.31 1.31 0 01-.774-.243c1.388-2.188 2.082-4.059 2.082-5.612 0-1.243-.494-1.864-1.48-1.864zm-.034.264c.837 0 1.256.547 1.256 1.64 0 .581-.092 1.108-.275 1.581-.07-.27-.195-.405-.379-.405-.424 0-.86.351-1.308 1.053-.447.703-.671 1.385-.671 2.047 0 .459.166.905.499 1.337-1.468 2.404-2.822 3.606-4.061 3.606-.758 0-1.136-.466-1.136-1.398 0-1.607.751-3.586 2.254-5.936 1.503-2.35 2.777-3.525 3.82-3.525zm-37.689.04c.517 0 .775.33.775.993 0 .945-.798 2.688-2.392 5.227-1.95 3.093-3.322 4.64-4.113 4.64-.666 0-.999-.44-.999-1.317 0-1.5.855-3.465 2.565-5.896 1.72-2.431 3.109-3.647 4.164-3.647zm28.103.04c-.046.406-.069.912-.069 1.52 0 .743.01 1.317.035 1.722.023.392.034.79.034 1.196 0 1.512-.436 2.93-1.308 4.254-.86 1.31-1.773 1.966-2.736 1.966a1.61 1.61 0 01-1.24-.547c-.332-.365-.498-.818-.498-1.358 0-.425.124-.828.356-1.213.07-.103.137-.198.208-.304.315-.398.676-.66 1.088-.772 1.112-.284 1.669-.824 1.669-1.621 0-.31-.109-.574-.327-.79a276.216 276.216 0 002.788-4.052z",fill:"none",stroke:"#4f77ab",strokeWidth:1.3})})})),"."]})})},R=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"base-section",id:"about",children:[Object(n.jsx)("img",{className:"header-image",src:"./images/headshot-circle.png",alt:"Jackson's headshot"}),Object(n.jsx)(B,{})]})}}]),a}(i.Component),z=a(10),T=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("p",{className:"section-body about-section base-section padded",id:"about",children:[z.About,Object(n.jsxs)("span",{children:[Object(n.jsx)("a",{href:"mailto:jacksondmcnabb@gmail.com;jackson.mcnabb@duke.edu",children:"Contact me"})," ","about some of my ",Object(n.jsx)("a",{href:"#experience",children:"projects"})," or"," ",Object(n.jsx)("a",{href:"#research",children:"research"}),"!"]})]})}}]),a}(i.Component),F=a(7),J=a.n(F),U=a(10),W=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).createExperienceCard=function(e,t){return i.cardParity=e%2,Object(n.jsx)(J.a,{bottom:!0,children:Object(n.jsxs)("div",{id:t.company,className:i.cardParity?"card research-card card-coloring-left":"card research-card card-coloring-right",children:[Object(n.jsxs)("div",{className:"card-header",children:[t.company," | ",t.date]}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{children:t.title}),Object(n.jsx)("h6",{className:"card-subtitle mb-2",style:{opacity:"0.5"},children:t.location}),Object(n.jsx)("p",{children:t.description})]})]})})},i.state={selected:"no section selected",cardParity:""},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(U["Selected Academic Projects"]).length,a=Array.from(Array(t).keys()),i=Object.keys(U["Professional Experience"]).length,c=Array.from(Array(i).keys());return Object(n.jsxs)("div",{className:"base-section card card-coloring","data-section":"experience","data-target":"experience",id:"experience",children:[Object(n.jsx)("section",{className:"section-header base-section",children:"Experience"}),Object(n.jsxs)("p",{className:"section-body padded base-section about-section",children:[U["Experience Description Part 1"],Object(n.jsx)("a",{href:"#IBM Watson Health",children:"IBM Watson Health"})," and"," ",Object(n.jsx)("a",{href:"#GE Healthcare",children:"GE Healthcare"}),U["Experience Description Part 2"]]}),Object(n.jsx)("div",{children:c.map((function(t){var a=U["Professional Experience"][t];return e.createExperienceCard(t,a)}))}),Object(n.jsx)("div",{children:a.map((function(t){var a=U["Selected Academic Projects"][t];return e.createExperienceCard(t,a)}))})]})}}]),a}(i.Component),_=a(10),G=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).createResearchCard=function(e,t){return i.cardParity=e%2,Object(n.jsx)(J.a,{bottom:!0,children:Object(n.jsx)("div",{onMouseOver:function(){i.setState({selected:e})},onMouseOut:function(){i.setState({selected:"no section selected"})},children:Object(n.jsxs)("a",{id:t.title,className:i.cardParity?"card research-card card-coloring-left":"card research-card card-coloring-right",href:t.url,target:"_blank",rel:"noopener noreferrer",children:[Object(n.jsxs)("div",{className:"card-header",children:[t.conference," | ",t.date]}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{children:t.title}),Object(n.jsx)("h6",{className:"card-subtitle mb-2",style:{opacity:"0.5"},children:t.authors}),Object(n.jsx)("div",{className:i.cardParity?"research-image-wrapper-left":"research-image-wrapper-right",children:Object(n.jsx)("img",{className:i.state.selected===e?"research-image-active":"research-image-not-active",src:"./images/"+t.file,alt:t.affiliation+" image"})}),Object(n.jsxs)("p",{children:["With support from ",t.affiliation]})]})]})})})},i.state={selected:"no section selected",cardParity:""},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(_["Research Papers"]).length,a=Array.from(Array(t).keys());return Object(n.jsxs)("div",{id:"research",className:"card card-coloring",children:[Object(n.jsx)("section",{className:"section-header base-section",children:"Research"}),Object(n.jsxs)("p",{className:"section-body padded base-section about-section",children:[_["Research Description"]," "]}),Object(n.jsx)("div",{children:a.map((function(t){var a=_["Research Papers"][t];return e.createResearchCard(t,a)}))})]})}}]),a}(i.Component),V=a(10),q=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).constructSkillsList=function(e,t){return Object(n.jsx)(J.a,{bottom:!0,duration:1500,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"technical-skill-name-titling",children:e}),Object(n.jsx)("div",{className:"skill-container",children:t.map((function(e){return Object(n.jsx)(J.a,{bottom:!0,duration:1500,children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"technicals-list",onMouseOver:function(){i.setState({selected:e.file})},onMouseOut:function(){i.setState({selected:"no section selected"})},children:[Object(n.jsx)("img",{style:{height:"2.5em"},src:"./images/skills/"+e.file,className:i.state.selected===e.file?"skill-image-active":"skill-image-notactive",alt:e.name+" image"})," "]}),Object(n.jsx)("span",{id:"skill-name",className:i.state.selected===e.file?"skill-title-active":"skill-title-notactive",children:e.name})]})})}))})]})})},i.state={selected:"no section selected"},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(J.a,{bottom:!0,duration:1500,children:Object(n.jsxs)("div",{className:"base-section card card-coloring",id:"skills","data-section":"skills",children:[Object(n.jsx)("a",{className:"section-header",href:"#skills",children:"Technical Skills"}),Object(n.jsx)("div",{children:["Languages","Libraries","Web Development","Other"].map((function(t){var a=V[t];return e.constructSkillsList(t,a)}))})]})})}}]),a}(i.Component),K=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("footer",{className:"footer mt-auto py-4",children:Object(n.jsx)("div",{className:"container-footer",children:Object(n.jsxs)("span",{className:"footer-text footer",children:["Designed and built by Jackson McNabb. Coded with",Object(n.jsx)("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",id:"react-icon",children:Object(n.jsx)(b.a,{icon:["fab","react"],size:"lg"})}),"and",Object(n.jsx)("a",{id:"love-icon",children:Object(n.jsx)(b.a,{icon:h.b,size:"lg"})}),"at",Object(n.jsxs)("a",{href:"https://github.com/JacksonMcNabb",target:"_blank",rel:"noopener noreferrer",id:"project-repo",children:[Object(n.jsx)(b.a,{icon:["fab","github"],size:"lg"})," ."]})]})})})}}]),a}(i.Component),X=a(9),Y=a(28);X.b.add(Y.a);var Q=function(){return Object(n.jsxs)("div",{className:"app-base",id:"app-container",children:[Object(n.jsx)(S,{}),Object(n.jsxs)("div",{id:"main-container",children:[Object(n.jsx)(J.a,{top:!0,children:Object(n.jsx)(R,{})}),Object(n.jsx)(J.a,{bottom:!0,delay:1e3,children:Object(n.jsx)(T,{})}),Object(n.jsxs)(J.a,{bottom:!0,delay:2e3,children:[Object(n.jsx)(W,{})," "]}),Object(n.jsx)(J.a,{bottom:!0,children:Object(n.jsx)(G,{})}),Object(n.jsx)(q,{}),Object(n.jsx)(K,{})]})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),Z()}},[[42,1,2]]]);
//# sourceMappingURL=main.2e24a195.chunk.js.map