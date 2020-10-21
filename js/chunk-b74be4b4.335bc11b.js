(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b74be4b4"],{"0ffb":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Card",{attrs:{shadow:""}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("h4",[e._v("作者"),e.objShow&&e.objShow.name?o("span",[e._v("——"+e._s(e.objShow.name))]):e._e(),e._v(" 书籍信息管理")])]),o("div",[o("Button",{staticStyle:{"margin-bottom":"10px","margin-right":"5px"},attrs:{type:"success",icon:"md-trash"},on:{click:e.clearOrder}},[e._v("清除排序")]),o("Button",{staticStyle:{"margin-bottom":"10px","margin-right":"5px"},attrs:{type:"success",icon:"md-add"},on:{click:function(t){return e.showItem(-1,!1)}}},[e._v("添加")]),o("Input",{staticStyle:{width:"200px","margin-bottom":"10px"},attrs:{placeholder:"请输入搜索关键词...",clearable:""},on:{"on-blur":e.getPage},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}})],1),o("Table",{ref:"table",attrs:{border:"",size:"large",columns:e.columns,data:e.objList},on:{"on-sort-change":e.sortChange}})],1),o("br"),o("Page",{staticStyle:{"text-align":"center"},attrs:{total:e.page.total,"page-size-opts":e.page.pageSizeOpts,"show-sizer":"","show-elevator":"","show-total":""},on:{"on-change":e.handleCurrentChange,"on-page-size-change":e.handleSizeChange}}),o("div",[o("Modal",{attrs:{title:"删除信息",loading:e.modalDelLoading},on:{"on-ok":e.handleDelete},model:{value:e.modalDel,callback:function(t){e.modalDel=t},expression:"modalDel"}},[o("p",{staticStyle:{"text-align":"center"}},[o("strong",[e._v("您确定要删除该信息吗？")])]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"error",size:"large",long:"",loading:e.modalDelLoading},on:{click:e.handleDelete}},[e._v("删除")])],1)]),o("Modal",{attrs:{title:"信息查看","ok-text":"确定","mask-closable":!1,"footer-hide":!e.disabled,loading:e.dialogLoading},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[o("Item",{attrs:{disabled:e.disabled,authorId:e.objShow.id,objShow:e.objForm},on:{afterSubmit:e.afterSubmit}})],1)],1)],1)},r=[],n=(o("a15b"),o("7c53")),i=o("6d57"),s=o("2117"),l=function(e){return[{type:"index",width:60,align:"center"},{title:"书籍名称",key:"title",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("title")},{title:"标签",key:"tags",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("tags")},{title:"书籍主页",key:"homepage",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("homepage")},{title:"创建时间",key:"ctime",minWidth:100,sortable:"custom",align:"center",render:Object(s["a"])("ctime")},{title:"更新时间",key:"utime",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("utime")},{title:"书籍简介",key:"descr",minWidth:150,sortable:"custom",align:"center",render:Object(s["a"])("descr")},{title:"所在平台",key:"bookPlat",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("bookPlat")},{title:"操作",key:"操作",fixed:"right",width:250,align:"center",render:function(t,o){return t("div",[t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.showItem(o.index,!0)}}},[t("Icon",{props:{type:"ios-copy",size:16}}),"查看"]),t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.showItem(o.index,!1)}}},[t("Icon",{props:{type:"ios-create",size:16}}),"修改"]),t("Button",{props:{type:"warning",size:"small"},on:{click:function(){e.delete(o.index)}}},[t("Icon",{props:{type:"ios-trash",size:16}})," 删除"])])}}]},c=o("afe3"),d={name:"bookPage",props:{objShow:{type:Object,default:function(){return null}}},components:{Item:c["default"]},mixins:[n["a"]],data:function(){return{searchKeyword:""}},computed:{columns:function(){return l(this)}},methods:{getPage:function(){var e=this,t=e.page,o={authorId:e.objShow.id};e.searchKeyword&&(o["title"]=e.searchKeyword);var a=t.descs.join(),r=t.ascs.join(),n=Object.assign({current:t.current,size:t.pageSize,descs:a,ascs:r},o);i["d"](n).then((function(t){e.objList=t.data.data.records,e.page.total=t.data.data.total,e.page.current=t.data.data.current})).catch((function(t){e.$Message.error("获取列表信息失败")}))},handleDelete:function(){var e=this;i["b"](e.objForm["id"]).then((function(t){e.$Message.success("删除成功！"),e.modalDel=!1,e.getPage()})).catch((function(t){e.$Message.error("删除失败，请重试！")}))},initShow:function(){var e=this,t=e.objShow;e.objList=[],t?e.$nextTick((function(){e.getPage()})):this.objForm=null}},watch:{objShow:{handler:function(){this.initShow()},deep:!0,immediate:!0}}},m=d,u=o("2877"),b=Object(u["a"])(m,a,r,!1,null,"12957c52",null);t["default"]=b.exports},"247b":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Card",{attrs:{shadow:""}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("h4",[e._v("作者或者人物信息信息管理")])]),o("div",[o("Button",{staticStyle:{"margin-bottom":"10px","margin-right":"5px"},attrs:{type:"success",icon:"md-trash"},on:{click:e.clearOrder}},[e._v("清除排序")]),o("Button",{staticStyle:{"margin-bottom":"10px","margin-right":"5px"},attrs:{type:"success",icon:"md-add"},on:{click:function(t){return e.showItem(-1,!1)}}},[e._v("添加")]),o("Input",{staticStyle:{width:"200px","margin-bottom":"10px"},attrs:{placeholder:"请输入搜索关键词...",clearable:""},on:{"on-blur":e.getPage},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}})],1),o("Table",{ref:"table",attrs:{border:"",size:"large",columns:e.columns,data:e.objList},on:{"on-sort-change":e.sortChange}})],1),o("br"),o("Page",{staticStyle:{"text-align":"center"},attrs:{total:e.page.total,"page-size-opts":e.page.pageSizeOpts,"show-sizer":"","show-elevator":"","show-total":""},on:{"on-change":e.handleCurrentChange,"on-page-size-change":e.handleSizeChange}}),o("div",[o("Modal",{attrs:{title:"删除信息",loading:e.modalDelLoading},on:{"on-ok":e.handleDelete},model:{value:e.modalDel,callback:function(t){e.modalDel=t},expression:"modalDel"}},[o("p",{staticStyle:{"text-align":"center"}},[o("strong",[e._v("您确定要删除该信息吗？")])]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"error",size:"large",long:"",loading:e.modalDelLoading},on:{click:e.handleDelete}},[e._v("删除")])],1)]),o("Modal",{attrs:{title:"信息查看","ok-text":"确定","mask-closable":!1,"footer-hide":!e.disabled,loading:e.dialogLoading},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[o("Item",{attrs:{disabled:e.disabled,objShow:e.objForm},on:{afterSubmit:e.afterSubmit}})],1),o("Modal",{attrs:{"ok-text":"确定",fullscreen:"","mask-closable":!1},model:{value:e.bookModal,callback:function(t){e.bookModal=t},expression:"bookModal"}},[e.bookModal?o("Book",{attrs:{objShow:e.objForm}}):e._e()],1)],1)],1)},r=[],n=(o("a15b"),o("7c53")),i=o("2ba0"),s=o("2117"),l=function(e){return[{type:"index",width:60,align:"center"},{title:"作者姓名",key:"name",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("name")},{title:"作者主页",key:"homepage",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("homepage")},{title:"作者别称",key:"alias",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("alias")},{title:"创建时间",key:"ctime",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("ctime")},{title:"更新时间",key:"utime",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("utime")},{title:"个人简介",key:"descr",minWidth:120,sortable:"custom",align:"center",render:Object(s["a"])("descr")},{title:"操作",key:"操作",fixed:"right",width:250,align:"center",render:function(t,o){return t("div",[t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.showItem(o.index,!0)}}},[t("Icon",{props:{type:"ios-copy",size:16}}),"查看"]),t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.showItem(o.index,!1)}}},[t("Icon",{props:{type:"ios-create",size:16}}),"修改"]),t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.showBook(o.index)}}},[t("Icon",{props:{type:"ios-book",size:16}}),"书籍"]),t("Button",{props:{type:"warning",size:"small"},on:{click:function(){e.delete(o.index)}}},[t("Icon",{props:{type:"ios-trash",size:16}})," 删除"])])}}]},c=o("c596"),d=o("0ffb"),m={name:"authorPage",components:{Item:c["default"],Book:d["default"]},mixins:[n["a"]],data:function(){return{searchKeyword:"",bookModal:!1}},computed:{columns:function(){return l(this)}},mounted:function(){this.getPage()},methods:{getPage:function(){var e=this,t=e.page,o={};e.searchKeyword&&(o["name"]=e.searchKeyword);var a=t.descs.join(),r=t.ascs.join(),n=Object.assign({current:t.current,size:t.pageSize,descs:a,ascs:r},o);i["c"](n).then((function(t){e.objList=t.data.data.records,e.page.total=t.data.data.total,e.page.current=t.data.data.current})).catch((function(t){e.$Message.error("获取列表信息失败")}))},handleDelete:function(){var e=this;i["b"](e.objForm["id"]).then((function(t){e.$Message.success("删除成功！"),e.modalDel=!1,e.getPage()})).catch((function(t){e.$Message.error("删除失败，请重试！")}))},showBook:function(e){this.bookModal=!0,this.objForm=this.objList[e]}}},u=m,b=o("2877"),p=Object(b["a"])(u,a,r,!1,null,"0ef620f2",null);t["default"]=p.exports},afe3:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("Form",{ref:"objForm",attrs:{model:e.objForm,"label-width":120}},[o("FormItem",{attrs:{label:"书籍名称",prop:"title"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.title)+" ")]):o("Input",{attrs:{placeholder:"书籍名称..."},model:{value:e.objForm.title,callback:function(t){e.$set(e.objForm,"title",t)},expression:"objForm.title"}})],1),o("FormItem",{attrs:{label:"标签",prop:"tags"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.tags)+" ")]):o("Input",{attrs:{placeholder:"标签..."},model:{value:e.objForm.tags,callback:function(t){e.$set(e.objForm,"tags",t)},expression:"objForm.tags"}})],1),o("FormItem",{attrs:{label:"书籍主页",prop:"homepage"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.homepage)+" ")]):o("Input",{attrs:{placeholder:"书籍主页..."},model:{value:e.objForm.homepage,callback:function(t){e.$set(e.objForm,"homepage",t)},expression:"objForm.homepage"}})],1),o("FormItem",{attrs:{label:"所在平台",prop:"bookPlat"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.bookPlat)+" ")]):o("Input",{attrs:{placeholder:"所在平台..."},model:{value:e.objForm.bookPlat,callback:function(t){e.$set(e.objForm,"bookPlat",t)},expression:"objForm.bookPlat"}})],1),e.objForm.ctime?o("FormItem",{attrs:{label:"创建时间",prop:"ctime"}},[o("p",[e._v(" "+e._s(e.objForm.ctime)+" ")])]):e._e(),e.objForm.utime?o("FormItem",{attrs:{label:"更新时间",prop:"utime"}},[o("p",[e._v(" "+e._s(e.objForm.utime)+" ")])]):e._e(),o("FormItem",{attrs:{label:"书籍简介",prop:"descr"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.descr)+" ")]):o("Input",{attrs:{type:"textarea",placeholder:"书籍简介..."},model:{value:e.objForm.descr,callback:function(t){e.$set(e.objForm,"descr",t)},expression:"objForm.descr"}})],1),e.disabled?e._e():o("FormItem",[o("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("objForm")}}},[e._v(" 提交 ")]),o("Button",{on:{click:function(t){return e.resetForm("objForm")}}},[e._v("重置")])],1)],1)],1)])},r=[],n=(o("a9e3"),o("6d57")),i=(o("2117"),{id:"",title:"",tags:"",homepage:"",authorId:"",ctime:"",utime:"",descr:"",bookPlat:""}),s={name:"bookItem",props:{disabled:{type:Boolean,default:function(){return!0}},authorId:{type:Number,default:function(){return null}},objShow:{type:Object,default:function(){return JSON.parse(JSON.stringify(i))}}},data:function(){return{objForm:i}},methods:{resetForm:function(e){this.$refs.formName.resetFields()},onSubmit:function(){var e=this,t=this;if(t.disabled)return t.modalShow=!1,!1;t.objForm["id"]?n["f"](t.objForm).then((function(e){t.$Message.success("修改成功！"),t.$emit("afterSubmit")})).catch((function(e){t.$Message.error("修改失败!")})):(t.objForm["authorId"]=t.authorId,n["a"](t.objForm).then((function(e){t.$Message.success("添加成功！"),t.$emit("afterSubmit")})).catch((function(t){e.$Message.error("添加失败!")})))},initShow:function(){var e=this,t=e.objShow;console.log(e.disabled),t&&e.$nextTick((function(){e.objForm=JSON.parse(JSON.stringify(t)),e.objForm.id&&n["e"](e.objForm.id).then((function(t){200===t.data.code&&(e.objForm=t.data.data)}))}))}},watch:{objShow:{handler:function(){this.initShow()},deep:!0,immediate:!0}}},l=s,c=o("2877"),d=Object(c["a"])(l,a,r,!1,null,"36978956",null);t["default"]=d.exports},c596:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("Form",{ref:"objForm",attrs:{model:e.objForm,"label-width":120}},[e.objForm.id?o("FormItem",{attrs:{label:"",prop:"id"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.id)+" ")]):e._e()]):e._e(),o("FormItem",{attrs:{label:"作者姓名",prop:"name"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.name)+" ")]):o("Input",{attrs:{placeholder:"作者姓名..."},model:{value:e.objForm.name,callback:function(t){e.$set(e.objForm,"name",t)},expression:"objForm.name"}})],1),o("FormItem",{attrs:{label:"作者主页",prop:"homepage"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.homepage)+" ")]):o("Input",{attrs:{placeholder:"作者主页或者介绍页面..."},model:{value:e.objForm.homepage,callback:function(t){e.$set(e.objForm,"homepage",t)},expression:"objForm.homepage"}})],1),o("FormItem",{attrs:{label:"作者别称",prop:"alias"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.alias)+" ")]):o("Input",{attrs:{placeholder:"作者别称..."},model:{value:e.objForm.alias,callback:function(t){e.$set(e.objForm,"alias",t)},expression:"objForm.alias"}})],1),e.objForm.ctime?o("FormItem",{attrs:{label:"创建时间",prop:"ctime"}},[o("p",[e._v(" "+e._s(e.objForm.ctime)+" ")])]):e._e(),e.objForm.utime?o("FormItem",{attrs:{label:"更新时间",prop:"utime"}},[o("p",[e._v(" "+e._s(e.objForm.utime)+" ")])]):e._e(),o("FormItem",{attrs:{label:"个人简介",prop:"descr"}},[e.disabled?o("p",[e._v(" "+e._s(e.objForm.descr)+" ")]):o("Input",{attrs:{type:"textarea",placeholder:"个人简介..."},model:{value:e.objForm.descr,callback:function(t){e.$set(e.objForm,"descr",t)},expression:"objForm.descr"}})],1),e.disabled?e._e():o("FormItem",[o("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("objForm")}}},[e._v(" 提交 ")]),o("Button",{on:{click:function(t){return e.resetForm("objForm")}}},[e._v("重置")])],1)],1)],1)])},r=[],n=o("2ba0"),i=(o("2117"),{id:"",name:"",homepage:"",alias:"",ctime:"",utime:"",descr:""}),s={name:"authorItem",props:{disabled:{type:Boolean,default:function(){return!0}},objShow:{type:Object,default:function(){return JSON.parse(JSON.stringify(i))}}},data:function(){return{objForm:i}},computed:{},methods:{resetForm:function(e){this.$refs[e].resetFields()},onSubmit:function(){var e=this,t=this;if(t.disabled)return t.modalShow=!1,!1;t.objForm["id"]?n["e"](t.objForm).then((function(o){t.$Message.success("修改成功！"),e.$emit("afterSubmit")})).catch((function(e){t.$Message.error("修改失败!")})):n["a"](t.objForm).then((function(o){t.$Message.success("添加成功！"),e.$emit("afterSubmit")})).catch((function(t){e.$Message.error("添加失败!")}))},initShow:function(){var e=this,t=e.objShow;t?e.$nextTick((function(){e.objForm=JSON.parse(JSON.stringify(t)),e.objForm.id&&n["d"](e.objForm.id).then((function(t){200===t.data.code&&(e.objForm=t.data.data)}))})):this.objForm=JSON.parse(JSON.stringify(i))}},watch:{objShow:{handler:function(){this.initShow()},deep:!0,immediate:!0}}},l=s,c=o("2877"),d=Object(c["a"])(l,a,r,!1,null,"0e72f37a",null);t["default"]=d.exports}}]);