(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[2],{26:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(19),a=n.n(r),l=(n(26),n(2)),i=n(9),j=n(1),s=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,61))})),u=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,57))})),b=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,58))})),O=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,59))})),h=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,62))}));var d=function(){var e=Object(c.useContext)(i.a).user;return Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(j.Fragment,{}),children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/register",children:e?Object(j.jsx)(l.a,{to:"/home"}):Object(j.jsx)(b,{})}),Object(j.jsx)(l.b,{exact:!0,path:"/login",children:e?Object(j.jsx)(l.a,{to:"/home"}):Object(j.jsx)(O,{})}),Object(j.jsx)(l.b,{exact:!0,path:"/add",children:e?Object(j.jsx)(h,{}):Object(j.jsx)(l.a,{to:"/login"})}),Object(j.jsx)(l.b,{exact:!0,path:"/",children:e?Object(j.jsx)(l.a,{to:"/home"}):Object(j.jsx)(u,{})}),Object(j.jsx)(l.b,{exact:!0,path:"/home",children:e?Object(j.jsx)(s,{}):Object(j.jsx)(l.a,{to:"/"})})]})})},x=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))},f=n(10);a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(f.a,{children:Object(j.jsx)(i.b,{children:Object(j.jsx)(d,{})})})}),document.getElementById("root")),x()},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),o=n(15),r=n(11),a=n(1),l=Object(c.createContext)();t.b=function(e){var t=e.children,n=function(){var e,t=Object(c.useState)(null),n=Object(r.a)(t,2),a=n[0],l=n[1],i=Object(c.useState)(window.localStorage.getItem("token")),j=Object(r.a)(i,2),s=j[0],u=j[1];return Object(c.useEffect)((function(){l(s),fetch("/users",{headers:{Authorization:"Bearer "+s}}).then((function(e){return e.json()})).then((function(e){return l(e[0])}))}),[s]),e={user:a,token:s,setToken:u,logOut:function(){window.localStorage.removeItem("token"),u(null)}},Object(o.a)(e,"token",s),Object(o.a)(e,"login",(function(e){console.log(e),window.localStorage.setItem("token",e),u(e)})),e}(),i=n.user,j=n.token,s=n.setToken,u=n.logOut,b=n.login;return Object(a.jsx)(l.Provider,{value:{user:i,token:j,setToken:s,logOut:u,login:b},children:t})}}},[[35,3,4]]]);
//# sourceMappingURL=main.e4e30505.chunk.js.map