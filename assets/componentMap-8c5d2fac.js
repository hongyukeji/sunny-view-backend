var et=Object.defineProperty,tt=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var at=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var $e=(e,n,t)=>n in e?et(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))at.call(n,t)&&$e(e,t,n[t]);if(Fe)for(var t of Fe(n))ot.call(n,t)&&$e(e,t,n[t]);return e},x=(e,n)=>tt(e,nt(n));var D=(e,n,t)=>new Promise((r,o)=>{var g=l=>{try{i(t.next(l))}catch(a){o(a)}},m=l=>{try{i(t.throw(l))}catch(a){o(a)}},i=l=>l.done?r(l.value):Promise.resolve(l.value).then(g,m);i((t=t.apply(e,n)).next())});import{u as ce}from"./useFormItem-1ece48e0.js";import{p as S,y as Pe,l as J,o as se,n as j,_ as Z,V as oe,a1 as lt,J as Oe,a2 as st,a3 as rt,h as it,a4 as ut,q as Ue,$ as Re,b as Ie,a5 as De,U as ct,w as Be}from"./index.js";import{V as ue,r as Me,X as Se,Y as dt,Z as Ne,$ as ye,a0 as pt,E as Ee,a1 as ft,T as ze,a2 as mt,a3 as gt,o as ge,a4 as be,x as ht,u as vt,a5 as yt,M as bt,h as re,a6 as St,a7 as Ct,a8 as wt,z as Ge,a9 as _t,aa as At,ab as de,ac as je}from"./antd-168c158e.js";import{g as ee}from"./get-921f7259.js";import{d as K,f as w,c as O,h as Ce,w as N,u as C,a7 as A,Z as _,a8 as L,a9 as $,_ as z,aa as ie,F as ne,E as W,a0 as G,ac as Y,ad as pe,N as fe,ai as ae,aj as me,l as v,$ as le,o as we,p as Ft,e as $t,H as ke,a1 as he,ab as H,x as Le,r as Rt,G as Ke}from"./vue-ea98dac5.js";import{R as kt}from"./RadioButtonGroup-63152489.js";import{u as Lt,B as Ve,a as He,b as Te}from"./index-567227c5.js";import{i as Tt}from"./isBoolean-e59585aa.js";import{b as Pt}from"./uuid-31b8b5a4.js";import{u as Ot}from"./useSortable-3cb9ef53.js";import{d as Ut}from"./download-4dc1f19b.js";import{S as It}from"./index-3f191529.js";import{_ as Dt}from"./IconPicker.vue_vue_type_script_setup_true_lang-96857a86.js";import{C as Bt}from"./index-1608b1f9.js";const Mt=K({name:"ApiRadioGroup",components:{RadioGroup:ue.Group,RadioButton:ue.Button,Radio:ue},props:{api:{type:Function,default:null},params:{type:[Object,String],default:()=>({})},value:{type:[String,Number,Boolean]},isBtn:{type:[Boolean],default:!1},numberToString:S.bool,resultField:S.string.def(""),labelField:S.string.def("label"),valueField:S.string.def("value"),immediate:S.bool.def(!0)},emits:["options-change","change"],setup(e,{emit:n}){const t=w([]),r=w(!1),o=w(!0),g=w([]),m=Pe(),{t:i}=J(),[l]=ce(e,"value","change",g),a=O(()=>{const{labelField:d,valueField:c,numberToString:f}=e;return C(t).reduce((I,T)=>{if(T){const U=T[c];I.push(k({label:T[d],value:f?`${U}`:U},se(T,[d,c])))}return I},[])});Ce(()=>{e.immediate&&u()}),N(()=>e.params,()=>{!C(o)&&u()},{deep:!0});function u(){return D(this,null,function*(){const d=e.api;if(!(!d||!j(d))){t.value=[];try{r.value=!0;const c=yield d(e.params);if(Array.isArray(c)){t.value=c,s();return}e.resultField&&(t.value=ee(c,e.resultField)||[]),s()}catch(c){}finally{r.value=!1}}})}function s(){n("options-change",C(a))}function p(...d){g.value=d}return{state:l,getOptions:a,attrs:m,loading:r,t:i,handleClick:p,props:e}}});function Nt(e,n,t,r,o,g){const m=A("RadioButton"),i=A("Radio"),l=A("RadioGroup");return _(),L(l,Y(e.attrs,{value:e.state,"onUpdate:value":n[0]||(n[0]=a=>e.state=a),"button-style":"solid"}),{default:$(()=>[(_(!0),z(ne,null,ie(e.getOptions,a=>(_(),z(ne,{key:`${a.value}`},[e.props.isBtn?(_(),L(m,{key:0,value:a.value,disabled:a.disabled,onClick:u=>e.handleClick(a)},{default:$(()=>[W(G(a.label),1)]),_:2},1032,["value","disabled","onClick"])):(_(),L(i,{key:1,value:a.value,disabled:a.disabled,onClick:u=>e.handleClick(a)},{default:$(()=>[W(G(a.label),1)]),_:2},1032,["value","disabled","onClick"]))],64))),128))]),_:1},16,["value"])}const Et=Z(Mt,[["render",Nt]]),zt=K({name:"ApiSelect",components:{Select:Me,LoadingOutlined:Se},inheritAttrs:!1,props:{value:{type:[Array,Object,String,Number]},numberToString:S.bool,api:{type:Function,default:null},params:S.any.def({}),resultField:S.string.def(""),labelField:S.string.def("label"),valueField:S.string.def("value"),immediate:S.bool.def(!0),alwaysLoad:S.bool.def(!1),options:{type:Array,default:[]}},emits:["options-change","change","update:value"],setup(e,{emit:n}){const t=w([]),r=w(!1),o=w(!1),g=w([]),m=Pe(),{t:i}=J(),[l]=ce(e,"value","change",g),a=O(()=>{const{labelField:c,valueField:f,numberToString:I}=e;let T=C(t).reduce((U,V)=>{if(V){const Q=ee(V,f);U.push(x(k({},se(V,[c,f])),{label:ee(V,c),value:I?`${Q}`:Q}))}return U},[]);return T.length>0?T:e.options});N(()=>l.value,c=>{n("update:value",c)}),N(()=>e.params,()=>{!C(o)&&u()},{deep:!0,immediate:e.immediate});function u(){return D(this,null,function*(){const c=e.api;if(!(!c||!j(c)||r.value)){t.value=[];try{r.value=!0;const f=yield c(e.params);if(o.value=!0,Array.isArray(f)){t.value=f,p();return}e.resultField&&(t.value=ee(f,e.resultField)||[]),p()}catch(f){}finally{r.value=!1,o.value=!1}}})}function s(c){return D(this,null,function*(){c&&(e.alwaysLoad?yield u():!e.immediate&&!C(o)&&(yield u()))})}function p(){n("options-change",C(a))}function d(c,...f){g.value=f}return{state:l,attrs:m,getOptions:a,loading:r,t:i,handleFetch:s,handleChange:d}}});function Gt(e,n,t,r,o,g){const m=A("LoadingOutlined"),i=A("Select");return _(),L(i,Y({onDropdownVisibleChange:e.handleFetch},e.$attrs,{onChange:e.handleChange,options:e.getOptions,value:e.state,"onUpdate:value":n[0]||(n[0]=l=>e.state=l)}),pe({_:2},[ie(Object.keys(e.$slots),l=>({name:l,fn:$(a=>[fe(e.$slots,l,ae(me(a||{})))])})),e.loading?{name:"suffixIcon",fn:$(()=>[v(m,{spin:""})]),key:"0"}:void 0,e.loading?{name:"notFoundContent",fn:$(()=>[le("span",null,[v(m,{spin:"",class:"mr-1"}),W(" "+G(e.t("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1040,["onDropdownVisibleChange","onChange","options","value"])}const jt=Z(zt,[["render",Gt]]),Kt=K({name:"ApiTree",components:{ATree:dt},props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},resultField:S.string.def(""),afterFetch:{type:Function},value:{type:Array}},emits:["options-change","change","update:value"],setup(e,{attrs:n,emit:t}){const r=w([]),o=w(!1),g=w(!1),m=w([]),[i]=ce(e,"value","change",m),l=O(()=>k(k({},e.api?{treeData:C(r)}:{}),n));N(()=>i.value,u=>{t("update:value",u)}),N(()=>e.params,()=>{!C(o)&&a()},{deep:!0}),N(()=>e.immediate,u=>{u&&!o.value&&a()}),we(()=>{e.immediate&&a()});function a(){return D(this,null,function*(){const{api:u,afterFetch:s}=e;if(!u||!j(u))return;g.value=!0,r.value=[];let p;try{p=yield u(e.params)}catch(d){}s&&j(s)&&(p=s(p)),g.value=!1,p&&(oe(p)||(p=ee(p,e.resultField)),r.value=p||[],o.value=!0,t("options-change",r.value))})}return{getAttrs:l,loading:g,state:i}}});function Vt(e,n,t,r,o,g){const m=A("a-tree");return _(),L(m,Y(e.getAttrs,{selectedKeys:e.state,"onUpdate:selectedKeys":n[0]||(n[0]=i=>e.state=i)}),pe({_:2},[ie(Object.keys(e.$slots),i=>({name:i,fn:$(l=>[fe(e.$slots,i,ae(me(l||{})))])}))]),1040,["selectedKeys"])}const Ht=Z(Kt,[["render",Vt]]),Wt=K({name:"ApiTreeSelect",components:{ATreeSelect:Ne,LoadingOutlined:Se},props:{api:{type:Function},params:{type:Object},immediate:{type:Boolean,default:!0},async:{type:Boolean,default:!1},resultField:S.string.def(""),labelField:S.string.def("title"),valueField:S.string.def("value"),childrenField:S.string.def("children")},emits:["options-change","change","load-data"],setup(e,{attrs:n,emit:t}){const r=w([]),o=w(!1),g=w(!1),m=O(()=>k(k({},e.api?{treeData:C(r)}:{}),n)),i={children:e.childrenField,value:e.valueField,label:e.labelField};function l(...s){t("change",...s)}N(()=>e.params,()=>{!C(o)&&u()},{deep:!0}),N(()=>e.immediate,s=>{s&&!o.value&&u()}),we(()=>{e.immediate&&u()});function a(s){return new Promise(p=>{if(oe(s.children)&&s.children.length>0){p();return}t("load-data",{treeData:r,treeNode:s,resolve:p})})}function u(){return D(this,null,function*(){const{api:s}=e;if(!s||!j(s)||g.value)return;g.value=!0,r.value=[];let p;try{p=yield s(e.params)}catch(d){}g.value=!1,p&&(oe(p)||(p=ee(p,e.resultField)),r.value=p||[],o.value=!0,t("options-change",r.value))})}return{getAttrs:m,loading:g,handleChange:l,fieldNames:i,onLoadData:a}}});function Zt(e,n,t,r,o,g){const m=A("LoadingOutlined"),i=A("a-tree-select");return _(),L(i,Y(e.getAttrs,{onChange:e.handleChange,"field-names":e.fieldNames,"load-data":e.async?e.onLoadData:void 0}),pe({_:2},[ie(Object.keys(e.$slots),l=>({name:l,fn:$(a=>[fe(e.$slots,l,ae(me(a||{})))])})),e.loading?{name:"suffixIcon",fn:$(()=>[v(m,{spin:""})]),key:"0"}:void 0]),1040,["onChange","field-names","load-data"])}const qt=Z(Wt,[["render",Zt]]),Xt=K({name:"ApiCascader",components:{LoadingOutlined:Se,[ye.name]:ye},props:{value:{type:Array},api:{type:Function,default:null},numberToString:S.bool,resultField:S.string.def(""),labelField:S.string.def("label"),valueField:S.string.def("value"),childrenField:S.string.def("children"),apiParamKey:S.string.def("parentCode"),immediate:S.bool.def(!0),initFetchParams:{type:Object,default:()=>({})},isLeaf:{type:Function,default:null},displayRenderArray:{type:Array}},emits:["change","defaultChange"],setup(e,{emit:n}){const t=w([]),r=w([]),o=w(!1),g=w([]),m=w(!0),{t:i}=J(),[l]=ce(e,"value","change",g);N(t,c=>{const f=a(c);r.value=f},{deep:!0});function a(c){const{labelField:f,valueField:I,numberToString:T,childrenField:U,isLeaf:V}=e;return c.reduce((Q,q)=>{if(q){const b=q[I],R=x(k({},se(q,[f,I])),{label:q[f],value:T?`${b}`:b,isLeaf:V&&typeof V=="function"?V(q):!1}),h=Reflect.get(q,U);h&&Reflect.set(R,U,a(h)),Q.push(R)}return Q},[])}function u(){return D(this,null,function*(){const c=e.api;if(!(!c||!j(c))){t.value=[],o.value=!0;try{const f=yield c(e.initFetchParams);if(Array.isArray(f)){t.value=f;return}e.resultField&&(t.value=ee(f,e.resultField)||[])}catch(f){}finally{o.value=!1}}})}function s(c){return D(this,null,function*(){const f=c[c.length-1];f.loading=!0;const I=e.api;if(!(!I||!j(I)))try{const T=yield I({[e.apiParamKey]:Reflect.get(f,"value")});if(Array.isArray(T)){const U=a(T);f.children=U;return}if(e.resultField){const U=a(ee(T,e.resultField)||[]);f.children=U}}catch(T){}finally{f.loading=!1}})}Ce(()=>{e.immediate&&u()}),N(()=>e.initFetchParams,()=>{!C(m)&&u()},{deep:!0});function p(c,f){g.value=f,n("defaultChange",c,f)}function d({labels:c,selectedOptions:f}){return C(g).length===f.length?c.join(" / "):e.displayRenderArray?e.displayRenderArray.join(" / "):""}return{state:l,options:r,loading:o,t:i,handleChange:p,loadData:s,handleRenderDisplay:d}}});function Yt(e,n,t,r,o,g){const m=A("LoadingOutlined"),i=A("a-cascader");return _(),L(i,{value:e.state,"onUpdate:value":n[0]||(n[0]=l=>e.state=l),options:e.options,"load-data":e.loadData,"change-on-select":"",onChange:e.handleChange,displayRender:e.handleRenderDisplay},pe({_:2},[e.loading?{name:"suffixIcon",fn:$(()=>[v(m,{spin:""})]),key:"0"}:void 0,e.loading?{name:"notFoundContent",fn:$(()=>[le("span",null,[v(m,{spin:"",class:"mr-1"}),W(" "+G(e.t("component.form.apiSelectNotFound")),1)])]),key:"1"}:void 0]),1032,["value","options","load-data","onChange","displayRender"])}const Jt=Z(Xt,[["render",Yt]]),Qt=K({name:"ApiTransfer",components:{Transfer:pt},props:{value:{type:Array},api:{type:Function,default:null},params:{type:Object},dataSource:{type:Array},immediate:S.bool.def(!0),alwaysLoad:S.bool.def(!1),afterFetch:{type:Function},resultField:S.string.def(""),labelField:S.string.def("title"),valueField:S.string.def("key"),showSearch:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterOption:{type:Function},selectedKeys:{type:Array},showSelectAll:{type:Boolean,default:!1},targetKeys:{type:Array}},emits:["options-change","change"],setup(e,{attrs:n,emit:t}){const r=w([]),o=w([]),{t:g}=J(),m=O(()=>k(k({},e.api?{}:{dataSource:C(r)}),n)),i=O(()=>{const{labelField:p,valueField:d}=e;return C(r).reduce((c,f)=>(f&&c.push(x(k({},se(f,[p,d])),{title:f[p],key:f[d]})),c),[])}),l=O(()=>Array.isArray(e.value)?e.value:Array.isArray(e.targetKeys)?e.targetKeys:[]);function a(p,d,c){o.value=p,t("change",p)}Ce(()=>{e.immediate&&!e.alwaysLoad&&u()}),N(()=>e.params,()=>{u()},{deep:!0});function u(){return D(this,null,function*(){const p=e.api;if(!p||!j(p)){Array.isArray(e.dataSource)&&(r.value=e.dataSource);return}r.value=[];try{const d=yield p(e.params);if(Array.isArray(d)){r.value=d,s();return}e.resultField&&(r.value=ee(d,e.resultField)||[]),s()}catch(d){}})}function s(){t("options-change",C(i))}return{getTargetKeys:l,getdataSource:i,t:g,getAttrs:m,handleChange:a}}});function xt(e,n,t,r,o,g){const m=A("Transfer");return _(),L(m,{"data-source":e.getdataSource,"filter-option":e.filterOption,render:i=>i.title,showSelectAll:e.showSelectAll,selectedKeys:e.selectedKeys,targetKeys:e.getTargetKeys,showSearch:e.showSearch,disabled:e.disabled,onChange:e.handleChange},null,8,["data-source","filter-option","render","showSelectAll","selectedKeys","targetKeys","showSearch","disabled","onChange"])}const en=Z(Qt,[["render",xt]]),We={listType:{type:String,default:"picture-card"},helpText:{type:String,default:""},maxSize:{type:Number,default:2},maxNumber:{type:Number,default:1/0},accept:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},uploadParams:{type:Object,default:()=>({})},api:{type:Function,default:null,required:!0},name:{type:String,default:"file"},filename:{type:String,default:null},fileListOpenDrag:{type:Boolean,default:!0},fileListDragOptions:{type:Object,default:()=>({})}},Ze=x(k({value:{type:Array,default:()=>[]}},We),{showPreviewNumber:{type:Boolean,default:!0},emptyHidePreview:{type:Boolean,default:!1}}),tn={value:{type:Array,default:()=>[]}},nn={columns:{type:Array,default:null},actionColumn:{type:Object,default:null},dataSource:{type:Array,default:null},openDrag:{type:Boolean,default:!1},dragOptions:{type:Object,default:()=>({})}},{t:ve}=J();function qe({acceptRef:e,helpTextRef:n,maxNumberRef:t,maxSizeRef:r}){const o=O(()=>{const i=C(e);return i&&i.length>0?i:[]}),g=O(()=>C(o).map(i=>i.indexOf("/")>0||i.startsWith(".")?i:`.${i}`).join(",")),m=O(()=>{const i=C(n);if(i)return i;const l=[],a=C(e);a.length>0&&l.push(ve("component.upload.accept",[a.join(",")]));const u=C(r);u&&l.push(ve("component.upload.maxSize",[u]));const s=C(t);return s&&s!==1/0&&l.push(ve("component.upload.maxNumber",[s])),l.join("，")});return{getAccept:o,getStringAccept:g,getHelpText:m}}var B=(e=>(e.SUCCESS="success",e.ERROR="error",e.UPLOADING="uploading",e))(B||{});function an(e){return _e(e.name)}function _e(e){return/\.(jpg|jpeg|png|gif|webp)$/i.test(e)}function on(e){return new Promise((n,t)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>n({result:r.result,file:e}),r.onerror=o=>t(o)})}const Xe=Symbol("basic-table");function ta(e){Ft(Xe,e)}function ln(){return $t(Xe)}const{table:sn}=lt,{pageSizeOptions:rn,defaultPageSize:un,fetchSetting:cn,defaultSize:dn,defaultSortFn:pn,defaultFilterFn:fn}=sn,na="key",aa=rn,oa=un,la=cn,sa=dn,ra=pn,ia=fn,ua="center",ca="INDEX",mn="ACTION",gn=K({name:"TableAction",components:{Icon:Oe,PopConfirmButton:st,Divider:Ee,Dropdown:rt,MoreOutlined:ft,Tooltip:ze},props:{actions:{type:Array,default:null},dropDownActions:{type:Array,default:null},divider:S.bool.def(!0),outside:S.bool,stopButtonPropagation:S.bool.def(!1)},setup(e){const{prefixCls:n}=it("basic-table-action");let t={};e.outside||(t=ln());const{hasPermission:r}=ut();function o(u){const s=u.ifShow;let p=!0;return Tt(s)&&(p=s),j(s)&&(p=s(u)),p}const g=O(()=>(ke(e.actions)||[]).filter(u=>r(u.auth)&&o(u)).map(u=>{const{popConfirm:s}=u;return x(k(k({getPopupContainer:()=>{var p;return(p=C(t==null?void 0:t.wrapRef))!=null?p:document.body},type:"link",size:"small"},u),s||{}),{onConfirm:s==null?void 0:s.confirm,onCancel:s==null?void 0:s.cancel,enable:!!s})})),m=O(()=>{const u=(ke(e.dropDownActions)||[]).filter(s=>r(s.auth)&&o(s));return u.map((s,p)=>{const{label:d,popConfirm:c}=s;return x(k(k({},s),c),{onConfirm:c==null?void 0:c.confirm,onCancel:c==null?void 0:c.cancel,text:d,divider:p<u.length-1?e.divider:!1})})}),i=O(()=>{var p,d;const s=(((p=t==null?void 0:t.getColumns)==null?void 0:p.call(t))||[]).find(c=>c.flag===mn);return(d=s==null?void 0:s.align)!=null?d:"left"});function l(u){return k({getPopupContainer:()=>{var s;return(s=C(t==null?void 0:t.wrapRef))!=null?s:document.body},placement:"bottom"},Ue(u)?{title:u}:u)}function a(u){if(!e.stopButtonPropagation)return;u.composedPath().find(d=>{var c;return((c=d.tagName)==null?void 0:c.toUpperCase())==="BUTTON"})&&u.stopPropagation()}return{prefixCls:n,getActions:g,getDropdownList:m,getAlign:i,onCellClick:a,getTooltip:l}}});function hn(e,n,t,r,o,g){const m=A("Icon"),i=A("PopConfirmButton"),l=A("Tooltip"),a=A("Divider"),u=A("MoreOutlined"),s=A("a-button"),p=A("Dropdown");return _(),z("div",{class:he([e.prefixCls,e.getAlign]),onClick:n[0]||(n[0]=(...d)=>e.onCellClick&&e.onCellClick(...d))},[(_(!0),z(ne,null,ie(e.getActions,(d,c)=>(_(),z(ne,{key:`${c}-${d.label}`},[d.tooltip?(_(),L(l,ae(Y({key:0},e.getTooltip(d.tooltip))),{default:$(()=>[v(i,ae(me(d)),{default:$(()=>[d.icon?(_(),L(m,{key:0,icon:d.icon,class:he({"mr-1":!!d.label})},null,8,["icon","class"])):H("",!0),d.label?(_(),z(ne,{key:1},[W(G(d.label),1)],64)):H("",!0)]),_:2},1040)]),_:2},1040)):(_(),L(i,ae(Y({key:1},d)),{default:$(()=>[d.icon?(_(),L(m,{key:0,icon:d.icon,class:he({"mr-1":!!d.label})},null,8,["icon","class"])):H("",!0),d.label?(_(),z(ne,{key:1},[W(G(d.label),1)],64)):H("",!0)]),_:2},1040)),e.divider&&c<e.getActions.length-1?(_(),L(a,{key:2,type:"vertical",class:"action-divider"})):H("",!0)],64))),128)),e.dropDownActions&&e.getDropdownList.length>0?(_(),L(p,{key:0,trigger:["hover"],dropMenuList:e.getDropdownList,popconfirm:""},{default:$(()=>[fe(e.$slots,"more"),e.$slots.more?H("",!0):(_(),L(s,{key:0,type:"link",size:"small"},{default:$(()=>[v(u,{class:"icon-more"})]),_:1}))]),_:3},8,["dropMenuList"])):H("",!0)],2)}const Ye=Z(gn,[["render",hn]]),vn=K({components:{Image:mt},props:{fileUrl:S.string.def(""),fileName:S.string.def("")}});const yn={class:"thumb"};function bn(e,n,t,r,o,g){const m=A("Image");return _(),z("span",yn,[e.fileUrl?(_(),L(m,{key:0,src:e.fileUrl,width:104},null,8,["src"])):H("",!0)])}const Je=Z(vn,[["render",bn]]),{t:M}=J();function Sn(){return[{dataIndex:"thumbUrl",title:M("component.upload.legend"),width:100,customRender:({record:e})=>{const{thumbUrl:n}=e||{};return n&&v(Je,{fileUrl:n},null)}},{dataIndex:"name",title:M("component.upload.fileName"),align:"left",customRender:({text:e,record:n})=>{const{percent:t,status:r}=n||{};let o="normal";return r===B.ERROR?o="exception":r===B.UPLOADING?o="active":r===B.SUCCESS&&(o="success"),v("div",null,[v("p",{class:"truncate mb-1 max-w-[280px]",title:e},[e]),v(gt,{percent:t,size:"small",status:o},null)])}},{dataIndex:"size",title:M("component.upload.fileSize"),width:100,customRender:({text:e=0})=>e&&(e/1024).toFixed(2)+"KB"},{dataIndex:"status",title:M("component.upload.fileStatue"),width:100,customRender:({text:e})=>e===B.SUCCESS?v(ge,{color:"green"},{default:()=>M("component.upload.uploadSuccess")}):e===B.ERROR?v(ge,{color:"red"},{default:()=>M("component.upload.uploadError")}):e===B.UPLOADING?v(ge,{color:"blue"},{default:()=>M("component.upload.uploading")}):e||M("component.upload.pending")}]}function Cn(e){return{width:120,title:M("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:n})=>{const t=[{label:M("component.upload.del"),color:"error",onClick:e.bind(null,n)}];return v(Ye,{actions:t,outside:!0},null)}}}function wn(){return[{dataIndex:"url",title:M("component.upload.legend"),width:100,customRender:({record:e})=>{const{url:n}=e||{};return _e(n)&&v(Je,{fileUrl:n},null)}},{dataIndex:"name",title:M("component.upload.fileName"),align:"left"}]}function _n({handleRemove:e,handleDownload:n}){return{width:160,title:M("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:t})=>{const r=[{label:M("component.upload.del"),color:"error",onClick:e.bind(null,t)},{label:M("component.upload.download"),onClick:n.bind(null,t)}];return v(Ye,{actions:r,outside:!0},null)}}}const Qe=K({name:"FileList",props:nn,setup(e,{emit:n}){const t=Lt(),r=w();return N(()=>e.dataSource,()=>{Le(()=>{var o;(o=t==null?void 0:t.redoModalHeight)==null||o.call(t)})}),e.openDrag&&we(()=>Ot(r,x(k({},e.dragOptions),{onEnd:({oldIndex:o,newIndex:g})=>{if(o===g)return;const{onAfterEnd:m}=e.dragOptions;if(Re(o)&&Re(g)){const i=[...e.dataSource],[l]=i.splice(o,1);i.splice(g,0,l),Le(()=>{n("update:dataSource",i),j(m)&&m(i)})}}})).initSortable()),()=>{const{columns:o,actionColumn:g,dataSource:m}=e,i=[...o,g];return v("div",{class:"overflow-x-auto"},[v("table",{class:"file-table"},[v("colgroup",null,[i.map(l=>{const{width:a=0,dataIndex:u}=l,s={width:`${a}px`,minWidth:`${a}px`};return v("col",{style:a?s:{},key:u},null)})]),v("thead",null,[v("tr",{class:"file-table-tr"},[i.map(l=>{const{title:a="",align:u="center",dataIndex:s}=l;return v("th",{class:["file-table-th",u],key:s},[a])})])]),v("tbody",{ref:r},[m.map((l={},a)=>v("tr",{class:"file-table-tr",key:`${a+l.name||""}`},[i.map(u=>{const{dataIndex:s="",customRender:p,align:d="center"}=u,c=p&&j(p);return v("td",{class:["file-table-td break-all",d],key:s},[c?p==null?void 0:p({text:l[s],record:l}):l[s]])})]))])])])}}});const An=K({components:{BasicModal:Ve,Upload:be,Alert:ht,FileList:Qe},props:x(k({},We),{previewFileList:{type:Array,default:()=>[]}}),emits:["change","register","delete"],setup(e,{emit:n}){const t=Rt({fileList:[]}),r=w(!1),o=w([]),{accept:g,helpText:m,maxNumber:i,maxSize:l}=Ke(e),{t:a}=J(),[u,{closeModal:s}]=He(),{getStringAccept:p,getHelpText:d}=qe({acceptRef:g,helpTextRef:m,maxNumberRef:i,maxSizeRef:l}),{createMessage:c}=Ie(),f=O(()=>o.value.length>0&&!o.value.every(h=>h.status===B.SUCCESS)),I=O(()=>{const h=o.value.some(F=>F.status===B.SUCCESS);return{disabled:r.value||o.value.length===0||!h}}),T=O(()=>{const h=o.value.some(F=>F.status===B.ERROR);return r.value?a("component.upload.uploading"):a(h?"component.upload.reUploadFailed":"component.upload.startUpload")});function U(h){const{size:F,name:P}=h,{maxSize:E}=e;if(E&&h.size/1024/1024>=E)return c.error(a("component.upload.maxSizeMultiple",[E])),!1;const X={uuid:Pt(),file:h,size:F,name:P,percent:0,type:P.split(".").pop()};return an(h)?on(h).then(({result:te})=>{o.value=[...C(o),k({thumbUrl:te},X)]}):o.value=[...C(o),X],!1}function V(h){const F=o.value.findIndex(P=>P.uuid===h.uuid);F!==-1&&o.value.splice(F,1),n("delete",h)}function Q(h){return D(this,null,function*(){var P;const{api:F}=e;if(!F||!j(F))return De();try{h.status=B.UPLOADING;const E=yield(P=e.api)==null?void 0:P.call(e,{data:k({},e.uploadParams||{}),file:h.file,name:e.name,filename:e.filename},function(Ae){const xe=Ae.loaded/Ae.total*100|0;h.percent=xe}),{data:X}=E;return h.status=B.SUCCESS,h.response=X,{success:!0,error:null}}catch(E){return h.status=B.ERROR,{success:!1,error:E}}})}function q(){return D(this,null,function*(){var F;const{maxNumber:h}=e;if(o.value.length+((F=e.previewFileList)==null?void 0:F.length)>h)return c.warning(a("component.upload.maxNumber",[h]));try{r.value=!0;const P=o.value.filter(te=>te.status!==B.SUCCESS)||[],E=yield Promise.all(P.map(te=>Q(te)));r.value=!1;const X=E.filter(te=>!te.success);if(X.length>0)throw X}catch(P){throw r.value=!1,P}})}function b(){const{maxNumber:h}=e;if(o.value.length>h)return c.warning(a("component.upload.maxNumber",[h]));if(r.value)return c.warning(a("component.upload.saveWarn"));const F=[];for(const P of o.value){const{status:E,response:X}=P;E===B.SUCCESS&&X&&F.push(X.url)}if(F.length<=0)return c.warning(a("component.upload.saveError"));o.value=[],s(),n("change",F)}function R(){return D(this,null,function*(){return r.value?(c.warning(a("component.upload.uploadWait")),!1):(o.value=[],!0)})}return{columns:Sn(),actionColumn:Cn(V),register:u,closeModal:s,getHelpText:d,getStringAccept:p,getOkButtonProps:I,beforeUpload:U,fileListRef:o,state:t,isUploadingRef:r,handleStartUpload:q,handleOk:b,handleCloseFunc:R,getIsSelectFile:f,getUploadBtnText:T,t:a}}});const Fn={class:"upload-modal-toolbar"};function $n(e,n,t,r,o,g){const m=A("a-button"),i=A("Alert"),l=A("Upload"),a=A("FileList"),u=A("BasicModal");return _(),L(u,Y({width:"800px",title:e.t("component.upload.upload"),okText:e.t("component.upload.save")},e.$attrs,{onRegister:e.register,onOk:e.handleOk,closeFunc:e.handleCloseFunc,maskClosable:!1,keyboard:!1,class:"upload-modal",okButtonProps:e.getOkButtonProps,cancelButtonProps:{disabled:e.isUploadingRef}}),{centerFooter:$(()=>[v(m,{onClick:e.handleStartUpload,color:"success",disabled:!e.getIsSelectFile,loading:e.isUploadingRef},{default:$(()=>[W(G(e.getUploadBtnText),1)]),_:1},8,["onClick","disabled","loading"])]),default:$(()=>[le("div",Fn,[v(i,{message:e.getHelpText,type:"info",banner:"",class:"upload-modal-toolbar__text"},null,8,["message"]),v(l,{accept:e.getStringAccept,multiple:e.multiple,"before-upload":e.beforeUpload,"show-upload-list":!1,class:"upload-modal-toolbar__btn"},{default:$(()=>[v(m,{type:"primary"},{default:$(()=>[W(G(e.t("component.upload.choose")),1)]),_:1})]),_:1},8,["accept","multiple","before-upload"])]),v(a,{dataSource:e.fileListRef,"onUpdate:dataSource":n[0]||(n[0]=s=>e.fileListRef=s),columns:e.columns,actionColumn:e.actionColumn,openDrag:e.fileListOpenDrag,dragOptions:e.fileListDragOptions},null,8,["dataSource","columns","actionColumn","openDrag","dragOptions"])]),_:1},16,["title","okText","onRegister","onOk","closeFunc","okButtonProps","cancelButtonProps"])}const Rn=Z(An,[["render",$n]]),kn=K({components:{BasicModal:Ve,FileList:Qe},props:tn,emits:["list-change","register","delete"],setup(e,{emit:n}){const[t,{closeModal:r}]=He(),{t:o}=J(),g=w([]);N(()=>e.value,l=>{oe(l)||(l=[]),g.value=l.filter(a=>!!a).map(a=>({url:a,type:a.split(".").pop()||"",name:a.split("/").pop()||""}))},{immediate:!0});function m(l){const a=g.value.findIndex(u=>u.url===l.url);if(a!==-1){const u=g.value.splice(a,1);n("delete",u[0].url),n("list-change",g.value.map(s=>s.url))}}function i(l){const{url:a=""}=l;Ut({url:a})}return{t:o,register:t,closeModal:r,fileListRef:g,columns:wn(),actionColumn:_n({handleRemove:m,handleDownload:i})}}});function Ln(e,n,t,r,o,g){const m=A("FileList"),i=A("BasicModal");return _(),L(i,Y({width:"800px",title:e.t("component.upload.preview"),class:"upload-preview-modal"},e.$attrs,{onRegister:e.register,showOkBtn:!1}),{default:$(()=>[v(m,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])]),_:1},16,["title","onRegister"])}const Tn=Z(kn,[["render",Ln]]),Pn=K({name:"BasicUpload",components:{UploadModal:Rn,Space:vt,UploadPreviewModal:Tn,Icon:Oe,Tooltip:ze},props:Ze,emits:["change","delete","preview-delete","update:value"],setup(e,{emit:n,attrs:t}){const{t:r}=J(),[o,{openModal:g}]=Te(),[m,{openModal:i}]=Te(),l=w([]),a=O(()=>{const{emptyHidePreview:f}=e;return f&&f?l.value.length>0:!0}),u=O(()=>{const f=k(k({},t),e);return se(f,"onChange")});N(()=>e.value,(f=[])=>{l.value=oe(f)?f:[]},{immediate:!0});function s(f){l.value=[...C(l),...f||[]],n("update:value",l.value),n("change",l.value)}function p(f){l.value=[...f||[]],n("update:value",l.value),n("change",l.value)}function d(f){n("delete",f)}function c(f){n("preview-delete",f)}return{registerUploadModal:o,openUploadModal:g,handleChange:s,handlePreviewChange:p,registerPreviewModal:m,openPreviewModal:i,fileList:l,showPreview:a,bindValue:u,handleDelete:d,handlePreviewDelete:c,t:r}}});function On(e,n,t,r,o,g){const m=A("a-button"),i=A("Icon"),l=A("Tooltip"),a=A("Space"),u=A("UploadModal"),s=A("UploadPreviewModal");return _(),z("div",null,[v(a,null,{default:$(()=>[v(m,{type:"primary",onClick:e.openUploadModal,preIcon:"carbon:cloud-upload"},{default:$(()=>[W(G(e.t("component.upload.upload")),1)]),_:1},8,["onClick"]),e.showPreview?(_(),L(l,{key:0,placement:"bottom"},{title:$(()=>[W(G(e.t("component.upload.uploaded"))+" ",1),e.fileList.length?(_(),z(ne,{key:0},[W(G(e.fileList.length),1)],64)):H("",!0)]),default:$(()=>[v(m,{onClick:e.openPreviewModal},{default:$(()=>[v(i,{icon:"bi:eye"}),e.fileList.length&&e.showPreviewNumber?(_(),z(ne,{key:0},[W(G(e.fileList.length),1)],64)):H("",!0)]),_:1},8,["onClick"])]),_:1})):H("",!0)]),_:1}),v(u,Y(e.bindValue,{previewFileList:e.fileList,fileListOpenDrag:e.fileListOpenDrag,fileListDragOptions:e.fileListDragOptions,onRegister:e.registerUploadModal,onChange:e.handleChange,onDelete:e.handleDelete}),null,16,["previewFileList","fileListOpenDrag","fileListDragOptions","onRegister","onChange","onDelete"]),v(s,{value:e.fileList,onRegister:e.registerPreviewModal,onListChange:e.handlePreviewChange,onDelete:e.handlePreviewDelete},null,8,["value","onRegister","onListChange","onDelete"])])}const Un=Z(Pn,[["render",On]]),In={key:0},Dn={style:{"margin-top":"8px"}},Bn=["src"],Mn=K({__name:"ImageUpload",props:k({},Ze),emits:["change","update:value","delete"],setup(e,{emit:n}){const t=e,{t:r}=J(),{createMessage:o}=Ie(),{accept:g,helpText:m,maxNumber:i,maxSize:l}=Ke(t),{getStringAccept:a}=qe({acceptRef:g,helpTextRef:m,maxNumberRef:i,maxSizeRef:l}),u=w(!1),s=w(""),p=w(""),d=w([]),c=w(!0),f=w(!0);N(()=>t.value,b=>{b&&oe(b)&&(d.value=b.map((R,h)=>R&&Ue(R)?{uid:-h+"",name:R.substring(R.lastIndexOf("/")+1),status:"done",url:R}:R&&ct(R)?R:void 0))});function I(b){return new Promise((R,h)=>{const F=new FileReader;F.readAsDataURL(b),F.onload=()=>R(F.result),F.onerror=P=>h(P)})}const T=b=>D(this,null,function*(){!b.url&&!b.preview&&(b.preview=yield I(b.originFileObj)),s.value=b.url||b.preview,u.value=!0,p.value=b.name||b.url.substring(b.url.lastIndexOf("/")+1)}),U=b=>D(this,null,function*(){if(d.value){const R=d.value.findIndex(h=>h.uuid===b.uuid);R!==-1&&d.value.splice(R,1),n("change",d.value),n("delete",b)}}),V=()=>{u.value=!1,p.value=""},Q=b=>{const{maxSize:R,accept:h}=t,{name:F}=b,P=_e(F);P||(o.error(r("component.upload.acceptUpload",[h])),f.value=!1,setTimeout(()=>f.value=!0,1e3));const E=b.size/1024/1024>R;return E&&(o.error(r("component.upload.maxSizeMultiple",[R])),c.value=!1,setTimeout(()=>c.value=!0,1e3)),P&&!E||be.LIST_IGNORE};function q(b){return D(this,null,function*(){var h;const{api:R}=t;if(!R||!j(R))return De();try{const F=yield(h=t.api)==null?void 0:h.call(t,{data:k({},t.uploadParams||{}),file:b.file,name:t.name,filename:t.filename});b.onSuccess(F.data),n("change",d.value)}catch(F){b.onError(F)}})}return(b,R)=>(_(),z("div",null,[v(C(be),Y(b.$attrs,{"file-list":d.value,"onUpdate:fileList":R[0]||(R[0]=h=>d.value=h),"list-type":b.listType,accept:C(a),multiple:b.multiple,maxCount:C(i),"before-upload":Q,"custom-request":q,onPreview:T,onRemove:U}),{default:$(()=>[d.value&&d.value.length<C(i)?(_(),z("div",In,[v(C(yt)),le("div",Dn,G(C(r)("component.upload.upload")),1)])):H("",!0)]),_:1},16,["file-list","list-type","accept","multiple","maxCount"]),v(C(bt),{open:u.value,title:p.value,footer:null,onCancel:V},{default:$(()=>[le("img",{alt:"",style:{width:"100%"},src:s.value},null,8,Bn)]),_:1},8,["open","title"])]))}});const Nn=Be(Mn),En=Be(Un),y=new Map;y.set("Input",re);y.set("InputGroup",re.Group);y.set("InputPassword",re.Password);y.set("InputSearch",re.Search);y.set("InputTextArea",re.TextArea);y.set("InputNumber",St);y.set("AutoComplete",Ct);y.set("ImageUpload",Nn);y.set("Select",Me);y.set("ApiSelect",jt);y.set("ApiTree",Ht);y.set("TreeSelect",Ne);y.set("ApiTreeSelect",qt);y.set("ApiRadioGroup",Et);y.set("Switch",wt);y.set("RadioButtonGroup",kt);y.set("RadioGroup",ue.Group);y.set("Checkbox",Ge);y.set("CheckboxGroup",Ge.Group);y.set("ApiCascader",Jt);y.set("Cascader",ye);y.set("Slider",_t);y.set("Rate",At);y.set("ApiTransfer",en);y.set("DatePicker",de);y.set("MonthPicker",de.MonthPicker);y.set("RangePicker",de.RangePicker);y.set("WeekPicker",de.WeekPicker);y.set("TimePicker",je);y.set("TimeRangePicker",je.TimeRangePicker);y.set("StrengthMeter",It);y.set("IconPicker",Dt);y.set("InputCountDown",Bt);y.set("Upload",En);y.set("Divider",Ee);function da(e,n){y.set(e,n)}export{jt as A,En as B,ua as D,la as F,ca as I,oa as P,na as R,Ye as T,aa as a,qt as b,y as c,Et as d,mn as e,ra as f,ia as g,sa as h,ta as i,da as j,ln as u};
