import{Q as i}from"./QPage-Dl82xOe-.js";import{u as c}from"./tenFriends-2MPIbT01.js";import{I as d,r as l,o as _,G as f,J as m,N as p,K as u,Q as n,V as a,Z as r}from"./index-BZTLjkvu.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./render-B60GGAv5.js";const w={class:"row",style:{"font-size":"24px"}},h={class:"col-4",style:{color:"blue"}},g={style:{color:"red"}},F=d({__name:"TenFriend",setup(x){const o=l(null),e=c(o),t=()=>{const s=o.value;s&&(s.width=window.innerWidth*.8,s.height=window.innerHeight*.8)};return console.log("tenFriends",e),_(()=>{t(),window.addEventListener("resize",t),e.startGame()}),f(()=>{window.removeEventListener("resize",t)}),(s,y)=>(p(),m(i,null,{default:u(()=>[n("div",w,[n("span",h,"Poeng: "+a(r(e).score),1),n("span",g,"Feil: "+a(r(e).mistakes),1)]),n("canvas",{ref_key:"canvasRef",ref:o},null,512)]),_:1}))}}),Q=v(F,[["__scopeId","data-v-09cf1411"]]);export{Q as default};
