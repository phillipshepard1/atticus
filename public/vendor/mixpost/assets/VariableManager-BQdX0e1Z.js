const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EmojiMart-Q_kcw8r6.js","assets/app-BxavtTYs.js","assets/app-DqTL6qmA.css","assets/EmojiMart-CIKiYTla.css"])))=>i.map(i=>d[i]);
import{E as W,P as oe,c as ae,B as be,h as ye,D as ke,C as y,u as we,F as xe,f as Ce,v as Ee,x as Se}from"./index-CSZup35c.js";import{aG as Me,G as Q,a7 as Z,u as ne,Q as Pe,C as x,L as R,a5 as A,aP as Ve,S as Qe,o as n,c as C,a as u,b as S,z as J,H as le,A as F,e as $,g,a9 as j,q as H,w as s,v as O,V as K,D as Ae,E as De,i as B,f as b,t as f,j as E,F as q,r as X,Y as Te,s as T,X as Le,k as L,O as z,W as Ie,a2 as qe,x as je,l as ee,I as ie,U as N,a0 as re,aa as P,N as ue,m as ce,a3 as He}from"./app-BxavtTYs.js";import{u as Oe,H as Be,a as Ne,V as Ue}from"./Variable-IDS6Z41M.js";import{H as Fe,D as ze}from"./index-Dm9xgFsu.js";import{u as Ge,_ as We,a as Re,b as Je}from"./MediaGifs-CmzkqV-8.js";import{T as Ke,_ as Xe}from"./Tab-Cd_KlTQp.js";import{_ as Ye}from"./MediaFile-BY_fCad3.js";import{E as de}from"./EllipsisVertical-DCDthPML.js";import{T as pe}from"./Trash-B9tkDRbU.js";import{_ as me,L as fe}from"./ListItem-Ch3jcTq1.js";import{_ as he}from"./NoResult-DNS5zprA.js";import{_ as ve}from"./Textarea-BQg5Wyvs.js";import{_ as U}from"./VerticalGroup-DHZRXNYR.js";const Ze=()=>{const{isWorkspaceEditorRole:e}=Me(),i=Q(()=>Z().props.post),p=Q(()=>i.value?i.value.id:null),d=Q(()=>i.value?["published","failed"].includes(i.value.status):!1),o=Q(()=>i.value?i.value.status==="publishing":!1),l=Q(()=>i.value?i.value.status==="needs_approval":!1),t=Q(()=>!(d.value||o.value||i.value&&i.value.trashed||!e.value)),_=Q(()=>Z().props.user_can_approve);return{postId:p,isInHistory:d,isScheduleProcessing:o,needsApproval:l,editAllowed:t,userCanApprove:_}},et=W.create({name:"placeholder",addOptions(){return{emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",placeholder:"Write something …",showOnlyWhenEditable:!0,showOnlyCurrent:!0,includeChildren:!1}},addProseMirrorPlugins(){return[new oe({key:new ae("placeholder"),props:{decorations:({doc:e,selection:i})=>{const p=this.editor.isEditable||!this.options.showOnlyWhenEditable,{anchor:d}=i,o=[];if(!p)return null;const l=this.editor.isEmpty;return e.descendants((t,_)=>{const r=d>=_&&d<=_+t.nodeSize,h=!t.isLeaf&&be(t);if((r||!this.options.showOnlyCurrent)&&h){const a=[this.options.emptyNodeClass];l&&a.push(this.options.emptyEditorClass);const c=ye.node(_,_+t.nodeSize,{class:a.join(" "),"data-placeholder":typeof this.options.placeholder=="function"?this.options.placeholder({editor:this.editor,node:t,pos:_,hasAnchor:r}):this.options.placeholder});o.push(c)}return this.options.includeChildren}),ke.create(e,o)}}})]}}),tt=e=>y({find:/--$/,replace:e??"—"}),st=e=>y({find:/\.\.\.$/,replace:e??"…"}),ot=e=>y({find:/(?:^|[\s{[(<'"\u2018\u201C])(")$/,replace:e??"“"}),at=e=>y({find:/"$/,replace:e??"”"}),nt=e=>y({find:/(?:^|[\s{[(<'"\u2018\u201C])(')$/,replace:e??"‘"}),lt=e=>y({find:/'$/,replace:e??"’"}),it=e=>y({find:/<-$/,replace:e??"←"}),rt=e=>y({find:/->$/,replace:e??"→"}),ut=e=>y({find:/\(c\)$/,replace:e??"©"}),ct=e=>y({find:/\(tm\)$/,replace:e??"™"}),dt=e=>y({find:/\(sm\)$/,replace:e??"℠"}),pt=e=>y({find:/\(r\)$/,replace:e??"®"}),mt=e=>y({find:/(?:^|\s)(1\/2)\s$/,replace:e??"½"}),ft=e=>y({find:/\+\/-$/,replace:e??"±"}),ht=e=>y({find:/!=$/,replace:e??"≠"}),vt=e=>y({find:/<<$/,replace:e??"«"}),_t=e=>y({find:/>>$/,replace:e??"»"}),gt=e=>y({find:/\d+\s?([*x])\s?\d+$/,replace:e??"×"}),$t=e=>y({find:/\^2$/,replace:e??"²"}),bt=e=>y({find:/\^3$/,replace:e??"³"}),yt=e=>y({find:/(?:^|\s)(1\/4)\s$/,replace:e??"¼"}),kt=e=>y({find:/(?:^|\s)(3\/4)\s$/,replace:e??"¾"}),wt=W.create({name:"typography",addOptions(){return{closeDoubleQuote:"”",closeSingleQuote:"’",copyright:"©",ellipsis:"…",emDash:"—",laquo:"«",leftArrow:"←",multiplication:"×",notEqual:"≠",oneHalf:"½",oneQuarter:"¼",openDoubleQuote:"“",openSingleQuote:"‘",plusMinus:"±",raquo:"»",registeredTrademark:"®",rightArrow:"→",servicemark:"℠",superscriptThree:"³",superscriptTwo:"²",threeQuarters:"¾",trademark:"™"}},addInputRules(){const e=[];return this.options.emDash!==!1&&e.push(tt(this.options.emDash)),this.options.ellipsis!==!1&&e.push(st(this.options.ellipsis)),this.options.openDoubleQuote!==!1&&e.push(ot(this.options.openDoubleQuote)),this.options.closeDoubleQuote!==!1&&e.push(at(this.options.closeDoubleQuote)),this.options.openSingleQuote!==!1&&e.push(nt(this.options.openSingleQuote)),this.options.closeSingleQuote!==!1&&e.push(lt(this.options.closeSingleQuote)),this.options.leftArrow!==!1&&e.push(it(this.options.leftArrow)),this.options.rightArrow!==!1&&e.push(rt(this.options.rightArrow)),this.options.copyright!==!1&&e.push(ut(this.options.copyright)),this.options.trademark!==!1&&e.push(ct(this.options.trademark)),this.options.servicemark!==!1&&e.push(dt(this.options.servicemark)),this.options.registeredTrademark!==!1&&e.push(pt(this.options.registeredTrademark)),this.options.oneHalf!==!1&&e.push(mt(this.options.oneHalf)),this.options.plusMinus!==!1&&e.push(ft(this.options.plusMinus)),this.options.notEqual!==!1&&e.push(ht(this.options.notEqual)),this.options.laquo!==!1&&e.push(vt(this.options.laquo)),this.options.raquo!==!1&&e.push(_t(this.options.raquo)),this.options.multiplication!==!1&&e.push(gt(this.options.multiplication)),this.options.superscriptTwo!==!1&&e.push($t(this.options.superscriptTwo)),this.options.superscriptThree!==!1&&e.push(bt(this.options.superscriptThree)),this.options.oneQuarter!==!1&&e.push(yt(this.options.oneQuarter)),this.options.threeQuarters!==!1&&e.push(kt(this.options.threeQuarters)),e}}),xt=W.create({name:"StripLinksOnPaste",addProseMirrorPlugins(){return[new oe({key:new ae("StripLinksOnPaste"),props:{transformPastedHTML(e){return e.replace(/<a[^>]*>/g,"").replace(/<\/a>/g,"")}}})]}}),Ct=(e,i,p)=>{const d=e.replace().split(/(?:\r\n?|\n)/),o=[];d.forEach(t=>{const _={type:"div"};t.length>0&&(_.content=[{type:"text",text:t}]);const r=we.fromJSON(i.doc.type.schema,_);o.push(r)});const l=xe.fromArray(o);return Ce.maxOpen(l)},Qs={__name:"Editor",props:{value:{required:!0},editable:{type:Boolean,default:!0},placeholder:{type:String,default:""}},emits:["update"],setup(e,{emit:i}){const{t:p}=ne(),d=Pe(),o=e,l=i,t=x(!1),{defaultExtensions:_}=Oe(),r=Ee({editable:o.editable,content:o.value,extensions:[..._,Fe,et.configure({placeholder:o.placeholder?o.placeholder:p("post.start_write")}),wt.configure({openDoubleQuote:!1,closeDoubleQuote:!1,openSingleQuote:!1,closeSingleQuote:!1}),xt,Be,Ne,Ue],editorProps:{attributes:{class:"focus:outline-none min-h-[150px]"},clipboardTextParser:Ct},onUpdate:()=>{l("update",r.value.getHTML())},onFocus:()=>{t.value=!0},onBlur:()=>{t.value=!1}}),h=a=>d.hasOwnProperty("id")&&a===d.id;return R(()=>{A.on("insertEmoji",a=>{h(a.editorId)&&r.value.commands.insertContent(a.emoji.native)}),A.on("insertContent",a=>{h(a.editorId)&&r.value.commands.insertContent(a.text)}),A.on("replaceContent",a=>{h(a.editorId)&&(r.value.commands.clearContent(),r.value.commands.insertContent(a.text))}),A.on("focusEditor",a=>{h(a.editorId)&&r.value.commands.focus()})}),Ve(()=>{r.value.destroy(),A.off("insertEmoji"),A.off("insertContent"),A.off("replaceContent"),A.off("focusEditor")}),Qe(()=>o.value,a=>{a!==r.value.getHTML()&&r.value.commands.setContent(a)}),(a,c)=>(n(),C("div",{class:le([{"border-primary-200 ring ring-primary-200 ring-opacity-50":t.value},"border border-gray-200 rounded-lg p-md pb-xs text-base transition-colors ease-in-out duration-200"])},[u(S(Se),{editor:S(r)},null,8,["editor"]),J(a.$slots,"default")],2))}},Et={},St={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"};function Mt(e,i){return n(),C("svg",St,i[0]||(i[0]=[$("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))}const Pt=F(Et,[["render",Mt]]),Vt={__name:"EmojiPreloader",setup(e){return(i,p)=>(n(),g(j,{class:"!relative !h-24 !w-[353px]"}))}},Qt={class:"flex"},At={type:"button",class:"hover:text-orange-500 transition-colors ease-in-out duration-200 outline-none text-stone-800"},As={__name:"EmojiPicker",props:{closeOnSelect:{type:Boolean,default:!1},tooltip:{type:String,default:"Emoji"}},emits:["selected","close"],setup(e,{emit:i}){const p=Ae({loader:()=>De(()=>import("./EmojiMart-Q_kcw8r6.js"),__vite__mapDeps([0,1,2,3])),loadingComponent:Vt}),d=i,o=l=>{d("selected",l)};return(l,t)=>{const _=H("tooltip");return n(),g(K,{placement:"bottom-start","closeable-on-content":e.closeOnSelect,"width-classes":"w-auto",onClose:t[0]||(t[0]=r=>l.$emit("close"))},{trigger:s(()=>[$("div",Qt,[O((n(),C("button",At,[u(Pt)])),[[_,e.tooltip]])])]),content:s(()=>[u(S(p),{onSelect:o})]),_:1},8,["closeable-on-content"])}}},Dt={class:"mt-lg"},Tt={__name:"AddMedia",props:{maxSelection:{type:Number,default:1},combinesMimeTypes:{type:String,default:""}},emits:["insert"],setup(e,{emit:i}){const p=B("workspaceCtx"),d=i,o=x(!1),{activeTab:l,tabs:t,isDownloading:_,downloadExternal:r,getMediaCrediting:h}=Ge("mixpost.media.fetchStock",{workspace:p.id}),a={uploads:We,stock:Re,gifs:Je},c=x(),k=Q(()=>a[l.value]),m=Q(()=>c.value?c.value.selected:[]),v=()=>{c.value.deselectAll()},M=()=>{v(),o.value=!1,l.value="uploads"},w=()=>{const V=l.value!=="uploads";V&&r(m.value.map(D=>{const{id:G,url:I,source:Y,author:ge,download_data:$e}=D;return{id:G,url:I,source:Y,author:ge,download_data:$e}}),D=>{d("insert",{items:D.data,crediting:h(D.data)}),M()}),V||(d("insert",{items:m.value,crediting:h(m.value)}),M())};return(V,D)=>{const G=H("tooltip");return n(),C(q,null,[$("div",{onClick:D[0]||(D[0]=I=>o.value=!o.value)},[J(V.$slots,"default")]),u(z,{show:o.value,"max-width":"2xl",closeable:!0,"scrollable-body":!0,onClose:M},{header:s(()=>[b(f(V.$t("media.add_media")),1)]),body:s(()=>[S(_)?(n(),g(j,{key:0,opacity:75},{default:s(()=>[b(f(V.$t("media.downloading")),1)]),_:1})):E("",!0),u(Ke,null,{default:s(()=>[(n(!0),C(q,null,X(S(t),I=>(n(),g(Xe,{onClick:Y=>l.value=I,active:S(l)===I},{default:s(()=>[b(f(V.$t(`media.${I}`)),1)]),_:2},1032,["onClick","active"]))),256))]),_:1}),$("div",Dt,[(n(),g(Te(k.value),{ref_key:"sourceProperties",ref:c},null,512))])]),footer:s(()=>[u(T,{onClick:M,class:"mr-xs rtl:mr-0 rtl:ml-xs"},{default:s(()=>[b(f(V.$t("general.cancel")),1)]),_:1}),m.value.length?(n(),C(q,{key:0},[O((n(),g(T,{onClick:v,class:"mr-xs rtl:mr-0 rtl:ml-xs"},{icon:s(()=>[u(Le)]),_:1})),[[G,V.$t("general.dismiss"),void 0,{top:!0}]]),u(L,{onClick:w},{default:s(()=>[b(f(V.$t("general.insert"))+" "+f(m.value.length)+" "+f(V.$t("general.items")),1)]),_:1})],64)):E("",!0)]),_:1},8,["show"])],64)}}},Lt={type:"button",class:"text-stone-800 hover:text-primary-500 transition-colors ease-in-out duration-200"},Ds={__name:"PostAddMedia",emits:["insert"],setup(e){return(i,p)=>{const d=H("tooltip");return n(),g(Tt,{onInsert:p[0]||(p[0]=o=>i.$emit("insert",o))},{default:s(()=>[O((n(),C("button",Lt,[u(Ie)])),[[d,i.$t("post.media")]])]),_:1})}}},It=["onClick"],qt={class:"mb-xs text-sm"},jt={key:0,class:"w-auto h-full",controls:""},Ht=["src","type"],Ot=["src"],Ts={__name:"PostMedia",props:{media:{type:Array,required:!0}},emits:["updated"],setup(e,{emit:i}){const p=e,d=i,{editAllowed:o}=Ze(),l=x(!1),t=x({}),_=c=>ee.startsWith(c,"video"),r=c=>{t.value=c,l.value=!0},h=()=>{l.value=!1,t.value={}},a=c=>{const k=p.media.findIndex(v=>v.id===c),m=ee.clone(p.media);m.splice(k,1),d("updated",m),h()};return(c,k)=>(n(),C(q,null,[$("div",{class:le({"mt-xs":e.media.length})},[u(S(ze),qe({list:e.media,disabled:!S(o)},{animation:200,group:"media"},{"item-key":"id",class:"flex flex-wrap gap-xs"}),{item:s(({element:m})=>[$("div",{role:"button",class:"cursor-pointer",onClick:v=>r(m)},[u(Ye,{media:m,"img-height":"sm",imgWidthFull:!1,showCaption:!1},null,8,["media"])],8,It)]),_:1},16,["list","disabled"])],2),u(z,{show:l.value,onClose:h},{header:s(()=>[b(f(c.$t("post.view_media")),1)]),body:s(()=>[$("figure",null,[$("figcaption",qt,f(t.value.name),1),_(t.value.mime_type)?(n(),C("video",jt,[$("source",{src:t.value.url,type:t.value.mime_type},null,8,Ht),b(" "+f(c.$t("error.browser_video_unsupported")),1)])):(n(),C("img",{key:1,src:t.value.url,alt:"Image"},null,8,Ot))])]),footer:s(()=>[u(T,{onClick:h,class:"mr-xs"},{default:s(()=>[b(f(c.$t("general.close")),1)]),_:1}),S(o)?(n(),g(je,{key:0,onClick:k[0]||(k[0]=m=>a(t.value.id))},{default:s(()=>[b(f(c.$t("general.remove")),1)]),_:1})):E("",!0)]),_:1},8,["show"])],64))}},Bt={},Nt={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function Ut(e,i){return n(),C("svg",Nt,i[0]||(i[0]=[$("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"},null,-1)]))}const te=F(Bt,[["render",Ut]]),Ft={},zt={type:"button",class:"text-stone-800 hover:text-primary-500 transition-colors ease-in-out duration-200"};function Gt(e,i){return n(),C("button",zt,[J(e.$slots,"default")])}const _e=F(Ft,[["render",Gt]]),Wt={class:"relative mt-sm"},Rt={class:"flex items-center justify-between"},Jt={class:"w-full"},Kt={class:"text-gray-500"},Xt={class:"flex justify-end"},Yt={__name:"HashtagGroups",props:{groups:{type:Array,default:[]}},emits:["update","edit","insert"],setup(e,{emit:i}){const p=B("workspaceCtx"),d=e,o=i,l=x(!1),t=()=>{P.start(),d.groups.length||(l.value=!0),axios.get(route("mixpost.hashtaggroups.index",{workspace:p.id})).then(r=>{o("update",r.data.data)}).finally(()=>{P.done(),l.value=!1})},_=r=>{axios.delete(route("mixpost.hashtaggroups.delete",{workspace:p.id,hashtaggroup:r.id})),o("update",d.groups.filter(h=>h.id!==r.id))};return R(()=>{t()}),(r,h)=>(n(),C("div",Wt,[!e.groups.length&&l.value?(n(),g(j,{key:0})):E("",!0),!e.groups.length&&!l.value?(n(),g(he,{key:1},{default:s(()=>[b(f(r.$t("hashtag.dont_have_groups")),1)]),_:1})):(n(),g(fe,{key:2},{default:s(()=>[(n(!0),C(q,null,X(e.groups,a=>(n(),g(me,{key:a.id,class:"group"},{default:s(()=>[$("div",Rt,[$("div",Jt,[$("div",null,f(a.name),1),$("div",Kt,f(a.content),1)]),$("div",Xt,[u(L,{onClick:c=>r.$emit("insert",a.content),size:"sm",class:"group-visible mr-xs"},{default:s(()=>[b(f(r.$t("general.insert")),1)]),_:2},1032,["onClick"]),u(K,{placement:"bottom-end"},{trigger:s(()=>[u(ie,{class:"mt-1"},{default:s(()=>[u(de)]),_:1})]),content:s(()=>[u(N,{onClick:c=>r.$emit("edit",a),as:"button"},{default:s(()=>[u(re,{class:"!w-5 !h-5 mr-1"}),b(" "+f(r.$t("general.edit")),1)]),_:2},1032,["onClick"]),u(N,{onClick:c=>_(a),as:"button"},{default:s(()=>[u(pe,{class:"!w-5 !h-5 mr-1 text-red-500"}),b(" "+f(r.$t("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)])])]),_:2},1024))),128))]),_:1}))]))}},Zt={for:"group_name"},es={for:"group_content"},ts={__name:"HashtagGroupForm",props:{group:{type:[Object,null],required:!1}},emits:["store","update"],setup(e,{emit:i}){const p=B("workspaceCtx"),d=e,o=i,l=x(!1),t=x({name:d.group?d.group.name:"",content:d.group?d.group.content:""}),_=()=>{P.start(),l.value=!0,axios.post(route("mixpost.hashtaggroups.store",{workspace:p.id}),t.value).then(a=>{o("store",a.data)}).finally(()=>{P.done(),l.value=!1})},r=()=>{P.start(),l.value=!0,axios.put(route("mixpost.hashtaggroups.update",{workspace:p.id,hashtaggroup:d.group.id}),t.value).then(()=>{o("update",t.value),P.done(),l.value=!1})},h=()=>{if(d.group){r();return}_()};return(a,c)=>(n(),C("form",{onSubmit:ce(h,["prevent"])},[u(U,null,{title:s(()=>[$("label",Zt,f(a.$t("hashtag.hashtag_name")),1)]),default:s(()=>[u(ue,{type:"text",modelValue:t.value.name,"onUpdate:modelValue":c[0]||(c[0]=k=>t.value.name=k),id:"group_name",required:""},null,8,["modelValue"])]),_:1}),u(U,{class:"mt-sm"},{title:s(()=>[$("label",es,f(a.$t("hashtag.hashtag_content")),1)]),default:s(()=>[u(ve,{modelValue:t.value.content,"onUpdate:modelValue":c[1]||(c[1]=k=>t.value.content=k),id:"group_content",rows:"3",class:"resize-none",required:""},null,8,["modelValue"])]),_:1}),u(L,{type:"submit",isLoading:l.value,class:"mt-sm"},{default:s(()=>[b(f(a.$t("hashtag.save_hashtag_group")),1)]),_:1},8,["isLoading"])],32))}},ss={class:"flex items-center"},Ls={__name:"HashtagManager",props:{editAllowed:{type:Boolean,default:!0}},emits:["insert"],setup(e,{emit:i}){const p=x(!1),d=x(!1),o=x(null),l=x(null),t=x([]),_=()=>{p.value=!0,h()},r=()=>{p.value=!1,o.value=null},h=()=>{o.value="groups"},a=(m=null)=>{l.value=m,o.value="form"},c=m=>{t.value.unshift(m)},k=m=>{const v=t.value.findIndex(M=>M.id===m.id);v!==-1&&(t.value[v]=m)};return(m,v)=>{const M=H("tooltip");return n(),C("div",null,[O((n(),g(_e,{onClick:_},{default:s(()=>[u(te)]),_:1})),[[M,m.$t("hashtag.open_hashtag")]]),u(z,{show:p.value,"max-width":"lg",closeable:!0,"scrollable-body":!0,onClose:r},{header:s(()=>[$("div",ss,[u(te,{class:"mr-xs"}),b(" "+f(m.$t("hashtag.hashtag_manager")),1)])]),body:s(()=>[d.value?(n(),g(j,{key:0,opacity:50})):E("",!0),o.value==="groups"?(n(),g(Yt,{key:1,groups:t.value,onUpdate:v[0]||(v[0]=w=>t.value=w),onEdit:v[1]||(v[1]=w=>a(w)),onInsert:v[2]||(v[2]=w=>{m.$emit("insert",w),r()})},null,8,["groups"])):E("",!0),o.value==="form"?(n(),g(ts,{key:2,group:l.value,onStore:v[3]||(v[3]=w=>{c(w),h()}),onUpdate:v[4]||(v[4]=w=>{k(w),h()})},null,8,["group"])):E("",!0)]),footer:s(()=>[o.value==="groups"?(n(),g(L,{key:0,onClick:v[5]||(v[5]=()=>{a()}),class:"mr-xs"},{default:s(()=>[b(f(m.$t("hashtag.new_hashtag_group")),1)]),_:1})):E("",!0),o.value==="form"?(n(),g(T,{key:1,onClick:h,class:"mr-xs"},{default:s(()=>[b(f(m.$t("general.go_back")),1)]),_:1})):E("",!0),u(T,{onClick:r},{default:s(()=>[b(f(m.$t("general.done")),1)]),_:1})]),_:1},8,["show"])])}}},os={class:"relative mt-sm"},as={class:"flex items-center justify-between"},ns={class:"w-full"},ls={class:"flex"},is={class:"text-primary-500 font-medium mr-xs"},rs={class:"text-gray-500"},us={class:"flex justify-end"},cs={__name:"VariableList",props:{variables:{type:Array,default:[]}},emits:["update","edit","insert"],setup(e,{emit:i}){const{t:p}=ne(),d=B("workspaceCtx"),o=e,l=i,t=x(!1),_=()=>{P.start(),o.variables.length||(t.value=!0),axios.get(route("mixpost.variables.index",{workspace:d.id})).then(h=>{l("update",[{id:"platform",name:"platform",value:p("variable.platform_post"),default:!0},{id:"account",name:"account",value:p("variable.name_account"),default:!0},...h.data.data])}).finally(()=>{P.done(),t.value=!1})},r=h=>{axios.delete(route("mixpost.variables.delete",{workspace:d.id,variable:h.id})),l("update",o.variables.filter(a=>a.id!==h.id))};return R(()=>{_()}),(h,a)=>(n(),C("div",os,[!e.variables.length&&t.value?(n(),g(j,{key:0})):E("",!0),!e.variables.length&&!t.value?(n(),g(he,{key:1},{default:s(()=>[b(f(S(p)("variable.dont_have_variables")),1)]),_:1})):(n(),g(fe,{key:2},{default:s(()=>[(n(!0),C(q,null,X(e.variables,c=>(n(),g(me,{key:c.id,class:"group"},{default:s(()=>[$("div",as,[$("div",ns,[$("div",ls,[$("div",is," {{"+f(c.name)+"}} ",1),c.default?(n(),g(He,{key:0},{default:s(()=>[b(f(S(p)("general.default")),1)]),_:1})):E("",!0)]),$("div",rs,f(c.value),1)]),$("div",us,[u(L,{onClick:k=>h.$emit("insert",`{{${c.name}}}`),size:"sm",class:"group-visible mr-xs"},{default:s(()=>[b(f(S(p)("general.use")),1)]),_:2},1032,["onClick"]),c.default?E("",!0):(n(),g(K,{key:0,placement:"bottom-end"},{trigger:s(()=>[u(ie,{class:"mt-1"},{default:s(()=>[u(de)]),_:1})]),content:s(()=>[u(N,{onClick:k=>h.$emit("edit",c),as:"button"},{default:s(()=>[u(re,{class:"!w-5 !h-5 mr-1"}),b(" "+f(S(p)("general.edit")),1)]),_:2},1032,["onClick"]),u(N,{onClick:k=>r(c),as:"button"},{default:s(()=>[u(pe,{class:"!w-5 !h-5 mr-1 text-red-500"}),b(" "+f(S(p)("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024))])])]),_:2},1024))),128))]),_:1}))]))}},ds={for:"variable_name"},ps={for:"variable_value"},ms={__name:"VariableForm",props:{variable:{type:[Object,null],required:!1}},emits:["store","update"],setup(e,{emit:i}){const p=B("workspaceCtx"),d=e,o=i,l=x(!1),t=x({name:d.variable?d.variable.name:"",value:d.variable?d.variable.value:""}),_=()=>{P.start(),l.value=!0,axios.post(route("mixpost.variables.store",{workspace:p.id}),t.value).then(a=>{o("store",a.data)}).finally(()=>{P.done(),l.value=!1})},r=()=>{P.start(),l.value=!0,axios.put(route("mixpost.variables.update",{workspace:p.id,variable:d.variable.id}),t.value).then(()=>{o("update",t.value),P.done(),l.value=!1})},h=()=>{if(d.variable){r();return}_()};return(a,c)=>(n(),C("form",{onSubmit:ce(h,["prevent"])},[u(U,null,{title:s(()=>[$("label",ds,f(a.$t("general.name")),1)]),default:s(()=>[u(ue,{type:"text",modelValue:t.value.name,"onUpdate:modelValue":c[0]||(c[0]=k=>t.value.name=k),id:"variable_name",required:""},null,8,["modelValue"])]),_:1}),u(U,{class:"mt-sm"},{title:s(()=>[$("label",ps,f(a.$t("variable.value")),1)]),default:s(()=>[u(ve,{modelValue:t.value.value,"onUpdate:modelValue":c[1]||(c[1]=k=>t.value.value=k),id:"variable_value"},null,8,["modelValue"])]),_:1}),u(L,{type:"submit",isLoading:l.value,class:"mt-sm"},{default:s(()=>[b(f(a.$t("variable.save_variable")),1)]),_:1},8,["isLoading"])],32))}},fs={},hs={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"};function vs(e,i){return n(),C("svg",hs,i[0]||(i[0]=[$("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09"},null,-1)]))}const se=F(fs,[["render",vs]]),_s={class:"flex items-center"},Is={__name:"VariableManager",props:{editAllowed:{type:Boolean,default:!0}},emits:["insert"],setup(e,{emit:i}){const p=x(!1),d=x(!1),o=x(null),l=x(null),t=x([]),_=()=>{p.value=!0,h()},r=()=>{p.value=!1,o.value=null},h=()=>{o.value="list"},a=(m=null)=>{l.value=m,o.value="form"},c=m=>{t.value.unshift(m)},k=m=>{const v=t.value.findIndex(M=>M.id===m.id);v!==-1&&(t.value[v]=m)};return(m,v)=>{const M=H("tooltip");return n(),C("div",null,[O((n(),g(_e,{onClick:_},{default:s(()=>[u(se)]),_:1})),[[M,m.$t("variable.open_variable_manager")]]),u(z,{show:p.value,"max-width":"2xl",closeable:!0,"scrollable-body":!0,onClose:r},{header:s(()=>[$("div",_s,[u(se,{class:"mr-xs"}),b(" "+f(m.$t("variable.variable_manager")),1)])]),body:s(()=>[d.value?(n(),g(j,{key:0,opacity:50})):E("",!0),o.value==="list"?(n(),g(cs,{key:1,variables:t.value,onUpdate:v[0]||(v[0]=w=>t.value=w),onEdit:v[1]||(v[1]=w=>a(w)),onInsert:v[2]||(v[2]=w=>{m.$emit("insert",w),r()})},null,8,["variables"])):E("",!0),o.value==="form"?(n(),g(ms,{key:2,variable:l.value,onStore:v[3]||(v[3]=w=>{c(w),h()}),onUpdate:v[4]||(v[4]=w=>{k(w),h()})},null,8,["variable"])):E("",!0)]),footer:s(()=>[o.value==="list"?(n(),g(L,{key:0,onClick:v[5]||(v[5]=()=>{a()}),class:"mr-xs"},{default:s(()=>[b(f(m.$t("variable.new_variable")),1)]),_:1})):E("",!0),o.value==="form"?(n(),g(T,{key:1,onClick:h,class:"mr-xs"},{default:s(()=>[b(f(m.$t("general.go_back")),1)]),_:1})):E("",!0),u(T,{onClick:r},{default:s(()=>[b(f(m.$t("general.done")),1)]),_:1})]),_:1},8,["show"])])}}};export{_e as E,et as P,xt as S,wt as T,Qs as _,Ts as a,As as b,Ds as c,Ls as d,Is as e,Ct as f,Ze as u};
