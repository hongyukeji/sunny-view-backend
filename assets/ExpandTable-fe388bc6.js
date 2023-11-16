import{B as d}from"./BasicTable-7a3824ec.js";import{T as f}from"./componentMap-8c5d2fac.js";import"./TableImg.vue_vue_type_style_index_0_lang-b297d8c7.js";import{u as B}from"./useTable-a9ef7662.js";import{P as C}from"./index-46052efd.js";import{getBasicColumns as F}from"./tableData-ec9d2d1d.js";import{d as b}from"./table-e1e44be4.js";import{d as g,a7 as e,Z as u,a8 as s,a9 as i,l as E,$ as _,a0 as T,ab as w}from"./vue-ea98dac5.js";import{_ as A}from"./index.js";import"./useFormItem-1ece48e0.js";import"./antd-168c158e.js";import"./get-921f7259.js";import"./RadioButtonGroup-63152489.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./isBoolean-e59585aa.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-96857a86.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./BasicForm-7e3a59df.js";import"./FormItem.vue_vue_type_script_lang-60e73ebf.js";import"./isNumber-6e063d5c.js";import"./uniqBy-989d5baf.js";import"./useForm-eae86464.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-6fc1b870.js";import"./select-9b85ab56.js";const h=g({components:{BasicTable:d,TableAction:f,PageWrapper:C},setup(){const[o]=B({api:b,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:F(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function n(r){}function a(r){}return{registerTable:o,handleDelete:n,handleOpen:a}}});function k(o,n,a,r,x,y){const l=e("TableAction"),m=e("BasicTable"),c=e("PageWrapper");return u(),s(c,{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:i(()=>[E(m,{onRegister:o.registerTable},{expandedRowRender:i(({record:t})=>[_("span",null,"No: "+T(t.no),1)]),bodyCell:i(({column:t,record:p})=>[t.key==="action"?(u(),s(l,{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,p)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:o.handleOpen.bind(null,p)}}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])]),_:1})}const uo=A(h,[["render",k]]);export{uo as default};
