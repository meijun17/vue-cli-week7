(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c546308"],{"057f":function(t,e,r){var n=r("c6b6"),o=r("fc6a"),c=r("241c").f,a=r("4dae"),i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return c(t)}catch(e){return a(i)}};t.exports.f=function(t){return i&&"Window"==n(t)?s(t):c(o(t))}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),c=r("2d00"),a=o("species");t.exports=function(t){return c>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4dae":function(t,e,r){var n=r("da84"),o=r("23cb"),c=r("07fa"),a=r("8418"),i=n.Array,s=Math.max;t.exports=function(t,e,r){for(var n=c(t),l=o(e,n),u=o(void 0===r?n:r,n),d=i(s(u-l,0)),f=0;l<u;l++,f++)a(d,f,t[l]);return d.length=f,d}},"6be2":function(t,e,r){"use strict";var n=r("1344"),o=Object(n["a"])();e["a"]=o},"746f":function(t,e,r){var n=r("428f"),o=r("1a2d"),c=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:c.f(t)})}},7901:function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var n=r("7a23"),o={class:"container"},c={class:"my-3"},a={class:""},i={class:"row"},s={class:"col-sm-6"},l={id:"carouselExampleIndicators",class:"carousel slide","data-bs-ride":"carousel"},u={class:"carousel-inner"},d={class:"carousel-item active"},f=["src"],b=["src"],p=Object(n["createElementVNode"])("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev"},[Object(n["createElementVNode"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"})],-1),m=Object(n["createElementVNode"])("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next"},[Object(n["createElementVNode"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"})],-1),v={class:"col-sm-6"},g={class:"badge bg-primary rounded-pill"},h=Object(n["createElementVNode"])("h5",null,"商品描述：",-1),O=Object(n["createElementVNode"])("h5",null,"商品內容：",-1),y={key:0,class:"h5"},j={key:1,class:"h6"},E={key:2,class:"h5"},N={class:"input-group"},S=["disabled"],w={key:0,class:"fas fa-spinner fa-pulse"},V=Object(n["createTextVNode"])(" 加入購物車 ");function k(t,e,r,k,x,B){var P=Object(n["resolveComponent"])("Loading");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(P,{active:x.isLoading},null,8,["active"]),Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("h2",null,Object(n["toDisplayString"])(x.product.title),1)]),Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("img",{src:x.product.imageUrl,class:"d-block w-100"},null,8,f)]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(x.product.imagesUrl,(function(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"carousel-item",key:e},[Object(n["createElementVNode"])("img",{src:t,class:"d-block w-100"},null,8,b)])})),128))]),p,m])]),Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("span",g,Object(n["toDisplayString"])(x.product.category),1),h,Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(x.product.description),1),O,Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(x.product.content),1),x.product.price?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",y,Object(n["toDisplayString"])(x.product.origin_price)+" 元 ",1)),x.product.price?(Object(n["openBlock"])(),Object(n["createElementBlock"])("del",j,"原價 "+Object(n["toDisplayString"])(x.product.origin_price)+" 元",1)):Object(n["createCommentVNode"])("",!0),x.product.price?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",E," 現在只要 "+Object(n["toDisplayString"])(x.product.price)+" 元 ",1)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",N,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return x.qty=t}),min:"1"},null,512),[[n["vModelText"],x.qty,void 0,{number:!0}]]),Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return B.addToCart(x.product.id,x.qty)}),disabled:x.loadingStatus.loadingItem===x.product.id},[x.loadingStatus.loadingItem===x.product.id?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",w)):Object(n["createCommentVNode"])("",!0),V],8,S)])])])])])])])}r("99af");var x=r("6be2"),B={data:function(){return{product:{},qty:1,loadingStatus:{loadingItem:""},isLoading:!1}},methods:{getProduct:function(){var t=this,e=this.$route.params.id;this.$http("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/product/").concat(e)).then((function(e){t.product=e.data.product}))},addToCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n={product_id:t,qty:r};this.qty<=0?alert("請輸入正確數量"):(this.loadingStatus.loadingItem=t,this.isLoading=!0,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("shila-hexschool","/cart"),{data:n}).then((function(t){e.loadingStatus.loadingItem="",x["a"].emit("get-cart"),e.isLoading=!1})).catch((function(t){alert(t.data.message)})))}},mounted:function(){this.getProduct()}},P=r("6b0d"),C=r.n(P);const D=C()(B,[["render",k]]);e["default"]=D},8418:function(t,e,r){"use strict";var n=r("a04b"),o=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,c(0,r)):t[a]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),c=r("d039"),a=r("e8b5"),i=r("861d"),s=r("7b0b"),l=r("07fa"),u=r("8418"),d=r("65f0"),f=r("1dde"),b=r("b622"),p=r("2d00"),m=b("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=o.TypeError,O=p>=51||!c((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),y=f("concat"),j=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)},E=!O||!y;n({target:"Array",proto:!0,forced:E},{concat:function(t){var e,r,n,o,c,a=s(this),i=d(a,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?a:arguments[e],j(c)){if(o=l(c),f+o>v)throw h(g);for(r=0;r<o;r++,f++)r in c&&u(i,f,c[r])}else{if(f>=v)throw h(g);u(i,f++,c)}return i.length=f,i}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),c=r("d066"),a=r("2ba4"),i=r("c65b"),s=r("e330"),l=r("c430"),u=r("83ab"),d=r("4930"),f=r("d039"),b=r("1a2d"),p=r("e8b5"),m=r("1626"),v=r("861d"),g=r("3a9b"),h=r("d9b5"),O=r("825a"),y=r("7b0b"),j=r("fc6a"),E=r("a04b"),N=r("577e"),S=r("5c6c"),w=r("7c73"),V=r("df75"),k=r("241c"),x=r("057f"),B=r("7418"),P=r("06cf"),C=r("9bf2"),D=r("37e8"),I=r("d1e7"),q=r("f36a"),L=r("6eeb"),T=r("5692"),$=r("f772"),J=r("d012"),F=r("90e3"),M=r("b622"),U=r("e538"),_=r("746f"),A=r("d44e"),Q=r("69f3"),W=r("b727").forEach,z=$("hidden"),G="Symbol",H="prototype",K=M("toPrimitive"),R=Q.set,X=Q.getterFor(G),Y=Object[H],Z=o.Symbol,tt=Z&&Z[H],et=o.TypeError,rt=o.QObject,nt=c("JSON","stringify"),ot=P.f,ct=C.f,at=x.f,it=I.f,st=s([].push),lt=T("symbols"),ut=T("op-symbols"),dt=T("string-to-symbol-registry"),ft=T("symbol-to-string-registry"),bt=T("wks"),pt=!rt||!rt[H]||!rt[H].findChild,mt=u&&f((function(){return 7!=w(ct({},"a",{get:function(){return ct(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=ot(Y,e);n&&delete Y[e],ct(t,e,r),n&&t!==Y&&ct(Y,e,n)}:ct,vt=function(t,e){var r=lt[t]=w(tt);return R(r,{type:G,tag:t,description:e}),u||(r.description=e),r},gt=function(t,e,r){t===Y&&gt(ut,e,r),O(t);var n=E(e);return O(r),b(lt,n)?(r.enumerable?(b(t,z)&&t[z][n]&&(t[z][n]=!1),r=w(r,{enumerable:S(0,!1)})):(b(t,z)||ct(t,z,S(1,{})),t[z][n]=!0),mt(t,n,r)):ct(t,n,r)},ht=function(t,e){O(t);var r=j(e),n=V(r).concat(Nt(r));return W(n,(function(e){u&&!i(yt,r,e)||gt(t,e,r[e])})),t},Ot=function(t,e){return void 0===e?w(t):ht(w(t),e)},yt=function(t){var e=E(t),r=i(it,this,e);return!(this===Y&&b(lt,e)&&!b(ut,e))&&(!(r||!b(this,e)||!b(lt,e)||b(this,z)&&this[z][e])||r)},jt=function(t,e){var r=j(t),n=E(e);if(r!==Y||!b(lt,n)||b(ut,n)){var o=ot(r,n);return!o||!b(lt,n)||b(r,z)&&r[z][n]||(o.enumerable=!0),o}},Et=function(t){var e=at(j(t)),r=[];return W(e,(function(t){b(lt,t)||b(J,t)||st(r,t)})),r},Nt=function(t){var e=t===Y,r=at(e?ut:j(t)),n=[];return W(r,(function(t){!b(lt,t)||e&&!b(Y,t)||st(n,lt[t])})),n};if(d||(Z=function(){if(g(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?N(arguments[0]):void 0,e=F(t),r=function(t){this===Y&&i(r,ut,t),b(this,z)&&b(this[z],e)&&(this[z][e]=!1),mt(this,e,S(1,t))};return u&&pt&&mt(Y,e,{configurable:!0,set:r}),vt(e,t)},tt=Z[H],L(tt,"toString",(function(){return X(this).tag})),L(Z,"withoutSetter",(function(t){return vt(F(t),t)})),I.f=yt,C.f=gt,D.f=ht,P.f=jt,k.f=x.f=Et,B.f=Nt,U.f=function(t){return vt(M(t),t)},u&&(ct(tt,"description",{configurable:!0,get:function(){return X(this).description}}),l||L(Y,"propertyIsEnumerable",yt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),W(V(bt),(function(t){_(t)})),n({target:G,stat:!0,forced:!d},{for:function(t){var e=N(t);if(b(dt,e))return dt[e];var r=Z(e);return dt[e]=r,ft[r]=e,r},keyFor:function(t){if(!h(t))throw et(t+" is not a symbol");if(b(ft,t))return ft[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!u},{create:Ot,defineProperty:gt,defineProperties:ht,getOwnPropertyDescriptor:jt}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:Et,getOwnPropertySymbols:Nt}),n({target:"Object",stat:!0,forced:f((function(){B.f(1)}))},{getOwnPropertySymbols:function(t){return B.f(y(t))}}),nt){var St=!d||f((function(){var t=Z();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:St},{stringify:function(t,e,r){var n=q(arguments),o=e;if((v(e)||void 0!==t)&&!h(t))return p(e)||(e=function(t,e){if(m(o)&&(e=i(o,this,t,e)),!h(e))return e}),n[1]=e,a(nt,null,n)}})}if(!tt[K]){var wt=tt.valueOf;L(tt,K,(function(t){return i(wt,this)}))}A(Z,G),J[z]=!0},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),c=r("da84"),a=r("e330"),i=r("1a2d"),s=r("1626"),l=r("3a9b"),u=r("577e"),d=r("9bf2").f,f=r("e893"),b=c.Symbol,p=b&&b.prototype;if(o&&s(b)&&(!("description"in p)||void 0!==b().description)){var m={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=l(p,this)?new b(t):void 0===t?b():b(t);return""===t&&(m[e]=!0),e};f(v,b),v.prototype=p,p.constructor=v;var g="Symbol(test)"==String(b("test")),h=a(p.toString),O=a(p.valueOf),y=/^Symbol\((.*)\)[^)]+$/,j=a("".replace),E=a("".slice);d(p,"description",{configurable:!0,get:function(){var t=O(this),e=h(t);if(i(m,t))return"";var r=g?E(e,7,-1):j(e,y,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:v})}},e538:function(t,e,r){var n=r("b622");e.f=n}}]);
//# sourceMappingURL=chunk-9c546308.62344ce5.js.map