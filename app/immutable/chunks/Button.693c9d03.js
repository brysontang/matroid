import{s as R,f as k,g,h as y,d as r,j as d,k as u,i as w,w as C,b as V,o as S,p as I,a as M,c as O,v as b,l as m,m as _,n as L,F as T,M as D}from"./scheduler.d64e95b5.js";import{S as B,i as E}from"./index.63c1aa50.js";let v;const U=(n,e)=>{const t=`
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

        ${n}
      <\/script>
    </body>
    </html>
  `;v&&URL.revokeObjectURL(v);const i=new Blob([t],{type:"text/html"});return v=URL.createObjectURL(i),v};function F(n){let e;return{c(){e=k("iframe"),this.h()},l(t){e=g(t,"IFRAME",{title:!0,style:!0,sandbox:!0}),y(e).forEach(r),this.h()},h(){d(e,"title",n[0]),u(e,"overflow","hidden"),u(e,"border","none"),u(e,"width",n[1]+"px"),u(e,"height",n[2]+"px"),d(e,"sandbox","allow-scripts")},m(t,i){w(t,e,i),n[6](e)},p(t,[i]){i&1&&d(e,"title",t[0]),i&2&&u(e,"width",t[1]+"px"),i&4&&u(e,"height",t[2]+"px")},i:C,o:C,d(t){t&&r(e),n[6](null)}}}function N(n,e,t){let i,{title:a}=e,{sketch:s}=e,{width:l=400}=e,{height:c=400}=e,{seed:o=Math.random()*1e5}=e;V(()=>{t(3,i.src=U(s,o),i)}),S(()=>{t(3,i.src=U(s,o),i)});function f(h){I[h?"unshift":"push"](()=>{i=h,t(3,i)})}return n.$$set=h=>{"title"in h&&t(0,a=h.title),"sketch"in h&&t(4,s=h.sketch),"width"in h&&t(1,l=h.width),"height"in h&&t(2,c=h.height),"seed"in h&&t(5,o=h.seed)},[a,l,c,i,s,o,f]}class J extends B{constructor(e){super(),E(this,e,N,F,R,{title:0,sketch:4,width:1,height:2,seed:5})}}function P(n){let e,t;return{c(){e=k("button"),t=m(n[1]),this.h()},l(i){e=g(i,"BUTTON",{class:!0});var a=y(e);t=_(a,n[1]),a.forEach(r),this.h()},h(){d(e,"class","button active-button svelte-w1t59s")},m(i,a){w(i,e,a),b(e,t)},p(i,a){a&2&&L(t,i[1])},d(i){i&&r(e)}}}function q(n){let e,t,i,a;return{c(){e=k("button"),t=m(n[1]),this.h()},l(s){e=g(s,"BUTTON",{class:!0});var l=y(e);t=_(l,n[1]),l.forEach(r),this.h()},h(){d(e,"class","button svelte-w1t59s")},m(s,l){w(s,e,l),b(e,t),i||(a=T(e,"click",function(){D(n[0])&&n[0].apply(this,arguments)}),i=!0)},p(s,l){n=s,l&2&&L(t,n[1])},d(s){s&&r(e),i=!1,a()}}}function j(n){let e,t,i,a;return{c(){e=k("div"),t=m(n[2]),i=m(": "),a=m(n[3]),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=y(e);t=_(l,n[2]),i=_(l,": "),a=_(l,n[3]),l.forEach(r),this.h()},h(){d(e,"class","pill svelte-w1t59s")},m(s,l){w(s,e,l),b(e,t),b(e,i),b(e,a)},p(s,l){l&4&&L(t,s[2]),l&8&&L(a,s[3])},d(s){s&&r(e)}}}function A(n){let e,t;function i(c,o){return c[5]?P:q}let a=i(n),s=a(n),l=n[2]!==""&&n[3]!==""&&j(n);return{c(){e=k("div"),s.c(),t=M(),l&&l.c(),this.h()},l(c){e=g(c,"DIV",{class:!0,style:!0});var o=y(e);s.l(o),t=O(o),l&&l.l(o),o.forEach(r),this.h()},h(){d(e,"class","container svelte-w1t59s"),u(e,"--selectColor",n[4])},m(c,o){w(c,e,o),s.m(e,null),b(e,t),l&&l.m(e,null)},p(c,[o]){a===(a=i(c))&&s?s.p(c,o):(s.d(1),s=a(c),s&&(s.c(),s.m(e,t))),c[2]!==""&&c[3]!==""?l?l.p(c,o):(l=j(c),l.c(),l.m(e,null)):l&&(l.d(1),l=null),o&16&&u(e,"--selectColor",c[4])},i:C,o:C,d(c){c&&r(e),s.d(),l&&l.d()}}}function z(n,e,t){let{onClick:i}=e,{symbol:a}=e,{pillLabel:s=""}=e,{pillValue:l=""}=e,{selectColor:c="#d0d0d0"}=e,{active:o=!1}=e;return n.$$set=f=>{"onClick"in f&&t(0,i=f.onClick),"symbol"in f&&t(1,a=f.symbol),"pillLabel"in f&&t(2,s=f.pillLabel),"pillValue"in f&&t(3,l=f.pillValue),"selectColor"in f&&t(4,c=f.selectColor),"active"in f&&t(5,o=f.active)},[i,a,s,l,c,o]}class K extends B{constructor(e){super(),E(this,e,z,A,R,{onClick:0,symbol:1,pillLabel:2,pillValue:3,selectColor:4,active:5})}}export{K as B,J as P};
