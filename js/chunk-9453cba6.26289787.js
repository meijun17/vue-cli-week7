(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9453cba6"],{"1dde":function(e,t,n){var c=n("d039"),r=n("b622"),o=n("2d00"),a=r("species");e.exports=function(e){return o>=51||!c((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,n){"use strict";var c=n("a04b"),r=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var a=c(t);a in e?r.f(e,a,o(0,n)):e[a]=n}},"99af":function(e,t,n){"use strict";var c=n("23e7"),r=n("da84"),o=n("d039"),a=n("e8b5"),l=n("861d"),d=n("7b0b"),i=n("07fa"),s=n("8418"),u=n("65f0"),b=n("1dde"),O=n("b622"),j=n("2d00"),p=O("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",f=r.TypeError,E=j>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),N=b("concat"),V=function(e){if(!l(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},g=!E||!N;c({target:"Array",proto:!0,forced:g},{concat:function(e){var t,n,c,r,o,a=d(this),l=u(a,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?a:arguments[t],V(o)){if(r=i(o),b+r>m)throw f(h);for(n=0;n<r;n++,b++)n in o&&s(l,b,o[n])}else{if(b>=m)throw f(h);s(l,b++,o)}return l.length=b,l}})},b0c0:function(e,t,n){var c=n("83ab"),r=n("5e77").EXISTS,o=n("e330"),a=n("9bf2").f,l=Function.prototype,d=o(l.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=o(i.exec),u="name";c&&!r&&a(l,u,{configurable:!0,get:function(){try{return s(i,d(this))[1]}catch(e){return""}}})},b5fe:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),r={class:"my-5 row justify-content-center"},o={class:"table align-middle"},a=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("th",null,"品名"),Object(c["createElementVNode"])("th",null,"數量"),Object(c["createElementVNode"])("th",null,"單價")],-1),l={class:"text-end"},d=Object(c["createElementVNode"])("td",{colspan:"2",class:"text-end"},"總計",-1),i={class:"text-end"},s={class:"table"},u=Object(c["createElementVNode"])("th",{width:"100"},"Email",-1),b=Object(c["createElementVNode"])("th",null,"姓名",-1),O=Object(c["createElementVNode"])("th",null,"收件人電話",-1),j=Object(c["createElementVNode"])("th",null,"收件人地址",-1),p=Object(c["createElementVNode"])("th",null,"付款狀態",-1),m={key:0},h={key:1,class:"text-success"},f={key:0,class:"text-end"},E=Object(c["createElementVNode"])("button",{class:"btn btn-danger"},"確認付款去",-1),N=[E];function V(e,t,n,E,V,g){var y=Object(c["resolveComponent"])("Loading");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createVNode"])(y,{active:e.isLoading,"z-index":1060},null,8,["active"]),Object(c["createElementVNode"])("form",{class:"col-md-6",onSubmit:t[0]||(t[0]=Object(c["withModifiers"])((function(){return g.payOrder&&g.payOrder.apply(g,arguments)}),["prevent"]))},[Object(c["createElementVNode"])("table",o,[a,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(V.order.products,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:e.id},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.product.title),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.qty)+"/"+Object(c["toDisplayString"])(e.product.unit),1),Object(c["createElementVNode"])("td",l,Object(c["toDisplayString"])(e.final_total),1)])})),128))]),Object(c["createElementVNode"])("tfoot",null,[Object(c["createElementVNode"])("tr",null,[d,Object(c["createElementVNode"])("td",i,Object(c["toDisplayString"])(V.order.total),1)])])]),Object(c["createElementVNode"])("table",s,[Object(c["createElementVNode"])("tbody",null,[Object(c["createElementVNode"])("tr",null,[u,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(V.order.user.email),1)]),Object(c["createElementVNode"])("tr",null,[b,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(V.order.user.name),1)]),Object(c["createElementVNode"])("tr",null,[O,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(V.order.user.tel),1)]),Object(c["createElementVNode"])("tr",null,[j,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(V.order.user.address),1)]),Object(c["createElementVNode"])("tr",null,[p,Object(c["createElementVNode"])("td",null,[V.order.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",h,"付款完成")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",m,"尚未付款"))])])])]),!1===V.order.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",f,N)):Object(c["createCommentVNode"])("",!0)],32)])}n("99af");var g={data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/order/").concat(this.orderId);this.isLoading=!0,this.$http.get(t).then((function(t){e.order=t.data.order,e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))},payOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/pay/").concat(this.orderId);this.isLoading=!0,this.$http.post(t).then((function(){e.isLoading=!1,e.getOrder()})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},y=n("6b0d"),v=n.n(y);const k=v()(g,[["render",V]]);t["default"]=k}}]);
//# sourceMappingURL=chunk-9453cba6.26289787.js.map