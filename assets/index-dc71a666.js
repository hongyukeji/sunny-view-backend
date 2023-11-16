import{a4 as _,m as C,bs as a,_ as f}from"./index.js";import{P as A}from"./index-46052efd.js";import S from"./CurrentPermissionMode-26369e18.js";import{d as B,c as l,a7 as o,Z as D,a8 as R,a9 as s,l as t,$ as r,E as n,a0 as p}from"./vue-ea98dac5.js";import{u as g,x as y}from"./antd-168c158e.js";import"./useContentViewHeight-6fc1b870.js";import"./useWindowSizeFn-9a9a25b4.js";import"./onMountedOrActivated-3eb95ecd.js";import"./isNumber-6e063d5c.js";const P=B({components:{Space:g,Alert:y,CurrentPermissionMode:S,PageWrapper:A},setup(){const{changeRole:u}=_(),e=C();return{userStore:e,RoleEnum:a,isSuper:l(()=>e.getRoleList.includes(a.SUPER)),isTest:l(()=>e.getRoleList.includes(a.TEST)),changeRole:u}}});const T={class:"mt-4"};function v(u,e,$,k,U,b){const c=o("CurrentPermissionMode"),m=o("Alert"),i=o("a-button"),E=o("Space"),d=o("PageWrapper");return D(),R(d,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:s(()=>[t(c),r("p",null,[n(" 当前角色: "),r("a",null,p(u.userStore.getRoleList),1)]),t(m,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),r("div",T,[n(" 权限切换(请先切换权限模式为前端角色权限模式): "),t(E,null,{default:s(()=>[t(i,{onClick:e[0]||(e[0]=F=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:s(()=>[n(p(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),t(i,{onClick:e[1]||(e[1]=F=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:s(()=>[n(p(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}const Z=f(P,[["render",v],["__scopeId","data-v-cda7941c"]]);export{Z as default};
