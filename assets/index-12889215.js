var y=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(i,e,t)=>e in i?y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,u=(i,e)=>{for(var t in e||(e={}))k.call(e,t)&&f(i,t,e[t]);if(d)for(var t of d(e))w.call(e,t)&&f(i,t,e[t]);return i},h=(i,e)=>b(i,v(e));var _=(i,e,t)=>new Promise((l,n)=>{var m=r=>{try{a(t.next(r))}catch(s){n(s)}},o=r=>{try{a(t.throw(r))}catch(s){n(s)}},a=r=>r.done?l(r.value):Promise.resolve(r.value).then(m,o);a((t=t.apply(i,e)).next())});import"./TableImg.vue_vue_type_style_index_0_lang-b297d8c7.js";import{T as C}from"./componentMap-8c5d2fac.js";import{g as T}from"./system-20e0f1d7.js";import{P as A}from"./index-46052efd.js";import S from"./DeptTree-95c9df5b.js";import{d as B}from"./account.data-f84b704f.js";import{V as P}from"./index-c82523e9.js";import{d as R,f as g,r as V,Z as I,a8 as N,a9 as x,l as p,$ as q,u as c,ac as z}from"./vue-ea98dac5.js";import"./BasicForm-7e3a59df.js";import"./FormItem.vue_vue_type_script_lang-60e73ebf.js";import"./index.js";import"./antd-168c158e.js";import"./isNumber-6e063d5c.js";import"./isBoolean-e59585aa.js";import"./get-921f7259.js";import"./uniqBy-989d5baf.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./useForm-eae86464.js";import"./RadioButtonGroup-63152489.js";import"./useFormItem-1ece48e0.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-96857a86.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./useContentViewHeight-6fc1b870.js";import"./index-e6f7cb8a.js";import"./useContextMenu-0f9a47cc.js";const F=[{title:"用户名",field:"account",width:120},{title:"昵称",field:"nickname",width:120},{title:"邮箱",field:"email",width:120},{title:"创建时间",field:"createTime",width:180},{title:"角色",field:"role",width:200},{title:"所属部门",field:"dept",slots:{default:({row:i})=>B[i.dept]}},{title:"备注",field:"remark"},{width:160,title:"操作",align:"center",slots:{default:"action"},fixed:"right"}],H=[{field:"account",title:"用户名",itemRender:{name:"AInput"},span:6},{field:"nickname",title:"昵称",itemRender:{name:"AInput"},span:6},{span:12,align:"right",className:"!pr-0",itemRender:{name:"AButtonGroup",children:[{props:{type:"primary",content:"查询",htmlType:"submit"},attrs:{class:"mr-2"}},{props:{type:"default",htmlType:"reset",content:"重置"}}]}}],j={class:"m-4 vxebasic-form-container"},be=R({__name:"index",setup(i){const e=g(),t=g(),l=V({id:"VxeTable",keepSource:!0,columns:F,formConfig:{enabled:!0,items:H},height:"auto",proxyConfig:{ajax:{query:r=>_(this,[r],function*({page:o,form:a}){return T(h(u({page:o.currentPage,pageSize:o.pageSize},a),{searchInfo:t.value}))})}}}),n=(o="")=>{t.value=o,e.value&&e.value.commitProxy("query")},m=o=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var r;(r=e.value)==null||r.remove(o)}}}];return(o,a)=>(I(),N(c(A),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x(()=>[p(S,{class:"w-1/4 xl:w-1/5",onSelect:n}),q("div",j,[p(c(P),z({ref_key:"tableRef",ref:e},l),{action:x(({row:r})=>[p(c(C),{outside:"",actions:m(r)},null,8,["actions"])]),_:1},16)])]),_:1}))}});export{be as default};
