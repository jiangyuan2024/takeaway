(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"3d5e":function(e,t,r){"use strict";r.r(t);var n=r("fc72"),i=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"67b5":function(e,t,r){"use strict";r.r(t);var n=r("c3c2"),i=r("3d5e");for(var o in i)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(o);var a=r("f0c5"),u=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"b2f5d682",null,!1,n["a"],void 0);t["default"]=u.exports},c3c2:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}));var n={uniForms:r("2f0c").default,uniFormsItem:r("a608").default,uniEasyinput:r("36a2").default},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticStyle:{padding:"20px"}},[r("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[r("uni-forms",{ref:"formRef",attrs:{modelValue:e.form,rules:e.rules}},[r("uni-forms-item",{attrs:{name:"username",required:!0}},[r("uni-easyinput",{attrs:{type:"text",prefixIcon:"person",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("uni-forms-item",{attrs:{name:"password",required:!0}},[r("uni-easyinput",{attrs:{type:"password",prefixIcon:"locked",placeholder:"密码,3-10位字母或数字"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("uni-forms-item",[r("v-uni-button",{staticStyle:{"background-color":"#ffd100","border-color":"lightyellow",height:"35px","line-height":"35px"},attrs:{size:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("注 册")])],1),r("v-uni-view",{staticStyle:{"text-align":"right"}},[r("v-uni-text",{staticStyle:{"margin-right":"5px"}},[e._v("前往")]),r("v-uni-text",{staticStyle:{color:"dodgerblue"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLogin.apply(void 0,arguments)}}},[e._v("登录")])],1)],1)],1)],1)},o=[]},fc72:function(e,t,r){"use strict";r("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{form:{role:"USER"},rules:{username:{rules:[{required:!0,errorMessage:"请输入账号"}]},password:{rules:[{required:!0,errorMessage:"请输入密码"},{minLength:3,maxLength:10,errorMessage:"密码长度在 {minLength} 到 {maxLength} 个字符"}]}}}},methods:{goLogin:function(){uni.navigateTo({url:"/pages/login/login"})},register:function(){var e=this;this.$refs.formRef.validate().then((function(t){e.$request.post("/register",e.form).then((function(e){"200"===e.code?uni.showToast({title:"注册成功"}):uni.showToast({title:e.msg})}))})).catch((function(e){console.log("err",e)}))}}};t.default=n}}]);