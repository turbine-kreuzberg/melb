import{d,a as p,c as o,o as _,e as i,l as u,x as f,g as l,n as v,k as m}from"../index.js";const b=d({__name:"TheHeadline",props:{color:null,borderTop:{type:Boolean},level:null},setup(s){const e=s,{getColor:t}=p(),a=o(()=>t(e.color||"violet")),n=o(()=>e.borderTop||!1),r=o(()=>e.level||1);return(c,h)=>(_(),i("div",{class:f(["the-headline",[l(n)?"border-top":"",`level-${l(r)}`]]),style:v({"--color":l(a)})},[u(c.$slots,"default",{},void 0,!0)],6))}});const y=m(b,[["__scopeId","data-v-122b8f62"]]);export{y as default};
