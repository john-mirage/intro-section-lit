var Ee=Object.defineProperty,Se=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var ie=(s,e,t)=>e in s?Ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,H=(s,e)=>{for(var t in e||(e={}))ke.call(e,t)&&ie(s,t,e[t]);if(te)for(var t of te(e))Pe.call(e,t)&&ie(s,t,e[t]);return s},M=(s,e)=>Se(s,Ce(e));const Oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};Oe();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),oe=new Map;class ve{constructor(e,t){if(this._$cssResult$=!0,t!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=oe.get(this.cssText);return Q&&e===void 0&&(oe.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const ze=s=>new ve(typeof s=="string"?s:s+"",X),z=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((o,i,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new ve(t,X)},De=(s,e)=>{Q?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const o=document.createElement("style"),i=window.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,s.appendChild(o)})},se=Q?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return ze(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const re=window.trustedTypes,Te=re?re.emptyScript:"",ne=window.reactiveElementPolyfillSupport,J={toAttribute(s,e){switch(e){case Boolean:s=s?Te:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},be=(s,e)=>e!==s&&(e==e||s==s),Z={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:be};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,o)=>{const i=this._$Eh(o,t);i!==void 0&&(this._$Eu.set(i,o),e.push(i))}),e}static createProperty(e,t=Z){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of o)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)t.unshift(se(i))}else e!==void 0&&t.push(se(e));return t}static _$Eh(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return De(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ES(e,t,o=Z){var i,r;const n=this.constructor._$Eh(e,o);if(n!==void 0&&o.reflect===!0){const d=((r=(i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&r!==void 0?r:J.toAttribute)(t,o.type);this._$Ei=e,d==null?this.removeAttribute(n):this.setAttribute(n,d),this._$Ei=null}}_$AK(e,t){var o,i,r;const n=this.constructor,d=n._$Eu.get(e);if(d!==void 0&&this._$Ei!==d){const l=n.getPropertyOptions(d),a=l.converter,u=(r=(i=(o=a)===null||o===void 0?void 0:o.fromAttribute)!==null&&i!==void 0?i:typeof a=="function"?a:null)!==null&&r!==void 0?r:J.fromAttribute;this._$Ei=d,this[d]=u(t,l.type),this._$Ei=null}}requestUpdate(e,t,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||be)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,r)=>this[r]=i),this._$Et=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(o)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$ES(o,this[o],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},ne==null||ne({ReactiveElement:f}),((j=globalThis.reactiveElementVersions)!==null&&j!==void 0?j:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const w=globalThis.trustedTypes,le=w?w.createPolicy("lit-html",{createHTML:s=>s}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,ge="?"+b,Ue=`<${ge}>`,$=document,k=(s="")=>$.createComment(s),P=s=>s===null||typeof s!="object"&&typeof s!="function",me=Array.isArray,He=s=>{var e;return me(s)||typeof((e=s)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,de=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,he=/'/g,ce=/"/g,fe=/^(?:script|style|textarea|title)$/i,Me=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),E=Me(1),m=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pe=new WeakMap,Le=(s,e,t)=>{var o,i;const r=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:e;let n=r._$litPart$;if(n===void 0){const d=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=n=new D(e.insertBefore(k(),d),d,void 0,t!=null?t:{})}return n._$AI(s),n},x=$.createTreeWalker($,129,null,!1),Ne=(s,e)=>{const t=s.length-1,o=[];let i,r=e===2?"<svg>":"",n=C;for(let l=0;l<t;l++){const a=s[l];let u,h,c=-1,_=0;for(;_<a.length&&(n.lastIndex=_,h=n.exec(a),h!==null);)_=n.lastIndex,n===C?h[1]==="!--"?n=ae:h[1]!==void 0?n=de:h[2]!==void 0?(fe.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=g):h[3]!==void 0&&(n=g):n===g?h[0]===">"?(n=i!=null?i:C,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,u=h[1],n=h[3]===void 0?g:h[3]==='"'?ce:he):n===ce||n===he?n=g:n===ae||n===de?n=C:(n=g,i=void 0);const T=n===g&&s[l+1].startsWith("/>")?" ":"";r+=n===C?a+Ue:c>=0?(o.push(u),a.slice(0,c)+"$lit$"+a.slice(c)+b+T):a+b+(c===-2?(o.push(void 0),l):T)}const d=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[le!==void 0?le.createHTML(d):d,o]};class O{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,n=0;const d=e.length-1,l=this.parts,[a,u]=Ne(e,t);if(this.el=O.createElement(a,o),x.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=x.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(b)){const _=u[n++];if(h.push(c),_!==void 0){const T=i.getAttribute(_.toLowerCase()+"$lit$").split(b),U=/([.?@])?(.*)/.exec(_);l.push({type:1,index:r,name:U[2],strings:T,ctor:U[1]==="."?Re:U[1]==="?"?Ve:U[1]==="@"?je:R})}else l.push({type:6,index:r})}for(const c of h)i.removeAttribute(c)}if(fe.test(i.tagName)){const h=i.textContent.split(b),c=h.length-1;if(c>0){i.textContent=w?w.emptyScript:"";for(let _=0;_<c;_++)i.append(h[_],k()),x.nextNode(),l.push({type:2,index:++r});i.append(h[c],k())}}}else if(i.nodeType===8)if(i.data===ge)l.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(b,h+1))!==-1;)l.push({type:7,index:r}),h+=b.length-1}r++}}static createElement(e,t){const o=$.createElement("template");return o.innerHTML=e,o}}function y(s,e,t=s,o){var i,r,n,d;if(e===m)return e;let l=o!==void 0?(i=t._$Cl)===null||i===void 0?void 0:i[o]:t._$Cu;const a=P(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,t,o)),o!==void 0?((n=(d=t)._$Cl)!==null&&n!==void 0?n:d._$Cl=[])[o]=l:t._$Cu=l),l!==void 0&&(e=y(s,l._$AS(s,e.values),l,o)),e}class Ie{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:i}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:$).importNode(o,!0);x.currentNode=r;let n=x.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let u;a.type===2?u=new D(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new Ze(n,this,e)),this.v.push(u),a=i[++l]}d!==(a==null?void 0:a.index)&&(n=x.nextNode(),d++)}return r}m(e){let t=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class D{constructor(e,t,o,i){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=y(this,e,t),P(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==m&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):He(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=e:this.k($.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=O.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(o);else{const n=new Ie(r,this),d=n.p(this.options);n.m(o),this.k(d),this._$AH=n}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new O(e)),t}S(e){me(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new D(this.M(k()),this.M(k()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class R{constructor(e,t,o,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const r=this.strings;let n=!1;if(r===void 0)e=y(this,e,t,0),n=!P(e)||e!==this._$AH&&e!==m,n&&(this._$AH=e);else{const d=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=y(this,d[o+l],t,l),a===m&&(a=this._$AH[l]),n||(n=!P(a)||a!==this._$AH[l]),a===p?e=p:e!==p&&(e+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}n&&!i&&this.C(e)}C(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Re extends R{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===p?void 0:e}}const Be=w?w.emptyScript:"";class Ve extends R{constructor(){super(...arguments),this.type=4}C(e){e&&e!==p?this.element.setAttribute(this.name,Be):this.element.removeAttribute(this.name)}}class je extends R{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){var o;if((e=(o=y(this,e,t,0))!==null&&o!==void 0?o:p)===m)return;const i=this._$AH,r=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}}class Ze{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){y(this,e)}}const ue=window.litHtmlPolyfillSupport;ue==null||ue(O,D),((W=globalThis.litHtmlVersions)!==null&&W!==void 0?W:globalThis.litHtmlVersions=[]).push("2.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F,q;class v extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Le(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return m}}v.finalized=!0,v._$litElement$=!0,(F=globalThis.litElementHydrateSupport)===null||F===void 0||F.call(globalThis,{LitElement:v});const _e=globalThis.litElementPolyfillSupport;_e==null||_e({LitElement:v});((q=globalThis.litElementVersions)!==null&&q!==void 0?q:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=s=>e=>typeof e=="function"?((t,o)=>(window.customElements.define(t,o),o))(s,e):((t,o)=>{const{kind:i,elements:r}=o;return{kind:i,elements:r,finisher(n){window.customElements.define(t,n)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?M(H({},e),{finisher(t){t.createProperty(e.key,s)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function B(s){return(e,t)=>t!==void 0?((o,i,r)=>{i.constructor.createProperty(r,o)})(s,e,t):We(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xe(s){return B(M(H({},s),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=({finisher:s,descriptor:e})=>(t,o)=>{var i;if(o===void 0){const r=(i=t.originalKey)!==null&&i!==void 0?i:t.key,n=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:M(H({},t),{key:r});return s!=null&&(n.finisher=function(d){s(d,r)}),n}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,o,e(o)),s==null||s(r,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function we(s,e){return Fe({descriptor:t=>{const o={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const i=typeof t=="symbol"?Symbol():"__"+t;o.get=function(){var r,n;return this[i]===void 0&&(this[i]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&n!==void 0?n:null),this[i]}}return o}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;((K=window.HTMLSlotElement)===null||K===void 0?void 0:K.prototype.assignedElements)!=null;var qe="/intro-section-lit/assets/logo.d51e21d9.svg",Ke="/intro-section-lit/assets/icon-menu.766b6225.svg",Je=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Ge=(s,e,t,o)=>{for(var i=o>1?void 0:o?Ye(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&Je(e,t,i),i};let Y=class extends v{openSidebar(){this.dispatchEvent(new CustomEvent("open-sidebar",{bubbles:!0,composed:!0}))}render(){return E`
      <header class="bar">
        <div class="bar__section bar__section--left">
          <img class="bar__logo" src=${qe} alt="brand logo">
          <div class="bar__navigation">
            <slot name="navigation"></slot>
          </div>
        </div>
          <div class="bar__section">
            <button class="bar__text-button">Login</button>
            <button class="bar__text-button bar__text-button--outlined">Register</button>
            <button class="bar__icon-button" @click="${this.openSidebar}">
              <img class="bar__icon" src=${Ke} alt="menu icon">
            </button>
          </div>
      </header>
    `}};Y.styles=z`
    :host {
      --color-almost-white: hsl(0, 0%, 98%);
      --color-medium-gray: hsl(0, 0%, 41%);
      --color-almost-black: hsl(0, 0%, 8%);
      font-family: 'Epilogue', sans-serif;
    }
    
    .bar {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      height: 54px;
      padding-left: 16px;
      padding-right: 16px;
      margin-bottom: 24px;
    }

    .bar__section {
      box-sizing: border-box;
      flex: 0 0 auto;
    }

    .bar__navigation {
      display: none;
    }

    .bar__logo {
      display: block;
      width: auto;
      height: 28px;
    }

    .bar__text-button {
      display: none;
    }

    .bar__icon-button {
      box-sizing: border-box;
      display: flex;
      width: 32px;
      height: 32px;
      padding: 0;
      border: none;
      background-color: transparent;
      margin-bottom: 4px;
      cursor: pointer;
    }

    .bar__icon {
      width: 32px;
      height: auto;
      margin: auto;
    }

    @media screen and (min-width: 992px) {
      .bar {
        height: 64px;
        padding-left: 40px;
        padding-right: 40px;
        margin-bottom: 64px;
      }

      .bar__section--left {
        display: flex;
        flex-direction: row;
      }

      .bar__logo {
        margin-right: 54px;
      }

      .bar__navigation {
        display: block;
      }

      .bar__text-button {
        display: inline-block;
        height: 42px;
        min-width: 104px;
        padding: 0;
        background-color: transparent;
        border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        color: var(--color-medium-gray);
        cursor: pointer;
      }

      .bar__text-button:hover {
        color: var(--color-almost-black);
      }

      .bar__text-button--outlined {
        border-radius: 12px;
        border: 2px solid var(--color-medium-gray);
      }

      .bar__text-button--outlined:hover {
        border: 2px solid var(--color-almost-black);
      }

      .bar__icon-button {
        display: none;
      }
    }
  `;Y=Ge([S("web-bar")],Y);var Qe="/intro-section-lit/assets/image-hero-desktop.3bda6511.png",Xe="/intro-section-lit/assets/image-hero-mobile.b9d32923.png",et="/intro-section-lit/assets/client-databiz.3098feb2.svg",tt="/intro-section-lit/assets/client-audiophile.cdc1075f.svg",it="/intro-section-lit/assets/client-meet.1cf19dba.svg",ot="/intro-section-lit/assets/client-maker.a770212d.svg",st=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,nt=(s,e,t,o)=>{for(var i=o>1?void 0:o?rt(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&st(e,t,i),i};let G=class extends v{render(){return E`
      <div class="hero">
        <picture class="hero__picture">
          <source srcset=${Qe} media="(min-width: 992px)">
          <img class="hero__image" src=${Xe} alt="Hero image">
        </picture>
        <div class="hero__cta">
          <h1 class="hero__title">Make remote work</h1>
          <p class="hero__subtitle">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button class="hero__button">Learn more</button>
          <div class="hero__grid">
            <img class="hero__logo" src=${et} alt="databiz logo">
            <img class="hero__logo" src=${tt} alt="audiophile logo">
            <img class="hero__logo" src=${it} alt="meet logo">
            <img class="hero__logo" src=${ot} alt="maker logo">
          </div>
        </div>
      </div>
    `}};G.styles=z`
    :host {
      --color-almost-white: hsl(0, 0%, 98%);
      --color-medium-gray: hsl(0, 0%, 41%);
      --color-almost-black: hsl(0, 0%, 8%);
      font-family: 'Epilogue', sans-serif;
    }

    .hero {
      box-sizing: border-box;
      width: 100%;
      height: auto;
      margin-bottom: 92px;
    }

    .hero__picture {
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 48px;
    }

    .hero__image {
      box-sizing: border-box;
      max-width: 100%;
      width: 100%;
      height: auto;
    }

    .hero__cta {
      box-sizing: border-box;
      padding-left: 16px;
      padding-right: 16px;
      text-align: center;
    }

    .hero__title {
      box-sizing: border-box;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      color: var(--color-almost-black);
      margin: 0 0 16px 0;
    }

    .hero__subtitle {
      box-sizing: border-box;
      max-width: 548px;
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      color: var(--color-medium-gray);
      margin: 0 auto 24px auto;
    }

    .hero__button {
      display: inline-block;
      min-width: 136px;
      height: 48px;
      background-color: var(--color-almost-black);
      border: 2px solid var(--color-almost-black);
      font-family: inherit;
      font-size: 16px;
      font-weight: 500;
      color: var(--color-almost-white);
      border-radius: 14px;
      margin-bottom: 48px;
      cursor: pointer;
    }

    .hero__button:hover {
      background-color: transparent;
      color: var(--color-almost-black);
    }

    .hero__grid {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 24px;
      width: auto;
      height: auto;
    }

    .hero__logo {
      flex: 0 1 60px;
      box-sizing: border-box;
      max-width: 100%;
      width: auto;
      height: auto;
    }

    @media screen and (min-width: 348px) {
      .hero__grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media screen and (min-width: 576px) {
      .hero {
        max-width: 576px;
        margin-left: auto;
        margin-right: auto;
      }

      .hero__picture {
        width: 576px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    @media screen and (min-width: 768px) {
      .hero {
        max-width: 768px;
      }
    }

    @media screen and (min-width: 992px) {
      .hero {
        max-width: 992px;
        display: flex;
        flex-direction: row;
        padding-left: 40px;
        padding-right: 40px;
      }

      .hero__picture {
        flex: 0 0 400px;
        width: 400px;
        order: 2;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
      }

      .hero__cta {
        flex: 1 1 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        order: 1;
        padding-right: 64px;
        padding-left: 0;
        text-align: start;
      }

      .hero__title {
        font-size: 56px;
        line-height: 64px;
        margin-top: 92px;
      }

      .hero__subtitle {
        max-width: none;
        font-size: 18px;
        line-height: 28px;
        margin: 0 0 48px 0;
      }

      .hero__button {
        min-width: 164px;
        height: 56px;
        font-size: 18px;
      }

      .hero__grid {
        justify-content: flex-start;
        margin-top: auto;
      }
    }

    @media screen and (min-width: 1225px) {
      .hero {
        max-width: 1225px;
      }

      .hero__picture {
        flex: 0 0 480px;
        width: 480px;
      }

      .hero__cta {
        padding-right: 136px;
      }

      .hero__title {
        font-size: 80px;
        line-height: 80px;
      }

      .hero__grid {
        gap: 32px;
      }
    }
  `;G=nt([S("web-hero")],G);var lt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,V=(s,e,t,o)=>{for(var i=o>1?void 0:o?at(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&lt(e,t,i),i};let A=class extends v{constructor(){super(),this.closeFeatureDropdown=this.closeFeatureDropdown.bind(this),this.closeCompanyDropdown=this.closeCompanyDropdown.bind(this)}closeFeatureDropdown(s){this.featureDropdown.contains(s.composedPath()[0])||this.featureDropdown.removeAttribute("open")}closeCompanyDropdown(s){this.companyDropdown.contains(s.composedPath()[0])||this.companyDropdown.removeAttribute("open")}handleFeatureDropdown(){this.parent==="bar"&&(this.featureDropdown.open?document.addEventListener("click",this.closeFeatureDropdown):document.removeEventListener("click",this.closeFeatureDropdown))}handleCompanyDropdown(){this.parent==="bar"&&(this.companyDropdown.open?document.addEventListener("click",this.closeCompanyDropdown):document.removeEventListener("click",this.closeCompanyDropdown))}render(){return E`
      <nav class="navigation">
        <details class="dropdown dropdown--feature" @toggle=${this.handleFeatureDropdown}>
          <summary class="dropdown__header">
            <span class="dropdown__name">Features</span>
            <svg class="dropdown__icon" width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
            </svg>
          </summary>
          <div class="dropdown__body dropdown__body--from-right">
            <a class="link" href="#">
              <svg class="link__icon" width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/>
              </svg>
              <span class="link__text">Todo List</span>
            </a>
            <a class="link" href="#">
              <svg class="link__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/>
              </svg>
              <span class="link__text">Calendar</span>
            </a>
            <a class="link" href="#">
              <svg class="link__icon" width="13" height="17" viewBox="0 0 13 17" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/>
              </svg>
              <span class="link__text">Reminders</span>
            </a>
            <a class="link" href="#">
              <svg class="link__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/>
              </svg>
              <span class="link__text">Planning</span>
            </a>
          </div>
        </details>
        <details class="dropdown dropdown--company" @toggle=${this.handleCompanyDropdown}>
          <summary class="dropdown__header">
            <span class="dropdown__name">Company</span>
            <svg class="dropdown__icon" width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
            </svg>
          </summary>
          <div class="dropdown__body dropdown__body--from-left">
            <a class="link" href="#">
              <span class="link__text">History</span>
            </a>
            <a class="link" href="#">
              <span class="link__text">Our Team</span>
            </a>
            <a class="link" href="#">
              <span class="link__text">Blog</span>
            </a>
          </div>
        </details>
        <a class="link link--top" href="#">
          <span class="link__text">Careers</span>
        </a>
        <a class="link link--top" href="#">
          <span class="link__text">About</span>
        </a>
      </nav>
    `}};A.styles=z`
    :host {
      --color-almost-white: hsl(0, 0%, 98%);
      --color-medium-gray: hsl(0, 0%, 41%);
      --color-almost-black: hsl(0, 0%, 8%);
      font-family: 'Epilogue', sans-serif;
    }

    .navigation {
      box-sizing: border-box;
      width: 100%;
      height: auto;
    }

    .dropdown {
      box-sizing: border-box;
      width: 100%;
      height: auto;
      margin-bottom: 16px;
    }

    .dropdown__header {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      list-style: none;
      cursor: pointer;
    }

    .dropdown__body {
      box-sizing: border-box;
      width: 100%;
      height: auto;
      padding-left: 24px;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    .dropdown__name {
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 500;
      color: var(--color-medium-gray);
    }

    .dropdown__icon {
      box-sizing: border-box;
      width: 10px;
      height: auto;
      color: var(--color-medium-gray);
    }

    .dropdown__header:hover > .dropdown__name {
      color: var(--color-almost-black);
    }

    .dropdown__header:hover > .dropdown__icon {
      color: var(--color-almost-black);
    }

    .dropdown[open] .dropdown__icon {
      transform: rotate(180deg);
    }

    .link {
      box-sizing: border-box;
      display: block;
      width: 100%;
      text-decoration: none;
      margin-bottom: 16px;
    }

    .link:last-child {
      margin-bottom: 0;
    }

    .link__icon {
      box-sizing: border-box;
      display: inline-block;
      width: 20px;
      height: auto;
      margin-right: 12px;
      vertical-align: middle;
    }

    .link__text {
      font-size: 16px;
      font-weight: 500;
      color: var(--color-medium-gray);
      vertical-align: middle;
    }
    
    .link:hover > .link__text {
      color: var(--color-almost-black);
    }

    @media screen and (min-width: 992px) {
      .navigation {
        display: flex;
        flex-direction: row;
        padding-top: 4px;
      }

      .dropdown {
        position: relative;
        margin: 0 32px 0 0;
      }

      .dropdown__header {
        gap: 4px;
      }

      .dropdown__name {
        font-size: 14px;
      }

      .dropdown__body {
        position: absolute;
        z-index: 60;
        bottom: -20px;
        transform: translateY(100%);
        width: 156px;
        padding: 24px;
        margin: 0;
        background-color: #fff;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);
        border-radius: 12px;
      }

      .dropdown__body--from-right {
        right: 0;
      }

      .dropdown__body--from-left {
        left: 0;
      }

      .link__icon {
        width: 16px;
      }

      .link__text {
        font-size: 14px;
        font-weight: 500;
      }

      .link--top {
        margin: 0;
        line-height: 1;
      }

      .link--top:last-child {
        margin-left: 32px;
      }
    }
  `;V([B()],A.prototype,"parent",2);V([we(".dropdown--feature")],A.prototype,"featureDropdown",2);V([we(".dropdown--company")],A.prototype,"companyDropdown",2);A=V([S("web-navigation")],A);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ht=s=>(...e)=>({_$litDirective$:s,values:e});class ct{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=ht(class extends ct{constructor(s){var e;if(super(s),s.type!==dt.ATTRIBUTE||s.name!=="class"||((e=s.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var t,o;if(this.et===void 0){this.et=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!(!((t=this.st)===null||t===void 0)&&t.has(r))&&this.et.add(r);return this.render(e)}const i=s.element.classList;this.et.forEach(r=>{r in e||(i.remove(r),this.et.delete(r))});for(const r in e){const n=!!e[r];n===this.et.has(r)||((o=this.st)===null||o===void 0?void 0:o.has(r))||(n?(i.add(r),this.et.add(r)):(i.remove(r),this.et.delete(r)))}return m}});var pt="/intro-section-lit/assets/icon-close-menu.9e723834.svg",ut=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,ye=(s,e,t,o)=>{for(var i=o>1?void 0:o?_t(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&ut(e,t,i),i};let L=class extends v{constructor(){super(...arguments),this.isOpen=!1}closeSidebar(){this.dispatchEvent(new CustomEvent("close-sidebar",{bubbles:!0,composed:!0}))}render(){const s={sidebar:!0,"sidebar--open":this.isOpen};return E`
      <aside class=${$e(s)}>
        <button class="sidebar__button" @click=${this.closeSidebar}>
          <img class="sidebar__icon" src=${pt} alt="close icon">
        </button>
        <slot name="navigation"></slot>
      </aside>
    `}};L.styles=z`
    :host {
      --color-almost-white: hsl(0, 0%, 98%);
      --color-medium-gray: hsl(0, 0%, 41%);
      --color-almost-black: hsl(0, 0%, 8%);
      font-family: 'Epilogue', sans-serif;
    }
    
    .sidebar {
      display: none;
      position: fixed;
      z-index: 50;
      top: 0;
      right: 0;
      box-sizing: border-box;
      width: 240px;
      height: 100vh;
      max-height: 100vh;
      border: none;
      background-color: var(--color-almost-white);
      padding: 16px 16px 16px 24px;
    }
    
    .sidebar--open {
      display: block;
    }

    .sidebar__button {
      box-sizing: border-box;
      display: flex;
      width: 28px;
      height: 28px;
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0 0 36px auto;
      cursor: pointer;
    }

    .sidebar__icon {
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      margin: auto;
    }

    @media screen and (min-width: 992px) {
      .sidebar {
        display: none;
      }
    }
  `;ye([B({attribute:"is-open",type:Boolean})],L.prototype,"isOpen",2);L=ye([S("web-sidebar")],L);var vt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,Ae=(s,e,t,o)=>{for(var i=o>1?void 0:o?bt(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&vt(e,t,i),i};let N=class extends v{constructor(){super(...arguments),this.isVisible=!1}closeSidebar(){this.dispatchEvent(new CustomEvent("close-sidebar",{bubbles:!0,composed:!0}))}render(){const s={overlay:!0,"overlay--visible":this.isVisible};return E`
        <div class=${$e(s)} @click=${this.closeSidebar}></div>
    `}};N.styles=z`
    :host {
      --color-almost-white: hsl(0, 0%, 98%);
      --color-medium-gray: hsl(0, 0%, 41%);
      --color-almost-black: hsl(0, 0%, 8%);
    }
    
    .overlay {
      display: none;
      position: fixed;
      z-index: 40;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-almost-black);
      opacity: 0.8;
    }
    
    .overlay--visible {
      display: block;
    }

    @media screen and (min-width: 992px) {
      .overlay {
        display: none;
      }
    }
  `;Ae([B({attribute:"is-visible",type:Boolean})],N.prototype,"isVisible",2);N=Ae([S("web-overlay")],N);var gt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,ee=(s,e,t,o)=>{for(var i=o>1?void 0:o?mt(e,t):e,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&gt(e,t,i),i};let I=class extends v{constructor(){super(),this._sidebarIsOpen=!1,this._overlayIsVisible=!1,this.openSidebar=this.openSidebar.bind(this),this.closeSidebar=this.closeSidebar.bind(this)}openSidebar(){this._sidebarIsOpen=!0,this._overlayIsVisible=!0}closeSidebar(){this._sidebarIsOpen=!1,this._overlayIsVisible=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("open-sidebar",this.openSidebar),this.addEventListener("close-sidebar",this.closeSidebar)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("open-sidebar",this.openSidebar),this.removeEventListener("close-sidebar",this.closeSidebar)}render(){return E`
      <web-bar>
        <web-navigation parent="bar" slot="navigation"></web-navigation>
      </web-bar>
      <web-hero></web-hero>
      <web-sidebar ?is-open=${this._sidebarIsOpen}>
        <web-navigation parent="sidebar" slot="navigation"></web-navigation>
      </web-sidebar>
      <web-overlay ?is-visible=${this._overlayIsVisible}></web-overlay>
    `}};ee([xe()],I.prototype,"_sidebarIsOpen",2);ee([xe()],I.prototype,"_overlayIsVisible",2);I=ee([S("web-app")],I);
