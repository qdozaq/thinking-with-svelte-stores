import{S as v,i as S,s as H,e as $,t as u,c as b,a as C,h as c,d as h,g as E,K as m,j as d,E as g,R as M}from"./index-30f8b6d8.js";import{u as j}from"./timeStores-79ef677c.js";import"./index-7a6b9264.js";function k(o){let t,s=o[0].getHours()+"",n,l,i=o[0].getMinutes()+"",p,f,r=o[0].getSeconds()+"",_;return{c(){t=$("h1"),n=u(s),l=u(":"),p=u(i),f=u(":"),_=u(r)},l(a){t=b(a,"H1",{});var e=C(t);n=c(e,s),l=c(e,":"),p=c(e,i),f=c(e,":"),_=c(e,r),e.forEach(h)},m(a,e){E(a,t,e),m(t,n),m(t,l),m(t,p),m(t,f),m(t,_)},p(a,[e]){e&1&&s!==(s=a[0].getHours()+"")&&d(n,s),e&1&&i!==(i=a[0].getMinutes()+"")&&d(p,i),e&1&&r!==(r=a[0].getSeconds()+"")&&d(_,r)},i:g,o:g,d(a){a&&h(t)}}}function q(o,t,s){let n;return M(o,j,l=>s(0,n=l)),[n]}class w extends v{constructor(t){super(),S(this,t,q,k,H,{})}}export{w as default};