(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],Array(19).concat([function(e,t,a){},,,,,function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(9),i=a.n(c),o=(a(29),a(11)),u=a(4),s=a(2),m=a.n(s),d=a(1),E=(a(31),function(e){return l.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},l.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),p=(a(32),function(e){return l.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),f=(a(33),function(e){return l.a.createElement("li",{className:"user-item"},l.a.createElement(p,{className:"user-item__content"},l.a.createElement(u.b,{to:"/".concat(e.id,"/profile")},l.a.createElement("div",{className:"user-item__image"},l.a.createElement(E,{image:e.image,alt:e.name})),l.a.createElement("div",{className:"user-item__info"},l.a.createElement("h2",null,e.name),l.a.createElement("h3",null,"Aspiring Developer")))))}),b=(a(39),function(e){return 0===e.items.length?l.a.createElement("div",{className:"center"},l.a.createElement(p,null,l.a.createElement("h2",null,"No users found."))):l.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return l.a.createElement(f,{key:e.id,id:e.id,image:e.image,name:e.name})})))}),v=a(53),h=(a(40),function(e){return i.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),g=(a(41),function(e){var t=l.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},l.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},l.a.createElement("h2",null,e.header)),l.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},l.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),l.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return i.a.createPortal(t,document.getElementById("modal-hook"))}),O=function(e){return l.a.createElement(l.a.Fragment,null,e.show&&l.a.createElement(h,{onClick:e.onCancel}),l.a.createElement(v.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},l.a.createElement(g,e)))},y=(a(42),function(e){return e.href?l.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?l.a.createElement(u.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):l.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),j=function(e){return l.a.createElement(O,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:l.a.createElement(y,{onClick:e.onClear},"Okay")},l.a.createElement("p",null,e.error))},I=(a(43),function(e){return l.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},l.a.createElement("div",{className:"lds-dual-ring"}))}),N=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(),c=Object(d.a)(l,2),i=c[0],o=c[1],u=Object(r.useRef)([]),s=Object(r.useCallback)((function(e){var t,a,r,l,c,i,s=arguments;return m.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2&&void 0!==s[2]?s[2]:null,r=s.length>3&&void 0!==s[3]?s[3]:{},n(!0),l=new AbortController,u.current.push(l),d.prev=6,d.next=9,m.a.awrap(fetch(e,{method:t,body:a,headers:r,signal:l.signal}));case 9:return c=d.sent,d.next=12,m.a.awrap(c.json());case 12:if(i=d.sent,u.current=u.current.filter((function(e){return e!==l})),c.ok){d.next=16;break}throw new Error(i.message);case 16:return n(!1),d.abrupt("return",i);case 20:throw d.prev=20,d.t0=d.catch(6),o(d.t0.message),n(!1),d.t0;case 25:case"end":return d.stop()}}),null,null,[[6,20]])}),[]);return Object(r.useEffect)((function(){return function(){u.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:i,sendRequest:s,clearError:function(){o(null)}}},x=function(){var e=N(),t=e.isLoading,a=e.error,n=e.sendRequest,c=e.clearError,i=Object(r.useState)(),o=Object(d.a)(i,2),u=o[0],s=o[1];return Object(r.useEffect)((function(){!function(){var e;m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.awrap(n("/api/users"));case 3:e=t.sent,s(e.users),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),null,null,[[0,7]])}()}),[n]),l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{error:a,onClear:c}),t&&l.a.createElement("div",{className:"center"},l.a.createElement(I,null)),!t&&u&&l.a.createElement(b,{items:u}))},C=(a(44),Object(r.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})),T=(a(45),function(e){var t=N(),a=t.isLoading,n=t.error,c=t.sendRequest,i=t.clearError,o=Object(r.useContext)(C),u=Object(r.useState)(!1),s=Object(d.a)(u,2),E=s[0],f=s[1],b=function(){f(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{error:n,onClear:i}),l.a.createElement(O,{show:E,onCancel:b,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{inverse:!0,onClick:b},"CANCEL"),l.a.createElement(y,{danger:!0,onClick:function(){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!1),t.prev=1,t.next=4,m.a.awrap(c("/api/header/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+o.token}));case 4:e.onDelete(e.id),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),null,null,[[1,7]])}},"DELETE"))},l.a.createElement("p",null,"Do you want to proceed and delete this header? Please note that it can't be undone thereafter.")),l.a.createElement("li",{className:"place-item"},l.a.createElement(p,{className:"place-item__content"},a&&l.a.createElement(I,{asOverlay:!0}),l.a.createElement("div",{className:"place-item__image"},l.a.createElement("img",{src:"/".concat(e.photo),alt:e.title})),l.a.createElement("div",{className:"place-item__info"},l.a.createElement("h2",null,"Name: ",e.name),l.a.createElement("h3",null,"Job Title: ",e.jobTitle),l.a.createElement("p",null,"About: ",e.about)),l.a.createElement("div",{className:"place-item__actions"},o.userId===e.creatorId&&l.a.createElement(y,{to:"/header/".concat(e.id)},"EDIT"),o.userId===e.creatorId&&l.a.createElement(y,{danger:!0,onClick:function(){f(!0)}},"DELETE")))))}),w=function(e){return 0===e.items.length?l.a.createElement("div",{className:"place-list center"},l.a.createElement(p,null,l.a.createElement("h2",null,"No header found. Maybe create one?"),l.a.createElement(y,{to:"/header/new"},"Share Header"))):l.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return l.a.createElement(T,{key:t.id,id:t.id,name:t.name,photo:t.photo,jobTitle:t.jobTitle,about:t.about,adminComments:t.adminComments,isOk:t.isOk,creatorId:t.creator,onDelete:e.onDeleteHeader})})))},k=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),a=t[0],n=t[1],c=N(),i=c.isLoading,u=c.error,s=c.sendRequest,E=c.clearError,p=Object(o.h)().userId;Object(r.useEffect)((function(){!function(){var e;m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.awrap(s("/api/header/user/".concat(p)));case 3:e=t.sent,n(e.header),console.log(e.header),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),null,null,[[0,8]])}()}),[s,p]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{error:u,onClear:E}),i&&l.a.createElement("div",{className:"center"},l.a.createElement(I,null)),!i&&a&&l.a.createElement(w,{items:a,onDeleteHeader:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}))},S=a(10),V=function(e,t){var a=!0,n=!0,r=!1,l=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var o=c.value;"REQUIRE"===o.type&&(a=a&&e.trim().length>0),"MINLENGTH"===o.type&&(a=a&&e.trim().length>=o.val),"MAXLENGTH"===o.type&&(a=a&&e.trim().length<=o.val),"MIN"===o.type&&(a=a&&+e>=o.val),"MAX"===o.type&&(a=a&&+e<=o.val),"EMAIL"===o.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e))}}catch(u){r=!0,l=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a},_=(a(46),function(e,t){switch(t.type){case"CHANGE":return Object(S.a)({},e,{value:t.val,isValid:V(t.val,t.validators)});case"TOUCH":return Object(S.a)({},e,{isTouched:!0});default:return e}}),A=function(e){var t=Object(r.useReducer)(_,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(d.a)(t,2),n=a[0],c=a[1],i=e.id,o=e.onInput,u=n.value,s=n.isValid;Object(r.useEffect)((function(){o(i,u,s)}),[i,u,s,o]);var m=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},E=function(){c({type:"TOUCH"})},p="input"===e.element?l.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:m,onBlur:E,value:n.value}):l.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:m,onBlur:E,value:n.value});return l.a.createElement("div",{className:"form-control ".concat(!n.isValid&&n.isTouched&&"form-control--invalid")},l.a.createElement("label",{htmlFor:e.id},e.label),p,!n.isValid&&n.isTouched&&l.a.createElement("p",null,e.errorText))},R=a(13),D=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(S.a)({},e,{inputs:Object(S.a)({},e.inputs,Object(R.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},L=function(e,t){var a=Object(r.useReducer)(D,{inputs:e,isValid:t}),n=Object(d.a)(a,2),l=n[0],c=n[1];return[l,Object(r.useCallback)((function(e,t,a){c({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(r.useCallback)((function(e,t){c({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},P=(a(19),function(){var e=Object(r.useContext)(C),t=N(),a=t.isLoading,n=t.error,c=t.sendRequest,i=t.clearError,u=Object(r.useState)(),s=Object(d.a)(u,2),E=s[0],f=s[1],b=Object(o.h)().headerId,v=Object(o.g)(),h=L({name:{value:"",isValid:!1},jobTitle:{value:"",isValid:!1},about:{value:"",isValid:!1}},!1),g=Object(d.a)(h,3),O=g[0],x=g[1],T=g[2];Object(r.useEffect)((function(){!function(){var e;m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.awrap(c("/api/header/".concat(b)));case 3:e=t.sent,f(e.header),T({name:{value:e.header.name,isValid:!0},jobTitle:{value:e.header.jobTitle,isValid:!0},about:{value:e.header.about,isValid:!0}},!0),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),null,null,[[0,8]])}()}),[c,b,T]);return a?l.a.createElement("div",{className:"center"},l.a.createElement(I,null)):E||n?l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{error:n,onClear:i}),!a&&E&&l.a.createElement("form",{className:"place-form",onSubmit:function(t){return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,m.a.awrap(c("/api/header/".concat(b),"PATCH",JSON.stringify({name:O.inputs.name.value,jobTitle:O.inputs.jobTitle.value,about:O.inputs.about.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token}));case 4:v.push("/"+e.userId+"/header"),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(1);case 9:case"end":return a.stop()}}),null,null,[[1,7]])}},l.a.createElement(A,{id:"name",element:"input",type:"text",label:"Name",validators:[{type:"REQUIRE"}],errorText:"Please enter your name.",onInput:x,initialValue:E.name,initialValid:!0}),l.a.createElement(A,{id:"jobTitle",element:"textarea",label:"Job Title",validators:[{type:"REQUIRE"}],errorText:"Please enter your job title.",onInput:x,initialValue:E.jobTitle,initialValid:!0}),l.a.createElement(A,{id:"about",element:"textarea",label:"About",validators:[{type:"REQUIRE"}],errorText:"Please enter your about text.",onInput:x,initialValue:E.about,initialValid:!0}),l.a.createElement(y,{type:"submit",disabled:!O.isValid},"UPDATE HEADER"))):l.a.createElement("div",{className:"center"},l.a.createElement(p,null,l.a.createElement("h2",null,"Could not find header!")))}),U=(a(47),function(){var e,t=Object(r.useContext)(C),a=Object(r.useState)(!0),n=Object(d.a)(a,2),c=n[0],i=n[1],o=N(),u=o.isLoading,s=o.error,E=o.sendRequest,f=o.clearError,b=L({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),v=Object(d.a)(b,3),h=v[0],g=v[1],O=v[2];return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{error:s,onClear:f}),l.a.createElement(p,{className:"authentication"},u&&l.a.createElement(I,{asOverlay:!0}),l.a.createElement("h2",null,"Login Required"),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:function(e){var a,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.preventDefault(),!c){r.next=13;break}return r.prev=2,r.next=5,m.a.awrap(E("/api/users/login","POST",JSON.stringify({email:h.inputs.email.value,password:h.inputs.password.value}),{"Content-Type":"application/json"}));case 5:a=r.sent,t.login(a.userId,a.token),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(2);case 11:r.next=22;break;case 13:return r.prev=13,r.next=16,m.a.awrap(E("/api/users/signup","POST",JSON.stringify({name:h.inputs.name.value,email:h.inputs.email.value,password:h.inputs.password.value}),{"Content-Type":"application/json"}));case 16:n=r.sent,t.login(n.userId,n.token),r.next=22;break;case 20:r.prev=20,r.t1=r.catch(13);case 22:case"end":return r.stop()}}),null,null,[[2,9],[13,20]])}},!c&&l.a.createElement(A,{element:"input",id:"name",type:"text",label:"Your Name",validators:[{type:"REQUIRE"}],errorText:"Please enter a name.",onInput:g}),l.a.createElement(A,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[{type:"EMAIL"}],errorText:"Please enter a valid email address.",onInput:g}),l.a.createElement(A,{element:"input",id:"password",type:"password",label:"Password",validators:[(e=6,{type:"MINLENGTH",val:e})],errorText:"Please enter a valid password, at least 5 characters.",onInput:g}),l.a.createElement(y,{type:"submit",disabled:!h.isValid},c?"LOGIN":"SIGNUP")),l.a.createElement(y,{inverse:!0,onClick:function(){c?O(Object(S.a)({},h.inputs,{name:{value:"",isValid:!1}}),!1):O(Object(S.a)({},h.inputs,{name:void 0}),h.inputs.email.isValid&&h.inputs.password.isValid),i((function(e){return!e}))}},"SWITCH TO ",c?"SIGNUP":"LOGIN")))}),H=(a(48),function(e){return l.a.createElement("header",{className:"main-header"},e.children)}),G=(a(49),function(e){var t=Object(r.useContext)(C);return l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(u.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(u.c,{to:"/".concat(t.userId,"/profile")},"MY PROFILE")),t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(u.c,{to:"/header/new"},"ADD HEADER (provis\xf3rio)")),!t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(u.c,{to:"/auth"},"AUTHENTICATE")),t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement("button",{onClick:t.logout},"LOGOUT")))}),J=(a(50),function(e){var t=l.a.createElement(v.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},l.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return i.a.createPortal(t,document.getElementById("drawer-hook"))}),F=(a(51),function(e){var t=Object(r.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1],i=function(){c(!1)};return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement(h,{onClick:i}),l.a.createElement(J,{show:n,onClick:i},l.a.createElement("nav",{className:"main-navigation__drawer-nav"},l.a.createElement(G,null))),l.a.createElement(H,null,l.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){c(!0)}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("h1",{className:"main-navigation__title"},l.a.createElement(u.b,{to:"/"},"MockedIn")),l.a.createElement("nav",{className:"main-navigation__header-nav"},l.a.createElement(G,null))))}),M=function(){var e=Object(r.useContext)(C),t=N(),a=t.isLoading,n=t.error,c=t.sendRequest,i=t.clearError,u=L({name:{value:"",isValid:!1},jobTitle:{value:"",isValid:!1},about:{value:"",isValid:!1},adminComments:{value:null,isValid:!1}},!1),s=Object(d.a)(u,2),E=s[0],p=s[1],f=Object(o.g)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{error:n,onClear:i}),l.a.createElement("form",{className:"place-form",onSubmit:function(t){return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,m.a.awrap(c("/api/header","POST",JSON.stringify({name:E.inputs.name.value,jobTitle:E.inputs.jobTitle.value,about:E.inputs.about.value,adminComments:E.inputs.adminComments.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token}));case 4:f.push("/"),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(1);case 9:case"end":return a.stop()}}),null,null,[[1,7]])}},a&&l.a.createElement(I,{asOverlay:!0}),l.a.createElement(A,{id:"name",element:"input",type:"text",label:"Name",validators:[{type:"REQUIRE"}],errorText:"Please enter your name to be displayed.",onInput:p}),l.a.createElement(A,{id:"jobTitle",element:"textarea",label:"Job Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid Job Title (at least 5 characters).",onInput:p}),l.a.createElement(A,{id:"about",element:"input",label:"About",validators:[{type:"REQUIRE"}],errorText:"Please enter something about yourself.",onInput:p}),l.a.createElement(A,{id:"adminComments",element:"input",label:"Comment",validators:[{type:"REQUIRE"}],errorText:"Comment by the recruiter.",onInput:p}),l.a.createElement(y,{type:"submit"},"ADD HEADER")))},B=function(){var e,t=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(),i=Object(d.a)(c,2),o=i[0],u=i[1],s=Object(r.useState)(!1),m=Object(d.a)(s,2),E=m[0],p=m[1],f=Object(r.useCallback)((function(e,t,a){l(t),p(e);var n=a||new Date((new Date).getTime()+36e5);u(n),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:n.toISOString()}))}),[]),b=Object(r.useCallback)((function(){l(null),u(null),p(null),localStorage.removeItem("userData")}),[]);return Object(r.useEffect)((function(){if(a&&o){var e=o.getTime()-(new Date).getTime();n=setTimeout(b,e)}else clearTimeout(n)}),[a,b,o]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&f(e.userId,e.token,new Date(e.expiration))}),[f]),{token:a,login:f,logout:b,userId:E}}(),a=t.token,c=t.login,i=t.logout,s=t.userId;return e=a?l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(x,null)),l.a.createElement(o.b,{path:"/:userId/profile",exact:!0},l.a.createElement(k,null)),l.a.createElement(o.b,{path:"/header/new",exact:!0},l.a.createElement(M,null)),l.a.createElement(o.b,{path:"/header/:headerId"},l.a.createElement(P,null)),l.a.createElement(o.a,{to:"/"})):l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(x,null)),l.a.createElement(o.b,{path:"/:userId/page",exact:!0},l.a.createElement(k,null)),l.a.createElement(o.b,{path:"/auth"},l.a.createElement(U,null)),l.a.createElement(o.a,{to:"/auth"})),l.a.createElement(C.Provider,{value:{isLoggedIn:!!a,token:a,userId:s,login:c,logout:i}},l.a.createElement(u.a,null,l.a.createElement(F,null),l.a.createElement("main",null,e)))};i.a.render(l.a.createElement(B,null),document.getElementById("root"))}]),[[24,1,2]]]);
//# sourceMappingURL=main.fe8967d8.chunk.js.map