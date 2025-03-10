import{G as Z,C as j,q,o as n,g as h,w as e,a as t,z as J,e as k,c as p,t as i,j as v,a3 as K,f as r,F as I,r as D,H as Q,v as z,V as X,I as Y,U as ee,O as te,s as A,u as se,aN as ae,aM as le,i as oe,L as ie,a5 as B,R as ne,S,l as R,a1 as T,b as o,ax as re,Z as ue,a8 as U,x as de,n as ce}from"./app-BxavtTYs.js";import{u as me}from"./useSelectable-BJ_lcm9V.js";import{_ as fe}from"./PageHeader-BnI1hV_t.js";import{_ as M,a as pe}from"./PostsFilter-C8Uo3zC0.js";import{T as ve,_ as C}from"./Tab-Cd_KlTQp.js";import{_ as _e}from"./Panel-Lw-nuda0.js";import{_ as N}from"./Checkbox-CKdbYkOi.js";import{_ as m,a as E,T as he}from"./TableCell-C46VQBCN.js";import{_ as ge}from"./PureDangerButton-zhKtSmpI.js";import{u as ke}from"./usePostVersions-THbIEc6s.js";import{_ as $e}from"./MediaFile-BY_fCad3.js";import{u as xe,_ as F,c as be,b as we,a as ye}from"./VerticallyScrollableContent-LjoYsn3-.js";import{_ as L}from"./Account-hARf4EP9.js";import{_ as Ce}from"./SelectableBar-CA2MAe5u.js";import{_ as Ve}from"./Pagination-CB2UcsG3.js";import{_ as Ie}from"./NoResult-DNS5zprA.js";import{T as Oe}from"./Trash-B9tkDRbU.js";import"./Flex-0eM5h-qJ.js";import"./PureButtonLink-hEv16skr.js";import"./EllipsisVertical-DCDthPML.js";import"./Eye-hTbiOyAR.js";import"./ProviderIcon-DoC9ZFBR.js";import"./SearchInput-CkdofEcO.js";import"./ExclamationCircle-DvHPQVk8.js";import"./Variable-IDS6Z41M.js";import"./index-CSZup35c.js";import"./EditorReadOnly-DU0wMCv8.js";import"./Alert-BlT5orGN.js";import"./Refresh-Dpahu98l.js";import"./ArrowTopRightOnSquare-IL6rJNOT.js";import"./ColorPicker-DBmIy9bp.js";import"./ChevronLeft-C0HP3zNo.js";const De={class:"w-44"},Pe={key:0,class:"text-sm mt-xs text-gray-500"},Re={key:1,class:"text-sm mt-xs text-gray-500"},je={class:"w-96 text-left break-words"},Be={key:0,class:"w-48 flex relative"},Se={key:0,class:"absolute top-0 -right-5 z-10"},Te={class:"flex flex-wrap gap-xs"},Ue={class:"flex gap-xs"},Me={class:"mr-xs"},Ne={class:"text-left"},Fe={class:"mr-xs flex items-center"},Le={__name:"PostItem",props:{item:{type:Object,required:!0},filter:{type:Object,default:{accounts:[]}}},setup(a){const s=a,{getOriginalVersion:$,getAccountVersion:c}=ke(),{setupURLMetaForAllVersions:P}=xe(),f=Z(()=>{if(!s.item.versions.length)return{excerpt:"",media:null,media_count:0};let x=s.item.accounts;s.filter.accounts.length&&(x=x.filter(u=>s.filter.accounts.includes(u.id)));const V=x.map(u=>{const g=c(s.item.versions,u.id);return g?g.content[0]:$(s.item.versions).content[0]}),b=V.length?V[0]:s.item.versions[0].content[0];return{excerpt:b.excerpt,media:b.media.length?b.media[0]:null,media_count:b.media.length}}),w=j(!1),y=()=>{w.value=!0,P(s.item.versions)},O=()=>{w.value=!1};return(x,V)=>{const b=q("tooltip");return n(),h(E,{hoverable:!0},{default:e(()=>[t(m,{class:"w-10"},{default:e(()=>[J(x.$slots,"checkbox")]),_:3}),t(m,{clickable:!0,onClick:y},{default:e(()=>[k("div",De,[t(F,{value:a.item.status},null,8,["value"]),a.item.status==="scheduled"||a.item.status==="needs_approval"?(n(),p("div",Pe,i(a.item.scheduled_at.human),1)):v("",!0),a.item.status==="published"?(n(),p("div",Re,i(a.item.published_at.human),1)):v("",!0)])]),_:1}),t(m,{clickable:!0,onClick:y,class:"!pl-0"},{default:e(()=>[k("div",je,i(f.value.excerpt),1)]),_:1}),t(m,{clickable:!0,onClick:y},{default:e(()=>[f.value.media?(n(),p("div",Be,[f.value.media?(n(),h($e,{key:0,media:f.value.media,"img-height":"sm",imgWidthFull:!1,showCaption:!1},{default:e(()=>[f.value.media_count>1?(n(),p("div",Se,[t(K,null,{default:e(()=>[r("+"+i(f.value.media_count-1),1)]),_:1})])):v("",!0)]),_:1},8,["media"])):v("",!0)])):v("",!0)]),_:1}),t(m,{clickable:!0,onClick:y},{default:e(()=>[k("div",Te,[(n(!0),p(I,null,D(a.item.tags,u=>(n(),h(be,{key:u.id,item:u,removable:!1,editable:!1},null,8,["item"]))),128))])]),_:1}),t(m,null,{default:e(()=>[k("div",Ue,[(n(!0),p(I,null,D(a.item.accounts.slice(0,3),(u,g)=>(n(),p("div",{key:u.id,class:Q({"-ml-6":g>0})},[z(t(L,{provider:u.provider,name:u.name,"img-url":u.image,active:!0},null,8,["provider","name","img-url"]),[[b,u.name]])],2))),128)),a.item.accounts.length>3?(n(),h(X,{key:0,"width-classes":"w-64",placement:"bottom-end"},{trigger:e(()=>[t(Y,{class:"mt-4 font-semibold"},{default:e(()=>[r("+"+i(a.item.accounts.slice(3).length),1)]),_:1})]),content:e(()=>[t(we,null,{default:e(()=>[(n(!0),p(I,null,D(a.item.accounts.slice(3),u=>(n(),h(ee,{as:"div"},{default:e(()=>[k("span",Me,[t(L,{provider:u.provider,name:u.name,"img-url":u.image,active:!0},null,8,["provider","name","img-url"])]),k("span",Ne,i(u.name),1)]),_:2},1024))),256))]),_:1})]),_:1})):v("",!0)])]),_:1}),t(m,{align:"right"},{default:e(()=>[t(M,{itemId:a.item.id,trashed:a.item.trashed,class:"flex justify-end"},null,8,["itemId","trashed"])]),_:1}),t(te,{show:w.value,scrollableBody:!0,onClose:O},{body:e(()=>[t(F,{value:a.item.status,class:"mb-lg"},null,8,["value"]),w.value?(n(),h(ye,{key:0,accounts:a.item.accounts,versions:a.item.versions},null,8,["accounts","versions"])):v("",!0)]),footer:e(()=>[w.value?(n(),p(I,{key:0},[k("div",Fe,[t(M,{itemId:a.item.id,trashed:a.item.trashed},null,8,["itemId","trashed"])]),t(A,{onClick:O},{default:e(()=>[r(i(x.$t("general.close")),1)]),_:1})],64)):v("",!0)]),_:1},8,["show"])]),_:3})}}},qe={class:"row-py"},ze={class:"w-full row-px"},Ae={class:"w-full row-px mt-lg"},Ee={key:0,class:"mt-lg"},wt={__name:"Index",props:{filter:{type:Object,default:{}},posts:{type:Object},has_failed_posts:{type:Boolean,default:!1},has_needs_approval_posts:{type:Boolean,default:!1}},setup(a){const{t:s}=se(),$=a,c=j({keyword:$.filter.keyword,status:$.filter.status,tags:$.filter.tags,accounts:$.filter.accounts}),P=ae({urlMeta:{}});le("postCtx",P);const{selectedRecords:f,putPageRecords:w,toggleSelectRecordsOnPage:y,deselectRecord:O,deselectAllRecords:x}=me(),V=oe("workspaceCtx"),b=()=>$.posts.data.map(_=>_.id);ie(()=>{w(b()),B.on("postDelete",_=>{O(_)})}),ne(()=>{B.off("postDelete")}),S(()=>R.cloneDeep(c.value),R.throttle(()=>{T.get(route("mixpost.posts.index",{workspace:V.id}),R.pickBy(c.value),{preserveState:!0,only:["posts","filter"]})},300)),S(()=>$.posts.data,()=>{w(b())});const{notify:u}=ce(),g=j(!1),G=()=>{T.delete(route("mixpost.posts.deleteMultiple",{workspace:V.id}),{data:{posts:f.value,status:c.value.status},onSuccess(){x(),u("success",$.filter.status==="trash"?s("post.posts_deleted"):s("post.posts_to_trash"))},onFinish(){g.value=!1}})};return(_,l)=>{const H=q("tooltip");return n(),p(I,null,[t(o(ue),{title:o(s)("post.posts")},null,8,["title"]),k("div",qe,[t(fe,{title:o(s)("post.posts")},{default:e(()=>[t(pe,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=d=>c.value=d),class:"md:ml-xs rtl:md:ml-0 rtl:md:mr-xs"},null,8,["modelValue"])]),_:1},8,["title"]),k("div",ze,[t(ve,null,{default:e(()=>[t(C,{onClick:l[1]||(l[1]=d=>c.value.status=null),active:!_.$page.props.filter.status},{default:e(()=>[r(i(o(s)("general.all")),1)]),_:1},8,["active"]),t(C,{onClick:l[2]||(l[2]=d=>c.value.status="draft"),active:_.$page.props.filter.status==="draft"},{default:e(()=>[r(i(o(s)("post.drafts")),1)]),_:1},8,["active"]),a.has_needs_approval_posts?(n(),h(C,{key:0,onClick:l[3]||(l[3]=d=>c.value.status="needs_approval"),active:_.$page.props.filter.status==="needs_approval"},{default:e(()=>[r(i(o(s)("post.needs_approval")),1)]),_:1},8,["active"])):v("",!0),t(C,{onClick:l[4]||(l[4]=d=>c.value.status="scheduled"),active:_.$page.props.filter.status==="scheduled"},{default:e(()=>[r(i(o(s)("post.scheduled")),1)]),_:1},8,["active"]),t(C,{onClick:l[5]||(l[5]=d=>c.value.status="published"),active:_.$page.props.filter.status==="published"},{default:e(()=>[r(i(o(s)("post.published")),1)]),_:1},8,["active"]),a.has_failed_posts?(n(),h(C,{key:1,onClick:l[6]||(l[6]=d=>c.value.status="failed"),active:_.$page.props.filter.status==="failed",class:"text-red-500"},{default:e(()=>[r(i(o(s)("post.failed")),1)]),_:1},8,["active"])):v("",!0),t(C,{onClick:l[7]||(l[7]=d=>c.value.status="trash"),active:_.$page.props.filter.status==="trash"},{default:e(()=>[r(i(o(s)("general.trash")),1)]),_:1},8,["active"])]),_:1})]),k("div",Ae,[t(Ce,{count:o(f).length,onClose:o(x)},{default:e(()=>[z((n(),h(ge,{onClick:l[8]||(l[8]=d=>g.value=!0)},{default:e(()=>[t(Oe)]),_:1})),[[H,o(s)("general.delete")]])]),_:1},8,["count","onClose"]),t(_e,{"with-padding":!1},{default:e(()=>[t(he,null,{head:e(()=>[t(E,null,{default:e(()=>[t(m,{component:"th",scope:"col",class:"w-10"},{default:e(()=>[t(N,{checked:o(y),"onUpdate:checked":l[9]||(l[9]=d=>U(y)?y.value=d:null),disabled:!a.posts.meta.total},null,8,["checked","disabled"])]),_:1}),t(m,{component:"th",scope:"col",class:"w-44"},{default:e(()=>[r(i(o(s)("post.status")),1)]),_:1}),t(m,{component:"th",scope:"col",class:"!pl-0 text-left"},{default:e(()=>[r(i(o(s)("post.content")),1)]),_:1}),t(m,{component:"th",scope:"col",class:"w-48"},{default:e(()=>[r(i(o(s)("post.media")),1)]),_:1}),t(m,{component:"th",scope:"col"},{default:e(()=>[r(i(o(s)("post.labels")),1)]),_:1}),t(m,{component:"th",scope:"col"},{default:e(()=>[r(i(o(s)("post.accounts")),1)]),_:1}),t(m,{component:"th",scope:"col"})]),_:1})]),body:e(()=>[(n(!0),p(I,null,D(a.posts.data,d=>(n(),h(Le,{key:d.id,item:d,filter:a.posts.filter,onOnDelete:()=>{o(O)(d.id)}},{checkbox:e(()=>[t(N,{checked:o(f),"onUpdate:checked":l[10]||(l[10]=W=>U(f)?f.value=W:null),value:d.id},null,8,["checked","value"])]),_:2},1032,["item","filter","onOnDelete"]))),128))]),_:1}),a.posts.meta.total?v("",!0):(n(),h(Ie,{key:0,withPadding:!0},{default:e(()=>[r(i(o(s)("post.no_posts_found")),1)]),_:1}))]),_:1}),a.posts.meta.links.length>3?(n(),p("div",Ee,[t(Ve,{meta:a.posts.meta,links:a.posts.links},null,8,["meta","links"])])):v("",!0)])]),t(re,{show:g.value,variant:"danger",onClose:l[12]||(l[12]=d=>g.value=!1)},{header:e(()=>[r(i(o(s)("post.delete_posts")),1)]),body:e(()=>[r(i(o(s)("post.confirmation_delete_post")),1)]),footer:e(()=>[t(A,{onClick:l[11]||(l[11]=d=>g.value=!1),class:"mr-xs rtl:mr-0 rtl:ml-xs"},{default:e(()=>[r(i(o(s)("general.cancel")),1)]),_:1}),t(de,{onClick:G},{default:e(()=>[r(i(o(s)("general.delete")),1)]),_:1})]),_:1},8,["show"])],64)}}};export{wt as default};
