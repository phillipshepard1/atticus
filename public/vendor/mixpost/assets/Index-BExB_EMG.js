import{i as h,c as g,a as e,b as s,e as i,w as t,g as c,F as k,o as m,Z as w,f as l,t as o,k as _,P as C,h as v,V as y,I as T,U as f,a0 as b}from"./app-BxavtTYs.js";import{u as V}from"./useTemplate-xQXKVZJw.js";import{_ as x}from"./PageHeader-BnI1hV_t.js";import{_ as B}from"./Panel-Lw-nuda0.js";import{T as P}from"./Trash-B9tkDRbU.js";import{_ as E}from"./NoResult-DNS5zprA.js";import{E as F}from"./EllipsisVertical-DCDthPML.js";import{_ as I}from"./Masonry-BYenGJi_.js";import{_ as L}from"./TemplateItem-DWyD4VY6.js";import{_ as N,L as j}from"./ListItem-Ch3jcTq1.js";import"./usePostVersions-THbIEc6s.js";import"./Flex-0eM5h-qJ.js";import"./MediaFile-BY_fCad3.js";import"./ExclamationCircle-DvHPQVk8.js";import"./EditorReadOnly-DU0wMCv8.js";import"./index-CSZup35c.js";import"./Variable-IDS6Z41M.js";const q={class:"row-py"},z={class:"w-full row-px"},A={class:"relative mt-lg"},S={class:"flex justify-end"},oe={__name:"Index",props:{templates:{type:Array,required:!0}},setup(n){const p=h("workspaceCtx"),{createPost:d,formatTemplateContent:u,deleteTemplate:$}=V();return(a,D)=>(m(),g(k,null,[e(s(w),{title:a.$t("template.templates")},null,8,["title"]),i("div",q,[e(x,{title:a.$t("template.templates")},{description:t(()=>[l(o(a.$t("template.templates_desc")),1)]),_:1},8,["title"]),i("div",z,[e(s(v),{href:a.route("mixpost.templates.create",{workspace:s(p).id})},{default:t(()=>[e(_,{size:"sm"},{default:t(()=>[e(C,{class:"mr-xs"}),l(" "+o(a.$t("template.create_template")),1)]),_:1})]),_:1},8,["href"]),i("div",A,[n.templates.length?(m(),c(I,{key:1,items:n.templates,columns:3},{default:t(({item:r})=>[e(j,{class:"group"},{default:t(()=>[e(N,{withClassesForLast:!1,class:"!p-lg bg-white rounded-lg"},{default:t(()=>[e(L,{template:r},{action:t(()=>[i("div",S,[e(_,{onClick:()=>{s(d)(s(u)(r.content))},size:"sm",class:"group-visible mr-xs"},{default:t(()=>[l(o(a.$t("general.use")),1)]),_:2},1032,["onClick"]),e(y,{placement:"bottom-end"},{trigger:t(()=>[e(T,{class:"mt-1"},{default:t(()=>[e(F)]),_:1})]),content:t(()=>[e(f,{linkAs:"a",href:a.route("mixpost.templates.edit",{workspace:s(p).id,template:r.id})},{default:t(()=>[e(b,{class:"!w-5 !h-5 mr-1"}),l(" "+o(a.$t("general.edit")),1)]),_:2},1032,["href"]),e(f,{onClick:G=>s($)(r),as:"button"},{default:t(()=>[e(P,{class:"!w-5 !h-5 mr-1 text-red-500"}),l(" "+o(a.$t("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)])]),_:2},1032,["template"])]),_:2},1024)]),_:2},1024)]),_:1},8,["items"])):(m(),c(B,{key:0},{default:t(()=>[e(E,null,{default:t(()=>[l(o(a.$t("template.do_not_have_templates")),1)]),_:1})]),_:1}))])])])],64))}};export{oe as default};
