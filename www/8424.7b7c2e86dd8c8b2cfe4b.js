(self.webpackChunkincidencias=self.webpackChunkincidencias||[]).push([[8424],{8424:(e,t,n)=>{"use strict";n.r(t),n.d(t,{startInputShims:()=>m});var o=n(6304),r=n(1843);const i=new WeakMap,s=(e,t,n,o=0)=>{i.has(e)!==n&&(n?l(e,t,o):c(e,t))},a=e=>e===e.getRootNode().activeElement,l=(e,t,n)=>{const o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`},c=(e,t)=>{const n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur], [contenteditable]",u=function(){var e=(0,o.Z)(function*(e,t,n,i,a){if(!n&&!i)return;const l=((e,t,n)=>((e,t,n,o)=>{const r=e.top,i=e.bottom,s=t.top,a=s+15,l=.75*Math.min(t.bottom,o-n)-i,c=a-r,d=Math.round(l<0?-l:c>0?-c:0),u=Math.min(d,r-s),f=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(r-a)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight))(e,n||i,a);if(n&&Math.abs(l.scrollAmount)<4)t.focus();else if(s(e,t,!0,l.inputSafeY),t.focus(),(0,r.r)(()=>e.click()),"undefined"!=typeof window){let r;const i=function(){var c=(0,o.Z)(function*(){void 0!==r&&clearTimeout(r),window.removeEventListener("ionKeyboardDidShow",a),window.removeEventListener("ionKeyboardDidShow",i),n&&(yield n.scrollByPoint(0,l.scrollAmount,l.scrollDuration)),s(e,t,!1,l.inputSafeY),t.focus()});return function(){return c.apply(this,arguments)}}(),a=()=>{window.removeEventListener("ionKeyboardDidShow",a),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=yield n.getScrollElement();if(l.scrollAmount>e.scrollHeight-e.clientHeight-e.scrollTop)return"password"===t.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",a)):window.addEventListener("ionKeyboardDidShow",i),void(r=setTimeout(i,1e3))}i()}});return function(t,n,o,r,i){return e.apply(this,arguments)}}(),f=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},m=e=>{const t=document,n=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),l=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),m=e.getBoolean("scrollPadding",!0),p=Array.from(t.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,v=new WeakMap,E=function(){var e=(0,o.Z)(function*(e){yield new Promise(t=>(0,r.c)(e,t));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),c=e.closest("ion-content"),d=c?null:e.closest("ion-footer");if(o){if(c&&l&&!h.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{a(t)&&s(e,t,n)},i=()=>s(e,t,!1),l=()=>o(!0),c=()=>o(!1);return(0,r.a)(n,"ionScrollStart",l),(0,r.a)(n,"ionScrollEnd",c),t.addEventListener("blur",i),()=>{(0,r.b)(n,"ionScrollStart",l),(0,r.b)(n,"ionScrollEnd",c),t.addEventListener("ionBlur",i)}})(e,o,c);h.set(e,t)}if((c||d)&&i&&!v.has(e)){const t=((e,t,n,o,i)=>{let s;const l=e=>{s=(0,r.p)(e)},c=l=>{if(!s)return;const c=(0,r.p)(l);((e,t,n)=>{if(t&&n){const e=t.x-n.x,o=t.y-n.y;return e*e+o*o>36}return!1})(0,s,c)||a(t)||(l.stopPropagation(),u(e,t,n,o,i))};return e.addEventListener("touchstart",l,!0),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",c,!0)}})(e,o,c,d,n);v.set(e,t)}}});return function(t){return e.apply(this,arguments)}}();c&&(()=>{let e=!0,t=!1;const n=document;(0,r.a)(n,"ionScrollStart",()=>{t=!0}),n.addEventListener("focusin",()=>{e=!0},!0),n.addEventListener("touchend",o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(d))return;const i=o.target;i!==r&&(i.matches(d)||i.closest(d)||(e=!1,setTimeout(()=>{e||r.blur()},50)))},!1)})(),m&&(e=>{const t=document;t.addEventListener("focusin",t=>{f(t.target,e)}),t.addEventListener("focusout",e=>{f(e.target,0)})})(n);for(const o of p)E(o);t.addEventListener("ionInputDidLoad",e=>{E(e.detail)}),t.addEventListener("ionInputDidUnload",e=>{(e=>{if(l){const t=h.get(e);t&&t(),h.delete(e)}if(i){const t=v.get(e);t&&t(),v.delete(e)}})(e.detail)})}}}]);