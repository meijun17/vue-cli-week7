(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18d4f914"],{"00b4":function(e,t,a){"use strict";a("ac1f");var c=a("23e7"),o=a("da84"),n=a("c65b"),r=a("e330"),l=a("1626"),s=a("861d"),i=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),d=o.Error,u=r(/./.test);c({target:"RegExp",proto:!0,forced:!i},{test:function(e){var t=this.exec;if(!l(t))return u(this,e);var a=n(t,this,e);if(null!==a&&!s(a))throw new d("RegExp exec method returned something other than an Object or null");return!!a}})},"1dde":function(e,t,a){var c=a("d039"),o=a("b622"),n=a("2d00"),r=o("species");e.exports=function(e){return n>=51||!c((function(){var t=[],a=t.constructor={};return a[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"6be2":function(e,t,a){"use strict";var c=a("1344"),o=Object(c["a"])();t["a"]=o},8418:function(e,t,a){"use strict";var c=a("a04b"),o=a("9bf2"),n=a("5c6c");e.exports=function(e,t,a){var r=c(t);r in e?o.f(e,r,n(0,a)):e[r]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),o=a("da84"),n=a("d039"),r=a("e8b5"),l=a("861d"),s=a("7b0b"),i=a("07fa"),d=a("8418"),u=a("65f0"),m=a("1dde"),b=a("b622"),p=a("2d00"),f=b("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",O=o.TypeError,g=p>=51||!n((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),v=m("concat"),V=function(e){if(!l(e))return!1;var t=e[f];return void 0!==t?!!t:r(e)},N=!g||!v;c({target:"Array",proto:!0,forced:N},{concat:function(e){var t,a,c,o,n,r=s(this),l=u(r,0),m=0;for(t=-1,c=arguments.length;t<c;t++)if(n=-1===t?r:arguments[t],V(n)){if(o=i(n),m+o>h)throw O(j);for(a=0;a<o;a++,m++)a in n&&d(l,m,n[a])}else{if(m>=h)throw O(j);d(l,m++,n)}return l.length=m,l}})},b0c0:function(e,t,a){var c=a("83ab"),o=a("5e77").EXISTS,n=a("e330"),r=a("9bf2").f,l=Function.prototype,s=n(l.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=n(i.exec),u="name";c&&!o&&r(l,u,{configurable:!0,get:function(){try{return d(i,s(this))[1]}catch(e){return""}}})},cc55:function(e,t,a){"use strict";a.r(t);a("b0c0"),a("b64b");var c=a("7a23"),o={class:"container"},n=Object(c["createElementVNode"])("h2",null,"購物車",-1),r={class:"text-end"},l=["disabled"],s={class:"table align-middle"},i=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th"),Object(c["createElementVNode"])("th",null,"品名"),Object(c["createElementVNode"])("th",{style:{width:"110px"}},"數量"),Object(c["createElementVNode"])("th",null,"單價")])],-1),d=["onClick","disabled"],u={key:0,class:"fas fa-spinner fa-pulse"},m=Object(c["createTextVNode"])(" 移除商品 "),b={key:0,class:"text-success"},p={class:"input-group input-group-sm"},f={class:"input-group mb-3"},h=["onUpdate:modelValue","onBlur","disabled"],j={class:"input-group-text",id:"basic-addon2"},O={class:"text-end"},g={key:0,class:"text-success"},v=Object(c["createElementVNode"])("td",{colspan:"3",class:"text-end"},"總計",-1),V={class:"text-end"},N={key:0},E=Object(c["createElementVNode"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),x={class:"text-end text-success"},y={class:"input-group mb-3 input-group-sm"},C={class:"input-group-append"},k={class:"my-5 row justify-content-center"},S={class:"mb-3"},w=Object(c["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1),B={class:"mb-3"},$=Object(c["createElementVNode"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),L={class:"mb-3"},I=Object(c["createElementVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),_={class:"mb-3"},M=Object(c["createElementVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1),D={class:"mb-3"},T=Object(c["createElementVNode"])("label",{for:"message",class:"form-label"},"留言",-1),U={class:"text-end"},q=["disabled"];function F(e,t,a,F,z,A){var J=Object(c["resolveComponent"])("Loading"),P=Object(c["resolveComponent"])("router-link"),R=Object(c["resolveComponent"])("Field"),X=Object(c["resolveComponent"])("ErrorMessage"),G=Object(c["resolveComponent"])("Form");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",null,[n,Object(c["createVNode"])(J,{active:z.isLoading},null,8,["active"]),Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-danger",type:"button",disabled:0===z.cart.carts.length,onClick:t[0]||(t[0]=function(e){return A.deleteAllCarts()})},"清空購物車",8,l)]),Object(c["createElementVNode"])("table",s,[i,Object(c["createElementVNode"])("tbody",null,[z.cart.carts?(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(z.cart.carts,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:t.id},[Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return A.removeCartItem(t.id)},disabled:z.loadingStatus.loadingItem===t.id},[z.loadingStatus.loadingItem===t.id?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",u)):Object(c["createCommentVNode"])("",!0),m],8,d)]),Object(c["createElementVNode"])("td",null,[Object(c["createVNode"])(P,{class:"nav-link",to:"/product/".concat(t.product.id)},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.product.title),1)]})),_:2},1032,["to"]),t.coupon?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",b," 已套用優惠券 ")):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("div",f,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":function(e){return t.qty=e},onBlur:function(e){return A.updateCart(t)},disabled:z.loadingStatus.loadingItem===t.id},null,40,h),[[c["vModelText"],t.qty,void 0,{number:!0}]]),Object(c["createElementVNode"])("span",j,Object(c["toDisplayString"])(t.product.unit),1)])])]),Object(c["createElementVNode"])("td",O,[z.cart.final_total!==t.total?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",g,"折扣價：")):Object(c["createCommentVNode"])("",!0),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.$filters.currency(t.final_total)),1)])])})),128)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("tfoot",null,[Object(c["createElementVNode"])("tr",null,[v,Object(c["createElementVNode"])("td",V,Object(c["toDisplayString"])(e.$filters.currency(z.cart.total)),1)]),z.cart.final_total!==z.cart.total?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",N,[E,Object(c["createElementVNode"])("td",x,Object(c["toDisplayString"])(e.$filters.currency(z.cart.final_total)),1)])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",y,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return z.coupon_code=e}),placeholder:"請輸入優惠碼"},null,512),[[c["vModelText"],z.coupon_code]]),Object(c["createElementVNode"])("div",C,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:t[2]||(t[2]=function(){return A.addCouponCode&&A.addCouponCode.apply(A,arguments)})}," 套用優惠碼 ")])])]),Object(c["createElementVNode"])("div",k,[Object(c["createVNode"])(G,{ref:"form",class:"col-md-6",onSubmit:A.onSubmit},{default:Object(c["withCtx"])((function(e){var a=e.errors;return[Object(c["createElementVNode"])("div",S,[w,Object(c["createVNode"])(R,{id:"email",name:"email",type:"email",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:z.form.user.email,"onUpdate:modelValue":t[3]||(t[3]=function(e){return z.form.user.email=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(X,{name:"email",class:"invalid-feedback"})]),Object(c["createElementVNode"])("div",B,[$,Object(c["createVNode"])(R,{id:"name",name:"姓名",type:"text",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":a["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:z.form.user.name,"onUpdate:modelValue":t[4]||(t[4]=function(e){return z.form.user.name=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(X,{name:"姓名",class:"invalid-feedback"})]),Object(c["createElementVNode"])("div",L,[I,Object(c["createVNode"])(R,{id:"tel",name:"電話",type:"text",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":a["電話"]}]),placeholder:"0912345678",rules:A.isPhone,modelValue:z.form.user.tel,"onUpdate:modelValue":t[5]||(t[5]=function(e){return z.form.user.tel=e})},null,8,["class","rules","modelValue"]),Object(c["createVNode"])(X,{name:"電話",class:"invalid-feedback"})]),Object(c["createElementVNode"])("div",_,[M,Object(c["createVNode"])(R,{id:"address",name:"地址",type:"text",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":a["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:z.form.user.address,"onUpdate:modelValue":t[6]||(t[6]=function(e){return z.form.user.address=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(X,{name:"地址",class:"invalid-feedback"})]),Object(c["createElementVNode"])("div",D,[T,Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[7]||(t[7]=function(e){return z.form.message=e})},null,512),[[c["vModelText"],z.form.message]])]),Object(c["createElementVNode"])("div",U,[Object(c["createElementVNode"])("button",{type:"submit",class:"btn btn-danger",disabled:0===z.cart.carts.length||Object.keys(a).length>0}," 送出訂單 ",8,q)])]})),_:1},8,["onSubmit"])])])}a("99af"),a("ac1f"),a("00b4");var z=a("6be2"),A={data:function(){return{loadingStatus:{loadingItem:""},isLoading:!1,cart:{carts:[]},form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},mounted:function(){this.getCart()},methods:{getCart:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/cart");this.$http.get(t).then((function(t){e.cart=t.data.data,e.isLoading=!1})).catch((function(e){alert(e.data.message)}))},removeCartItem:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/cart/").concat(e);this.loadingStatus.loadingItem=e,this.$http.delete(a).then((function(e){alert(e.data.message),z["a"].emit("get-cart"),t.getCart()})).catch((function(e){alert(e.data.message)})),this.loadingStatus.loadingItem="",this.isLoading=!1},updateCart:function(e){var t=this;this.loadingStatus.loadingItem=e.id;var a={product_id:e.product_id,qty:e.qty};this.$http.put("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/cart/").concat(e.id),{data:a}).then((function(e){alert(e.data.message),t.loadingStatus.loadingItem="",t.getCart()})).catch((function(e){alert(e.data.message),t.loadingStatus.loadingItem=""}))},deleteAllCarts:function(){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/carts")).then((function(t){alert(t.data.message),z["a"].emit("get-cart"),e.getCart()})).catch((function(e){alert(e.data.message)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"請輸入正確的號碼格式"},onSubmit:function(){var e=this;this.isLoading=!0;var t=this.form;this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/order"),{data:t}).then((function(t){e.$httpMessageState(t,"建立訂單"),e.$router.push("/checkout/".concat(t.data.orderId)),e.$refs.form.resetForm(),e.form.message="",e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"建立訂單")}))},addCouponCode:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/coupon"),a={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:a}).then((function(t){e.$httpMessageState(t,"加入優惠券"),e.getCart(),e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"加入優惠券")}))}}},J=a("6b0d"),P=a.n(J);const R=P()(A,[["render",F]]);t["default"]=R}}]);
//# sourceMappingURL=chunk-18d4f914.9a4f80e2.js.map