import{o as Ue,a as Ie,i as At,c as N,r as kt,h as Pt,b as $t,d as ae,e as Nt,f as de,w as fe,g as pe,j as X,k as j,u as ie,m as ho,l as fo,p as Ge,n as V,q as _t,s as oe,t as Mt,v as Oe,x as Ao,C as Ot,y as h,L as Ht,z as Ko,A as Lo,B as J,D as jo,E as vo,F as Tt,G as He,H as Do,I as Te,J as E,K as I,M as Bt,N as se,O as $,P as K,Q as Et,T as Wo,R as xe,S as te,U as Rt,V as De,W as ko,X as Vo,Y as Ae,Z as Po,_ as $o,$ as Ft,a0 as Ye,a1 as Qe,a2 as po,a3 as Uo,a4 as Kt,a5 as Lt,a6 as jt,a7 as Ne,a8 as ee,a9 as Ke,aa as lo,ab as ce,ac as Dt,ad as Wt,ae as be,af as Go,ag as Yo,ah as qo,ai as Vt,aj as mo,ak as Ut,al as Gt,am as Yt,an as Be,ao as ke,ap as ve,aq as qt,ar as Xt,as as Jt,at as Qt,au as Zt,av as en,aw as Pe,ax as me,ay as le,az as on,aA as No}from"./index-BKYbwv8W.js";import{u as Me,C as Xo}from"./ChevronRight-DiWmquNl.js";import{f as Ce,N as Le,_ as tn}from"./_plugin-vue_export-helper-B0W6wcR0.js";let We=[];const Jo=new WeakMap;function nn(){We.forEach(e=>e(...Jo.get(e))),We=[]}function rn(e,...o){Jo.set(e,o),!We.includes(e)&&We.push(e)===1&&requestAnimationFrame(nn)}function _o(e,o){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[o]!==void 0)return!0;t=t.parentElement}return!1}let Se,_e;const ln=()=>{var e,o;Se=At?(o=(e=document)===null||e===void 0?void 0:e.fonts)===null||o===void 0?void 0:o.ready:void 0,_e=!1,Se!==void 0?Se.then(()=>{_e=!0}):_e=!0};ln();function an(e){if(_e)return;let o=!1;Ue(()=>{_e||Se?.then(()=>{o||e()})}),Ie(()=>{o=!0})}function Qo(e,o){return N(()=>{for(const t of o)if(e[t]!==void 0)return e[t];return e[o[o.length-1]]})}function sn(e={},o){const t=kt({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,i=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}n!==void 0&&Object.keys(n).forEach(d=>{if(d!==l.key)return;const u=n[d];if(typeof u=="function")u(l);else{const{stop:f=!1,prevent:c=!1}=u;f&&l.stopPropagation(),c&&l.preventDefault(),u.handler(l)}})},a=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(d=>{if(d!==l.key)return;const u=r[d];if(typeof u=="function")u(l);else{const{stop:f=!1,prevent:c=!1}=u;f&&l.stopPropagation(),c&&l.preventDefault(),u.handler(l)}})},s=()=>{(o===void 0||o.value)&&(de("keydown",document,i),de("keyup",document,a)),o!==void 0&&fe(o,l=>{l?(de("keydown",document,i),de("keyup",document,a)):(ae("keydown",document,i),ae("keyup",document,a))})};return Pt()?($t(s),Ie(()=>{(o===void 0||o.value)&&(ae("keydown",document,i),ae("keyup",document,a))})):s(),Nt(t)}const dn=pe("n-internal-select-menu-body"),Zo="__disabled__";function ze(e){const o=X(ho,null),t=X(fo,null),n=X(Ge,null),r=X(dn,null),i=j();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};Ue(()=>{de("fullscreenchange",document,a)}),Ie(()=>{ae("fullscreenchange",document,a)})}return ie(()=>{var a;const{to:s}=e;return s!==void 0?s===!1?Zo:s===!0?i.value||"body":s:o?.value?(a=o.value.$el)!==null&&a!==void 0?a:o.value:t?.value?t.value:n?.value?n.value:r?.value?r.value:s??(i.value||"body")})}ze.tdkey=Zo;ze.propTo={type:[String,Object,Boolean],default:void 0};function cn(e,o,t){const n=j(e.value);let r=null;return fe(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}let ge=null;function et(){if(ge===null&&(ge=document.getElementById("v-binder-view-measurer"),ge===null)){ge=document.createElement("div"),ge.id="v-binder-view-measurer";const{style:e}=ge;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(ge)}return ge.getBoundingClientRect()}function un(e,o){const t=et();return{top:o,left:e,height:0,width:0,right:t.width-e,bottom:t.height-o}}function Ze(e){const o=e.getBoundingClientRect(),t=et();return{left:o.left-t.left,top:o.top-t.top,bottom:t.height+t.top-o.bottom,right:t.width+t.left-o.right,width:o.width,height:o.height}}function hn(e){return e.nodeType===9?null:e.parentNode}function ot(e){if(e===null)return null;const o=hn(e);if(o===null)return null;if(o.nodeType===9)return document;if(o.nodeType===1){const{overflow:t,overflowX:n,overflowY:r}=getComputedStyle(o);if(/(auto|scroll|overlay)/.test(t+r+n))return o}return ot(o)}const tt=V({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var o;oe("VBinder",(o=Mt())===null||o===void 0?void 0:o.proxy);const t=X("VBinder",null),n=j(null),r=p=>{n.value=p,t&&e.syncTargetWithParent&&t.setTargetRef(p)};let i=[];const a=()=>{let p=n.value;for(;p=ot(p),p!==null;)i.push(p);for(const T of i)de("scroll",T,f,!0)},s=()=>{for(const p of i)ae("scroll",p,f,!0);i=[]},l=new Set,d=p=>{l.size===0&&a(),l.has(p)||l.add(p)},u=p=>{l.has(p)&&l.delete(p),l.size===0&&s()},f=()=>{rn(c)},c=()=>{l.forEach(p=>p())},g=new Set,b=p=>{g.size===0&&de("resize",window,C),g.has(p)||g.add(p)},m=p=>{g.has(p)&&g.delete(p),g.size===0&&ae("resize",window,C)},C=()=>{g.forEach(p=>p())};return Ie(()=>{ae("resize",window,C),s()}),{targetRef:n,setTargetRef:r,addScrollListener:d,removeScrollListener:u,addResizeListener:b,removeResizeListener:m}},render(){return _t("binder",this.$slots)}}),nt=V({name:"Target",setup(){const{setTargetRef:e,syncTarget:o}=X("VBinder");return{syncTarget:o,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:o}=this;return e?Oe(Ao("follower",this.$slots),[[o]]):Ao("follower",this.$slots)}}),we="@@mmoContext",fn={mounted(e,{value:o}){e[we]={handler:void 0},typeof o=="function"&&(e[we].handler=o,de("mousemoveoutside",e,o))},updated(e,{value:o}){const t=e[we];typeof o=="function"?t.handler?t.handler!==o&&(ae("mousemoveoutside",e,t.handler),t.handler=o,de("mousemoveoutside",e,o)):(e[we].handler=o,de("mousemoveoutside",e,o)):t.handler&&(ae("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:o}=e[we];o&&ae("mousemoveoutside",e,o),e[we].handler=void 0}},{c:$e}=Ot(),rt="vueuc-style",Re={top:"bottom",bottom:"top",left:"right",right:"left"},Mo={start:"end",center:"center",end:"start"},eo={top:"height",bottom:"height",left:"width",right:"width"},vn={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},pn={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},mn={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Oo={top:!0,bottom:!1,left:!0,right:!1},Ho={top:"end",bottom:"start",left:"end",right:"start"};function gn(e,o,t,n,r,i){if(!r||i)return{placement:e,top:0,left:0};const[a,s]=e.split("-");let l=s??"center",d={top:0,left:0};const u=(g,b,m)=>{let C=0,p=0;const T=t[g]-o[b]-o[g];return T>0&&n&&(m?p=Oo[b]?T:-T:C=Oo[b]?T:-T),{left:C,top:p}},f=a==="left"||a==="right";if(l!=="center"){const g=mn[e],b=Re[g],m=eo[g];if(t[m]>o[m]){if(o[g]+o[m]<t[m]){const C=(t[m]-o[m])/2;o[g]<C||o[b]<C?o[g]<o[b]?(l=Mo[s],d=u(m,b,f)):d=u(m,g,f):l="center"}}else t[m]<o[m]&&o[b]<0&&o[g]>o[b]&&(l=Mo[s])}else{const g=a==="bottom"||a==="top"?"left":"top",b=Re[g],m=eo[g],C=(t[m]-o[m])/2;(o[g]<C||o[b]<C)&&(o[g]>o[b]?(l=Ho[g],d=u(m,g,f)):(l=Ho[b],d=u(m,b,f)))}let c=a;return o[a]<t[eo[a]]&&o[a]<o[Re[a]]&&(c=Re[a]),{placement:l!=="center"?`${c}-${l}`:c,left:d.left,top:d.top}}function bn(e,o){return o?pn[e]:vn[e]}function yn(e,o,t,n,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-o.top)}px`,left:`${Math.round(t.left-o.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-o.top+t.height/2)}px`,left:`${Math.round(t.left-o.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-o.top+t.height/2)}px`,left:`${Math.round(t.left-o.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-o.top+t.height)}px`,left:`${Math.round(t.left-o.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-o.top+n)}px`,left:`${Math.round(t.left-o.left+t.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-o.top+t.height/2+n)}px`,left:`${Math.round(t.left-o.left+t.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-o.top+t.height/2+n)}px`,left:`${Math.round(t.left-o.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-o.top+t.height+n)}px`,left:`${Math.round(t.left-o.left+t.width/2+r)}px`,transform:"translateX(-50%)"}}}const xn=$e([$e(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),$e(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[$e("> *",{pointerEvents:"all"})])]),it=V({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const o=X("VBinder"),t=ie(()=>e.enabled!==void 0?e.enabled:e.show),n=j(null),r=j(null),i=()=>{const{syncTrigger:c}=e;c.includes("scroll")&&o.addScrollListener(l),c.includes("resize")&&o.addResizeListener(l)},a=()=>{o.removeScrollListener(l),o.removeResizeListener(l)};Ue(()=>{t.value&&(l(),i())});const s=Lo();xn.mount({id:"vueuc/binder",head:!0,anchorMetaName:rt,ssr:s}),Ie(()=>{a()}),an(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const c=n.value;if(c===null)return;const g=o.targetRef,{x:b,y:m,overlap:C}=e,p=b!==void 0&&m!==void 0?un(b,m):Ze(g);c.style.setProperty("--v-target-width",`${Math.round(p.width)}px`),c.style.setProperty("--v-target-height",`${Math.round(p.height)}px`);const{width:T,minWidth:R,placement:x,internalShift:S,flip:k}=e;c.setAttribute("v-placement",x),C?c.setAttribute("v-overlap",""):c.removeAttribute("v-overlap");const{style:A}=c;T==="target"?A.width=`${p.width}px`:T!==void 0?A.width=T:A.width="",R==="target"?A.minWidth=`${p.width}px`:R!==void 0?A.minWidth=R:A.minWidth="";const D=Ze(c),P=Ze(r.value),{left:O,top:B,placement:z}=gn(x,p,D,S,k,C),U=bn(z,C),{left:L,top:y,transform:W}=yn(z,P,p,B,O,C);c.setAttribute("v-placement",z),c.style.setProperty("--v-offset-left",`${Math.round(O)}px`),c.style.setProperty("--v-offset-top",`${Math.round(B)}px`),c.style.transform=`translateX(${L}) translateY(${y}) ${W}`,c.style.setProperty("--v-transform-origin",U),c.style.transformOrigin=U};fe(t,c=>{c?(i(),d()):a()});const d=()=>{vo().then(l).catch(c=>console.error(c))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(c=>{fe(J(e,c),l)}),["teleportDisabled"].forEach(c=>{fe(J(e,c),d)}),fe(J(e,"syncTrigger"),c=>{c.includes("resize")?o.addResizeListener(l):o.removeResizeListener(l),c.includes("scroll")?o.addScrollListener(l):o.removeScrollListener(l)});const u=jo(),f=ie(()=>{const{to:c}=e;if(c!==void 0)return c;u.value});return{VBinder:o,mergedEnabled:t,offsetContainerRef:r,followerRef:n,mergedTo:f,syncPosition:l}},render(){return h(Ht,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,o;const t=h("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[h("div",{class:"v-binder-follower-content",ref:"followerRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e))]);return this.zindexable?Oe(t,[[Ko,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}}),ue="v-hidden",wn=$e("[v-hidden]",{display:"none!important"}),Cn=V({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const t=j(null),n=j(null);function r(a){const{value:s}=t,{getCounter:l,getTail:d}=e;let u;if(l!==void 0?u=l():u=n.value,!s||!u)return;u.hasAttribute(ue)&&u.removeAttribute(ue);const{children:f}=s;if(a.showAllItemsBeforeCalculate)for(const R of f)R.hasAttribute(ue)&&R.removeAttribute(ue);const c=s.offsetWidth,g=[],b=o.tail?d?.():null;let m=b?b.offsetWidth:0,C=!1;const p=s.children.length-(o.tail?1:0);for(let R=0;R<p-1;++R){if(R<0)continue;const x=f[R];if(C){x.hasAttribute(ue)||x.setAttribute(ue,"");continue}else x.hasAttribute(ue)&&x.removeAttribute(ue);const S=x.offsetWidth;if(m+=S,g[R]=S,m>c){const{updateCounter:k}=e;for(let A=R;A>=0;--A){const D=p-1-A;k!==void 0?k(D):u.textContent=`${D}`;const P=u.offsetWidth;if(m-=g[A],m+P<=c||A===0){C=!0,R=A-1,b&&(R===-1?(b.style.maxWidth=`${c-P}px`,b.style.boxSizing="border-box"):b.style.maxWidth="");const{onUpdateCount:O}=e;O&&O(D);break}}}}const{onUpdateOverflow:T}=e;C?T!==void 0&&T(!0):(T!==void 0&&T(!1),u.setAttribute(ue,""))}const i=Lo();return wn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:rt,ssr:i}),Ue(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:n,sync:r}},render(){const{$slots:e}=this;return vo(()=>this.sync({showAllItemsBeforeCalculate:!1})),h("div",{class:"v-overflow",ref:"selfRef"},[Tt(e,"default"),e.counter?e.counter():h("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});let oo;function Sn(){return oo===void 0&&(oo=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),oo}function zn(e){return o=>{o?e.value=o.$el:e.value=null}}const In=V({name:"ChevronDownFilled",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function To(e){return Array.isArray(e)?e:[e]}const ao={STOP:"STOP"};function lt(e,o){const t=o(e);e.children!==void 0&&t!==ao.STOP&&e.children.forEach(n=>lt(n,o))}function An(e,o={}){const{preserveGroup:t=!1}=o,n=[],r=t?a=>{a.isLeaf||(n.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||n.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),n}function kn(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function Pn(e){return e.children}function $n(e){return e.key}function Nn(){return!1}function _n(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function Mn(e){return e.disabled===!0}function On(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function to(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function no(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function Hn(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)||t.add(n)}),Array.from(t)}function Tn(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)&&t.delete(n)}),Array.from(t)}function Bn(e){return e?.type==="group"}class En extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Rn(e,o,t,n){return Ve(o.concat(e),t,n,!1)}function Fn(e,o){const t=new Set;return e.forEach(n=>{const r=o.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function Kn(e,o,t,n){const r=Ve(o,t,n,!1),i=Ve(e,t,n,!0),a=Fn(e,t),s=[];return r.forEach(l=>{(i.has(l)||a.has(l))&&s.push(l)}),s.forEach(l=>r.delete(l)),r}function ro(e,o){const{checkedKeys:t,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:l,allowNotLoaded:d}=e;if(!a)return n!==void 0?{checkedKeys:Hn(t,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Tn(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=o;let f;r!==void 0?f=Kn(r,t,o,d):n!==void 0?f=Rn(n,t,o,d):f=Ve(t,o,d,!1);const c=l==="parent",g=l==="child"||s,b=f,m=new Set,C=Math.max.apply(null,Array.from(u.keys()));for(let p=C;p>=0;p-=1){const T=p===0,R=u.get(p);for(const x of R){if(x.isLeaf)continue;const{key:S,shallowLoaded:k}=x;if(g&&k&&x.children.forEach(O=>{!O.disabled&&!O.isLeaf&&O.shallowLoaded&&b.has(O.key)&&b.delete(O.key)}),x.disabled||!k)continue;let A=!0,D=!1,P=!0;for(const O of x.children){const B=O.key;if(!O.disabled){if(P&&(P=!1),b.has(B))D=!0;else if(m.has(B)){D=!0,A=!1;break}else if(A=!1,D)break}}A&&!P?(c&&x.children.forEach(O=>{!O.disabled&&b.has(O.key)&&b.delete(O.key)}),b.add(S)):D&&m.add(S),T&&g&&b.has(S)&&b.delete(S)}}return{checkedKeys:Array.from(b),indeterminateKeys:Array.from(m)}}function Ve(e,o,t,n){const{treeNodeMap:r,getChildren:i}=o,a=new Set,s=new Set(e);return e.forEach(l=>{const d=r.get(l);d!==void 0&&lt(d,u=>{if(u.disabled)return ao.STOP;const{key:f}=u;if(!a.has(f)&&(a.add(f),s.add(f),On(u.rawNode,i))){if(n)return ao.STOP;if(!t)throw new En}})}),s}function Ln(e,{includeGroup:o=!1,includeSelf:t=!0},n){var r;const i=n.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a?.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(o||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function jn(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function Dn(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r+1)%n]:r===t.length-1?null:t[r+1]}function Bo(e,o,{loop:t=!1,includeDisabled:n=!1}={}){const r=o==="prev"?Wn:Dn,i={reverse:o==="prev"};let a=!1,s=null;function l(d){if(d!==null){if(d===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!d.disabled||n)&&!d.ignored&&!d.isGroup){s=d;return}if(d.isGroup){const u=go(d,i);u!==null?s=u:l(r(d,t))}else{const u=r(d,!1);if(u!==null)l(u);else{const f=Vn(d);f?.isGroup?l(r(f,t)):t&&l(r(d,!0))}}}}return l(e),s}function Wn(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r-1+n)%n]:r===0?null:t[r-1]}function Vn(e){return e.parent}function go(e,o={}){const{reverse:t=!1}=o,{children:n}=e;if(n){const{length:r}=n,i=t?r-1:0,a=t?-1:r,s=t?-1:1;for(let l=i;l!==a;l+=s){const d=n[l];if(!d.disabled&&!d.ignored)if(d.isGroup){const u=go(d,o);if(u!==null)return u}else return d}}return null}const Un={getChild(){return this.ignored?null:go(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return Bo(this,"next",e)},getPrev(e={}){return Bo(this,"prev",e)}};function Gn(e,o){const t=o?new Set(o):void 0,n=[];function r(i){i.forEach(a=>{n.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&r(a.children)})}return r(e),n}function Yn(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function at(e,o,t,n,r,i=null,a=0){const s=[];return e.forEach((l,d)=>{var u;const f=Object.create(n);if(f.rawNode=l,f.siblings=s,f.level=a,f.index=d,f.isFirstChild=d===0,f.isLastChild=d+1===e.length,f.parent=i,!f.ignored){const c=r(l);Array.isArray(c)&&(f.children=at(c,o,t,n,r,f,a+1))}s.push(f),o.set(f.key,f),t.has(a)||t.set(a,[]),(u=t.get(a))===null||u===void 0||u.push(f)}),s}function je(e,o={}){var t;const n=new Map,r=new Map,{getDisabled:i=Mn,getIgnored:a=Nn,getIsGroup:s=Bn,getKey:l=$n}=o,d=(t=o.getChildren)!==null&&t!==void 0?t:Pn,u=o.ignoreEmptyChildren?x=>{const S=d(x);return Array.isArray(S)?S.length?S:null:S}:d,f=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return kn(this.rawNode,u)},get shallowLoaded(){return _n(this.rawNode,u)},get ignored(){return a(this.rawNode)},contains(x){return Yn(this,x)}},Un),c=at(e,n,r,f,u);function g(x){if(x==null)return null;const S=n.get(x);return S&&!S.isGroup&&!S.ignored?S:null}function b(x){if(x==null)return null;const S=n.get(x);return S&&!S.ignored?S:null}function m(x,S){const k=b(x);return k?k.getPrev(S):null}function C(x,S){const k=b(x);return k?k.getNext(S):null}function p(x){const S=b(x);return S?S.getParent():null}function T(x){const S=b(x);return S?S.getChild():null}const R={treeNodes:c,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(x){return Gn(c,x)},getNode:g,getPrev:m,getNext:C,getParent:p,getChild:T,getFirstAvailableNode(){return jn(c)},getPath(x,S={}){return Ln(x,S,R)},getCheckedKeys(x,S={}){const{cascade:k=!0,leafOnly:A=!1,checkStrategy:D="all",allowNotLoaded:P=!1}=S;return ro({checkedKeys:to(x),indeterminateKeys:no(x),cascade:k,leafOnly:A,checkStrategy:D,allowNotLoaded:P},R)},check(x,S,k={}){const{cascade:A=!0,leafOnly:D=!1,checkStrategy:P="all",allowNotLoaded:O=!1}=k;return ro({checkedKeys:to(S),indeterminateKeys:no(S),keysToCheck:x==null?[]:To(x),cascade:A,leafOnly:D,checkStrategy:P,allowNotLoaded:O},R)},uncheck(x,S,k={}){const{cascade:A=!0,leafOnly:D=!1,checkStrategy:P="all",allowNotLoaded:O=!1}=k;return ro({checkedKeys:to(S),indeterminateKeys:no(S),keysToUncheck:x==null?[]:To(x),cascade:A,leafOnly:D,checkStrategy:P,allowNotLoaded:O},R)},getNonLeafKeys(x={}){return An(c,x)}};return R}const qn={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function Xn(e){const{boxShadow2:o,popoverColor:t,textColor2:n,borderRadius:r,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},qn),{fontSize:i,borderRadius:r,color:t,dividerColor:a,textColor:n,boxShadow:o})}const bo=He({name:"Popover",common:Te,peers:{Scrollbar:Do},self:Xn}),io={top:"bottom",bottom:"top",left:"right",right:"left"},Z="var(--n-arrow-height) * 1.414",Jn=E([I("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[E(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),se("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[se("scrollable",[se("show-header-or-footer","padding: var(--n-padding);")])]),$("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),$("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),K("scrollable, show-header-or-footer",[$("content",`
 padding: var(--n-padding);
 `)])]),I("popover-shared",`
 transform-origin: inherit;
 `,[I("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[I("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Z});
 height: calc(${Z});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),E("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),E("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),E("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),E("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),re("top-start",`
 top: calc(${Z} / -2);
 left: calc(${he("top-start")} - var(--v-offset-left));
 `),re("top",`
 top: calc(${Z} / -2);
 transform: translateX(calc(${Z} / -2)) rotate(45deg);
 left: 50%;
 `),re("top-end",`
 top: calc(${Z} / -2);
 right: calc(${he("top-end")} + var(--v-offset-left));
 `),re("bottom-start",`
 bottom: calc(${Z} / -2);
 left: calc(${he("bottom-start")} - var(--v-offset-left));
 `),re("bottom",`
 bottom: calc(${Z} / -2);
 transform: translateX(calc(${Z} / -2)) rotate(45deg);
 left: 50%;
 `),re("bottom-end",`
 bottom: calc(${Z} / -2);
 right: calc(${he("bottom-end")} + var(--v-offset-left));
 `),re("left-start",`
 left: calc(${Z} / -2);
 top: calc(${he("left-start")} - var(--v-offset-top));
 `),re("left",`
 left: calc(${Z} / -2);
 transform: translateY(calc(${Z} / -2)) rotate(45deg);
 top: 50%;
 `),re("left-end",`
 left: calc(${Z} / -2);
 bottom: calc(${he("left-end")} + var(--v-offset-top));
 `),re("right-start",`
 right: calc(${Z} / -2);
 top: calc(${he("right-start")} - var(--v-offset-top));
 `),re("right",`
 right: calc(${Z} / -2);
 transform: translateY(calc(${Z} / -2)) rotate(45deg);
 top: 50%;
 `),re("right-end",`
 right: calc(${Z} / -2);
 bottom: calc(${he("right-end")} + var(--v-offset-top));
 `),...Bt.map({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,o)=>{const t=["right","left"].includes(o),n=t?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",s=`calc((${`var(--v-target-${n}, 0px)`} - ${Z}) / 2)`,l=he(r);return E(`[v-placement="${r}"] >`,[I("popover-shared",[K("center-arrow",[I("popover-arrow",`${o}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function he(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function re(e,o){const t=e.split("-")[0],n=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return E(`[v-placement="${e}"] >`,[I("popover-shared",`
 margin-${io[t]}: var(--n-space);
 `,[K("show-arrow",`
 margin-${io[t]}: var(--n-space-arrow);
 `),K("overlap",`
 margin: 0;
 `),Et("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${io[t]}: auto;
 ${n}
 `,[I("popover-arrow",o)])])])}const st=Object.assign(Object.assign({},te.props),{to:ze.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function dt({arrowClass:e,arrowStyle:o,arrowWrapperClass:t,arrowWrapperStyle:n,clsPrefix:r}){return h("div",{key:"__popover-arrow__",style:n,class:[`${r}-popover-arrow-wrapper`,t]},h("div",{class:[`${r}-popover-arrow`,e],style:o}))}const Qn=V({name:"PopoverBody",inheritAttrs:!1,props:st,setup(e,{slots:o,attrs:t}){const{namespaceRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:a}=xe(e),s=te("Popover","-popover",Jn,bo,e,r),l=Rt("Popover",a,r),d=j(null),u=X("NPopover"),f=j(null),c=j(e.show),g=j(!1);De(()=>{const{show:P}=e;P&&!Sn()&&!e.internalDeactivateImmediately&&(g.value=!0)});const b=N(()=>{const{trigger:P,onClickoutside:O}=e,B=[],{positionManuallyRef:{value:z}}=u;return z||(P==="click"&&!O&&B.push([ko,k,void 0,{capture:!0}]),P==="hover"&&B.push([fn,S])),O&&B.push([ko,k,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&g.value)&&B.push([Vo,e.show]),B}),m=N(()=>{const{common:{cubicBezierEaseInOut:P,cubicBezierEaseIn:O,cubicBezierEaseOut:B},self:{space:z,spaceArrow:U,padding:L,fontSize:y,textColor:W,dividerColor:_,color:G,boxShadow:Q,borderRadius:ne,arrowHeight:M,arrowOffset:H,arrowOffsetVertical:v}}=s.value;return{"--n-box-shadow":Q,"--n-bezier":P,"--n-bezier-ease-in":O,"--n-bezier-ease-out":B,"--n-font-size":y,"--n-text-color":W,"--n-color":G,"--n-divider-color":_,"--n-border-radius":ne,"--n-arrow-height":M,"--n-arrow-offset":H,"--n-arrow-offset-vertical":v,"--n-padding":L,"--n-space":z,"--n-space-arrow":U}}),C=N(()=>{const P=e.width==="trigger"?void 0:Ce(e.width),O=[];P&&O.push({width:P});const{maxWidth:B,minWidth:z}=e;return B&&O.push({maxWidth:Ce(B)}),z&&O.push({maxWidth:Ce(z)}),i||O.push(m.value),O}),p=i?Ae("popover",void 0,m,e):void 0;u.setBodyInstance({syncPosition:T}),Ie(()=>{u.setBodyInstance(null)}),fe(J(e,"show"),P=>{e.animated||(P?c.value=!0:c.value=!1)});function T(){var P;(P=d.value)===null||P===void 0||P.syncPosition()}function R(P){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&u.handleMouseEnter(P)}function x(P){e.trigger==="hover"&&e.keepAliveOnHover&&u.handleMouseLeave(P)}function S(P){e.trigger==="hover"&&!A().contains(Po(P))&&u.handleMouseMoveOutside(P)}function k(P){(e.trigger==="click"&&!A().contains(Po(P))||e.onClickoutside)&&u.handleClickOutside(P)}function A(){return u.getTriggerElement()}oe(Ge,f),oe(fo,null),oe(ho,null);function D(){if(p?.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&g.value))return null;let O;const B=u.internalRenderBodyRef.value,{value:z}=r;if(B)O=B([`${z}-popover-shared`,l?.value&&`${z}-popover--rtl`,p?.themeClass.value,e.overlap&&`${z}-popover-shared--overlap`,e.showArrow&&`${z}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${z}-popover-shared--center-arrow`],f,C.value,R,x);else{const{value:U}=u.extraClassRef,{internalTrapFocus:L}=e,y=!$o(o.header)||!$o(o.footer),W=()=>{var _,G;const Q=y?h(po,null,Qe(o.header,H=>H?h("div",{class:[`${z}-popover__header`,e.headerClass],style:e.headerStyle},H):null),Qe(o.default,H=>H?h("div",{class:[`${z}-popover__content`,e.contentClass],style:e.contentStyle},o):null),Qe(o.footer,H=>H?h("div",{class:[`${z}-popover__footer`,e.footerClass],style:e.footerStyle},H):null)):e.scrollable?(_=o.default)===null||_===void 0?void 0:_.call(o):h("div",{class:[`${z}-popover__content`,e.contentClass],style:e.contentStyle},o),ne=e.scrollable?h(Uo,{themeOverrides:s.value.peerOverrides.Scrollbar,theme:s.value.peers.Scrollbar,contentClass:y?void 0:`${z}-popover__content ${(G=e.contentClass)!==null&&G!==void 0?G:""}`,contentStyle:y?void 0:e.contentStyle},{default:()=>Q}):Q,M=e.showArrow?dt({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:z}):null;return[ne,M]};O=h("div",Ye({class:[`${z}-popover`,`${z}-popover-shared`,l?.value&&`${z}-popover--rtl`,p?.themeClass.value,U.map(_=>`${z}-${_}`),{[`${z}-popover--scrollable`]:e.scrollable,[`${z}-popover--show-header-or-footer`]:y,[`${z}-popover--raw`]:e.raw,[`${z}-popover-shared--overlap`]:e.overlap,[`${z}-popover-shared--show-arrow`]:e.showArrow,[`${z}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:f,style:C.value,onKeydown:u.handleKeydown,onMouseenter:R,onMouseleave:x},t),L?h(Ft,{active:e.show,autoFocus:!0},{default:W}):W())}return Oe(O,b.value)}return{displayed:g,namespace:n,isMounted:u.isMountedRef,zIndex:u.zIndexRef,followerRef:d,adjustedTo:ze(e),followerEnabled:c,renderContentNode:D}},render(){return h(it,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===ze.tdkey},{default:()=>this.animated?h(Wo,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Zn=Object.keys(st),er={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function or(e,o,t){er[o].forEach(n=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[n],i=t[n];r?e.props[n]=(...a)=>{r(...a),i(...a)}:e.props[n]=i})}const qe={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:ze.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},tr=Object.assign(Object.assign(Object.assign({},te.props),qe),{internalOnAfterLeave:Function,internalRenderBody:Function}),ct=V({name:"Popover",inheritAttrs:!1,props:tr,slots:Object,__popover__:!0,setup(e){const o=jo(),t=j(null),n=N(()=>e.show),r=j(e.defaultShow),i=Me(n,r),a=ie(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:y}=e;return!!y?.()},l=()=>s()?!1:i.value,d=Qo(e,["arrow","showArrow"]),u=N(()=>e.overlap?!1:d.value);let f=null;const c=j(null),g=j(null),b=ie(()=>e.x!==void 0&&e.y!==void 0);function m(y){const{"onUpdate:show":W,onUpdateShow:_,onShow:G,onHide:Q}=e;r.value=y,W&&ee(W,y),_&&ee(_,y),y&&G&&ee(G,!0),y&&Q&&ee(Q,!1)}function C(){f&&f.syncPosition()}function p(){const{value:y}=c;y&&(window.clearTimeout(y),c.value=null)}function T(){const{value:y}=g;y&&(window.clearTimeout(y),g.value=null)}function R(){const y=s();if(e.trigger==="focus"&&!y){if(l())return;m(!0)}}function x(){const y=s();if(e.trigger==="focus"&&!y){if(!l())return;m(!1)}}function S(){const y=s();if(e.trigger==="hover"&&!y){if(T(),c.value!==null||l())return;const W=()=>{m(!0),c.value=null},{delay:_}=e;_===0?W():c.value=window.setTimeout(W,_)}}function k(){const y=s();if(e.trigger==="hover"&&!y){if(p(),g.value!==null||!l())return;const W=()=>{m(!1),g.value=null},{duration:_}=e;_===0?W():g.value=window.setTimeout(W,_)}}function A(){k()}function D(y){var W;l()&&(e.trigger==="click"&&(p(),T(),m(!1)),(W=e.onClickoutside)===null||W===void 0||W.call(e,y))}function P(){if(e.trigger==="click"&&!s()){p(),T();const y=!l();m(y)}}function O(y){e.internalTrapFocus&&y.key==="Escape"&&(p(),T(),m(!1))}function B(y){r.value=y}function z(){var y;return(y=t.value)===null||y===void 0?void 0:y.targetRef}function U(y){f=y}return oe("NPopover",{getTriggerElement:z,handleKeydown:O,handleMouseEnter:S,handleMouseLeave:k,handleClickOutside:D,handleMouseMoveOutside:A,setBodyInstance:U,positionManuallyRef:b,isMountedRef:o,zIndexRef:J(e,"zIndex"),extraClassRef:J(e,"internalExtraClass"),internalRenderBodyRef:J(e,"internalRenderBody")}),De(()=>{i.value&&s()&&m(!1)}),{binderInstRef:t,positionManually:b,mergedShowConsideringDisabledProp:a,uncontrolledShow:r,mergedShowArrow:u,getMergedShow:l,setShow:B,handleClick:P,handleMouseEnter:S,handleMouseLeave:k,handleFocus:R,handleBlur:x,syncPosition:C}},render(){var e;const{positionManually:o,$slots:t}=this;let n,r=!1;if(!o&&(n=Kt(t,"trigger"),n)){n=Lt(n),n=n.type===jt?h("span",[n]):n;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=n.type)===null||e===void 0)&&e.__popover__)r=!0,n.props||(n.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),n.props.internalSyncTargetWithParent=!0,n.props.internalInheritedEventHandlers?n.props.internalInheritedEventHandlers=[i,...n.props.internalInheritedEventHandlers]:n.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,s=[i,...a],l={onBlur:d=>{s.forEach(u=>{u.onBlur(d)})},onFocus:d=>{s.forEach(u=>{u.onFocus(d)})},onClick:d=>{s.forEach(u=>{u.onClick(d)})},onMouseenter:d=>{s.forEach(u=>{u.onMouseenter(d)})},onMouseleave:d=>{s.forEach(u=>{u.onMouseleave(d)})}};or(n,a?"nested":o?"manual":this.trigger,l)}}return h(tt,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Oe(h("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[Ko,{enabled:i,zIndex:this.zIndex}]]):null,o?null:h(nt,null,{default:()=>n}),h(Qn,Ne(this.$props,Zn,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,s;return(s=(a=this.$slots).default)===null||s===void 0?void 0:s.call(a)},header:()=>{var a,s;return(s=(a=this.$slots).header)===null||s===void 0?void 0:s.call(a)},footer:()=>{var a,s;return(s=(a=this.$slots).footer)===null||s===void 0?void 0:s.call(a)}})]}})}}),nr={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function rr(e){const{primaryColor:o,textColor2:t,dividerColor:n,hoverColor:r,popoverColor:i,invertedColor:a,borderRadius:s,fontSizeSmall:l,fontSizeMedium:d,fontSizeLarge:u,fontSizeHuge:f,heightSmall:c,heightMedium:g,heightLarge:b,heightHuge:m,textColor3:C,opacityDisabled:p}=e;return Object.assign(Object.assign({},nr),{optionHeightSmall:c,optionHeightMedium:g,optionHeightLarge:b,optionHeightHuge:m,borderRadius:s,fontSizeSmall:l,fontSizeMedium:d,fontSizeLarge:u,fontSizeHuge:f,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:o,optionTextColorChildActive:o,color:i,dividerColor:n,suffixColor:t,prefixColor:t,optionColorHover:r,optionColorActive:Ke(o,{alpha:.1}),groupHeaderTextColor:C,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:p})}const ut=He({name:"Dropdown",common:Te,peers:{Popover:bo},self:rr}),ir={padding:"8px 14px"};function lr(e){const{borderRadius:o,boxShadow2:t,baseColor:n}=e;return Object.assign(Object.assign({},ir),{borderRadius:o,boxShadow:t,color:lo(n,"rgba(0, 0, 0, .85)"),textColor:n})}const ht=He({name:"Tooltip",common:Te,peers:{Popover:bo},self:lr}),ar=Object.assign(Object.assign({},qe),te.props),sr=V({name:"Tooltip",props:ar,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:o}=xe(e),t=te("Tooltip","-tooltip",void 0,ht,e,o),n=j(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(i){n.value.setShow(i)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:N(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return h(ct,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),yo=pe("n-dropdown-menu"),Xe=pe("n-dropdown"),Eo=pe("n-dropdown-option"),ft=V({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return h("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),dr=V({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=X(yo),{renderLabelRef:t,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=X(Xe);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,l=h("div",Object.assign({class:`${o}-dropdown-option`},r?.(s)),h("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},h("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},ce(s.icon)),h("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ce((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),h("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:s}):l}});function so(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function cr(e){return e.type==="group"}function vt(e){return e.type==="divider"}function ur(e){return e.type==="render"}const pt=V({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=X(Xe),{hoverKeyRef:t,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:l,renderLabelRef:d,renderIconRef:u,labelFieldRef:f,childrenFieldRef:c,renderOptionRef:g,nodePropsRef:b,menuPropsRef:m}=o,C=X(Eo,null),p=X(yo),T=X(Ge),R=N(()=>e.tmNode.rawNode),x=N(()=>{const{value:_}=c;return so(e.tmNode.rawNode,_)}),S=N(()=>{const{disabled:_}=e.tmNode;return _}),k=N(()=>{if(!x.value)return!1;const{key:_,disabled:G}=e.tmNode;if(G)return!1;const{value:Q}=t,{value:ne}=n,{value:M}=r,{value:H}=i;return Q!==null?H.includes(_):ne!==null?H.includes(_)&&H[H.length-1]!==_:M!==null?H.includes(_):!1}),A=N(()=>n.value===null&&!s.value),D=cn(k,300,A),P=N(()=>!!C?.enteringSubmenuRef.value),O=j(!1);oe(Eo,{enteringSubmenuRef:O});function B(){O.value=!0}function z(){O.value=!1}function U(){const{parentKey:_,tmNode:G}=e;G.disabled||l.value&&(r.value=_,n.value=null,t.value=G.key)}function L(){const{tmNode:_}=e;_.disabled||l.value&&t.value!==_.key&&U()}function y(_){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:G}=_;G&&!_o({target:G},"dropdownOption")&&!_o({target:G},"scrollbarRail")&&(t.value=null)}function W(){const{value:_}=x,{tmNode:G}=e;l.value&&!_&&!G.disabled&&(o.doSelect(G.key,G.rawNode),o.doUpdateShow(!1))}return{labelField:f,renderLabel:d,renderIcon:u,siblingHasIcon:p.showIconRef,siblingHasSubmenu:p.hasSubmenuRef,menuProps:m,popoverBody:T,animated:s,mergedShowSubmenu:N(()=>D.value&&!P.value),rawNode:R,hasSubmenu:x,pending:ie(()=>{const{value:_}=i,{key:G}=e.tmNode;return _.includes(G)}),childActive:ie(()=>{const{value:_}=a,{key:G}=e.tmNode,Q=_.findIndex(ne=>G===ne);return Q===-1?!1:Q<_.length-1}),active:ie(()=>{const{value:_}=a,{key:G}=e.tmNode,Q=_.findIndex(ne=>G===ne);return Q===-1?!1:Q===_.length-1}),mergedDisabled:S,renderOption:g,nodeProps:b,handleClick:W,handleMouseMove:L,handleMouseEnter:U,handleMouseLeave:y,handleSubmenuBeforeEnter:B,handleSubmenuAfterEnter:z}},render(){var e,o;const{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:d,renderOption:u,nodeProps:f,props:c,scrollable:g}=this;let b=null;if(r){const T=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);b=h(mt,Object.assign({},T,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const m={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},C=f?.(n),p=h("div",Object.assign({class:[`${i}-dropdown-option`,C?.class],"data-dropdown-option":!0},C),h("div",Ye(m,c),[h("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[d?d(n):ce(n.icon)]),h("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(n):ce((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),h("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?h(Le,null,{default:()=>h(Xo,null)}):null)]),this.hasSubmenu?h(tt,null,{default:()=>[h(nt,null,{default:()=>h("div",{class:`${i}-dropdown-offset-container`},h(it,{show:this.mergedShowSubmenu,placement:this.placement,to:g&&this.popoverBody||void 0,teleportDisabled:!g},{default:()=>h("div",{class:`${i}-dropdown-menu-wrapper`},t?h(Wo,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>b}):b)}))})]}):null);return u?u({node:p,option:n}):p}}),hr=V({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:n}=e;return h(po,null,h(dr,{clsPrefix:t,tmNode:e,key:e.key}),n?.map(r=>{const{rawNode:i}=r;return i.show===!1?null:vt(i)?h(ft,{clsPrefix:t,key:r.key}):r.isGroup?(Dt("dropdown","`group` node is not allowed to be put in `group` node."),null):h(pt,{clsPrefix:t,tmNode:r,parentKey:o,key:r.key})}))}}),fr=V({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return h("div",o,[e?.()])}}),mt=V({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=X(Xe);oe(yo,{showIconRef:N(()=>{const r=o.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:N(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>so(l,r));const{rawNode:s}=i;return so(s,r)})})});const n=j(null);return oe(ho,null),oe(fo,null),oe(Ge,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:ur(i)?h(fr,{tmNode:r,key:r.key}):vt(i)?h(ft,{clsPrefix:o,key:r.key}):cr(i)?h(hr,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):h(pt,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return h("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?h(Uo,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?dt({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),vr=I("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Wt(),I("dropdown-option",`
 position: relative;
 `,[E("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),I("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[E("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),se("disabled",[K("pending",`
 color: var(--n-option-text-color-hover);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),K("active",`
 color: var(--n-option-text-color-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),K("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[$("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),K("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),K("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[$("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[K("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),$("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[K("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),$("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),$("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[K("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("dropdown-menu","pointer-events: all;")]),I("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),I("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),I("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),E(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),se("scrollable",`
 padding: var(--n-padding);
 `),K("scrollable",[$("content",`
 padding: var(--n-padding);
 `)])]),pr={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},mr=Object.keys(qe),gr=Object.assign(Object.assign(Object.assign({},qe),pr),te.props),br=V({name:"Dropdown",inheritAttrs:!1,props:gr,setup(e){const o=j(!1),t=Me(J(e,"show"),o),n=N(()=>{const{keyField:z,childrenField:U}=e;return je(e.options,{getKey(L){return L[z]},getDisabled(L){return L.disabled===!0},getIgnored(L){return L.type==="divider"||L.type==="render"},getChildren(L){return L[U]}})}),r=N(()=>n.value.treeNodes),i=j(null),a=j(null),s=j(null),l=N(()=>{var z,U,L;return(L=(U=(z=i.value)!==null&&z!==void 0?z:a.value)!==null&&U!==void 0?U:s.value)!==null&&L!==void 0?L:null}),d=N(()=>n.value.getPath(l.value).keyPath),u=N(()=>n.value.getPath(e.value).keyPath),f=ie(()=>e.keyboard&&t.value);sn({keydown:{ArrowUp:{prevent:!0,handler:S},ArrowRight:{prevent:!0,handler:x},ArrowDown:{prevent:!0,handler:k},ArrowLeft:{prevent:!0,handler:R},Enter:{prevent:!0,handler:A},Escape:T}},f);const{mergedClsPrefixRef:c,inlineThemeDisabled:g}=xe(e),b=te("Dropdown","-dropdown",vr,ut,e,c);oe(Xe,{labelFieldRef:J(e,"labelField"),childrenFieldRef:J(e,"childrenField"),renderLabelRef:J(e,"renderLabel"),renderIconRef:J(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:d,activeKeyPathRef:u,animatedRef:J(e,"animated"),mergedShowRef:t,nodePropsRef:J(e,"nodeProps"),renderOptionRef:J(e,"renderOption"),menuPropsRef:J(e,"menuProps"),doSelect:m,doUpdateShow:C}),fe(t,z=>{!e.animated&&!z&&p()});function m(z,U){const{onSelect:L}=e;L&&ee(L,z,U)}function C(z){const{"onUpdate:show":U,onUpdateShow:L}=e;U&&ee(U,z),L&&ee(L,z),o.value=z}function p(){i.value=null,a.value=null,s.value=null}function T(){C(!1)}function R(){P("left")}function x(){P("right")}function S(){P("up")}function k(){P("down")}function A(){const z=D();z?.isLeaf&&t.value&&(m(z.key,z.rawNode),C(!1))}function D(){var z;const{value:U}=n,{value:L}=l;return!U||L===null?null:(z=U.getNode(L))!==null&&z!==void 0?z:null}function P(z){const{value:U}=l,{value:{getFirstAvailableNode:L}}=n;let y=null;if(U===null){const W=L();W!==null&&(y=W.key)}else{const W=D();if(W){let _;switch(z){case"down":_=W.getNext();break;case"up":_=W.getPrev();break;case"right":_=W.getChild();break;case"left":_=W.getParent();break}_&&(y=_.key)}}y!==null&&(i.value=null,a.value=y)}const O=N(()=>{const{size:z,inverted:U}=e,{common:{cubicBezierEaseInOut:L},self:y}=b.value,{padding:W,dividerColor:_,borderRadius:G,optionOpacityDisabled:Q,[be("optionIconSuffixWidth",z)]:ne,[be("optionSuffixWidth",z)]:M,[be("optionIconPrefixWidth",z)]:H,[be("optionPrefixWidth",z)]:v,[be("fontSize",z)]:F,[be("optionHeight",z)]:Y,[be("optionIconSize",z)]:Je}=y,q={"--n-bezier":L,"--n-font-size":F,"--n-padding":W,"--n-border-radius":G,"--n-option-height":Y,"--n-option-prefix-width":v,"--n-option-icon-prefix-width":H,"--n-option-suffix-width":M,"--n-option-icon-suffix-width":ne,"--n-option-icon-size":Je,"--n-divider-color":_,"--n-option-opacity-disabled":Q};return U?(q["--n-color"]=y.colorInverted,q["--n-option-color-hover"]=y.optionColorHoverInverted,q["--n-option-color-active"]=y.optionColorActiveInverted,q["--n-option-text-color"]=y.optionTextColorInverted,q["--n-option-text-color-hover"]=y.optionTextColorHoverInverted,q["--n-option-text-color-active"]=y.optionTextColorActiveInverted,q["--n-option-text-color-child-active"]=y.optionTextColorChildActiveInverted,q["--n-prefix-color"]=y.prefixColorInverted,q["--n-suffix-color"]=y.suffixColorInverted,q["--n-group-header-text-color"]=y.groupHeaderTextColorInverted):(q["--n-color"]=y.color,q["--n-option-color-hover"]=y.optionColorHover,q["--n-option-color-active"]=y.optionColorActive,q["--n-option-text-color"]=y.optionTextColor,q["--n-option-text-color-hover"]=y.optionTextColorHover,q["--n-option-text-color-active"]=y.optionTextColorActive,q["--n-option-text-color-child-active"]=y.optionTextColorChildActive,q["--n-prefix-color"]=y.prefixColor,q["--n-suffix-color"]=y.suffixColor,q["--n-group-header-text-color"]=y.groupHeaderTextColor),q}),B=g?Ae("dropdown",N(()=>`${e.size[0]}${e.inverted?"i":""}`),O,e):void 0;return{mergedClsPrefix:c,mergedTheme:b,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&p()},doUpdateShow:C,cssVars:g?void 0:O,themeClass:B?.themeClass,onRender:B?.onRender}},render(){const e=(n,r,i,a,s)=>{var l;const{mergedClsPrefix:d,menuProps:u}=this;(l=this.onRender)===null||l===void 0||l.call(this);const f=u?.(void 0,this.tmNodes.map(g=>g.rawNode))||{},c={ref:zn(r),class:[n,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return h(mt,Ye(this.$attrs,c,f))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return h(ct,Object.assign({},Ne(this.$props,mr),t),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}});function yr(e){const{baseColor:o,textColor2:t,bodyColor:n,cardColor:r,dividerColor:i,actionColor:a,scrollbarColor:s,scrollbarColorHover:l,invertedColor:d}=e;return{textColor:t,textColorInverted:"#FFF",color:n,colorEmbedded:a,headerColor:r,headerColorInverted:d,footerColor:a,footerColorInverted:d,headerBorderColor:i,headerBorderColorInverted:d,footerBorderColor:i,footerBorderColorInverted:d,siderBorderColor:i,siderBorderColorInverted:d,siderColor:r,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:lo(n,s),siderToggleBarColorHover:lo(n,l),__invertScrollbar:"true"}}const xo=He({name:"Layout",common:Te,peers:{Scrollbar:Do},self:yr});function xr(e,o,t,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:o,itemColorActiveHoverInverted:o,itemColorActiveCollapsedInverted:o,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:n}}function wr(e){const{borderRadius:o,textColor3:t,primaryColor:n,textColor2:r,textColor1:i,fontSize:a,dividerColor:s,hoverColor:l,primaryColorHover:d}=e;return Object.assign({borderRadius:o,color:"#0000",groupTextColor:t,itemColorHover:l,itemColorActive:Ke(n,{alpha:.1}),itemColorActiveHover:Ke(n,{alpha:.1}),itemColorActiveCollapsed:Ke(n,{alpha:.1}),itemTextColor:r,itemTextColorHover:r,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:r,itemTextColorHoverHorizontal:d,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:d,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:r,arrowColorHover:r,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:a,dividerColor:s},xr("#BBB",n,"#FFF","#AAA"))}const Cr=He({name:"Menu",common:Te,peers:{Tooltip:ht,Dropdown:ut},self:wr}),gt=pe("n-layout-sider"),wo={type:String,default:"static"},Sr=I("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[I("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),K("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),zr={embedded:Boolean,position:wo,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},bt=pe("n-layout");function yt(e){return V({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},te.props),zr),setup(o){const t=j(null),n=j(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=xe(o),a=te("Layout","-layout",Sr,xo,o,r);function s(m,C){if(o.nativeScrollbar){const{value:p}=t;p&&(C===void 0?p.scrollTo(m):p.scrollTo(m,C))}else{const{value:p}=n;p&&p.scrollTo(m,C)}}oe(bt,o);let l=0,d=0;const u=m=>{var C;const p=m.target;l=p.scrollLeft,d=p.scrollTop,(C=o.onScroll)===null||C===void 0||C.call(o,m)};Yo(()=>{if(o.nativeScrollbar){const m=t.value;m&&(m.scrollTop=d,m.scrollLeft=l)}});const f={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},c={scrollTo:s},g=N(()=>{const{common:{cubicBezierEaseInOut:m},self:C}=a.value;return{"--n-bezier":m,"--n-color":o.embedded?C.colorEmbedded:C.color,"--n-text-color":C.textColor}}),b=i?Ae("layout",N(()=>o.embedded?"e":""),g,o):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:n,hasSiderStyle:f,mergedTheme:a,handleNativeElScroll:u,cssVars:i?void 0:g,themeClass:b?.themeClass,onRender:b?.onRender},c)},render(){var o;const{mergedClsPrefix:t,hasSider:n}=this;(o=this.onRender)===null||o===void 0||o.call(this);const r=n?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return h("div",{class:i,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):h(Go,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const Ir=yt(!1),Ar=yt(!0),kr=I("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[K("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),K("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Pr={position:wo,inverted:Boolean,bordered:{type:Boolean,default:!1}},$r=V({name:"LayoutHeader",props:Object.assign(Object.assign({},te.props),Pr),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=xe(e),n=te("Layout","-layout-header",kr,xo,e,o),r=N(()=>{const{common:{cubicBezierEaseInOut:a},self:s}=n.value,l={"--n-bezier":a};return e.inverted?(l["--n-color"]=s.headerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.headerBorderColorInverted):(l["--n-color"]=s.headerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.headerBorderColor),l}),i=t?Ae("layout-header",N(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:r,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Nr=I("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[K("bordered",[$("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),$("left-placement",[K("bordered",[$("border",`
 right: 0;
 `)])]),K("right-placement",`
 justify-content: flex-start;
 `,[K("bordered",[$("border",`
 left: 0;
 `)]),K("collapsed",[I("layout-toggle-button",[I("base-icon",`
 transform: rotate(180deg);
 `)]),I("layout-toggle-bar",[E("&:hover",[$("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),$("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),I("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[I("base-icon",`
 transform: rotate(0);
 `)]),I("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[E("&:hover",[$("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),$("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),K("collapsed",[I("layout-toggle-bar",[E("&:hover",[$("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),$("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),I("layout-toggle-button",[I("base-icon",`
 transform: rotate(0);
 `)])]),I("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[I("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),I("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[$("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),$("bottom",`
 position: absolute;
 top: 34px;
 `),E("&:hover",[$("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),$("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),$("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),E("&:hover",[$("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),$("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),I("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),K("show-content",[I("layout-sider-scroll-container",{opacity:1})]),K("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),_r=V({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},h("div",{class:`${e}-layout-toggle-bar__top`}),h("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Mr=V({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},h(qo,{clsPrefix:e},{default:()=>h(Xo,null)}))}}),Or={position:wo,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Hr=V({name:"LayoutSider",props:Object.assign(Object.assign({},te.props),Or),setup(e){const o=X(bt),t=j(null),n=j(null),r=j(e.defaultCollapsed),i=Me(J(e,"collapsed"),r),a=N(()=>Ce(i.value?e.collapsedWidth:e.width)),s=N(()=>e.collapseMode!=="transform"?{}:{minWidth:Ce(e.width)}),l=N(()=>o?o.siderPlacement:"left");function d(S,k){if(e.nativeScrollbar){const{value:A}=t;A&&(k===void 0?A.scrollTo(S):A.scrollTo(S,k))}else{const{value:A}=n;A&&A.scrollTo(S,k)}}function u(){const{"onUpdate:collapsed":S,onUpdateCollapsed:k,onExpand:A,onCollapse:D}=e,{value:P}=i;k&&ee(k,!P),S&&ee(S,!P),r.value=!P,P?A&&ee(A):D&&ee(D)}let f=0,c=0;const g=S=>{var k;const A=S.target;f=A.scrollLeft,c=A.scrollTop,(k=e.onScroll)===null||k===void 0||k.call(e,S)};Yo(()=>{if(e.nativeScrollbar){const S=t.value;S&&(S.scrollTop=c,S.scrollLeft=f)}}),oe(gt,{collapsedRef:i,collapseModeRef:J(e,"collapseMode")});const{mergedClsPrefixRef:b,inlineThemeDisabled:m}=xe(e),C=te("Layout","-layout-sider",Nr,xo,e,b);function p(S){var k,A;S.propertyName==="max-width"&&(i.value?(k=e.onAfterLeave)===null||k===void 0||k.call(e):(A=e.onAfterEnter)===null||A===void 0||A.call(e))}const T={scrollTo:d},R=N(()=>{const{common:{cubicBezierEaseInOut:S},self:k}=C.value,{siderToggleButtonColor:A,siderToggleButtonBorder:D,siderToggleBarColor:P,siderToggleBarColorHover:O}=k,B={"--n-bezier":S,"--n-toggle-button-color":A,"--n-toggle-button-border":D,"--n-toggle-bar-color":P,"--n-toggle-bar-color-hover":O};return e.inverted?(B["--n-color"]=k.siderColorInverted,B["--n-text-color"]=k.textColorInverted,B["--n-border-color"]=k.siderBorderColorInverted,B["--n-toggle-button-icon-color"]=k.siderToggleButtonIconColorInverted,B.__invertScrollbar=k.__invertScrollbar):(B["--n-color"]=k.siderColor,B["--n-text-color"]=k.textColor,B["--n-border-color"]=k.siderBorderColor,B["--n-toggle-button-icon-color"]=k.siderToggleButtonIconColor),B}),x=m?Ae("layout-sider",N(()=>e.inverted?"a":"b"),R,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:n,mergedClsPrefix:b,mergedTheme:C,styleMaxWidth:a,mergedCollapsed:i,scrollContainerStyle:s,siderPlacement:l,handleNativeElScroll:g,handleTransitionend:p,handleTriggerClick:u,inlineThemeDisabled:m,cssVars:R,themeClass:x?.themeClass,onRender:x?.onRender},T)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Ce(this.width)}]},this.nativeScrollbar?h("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):h(Go,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?h(_r,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):h(Mr,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?h("div",{class:`${o}-layout-sider__border`}):null)}}),Ee=pe("n-menu"),xt=pe("n-submenu"),Co=pe("n-menu-item-group"),Ro=[E("&::before","background-color: var(--n-item-color-hover);"),$("arrow",`
 color: var(--n-arrow-color-hover);
 `),$("icon",`
 color: var(--n-item-icon-color-hover);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[E("a",`
 color: var(--n-item-text-color-hover);
 `),$("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Fo=[$("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),I("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[E("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),$("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Tr=E([I("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[K("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[I("submenu","margin: 0;"),I("menu-item","margin: 0;"),I("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[E("&::before","display: none;"),K("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),I("menu-item-content",[K("selected",[$("icon","color: var(--n-item-icon-color-active-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[E("a","color: var(--n-item-text-color-active-horizontal);"),$("extra","color: var(--n-item-text-color-active-horizontal);")])]),K("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[E("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),$("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),$("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),se("disabled",[se("selected, child-active",[E("&:focus-within",Fo)]),K("selected",[ye(null,[$("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[E("a","color: var(--n-item-text-color-active-hover-horizontal);"),$("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),K("child-active",[ye(null,[$("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[E("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),$("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ye("border-bottom: 2px solid var(--n-border-color-horizontal);",Fo)]),I("menu-item-content-header",[E("a","color: var(--n-item-text-color-horizontal);")])])]),se("responsive",[I("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),K("collapsed",[I("menu-item-content",[K("selected",[E("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),I("menu-item-content-header","opacity: 0;"),$("arrow","opacity: 0;"),$("icon","color: var(--n-item-icon-color-collapsed);")])]),I("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),I("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[E("> *","z-index: 1;"),E("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),K("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),K("collapsed",[$("arrow","transform: rotate(0);")]),K("selected",[E("&::before","background-color: var(--n-item-color-active);"),$("arrow","color: var(--n-arrow-color-active);"),$("icon","color: var(--n-item-icon-color-active);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[E("a","color: var(--n-item-text-color-active);"),$("extra","color: var(--n-item-text-color-active);")])]),K("child-active",[I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[E("a",`
 color: var(--n-item-text-color-child-active);
 `),$("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),$("arrow",`
 color: var(--n-arrow-color-child-active);
 `),$("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),se("disabled",[se("selected, child-active",[E("&:focus-within",Ro)]),K("selected",[ye(null,[$("arrow","color: var(--n-arrow-color-active-hover);"),$("icon","color: var(--n-item-icon-color-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[E("a","color: var(--n-item-text-color-active-hover);"),$("extra","color: var(--n-item-text-color-active-hover);")])])]),K("child-active",[ye(null,[$("arrow","color: var(--n-arrow-color-child-active-hover);"),$("icon","color: var(--n-item-icon-color-child-active-hover);"),I("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[E("a","color: var(--n-item-text-color-child-active-hover);"),$("extra","color: var(--n-item-text-color-child-active-hover);")])])]),K("selected",[ye(null,[E("&::before","background-color: var(--n-item-color-active-hover);")])]),ye(null,Ro)]),$("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),$("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),I("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[E("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),$("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),I("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[I("menu-item-content",`
 height: var(--n-item-height);
 `),I("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Vt({duration:".2s"})])]),I("menu-item-group",[I("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),I("menu-tooltip",[E("a",`
 color: inherit;
 text-decoration: none;
 `)]),I("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ye(e,o){return[K("hover",e,o),E("&:hover",e,o)]}const wt=V({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=X(Ee);return{menuProps:o,style:N(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:N(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:n,renderExtra:r,expandIcon:i}}=this,a=t?t(o.rawNode):ce(this.icon);return h("div",{onClick:s=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&h("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),h("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(o.rawNode):ce(this.title),this.extra||r?h("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(o.rawNode):ce(this.extra)):null),this.showArrow?h(qo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):h(In,null)}):null)}}),Fe=8;function So(e){const o=X(Ee),{props:t,mergedCollapsedRef:n}=o,r=X(xt,null),i=X(Co,null),a=N(()=>t.mode==="horizontal"),s=N(()=>a.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=N(()=>{var c;return Math.max((c=t.collapsedIconSize)!==null&&c!==void 0?c:t.iconSize,t.iconSize)}),d=N(()=>{var c;return!a.value&&e.root&&n.value&&(c=t.collapsedIconSize)!==null&&c!==void 0?c:t.iconSize}),u=N(()=>{if(a.value)return;const{collapsedWidth:c,indent:g,rootIndent:b}=t,{root:m,isGroup:C}=e,p=b===void 0?g:b;return m?n.value?c/2-l.value/2:p:i&&typeof i.paddingLeftRef.value=="number"?g/2+i.paddingLeftRef.value:r&&typeof r.paddingLeftRef.value=="number"?(C?g/2:g)+r.paddingLeftRef.value:0}),f=N(()=>{const{collapsedWidth:c,indent:g,rootIndent:b}=t,{value:m}=l,{root:C}=e;return a.value||!C||!n.value?Fe:(b===void 0?g:b)+m+Fe-(c+m)/2});return{dropdownPlacement:s,activeIconSize:d,maxIconSize:l,paddingLeft:u,iconMarginRight:f,NMenu:o,NSubmenu:r,NMenuOptionGroup:i}}const zo={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Br=V({name:"MenuDivider",setup(){const e=X(Ee),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:h("div",{class:`${o.value}-menu-divider`})}}),Ct=Object.assign(Object.assign({},zo),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Er=mo(Ct),Rr=V({name:"MenuOption",props:Ct,setup(e){const o=So(e),{NSubmenu:t,NMenu:n,NMenuOptionGroup:r}=o,{props:i,mergedClsPrefixRef:a,mergedCollapsedRef:s}=n,l=t?t.mergedDisabledRef:r?r.mergedDisabledRef:{value:!1},d=N(()=>l.value||e.disabled);function u(c){const{onClick:g}=e;g&&g(c)}function f(c){d.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),u(c))}return{mergedClsPrefix:a,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:i,dropdownEnabled:ie(()=>e.root&&s.value&&i.mode!=="horizontal"&&!d.value),selected:ie(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r?.(t.rawNode);return h("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i?.class]}),h(sr,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):ce(this.title),trigger:()=>h(wt,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),St=Object.assign(Object.assign({},zo),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Fr=mo(St),Kr=V({name:"MenuOptionGroup",props:St,setup(e){const o=So(e),{NSubmenu:t}=o,n=N(()=>t?.mergedDisabledRef.value?!0:e.tmNode.disabled);oe(Co,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:n});const{mergedClsPrefixRef:r,props:i}=X(Ee);return function(){const{value:a}=r,s=o.paddingLeft.value,{nodeProps:l}=i,d=l?.(e.tmNode.rawNode);return h("div",{class:`${a}-menu-item-group`,role:"group"},h("div",Object.assign({},d,{class:[`${a}-menu-item-group-title`,d?.class],style:[d?.style||"",s!==void 0?`padding-left: ${s}px;`:""]}),ce(e.title),e.extra?h(po,null," ",ce(e.extra)):null),h("div",null,e.tmNodes.map(u=>Io(u,i))))}}});function co(e){return e.type==="divider"||e.type==="render"}function Lr(e){return e.type==="divider"}function Io(e,o){const{rawNode:t}=e,{show:n}=t;if(n===!1)return null;if(co(t))return Lr(t)?h(Br,Object.assign({key:e.key},t.props)):null;const{labelField:r}=o,{key:i,level:a,isGroup:s}=e,l=Object.assign(Object.assign({},t),{title:t.title||t[r],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?h(Kr,Ne(l,Fr,{tmNode:e,tmNodes:e.children,key:i})):h(uo,Ne(l,jr,{key:i,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):h(Rr,Ne(l,Er,{key:i,tmNode:e}))}const zt=Object.assign(Object.assign({},zo),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),jr=mo(zt),uo=V({name:"Submenu",props:zt,setup(e){const o=So(e),{NMenu:t,NSubmenu:n}=o,{props:r,mergedCollapsedRef:i,mergedThemeRef:a}=t,s=N(()=>{const{disabled:c}=e;return n?.mergedDisabledRef.value||r.disabled?!0:c}),l=j(!1);oe(xt,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:s}),oe(Co,null);function d(){const{onClick:c}=e;c&&c()}function u(){s.value||(i.value||t.toggleExpand(e.internalKey),d())}function f(c){l.value=c}return{menuProps:r,mergedTheme:a,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:l,paddingLeft:o.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:ie(()=>{var c;return(c=e.virtualChildActive)!==null&&c!==void 0?c:t.activePathRef.value.includes(e.internalKey)}),collapsed:N(()=>r.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:N(()=>!s.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:f,handleClick:u}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{const{isHorizontal:a,paddingLeft:s,collapsed:l,mergedDisabled:d,maxIconSize:u,activeIconSize:f,title:c,childActive:g,icon:b,handleClick:m,menuProps:{nodeProps:C},dropdownShow:p,iconMarginRight:T,tmNode:R,mergedClsPrefix:x,isEllipsisPlaceholder:S,extra:k}=this,A=C?.(R.rawNode);return h("div",Object.assign({},A,{class:[`${x}-menu-item`,A?.class],role:"menuitem"}),h(wt,{tmNode:R,paddingLeft:s,collapsed:l,disabled:d,iconMarginRight:T,maxIconSize:u,activeIconSize:f,title:c,extra:k,showArrow:!a,childActive:g,clsPrefix:x,icon:b,hover:p,onClick:m,isEllipsisPlaceholder:S}))},i=()=>h(Ut,null,{default:()=>{const{tmNodes:a,collapsed:s}=this;return s?null:h("div",{class:`${o}-submenu-children`,role:"menu"},a.map(l=>Io(l,this.menuProps)))}});return this.root?h(br,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>h("div",{class:`${o}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):h("div",{class:`${o}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),Dr=Object.assign(Object.assign({},te.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Wr=V({name:"Menu",inheritAttrs:!1,props:Dr,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=xe(e),n=te("Menu","-menu",Tr,Cr,e,o),r=X(gt,null),i=N(()=>{var M;const{collapsed:H}=e;if(H!==void 0)return H;if(r){const{collapseModeRef:v,collapsedRef:F}=r;if(v.value==="width")return(M=F.value)!==null&&M!==void 0?M:!1}return!1}),a=N(()=>{const{keyField:M,childrenField:H,disabledField:v}=e;return je(e.items||e.options,{getIgnored(F){return co(F)},getChildren(F){return F[H]},getDisabled(F){return F[v]},getKey(F){var Y;return(Y=F[M])!==null&&Y!==void 0?Y:F.name}})}),s=N(()=>new Set(a.value.treeNodes.map(M=>M.key))),{watchProps:l}=e,d=j(null);l?.includes("defaultValue")?De(()=>{d.value=e.defaultValue}):d.value=e.defaultValue;const u=J(e,"value"),f=Me(u,d),c=j([]),g=()=>{c.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(f.value,{includeSelf:!1}).keyPath};l?.includes("defaultExpandedKeys")?De(g):g();const b=Qo(e,["expandedNames","expandedKeys"]),m=Me(b,c),C=N(()=>a.value.treeNodes),p=N(()=>a.value.getPath(f.value).keyPath);oe(Ee,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:f,mergedExpandedKeysRef:m,activePathRef:p,mergedClsPrefixRef:o,isHorizontalRef:N(()=>e.mode==="horizontal"),invertedRef:J(e,"inverted"),doSelect:T,toggleExpand:x});function T(M,H){const{"onUpdate:value":v,onUpdateValue:F,onSelect:Y}=e;F&&ee(F,M,H),v&&ee(v,M,H),Y&&ee(Y,M,H),d.value=M}function R(M){const{"onUpdate:expandedKeys":H,onUpdateExpandedKeys:v,onExpandedNamesChange:F,onOpenNamesChange:Y}=e;H&&ee(H,M),v&&ee(v,M),F&&ee(F,M),Y&&ee(Y,M),c.value=M}function x(M){const H=Array.from(m.value),v=H.findIndex(F=>F===M);if(~v)H.splice(v,1);else{if(e.accordion&&s.value.has(M)){const F=H.findIndex(Y=>s.value.has(Y));F>-1&&H.splice(F,1)}H.push(M)}R(H)}const S=M=>{const H=a.value.getPath(M??f.value,{includeSelf:!1}).keyPath;if(!H.length)return;const v=Array.from(m.value),F=new Set([...v,...H]);e.accordion&&s.value.forEach(Y=>{F.has(Y)&&!H.includes(Y)&&F.delete(Y)}),R(Array.from(F))},k=N(()=>{const{inverted:M}=e,{common:{cubicBezierEaseInOut:H},self:v}=n.value,{borderRadius:F,borderColorHorizontal:Y,fontSize:Je,itemHeight:q,dividerColor:It}=v,w={"--n-divider-color":It,"--n-bezier":H,"--n-font-size":Je,"--n-border-color-horizontal":Y,"--n-border-radius":F,"--n-item-height":q};return M?(w["--n-group-text-color"]=v.groupTextColorInverted,w["--n-color"]=v.colorInverted,w["--n-item-text-color"]=v.itemTextColorInverted,w["--n-item-text-color-hover"]=v.itemTextColorHoverInverted,w["--n-item-text-color-active"]=v.itemTextColorActiveInverted,w["--n-item-text-color-child-active"]=v.itemTextColorChildActiveInverted,w["--n-item-text-color-child-active-hover"]=v.itemTextColorChildActiveInverted,w["--n-item-text-color-active-hover"]=v.itemTextColorActiveHoverInverted,w["--n-item-icon-color"]=v.itemIconColorInverted,w["--n-item-icon-color-hover"]=v.itemIconColorHoverInverted,w["--n-item-icon-color-active"]=v.itemIconColorActiveInverted,w["--n-item-icon-color-active-hover"]=v.itemIconColorActiveHoverInverted,w["--n-item-icon-color-child-active"]=v.itemIconColorChildActiveInverted,w["--n-item-icon-color-child-active-hover"]=v.itemIconColorChildActiveHoverInverted,w["--n-item-icon-color-collapsed"]=v.itemIconColorCollapsedInverted,w["--n-item-text-color-horizontal"]=v.itemTextColorHorizontalInverted,w["--n-item-text-color-hover-horizontal"]=v.itemTextColorHoverHorizontalInverted,w["--n-item-text-color-active-horizontal"]=v.itemTextColorActiveHorizontalInverted,w["--n-item-text-color-child-active-horizontal"]=v.itemTextColorChildActiveHorizontalInverted,w["--n-item-text-color-child-active-hover-horizontal"]=v.itemTextColorChildActiveHoverHorizontalInverted,w["--n-item-text-color-active-hover-horizontal"]=v.itemTextColorActiveHoverHorizontalInverted,w["--n-item-icon-color-horizontal"]=v.itemIconColorHorizontalInverted,w["--n-item-icon-color-hover-horizontal"]=v.itemIconColorHoverHorizontalInverted,w["--n-item-icon-color-active-horizontal"]=v.itemIconColorActiveHorizontalInverted,w["--n-item-icon-color-active-hover-horizontal"]=v.itemIconColorActiveHoverHorizontalInverted,w["--n-item-icon-color-child-active-horizontal"]=v.itemIconColorChildActiveHorizontalInverted,w["--n-item-icon-color-child-active-hover-horizontal"]=v.itemIconColorChildActiveHoverHorizontalInverted,w["--n-arrow-color"]=v.arrowColorInverted,w["--n-arrow-color-hover"]=v.arrowColorHoverInverted,w["--n-arrow-color-active"]=v.arrowColorActiveInverted,w["--n-arrow-color-active-hover"]=v.arrowColorActiveHoverInverted,w["--n-arrow-color-child-active"]=v.arrowColorChildActiveInverted,w["--n-arrow-color-child-active-hover"]=v.arrowColorChildActiveHoverInverted,w["--n-item-color-hover"]=v.itemColorHoverInverted,w["--n-item-color-active"]=v.itemColorActiveInverted,w["--n-item-color-active-hover"]=v.itemColorActiveHoverInverted,w["--n-item-color-active-collapsed"]=v.itemColorActiveCollapsedInverted):(w["--n-group-text-color"]=v.groupTextColor,w["--n-color"]=v.color,w["--n-item-text-color"]=v.itemTextColor,w["--n-item-text-color-hover"]=v.itemTextColorHover,w["--n-item-text-color-active"]=v.itemTextColorActive,w["--n-item-text-color-child-active"]=v.itemTextColorChildActive,w["--n-item-text-color-child-active-hover"]=v.itemTextColorChildActiveHover,w["--n-item-text-color-active-hover"]=v.itemTextColorActiveHover,w["--n-item-icon-color"]=v.itemIconColor,w["--n-item-icon-color-hover"]=v.itemIconColorHover,w["--n-item-icon-color-active"]=v.itemIconColorActive,w["--n-item-icon-color-active-hover"]=v.itemIconColorActiveHover,w["--n-item-icon-color-child-active"]=v.itemIconColorChildActive,w["--n-item-icon-color-child-active-hover"]=v.itemIconColorChildActiveHover,w["--n-item-icon-color-collapsed"]=v.itemIconColorCollapsed,w["--n-item-text-color-horizontal"]=v.itemTextColorHorizontal,w["--n-item-text-color-hover-horizontal"]=v.itemTextColorHoverHorizontal,w["--n-item-text-color-active-horizontal"]=v.itemTextColorActiveHorizontal,w["--n-item-text-color-child-active-horizontal"]=v.itemTextColorChildActiveHorizontal,w["--n-item-text-color-child-active-hover-horizontal"]=v.itemTextColorChildActiveHoverHorizontal,w["--n-item-text-color-active-hover-horizontal"]=v.itemTextColorActiveHoverHorizontal,w["--n-item-icon-color-horizontal"]=v.itemIconColorHorizontal,w["--n-item-icon-color-hover-horizontal"]=v.itemIconColorHoverHorizontal,w["--n-item-icon-color-active-horizontal"]=v.itemIconColorActiveHorizontal,w["--n-item-icon-color-active-hover-horizontal"]=v.itemIconColorActiveHoverHorizontal,w["--n-item-icon-color-child-active-horizontal"]=v.itemIconColorChildActiveHorizontal,w["--n-item-icon-color-child-active-hover-horizontal"]=v.itemIconColorChildActiveHoverHorizontal,w["--n-arrow-color"]=v.arrowColor,w["--n-arrow-color-hover"]=v.arrowColorHover,w["--n-arrow-color-active"]=v.arrowColorActive,w["--n-arrow-color-active-hover"]=v.arrowColorActiveHover,w["--n-arrow-color-child-active"]=v.arrowColorChildActive,w["--n-arrow-color-child-active-hover"]=v.arrowColorChildActiveHover,w["--n-item-color-hover"]=v.itemColorHover,w["--n-item-color-active"]=v.itemColorActive,w["--n-item-color-active-hover"]=v.itemColorActiveHover,w["--n-item-color-active-collapsed"]=v.itemColorActiveCollapsed),w}),A=t?Ae("menu",N(()=>e.inverted?"a":"b"),k,e):void 0,D=Yt(),P=j(null),O=j(null);let B=!0;const z=()=>{var M;B?B=!1:(M=P.value)===null||M===void 0||M.sync({showAllItemsBeforeCalculate:!0})};function U(){return document.getElementById(D)}const L=j(-1);function y(M){L.value=e.options.length-M}function W(M){M||(L.value=-1)}const _=N(()=>{const M=L.value;return{children:M===-1?[]:e.options.slice(M)}}),G=N(()=>{const{childrenField:M,disabledField:H,keyField:v}=e;return je([_.value],{getIgnored(F){return co(F)},getChildren(F){return F[M]},getDisabled(F){return F[H]},getKey(F){var Y;return(Y=F[v])!==null&&Y!==void 0?Y:F.name}})}),Q=N(()=>je([{}]).treeNodes[0]);function ne(){var M;if(L.value===-1)return h(uo,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Q.value,domId:D,isEllipsisPlaceholder:!0});const H=G.value.treeNodes[0],v=p.value,F=!!(!((M=H.children)===null||M===void 0)&&M.some(Y=>v.includes(Y.key)));return h(uo,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:F,tmNode:H,domId:D,rawNodes:H.rawNode.children||[],tmNodes:H.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:o,controlledExpandedKeys:b,uncontrolledExpanededKeys:c,mergedExpandedKeys:m,uncontrolledValue:d,mergedValue:f,activePath:p,tmNodes:C,mergedTheme:n,mergedCollapsed:i,cssVars:t?void 0:k,themeClass:A?.themeClass,overflowRef:P,counterRef:O,updateCounter:()=>{},onResize:z,onUpdateOverflow:W,onUpdateCount:y,renderCounter:ne,getCounter:U,onRender:A?.onRender,showOption:S,deriveResponsiveState:z}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:n}=this;n?.();const r=()=>this.tmNodes.map(l=>Io(l,this.$props)),a=o==="horizontal"&&this.responsive,s=()=>h("div",Ye(this.$attrs,{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,a&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),a?h(Cn,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:r,counter:this.renderCounter}):r());return a?h(Gt,{onResize:this.onResize},{default:s}):s()}}),Vr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ur=V({name:"MenuFoldOutlined",render:function(o,t){return ke(),Be("svg",Vr,t[0]||(t[0]=[ve("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z",fill:"currentColor"},null,-1)]))}}),Gr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Yr=V({name:"MenuUnfoldOutlined",render:function(o,t){return ke(),Be("svg",Gr,t[0]||(t[0]=[ve("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z",fill:"currentColor"},null,-1)]))}}),qr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Xr=V({name:"Calendar",render:function(o,t){return ke(),Be("svg",qr,t[0]||(t[0]=[ve("path",{d:"M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4z",fill:"currentColor"},null,-1),ve("path",{d:"M32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3zm344-208a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24z",fill:"currentColor"},null,-1)]))}}),Jr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Qr=V({name:"Home",render:function(o,t){return ke(),Be("svg",Jr,t[0]||(t[0]=[ve("path",{d:"M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z",fill:"currentColor"},null,-1),ve("path",{d:"M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z",fill:"currentColor"},null,-1)]))}}),Zr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ei=V({name:"Magnet",render:function(o,t){return ke(),Be("svg",Zr,t[0]||(t[0]=[qt('<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M191.98 463.79v-48" fill="currentColor"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M90.16 421.61l33.94-33.94" fill="currentColor"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M47.98 319.79h48" fill="currentColor"></path><path d="M267.56 312.32l-31.11 31.11a16 16 0 0 0 0 22.63l45.26 45.25a16 16 0 0 0 22.62 0l31.12-31.11a4 4 0 0 0 0-5.66l-62.23-62.22a4 4 0 0 0-5.66 0z" fill="currentColor"></path><path d="M131.8 176.55l-31.11 31.12a16 16 0 0 0 0 22.62l45.25 45.26a16 16 0 0 0 22.63 0l31.11-31.11a4 4 0 0 0 0-5.66l-62.22-62.23a4 4 0 0 0-5.66 0z" fill="currentColor"></path><path d="M428.85 83.28a144 144 0 0 0-203.71-.06l-65.06 65.05a4 4 0 0 0 0 5.66l62.23 62.22a4 4 0 0 0 5.66 0l65-65.05a48 48 0 0 1 68.46.59c18.3 18.92 17.47 49.24-1.14 67.85L295.85 284a4 4 0 0 0 0 5.66l62.22 62.23a4 4 0 0 0 5.66 0l64.08-64.08c56.37-56.34 57.37-148.13 1.04-204.53z" fill="currentColor"></path>',6)]))}}),oi="/assets/logo-ChQYQ98g.png",ti=["src"],ni={class:"router-inner"},ri=V({name:"DefaultLayout",__name:"default",setup(e){const o=Xt(),t=Jt(),n=j(!1),r=j(null);function i(){o.push({path:"/"})}function a(u){return()=>h(Le,null,{default:()=>h(u)})}const s=[{label:()=>h(No,{to:{path:"/calendar"}},{default:()=>"日历"}),key:"calendar",icon:a(Xr),path:"/calendar"},{label:()=>h(No,{to:{path:"/torrent2magnet"}},{default:()=>"种子转磁力链(torrent转magnet)"}),key:"torrent2magnet",icon:a(ei),path:"/torrent2magnet"}],l=Qt("layoutScroll");fe(()=>t.path,u=>{s.forEach(f=>{f.path===u?r.value=f.key:r.value=null}),vo(()=>{l.value?.scrollTo({top:0,left:0,behavior:"smooth"})})},{immediate:!0});const d=N(()=>n.value?Yr:Ur);return(u,f)=>{const c=Wr,g=Hr,b=$r,m=Zt("RouterView"),C=Ar,p=Ir;return ke(),en(p,{class:"layout","has-sider":""},{default:Pe(()=>[me(g,{class:"sider","native-scrollbar":!1,"collapse-mode":"width",width:240,bordered:"","collapsed-width":48,"show-trigger":"arrow-circle",collapsed:le(n),"content-style":le(n)?"padding-top: 0;":"padding-top: 240px;",onCollapse:f[1]||(f[1]=T=>n.value=!0),onExpand:f[2]||(f[2]=T=>n.value=!1)},{default:Pe(()=>[Oe(ve("div",{class:"logo",onClick:i},[ve("img",{src:le(oi),width:"240",height:"240"},null,8,ti)],512),[[Vo,!le(n)]]),me(c,{value:le(r),"onUpdate:value":f[0]||(f[0]=T=>on(r)?r.value=T:null),collapsed:le(n),"collapsed-width":48,"collapsed-icon-size":22,options:s},null,8,["value","collapsed"])]),_:1},8,["collapsed","content-style"]),me(C,{class:"content"},{default:Pe(()=>[me(b,{bordered:"",class:"header"},{default:Pe(()=>[me(le(Le),{class:"menu-icon",size:"24",component:le(d),onClick:f[3]||(f[3]=T=>n.value=!le(n))},null,8,["component"]),me(le(Le),{class:"menu-icon",size:"24",component:le(Qr),onClick:i},null,8,["component"])]),_:1}),me(C,{ref_key:"layoutScroll",ref:l,class:"content-inner","content-style":"width: 100%;"},{default:Pe(()=>[ve("div",ni,[me(m)])]),_:1},512)]),_:1})]),_:1})}}}),si=tn(ri,[["__scopeId","data-v-b730f78a"]]);export{si as default};
