(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b1a4115"],{"168c":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a={class:"container"},l={class:"table mt-4"},o=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",null,"購買時間"),Object(n["createElementVNode"])("th",null,"Email"),Object(n["createElementVNode"])("th",null,"購買款項"),Object(n["createElementVNode"])("th",null,"應付金額"),Object(n["createElementVNode"])("th",null,"是否付款"),Object(n["createElementVNode"])("th",null,"編輯")])],-1),r=["textContent"],d={class:"list-unstyled"},i={class:"text-right"},s={class:"form-check form-switch"},b=["id","onUpdate:modelValue","onChange"],m=["for"],O={key:0},p={key:1},u={class:"btn-group"},j=["onClick"],h=["onClick"];function E(e,t,c,E,g,N){var V=Object(n["resolveComponent"])("Loading"),k=Object(n["resolveComponent"])("OrderModal"),f=Object(n["resolveComponent"])("DelModal"),y=Object(n["resolveComponent"])("Pagination");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createVNode"])(V,{active:g.isLoading},null,8,["active"]),Object(n["createElementVNode"])("table",l,[o,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(g.orders,(function(t,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:c},[g.orders.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:0,class:Object(n["normalizeClass"])({"text-secondary":!t.is_paid})},[Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.$filters.date(t.create_at)),1),Object(n["createElementVNode"])("td",null,[t.user?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:0,textContent:Object(n["toDisplayString"])(t.user.email)},null,8,r)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("ul",d,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t.products,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t},Object(n["toDisplayString"])(e.product.title)+" 數量："+Object(n["toDisplayString"])(e.qty)+" "+Object(n["toDisplayString"])(e.product.unit),1)})),128))])]),Object(n["createElementVNode"])("td",i,Object(n["toDisplayString"])(t.total),1),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",s,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return N.updatePaid(t)}},null,40,b),[[n["vModelCheckbox"],t.is_paid]]),Object(n["createElementVNode"])("label",{class:"form-check-label",for:"paidSwitch".concat(t.id)},[t.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",O,"已付款")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",p,"未付款"))],8,m)])]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(e){return N.openModal(t)}}," 檢視 ",8,j),Object(n["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(e){return N.openDelOrderModal(t)}}," 刪除 ",8,h)])])],2)):Object(n["createCommentVNode"])("",!0)],64)})),128))])]),Object(n["createVNode"])(k,{order:g.tempOrder,ref:"orderModal",onUpdatePaid:N.updatePaid},null,8,["order","onUpdatePaid"]),Object(n["createVNode"])(f,{item:g.tempOrder,ref:"delModal",onDelItem:N.delOrder},null,8,["item","onDelItem"]),Object(n["createVNode"])(y,{pages:g.pagination,onEmitPages:N.getOrders},null,8,["pages","onEmitPages"])])}var g=c("5530"),N=(c("99af"),c("ec05")),V=(c("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),k={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},y=Object(n["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(n["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(n["createElementVNode"])("span",null,"訂單細節")]),Object(n["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},B={class:"row"},x={class:"col-md-4"},D=Object(n["createElementVNode"])("h3",null,"用戶資料",-1),M={class:"table"},S={key:0},C=Object(n["createElementVNode"])("th",{style:{width:"100px"}},"姓名",-1),_=Object(n["createElementVNode"])("th",null,"Email",-1),w=Object(n["createElementVNode"])("th",null,"電話",-1),P=Object(n["createElementVNode"])("th",null,"地址",-1),L={class:"col-md-8"},$=Object(n["createElementVNode"])("h3",null,"訂單細節",-1),F={class:"table"},U=Object(n["createElementVNode"])("th",{style:{width:"100px"}},"訂單編號",-1),z=Object(n["createElementVNode"])("th",null,"下單時間",-1),I=Object(n["createElementVNode"])("th",null,"付款時間",-1),q={key:0},J={key:1},T=Object(n["createElementVNode"])("th",null,"付款狀態",-1),X={key:0,class:"text-success"},A={key:1,class:"text-muted"},G=Object(n["createElementVNode"])("th",null,"總金額",-1),H=Object(n["createElementVNode"])("h3",null,"選購商品",-1),K={class:"table"},Q=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr")],-1),R={class:"text-end"},W={class:"d-flex justify-content-end"},Y={class:"form-check"},Z={class:"form-check-label",for:"flexCheckDefault"},ee={key:0},te={key:1},ce={class:"modal-footer"},ne=Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ae(e,t,c,a,l,o){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",V,[Object(n["createElementVNode"])("div",k,[Object(n["createElementVNode"])("div",f,[y,Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("div",B,[Object(n["createElementVNode"])("div",x,[D,Object(n["createElementVNode"])("table",M,[l.tempOrder.user?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",S,[Object(n["createElementVNode"])("tr",null,[C,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(l.tempOrder.user.name),1)]),Object(n["createElementVNode"])("tr",null,[_,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(l.tempOrder.user.email),1)]),Object(n["createElementVNode"])("tr",null,[w,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(l.tempOrder.user.tel),1)]),Object(n["createElementVNode"])("tr",null,[P,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(l.tempOrder.user.address),1)])])):Object(n["createCommentVNode"])("",!0)])]),Object(n["createElementVNode"])("div",L,[$,Object(n["createElementVNode"])("table",F,[Object(n["createElementVNode"])("tbody",null,[Object(n["createElementVNode"])("tr",null,[U,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(l.tempOrder.id),1)]),Object(n["createElementVNode"])("tr",null,[z,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.$filters.date(l.tempOrder.create_at)),1)]),Object(n["createElementVNode"])("tr",null,[I,Object(n["createElementVNode"])("td",null,[l.tempOrder.paid_date?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",q,Object(n["toDisplayString"])(e.$filters.date(l.tempOrder.paid_date)),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",J,"時間不正確"))])]),Object(n["createElementVNode"])("tr",null,[T,Object(n["createElementVNode"])("td",null,[l.tempOrder.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("strong",X,"已付款")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",A,"尚未付款"))])]),Object(n["createElementVNode"])("tr",null,[G,Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.$filters.currency(l.tempOrder.total)),1)])])]),H,Object(n["createElementVNode"])("table",K,[Q,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(l.tempOrder.products,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:t.id},[Object(n["createElementVNode"])("th",null,Object(n["toDisplayString"])(t.product.title),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.qty)+" / "+Object(n["toDisplayString"])(t.product.unit),1),Object(n["createElementVNode"])("td",R,Object(n["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))])]),Object(n["createElementVNode"])("div",W,[Object(n["createElementVNode"])("div",Y,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.tempOrder.is_paid=e})},null,512),[[n["vModelCheckbox"],l.tempOrder.is_paid]]),Object(n["createElementVNode"])("label",Z,[l.tempOrder.is_paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",ee,"已付款")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",te,"未付款"))])])])])])]),Object(n["createElementVNode"])("div",ce,[ne,Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=function(t){return e.$emit("update-paid",l.tempOrder)})}," 修改付款狀態 ")])])])],512)}var le=c("e0ae"),oe={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[le["a"]],inject:["emitter"],watch:{order:function(){this.tempOrder=this.order}}},re=c("6b0d"),de=c.n(re);const ie=de()(oe,[["render",ae]]);var se=ie,be=c("ca8d"),me={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:be["a"],DelModal:N["a"],OrderModal:se},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/admin/orders?page=").concat(t);this.isLoading=!0,this.$http.get(c,this.tempProduct).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))},openModal:function(e){this.tempOrder=Object(g["a"])({},e),this.isNew=!1;var t=this.$refs.orderModal;t.openModal()},openDelOrderModal:function(e){this.tempOrder=Object(g["a"])({},e);var t=this.$refs.delModal;t.openModal()},updatePaid:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/admin/order/").concat(e.id),n={is_paid:e.is_paid};this.$http.put(c,{data:n}).then((function(e){t.isLoading=!1;var c=t.$refs.orderModal;c.hideModal(),t.getOrders(t.currentPage),t.$httpMessageState(e,"更新付款狀態")})).catch((function(e){t.isLoading=!1,t.$httpMessageState(e.response,"錯誤訊息")}))},delOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(t).then((function(){e.isLoading=!1;var t=e.$refs.delModal;t.hideModal(),e.getOrders(e.currentPage)})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))}},created:function(){this.getOrders()}};const Oe=de()(me,[["render",E]]);t["default"]=Oe},b0c0:function(e,t,c){var n=c("83ab"),a=c("5e77").EXISTS,l=c("e330"),o=c("9bf2").f,r=Function.prototype,d=l(r.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=l(i.exec),b="name";n&&!a&&o(r,b,{configurable:!0,get:function(){try{return s(i,d(this))[1]}catch(e){return""}}})},ca8d:function(e,t,c){"use strict";var n=c("7a23"),a={"aria-label":"Page navigation example"},l={class:"pagination justify-content-center"},o=Object(n["createElementVNode"])("span",{"aria-hidden":"true"},"«",-1),r=[o],d={key:0,class:"page-link"},i=["onClick"],s=Object(n["createElementVNode"])("span",{"aria-hidden":"true"},"»",-1),b=[s];function m(e,t,c,o,s,m){return Object(n["openBlock"])(),Object(n["createElementBlock"])("nav",a,[Object(n["createElementVNode"])("ul",l,[Object(n["createElementVNode"])("li",{class:Object(n["normalizeClass"])(["page-item",{disabled:1===c.pages.current_page}])},[Object(n["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(n["withModifiers"])((function(e){return m.emitPages(c.pages.current_page-1)}),["prevent"]))},r)],2),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.pages.total_pages,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t,class:Object(n["normalizeClass"])(["page-item",{active:e===c.pages.current_page}])},[e===c.pages.current_page?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",d,Object(n["toDisplayString"])(e),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:1,class:"page-link",href:"#",onClick:Object(n["withModifiers"])((function(t){return m.emitPages(e)}),["prevent"])},Object(n["toDisplayString"])(e),9,i))],2)})),128)),Object(n["createElementVNode"])("li",{class:Object(n["normalizeClass"])(["page-item",{disabled:c.pages.current_page===c.pages.total_pages}])},[Object(n["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(n["withModifiers"])((function(e){return m.emitPages(c.pages.current_page+1)}),["prevent"]))},b)],2)])])}var O={props:["pages"],methods:{emitPages:function(e){this.$emit("emit-pages",e)}}},p=c("6b0d"),u=c.n(p);const j=u()(O,[["render",m]]);t["a"]=j}}]);
//# sourceMappingURL=chunk-5b1a4115.7db79a39.js.map