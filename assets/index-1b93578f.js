var l=(n,e,r)=>new Promise((t,i)=>{var s=c=>{try{o(r.next(c))}catch(a){i(a)}},u=c=>{try{o(r.throw(c))}catch(a){i(a)}},o=c=>c.done?t(c.value):Promise.resolve(c.value).then(s,u);o((r=r.apply(n,e)).next())});import{bw as h,am as d,c as g,n as y}from"./index.js";import{i as v}from"./isNumber-6e063d5c.js";var k=0;function f(n){var e=++k;return h(n)+e}function x(n){if(n&&n.component){const e=f(`${q(n.component)}_`);return n.key=e,n.field=e,!0}return f("key_")}function C(n,e){let r=[];if(d(n)){if(v(e))r=n.splice(e,1);else{const t=n.findIndex(e);t!==-1&&(r=n.splice(t,1))}return r.shift()}}function q(n){return n.replace(/([A-Z])/g,"_$1").toLowerCase()}function p(n,e){if(!d(n))return;const r=t=>{t.forEach(i=>{var s;["Grid"].includes(i.component)?(s=i.columns)==null||s.forEach(u=>r(u.children)):e(i)})};r(n)}const E=(n,e)=>{let r;const t=i=>i.some(s=>{var o;const{component:u}=s;return["Grid"].includes(u)?(o=s.columns)==null?void 0:o.some(c=>t(c.children)):(e(s)&&(r=s),e(s))});return t(n),r},_=n=>{const e=g(n);return delete e.currentItem,delete e.activeKey,e.schemas&&p(e.schemas,r=>{delete r.icon,delete r.key}),e},b=n=>l(void 0,null,function*(){try{return y(n)?yield n():n}catch(e){return[]}}),m=n=>{p(n,e=>{"required"in e&&(!d(e.rules)&&(e.rules=[]),e.rules.push({required:!0,message:e.message}),delete e.required,delete e.message)})};export{m as a,E as b,C as c,p as f,x as g,b as h,_ as r};
