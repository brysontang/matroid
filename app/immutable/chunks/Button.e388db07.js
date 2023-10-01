import{s as B,f as m,g,h as k,d as o,j as r,k as u,i as y,w as U,b as T,o as V,p as O,a as S,c as I,v as d,l as b,m as _,n as v,F as M,M as N}from"./scheduler.d64e95b5.js";import{S as E,i as R}from"./index.63c1aa50.js";let w;const L=(i,e)=>{const t=`
    <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"><\/script>
      <style>
        /* CSS Reset */
        body {
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body>
      <script>
        const seed = ${e};

        ${i}
      <\/script>
    </body>
    </html>
  `;w&&URL.revokeObjectURL(w);const l=new Blob([t],{type:"text/html"});return w=URL.createObjectURL(l),w};function D(i){let e;return{c(){e=m("iframe"),this.h()},l(t){e=g(t,"IFRAME",{title:!0,style:!0,sandbox:!0}),k(e).forEach(o),this.h()},h(){r(e,"title",i[0]),u(e,"overflow","hidden"),u(e,"border","none"),u(e,"width",i[1]+"px"),u(e,"height",i[2]+"px"),r(e,"sandbox","allow-scripts")},m(t,l){y(t,e,l),i[6](e)},p(t,[l]){l&1&&r(e,"title",t[0]),l&2&&u(e,"width",t[1]+"px"),l&4&&u(e,"height",t[2]+"px")},i:U,o:U,d(t){t&&o(e),i[6](null)}}}function F(i,e,t){let l,{title:a}=e,{sketch:n}=e,{width:s=400}=e,{height:h=400}=e,{seed:c=Math.random()*1e5}=e;T(()=>{t(3,l.src=L(n,c),l)}),V(()=>{t(3,l.src=L(n,c),l)});function C(f){O[f?"unshift":"push"](()=>{l=f,t(3,l)})}return i.$$set=f=>{"title"in f&&t(0,a=f.title),"sketch"in f&&t(4,n=f.sketch),"width"in f&&t(1,s=f.width),"height"in f&&t(2,h=f.height),"seed"in f&&t(5,c=f.seed)},[a,s,h,l,n,c,C]}class K extends E{constructor(e){super(),R(this,e,F,D,B,{title:0,sketch:4,width:1,height:2,seed:5})}}function P(i){let e,t;return{c(){e=m("button"),t=b(i[1]),this.h()},l(l){e=g(l,"BUTTON",{class:!0});var a=k(e);t=_(a,i[1]),a.forEach(o),this.h()},h(){r(e,"class","button active-button svelte-yfg7h0")},m(l,a){y(l,e,a),d(e,t)},p(l,a){a&2&&v(t,l[1])},d(l){l&&o(e)}}}function q(i){let e,t;return{c(){e=m("button"),t=b(i[1]),this.h()},l(l){e=g(l,"BUTTON",{class:!0});var a=k(e);t=_(a,i[1]),a.forEach(o),this.h()},h(){r(e,"class","button disabled-button svelte-yfg7h0"),e.disabled=i[6]},m(l,a){y(l,e,a),d(e,t)},p(l,a){a&2&&v(t,l[1]),a&64&&(e.disabled=l[6])},d(l){l&&o(e)}}}function A(i){let e,t,l,a;return{c(){e=m("button"),t=b(i[1]),this.h()},l(n){e=g(n,"BUTTON",{class:!0});var s=k(e);t=_(s,i[1]),s.forEach(o),this.h()},h(){r(e,"class","button svelte-yfg7h0")},m(n,s){y(n,e,s),d(e,t),l||(a=M(e,"click",function(){N(i[0])&&i[0].apply(this,arguments)}),l=!0)},p(n,s){i=n,s&2&&v(t,i[1])},d(n){n&&o(e),l=!1,a()}}}function j(i){let e,t,l,a;return{c(){e=m("div"),t=b(i[2]),l=b(": "),a=b(i[3]),this.h()},l(n){e=g(n,"DIV",{class:!0});var s=k(e);t=_(s,i[2]),l=_(s,": "),a=_(s,i[3]),s.forEach(o),this.h()},h(){r(e,"class","pill svelte-yfg7h0")},m(n,s){y(n,e,s),d(e,t),d(e,l),d(e,a)},p(n,s){s&4&&v(t,n[2]),s&8&&v(a,n[3])},d(n){n&&o(e)}}}function z(i){let e,t;function l(h,c){return!h[5]&&!h[6]?A:h[6]?q:P}let a=l(i),n=a(i),s=i[2]!==""&&i[3]!==""&&j(i);return{c(){e=m("div"),n.c(),t=S(),s&&s.c(),this.h()},l(h){e=g(h,"DIV",{class:!0,style:!0});var c=k(e);n.l(c),t=I(c),s&&s.l(c),c.forEach(o),this.h()},h(){r(e,"class","container svelte-yfg7h0"),u(e,"--selectColor",i[4])},m(h,c){y(h,e,c),n.m(e,null),d(e,t),s&&s.m(e,null)},p(h,[c]){a===(a=l(h))&&n?n.p(h,c):(n.d(1),n=a(h),n&&(n.c(),n.m(e,t))),h[2]!==""&&h[3]!==""?s?s.p(h,c):(s=j(h),s.c(),s.m(e,null)):s&&(s.d(1),s=null),c&16&&u(e,"--selectColor",h[4])},i:U,o:U,d(h){h&&o(e),n.d(),s&&s.d()}}}function G(i,e,t){let{onClick:l}=e,{symbol:a}=e,{pillLabel:n=""}=e,{pillValue:s=""}=e,{selectColor:h="#d0d0d0"}=e,{active:c=!1}=e,{disabled:C=!1}=e;return i.$$set=f=>{"onClick"in f&&t(0,l=f.onClick),"symbol"in f&&t(1,a=f.symbol),"pillLabel"in f&&t(2,n=f.pillLabel),"pillValue"in f&&t(3,s=f.pillValue),"selectColor"in f&&t(4,h=f.selectColor),"active"in f&&t(5,c=f.active),"disabled"in f&&t(6,C=f.disabled)},[l,a,n,s,h,c,C]}class Q extends E{constructor(e){super(),R(this,e,G,z,B,{onClick:0,symbol:1,pillLabel:2,pillValue:3,selectColor:4,active:5,disabled:6})}}export{Q as B,K as P};
