import{s as O,r as z,u as D,h,d as u,j as r,i as w,v as _,w as I,x as B,f as p,a as P,g as m,y as L,c as C,z as T,A as F,B as G,o as H,l as J,m as Q,n as R}from"../chunks/scheduler.d64e95b5.js";import{S as q,i as x,b as U,d as W,m as X,a as K,t as M,e as Y}from"../chunks/index.63c1aa50.js";import"../chunks/paths.1a23dcc8.js";const Z=!1,ee=!0,ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:ee,ssr:Z},Symbol.toStringTag,{value:"Module"}));function te(o){let e,l;return{c(){e=z("svg"),l=z("path"),this.h()},l(t){e=D(t,"svg",{width:!0,height:!0,xmlns:!0,"fill-rule":!0,"clip-rule":!0,class:!0});var a=h(e);l=D(a,"path",{d:!0}),h(l).forEach(u),a.forEach(u),this.h()},h(){r(l,"d","M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10v-4z"),r(e,"width","24"),r(e,"height","24"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"fill-rule","evenodd"),r(e,"clip-rule","evenodd"),r(e,"class","svelte-18t2gd4")},m(t,a){w(t,e,a),_(e,l)},p:I,i:I,o:I,d(t){t&&u(e)}}}class se extends q{constructor(e){super(),x(this,e,null,te,O,{})}}function N(o){let e,l;return{c(){e=p("a"),l=J(o[0]),this.h()},l(t){e=m(t,"A",{href:!0,class:!0});var a=h(e);l=Q(a,o[0]),a.forEach(u),this.h()},h(){r(e,"href","/profile"),r(e,"class","profile svelte-84ufkb")},m(t,a){w(t,e,a),_(e,l)},p(t,a){a&1&&R(l,t[0])},d(t){t&&u(e)}}}function le(o){let e,l,t,a="matroid",g,y,f,b,d,E,v,$,n=o[1]&&N(o);d=new se({});const A=o[3].default,i=B(A,o,o[2],null);return{c(){e=p("nav"),l=p("div"),t=p("a"),t.textContent=a,g=P(),n&&n.c(),y=P(),f=p("div"),b=p("a"),U(d.$$.fragment),E=P(),v=p("div"),i&&i.c(),this.h()},l(s){e=m(s,"NAV",{class:!0});var c=h(e);l=m(c,"DIV",{});var k=h(l);t=m(k,"A",{href:!0,class:!0,"data-svelte-h":!0}),L(t)!=="svelte-15cwacb"&&(t.textContent=a),g=C(k),n&&n.l(k),k.forEach(u),y=C(c),f=m(c,"DIV",{});var S=h(f);b=m(S,"A",{href:!0});var V=h(b);W(d.$$.fragment,V),V.forEach(u),S.forEach(u),c.forEach(u),E=C(s),v=m(s,"DIV",{class:!0});var j=h(v);i&&i.l(j),j.forEach(u),this.h()},h(){r(t,"href","/"),r(t,"class","brand svelte-84ufkb"),r(b,"href","/create"),r(e,"class","svelte-84ufkb"),r(v,"class","content svelte-84ufkb")},m(s,c){w(s,e,c),_(e,l),_(l,t),_(l,g),n&&n.m(l,null),_(e,y),_(e,f),_(f,b),X(d,b,null),w(s,E,c),w(s,v,c),i&&i.m(v,null),$=!0},p(s,[c]){s[1]?n?n.p(s,c):(n=N(s),n.c(),n.m(l,null)):n&&(n.d(1),n=null),i&&i.p&&(!$||c&4)&&T(i,A,s,s[2],$?G(A,s[2],c,null):F(s[2]),null)},i(s){$||(K(d.$$.fragment,s),K(i,s),$=!0)},o(s){M(d.$$.fragment,s),M(i,s),$=!1},d(s){s&&(u(e),u(E),u(v)),n&&n.d(),Y(d),i&&i.d(s)}}}function ae(o,e,l){let{$$slots:t={},$$scope:a}=e,g,y=!1;return H(async()=>{try{l(0,g=await window.nostr.getPublicKey()),l(1,y=!0)}catch{console.log("No nostr plugin found")}}),o.$$set=f=>{"$$scope"in f&&l(2,a=f.$$scope)},[g,y,a,t]}class ue extends q{constructor(e){super(),x(this,e,ae,le,O,{})}}export{ue as component,ie as universal};