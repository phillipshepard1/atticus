import{u as g,C as k,o as $,g as y,w as e,e as a,a as t,f as r,_ as u,y as p,t as c,b as f,k as x,a1 as I,n as O}from"./app-BxavtTYs.js";import{_ as A}from"./Panel-Lw-nuda0.js";import{_ as V}from"./ReadDocHelp-BJJzurtq.js";import{_ as b}from"./InputHidden-tNUxRG45.js";import{O as w}from"./Services-Bq7SMUQe.js";import{_ as N}from"./Checkbox-CKdbYkOi.js";import{_ as S}from"./Flex-0eM5h-qJ.js";import{_ as B}from"./Label-BwcuoeD5.js";import{_ as C}from"./LabelSuffix-CL1UEugD.js";import"./Admin-CpLrPT1Z.js";import"./QueueList-CJbQdoC3.js";import"./Eye-hTbiOyAR.js";import"./PageHeader-BnI1hV_t.js";import"./Tab-Cd_KlTQp.js";import"./ProviderIcon-DoC9ZFBR.js";const h={class:"flex items-center"},P={class:"mr-xs"},U={for:"secret_key"},R={__name:"OpenAIServiceForm",props:{form:{required:!0,type:Object}},setup(o){const{t:n}=g(),d=o,{notify:_}=O(),i=k({}),v=()=>{i.value={},I.put(route("mixpost.services.update",{service:"openai"}),d.form,{preserveScroll:!0,onSuccess(){_("success",n("service.service_saved",{service:"Open AI"}))},onError:l=>{i.value=l}})};return(l,s)=>($(),y(A,{class:"mt-lg"},{title:e(()=>[a("div",h,[a("span",P,[t(w,{class:"text-openai"})]),s[2]||(s[2]=a("span",null,"OpenAI",-1))])]),description:e(()=>[s[3]||(s[3]=a("p",null,[a("a",{href:"https://platform.openai.com/account/api-keys",class:"link",target:"_blank"},"You can generate an API key here"),r(". ")],-1)),t(V,{href:`${l.$page.props.mixpost.docs_link}/services/ai/open-ai`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[t(u,{class:"mt-lg"},{title:e(()=>[a("label",U,[s[5]||(s[5]=r("API Key ")),t(C,{danger:""},{default:e(()=>s[4]||(s[4]=[r("*")])),_:1})])]),footer:e(()=>[t(p,{message:i.value["configuration.secret_key"]},null,8,["message"])]),default:e(()=>[t(b,{modelValue:o.form.configuration.secret_key,"onUpdate:modelValue":s[0]||(s[0]=m=>o.form.configuration.secret_key=m),error:i.value["configuration.secret_key"]!==void 0,id:"secret",placeholder:"sk-...",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),t(u,{class:"mt-lg"},{title:e(()=>[r(c(f(n)("general.status")),1)]),footer:e(()=>[t(p,{message:i.value.active},null,8,["message"])]),default:e(()=>[t(S,{responsive:!1,class:"items-center"},{default:e(()=>[t(N,{checked:o.form.active,"onUpdate:checked":s[1]||(s[1]=m=>o.form.active=m),id:"active"},null,8,["checked"]),t(B,{for:"active",class:"!mb-0"},{default:e(()=>[r(c(f(n)("general.active")),1)]),_:1})]),_:1})]),_:1}),t(x,{onClick:v,class:"mt-lg"},{default:e(()=>[r(c(f(n)("general.save")),1)]),_:1})]),_:1}))}};export{R as default};
