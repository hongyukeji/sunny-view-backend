var _=(a,n,r)=>new Promise((m,p)=>{var e=t=>{try{u(r.next(t))}catch(o){p(o)}},l=t=>{try{u(r.throw(t))}catch(o){p(o)}},u=t=>t.done?m(t.value):Promise.resolve(t.value).then(e,l);u((r=r.apply(a,n)).next())});import{B as $}from"./BasicForm-7e3a59df.js";import"./componentMap-8c5d2fac.js";import{u as h}from"./useForm-eae86464.js";import"./RadioButtonGroup-63152489.js";import{C as k,B as F,_ as I}from"./index.js";import{P as g}from"./index-46052efd.js";import{h as v}from"./antd-168c158e.js";import{d as y,f as q,a7 as s,Z as c,a8 as f,a9 as i,l as B,E as b,ab as C}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-60e73ebf.js";import"./isNumber-6e063d5c.js";import"./isBoolean-e59585aa.js";import"./get-921f7259.js";import"./uniqBy-989d5baf.js";import"./index-567227c5.js";import"./useWindowSizeFn-9a9a25b4.js";import"./useFormItem-1ece48e0.js";import"./uuid-31b8b5a4.js";import"./useSortable-3cb9ef53.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-3f191529.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-96857a86.js";import"./copyTextToClipboard-38cd3bdb.js";import"./index-1608b1f9.js";import"./useContentViewHeight-6fc1b870.js";import"./onMountedOrActivated-3eb95ecd.js";const N=y({components:{BasicForm:$,CollapseContainer:k,PageWrapper:g,[v.name]:v,Button:F},setup(){const[a,{appendSchemaByField:n,removeSchemaByField:r,validate:m}]=h({schemas:[{field:"field0a",component:"Input",label:"字段0",required:!0},{field:"field0b",component:"Input",label:"字段0",required:!0},{field:"0",component:"Input",label:" ",slot:"add"}],labelWidth:100,actionColOptions:{span:24},baseColProps:{span:8}});function p(){return _(this,null,function*(){try{const o=yield m()}catch(o){}})}const e=q(1);function l(){n({field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},""),n({field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},""),n({field:`${e.value}`,component:"Input",label:" ",slot:"add"},""),e.value++}function u(){n([{field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},{field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},{field:`${e.value}`,component:"Input",label:" ",slot:"add"}],""),e.value++}function t(o){r([`field${o}a`,`field${o}b`,`${o}`]),e.value--}return{register:a,handleSubmit:p,add:l,del:t,batchAdd:u}}});function S(a,n,r,m,p,e){const l=s("Button"),u=s("BasicForm"),t=s("CollapseContainer"),o=s("PageWrapper");return c(),f(o,{title:"表单增删示例"},{default:i(()=>[B(t,{title:"表单增删"},{default:i(()=>[B(u,{onRegister:a.register,onSubmit:a.handleSubmit},{add:i(({field:d})=>[Number(d)===0?(c(),f(l,{key:0,onClick:a.add},{default:i(()=>[b("+")]),_:1},8,["onClick"])):C("",!0),Number(d)===0?(c(),f(l,{key:1,class:"ml-2",onClick:a.batchAdd},{default:i(()=>[b(" 批量添加表单配置 ")]),_:1},8,["onClick"])):C("",!0),Number(d)>0?(c(),f(l,{key:2,onClick:()=>a.del(d)},{default:i(()=>[b("-")]),_:2},1032,["onClick"])):C("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}const ae=I(N,[["render",S]]);export{ae as default};
