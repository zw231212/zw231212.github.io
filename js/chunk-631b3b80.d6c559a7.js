(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-631b3b80"],{8900:function(e,t,r){e.exports=r.p+"img/wechat.4f626635.png"},"8bfa":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Card",{staticClass:"container"},[r("div",{attrs:{slot:"title"},slot:"title"},[r("span",{staticStyle:{"font-weight":"bold","font-size":"16px"}},[e._v("用户注册")])]),r("Form",{ref:"userForm",attrs:{model:e.userForm,rules:e.userRule}},[r("FormItem",{attrs:{prop:"user"}},[r("Input",{attrs:{size:"large",type:"text",placeholder:"用户名"},model:{value:e.userForm.user,callback:function(t){e.$set(e.userForm,"user",t)},expression:"userForm.user"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{size:"large",type:"password",placeholder:"密码"},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),r("FormItem",{attrs:{prop:"code"}},[r("Input",{attrs:{size:"large",type:"text",placeholder:"验证码"},model:{value:e.userForm.code,callback:function(t){e.$set(e.userForm,"code",t)},expression:"userForm.code"}},[r("Icon",{attrs:{slot:"prepend",type:"ios-cloud-circle-outline"},slot:"prepend"})],1)],1),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("userForm")}}},[e._v("立即注册")]),r("Button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.resetForm("userForm")}}},[e._v("重新输入")])],1)],1),r("small",[e._v("已有账号，请"),r("Button",{attrs:{type:"text",size:"small"},on:{click:e.login}},[e._v("登录")])],1),r("social-login")],1)},o=[],n=r("90c8"),a={name:"RegisterPage",components:{SocialLogin:n["default"]},data:function(){return{userForm:{username:"",password:"",code:""},userRule:{username:[{required:!0,message:"请输入用户名",trigger:"change"},{min:3,message:"用户名至少3个字符",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"},{min:8,message:"用户名至少8个字符",trigger:"change"}],code:[{required:!0,message:"请输入验证码",trigger:"change"},{min:5,max:5,message:"验证码位数只能是5位",trigger:"change"}]}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()},login:function(){this.$router.push({name:"login"})}}},i=a,u=r("2877"),c=Object(u["a"])(i,s,o,!1,null,null,null);t["default"]=c.exports},"90c8":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Divider",[e._v("第三方登录")]),r("div",{staticClass:"sl-type"},[r("div",[r("Avatar",{attrs:{src:e.qq}})],1),r("div",[r("Avatar",{attrs:{src:e.zhifubao}})],1),r("div",[r("Avatar",{attrs:{src:e.wechat}})],1)])],1)},o=[],n={name:"SocialLoginComponent",data:function(){return{qq:r("debe"),wechat:r("8900"),zhifubao:r("c93f")}}},a=n,i=(r("a915"),r("2877")),u=Object(i["a"])(a,s,o,!1,null,"52dcfa20",null);t["default"]=u.exports},a915:function(e,t,r){"use strict";var s=r("f8a5"),o=r.n(s);o.a},c93f:function(e,t,r){e.exports=r.p+"img/zhifubao.587ed7ce.png"},debe:function(e,t,r){e.exports=r.p+"img/qq.102dd3d0.png"},f8a5:function(e,t,r){}}]);