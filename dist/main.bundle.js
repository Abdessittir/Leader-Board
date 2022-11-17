(()=>{"use strict";var n={713:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(81),o=e.n(t),a=e(645),s=e.n(a)()(o());s.push([n.id,".form {\r\n  flex: 0.4;\r\n  display: flex;\r\n  flex-direction: column;\r\n  animation: animate-form 1s alternate;\r\n}\r\n\r\n@keyframes animate-form {\r\n  from {\r\n    opacity: 0.5;\r\n    transform: translateX(100px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.form h2 {\r\n  font-size: 2rem;\r\n  margin: 15px 0;\r\n}\r\n\r\n.form label {\r\n  opacity: 0;\r\n}\r\n\r\n.form input {\r\n  padding: 10px;\r\n  border: 2px solid black;\r\n  outline: none;\r\n}\r\n\r\n.form input::placeholder {\r\n  color: black;\r\n}\r\n\r\n.btn-container {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.error {\r\n  height: 15px;\r\n  color: red;\r\n  font-size: 14px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.seccuss {\r\n  width: 200px;\r\n  text-align: center;\r\n  margin-right: 20px;\r\n  color: green;\r\n}\r\n",""]);const i=s},2:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(81),o=e.n(t),a=e(645),s=e.n(a)()(o());s.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: sans-serif;\r\n}\r\n\r\n#main {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n#main > h1 {\r\n  font-size: 3.5rem;\r\n  padding: 30px 10px;\r\n}\r\n\r\n#page {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.container { /* for form and score element */\r\n  flex: 0.5;\r\n  margin: 30px;\r\n}\r\n\r\n.btn {\r\n  border: 2px solid black;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 5px 15px;\r\n  background-color: transparent;\r\n  font-size: 18px;\r\n  box-shadow: 4px 4px 2px black;\r\n}\r\n\r\n.btn:active {\r\n  box-shadow: none;\r\n}\r\n",""]);const i=s},775:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(81),o=e.n(t),a=e(645),s=e.n(a)()(o());s.push([n.id,".scores {\r\n  animation: animate-scores 1s alternate;\r\n}\r\n\r\n@keyframes animate-scores {\r\n  from {\r\n    opacity: 0.5;\r\n    transform: translateX(-100px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.score-headline {\r\n  display: flex;\r\n  margin: 15px 0;\r\n}\r\n\r\n.score-headline h2 {\r\n  flex: 1;\r\n  font-size: 2rem;\r\n}\r\n\r\n.score-list {\r\n  list-style-type: none;\r\n  border: 2px solid black;\r\n  min-height: 200px;\r\n  max-height: 300px;\r\n  overflow: scroll;\r\n  -ms-overflow-style: none;  /* IE and Edge */\r\n  scrollbar-width: none;  /* Firefox */\r\n}\r\n\r\n.score-list::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.score-list li {\r\n  padding: 5px 10px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.even {\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.odd {\r\n  background-color: lightblue;\r\n}\r\n\r\n.loading {\r\n  margin: 40px auto;\r\n  border-top: 3px solid black;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  animation: loading 0.5s infinite;\r\n}\r\n\r\n@keyframes loading {\r\n  from {\r\n    transform: rotate(0);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n",""]);const i=s},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],l=t.base?c[0]+t.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(m);else{var f=o(m,t);t.byIndex=i,r.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=e(a[s]);r[i].references--}for(var c=t(n,o),l=0;l<a.length;l++){var d=e(a[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),s=e.n(a),i=e(565),c=e.n(i),l=e(216),d=e.n(l),u=e(589),p=e.n(u),m=e(2),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=e(713),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var b=e(775),x={};x.styleTagTransform=p(),x.setAttributes=c(),x.insert=s().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),r()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals;const y="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OAazNRHxmgPnL7QK59dp/scores",g=(n,r)=>{const e=document.querySelector(".user-error"),t=document.querySelector(".score-error");"user"===r?e.textContent=n:t.textContent=n},w=()=>(window.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector(".form"),r=document.querySelector(".btn-container button");n.addEventListener("submit",(r=>{r.preventDefault();const{user:e,score:t}=n.elements,o=(n=>{const r=n.trim(),e=/[\\/:"'*?<>@|&$,%!§;.]+/;return r?e.test(r)?{valid:!1,message:`name should not contain any of ${e}`}:{valid:!0}:{valid:!1,message:"Please enter a user name!"}})(e.value);return o.valid?(a=t.value,"number"==typeof Number(a)?(n=>{const{user:r,score:e}=n.elements;n.dispatchEvent(new CustomEvent("add_score_request")),(async(n,r)=>{try{const e=await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n,score:r})});return(await e.json()).result}catch(n){return Promise.reject(n)}})(r.value,e.value).then((()=>{n.dispatchEvent(new CustomEvent("score_added"))}))})(n):g("Score should be a number!","score")):g(o.message,"user");var a})),n.addEventListener("add_score_request",(()=>{r.textContent="Loading..."})),n.addEventListener("score_added",(()=>{const{user:e,score:t}=n.elements,o=document.querySelector(".seccuss");e.value="",t.value=0,r.textContent="Submit",o.textContent="Score added seccussfully",setTimeout((()=>{o.textContent=""}),3e3)}))})),'\n  <form class="form container">\n    <h2>Add Your Score</h2>\n  \n    <label for="user">Name</label>\n    <input id="user" type="text" name="user" placeholder="Your Name" />\n    <p class="error user-error"></p>\n  \n    <label for="score">Score</label>\n    <input id="score" type="number" name="score" placeholder="Your chess rating"/>\n    <p class="error score-error"></p>\n  \n    <div class="btn-container">\n       <p class="seccuss"><p/>\n      <button type="submit" class="btn">Submit</button>\n    </div>\n  </form>');(()=>{const n=document.getElementById("page");n.insertAdjacentHTML("beforeend",(()=>{const n=n=>{const r=document.createElement("p");r.classList.add("loading"),n.replaceChildren(r),(async()=>{try{const n=await fetch(y,{method:"GET"});return(await n.json()).result}catch(n){return Promise.reject(n)}})().then((r=>{n.dispatchEvent(new CustomEvent("scores",{detail:{scores:r}}))}))},r=n=>{n.target.replaceChildren("");const{scores:r}=n.detail;r.forEach(((r,e)=>{n.target.insertAdjacentHTML("beforeend",`<li class=${e%2==0?"even":"odd"}>${r.user}: ${r.score}</li>`)}))};return window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".score-list"),t=document.querySelector(".refresh");n(e),e.addEventListener("scores",r),t.addEventListener("click",(()=>n(e)))})),'\n  <div class="scores container">\n    <div class="score-headline">\n      <h2>Recent Scores</h2>\n      <button class="btn refresh">Refresh</button>\n    </div>\n  \n    <ul class="score-list">\n      <p class="loading"></p>\n    </ul>\n  </div>\n  '})()),n.insertAdjacentHTML("beforeend",w())})()})()})();