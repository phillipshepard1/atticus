import{i as E,C as b,G as y,q as F,c as x,a,b as l,e as p,w as s,ax as O,F as D,o as u,Z as q,r as z,g as _,f as i,t as r,Y as G,s as P,P as Y,v as Z,j as H,x as J,a1 as K,a5 as Q}from"./app-BxavtTYs.js";import{u as R}from"./usePostVersions-THbIEc6s.js";import{u as U,_ as W,a as X,b as ee}from"./MediaGifs-CmzkqV-8.js";import{_ as te}from"./PageHeader-BnI1hV_t.js";import{T as se,_ as ae}from"./Tab-Cd_KlTQp.js";import{_ as oe}from"./SelectableBar-CA2MAe5u.js";import{_ as le}from"./PureDangerButton-zhKtSmpI.js";import{_ as ie}from"./Panel-Lw-nuda0.js";import{T as re}from"./Trash-B9tkDRbU.js";import"./index.browser-DP16PUbO.js";import"./Masonry-BYenGJi_.js";import"./MediaFile-BY_fCad3.js";import"./ExclamationCircle-DvHPQVk8.js";import"./SectionTitle-CXQlRiUw.js";import"./SearchInput-CkdofEcO.js";import"./NoResult-DNS5zprA.js";import"./Alert-BlT5orGN.js";import"./Flex-0eM5h-qJ.js";const ne={class:"w-full mx-auto row-py mb-2xl"},me={class:"w-full row-px"},de={class:"w-full row-px mt-lg"},Ve={__name:"Media",setup(ue){const v=E("workspaceCtx"),{activeTab:n,tabs:T,isDownloading:$,isDeleting:w,downloadExternal:h,deletePermanently:L,getMediaCrediting:V}=U("mixpost.media.fetchStock",{workspace:v.id}),B={uploads:W,stock:X,gifs:ee},m=b(),I=y(()=>B[n.value]),c=y(()=>m.value?m.value.selected:[]),g=()=>{m.value.deselectAll()},N=()=>{const e=n.value!=="uploads";e&&h(c.value.map(t=>{const{id:f,url:o,source:C,author:S,download_data:A}=t;return{id:f,url:o,source:C,author:S,download_data:A}}),t=>{k(t.data)}),e||k(c.value)},{versionObject:j}=R(),k=e=>{K.post(route("mixpost.posts.store",{workspace:v.id}),{versions:[j(0,!0,V(e),e.map(t=>t.id))]})},d=b(!1),M=()=>{const e=c.value.map(t=>t.id);L(e,()=>{g(),m.value.removeItems(e),Q.emit("mediaDelete",e),d.value=!1})};return(e,t)=>{const f=F("tooltip");return u(),x(D,null,[a(l(q),{title:e.$t("media.media_library")},null,8,["title"]),p("div",ne,[a(te,{title:e.$t("media.media_library")},null,8,["title"]),p("div",me,[a(se,null,{default:s(()=>[(u(!0),x(D,null,z(l(T),o=>(u(),_(ae,{key:o,onClick:C=>n.value=o,active:l(n)===o},{default:s(()=>[i(r(e.$t(`media.${o}`)),1)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),p("div",de,[a(ie,null,{default:s(()=>[(u(),_(G(I.value),{ref_key:"sourceProperties",ref:m,columns:4},null,512)),a(oe,{count:c.value.length,onClose:t[1]||(t[1]=o=>g())},{default:s(()=>[a(P,{onClick:N,isLoading:l($),disabled:l($),class:"mr-sm rtl:mr-0 rtl:ml-sm",size:"xs"},{icon:s(()=>[a(Y)]),default:s(()=>[i(" "+r(e.$t("media.create_post")),1)]),_:1},8,["isLoading","disabled"]),l(n)==="uploads"?Z((u(),_(le,{key:0,onClick:t[0]||(t[0]=o=>d.value=!0)},{default:s(()=>[a(re)]),_:1})),[[f,e.$t("general.delete")]]):H("",!0)]),_:1},8,["count"])]),_:1})])]),a(O,{show:d.value,variant:"danger",onClose:t[3]||(t[3]=o=>d.value=!1)},{header:s(()=>[i(r(e.$t("media.delete_media")),1)]),body:s(()=>[i(r(e.$t("media.do_you_want_delete")),1)]),footer:s(()=>[a(P,{onClick:t[2]||(t[2]=o=>d.value=!1),class:"mr-xs rtl:mr-0 rtl:ml-xs"},{default:s(()=>[i(r(e.$t("general.cancel")),1)]),_:1}),a(J,{isLoading:l(w),disabled:l(w),onClick:M},{default:s(()=>[i(r(e.$t("general.delete")),1)]),_:1},8,["isLoading","disabled"])]),_:1},8,["show"])],64)}}};export{Ve as default};
