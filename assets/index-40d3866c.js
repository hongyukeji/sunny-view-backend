import{u as m}from"./useContextMenu-0f9a47cc.js";import{C as d,b as C,_}from"./index.js";import{P as f}from"./index-46052efd.js";import{d as b,a7 as l,Z as x,a8 as h,a9 as t,l as a,E as p}from"./vue-ea98dac5.js";import"./antd-168c158e.js";import"./useContentViewHeight-6fc1b870.js";import"./useWindowSizeFn-9a9a25b4.js";import"./onMountedOrActivated-3eb95ecd.js";import"./isNumber-6e063d5c.js";const w=b({components:{CollapseContainer:d,PageWrapper:f},setup(){const[e]=m(),{createMessage:n}=C();function s(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:s,handleMultipleContext:i}}});function N(e,n,s,i,o,g){const r=l("a-button"),c=l("CollapseContainer"),u=l("PageWrapper");return x(),h(u,{title:"右键菜单示例"},{default:t(()=>[a(c,{title:"Simple"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[p(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1}),a(c,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[p(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}const F=_(w,[["render",N]]);export{F as default};
