import{u as x,i as k,a6 as V,C as q,q as g,o as w,c as B,e as I,v as S,b as d,g as y,w as t,a as e,U as p,a0 as O,f as m,t as u,V as T,a1 as W,a5 as j,z as A,a3 as $}from"./app-BxavtTYs.js";import{_ as l,a as L}from"./TableCell-C46VQBCN.js";import{u as N}from"./useRouter-7gUHwari.js";import{_ as P}from"./PureButtonLink-hEv16skr.js";import{T as U}from"./Trash-B9tkDRbU.js";import{_ as Q}from"./DropdownButton-DyMVBGMY.js";import{Q as z}from"./QueueList-CJbQdoC3.js";const F={class:"flex flex-row items-center justify-end gap-xs"},G={__name:"WebhookItemAction",props:{itemId:{type:String,required:!0}},emits:["onDelete"],setup(o,{emit:c}){const{t:r}=x(),a=k("routePrefix"),f=k("confirmation"),i=k("workspaceCtx"),n=o,_=c;V();const{onError:C}=N(),h=s=>{switch(s){case"edit":return i?route(`${a}.webhooks.edit`,{workspace:i.id,webhook:n.itemId}):route(`${a}.system.webhooks.edit`,{webhook:n.itemId});case"deliveries":return i?route(`${a}.webhooks.deliveries.index`,{workspace:i.id,webhook:n.itemId}):route(`${a}.system.webhooks.deliveries.index`,{webhook:n.itemId});case"delete":return i?route(`${a}.webhooks.delete`,{workspace:i.id,webhook:n.itemId}):route(`${a}.system.webhooks.delete`,{webhook:n.itemId});default:return""}},D=q(!1),R=()=>{f().title(r("webhook.delete_webhook")).description(r("webhook.delete_webhook_confirm")).destructive().onConfirm(s=>{b(s)}).show()},b=s=>{s.isLoading(!0),W.delete(h("delete"),{onSuccess(){D.value=!1,_("onDelete"),j.emit("webhookDeleted",n.itemId),s.reset()},onError(v){C(v,()=>{b(s)})},onFinish(){s.isLoading(!1)}})};return(s,v)=>{const E=g("tooltip");return w(),B("div",null,[I("div",F,[S((w(),y(P,{href:h("deliveries")},{default:t(()=>[e(z)]),_:1},8,["href"])),[[E,d(r)("webhook.deliveries")]]),e(T,{placement:"bottom-end"},{trigger:t(()=>[e(Q)]),content:t(()=>[e(p,{href:h("edit")},{icon:t(()=>[e(O)]),default:t(()=>[m(" "+u(d(r)("general.edit")),1)]),_:1},8,["href"]),e(p,{onClick:R,as:"button"},{icon:t(()=>[e(U,{class:"text-red-500"})]),default:t(()=>[m(" "+u(d(r)("general.delete")),1)]),_:1})]),_:1})])])}}},H={class:"text-gray-500"},te={__name:"WebhookItem",props:{item:{type:Object,required:!0}},setup(o){const{t:c}=x(),r=o,a=()=>{switch(r.item.last_delivery_status){case"SUCCESS":return"success";case"ERROR":return"error";default:return"neutral"}},f=()=>{switch(r.item.last_delivery_status){case"SUCCESS":return c("webhook.last_delivery_succeeded");case"ERROR":return c("webhook.last_delivery_failed");default:return c("webhook.never_triggered")}};return(i,n)=>{const _=g("tooltip");return w(),y(L,{hoverable:!0},{default:t(()=>[e(l,{class:"w-10"},{default:t(()=>[A(i.$slots,"checkbox")]),_:3}),e(l,null,{default:t(()=>[S(e($,{variant:a(),class:"w-5 h-5 !rounded-full"},null,8,["variant"]),[[_,f()]])]),_:1}),e(l,null,{default:t(()=>[m(u(o.item.name),1)]),_:1}),e(l,null,{default:t(()=>[I("span",H,u(`${o.item.callback_url.slice(0,60)}`)+u(o.item.callback_url.length>60?"...":""),1)]),_:1}),e(l,null,{default:t(()=>[e($,{variant:o.item.active?"success":"error"},{default:t(()=>[m(u(o.item.active?d(c)("general.active"):d(c)("general.inactive")),1)]),_:1},8,["variant"])]),_:1}),e(l,null,{default:t(()=>[e(G,{itemId:o.item.id},null,8,["itemId"])]),_:1})]),_:3})}}};export{te as _};
