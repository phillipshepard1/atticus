import{E as m}from"./ExclamationCircle-DvHPQVk8.js";import{A as u,o as t,c as a,e as s,G as h,z as g,a as n,j as o,t as l,H as i}from"./app-BxavtTYs.js";const f={},x={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"};function w(e,r){return t(),a("svg",x,r[0]||(r[0]=[s("path",{d:"M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z"},null,-1)]))}const v=u(f,[["render",w]]),y={key:0,class:"absolute top-0 left-0 mt-1 ml-1"},b={key:1,class:"text-center"},C={class:"mt-xs"},k={class:"mt-xs text-red-500"},p=["src","title"],B={key:0,class:"mt-xs text-sm break-all"},_={__name:"MediaFile",props:{media:{type:Object,required:!0},imgHeight:{type:String,default:"full"},imgWidthFull:{type:Boolean,default:!0},showCaption:{type:Boolean,default:!0}},setup(e){const r=e,c=h(()=>({full:"h-full",sm:"h-20"})[r.imgHeight]);return(d,z)=>(t(),a("figure",{class:i([{"border border-gray-200 rounded-md p-xs bg-stone-500":e.showCaption},"group relative"])},[g(d.$slots,"default"),s("div",{class:i(["relative flex rounded",{"border border-red-500 p-md":e.media.hasOwnProperty("error")}])},[e.media.is_video?(t(),a("span",y,[n(v,{class:"!w-4 !h-4 text-white"})])):o("",!0),e.media.hasOwnProperty("error")?(t(),a("div",b,[n(m,{class:"w-8 h-8 mx-auto text-red-500"}),s("div",C,l(e.media.name),1),s("div",k,l(e.media.error?e.media.error:d.$t("media.error_uploading_media")),1)])):o("",!0),s("img",{src:e.media.thumb_url,title:e.media.name,alt:"Image",loading:"lazy",class:i(["rounded-md",[c.value,{"w-full":e.imgWidthFull}]])},null,10,p)],2),e.showCaption?(t(),a("figcaption",B,l(e.media.name),1)):o("",!0)],2))}};export{_};
