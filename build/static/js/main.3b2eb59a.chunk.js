(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(31),a=n.n(r),c=(n(37),n(5)),o=n(3),i=(n(38),n(39),n(40),n(13)),l=n(1);function j(e){var t=e.user,n=e.handleLogOut;return console.log(t,"user in NavBar!"),Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg bg-black",children:["\xa0\xa0",Object(l.jsx)("span",{className:"text-info",children:null===t||void 0===t?void 0:t.email}),Object(l.jsx)(i.b,{to:"/",className:"nav-item",children:Object(l.jsx)("img",{src:null===t||void 0===t?void 0:t.photoUrl,alt:null===t||void 0===t?void 0:t.photoUrl,id:"nav-pic"})}),"\xa0 | \xa0",Object(l.jsx)(i.b,{to:"/Monsters",className:"btn btn-outline-info",children:"Monsters"}),"\xa0 | \xa0",Object(l.jsx)(i.b,{to:"/Characters/New",className:"btn btn-outline-info nav-item",children:"New Ascean"}),"\xa0 | \xa0",Object(l.jsx)(i.b,{to:"/User/Characters",className:"btn btn-outline-info nav-item",children:"Your Ascean"}),"\xa0\xa0",Object(l.jsx)(i.b,{to:"",onClick:n,className:"btn btn-outline-danger",children:"Log Out"})]})})}var d=n(6),h=n(14),b=n(8);n(42);function u(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var p={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:u,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=u();return e?JSON.parse(atob(e.split(".")[1])).user:null}},m="/api/monsters/";function O(){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(m,{headers:{Authorization:"Bearer "+p.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return f.apply(this,arguments)}function f(){return(f=Object(b.a)(Object(d.a)().mark((function e(t){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(m,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer "+p.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e,"<- What response are you getting?"),new Error(e.err)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(43);var v=n(32),w=n(27);function y(e){var t=e.monsters,n=Object(s.useState)(null),r=Object(c.a)(n,2),a=(r[0],r[1],t.map((function(e){return Object(l.jsx)(v.a,{children:Object(l.jsx)(w.a,{children:Object(l.jsxs)("div",{className:"card bg-black col-1 offset-1 my-5",style:{width:"30vw"},children:[Object(l.jsx)("img",{src:"/images/"+e.index+".jpg",alt:e.name,style:{width:"30vw",height:"30vh"},id:"monster-image"}),Object(l.jsxs)("div",{className:"card-body bg-warning",children:[Object(l.jsx)("h1",{className:"card-title",children:e.name}),Object(l.jsxs)("div",{className:"card-text",children:[Object(l.jsx)("h2",{children:e.size}),Object(l.jsx)("h2",{children:e.type}),Object(l.jsxs)("h2",{children:["Hit Points: ",e.hit_points]}),Object(l.jsxs)("h2",{children:["Hit Dice: ",e.hit_dice]}),Object(l.jsxs)("h2",{children:["Hit Points Roll: ",e.hit_points_roll]}),Object(l.jsxs)("h2",{children:["Armor Class: ",e.armor_class]}),Object(l.jsxs)("h2",{children:["Challenge Rating: ",e.challenge_rating]}),Object(l.jsxs)("h2",{children:["Languages: ",e.languages]}),e.speed?Object(l.jsxs)("h2",{children:["Speed (Burrow): ",e.speed.burrow?e.speed.burrow:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Climb): Error"}),e.speed?Object(l.jsxs)("h2",{children:["Speed (Climb): ",e.speed.climb?e.speed.climb:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Climb): Error"}),e.speed?Object(l.jsxs)("h2",{children:["Speed (Flight): ",e.speed.fly?e.speed.fly:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Flight): Error"}),e.speed?Object(l.jsxs)("h2",{children:["Speed (Swim): ",e.speed.swim?e.speed.swim:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Swim): Error"}),e.speed?Object(l.jsxs)("h2",{children:["Speed (Walk): ",e.speed.walk?e.speed.walk:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Walk): Error"}),Object(l.jsx)("h2",{children:"Attributes"}),Object(l.jsxs)("h2",{children:["Strength: ",e.strength]}),Object(l.jsxs)("h2",{children:["Dexterity: ",e.dexterity]}),Object(l.jsxs)("h2",{children:["Constitution: ",e.constitution]}),Object(l.jsxs)("h2",{children:["Intelligence: ",e.intelligence]}),Object(l.jsxs)("h2",{children:["Wisdom: ",e.wisdom]}),Object(l.jsxs)("h2",{children:["Charisma: ",e.charisma]})]})]})]})})})})));return Object(l.jsx)("div",{className:"border border-black",children:a})}function k(e){var t=e.loggedUser,n=e.handleLogout,r=Object(s.useState)([]),a=Object(c.a)(r,2),o=a[0],i=a[1],u=Object(s.useState)(""),p=Object(c.a)(u,2);p[0],p[1];return Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,console.log(t," <- the response in getMonsters"),i(Object(h.a)(t.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"border border-black",children:[Object(l.jsx)(j,{user:t,handleLogout:n}),Object(l.jsx)("img",{src:t.photoUrl,alt:t.username,id:"loggedUser-pic"}),Object(l.jsx)("h5",{children:t.email}),Object(l.jsxs)("h2",{children:["Hello, ",t.username]}),Object(l.jsxs)("h3",{children:["Bio: ",t.bio]}),Object(l.jsx)(y,{monsters:o,loggedUser:t})]})}var S=n(11),N=n(4);var C=n(28),E=n(12);var U={signup:function(e){return fetch("/api/users/signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return p.setToken(t)}))},logout:function(){p.removeToken()},login:function(e){return fetch("/api/users/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return p.setToken(t)}))},getUser:function(){return p.getUserFromToken()}};function I(e,t){return e===t}function M(e){var t=Object(s.useState)({message:"",passwordError:!1}),n=Object(c.a)(t,2),r=(n[0],n[1]),a=Object(s.useState)({username:"",email:"",password:"",passwordConf:"",bio:""}),i=Object(c.a)(a,2),j=i[0],h=i[1],u=Object(s.useState)(""),p=Object(c.a)(u,2),m=p[0],O=p[1],x=Object(o.m)();function g(e){h(Object(N.a)(Object(N.a)({},j),{},Object(S.a)({},e.target.name,e.target.value)))}function f(){return(f=Object(b.a)(Object(d.a)().mark((function t(n){var s,a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),I(j.password,j.passwordConf)){t.next=3;break}return t.abrupt("return",r({message:"Passwords Must Match!",passwordError:!0}));case 3:for(a in r({message:"",passwordError:!1}),(s=new FormData).append("photo",m),j)s.append(a,j[a]);return console.log(s," <- form Data, you cant see this!","you have to loop over it"),console.log(s.forEach((function(e){return console.log(e)}))," < This lets you see the key values in formData"),t.prev=9,t.next=12,U.signup(s);case 12:e.handleSignUpOrLogin(),x("/"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(9),console.log(t.t0),r({message:t.t0.message,passwordError:!1});case 20:case"end":return t.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}var v=j.password!==j.passwordConf;return Object(l.jsxs)("div",{id:"signup",className:"border border-black bg-black text-white",children:[Object(l.jsxs)("div",{className:"form-container",children:[Object(l.jsx)("h2",{children:"Sign Up"}),Object(l.jsxs)(E.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(l.jsxs)(E.a.Group,{className:"my-2",controlId:"formBasicUsername",children:[Object(l.jsx)(E.a.Label,{children:"Username"}),Object(l.jsx)(E.a.Control,{type:"text",name:"username",placeholder:"username",value:j.username,onChange:g,required:!0})]}),Object(l.jsxs)(E.a.Group,{className:"my-2",controlId:"formBasicEmail",children:[Object(l.jsx)(E.a.Label,{children:"Email Address"}),Object(l.jsx)(E.a.Control,{type:"email",name:"email",placeholder:"email",value:j.email,onChange:g,required:!0})]}),Object(l.jsxs)(E.a.Group,{className:"my-2",controlId:"formBasicPassword",children:[Object(l.jsx)(E.a.Label,{children:"Password"}),Object(l.jsx)(E.a.Control,{name:"password",type:"password",placeholder:"password",value:j.password,onChange:g,required:!0})]}),Object(l.jsxs)(E.a.Group,{className:"my-2",controlId:"formBasicPasswordConfirm",children:[Object(l.jsx)(E.a.Label,{children:"Confirm Password"}),Object(l.jsx)(E.a.Control,{name:"passwordConf",type:"password",placeholder:"Confirm Password",value:j.passwordConf,onChange:g,required:!0})]}),Object(l.jsxs)(E.a.Group,{className:"my-2",controlId:"formBasicUser",children:[Object(l.jsx)(E.a.Label,{children:"Your Bio Here!"}),Object(l.jsx)(E.a.Control,{type:"textarea",label:"bio",name:"bio",placeholder:"Tell us more about yourself...",value:j.bio,onChange:g})]}),Object(l.jsxs)(E.a.Group,{className:"my-2",controlId:"formBasicPhoto",children:[Object(l.jsx)(E.a.Label,{children:"Profile Picture!"}),Object(l.jsx)(E.a.Control,{type:"file",name:"photoUrl",placeholder:"upload image",onChange:function(e){console.log(e.target.files," < - this is e.target.files!"),O(e.target.files[0])}})]}),Object(l.jsx)(C.a,{type:"submit",variant:"info",disabled:v,className:"btn",children:"SIGN UP"})]})]}),Object(l.jsxs)("p",{className:"error-message",children:["\xa0",j.error]})]})}n(46);function L(e){var t=Object(s.useState)(""),n=Object(c.a)(t,2),r=n[0],a=n[1],i=Object(s.useState)({email:"",password:""}),j=Object(c.a)(i,2),h=j[0],u=j[1],p=Object(o.m)();function m(e){u(Object(N.a)(Object(N.a)({},h),{},Object(S.a)({},e.target.name,e.target.value)))}function O(){return(O=Object(b.a)(Object(d.a)().mark((function t(n){return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,U.login(h);case 4:e.handleSignUpOrLogin(),p("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)(E.a,{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(l.jsxs)(E.a.Group,{className:"my-2",controlId:"formBasicEmail",children:[Object(l.jsx)(E.a.Label,{children:"Email Address"}),Object(l.jsx)(E.a.Control,{type:"email",name:"email",placeholder:"email",value:h.email,onChange:m,required:!0})]}),Object(l.jsxs)(E.a.Group,{className:"my-2",controlId:"formBasicPassword",children:[Object(l.jsx)(E.a.Label,{children:"Password"}),Object(l.jsx)(E.a.Control,{name:"password",type:"password",placeholder:"password",value:h.password,onChange:m,required:!0})]}),Object(l.jsx)(C.a,{type:"submit",variant:"info",className:"btn",children:"SIGN UP"})]})}),Object(l.jsxs)("p",{className:"error-message",children:["\xa0",r]})]})}n(47);function _(e){e.monster,e.key;var t=e.getMonstahUrl,n=(e.loggedUser,Object(s.useState)({})),r=Object(c.a)(n,2),a=r[0],i=r[1],j=Object(s.useState)(""),u=Object(c.a)(j,2),p=u[0],m=u[1],O=Object(s.useState)([]),x=Object(c.a)(O,2),f=x[0],v=x[1],w="https://www.dnd5eapi.co/api/monsters/",y=Object(o.o)().monsterName;function k(e){return S.apply(this,arguments)}function S(){return S=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,"<- Monstroso in handleMonster start"),e.next=4,g(t);case 4:n=e.sent,console.log(n,"<- Response in handleMonster"),v([n.data].concat(Object(h.a)(f))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message,"<- This is the error in handleMonster");case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),S.apply(this,arguments)}function N(e){e.preventDefault();var t="".concat(w).concat(y);function n(){return(n=Object(b.a)(Object(d.a)().mark((function e(){var n,s,r,c,o;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(y,"<- Monster Data in Monster Detail"),e.prev=1,e.next=4,fetch(t);case 4:if(n=e.sent,console.log(n),!n.ok){e.next=16;break}return e.next=9,n.json();case 9:for(o in s=e.sent,console.log(s,"<- Can you be my favorite Monster?"),r=new FormData,c=["special_abilities","proficiencies","damage_vulnerabilities","damage_resistances","damage_immunities","condition_immunities","actions","senses","legendary_actions","speed","index","name","size","type","alignment","armor_class","hit_points","hit_dice","hit_points_roll","strength","dexterity","constitution","intelligence","wisdom","charisma","languages","challenge_rating","xp"],a)c.includes(o)&&(r[o]=a[o]);console.log(r.forEach((function(e){return console.log(e)})),"<- The current spec of formData"),k(r);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}return t(y),Object(s.useEffect)((function(){var e="".concat(w).concat(y);function t(){return(t=Object(b.a)(Object(d.a)().mark((function t(){var n,s,r;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(y,"<- Monster Data in Monster Detail"),t.prev=1,t.next=4,fetch(e);case 4:if(n=t.sent,console.log(n),!n.ok){t.next=18;break}return t.next=9,n.json();case 9:s=t.sent,console.log(s,"<- What on earth are you?"),console.log(s.index,"<-Can I use you?"),"",r="/images/"+s.index+".jpg",console.log(r,"<-Hopefully the image src"),m(r),i(s),console.log(a,"<- the monstroso in question?");case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(1),console.log(t.t0);case 23:case"end":return t.stop()}}),t,null,[[1,20]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"border border-black",children:[f?Object(l.jsxs)("button",{value:a,type:"submit",className:"btn btn-danger",disabled:!0,children:[a.name," Is Yours Now!"]}):Object(l.jsx)("form",{onSubmit:N,children:Object(l.jsxs)("button",{value:a,type:"submit",className:"btn btn-success",children:["Add ",a.name," ?"]})}),Object(l.jsx)("form",{onSubmit:N,children:Object(l.jsxs)("button",{value:a,type:"submit",className:"btn btn-success",children:["Add ",a.name," ?"]})}),Object(l.jsxs)("h1",{children:["Monster: ",a.name]}),Object(l.jsxs)("h2",{children:["Type: ",a.type]}),Object(l.jsxs)("h2",{children:["Alignment: ",a.alignment]}),Object(l.jsx)("img",{src:""+p,alt:a.name,id:"monster-image"}),Object(l.jsxs)("h2",{children:["Size: ",a.size]}),a.speed?Object(l.jsxs)("h2",{children:["Speed (Burrow): ",a.speed.burrow?a.speed.burrow:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Climb): Error"}),a.speed?Object(l.jsxs)("h2",{children:["Speed (Climb): ",a.speed.climb?a.speed.climb:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Climb): Error"}),a.speed?Object(l.jsxs)("h2",{children:["Speed (Flight): ",a.speed.fly?a.speed.fly:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Flight): Error"}),a.speed?Object(l.jsxs)("h2",{children:["Speed (Swim): ",a.speed.swim?a.speed.swim:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Swim): Error"}),a.speed?Object(l.jsxs)("h2",{children:["Speed (Walk): ",a.speed.walk?a.speed.walk:"No Relevant Information"]}):Object(l.jsx)("h2",{children:"Speed (Walk): Error"}),Object(l.jsxs)("h2",{children:["Hit Points: ",a.hit_points]}),Object(l.jsxs)("h2",{children:["Hit Dice: ",a.hit_dice]}),Object(l.jsxs)("h2",{children:["Armor Class: ",a.armor_class]}),Object(l.jsxs)("h2",{children:["Challenge Rating: ",a.challenge_rating]}),Object(l.jsxs)("h2",{children:["Languages: ",a.languages]}),Object(l.jsx)("h2",{children:"Attributes"}),Object(l.jsxs)("h2",{children:["Strength: ",a.strength]}),Object(l.jsxs)("h2",{children:["Dexterity: ",a.dexterity]}),Object(l.jsxs)("h2",{children:["Constitution: ",a.constitution]}),Object(l.jsxs)("h2",{children:["Intelligence: ",a.intelligence]}),Object(l.jsxs)("h2",{children:["Wisdom: ",a.wisdom]}),Object(l.jsxs)("h2",{children:["Charisma: ",a.charisma]}),a.actions?Object(l.jsxs)("h2",{children:[" ",a.actions[0]?"Actions (1): "+a.actions[0].name+" - "+a.actions[0].desc:""]}):Object(l.jsx)("h2",{children:"Actions (1): Error"}),a.actions?Object(l.jsxs)("h2",{children:[" ",a.actions[1]?"Actions (2): "+a.actions[1].name+" - "+a.actions[1].desc:""]}):Object(l.jsx)("h2",{children:"Actions (2): Error"}),a.actions?Object(l.jsxs)("h2",{children:[" ",a.actions[2]?"Actions (3): "+a.actions[2].name+" - "+a.actions[2].desc:""]}):Object(l.jsx)("h2",{children:"Actions (3): Error"}),a.actions?Object(l.jsxs)("h2",{children:[" ",a.actions[3]?"Actions (4): "+a.actions[3].name+" - "+a.actions[3].desc:""]}):Object(l.jsx)("h2",{children:"Actions (4): Error"})]})}function A(e){var t=e.monsters,n=e.getMonstahUrl;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(i.b,{to:"/Monster/"+e.key,monstah:e,getMonstahUrl:n,className:"btn btn-danger btn-lg p-2 my-1",children:e.name},e.key)}))})}function P(){var e=Object(s.useState)(null),t=Object(c.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),o=Object(c.a)(a,2),i=(o[0],o[1]),j=Object(s.useState)([]),h=Object(c.a)(j,2),u=(h[0],h[1],Object(s.useState)(!1)),p=Object(c.a)(u,2),m=(p[0],p[1],"https://www.dnd5eapi.co/api/monsters/"),O=Object(s.useCallback)(Object(b.a)(Object(d.a)().mark((function e(){var t,n,s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(m);case 3:if(t=e.sent,console.log(t),!t.ok){e.next=16;break}return e.next=8,t.json();case 8:n=e.sent,console.log(n.results,"<- Monster Data!"),[],s=[],n.results.forEach((function(e){var t={key:e.index,name:e.name,index:m+e.index};s.push(t)})),r(s),console.log(s,"<- monsterUrls Post Set State");case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0,"<- Registered Error");case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),[n]);return Object(s.useEffect)((function(){console.log("We have lift off!"),O()}),[n,O]),Object(l.jsx)("div",{className:"border border-black",children:Object(l.jsx)(A,{monster:n,getMonstahUrl:function(e){i(e)}})})}var T=function(){var e=Object(s.useState)(U.getUser()),t=Object(c.a)(e,2),n=t[0],r=t[1];function a(){r(U.getUser())}return n?Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/",element:Object(l.jsx)(k,{loggedUser:n,handleSignUpOrLogin:a,handleLogout:function(){U.logout(),r(null)}})}),Object(l.jsx)(o.b,{path:"/Monsters",element:Object(l.jsx)(P,{user:n})}),Object(l.jsx)(o.b,{path:"/Monsters/Data",element:Object(l.jsx)(A,{user:n})}),Object(l.jsx)(o.b,{path:"/Monsters/:monsterName",element:Object(l.jsx)(_,{user:n})}),Object(l.jsx)(o.b,{path:"/:id/monster",element:Object(l.jsx)(y,{loggedUser:n})}),Object(l.jsx)(o.b,{path:"/login",element:Object(l.jsx)(L,{handleSignUpOrLogin:a})}),Object(l.jsx)(o.b,{path:"/signup",element:Object(l.jsx)(M,{handleSignUpOrLogin:a})})]}):Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/login",element:Object(l.jsx)(L,{handleSignUpOrLogin:a})}),Object(l.jsx)(o.b,{path:"/signup",element:Object(l.jsx)(M,{handleSignUpOrLogin:a})}),Object(l.jsx)(o.b,{path:"/*",element:Object(l.jsx)(o.a,{to:"/login"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.3b2eb59a.chunk.js.map