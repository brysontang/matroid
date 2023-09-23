import{s as w,f as _,g as j,h as k,d as m,j as c,k as h,i as y,w as b,b as R,o as U,p as S}from"./scheduler.021173b9.js";import{S as x,i as L}from"./index.4c635041.js";let a;const u=(n,e)=>{const t=`
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
  `;a&&URL.revokeObjectURL(a);const i=new Blob([t],{type:"text/html"});return a=URL.createObjectURL(i),a};function M(n){let e;return{c(){e=_("iframe"),this.h()},l(t){e=j(t,"IFRAME",{title:!0,style:!0,sandbox:!0}),k(e).forEach(m),this.h()},h(){c(e,"title",n[0]),h(e,"overflow","hidden"),h(e,"border","none"),h(e,"width",n[1]+"px"),h(e,"height",n[2]+"px"),c(e,"sandbox","allow-scripts")},m(t,i){y(t,e,i),n[6](e)},p(t,[i]){i&1&&c(e,"title",t[0]),i&2&&h(e,"width",t[1]+"px"),i&4&&h(e,"height",t[2]+"px")},i:b,o:b,d(t){t&&m(e),n[6](null)}}}function C(n,e,t){let i,{title:o}=e,{sketch:l}=e,{width:f=400}=e,{height:d=400}=e,{seed:r=Math.random()*1e5}=e;R(()=>{t(3,i.src=u(l,r),i)}),U(()=>{t(3,i.src=u(l,r),i)});function g(s){S[s?"unshift":"push"](()=>{i=s,t(3,i)})}return n.$$set=s=>{"title"in s&&t(0,o=s.title),"sketch"in s&&t(4,l=s.sketch),"width"in s&&t(1,f=s.width),"height"in s&&t(2,d=s.height),"seed"in s&&t(5,r=s.seed)},[o,f,d,i,l,r,g]}class O extends x{constructor(e){super(),L(this,e,C,M,w,{title:0,sketch:4,width:1,height:2,seed:5})}}export{O as P};
