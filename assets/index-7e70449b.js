import{g as v,a as n,i as o,b as j,d as A,r as w,t as h,e as T,s as q,f as D,h as $,c as g,F as B,j as L}from"./entry-client-c8c3837a.js";const J=[{brand:"Apple",model:"display",horizontal_resolution:1920,vertical_resolution:1080,diagonal:24},{brand:"Apple",model:"imac 21.5",horizontal_resolution:4096,vertical_resolution:2304,diagonal:21.5},{brand:"LG",model:"ultrafine 4k",horizontal_resolution:3840,vertical_resolution:2160,diagonal:27},{brand:"LG",model:"ultrafine 4k+",horizontal_resolution:4096,vertical_resolution:2304,diagonal:21.5},{brand:"LG",model:"gaming",horizontal_resolution:1920,vertical_resolution:1080,diagonal:24},{brand:"Samsung",model:"gaming",horizontal_resolution:1920,vertical_resolution:1080,diagonal:24}],K=h("<div><!#><!/><input>");function H(i){return(()=>{const l=v(K),e=l.firstChild,[t,r]=n(e.nextSibling),_=t.nextSibling;return o(l,()=>i.title,t,r),j(_,"input",i.onInput,!0),A(()=>q(_,"type",i.type)),A(()=>_.value=i.filter()),w(),l})()}T(["input"]);const O=h("<div><!#><!/> <!#><!/> <!#><!/>x<!#><!/> @ <!#><!/>");function Q({display:i}){return(()=>{const l=v(O),e=l.firstChild,[t,r]=n(e.nextSibling),_=t.nextSibling,d=_.nextSibling,[b,N]=n(d.nextSibling),f=b.nextSibling,z=f.nextSibling,[x,S]=n(z.nextSibling),y=x.nextSibling,m=y.nextSibling,[p,F]=n(m.nextSibling),I=p.nextSibling,C=I.nextSibling,[k,E]=n(C.nextSibling);return o(l,()=>i.brand,t,r),o(l,()=>i.model,b,N),o(l,()=>i.horizontal_resolution,x,S),o(l,()=>i.vertical_resolution,p,F),o(l,()=>i.diagonal,k,E),l})()}const U=h('<main><h1>PPI Calculator using Solid Signals</h1><div class="border-2 border-black p-4 max-w-lg"><!#><!/><!#><!/><!#><!/><div class="pt-1">Total pixels: <!#><!/></div></div><br><!#><!/>'),W=h("<div>Loading..."),[u,G]=L(""),[a,P]=L(NaN),[s,R]=L(NaN);$(()=>console.log(u()));$(()=>console.log(a()));$(()=>console.log(s()));function Y(){const i=D(()=>{let e=J;return u()!==""&&(e=e.filter(t=>t.brand.includes(u())||t.horizontal_resolution.toString().includes(u())||t.vertical_resolution.toString().includes(u()))),typeof a()=="number"&&!isNaN(a())&&(e=e.filter(t=>t.horizontal_resolution===a())),typeof s()=="number"&&!isNaN(s())&&(e=e.filter(t=>t.vertical_resolution===s())),e},[u,a,s]);$(()=>console.log(i()));const l=D(()=>isNaN(a())||isNaN(s())?"":a()*s(),[a,s]);return $(()=>console.log(l())),(()=>{const e=v(U),t=e.firstChild,r=t.nextSibling,_=r.firstChild,[d,b]=n(_.nextSibling),N=d.nextSibling,[f,z]=n(N.nextSibling),x=f.nextSibling,[S,y]=n(x.nextSibling),m=S.nextSibling,p=m.firstChild,F=p.nextSibling,[I,C]=n(F.nextSibling),k=r.nextSibling,E=k.nextSibling,[V,M]=n(E.nextSibling);return o(r,g(H,{title:"All filter:",filter:u,setFilter:G,type:"text",onInput:({target:c})=>G(c.value)}),d,b),o(r,g(H,{title:"Horizontal Resolution",type:"number",filter:a,setFilter:P,onInput:({target:c})=>P(parseInt(c.value))}),f,z),o(r,g(H,{title:"Vertical Resolution",type:"number",filter:s,setFilter:R,onInput:({target:c})=>R(parseInt(c.value))}),S,y),o(m,()=>l().toString(),I,C),o(e,g(B,{get each(){return i()},get fallback(){return v(W)},children:c=>g(Q,{display:c})}),V,M),e})()}export{Y as default};
