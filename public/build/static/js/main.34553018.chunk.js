(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{217:function(e,t,a){e.exports=a(392)},222:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=(a(222),a(41)),u=a(40);var i,s=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not found"))},m=a(12),p=a.n(m),d=a(18),f=a(395),E=a(402),b=a(407),h=a(408),g=a(409),v=a(410),y=a(411),w=a(412),O=a(116),j=a.n(O);i="https://ironlogger.herokuapp.com";var x=j.a.create({withCredentials:!0,baseURL:i}),k={test:function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signup:function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getProfile:function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/profile");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getUserInfo:function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/info");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllEmployers:function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/employers");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),requestEmployer:function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/requestEmployer/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getPois:function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/pois");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getPoi:function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/pois/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updatePoi:function(){var e=Object(d.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put("/pois/".concat(t),a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),createPoi:function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("/pois",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUser:function(){var e=Object(d.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put("/users/".concat(t),a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),createLog:function(){var e=Object(d.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},I=a(28),S=Object(n.createContext)(),C=k.getProfile;function T(e){var t=e.children,a=Object(n.useState)(null),l=Object(I.a)(a,2),c=l[0],o=l[1],u=function(e){return o(e)};return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,a=t.data.user,u(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(S.Provider,{value:{user:c,setCtxUser:u,clearCtxUser:function(){return o(null)}}},t)}var P=k.logOut,L=f.a.Sider,V=f.a.Header,F=f.a.Content;f.a.Footer;var U,R=function(e){var t=e.children,a=Object(n.useContext)(S),l=a.clearCtxUser,c=a.user,i=Object(u.g)(),s=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:l(c),i.push("/login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(f.a,{style:{height:"100vh"}},c&&r.a.createElement(L,{breakpoint:"lg",collapsedWidth:"0"},r.a.createElement("div",{className:"logo"}),r.a.createElement(E.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"]},r.a.createElement(E.a.Item,{key:"1",icon:r.a.createElement(b.a,null)},r.a.createElement(o.b,{to:"/"},"Brief")),"collab"===c.role?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a.Item,{key:"2",icon:r.a.createElement(h.a,null)},r.a.createElement(o.b,{to:"/scan"},"Scan QR"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a.Item,{key:"3",icon:r.a.createElement(g.a,null)},r.a.createElement(o.b,{to:"/pois"},"PoIs")),r.a.createElement(E.a.Item,{key:"4",icon:r.a.createElement(v.a,null)},r.a.createElement(o.b,{to:"/collabs"},"Collabs"))),r.a.createElement(E.a.Item,{key:"5",icon:r.a.createElement(y.a,null)},r.a.createElement(o.b,{to:"/settings"},"Settings")),r.a.createElement(E.a.Item,{key:"6",icon:r.a.createElement(w.a,null),onClick:s},"Logout"))),r.a.createElement(f.a,null,r.a.createElement(V,null,r.a.createElement("div",{className:"logo"},r.a.createElement("h2",{style:{color:"white",fontFamily:"Roboto"}},"Logger"))),r.a.createElement(F,{style:{margin:"24px 16px 0"}},r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},t))))},A=a(401),_=a(399),W=a(404),D=a(107),N=a(396),q=a(99),H=k.signup,M=k.login;U="https://ironlogger.herokuapp.com";var z=A.a.Option;var J,G=function(e){var t=e.history,a=_.a.useForm(),l=Object(I.a)(a,1)[0],c=Object(n.useContext)(S).setCtxUser;function u(){return(u=Object(d.a)(p.a.mark((function e(a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,H(a);case 3:return e.next=5,M(a);case 5:n=e.sent,delete(r=n.data.user).password,delete r.hash,delete r.salt,c(r),t.push("/");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome!"),r.a.createElement("p",null,"Logger sets punctuality going!"),r.a.createElement("h3",null,"Please Sign Up to continue"),r.a.createElement(_.a,{layout:"vertical",name:"basic",form:l,onFinish:function(e){return u.apply(this,arguments)}},r.a.createElement(_.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Enter email"}]},r.a.createElement(W.a,null)),r.a.createElement(_.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Enter password"}]},r.a.createElement(W.a.Password,null)),r.a.createElement(_.a.Item,{label:"Repeat Password",name:"repeatedPassword",rules:[{required:!0,message:"Repeat password"}]},r.a.createElement(W.a.Password,null)),r.a.createElement(_.a.Item,{label:"Role",name:"role",rules:[{required:!0,message:"Select Role"}]},r.a.createElement(A.a,{defaultValue:"Employer"},r.a.createElement(z,{value:"true"},"Employer"),r.a.createElement(z,{value:"false"},"Collaborator"))),r.a.createElement(_.a.Item,null,r.a.createElement(D.a,{type:"primary",htmlType:"submit"},"Sign Up"))),r.a.createElement("p",null,"Already have an account?",r.a.createElement(o.b,{to:"/login"}," Log In")),r.a.createElement(N.a,null,"Or"),r.a.createElement("br",null),r.a.createElement(q.a,null,r.a.createElement(D.a,{danger:!0,type:"primary",block:!0},r.a.createElement("a",{href:"".concat(U,"/auth/google")},"Login with Google as a Collab"))))},B=k.login;J="https://ironlogger.herokuapp.com";var Q=function(e){var t=e.history,a=_.a.useForm(),l=Object(I.a)(a,1)[0],c=Object(n.useContext)(S),i=c.user,s=c.setCtxUser;function m(){return(m=Object(d.a)(p.a.mark((function e(a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(a);case 2:n=e.sent,delete(r=n.data.user).password,delete r.hash,delete r.salt,s(r),t.push("/");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i?r.a.createElement(u.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome!"),r.a.createElement("p",null,"Logger sets punctuality going!"),r.a.createElement("h3",null,"Please Log In to continue"),r.a.createElement(_.a,{layout:"vertical",name:"basic",form:l,onFinish:function(e){return m.apply(this,arguments)}},r.a.createElement(_.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Enter email"}]},r.a.createElement(W.a,null)),r.a.createElement(_.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Enter password"}]},r.a.createElement(W.a.Password,null)),r.a.createElement(_.a.Item,null,r.a.createElement(D.a,{type:"primary",htmlType:"submit"},"Log In"))),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(o.b,{to:"/signup"},"Sign Up")),r.a.createElement(N.a,null,"Or"),r.a.createElement("br",null),r.a.createElement(q.a,null,r.a.createElement(D.a,{danger:!0,type:"primary",block:!0},r.a.createElement("a",{href:"".concat(J,"/auth/google")},"Login with Google as Collab"))))},Y=a(400),X=a(398),Z=a(213),K={width:"5rem",height:"5rem",objectFit:"cover",borderRadius:"50%"};var $=function(e){var t=e.user;return r.a.createElement("div",null,r.a.createElement("img",{style:K,src:t.photo,alt:"UserPhoto"}),r.a.createElement("br",null),r.a.createElement("br",null),t.name?r.a.createElement("h2",null,t.name):r.a.createElement("div",null,r.a.createElement(o.b,{to:"/settings"},"Complete your profile")),r.a.createElement("h4",null,t.email))},ee=a(406),te=Y.a.Title,ae=Y.a.Text,ne={backgroundColor:"white",padding:"8px",borderRadius:"5px",border:"5px solid lightgrey",marginTop:"16px"};var re=function(e){var t=e.title,a=e.description,n=e.success,l=e.secondary;return r.a.createElement("div",{style:ne},r.a.createElement(te,{level:4},t),r.a.createElement(ae,null,a),r.a.createElement("div",null,r.a.createElement(ee.b,{direction:"horizontal"},r.a.createElement(Z.a,{color:"green"},n),r.a.createElement(Z.a,{color:"blue"},l))))},le=a(403),ce=X.a.Meta,oe={marginTop:16};var ue,ie=function(e){var t=e.photo,a=e.title,n=e.attendance,l=e.absence;return r.a.createElement(X.a,{style:oe},r.a.createElement(ce,{avatar:r.a.createElement(le.a,{src:t}),title:a}),r.a.createElement(ee.b,{direction:"horizontal"},r.a.createElement(Z.a,{color:"green"},"Attendce: ",n),r.a.createElement(Z.a,{color:"red"},"Absences: ",l)))},se=Y.a.Title,me=k.getUserInfo,pe=k.requestEmployer,de={color:"green"},fe={color:"red"},Ee=function(){var e=Object(n.useState)(null),t=Object(I.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(S).user,o=_.a.useForm(),i=Object(I.a)(o,1)[0],s=Object(n.useState)(""),m=Object(I.a)(s,2),f=m[0],E=m[1],b=Object(n.useState)([]),h=Object(I.a)(b,2),g=h[0],v=h[1],y=Object(n.useState)([]),w=Object(I.a)(y,2),O=w[0],j=w[1],x=Object(n.useState)([]),k=Object(I.a)(x,2),C=k[0],T=k[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){var t,a,n,r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me();case 2:return t=e.sent,a=t.data.user.collabLogs,e.next=6,me();case 6:n=e.sent,r=n.data.user.collabs,c=r.filter((function(e){return!e.collabValidated})),o=r.filter((function(e){return e.collabValidated})),v(r),j(o),T(c),l(a),console.log(r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var P=function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:pe(t.employer),E("Please wait to be validated");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function L(e){var t=new Date(e);return[0===t.getDay()?"Sun":1===t.getDay()?"Mon":2===t.getDay()?"Tue":3===t.getDay()?"Wed":4===t.getDay()?"Thu":5===t.getDay()?"Fri":6===t.getDay()?"Sat":"",t.getHours(),t.getMinutes()]}return g.forEach((function(e){e.unvalidLogs=0;for(var t=0;t<e.collabLogs.length;++t)!1===e.collabLogs[t].valid&&e.unvalidLogs++;e.validLogs=0;for(t=0;t<e.collabLogs.length;++t)!0===e.collabLogs[t].valid&&e.validLogs++})),c?"employer"===c.role?r.a.createElement("div",null,r.a.createElement($,{user:c}),r.a.createElement("br",null),r.a.createElement(se,{level:4},"Share the following code with collabs"),r.a.createElement("p",null,c._id),r.a.createElement("br",null),r.a.createElement(re,{title:"General",description:"The number of collaborators signed to your code ",success:"Accepted: ".concat(O.length),secondary:"Pending: ".concat(C.length)}),O.map((function(e,t){return r.a.createElement(ie,{photo:e.photo,title:e.name?e.name:e.email,attendance:e.validLogs,absence:e.unvalidLogs})}))):r.a.createElement("div",null,r.a.createElement($,{user:c}),r.a.createElement("br",null),void 0===c.employer?r.a.createElement(_.a,{layout:"vertical",name:"basic",form:i,onFinish:P},r.a.createElement(_.a.Item,{label:"Add Employer",name:"employer",rules:[{required:!0,message:"Enter Id"}]},r.a.createElement(W.a,null)),r.a.createElement(_.a.Item,null,r.a.createElement(D.a,{type:"primary",htmlType:"submit"},"Add"))):r.a.createElement(r.a.Fragment,null),r.a.createElement("p",null,f),r.a.createElement(se,{level:4},"Recent Logs"),a?a.map((function(e,t){return r.a.createElement(X.a,{title:e.poi?e.poi.name:"Dropped PoI",style:{marginTop:16}},r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement(se,{level:5},"Check In by: ",e.poi.checkinTime),e.poi.weekdays.map((function(e,t){return r.a.createElement("span",null,r.a.createElement(Z.a,{key:t},e))}))),r.a.createElement("div",null,r.a.createElement(se,{level:5},"Log Info"),r.a.createElement("span",null,"Day: ",L(e.createdAt)[0],"  "),r.a.createElement("span",null,"|"),r.a.createElement("span",null,"Time: ",L(e.createdAt)[1],":",L(e.createdAt)[2])),r.a.createElement("p",null,"Valid:"," ",!0===e.valid?r.a.createElement("strong",{style:de},"Validated"):r.a.createElement("strong",{style:fe},"Not Validated")))})):r.a.createElement("div",null,r.a.createElement("h2",null,"No logs to show"),r.a.createElement("p",null,"Make sure the scanned QRCodes are still valid"))):r.a.createElement(u.a,{to:"/login"})},be=a(203),he=a.n(be);ue="https://ironlogger.herokuapp.com";var ge=k.getUserInfo;var ve=function(){var e=Object(n.useState)([]),t=Object(I.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(S).user;return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:t=e.sent,a=t.data.user.employerPoIs,l(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c?"employer"===c.role?r.a.createElement("div",null,r.a.createElement("h1",null,"Points of Interest"),a.map((function(e,t){return r.a.createElement(X.a,{key:t,title:e.name,bordered:!0,style:{marginTop:16},extra:r.a.createElement(o.b,{to:"/pois/".concat(e._id)},"More")},r.a.createElement("p",null,e.location),r.a.createElement(he.a,{value:"".concat(ue,"/logs/").concat(e._id),renderAs:"svg"}),r.a.createElement("p",null,"Weekdays:"),e.weekdays.map((function(e,t){return r.a.createElement(Z.a,{key:t},e)})))})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(D.a,null,r.a.createElement(o.b,{to:"/pois/new"},"Create Point of Interest"))):r.a.createElement(u.a,{to:"/"}):r.a.createElement("h1",null,"Loading...")},ye=a(136),we=a(397),Oe=a(405),je=k.getPoi,xe=k.updatePoi,ke=A.a.Option;var Ie=function(e){var t=e.match.params.poiId,a=e.history,l=Object(n.useState)(null),c=Object(I.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)([]),s=Object(I.a)(i,2),m=s[0],f=s[1],E=_.a.useForm(),b=Object(I.a)(E,1)[0];function h(){return(h=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe(o._id,t);case 2:a.push("/pois");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(t);case 2:a=e.sent,n=a.data.poi,u(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),o?r.a.createElement("div",null,r.a.createElement("h2",null,o.name),r.a.createElement(_.a,{layout:"vertical",name:"basic",form:b,onFinish:function(e){return h.apply(this,arguments)}},r.a.createElement(_.a.Item,{label:"Name",name:"name"},r.a.createElement(W.a,{placeholder:o.name})),r.a.createElement(_.a.Item,{label:"Location",name:"location"},r.a.createElement(W.a,{placeholder:o.location})),r.a.createElement(_.a.Item,{label:"Check-In Time",name:"checkinTime"},r.a.createElement(we.a,{format:"HH:mm",minuteStep:5})),r.a.createElement(_.a.Item,{label:"Tolerance (minutes)",name:"tolerance"},r.a.createElement(Oe.a,{min:"0",defaultValue:"5",placeholder:o.tolerance})),r.a.createElement(_.a.Item,{label:"Weekdays",name:"weekdays"},r.a.createElement(A.a,{mode:"multiple",placeholder:"Weekdays",name:"weekdays",onChange:function(e){f([].concat(Object(ye.a)(m),[e]))}},r.a.createElement(ke,{key:"1",value:"Mon"},"Mon"),r.a.createElement(ke,{key:"2",value:"Tue"},"Tue"),r.a.createElement(ke,{key:"3",value:"Wed"},"Wed"),r.a.createElement(ke,{key:"4",value:"Thu"},"Thu"),r.a.createElement(ke,{key:"5",value:"Fri"},"Fri"),r.a.createElement(ke,{key:"6",value:"Sat"},"Sat"),r.a.createElement(ke,{key:"7",value:"Sun"},"Sun"))),r.a.createElement(_.a.Item,null,r.a.createElement(D.a,{type:"primary",htmlType:"submit"},"Submit"))),r.a.createElement("br",null)):r.a.createElement("h2",null,"Loading...")},Se=a(139),Ce=(a(386),k.createPoi),Te=A.a.Option,Pe={width:15,height:15,backgroundColor:"red",borderRadius:"50%"};var Le=function(e){var t=e.history,a=Object(n.useState)([]),l=Object(I.a)(a,2),c=l[0],o=l[1],u=_.a.useForm(),i=Object(I.a)(u,1)[0],s=Object(n.useState)(-100),m=Object(I.a)(s,2),f=m[0],E=m[1],b=Object(n.useState)(20),h=Object(I.a)(b,2),g=h[0],v=h[1],y=Object(n.useState)({longitude:f,latitude:g,width:"75vw",height:"40vh",zoom:5}),w=Object(I.a)(y,2),O=w[0],j=w[1];function x(){return(x=Object(d.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.longitude=f,a.latitude=g,e.next=4,Ce(a);case 4:t.push("/pois");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){v(O.latitude),E(O.longitude)}),[O]),r.a.createElement("div",null,r.a.createElement("h2",null,"New Poi"),r.a.createElement(_.a,{layout:"vertical",name:"basic",form:i,onFinish:function(e){return x.apply(this,arguments)}},r.a.createElement(_.a.Item,{label:"Name",name:"name"},r.a.createElement(W.a,null)),r.a.createElement(_.a.Item,{label:"Check-In Time",name:"checkinTime"},r.a.createElement("input",{type:"time",name:"checkinTime"})),r.a.createElement(_.a.Item,{label:"Tolerance (minutes)",name:"tolerance"},r.a.createElement(Oe.a,{min:"0",defaultValue:"5"})),r.a.createElement(_.a.Item,{label:"Weekdays",name:"weekdays"},r.a.createElement(A.a,{mode:"multiple",name:"weekdays",onChange:function(e){o([].concat(Object(ye.a)(c),[e]))}},r.a.createElement(Te,{key:"1",value:"Mon"},"Mon"),r.a.createElement(Te,{key:"2",value:"Tue"},"Tue"),r.a.createElement(Te,{key:"3",value:"Wed"},"Wed"),r.a.createElement(Te,{key:"4",value:"Thu"},"Thu"),r.a.createElement(Te,{key:"5",value:"Fri"},"Fri"),r.a.createElement(Te,{key:"6",value:"Sat"},"Sat"),r.a.createElement(Te,{key:"7",value:"Sun"},"Sun"))),r.a.createElement(_.a.Item,{label:"Longitude",name:"longitude"},r.a.createElement(W.a,{value:f,placeholder:f})),r.a.createElement(_.a.Item,{label:"Latitude",name:"latitude"},r.a.createElement(W.a,{value:g,placeholder:g})),r.a.createElement("br",null),r.a.createElement(Se.c,Object.assign({mapboxApiAccessToken:"pk.eyJ1IjoiaHVnb3N1YXN0ZWd1aSIsImEiOiJja2VrdjJiN3UwZXIwMzFxeHgzYzI4aDY3In0.evgV3HHHH1Gf-uplaJyOow"},O,{onViewportChange:function(e){return j(e)}}),r.a.createElement(Se.a,{positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}),r.a.createElement(Se.b,{latitude:g,longitude:f},r.a.createElement("center",{style:Pe}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_.a.Item,null,r.a.createElement(D.a,{type:"primary",htmlType:"submit"},"Submit"))),r.a.createElement("br",null))},Ve=k.getUserInfo,Fe=k.updateUser,Ue=X.a.Meta,Re=A.a.Option;var Ae=function(){var e=Object(n.useContext)(S).user,t=Object(n.useState)([]),a=Object(I.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)([]),u=Object(I.a)(o,2),i=u[0],s=u[1],m=Object(n.useState)([]),f=Object(I.a)(m,2),E=f[0],b=f[1],h=Object(n.useState)(!0),g=Object(I.a)(h,2),v=g[0],y=g[1];function w(){return(w=Object(d.a)(p.a.mark((function e(t){var a,n,r,l,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={collabValidated:!1},e.next=3,Fe(t,a);case 3:return e.next=5,Ve();case 5:n=e.sent,r=n.data.user.collabs,l=r.filter((function(e){return!e.collabValidated})),c=r.filter((function(e){return e.collabValidated})),b(l),s(c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(d.a)(p.a.mark((function e(t){var a,n,r,l,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={collabValidated:!0},e.next=3,Fe(t,a);case 3:return e.next=5,Ve();case 5:n=e.sent,r=n.data.user.collabs,c(r),l=r.filter((function(e){return!e.collabValidated})),o=r.filter((function(e){return e.collabValidated})),b(l),s(o);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(d.a)(p.a.mark((function t(a){var n,r,o,u,i,m;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={collabValidated:!1,employers:[]},t.next=3,Fe(a,n);case 3:return r=l.filter((function(e){return e._id!==a})),t.next=6,Fe(e._id,{collabs:r});case 6:o=t.sent,u=o.data.user.collabs,c(u),i=u.filter((function(e){return!e.collabValidated})),m=u.filter((function(e){return e.collabValidated})),b(i),s(m);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){var t,a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ve();case 2:t=e.sent,a=t.data.user.collabs,n=a.filter((function(e){return!e.collabValidated})),r=a.filter((function(e){return e.collabValidated})),c(a),s(r),b(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),l&&i&&E?r.a.createElement("div",null,r.a.createElement("h2",null,"Show Collabs"),r.a.createElement(A.a,{defaultValue:!0,onChange:function(e){return function(e){return x.apply(this,arguments)}(e)}},r.a.createElement(Re,{value:!0},"Show Valid Collabs"),r.a.createElement(Re,{value:!1},"Show Pending Requests")),r.a.createElement("br",null),r.a.createElement("br",null),v?r.a.createElement("div",null,r.a.createElement("h1",null,"Validated Collabs"),i.map((function(e,t){return r.a.createElement(X.a,{actions:[r.a.createElement(D.a,{type:"danger",onClick:function(){return function(e){return w.apply(this,arguments)}(e._id)}},"Remove Collab")],style:{marginTop:16},key:t},r.a.createElement(Ue,{avatar:r.a.createElement(le.a,{src:e.photo}),title:e.name,description:e.email}))}))):r.a.createElement("div",null,r.a.createElement("h1",null,"Collabs Requests"),E.map((function(e,t){return r.a.createElement(X.a,{actions:[r.a.createElement(D.a,{type:"primary",onClick:function(){return function(e){return O.apply(this,arguments)}(e._id)}},"Accept"),r.a.createElement(D.a,{type:"danger",onClick:function(){return function(e){return j.apply(this,arguments)}(e._id)}},"Deny")],style:{marginTop:16},key:t},r.a.createElement(Ue,{avatar:r.a.createElement(le.a,{src:e.photo}),title:e.name,description:e.email}))})))):r.a.createElement("div",null,r.a.createElement("h2",null,"No Collabs To Show"),r.a.createElement("p",null,"Share code to add"),r.a.createElement("strong",null,e._id))},_e=a(207),We=a.n(_e),De=k.createLog;var Ne=function(){var e=Object(n.useContext)(S).user,t=Object(n.useState)(null),a=Object(I.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(null),i=Object(I.a)(o,2),s=i[0],m=i[1];Object(n.useEffect)((function(){l&&navigator.geolocation.getCurrentPosition(function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.coords,n=a.latitude,r=a.longitude,c={latitude:n,longitude:r},console.log("Attempt to create a log"),e.next=5,De(l,c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m("Geolocation permission is needed to get a valid log"))}),[l]);var f=function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),c(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return e?e.collabValidated?l?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{color:"green"}},"Scan Made"),r.a.createElement("p",null,"Please check geolocation permission is allowed"),setTimeout(r.a.createElement(u.a,{to:"/"}),3e3)):r.a.createElement("div",null,r.a.createElement("h2",null,"Scan QR Code"),r.a.createElement("p",null,s||""),r.a.createElement(We.a,{delay:300,onError:E,onScan:f,style:{width:"100%"}}),r.a.createElement("p",null,l)):r.a.createElement("div",null,r.a.createElement("h2",null,"Scan QR Code"),r.a.createElement("p",null,"Only validated collabs can Scan")):r.a.createElement(u.a,{to:"/login"})},qe=a(153),He=k.updateUser;var Me=function(e){var t=e.history,a=Object(n.useContext)(S).user,l=_.a.useForm(),c=Object(I.a)(l,1)[0],o=Object(n.useState)(null),i=Object(I.a)(o,2),s=i[0],m=i[1];function f(){return(f=Object(d.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),r=Object(qe.a)(Object(qe.a)({},n),{},{photo:s}),e.next=4,He(a._id,r);case 4:t.push("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(d.a)(p.a.mark((function e(t){var a,n,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files,(n=new FormData).append("file",a[0]),n.append("upload_preset","logger_image_upload"),e.next=6,j.a.post("https://api.cloudinary.com/v1_1/dcmffygzd/image/upload",n);case 6:r=e.sent,l=r.data.secure_url,m(l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a?r.a.createElement("div",null,r.a.createElement($,{user:a}),r.a.createElement("br",null),r.a.createElement("h2",null,"Settings"),r.a.createElement(_.a,{form:c,onFinish:function(e){return f.apply(this,arguments)}},r.a.createElement(_.a.Item,{label:"Name",name:"name"},r.a.createElement(W.a,{placeholder:a.name})),r.a.createElement("input",{type:"file",onChange:function(e){return E.apply(this,arguments)}}),r.a.createElement("br",null),r.a.createElement(D.a,{type:"primary",htmlType:"submit",disabled:!s},"Complete Profile"))):r.a.createElement(u.a,{to:"/login"})},ze=function(){return r.a.createElement("h1",null,"Employers")},Je=function(){return r.a.createElement(o.a,null,r.a.createElement(R,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:Ee}),r.a.createElement(u.b,{exact:!0,path:"/signup",component:G}),r.a.createElement(u.b,{exact:!0,path:"/login",component:Q}),r.a.createElement(u.b,{exact:!0,path:"/scan",component:Ne}),r.a.createElement(u.b,{exact:!0,path:"/settings",component:Me}),r.a.createElement(u.b,{exact:!0,path:"/collabs",component:Ae}),r.a.createElement(u.b,{exact:!0,path:"/employers",component:ze}),r.a.createElement(u.b,{exact:!0,path:"/pois",component:ve}),r.a.createElement(u.b,{exact:!0,path:"/pois/new",component:Le}),r.a.createElement(u.b,{exact:!0,path:"/pois/:poiId",component:Ie}),r.a.createElement(u.b,{component:s}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(391);c.a.render(r.a.createElement(T,null,r.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[217,1,2]]]);
//# sourceMappingURL=main.34553018.chunk.js.map