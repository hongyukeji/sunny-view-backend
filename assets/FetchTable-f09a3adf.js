import{B as c}from"./BasicTable-7a3824ec.js";import"./componentMap-8c5d2fac.js";import"./TableImg.vue_vue_type_style_index_0_lang-b297d8c7.js";import{u}from"./useTable-a9ef7662.js";import{getBasicColumns as d}from"./tableData-ec9d2d1d.js";import{P as f}from"./index-46052efd.js";import{d as _}from"./table-e1e44be4.js";import{d as g,a7 as r,Z as C,a8 as B,a9 as t,l as a,E as m}from"./vue-ea98dac5.js";import{_ as b}from"./index.js";import"./useFormItem-1ece48e0.js";import"./antd-168c158e.js";import"./get-921f7259.js";import"./RadioButtonGroup-63152489.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./isBoolean-e59585aa.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-96857a86.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./BasicForm-7e3a59df.js";import"./FormItem.vue_vue_type_script_lang-60e73ebf.js";import"./isNumber-6e063d5c.js";import"./uniqBy-989d5baf.js";import"./useForm-eae86464.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./select-9b85ab56.js";import"./useContentViewHeight-6fc1b870.js";const h=g({components:{BasicTable:c,PageWrapper:f},setup(){const[o,{reload:e}]=u({title:"远程加载示例",api:_,columns:d(),pagination:{pageSize:10}});function i(){e()}function p(){e({page:1})}return{registerTable:o,handleReloadCurrent:i,handleReload:p}}});function T(o,e,i,p,k,R){const n=r("a-button"),s=r("BasicTable"),l=r("PageWrapper");return C(),B(l,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[a(s,{onRegister:o.registerTable},{toolbar:t(()=>[a(n,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[m(" 刷新当前页 ")]),_:1},8,["onClick"]),a(n,{type:"primary",onClick:o.handleReload},{default:t(()=>[m(" 刷新并返回第一页 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}const ro=b(h,[["render",T]]);export{ro as default};
