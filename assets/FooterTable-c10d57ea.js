import{B as s}from"./BasicTable-7a3824ec.js";import"./componentMap-8c5d2fac.js";import"./TableImg.vue_vue_type_style_index_0_lang-b297d8c7.js";import{u as n}from"./useTable-a9ef7662.js";import{getBasicColumns as a}from"./tableData-ec9d2d1d.js";import{d as c}from"./table-e1e44be4.js";import{d as l,a7 as u,Z as _,_ as d,l as f}from"./vue-ea98dac5.js";import{_ as b}from"./index.js";import"./useFormItem-1ece48e0.js";import"./antd-168c158e.js";import"./get-921f7259.js";import"./RadioButtonGroup-63152489.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./isBoolean-e59585aa.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-96857a86.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./BasicForm-7e3a59df.js";import"./FormItem.vue_vue_type_script_lang-60e73ebf.js";import"./isNumber-6e063d5c.js";import"./uniqBy-989d5baf.js";import"./useForm-eae86464.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./select-9b85ab56.js";const B=l({components:{BasicTable:s},setup(){function o(i){const t=i.reduce((r,m)=>(r+=m.no,r),0);return[{_row:"合计",_index:"平均值",no:t},{_row:"合计",_index:"平均值",no:t}]}const[e]=n({title:"表尾行合计示例",api:c,rowSelection:{type:"checkbox"},columns:a(),showSummary:!0,summaryFunc:o,scroll:{x:2e3},canResize:!1});return{registerTable:e}}}),T={class:"p-4"};function x(o,e,i,t,r,m){const p=u("BasicTable");return _(),d("div",T,[f(p,{onRegister:o.registerTable},null,8,["onRegister"])])}const W=b(B,[["render",x]]);export{W as default};
