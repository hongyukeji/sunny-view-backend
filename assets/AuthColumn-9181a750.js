import{B as p}from"./BasicTable-7a3824ec.js";import{T as m}from"./componentMap-8c5d2fac.js";import"./TableImg.vue_vue_type_style_index_0_lang-b297d8c7.js";import{u as c}from"./useTable-a9ef7662.js";import{d as h}from"./table-e1e44be4.js";import{d as b,a7 as l,Z as r,_ as f,l as w,a9 as F,a8 as C,ab as T}from"./vue-ea98dac5.js";import{_}from"./index.js";import"./useFormItem-1ece48e0.js";import"./antd-168c158e.js";import"./get-921f7259.js";import"./RadioButtonGroup-63152489.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./isBoolean-e59585aa.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-96857a86.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./BasicForm-7e3a59df.js";import"./FormItem.vue_vue_type_script_lang-60e73ebf.js";import"./isNumber-6e063d5c.js";import"./uniqBy-989d5baf.js";import"./useForm-eae86464.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";const A=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",minWidth:200,auth:"test"},{title:"状态",dataIndex:"status",width:100},{title:"状态1",dataIndex:"status1",width:100},{title:"状态2",dataIndex:"status2",width:100},{title:"状态3",dataIndex:"status3",width:100},{title:"状态4",dataIndex:"status4",width:100},{title:"状态5",dataIndex:"status5",width:100},{title:"地址",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],I=b({components:{BasicTable:p,TableAction:m},setup(){const[t]=c({title:"TableAction组件及固定列示例",api:h,columns:A,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function o(i){}function n(i){}function a(i){}return{registerTable:t,handleEdit:o,handleDelete:n,handleOpen:a}}}),x={class:"p-4"};function k(t,o,n,a,i,B){const u=l("TableAction"),s=l("BasicTable");return r(),f("div",x,[w(s,{onRegister:t.registerTable},{bodyCell:F(({column:d,record:e})=>[d.key==="action"?(r(),C(u,{key:0,actions:[{label:"编辑",onClick:t.handleEdit.bind(null,e),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,e),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:t.handleOpen.bind(null,e)},ifShow:g=>e.status!=="enable"},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:t.handleOpen.bind(null,e)},ifShow:()=>e.status==="enable"},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:t.handleOpen.bind(null,e)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):T("",!0)]),_:1},8,["onRegister"])])}const ot=_(I,[["render",k]]);export{ot as default};
