import{s as Q,f as h,l as G,a as F,g as p,h as m,m as J,d as c,c as L,y as be,j as g,i as O,v as f,D as $e,E as ye,n as R,F as Ee,o as W,p as ke,k as M,w as H,G as Ve}from"../chunks/scheduler.021173b9.js";import{S as X,i as Y,g as _e,t as w,c as ge,a as I,b as Z,d as x,m as ee,e as te}from"../chunks/index.4c635041.js";import{b as he}from"../chunks/paths.c2c360e2.js";import{P as De}from"../chunks/P5Renderer.70209d06.js";import{g as Ie,a as we}from"../chunks/nostr.c5066fa2.js";function pe(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function Ae(o,e={}){const{threshold:n=.1,root:s=null,rootMargin:t="0px"}=e||{};let r=!1;function l(a){a.forEach(_=>{_.isIntersecting!==r&&(r=_.isIntersecting,o.dispatchEvent(new CustomEvent("visible",{detail:{inView:r}})))})}const i=new IntersectionObserver(l,{threshold:n,root:s,rootMargin:t});return i.observe(o),{destroy(){i.disconnect()}}}function Pe(o){let e;return{c(){e=h("div"),this.h()},l(n){e=p(n,"DIV",{style:!0}),m(e).forEach(c),this.h()},h(){M(e,"width","400px"),M(e,"height","400px"),M(e,"background-color","#f0f0f0"),M(e,"border-radius","10px")},m(n,s){O(n,e,s)},p:H,i:H,o:H,d(n){n&&c(e)}}}function Se(o){let e,n;return e=new De({props:{title:o[0].title,sketch:o[0].sketch,width:400,height:400,seed:o[4]}}),{c(){Z(e.$$.fragment)},l(s){x(e.$$.fragment,s)},m(s,t){ee(e,s,t),n=!0},p(s,t){const r={};t&1&&(r.title=s[0].title),t&1&&(r.sketch=s[0].sketch),t&16&&(r.seed=s[4]),e.$set(r)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function Ce(o){let e,n,s,t,r=o[0].title+"",l,i,a,_,A,v,P,y,E,b,$,j,S,k,se="ξ",q,C,K,T,V,z,ne;const le=[Se,Pe],D=[];function oe(u,d){return u[1]?0:1}return b=oe(o),$=D[b]=le[b](o),{c(){e=h("div"),n=h("div"),s=h("div"),t=h("span"),l=G(r),i=F(),a=h("a"),_=h("span"),A=G(o[5]),P=F(),y=h("div"),E=h("div"),$.c(),j=F(),S=h("div"),k=h("button"),k.textContent=se,q=F(),C=h("div"),K=h("span"),T=G(o[3]),this.h()},l(u){e=p(u,"DIV",{class:!0});var d=m(e);n=p(d,"DIV",{class:!0});var N=m(n);s=p(N,"DIV",{class:!0});var B=m(s);t=p(B,"SPAN",{class:!0});var re=m(t);l=J(re,r),re.forEach(c),i=L(B),a=p(B,"A",{href:!0});var ae=m(a);_=p(ae,"SPAN",{});var ie=m(_);A=J(ie,o[5]),ie.forEach(c),ae.forEach(c),B.forEach(c),N.forEach(c),P=L(d),y=p(d,"DIV",{class:!0});var U=m(y);E=p(U,"DIV",{});var ce=m(E);$.l(ce),ce.forEach(c),j=L(U),S=p(U,"DIV",{class:!0});var fe=m(S);k=p(fe,"BUTTON",{class:!0,"data-svelte-h":!0}),be(k)!=="svelte-1d7bezd"&&(k.textContent=se),fe.forEach(c),U.forEach(c),q=L(d),C=p(d,"DIV",{class:!0});var ue=m(C);K=p(ue,"SPAN",{});var de=m(K);T=J(de,o[3]),de.forEach(c),ue.forEach(c),d.forEach(c),this.h()},h(){g(t,"class","title svelte-13ypc5f"),g(a,"href",v=`${he}/profile/${o[0].publicKey}`),g(s,"class","header-text svelte-13ypc5f"),g(n,"class","header"),g(k,"class","random-button svelte-13ypc5f"),g(S,"class","random-button-container svelte-13ypc5f"),g(y,"class","post-section svelte-13ypc5f"),g(C,"class","footer svelte-13ypc5f"),g(e,"class","post svelte-13ypc5f")},m(u,d){O(u,e,d),f(e,n),f(n,s),f(s,t),f(t,l),f(s,i),f(s,a),f(a,_),f(_,A),f(e,P),f(e,y),f(y,E),D[b].m(E,null),o[7](E),f(y,j),f(y,S),f(S,k),f(e,q),f(e,C),f(C,K),f(K,T),V=!0,z||(ne=[$e(Ae.call(null,E,{threshold:0})),ye(k,"click",o[6])],z=!0)},p(u,[d]){(!V||d&1)&&r!==(r=u[0].title+"")&&R(l,r),(!V||d&32)&&R(A,u[5]),(!V||d&1&&v!==(v=`${he}/profile/${u[0].publicKey}`))&&g(a,"href",v);let N=b;b=oe(u),b===N?D[b].p(u,d):(_e(),w(D[N],1,1,()=>{D[N]=null}),ge(),$=D[b],$?$.p(u,d):($=D[b]=le[b](u),$.c()),I($,1),$.m(E,null)),(!V||d&8)&&R(T,u[3])},i(u){V||(I($),V=!0)},o(u){w($),V=!1},d(u){u&&c(e),D[b].d(),o[7](null),z=!1,Ee(ne)}}}function Ne(o,e,n){let s,{post:t}=e,r=!1,l,i,a=t.seeds[0];function _(){n(4,a=Math.floor(Math.random()*1e5))}W(()=>{const v=P=>{console.log("Visible event triggered!",t.title,P.detail),n(1,r=P.detail.inView)};return l.addEventListener("visible",v),()=>{l.removeEventListener("visible",v)}});function A(v){ke[v?"unshift":"push"](()=>{l=v,n(2,l)})}return o.$$set=v=>{"post"in v&&n(0,t=v.post)},o.$$.update=()=>{if(o.$$.dirty&1&&t&&t.createdAt){let v=new Date(t.createdAt*1e3);n(3,i=v.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}))}o.$$.dirty&1&&n(5,s=t.author&&t.author.name?t.author.name:t.publicKey)},[t,r,l,i,a,s,_,A]}class Me extends X{constructor(e){super(),Y(this,e,Ne,Ce,Q,{post:0})}}function Ke(o){let e,n,s;return n=new Me({props:{post:o[0]}}),{c(){e=h("div"),Z(n.$$.fragment),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0});var r=m(e);x(n.$$.fragment,r),r.forEach(c),this.h()},h(){g(e,"class","post svelte-fc6pac"),M(e,"--bg-color",o[0].color)},m(t,r){O(t,e,r),ee(n,e,null),s=!0},p(t,[r]){const l={};r&1&&(l.post=t[0]),n.$set(l),(!s||r&1)&&M(e,"--bg-color",t[0].color)},i(t){s||(I(n.$$.fragment,t),s=!0)},o(t){w(n.$$.fragment,t),s=!1},d(t){t&&c(e),te(n)}}}function Fe(o,e){for(let n of o)if(n[0]===e)return n[1];return""}function Le(o,e,n){let{event:s}=e;W(async()=>{n(0,r.author=await Ie(s.pubkey),r)}),console.log("e",s);let r={...JSON.parse(s.content),publicKey:s.pubkey,color:Fe(s.tags,"c"),createdAt:s.created_at};return o.$$set=l=>{"event"in l&&n(1,s=l.event)},[r,s]}class Oe extends X{constructor(e){super(),Y(this,e,Le,Ke,Q,{event:1})}}function ve(o,e,n){const s=o.slice();return s[1]=e[n],s}function me(o){let e,n,s,t;return n=new Oe({props:{event:o[1]}}),{c(){e=h("div"),Z(n.$$.fragment),s=F()},l(r){e=p(r,"DIV",{});var l=m(e);x(n.$$.fragment,l),s=L(l),l.forEach(c)},m(r,l){O(r,e,l),ee(n,e,null),f(e,s),t=!0},p(r,l){const i={};l&1&&(i.event=r[1]),n.$set(i)},i(r){t||(I(n.$$.fragment,r),t=!0)},o(r){w(n.$$.fragment,r),t=!1},d(r){r&&c(e),te(n)}}}function Te(o){let e,n,s=pe(o[0]),t=[];for(let l=0;l<s.length;l+=1)t[l]=me(ve(o,s,l));const r=l=>w(t[l],1,1,()=>{t[l]=null});return{c(){e=h("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=p(l,"DIV",{id:!0,class:!0});var i=m(e);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(c),this.h()},h(){g(e,"id","feed-page-content"),g(e,"class","svelte-1kmi7ht")},m(l,i){O(l,e,i);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);n=!0},p(l,[i]){if(i&1){s=pe(l[0]);let a;for(a=0;a<s.length;a+=1){const _=ve(l,s,a);t[a]?(t[a].p(_,i),I(t[a],1)):(t[a]=me(_),t[a].c(),I(t[a],1),t[a].m(e,null))}for(_e(),a=s.length;a<t.length;a+=1)r(a);ge()}},i(l){if(!n){for(let i=0;i<s.length;i+=1)I(t[i]);n=!0}},o(l){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)w(t[i]);n=!1},d(l){l&&c(e),Ve(t,l)}}}function Be(o,e,n){let s=[];return W(async()=>{n(0,s=await we())}),[s]}class Je extends X{constructor(e){super(),Y(this,e,Be,Te,Q,{})}}export{Je as component};