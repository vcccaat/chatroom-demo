(this.webpackJsonpchatroom=this.webpackJsonpchatroom||[]).push([[0],{62:function(e,a,t){e.exports=t(84)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},75:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),o=t.n(r),l=(t(67),t(6)),i=(t(68),t(69),t(112)),s=t(104),m=t(51),u=t.n(m),d=(t(70),t(20)),E=t.n(d),h=(t(71),t(72),E.a.initializeApp({apiKey:"AIzaSyCy6gePCn95u8zMOLT4UTORjrHDvhRrO2g",authDomain:"chat-49c1d.firebaseapp.com",databaseURL:"https://chat-49c1d.firebaseio.com",projectId:"chat-49c1d",storageBucket:"chat-49c1d.appspot.com",messagingSenderId:"689541832725",appId:"1:689541832725:web:a747e231a0e0f9998e2e1c",measurementId:"G-H8CSC7SKMV"}).firestore()),g=E.a.auth(),v=E.a.firestore.FieldValue.serverTimestamp(),f=t(8),p=t(22),b=t(50),_=t.n(b),N=t(49),O=t.n(N);t(75);var j=function(e){var a=e.title,t=e.content,n=e.visible,r=e.hide,l=e.confirm;return n?o.a.createPortal(c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal-title"},a),c.a.createElement("div",{className:"modal-content"},t),c.a.createElement("div",{className:"modal-operator"},c.a.createElement("button",{className:"modal-operator-confirm",onClick:l},"\u786e\u8ba4"),c.a.createElement("button",{className:"modal-operator-close",onClick:r},"\u53d6\u6d88"))),c.a.createElement("div",{className:"mask"})),document.body):null},S=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],c=a[1];return{isShowing:t,toggle:function(){c(!t)}}};var y=function(e){var a,t=e.addNewChat,r=e.id,o=e.name,s=Object(n.useState)(""),m=Object(l.a)(s,2),u=m[0],d=m[1],E=Object(n.useState)(""),g=Object(l.a)(E,2),v=g[0],b=g[1],N=S(),y=N.isShowing,C=N.toggle,w=Object(f.f)();return Object(n.useEffect)((function(){r&&h.collection("rooms").doc(r).collection("message").orderBy("time","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return e.data()})))}),(function(e){console.error("Error getting message of the room: ",r,e)}))}),[r]),Object(n.useEffect)((function(){var e,a,t=new Date(null===(e=u[0])||void 0===e||null===(a=e.time)||void 0===a?void 0:a.toDate()),n="Invalid Date"==t?"":(t.getHours()<10?"0":"")+t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes();b(n)}),[u]),t?c.a.createElement("div",{onClick:function(){var e=prompt("\u8bf7\u8f93\u5165\u623f\u95f4\u540d\u79f0");e&&h.collection("rooms").add({name:e})},className:"sidebarChat"},c.a.createElement(_.a,null)," ",c.a.createElement("p",null,"\u521b\u5efa\u65b0\u623f\u95f4")):c.a.createElement(p.b,{to:"/chatroom/".concat(r)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(i.a,{src:"https://avatars.dicebear.com/api/identicon/".concat(r,".svg")}),c.a.createElement("div",{className:"sidebarChat__room"},c.a.createElement("div",{className:"sidebarChat__roomName"},o),c.a.createElement("div",{className:"sidebarChat__messageInfo"},c.a.createElement("div",{className:"sidebarChat__lastMessage"},null===(a=u[0])||void 0===a?void 0:a.message),c.a.createElement("div",{className:"sidebarChat__timestamp"},v),c.a.createElement("div",{className:"sidebarChat__delete",onClick:C},c.a.createElement(O.a,null),c.a.createElement(j,{visible:y,hide:C,title:"\u6ce8\u610f",roomName:o,content:"\u786e\u8ba4\u8981\u5220\u9664 ".concat(o," \u7fa4\u804a\u5417\uff1f"),confirm:function(e){e.preventDefault(),w.push("/chatroom"),h.collection("rooms").doc(r).delete().then((function(){console.log("Document successfully deleted!"),alert("\u6210\u529f\u5220\u9664\uff01"),window.location.reload(!1)})).catch((function(e){console.error("Error removing document: ",e)}))}}))))))},C=Object(n.createContext)(),w=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(C.Provider,{value:Object(n.useReducer)(a,t)},r)},k=function(){return Object(n.useContext)(C)},I=(t(81),t(103));var D=function(e){var a=e.visible,t=e.content;return"success"!==a?o.a.createPortal(c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"loading__container"},c.a.createElement("div",{className:"loading__icon"},c.a.createElement(I.a,null)),c.a.createElement("div",{className:"loading__word"},t)),c.a.createElement("div",{className:"mask"})),document.body):null};var M=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],r=a[1],o=k(),m=Object(l.a)(o,1)[0].user,d=Object(n.useState)("loading"),E=Object(l.a)(d,2),g=E[0],v=E[1];return Object(n.useEffect)((function(){var e=h.collection("rooms").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,data:e.data()}}))),v("success")}),(function(e){console.error("Error loading chatting rooms ",e),v("failed")}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(i.a,{src:"https://avatars.dicebear.com/api/bottts/".concat(m.displayName,".svg")}),c.a.createElement("h2",null,m.displayName),c.a.createElement("div",{className:"sidebar__headerRight",onClick:function(){localStorage.clear(),window.location.reload()}},c.a.createElement(s.a,null,c.a.createElement(u.a,null)))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(y,{addNewChat:!0}),t.map((function(e){return c.a.createElement(y,{key:e.id,id:e.id,name:e.data.name})})),c.a.createElement(D,{visible:g,content:"loading"===g?"\u52a0\u8f7d\u4e2d...":"\u8bf7\u68c0\u67e5\u7f51\u7edc"})))},H=t(110),R=t(53),P=t.n(R),x=t(54),B=t.n(x),L=t(55),U=t.n(L);t(82),t(52);function W(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],o=Object(f.g)().roomId,m=Object(n.useState)(""),u=Object(l.a)(m,2),d=u[0],E=u[1],g=Object(n.useState)([]),p=Object(l.a)(g,2),b=p[0],_=p[1],N=Object(n.useState)(""),O=Object(l.a)(N,2),j=O[0],S=O[1],y=k(),C=Object(l.a)(y,1)[0].user,w=Object(n.useState)(""),I=Object(l.a)(w,2),D=(I[0],I[1]);Object(n.useEffect)((function(){var e,a,t=new Date(null===(e=b[b.length-1])||void 0===e||null===(a=e.time)||void 0===a?void 0:a.toDate()),n="Invalid Date"==t?"":t.getMonth()+"\u6708"+t.getDate()+"\u65e5     "+(t.getHours()<10?"0":"")+t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes();S(n)}),[b]),Object(n.useEffect)((function(){o&&(h.collection("rooms").doc(o).onSnapshot((function(e){e.data()&&E(e.data().name)}),(function(e){console.error("Error loading the room name ",e)})),h.collection("rooms").doc(o).collection("message").orderBy("time","asc").onSnapshot((function(e){_(e.docs.map((function(e){return e.data()}))),D("success")}),(function(e){console.error("Error loading the messages of the room: ",o,e),D("failed")})))}),[o]);return c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(i.a,{src:"https://avatars.dicebear.com/api/identicon/".concat(o,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("div",{className:"chat__headerRoomName"},d),c.a.createElement("div",{className:"chat__timestamp"},c.a.createElement("p",null,"\u6700\u8fd1\u4e00\u6b21\u804a\u5929 ",j))),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(s.a,null,c.a.createElement(P.a,null)))),c.a.createElement("div",{className:"chat__body"},b.map((function(e,a){return c.a.createElement("div",{key:a,className:"chat__info ".concat(e.name===C.displayName&&"chat__receiver")},c.a.createElement("div",{className:"".concat(e.name===C.displayName&&"chat__receiverIcon")},c.a.createElement(i.a,{src:"https://avatars.dicebear.com/api/bottts/".concat(e.name,".svg")})),c.a.createElement("div",{className:"chat__message"},c.a.createElement("p",{className:"chat__name"},e.name),c.a.createElement("p",{className:"chat__time"},e.name===C.displayName?"":function(e){var a=new Date(e.toDate());return(a.getHours()<10?"0":"")+a.getHours()+":"+(a.getMinutes()<10?"0":"")+a.getMinutes()}(e.time)),c.a.createElement("p",{className:"chat__content"},e.message)))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement("div",{className:"chat__footerWrap"},c.a.createElement(B.a,null),c.a.createElement("form",null,c.a.createElement(H.a,{className:"chat__footerInput",disableUnderline:!0,value:t,onChange:function(e){r(e.target.value)},maxLength:"200",type:"text"}),c.a.createElement("button",{onClick:function(e){D("loading"),o&&(e.preventDefault(),""!==t.trim()&&(h.collection("rooms").doc(o).collection("message").add({message:t,name:C.displayName,time:v}).catch((function(e){console.error("Error sending message: ",t,e),D("failed")})),r("")))},type:"submit"})),c.a.createElement(U.a,null))))}var A=t(56),J=(t(83),t(38)),T={user:localStorage?JSON.parse(localStorage.getItem("myValueInLocalStorage")):null},V="SET_USER",z=function(e,a){switch(localStorage.setItem("myValueInLocalStorage",JSON.stringify(a.user)),a.type){case V:return Object(J.a)(Object(J.a)({},e),{},{user:a.user});default:return e}},F=t(105),K=t(106),G=t(107),$=t(108);var q=function(){var e=k(),a=Object(l.a)(e,2);Object(A.a)(a[0]);var t=a[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),i=o[0],s=o[1],m=Object(n.useState)(""),u=Object(l.a)(m,2),d=u[0],E=u[1],h=Object(n.useState)(""),v=Object(l.a)(h,2),f=v[0],p=v[1],b=Object(n.useState)(!0),_=Object(l.a)(b,2),N=_[0],O=_[1],j=function(){O(!0)};return N?c.a.createElement("div",{className:"login"},c.a.createElement(F.a,{className:"login__container"},c.a.createElement(K.a,{container:!0,direction:"column"},c.a.createElement(G.a,{variant:"h4"},"\u4e00\u8d77\u6765\u804a\u5929\u5427"),c.a.createElement("input",{onChange:function(e){return s(e.target.value)},id:"email",type:"email",placeholder:"\u90ae\u7bb1"}),c.a.createElement("input",{onChange:function(e){return E(e.target.value)},id:"password",type:"password",placeholder:"\u5bc6\u7801"}),c.a.createElement($.a,{className:"signin__button",onClick:function(){g.signInWithEmailAndPassword(i,d).then((function(e){t({type:V,user:e.user})})).catch((function(e){return alert(e.message)}))}},"\u767b\u5f55\u8d26\u53f7"),c.a.createElement($.a,{className:"register__button",onClick:function(){O(!1)}},"\u6ce8\u518c\u8d26\u53f7")))):c.a.createElement("div",{className:"login"},c.a.createElement(F.a,{className:"login__container"},c.a.createElement(K.a,{container:!0,direction:"column"},c.a.createElement(G.a,{variant:"h4"},"\u6ce8\u518c\u7528\u6237"),c.a.createElement("input",{onChange:function(e){return p(e.target.value)},id:"name",type:"text",placeholder:"\u7528\u6237\u540d"}),c.a.createElement("input",{onChange:function(e){return s(e.target.value)},id:"email2",type:"email",placeholder:"\u90ae\u7bb1"}),c.a.createElement("input",{onChange:function(e){return E(e.target.value)},id:"password2",type:"password",placeholder:"\u5bc6\u7801"}),c.a.createElement($.a,{className:"signin__button",onClick:function(){g.createUserWithEmailAndPassword(i,d).then((function(e){return e.user.updateProfile({displayName:f})})).then(alert("\u6210\u529f\u6ce8\u518c\u5566\uff01")).catch((function(e){return alert(e.message)})),j()}},"\u6ce8\u518c"),c.a.createElement($.a,{className:"register__button",onClick:j},"\u8fd4\u56de\u767b\u5f55\u9875\u9762"))))},Q=t(57),X=t(109),Y=t(111);var Z=function(){var e=k(),a=Object(l.a)(e,1)[0].user,t=Object(n.useState)(!0),r=Object(l.a)(t,2),o=r[0],i=r[1],s=Object(Q.a)({palette:{type:o?"dark":"light",background:{paper:o?"#303030":"#ededed"}}});return c.a.createElement(X.a,{theme:s},c.a.createElement("div",{className:"app"},c.a.createElement("span",{className:"toggle"},"Dark Mode",c.a.createElement(Y.a,{color:"primary",checked:o,onChange:function(){return i(!o)}})),c.a.createElement(p.a,null,a?c.a.createElement(F.a,null,c.a.createElement(K.a,{container:!0,direction:"column"},c.a.createElement("div",{className:"app__body"},c.a.createElement(M,null),c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/chatroom/:roomId"},c.a.createElement(W,null)),c.a.createElement(f.a,{path:"/chatroom"},c.a.createElement(W,null)))))):c.a.createElement(f.a,{path:"/chatroom"},c.a.createElement(q,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,{initialState:T,reducer:z},c.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.fd3c3cce.chunk.js.map