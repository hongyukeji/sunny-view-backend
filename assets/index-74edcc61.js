import{B as c}from"./componentMap-8c5d2fac.js";import{b as l,_ as d}from"./index.js";import{B as f}from"./BasicForm-7e3a59df.js";import{u as g}from"./useForm-eae86464.js";import"./RadioButtonGroup-63152489.js";import{P as _}from"./index-46052efd.js";import{u as i}from"./upload-f986852d.js";import{d as B,a7 as e,Z as C,a8 as h,a9 as A,l as r}from"./vue-ea98dac5.js";import{x as p}from"./antd-168c158e.js";import"./useFormItem-1ece48e0.js";import"./get-921f7259.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./isBoolean-e59585aa.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-96857a86.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./FormItem.vue_vue_type_script_lang-60e73ebf.js";import"./isNumber-6e063d5c.js";import"./uniqBy-989d5baf.js";import"./useContentViewHeight-6fc1b870.js";import"./onMountedOrActivated-3eb95ecd.js";const F=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:i}}],P=B({components:{BasicUpload:c,BasicForm:f,PageWrapper:_,[p.name]:p},setup(){const{createMessage:o}=l(),[a]=g({labelWidth:120,schemas:F,actionColOptions:{span:16}});return{handleChange:t=>{o.info(`已上传文件${JSON.stringify(t)}`)},uploadApi:i,register:a}}});function x(o,a,t,$,b,U){const s=e("a-alert"),m=e("BasicUpload"),n=e("BasicForm"),u=e("PageWrapper");return C(),h(u,{title:"上传组件示例"},{default:A(()=>[r(s,{message:"基础示例"}),r(m,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),r(s,{message:"嵌入表单,加入表单校验"}),r(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}const oo=d(P,[["render",x]]);export{oo as default};
