import{S as g,i as v,s as $,w as y,x as k,y as S,E as x,q as f,o as _,B as b,k as q,e as A,X as E,d as u,m as w,c as B,a as C,b as D,g as m,p as I,Q as M,v as Q,n as R}from"../../chunks/index-30f8b6d8.js";import{a as V,S as X}from"../../chunks/Slider-dc4af239.js";import"../../chunks/index-056e7a80.js";import"../../chunks/index-7a6b9264.js";function h(r,a,s){const n=r.slice();return n[1]=a[s],n}function d(r){let a,s;return a=new X({props:{id:r[1],total:r[0].length}}),{c(){y(a.$$.fragment)},l(n){k(a.$$.fragment,n)},m(n,i){S(a,n,i),s=!0},p:x,i(n){s||(f(a.$$.fragment,n),s=!0)},o(n){_(a.$$.fragment,n),s=!1},d(n){b(a,n)}}}function j(r){let a,s,n,i=r[0],t=[];for(let e=0;e<i.length;e+=1)t[e]=d(h(r,i,e));const p=e=>_(t[e],1,1,()=>{t[e]=null});return{c(){a=q(),s=A("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){E('[data-svelte="svelte-1kgpue2"]',document.head).forEach(u),a=w(e),s=B(e,"DIV",{class:!0});var l=C(s);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(u),this.h()},h(){document.title="Relative Animation",D(s,"class","svelte-16ci6s4")},m(e,o){m(e,a,o),m(e,s,o);for(let l=0;l<t.length;l+=1)t[l].m(s,null);n=!0},p(e,[o]){if(o&1){i=e[0];let l;for(l=0;l<i.length;l+=1){const c=h(e,i,l);t[l]?(t[l].p(c,o),f(t[l],1)):(t[l]=d(c),t[l].c(),f(t[l],1),t[l].m(s,null))}for(R(),l=i.length;l<t.length;l+=1)p(l);I()}},i(e){if(!n){for(let o=0;o<i.length;o+=1)f(t[o]);n=!0}},o(e){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)_(t[o]);n=!1},d(e){e&&u(a),e&&u(s),M(t,e)}}}function z(r){let a=Array.from(Array(10).keys());return Q(()=>V.set(-1)),[a]}class K extends g{constructor(a){super(),v(this,a,z,j,$,{})}}export{K as default};