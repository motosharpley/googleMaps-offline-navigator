webpackJsonp([2],{"5D9O":function(e,t,r){e.exports=r("wVGV")()},"93k0":function(e){e.exports={inherit:"inherit__eHCdh",display:"display__2l107",logo:"logo__2qJtn",form:"form__sLEuc",formChild:"formChild__27DqH",formChildReset:"formChildReset__3dE5v",strike:"strike__1Lw-F",link2:"link2__YXP6T",regBtn:"regBtn__17kEI"}},Asjh:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},ILxu:function(e){e.exports={"forgot-password-form":"forgot-password-form__lOpjS",form:"form__3dUS3",formChild:"formChild__-OST3",register:"register__2EZPa"}},RvdM:function(e,t,r){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=r("KM04"),c=r("af0x"),u=r.n(c),p=(r("5D9O"),r("opUN")),h=(r("sw5u"),r("ILxu")),f=r.n(h),d=Object(l.h)("h2",null,"Forgot Your Password?"),m=Object(l.h)("p",null,"Enter your email address below to reset your password."),b=Object(l.h)("p",null,"Not a member? ",Object(l.h)("a",{href:"/register"},"Sign up!")),w=function(e){function t(){return o(this,e.apply(this,arguments))}return n(t,e),t.prototype.render=function(){return Object(l.h)("div",{class:f.a["forgot-password-form"]},d,m,Object(l.h)("form",{action:"/",class:f.a.form},Object(l.h)("input",{type:"email",name:"email",placeholder:"email address",class:f.a.formChild,required:!0}),Object(l.h)("button",{type:"button",class:f.a.formChild},"RESET PASSWORD")),b)},t}(l.Component),O=r("Qpw7");r.d(t,"default",function(){return g});var _=Object(l.h)(w,null),j=Object(l.h)(p.a,{path:O.REGISTER_PATH}),y=Object(l.h)(p.a,{path:O.RESET_PATH}),v=Object(l.h)(p.a,{path:O.LOGIN_PATH}),g=function(e){function t(){return s(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=void 0;e="/forgot-password"==this.props.path?_:"/register"==this.props.path?j:"/reset-password"==this.props.path?y:v;var t={height:this.props.paneHeight};return Object(l.h)("div",{class:u.a.main,style:t},e)},t}(l.Component)},UQex:function(e){"use strict";function t(e){return function(){return e}}var r=function(){};r.thatReturns=t,r.thatReturnsFalse=t(!1),r.thatReturnsTrue=t(!0),r.thatReturnsNull=t(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},af0x:function(e){e.exports={inherit:"inherit__1qpkx",main:"main__1C4GY"}},opUN:function(e,t,r){"use strict";function o(e,t,r,o){for(o=0,t=t.split?t.split("."):t;e&&o<t.length;)e=e[t[o++]];return void 0===e?r:e}function n(e,t,r){var n=t.split("."),s=e.__lsc||(e.__lsc={});return s[t+r]||(s[t+r]=function(t){for(var s=t&&t.target||this,a={},i=a,l="string"==typeof r?o(t,r):s.nodeName?s.type.match(/^che|rad/)?s.checked:s.value:t,c=0;c<n.length-1;c++)i=i[n[c]]||(i[n[c]]=!c&&e.state[n[c]]||{});i[n[c]]=l,e.setState(a)})}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r("KM04"),l=r("93k0"),c=r.n(l),u=r("hYMD"),p=r("Qpw7"),h=n,f=r("/QC5");r.d(t,"a",function(){return O});var d=Object(i.h)("span",null,"OR"),m=Object(i.h)("a",{href:"/forgot-password"},"forgot password?"),b=Object(i.h)("p",null,"To change user info:"),w=Object(i.h)("p",null,"To change password:"),O=function(e){function t(){var t=s(this,e.call(this));return t.handleSubmit=function(e){e.preventDefault();var r={name:t.state.name,email:t.state.email,password:t.state.password,new_password:t.state.new_password,confirm_password:t.state.confirm_password},o={path:t.props.path,formData:r};Object(u.d)(o).then(function(e){console.log("validateAccountForm(): ",e),e.status?t.props.path===p.RESET_PATH?alert(e.message):Object(f.route)("/profile",!0):alert(e.message)}).catch(function(e){alert(e)})},t.componentWillUnmount=function(){Object(u.a)()},t.routeToRegister=t.routeToRegister.bind(t),t.handleSubmit=t.handleSubmit.bind(t),t}return a(t,e),t.prototype.routeToRegister=function(){Object(f.route)("/register",!0)},t.prototype.render=function(e,t){var r=e.path,o=t.name,n=t.email,s=t.password,a=t.new_password,l=t.confirm_password,u=Object(i.h)("div",{class:c.a.display},Object(i.h)("form",{class:c.a.form,onSubmit:this.handleSubmit},Object(i.h)("input",{class:c.a.formChild,id:"email",name:"email",type:"email",placeholder:"email address",value:n,onInput:h(this,"email"),required:!0}),Object(i.h)("input",{class:c.a.formChild,id:"password",name:"password",type:"password",placeholder:"password",value:s,onInput:h(this,"password"),required:!0}),Object(i.h)("div",null,Object(i.h)("button",{class:c.a.formChild},"LOGIN"))),Object(i.h)("div",{class:c.a.form},Object(i.h)("div",{class:c.a.strike},d),Object(i.h)("button",{type:"button",className:[c.a.formChild,c.a.regBtn].join(" "),onClick:this.routeToRegister},"CREATE AN ACCOUNT")),Object(i.h)("p",{class:c.a.link2},m));return r===p.REGISTER_PATH&&(u=Object(i.h)("div",{class:c.a.display},Object(i.h)("form",{class:c.a.form,onSubmit:this.handleSubmit},Object(i.h)("input",{class:c.a.formChild,name:"name",type:"text",placeholder:"firstname lastname",value:o,onInput:h(this,"name"),required:!0}),Object(i.h)("input",{class:c.a.formChild,id:"email",name:"email",type:"email",placeholder:"email address",value:n,onInput:h(this,"email"),required:!0}),Object(i.h)("input",{class:c.a.formChild,id:"password",name:"password",type:"password",placeholder:"password",value:s,onInput:h(this,"password"),required:!0}),Object(i.h)("input",{class:c.a.formChild,name:"confirm_password",type:"password",placeholder:"confirm password",value:l,onInput:h(this,"confirm_password"),required:!0}),Object(i.h)("button",{class:c.a.formChild},"SUBMIT")))),r===p.RESET_PATH&&(u=Object(i.h)("div",null,Object(i.h)("form",{class:c.a.form,onSubmit:this.handleSubmit},b,Object(i.h)("input",{class:c.a.formChildReset,name:"name",type:"text",placeholder:"Enter new name",value:o,onInput:h(this,"name")}),Object(i.h)("input",{class:c.a.formChildReset,id:"email",name:"email",type:"email",placeholder:"Enter new email address",value:n,onInput:h(this,"email")}),Object(i.h)("button",{class:c.a.formChildReset},"Update Info")),Object(i.h)("form",{class:c.a.form,onSubmit:this.handleSubmit},w,Object(i.h)("input",{class:c.a.formChildReset,id:"password",name:"password",type:"password",placeholder:"Enter current password",value:s,onInput:h(this,"password"),required:!0}),Object(i.h)("input",{class:c.a.formChildReset,name:"new_password",type:"password",placeholder:"Enter new password",value:a,onInput:h(this,"new_password"),required:!0}),Object(i.h)("input",{class:c.a.formChildReset,name:"confirm_password",type:"password",placeholder:"Confirm new password",value:l,onInput:h(this,"confirm_password"),required:!0}),Object(i.h)("button",{class:c.a.formChildReset},"Reset Password")))),Object(i.h)("div",{class:c.a.inherit},Object(i.h)("img",{class:c.a.logo,src:"../../assets/icons/leaflet/SVG/darkLogo.svg",alt:"Navi logo"}),u)},t}(i.Component)},"wRU+":function(e){"use strict";function t(e,t,o,n,s,a,i,l){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[o,n,s,a,i,l],p=0;c=new Error(t.replace(/%s/g,function(){return u[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(){};e.exports=t},wVGV:function(e,t,r){"use strict";var o=r("UQex");r("wRU+"),r("Asjh");e.exports=function(){function e(){}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=o,r.PropTypes=r,r}}});
//# sourceMappingURL=2.chunk.fb793.js.map