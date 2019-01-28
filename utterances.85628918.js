parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var c={};function H(){var e=q(location.search.substr(1)),r=null,i=null;if("issue-term"in e){if(void 0!==(r=e["issue-term"])){if(""===r)throw new Error("When issue-term is specified, it cannot be blank.");if(-1!==["title","url","pathname","og:title"].indexOf(r)){if(!e[r])throw new Error("Unable to find \""+r+"\" metadata.");r=e[r]}}}else{if(!("issue-number"in e))throw new Error("\"issue-term\" or \"issue-number\" must be specified.");if((i=+e["issue-number"]).toString(10)!==e["issue-number"])throw new Error("issue-number is invalid. \""+e["issue-number"])}if(!("repo"in e))throw new Error("\"repo\" is required.");if(!("origin"in e))throw new Error("\"origin\" is required.");var t=ia.exec(e.repo);if(null===t)throw new Error("Invalid repo: \""+e.repo+"\"");return{owner:t[1],repo:t[2],issueTerm:r,issueNumber:i,origin:e.origin,url:e.url,title:e.title,description:e.description,label:e.label,theme:e.theme||"github-light"}}var e={};function q(e){for(var r,o=/\+/g,n=/([^&=]+)=?([^&]*)/g,p=function(e){return decodeURIComponent(e.replace(o," "))},a={};r=n.exec(e);)a[p(r[1])]=p(r[2]);return a}function l(e){var r=[];for(var o in e)e.hasOwnProperty(o)&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r.join("&")}e.deparam=q,e.param=l;var ia=/^([\w-_]+)\/([\w-_.]+)$/i;var a=H();var d={};var p="https://api.utteranc.es";var ha=d&&d.__awaiter||function(e,t,r,o){return new(r||(r=Promise))(function(n,a){function i(e){try{c(o.next(e))}catch(t){a(t)}}function $(e){try{c(o.throw(e))}catch(t){a(t)}}function c(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,$)}c((o=o.apply(e,t||[])).next())})},da=d&&d.__generator||function(e,t){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:$(0),throw:$(1),return:$(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function $(a){return function($){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue;}a=t.call(e,i)}catch($){a=[6,$],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,$])}}},aa=function(){function e(){this.storageKey="OAUTH_TOKEN2",this.token=null;try{this.token=localStorage.getItem(this.storageKey)}catch(e){}}return Object.defineProperty(e.prototype,"value",{get:function(){return this.token},set:function(e){this.token=e;try{null===e?localStorage.removeItem(this.storageKey):localStorage.setItem(this.storageKey,e)}catch(t){}},enumerable:!0,configurable:!0}),e}(),g=new aa;function y(e){e=location.origin+"/authorized.html?"+l({redirect_uri:e}),window.open(p+"/authorize?"+l({redirect_uri:e}),"_top")}function _(){return ha(this,void 0,void 0,function(){var e,t,r,o,n,a,i;return da(this,function($){switch($.label){case 0:return e=q(location.search.substr(1)),t=e.state,r=e.redirect_uri,o=p+"/token?"+l({state:t}),[4,fetch(o,{mode:"cors"})];case 1:return(n=$.sent()).ok?[3,3]:(g.value=null,[4,n.text()]);case 2:throw a=$.sent(),document.body.textContent=a,new Error(a);case 3:return[4,n.json()];case 4:return i=$.sent(),g.value=i,location.href=r,[2];}})})}d.token=g,d.login=y,d.completeLogin=_;function Z(e){return e=e.replace(/\s/g,""),decodeURIComponent(escape(atob(e)))}var i,h,V="https://api.github.com/",w="application/vnd.github.VERSION.html+json",N="application/vnd.github.VERSION.html",m="application/vnd.github.squirrel-girl-preview",D=100,t="master";function B(n){i=n.owner,h=n.repo}function j(n,e){(e=e||{}).mode="cors",e.cache="no-cache";var r=new Request(V+n,e);return r.headers.set("Accept",m),/^search\//.test(n)||null===g.value||r.headers.set("Authorization","token "+g.value),r}var z={standard:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0},search:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0}};function U(n){var e=n.headers.get("X-RateLimit-Limit"),r=n.headers.get("X-RateLimit-Remaining"),t=n.headers.get("X-RateLimit-Reset"),$=/\/search\//.test(n.url),o=$?z.search:z.standard;if(o.limit=+e,o.remaining=+r,o.reset=+t,403===n.status&&0===o.remaining){var a=new Date(0);a.setUTCSeconds(o.reset);var s=Math.round((a.getTime()-new Date().getTime())/1e3/60),i=$?"search API":"non-search APIs";console.warn("Rate limit exceeded for "+i+". Resets in "+s+" minute"+(1===s?"":"s")+".")}}function C(n){var e=n.headers.get("link");if(null===e)return 0;var r=/\?page=([2-9][0-9]*)>; rel="next"/.exec(e);return null===r?0:+r[1]}function f(n){return fetch(n).then(function(e){return 401===e.status&&(g.value=null),403===e.status&&e.json().then(function(n){"Resource not accessible by integration"===n.message&&window.dispatchEvent(new CustomEvent("not-installed"))}),U(e),"GET"===n.method&&-1!==[401,403].indexOf(e.status)&&n.headers.has("Authorization")?(n.headers.delete("Authorization"),f(n)):e})}function E(n,e){void 0===e&&(e=!1);var r=j("repos/"+i+"/"+h+"/contents/"+n+"?ref="+t);return e&&r.headers.set("accept",N),f(r).then(function(r){if(404===r.status)throw new Error("Repo \""+i+"/"+h+"\" does not have a file named \""+n+"\" in the \""+t+"\" branch.");if(!r.ok)throw new Error("Error fetching "+n+".");return e?r.text():r.json()}).then(function(n){if(e)return n;var r=n.content,t=Z(r);return JSON.parse(t)})}function F(n){var e="\""+n+"\" type:issue in:title repo:"+i+"/"+h;return f(j("search/issues?q="+encodeURIComponent(e)+"&sort=created&order=asc")).then(function(n){if(!n.ok)throw new Error("Error fetching issue via search.");return n.json()}).then(function(n){return 0===n.total_count?null:(n.total_count>1&&console.warn("Multiple issues match \""+e+"\". Using earliest created."),n.items[0])})}function G(n){return f(j("repos/"+i+"/"+h+"/issues/"+n)).then(function(n){if(!n.ok)throw new Error("Error fetching issue via issue number.");return n.json()})}function la(n,e){var r=j("repos/"+i+"/"+h+"/issues/"+n+"/comments?page="+e+"&per_page="+D),t=w+","+m;return r.headers.set("Accept",t),r}function I(n,e){return f(la(n,e)).then(function(n){if(!n.ok)throw new Error("Error fetching comments.");var e=C(n);return n.json().then(function(n){return{items:n,nextPage:e}})})}function J(){return null===g.value?Promise.resolve(null):f(j("user")).then(function(n){return n.ok?n.json():null})}function K(n,e,r,t,$){var o=p+"/repos/"+i+"/"+h+"/issues"+($?"?label="+encodeURIComponent($):""),a=new Request(o,{method:"POST",body:JSON.stringify({title:n,body:"# "+r+"\n\n"+t+"\n\n["+e+"]("+e+")"})});return a.headers.set("Accept",m),a.headers.set("Authorization","token "+g.value),fetch(a).then(function(n){if(!n.ok)throw new Error("Error creating comments container issue");return n.json()})}function L(n,e){var r=j("repos/"+i+"/"+h+"/issues/"+n+"/comments",{method:"POST",body:JSON.stringify({body:e})}),t=w+","+m;return r.headers.set("Accept",t),f(r).then(function(n){if(!n.ok)throw new Error("Error posting comment.");return n.json()})}function M(n){return f(j("markdown",{method:"POST",body:JSON.stringify({text:n,mode:"gfm",context:i+"/"+h})})).then(function(n){return n.text()})}var k=[1e3,"second",6e4,"minute",36e5,"hour",864e5,"day",6048e5,"week",23328e5,"month"],O={month:"short",day:"numeric",year:"numeric"};function P(r,e){var $=r-e.getTime();if($<5e3)return"just now";for(var o=0;o+2<k.length&&1.1*$>k[o+2];)o+=2;var t=k[o],a=k[o+1],h=Math.round($/t);return h>3&&o===k.length-2?"on "+e.toLocaleDateString(void 0,O):1===h?("hour"===a?"an":"a")+" "+a+" ago":h+" "+a+"s ago"}var Q;function R(e){Q=e,addEventListener("resize",b),addEventListener("load",b)}var S=-1;function T(){var e=document.body.scrollHeight;if(e!==S){S=e;var $={type:"resize",height:e};parent.postMessage($,Q)}}var r=0;function b(){var e=Date.now();e-r>50&&(r=e,setTimeout(T,50))}var W="?v=3&s=88",X={COLLABORATOR:"Collaborator",CONTRIBUTOR:"Contributor",MEMBER:"Member",OWNER:"Owner"},Y=function(){function e(e,r){this.comment=e,this.currentUser=r;var t=e.user,n=e.html_url,a=e.created_at,o=e.body_html,s=e.author_association;this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),t.login===r&&this.element.classList.add("current-user");var l=X[s];this.element.innerHTML="\n      <a class=\"avatar\" href=\""+t.html_url+"\" target=\"_blank\" tabindex=\"-1\">\n        <img alt=\"@"+t.login+"\" height=\"44\" width=\"44\"\n              src=\""+t.avatar_url+W+"\">\n      </a>\n      <div class=\"comment\">\n        <header class=\"comment-header\">\n          <span class=\"comment-meta\">\n            <a class=\"text-link\" href=\""+t.html_url+"\" target=\"_blank\"><strong>"+t.login+"</strong></a>\n            commented\n            <a class=\"text-link\" href=\""+n+"\" target=\"_blank\">"+P(Date.now(),new Date(a))+"</a>\n          </span>\n          "+(l?"<span class=\"author-association-badge\">"+l+"</span>":"")+"\n        </header>\n        <div class=\"markdown-body markdown-body-scrollable\">\n          "+o+"\n        </div>\n      </div>";var i=this.element.lastElementChild.lastElementChild,c=i.querySelector(".email-hidden-toggle a");if(c){var m=i.querySelector(".email-hidden-reply");c.onclick=function(e){e.preventDefault(),m.classList.toggle("expanded")}}A(i)}return e.prototype.setCurrentUser=function(e){this.currentUser!==e&&(this.currentUser=e,this.comment.user.login===this.currentUser?this.element.classList.add("current-user"):this.element.classList.remove("current-user"))},e}();function A(e){Array.from(e.querySelectorAll(":not(.email-hidden-toggle) > a")).forEach(function(e){e.target="_top",e.rel="noopener noreferrer"}),Array.from(e.querySelectorAll("img")).forEach(function(e){return e.onload=b}),Array.from(e.querySelectorAll("a.commit-tease-sha")).forEach(function(e){return e.href="https://github.com"+e.pathname})}var $=function(){function e(e,t){this.user=e,this.issue=t,this.timeline=[],this.count=0,this.element=document.createElement("main"),this.element.classList.add("timeline"),this.element.innerHTML="\n      <h1 class=\"timeline-header\">\n        <a class=\"text-link\" target=\"_blank\"></a>\n        <em>\n          - powered by\n          <a class=\"text-link\" href=\"https://utteranc.es\" target=\"_blank\">utteranc.es</a>\n        </em>\n      </h1>",this.countAnchor=this.element.firstElementChild.firstElementChild,this.marker=document.createComment("marker"),this.element.appendChild(this.marker),this.setIssue(this.issue),this.renderCount()}return e.prototype.setUser=function(e){this.user=e;for(var t=e?e.login:null,n=0;n<this.timeline.length;n++)this.timeline[n].setCurrentUser(t);b()},e.prototype.setIssue=function(e){this.issue=e,e?this.countAnchor.href=e.html_url:this.countAnchor.removeAttribute("href")},e.prototype.appendComment=function(e){var t=new Y(e,this.user?this.user.login:null);this.timeline.push(t),this.element.insertBefore(t.element,this.marker),this.count++,this.renderCount(),b()},e.prototype.renderCount=function(){this.countAnchor.textContent=this.count+" Comment"+(1===this.count?"":"s")},e}();var n;function s(){return n||(n=E("utterances.json").then(function(r){return Array.isArray(r.origins)||(r.origins=[]),r},function(){return{origins:[a.origin]}})),n}var ba="<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 16\" version=\"1.1\"><path fill=\"rgb(179,179,179)\" fill-rule=\"evenodd\" d=\"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3 5 2 4 5h6L9 2zm4.03 7.75L10 9l1 2-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3 1-2z\"></path></svg>",ca="data:image/svg+xml;base64,"+btoa(ba),o="Nothing to preview",ea=function(){function t(t,e){var n=this;this.user=t,this.submit=e,this.submitting=!1,this.renderTimeout=0,this.handleInput=function(){s();var t=n.textarea.value,e=/^\s*$/.test(t);n.submitButton.disabled=e,n.textarea.scrollHeight<450&&n.textarea.offsetHeight<n.textarea.scrollHeight&&(n.textarea.style.height=n.textarea.scrollHeight+"px",b()),clearTimeout(n.renderTimeout),e?n.preview.textContent=o:(n.preview.textContent="Loading preview...",n.renderTimeout=setTimeout(function(){return M(t).then(function(t){return n.preview.innerHTML=t}).then(function(){return A(n.preview)}).then(b)},500))},this.handleSubmit=function(t){t.preventDefault(),n.submitting||(n.submitting=!0,n.user&&(n.textarea.disabled=!0,n.submitButton.disabled=!0),n.submit(n.textarea.value).catch(function(){return 0}).then(function(){n.submitting=!1,n.textarea.disabled=!n.user,n.textarea.value="",n.submitButton.disabled=!1,n.handleClick({target:n.form.querySelector(".tabnav-tab.tab-write")}),n.preview.textContent=o}))},this.handleClick=function(t){var e=t.target;if(e instanceof HTMLButtonElement&&e.classList.contains("tabnav-tab")&&!e.classList.contains("selected")){n.form.querySelector(".tabnav-tab.selected").classList.remove("selected"),e.classList.add("selected");var a=e.classList.contains("tab-preview");n.textarea.style.display=a?"none":"",n.preview.style.display=a?"":"none",b()}},this.handleKeyDown=function(t){var e=t.which,a=t.ctrlKey;13===e&&a&&!n.submitButton.disabled&&n.form.dispatchEvent(new CustomEvent("submit"))},this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),this.element.innerHTML="\n      <a class=\"avatar\" target=\"_blank\" tabindex=\"-1\">\n        <img height=\"44\" width=\"44\">\n      </a>\n      <form class=\"comment\" accept-charset=\"UTF-8\" action=\"javascript:\">\n        <header class=\"new-comment-header\">\n          <nav class=\"tabnav-tabs\" role=\"tablist\">\n            <button type=\"button\" class=\"tabnav-tab tab-write selected\"\n                    role=\"tab\" aria-selected=\"true\">\n              Write\n            </button>\n            <button type=\"button\" class=\"tabnav-tab tab-preview\"\n                    role=\"tab\">\n              Preview\n            </button>\n          </nav>\n        </header>\n        <div class=\"comment-body\">\n          <textarea class=\"form-control\" placeholder=\"Leave a comment\" aria-label=\"comment\"></textarea>\n          <div class=\"markdown-body\" style=\"display: none\">\n            "+o+"\n          </div>\n        </div>\n        <footer class=\"comment-footer\">\n          <a class=\"text-link markdown-info\" tabindex=\"-1\" target=\"_blank\"\n             href=\"https://guides.github.com/features/mastering-markdown/\">\n            <svg class=\"octicon v-align-bottom\" viewBox=\"0 0 16 16\" version=\"1.1\"\n              width=\"16\" height=\"16\" aria-hidden=\"true\">\n              <path fill-rule=\"evenodd\" d=\"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15\n                13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4\n                8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z\">\n              </path>\n            </svg>\n            Styling with Markdown is supported\n          </a>\n          <button class=\"btn btn-primary\" type=\"submit\">Comment</button>\n        </footer>\n      </form>",this.avatarAnchor=this.element.firstElementChild,this.avatar=this.avatarAnchor.firstElementChild,this.form=this.avatarAnchor.nextElementSibling,this.textarea=this.form.firstElementChild.nextElementSibling.firstElementChild,this.preview=this.form.firstElementChild.nextElementSibling.lastElementChild,this.submitButton=this.form.lastElementChild.lastElementChild,this.setUser(t),this.textarea.addEventListener("input",this.handleInput),this.form.addEventListener("submit",this.handleSubmit),this.form.addEventListener("click",this.handleClick),this.form.addEventListener("keydown",this.handleKeyDown),fa(this.textarea)}return t.prototype.setUser=function(t){this.user=t,this.submitButton.textContent=t?"Comment":"Sign in to comment",this.submitButton.disabled=!!t,t?(this.avatarAnchor.href=t.html_url,this.avatar.alt="@"+t.login,this.avatar.src=t.avatar_url+"?v=3&s=88"):(this.avatarAnchor.removeAttribute("href"),this.avatar.alt="@anonymous",this.avatar.src=ca,this.textarea.disabled=!0)},t.prototype.clear=function(){this.textarea.value=""},t}();function fa(t){var e=function t(){removeEventListener("mousemove",b),removeEventListener("mouseup",t)};t.addEventListener("mousedown",function(){addEventListener("mousemove",b),addEventListener("mouseup",e)})}function ga(e,t){return new Promise(function(s){var n=document.createElement("link");n.rel="stylesheet",n.setAttribute("crossorigin","anonymous"),n.onload=s,n.href="/stylesheets/themes/"+e+"/utterances.css",document.head.appendChild(n),addEventListener("message",function(e){e.origin===t&&"set-theme"===e.data.type&&(n.href="/stylesheets/themes/"+e.data.theme+"/utterances.css")})})}var u=c&&c.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function u(e){try{a(n.throw(e))}catch(t){s(t)}}function a(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,u)}a((n=n.apply(e,t||[])).next())})},v=c&&c.__generator||function(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue;}s=t.call(e,i)}catch(u){s=[6,u],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};function ja(){return null!==a.issueNumber?G(a.issueNumber):F(a.issueTerm)}function ka(e,t){var r=this;R(a.origin);var n=new $(t,e);if(document.body.appendChild(n.element),e&&e.comments>0&&I(e.number,1).then(function(e){return e.items.forEach(function(e){return n.appendComment(e)})}),!e||!e.locked){var o=new ea(t,function(s){return u(r,void 0,void 0,function(){var r;return v(this,function(i){switch(i.label){case 0:return t?[4,x()]:[3,5];case 1:return i.sent(),e?[3,3]:[4,K(a.issueTerm,a.url,a.title,a.description,a.label)];case 2:e=i.sent(),n.setIssue(e),i.label=3;case 3:return[4,L(e.number,s)];case 4:return r=i.sent(),n.appendComment(r),o.clear(),[2];case 5:return y(a.url),[2];}})})});n.element.appendChild(o.element),b()}}function x(){return u(this,void 0,void 0,function(){var e,t,r,n;return v(this,function(o){switch(o.label){case 0:return[4,s()];case 1:if(e=o.sent().origins,t=a.origin,r=a.owner,n=a.repo,-1!==e.indexOf(t))return[2];throw document.querySelector(".timeline").lastElementChild.insertAdjacentHTML("beforebegin","\n  <div class=\"flash flash-error flash-not-installed\">\n    Error: <code>"+t+"</code> is not permitted to post to <code>"+r+"/"+n+"</code>.\n    Confirm this is the correct repo for this site's comments. If you own this repo,\n    <a href=\"https://github.com/"+r+"/"+n+"/edit/master/utterances.json\" target=\"_top\">\n      <strong>update the utterances.json</strong>\n    </a>\n    to include <code>"+t+"</code> in the list of origins.<br/><br/>\n    Suggested configuration:<br/>\n    <pre><code>"+JSON.stringify({origins:[t]},null,2)+"</code></pre>\n  </div>"),b(),new Error("Origin not permitted.");}})})}B(a),Promise.all([ja(),J(),ga(a.theme,a.origin)]).then(function(e){return ka(e[0],e[1])}),addEventListener("not-installed",function e(){removeEventListener("not-installed",e),document.querySelector(".timeline").insertAdjacentHTML("afterbegin","\n  <div class=\"flash flash-error\">\n    Error: utterances is not installed on <code>"+a.owner+"/"+a.repo+"</code>.\n    If you own this repo,\n    <a href=\"https://github.com/apps/utterances\" target=\"_top\"><strong>install the app</strong></a>.\n    Read more about this change in\n    <a href=\"https://github.com/utterance/utterances/pull/25\" target=\"_top\">the PR</a>.\n  </div>"),b()}),c.assertOrigin=x;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=c}else if(typeof define==="function"&&define.amd){define(function(){return c})}e.__esModule=true;d.__esModule=true;c.__esModule=true;return{"ieWq":e,"5+Ph":d,"fHsu":c};});