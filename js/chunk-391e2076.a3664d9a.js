(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-391e2076"],{"1dde":function(e,t,a){var n=a("d039"),c=a("b622"),r=a("2d00"),o=c("species");e.exports=function(e){return r>=51||!n((function(){var t=[],a=t.constructor={};return a[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"5ca6":function(e,t,a){"use strict";a("c76a")},"6be2":function(e,t,a){"use strict";var n=a("1344"),c=Object(n["a"])();t["a"]=c},"6c7d":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function c(e,t,a,c,r,o){var i=Object(n["resolveComponent"])("FrontNavbar"),l=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(i),Object(n["createVNode"])(l)],64)}var r=function(e){return Object(n["pushScopeId"])("data-v-2f99225a"),e=e(),Object(n["popScopeId"])(),e},o={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container"},l=Object(n["createTextVNode"])("Light Life"),s=r((function(){return Object(n["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1)})),u={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},d={class:"navbar-nav align-items-center"},b={class:"nav-item"},f=Object(n["createTextVNode"])("產品列表"),v=Object(n["createTextVNode"])("Blog"),j={class:"nav-item"},p=r((function(){return Object(n["createElementVNode"])("i",{class:"bx bx-cart",style:{"font-size":"24px"}},null,-1)})),O={class:"badgeStyle"},h={class:"nav-item"},g=Object(n["createTextVNode"])("進入後台");function m(e,t,a,c,r,m){var N=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("nav",o,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("h2",null,[Object(n["createVNode"])(N,{class:"nav-link",to:"/"},{default:Object(n["withCtx"])((function(){return[l]})),_:1})]),s,Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("ul",d,[Object(n["createElementVNode"])("li",b,[Object(n["createVNode"])(N,{class:"nav-link",to:"/products"},{default:Object(n["withCtx"])((function(){return[f]})),_:1})]),Object(n["createElementVNode"])("li",null,[Object(n["createVNode"])(N,{to:"/articles",class:"nav-link"},{default:Object(n["withCtx"])((function(){return[v]})),_:1})]),Object(n["createElementVNode"])("li",j,[Object(n["createVNode"])(N,{class:"nav-link",to:"/cart",style:{position:"relative"}},{default:Object(n["withCtx"])((function(){return[p,Object(n["createElementVNode"])("span",O,Object(n["toDisplayString"])(r.cartData.carts.length),1)]})),_:1})]),Object(n["createElementVNode"])("li",h,[Object(n["createVNode"])(N,{class:"nav-link",to:"/admin/products"},{default:Object(n["withCtx"])((function(){return[g]})),_:1})])])])])])}a("99af");var N=a("6be2"),V={data:function(){return{cartData:{carts:[]}}},methods:{getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/cart")).then((function(t){console.log(t),e.cartData=t.data.data})).catch((function(e){alert(e.data.message)}))}},mounted:function(){var e=this;this.getCart(),N["a"].on("get-cart",(function(){e.getCart()}))}},x=(a("5ca6"),a("6b0d")),w=a.n(x);const E=w()(V,[["render",m],["__scopeId","data-v-2f99225a"]]);var k=E,C={components:{FrontNavbar:k}};const y=w()(C,[["render",c]]);t["default"]=y},8418:function(e,t,a){"use strict";var n=a("a04b"),c=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var o=n(t);o in e?c.f(e,o,r(0,a)):e[o]=a}},"99af":function(e,t,a){"use strict";var n=a("23e7"),c=a("da84"),r=a("d039"),o=a("e8b5"),i=a("861d"),l=a("7b0b"),s=a("07fa"),u=a("8418"),d=a("65f0"),b=a("1dde"),f=a("b622"),v=a("2d00"),j=f("isConcatSpreadable"),p=9007199254740991,O="Maximum allowed index exceeded",h=c.TypeError,g=v>=51||!r((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),m=b("concat"),N=function(e){if(!i(e))return!1;var t=e[j];return void 0!==t?!!t:o(e)},V=!g||!m;n({target:"Array",proto:!0,forced:V},{concat:function(e){var t,a,n,c,r,o=l(this),i=d(o,0),b=0;for(t=-1,n=arguments.length;t<n;t++)if(r=-1===t?o:arguments[t],N(r)){if(c=s(r),b+c>p)throw h(O);for(a=0;a<c;a++,b++)a in r&&u(i,b,r[a])}else{if(b>=p)throw h(O);u(i,b++,r)}return i.length=b,i}})},c76a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-391e2076.a3664d9a.js.map