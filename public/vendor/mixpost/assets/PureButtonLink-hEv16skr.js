import{o as n,c as l,H as s,z as a,j as r,g as d,w as m,b as o,h as f}from"./app-BxavtTYs.js";const u=["href"],i="relative inline-flex items-center text-gray-400 hover:text-primary-500 transition-colors ease-in-out duration-200",S={__name:"PureButtonLink",props:{href:{type:String,required:!0},method:{type:String,default:"get"},as:{type:String,default:"a"},native:{type:Boolean,default:!1},type:{type:String,default:null},hiddenTextOnSmallScreen:{type:Boolean,default:!1}},setup(e){return(t,h)=>e.native?(n(),l("a",{key:0,href:e.href,class:s(i)},[t.$slots.icon?(n(),l("span",{key:0,class:s(["inline-flex",{"sm:mr-xs":t.$slots.default,"mr-0 sm:mr-xs":e.hiddenTextOnSmallScreen,"mr-xs":!e.hiddenTextOnSmallScreen}])},[a(t.$slots,"icon")],2)):r("",!0),t.$slots.default?(n(),l("span",{key:1,class:s({"hidden sm:inline":e.hiddenTextOnSmallScreen})},[a(t.$slots,"default")],2)):r("",!0)],8,u)):(n(),d(o(f),{key:1,href:e.href,method:e.method,as:e.as,type:e.type,class:s(i)},{default:m(()=>[t.$slots.icon?(n(),l("span",{key:0,class:s(["inline-flex",{"sm:mr-xs":t.$slots.default,"mr-0 sm:mr-xs":e.hiddenTextOnSmallScreen,"mr-xs":!e.hiddenTextOnSmallScreen&&t.$slots.default}])},[a(t.$slots,"icon")],2)):r("",!0),t.$slots.default?(n(),l("span",{key:1,class:s(["inline-flex items-center",{"hidden sm:inline":e.hiddenTextOnSmallScreen}])},[a(t.$slots,"default")],2)):r("",!0)]),_:3},8,["href","method","as","type"]))}};export{S as _};
