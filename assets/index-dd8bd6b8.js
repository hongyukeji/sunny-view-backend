import{D as m}from"./index-187616c7.js";import{P as p}from"./index-46052efd.js";import{u as n}from"./useDescription-4873e4b0.js";import{d as c,a7 as i,Z as u,a8 as d,a9 as f,l as s}from"./vue-ea98dac5.js";import{_ as g}from"./index.js";import"./antd-168c158e.js";import"./get-921f7259.js";import"./useContentViewHeight-6fc1b870.js";import"./useWindowSizeFn-9a9a25b4.js";import"./onMountedOrActivated-3eb95ecd.js";import"./isNumber-6e063d5c.js";const o={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},r=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}],h=c({components:{Description:m,PageWrapper:p},setup(){const[e]=n({title:"useDescription",data:o,schema:r}),[a]=n({title:"无边框",bordered:!1,data:o,schema:r});return{mockData:o,schema:r,register:e,register1:a}}});function x(e,a,D,_,k,B){const t=i("Description"),l=i("PageWrapper");return u(),d(l,{title:"详情组件示例"},{default:f(()=>[s(t,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(t,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(t,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),s(t,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])]),_:1})}const v=g(h,[["render",x]]);export{v as default};
