/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/**
 *  Init
 */

define('app/init',[], () => {
    'use strict';

    let frigWH = {
        1: 'E004 - C1',
        2: 'L005 - C2',
        3: 'Z006 - C3',
        4: 'M001 - C4',
        5: 'C008 - C5',
        6: 'G008 - C6',
        7: 'Q003 - 0.0',
        8: 'A009 - C13'
    };

    return {
        path: {
            api: '/api/rest',                                               //ajax URL - REST API
            // user API
            getCaptcha: '/api/User/getCaptcha',                             // ajax URL - get captcha image
            getServerStatus: '/api/User/getEveServerStatus',                // ajax URL - get EVE-Online server status
            getCookieCharacterData: '/api/User/getCookieCharacter',         // ajax URL - get character data from cookie
            logIn: '/api/User/logIn',                                       // ajax URL - login
            logout: '/api/User/logout',                                     // ajax URL - logout
            openIngameWindow: '/api/User/openIngameWindow',                 // ajax URL - open inGame Window
            saveUserConfig: '/api/User/saveAccount',                        // ajax URL - saves/update user account
            deleteAccount: '/api/User/deleteAccount',                       // ajax URL - delete Account data
            // access API
            searchAccess: '/api/Access/search',                             // ajax URL - search user/corporation/ally by name
            // main config/map ping API
            initData: '/api/Map/initData',                                  // ajax URL - get static configuration data
            getAccessData: '/api/Map/getAccessData',                        // ajax URL - get map access tokens (WebSocket)
            updateMapData: '/api/Map/updateData',                           // ajax URL - main map update trigger
            updateUserData: '/api/Map/updateUserData',                      // ajax URL - main map user data trigger
            updateUnloadData: '/api/Map/updateUnloadData',                  // post URL - for my sync onUnload
            // map API
            importMap: '/api/Map/import',                                   // ajax URL - import map
            getMapConnectionData: '/api/Map/getConnectionData',             // ajax URL - get connection data
            getMapLogData: '/api/Map/getLogData',                           // ajax URL - get logs data
            // system API
            setDestination: '/api/System/setDestination',                   // ajax URL - set destination
            pokeRally: '/api/System/pokeRally',                             // ajax URL - send rally point pokes
            // stats API
            getStatisticsData: '/api/Statistic/getData',                    // ajax URL - get statistics data (activity log)
            // universe API
            searchUniverseData: '/api/Universe/search',                     // ajax URL - search universe data by category Ids
            getConstellationData: '/api/Universe/constellationData',        // ajax URL - get system constellation data
            // GitHub API
            gitHubReleases: '/api/GitHub/releases'                          // ajax URL - get release info from GitHub
        },
        breakpoints: [
            {name: 'screen-xl', width: Infinity},
            {name: 'screen-l', width: 1600},
            {name: 'screen-m', width: 1200},
            {name: 'screen-d', width: 1000},
            {name: 'screen-s', width: 780},
            {name: 'screen-xs', width: 480}
        ],
        animationSpeed: {
            splashOverlay: 300,                                             // "splash" loading overlay
            headerLink: 100,                                                // links in head bar
            mapOverlay: 200,                                                // show/hide duration for map overlays
            mapOverlayLocal: 180,                                           // show/hide duration for map "local" overlay
            mapMoveSystem: 180,                                             // system position has changed animation
            mapDeleteSystem: 200,                                           // remove system from map
            mapModule: 200,                                                 // show/hide of an map module
            dialogEvents: 180                                               // dialog events /slide/show/...
        },
        syncStatus: {
            type: 'ajax',
            webSocket: {
                status: 'closed',
                class: 'txt-color-danger',
                timestamp: undefined
            },
            sharedWorker: {
                status: 'offline',                                          // SharedWorker status
                class: 'txt-color-danger',
                timestamp: undefined
            },
            ajax: {
                status: 'enabled',
                class: 'txt-color-success',
                timestamp: undefined
            }
        },
        performanceLogging: {
            keyServerMapData: 'UPDATE_SERVER_MAP',                          // ajax request update map data
            keyClientMapData: 'UPDATE_CLIENT_MAP',                          // update client map data
            keyServerUserData: 'UPDATE_SERVER_USER_DATA',                   // ajax request update map user data
            keyClientUserData: 'UPDATE_CLIENT_USER_DATA',                   // update client map user data
        },
        mapIcons: [                                                         // map tab-icons
            {
                class: 'fa-desktop',
                label: 'desktop',
                unicode: '&#xf108;'
            }, {
                class: 'fa-space-shuttle',
                label: 'space shuttle',
                unicode: '&#xf197;'
            }, {
                class: 'fa-anchor',
                label: 'anchor',
                unicode: '&#xf13d;'
            }, {
                class: 'fa-satellite',
                label: 'satellite',
                unicode: '&#xf7bf;'
            }, {
                class: 'fa-skull-crossbones',
                label: 'skull crossbones',
                unicode: '&#xf714;'
            }, {
                class: 'fa-fire',
                label: 'fire',
                unicode: '&#xf06d;'
            }, {
                class: 'fa-bookmark',
                label: 'bookmark',
                unicode: '&#xf02e;'
            }, {
                class: 'fa-cube',
                label: 'cube',
                unicode: '&#xf1b2;'
            }, {
                class: 'fa-star',
                label: 'star',
                unicode: '&#xf005;'
            }, {
                class: 'fa-hat-wizard',
                label: 'hat wizard',
                unicode: '&#xf6e8;'
            },{
                class: 'fa-cross',
                label: 'cross',
                unicode: '&#xf654;'
            }, {
                class: 'fa-cannabis',
                label: 'cannabis',
                unicode: '&#xf55f;'
            }, {
                class: 'fa-spider',
                label: 'spider',
                unicode: '&#xf717;'
            }, {
                class: 'fa-plane',
                label: 'plane',
                unicode: '&#xf072;'
            }, {
                class: 'fa-globe',
                label: 'globe',
                unicode: '&#xf0ac;'
            }, {
                class: 'fa-rocket',
                label: 'rocket',
                unicode: '&#xf135;'
            }, {
                class: 'fa-life-ring',
                label: 'life ring',
                unicode: '&#xf1cd;'
            }, {
                class: 'fa-heart',
                label: 'heart',
                unicode: '&#xf004;'
            }, {
                class: 'fa-poop',
                label: 'poop',
                unicode: '&#xf619;'
            }
        ],
        classes: {
            // log types
            logTypes: {
                info: {
                    class: 'pf-log-info',
                    label: 'info'
                },
                warning: {
                    class: 'pf-log-warning',
                    label: 'warning'
                },
                error: {
                    class: 'pf-log-error',
                    label: 'error'
                }
            },
            // system effects
            systemEffects: {
                effect: {
                    class: 'pf-system-effect',
                    name: 'no effect'
                },
                magnetar: {
                    class: 'pf-system-effect-magnetar',
                    name: 'magnetar'
                },
                redGiant: {
                    class: 'pf-system-effect-redgiant',
                    name: 'red giant'
                },
                pulsar: {
                    class: 'pf-system-effect-pulsar',
                    name: 'pulsar'
                },
                wolfRayet: {
                    class: 'pf-system-effect-wolfrayet',
                    name: 'wolf rayet'
                },
                cataclysmic: {
                    class: 'pf-system-effect-cataclysmic',
                    name: 'cataclysmic'
                },
                blackHole: {
                    class: 'pf-system-effect-blackhole',
                    name: 'black hole'
                }
            },
            // system security
            systemSecurity: {
                'security': {
                    class: 'pf-system-sec'
                },
                'A': {
                    class: 'pf-system-sec-abyssal'
                },
                'SH': {
                    class: 'pf-system-sec-unknown'
                },
                'H': {
                    class: 'pf-system-sec-highSec'
                },
                'L': {
                    class: 'pf-system-sec-lowSec'
                },
                'T': {
                    class: 'pf-system-sec-triglav'
                },
                '0.0': {
                    class: 'pf-system-sec-nullSec'
                },
                'C1': {
                    class: 'pf-system-sec-low'
                },
                'C2': {
                    class: 'pf-system-sec-low'
                },
                'C3': {
                    class: 'pf-system-sec-mid'
                },
                'C4': {
                    class: 'pf-system-sec-mid'
                },
                'C5': {
                    class: 'pf-system-sec-high'
                },
                'C6': {
                    class: 'pf-system-sec-high'
                },
                'C12': {
                    class: 'pf-system-sec-special'
                },
                'C14': {
                    class: 'pf-system-sec-drifter'
                },
                'C15': {
                    class: 'pf-system-sec-drifter'
                },
                'C16': {
                    class: 'pf-system-sec-drifter'
                },
                'C17': {
                    class: 'pf-system-sec-drifter'
                },
                'C18': {
                    class: 'pf-system-sec-drifter'
                }
            },
            // true sec
            trueSec: {
                '0.0': {
                    class: 'pf-system-security-0-0'
                },
                '0.1': {
                    class: 'pf-system-security-0-1'
                },
                '0.2': {
                    class: 'pf-system-security-0-2'
                },
                '0.3': {
                    class: 'pf-system-security-0-3'
                },
                '0.4': {
                    class: 'pf-system-security-0-4'
                },
                '0.5': {
                    class: 'pf-system-security-0-5'
                },
                '0.6': {
                    class: 'pf-system-security-0-6'
                },
                '0.7': {
                    class: 'pf-system-security-0-7'
                },
                '0.8': {
                    class: 'pf-system-security-0-8'
                },
                '0.9': {
                    class: 'pf-system-security-0-9'
                },
                '1.0': {
                    class: 'pf-system-security-1-0'
                }
            },
            // system info
            systemInfo: {
                rally: {
                    class: 'pf-system-info-rally',
                    label: 'rally point'
                }
            },
            // planets
            planets: {
                barren: {
                    class: 'pf-planet-barren'
                },
                gas: {
                    class: 'pf-planet-gas'
                },
                ice: {
                    class: 'pf-planet-ice'
                },
                lava: {
                    class: 'pf-planet-lava'
                },
                oceanic: {
                    class: 'pf-planet-oceanic'
                },
                plasma: {
                    class: 'pf-planet-plasma'
                },
                shattered: {
                    class: 'pf-planet-shattered'
                },
                storm: {
                    class: 'pf-planet-storm'
                },
                temperate: {
                    class: 'pf-planet-temperate'
                }
            },
            // easy-pie-charts
            pieChart: {
                class: 'pf-pie-chart',                                      // class for all pie charts
                pieChartMapCounterClass: 'pf-pie-chart-map-timer'           // class for timer chart
            }
        },
        // map scopes
        defaultMapScope: 'wh',                                              // default scope for connection
        // map endpoint types
        endpointTypes: {
            bubble: {
                cssClass: 'pf-map-endpoint-bubble',
            }
        },
        // map connection types
        connectionTypes: {
            abyssal: {
                cssClass: 'pf-map-connection-abyssal'
            },
            jumpbridge: {
                cssClass: 'pf-map-connection-jumpbridge'
            },
            stargate: {
                cssClass: 'pf-map-connection-stargate'
            },
            wh_eol: {
                cssClass: 'pf-map-connection-wh-eol'
            },
            wh_fresh: {
                cssClass: 'pf-map-connection-wh-fresh'
            },
            wh_reduced: {
                cssClass: 'pf-map-connection-wh-reduced'
            },
            wh_critical: {
                cssClass: 'pf-map-connection-wh-critical'
            },
            wh_jump_mass_s: {
                cssClass: 'pf-map-connection-wh-size-s',
                overlays: [
                    ['Label',
                        {
                            label: '<i class="fas fa-char pf-jump-mass-s" data-char-content="S"></i>',
                            cssClass: ['pf-map-component-overlay', 'small', 'text-center'].join(' '),
                            location: 0.65,
                            id: 'pf-map-connection-jump-mass-overlay'
                        }]
                ]
            },
            wh_jump_mass_m: {
                cssClass: 'pf-map-connection-wh-size-m',
                overlays: [
                    ['Label',
                        {
                            label: '<i class="fas fa-char pf-jump-mass-m" data-char-content="M"></i>',
                            cssClass: ['pf-map-component-overlay', 'small', 'text-center'].join(' '),
                            location: 0.65,
                            id: 'pf-map-connection-jump-mass-overlay'
                        }]
                ]
            },
            wh_jump_mass_l: {
                cssClass: 'pf-map-connection-wh-size-l',
                overlays: [
                    ['Label',
                        {
                            label: '<i class="fas fa-char pf-jump-mass-l" data-char-content="L"></i>',
                            cssClass: ['pf-map-component-overlay', 'small', 'text-center'].join(' '),
                            location: 0.65,
                            id: 'pf-map-connection-jump-mass-overlay'
                        }]
                ]
            },
            wh_jump_mass_xl: {
                cssClass: 'pf-map-connection-wh-size-xl',
                overlays: [
                    ['Label',
                        {
                            label: '<i class="fas fa-char pf-jump-mass-xl" data-char-content="XL"></i>',
                            cssClass: ['pf-map-component-overlay', 'small', 'text-center'].join(' '),
                            location: 0.65,
                            id: 'pf-map-connection-jump-mass-overlay'
                        }]
                ]
            },
            preserve_mass: {
                cssClass: 'pf-map-connection-preserve-mass',
                overlays: [
                    ['Label',
                        {
                            label: '<i class="fas fa-fw fa-exclamation-triangle"></i>&nbsp;save mass',
                            cssClass: ['pf-map-component-overlay', 'mass'].join(' '),
                            location: 0.35
                        }]
                ]
            },
            info_signature: {
                overlays: [
                    ['Arrow',
                        {
                            id: 'pf-map-connection-arrow-overlay',
                            cssClass: 'pf-map-connection-arrow-overlay',
                            location: 0.5,
                            length: '${arrowlength}',
                            width: 12,
                            direction: '${arrowdirection}',
                            foldback: '${arrowfoldback}'
                        }]
                ]
            },
            state_active: {
                cssClass: 'pf-map-connection-active'
            },
            state_process: {
                cssClass: 'pf-map-connection-process',
                overlays: [
                    ['Label',
                        {
                            label: '<i class="fas fa-fw fa-sync fa-spin"></i>',
                            cssClass: ['pf-map-connection-state-overlay'].join(' '),
                            location: 0.5
                        }]
                ]
            }
        },
        wormholeSizes: {
            wh_jump_mass_xl: {
                jumpMassMin: 1000000000,
                type: 'wh_jump_mass_xl',
                class: 'pf-jump-mass-xl',
                label: 'XL',
                text: 'capital ships'
            },
            wh_jump_mass_l: {
                jumpMassMin: 375000000,
                type: 'wh_jump_mass_l',
                class: 'pf-jump-mass-l',
                label: 'L',
                text: 'larger ships'
            },
            wh_jump_mass_m: {
                jumpMassMin: 62000000,
                type: 'wh_jump_mass_m',
                class: 'pf-jump-mass-m',
                label: 'M',
                text: 'medium ships'
            },
            wh_jump_mass_s: {
                jumpMassMin: 5000,
                type: 'wh_jump_mass_s',
                class: 'pf-jump-mass-s',
                label: 'S',
                text: 'smallest ships'
            }
        },
        // signature groups
        signatureGroups: {
            1: {
                name: '(combat site|kampfgebiet|site de combat|Боевой район|战斗地点)',
                label: 'Combat'
            },
            2: {
                name: '(relic site|reliktgebiet|site de reliques|Археологический район|遗迹地点)',
                label: 'Relic'
            },
            3: {
                name: '(data site|datengebiet|site de données|Информационный район|数据地点)',
                label: 'Data'
            },
            4: {
                name: '(gas site|gasgebiet|site de collecte de gaz|Газовый район|气云地点)',
                label: 'Gas'
            },
            5: {
                name: '(wormhole|wurmloch|trou de ver|Червоточина|虫洞)',
                label: 'Wormhole'
            },
            6: {
                name: '(ore site|mineraliengebiet|site de minerai|Астероидный район|矿石地点)',
                label: 'Ore'
            },
            7: {
                name: '(ghost|Призрачный)',
                label: 'Ghost'
            }
        },
        // frigate wormholes
        frigateWormholes: {
            1: frigWH,  // C1
            2: frigWH,  // C2
            3: frigWH,  // C3
            4: frigWH,  // C4
            5: frigWH,  // C5
            6: frigWH,  // C6
            13: frigWH, // Shattered Wormholes (some of them are static)
            30: frigWH, // High Sec
            31: frigWH, // Low Sec
            32: frigWH  // 0.0
        },
        // Drifter wormholes (can only appear in k-space)
        drifterWormholes: {
            1: 'S877 - C14 Sentinel',
            2: 'B735 - C15 Barbican',
            3: 'V928 - C16 Vidette',
            4: 'C414 - C17 Conflux',
            5: 'R259 - C18 Redoubt'
        },
        // incoming wormholes
        incomingWormholes: {
            1: 'K162 - C1/2/3 (unknown)',
            2: 'K162 - C4/5 (dangerous)',
            3: 'K162 - C6 (deadly)',
            4: 'K162 - H',
            5: 'K162 - L',
            6: 'K162 - 0.0',
            7: 'K162 - C12 Thera'
        }
    };
});

define('app/lib/dataStore',[], () => {
    'use strict';

    /*
    // Example usage --------------------------------------------------------------------------------------------------
    // global accessible DataStore instance
    window.dataStore = new DataStore();

    // extend HTMLElement class with an interface to set/get data to it
    HTMLElement.prototype.setData = function(key, value){
        window.dataStore.set(this, key, value);
    };

    HTMLElement.prototype.getData = function(key){
        return window.dataStore.get(this, key);
    };
    */

    /**
     * Stores data to an object
     * -> can be used as a replacement for jQuery $.data()
     */
    return class DataStore {
        constructor() {
            this._store = new WeakMap();
        }

        set(obj, key, value) {
            if (!this._store.has(obj)) {
                this._store.set(obj, new Map());
            }
            this._store.get(obj).set(key, value);
            return obj;
        }

        get(obj, key) {
            return this._store.has(obj) && (key ? this._store.get(obj).get(key) : this._store.get(obj));
        }

        has(obj, key) {
            return this._store.has(obj) && this._store.get(obj).has(key);
        }

        remove(obj, key) {
            let ret = false;
            if (this._store.has(obj)) {
                ret = this._store.get(obj).delete(key);
                // remove obj if store is empty
                // -> 'size' property is does not exist if valueStore is WeakMap
                if (!this._store.get(obj).size) {
                    this._store.delete(obj);
                }
            }
            return ret;
        }
    };
});
define('app/lib/prototypes',[
    'app/lib/dataStore'
], (DataStore) => {
    'use strict';

    // DOM node data store ============================================================================================
    window.dataStore = new DataStore();

    /**
     * @param key
     * @param value
     * @returns {HTMLElement}
     */
    HTMLElement.prototype.setData = function(key, value){
        return window.dataStore.set(this, key, value);
    };

    /**
     * @param key
     * @returns {*}
     */
    HTMLElement.prototype.getData = function(key){
        return window.dataStore.get(this, key);
    };

    /**
     * @param key
     * @returns {*}
     */
    HTMLElement.prototype.hasData = function(key){
        return window.dataStore.has(this, key);
    };

    /**
     * @param key
     * @returns {*}
     */
    HTMLElement.prototype.removeData = function(key){
        return window.dataStore.remove(this, key);
    };

    /**
     * Array diff
     * [1,2,3,4,5].diff([4,5,6]) => [1,2,3]
     * @param a
     * @returns {*[]}
     */
    Array.prototype.diff = function(a){
        return this.filter(i => !a.includes(i));
    };

    /**
     * Array intersect
     * [1,2,3,4,5].intersect([4,5,6]) => [4,5]
     * @param a
     * @returns {*[]}
     */
    Array.prototype.intersect = function(a){
        return this.filter(i => a.includes(i));
    };

    /**
     * inverse of Array.filter(),
     * [1,2,3,4,5].not(val => val === 3)    => [1, 2, 4, 5]
     * [1,2,3,4,5].filter(val => val === 3) => [3]
     * @param callback
     * @returns {*[]}
     */
    Array.prototype.not = function(callback) {
        return this.filter((...args) => !callback(...args));
    };

    /**
     * compares two arrays if all elements in a are also in b
     * element order is ignored
     * @param a
     * @returns {boolean}
     */
    Array.prototype.equalValues = function(a){
        return this.diff(a).concat(a.diff(this)).length === 0;
    };

    /**
     * like Array.concat() + remove duplicate values
     * @see https://stackoverflow.com/a/38940354/4329969
     * @param a
     * @returns {*[]}
     */
    Array.prototype.concatFilter = function(a){
        return [...new Set([...this,...a])];
    };

    /**
     * sort array of objects by property name
     * @param p
     * @returns {Array.<T>}
     */
    Array.prototype.sortBy = function(p){
        return this.slice(0).sort((a,b) => {
            return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
        });
    };

    /**
     * capitalize first letter
     * @returns {string}
     */
    String.prototype.capitalize = function(){
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    /**
     * get hash from string
     * @returns {number}
     */
    String.prototype.hashCode = function(){
        let hash = this.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0);
        // make positive
        return (hash + 2147483647) + 1;
    };

    String.prototype.trimLeftChars = function(charList){
        if(charList === undefined)
            charList = '\\s';
        return this.replace(new RegExp('^[' + charList + ']+'), '');
    };

    String.prototype.trimRightChars = function(charList){
        if(charList === undefined)
            charList = '\\s';
        return this.replace(new RegExp('[' + charList + ']+$'), '');
    };

    String.prototype.trimChars = function(charList){
        return this.trimLeftChars(charList).trimRightChars(charList);
    };

    return {};
});
/**
 * Console module
 * -> extends default window.console log object
 */

define('app/lib/console',[], () => {
    'use strict';

    /**
     * init custom window.console object
     * -> extend console obj with custom methods for styling and logging
     */
    let initConsole = () => {

        window.console = (origConsole => {
            // save orig methods for byPassing args to original methods
            let log = origConsole.log;
            let info = origConsole.info;
            let warn = origConsole.warn;
            let error = origConsole.error;

            let styles = {
                'indentDefault': {
                    'padding-left': '3px'
                },
                'global': {
                    'font-weight': 500,
                    'font-size': '11px',
                    'line-height': '19px',
                    'font-family': '"Fira Code", "Lucida Console"',
                },
                'debug': {
                    'color': '#d747d6'
                },
                'ok': {
                    'color': '#5cb85c'
                },
                'log': {
                    'color': '#adadad'
                },
                'info': {
                    'color': '#428bca'
                },
                'warn': {
                    'color': '#ffdd9e'
                },
                'error': {
                    'color': '#ff8080'
                },
                'pf': {
                    'color': '#568a89'
                },
                'brand': {
                    'color': '#375959',
                    'line-height': '35px',
                    'font-size': '25px'
                }
            };

            let placeholders = {
                '%s': {
                    'style': ['color: #e93f3b; font-style: italic', 'color: inherit']
                },
                '%i': {
                    'style': ['color: #9980ff', 'color: inherit'],
                },
                '%d': {
                    'style': ['color: #9980ff', 'color: inherit']
                },
                '%f': {
                    'style': ['color: #9980ff', 'color: inherit']
                },
                '%o': {
                    'style': ['', '']
                },
                '%O': {
                    'style': ['', '']
                }
            };

            let findPlaceholders = str => {
                let exp = new RegExp(Object.keys(placeholders).join('|'), 'g');
                let matches = str.match(exp);
                return matches ? matches : [];
            };

            let addStylePlaceholder = str => {
                let exp = new RegExp(Object.keys(placeholders).join('|'), 'g');

                return str.replace(exp, function(matched){
                    return '%c' + matched + '%c';
                });
            };

            let getStyleByPlaceholder = (placeholder, clear = false) => {
                let css = '';
                if(placeholders.hasOwnProperty(placeholder)){
                    css = placeholders[placeholder].style[clear ? 1 : 0];
                }
                return css;
            };

            let getStyleByLogType = (logType, props = []) => {
                let css = '';
                if(styles.hasOwnProperty(logType)){
                    css = Object.keys(styles[logType])
                        .filter(prop => props.length ? props.includes(prop) : true)
                        .reduce((css, prop,i, affe) => {
                            css += prop + ':' + styles[logType][prop] + ';';
                            return css;
                        }, '');
                }
                return css;
            };

            let setLineStyleByLogType = (logType, args) => {
                if(args.length){
                    let lineStyle = getStyleByLogType('global') + getStyleByLogType(logType);
                    lineStyle += ['debug', 'ok', 'log', 'info', 'pf'].includes(logType) ? getStyleByLogType('indentDefault') : '';
                    let bullet = ['debug', 'ok', 'log', 'info', 'pf'].includes(logType) ? '●' : '';

                    if(typeof args[0] === 'string'){
                        // prepend placeholder to existing message
                        args[0] = '%c' + bullet + ' ' + args[0];
                    }else{
                        // prepend placeholder as new message
                        args.splice(0, 0, '%c' + bullet + ' ' + logType + ':');
                    }
                    // set line style as 2nd argument
                    args.splice(1, 0, lineStyle);
                }
            };

            let setMessageStyleByLogType = (logType, args) => {
                if(typeof args[0] === 'string') {
                    let placeholdersFound = findPlaceholders(args[0]);
                    let placeholderCount = placeholdersFound.length;

                    // add c% placeholders around other placeholders
                    args[0] = addStylePlaceholder(args[0]);

                    // add style args for  c% placeholders
                    let placeholderIndex = 0;
                    let argIndexStart = 1;
                    let argIndexEnd = argIndexStart + placeholderCount;
                    let argIndexOffset = 0;
                    for (let argIndex = argIndexStart; argIndex < argIndexEnd; argIndex++) {
                        args.splice(argIndex + argIndexOffset, 0, getStyleByPlaceholder(placeholdersFound[placeholderIndex]));
                        argIndexOffset += 2;
                        args.splice(argIndex + argIndexOffset, 0, getStyleByPlaceholder(placeholdersFound[placeholderIndex], true) + ';' + getStyleByLogType('global') + getStyleByLogType(logType));
                        placeholderIndex++;
                    }
                }
            };

            origConsole.debug = (...args) => {
                setMessageStyleByLogType('debug', args);
                setLineStyleByLogType('debug', args);
                info.apply(origConsole, args);
            };

            origConsole.ok = (...args) => {
                setMessageStyleByLogType('ok', args);
                setLineStyleByLogType('ok', args);
                info.apply(origConsole, args);
            };

            origConsole.info = (...args) => {
                setMessageStyleByLogType('info', args);
                setLineStyleByLogType('info', args);
                info.apply(origConsole, args);
            };

            origConsole.log = (...args) => {
                setMessageStyleByLogType('log', args);
                setLineStyleByLogType('log', args);
                log.apply(origConsole, args);
            };

            origConsole.warn = (...args) => {
                setMessageStyleByLogType('warn', args);
                setLineStyleByLogType('warn', args);
                warn.apply(origConsole, args);
            };

            origConsole.error = (...args) => {
                setMessageStyleByLogType('error', args);
                setLineStyleByLogType('error', args);
                error.apply(origConsole, args);
            };

            origConsole.pf = (...args) => {
                setMessageStyleByLogType('pf', args);
                setLineStyleByLogType('pf', args);
                info.apply(origConsole, args);
            };

            origConsole.brand = (...args) => {
                setMessageStyleByLogType('brand', args);
                setLineStyleByLogType('brand', args);
                info.apply(origConsole, args);
            };

            return origConsole;
        })(window.console);
    };

    initConsole();

    /**
     * show current program version information console
     * @param version
     */
    let showVersionInfo = (version) => {
        console.ok('%c     PATHFINDER',
            'color: #477372; font-size: 25px; margin-left: 10px; line-height: 50px; text-shadow: 1px 1px 0 #212C30; ' +
            'background: url(https://i.imgur.com/bhSr6LI.png) no-repeat;');
        console.pf('Release: %s', version);
    };

    return {
        showVersionInfo: showVersionInfo
    };
});
define('app/lib/cache',[], () => {
    'use strict';

    /**
     * Abstract Cache Strategy class
     * @type {AbstractStrategy}
     */
    class AbstractStrategy {
        constructor(){
            if(new.target === AbstractStrategy){
                throw new TypeError('Cannot construct AbstractStrategy instances directly');
            }
        }

        /**
         * factory for Strategy* instances
         * @returns {AbstractStrategy}
         */
        static create(){
            return new this();
        }
    }

    /**
     * LIFO Cache Strategy - First In First Out
     * -> The cache evicts the entries in the order they were added,
     *    without any regard to how often or how many times they were accessed before.
     * @type {StrategyFIFO}
     */
    class StrategyFIFO extends AbstractStrategy {
        valueToCompare(metaData){
            return metaData.age();
        }

        compare(a, b){
            return b - a;
        }
    }

    /**
     * LFU Cache Strategy - Least Frequently Used
     * -> The cache evicts the entries in order how often have been accessed.
     *   Those that are used least often are discarded first
     * @type {StrategyLFU}
     */
    class StrategyLFU extends AbstractStrategy {
        valueToCompare(metaData){
            return metaData.hitCount;
        }

        compare(a, b){
            return  a - b;
        }
    }

    /**
     * LRU Cache Strategy - Least Recently Used
     * -> The cache evicts entries that have not been used for the longest amount of time.
     *    No matter how often they have been accessed.
     * @type {StrategyLRU}
     */
    class StrategyLRU extends AbstractStrategy {
        valueToCompare(metaData){
            return metaData.hits[metaData.hits.length - 1] || metaData.set;
        }

        compare(a, b){
            return  a - b;
        }
    }

    /**
     * Each entry in cache also has its own instance of CacheEntryMeta
     * -> The configured Cache Strategy use this meta data for eviction policy
     * @type {CacheEntryMeta}
     */
    class CacheEntryMeta {
        constructor(ttl, tSet){
            this._ttl = ttl;                                // ttl < 0 => no expire
            this._tSet = tSet || this.constructor.now();
            this._tHits = [];
        }

        get set(){
            return this._tSet;
        }

        get hits(){
            return this._tHits;
        }

        get hitCount(){
            return this.hits.length;
        }

        newHit(current){
            this._tHits.push(current || this.constructor.now());
        }

        age(current){
            return (current || this.constructor.now()) - this._tSet;
        }

        expired(current){
            return this._ttl < 0 ? false : this._ttl < this.age(current);
        }

        static now(){
            return new Date().getTime() / 1000;
        }

        static create(ttl, tSet){
            return new this(ttl, tSet);
        }
    }

    /**
     * Each instance of Cache represents a key value in memory data store
     * -> Name should be set to identify current Cache instance
     * -> Default ttl can be overwritten by individual entries
     * -> Cache Strategy handles eviction policy
     * -> Buffer Size (in percent) can be used to remove e.g. 10% of all entries
     *    if cache reaches maxSize limit, to increase performance.
     * @type {Cache}
     */
    class Cache {

        constructor(config = {}){
            this._config    = Object.assign({}, Cache.defaultConfig, config);
            this._store     = new Map();
            this._metaStore = new WeakMap();
            this._strategy  = this.constructor.setStrategy(this._config.strategy);

            this.debug = (msg,...data) => {
                if(this._config.debug){
                    data = (data || []);
                    data.unshift(this._config.name);
                    console.debug('debug: CACHE %o | ' + msg, ...data);
                }
            };

            this.debug('New Cache instance');
        }

        get size(){
            return this._store.size;
        }

        isFull(){
            return this.size>= this._config.maxSize;
        }

        set(key, value, ttl){
            if(this._store.has(key)){
                this.debug('SET key %o, UPDATE value %o', key, value);
                this._store.set(key, value);
            }else{
                this.debug('SET key %o, NEW value %o', key, value);
                if(this.isFull()){
                    this.debug(' ↪ FULL trim cache…');
                    this.trim(this.trimCount(1));
                }
                this._store.set(key, value);
            }

            this._metaStore.set(value, CacheEntryMeta.create(ttl || this._config.ttl));
        }

        get(key){
            if(this._store.has(key)){
                let value = this._store.get(key);
                if(value){
                    let metaData = this._metaStore.get(value);
                    if(metaData.expired()){
                        this.debug('EXPIRED key %o delete', key);
                        this.delete(key);
                    }else{
                        this.debug('HIT key %o', key);
                        metaData.newHit();
                        return value;
                    }
                }
            }
            this.debug('MISS key %o', key);
        }

        getOrDefault(key, def){
            return this.get(key) || def;
        }

        keysForTrim(count){
            let trimKeys = [];
            let compare = [];
            for(let [key, value] of this._store){
                let metaData = this._metaStore.get(value);
                if(metaData.expired()){
                    trimKeys.push(key);
                    if(count === trimKeys.length){
                        break;
                    }
                }else{
                    compare.push({
                        key: key,
                        value: this._strategy.valueToCompare(metaData)
                    });
                }
            }

            let countLeft = count - trimKeys.length;
            if(countLeft > 0){
                compare = compare.sort((a, b) => this._strategy.compare(a.value, b.value));
                trimKeys = trimKeys.concat(compare.splice(0, countLeft).map(a => a.key));
            }

            return trimKeys;
        }

        keys(){
            return this._store.keys();
        }

        delete(key){
            return this._store.delete(key);
        }

        clear(){
            this._store.clear();
        }

        trimCount(spaceLeft){
            let bufferSize = Math.max(Math.round(this._config.maxSize / 100 * this._config.bufferSize), spaceLeft);
            return Math.min(Math.max(this.size - this._config.maxSize + bufferSize, 0), this.size);
        }

        trim(count){
            if(count > 0){
                let trimKeys = this.keysForTrim(count);
                if(count > trimKeys.length){
                    console.warn(' ↪ Failed to trim(%i) entries. Only %i in store', count, this.size);
                }
                this.debug(' ↪ DELETE min %i keys: %o', count, trimKeys);
                trimKeys.forEach(key => this.delete(key));
            }
        }

        status(){
            return {
                config: this._config,
                store: this._store,
                metaStore: this._metaStore
            };
        }

        static setStrategy(name){
            switch(name){
                case 'FIFO': return StrategyFIFO.create();
                case 'LFU': return StrategyLFU.create();
                case 'LRU': return StrategyLRU.create();
                default:
                    throw new ReferenceError('Unknown cache strategy name: ' + name);

            }
        }
    }

    Cache.defaultConfig = {
        name:       'Default',          // custom unique name for identification
        ttl:        3600,               // default ttl for cache entries
        maxSize:    600,                // max cache entries
        bufferSize: 10,                 // cache entry count in percent to be removed if maxSize reached
        strategy:   'FIFO',             // cache strategy policy
        debug:      false               // debug output in console
    };

    return Cache;
});
/*!
    localForage -- Offline Storage, Improved
    Version 1.7.3
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define('localForage',[],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||void 0===a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(b){return p.reject(a,b)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(a){c.status="error",c.value=a}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype.catch=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){g(c,this.state===r?a:b,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(a){return}}function f(){try{if(!ua)return!1;var a="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),b="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!a||b)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(a){return!1}}function g(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(f){if("TypeError"!==f.name)throw f;for(var c="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,d=new c,e=0;e<a.length;e+=1)d.append(a[e]);return d.getBlob(b.type)}}function h(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function i(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a.catch(c)}function j(a){return"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a)),a}function k(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function l(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;e<b;e++)d[e]=a.charCodeAt(e);return c}function m(a){return new va(function(b){var c=a.transaction(wa,Ba),d=g([""]);c.objectStore(wa).put(d,"key"),c.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},c.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);b(c||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function n(a){return"boolean"==typeof xa?va.resolve(xa):m(a).then(function(a){return xa=a})}function o(a){var b=ya[a.name],c={};c.promise=new va(function(a,b){c.resolve=a,c.reject=b}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function p(a){var b=ya[a.name],c=b.deferredOperations.pop();if(c)return c.resolve(),c.promise}function q(a,b){var c=ya[a.name],d=c.deferredOperations.pop();if(d)return d.reject(b),d.promise}function r(a,b){return new va(function(c,d){if(ya[a.name]=ya[a.name]||B(),a.db){if(!b)return c(a.db);o(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=ua.open.apply(ua,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(wa)}catch(c){if("ConstraintError"!==c.name)throw c;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(a){a.preventDefault(),d(f.error)},f.onsuccess=function(){c(f.result),p(a)}})}function s(a){return r(a,!1)}function t(a){return r(a,!0)}function u(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function v(a){return new va(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function w(a){return g([l(atob(a.data))],{type:a.type})}function x(a){return a&&a.__local_forage_encoded_blob}function y(a){var b=this,c=b._initReady().then(function(){var a=ya[b._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return i(c,a,a),c}function z(a){o(a);for(var b=ya[a.name],c=b.forages,d=0;d<c.length;d++){var e=c[d];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return a.db=null,s(a).then(function(b){return a.db=b,u(a)?t(a):b}).then(function(d){a.db=b.db=d;for(var e=0;e<c.length;e++)c[e]._dbInfo.db=d}).catch(function(b){throw q(a,b),b})}function A(a,b,c,d){void 0===d&&(d=1);try{var e=a.db.transaction(a.storeName,b);c(null,e)}catch(e){if(d>0&&(!a.db||"InvalidStateError"===e.name||"NotFoundError"===e.name))return va.resolve().then(function(){if(!a.db||"NotFoundError"===e.name&&!a.db.objectStoreNames.contains(a.storeName)&&a.version<=a.db.version)return a.db&&(a.version=a.db.version+1),t(a)}).then(function(){return z(a).then(function(){A(a,b,c,d-1)})}).catch(c);c(e)}}function B(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function C(a){function b(){return va.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];var f=ya[d.name];f||(f=B(),ya[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=y);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady().catch(b))}var j=f.forages.slice(0);return va.all(g).then(function(){return d.db=f.db,s(d)}).then(function(a){return d.db=a,u(d,c._defaultConfig.version)?t(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function D(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.get(a);h.onsuccess=function(){var a=h.result;void 0===a&&(a=null),x(a)&&(a=w(a)),b(a)},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function E(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.openCursor(),i=1;h.onsuccess=function(){var c=h.result;if(c){var d=c.value;x(d)&&(d=w(d));var e=a(d,c.key,i++);void 0!==e?b(e):c.continue()}else b()},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function F(a,b,c){var d=this;a=j(a);var e=new va(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,"[object Blob]"===za.call(b)?n(f.db).then(function(a){return a?b:v(b)}):b}).then(function(b){A(d._dbInfo,Ba,function(f,g){if(f)return e(f);try{var h=g.objectStore(d._dbInfo.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;e(a)}}catch(a){e(a)}})}).catch(e)});return h(e,c),e}function G(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Ba,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.delete(a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function H(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Ba,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function I(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.count();g.onsuccess=function(){a(g.result)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function J(a,b){var c=this,d=new va(function(b,d){if(a<0)return void b(null);c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=!1,i=g.openCursor();i.onsuccess=function(){var c=i.result;if(!c)return void b(null);0===a?b(c.key):h?b(c.key):(h=!0,c.advance(a))},i.onerror=function(){d(i.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function K(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.openCursor(),h=[];g.onsuccess=function(){var b=g.result;if(!b)return void a(h);h.push(b.key),b.continue()},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function L(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;if(a.name){var f=a.name===c.name&&e._dbInfo.db,g=f?va.resolve(e._dbInfo.db):s(a).then(function(b){var c=ya[a.name],d=c.forages;c.db=b;for(var e=0;e<d.length;e++)d[e]._dbInfo.db=b;return b});d=a.storeName?g.then(function(b){if(b.objectStoreNames.contains(a.storeName)){var c=b.version+1;o(a);var d=ya[a.name],e=d.forages;b.close();for(var f=0;f<e.length;f++){var g=e[f];g._dbInfo.db=null,g._dbInfo.version=c}return new va(function(b,d){var e=ua.open(a.name,c);e.onerror=function(a){e.result.close(),d(a)},e.onupgradeneeded=function(){e.result.deleteObjectStore(a.storeName)},e.onsuccess=function(){var a=e.result;a.close(),b(a)}}).then(function(a){d.db=a;for(var b=0;b<e.length;b++){var c=e[b];c._dbInfo.db=a,p(c._dbInfo)}}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})}}):g.then(function(b){o(a);var c=ya[a.name],d=c.forages;b.close();for(var e=0;e<d.length;e++){d[e]._dbInfo.db=null}return new va(function(b,c){var d=ua.deleteDatabase(a.name);d.onerror=d.onblocked=function(a){var b=d.result;b&&b.close(),c(a)},d.onsuccess=function(){var a=d.result;a&&a.close(),b(a)}}).then(function(a){c.db=a;for(var b=0;b<d.length;b++)p(d[b]._dbInfo)}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})})}else d=va.reject("Invalid arguments");return h(d,b),d}function M(){return"function"==typeof openDatabase}function N(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;b<h;b+=4)c=Da.indexOf(a[b]),d=Da.indexOf(a[b+1]),e=Da.indexOf(a[b+2]),f=Da.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function O(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=Da[c[b]>>2],d+=Da[(3&c[b])<<4|c[b+1]>>4],d+=Da[(15&c[b+1])<<2|c[b+2]>>6],d+=Da[63&c[b+2]];return c.length%3==2?d=d.substring(0,d.length-1)+"=":c.length%3==1&&(d=d.substring(0,d.length-2)+"=="),d}function P(a,b){var c="";if(a&&(c=Ua.call(a)),a&&("[object ArrayBuffer]"===c||a.buffer&&"[object ArrayBuffer]"===Ua.call(a.buffer))){var d,e=Ga;a instanceof ArrayBuffer?(d=a,e+=Ia):(d=a.buffer,"[object Int8Array]"===c?e+=Ka:"[object Uint8Array]"===c?e+=La:"[object Uint8ClampedArray]"===c?e+=Ma:"[object Int16Array]"===c?e+=Na:"[object Uint16Array]"===c?e+=Pa:"[object Int32Array]"===c?e+=Oa:"[object Uint32Array]"===c?e+=Qa:"[object Float32Array]"===c?e+=Ra:"[object Float64Array]"===c?e+=Sa:b(new Error("Failed to get type for BinaryArray"))),b(e+O(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=Ea+a.type+"~"+O(this.result);b(Ga+Ja+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(c){console.error("Couldn't convert value into a JSON string: ",a),b(null,c)}}function Q(a){if(a.substring(0,Ha)!==Ga)return JSON.parse(a);var b,c=a.substring(Ta),d=a.substring(Ha,Ta);if(d===Ja&&Fa.test(c)){var e=c.match(Fa);b=e[1],c=c.substring(e[0].length)}var f=N(c);switch(d){case Ia:return f;case Ja:return g([f],{type:b});case Ka:return new Int8Array(f);case La:return new Uint8Array(f);case Ma:return new Uint8ClampedArray(f);case Na:return new Int16Array(f);case Pa:return new Uint16Array(f);case Oa:return new Int32Array(f);case Qa:return new Uint32Array(f);case Ra:return new Float32Array(f);case Sa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function R(a,b,c,d){a.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],c,d)}function S(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new va(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(a){return d(a)}c.db.transaction(function(e){R(e,c,function(){b._dbInfo=c,a()},function(a,b){d(b)})},d)});return c.serializer=Va,e}function T(a,b,c,d,e,f){a.executeSql(c,d,e,function(a,g){g.code===g.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[b.storeName],function(a,h){h.rows.length?f(a,g):R(a,b,function(){a.executeSql(c,d,e,f)},f)},f):f(a,g)},f)}function U(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function V(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;h<g;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),void 0!==(j=a(j,i.key,h+1)))return void b(j)}b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function W(a,b,c,d){var e=this;a=j(a);var f=new va(function(f,g){e.ready().then(function(){void 0===b&&(b=null);var h=b,i=e._dbInfo;i.serializer.serialize(b,function(b,j){j?g(j):i.db.transaction(function(c){T(c,i,"INSERT OR REPLACE INTO "+i.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){f(h)},function(a,b){g(b)})},function(b){if(b.code===b.QUOTA_ERR){if(d>0)return void f(W.apply(e,[a,h,c,d-1]));g(b)}})})}).catch(g)});return h(f,c),f}function X(a,b,c){return W.apply(this,[a,b,c,1])}function Y(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function Z(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function $(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function _(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function aa(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function ba(a){return new va(function(b,c){a.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(c,d){for(var e=[],f=0;f<d.rows.length;f++)e.push(d.rows.item(f).name);b({db:a,storeNames:e})},function(a,b){c(b)})},function(a){c(a)})})}function ca(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;return d=a.name?new va(function(b){var d;d=a.name===c.name?e._dbInfo.db:openDatabase(a.name,"","",0),b(a.storeName?{db:d,storeNames:[a.storeName]}:ba(d))}).then(function(a){return new va(function(b,c){a.db.transaction(function(d){function e(a){return new va(function(b,c){d.executeSql("DROP TABLE IF EXISTS "+a,[],function(){b()},function(a,b){c(b)})})}for(var f=[],g=0,h=a.storeNames.length;g<h;g++)f.push(e(a.storeNames[g]));va.all(f).then(function(){b()}).catch(function(a){c(a)})},function(a){c(a)})})}):va.reject("Invalid arguments"),h(d,b),d}function da(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(a){return!1}}function ea(a,b){var c=a.name+"/";return a.storeName!==b.storeName&&(c+=a.storeName+"/"),c}function fa(){var a="_localforage_support_test";try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!1}catch(a){return!0}}function ga(){return!fa()||localStorage.length>0}function ha(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=ea(a,b._defaultConfig),ga()?(b._dbInfo=c,c.serializer=Va,va.resolve()):va.reject()}function ia(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return h(c,a),c}function ja(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return h(d,b),d}function ka(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;h<f;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),void 0!==(j=a(j,i.substring(e),g++)))return j}}});return h(d,b),d}function la(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(a){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return h(d,b),d}function ma(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;e<c;e++){var f=localStorage.key(e);0===f.indexOf(a.keyPrefix)&&d.push(f.substring(a.keyPrefix.length))}return d});return h(c,a),c}function na(a){var b=this,c=b.keys().then(function(a){return a.length});return h(c,a),c}function oa(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return h(d,b),d}function pa(a,b,c){var d=this;a=j(a);var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new va(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(a){"QuotaExceededError"!==a.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==a.name||f(a),f(a)}})})});return h(e,c),e}function qa(a,b){if(b=k.apply(this,arguments),a="function"!=typeof a&&a||{},!a.name){var c=this.config();a.name=a.name||c.name,a.storeName=a.storeName||c.storeName}var d,e=this;return d=a.name?new va(function(b){b(a.storeName?ea(a,e._defaultConfig):a.name+"/")}).then(function(a){for(var b=localStorage.length-1;b>=0;b--){var c=localStorage.key(b);0===c.indexOf(a)&&localStorage.removeItem(c)}}):va.reject("Invalid arguments"),h(d,b),d}function ra(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function sa(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&($a(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}var ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ua=e();"undefined"==typeof Promise&&a(3);var va=Promise,wa="local-forage-detect-blob-support",xa=void 0,ya={},za=Object.prototype.toString,Aa="readonly",Ba="readwrite",Ca={_driver:"asyncStorage",_initStorage:C,_support:f(),iterate:E,getItem:D,setItem:F,removeItem:G,clear:H,length:I,key:J,keys:K,dropInstance:L},Da="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ea="~~local_forage_type~",Fa=/^~~local_forage_type~([^~]+)~/,Ga="__lfsc__:",Ha=Ga.length,Ia="arbf",Ja="blob",Ka="si08",La="ui08",Ma="uic8",Na="si16",Oa="si32",Pa="ur16",Qa="ui32",Ra="fl32",Sa="fl64",Ta=Ha+Ia.length,Ua=Object.prototype.toString,Va={serialize:P,deserialize:Q,stringToBuffer:N,bufferToString:O},Wa={_driver:"webSQLStorage",_initStorage:S,_support:M(),iterate:V,getItem:U,setItem:X,removeItem:Y,clear:Z,length:$,key:_,keys:aa,dropInstance:ca},Xa={_driver:"localStorageWrapper",_initStorage:ha,_support:da(),iterate:ka,getItem:ja,setItem:pa,removeItem:oa,clear:ia,length:na,key:la,keys:ma,dropInstance:qa},Ya=function(a,b){return a===b||"number"==typeof a&&"number"==typeof b&&isNaN(a)&&isNaN(b)},Za=function(a,b){for(var c=a.length,d=0;d<c;){if(Ya(a[d],b))return!0;d++}return!1},$a=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},_a={},ab={},bb={INDEXEDDB:Ca,WEBSQL:Wa,LOCALSTORAGE:Xa},cb=[bb.INDEXEDDB._driver,bb.WEBSQL._driver,bb.LOCALSTORAGE._driver],db=["dropInstance"],eb=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(db),fb={description:"",driver:cb.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},gb=function(){function a(b){d(this,a);for(var c in bb)if(bb.hasOwnProperty(c)){var e=bb[c],f=e._driver;this[c]=f,_a[f]||this.defineDriver(e)}this._defaultConfig=sa({},fb),this._config=sa({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return a.prototype.config=function(a){if("object"===(void 0===a?"undefined":ta(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a){if("storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),"version"===b&&"number"!=typeof a[b])return new Error("Database version must be a number.");this._config[b]=a[b]}return!("driver"in a&&a.driver)||this.setDriver(this._config.driver)}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(a,b,c){var d=new va(function(b,c){try{var d=a._driver,e=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver)return void c(e);for(var f=eb.concat("_initStorage"),g=0,i=f.length;g<i;g++){var j=f[g];if((!Za(db,j)||a[j])&&"function"!=typeof a[j])return void c(e)}(function(){for(var b=function(a){return function(){var b=new Error("Method "+a+" is not implemented by the current driver"),c=va.reject(b);return h(c,arguments[arguments.length-1]),c}},c=0,d=db.length;c<d;c++){var e=db[c];a[e]||(a[e]=b(e))}})();var k=function(c){_a[d]&&console.info("Redefining LocalForage driver: "+d),_a[d]=a,ab[d]=c,b()};"_support"in a?a._support&&"function"==typeof a._support?a._support().then(k,c):k(!!a._support):k(!0)}catch(a){c(a)}});return i(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=_a[a]?va.resolve(_a[a]):va.reject(new Error("Driver not found."));return i(d,b,c),d},a.prototype.getSerializer=function(a){var b=va.resolve(Va);return i(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return i(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){g._config.driver=g.driver()}function e(a){return g._extend(a),d(),g._ready=g._initStorage(g._config),g._ready}function f(a){return function(){function b(){for(;c<a.length;){var f=a[c];return c++,g._dbInfo=null,g._ready=null,g.getDriver(f).then(e).catch(b)}d();var h=new Error("No available storage method found.");return g._driverSet=va.reject(h),g._driverSet}var c=0;return b()}}var g=this;$a(a)||(a=[a]);var h=this._getSupportedDrivers(a),j=null!==this._driverSet?this._driverSet.catch(function(){return va.resolve()}):va.resolve();return this._driverSet=j.then(function(){var a=h[0];return g._dbInfo=null,g._ready=null,g.getDriver(a).then(function(a){g._driver=a._driver,d(),g._wrapLibraryMethodsWithReady(),g._initDriver=f(h)})}).catch(function(){d();var a=new Error("No available storage method found.");return g._driverSet=va.reject(a),g._driverSet}),i(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!ab[a]},a.prototype._extend=function(a){sa(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,b=eb.length;a<b;a++)ra(this,eb[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),hb=new gb;b.exports=hb},{3:3}]},{},[4])(4)});
define('app/promises/promise.queue',[], () => {
    'use strict';

    /**
     * sequential promise queue
     * @see https://medium.com/@karenmarkosyan/how-to-manage-promises-into-dynamic-queue-with-vanilla-javascript-9d0d1f8d4df5
     * @see https://codepen.io/exodus4d/pen/QWwgKay
     */
    return class Queue {

        constructor() {
            this._queue = [];
            this._pendingPromise = false;
            this._stop = false;
        }

        /**
         * wraps a promise that needs to be sequentially resolved
         * -> dequeue() process starts immediately (if not already pending)
         * @param promise
         * @param {'end'|'start'} position
         * @param data
         * @returns {Promise}
         */
        enqueue(promise, position = 'end', data = null) {
            return new Promise((resolve, reject) => {
                this._queue[position === 'end' ? 'push' : 'unshift']({
                    promise,
                    resolve,
                    reject,
                    data,
                });
                this.dequeue();
            });
        }

        /**
         * resolve promise queue recursive until queue is empty
         * @returns {boolean}
         */
        dequeue() {
            if (this._pendingPromise) {
                return false;
            }

            if (this._stop) {
                this._queue = [];
                this._stop = false;
                return false;
            }

            let item = this._queue.shift();
            if (!item) {
                return false;
            }

            try {
                this._pendingPromise = true;
                item.promise()
                    .then((value) => {
                        this._pendingPromise = false;
                        item.resolve(value);
                        this.dequeue();
                    })
                    .catch(err => {
                        this._pendingPromise = false;
                        item.reject(err);
                        this.dequeue();
                    });
            } catch (err) {
                this._pendingPromise = false;
                item.reject(err);
                this.dequeue();
            }
            return true;
        }

        filterQueue(callback) {
            return this._queue.filter(callback);
        }
    };
});
define('app/promises/promise.deferred',[], () => {
    'use strict';

    /**
     * Deferred Promise implementation
     * @see https://stackoverflow.com/a/47112177/4329969
     */
    return class DeferredPromise {

        constructor(){
            this._promise = new Promise((resolve, reject) => {
                // assign the resolve and reject functions to `this`
                // making them usable on the class instance
                this.resolve = resolve;
                this.reject = reject;
            });

            // bind `then` and `catch` to implement the same interface as Promise
            this.then = this._promise.then.bind(this._promise);
            this.catch = this._promise.catch.bind(this._promise);
        }

        set data(data){
            if(data){
                this._data = data;
            }

            return this._data;
        }

        get data(){
            return this._data;
        }

        get [Symbol.toStringTag]() {
            return 'Promise';
        }
    };
});
define('app/lib/localStore',[
    'localForage',
    'app/promises/promise.queue',
    'app/promises/promise.deferred',
], (LocalForage, PromiseQueue, DeferredPromise) => {
    'use strict';

    /**
     * Instances of LocalStore handle its own LocalForage instance
     */
    class LocalStore {
        constructor(config, LocalForageConfig){
            this._config = Object.assign({}, this.constructor.defaultConfig, config);

            let initPromise = new DeferredPromise();
            this._processQueue = new PromiseQueue();
            this._processQueue.enqueue(() => initPromise);

            this._localforage = LocalForage.createInstance(Object.assign({}, LocalStore.LocalForageConfig, LocalForageConfig));
            this._localforage.ready().then(() => initPromise.resolve());

            this._manager = null;       // reference to LocalStoreManager() that manages this LocalStore instance

            this.debug = (msg,...data) => {
                if(this._config.debug){
                    data = (data || []);
                    data.unshift(this.constructor.name, this._config.name);
                    console.debug('debug: %s %o | ' + msg, ...data);
                }
            };
        }

        /**
         * set scope for this instance
         * -> all read/write actions are scoped
         *    this is a prefix for all keys!
         * @param scope
         */
        set scope(scope){
            if(LocalStore.isString(scope)){
                this._config.scope = scope;
            }else{
                throw new TypeError('Scope must be instance of "String", Type of "' + typeof scope + '" given');
            }
        }

        get scope(){
            return this._config.scope;
        }

        /**
         * get item
         * @param key
         * @param successCallback
         * @returns {Promise}
         */
        getItem(key, successCallback = undefined){
            key = this.fixKey(key);
            let propArray = LocalStore.keyToArray(key);
            let rootKey = propArray.shift();

            let getItem = () => this._localforage.getItem(key, successCallback);
            if(propArray.length){
                getItem = () => {
                    return this._localforage.getItem(rootKey)
                        .then(data => {
                            if(LocalStore.isObject(data)){
                                // find nested property
                                return LocalStore.findObjProp(data, propArray);
                            }else{
                                // rootKey not found -> propArray path not exists
                                return Promise.resolve(null);
                            }
                        });
                };
            }

            return this._processQueue.enqueue(() => getItem());
        }

        /**
         * set/update existing value
         * @param key e.g. nested object key' first.a.b.test'
         * @param value
         * @param successCallback
         * @returns {Promise}
         */
        setItem(key, value, successCallback = undefined){
            key = this.fixKey(key);
            let propArray = LocalStore.keyToArray(key);
            let rootKey = propArray.shift();

            let getItem = () => Promise.resolve(value);
            if(propArray.length){
                getItem = () => {
                    return this._localforage.getItem(rootKey)
                        .then(rootVal => {
                            rootVal = (rootVal === null) ? {} : rootVal;
                            // update data with new value (merge obj)
                            LocalStore.updateObjProp(rootVal, value, propArray);
                            return rootVal;
                        });
                };
            }

            return this._processQueue.enqueue(() =>
                getItem()
                    .then(rootVal => this._localforage.setItem(rootKey, rootVal, successCallback))
                    .then(() => Promise.resolve(value))
            );
        }

        /**
         * remove item by key
         * -> allows deep obj delete if key points to a nested obj prop
         * @param key
         * @param successCallback
         * @returns {Promise}
         */
        removeItem(key, successCallback = undefined){
            key = this.fixKey(key);
            let propArray = LocalStore.keyToArray(key);
            let rootKey = propArray.shift();

            let removeItem = () => this._localforage.removeItem(rootKey, successCallback);
            if(propArray.length){
                removeItem = () => {
                    return this._localforage.getItem(rootKey)
                        .then(data => {
                            if(LocalStore.isObject(data)){
                                // update data -> delete nested prop
                                LocalStore.deleteObjProp(data, propArray);
                                return data;
                            }else{
                                // rootKey not found -> nothing to delete
                                return Promise.reject(new RangeError('No data found for key: ' + rootKey));
                            }
                        })
                        .then(value => this._localforage.setItem(rootKey, value, successCallback))
                        .catch(e => this.debug('removeItem() error',e));
                };
            }

            return this._processQueue.enqueue(() => removeItem());
        }

        /**
         * clear all items in store
         * @param successCallback
         * @returns {Promise}
         */
        clear(successCallback = undefined){
            return this._processQueue.enqueue(() => this._localforage.clear(successCallback));
        }

        /**
         * get number of keys in store
         * @param successCallback
         * @returns {Promise}
         */
        length(successCallback = undefined){
            return this._processQueue.enqueue(() => this._localforage.length(successCallback));
        }

        /**
         * Get the name of a key based on its index
         * @param keyIndex
         * @param successCallback
         * @returns {Promise|void}
         */
        key(keyIndex, successCallback = undefined){
            return this._processQueue.enqueue(() => this._localforage.key(keyIndex, successCallback));
        }

        /**
         * get list of all keys in store
         * @param successCallback
         * @returns {Promise|void}
         */
        keys(successCallback = undefined){
            return this._processQueue.enqueue(() => this._localforage.keys(successCallback));
        }

        /**
         * drop current LocalForage instance
         * -> removes this from LocalStoreManager
         * @returns {Promise|void}
         */
        dropInstance(){
            return this._processQueue.enqueue(() =>
                this._localforage.dropInstance().then(() => this._manager.deleteStore(this._config.name))
            );
        }

        /**
         * connect LocalStoreManager with instance
         * @param {LocalStoreManager} manager
         */
        connect(manager){
            if(manager instanceof LocalStoreManager){
                this._manager = manager;
            }else{
                throw new TypeError('Parameter must be instance of LocalStoreManager. Type of "' + typeof manager + '" given');
            }
        }

        /**
         * check if key is Int or String with Int at pos 0
         * -> prefix key
         * @param key
         * @returns {string}
         */
        fixKey(key){
            if(LocalStore.isString(this.scope) && this.scope.length){
                key = [this.scope, key].join('.');
            }

            if(
                Number.isInteger(key) ||
                (LocalStore.isString(key) && parseInt(key.charAt(0), 10))
            ){
                key = [this._config.name, key].join('_');
            }
            return key;
        }

        /**
         * find data from obj prop
         * -> deep object search
         * @param obj
         * @param propArray
         * @returns {null|*}
         */
        static findObjProp(obj, propArray){
            let [head, ...rest] = propArray;
            if(!rest.length){
                 return obj[head];
            }else{
                if(LocalStore.isObject(obj[head])){
                    return LocalStore.findObjProp(obj[head], rest);
                }else{
                    return null;
                }
            }
        }

        /**
         * update/extend obj with new value
         * -> deep object manipulation
         * @param obj
         * @param value
         * @param propArray
         */
        static updateObjProp(obj, value, propArray){
            let [head, ...rest] = propArray;
            if(!rest.length){
                obj[head] = value;
            }else{
                if(!LocalStore.isObject(obj[head])) obj[head] = {};
                LocalStore.updateObjProp(obj[head], value, rest);
            }
        }

        /**
         * delete object prop by propArray path
         * -> deep object delete
         * @param obj
         * @param propArray
         */
        static deleteObjProp(obj, propArray){
            let [head, ...rest] = propArray;
            if(!rest.length){
                delete obj[head];
            }else{
                if(LocalStore.isObject(obj[head])){
                    LocalStore.deleteObjProp(obj[head], rest);
                }
            }
        }

        /**
         * converts string key to array
         * @param propPath
         * @returns {*|string[]}
         */
        static keyToArray(propPath){
            return propPath.split('.');
        }

        /**
         * build DB name
         * @param name
         * @returns {string}
         */
        static buildDbName(name){
            return [LocalStore.dbNamePrefix, name].join(' ');
        }

        /**
         * check var for Object
         * @param obj
         * @returns {boolean}
         */
        static isObject(obj){
            return (!!obj) && (obj.constructor === Object);
        }

        /**
         * check var for Array
         * @param arr
         * @returns {boolean}
         */
        static isArray(arr){
            return (!!arr) && (arr.constructor === Array);
        }

        /**
         * check var for String
         * @param str
         * @returns {boolean}
         */
        static isString(str){
            return typeof str === 'string';
        }
    }

    LocalStore.defaultConfig = {
        name: 'default',            // custom unique name for identification
        debug: false
    };

    LocalStore.dbNamePrefix = 'PathfinderDB';
    LocalStore.LocalForageConfig = {
        driver: [LocalForage.INDEXEDDB, LocalForage.WEBSQL, LocalForage.LOCALSTORAGE],
        name: LocalStore.dbNamePrefix
    };

    /**
     * An instance of LocalStoreManager() handles multiple LocalStore()´s
     * -> LocalStore()´s can be set()/delete() from LocalStore() instance
     */
    class LocalStoreManager {

        constructor(){
            if(!this.constructor.instance){
                this._store = new Map();
                this.constructor.instance = this;
            }

            return this.constructor.instance;
        }

        /**
         * get LocalStore instance by name
         * @param name
         * @returns {LocalStore}
         */
        getStore(name){
            return this.newStore(name);
        }

        /**
         * get either existing LocalStore instance
         * -> or create new instance
         * @param name
         * @returns {LocalStore|undefined}
         */
        newStore(name){
            if(!this._store.has(name)){
                let store = new LocalStore({
                    name: name
                }, {
                    name: LocalStore.buildDbName(name)
                });
                store.connect(this);
                this._store.set(name, store);
            }
            return this._store.get(name);
        }

        /**
         * removes LocalStore instance from Manager
         * -> this will not drop LocalForage instance!
         *    check LocalStore.dropInstance() for graceful delete
         * @param name
         * @returns {boolean}
         */
        deleteStore(name){
            return this._store.delete(name);
        }
    }

    return new LocalStoreManager();
});
define('app/lib/resize',[], () => {
    'use strict';

    class ResizeManager {
        constructor(config = {}) {
            this._config    = Object.assign({}, ResizeManager.defaultConfig, config);
            this._observables = new WeakMap();
            this._observer = new ResizeObserver((entries, observer) => { // jshint ignore:line
                for (let entry of entries) {
                    if (this._observables.has(entry.target)) {
                        this._observables
                            .get(entry.target)
                            .callback(entry.target, entry.contentRect);
                    } else {
                        this._observer.unobserve(entry.target);
                    }
                }
            });
        }

        debounce(callback, ms = this._config.msDebounce, immediate = false) {
            let timer;
            return (...args) => {
                let later = () => {
                    timer = null;
                    if (!immediate) callback(...args);
                };
                let callNow = immediate && !timer;
                clearTimeout(timer);
                timer = setTimeout(later, ms);
                if (callNow) callback(...args);
            };
        }

        throttle(callback, ms = this._config.msThrottle) {
            let lastFunc;
            let lastRan;
            return function (...args) {
                if (!lastRan) {
                    callback(...args);
                    lastRan = Date.now();
                } else {
                    clearTimeout(lastFunc);
                    lastFunc = setTimeout(() => {
                        if (Date.now() - lastRan >= ms) {
                            callback(...args);
                            lastRan = Date.now();
                        }
                    }, ms - (Date.now() - lastRan));
                }
            };
        }

        observe(target, callback, config = {}, options = ResizeManager.observeOptions) {
            if (!this._observables.has(target)) {
                if (config.hasOwnProperty('debounce')) {
                    let {ms, immediate} = config;
                    callback = this.debounce(callback, ms, immediate);
                }

                if (config.hasOwnProperty('throttle')) {
                    let {ms} = config;
                    callback = this.throttle(callback, ms);
                }

                this._observables.set(target, {callback});
                this._observer.observe(target, options);
            }
        }

        unobserve(target) {
            this._observer.unobserve(target);
            this._observables.delete(target);
        }

        disconnect() {
            this._observer.disconnect();
            this._observables = new WeakMap();
        }
    }

    ResizeManager.observeOptions = {
        box:            'border-box'    // sets which box model the observer will observe changes to
    };

    ResizeManager.defaultConfig = {
        msDebounce:     250,            // setTimeout for debounced calls
        msThrottle:     100             // setTimeout for throttled calls
    };

    return new ResizeManager();
});
/**
 * Created by exodus4d on 06.07.2015.
 * static system effects
 */


define('conf/system_effect',[], () => {

    'use strict';

    /**
     * get system effect multiplier
     * @param areaId
     * @returns {number}
     */
    let getMultiplierByAreaId = areaId => {
        let multiply = 0;
        switch(areaId){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                multiply = areaId;  // C1-C6 holes
                break;
            case 13:
                multiply = 6;       // Shattered frigate holes
                break;
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                multiply = 2;       // Drifter space
                break;
        }

        return multiply;
    };


    let magnetar = {
        1: [
            {
                effect: 'Damage',
                value: '+30%'
            }, {
                effect: 'Missile exp. radius',
                value: '+15%'
            }, {
                effect: 'Drone tracking',
                value: '-15%'
            }, {
                effect: 'Targeting range',
                value: '-15%'
            }, {
                effect: 'Tracking speed',
                value: '-15%'
            }, {
                effect: 'Target Painter strength',
                value: '-15%'
            }
        ],
        2: [
            {
                effect: 'Damage',
                value: '+44%'
            }, {
                effect: 'Missile exp. radius',
                value: '+22%'
            }, {
                effect: 'Drone tracking',
                value: '-22%'
            }, {
                effect: 'Targeting range',
                value: '-22%'
            }, {
                effect: 'Tracking speed',
                value: '-22%'
            }, {
                effect: 'Target Painter strength',
                value: '-22%'
            }
        ],
        3: [
            {
                effect: 'Damage',
                value: '+58%'
            }, {
                effect: 'Missile exp. radius',
                value: '+29%'
            }, {
                effect: 'Drone tracking',
                value: '-29%'
            }, {
                effect: 'Targeting range',
                value: '-29%'
            }, {
                effect: 'Tracking speed',
                value: '-29%'
            }, {
                effect: 'Target Painter strength',
                value: '-29%'
            }
        ],
        4: [
            {
                effect: 'Damage',
                value: '+72%'
            }, {
                effect: 'Missile exp. radius',
                value: '+36%'
            }, {
                effect: 'Drone tracking',
                value: '-36%'
            }, {
                effect: 'Targeting range',
                value: '-36%'
            }, {
                effect: 'Tracking speed',
                value: '-36%'
            }, {
                effect: 'Target Painter strength',
                value: '-36%'
            }
        ],
        5: [
            {
                effect: 'Damage',
                value: '+86%'
            }, {
                effect: 'Missile exp. radius',
                value: '+43%'
            }, {
                effect: 'Drone tracking',
                value: '-43%'
            }, {
                effect: 'Targeting range',
                value: '-43%'
            }, {
                effect: 'Tracking speed',
                value: '-43%'
            }, {
                effect: 'Target Painter strength',
                value: '-43%'
            }
        ],
        6: [
            {
                effect: 'Damage',
                value: '+100%'
            }, {
                effect: 'Missile exp. radius',
                value: '+50%'
            }, {
                effect: 'Drone tracking',
                value: '-50%'
            }, {
                effect: 'Targeting range',
                value: '-50%'
            }, {
                effect: 'Tracking speed',
                value: '-50%'
            }, {
                effect: 'Target Painter strength',
                value: '-50%'
            }
        ]
    };

    let redGiant = {
        1: [
            {
                effect: 'Heat damage',
                value: '+15%'
            }, {
                effect: 'Overload bonus',
                value: '+30%'
            }, {
                effect: 'Smart Bomb range',
                value: '+30%'
            }, {
                effect: 'Smart Bomb damage',
                value: '+30%'
            }, {
                effect: 'Bomb damage',
                value: '+30%'
            }
        ],
        2: [
            {
                effect: 'Heat damage',
                value: '+22%'
            }, {
                effect: 'Overload bonus',
                value: '+44%'
            }, {
                effect: 'Smart Bomb range',
                value: '+44%'
            }, {
                effect: 'Smart Bomb damage',
                value: '+44%'
            }, {
                effect: 'Bomb damage',
                value: '+44%'
            }
        ],
        3: [
            {
                effect: 'Heat damage',
                value: '+29%'
            }, {
                effect: 'Overload bonus',
                value: '+58%'
            }, {
                effect: 'Smart Bomb range',
                value: '+58%'
            }, {
                effect: 'Smart Bomb damage',
                value: '+58%'
            }, {
                effect: 'Bomb damage',
                value: '+58%'
            }
        ],
        4: [
            {
                effect: 'Heat damage',
                value: '+36%'
            }, {
                effect: 'Overload bonus',
                value: '+72%'
            }, {
                effect: 'Smart Bomb range',
                value: '+72%'
            }, {
                effect: 'Smart Bomb damage',
                value: '+72%'
            }, {
                effect: 'Bomb damage',
                value: '+72%'
            }
        ],
        5: [
            {
                effect: 'Heat damage',
                value: '+43%'
            }, {
                effect: 'Overload bonus',
                value: '+86%'
            }, {
                effect: 'Smart Bomb range',
                value: '+86%'
            }, {
                effect: 'Smart Bomb damage',
                value: '+86%'
            }, {
                effect: 'Bomb damage',
                value: '+86%'
            }
        ],
        6: [
            {
                effect: 'Heat damage',
                value: '+50%'
            }, {
                effect: 'Overload bonus',
                value: '+100%'
            }, {
                effect: 'Smart Bomb range',
                value: '+100%'
            }, {
                effect: 'Smart Bomb damage',
                value: '+100%'
            }, {
                effect: 'Bomb damage',
                value: '+100%'
            }
        ]
    };

    let pulsar = {
        1: [
            {
                effect: 'Shield HP',
                value: '+30%'
            }, {
                effect: 'Armor resist',
                value: '-15%'
            }, {
                effect: 'Capacitor recharge',
                value: '-15%'
            }, {
                effect: 'Signature',
                value: '+30%'
            }, {
                effect: 'NOS/Neut drain',
                value: '+30%'
            }
        ],
        2: [
            {
                effect: 'Shield HP',
                value: '+44%'
            }, {
                effect: 'Armor resist',
                value: '-22%'
            }, {
                effect: 'Capacitor recharge',
                value: '-22%'
            }, {
                effect: 'Signature',
                value: '+44%'
            }, {
                effect: 'NOS/Neut drain',
                value: '+44%'
            }
        ],
        3: [
            {
                effect: 'Shield HP',
                value: '+58%'
            }, {
                effect: 'Armor resist',
                value: '-29%'
            }, {
                effect: 'Capacitor recharge',
                value: '-29%'
            }, {
                effect: 'Signature',
                value: '+58%'
            }, {
                effect: 'NOS/Neut drain',
                value: '+58%'
            }
        ],
        4: [
            {
                effect: 'Shield HP',
                value: '+72%'
            }, {
                effect: 'Armor resist',
                value: '-36%'
            }, {
                effect: 'Capacitor recharge',
                value: '-36%'
            }, {
                effect: 'Signature',
                value: '+72%'
            }, {
                effect: 'NOS/Neut drain',
                value: '+72%'
            }
        ],
        5: [
            {
                effect: 'Shield HP',
                value: '+86%'
            }, {
                effect: 'Armor resist',
                value: '-43%'
            }, {
                effect: 'Capacitor recharge',
                value: '-43%'
            }, {
                effect: 'Signature',
                value: '+86%'
            }, {
                effect: 'NOS/Neut drain',
                value: '+86%'
            }
        ],
        6: [
            {
                effect: 'Shield HP',
                value: '+100%'
            }, {
                effect: 'Armor resist',
                value: '-50%'
            }, {
                effect: 'Capacitor recharge',
                value: '-50%'
            }, {
                effect: 'Signature',
                value: '+100%'
            }, {
                effect: 'NOS/Neut drain',
                value: '+100%'
            }
        ]
    };

    let wolfRayet = {
        1: [
            {
                effect: 'Armor HP',
                value: '+30%'
            }, {
                effect: 'Shield resist',
                value: '-15%'
            }, {
                effect: 'Small Weapon damage',
                value: '+60%'
            }, {
                effect: 'Signature size',
                value: '-15%'
            }
        ],
        2: [
            {
                effect: 'Armor HP',
                value: '+44%'
            }, {
                effect: 'Shield resist',
                value: '-22%'
            }, {
                effect: 'Small Weapon damage',
                value: '+88%'
            }, {
                effect: 'Signature size',
                value: '-22%'
            }
        ],
        3: [
            {
                effect: 'Armor HP',
                value: '+58%'
            }, {
                effect: 'Shield resist',
                value: '-29%'
            }, {
                effect: 'Small Weapon damage',
                value: '+116%'
            }, {
                effect: 'Signature size',
                value: '-29%'
            }
        ],
        4: [
            {
                effect: 'Armor HP',
                value: '+72%'
            }, {
                effect: 'Shield resist',
                value: '-36%'
            }, {
                effect: 'Small Weapon damage',
                value: '+144%'
            }, {
                effect: 'Signature size',
                value: '-36%'
            }
        ],
        5: [
            {
                effect: 'Armor HP',
                value: '+86%'
            }, {
                effect: 'Shield resist',
                value: '-43%'
            }, {
                effect: 'Small Weapon damage',
                value: '+172%'
            }, {
                effect: 'Signature size',
                value: '-43%'
            }
        ],
        6: [
            {
                effect: 'Armor HP',
                value: '+100%'
            }, {
                effect: 'Shield resist',
                value: '-50%'
            }, {
                effect: 'Small Weapon damage',
                value: '+200%'
            }, {
                effect: 'Signature size',
                value: '-50%'
            }
        ]
    };

    let cataclysmic = {
        1: [
            {
                effect: 'Local armor repair amount',
                value: '-15%'
            }, {
                effect: 'Local shield boost amount',
                value: '-15%'
            }, {
                effect: 'Shield transfer amount',
                value: '+30%'
            }, {
                effect: 'Remote repair amount',
                value: '+30%'
            }, {
                effect: 'Capacitor capacity',
                value: '+30%'
            }, {
                effect: 'Capacitor recharge time',
                value: '+15%'
            }, {
                effect: 'Remote Capacitor Transmitter amount',
                value: '-15%'
            }
        ],
        2: [
            {
                effect: 'Local armor repair amount',
                value: '-22%'
            }, {
                effect: 'Local shield boost amount',
                value: '-22%'
            }, {
                effect: 'Shield transfer amount',
                value: '+44%'
            }, {
                effect: 'Remote repair amount',
                value: '+44%'
            }, {
                effect: 'Capacitor capacity',
                value: '+44%'
            }, {
                effect: 'Capacitor recharge time',
                value: '+22%'
            }, {
                effect: 'Remote Capacitor Transmitter amount',
                value: '-22%'
            }
        ],
        3: [
            {
                effect: 'Local armor repair amount',
                value: '-29%'
            }, {
                effect: 'Local shield boost amount',
                value: '-29%'
            }, {
                effect: 'Shield transfer amount',
                value: '+58%'
            }, {
                effect: 'Remote repair amount',
                value: '+58%'
            }, {
                effect: 'Capacitor capacity',
                value: '+58%'
            }, {
                effect: 'Capacitor recharge time',
                value: '+29%'
            }, {
                effect: 'Remote Capacitor Transmitter amount',
                value: '-29%'
            }
        ],
        4: [
            {
                effect: 'Local armor repair amount',
                value: '-36%'
            }, {
                effect: 'Local shield boost amount',
                value: '-36%'
            }, {
                effect: 'Shield transfer amount',
                value: '+72%'
            }, {
                effect: 'Remote repair amount',
                value: '+72%'
            }, {
                effect: 'Capacitor capacity',
                value: '+72%'
            }, {
                effect: 'Capacitor recharge time',
                value: '+36%'
            }, {
                effect: 'Remote Capacitor Transmitter amount',
                value: '-36%'
            }
        ],
        5: [
            {
                effect: 'Local armor repair amount',
                value: '-43%'
            }, {
                effect: 'Local shield boost amount',
                value: '-43%'
            }, {
                effect: 'Shield transfer amount',
                value: '+86%'
            }, {
                effect: 'Remote repair amount',
                value: '+86%'
            }, {
                effect: 'Capacitor capacity',
                value: '+86%'
            }, {
                effect: 'Capacitor recharge time',
                value: '+43%'
            }, {
                effect: 'Remote Capacitor Transmitter amount',
                value: '-43%'
            }
        ],
        6: [
            {
                effect: 'Local armor repair amount',
                value: '-50%'
            }, {
                effect: 'Local shield boost amount',
                value: '-50%'
            }, {
                effect: 'Shield transfer amount',
                value: '+100%'
            }, {
                effect: 'Remote repair amount',
                value: '+100%'
            }, {
                effect: 'Capacitor capacity',
                value: '+100%'
            }, {
                effect: 'Capacitor recharge time',
                value: '+50%'
            }, {
                effect: 'Remote Capacitor Transmitter amount',
                value: '-50%'
            }
        ]
    };

    let blackHole = {
        1: [
            {
                effect: 'Missile velocity',
                value: '+15%'
            }, {
                effect: 'Missile exp. velocity',
                value: '+30%'
            }, {
                effect: 'Ship velocity',
                value: '+30%'
            }, {
                effect: 'Stasis Webifier strength',
                value: '-15%'
            }, {
                effect: 'Inertia',
                value: '+15%'
            }, {
                effect: 'Targeting range',
                value: '+30%'
            }
        ],
        2: [
            {
                effect: 'Missile velocity',
                value: '+22%'
            }, {
                effect: 'Missile exp. velocity',
                value: '+44%'
            }, {
                effect: 'Ship velocity',
                value: '+44%'
            }, {
                effect: 'Stasis Webifier strength',
                value: '-22%'
            }, {
                effect: 'Inertia',
                value: '+22%'
            }, {
                effect: 'Targeting range',
                value: '+44%'
            }
        ],
        3: [
            {
                effect: 'Missile velocity',
                value: '+29%'
            }, {
                effect: 'Missile exp. velocity',
                value: '+58%'
            }, {
                effect: 'Ship velocity',
                value: '+58%'
            }, {
                effect: 'Stasis Webifier strength',
                value: '-29%'
            }, {
                effect: 'Inertia',
                value: '+29%'
            }, {
                effect: 'Targeting range',
                value: '+58%'
            }
        ],
        4: [
            {
                effect: 'Missile velocity',
                value: '+36%'
            }, {
                effect: 'Missile exp. velocity',
                value: '+72%'
            }, {
                effect: 'Ship velocity',
                value: '+72%'
            }, {
                effect: 'Stasis Webifier strength',
                value: '-36%'
            }, {
                effect: 'Inertia',
                value: '+36%'
            }, {
                effect: 'Targeting range',
                value: '+72%'
            }
        ],
        5: [
            {
                effect: 'Missile velocity',
                value: '+43%'
            }, {
                effect: 'Missile exp. velocity',
                value: '+86%'
            }, {
                effect: 'Ship velocity',
                value: '+86%'
            }, {
                effect: 'Stasis Webifier strength',
                value: '-43%'
            }, {
                effect: 'Inertia',
                value: '+43%'
            }, {
                effect: 'Targeting range',
                value: '+86%'
            }
        ],
        6: [
            {
                effect: 'Missile velocity',
                value: '+50%'
            }, {
                effect: 'Missile exp. velocity',
                value: '+100%'
            }, {
                effect: 'Ship velocity',
                value: '+100%'
            }, {
                effect: 'Stasis Webifier strength',
                value: '-50%'
            }, {
                effect: 'Inertia',
                value: '+50%'
            }, {
                effect: 'Targeting range',
                value: '+100%'
            }
        ]
    };

    // system effects
    return {
        getMultiplierByAreaId: getMultiplierByAreaId,
        wh: {
            magnetar: {
                1: magnetar[getMultiplierByAreaId(1)],
                2: magnetar[getMultiplierByAreaId(2)],
                3: magnetar[getMultiplierByAreaId(3)],
                4: magnetar[getMultiplierByAreaId(4)],
                5: magnetar[getMultiplierByAreaId(5)],
                6: magnetar[getMultiplierByAreaId(6)],
                16: magnetar[getMultiplierByAreaId(16)]
            },
            redGiant: {
                1: redGiant[getMultiplierByAreaId(1)],
                2: redGiant[getMultiplierByAreaId(2)],
                3: redGiant[getMultiplierByAreaId(3)],
                4: redGiant[getMultiplierByAreaId(4)],
                5: redGiant[getMultiplierByAreaId(5)],
                6: redGiant[getMultiplierByAreaId(6)],
                14: redGiant[getMultiplierByAreaId(14)]
            },
            pulsar: {
                1: pulsar[getMultiplierByAreaId(1)],
                2: pulsar[getMultiplierByAreaId(2)],
                3: pulsar[getMultiplierByAreaId(3)],
                4: pulsar[getMultiplierByAreaId(4)],
                5: pulsar[getMultiplierByAreaId(5)],
                6: pulsar[getMultiplierByAreaId(6)],
                17: pulsar[getMultiplierByAreaId(17)]
            },
            wolfRayet: {
                1: wolfRayet[getMultiplierByAreaId(1)],
                2: wolfRayet[getMultiplierByAreaId(2)],
                3: wolfRayet[getMultiplierByAreaId(3)],
                4: wolfRayet[getMultiplierByAreaId(4)],
                5: wolfRayet[getMultiplierByAreaId(5)],
                6: wolfRayet[getMultiplierByAreaId(6)],
                13: wolfRayet[getMultiplierByAreaId(13)],
                18: wolfRayet[getMultiplierByAreaId(18)]
            },
            cataclysmic: {
                1: cataclysmic[getMultiplierByAreaId(1)],
                2: cataclysmic[getMultiplierByAreaId(2)],
                3: cataclysmic[getMultiplierByAreaId(3)],
                4: cataclysmic[getMultiplierByAreaId(4)],
                5: cataclysmic[getMultiplierByAreaId(5)],
                6: cataclysmic[getMultiplierByAreaId(6)],
                15: cataclysmic[getMultiplierByAreaId(15)]
            },
            blackHole: {
                1: blackHole[getMultiplierByAreaId(1)],
                2: blackHole[getMultiplierByAreaId(2)],
                3: blackHole[getMultiplierByAreaId(3)],
                4: blackHole[getMultiplierByAreaId(4)],
                5: blackHole[getMultiplierByAreaId(5)],
                6: blackHole[getMultiplierByAreaId(6)]
            }
        }
    };
});
/**
 * Created by exodus4d
 * static signature types
 *
 * (*) marked fields are in-game verified and
 * proofed, signature names (copy & paste from scanning window)
 */

define('conf/signature_type',[], () => {
    'use strict';

    // signature sources
    // http://de.sistersprobe.wikia.com/wiki/EVE_Sister_Core_Scanner_Probe_Wiki

    // Combat sites ===================================================================================================

    let c1Combat = {
        1: 'Perimeter Ambush Point',
        2: 'Perimeter Camp',
        3: 'Phase Catalyst Node',
        4: 'The Line'
    };

    let c2Combat = {
        1: 'Perimeter Checkpoint',
        2: 'Perimeter Hangar',
        3: 'The Ruins of Enclave Cohort 27',
        4: 'Sleeper Data Sanctuary'
    };

    let c3Combat = {
        1: 'Fortification Frontier Stronghold',
        2: 'Outpost Frontier Stronghold',
        3: 'Solar Cell',
        4: 'The Oruze Construct'
    };

    let c4Combat = {
        1: 'Frontier Barracks',
        2: 'Frontier Command Post',
        3: 'Integrated Terminus',
        4: 'Sleeper Information Sanctum'
    };

    let c5Combat = {
        1: 'Core Garrison', //*
        2: 'Core Stronghold', //*
        3: 'Oruze Osobnyk', //*
        4: 'Quarantine Area'
    };

    let c6Combat = {
        1: 'Core Citadel', //*
        2: 'Core Bastion', //*
        3: 'Strange Energy Readings', //*
        4: 'The Mirror' //*
    };

    // Thera WH
    let c12Combat = {
        1: 'Epicenter',
        2: 'Expedition Command Outpost Wreck',
        3: 'Planetary Colonization Office Wreck',
        4: 'Testing Facilities'
    };

    // Drifter Sentinel WH
    let c14Combat = {
        1: 'Monolith',
        2: 'Wormhole in Rock Circle',
        3: 'Opposing Spatial Rifts',
        4: 'Sleeper Enclave Debris',
        5: 'Crystal Resource'
    };

    // Drifter Barbican WH
    let c15Combat = {
        1: 'Wrecked Ships',
        2: 'Unstable Wormhole',
        3: 'Spatial Rift',
        4: 'Heavily Guarded Spatial Rift',
        5: 'Crystals'
    };

    // Drifter Vidette WH
    let c16Combat = {
        1: 'Ship Graveyard',
        2: 'Sleeper Engineering Station',
        3: 'Spatial Rift',
        4: 'Sleeper Enclave in Coral Rock',
        5: 'Crystals and Stone Circle'
    };

    // Drifter Conflux WH
    let c17Combat = {
        1: 'Monolith',
        2: 'Caged Wormhole',
        3: 'Rock Formation and Wormhole',
        4: 'Particle Acceleration Array',
        5: 'Guarded Asteroid Station'
    };

    // Drifter Redoubt WH
    let c18Combat = {
        1: 'Ship Graveyard',
        2: 'Caged Wormhole',
        3: 'Spatial Rift Generator',
        4: 'Sleeper Enclave',
        5: 'Hollow Asteroid'
    };

    // Relic sites ====================================================================================================

    // NullSec Relic sites, which can also spawn in C1, C2, C3 wormholes
    let nullRelic = {
        10: 'Ruined Angel Crystal Quarry',
        11: 'Ruined Angel Monument Site',
        12: 'Ruined Angel Science Outpost',
        13: 'Ruined Angel Temple Site',
        14: 'Ruined Blood Raider Crystal Quarry',
        15: 'Ruined Blood Raider Monument Site',
        16: 'Ruined Blood Raider Science Outpost',
        17: 'Ruined Blood Raider Temple Site',
        18: 'Ruined Guristas Crystal Quarry',
        19: 'Ruined Guristas Monument Site',
        20: 'Ruined Guristas Science Outpost',
        21: 'Ruined Guristas Temple Site',
        22: 'Ruined Sansha Crystal Quarry',
        23: 'Ruined Sansha Monument Site',
        24: 'Ruined Sansha Science Outpost',
        25: 'Ruined Sansha Temple Site',
        26: 'Ruined Serpentis Crystal Quarry',
        27: 'Ruined Serpentis Monument Site',
        28: 'Ruined Serpentis Science Outpost',
        29: 'Ruined Serpentis Temple Site'
    };

    let c1Relic = Object.assign({}, nullRelic, {
        1: 'Forgotten Perimeter Coronation Platform', //*
        2: 'Forgotten Perimeter Power Array' //*
    });

    let c2Relic = Object.assign({}, nullRelic, {
        1: 'Forgotten Perimeter Gateway', //*
        2: 'Forgotten Perimeter Habitation Coils' //*
    });

    let c3Relic = Object.assign({}, nullRelic, {
        1: 'Forgotten Frontier Quarantine Outpost', //*
        2: 'Forgotten Frontier Recursive Depot' //*
    });

    let c4Relic = {
        1: 'Forgotten Frontier Conversion Module',
        2: 'Forgotten Frontier Evacuation Center'
    };

    let c5Relic = {
        1: 'Forgotten Core Data Field',
        2: 'Forgotten Core Information Pen'
    };

    let c6Relic = {
        1: 'Forgotten Core Assembly Hall', //*
        2: 'Forgotten Core Circuitry Disassembler' //*
    };

    // Data sites =====================================================================================================

    // NulSec Data sites, which can also spawn in C1, C2, C3 wormholes
    let nullData = {
        10: 'Abandoned Research Complex DA005',
        11: 'Abandoned Research Complex DA015',
        12: 'Abandoned Research Complex DC007',
        13: 'Abandoned Research Complex DC021',
        14: 'Abandoned Research Complex DC035',
        15: 'Abandoned Research Complex DG003',
        16: 'Central Angel Command Center',
        17: 'Central Angel Data Mining Site',
        18: 'Central Angel Sparking Transmitter',
        19: 'Central Angel Survey Site',
        20: 'Central Blood Raider Command Center',
        21: 'Central Blood Raider Data Mining Site',
        22: 'Central Blood Raider Sparking Transmitter',
        23: 'Central Blood Raider Survey Site',
        24: 'Central Guristas Command Center',
        25: 'Central Guristas Data Mining Site',
        26: 'Central Guristas Sparking Transmitter',
        27: 'Central Guristas Survey Site',
        28: 'Central Sansha Command Center',
        29: 'Central Sansha Data Mining Site',
        30: 'Central Sansha Sparking Transmitter',
        31: 'Central Sansha Survey Site',
        32: 'Central Serpentis Command Center',
        33: 'Central Serpentis Data Mining Site',
        34: 'Central Serpentis Sparking Transmitter',
        35: 'Central Serpentis Survey Site'
    };

    let c1Data = Object.assign({}, nullData, {
        1: 'Unsecured Perimeter Amplifier', //*
        2: 'Unsecured Perimeter Information Center' //*
    });

    let c2Data = Object.assign({}, nullData, {
        1: 'Unsecured Perimeter Comms Relay', //*
        2: 'Unsecured Perimeter Transponder Farm' //*
    });

    let c3Data = Object.assign({}, nullData, {
        1: 'Unsecured Frontier Database', //*
        2: 'Unsecured Frontier Receiver' //*
    });

    let c4Data = {
        1: 'Unsecured Frontier Digital Nexus',
        2: 'Unsecured Frontier Trinary Hub'
    };

    let c5Data = {
        1: 'Unsecured Frontier Enclave Relay',
        2: 'Unsecured Frontier Server Bank'
    };

    let c6Data = {
        1: 'Unsecured Core Backup Array', //*
        2: 'Unsecured Core Emergence' //*
    };

    // Ghost sites ======================================================================================================

    let hsGh = {
        1: 'Lesser Serpentis Covert Research Facility',
        2: 'Lesser Sansha Covert Research Facility',
        3: 'Lesser Guristas Covert Research Facility',
        4: 'Lesser Blood Raiders Covert Research Facility'
    };

    let lsGh = {
        1: 'Standard Serpentis Covert Research Facility',
        2: 'Standard Sansha Covert Research Facility',
        3: 'Standard Guristas Covert Research Facility',
        4: 'Standard Blood Raiders Covert Research Facility'
    };

    let nsGh = {
        1: 'Improved Serpentis Covert Research Facility',
        2: 'Improved Sansha Covert Research Facility',
        3: 'Improved Guristas Covert Research Facility',
        4: 'Improved Blood Raiders Covert Research Facility'
    };

    let whGh = {
        1: 'Superior Serpentis Covert Research Facility',
        2: 'Superior Sansha Covert Research Facility',
        3: 'Superior Guristas Covert Research Facility',
        4: 'Superior Blood Raiders Covert Research Facility'
    };



    // Gas sites ======================================================================================================

    let c1Gas = {
        1: 'Barren Perimeter Reservoir', //*
        2: 'Token Perimeter Reservoir', //*
        3: 'Minor Perimeter Reservoir', //*
        4: 'Sizeable Perimeter Reservoir', //*
        5: 'Ordinary Perimeter Reservoir' //*
    };

    let c2Gas = {
        1: 'Barren Perimeter Reservoir', //*
        2: 'Token Perimeter Reservoir', //*
        3: 'Minor Perimeter Reservoir', //*
        4: 'Sizeable Perimeter Reservoir', //*
        5: 'Ordinary Perimeter Reservoir' //*
    };

    let c3Gas = {
        1: 'Barren Perimeter Reservoir', //*
        2: 'Token Perimeter Reservoir', //*
        3: 'Minor Perimeter Reservoir', //*
        4: 'Sizeable Perimeter Reservoir', //*
        5: 'Ordinary Perimeter Reservoir', //*
        6: 'Bountiful Frontier Reservoir', //*
        7: 'Vast Frontier Reservoir' //*
    };

    let c4Gas = {
        1: 'Barren Perimeter Reservoir', //*
        2: 'Token Perimeter Reservoir', //*
        3: 'Minor Perimeter Reservoir', //*
        4: 'Sizeable Perimeter Reservoir', //*
        5: 'Ordinary Perimeter Reservoir', //*
        6: 'Vast Frontier Reservoir', //*
        7: 'Bountiful Frontier Reservoir' //*
    };

    let c5Gas = {
        1: 'Barren Perimeter Reservoir', //*
        2: 'Minor Perimeter Reservoir', //*
        3: 'Ordinary Perimeter Reservoir', //*
        4: 'Sizeable Perimeter Reservoir', //*
        5: 'Token Perimeter Reservoir', //*
        6: 'Bountiful Frontier Reservoir', //*
        7: 'Vast Frontier Reservoir', //*
        8: 'Instrumental Core Reservoir', //*
        9: 'Vital Core Reservoir' //*
    };

    let c6Gas = {
        1: 'Barren Perimeter Reservoir', //*
        2: 'Minor Perimeter Reservoir', //*
        3: 'Ordinary Perimeter Reservoir', //*
        4: 'Sizeable Perimeter Reservoir', //*
        5: 'Token Perimeter Reservoir', //*
        6: 'Bountiful Frontier Reservoir', //*
        7: 'Vast Frontier Reservoir', //*
        8: 'Instrumental Core Reservoir', //*
        9: 'Vital Core Reservoir' //*
    };
    
    // Ore sites ======================================================================================================

    let c1Ore = {
        1: 'Ordinary Perimeter Deposit', //*
        2: 'Common Perimeter Deposit', //*
        3: 'Unexceptional Frontier Deposit', //*
        4: 'Average Frontier Deposit', //*
        5: 'Isolated Core Deposit', //*
        6: 'Uncommon Core Deposit' //*
    };

    let c2Ore = {
        1: 'Ordinary Perimeter Deposit', //*
        2: 'Common Perimeter Deposit', //*
        3: 'Unexceptional Frontier Deposit', //*
        4: 'Average Frontier Deposit', //*
        5: 'Isolated Core Deposit', //*
        6: 'Uncommon Core Deposit' //*
    };

    let c3Ore = {
        1: 'Ordinary Perimeter Deposit', //*
        2: 'Common Perimeter Deposit', //*
        3: 'Unexceptional Frontier Deposit', //*
        4: 'Average Frontier Deposit', //*
        5: 'Infrequent Core Deposit', //*
        6: 'Unusual Core Deposit' //*
    };

    let c4Ore = {
        1: 'Ordinary Perimeter Deposit', //*
        2: 'Common Perimeter Deposit', //*
        3: 'Unexceptional Frontier Deposit', //*
        4: 'Average Frontier Deposit', //*
        5: 'Unusual Core Deposit', //*
        6: 'Infrequent Core Deposit' //*
    };

    let c5Ore = {
        1: 'Average Frontier Deposit', //*
        2: 'Unexceptional Frontier Deposit', //*
        3: 'Uncommon Core Deposit', //*
        4: 'Ordinary Perimeter Deposit', //*
        5: 'Common Perimeter Deposit', //*
        6: 'Exceptional Core Deposit', //*
        7: 'Infrequent Core Deposit', //*
        8: 'Unusual Core Deposit', //*
        9: 'Rarified Core Deposit', //*
        10: 'Isolated Core Deposit' //*
    };

    let c6Ore = {
        1: 'Ordinary Perimeter Deposit', //*
        2: 'Common Perimeter Deposit', //*
        3: 'Unexceptional Frontier Deposit', //*
        4: 'Average Frontier Deposit', //*
        5: 'Rarified Core Deposit' //*
    };

    let c13Ore = {
        1: 'Shattered Debris Field',
        2: 'Shattered Ice Field'
    };

    // Wormholes ======================================================================================================

    // all k-space exits are static or K162
    let c1WH = {
        1:  'H121 - C1',
        2:  'C125 - C2',
        3:  'O883 - C3',
        4:  'M609 - C4',
        5:  'L614 - C5',
        6:  'S804 - C6',
        7:  'N110 - H',
        8:  'J244 - L',
        9:  'J377 - L Turnur',
        10:  'Z060 - 0.0',
        11: 'F353 - C12 Thera'
    };

    // all w-space -> w-space are statics or K162
    let c2WH = {
        1:  'Z647 - C1',
        2:  'D382 - C2',
        3:  'O477 - C3',
        4:  'Y683 - C4',
        5:  'N062 - C5',
        6:  'R474 - C6',
        7:  'B274 - H',
        8:  'A239 - L',
        9:  'J377 - L Turnur',
        10: 'E545 - 0.0',
        11: 'F135 - C12 Thera',
        12: 'F216 - T Pochven'
    };

    // all k-space exits are static or K162
    let c3WH = {
        1:  'V301 - C1',
        2:  'I182 - C2',
        3:  'N968 - C3',
        4:  'T405 - C4',
        5:  'N770 - C5',
        6:  'A982 - C6',
        7:  'D845 - H',
        8:  'U210 - L',
        9:  'J377 - L Turnur',
        10: 'K346 - 0.0',
        11: 'F135 - C12 Thera',
        12: 'F216 - T Pochven'
    };

    // no *wandering* w-space -> w-space
    // all holes are statics or K162
    let c4WH = {
        1:  'P060 - C1',
        2:  'N766 - C2',
        3:  'C247 - C3',
        4:  'X877 - C4',
        5:  'H900 - C5',
        6:  'U574 - C6',
        7:  'S047 - H',
        8:  'N290 - L',
        9:  'J377 - L Turnur',
        10: 'K329 - 0.0',
        11: 'F216 - T Pochven'
    };

    let c5WH = {
        1:  'Y790 - C1',
        2:  'D364 - C2',
        3:  'M267 - C3',
        4:  'E175 - C4',
        5:  'H296 - C5',
        6:  'V753 - C6',
        7:  'D792 - H',
        8:  'C140 - L',
        9:  'J377 - L Turnur',
        10: 'Z142 - 0.0',
        11: 'F216 - T Pochven'
    };

    let c6WH = {
        1:  'Q317 - C1',
        2:  'G024 - C2',
        3:  'L477 - C3',
        4:  'Z457 - C4',
        5:  'V911 - C5',
        6:  'W237 - C6',
        7:  'B520 - H',
        8:  'D792 - H',
        9:  'C140 - L',
        10: 'C391 - L',
        11: 'J377 - L Turnur',
        12: 'C248 - 0.0',
        13: 'Z142 - 0.0',
        14: 'F216 - T Pochven'
    };

    // Shattered WH (some of them are static)
    let c13WH = {
        1: 'P060 - C1',
        2: 'Z647 - C1',
        3: 'D382 - C2',
        4: 'L005 - C2',
        5: 'N766 - C2',
        6: 'C247 - C3',
        7: 'M267 - C3',
        8: 'O477 - C3',
        9: 'X877 - C4',
        10: 'Y683 - C4',
        11: 'H296 - C5',
        12: 'H900 - C5',
        13: 'H296 - C5',
        14: 'N062 - C5',    // ??
        15: 'V911 - C5',
        16: 'U574 - C6',
        17: 'V753 - C6',
        18: 'W237 - C6',
        19: 'B274 - H',
        20: 'D792 - H',
        21: 'D845 - H',
        22: 'N110 - H',
        23: 'A239 - L',
        24: 'C391 - L',
        25: 'J244 - L',
        26: 'J377 - L Turnur',
        27: 'U201 - L',    // ??
        28: 'U210 - L',
        29: 'C248 - 0.0',
        30: 'E545 - 0.0',
        31: 'K346 - 0.0',
        32: 'Z060 - 0.0'
    };

    let hsWH = {
        1: 'Z971 - C1',
        2: 'R943 - C2',
        3: 'X702 - C3',
        4: 'O128 - C4',
        5: 'M555 - C5',
        6: 'B041 - C6',
        7: 'A641 - H',
        8: 'R051 - L',
        9: 'J377 - L Turnur',
        10: 'V283 - 0.0',
        11: 'T458 - C12 Thera',
        12: 'C729 - T Pochven'
    };

    let lsWH = {
        1: 'Z971 - C1',
        2: 'R943 - C2',
        3: 'X702 - C3',
        4: 'O128 - C4',
        5: 'N432 - C5',
        6: 'U319 - C6',
        7: 'B449 - H',
        8: 'N944 - L',
        9: 'J377 - L Turnur',
        10: 'S199 - 0.0',
        11: 'M164 - C12 Thera',
        12: 'C729 - T Pochven'
    };

    let nullWH = {
        1: 'Z971 - C1',
        2: 'R943 - C2',
        3: 'X702 - C3',
        4: 'O128 - C4',
        5: 'N432 - C5',
        6: 'U319 - C6',
        7: 'B449 - H',
        8: 'N944 - L',
        9: 'J377 - L Turnur',
        10: 'S199 - 0.0',
        11: 'L031 - C12 Thera',
        12: 'C729 - T Pochven',
        13: 'U372 - T Pochven'
    };

    let pochWH = {
        1: 'R081 - C4',
        2: 'X450 - 0.0'
    };

    // ================================================================================================================
    //  Signature types
    // ================================================================================================================
    
    // signature types
    return {
        1: { // system type (wh)
            1: {    // C1 (area id)
                1: c1Combat,
                2: c1Relic,
                3: c1Data,
                4: c1Gas,
                5: c1WH,
                6: c1Ore,
                7: whGh
            },
            2: {    // C2
                1: c2Combat,
                2: c2Relic,
                3: c2Data,
                4: c2Gas,
                5: c2WH,
                6: c2Ore,
                7: whGh
            },
            3: {    // C3
                1: c3Combat,
                2: c3Relic,
                3: c3Data,
                4: c3Gas,
                5: c3WH,
                6: c3Ore,
                7: whGh
            },
            4: {    // C4
                1: c4Combat,
                2: c4Relic,
                3: c4Data,
                4: c4Gas,
                5: c4WH,
                6: c4Ore,
                7: whGh
            },
            5: {    // C5
                1: c5Combat,
                2: c5Relic,
                3: c5Data,
                4: c5Gas,
                5: c5WH,
                6: c5Ore,
                7: whGh
            },
            6: {    // C6
                1: c6Combat,
                2: c6Relic,
                3: c6Data,
                4: c6Gas,
                5: c6WH,
                6: c6Ore,
                7: whGh
            },
            12: {   // Thera WH
                1: c12Combat
            },
            13: {   // Shattered WH
                5: c13WH,
                6: c13Ore,
                7: whGh
            },
            14: {   // Drifter Sentinel WH
                1: c14Combat
            },
            15: {   // Drifter Barbican WH
                1: c15Combat
            },
            16: {   // Drifter Vidette WH
                1: c16Combat
            },
            17: {   // Drifter Conflux WH
                1: c17Combat
            },
            18: {   // Drifter Redoubt WH
                1: c18Combat
            }
        }, // system type (k-space)
        2: {
            30: {   // High Sec
                5: hsWH,
                7: hsGh
            },
            31: {   // Low Sec
                5: lsWH,
                7: lsGh
            },
            32: {   // 0.0
                5: nullWH,
                7: nsGh
            },
            33: {   // Pochven
                5: pochWH
            }
        }
    };
});

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define('lazyload',n):(t=t||self).LazyLoad=n()}(this,(function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),o=n&&"IntersectionObserver"in window,a=n&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},i=function(n){return t({},r,n)},s=function(t,n){var e,o=new t(n);try{e=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(e)},c=function(t,n){return t.getAttribute("data-"+n)},l=function(t,n,e){var o="data-"+n;null!==e?t.setAttribute(o,e):t.removeAttribute(o)},u=function(t,n){return l(t,"ll-status",n)},d=function(t,n){return l(t,"ll-timeout",n)},f=function(t){return c(t,"ll-timeout")},_=function(t){for(var n,e=[],o=0;n=t.children[o];o+=1)"SOURCE"===n.tagName&&e.push(n);return e},v=function(t,n,e){e&&t.setAttribute(n,e)},g=function(t,n){v(t,"sizes",c(t,n.data_sizes)),v(t,"srcset",c(t,n.data_srcset)),v(t,"src",c(t,n.data_src))},h={IMG:function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&_(e).forEach((function(t){g(t,n)}));g(t,n)},IFRAME:function(t,n){v(t,"src",c(t,n.data_src))},VIDEO:function(t,n){_(t).forEach((function(t){v(t,"src",c(t,n.data_src))})),v(t,"poster",c(t,n.data_poster)),v(t,"src",c(t,n.data_src)),t.load()}},b=function(t,n,e){var o=t.tagName,a=h[o];a?(a(t,n),function(t){t&&(t.loadingCount+=1)}(e)):function(t,n){var e=c(t,n.data_src),o=c(t,n.data_bg);e&&(t.style.backgroundImage='url("'.concat(e,'")')),o&&(t.style.backgroundImage=o)}(t,n)},p=function(t,n){a?t.classList.add(n):t.className+=(t.className?" ":"")+n},m=function(t,n){a?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},y=function(t,n,e,o){t&&(void 0===o?void 0===e?t(n):t(n,e):t(n,e,o))},E=function(t,n){n&&(n.loadingCount-=1,L(t,n))},L=function(t,n){n.toLoadCount||n.loadingCount||y(t.callback_finish,n)},w=function(t,n,e){t.addEventListener(n,e)},I=function(t,n,e){t.removeEventListener(n,e)},k=function(t,n,e){I(t,"load",n),I(t,"loadeddata",n),I(t,"error",e)},C=function(t,n,e){var o=function o(r){!function(t,n,e){var o=t.target;u(o,"loaded"),m(o,n.class_loading),p(o,n.class_loaded),y(n.callback_loaded,o,e),E(n,e)}(r,n,e),k(t,o,a)},a=function a(r){!function(t,n,e){var o=t.target;u(o,"error"),m(o,n.class_loading),p(o,n.class_error),y(n.callback_error,o,e),E(n,e)}(r,n,e),k(t,o,a)};!function(t,n,e){w(t,"load",n),w(t,"loadeddata",n),w(t,"error",e)}(t,o,a)},A=["IMG","IFRAME","VIDEO"],z=function(t,n,e){(function(t){return A.indexOf(t.tagName)>-1})(t)&&(C(t,n,e),p(t,n.class_loading)),b(t,n,e),function(t,n){n&&(n.toLoadCount-=1,L(t,n))}(n,e)},O=function(t,n,e){z(t,n,e),u(t,"loading"),y(n.callback_loading,t,e),y(n.callback_reveal,t,e),function(t,n){if(n){var e=n._observer;e&&n._settings.auto_unobserve&&e.unobserve(t)}}(t,e)},N=function(t){var n=f(t);n&&(clearTimeout(n),d(t,null))},x=function(t,n,e){var o=e._settings;y(o.callback_enter,t,n,e),o.load_delay?function(t,n,e){var o=n.load_delay,a=f(t);a||(a=setTimeout((function(){O(t,n,e),N(t)}),o),d(t,a))}(t,o,e):O(t,o,e)},M=["IMG","IFRAME"],R=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},T=function(t,n,e){t.forEach((function(t){-1!==M.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){z(t,n,e),u(t,"native")}(t,n,e))})),e.toLoadCount=0},j=function(t,n){!function(t){t.disconnect()}(t),function(t,n){n.forEach((function(n){t.observe(n),u(n,"observed")}))}(t,n)},F=function(t){var n;o&&!R(t._settings)&&(t._observer=new IntersectionObserver((function(n){n.forEach((function(n){return function(t){return t.isIntersecting||t.intersectionRatio>0}(n)?x(n.target,n,t):function(t,n,e){var o=e._settings;y(o.callback_exit,t,n,e),o.load_delay&&N(t)}(n.target,n,t)}))}),{root:(n=t._settings).container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))},G=function(t){return Array.prototype.slice.call(t)},D=function(t){return t.container.querySelectorAll(t.elements_selector)},P=function(t){return!function(t){return null!==c(t,"ll-status")}(t)||function(t){return"observed"===c(t,"ll-status")}(t)},S=function(t){return function(t){return"error"===c(t,"ll-status")}(t)},U=function(t,n){return function(t){return G(t).filter(P)}(t||D(n))},V=function(t){var n,e=t._settings;(n=D(e),G(n).filter(S)).forEach((function(t){m(t,e.class_error),function(t){l(t,"ll-status",null)}(t)})),t.update()},$=function(t,e){var o;this._settings=i(t),this.loadingCount=0,F(this),o=this,n&&window.addEventListener("online",(function(t){V(o)})),this.update(e)};return $.prototype={update:function(t){var n=this._settings,a=U(t,n);this.toLoadCount=a.length,!e&&o?R(n)?T(a,n,this):j(this._observer,a):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;U(t,e).forEach((function(t){O(t,e,n)}))},load:function(t){O(t,this._settings,this)}},$.load=function(t,n){var e=i(n);O(t,e)},n&&function(t,n){if(n)if(n.length)for(var e,o=0;e=n[o];o+=1)s(t,e);else s(t,n)}($,window.lazyLoadOptions),$}));

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
    d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
define("bootstrap", ["jquery"], function(){});

/**
 * bootbox.js 5.2.0
 *
 * http://bootboxjs.com/license.txt
 */
!function(e,t){'use strict';'function'==typeof define&&define.amd?define('bootbox',['jquery'],t):'object'==typeof exports?module.exports=t(require('jquery')):e.bootbox=t(e.jQuery)}(this,function t(p,u){'use strict';var r,n,i,l;Object.keys||(Object.keys=(r=Object.prototype.hasOwnProperty,n=!{toString:null}.propertyIsEnumerable('toString'),l=(i=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor']).length,function(e){if('function'!=typeof e&&('object'!=typeof e||null===e))throw new TypeError('Object.keys called on non-object');var t,o,a=[];for(t in e)r.call(e,t)&&a.push(t);if(n)for(o=0;o<l;o++)r.call(e,i[o])&&a.push(i[o]);return a}));var d={};d.VERSION='5.0.0';var b={},f={dialog:"<div class=\"bootbox modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><div class=\"bootbox-body\"></div></div></div></div></div>",header:"<div class=\"modal-header\"><h5 class=\"modal-title\"></h5></div>",footer:'<div class="modal-footer"></div>',closeButton:'<button type="button" class="bootbox-close-button close" aria-hidden="true">&times;</button>',form:'<form class="bootbox-form"></form>',button:'<button type="button" class="btn"></button>',option:'<option></option>',promptMessage:'<div class="bootbox-prompt-message"></div>',inputs:{text:'<input class="bootbox-input bootbox-input-text form-control" autocomplete="off" type="text" />',textarea:'<textarea class="bootbox-input bootbox-input-textarea form-control"></textarea>',email:'<input class="bootbox-input bootbox-input-email form-control" autocomplete="off" type="email" />',select:'<select class="bootbox-input bootbox-input-select form-control"></select>',checkbox:'<div class="form-check checkbox"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-checkbox" type="checkbox" /></label></div>',radio:'<div class="form-check radio"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="bootbox-radio" /></label></div>',date:'<input class="bootbox-input bootbox-input-date form-control" autocomplete="off" type="date" />',time:'<input class="bootbox-input bootbox-input-time form-control" autocomplete="off" type="time" />',number:'<input class="bootbox-input bootbox-input-number form-control" autocomplete="off" type="number" />',password:'<input class="bootbox-input bootbox-input-password form-control" autocomplete="off" type="password" />',range:'<input class="bootbox-input bootbox-input-range form-control-range" autocomplete="off" type="range" />'}},m={locale:'en',backdrop:'static',animate:!0,className:null,closeButton:!0,show:!0,container:'body',value:'',inputType:'text',swapButtonOrder:!1,centerVertical:!1,multiple:!1,scrollable:!1};function c(e,t,o){return p.extend(!0,{},e,function(e,t){var o=e.length,a={};if(o<1||2<o)throw new Error('Invalid argument length');return 2===o||'string'==typeof e[0]?(a[t[0]]=e[0],a[t[1]]=e[1]):a=e[0],a}(t,o))}function h(e,t,o,a){var r;a&&a[0]&&(r=a[0].locale||m.locale,(a[0].swapButtonOrder||m.swapButtonOrder)&&(t=t.reverse()));var n,i,l,s={className:'bootbox-'+e,buttons:function(e,t){for(var o={},a=0,r=e.length;a<r;a++){var n=e[a],i=n.toLowerCase(),l=n.toUpperCase();o[i]={label:(s=l,c=t,void 0,p=b[c],p?p[s]:b.en[s])}}var s,c,p;return o}(t,r)};return n=c(s,a,o),l={},v(i=t,function(e,t){l[t]=!0}),v(n.buttons,function(e){if(l[e]===u)throw new Error('button key "'+e+'" is not allowed (options are '+i.join(' ')+')')}),n}function w(e){return Object.keys(e).length}function v(e,o){var a=0;p.each(e,function(e,t){o(e,t,a++)})}function g(e,t,o){e.stopPropagation(),e.preventDefault(),p.isFunction(o)&&!1===o.call(t,e)||t.modal('hide')}function y(e){return/([01][0-9]|2[0-3]):[0-5][0-9]?:[0-5][0-9]/.test(e)}function x(e){return/(\d{4})-(\d{2})-(\d{2})/.test(e)}return d.locales=function(e){return e?b[e]:b},d.addLocale=function(e,o){return p.each(['OK','CANCEL','CONFIRM'],function(e,t){if(!o[t])throw new Error('Please supply a translation for "'+t+'"')}),b[e]={OK:o.OK,CANCEL:o.CANCEL,CONFIRM:o.CONFIRM},d},d.removeLocale=function(e){if('en'===e)throw new Error('"en" is used as the default and fallback locale and cannot be removed.');return delete b[e],d},d.setLocale=function(e){return d.setDefaults('locale',e)},d.setDefaults=function(){var e={};return 2===arguments.length?e[arguments[0]]=arguments[1]:e=arguments[0],p.extend(m,e),d},d.hideAll=function(){return p('.bootbox').modal('hide'),d},d.init=function(e){return t(e||p)},d.dialog=function(e){if(p.fn.modal===u)throw new Error("\"$.fn.modal\" is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(e=function(r){var n,i;if('object'!=typeof r)throw new Error('Please supply an object of options');if(!r.message)throw new Error('"message" option must not be null or an empty string.');(r=p.extend({},m,r)).buttons||(r.buttons={});return n=r.buttons,i=w(n),v(n,function(e,t,o){if(p.isFunction(t)&&(t=n[e]={callback:t}),'object'!==p.type(t))throw new Error('button with key "'+e+'" must be an object');if(t.label||(t.label=e),!t.className){var a=!1;a=r.swapButtonOrder?0===o:o===i-1,t.className=i<=2&&a?'btn-primary':'btn-secondary btn-default'}}),r}(e),p.fn.modal.Constructor.VERSION){e.fullBootstrapVersion=p.fn.modal.Constructor.VERSION;var t=e.fullBootstrapVersion.indexOf('.');e.bootstrap=e.fullBootstrapVersion.substring(0,t)}else e.bootstrap='2',e.fullBootstrapVersion='2.3.2',console.warn('Bootbox will *mostly* work with Bootstrap 2, but we do not officially support it. Please upgrade, if possible.');var o=p(f.dialog),a=o.find('.modal-dialog'),r=o.find('.modal-body'),n=p(f.header),i=p(f.footer),l=e.buttons,s={onEscape:e.onEscape};if(r.find('.bootbox-body').html(e.message),0<w(e.buttons)&&(v(l,function(e,t){var o=p(f.button);switch(o.data('bb-handler',e),o.addClass(t.className),e){case'ok':case'confirm':o.addClass('bootbox-accept');break;case'cancel':o.addClass('bootbox-cancel')}o.html(t.label),i.append(o),s[e]=t.callback}),r.after(i)),!0===e.animate&&o.addClass('fade'),e.className&&o.addClass(e.className),e.size)switch(e.fullBootstrapVersion.substring(0,3)<'3.1'&&console.warn('"size" requires Bootstrap 3.1.0 or higher. You appear to be using '+e.fullBootstrapVersion+'. Please upgrade to use this option.'),e.size){case'small':case'sm':a.addClass('modal-sm');break;case'large':case'lg':a.addClass('modal-lg');break;case'xl':case'extra-large':e.fullBootstrapVersion.substring(0,3)<'4.2'&&console.warn('Using size "xl"/"extra-large" requires Bootstrap 4.2.0 or higher. You appear to be using '+e.fullBootstrapVersion+'. Please upgrade to use this option.'),a.addClass('modal-xl')}if(e.scrollable&&(e.fullBootstrapVersion.substring(0,3)<'4.3'&&console.warn('Using "scrollable" requires Bootstrap 4.3.0 or higher. You appear to be using '+e.fullBootstrapVersion+'. Please upgrade to use this option.'),a.addClass('modal-dialog-scrollable')),e.title&&(r.before(n),o.find('.modal-title').html(e.title)),e.closeButton){var c=p(f.closeButton);e.title?3<e.bootstrap?o.find('.modal-header').append(c):o.find('.modal-header').prepend(c):c.prependTo(r)}return e.centerVertical&&(e.fullBootstrapVersion<'4.0.0'&&console.warn('"centerVertical" requires Bootstrap 4.0.0-beta.3 or higher. You appear to be using '+e.fullBootstrapVersion+'. Please upgrade to use this option.'),a.addClass('modal-dialog-centered')),o.one('hide.bs.modal',function(e){e.target===this&&(o.off('escape.close.bb'),o.off('click'))}),o.one('hidden.bs.modal',function(e){e.target===this&&o.remove()}),o.one('shown.bs.modal',function(){o.find('.bootbox-accept:first').trigger('focus')}),'static'!==e.backdrop&&o.on('click.dismiss.bs.modal',function(e){o.children('.modal-backdrop').length&&(e.currentTarget=o.children('.modal-backdrop').get(0)),e.target===e.currentTarget&&o.trigger('escape.close.bb')}),o.on('escape.close.bb',function(e){s.onEscape&&g(e,o,s.onEscape)}),o.on('click','.modal-footer button:not(.disabled)',function(e){var t=p(this).data('bb-handler');t!==u&&g(e,o,s[t])}),o.on('click','.bootbox-close-button',function(e){g(e,o,s.onEscape)}),o.on('keyup',function(e){27===e.which&&o.trigger('escape.close.bb')}),p(e.container).append(o),o.modal({backdrop:!!e.backdrop&&'static',keyboard:!1,show:!1}),e.show&&o.modal('show'),o},d.alert=function(){var e;if((e=h('alert',['ok'],['message','callback'],arguments)).callback&&!p.isFunction(e.callback))throw new Error('alert requires the "callback" property to be a function when provided');return e.buttons.ok.callback=e.onEscape=function(){return!p.isFunction(e.callback)||e.callback.call(this)},d.dialog(e)},d.confirm=function(){var e;if(e=h('confirm',['cancel','confirm'],['message','callback'],arguments),!p.isFunction(e.callback))throw new Error('confirm requires a callback');return e.buttons.cancel.callback=e.onEscape=function(){return e.callback.call(this,!1)},e.buttons.confirm.callback=function(){return e.callback.call(this,!0)},d.dialog(e)},d.prompt=function(){var r,t,e,n,o,a;if(e=p(f.form),(r=h('prompt',['cancel','confirm'],['title','callback'],arguments)).value||(r.value=m.value),r.inputType||(r.inputType=m.inputType),o=r.show===u?m.show:r.show,r.show=!1,r.buttons.cancel.callback=r.onEscape=function(){return r.callback.call(this,null)},r.buttons.confirm.callback=function(){var e;if('checkbox'===r.inputType)e=n.find('input:checked').map(function(){return p(this).val()}).get();else if('radio'===r.inputType)e=n.find('input:checked').val();else{if(n[0].checkValidity&&!n[0].checkValidity())return!1;e='select'===r.inputType&&!0===r.multiple?n.find('option:selected').map(function(){return p(this).val()}).get():n.val()}return r.callback.call(this,e)},!r.title)throw new Error('prompt requires a title');if(!p.isFunction(r.callback))throw new Error('prompt requires a callback');if(!f.inputs[r.inputType])throw new Error('Invalid prompt type');switch(n=p(f.inputs[r.inputType]),r.inputType){case'text':case'textarea':case'email':case'password':n.val(r.value),r.placeholder&&n.attr('placeholder',r.placeholder),r.pattern&&n.attr('pattern',r.pattern),r.maxlength&&n.attr('maxlength',r.maxlength),r.required&&n.prop({required:!0}),r.rows&&!isNaN(parseInt(r.rows))&&'textarea'===r.inputType&&n.attr({rows:r.rows});break;case'date':case'time':case'number':case'range':if(n.val(r.value),r.placeholder&&n.attr('placeholder',r.placeholder),r.pattern&&n.attr('pattern',r.pattern),r.required&&n.prop({required:!0}),'date'!==r.inputType&&r.step){if(!('any'===r.step||!isNaN(r.step)&&0<parseInt(r.step)))throw new Error('"step" must be a valid positive number or the value "any". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step for more information.');n.attr('step',r.step)}(function(e,t,o){var a=!1,r=!0,n=!0;if('date'===e)t===u||(r=x(t))?o===u||(n=x(o))||console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your max value may not be enforced by this browser.'):console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your min value may not be enforced by this browser.');else if('time'===e){if(t!==u&&!(r=y(t)))throw new Error('"min" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.');if(o!==u&&!(n=y(o)))throw new Error('"max" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.')}else{if(t!==u&&isNaN(t))throw new Error('"min" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min for more information.');if(o!==u&&isNaN(o))throw new Error('"max" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.')}if(r&&n){if(o<=t)throw new Error('"max" must be greater than "min". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.');a=!0}return a})(r.inputType,r.min,r.max)&&(r.min!==u&&n.attr('min',r.min),r.max!==u&&n.attr('max',r.max));break;case'select':var i={};if(a=r.inputOptions||[],!p.isArray(a))throw new Error('Please pass an array of input options');if(!a.length)throw new Error('prompt with "inputType" set to "select" requires at least one option');r.placeholder&&n.attr('placeholder',r.placeholder),r.required&&n.prop({required:!0}),r.multiple&&n.prop({multiple:!0}),v(a,function(e,t){var o=n;if(t.value===u||t.text===u)throw new Error('each option needs a "value" property and a "text" property');t.group&&(i[t.group]||(i[t.group]=p('<optgroup />').attr('label',t.group)),o=i[t.group]);var a=p(f.option);a.attr('value',t.value).text(t.text),o.append(a)}),v(i,function(e,t){n.append(t)}),n.val(r.value);break;case'checkbox':var l=p.isArray(r.value)?r.value:[r.value];if(!(a=r.inputOptions||[]).length)throw new Error('prompt with "inputType" set to "checkbox" requires at least one option');n=p('<div class="bootbox-checkbox-list"></div>'),v(a,function(e,o){if(o.value===u||o.text===u)throw new Error('each option needs a "value" property and a "text" property');var a=p(f.inputs[r.inputType]);a.find('input').attr('value',o.value),a.find('label').append('\n'+o.text),v(l,function(e,t){t===o.value&&a.find('input').prop('checked',!0)}),n.append(a)});break;case'radio':if(r.value!==u&&p.isArray(r.value))throw new Error('prompt with "inputType" set to "radio" requires a single, non-array value for "value"');if(!(a=r.inputOptions||[]).length)throw new Error('prompt with "inputType" set to "radio" requires at least one option');n=p('<div class="bootbox-radiobutton-list"></div>');var s=!0;v(a,function(e,t){if(t.value===u||t.text===u)throw new Error('each option needs a "value" property and a "text" property');var o=p(f.inputs[r.inputType]);o.find('input').attr('value',t.value),o.find('label').append('\n'+t.text),r.value!==u&&t.value===r.value&&(o.find('input').prop('checked',!0),s=!1),n.append(o)}),s&&n.find('input[type="radio"]').first().prop('checked',!0)}if(e.append(n),e.on('submit',function(e){e.preventDefault(),e.stopPropagation(),t.find('.bootbox-accept').trigger('click')}),''!==p.trim(r.message)){var c=p(f.promptMessage).html(r.message);e.prepend(c),r.message=e}else r.message=e;return(t=d.dialog(r)).off('shown.bs.modal'),t.on('shown.bs.modal',function(){n.focus()}),!0===o&&t.modal('show'),t},d.addLocale('en',{OK:'OK',CANCEL:'Cancel',CONFIRM:'OK'}),d});
/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return b===undefined||f.call(a,b)},c.each=function(a,c,d){var e=0,f=a.length,g=b(a);if(d){if(g)for(;e<f&&!1!==c.apply(a[e],d);e++);else for(e in a)if(a.hasOwnProperty(e)&&!1===c.apply(a[e],d))break}else if(g)for(;e<f&&!1!==c.call(a[e],e,a[e]);e++);else for(e in a)if(a.hasOwnProperty(e)&&!1===c.call(a[e],e,a[e]))break;return a},c.data=function(a,b,e){if(e===undefined){var f=a[c.expando],g=f&&d[f];if(b===undefined)return g;if(g&&b in g)return g[b]}else if(b!==undefined){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):d!==undefined&&(h[e]=d)));return h},c.queue=function(a,d,e){if(a){d=(d||"fx")+"queue";var f=c.data(a,d);return e?(!f||c.isArray(e)?f=c.data(a,d,function(a,c){var d=c||[];return a&&(b(Object(a))?function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;b[d]!==undefined;)a[e++]=b[d++];a.length=e}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}(e)):f.push(e),f):f||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var a=this[0],b=function(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position.toLowerCase();)b=b.offsetParent;return b||document}(a),d=this.offset(),e=/^(?:body|html)$/i.test(b.nodeName)?{top:0,left:0}:c(b).offset();return d.top-=parseFloat(a.style.marginTop)||0,d.left-=parseFloat(a.style.marginLeft)||0,b.style&&(e.top+=parseFloat(b.style.borderTopWidth)||0,e.left+=parseFloat(b.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define('velocity',a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return u.isWrapped(a)?a=s.call(a):u.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,"velocity");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;c-=(i(c,a,d)-b)/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g}while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function l(a,b){var c=a;return u.isString(a)?y.Easings[a]||(c=!1):c=u.isArray(a)&&1===a.length?j.apply(null,a):u.isArray(a)&&2===a.length?z.apply(null,a.concat([b])):!(!u.isArray(a)||4!==a.length)&&k.apply(null,a),!1===c&&(c=y.Easings[y.defaults.easing]?y.defaults.easing:x),c}function m(a){if(a){var b=y.timestamp&&!0!==a?a:r.now(),c=y.State.calls.length;c>1e4&&(y.State.calls=e(y.State.calls),c=y.State.calls.length);for(var f=0;f<c;f++)if(y.State.calls[f]){var h=y.State.calls[f],i=h[0],j=h[2],k=h[3],l=!k,q=null,s=h[5],t=h[6];if(k||(k=y.State.calls[f][3]=b-16),s){if(!0!==s.resume)continue;k=h[3]=Math.round(b-t-16),h[5]=null}t=h[6]=b-k;for(var v=Math.min(t/j.duration,1),w=0,x=i.length;w<x;w++){var z=i[w],B=z.element;if(g(B)){var D=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];o.each(E,function(a,b){A.setPropertyValue(B,"display",b)})}A.setPropertyValue(B,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&A.setPropertyValue(B,"visibility",j.visibility);for(var F in z)if(z.hasOwnProperty(F)&&"element"!==F){var G,H=z[F],I=u.isString(H.easing)?y.Easings[H.easing]:H.easing;if(u.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,"tween"===F)q=G;else{var L;if(A.Hooks.registered[F]){L=A.Hooks.getRoot(F);var M=g(B).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=A.setPropertyValue(B,F,H.currentValue+(p<9&&0===parseFloat(G)?"":H.unitType),H.rootPropertyValue,H.scrollData);A.Hooks.registered[F]&&(A.Normalizations.registered[L]?g(B).rootPropertyValueCache[L]=A.Normalizations.registered[L]("extract",null,N[1]):g(B).rootPropertyValueCache[L]=N[1]),"transform"===N[0]&&(D=!0)}}j.mobileHA&&g(B).transformCache.translate3d===d&&(g(B).transformCache.translate3d="(0px, 0px, 0px)",D=!0),D&&A.flushTransformCache(B)}}j.display!==d&&"none"!==j.display&&(y.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(y.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}y.State.isTicking&&C(m)}function n(a,b){if(!y.State.calls[a])return!1;for(var c=y.State.calls[a][0],e=y.State.calls[a][1],f=y.State.calls[a][2],h=y.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&A.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&A.setPropertyValue(l,"visibility",f.visibility));var m=g(l);if(!0!==f.loop&&(o.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(A.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&A.flushTransformCache(l),A.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(r){setTimeout(function(){throw r},1)}h&&!0!==f.loop&&h(e),m&&!0===f.loop&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360==0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),y(l,"reverse",{loop:!0,delay:f.delay})),!1!==f.queue&&o.dequeue(l,f.queue)}y.State.calls[a]=!1;for(var p=0,q=y.State.calls.length;p<q;p++)if(!1!==y.State.calls[p]){i=!0;break}!1===i&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e",b.getElementsByTagName("span").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if("function"!=typeof a.now){var c=a.timing&&a.timing.navigationStart?a.timing.navigationStart:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{return a.call(c.documentElement),a}catch(b){return function(b,c){var d=this.length;if("number"!=typeof b&&(b=0),"number"!=typeof c&&(c=d),this.slice)return a.call(this,b,c);var e,f=[],g=b>=0?b:Math.max(0,d+b),h=c<0?d+c:Math.min(c,d),i=h-g;if(i>0)if(f=new Array(i),this.charAt)for(e=0;e<i;e++)f[e]=this.charAt(g+e);else for(e=0;e<i;e++)f[e]=this[g+e];return f}}}(),t=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:Array.prototype.indexOf?function(a,b){return a.indexOf(b)>=0}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}},u={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&a!==b&&u.isNumber(a.length)&&!u.isString(a)&&!u.isFunction(a)&&!u.isNode(a)&&(0===a.length||u.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},v=!1;if(a.fn&&a.fn.jquery?(o=a,v=!0):o=b.Velocity.Utilities,p<=8&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,x="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(b.navigator.userAgent),isAndroid:/Android/i.test(b.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(b.navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(b.navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:w,easing:x,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,"velocity",{isSVG:u.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:1},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||!1===c[2].queue))return!0;c[5]={resume:!1}}}),o.each(y.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||!1===c[2].queue))return!0;c[5]&&(c[5].resume=!0)}}),o.each(y.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(y.State.scrollAnchor=b,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var z=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*.016):g=.016;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>1e-4&&Math.abs(h.v)>1e-4))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();y.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){y.Easings[b[0]]=k.apply(null,b[1])});var A=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<A.Lists.colors.length;a++){var b="color"===A.Lists.colors[a]?"0 0 0 1":"255 255 255 1";A.Hooks.templates[A.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(p)for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(A.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),A.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;A.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=A.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||"";return c&&t(A.Lists.units,c)?c:""},fixColors:function(a){return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(a,b,c){return A.Lists.colorNames.hasOwnProperty(c)?(b||"rgba(")+A.Lists.colorNames[c]+(b?"":",1)"):b+c})},cleanRootPropertyValue:function(a,b){return A.RegEx.valueUnwrap.test(b)&&(b=b.match(A.RegEx.valueUnwrap)[1]),A.Values.isCSSNullValue(b)&&(b=A.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=A.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=A.Hooks.cleanRootPropertyValue(d,b),b.toString().match(A.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=A.Hooks.registered[a];if(d){var e,f=d[0],g=d[1];return c=A.Hooks.cleanRootPropertyValue(f,c),e=c.toString().match(A.RegEx.valueSplit),e[g]=b,e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(A.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(p<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":case"inject":return c}}},register:function(){function a(a,b,c){if("border-box"===A.getPropertyValue(b,"boxSizing").toString().toLowerCase()===(c||!1)){var d,e,f=0,g="width"===a?["Left","Right"]:["Top","Bottom"],h=["padding"+g[0],"padding"+g[1],"border"+g[0]+"Width","border"+g[1]+"Width"];for(d=0;d<h.length;d++)e=parseFloat(A.getPropertyValue(b,h[d])),isNaN(e)||(f+=e);return c?-f:f}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}p&&!(p>9)||y.State.isGingerbread||(A.Lists.transformsBase=A.Lists.transformsBase.concat(A.Lists.transforms3D));for(var c=0;c<A.Lists.transformsBase.length;c++)!function(){var a=A.Lists.transformsBase[c];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":y.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<A.Lists.colors.length;e++)!function(){var a=A.Lists.colors[e];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(A.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:A.RegEx.isHex.test(e)?g="rgb("+A.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!p||p>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(p<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(p<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();A.Normalizations.registered.innerWidth=b("width",!0),A.Normalizations.registered.innerHeight=b("height",!0),A.Normalizations.registered.outerWidth=b("width"),A.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||y.State.isAndroid&&!y.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(y.State.prefixMatches[a])return[y.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),u.isString(y.State.prefixElement.style[e]))return y.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(u.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(u.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===A.getPropertyValue(a,"display")&&(i=!0,A.setPropertyValue(a,"display",A.Values.getDisplayType(a)));var j=function(){i&&A.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(A.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(A.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(A.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(A.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===p&&"filter"===c?m.getPropertyValue(c):m[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,"position");("fixed"===n||"absolute"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+"px")}return e}var i;if(A.Hooks.registered[c]){var j=c,k=A.Hooks.getRoot(j);e===d&&(e=A.getPropertyValue(a,A.Names.prefixCheck(k)[0])),A.Normalizations.registered[k]&&(e=A.Normalizations.registered[k]("extract",a,e)),i=A.Hooks.extractValue(j,e)}else if(A.Normalizations.registered[c]){var l,m;l=A.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,A.Names.prefixCheck(l)[0]),A.Values.isCSSNullValue(m)&&A.Hooks.templates[c]&&(m=A.Hooks.templates[c][1])),i=A.Normalizations.registered[c]("extract",a,m)}if(!/^[\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&A.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,A.Names.prefixCheck(c)[0])}return A.Values.isCSSNullValue(i)&&(i=0),y.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(A.Normalizations.registered[c]&&"transform"===A.Normalizations.registered[c]("name",a))A.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(A.Hooks.registered[c]){var i=c,j=A.Hooks.getRoot(c);e=e||A.getPropertyValue(a,j),d=A.Hooks.injectValue(i,d,e),c=j}if(A.Normalizations.registered[c]&&(d=A.Normalizations.registered[c]("inject",a,d),c=A.Normalizations.registered[c]("name",a)),h=A.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(l){y.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var k=g(a);k&&k.isSVG&&A.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}y.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((p||y.State.isAndroid&&!y.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(A.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){if(f=g(a).transformCache[c],"transformPerspective"===c)return h=f,!0;9===p&&"rotateZ"===c&&(c="rotate"),b+=c+f+" "}),h&&(b="perspective"+h+" "+b)}A.setPropertyValue(a,"transform",b)}};A.Hooks.register(),A.Normalizations.register(),y.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&y.init(f),c===d)e===d&&(e=A.getPropertyValue(f,b));else{var h=A.setPropertyValue(f,b,c);"transform"===h[0]&&y.CSS.flushTransformCache(f),e=h}}),e};var B=function(){function a(){return k?z.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===D)try{i.begin.call(r,r)}catch(V){setTimeout(function(){throw V},1)}if("scroll"===G){var p,q,w,x=/^x$/i.test(i.axis)?"Left":"Top",B=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,p=i.container["scroll"+x],w=p+o(a).position()[x.toLowerCase()]+B):i.container=null:(p=y.State.scrollAnchor[y.State["scrollProperty"+x]],q=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===x?"Top":"Left")]],w=o(a).offset()[x.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:p,currentValue:p,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:x,alternateValue:q}},element:a},y.debug&&console.log("tweensContainer (scroll): ",j.scroll,a)}else if("reverse"===G){if(!(k=g(a)))return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);"none"===k.opts.display&&(k.opts.display="auto"),"hidden"===k.opts.visibility&&(k.opts.visibility="visible"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,v.easing||delete i.easing,v.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&"element"!==E){var F=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=F,u.isEmptyObject(v)||(n[E].easing=i.easing),y.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(n[E]),a)}j=n}else if("start"===G){k=g(a),k&&k.tweensContainer&&!0===k.isAnimating&&(n=k.tweensContainer);var H=function(e,f){var g,l=A.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2]
;if(!(k&&k.isSVG||"tween"===l||!1!==A.Names.prefixCheck(l)[1]||A.Normalizations.registered[l]!==d))return void(y.debug&&console.log("Skipping ["+l+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):A.Hooks.registered[e]?r===d?(m=A.getPropertyValue(a,l),r=A.getPropertyValue(a,e,m)):m=A.Hooks.templates[l][1]:r===d&&(r=A.getPropertyValue(a,e));var s,t,v,w=!1,x=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=A.Values.getUnitType(a)),[d,c]};if(r!==p&&u.isString(r)&&u.isString(p)){g="";var z=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=A.Hooks.fixColors(r),p=A.Hooks.fixColors(p);z<r.length&&B<p.length;){var H=r[z],I=p[B];if(/[\d\.-]/.test(H)&&/[\d\.-]/.test(I)){for(var J=H,K=I,L=".",N=".";++z<r.length;){if((H=r[z])===L)L="..";else if(!/\d/.test(H))break;J+=H}for(;++B<p.length;){if((I=p[B])===N)N="..";else if(!/\d/.test(I))break;K+=I}var O=A.Hooks.getUnit(r,z),P=A.Hooks.getUnit(p,B);if(z+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+="{"+C.length+(F?"!":"")+"}"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?"calc":"")+"("+(Q?"{"+C.length+(F?"!":"")+"}":"0")+O+" + "+(R?"{"+(C.length+(Q?1:0))+(F?"!":"")+"}":"0")+P+")",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,z++,B++,0===E&&"c"===H||1===E&&"a"===H||2===E&&"l"===H||3===E&&"c"===H||E>=4&&"("===H?E++:(E&&E<5||E>=4&&")"===H&&--E<5)&&(E=0),0===F&&"r"===H||1===F&&"g"===H||2===F&&"b"===H||3===F&&"a"===H||F>=3&&"("===H?(3===F&&"a"===H&&(G=1),F++):G&&","===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&")"===H&&--F<(G?5:4))&&(F=G=0)}}z===r.length&&B===p.length||(y.debug&&console.error('Trying to pattern match mis-matched strings ["'+p+'", "'+r+'"]'),g=d),g&&(C.length?(y.debug&&console.log('Pattern found "'+g+'" -> ',C,D,"["+r+","+p+"]"),r=C,p=D,t=v=""):g=d)}g||(s=x(e,r),r=s[0],v=s[1],s=x(e,p),p=s[0].replace(/^([+-\/*])=/,function(a,b){return w=b,""}),t=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,"%"===t&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,t="em"):/^scale/.test(e)?(p/=100,t=""):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,t="")));if(/[\/*]/.test(w))t=v;else if(v!==t&&0!==r)if(0===p)t=v;else{h=h||function(){var d={myParent:a.parentNode||c.body,position:A.getPropertyValue(a,"position"),fontSize:A.getPropertyValue(a,"fontSize")},e=d.position===M.lastPosition&&d.myParent===M.lastParent,f=d.fontSize===M.lastFontSize;M.lastParent=d.myParent,M.lastPosition=d.position,M.lastFontSize=d.fontSize;var g={};if(f&&e)g.emToPx=M.lastEmToPx,g.percentToPxWidth=M.lastPercentToPxWidth,g.percentToPxHeight=M.lastPercentToPxHeight;else{var h=k&&k.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");y.init(h),d.myParent.appendChild(h),o.each(["overflow","overflowX","overflowY"],function(a,b){y.CSS.setPropertyValue(h,b,"hidden")}),y.CSS.setPropertyValue(h,"position",d.position),y.CSS.setPropertyValue(h,"fontSize",d.fontSize),y.CSS.setPropertyValue(h,"boxSizing","content-box"),o.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){y.CSS.setPropertyValue(h,b,"100%")}),y.CSS.setPropertyValue(h,"paddingLeft","100em"),g.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(A.getPropertyValue(h,"width",null,!0))||1)/100,g.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(A.getPropertyValue(h,"height",null,!0))||1)/100,g.emToPx=M.lastEmToPx=(parseFloat(A.getPropertyValue(h,"paddingLeft"))||1)/100,d.myParent.removeChild(h)}return null===M.remToPx&&(M.remToPx=parseFloat(A.getPropertyValue(c.body,"fontSize"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(b.innerWidth)/100,M.vhToPx=parseFloat(b.innerHeight)/100),g.remToPx=M.remToPx,g.vwToPx=M.vwToPx,g.vhToPx=M.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),a),g}();var S=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(v){case"%":r*="x"===S?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:r*=h[v+"ToPx"]}switch(t){case"%":r*=1/("x"===S?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:r*=1/h[t+"ToPx"]}}switch(w){case"+":p=r+p;break;case"-":p=r-p;break;case"*":p*=r;break;case"/":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:t,easing:q},g&&(j[e].pattern=g),y.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(j[e]),a)};for(var I in s)if(s.hasOwnProperty(I)){var J=A.Names.camelCase(I),K=function(b,c){var d,f,g;return u.isFunction(b)&&(b=b.call(a,e,C)),u.isArray(b)?(d=b[0],!u.isArray(b[1])&&/^[\d-]/.test(b[1])||u.isFunction(b[1])||A.RegEx.isHex.test(b[1])?g=b[1]:u.isString(b[1])&&!A.RegEx.isHex.test(b[1])&&y.Easings[b[1]]||u.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),u.isFunction(d)&&(d=d.call(a,e,C)),u.isFunction(g)&&(g=g.call(a,e,C)),[d||0,f,g]}(s[I]);if(t(A.Lists.colors,J)){var L=K[0],O=K[1],P=K[2];if(A.RegEx.isHex.test(L)){for(var Q=["Red","Green","Blue"],R=A.Values.hexToRgb(L),S=P?A.Values.hexToRgb(P):d,T=0;T<Q.length;T++){var U=[R[T]];O&&U.push(O),S!==d&&U.push(S[T]),H(J+Q[T],U)}continue}}H(J,K)}j.element=a}j.element&&(A.Values.addClass(a,"velocity-animating"),N.push(j),k=g(a),k&&(""===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),D===C-1?(y.State.calls.push([N,r,i,null,z.resolver,null,0]),!1===y.State.isTicking&&(y.State.isTicking=!0,m())):D++)}var h,i=o.extend({},y.defaults,v),j={};switch(g(a)===d&&y.init(a),parseFloat(i.delay)&&!1!==i.queue&&o.queue(a,i.queue,function(b,c){if(!0===c)return!0;y.velocityQueueEntryFlag=!0;var d=y.State.delayedElements.count++;y.State.delayedElements[d]=a;var e=function(a){return function(){y.State.delayedElements[a]=!1,b()}}(d);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:e}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=w;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(!1!==y.mock&&(!0===y.mock?i.duration=i.delay=1:(i.duration*=parseFloat(y.mock)||1,i.delay*=parseFloat(y.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=y.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,!1===i.queue)if(i.delay){var k=y.State.delayedElements.count++;y.State.delayedElements[k]=a;var n=function(a){return function(){y.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){if(!0===b)return z.promise&&z.resolver(r),!0;y.velocityQueueEntryFlag=!0,f(a)});""!==i.queue&&"fx"!==i.queue||"inprogress"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,v,x=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));u.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=x?arguments[0].elements||arguments[0].e:arguments[0]);var z={promise:null,resolver:null,rejecter:null};if(k&&y.Promise&&(z.promise=new y.Promise(function(a,b){z.resolver=a,z.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(s=arguments[q],v=arguments[q+1]),!(r=f(r)))return void(z.promise&&(s&&v&&!1===v.promiseRejectEmpty?z.resolver():z.rejecter()));var C=r.length,D=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(v)){var E=q+1;v={};for(var F=E;F<arguments.length;F++)u.isArray(arguments[F])||!/^(fast|normal|slow)$/i.test(arguments[F])&&!/^\d/.test(arguments[F])?u.isString(arguments[F])||u.isArray(arguments[F])?v.easing=arguments[F]:u.isFunction(arguments[F])&&(v.complete=arguments[F]):v.duration=arguments[F]}var G;switch(s){case"scroll":G="scroll";break;case"reverse":G="reverse";break;case"pause":var H=(new Date).getTime();return o.each(r,function(a,b){h(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case"resume":return o.each(r,function(a,b){i(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case"finish":case"finishAll":case"stop":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||!0!==v&&!u.isString(v)||(o.each(o.queue(b,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b()}),o.queue(b,u.isString(v)?v:"",[]))});var I=[];return o.each(y.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=v===d?"":v;if(!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue))return!0;o.each(r,function(c,d){if(d===e)if((!0===v||u.isString(v))&&(o.each(o.queue(d,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b(null,!0)}),o.queue(d,u.isString(v)?v:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&!1!==f&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),I.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(o.each(I,function(a,b){n(b,!0)}),z.promise&&z.resolver(r)),a();default:if(!o.isPlainObject(s)||u.isEmptyObject(s)){if(u.isString(s)&&y.Redirects[s]){j=o.extend({},v);var J=j.duration,K=j.delay||0;return!0===j.backwards&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=K+parseFloat(j.stagger)*a:u.isFunction(j.stagger)&&(j.delay=K+j.stagger.call(b,a,C)),j.drag&&(j.duration=parseFloat(J)||(/^(callout|transition)/.test(s)?1e3:w),j.duration=Math.max(j.duration*(j.backwards?1-a/C:(a+1)/C),.75*j.duration,200)),y.Redirects[s].call(b,b,j||{},a,C,r,z.promise?z:d)}),a()}var L="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return z.promise?z.rejecter(new Error(L)):b.console&&console.log(L),a()}G="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];o.each(r,function(a,b){u.isNode(b)&&e(b,a)}),j=o.extend({},y.defaults,v),j.loop=parseInt(j.loop,10);var O=2*j.loop-1;if(j.loop)for(var P=0;P<O;P++){var Q={delay:j.delay,progress:j.progress};P===O-1&&(Q.display=j.display,Q.visibility=j.visibility,Q.complete=j.complete),B(r,"reverse",Q)}return a()};y=o.extend(B,y),y.animate=B;var C=b.requestAnimationFrame||q;if(!y.State.isMobile&&c.hidden!==d){var D=function(){c.hidden?(C=function(a){return setTimeout(function(){a(!0)},16)},m()):C=b.requestAnimationFrame||q};D(),c.addEventListener("visibilitychange",D)}return a.Velocity=y,a!==b&&(a.fn.velocity=B,a.fn.velocity.defaults=y.defaults),o.each(["Down","Up"],function(a,b){y.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===y.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=A.getPropertyValue(a,c);m[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},y(a,m,i)}}),o.each(["In","Out"],function(a,b){y.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),i.complete=e!==f-1?null:function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),y(this,k,i)}}),y}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
!function(a){"use strict";"function"==typeof require&&"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define('velocityUI',["velocity"],a):a()}(function(){"use strict";return function(a,b,c,d){var e=a.Velocity;if(!e||!e.Utilities)return void(b.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var f=e.Utilities,g=e.version,h={major:1,minor:1,patch:0};if(function(a,b){var c=[];return!(!a||!b)&&(f.each([a,b],function(a,b){var d=[];f.each(b,function(a,b){for(;b.toString().length<5;)b="0"+b;d.push(b)}),c.push(d.join(""))}),parseFloat(c[0])>parseFloat(c[1]))}(h,g)){var i="Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(i),new Error(i)}e.RegisterEffect=e.RegisterUI=function(a,b){function c(a,b,c,d){var g,h=0;f.each(a.nodeType?[a]:a,function(a,b){d&&(c+=a*d),g=b.parentNode;var i=["height","paddingTop","paddingBottom","marginTop","marginBottom"];"border-box"===e.CSS.getPropertyValue(b,"boxSizing").toString().toLowerCase()&&(i=["height"]),f.each(i,function(a,c){h+=parseFloat(e.CSS.getPropertyValue(b,c))})}),e.animate(g,{height:("In"===b?"+":"-")+"="+h},{queue:!1,easing:"ease-in-out",duration:c*("In"===b?.6:1)})}return e.Redirects[a]=function(d,g,h,i,j,k,l){var m=h===i-1,n=0;l=l||b.loop,"function"==typeof b.defaultDuration?b.defaultDuration=b.defaultDuration.call(j,j):b.defaultDuration=parseFloat(b.defaultDuration);for(var o=0;o<b.calls.length;o++)"number"==typeof(t=b.calls[o][1])&&(n+=t);var p=n>=1?0:b.calls.length?(1-n)/b.calls.length:1;for(o=0;o<b.calls.length;o++){var q=b.calls[o],r=q[0],s=1e3,t=q[1],u=q[2]||{},v={};if(void 0!==g.duration?s=g.duration:void 0!==b.defaultDuration&&(s=b.defaultDuration),v.duration=s*("number"==typeof t?t:p),v.queue=g.queue||"",v.easing=u.easing||"ease",v.delay=parseFloat(u.delay)||0,v.loop=!b.loop&&u.loop,v._cacheValues=u._cacheValues||!0,0===o){if(v.delay+=parseFloat(g.delay)||0,0===h&&(v.begin=function(){g.begin&&g.begin.call(j,j);var b=a.match(/(In|Out)$/);b&&"In"===b[0]&&void 0!==r.opacity&&f.each(j.nodeType?[j]:j,function(a,b){e.CSS.setPropertyValue(b,"opacity",0)}),g.animateParentHeight&&b&&c(j,b[0],s+v.delay,g.stagger)}),null!==g.display)if(void 0!==g.display&&"none"!==g.display)v.display=g.display;else if(/In$/.test(a)){var w=e.CSS.Values.getDisplayType(d);v.display="inline"===w?"inline-block":w}g.visibility&&"hidden"!==g.visibility&&(v.visibility=g.visibility)}if(o===b.calls.length-1){var x=function(){void 0!==g.display&&"none"!==g.display||!/Out$/.test(a)||f.each(j.nodeType?[j]:j,function(a,b){e.CSS.setPropertyValue(b,"display","none")}),g.complete&&g.complete.call(j,j),k&&k.resolver(j||d)};v.complete=function(){if(l&&e.Redirects[a](d,g,h,i,j,k,!0===l||Math.max(0,l-1)),b.reset){for(var c in b.reset)if(b.reset.hasOwnProperty(c)){var f=b.reset[c];void 0!==e.CSS.Hooks.registered[c]||"string"!=typeof f&&"number"!=typeof f||(b.reset[c]=[b.reset[c],b.reset[c]])}var n={duration:0,queue:!1};m&&(n.complete=x),e.animate(d,b.reset,n)}else m&&x()},"hidden"===g.visibility&&(v.visibility=g.visibility)}e.animate(d,r,v)}},e},e.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11}],[{translateX:11}],[{translateX:-11}],[{translateX:11}],[{translateX:-11}],[{translateX:11}],[{translateX:-11}],[{translateX:0}]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]}],[{opacity:[1,"easeInOutQuad"]}],[{opacity:[0,"easeInOutQuad"]}],[{opacity:[1,"easeInOutQuad"]}]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15}],[{rotateZ:-10}],[{rotateZ:5}],[{rotateZ:-5}],[{rotateZ:0}]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10}],[{opacity:0,rotateY:90}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15}],[{opacity:0,rotateX:90}]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.35],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.45]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var j in e.RegisterEffect.packagedEffects)e.RegisterEffect.packagedEffects.hasOwnProperty(j)&&e.RegisterEffect(j,e.RegisterEffect.packagedEffects[j]);e.RunSequence=function(a){var b=f.extend(!0,[],a);b.length>1&&(f.each(b.reverse(),function(a,c){var d=b[a+1];if(d){var g=c.o||c.options,h=d.o||d.options,i=g&&!1===g.sequenceQueue?"begin":"complete",j=h&&h[i],k={};k[i]=function(){var a=d.e||d.elements,b=a.nodeType?[a]:a;j&&j.call(b,b),e(c)},d.o?d.o=f.extend({},h,k):d.options=f.extend({},h,k)}}),b.reverse()),e(b[0])}}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define('mousewheel',["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define('customScrollbar',["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
    return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
/*!
 * Validator v0.11.9 for Bootstrap 3, by @1000hz
 * Copyright 2017 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */

+function(a){"use strict";function b(b){return b.is('[type="checkbox"]')?b.prop("checked"):b.is('[type="radio"]')?!!a('[name="'+b.attr("name")+'"]:checked').length:b.is("select[multiple]")?(b.val()||[]).length:b.val()}function c(b){return this.each(function(){var c=a(this),e=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b),f=c.data("bs.validator");(f||"destroy"!=b)&&(f||c.data("bs.validator",f=new d(this,e)),"string"==typeof b&&f[b]())})}var d=function(c,e){this.options=e,this.validators=a.extend({},d.VALIDATORS,e.custom),this.$element=a(c),this.$btn=a('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]')),this.update(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",a.proxy(this.onInput,this)),this.$element.on("submit.bs.validator",a.proxy(this.onSubmit,this)),this.$element.on("reset.bs.validator",a.proxy(this.reset,this)),this.$element.find("[data-match]").each(function(){var c=a(this),d=c.attr("data-match");a(d).on("input.bs.validator",function(){b(c)&&c.trigger("input.bs.validator")})}),this.$inputs.filter(function(){return b(a(this))&&!a(this).closest(".has-error").length}).trigger("focusout"),this.$element.attr("novalidate",!0)};d.VERSION="0.11.9",d.INPUT_SELECTOR=':input:not([type="hidden"], [type="submit"], [type="reset"], button)',d.FOCUS_OFFSET=20,d.DEFAULTS={delay:500,html:!1,disable:!0,focus:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},d.VALIDATORS={"native":function(a){var b=a[0];return b.checkValidity?!b.checkValidity()&&!b.validity.valid&&(b.validationMessage||"error!"):void 0},match:function(b){var c=b.attr("data-match");return b.val()!==a(c).val()&&d.DEFAULTS.errors.match},minlength:function(a){var b=a.attr("data-minlength");return a.val().length<b&&d.DEFAULTS.errors.minlength}},d.prototype.update=function(){var b=this;return this.$inputs=this.$element.find(d.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function(){b.clearErrors(a(this))})),this.toggleSubmit(),this},d.prototype.onInput=function(b){var c=this,d=a(b.target),e="focusout"!==b.type;this.$inputs.is(d)&&this.validateInput(d,e).done(function(){c.toggleSubmit()})},d.prototype.validateInput=function(c,d){var e=(b(c),c.data("bs.validator.errors"));c.is('[type="radio"]')&&(c=this.$element.find('input[name="'+c.attr("name")+'"]'));var f=a.Event("validate.bs.validator",{relatedTarget:c[0]});if(this.$element.trigger(f),!f.isDefaultPrevented()){var g=this;return this.runValidators(c).done(function(b){c.data("bs.validator.errors",b),b.length?d?g.defer(c,g.showErrors):g.showErrors(c):g.clearErrors(c),e&&b.toString()===e.toString()||(f=b.length?a.Event("invalid.bs.validator",{relatedTarget:c[0],detail:b}):a.Event("valid.bs.validator",{relatedTarget:c[0],detail:e}),g.$element.trigger(f)),g.toggleSubmit(),g.$element.trigger(a.Event("validated.bs.validator",{relatedTarget:c[0]}))})}},d.prototype.runValidators=function(c){function d(a){return c.attr("data-"+a+"-error")}function e(){var a=c[0].validity;return a.typeMismatch?c.attr("data-type-error"):a.patternMismatch?c.attr("data-pattern-error"):a.stepMismatch?c.attr("data-step-error"):a.rangeOverflow?c.attr("data-max-error"):a.rangeUnderflow?c.attr("data-min-error"):a.valueMissing?c.attr("data-required-error"):null}function f(){return c.attr("data-error")}function g(a){return d(a)||e()||f()}var h=[],i=a.Deferred();return c.data("bs.validator.deferred")&&c.data("bs.validator.deferred").reject(),c.data("bs.validator.deferred",i),a.each(this.validators,a.proxy(function(a,d){var e=null;!b(c)&&!c.attr("required")||void 0===c.attr("data-"+a)&&"native"!=a||!(e=d.call(this,c))||(e=g(a)||e,!~h.indexOf(e)&&h.push(e))},this)),!h.length&&b(c)&&c.attr("data-remote")?this.defer(c,function(){var d={};d[c.attr("name")]=b(c),a.get(c.attr("data-remote"),d).fail(function(a,b,c){h.push(g("remote")||c)}).always(function(){i.resolve(h)})}):i.resolve(h),i.promise()},d.prototype.validate=function(){var b=this;return a.when(this.$inputs.map(function(){return b.validateInput(a(this),!1)})).then(function(){b.toggleSubmit(),b.focusError()}),this},d.prototype.focusError=function(){if(this.options.focus){var b=this.$element.find(".has-error:first :input");0!==b.length&&(a("html, body").animate({scrollTop:b.offset().top-d.FOCUS_OFFSET},250),b.focus())}},d.prototype.showErrors=function(b){var c=this.options.html?"html":"text",d=b.data("bs.validator.errors"),e=b.closest(".form-group"),f=e.find(".help-block.with-errors"),g=e.find(".form-control-feedback");d.length&&(d=a("<ul/>").addClass("list-unstyled").append(a.map(d,function(b){return a("<li/>")[c](b)})),void 0===f.data("bs.validator.originalContent")&&f.data("bs.validator.originalContent",f.html()),f.empty().append(d),e.addClass("has-error has-danger"),e.hasClass("has-feedback")&&g.removeClass(this.options.feedback.success)&&g.addClass(this.options.feedback.error)&&e.removeClass("has-success"))},d.prototype.clearErrors=function(a){var c=a.closest(".form-group"),d=c.find(".help-block.with-errors"),e=c.find(".form-control-feedback");d.html(d.data("bs.validator.originalContent")),c.removeClass("has-error has-danger has-success"),c.hasClass("has-feedback")&&e.removeClass(this.options.feedback.error)&&e.removeClass(this.options.feedback.success)&&b(a)&&e.addClass(this.options.feedback.success)&&c.addClass("has-success")},d.prototype.hasErrors=function(){function b(){return!!(a(this).data("bs.validator.errors")||[]).length}return!!this.$inputs.filter(b).length},d.prototype.isIncomplete=function(){function c(){var c=b(a(this));return!("string"==typeof c?a.trim(c):c)}return!!this.$inputs.filter("[required]").filter(c).length},d.prototype.onSubmit=function(a){this.validate(),(this.isIncomplete()||this.hasErrors())&&a.preventDefault()},d.prototype.toggleSubmit=function(){this.options.disable&&this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())},d.prototype.defer=function(b,c){return c=a.proxy(c,this,b),this.options.delay?(window.clearTimeout(b.data("bs.validator.timeout")),void b.data("bs.validator.timeout",window.setTimeout(c,this.options.delay))):c()},d.prototype.reset=function(){return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success),this.$inputs.removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var b=a(this),c=b.data("bs.validator.timeout");window.clearTimeout(c)&&b.removeData("bs.validator.timeout")}),this.$element.find(".help-block.with-errors").each(function(){var b=a(this),c=b.data("bs.validator.originalContent");b.removeData("bs.validator.originalContent").html(c)}),this.$btn.removeClass("disabled"),this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"),this},d.prototype.destroy=function(){return this.reset(),this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),this.$inputs.off(".bs.validator"),this.options=null,this.validators=null,this.$element=null,this.$btn=null,this.$inputs=null,this};var e=a.fn.validator;a.fn.validator=c,a.fn.validator.Constructor=d,a.fn.validator.noConflict=function(){return a.fn.validator=e,this},a(window).on("load",function(){a('form[data-toggle="validator"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery);
define("validator", ["jquery","bootstrap"], function(){});

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.6
 **/
!function(a,b){"object"==typeof exports?module.exports=b(require("jquery")):"function"==typeof define&&define.amd?define('easyPieChart',["jquery"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing="string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
/*!
 * hoverIntent v1.10.0 // 2019.02.25 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2019 Brian Cherne
 */
!function(factory){"use strict";"function"==typeof define&&define.amd?define('hoverIntent',["jquery"],factory):"object"==typeof module&&module.exports?module.exports=factory(require("jquery")):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){!function(ev,$el,s,out){delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])}(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});
/*!
 * Bootstrap Confirmation v1.0.7
 * https://github.com/tavicu/bs-confirmation
 */
+function($){"use strict";var event_body=!1,Confirmation=function(t,n){var o=this;this.init("confirmation",t,n),n.selector?$(t).on("click.bs.confirmation",n.selector,function(t){t.preventDefault()}):$(t).on("show.bs.confirmation",function(t){o.runCallback(o.options.onShow,t,o.$element),o.$element.addClass("open"),o.options.singleton&&$(o.options.all_selector).not(o.$element).each(function(){$(this).hasClass("open")&&$(this).confirmation("hide")})}).on("hide.bs.confirmation",function(t){o.runCallback(o.options.onHide,t,o.$element),o.$element.removeClass("open")}).on("shown.bs.confirmation",function(t){(o.isPopout()||event_body)&&(event_body=$("body").on("click",function(t){o.$element.is(t.target)||o.$element.has(t.target).length||$(".popover").has(t.target).length||(o.hide(),o.inState.click=!1,$("body").unbind(t),event_body=!1)}))}).on("click.bs.confirmation",function(t){t.preventDefault()})};if(!$.fn.popover||!$.fn.tooltip)throw new Error("Confirmation requires popover.js and tooltip.js");Confirmation.VERSION="1.0.7",Confirmation.DEFAULTS=$.extend({},$.fn.popover.Constructor.DEFAULTS,{placement:"right",title:"Are you sure?",btnOkClass:"btn btn-sm btn-danger",btnOkLabel:"Delete",btnOkIcon:"glyphicon glyphicon-ok",btnCancelClass:"btn btn-sm btn-default",btnCancelLabel:"Cancel",btnCancelIcon:"glyphicon glyphicon-remove",href:"#",target:"_self",singleton:!0,popout:!0,onShow:function(t,n){},onHide:function(t,n){},onConfirm:function(t,n){},onCancel:function(t,n){},template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"> <a data-apply="confirmation">Yes</a> <a data-dismiss="confirmation">No</a></div></div>'}),Confirmation.prototype=$.extend({},$.fn.popover.Constructor.prototype),Confirmation.prototype.constructor=Confirmation,Confirmation.prototype.getDefaults=function(){return Confirmation.DEFAULTS},Confirmation.prototype.setContent=function(){var t=this,n=this.tip(),o=this.getTitle(),e=n.find('[data-apply="confirmation"]'),i=n.find('[data-dismiss="confirmation"]');this.options;e.addClass(this.getBtnOkClass()).html(this.getBtnOkLabel()).prepend($("<i></i>").addClass(this.getBtnOkIcon())," ").attr("href",this.getHref()).attr("target",this.getTarget()).off("click").on("click",function(n){if(t.runCallback(t.options.onConfirm,n,t.$element),"submit"==t.$element.attr("type")){var o=t.$element.closest("form"),e=void 0!==o.attr("novalidate");(e||o[0].checkValidity())&&o.submit()}t.hide(),t.inState.click=!1,t.$element.trigger($.Event("confirm.bs.confirmation"))}),i.addClass(this.getBtnCancelClass()).html(this.getBtnCancelLabel()).prepend($("<i></i>").addClass(this.getBtnCancelIcon())," ").off("click").on("click",function(n){t.runCallback(t.options.onCancel,n,t.$element),t.hide(),t.inState.click=!1,t.$element.trigger($.Event("cancel.bs.confirmation"))}),n.find(".popover-title")[this.options.html?"html":"text"](o),n.removeClass("fade top bottom left right in"),n.find(".popover-title").html()||n.find(".popover-title").hide()},Confirmation.prototype.getBtnOkClass=function(){return this.$element.data("btnOkClass")||("function"==typeof this.options.btnOkClass?this.options.btnOkClass.call(this,this.$element):this.options.btnOkClass)},Confirmation.prototype.getBtnOkLabel=function(){return this.$element.data("btnOkLabel")||("function"==typeof this.options.btnOkLabel?this.options.btnOkLabel.call(this,this.$element):this.options.btnOkLabel)},Confirmation.prototype.getBtnOkIcon=function(){return this.$element.data("btnOkIcon")||("function"==typeof this.options.btnOkIcon?this.options.btnOkIcon.call(this,this.$element):this.options.btnOkIcon)},Confirmation.prototype.getBtnCancelClass=function(){return this.$element.data("btnCancelClass")||("function"==typeof this.options.btnCancelClass?this.options.btnCancelClass.call(this,this.$element):this.options.btnCancelClass)},Confirmation.prototype.getBtnCancelLabel=function(){return this.$element.data("btnCancelLabel")||("function"==typeof this.options.btnCancelLabel?this.options.btnCancelLabel.call(this,this.$element):this.options.btnCancelLabel)},Confirmation.prototype.getBtnCancelIcon=function(){return this.$element.data("btnCancelIcon")||("function"==typeof this.options.btnCancelIcon?this.options.btnCancelIcon.call(this,this.$element):this.options.btnCancelIcon)},Confirmation.prototype.getTitle=function(){return this.$element.data("confirmation-title")||this.$element.data("title")||this.$element.attr("title")||("function"==typeof this.options.title?this.options.title.call(this,this.$element):this.options.title)},Confirmation.prototype.getHref=function(){return this.$element.data("href")||this.$element.attr("href")||("function"==typeof this.options.href?this.options.href.call(this,this.$element):this.options.href)},Confirmation.prototype.getTarget=function(){return this.$element.data("target")||this.$element.attr("target")||("function"==typeof this.options.target?this.options.target.call(this,this.$element):this.options.target)},Confirmation.prototype.isPopout=function(){var t=this.$element.data("popout")||("function"==typeof this.options.popout?this.options.popout.call(this,this.$element):this.options.popout);return"false"==t&&(t=!1),t},Confirmation.prototype.runCallback=function(callback,event,element){"function"==typeof callback?callback.call(this,event,element):"string"==typeof callback&&eval(callback)};var old=$.fn.confirmation;$.fn.confirmation=function(t){var n=this;return this.each(function(){var o=$(this),e=o.data("bs.confirmation"),i="object"==typeof t&&t;i=i||{},i.all_selector=n.selector,(e||"destroy"!=t)&&(e||o.data("bs.confirmation",e=new Confirmation(this,i)),"string"==typeof t&&e[t]())})},$.fn.confirmation.Constructor=Confirmation,$.fn.confirmation.noConflict=function(){return $.fn.confirmation=old,this}}(jQuery);

define("bootstrapConfirmation", ["bootstrap"], function(){});

/*! ========================================================================
 * Bootstrap Toggle: bootstrap-toggle.js v2.2.0
 * http://www.bootstraptoggle.com
 * ========================================================================
 * Copyright 2014 Min Hur, The New York Times Company
 * Licensed under MIT
 * ======================================================================== */
+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.toggle"),f="object"==typeof b&&b;e||d.data("bs.toggle",e=new c(this,f)),"string"==typeof b&&e[b]&&e[b]()})}var c=function(b,c){this.$element=a(b),this.options=a.extend({},this.defaults(),c),this.render()};c.VERSION="2.2.0",c.DEFAULTS={on:"On",off:"Off",onstyle:"primary",offstyle:"default",size:"normal",style:"",width:null,height:null},c.prototype.defaults=function(){return{on:this.$element.attr("data-on")||c.DEFAULTS.on,off:this.$element.attr("data-off")||c.DEFAULTS.off,onstyle:this.$element.attr("data-onstyle")||c.DEFAULTS.onstyle,offstyle:this.$element.attr("data-offstyle")||c.DEFAULTS.offstyle,size:this.$element.attr("data-size")||c.DEFAULTS.size,style:this.$element.attr("data-style")||c.DEFAULTS.style,width:this.$element.attr("data-width")||c.DEFAULTS.width,height:this.$element.attr("data-height")||c.DEFAULTS.height}},c.prototype.render=function(){this._onstyle="btn-"+this.options.onstyle,this._offstyle="btn-"+this.options.offstyle;var b="large"===this.options.size?"btn-lg":"small"===this.options.size?"btn-sm":"mini"===this.options.size?"btn-xs":"",c=a('<label class="btn">').html(this.options.on).addClass(this._onstyle+" "+b),d=a('<label class="btn">').html(this.options.off).addClass(this._offstyle+" "+b+" active"),e=a('<span class="toggle-handle btn btn-default">').addClass(b),f=a('<div class="toggle-group">').append(c,d,e),g=a('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked")?this._onstyle:this._offstyle+" off").addClass(b).addClass(this.options.style);this.$element.wrap(g),a.extend(this,{$toggle:this.$element.parent(),$toggleOn:c,$toggleOff:d,$toggleGroup:f}),this.$toggle.append(f);var h=this.options.width||Math.max(c.outerWidth(),d.outerWidth())+e.outerWidth()/2,i=this.options.height||Math.max(c.outerHeight(),d.outerHeight());c.addClass("toggle-on"),d.addClass("toggle-off"),this.$toggle.css({width:h,height:i}),this.options.height&&(c.css("line-height",c.height()+"px"),d.css("line-height",d.height()+"px")),this.update(!0),this.trigger(!0)},c.prototype.toggle=function(){this.$element.prop("checked")?this.off():this.on()},c.prototype.on=function(a){return this.$element.prop("disabled")?!1:(this.$toggle.removeClass(this._offstyle+" off").addClass(this._onstyle),this.$element.prop("checked",!0),void(a||this.trigger()))},c.prototype.off=function(a){return this.$element.prop("disabled")?!1:(this.$toggle.removeClass(this._onstyle).addClass(this._offstyle+" off"),this.$element.prop("checked",!1),void(a||this.trigger()))},c.prototype.enable=function(){this.$toggle.removeAttr("disabled"),this.$element.prop("disabled",!1)},c.prototype.disable=function(){this.$toggle.attr("disabled","disabled"),this.$element.prop("disabled",!0)},c.prototype.update=function(a){this.$element.prop("disabled")?this.disable():this.enable(),this.$element.prop("checked")?this.on(a):this.off(a)},c.prototype.trigger=function(b){this.$element.off("change.bs.toggle"),b||this.$element.change(),this.$element.on("change.bs.toggle",a.proxy(function(){this.update()},this))},c.prototype.destroy=function(){this.$element.off("change.bs.toggle"),this.$toggleGroup.remove(),this.$element.removeData("bs.toggle"),this.$element.unwrap()};var d=a.fn.bootstrapToggle;a.fn.bootstrapToggle=b,a.fn.bootstrapToggle.Constructor=c,a.fn.toggle.noConflict=function(){return a.fn.bootstrapToggle=d,this},a(function(){a("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle()}),a(document).on("click.bs.toggle","div[data-toggle^=toggle]",function(b){var c=a(this).find("input[type=checkbox]");c.bootstrapToggle("toggle"),b.preventDefault()})}(jQuery);

define("bootstrapToggle", ["jquery","bootstrap"], function(){});

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define('select2',["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(u){var e=function(){if(u&&u.fn&&u.fn.select2&&u.fn.select2.amd)var e=u.fn.select2.amd;var t,n,r,h,o,s,f,g,m,v,y,_,i,a,b;function w(e,t){return i.call(e,t)}function l(e,t){var n,r,i,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&b.test(e[s])&&(e[s]=e[s].replace(b,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;u-=1){if(r=n.slice(0,u).join("/"),h)for(d=h.length;0<d;d-=1)if(i=(i=f[h.slice(0,d).join("/")])&&i[r]){o=i,a=u;break}if(o)break;!l&&g&&g[r]&&(l=g[r],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function D(e){if(w(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!w(m,e)&&!w(_,e))throw new Error("No "+e);return m[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return e?c(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},i=Object.prototype.hasOwnProperty,a=[].slice,b=/\.js$/,f=function(e,t){var n,r=c(e),i=r[0],o=t[1];return e=r[1],i&&(n=D(i=l(i,o))),i?e=n&&n.normalize?n.normalize(e,function(t){return function(e){return l(e,t)}}(o)):l(e,o):(i=(r=c(e=l(e,o)))[0],e=r[1],i&&(n=D(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(e){return function(){return y&&y.config&&y.config[e]||{}}}(e)}}},o=function(e,t,n,r){var i,o,s,a,l,c,u,d=[],p=typeof n;if(c=S(r=r||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)i=d[l]=g.module(e);else if(w(m,o)||w(v,o)||w(_,o))d[l]=D(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(r,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(i&&i.exports!==h&&i.exports!==m[e]?m[e]=i.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,r,i){if("string"==typeof e)return g[e]?g[e](t):D(f(e,S(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=r,r=i),r?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(r=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),w(m,e)||w(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=r),e.define("almond",function(){}),e.define("jquery",[],function(){var e=u||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var i={};function u(e){var t=e.prototype,n=[];for(var r in t){"function"==typeof t[r]&&"constructor"!==r&&n.push(r)}return n}i.Extend=function(e,t){var n={}.hasOwnProperty;function r(){this.constructor=e}for(var i in t)n.call(t,i)&&(e[i]=t[i]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},i.Decorate=function(r,i){var e=u(i),t=u(r);function o(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=r.prototype.constructor;0<t&&(e.call(arguments,r.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=r.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=r.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,r=e.length;n<r;n++)e[n].apply(this,t)},i.Observable=e,i.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},i.bind=function(e,t){return function(){e.apply(t,arguments)}},i._convertData=function(e){for(var t in e){var n=t.split("-"),r=e;if(1!==n.length){for(var i=0;i<n.length;i++){var o=n[i];(o=o.substring(0,1).toLowerCase()+o.substring(1))in r||(r[o]={}),i==n.length-1&&(r[o]=e[t]),r=r[o]}delete e[t]}}return e},i.hasScroll=function(e,t){var n=o(t),r=t.style.overflowX,i=t.style.overflowY;return(r!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===r||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},i.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},i.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},i.__cache={};var n=0;return i.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},i.StoreData=function(e,t,n){var r=i.GetUniqueElementId(e);i.__cache[r]||(i.__cache[r]={}),i.__cache[r][t]=n},i.GetData=function(e,t){var n=i.GetUniqueElementId(e);return t?i.__cache[n]&&null!=i.__cache[n][t]?i.__cache[n][t]:o(e).data(t):i.__cache[n]},i.RemoveData=function(e){var t=i.GetUniqueElementId(e);null!=i.__cache[t]&&delete i.__cache[t],e.removeAttribute("data-select2-id")},i}),e.define("select2/results",["jquery","./utils"],function(h,f){function r(e,t,n){this.$element=e,this.data=n,this.options=t,r.__super__.constructor.call(this)}return f.Extend(r,f.Observable),r.prototype.render=function(){var e=h('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},r.prototype.clear=function(){this.$results.empty()},r.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),r=this.options.get("translations").get(e.message);n.append(t(r(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},r.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},r.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var r=e.results[n],i=this.option(r);t.push(i)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},r.prototype.position=function(e,t){t.find(".select2-results").append(e)},r.prototype.sort=function(e){return this.options.get("sorter")(e)},r.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},r.prototype.setClasses=function(){var t=this;this.data.current(function(e){var r=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,r)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},r.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},r.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},r.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"option","aria-selected":"false"},r=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var i in(null!=e.element&&r.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[i];t.setAttribute(i,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},r.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var r=n-1;0===e.length&&(r=0);var i=t.eq(r);i.trigger("mouseenter");var o=l.$results.offset().top,s=i.offset().top,a=l.$results.scrollTop()+(s-o);0===r?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var r=t.eq(n);r.trigger("mouseenter");var i=l.$results.offset().top+l.$results.outerHeight(!1),o=r.offset().top+r.outerHeight(!1),s=l.$results.scrollTop()+o-i;0===n?l.$results.scrollTop(0):i<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,r=0<e.deltaY&&t-e.deltaY<=0,i=e.deltaY<0&&n<=l.$results.height();r?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):i&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},r.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},r.prototype.destroy=function(){this.$results.remove()},r.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,r=e.offset().top,i=this.$results.scrollTop()+(r-n),o=r-n;i-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(i)}},r.prototype.template=function(e,t){var n=this.options.get("templateResult"),r=this.options.get("escapeMarkup"),i=n(e,t);null==i?t.style.display="none":"string"==typeof i?t.innerHTML=r(i):h(t).append(i)},r}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,r,i){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return r.Extend(o,r.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=r.GetData(this.$element[0],"old-tabindex")?this._tabindex=r.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},o.prototype.bind=function(e,t){var n=this,r=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",r),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&r.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,r){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var r=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",r).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",r),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),r=this.display(t,n);n.empty().append(r);var i=t.title||t.text;i?n.attr("title",i):n.removeAttr("title")}else this.clear()},i}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,l){function n(e,t){n.__super__.constructor.apply(this,arguments)}return l.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var r=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){r.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!r.isDisabled()){var t=i(this).parent(),n=l.GetData(t[0],"data");r.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var r=e[n],i=this.selectionContainer(),o=this.display(r,i);i.append(o);var s=r.title||r.text;s&&i.attr("title",s),l.StoreData(i[0],"data",r),t.push(i)}var a=this.$selection.find(".select2-selection__rendered");l.appendMany(a,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var r=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(r)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,r,a){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){r._handleClear(e)}),t.on("keypress",function(e){r._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var r=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var o={data:r};if(this.trigger("clear",o),o.prevented)this.$element.val(i);else{for(var s=0;s<r.length;s++)if(o={data:r[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(i);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=r.DELETE&&t.which!=r.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),r=i('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(r[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(r)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(r,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=r('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var r=this,i=t.id+"-results";e.call(this,t,n),t.on("open",function(){r.$search.attr("aria-controls",i),r.$search.trigger("focus")}),t.on("close",function(){r.$search.val(""),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.trigger("focus")}),t.on("enable",function(){r.$search.prop("disabled",!1),r._transferTabIndex()}),t.on("disable",function(){r.$search.prop("disabled",!0)}),t.on("focus",function(e){r.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){r.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){r._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented(),e.which===l.BACKSPACE&&""===r.$search.val()){var t=r.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=a.GetData(t[0],"data");r.searchRemoveChoice(n),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){r.$search.val()&&e.stopPropagation()});var o=document.documentMode,s=o&&o<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){s?r.$selection.off("input.search input.searchcheck"):r.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(s&&"input"===e.type)r.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&r.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").width():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var r=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,i)){t=t||{};var n=s.Event("select2:"+e,{params:t});r.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function r(e){this.dict=e||{}}return r.prototype.all=function(){return this.dict},r.prototype.get=function(e){return this.dict[e]},r.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},r._cache={},r.loadPath=function(e){if(!(e in r._cache)){var t=n(e);r._cache[e]=t}return new r(r._cache[e])},r}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(r){function n(e,t){n.__super__.constructor.call(this)}return r.Extend(n,r.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=r.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+r.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],r=this;this.$element.find(":selected").each(function(){var e=l(this),t=r.item(e);n.push(t)}),e(n)},n.prototype.select=function(i){var o=this;if(i.selected=!0,l(i.element).is("option"))return i.element.selected=!0,void this.$element.trigger("input").trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var r=i[n].id;-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("input").trigger("change")});else{var e=i.id;this.$element.val(e),this.$element.trigger("input").trigger("change")}},n.prototype.unselect=function(i){var o=this;if(this.$element.prop("multiple")){if(i.selected=!1,l(i.element).is("option"))return i.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n].id;r!==i.id&&-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(r,e){var i=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(r,t);null!==n&&i.push(n)}}),e({results:i})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),r=this._normalizeItem(e);return r.element=t,a.StoreData(t,"data",r),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),r=[],i=0;i<n.length;i++){var o=l(n[i]),s=this.item(o);r.push(s)}t.children=r}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function r(e,t){this._dataToConvert=t.get("data")||[],r.__super__.constructor.call(this,e,t)}return f.Extend(r,e),r.prototype.bind=function(e,t){r.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},r.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),r.__super__.select.call(this,n)},r.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),r=n.map(function(){return t.item(g(this)).id}).get(),i=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,r)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}i.push(p)}}return i},r}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var r=o.ajax(e);return r.then(t),r.fail(n),r}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,r){var i=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=i.processResults(e,n);i.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),r(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||i.trigger("results:message",{message:"errorLoading"})});i._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var r=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(r))for(var s=0;s<r.length;s++){var a=r[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var r=t.results,i=0;i<r.length;i++){var o=r[i],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=r,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(r,a)}t.results=r,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var r=n.get("tokenizer");void 0!==r&&(this.tokenizer=r),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var r=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t=r._normalizeItem(e);if(!r.$element.find("option").filter(function(){return d(this).val()===t.id}).length){var n=r.option(t);n.attr("data-select2-tag",!0),r._removeOldTags(),r.addOptions([n])}!function(e){r.trigger("select",{data:e})}(t)});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,r){for(var i=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,i)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(r(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(){r._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var r=this;this._checkIfMaximumSelected(function(){e.call(r,t,n)})},e.prototype._checkIfMaximumSelected=function(e,n){var r=this;this.current(function(e){var t=null!=e?e.length:0;0<r.maximumSelectionLength&&t>=r.maximumSelectionLength?r.trigger("results:message",{message:"maximumSelected",args:{maximum:r.maximumSelectionLength}}):n&&n()})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(o,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var r=this,i=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){o(this).off("keyup")}),this.$search.on("keyup input",function(e){r.handleSearch(e)}),t.on("open",function(){r.$search.attr("tabindex",0),r.$search.attr("aria-controls",i),r.$search.trigger("focus"),window.setTimeout(function(){r.$search.trigger("focus")},0)}),t.on("close",function(){r.$search.attr("tabindex",-1),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.val(""),r.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||r.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(r.showSearch(e)?r.$searchContainer.removeClass("select2-search--hide"):r.$searchContainer.addClass("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,r){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,r)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),r=t.length-1;0<=r;r--){var i=t[r];this.placeholder.id===i.id&&n.splice(r,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,r){this.lastParams={},e.call(this,t,n,r),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("query",function(e){r.lastParams=e,r.loading=!0}),t.on("query:append",function(e){r.lastParams=e,r.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=f(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("open",function(){r._showDropdown(),r._attachPositioningHandler(t),r._bindContainerResultHandlers(t)}),t.on("close",function(){r._hideDropdown(),r._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},e.prototype._attachPositioningHandler=function(e,t){var n=this,r="scroll.select2."+t.id,i="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(r,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(r+" "+i+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,r="resize.select2."+t.id,i="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+r+" "+i)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),r=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=i.top,o.bottom=i.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-s,u=l>i.bottom+s,d={left:i.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h={top:0,left:0};(f.contains(document.body,p[0])||p[0].isConnected)&&(h=p.offset()),d.top-=h.top,d.left-=h.left,t||n||(r="below"),u||!c||t?!c&&u&&t&&(r="below"):r="above",("above"==r||t&&"below"!==r)&&(d.top=o.top-h.top-s),null!=r&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+r),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+r)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,r){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,r)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,r=0;r<t.length;r++){var i=t[r];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("close",function(e){r._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var r=this.getHighlightedResults();if(!(r.length<1)){var i=o.GetData(r[0],"data");null!=i.element&&i.element.selected||null==i.element&&i.selected||this.trigger("select",{data:i})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(e){r._selectTriggered(e)}),t.on("unselect",function(e){r._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(c,u,d,p,h,f,g,m,v,y,s,t,_,$,b,w,A,x,D,S,E,C,O,T,q,L,I,j,e){function n(){this.reset()}return n.prototype.apply=function(e){if(null==(e=c.extend(!0,{},this.defaults,e)).dataAdapter){if(null!=e.ajax?e.dataAdapter=b:null!=e.data?e.dataAdapter=$:e.dataAdapter=_,0<e.minimumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,x)),0<e.maximumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,D)),0<e.maximumSelectionLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,S)),e.tags&&(e.dataAdapter=y.Decorate(e.dataAdapter,w)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=y.Decorate(e.dataAdapter,A)),null!=e.query){var t=u(e.amdBase+"compat/query");e.dataAdapter=y.Decorate(e.dataAdapter,t)}if(null!=e.initSelection){var n=u(e.amdBase+"compat/initSelection");e.dataAdapter=y.Decorate(e.dataAdapter,n)}}if(null==e.resultsAdapter&&(e.resultsAdapter=d,null!=e.ajax&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,T)),null!=e.placeholder&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,O)),e.selectOnClose&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,I))),null==e.dropdownAdapter){if(e.multiple)e.dropdownAdapter=E;else{var r=y.Decorate(E,C);e.dropdownAdapter=r}if(0!==e.minimumResultsForSearch&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,L)),e.closeOnSelect&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,j)),null!=e.dropdownCssClass||null!=e.dropdownCss||null!=e.adaptDropdownCssClass){var i=u(e.amdBase+"compat/dropdownCss");e.dropdownAdapter=y.Decorate(e.dropdownAdapter,i)}e.dropdownAdapter=y.Decorate(e.dropdownAdapter,q)}if(null==e.selectionAdapter){if(e.multiple?e.selectionAdapter=h:e.selectionAdapter=p,null!=e.placeholder&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,f)),e.allowClear&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,g)),e.multiple&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,m)),null!=e.containerCssClass||null!=e.containerCss||null!=e.adaptContainerCssClass){var o=u(e.amdBase+"compat/containerCss");e.selectionAdapter=y.Decorate(e.selectionAdapter,o)}e.selectionAdapter=y.Decorate(e.selectionAdapter,v)}e.language=this._resolveLanguage(e.language),e.language.push("en");for(var s=[],a=0;a<e.language.length;a++){var l=e.language[a];-1===s.indexOf(l)&&s.push(l)}return e.language=s,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:y.escapeMarkup,language:{},matcher:function e(t,n){if(""===c.trim(t.term))return n;if(n.children&&0<n.children.length){for(var r=c.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&r.children.splice(i,1);return 0<r.children.length?r:e(t,r)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,r=this.defaults.language,i=t.prop("lang"),o=t.closest("[lang]").prop("lang"),s=Array.prototype.concat.call(this._resolveLanguage(i),this._resolveLanguage(n),this._resolveLanguage(r),this._resolveLanguage(o));return e.language=s,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(c.isEmptyObject(e))return[];if(c.isPlainObject(e))return[e];var t;t=c.isArray(e)?e:[e];for(var n=[],r=0;r<t.length;r++)if(n.push(t[r]),"string"==typeof t[r]&&0<t[r].indexOf("-")){var i=t[r].split("-")[0];n.push(i)}return n},n.prototype._processTranslations=function(e,t){for(var n=new s,r=0;r<e.length;r++){var i=new s,o=e[r];if("string"==typeof o)try{i=s.loadPath(o)}catch(e){try{o=this.defaults.amdLanguageBase+o,i=s.loadPath(o)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+o+'" could not be automatically loaded. A fallback will be used instead.')}}else i=c.isPlainObject(o)?new s(o):o;n.extend(i)}return n},n.prototype.set=function(e,t){var n={};n[c.camelCase(e)]=t;var r=y._convertData(n);c.extend(!0,this.defaults,r)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(r,d,i,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=i.applyFromElement(this.options,t)),this.options=i.apply(this.options),t&&t.is("input")){var n=r(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function r(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var o=e[0].attributes[i].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,r)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(o,c,u,r){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var r=this.options.get("dataAdapter");this.dataAdapter=new r(e,this.options);var i=this.render();this._placeContainer(i);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,i);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,i);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var r=this._resolveWidth(e,"style");return null!=r?r:this._resolveWidth(e,"element")}if("element"==t){var i=e.outerWidth(!1);return i<=0?"auto":i+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){t._syncA(),t._syncS(null,e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,r=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===o.inArray(e,r)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===r.ESC||t===r.TAB||t===r.UP&&e.altKey?(n.close(e),e.preventDefault()):t===r.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===r.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===r.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===r.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===r.ENTER||t===r.SPACE||t===r.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._isChangeMutation=function(e,t){var n=!1,r=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var i=0;i<t.addedNodes.length;i++){t.addedNodes[i].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length?n=!0:o.isArray(t)&&o.each(t,function(e,t){if(r._isChangeMutation(e,t))return!(n=!0)});else n=!0;return n}},d.prototype._syncSubtree=function(e,t){var n=this._isChangeMutation(e,t),r=this;n&&this.dataAdapter.current(function(e){r.trigger("selection:update",{data:e})})},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,r={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in r){var i=r[e],o={prevented:!1,name:e,args:t};if(n.call(this,i,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},d.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];o.isArray(t)&&(t=o.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("input").trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("jquery-mousewheel",["jquery"],function(e){return e}),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,o,t,s){if(null==i.fn.select2){var a=["open","close","destroy"];i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new o(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,r=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,r)}),-1<i.inArray(t,a)?this:n}}return null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return u.fn.select2.amd=e,t});
/**
 *  Util
 */
define('app/util',[
    'jquery',
    'app/init',
    'app/lib/prototypes',
    'app/lib/console',
    'app/lib/cache',
    'app/lib/localStore',
    'app/lib/resize',
    'conf/system_effect',
    'conf/signature_type',
    'lazyload',
    'bootbox',
    'velocity',
    'velocityUI',
    'customScrollbar',
    'validator',
    'easyPieChart',
    'hoverIntent',
    'bootstrapConfirmation',
    'bootstrapToggle',
    'select2'
], (
    $,
    Init,
    Proto,
    Con,
    Cache,
    LocalStoreManager,
    ResizeManager,
    SystemEffect,
    SignatureType,
    LazyLoad,
    bootbox
) => {

    'use strict';

    let config = {
        ajaxOverlayClass: 'pf-loading-overlay',
        ajaxOverlayWrapperClass: 'pf-loading-overlay-wrapper',

        // page
        noScrollClass: 'no-scroll',

        // form
        formEditableFieldClass: 'pf-editable',                                  // class for all xEditable fields
        formErrorContainerClass: 'pf-dialog-error-container',                   // class for "error" containers in dialogs
        formWarningContainerClass: 'pf-dialog-warning-container',               // class for "warning" containers in dialogs
        formInfoContainerClass: 'pf-dialog-info-container',                     // class for "info" containers in dialogs

        // head
        headMapTrackingId: 'pf-head-map-tracking',                              // id for "map tracking" toggle (checkbox)
        headUserLocationId: 'pf-head-user-location',                            // id for "location" breadcrumb

        // menu
        menuButtonFullScreenId: 'pf-menu-button-fullscreen',                    // id for menu button "fullScreen"
        menuButtonMagnetizerId: 'pf-menu-button-magnetizer',                    // id for menu button "magnetizer"
        menuButtonGridId: 'pf-menu-button-grid',                                // id for menu button "grid snap"
        menuButtonRegionId: 'pf-menu-button-region',                            // id for menu button "region" info on systems
        menuButtonCompactId: 'pf-menu-button-compact',                          // id for menu button "compact" UI map view
        menuButtonEndpointId: 'pf-menu-button-endpoint',                        // id for menu button "endpoint" overlays
        menuButtonMapDeleteId: 'pf-menu-button-map-delete',                     // id for menu button "delete map"

        // footer
        footerId: 'pf-footer',                                                  // id for page footer
        footerCenterClass: 'pf-footer-center',                                  // class for footer "center" element
        globalInfoPanelId: 'pf-global-info',                                    // id for "global info panel"

        settingsMessageVelocityOptions: {
            duration: 180
        },

        // dialogs
        dialogClass: 'modal-dialog',                                            // class for all dialogs (bootstrap)

        // map module
        mapModuleId: 'pf-map-module',                                           // id for main map module
        mapTabBarIdPrefix: 'pf-map-tab-bar-',                                   // id prefix map tab bar lists <ul>
        mapTabBarClass: 'pf-map-tab-bar',                                       // class for map tab bar lists <ul>
        mapTabContentClass: 'pf-map-tab-content',                               // class for map tab content
        mapTabContentAreaClass: 'pf-map-tab-content-area',                      // class for map tab content grid areas
        mapTabContentAreaAliases: ['map', 'a', 'b', 'c'],
        mapClass: 'pf-map' ,                                                    // class for all maps

        // util
        userStatusClass: 'pf-user-status',                                      // class for player status
        dynamicAreaClass: 'pf-dynamic-area',                                    // class for "dynamic" areas

        // select2
        select2Class: 'pf-select2',                                             // class for all "Select2" <select> elements
        select2ImageLazyLoadClass: 'pf-select2-image-lazyLoad',

        // animation
        animationPulseClassPrefix: 'pf-animation-pulse-',                       // class prefix for "pulse" background animation

        // popover
        popoverClass: 'pf-popover',                                             // class for "popover" - custom modifier
        popoverTriggerClass: 'pf-popover-trigger',                              // class for "popover" trigger elements
        popoverSmallClass: 'popover-small',                                     // class for small "popover"
        popoverCharacterClass: 'pf-popover-character',                          // class for character "popover"
        popoverListIconClass: 'pf-popover-list-icon',                           // class for list "icon"s in "

        // Summernote
        summernoteClass: 'pf-summernote',                                       // class for Summernote "WYSIWYG" elements

        // help
        helpDefaultClass: 'pf-help-default',                                    // class for "help" tooltip elements
        helpClass: 'pf-help',                                                   // class for "help" tooltip elements

        // fonts
        fontTriglivianClass: 'pf-triglivian',                                   // class for "Triglivian" names (e.g. Abyssal systems)

        // LocalStore
        localStoreNames: ['default', 'character', 'map', 'module']              // Allowed name identifiers for DB names
    };

    let currentSystemDataCache = new Cache({
        name:       'currentSystemData',
        ttl:        -1,
        maxSize:    20
    });

    // browser tab blink
    let initialPageTitle = document.title;                                      // initial page title (cached)
    let blinkTimer;                                                             // global blink timeout cache

    let stopTimerCache = {};                                                    // cache for stopwatch timer
    let animationTimerCache = {};                                               // cache for table row animation timeout

    /*
     *  ===============================================================================================================
     *   Global jQuery plugins for some common and frequently used functions
     *   ==============================================================================================================
     */

    /**
     * displays a loading indicator on an element
     */
    $.fn.showLoadingAnimation = function(options){
        return this.each(function(){
            let loadingElement = $(this);
            let iconSize = getObjVal(options, 'icon.size') || 'fa-lg';

            // disable all events
            //loadingElement.css('pointer-events', 'none');

            let overlay = $('<div>', {
                class: config.ajaxOverlayClass
            }).css('pointer-events', 'none').append(
                $('<div>', {
                    class: [config.ajaxOverlayWrapperClass].join(' ')
                }).append(
                    $('<i>', {
                        class: ['fas', iconSize, 'fa-sync', 'fa-spin'].join(' ')
                    })
                )
            );

            loadingElement.append(overlay);

            // fade in
            $(overlay).velocity({
                opacity: 0.6
            },{
                duration: 120
            });
        });
    };

    /**
     * removes loading overlay(s)
     */
    $.fn.hideLoadingAnimation = function(){
        return this.each(function(){
            let parentEl = $(this);
            let overlays = parentEl.find('.' + config.ajaxOverlayClass);
            if(overlays.length){
                overlays.css('pointer-events', 'auto');
                // important: "stop" is required to stop "show" animation
                // -> otherwise "complete" callback is not fired!
                overlays.velocity('stop').velocity('reverse', {
                    complete: function(){
                        this.forEach(overlay => {
                            overlay.remove();
                        });
                    }
                });
            }
        });
    };

    /**
     * show "splash" loading overlay
     * @param callback
     */
    $.fn.showSplashOverlay = function(callback){
        let splashOverlay = $(this);

        splashOverlay.velocity('fadeIn', {
            duration: Init.animationSpeed.splashOverlay,
            complete: function(){
                // execute callback function if given
                if(callback !== undefined){
                    callback();
                }
            }
        });
    };

    /**
     * hide "splash" loading overlay
     */
    $.fn.hideSplashOverlay = function(){
        let splashOverlay = $(this);

        splashOverlay.velocity('fadeOut', {
            duration: Init.animationSpeed.splashOverlay
        });
    };

    /**
     * show a unique generated captcha image
     * @param reason
     * @param callback
     * @returns {*}
     */
    $.fn.showCaptchaImage = function(reason, callback){
        return this.each(function(){
            let captchaWrapper = $(this);
            let captchaImage = captchaWrapper.find('img');

            captchaWrapper.showLoadingAnimation(config.loadingOptions);
            getCaptchaImage(reason, function(base64Image){

                captchaImage.attr('src', base64Image).show();
                captchaWrapper.hideLoadingAnimation({
                    icon: {
                        size: 'fa-2x'
                    }
                });

                if(callback){
                    callback();
                }
            });
        });
    };

    /**
     * reset/clear form fields
     * @returns {*}
     */
    $.fn.resetFormFields = function(){
        return this.each(function(){
            let field = $(this);

            if( !field.is('select') ){
                // "input"
                field.val('');
            }

            field.parents('.form-group').removeClass('has-error has-success');
        });
    };

    /**
     * show form messages
     * check: showMessage() for en other way of showing messages
     * @param errors
     */
    $.fn.showFormMessage = function(errors){
        let formElement = $(this);
        let errorMessage = [];
        let warningMessage = [];
        let infoMessage = [];

        for (let error of errors) {
            let message = `${error.text}`;
            if(error.type === 'error'){
                message = `${error.status} - ${message}`;
                errorMessage.push(message);

                // mark form field as invalid in case of a validation error
                if(
                    error.field &&
                    error.field.length > 0
                ){
                    let formField = formElement.find('[name="' + error.field + '"]');
                    let formGroup = formField.parents('.form-group').removeClass('has-success').addClass('has-error');
                    let formHelp = formGroup.find('.help-block').text(error.text);
                }

            }else if(error.type === 'warning'){
                warningMessage.push(message);
            }else if(error.type === 'info'){
                infoMessage.push(message);
            }
        }

        if(errorMessage.length > 0){
            formElement.hideFormMessage('error', function(element){
                $(element).find('small').html( errorMessage.join('<br>') );
                $(element).velocity('transition.slideUpIn', config.settingsMessageVelocityOptions);
            });
        }

        if(warningMessage.length > 0){
            formElement.hideFormMessage('warning', function(element){
                $(element).find('small').html( warningMessage.join('<br>') );
                $(element).velocity('transition.slideUpIn', config.settingsMessageVelocityOptions);
            });
        }

        if(infoMessage.length > 0){
            formElement.hideFormMessage('info', function(element){
                $(element).find('small').html( infoMessage.join('<br>') );
                $(element).velocity('transition.slideUpIn', config.settingsMessageVelocityOptions);
            });
        }
    };

    /**
     * hide all form messages
     * @param type
     * @param callback
     */
    $.fn.hideFormMessage = function(type, callback){

        let formElement = $(this);

        let settingsMessageVelocityOptions = $.extend({}, config.settingsMessageVelocityOptions);

        // check if callback exists
        if(callback !== undefined){
            settingsMessageVelocityOptions.complete = callback;

            // new error will be shown afterwards -> keep display
            settingsMessageVelocityOptions.display = 'block';
        }

        let messageElement = null;

        switch(type){
            case 'error':
                // find error container
                messageElement = formElement.find('.' + config.formErrorContainerClass);
                break;
            case 'warning':
                messageElement = formElement.find('.' + config.formWarningContainerClass);
                break;
            case 'info':
                messageElement = formElement.find('.' + config.formInfoContainerClass);
                break;
            case 'all':
                messageElement = formElement.find(
                    '.' + config.formErrorContainerClass + ', ' +
                    '.' + config.formWarningContainerClass + ', ' +
                    '.' + config.formInfoContainerClass
                );
        }

        if(messageElement){
            if(messageElement.is(':visible')){
                messageElement.velocity('transition.slideDownOut', settingsMessageVelocityOptions);
            }else if(callback){
                // skip hide animation
                callback(messageElement);
            }
        }
    };

    /**
     * init form elements for validation (bootstrap3 validation)
     * @param options
     * @returns {*}
     */
    $.fn.initFormValidation = function(options){
        options = (typeof options === 'undefined')? {} : options;

        return this.each(function(){
            let form = $(this);

            // init form validation
            form.validator(options);

            // validation event listener
            form.on('valid.bs.validator', function(validatorObj){
                let inputGroup = $(validatorObj.relatedTarget).parents('.form-group');
                if(inputGroup){
                    inputGroup.removeClass('has-error').addClass('has-success');
                }
            });

            form.on('invalid.bs.validator', function(validatorObj){
                let field = $(validatorObj.relatedTarget);
                let inputGroup = field.parents('.form-group');
                if(inputGroup){
                    inputGroup.removeClass('has-success').addClass('has-error');
                }
            });
        });
    };

    /**
     * checks whether a bootstrap form is valid or not
     * validation plugin does not provide a proper function for this
     * @returns {boolean}
     */
    $.fn.isValidForm = function(){
        let form = $(this);
        let valid = false;

        let errorElements =  form.find('.has-error');
        if(errorElements.length === 0){
            valid = true;
        }

        return valid;
    };

    /**
     * init the map-update-counter as "easy-pie-chart"
     */
    $.fn.initMapUpdateCounter = function(){
        let counterChart = $(this);

        let gradient = [
            [0, [217,83,79]],
            [10, [217,83,79]],
            [50, [240, 173, 78]],
            [75, [79,158,79]],
            [100, [86, 138, 137]]
        ];

        let gradientWidth = 500;

        let getColor = percent => {
            percent = percent || 1;
            let colorRangeEnd = gradient.findIndex(value => percent <= value[0]);
            let colorRange = [colorRangeEnd - 1, colorRangeEnd];

            //Get the two closest colors
            let colorFirst = gradient[colorRange[0]][1];
            let colorSecond = gradient[colorRange[1]][1];

            //Calculate ratio between the two closest colors
            let colorFirstX = gradientWidth * (gradient[colorRange[0]][0] / 100);
            let colorSecondX = gradientWidth * (gradient[colorRange[1]][0] / 100) - colorFirstX;
            let weightX = gradientWidth * (percent / 100) - colorFirstX;
            let weight = weightX / colorSecondX;

            //Get the color with pickHex(thx, less.js's mix function!)
            let result = pickHex(colorSecond, colorFirst, weight);
            return `rgb(${result.join()})`;
        };

        let pickHex = (color1, color2, weight) => {
            let w1 = weight;
            let w2 = 1 - w1;
            return [Math.round(color1[0] * w1 + color2[0] * w2),
                Math.round(color1[1] * w1 + color2[1] * w2),
                Math.round(color1[2] * w1 + color2[2] * w2)];
        };

        counterChart.easyPieChart({
            barColor: percent => getColor(Number(Number(percent).toFixed(1))),
            trackColor: '#2b2b2b',
            size: 30,
            scaleColor: false,
            lineWidth: 2,
            animate: {
                duration: 550,
                enabled: true
            },
            easing: function (x, t, b, c, d) { // easeInOutSine - jQuery Easing
                return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
            }
        });
    };

    /**
     * init tooltips on an element
     * @param  {object} options
     * @returns {*}
     */
    $.fn.initTooltips = function(options= {}){
        let containerSelectors = ['.modal', '.popover'];
        let getContainer = (el, selectors = containerSelectors) => {
            for(let i = 0; i < selectors.length; i++){
                let checkContainer = el.closest(containerSelectors[i]);
                if(checkContainer){
                    return checkContainer;
                }
            }
        };

        return this.each(function(){
            let tooltipElements = $(this).find('[title]');
            if(tooltipElements.length){
                let tooltipOptions = Object.assign({}, options);
                if(!options.hasOwnProperty('container')){
                    // check if current this is a modal/(child of modal) element
                    let container = getContainer(this);
                    if(container){
                        tooltipOptions.container = container;
                    }
                }
                tooltipElements.tooltip('destroy').tooltip(tooltipOptions);
            }
        });
    };

    /**
     * destroy tooltips from element
     * @param recursive
     * @returns {*}
     */
    $.fn.destroyTooltips = function(recursive){
        return this.each(function(){
            let element = $(this);
            let tooltipSelector = '[title]';
            let tooltipElements = element.filter(tooltipSelector);
            if(recursive){
                tooltipElements = tooltipElements.add(element.find(tooltipSelector));
            }

            tooltipElements.each(function(){
                $(this).tooltip('destroy');
            });
        });
    };

    /**
     * add a popup tooltip with character information (created/updated)
     * @param tooltipData
     * @param options
     * @returns {*}
     */
    $.fn.addCharacterInfoTooltip = function(tooltipData, options){
        let data = {};

        if(
            tooltipData.created &&
            tooltipData.updated &&
            tooltipData.created.character &&
            tooltipData.updated.character
        ){
            let createdData = tooltipData.created;
            let updatedData = tooltipData.updated;

            let statusCreatedClass = getStatusInfoForCharacter(createdData.character, 'class');
            let statusUpdatedClass = getStatusInfoForCharacter(updatedData.character, 'class');

            // convert timestamps
            let dateCreated = new Date(createdData.created * 1000);
            let dateUpdated = new Date(updatedData.updated * 1000);
            let dateCreatedUTC = convertDateToUTC(dateCreated);
            let dateUpdatedUTC = convertDateToUTC(dateUpdated);

            data = {
                popoverClass: config.popoverCharacterClass,
                ccpImageServerUrl: Init.url.ccpImageServer,
                created: createdData,
                updated: updatedData,
                createdTime: convertDateToString(dateCreatedUTC),
                updatedTime: convertDateToString(dateUpdatedUTC),
                createdStatusClass: statusCreatedClass,
                updatedStatusClass: statusUpdatedClass
            };

            let defaultOptions = {
                placement: 'top',
                html: true,
                trigger: 'hover',
                container: 'body',
                title: 'Created / Updated',
                delay: {
                    show: 150,
                    hide: 0
                }
            };

            options = $.extend({}, defaultOptions, options);

            return this.each(function(){
                let element = $(this);

                requirejs(['text!templates/tooltip/character_info.html', 'mustache'], (template, Mustache) => {
                    let content = Mustache.render(template, data);

                    element.popover(options);

                    // set new popover content
                    let popover = element.data('bs.popover');
                    popover.options.content = content;

                    if(options.show){
                        element.popover('show');
                    }
                });
            });
        }else{
            return this;
        }
    };

    /**
     * add character switch popover
     */
    $.fn.initCharacterSwitchPopover = function(){
        let elements = $(this);
        let userData = getCurrentUserData();
        let eventNamespace = 'hideCharacterPopup';

        requirejs(['text!templates/tooltip/character_switch.html', 'mustache'], function(template, Mustache){

            let data = {
                popoverClass: config.popoverCharacterClass,
                browserTabId: getBrowserTabId(),
                routes:  Init.routes,
                userData: userData,
                otherCharacters: () => {
                    return userData.characters.filter((character, i) => {
                        let characterImage = eveImageUrl('characters', character.id);
                        // preload image (prevent UI flicker
                        let img= new Image();
                        img.src = characterImage;

                        userData.characters[i].image = characterImage;

                        return character.id !== userData.character.id;
                    });
                }
            };

            let content = Mustache.render(template, data);

            return elements.each(function(){
                let element = $(this);

                // check if popover already exists -> remove it
                if(element.data('bs.popover') !== undefined){
                    element.off('click').popover('destroy');
                }

                element.on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();

                    let button = $(this);
                    let easeEffect = button.attr('data-easein');
                    let popoverData = button.data('bs.popover');
                    let popoverElement = null;

                    let velocityOptions = {
                        duration: Init.animationSpeed.dialogEvents
                    };

                    if(popoverData === undefined){

                        button.on('shown.bs.popover', function(e){
                            let tmpPopupElement = $(this).data('bs.popover').tip();
                            tmpPopupElement.find('.btn').on('click', function(e){
                                // close popover
                                $('body').click();
                            });
                        });

                        // init popover and add specific class to it (for styling)
                        button.popover({
                            html: true,
                            title: 'select character',
                            trigger: 'manual',
                            placement: 'bottom',
                            content: content,
                            animation: false
                        }).data('bs.popover').tip().addClass(config.popoverClass);

                        button.popover('show');

                        popoverElement = button.data('bs.popover').tip();
                        popoverElement.velocity('transition.' + easeEffect, velocityOptions);
                        popoverElement.initTooltips();

                        // set click events. This is required to pass data to "beforeunload" events
                        // -> there is no way to identify the target within that event
                        popoverElement.on('click', '.btn', function(){
                            // character switch detected
                            $('body').data('characterSwitch', true);
                            // ... and remove "characterSwitch" data again! after "unload"
                            setTimeout(function(){
                                $('body').removeData('characterSwitch');
                            }, 500);
                        });
                    }else{
                        popoverElement = button.data('bs.popover').tip();
                        if(popoverElement.is(':visible')){
                            popoverElement.velocity('reverse');
                        }else{
                            button.popover('show');
                            popoverElement.initTooltips();
                            popoverElement.velocity('transition.' + easeEffect, velocityOptions);
                        }
                    }
                });

                // set popup "close" observer
                elements.initPopoverClose(eventNamespace);
            });
        });
    };

    /**
     * destroy popover elements
     * @param recursive
     * @returns {*}
     */
    $.fn.destroyPopover = function(recursive){
        return this.each(function(){
            let element = $(this);
            let popoverSelector = '.' + config.popoverTriggerClass;
            let popoverElements = element.filter(popoverSelector);
            if(recursive){
                popoverElements = popoverElements.add(element.find(popoverSelector));
            }

            popoverElements.each(function(){
                let popoverElement = $(this);
                if(popoverElement.data('bs.popover')){
                    popoverElement.popover('destroy');
                }
            });
        });
    };

    /**
     * set "popover" close action on clicking "somewhere" on the <body>
     * @param eventNamespace
     * @returns {*}
     */
    $.fn.initPopoverClose = function(eventNamespace){
        return this.each(function(){
            $('body').off('click.' + eventNamespace).on('click.' + eventNamespace + ' contextmenu', function(e){
                $('.' + config.popoverTriggerClass).each(function(){
                    let popoverElement = $(this);
                    //the 'is' for buttons that trigger popups
                    //the 'has' for icons within a button that triggers a popup
                    if(
                        !popoverElement.is(e.target) &&
                        popoverElement.has(e.target).length === 0 &&
                        $('.popover').has(e.target).length === 0
                    ){
                        let popover = popoverElement.data('bs.popover');

                        if(
                            popover !== undefined &&
                            popover.tip().is(':visible')
                        ){
                            popoverElement.popover('hide');
                        }
                    }
                });
            });
        });
    };

    /**
     * adds the small-class to a tooltip
     * @returns {*}
     */
    $.fn.setPopoverSmall = function(){
        return this.each(function(){
            let element = $(this);
            let popover = element.data('bs.popover');
            if(popover){
                popover.tip().addClass(config.popoverSmallClass);
            }
        });
    };

    /**
     * display a custom message (info/warning/error) to a container element
     * check: $.fn.showFormMessage() for an other way of showing messages
     * @param config
     */
    $.fn.showMessage = function(config){
        let containerElement = $(this);

        requirejs(['text!templates/form/message.html', 'mustache'], function(template, Mustache){

            let messageTypeClass = 'alert-danger';
            let messageTextClass = 'txt-color-danger';

            switch(config.type){
                case 'info':
                    messageTypeClass = 'alert-info';
                    messageTextClass = 'txt-color-information';
                    break;
                case 'success':
                    messageTypeClass = 'alert-success';
                    messageTextClass = 'txt-color-success';
                    break;
                case 'warning':
                    messageTypeClass = 'alert-warning';
                    messageTextClass = 'txt-color-warning';
                    break;
            }

            let defaultOptions = {
                dismissible: true,
                messageId: getRandomString('pf-alert-'),
                messageTypeClass: messageTypeClass,
                messageTextClass: messageTextClass,
                insertElement: 'replace'
            };

            defaultOptions = $.extend(defaultOptions, config);
            let content = Mustache.render(template, defaultOptions);

            switch(defaultOptions.insertElement){
                case 'replace': containerElement.html(content); break;
                case 'prepend': containerElement.prepend(content); break;
                case 'append': containerElement.append(content); break;
                default: console.error('insertElement: %s is not specified!', defaultOptions.insertElement);
            }

            $('#' + defaultOptions.messageId).velocity('stop').velocity('fadeIn');
        });
    };

    /**
     * highlight jquery elements
     * add/remove css class for keyframe animation
     * @param status
     * @param keepVisible
     * @param clear
     * @returns {void|*|undefined}
     */
    $.fn.pulseBackgroundColor = function(status, keepVisible = false, clear = false){
        let animationClass = config.animationPulseClassPrefix;
        switch(status){
            case 'added': animationClass += 'success'; break;
            case 'changed': animationClass += 'warning'; break;
            case 'deleted': animationClass += 'danger'; break;
            default: console.warn('Invalid status: %s', status);
        }

        // if keepVisible -> background color animation class will not be deleted
        if(keepVisible){
            animationClass += '-keep';
        }

        let clearTimer = element => {
            element.removeClass(animationClass);
            let currentTimer = element.data('animationTimer');

            if(animationTimerCache.hasOwnProperty(currentTimer)){
                clearTimeout( currentTimer );
                delete animationTimerCache[currentTimer];
                element.removeData('animationTimer');
            }
        };

        return this.each(function(){
            let element = $(this);

            if(element.hasClass(animationClass)){
                // clear timer -> set new timer
                clearTimer(element);
            }

            if(!clear){
                element.addClass(animationClass);
                // remove class after animation finish, if not 'keepVisible'
                if(!keepVisible){
                    let timer = setTimeout(clearTimer, 1500, element);
                    element.data('animationTimer', timer);
                    animationTimerCache[timer] = true;
                }
            }
        });
    };

    /*
     *  ===============================================================================================================
     *   Util functions that are global available for all modules
     *   ==============================================================================================================
     */

    /**
     * get current Pathfinder version number
     * @returns {string}
     */
    let getVersion = () => document.body.dataset.version;

    /**
     * show current program version information in browser console
     */
    let showVersionInfo = () => Con.showVersionInfo(getVersion());

    /**
     * get image root dir
     * @returns {string}
     */
    let imgRoot = () => `/public/img/${getVersion()}/`;

    /**
     * get CCP image URLs for
     * @param resourceType 'alliances'|'corporations'|'characters'|'types'
     * @param resourceId
     * @param size
     * @param resourceVariant
     * @returns {boolean}
     */
    let eveImageUrl = (resourceType, resourceId, size = 32, resourceVariant = undefined) => {
        let url = false;
        if(
            typeof resourceType === 'string' &&
            typeof resourceId === 'number' &&
            typeof size === 'number'
        ){
            resourceType = resourceType.toLowerCase();

            if(!resourceVariant){
                switch(resourceType){
                    // faction icons are on 'corporations' endpoint.. CCP fail?!
                    case 'factions': resourceType = 'corporations'; // jshint ignore:line
                    case 'alliances':
                    case 'corporations': resourceVariant = 'logo'; break;
                    case 'characters': resourceVariant = 'portrait'; break;
                    case 'types': resourceVariant = 'icon'; break;
                    default:
                        console.warn('Invalid resourceType: %o for in eveImageUrl()', resourceType);
                }
            }

            url = [Init.url.ccpImageServer, resourceType, resourceId, resourceVariant].join('/');

            let params = {size: size};
            let searchParams = new URLSearchParams(params); // jshint ignore:line
            url += '?' + searchParams.toString();
        }
        return url;
    };

    /**
     * convert unicode to string
     * @param text
     * @returns {String}
     */
    const unicodeToString = (text) => {
        const result = text.replace(/\\u[\dA-F]{4}/gi, (match) => String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)))
        return result.substring(0, 2) == "u'" ? result.substring(2, result.length - 1) : result;
    };

    /**
     * polyfill for "passive" events
     * -> see https://github.com/zzarcon/default-passive-events
     */
    let initPassiveEvents = () => {

        const defaultOptions = {
            passive: true,
            capture: false
        };
        const supportedPassiveTypes = [
            'scroll', 'wheel',
            'touchstart', 'touchmove', 'touchenter', 'touchend', 'touchleave',
            'mouseout', 'mouseleave', 'mouseup', 'mousedown', 'mousemove', 'mouseenter', 'mousewheel', 'mouseover'
        ];
        const getDefaultPassiveOption = (passive, eventName) => {
            if(passive !== undefined) return passive;

            return supportedPassiveTypes.indexOf(eventName) === -1 ? false : defaultOptions.passive;
        };

        const getWritableOptions = (options) => {
            const passiveDescriptor = Object.getOwnPropertyDescriptor(options, 'passive');

            return passiveDescriptor &&
            passiveDescriptor.writable !== true &&
            passiveDescriptor.set === undefined ? Object.assign({}, options) : options;
        };

        const prepareSafeListener = (listener, passive) => {
            if(!passive) return listener;
            return function(e){
                e.preventDefault = () => {};
                return listener.call(this, e);
            };
        };

        const overwriteAddEvent = (superMethod) => {
            EventTarget.prototype.addEventListener = function(type, listener, options){ // jshint ignore:line
                const usesListenerOptions = typeof options === 'object';
                const useCapture          = usesListenerOptions ? options.capture : options;

                options         = usesListenerOptions ? getWritableOptions(options) : {};
                options.passive = getDefaultPassiveOption(options.passive, type);
                options.capture = useCapture === undefined ? defaultOptions.capture : useCapture;
                listener        = prepareSafeListener(listener, options.passive);

                superMethod.call(this, type, listener, options);
            };
        };

        let eventListenerOptionsSupported = () => {
            let supported = false;

            try {
                const opts = Object.defineProperty({}, 'passive', {
                    get(){
                        supported = true;
                    }
                });

                window.addEventListener('test', null, opts);
                window.removeEventListener('test', null, opts);
            } catch (e){}

            return supported;
        };

        let supportsPassive = eventListenerOptionsSupported ();
        if(supportsPassive){
            const addEvent = EventTarget.prototype.addEventListener; // jshint ignore:line
            overwriteAddEvent(addEvent);
        }
    };

    /**
     * filter elements from elements array that are not within viewport
     * @param elements
     * @returns {[]}
     */
    let findInViewport = elements => {
        let visibleElement = [];

        for(let element of elements){
            if(!(element instanceof HTMLElement)){
                console.warn('findInViewport() expects Array() of %O; %o given', HTMLElement, element);
                continue;
            }

            let top = element.offsetTop;
            let left = element.offsetLeft;
            let width = element.offsetWidth;
            let height = element.offsetHeight;
            let origElement = element;

            while(element.offsetParent){
                element = element.offsetParent;
                top += element.offsetTop;
                left += element.offsetLeft;
            }

            if(
                top < (window.pageYOffset + window.innerHeight) &&
                left < (window.pageXOffset + window.innerWidth) &&
                (top + height) > window.pageYOffset &&
                (left + width) > window.pageXOffset
            ){
                visibleElement.push(origElement);
            }
        }

        return visibleElement;
    };

    /**
     * "Scroll Spy" implementation
     * @see https://github.com/cferdinandi/gumshoe/blob/master/src/js/gumshoe/gumshoe.js
     * @param navElement
     * @param scrollElement
     * @param settings
     */
    let initScrollSpy = (navElement, scrollElement = document, settings = {}) => {
        settings = Object.assign({}, {
            clsOnScroll: 'on-scroll'
        }, settings);
        let requestAnimationId, scrollId, current;

        if(!navElement){
            console.warn('initScrollSpy() failed. navElement undefined');
            return;
        }

        let scrollDomNode = () => scrollElement === document ? document.body : scrollElement;

        let contents = Array.from(navElement.querySelectorAll('.page-scroll')).map(link => ({
            link: link,
            content: document.getElementById(link.getAttribute('data-target'))
        }));

        let getOffset = settings => {
            if(typeof settings.offset === 'function'){
                return parseFloat(settings.offset());
            }
            // Otherwise, return it as-is
            return parseFloat(settings.offset);
        };

        let getDocumentHeight = () => {
            return Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
        };

        let activate = item => {
            if(!item) return;

            // Get the parent list item
            let li = item.link.closest('li');
            if(!li) return;

            // Add the active class to li
            li.classList.add('active');
        };

        let deactivate = item => {
            if(!item) return;

            // remove focus
            if(document.activeElement === item.link){
                document.activeElement.blur();
            }

            // Get the parent list item
            let li = item.link.closest('li');
            if(!li) return;

            // Remove the active class from li
            li.classList.remove('active');
        };

        let isInView = (elem, settings, bottom) => {
            let bounds = elem.getBoundingClientRect();
            let offset = getOffset(settings);
            if(bottom){
                return parseInt(bounds.bottom, 10) < (window.innerHeight || document.documentElement.clientHeight);
            }
            return parseInt(bounds.top, 10) <= offset;
        };

        let isAtBottom = () => {
            return window.innerHeight + window.pageYOffset >= getDocumentHeight();
        };

        let useLastItem = (item, settings) => {
            return !!(isAtBottom() && isInView(item.content, settings, true));
        };

        let getActive = (contents, settings) => {
            let last = contents[contents.length - 1];
            if(useLastItem(last, settings)) return last;
            for(let i = contents.length - 1; i >= 0; i--){
                if(isInView(contents[i].content, settings)) return contents[i];
            }
        };

        let detect = () => {
            let active = getActive(contents, settings);

            // if there's no active content, deactivate and bail
            if(!active){
                if(current){
                    deactivate(current);
                    current = null;
                }
                return;
            }

            // If the active content is the one currently active, do nothing
            if (current && active.content === current.content) return;

            // Deactivate the current content and activate the new content
            deactivate(current);
            activate(active);

            // Update the currently active content
            current = active;
        };

        let onScrollClassHandler = () => {
            if(scrollId){
                clearTimeout(scrollId);
            }
            scrollDomNode().classList.add(settings.clsOnScroll);
            scrollId = setTimeout(() => scrollDomNode().classList.remove(settings.clsOnScroll), 80);
        };

        let scrollHandler = () => {
            // If there's a timer, cancel it
            if(requestAnimationId){
                window.cancelAnimationFrame(requestAnimationId);
            }
            requestAnimationId = window.requestAnimationFrame(() => {
                detect();
                // apply 'onScroll' class -> can be used by other elements
                onScrollClassHandler();
            });
        };

        // Find the currently active content
        detect();

        scrollElement.addEventListener('scroll', scrollHandler, {passive: true});

        // set click observer for links
        let clickHandler = function(e){
            e.preventDefault();
            this.content.scrollIntoView({behavior: 'smooth'});
        };

        for(let item of contents){
            $(item.link).on('click', clickHandler.bind(item));
        }
    };

    /**
     * get template for Bootstrap "Confirmation" popover plugin
     * -> if HTML 'content' not set, we expect the default template
     *    https://www.npmjs.com/package/bs-confirmation
     * -> options.size for "small" popover layout
     * -> options.noTitle for hide title element
     * @param content
     * @param options
     * @returns {string}
     */
    let getConfirmationTemplate = (content, options) => {
        let getButtons = () => {
            let buttonHtml = '<div class="btn-group">';
            buttonHtml += '<a data-apply="confirmation">Yes</a>';
            buttonHtml += '<a data-dismiss="confirmation">No</a>';
            buttonHtml += '</div>';
            return buttonHtml;
        };

        let getContent = content => {
            let contentHtml = content ? content : '';
            contentHtml += '<div class="popover-footer">';
            contentHtml += getButtons();
            contentHtml += '</div>';
            return contentHtml;
        };

        let popoverClass = ['popover'];
        if('small' === getObjVal(options, 'size')){
            popoverClass.push('popover-small');
        }

        let contentClass = ['popover-content', 'no-padding'];

        let html = '<div class="' + popoverClass.join(' ') + '">';
        html += '<div class="arrow"></div>';
        if(true !== getObjVal(options, 'noTitle')){
            html += '<h3 class="popover-title"></h3>';
        }
        html += '<div class="' + contentClass.join(' ') + '">';
        html += getContent(content);
        html += '</div>';
        html += '</div>';
        return html;
    };

    /**
     * get HTML for "delete connection" confirmation popover
     * @returns {string}
     */
    let getConfirmationContent = checkOptions => {
        let getChecklist = checkOptions => {
            let html = '<form class="form-inline editableform popover-content-inner">';
            html += '<div class="control-group form-group">';
            html += '<div class="editable-input">';
            html += '<div class="editable-checklist">';

            for(let option of checkOptions){
                html += '<div><label>';
                html += '<input type="checkbox" name="' + option.name + '" value="' + option.value + '" ';
                html += 'class="' + option.class + '" ' + (option.checked ? 'checked' : '') + '>';
                html += '<span>' + option.label + '</span>';
                html += '</label></div>';
            }

            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</form>';

            return html;
        };

        let html = '';
        html += getChecklist(checkOptions);

        return html;
    };

    /**
     * convert XEditable Select <option> data into Select2 data format
     * -> "prepend" (empty) options get added, too
     * -> "metaData" can be used to pass custom data per <option>
     * @param editable
     * @returns {Array}
     */
    let convertXEditableOptionsToSelect2 = editable => {
        let data = [];

        if(editable.options){
            // collect all options + "prepend" option from xEditable...
            let optionsPrepend = editable.options.prepend ? editable.options.prepend : [];
            let options =  editable.options.source();

            let optionsAll = [];
            optionsAll.push(...optionsPrepend, ...options);

            /**
             * convert a single option into Select2 format
             * @param option
             * @returns {{id: *, text: *}}
             */
            let convertOption = (option) => {
                let data = {
                    id: option.value,
                    text: option.text
                };

                if(editable.value === option.value){
                    data.selected = true;
                }

                if(option.disabled === true){
                    data.disabled = true;
                }

                // optional "metaData" that belongs to this option
                if(option.hasOwnProperty('metaData')){
                   data.metaData = option.metaData;
                }

                return data;
            };

            // ... transform data into Select2 data format
            data = optionsAll.map(group => {
                if(group.children){
                    group.children = group.children.map(convertOption);
                }else{
                    group = convertOption(group);
                }
                return group;
            });
        }

        return data;
    };

    /**
     * flatten XEditable array for select fields
     * @param dataArray
     * @returns {{}}
     */
    let flattenXEditableSelectArray = dataArray => {
        let flatten = {};

        for(let data of dataArray){
            if(data.children && data.children.length > 0){
                for(let child of data.children){
                    flatten[child.value] = child.text;
                }
            }else{
                flatten[data.value] = data.text;
            }
        }

        return flatten;
    };

    /**
     * set default configuration for "Bootbox" plugin
     */
    let initDefaultBootboxConfig = () => {
        bootbox.setDefaults({
            onEscape: true      // enables close dialogs on ESC key
        });
    };

    /**
     * set default configuration for "Tooltip" plugin
     * @param containerEl
     */
    let initDefaultTooltipConfig = containerEl => {
        $.fn.tooltip.Constructor.DEFAULTS.container = containerEl;
        $.fn.tooltip.Constructor.DEFAULTS.delay = 100;
    };

    /**
     * set default configuration for "Popover" plugin
     * @param containerEl
     */
    let initDefaultPopoverConfig = containerEl => {
        $.fn.popover.Constructor.DEFAULTS.container = containerEl;
    };

    /**
     * set default configuration for "Confirmation" popover plugin
     */
    let initDefaultConfirmationConfig = () => {
        $.fn.confirmation.Constructor.DEFAULTS.placement = 'left';
        $.fn.confirmation.Constructor.DEFAULTS.container = 'body';
        $.fn.confirmation.Constructor.DEFAULTS.btnCancelClass = 'btn btn-sm btn-default';
        $.fn.confirmation.Constructor.DEFAULTS.btnCancelLabel = 'cancel';
        $.fn.confirmation.Constructor.DEFAULTS.btnCancelIcon = 'fas fa-fw fa-ban';
        $.fn.confirmation.Constructor.DEFAULTS.btnOkClass = 'btn btn-sm btn-danger';
        $.fn.confirmation.Constructor.DEFAULTS.btnOkLabel = 'delete';
        $.fn.confirmation.Constructor.DEFAULTS.btnOkIcon = 'fas fa-fw fa-times';
        $.fn.confirmation.Constructor.DEFAULTS.template = getConfirmationTemplate();
    };

    /**
     * set default configuration for "Select2" plugin
     */
    let initDefaultSelect2Config = () => {
        $.fn.select2.defaults.set('theme', 'pathfinder');

        $.fn.select2.defaults.set('language', {
            searching: params => '&nbsp;<i class="fas fa-sync fa-spin"></i>&nbsp;&nbsp;searching...'
        });

        $.fn.select2.defaults.set('escapeMarkup', markup => {
            // required for HTML in options
            return markup;
        });

        let initScrollbar = (resultsWrapper) => {
            resultsWrapper.css('maxHeight', '300px');

            // default 'mousewheel' event set by select2 needs to be disabled
            // in order to make mCustomScrollbar mouseWheel enable works correctly
            $(resultsWrapper).find('ul.select2-results__options').off('mousewheel');

            // preload images that are not visible yet
            let lazyLoadImagesOffset = 240;

            resultsWrapper.mCustomScrollbar({
              //setHeight: 400,
                scrollInertia: 200,
                mouseWheel: {
                    enable: true,
                    scrollAmount: 'auto',
                    axis: 'y',
                    preventDefault: true
                },
                keyboard: {
                    enable: false,
                    scrollType: 'stepless',
                    scrollAmount: 'auto'
                },
                scrollbarPosition: 'inside',
                autoDraggerLength: true,
                autoHideScrollbar: false,
                alwaysShowScrollbar: 0, // 0, 1, 2
                advanced: {
                    updateOnContentResize: true
                },
                //live: true, // could not get this to work
                callbacks: {
                    alwaysTriggerOffsets: false,    // only trigger callback.onTotalScroll() once
                    onTotalScrollOffset: 100,       // trigger callback.onTotalScroll() 100px before end
                    onInit: function(){
                        // disable page scroll -> otherwise page AND customScrollbars will scroll
                        // -> this is because the initPassiveEvents() delegates the mouseWheel events
                        togglePageScroll(false);
                    },
                    onUpdate: function(a){
                        // whenever the scroll content updates -> init lazyLoad for potential images
                        new LazyLoad({
                            container: this,
                            elements_selector: `.${config.select2ImageLazyLoadClass}`,
                            threshold: lazyLoadImagesOffset,
                            use_native: true
                        });
                    },
                    onTotalScroll: function(){
                        // we want to "trigger" Select2´s 'scroll' event
                        // in order to make its "infinite scrolling" function working
                        // -> look for "--load-more" anker (last list item)
                        //    add "no-margin" class in order to reduce offset to the list
                        let loadMoreLi = this.mcs.content.find('.select2-results__option--load-more');
                        loadMoreLi.addClass('no-margin');
                        this.mcs.content.find('> :first-child').trigger('scroll');
                        setTimeout(() => loadMoreLi.removeClass('no-margin'), 20);
                    }
                }
            });
        };

        let getResultsWrapper = (selectElement) => {
            let wrapper = null;
            if($(selectElement).data('select2')){
                let resultsOptions = $(selectElement).data('select2').$results;
                if(resultsOptions.length){
                    let resultsWrapper = resultsOptions.closest('.select2-results');
                    if(resultsWrapper.length){
                        wrapper = resultsWrapper;
                    }
                }
            }
            return wrapper;
        };

        // global opened event
        $(document).on('select2:open', '.' + config.select2Class, function(e){
            let resultsWrapper = getResultsWrapper(this);
            if(resultsWrapper){
                initScrollbar(resultsWrapper);
            }
        });

        // global select2:closing event
        $(document).on('select2:closing', '.' + config.select2Class, function(e){
            let resultsWrapper = getResultsWrapper(this);
            if(resultsWrapper){
                resultsWrapper.mCustomScrollbar('destroy');
            }

            // select2 sets :focus to the select2 <input> field. This is bad!
            // we want to keep the focus where it is (e.g. signature table cell)
            // the only way to prevent this is to remove the element
            // https://stackoverflow.com/questions/17995057/prevent-select2-from-autmatically-focussing-its-search-input-when-dropdown-is-op
            $(this).parents('.editableform').find(this).next().find('.select2-selection').remove();

            // re-enable page scroll -> might be disabled before by mCustomScrollbar onInit() event
            // -> in case there is a custom <select> with scrollable options
            togglePageScroll(true);
        });
    };

    /**
     * set default configuration for "xEditable" plugin
     */
    let initDefaultEditableConfig = containerEl => {
        $.fn.editable.defaults.container = containerEl;

        // use fontAwesome buttons template
        $.fn.editableform.buttons =
            '<div class="btn-group">'+
            '<button type="button" class="btn btn-default btn-sm editable-cancel">'+
            '<i class="fa fa-fw fa-times"></i>'+
            '</button>' +
            '<button type="submit" class="btn btn-success btn-sm editable-submit">'+
            '<i class="fa fa-fw fa-check"></i>'+
            '</button>'+
            '</div>';

        // loading spinner template
        $.fn.editableform.loading =
            '<div class="editableform-loading"><i class="fas fa-lg fa-sync fa-spin"></i></div>';
    };

    /**
     * prevent page from scrolling
     * @param enable
     */
    let togglePageScroll = (enable = true) => {
        $('html').toggleClass(config.noScrollClass, !enable);
    };

    /**
     * request a captcha image
     * @param reason
     * @param callback
     */
    let getCaptchaImage = (reason, callback) => {
        $.ajax({
            type: 'POST',
            url: Init.path.getCaptcha,
            data: {
                reason: reason
            },
            dataType: 'json'
        }).done(function(responseData){
            if(responseData.error.length > 0){
                showNotify({title: 'getCaptchaImage', text: 'Captcha image generation failed', type: 'error'});
            }else{
                callback(responseData.img);
            }
        }).fail(function(jqXHR, status, error){
            let reason = status + ' ' + error;
            showNotify({title: jqXHR.status + ': getCaptchaImage', text: reason, type: 'error'});
        });
    };

    /**
     * get the current main trigger delay for the main trigger functions
     * optional in/decrease the delay
     * @param updateKey
     * @param value
     * @returns {*}
     */
    let getCurrentTriggerDelay = (updateKey, value ) => {

        // make sure the delay timer is valid!
        // if this is called for the first time -> set CURRENT_DELAY
        if(
            Init.timer[updateKey].CURRENT_DELAY === undefined ||
            Init.timer[updateKey].CURRENT_DELAY <= 0
        ){
            Init.timer[updateKey].CURRENT_DELAY = Init.timer[updateKey].DELAY;
        }

        // in/decrease the trigger delay
        if(
            value === parseInt(value, 10)  &&
            ( Init.timer[updateKey].CURRENT_DELAY ) + value > 0
        ){
            Init.timer[updateKey].CURRENT_DELAY += value;
        }

        return Init.timer[updateKey].CURRENT_DELAY;
    };

    /**
     * get a random string
     * -> e.g. as for Ids
     * @param prefix
     * @returns {string}
     */
    let getRandomString = (prefix = 'id_') => prefix + Math.random().toString(36).substring(2,10);

    /**
     * get date obj with current EVE Server Time.
     * @returns {Date}
     */
    let getServerTime = () => {
        // Server is running with GMT/UTC (EVE Time)
        let localDate = new Date();

        return new Date(
            localDate.getUTCFullYear(),
            localDate.getUTCMonth(),
            localDate.getUTCDate(),
            localDate.getUTCHours(),
            localDate.getUTCMinutes(),
            localDate.getUTCSeconds()
        );
    };

    /**
     * convert timestamp to server time
     * @param timestamp
     * @returns {Date}
     */
    let convertTimestampToServerTime = timestamp => {
        let currentTimeZoneOffsetInMinutes = new Date().getTimezoneOffset();
        return new Date( (timestamp + (currentTimeZoneOffsetInMinutes * 60)) * 1000);
    };

    /**
     * get date difference as time parts (days, hours, minutes, seconds)
     * @param date1
     * @param date2
     * @returns {{}}
     */
    let getTimeDiffParts = (date1, date2) => {
        let parts = {};
        let time1 = date1.getTime();
        let time2 = date2.getTime();
        let diff  = (time1 >= 0 && time2 >= 0) ? (time2 - time1) / 1000 : 0;
        diff = Math.abs(Math.floor(diff));

        parts.days = Math.floor(diff/(24*60*60));
        let leftSec = diff - parts.days * 24*60*60;

        parts.hours = Math.floor(leftSec/(60*60));
        leftSec = leftSec - parts.hours * 60*60;

        parts.min = Math.floor(leftSec/(60));
        parts.sec = leftSec - parts.min * 60;
        return parts;
    };

    /**
     * format json object with "time parts" into string
     * @param parts
     * @returns {string}
     */
    let formatTimeParts = parts => {
        let label = '';
        if(parts.days){
            label += parts.days + 'd ';
        }
        label += ('00' + parts.hours).slice(-2);
        label += ':' + ('00' + parts.min).slice(-2);
        return label;
    };

    /**
     * start time measurement by a unique string identifier
     * @param timerName
     */
    let timeStart = timerName => {
        if(typeof performance === 'object'){
            stopTimerCache[timerName] = performance.now();
        }else{
            stopTimerCache[timerName] = new Date().getTime();
        }
    };

    /**
     * get time delta between timeStart() and timeStop() by a unique string identifier
     * @param timerName
     * @returns {number}
     */
    let timeStop = timerName => {
        let duration = 0;

        if( stopTimerCache.hasOwnProperty(timerName) ){
            // check browser support for performance API
            let timeNow = 0;

            if(typeof performance === 'object'){
                timeNow = performance.now();
            }else{
                timeNow = new Date();
            }

            // format ms time duration
            duration = Number( (timeNow - stopTimerCache[timerName] ).toFixed(2) );

            // delete key
            delete( stopTimerCache[timerName]);
        }

        return duration;
    };

    /**
     * update a character counter field with current value length - maxCharLength
     * @param field
     * @param charCounterElement
     * @param maxCharLength
     */
    let updateCounter = (field, charCounterElement, maxCharLength) => {
        if(field.length){
            let value = field.val();
            let inputLength = value.length;

            // line breaks are 2 characters!
            let newLines = value.match(/(\r\n|\n|\r)/g);
            let addition = 0;
            if(newLines != null){
                addition = newLines.length;
            }
            inputLength += addition;

            charCounterElement.text(maxCharLength - inputLength);

            if(maxCharLength <= inputLength){
                charCounterElement.toggleClass('txt-color-red', true);
            }else{
                charCounterElement.toggleClass('txt-color-red', false);
            }
        }
    };

    /**
     * trigger main logging event with log information
     * @param logKey
     * @param options
     */
    let log = (logKey, options) => {
        $(window).trigger('pf:log', [logKey, options]);
    };

    /**
     * trigger a notification (on screen or desktop)
     * @param config
     * @param options
     */
    let showNotify = (config = {}, options = {}) => {
        requirejs(['pnotify.loader'], Notification => {
            // if notification is a "desktio" notification -> blink browser tab
            if(options.desktop && config.title){
                options.desktop = {
                    icon: `${imgRoot()}misc/notification.png`
                };
                startTabBlink(config.title);
            }

            Notification.showNotify(config, options);
        });
    };

    /**
     * change document.title and make the browsers tab blink
     * @param blinkTitle
     */
    let startTabBlink = blinkTitle => {
        let initBlink = (function(){
            // count blinks if tab is currently active
            let activeTabBlinkCount = 0;

            let blink = (blinkTitle) => {
                // number of "blinks" should be limited if tab is currently active
                if(window.isVisible){
                    activeTabBlinkCount++;
                }

                // toggle page title
                document.title = (document.title === blinkTitle) ? initialPageTitle : blinkTitle;

                if(activeTabBlinkCount > 10){
                    stopTabBlink();
                }
            };

            return () => {
                if(!blinkTimer){
                    blinkTimer = setInterval(blink, 1000, blinkTitle);
                }
            };
        }(blinkTitle));

        initBlink();
    };

    /**
     * stop browser tab title "blinking"
     */
    let stopTabBlink = () => {
        if(blinkTimer){
            clearInterval(blinkTimer);
            document.title = initialPageTitle;
            blinkTimer = null;
        }
    };

    /**
     * get log entry info
     * @param logType
     * @param option
     * @returns {string}
     */
    let getLogInfo = (logType, option) => {
        let logInfo = '';

        if(Init.classes.logTypes.hasOwnProperty(logType)){
            logInfo = Init.classes.logTypes[logType][option];
        }

        return logInfo;
    };

    /**
     * set currentUserData as "global" store var
     * this function should be called whenever userData changed
     * @param userData
     * @returns {boolean} true on success
     */
    let setCurrentUserData = userData => {
        let isSet = false;

        // check if userData is valid
        if(userData && userData.character && userData.characters){
            // check new vs. old userData for changes
            let changes = compareUserData(getCurrentUserData(), userData);

            Init.currentUserData = userData;
            isSet = true;

            // check if there is any change
            if(Object.values(changes).some(val => val)){
                $(document).trigger('pf:changedUserData', [changes]);
            }
        }else{
            console.error('Could not set userData %o. Missing or malformed obj', userData);
        }

        return isSet;
    };

    /**
     * get currentUserData from "global" var
     * @returns {*}
     */
    let getCurrentUserData = () => {
        return Init.currentUserData;
    };

    /**
     * get currentCharacterData
     * @see getCurrentUserData
     * @returns {*|boolean}
     */
    let getCurrentCharacter = () => getObjVal(getCurrentUserData(), 'character') || false;

    /**
     * get data from currentCharacterData (e.g. id)
     * @see getCurrentCharacter
     * @param key
     * @returns {*|boolean}
     */
    let getCurrentCharacterData = key => getObjVal(getCurrentCharacter(), key) || false;

    /**
     * get either active characterID or characterId from initial page load
     * @returns {number}
     */
    let getCurrentCharacterId = () => {
        let currentCharacterId = parseInt(getCurrentCharacterData('id')) || 0;
        if(!currentCharacterId){
            // no active character... -> get default characterId from initial page load
            currentCharacterId = parseInt(document.body.getAttribute('data-character-id'));
        }
        return currentCharacterId;
    };

    /**
     * get information for the current mail user
     * @param option
     * @returns {boolean}
     */
    let getCurrentUserInfo = option => {
        let currentUserData = getCurrentUserData();
        let userInfo = false;

        if(currentUserData){
            // user data is set -> user data will be set AFTER the main init request!
            let characterData = currentUserData.character;
            if(characterData){
                if(option === 'privateId'){
                    userInfo = characterData.id;
                }

                if(option === 'allianceId' && characterData.alliance){
                    userInfo = characterData.alliance.id;
                }

                if(option === 'corporationId' && characterData.corporation){
                    userInfo = characterData.corporation.id;
                }
            }
        }

        return userInfo;
    };

    /**
     * compares two userData objects for changes that are relevant
     * @param oldUserData
     * @param newUserData
     * @returns {{characterShipType: *, charactersIds: boolean, characterLogLocation: *, characterSystemId: *, userId: *, characterId: *}}
     */
    let compareUserData = (oldUserData, newUserData) => {
        let valueChanged = key => getObjVal(oldUserData, key) !== getObjVal(newUserData, key);

        let oldCharactersIds = (getObjVal(oldUserData, 'characters') || []).map(data => data.id).sort();
        let newCharactersIds = (getObjVal(newUserData, 'characters') || []).map(data => data.id).sort();

        let oldHistoryLogStamps = (getObjVal(oldUserData, 'character.logHistory') || []).map(data => data.stamp).sort();
        let newHistoryLogStamps = (getObjVal(newUserData, 'character.logHistory') || []).map(data => data.stamp).sort();

        return {
            userId: valueChanged('id'),
            characterId: valueChanged('character.id'),
            characterLogLocation: valueChanged('character.logLocation'),
            characterSystemId: valueChanged('character.log.system.id'),
            characterShipType: valueChanged('character.log.ship.typeId'),
            characterStationId: valueChanged('character.log.station.id'),
            characterStructureId: valueChanged('character.log.structure.id'),
            charactersIds: oldCharactersIds.toString() !== newCharactersIds.toString(),
            characterLogHistory: oldHistoryLogStamps.toString() !== newHistoryLogStamps.toString()
        };
    };

    /**
     * checks if currentCharacter has a role that matches a specific right
     * @param right
     * @param objKey
     * @returns {boolean}
     */
    let hasRight = (right, objKey) => {
        let hasRight = false;
        let objectRights = getCurrentCharacterData(`${objKey}.rights`) || [];
        let objectRight = objectRights.find(objectRight => objectRight.right.name === right);
        if(objectRight){
            let characterRole = getCurrentCharacterData('role');
            if(
                characterRole.name === 'SUPER' ||
                objectRight.role.name === 'MEMBER' ||
                objectRight.role.name === characterRole.name
            ){
                hasRight = true;
            }
        }
        return hasRight;
    };

    /**
     * get a unique ID for each tab
     * -> store ID in session storage
     */
    let getBrowserTabId = () => {
        let key = 'tabId';
        let tabId = sessionStorage.getItem(key);
        if(tabId === null){
            tabId = getRandomString();
            sessionStorage.setItem(key, tabId);
        }
        return tabId;
    };

    /**
     * show information panel to active users (on bottom)
     * @param show
     */
    let toggleGlobalInfoPanel = (show = true) => {
        let infoPanel = $('#' + config.globalInfoPanelId);
        if( show && !infoPanel.length){
            // info panel not already shown
            requirejs(['text!templates/ui/info_panel.html', 'mustache'], (template, Mustache) => {
                let data = {
                    id: config.globalInfoPanelId
                };
                let content = $(Mustache.render(template, data));
                $('#' + config.footerId).find('.' + config.footerCenterClass).append(content);
            });
        }else if (!show && infoPanel.length){
            infoPanel.remove();
        }
    };

    /**
     * set default jQuery AJAX configuration
     */
    let ajaxSetup = () => {
        $.ajaxSetup({
            beforeSend: function(jqXHR, settings){
                // store request URL for later use (e.g. in error messages)
                jqXHR.url = location.protocol + '//' + location.host + settings.url;

                // Add custom application headers on "same origin" requests only!
                // -> Otherwise a "preflight" request is made, which will "probably" fail
                if(settings.crossDomain === false){
                    // add current character data to ANY XHR request (HTTP HEADER)
                    // -> This helps to identify multiple characters on multiple browser tabs
                    jqXHR.setRequestHeader('pf-character', getCurrentCharacterId());
                }
            },
            complete: function(jqXHR, textStatus){
                // show "maintenance information panel -> if scheduled
                let isMaintenance = parseInt(jqXHR.getResponseHeader('pf-maintenance')) || 0;
                toggleGlobalInfoPanel(isMaintenance);
            }
        });
    };

    /**
     * Request data from Server
     * -> This function should be used (in future) for all Ajax and REST API calls
     * -> works as a "wrapper" for jQueries ajax() method
     * @param {String} action
     * @param {String} entity
     * @param ids
     * @param data
     * @param context
     * @param always
     * @returns {Promise<any>}
     */
    let request = (action, entity, ids = [], data = {}, context = {}, always = null) => {

        let requestExecutor = (resolve, reject) => {
            let payload = {
                action: 'request',
                name: action.toLowerCase() + entity.capitalize()
            };

            // build request url --------------------------------------------------------------------------------------
            let url = Init.path.api + '/' + entity;

            let path = '';
            if(isNaN(ids)){
                if(Array.isArray(ids)){
                    path += '/' + ids.join(',');
                }
            }else{
                let id = parseInt(ids, 10);
                path += id ? '/' + id : '';
            }
            url += path;

            let ajaxOptions = {
                type: action,
                url: url,
                dataType: 'json',   // expected response dataType
                context: context
            };

            if(action === 'GET'){
                // data as url params
                ajaxOptions.data = data;
            }else{
                // json data in body
                ajaxOptions.data = JSON.stringify(data);
                ajaxOptions.contentType = 'application/json; charset=utf-8';
            }

            $.ajax(ajaxOptions).done(function(response){
                payload.data = response;
                payload.context = this;
                resolve(payload);
            }).fail(function(jqXHR, status, error){
                payload.data = {
                    jqXHR: jqXHR,
                    status: status,
                    error: error
                };
                payload.context = this;
                reject(payload);
            }).always(function(){
                if(always){
                    always(this);
                }
            });
        };

        return new Promise(requestExecutor);
    };

    /**
     * global ajax error handler -> handles .fail() requests
     * @param payload
     */
    let handleAjaxErrorResponse = payload => {
        // handle only request errors
        if(payload.action !== 'request'){
            console.error('Unhandled HTTP response error. Invalid payload %o', payload);
            return;
        }

        let jqXHR = payload.data.jqXHR;
        let title = `${jqXHR.status}: ${jqXHR.statusText} - ${payload.name}`;
        let reason = '';

        if(jqXHR.responseJSON){
            // ... valid JSON response
            let response = jqXHR.responseJSON;

            if(response.error && response.error.length > 0){
                // build error notification reason from errors
                reason = response.error.map(error => error.text || error.status).join('\n');

                // check if errors might belong to a HTML form -> check "context"
                if(payload.context.formElement){
                    // show form messages e.g. validation errors
                    payload.context.formElement.showFormMessage(response.error);
                }
            }
        }else{
            reason = 'Invalid JSON response';
        }

        showNotify({title: title, text: reason, type: 'error'});
    };

    /**
     * get WebSocket readyState description from ID
     * https://developer.mozilla.org/de/docs/Web/API/WebSocket
     * @param readyState
     * @returns {string}
     */
    let getWebSocketDescriptionByReadyState = (readyState) => {
        let description = '';

        switch(readyState){
            case 0: description = 'connecting'; break;
            case 1: description = 'open'; break;
            case 2: description = 'closing'; break;
            case 3: description = 'closed'; break;
        }

        return description;
    };

    /**
     * set sync status for map updates
     * -> if SharedWorker AND WebSocket connected -> status = "WebSocket"
     * -> else -> status = "ajax" (long polling)
     * @param type
     * @param options
     */
    let setSyncStatus = (type, options) => {
        // current syncStatus
        let syncStatus = Init.syncStatus;

        switch(type){
            case 'ws:open':
                // WebSocket open
                syncStatus.webSocket.status = getWebSocketDescriptionByReadyState(options.readyState);
                syncStatus.webSocket.class = 'txt-color-success';
                syncStatus.webSocket.timestamp = new Date().getTime() / 1000;

                syncStatus.type = 'webSocket';
                setSyncStatus('ajax:disable');

                $(window).trigger('pf:syncStatus');
                break;
            case 'ws:get':
                // WebSocket data pushed from server
                syncStatus.webSocket.timestamp = new Date().getTime() / 1000;
                $(window).trigger('pf:syncStatus');
                break;
            case 'ws:closed':
                // WebSocket closed
                syncStatus.webSocket.status = getWebSocketDescriptionByReadyState(options.readyState);
                syncStatus.webSocket.class = 'txt-color-danger';
                syncStatus.webSocket.timestamp = undefined;

                setSyncStatus('ajax:enable');
                break;
            case 'ws:error':
                // WebSocket error
                syncStatus.webSocket.status = getWebSocketDescriptionByReadyState(options.readyState);
                syncStatus.webSocket.class = 'txt-color-danger';

                setSyncStatus('ajax:enable');
                break;
            case 'sw:init':
                // SharedWorker initialized
                syncStatus.sharedWorker.status = 'online';
                syncStatus.sharedWorker.class = 'txt-color-success';
                break;
            case 'sw:error':
                // SharedWorker error
                syncStatus.sharedWorker.status = 'offline';
                syncStatus.sharedWorker.class = 'txt-color-danger';

                setSyncStatus('ajax:enable');
                break;
            case 'ajax:enable':
                // Ajax enabled (WebSocket error/not connected)
                syncStatus.ajax.status = 'enabled';
                syncStatus.ajax.class = 'txt-color-success';
                syncStatus.ajax.timestamp = new Date().getTime() / 1000;

                syncStatus.type = 'ajax';
                $(window).trigger('pf:syncStatus');
                break;
            case 'ajax:get':
                // Ajax data pulled from client
                syncStatus.ajax.timestamp = new Date().getTime() / 1000;
                $(window).trigger('pf:syncStatus');
                break;
            case 'ajax:disable':
                // Ajax disabled (WebSocket open/ready)
                syncStatus.ajax.status = 'disabled';
                syncStatus.ajax.class = 'txt-color-warning';
                break;
        }
    };

    /**
     * get current sync type for map updates
     * -> "ajax" or "webSocket"
     * @returns {string}
     */
    let getSyncType = () => {
        return Init.syncStatus.type;
    };

    /**
     * Returns true if the user hit Esc or navigated away from the
     * current page before an AJAX call was done. (The response
     * headers will be null or empty, depending on the browser.)
     *
     * NOTE: this function is only meaningful when called from
     * inside an AJAX "error" callback!
     * @param jqXHR XMLHttpRequest instance
     * @returns {boolean}
     */
    let isXHRAborted = jqXHR => {
        return !jqXHR.getAllResponseHeaders();
    };

    /**
     * trigger global menu action 'event' on dom 'element' with optional 'data'
     * @param element
     * @param action
     * @param data
     */
    let triggerMenuAction = (element, action, data) => {
        if(element){
            if(typeof(action) === 'string' && action.length){
                $(element).trigger('pf:menuAction', [action, data]);
            }else{
                console.error('Invalid action: %o', action);
            }
        }else{
            console.error('Invalid element: %o', element);
        }
    };

    /**
     * get label element for role data
     * @param role
     * @returns {*|jQuery|HTMLElement}
     */
    let getLabelByRole = role => {
        return $('<span>', {
            class: ['label', 'label-' + role.style].join(' '),
            text: role.label
        });
    };

    /**
     * get the map module object or create a new module
     * @returns {*|HTMLElement}
     */
    let getMapModule = () => {
        let mapModule = $('#' + config.mapModuleId);
        if(mapModule.length === 0){
            mapModule = $('<div>', {
                id: config.mapModuleId
            });
        }

        return mapModule;
    };

    /**
     * get all map tab link elements (<a> tags)
     * or search for a specific tabElement within mapModule
     * @param mapModule
     * @param mapId
     * @returns {NodeListOf<HTMLElementTagNameMap[string]>}
     */
    let getMapTabLinkElements = (mapModule, mapId) => {
        let selector = `.${config.mapTabBarClass}  > li > a`;
        if(mapId){
            selector += `[data-map-id="${mapId}"]`;
        }

        return mapModule.querySelectorAll(selector);
    };

    /**
     * get clas for tab content areas (drapable sections)
     * @param alias
     * @returns {string}
     */
    let getMapTabContentAreaClass = alias => [
        config.mapTabContentAreaClass,
        config.mapTabContentAreaAliases.includes(alias) ? alias : undefined
    ].filter(Boolean).join('-');

    /**
     *
     * @param ariaId
     * @returns {number}
     */
    let getSystemEffectMultiplierByAreaId = ariaId => SystemEffect.getMultiplierByAreaId(ariaId);

    /**
     * get areaId by security string
     * areaId is required as a key for signature names
     * if areaId is 0, no signature data is available for this system
     * @param security
     * @returns {number}
     */
    let getAreaIdBySecurity = security => {
        let areaId = 0;
        switch(security){
            case 'H':
                areaId = 30;
                break;
            case 'L':
                areaId = 31;
                break;
            case '0.0':
                areaId = 32;
                break;
            case 'T':
                areaId = 33;
                break;
            default:
                // w-space
                for(let i = 1; i <= 18; i++){
                    if(security === 'C' + i){
                        areaId = i;
                        break;
                    }
                }
                break;
        }

        return areaId;
    };

    /**
     * get system effect data by system security and system class
     * if no search parameters given -> get all effect data
     * @param security
     * @param effect
     * @returns {boolean}
     */
    let getSystemEffectData = (security, effect) => {
        let data =  SystemEffect;
        if(security){
            // look for specific data
            data = false;
            let areaId = getAreaIdBySecurity(security);

            if(
                areaId > 0 &&
                SystemEffect.wh[effect] &&
                SystemEffect.wh[effect][areaId]
            ){
                data = SystemEffect.wh[effect][areaId];
            }
        }

        return data;
    };

    /**
     * get status info for a character for a given status
     * @param characterData
     * @param option
     * @returns {string}
     */
    let getStatusInfoForCharacter = (characterData, option) => {
        let statusInfo = '';

        // character status can not be checked if there are no reference data
        // e.g. during registration process (login page)
        if(Init.characterStatus){
            // get info for current "main" character
            let corporationId = getCurrentUserInfo('corporationId');
            let allianceId = getCurrentUserInfo('allianceId');

            // get all user characters
            let userData = getCurrentUserData();

            if(userData){
                // check if character is one of his own characters
                let userCharactersData = userData.characters;

                for(let i = 0; i < userCharactersData.length; i++){
                    if(userCharactersData[i].id === characterData.id){
                        statusInfo = Init.characterStatus.own[option];
                        break;
                    }
                }
            }

            if(statusInfo === ''){
                // compare current user data with given user data
                if(
                    characterData.corporation &&
                    characterData.corporation.id === corporationId
                ){
                    statusInfo = Init.characterStatus.corporation[option];
                }else if(
                    characterData.alliance &&
                    characterData.alliance.id === allianceId
                ){
                    statusInfo = Init.characterStatus.alliance[option];
                }
            }
        }

        return statusInfo;
    };

    /**
     * get planet info e.g. class by type e.g. "barren"
     * @param type
     * @param option
     * @returns {string}
     */
    let getPlanetInfo = (type, option = 'class') => {
        let info = '';
        if( Init.classes.planets.hasOwnProperty(type) ){
            info = Init.classes.planets[type][option];
        }
        return info;
    };

    /**
     * get a HTML table with system effect information
     * e.g. for popover
     * @param effects
     * @returns {string}
     */
    let getSystemEffectTable = effects => {
        let table = '';
        if(effects.length > 0){
            table += '<table>';
            for(let effect of effects){
                table += '<tr>';
                table += '<td>';
                table += effect.effect;
                table += '</td>';
                table += '<td class="text-right">';
                table += effect.value;
                table += '</td>';
                table += '</tr>';
            }
            table += '</table>';
        }

        return table;
    };

    /**
     * get a HTML table with planet names
     * e.g. for popover
     * @param planets
     * @returns {string}
     */
    let getSystemPlanetsTable = planets => {
        if(!planets) return '<table></table>'
        let table = '';
        if(planets.length > 0){
            let regex = /\(([^)]+)\)/;
            table += '<table>';
            for(let planet of planets){
                let typeName = planet.type.name;
                let typeClass = '';
                let matches = regex.exec(typeName.toLowerCase());
                if(matches && matches[1]){
                    typeName = matches[1].capitalize();
                    typeClass = getPlanetInfo(matches[1]);
                }

                table += '<tr>';
                table += '<td>';
                table += planet.name;
                table += '</td>';
                table += '<td class="' + typeClass + '">';
                table += '<i class="fas fa-circle"></i>';
                table += '</td>';
                table += '<td class="text-right">';
                table += typeName;
                table += '</td>';
                table += '</tr>';
            }
            table += '</table>';
        }

        return table;
    };

    /**
     * get a HTML table with universe sovereignty data
     * e.g. for popover
     * @param sovereignty
     * @returns {string}
     */
    let getSystemSovereigntyTable = sovereignty => {
        let data = [];
        if(sovereignty){
            if(sovereignty.faction){
                data.push({label: 'Faction', value: sovereignty.faction.name});
            }
            if(sovereignty.alliance){
                data.push({label: 'Alliance', value: sovereignty.alliance.name});
            }
        }

        let table = '<table>';
        for(let rowData of data){
            table += '<tr>';
            table += '<td>';
            table += rowData.label;
            table += '</td>';
            table += '<td class="text-right">';
            table += rowData.value;
            table += '</td>';
            table += '</tr>';
        }
        table += '</table>';

        return table;
    };

    /**
     * get a HTML table with pilots/ship names
     * @param users
     * @returns {string}
     */
    let getSystemPilotsTable = users => {
        let table = '';
        if(users.length > 0){
            let getRow = (statusClass, userName, shipName, shipTypeName, mass) => {
                let row = '<tr>';
                row += '<td class="text-right">';
                row += '<small>';
                row +=  statusClass !== null ? '<i class="fas fa-circle ' + config.userStatusClass + ' ' + statusClass + '">' : '';
                row += '</small>';
                row += '</td>';
                row += '<td>';
                row += userName;
                row += '</td>';
                row += '<td>';
                row += unicodeToString(shipName);
                row += '</td>';
                row += '<td class="text-right txt-color txt-color-orangeLight">';
                row += shipTypeName;
                row += '</td>';
                row += '<td class="text-right">';
                row += mass;
                row += '</td>';
                row += '</tr>';
                return row;
            };

            let massAll = 0;
            table += '<table>';
            for(let user of users){
                massAll += parseInt(user.log.ship.mass);
                let statusClass = getStatusInfoForCharacter(user, 'class');
                let mass = formatMassValue(user.log.ship.mass);
                table += getRow(statusClass, user.name, user.log.ship.name, user.log.ship.typeName, mass);
            }
            table += getRow(null, '', '', '', formatMassValue(massAll));
            table += '</table>';
        }

        return table;
    };

    /**
     * get a HTML table with information for multiple systems
     * e.g. for popover
     * @param data
     * @returns {string}
     */
    let getSystemsInfoTable = data => {
        let table = '';

        if(data.length > 0){

            table += '<table>';
            for(let i = 0; i < data.length; i++){

                let trueSecClass = getTrueSecClassForSystem( data[i].trueSec );
                let securityClass = getSecurityClassForSystem( data[i].security );

                table += '<tr>';
                table += '<td>';
                table += data[i].name;
                table += '</td>';
                table += '<td class="text-right ' + securityClass + '">';
                table += data[i].security;
                table += '</td>';
                table += '<td class="text-right ' + trueSecClass + '">';
                table += parseFloat( data[i].trueSec ).toFixed(1);
                table += '</td>';
                table += '</tr>';
            }
            table += '</table>';
        }

        return table;
    };

    /**
     * get a css class for the security level of a system
     * @param sec
     * @returns {string}
     */
    let getSecurityClassForSystem = sec => {
        let secClass = '';
        if(sec === 'C13'){
            sec = 'SH';
        }
        if( Init.classes.systemSecurity.hasOwnProperty(sec) ){
            secClass = Init.classes.systemSecurity[sec]['class'];
        }
        return secClass;
    };

    /**
     * get a css class for the trueSec level of a system
     * @param trueSec
     * @returns {string}
     */
    let getTrueSecClassForSystem = (trueSec) => {
        let trueSecClass = '';

        trueSec = parseFloat(trueSec);

        // check for valid decimal number
        if(
            !isNaN( trueSec ) &&
            isFinite( trueSec )
        ){
            if(trueSec < 0){
                trueSec = 0;
            }

            trueSec = trueSec.toFixed(1).toString();

            if( Init.classes.trueSec.hasOwnProperty(trueSec) ){
                trueSecClass = Init.classes.trueSec[trueSec]['class'];
            }
        }

        return trueSecClass;
    };

    /**
     * get status info
     * @param status
     * @param option
     * @returns {string}
     */
    let getStatusInfoForSystem = (status, option) => {
        let statusInfo = '';

        if( Init.systemStatus.hasOwnProperty(status) ){
            // search by status string
            statusInfo = Init.systemStatus[status][option];
        }else{
            // saarch by statusID
            $.each(Init.systemStatus, function(prop, data){

                if(status === data.id){
                    statusInfo = data[option];
                    return;
                }
            });
        }

        return statusInfo;
    };

    /**
     * get signature group information
     * @param option
     * @returns {Array}
     */
    let getSignatureGroupOptions = option => {
        let options = [];
        for(let [key, data] of Object.entries(Init.signatureGroups)){
            options.push({
                value: parseInt(key),
                text: data[option]
            });
        }
        return options;
    };

    /**
     * get signature 'type' options for a systemTypeId
     * -> areaIds is array! This is used for "Shattered WHs" where e.g.:
     *    Combat/Relic/.. sites from multiple areaIds (C1, C2, C3) can spawn in a C2,...
     * @param systemTypeId  1 == w-space; 2 == k-space; 3 == a-space
     * @param areaIds       1 == c1; 2 == c2; 12 == Thera; 13 == Shattered Frig;...
     * @param sigGroupId    1 == Combat; 2 == Relic; 3 == Data; ...
     * @returns {{}}
     */
    let getSignatureTypeNames = (systemTypeId, areaIds, sigGroupId) => {
        return objCombine(...areaIds.map(areaId => getObjVal(SignatureType, [systemTypeId, areaId, sigGroupId].join('.')) || {}));
    };

    /**
     * get array key that points to map data catching mapId
     * @param data
     * @param mapId
     * @returns {boolean}
     */
    let getDataIndexByMapId = (data, mapId) => {
        let index = false;
        if(Array.isArray(data) && mapId === parseInt(mapId, 10)){
            for(let i = 0; i < data.length; i++){
                if(data[i].config.id === mapId){
                    index = i;
                    break;
                }
            }
        }
        return index;
    };

    // CurrentMapUserData =============================================================================================

    /**
     * set currentMapUserData as "global" variable (count of active pilots)
     * this function should be called continuously after data change
     * to keep the data always up2data
     * @param mapUserData
     */
    let setCurrentMapUserData = mapUserData => {
        Init.currentMapUserData = mapUserData;
        return getCurrentMapUserData();
    };

    /**
     * get currentMapUserData from "global" variable for specific map or all maps
     * @param mapId
     * @returns {boolean}
     */
    let getCurrentMapUserData = mapId => {
        let currentMapUserData = false;

        if(Init.currentMapUserData){
            if(mapId === parseInt(mapId, 10)){

                // search for a specific map
                for(let i = 0; i < Init.currentMapUserData.length; i++){
                    if(
                        Init.currentMapUserData[i].config &&
                        Init.currentMapUserData[i].config.id === mapId
                    ){
                        currentMapUserData = Init.currentMapUserData[i];
                        break;
                    }
                }
            }else{
                // get data for all maps
                currentMapUserData = Init.currentMapUserData;
            }
        }

        if(currentMapUserData !== false){
            // return a fresh (deep) copy of that, in case of further modifications
            currentMapUserData = $.extend(true, {}, currentMapUserData);
        }

        return currentMapUserData;
    };

    /**
     * get mapDataUser array index by mapId
     * @param mapId
     * @returns {boolean|int}
     */
    let getCurrentMapUserDataIndex = mapId => getDataIndexByMapId(Init.currentMapUserData, mapId);

    /**
     * update cached mapUserData for a single map
     * @param mapUserData
     */
    let updateCurrentMapUserData = mapUserData => {
        let mapUserDataIndex = getCurrentMapUserDataIndex( mapUserData.config.id );

        if( !Array.isArray(Init.currentMapUserData) ){
            Init.currentMapUserData = [];
        }

        if(mapUserDataIndex !== false){
            Init.currentMapUserData[mapUserDataIndex] = mapUserData;
        }else{
            // new map data
            Init.currentMapUserData.push(mapUserData);
        }
    };

    // CurrentMapData =================================================================================================

    /**
     * set currentMapData as "global" variable
     * this function should be called continuously after data change
     * to keep the data always up2data
     * @param mapData
     */
    let setCurrentMapData = mapData => {
        Init.currentMapData = mapData;

        return getCurrentMapData();
    };

    /**
     * get currentMapData from "global" variable for a specific map or all maps
     * @param mapId
     * @returns {boolean}
     */
    let getCurrentMapData = mapId => {
        let currentMapData = false;

        if(Init.currentMapData){
            if(mapId === parseInt(mapId, 10)){
                currentMapData = Init.currentMapData.find(mapData => mapData.config.id === mapId);
            }else{
                // get data for all maps
                currentMapData = Init.currentMapData;
            }
        }

        return currentMapData;
    };

    /**
     * get mapData array index by mapId
     * @param mapId
     * @returns {boolean|int}
     */
    let getCurrentMapDataIndex = mapId => {
        return getDataIndexByMapId(Init.currentMapData, mapId);
    };

    /**
     * update cached mapData for a single map
     * @param mapData
     */
    let updateCurrentMapData = mapData => {
        let mapDataIndex = getCurrentMapDataIndex(mapData.config.id);

        if(mapDataIndex !== false){
            Init.currentMapData[mapDataIndex].config = mapData.config;
            Init.currentMapData[mapDataIndex].data = mapData.data;
        }else{
            // new map data
            Init.currentMapData.push(mapData);
        }
    };

    /**
     * @param path
     * @param value
     * @returns {boolean}
     */
    let filterCurrentMapData = (path, value) => {
        let currentMapData = getCurrentMapData();
        if(currentMapData){
            currentMapData = currentMapData.filter(mapData => {
                return getObjVal(mapData, path) === value;
            });
        }
        return currentMapData;
    };

    /**
     * delete map data by mapId from currentMapData
     * @param mapId
     */
    let deleteCurrentMapData = mapId => {
        Init.currentMapData = Init.currentMapData.filter(mapData => mapData.config.id !== mapId);
    };

    /**
     * get "nearBy" systemData based on a jump radius around a currentSystem
     * @param currentSystemData
     * @param currentMapData
     * @param jumps
     * @param foundSystemIds
     * @returns {{systemData: *, tree: {}}}
     */
    let getNearBySystemData = (currentSystemData, currentMapData, jumps, foundSystemIds = {}) => {

        // look for systemData by ID
        let getSystemData = (systemId) => {
            for(let j = 0; j < currentMapData.data.systems.length; j++){
                let systemData = currentMapData.data.systems[j];
                if(systemData.id === systemId){
                    return systemData;
                }
            }
            return false;
        };

        // skip systems that are already found in recursive calls
        foundSystemIds[currentSystemData.id] = {distance: jumps};

        let nearBySystems = {
            systemData: currentSystemData,
            tree: {}
        };

        jumps--;
        if(jumps >= 0){
            for(let i = 0; i < currentMapData.data.connections.length; i++){
                let connectionData = currentMapData.data.connections[i];
                let type = ''; // "source" OR "target"
                if(connectionData.source === currentSystemData.id){
                    type = 'target';
                }else if(connectionData.target === currentSystemData.id){
                    type = 'source';
                }

                if(
                    type &&
                    (
                        foundSystemIds[connectionData[type]] === undefined ||
                        foundSystemIds[connectionData[type]].distance < jumps
                    )
                ){
                    let newSystemData = getSystemData(connectionData[type]);
                    if(newSystemData){
                        nearBySystems.tree[connectionData[type]] = getNearBySystemData(newSystemData, currentMapData, jumps, foundSystemIds);
                    }
                }
            }
        }
        return nearBySystems;
    };

    /**
     * get userData (pilots) from systemId
     * @param userData
     * @param systemId
     * @returns {*}
     */
    let getCharacterDataBySystemId = (userData, systemId) => {
        if(userData && userData.length){
            for(let i = 0; i < userData.length; i++){
                if(userData[i].id === systemId){
                    return userData[i].user;
                }
            }
        }
        return [];
    };

    /**
     * get current character data from all characters who are "nearby" the current user
     * -> see getNearBySystemData()
     * @param nearBySystems
     * @param userData
     * @param jumps
     * @param data
     * @returns {{}}
     */
    let getNearByCharacterData = (nearBySystems, userData, jumps = 0, data = {}) => {

        let filterFinalCharData = function(tmpFinalCharData){
            return this.id !== tmpFinalCharData.id;
        };

        let characterData = getCharacterDataBySystemId(userData, nearBySystems.systemData.systemId);

        if(characterData.length){
            // filter (remove) characterData for "already" added chars
            characterData = characterData.filter(function(tmpCharacterData, index, allData){
                let keepData = true;

                for(let tmpJump in data){
                    // just scan systems with > jumps than current system
                    if(tmpJump > jumps){
                        let filteredFinalData = data[tmpJump].filter(filterFinalCharData, tmpCharacterData);

                        if(filteredFinalData.length > 0){
                            data[tmpJump] = filteredFinalData;
                        }else{
                            delete data[tmpJump];
                        }
                    }else{
                        for(let k = 0; k < data[tmpJump].length; k++){
                            if(data[tmpJump][k].id === tmpCharacterData.id){
                                keepData = false;
                                break;
                            }
                        }
                    }
                }

                return keepData;
            });

            data[jumps] = data[jumps] ? data[jumps] : [];
            data[jumps] = [...data[jumps], ...characterData];
        }

        jumps++;
        for(let prop in nearBySystems.tree){
            if( nearBySystems.tree.hasOwnProperty(prop) ){
                let tmpSystemData = nearBySystems.tree[prop];
                data = getNearByCharacterData(tmpSystemData, userData, jumps, data);
            }
        }

        return data;
    };

    /**
     * set new destination for a system/station/structure
     * @param type
     * @param destType
     * @param destData
     */
    let setDestination = (type, destType, destData) => {
        let description = '';
        switch(type){
            case 'set_destination':
                description = 'Set destination';
                break;
            case 'add_first_waypoint':
                description = 'Set first waypoint';
                break;
            case 'add_last_waypoint':
                description = 'Set new waypoint';
                break;
        }

        $.ajax({
            type: 'POST',
            url: Init.path.setDestination,
            data: {
                clearOtherWaypoints: (type === 'set_destination') ? 1 : 0,
                first: (type === 'add_last_waypoint') ? 0 : 1,
                destData: [destData]
            },
            context: {
                destType: destType,
                description: description
            },
            dataType: 'json'
        }).done(function(responseData){
            if(
                responseData.destData &&
                responseData.destData.length > 0
            ){
                for(let j = 0; j < responseData.destData.length; j++){
                    showNotify({title: this.description, text: this.destType + ': ' + responseData.destData[j].name, type: 'success'});
                }
            }

            if(
                responseData.error &&
                responseData.error.length > 0
            ){
                for(let i = 0; i < responseData.error.length; i++){
                    showNotify({title: this.description + ' error', text: this.destType + ': ' + responseData.error[i].message, type: 'error'});
                }
            }

        }).fail(function(jqXHR, status, error){
            let reason = status + ' ' + error;
            showNotify({title: jqXHR.status + ': ' + this.description, text: reason, type: 'warning'});
        });
    };


    /**
     * write clipboard text
     * @param text
     * @returns {Promise<any>}
     */
    let copyToClipboard = (text) => {

        let copyToClipboardExecutor = (resolve, reject) => {
            let payload = {
                action: 'copyToClipboard',
                data: false
            };

            if(navigator.clipboard){
                // get current permission status
                navigator.permissions.query({
                    name: 'clipboard-write'
                }).then(permissionStatus => {
                    // will be 'granted', 'denied' or 'prompt'
                    if(
                        permissionStatus.state === 'granted' ||
                        permissionStatus.state === 'prompt'
                    ){
                        navigator.clipboard.writeText(text)
                            .then(() => {
                                payload.data = true;
                                resolve(payload);                        })
                            .catch(err => {
                                let errorMsg = 'Failed to write clipboard content';
                                console.error(errorMsg, err);
                                showNotify({title: 'Clipboard API', text: errorMsg, type: 'error'});
                                resolve(payload);
                            });
                    }else{
                        showNotify({title: 'Clipboard API', text: 'You denied write access', type: 'warning'});
                        resolve(payload);
                    }
                });
            }else{
                console.warn('Clipboard API not supported by your browser');
                resolve(payload);
            }
        };

        return new Promise(copyToClipboardExecutor);
    };

    /**
     * read clipboard text
     * @returns {Promise<any>}
     */
    let readFromClipboard = () => {

        let readFromClipboardExecutor = (resolve, reject) => {
            let payload = {
                action: 'readFromClipboard',
                data: false
            };

            if(navigator.clipboard){
                // get current permission status
                navigator.permissions.query({
                    name: 'clipboard-read'
                }).then(permissionStatus => {
                    // will be 'granted', 'denied' or 'prompt'
                    if(
                        permissionStatus.state === 'granted' ||
                        permissionStatus.state === 'prompt'
                    ){
                        navigator.clipboard.readText()
                            .then(text => {
                                payload.data = text;
                                resolve(payload);                        })
                            .catch(err => {
                                let errorMsg = 'Failed to read clipboard content';
                                console.error(errorMsg, err);
                                showNotify({title: 'Clipboard API', text: errorMsg, type: 'error'});
                                resolve(payload);
                            });
                    }else{
                        showNotify({title: 'Clipboard API', text: 'You denied read access', type: 'warning'});
                        resolve(payload);
                    }
                });
            }else{
                console.warn('Clipboard API not supported by your browser');
                resolve(payload);
            }
        };

        return new Promise(readFromClipboardExecutor);
    };

    /**
     * set currentSystemData (active system)
     * @param mapId
     * @param systemData
     */
    let setCurrentSystemData = (mapId, systemData) => {
        mapId = parseInt(mapId) || 0;
        if(mapId && typeof systemData === 'object'){
            currentSystemDataCache.set(`mapId_${mapId}`, systemData);
        }else{
            console.error('Invalid mapId %o or systemData %o');
        }
    };

    /**
     * get currentSystemData (active system)
     * @param mapId
     * @returns {*}
     */
    let getCurrentSystemData = mapId => {
        mapId = parseInt(mapId) || 0;
        if(mapId){
            return currentSystemDataCache.get(`mapId_${mapId}`);
        }else{
            console.error('Invalid mapId %o');
        }
    };

    /**
     * delete currentSystemData (active system)
     * @param mapId
     * @returns {*}
     */
    let deleteCurrentSystemData = mapId => {
        mapId = parseInt(mapId) || 0;
        if(mapId){
            return currentSystemDataCache.delete(`mapId_${mapId}`);
        }else{
            console.error('Invalid mapId %o');
        }
    };

    /**
     * get current location data
     * -> system data where current user is located
     * @returns {{id: *, name: *}}
     */
    let getCurrentLocationData = () => {
        let breadcrumbElement = $('#' + config.headUserLocationId + '>li:last-of-type');
        return {
            id: parseInt(breadcrumbElement.attr('data-systemId')) || 0,
            name: breadcrumbElement.attr('data-systemName') || false
        };
    };

    /**
     * get all "open" dialog elements
     * @returns {*|jQuery}
     */
    let getOpenDialogs = () => {
        return $('.' + config.dialogClass).filter(':visible');
    };

    /**
     * send Ajax request that remote opens an ingame Window
     * @param targetId
     */
    let openIngameWindow = (targetId) => {
        targetId = parseInt(targetId);

        if(targetId > 0){
            $.ajax({
                type: 'POST',
                url: Init.path.openIngameWindow,
                data: {
                    targetId: targetId
                },
                dataType: 'json'
            }).done(function(data){
                if(data.error.length > 0){
                    showNotify({title: 'Open window in client', text: 'Remote window open failed', type: 'error'});
                }else{
                    showNotify({title: 'Open window in client', text: 'Check your EVE client', type: 'success'});
                }
            }).fail(function(jqXHR, status, error){
                let reason = status + ' ' + error;
                showNotify({title: jqXHR.status + ': openWindow', text: reason, type: 'error'});
            });
        }
    };

    /**
     * formats a price string into an ISK Price
     * @param price
     * @returns {string}
     */
    let formatPrice = (price) => {
        price = Number( price ).toFixed(2);

        let parts = price.toString().split('.');
        price = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');

        return price + ' ISK';
    };

    /**
     * format mass value
     * @param value
     * @returns {string}
     */
    let formatMassValue = (value) => {
        return (parseInt(value) / 1000).toLocaleString() + ' t';
    };

    /**
     * get LocalStore instance for offline client data store
     * @param name
     * @returns {LocalStore}
     */
    let getLocalStore = name => {
        if(config.localStoreNames.includes(name)){
            return LocalStoreManager.getStore(name);
        }else{
            throw new RangeError('Invalid LocalStore name. Allowed names: ' + config.localStoreNames.join('|'));
        }
    };



    /**
     * get ResizeManager instance
     * @returns {ResizeManager}
     */
    let getResizeManager = () => ResizeManager;

    /**
     * clear session Storage
     * -> otherwise a tab refresh does not clear sessionStorage!
     */
    let clearSessionStorage = () => {
        if(sessionStorage){
            sessionStorage.clear();
        }
    };

    /**
     * Create Date() as UTC
     * @param date
     * @returns {Date}
     */
    let createDateAsUTC = (date) => {
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    };

    /**
     * Convert Date() to UTC (!important function!)
     * @param date
     * @returns {Date}
     */
    let convertDateToUTC = (date) => {
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    };

    /**
     * Convert Date() to Time String
     * @param date
     * @param showSeconds
     * @returns {string}
     */
    let convertDateToString = (date, showSeconds) => {
        let dateString = ('0'+ (date.getMonth() + 1 )).slice(-2) + '/' + ('0'+date.getDate()).slice(-2) + '/' + date.getFullYear();
        let timeString = ('0' + date.getHours()).slice(-2) + ':' + ('0'+date.getMinutes()).slice(-2);
        timeString += (showSeconds) ? ':' + ('0'+date.getSeconds()).slice(-2) : '';
        return   dateString + ' ' + timeString;
    };

    /**
     * check an element for attached jQuery event by name
     * -> e.g. eventName = 'click.myNamespace'
     * @param element
     * @param eventName
     * @returns {boolean}
     */
    let hasEvent = (element, eventName) => {
        let exists = false;
        let allEvents = $._data(element[0], 'events');
        if(allEvents){
            let parts = eventName.split('.');
            let name =  parts[0];
            let events = allEvents[name];
            if(events){
                let namespace = parts.length === 2 ? parts[1] : false;
                if(namespace){
                    // search events by namespace
                    for(let event of events){
                        if(event.namespace === namespace){
                            exists = true;
                            break;
                        }
                    }
                }else{
                    // at least ONE event of the given name found
                    exists = true;
                }
            }
        }
        return exists;
    };

    /**
     * wrapper function for onClick() || onDblClick() events in order to distinguish between this two types of events
     * @param element
     * @param singleClickCallback
     * @param doubleClickCallback
     * @param timeout
     */
    let singleDoubleClick = (element, singleClickCallback, doubleClickCallback, timeout = Init.timer.DBL_CLICK) => {
        element.addEventListener('click', e => {
            if(e.detail === 1){
                // single click -> setTimeout and check if there is a 2nd click incoming before timeout
                let clickTimeoutId = setTimeout(element => {
                    singleClickCallback.call(element, e);
                    element.removeData('clickTimeoutId');
                }, timeout, e.currentTarget);

                e.currentTarget.setData('clickTimeoutId', clickTimeoutId);
            }else if(e.detail === 2 ){
                // double click -> clearTimeout, (triple, quadruple, etc. clicks are ignored)
                doubleClickCallback.call(element, e);
                clearTimeout(e.currentTarget.getData('clickTimeoutId'));
                e.currentTarget.removeData('clickTimeoutId');
            }
        });
    };

    /**
     * get dataTable id
     * @param prefix
     * @param {...string} parts  e.g. 'tableType', 'mapId', 'systemId'
     * @returns {string}
     */
    let getTableId = (prefix, ...parts) => prefix + parts.filter(Boolean).join('-');

    /**
     * get dataTable row id
     * @param prefix
     * @param tableType
     * @param rowId
     * @returns {string}
     */
    let getTableRowId = (prefix, tableType, rowId) => prefix + [tableType, rowId].join('-');

    /**
     * get a dataTableApi instance from global cache
     * @param prefix
     * @param mapId
     * @param systemId
     * @param tableType
     * @returns {*}
     */
    let getDataTableInstance = (prefix, mapId, systemId, tableType) => {
        let instance = null;
        let table = $.fn.dataTable.tables({ visible: false, api: true }).table('#' + getTableId(prefix, tableType, mapId, systemId));
        if(table.node()){
            instance = table;
        }
        return instance;
    };

    /**
     * HTML encode string
     * @param value
     * @returns {jQuery}
     */
    let htmlEncode = value => $('<div>').text(value).html();

    /**
     * HTML decode string
     * @param value
     * @returns {jQuery}
     */
    let htmlDecode = value => $('<div>').html(value).text();

    /**
     * checks if html is valid
     * -> see https://stackoverflow.com/a/15458968/4329969
     * @param html
     * @returns {boolean}
     */
    let isValidHtml = html => {
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
    };

    /**
     * checks if a given object is a DOM element
     * @param obj
     * @returns {boolean}
     */
    let isDomElement = obj => !!(obj && obj.nodeType === 1);

    /**
     * converts array of objects into object with properties
     * @param array
     * @param keyField
     * @returns {*}
     */
    let arrayToObject = (array, keyField = 'id') =>
        array.reduce((obj, item) => {
            obj[item[keyField]] = item;
            return obj;
        }, {});

    /**
     * combines multiple objects into one object
     * -> removes duplicate values
     * -> properties are indexed 1, 2,..n
     * @param objects
     * @returns {{[p: string]: *}}
     */
    let objCombine = (...objects) => {
        let combined = objects.reduce((acc, obj) => acc.concatFilter(Object.values(obj)), []);
        combined.unshift('');  // properties should start at 1 (not 0)
        combined = Object.assign({}, combined);
        delete combined[0];
        return combined;
    };

    /**
     * filter object by allowed keys
     * -> returns a NEW object. Does not change the source obj
     * ({one: 'A', two: 'B'}).filterKeys(['one']) => {one: "A"}
     * @param obj
     * @param allowedKeys
     * @returns {{}}
     */
    let filterObjByKeys = (obj, allowedKeys = []) => {
        return Object.keys(obj)
            .filter(key => allowedKeys.includes(key))
            .reduce((objAcc, key) => {
                objAcc[key] = obj[key];
                return objAcc;
            }, {});
    };

    /**
     * get deep json object value if exists
     * -> e.g. key = 'first.last.third' string
     * @param obj
     * @param key
     * @returns {*}
     */
    let getObjVal = (obj, key) => {
        return key.split('.').reduce((o, x) => {
            return (typeof o === 'undefined' || o === null) ? o : o[x];
        }, obj);
    };

    /**
     * get document path
     * -> www.pathfinder.com/pathfinder/ -> /pathfinder
     * @returns {string|string}
     */
    let getDocumentPath = () => {
        let pathname = window.location.pathname;
        // replace file endings
        let r = /[^\/]*$/;
        let path = pathname.replace(r, '');
        return path || '/';
    };

    /**
     * redirect
     * @param url
     * @param params
     */
    let redirect = (url, params = []) => {
        let currentUrl = document.URL;

        if(url !== currentUrl){
            if(params && params.length > 0){
                url += '?' + params.join('&');
            }
            window.location = url;
        }
    };

    /**
     * send logout request
     * @param  params
     */
    let logout = params => {
        let data = getObjVal(params, 'ajaxData') || {};

        $.ajax({
            type: 'POST',
            url: Init.path.logout,
            data: data,
            dataType: 'json'
        }).done(function(responseData){
            if(responseData.reroute){
                let params = data.graceful ? 'logoutGraceful' : 'logout';
                redirect(responseData.reroute, [params]);
            }
        }).fail(function(jqXHR, status, error){
            let reason = status + ' ' + error;
            showNotify({title: jqXHR.status + ': logout', text: reason, type: 'error'});
        });
    };

    /**
     * set a cookie
     * @param name
     * @param value
     * @param expire
     * @param format
     */
    let setCookie = (name, value, expire, format) => {
        let d = new Date();
        let time = d.getTime();
        let timeExpire = time * -1;

        if(expire > 0){
            switch(format){
                case 'd':   // days
                    timeExpire = expire * 24 * 60 * 60 * 1000; break;
                case 's': // seconds
                    timeExpire = expire * 1000; break;

            }
        }

        d.setTime(time + timeExpire);
        let expires = 'expires=' + d.toUTCString();
        let path = 'path=' + getDocumentPath();
        document.cookie = name + '=' + value + '; ' + expires + '; ' + path;
    };

    /**
     * get cookie value by name
     * @param cname
     * @returns {string}
     */
    let getCookie = (cname) => {
        let name = cname + '=';
        let ca = document.cookie.split(';');

        for(let i = 0; i <ca.length; i++){
            let c = ca[i];
            while(c.charAt(0) === ' '){
                c = c.substring(1);
            }

            if(c.indexOf(name) === 0){
                return c.substring(name.length,c.length);
            }
        }
        return '';
    };

    return {
        config: config,
        getVersion: getVersion,
        showVersionInfo: showVersionInfo,
        imgRoot: imgRoot,
        eveImageUrl: eveImageUrl,
        unicodeToString: unicodeToString,
        initPassiveEvents: initPassiveEvents,
        initDefaultBootboxConfig: initDefaultBootboxConfig,
        initDefaultTooltipConfig: initDefaultTooltipConfig,
        initDefaultPopoverConfig: initDefaultPopoverConfig,
        initDefaultConfirmationConfig: initDefaultConfirmationConfig,
        initDefaultSelect2Config: initDefaultSelect2Config,
        initDefaultEditableConfig: initDefaultEditableConfig,
        getCurrentTriggerDelay: getCurrentTriggerDelay,
        getRandomString: getRandomString,
        getServerTime: getServerTime,
        convertTimestampToServerTime: convertTimestampToServerTime,
        getTimeDiffParts: getTimeDiffParts,
        formatTimeParts: formatTimeParts,
        timeStart: timeStart,
        timeStop: timeStop,
        updateCounter: updateCounter,
        log: log,
        showNotify: showNotify,
        stopTabBlink: stopTabBlink,
        getLogInfo: getLogInfo,
        ajaxSetup: ajaxSetup,
        request: request,
        handleAjaxErrorResponse: handleAjaxErrorResponse,
        setSyncStatus: setSyncStatus,
        getSyncType: getSyncType,
        isXHRAborted: isXHRAborted,
        triggerMenuAction: triggerMenuAction,
        getLabelByRole: getLabelByRole,
        getMapModule: getMapModule,
        getMapTabLinkElements: getMapTabLinkElements,
        getMapTabContentAreaClass: getMapTabContentAreaClass,
        getSystemEffectMultiplierByAreaId: getSystemEffectMultiplierByAreaId,
        getSystemEffectData: getSystemEffectData,
        getSystemEffectTable: getSystemEffectTable,
        getSystemPlanetsTable: getSystemPlanetsTable,
        getSystemSovereigntyTable: getSystemSovereigntyTable,
        getSystemPilotsTable: getSystemPilotsTable,
        getSystemsInfoTable: getSystemsInfoTable,
        getStatusInfoForCharacter: getStatusInfoForCharacter,
        getSecurityClassForSystem: getSecurityClassForSystem,
        getTrueSecClassForSystem: getTrueSecClassForSystem,
        getStatusInfoForSystem: getStatusInfoForSystem,
        getSignatureGroupOptions: getSignatureGroupOptions,
        getSignatureTypeNames: getSignatureTypeNames,
        getAreaIdBySecurity: getAreaIdBySecurity,
        setCurrentMapUserData: setCurrentMapUserData,
        getCurrentMapUserData: getCurrentMapUserData,
        updateCurrentMapUserData: updateCurrentMapUserData,
        setCurrentMapData: setCurrentMapData,
        getCurrentMapData: getCurrentMapData,
        filterCurrentMapData: filterCurrentMapData,
        updateCurrentMapData: updateCurrentMapData,
        deleteCurrentMapData: deleteCurrentMapData,
        setCurrentUserData: setCurrentUserData,
        getCurrentUserData: getCurrentUserData,
        getCurrentCharacter: getCurrentCharacter,
        getCurrentCharacterData: getCurrentCharacterData,
        getCurrentCharacterId: getCurrentCharacterId,
        setCurrentSystemData: setCurrentSystemData,
        getCurrentSystemData: getCurrentSystemData,
        deleteCurrentSystemData:deleteCurrentSystemData,
        getCurrentLocationData: getCurrentLocationData,
        getCurrentUserInfo: getCurrentUserInfo,
        findInViewport: findInViewport,
        initScrollSpy: initScrollSpy,
        getConfirmationTemplate: getConfirmationTemplate,
        getConfirmationContent: getConfirmationContent,
        convertXEditableOptionsToSelect2: convertXEditableOptionsToSelect2,
        flattenXEditableSelectArray: flattenXEditableSelectArray,
        getCharacterDataBySystemId: getCharacterDataBySystemId,
        getNearBySystemData: getNearBySystemData,
        getNearByCharacterData: getNearByCharacterData,
        setDestination: setDestination,
        copyToClipboard: copyToClipboard,
        readFromClipboard: readFromClipboard,
        convertDateToUTC: convertDateToUTC,
        convertDateToString: convertDateToString,
        getOpenDialogs: getOpenDialogs,
        openIngameWindow: openIngameWindow,
        formatPrice: formatPrice,
        formatMassValue: formatMassValue,
        getLocalStore: getLocalStore,
        getResizeManager: getResizeManager,
        clearSessionStorage: clearSessionStorage,
        hasRight: hasRight,
        getBrowserTabId: getBrowserTabId,
        singleDoubleClick: singleDoubleClick,
        getTableId: getTableId,
        getTableRowId: getTableRowId,
        getDataTableInstance: getDataTableInstance,
        htmlEncode: htmlEncode,
        htmlDecode: htmlDecode,
        isValidHtml: isValidHtml,
        isDomElement: isDomElement,
        arrayToObject: arrayToObject,
        filterObjByKeys: filterObjByKeys,
        getObjVal: getObjVal,
        redirect: redirect,
        logout: logout,
        setCookie: setCookie,
        getCookie: getCookie
    };
});

(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define('mustache',["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}function primitiveHasOwnProperty(primitive,propName){return primitive!=null&&typeof primitive!=="object"&&primitive.hasOwnProperty&&primitive.hasOwnProperty(propName)}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length)}else{nonSpace=true}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n")stripSpace()}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,intermediateValue,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){intermediateValue=context.view;names=name.split(".");index=0;while(intermediateValue!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(intermediateValue,names[index])||primitiveHasOwnProperty(intermediateValue,names[index]);intermediateValue=intermediateValue[names[index++]]}}else{intermediateValue=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit){value=intermediateValue;break}context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var cacheKey=template+":"+(tags||mustache.tags).join(":");var tokens=cache[cacheKey];if(tokens==null)tokens=cache[cacheKey]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials,tags){var tokens=this.parse(template,tags);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template,tags)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate,tags){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,tags);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.renderPartial=function renderPartial(token,context,partials,tags){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null)return this.renderTokens(this.parse(value,tags),context,partials,value)};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="3.0.1";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials,tags){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials,tags)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});

/**
 *  Render controller
 */

define('app/render',['jquery', 'mustache'], ($, Mustache) => {

    'use strict';

    /**
     * render Mustache template
     * @param path
     * @param data
     * @returns {Promise<any>}
     */
    let render = (path, data) => {
        let renderExecutor = resolve => {
            requirejs(['text!templates/' + path + '.html'], template => {
                resolve(Mustache.render(template, data));
            });
        };
        return new Promise(renderExecutor);
    };

    /**
     * convert JSON object into HTML highlighted string
     * @param obj
     * @param options
     */
    let highlightJson = (obj, options = {}) => {
        let maxLinesFunctions = options.maxLinesFunctions || 5;

        let multiplyString = (num, str) =>  {
            let sb = [];
            for(let i = 0; i < num; i++){
                sb.push(str);
            }
            return sb.join('');
        };

        let dateObj = new Date();
        let regexpObj = new RegExp();
        let tab = multiplyString(1, '  ');
        let isCollapsible = true;
        let quoteKeys = false;
        let expImageClicked = '(() => {this.classList.toggle(\'fa-minus-square\'); ' +
            'this.classList.toggle(\'fa-plus-square\'); ' +
            'let container=this.parentNode.nextSibling; ' +
            'container.style.display=container.style.display===\'none\'?\'inline\':\'none\'})();';

        let checkForArray = function(obj){
            return obj &&
                typeof obj === 'object' &&
                typeof obj.length === 'number' &&
                !(obj.propertyIsEnumerable('length'));
        };

        let getRow = function(indent, data, isPropertyContent){
            let tabs = '';
            for(let i = 0; i < indent && !isPropertyContent; i++) tabs += tab;
            if(data !== null && data.length > 0 && data.charAt(data.length - 1) !== '\n')
                data = data + '\n';
            return tabs + data;
        };

        let formatLiteral = function(literal, quote, comma, indent, isArray, style){
            if(typeof literal === 'string')
                literal = literal.split('<').join('&lt;').split('>').join('&gt;');
            let str = '<span class="' + style + '">' + quote + literal + quote + comma + '</span>';
            if(isArray) str = getRow(indent, str);
            return str;
        };

        let formatFunction = function(indent, obj){
            let tabs = '';
            for(let i = 0; i < indent; i++) tabs += tab;
            let funcStrArray = obj.toString().split('\n', maxLinesFunctions);
            let str = '';
            for(let i = 0; i < funcStrArray.length; i++){
                str += ((i === 0) ? '' : '') + funcStrArray[i] + '\n';
            }
            return str + tabs;
        };


        let highlight = (obj, indent, addComma, isArray, isPropertyContent) => {
            // check if recursive call depth leads to collapsed data
            let startCollapseIcon = options.collapseDepth <= indent ? 'fa-plus-square' : 'fa-minus-square';
            let startCollapseStyle = options.collapseDepth <= indent ? 'none' : 'inline';

            let html = '';

            // check max recursion depth
            if(indent > (options.maxDepth || 8)){
                return html;
            }

            let comma = (addComma) ? '<span class="pf-code-Comma">,</span> ' : '';
            let type = typeof obj;
            let clpsHtml = '';
            if(checkForArray(obj)){
                if(obj.length === 0){
                    html += getRow(indent, '<span class="pf-code-ArrayBrace">[ ]</span>' + comma, isPropertyContent);
                }else{
                    clpsHtml = isCollapsible ? '<span><i class="pf-module-icon-button fas fa-fw ' + startCollapseIcon + '" onClick="' + expImageClicked + '"></i></span>' +
                        '<span class="collapsible" style="display:'+ startCollapseStyle +'">' : '';
                    html += getRow(indent, '<span class="pf-code-ArrayBrace">[</span>' + clpsHtml, isPropertyContent);
                    for(let i = 0; i < obj.length; i++){
                        html += highlight(obj[i], indent + 1, i < (obj.length - 1), true, false);
                    }
                    clpsHtml = isCollapsible ? '</span>' : '';
                    html += getRow(indent, clpsHtml + '<span class="pf-code-ArrayBrace">]</span>' + comma);
                }
            }else if(type === 'object'){
                if(obj === null){
                    html += formatLiteral('null', '', comma, indent, isArray, 'pf-code-Null');
                }else if(obj.constructor === dateObj.constructor){
                    html += formatLiteral('new Date(' + obj.getTime() + ') &lt;' + obj.toLocaleString('en-GB') + '&gt;', '', comma, indent, isArray, 'pf-code-Date');
                }else if(obj.constructor === regexpObj.constructor){
                    html += formatLiteral('new RegExp(' + obj + ')', '', comma, indent, isArray, 'RegExp');
                }else{
                    let numProps = 0;
                    for(let prop in obj) numProps++;
                    if(numProps === 0){
                        html += getRow(indent, '<span class="pf-code-ObjectBrace">{ }</span>' + comma, isPropertyContent);
                    }else{
                        clpsHtml = isCollapsible ? '<span><i class="pf-module-icon-button fas fa-fw ' + startCollapseIcon + '" onClick="' + expImageClicked + '"></i></span>' +
                            '<span class="collapsible" style="display:'+ startCollapseStyle +'">' : '';
                        html += getRow(indent, '<span class="pf-code-ObjectBrace">{</span>' + clpsHtml, isPropertyContent);
                        let j = 0;
                        for(let prop in obj){
                            if(obj.hasOwnProperty(prop)){
                                let quote = quoteKeys ? '"' : '';
                                html += getRow(indent + 1, '<span class="pf-code-PropertyName">' + quote + prop + quote + '</span>: ' + highlight(obj[prop], indent + 1, ++j < numProps, false, true));
                            }
                        }
                        clpsHtml = isCollapsible ? '</span>' : '';
                        html += getRow(indent, clpsHtml + '<span class="pf-code-ObjectBrace">}</span>' + comma);
                    }
                }
            }else if(type === 'number'){
                html += formatLiteral(obj, '', comma, indent, isArray, 'pf-code-Number');
            }else if(type === 'boolean'){
                html += formatLiteral(obj, '', comma, indent, isArray, 'pf-code-Boolean');
            }else if(type === 'function'){
                if(obj.constructor === regexpObj.constructor){
                    html += formatLiteral('new RegExp(' + obj + ')', '', comma, indent, isArray, 'RegExp');
                }else{
                    obj = formatFunction(indent, obj);
                    html += formatLiteral(obj, '', comma, indent, isArray, 'pf-code-Function');
                }
            }else if(type === 'undefined'){
                html += formatLiteral('undefined', '', comma, indent, isArray, 'pf-code-Null');
            }else{
                html += formatLiteral(obj.toString().split('\\').join('\\\\').split('"').join('\\"'), '"', comma, indent, isArray, 'pf-code-String');
            }

            return html;
        };

        return highlight(obj, 0, false, false, false);
    };

    return {
        render: render,
        highlightJson: highlightJson
    };
});
/*
 * blueimp helper JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function () {
    'use strict'

    function extend (obj1, obj2) {
        var prop
        for (prop in obj2) {
            if (obj2.hasOwnProperty(prop)) {
                obj1[prop] = obj2[prop]
            }
        }
        return obj1
    }

    function Helper (query) {
        if (!this || this.find !== Helper.prototype.find) {
            // Called as function instead of as constructor,
            // so we simply return a new instance:
            return new Helper(query)
        }
        this.length = 0
        if (query) {
            if (typeof query === 'string') {
                query = this.find(query)
            }
            if (query.nodeType || query === query.window) {
                // Single HTML element
                this.length = 1
                this[0] = query
            } else {
                // HTML element collection
                var i = query.length
                this.length = i
                while (i) {
                    i -= 1
                    this[i] = query[i]
                }
            }
        }
    }

    Helper.extend = extend

    Helper.contains = function (container, element) {
        do {
            element = element.parentNode
            if (element === container) {
                return true
            }
        } while (element)
        return false
    }

    Helper.parseJSON = function (string) {
        return window.JSON && JSON.parse(string)
    }

    extend(Helper.prototype, {
        find: function (query) {
            var container = this[0] || document
            if (typeof query === 'string') {
                if (container.querySelectorAll) {
                    query = container.querySelectorAll(query)
                } else if (query.charAt(0) === '#') {
                    query = container.getElementById(query.slice(1))
                } else {
                    query = container.getElementsByTagName(query)
                }
            }
            return new Helper(query)
        },

        hasClass: function (className) {
            if (!this[0]) {
                return false
            }
            return new RegExp('(^|\\s+)' + className +
                '(\\s+|$)').test(this[0].className)
        },

        addClass: function (className) {
            var i = this.length
            var element
            while (i) {
                i -= 1
                element = this[i]
                if (!element.className) {
                    element.className = className
                    return this
                }
                if (this.hasClass(className)) {
                    return this
                }
                element.className += ' ' + className
            }
            return this
        },

        removeClass: function (className) {
            var regexp = new RegExp('(^|\\s+)' + className + '(\\s+|$)')
            var i = this.length
            var element
            while (i) {
                i -= 1
                element = this[i]
                element.className = element.className.replace(regexp, ' ')
            }
            return this
        },

        on: function (eventName, handler) {
            var eventNames = eventName.split(/\s+/)
            var i
            var element
            while (eventNames.length) {
                eventName = eventNames.shift()
                i = this.length
                while (i) {
                    i -= 1
                    element = this[i]
                    if (element.addEventListener) {
                        element.addEventListener(eventName, handler, false)
                    } else if (element.attachEvent) {
                        element.attachEvent('on' + eventName, handler)
                    }
                }
            }
            return this
        },

        off: function (eventName, handler) {
            var eventNames = eventName.split(/\s+/)
            var i
            var element
            while (eventNames.length) {
                eventName = eventNames.shift()
                i = this.length
                while (i) {
                    i -= 1
                    element = this[i]
                    if (element.removeEventListener) {
                        element.removeEventListener(eventName, handler, false)
                    } else if (element.detachEvent) {
                        element.detachEvent('on' + eventName, handler)
                    }
                }
            }
            return this
        },

        empty: function () {
            var i = this.length
            var element
            while (i) {
                i -= 1
                element = this[i]
                while (element.hasChildNodes()) {
                    element.removeChild(element.lastChild)
                }
            }
            return this
        },

        first: function () {
            return new Helper(this[0])
        }

    })

    if (typeof define === 'function' && define.amd) {
        define('blueImpGalleryHelper',[],function () {
            return Helper
        })
    } else {
        window.blueimp = window.blueimp || {}
        window.blueimp.helper = Helper
    }
}())
;
/*
 * blueimp Gallery JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Swipe implementation based on
 * https://github.com/bradbirdsall/Swipe
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, window, document, DocumentTouch */

;(function (factory) {
    'use strict'
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define('blueImpGallery',['blueImpGalleryHelper'], factory)
    } else {
        // Browser globals:
        window.blueimp = window.blueimp || {}
        window.blueimp.Gallery = factory(
            window.blueimp.helper || window.jQuery
        )
    }
}(function ($) {
    'use strict'

    function Gallery (list, options) {
        if (document.body.style.maxHeight === undefined) {
            // document.body.style.maxHeight is undefined on IE6 and lower
            return null
        }
        if (!this || this.options !== Gallery.prototype.options) {
            // Called as function instead of as constructor,
            // so we simply return a new instance:
            return new Gallery(list, options)
        }
        if (!list || !list.length) {
            this.console.log(
                'blueimp Gallery: No or empty list provided as first argument.',
                list
            )
            return
        }
        this.list = list
        this.num = list.length
        this.initOptions(options)
        this.initialize()
    }

    $.extend(Gallery.prototype, {
        options: {
            // The Id, element or querySelector of the gallery widget:
            container: '#blueimp-gallery',
            // The tag name, Id, element or querySelector of the slides container:
            slidesContainer: 'div',
            // The tag name, Id, element or querySelector of the title element:
            titleElement: 'h3',
            // The class to add when the gallery is visible:
            displayClass: 'blueimp-gallery-display',
            // The class to add when the gallery controls are visible:
            controlsClass: 'blueimp-gallery-controls',
            // The class to add when the gallery only displays one element:
            singleClass: 'blueimp-gallery-single',
            // The class to add when the left edge has been reached:
            leftEdgeClass: 'blueimp-gallery-left',
            // The class to add when the right edge has been reached:
            rightEdgeClass: 'blueimp-gallery-right',
            // The class to add when the automatic slideshow is active:
            playingClass: 'blueimp-gallery-playing',
            // The class for all slides:
            slideClass: 'slide',
            // The slide class for loading elements:
            slideLoadingClass: 'slide-loading',
            // The slide class for elements that failed to load:
            slideErrorClass: 'slide-error',
            // The class for the content element loaded into each slide:
            slideContentClass: 'slide-content',
            // The class for the "toggle" control:
            toggleClass: 'toggle',
            // The class for the "prev" control:
            prevClass: 'prev',
            // The class for the "next" control:
            nextClass: 'next',
            // The class for the "close" control:
            closeClass: 'close',
            // The class for the "play-pause" toggle control:
            playPauseClass: 'play-pause',
            // The list object property (or data attribute) with the object type:
            typeProperty: 'type',
            // The list object property (or data attribute) with the object title:
            titleProperty: 'title',
            // The list object property (or data attribute) with the object URL:
            urlProperty: 'href',
            // The list object property (or data attribute) with the object srcset URL(s):
            srcsetProperty: 'urlset',
            // The gallery listens for transitionend events before triggering the
            // opened and closed events, unless the following option is set to false:
            displayTransition: true,
            // Defines if the gallery slides are cleared from the gallery modal,
            // or reused for the next gallery initialization:
            clearSlides: true,
            // Defines if images should be stretched to fill the available space,
            // while maintaining their aspect ratio (will only be enabled for browsers
            // supporting background-size="contain", which excludes IE < 9).
            // Set to "cover", to make images cover all available space (requires
            // support for background-size="cover", which excludes IE < 9):
            stretchImages: false,
            // Toggle the controls on pressing the Return key:
            toggleControlsOnReturn: true,
            // Toggle the controls on slide click:
            toggleControlsOnSlideClick: true,
            // Toggle the automatic slideshow interval on pressing the Space key:
            toggleSlideshowOnSpace: true,
            // Navigate the gallery by pressing left and right on the keyboard:
            enableKeyboardNavigation: true,
            // Close the gallery on pressing the Esc key:
            closeOnEscape: true,
            // Close the gallery when clicking on an empty slide area:
            closeOnSlideClick: true,
            // Close the gallery by swiping up or down:
            closeOnSwipeUpOrDown: true,
            // Emulate touch events on mouse-pointer devices such as desktop browsers:
            emulateTouchEvents: true,
            // Stop touch events from bubbling up to ancestor elements of the Gallery:
            stopTouchEventsPropagation: false,
            // Hide the page scrollbars:
            hidePageScrollbars: true,
            // Stops any touches on the container from scrolling the page:
            disableScroll: true,
            // Carousel mode (shortcut for carousel specific options):
            carousel: false,
            // Allow continuous navigation, moving from last to first
            // and from first to last slide:
            continuous: true,
            // Remove elements outside of the preload range from the DOM:
            unloadElements: true,
            // Start with the automatic slideshow:
            startSlideshow: false,
            // Delay in milliseconds between slides for the automatic slideshow:
            slideshowInterval: 5000,
            // The starting index as integer.
            // Can also be an object of the given list,
            // or an equal object with the same url property:
            index: 0,
            // The number of elements to load around the current index:
            preloadRange: 2,
            // The transition speed between slide changes in milliseconds:
            transitionSpeed: 400,
            // The transition speed for automatic slide changes, set to an integer
            // greater 0 to override the default transition speed:
            slideshowTransitionSpeed: undefined,
            // The event object for which the default action will be canceled
            // on Gallery initialization (e.g. the click event to open the Gallery):
            event: undefined,
            // Callback function executed when the Gallery is initialized.
            // Is called with the gallery instance as "this" object:
            onopen: undefined,
            // Callback function executed when the Gallery has been initialized
            // and the initialization transition has been completed.
            // Is called with the gallery instance as "this" object:
            onopened: undefined,
            // Callback function executed on slide change.
            // Is called with the gallery instance as "this" object and the
            // current index and slide as arguments:
            onslide: undefined,
            // Callback function executed after the slide change transition.
            // Is called with the gallery instance as "this" object and the
            // current index and slide as arguments:
            onslideend: undefined,
            // Callback function executed on slide content load.
            // Is called with the gallery instance as "this" object and the
            // slide index and slide element as arguments:
            onslidecomplete: undefined,
            // Callback function executed when the Gallery is about to be closed.
            // Is called with the gallery instance as "this" object:
            onclose: undefined,
            // Callback function executed when the Gallery has been closed
            // and the closing transition has been completed.
            // Is called with the gallery instance as "this" object:
            onclosed: undefined
        },

        carouselOptions: {
            hidePageScrollbars: false,
            toggleControlsOnReturn: false,
            toggleSlideshowOnSpace: false,
            enableKeyboardNavigation: false,
            closeOnEscape: false,
            closeOnSlideClick: false,
            closeOnSwipeUpOrDown: false,
            disableScroll: false,
            startSlideshow: true
        },

        console: window.console && typeof window.console.log === 'function'
            ? window.console
            : {log: function () {}},

        // Detect touch, transition, transform and background-size support:
        support: (function (element) {
            var support = {
                touch: window.ontouchstart !== undefined ||
                (window.DocumentTouch && document instanceof DocumentTouch)
            }
            var transitions = {
                webkitTransition: {
                    end: 'webkitTransitionEnd',
                    prefix: '-webkit-'
                },
                MozTransition: {
                    end: 'transitionend',
                    prefix: '-moz-'
                },
                OTransition: {
                    end: 'otransitionend',
                    prefix: '-o-'
                },
                transition: {
                    end: 'transitionend',
                    prefix: ''
                }
            }
            var prop
            for (prop in transitions) {
                if (transitions.hasOwnProperty(prop) &&
                    element.style[prop] !== undefined) {
                    support.transition = transitions[prop]
                    support.transition.name = prop
                    break
                }
            }
            function elementTests () {
                var transition = support.transition
                var prop
                var translateZ
                document.body.appendChild(element)
                if (transition) {
                    prop = transition.name.slice(0, -9) + 'ransform'
                    if (element.style[prop] !== undefined) {
                        element.style[prop] = 'translateZ(0)'
                        translateZ = window.getComputedStyle(element)
                            .getPropertyValue(transition.prefix + 'transform')
                        support.transform = {
                            prefix: transition.prefix,
                            name: prop,
                            translate: true,
                            translateZ: !!translateZ && translateZ !== 'none'
                        }
                    }
                }
                if (element.style.backgroundSize !== undefined) {
                    support.backgroundSize = {}
                    element.style.backgroundSize = 'contain'
                    support.backgroundSize.contain = window
                            .getComputedStyle(element)
                            .getPropertyValue('background-size') === 'contain'
                    element.style.backgroundSize = 'cover'
                    support.backgroundSize.cover = window
                            .getComputedStyle(element)
                            .getPropertyValue('background-size') === 'cover'
                }
                document.body.removeChild(element)
            }
            if (document.body) {
                elementTests()
            } else {
                $(document).on('DOMContentLoaded', elementTests)
            }
            return support
            // Test element, has to be standard HTML and must not be hidden
            // for the CSS3 tests using window.getComputedStyle to be applicable:
        }(document.createElement('div'))),

        requestAnimationFrame: window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame,

        initialize: function () {
            this.initStartIndex()
            if (this.initWidget() === false) {
                return false
            }
            this.initEventListeners()
            // Load the slide at the given index:
            this.onslide(this.index)
            // Manually trigger the slideend event for the initial slide:
            this.ontransitionend()
            // Start the automatic slideshow if applicable:
            if (this.options.startSlideshow) {
                this.play()
            }
        },

        slide: function (to, speed) {
            window.clearTimeout(this.timeout)
            var index = this.index
            var direction
            var naturalDirection
            var diff
            if (index === to || this.num === 1) {
                return
            }
            if (!speed) {
                speed = this.options.transitionSpeed
            }
            if (this.support.transform) {
                if (!this.options.continuous) {
                    to = this.circle(to)
                }
                // 1: backward, -1: forward:
                direction = Math.abs(index - to) / (index - to)
                // Get the actual position of the slide:
                if (this.options.continuous) {
                    naturalDirection = direction
                    direction = -this.positions[this.circle(to)] / this.slideWidth
                    // If going forward but to < index, use to = slides.length + to
                    // If going backward but to > index, use to = -slides.length + to
                    if (direction !== naturalDirection) {
                        to = -direction * this.num + to
                    }
                }
                diff = Math.abs(index - to) - 1
                // Move all the slides between index and to in the right direction:
                while (diff) {
                    diff -= 1
                    this.move(
                        this.circle((to > index ? to : index) - diff - 1),
                        this.slideWidth * direction,
                        0
                    )
                }
                to = this.circle(to)
                this.move(index, this.slideWidth * direction, speed)
                this.move(to, 0, speed)
                if (this.options.continuous) {
                    this.move(
                        this.circle(to - direction),
                        -(this.slideWidth * direction),
                        0
                    )
                }
            } else {
                to = this.circle(to)
                this.animate(index * -this.slideWidth, to * -this.slideWidth, speed)
            }
            this.onslide(to)
        },

        getIndex: function () {
            return this.index
        },

        getNumber: function () {
            return this.num
        },

        prev: function () {
            if (this.options.continuous || this.index) {
                this.slide(this.index - 1)
            }
        },

        next: function () {
            if (this.options.continuous || this.index < this.num - 1) {
                this.slide(this.index + 1)
            }
        },

        play: function (time) {
            var that = this
            window.clearTimeout(this.timeout)
            this.interval = time || this.options.slideshowInterval
            if (this.elements[this.index] > 1) {
                this.timeout = this.setTimeout(
                    (!this.requestAnimationFrame && this.slide) || function (to, speed) {
                        that.animationFrameId = that.requestAnimationFrame.call(
                            window,
                            function () {
                                that.slide(to, speed)
                            }
                        )
                    },
                    [this.index + 1, this.options.slideshowTransitionSpeed],
                    this.interval
                )
            }
            this.container.addClass(this.options.playingClass)
        },

        pause: function () {
            window.clearTimeout(this.timeout)
            this.interval = null
            this.container.removeClass(this.options.playingClass)
        },

        add: function (list) {
            var i
            if (!list.concat) {
                // Make a real array out of the list to add:
                list = Array.prototype.slice.call(list)
            }
            if (!this.list.concat) {
                // Make a real array out of the Gallery list:
                this.list = Array.prototype.slice.call(this.list)
            }
            this.list = this.list.concat(list)
            this.num = this.list.length
            if (this.num > 2 && this.options.continuous === null) {
                this.options.continuous = true
                this.container.removeClass(this.options.leftEdgeClass)
            }
            this.container
                .removeClass(this.options.rightEdgeClass)
                .removeClass(this.options.singleClass)
            for (i = this.num - list.length; i < this.num; i += 1) {
                this.addSlide(i)
                this.positionSlide(i)
            }
            this.positions.length = this.num
            this.initSlides(true)
        },

        resetSlides: function () {
            this.slidesContainer.empty()
            this.unloadAllSlides()
            this.slides = []
        },

        handleClose: function () {
            var options = this.options
            this.destroyEventListeners()
            // Cancel the slideshow:
            this.pause()
            this.container[0].style.display = 'none'
            this.container
                .removeClass(options.displayClass)
                .removeClass(options.singleClass)
                .removeClass(options.leftEdgeClass)
                .removeClass(options.rightEdgeClass)
            if (options.hidePageScrollbars) {
                document.body.style.overflow = this.bodyOverflowStyle
            }
            if (this.options.clearSlides) {
                this.resetSlides()
            }
            if (this.options.onclosed) {
                this.options.onclosed.call(this)
            }
        },

        close: function () {
            var that = this
            function closeHandler (event) {
                if (event.target === that.container[0]) {
                    that.container.off(
                        that.support.transition.end,
                        closeHandler
                    )
                    that.handleClose()
                }
            }
            if (this.options.onclose) {
                this.options.onclose.call(this)
            }
            if (this.support.transition && this.options.displayTransition) {
                this.container.on(
                    this.support.transition.end,
                    closeHandler
                )
                this.container.removeClass(this.options.displayClass)
            } else {
                this.handleClose()
            }
        },

        circle: function (index) {
            // Always return a number inside of the slides index range:
            return (this.num + (index % this.num)) % this.num
        },

        move: function (index, dist, speed) {
            this.translateX(index, dist, speed)
            this.positions[index] = dist
        },

        translate: function (index, x, y, speed) {
            var style = this.slides[index].style
            var transition = this.support.transition
            var transform = this.support.transform
            style[transition.name + 'Duration'] = speed + 'ms'
            style[transform.name] = 'translate(' + x + 'px, ' + y + 'px)' +
                (transform.translateZ ? ' translateZ(0)' : '')
        },

        translateX: function (index, x, speed) {
            this.translate(index, x, 0, speed)
        },

        translateY: function (index, y, speed) {
            this.translate(index, 0, y, speed)
        },

        animate: function (from, to, speed) {
            if (!speed) {
                this.slidesContainer[0].style.left = to + 'px'
                return
            }
            var that = this
            var start = new Date().getTime()
            var timer = window.setInterval(function () {
                var timeElap = new Date().getTime() - start
                if (timeElap > speed) {
                    that.slidesContainer[0].style.left = to + 'px'
                    that.ontransitionend()
                    window.clearInterval(timer)
                    return
                }
                that.slidesContainer[0].style.left = (((to - from) *
                    (Math.floor((timeElap / speed) * 100) / 100)) +
                    from) + 'px'
            }, 4)
        },

        preventDefault: function (event) {
            if (event.preventDefault) {
                event.preventDefault()
            } else {
                event.returnValue = false
            }
        },

        stopPropagation: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }
        },

        onresize: function () {
            this.initSlides(true)
        },

        onmousedown: function (event) {
            // Trigger on clicks of the left mouse button only
            // and exclude video elements:
            if (event.which && event.which === 1 &&
                event.target.nodeName !== 'VIDEO') {
                // Preventing the default mousedown action is required
                // to make touch emulation work with Firefox:
                event.preventDefault()
                ;(event.originalEvent || event).touches = [{
                    pageX: event.pageX,
                    pageY: event.pageY
                }]
                this.ontouchstart(event)
            }
        },

        onmousemove: function (event) {
            if (this.touchStart) {
                (event.originalEvent || event).touches = [{
                    pageX: event.pageX,
                    pageY: event.pageY
                }]
                this.ontouchmove(event)
            }
        },

        onmouseup: function (event) {
            if (this.touchStart) {
                this.ontouchend(event)
                delete this.touchStart
            }
        },

        onmouseout: function (event) {
            if (this.touchStart) {
                var target = event.target
                var related = event.relatedTarget
                if (!related || (related !== target &&
                    !$.contains(target, related))) {
                    this.onmouseup(event)
                }
            }
        },

        ontouchstart: function (event) {
            if (this.options.stopTouchEventsPropagation) {
                this.stopPropagation(event)
            }
            // jQuery doesn't copy touch event properties by default,
            // so we have to access the originalEvent object:
            var touches = (event.originalEvent || event).touches[0]
            this.touchStart = {
                // Remember the initial touch coordinates:
                x: touches.pageX,
                y: touches.pageY,
                // Store the time to determine touch duration:
                time: Date.now()
            }
            // Helper variable to detect scroll movement:
            this.isScrolling = undefined
            // Reset delta values:
            this.touchDelta = {}
        },

        ontouchmove: function (event) {
            if (this.options.stopTouchEventsPropagation) {
                this.stopPropagation(event)
            }
            // jQuery doesn't copy touch event properties by default,
            // so we have to access the originalEvent object:
            var touches = (event.originalEvent || event).touches[0]
            var scale = (event.originalEvent || event).scale
            var index = this.index
            var touchDeltaX
            var indices
            // Ensure this is a one touch swipe and not, e.g. a pinch:
            if (touches.length > 1 || (scale && scale !== 1)) {
                return
            }
            if (this.options.disableScroll) {
                event.preventDefault()
            }
            // Measure change in x and y coordinates:
            this.touchDelta = {
                x: touches.pageX - this.touchStart.x,
                y: touches.pageY - this.touchStart.y
            }
            touchDeltaX = this.touchDelta.x
            // Detect if this is a vertical scroll movement (run only once per touch):
            if (this.isScrolling === undefined) {
                this.isScrolling = this.isScrolling ||
                    Math.abs(touchDeltaX) < Math.abs(this.touchDelta.y)
            }
            if (!this.isScrolling) {
                // Always prevent horizontal scroll:
                event.preventDefault()
                // Stop the slideshow:
                window.clearTimeout(this.timeout)
                if (this.options.continuous) {
                    indices = [
                        this.circle(index + 1),
                        index,
                        this.circle(index - 1)
                    ]
                } else {
                    // Increase resistance if first slide and sliding left
                    // or last slide and sliding right:
                    this.touchDelta.x = touchDeltaX =
                        touchDeltaX /
                        (
                            ((!index && touchDeltaX > 0) ||
                            (index === this.num - 1 && touchDeltaX < 0))
                                ? (Math.abs(touchDeltaX) / this.slideWidth + 1)
                                : 1
                        )
                    indices = [index]
                    if (index) {
                        indices.push(index - 1)
                    }
                    if (index < this.num - 1) {
                        indices.unshift(index + 1)
                    }
                }
                while (indices.length) {
                    index = indices.pop()
                    this.translateX(index, touchDeltaX + this.positions[index], 0)
                }
            } else if (this.options.closeOnSwipeUpOrDown) {
                this.translateY(index, this.touchDelta.y + this.positions[index], 0)
            }
        },

        ontouchend: function (event) {
            if (this.options.stopTouchEventsPropagation) {
                this.stopPropagation(event)
            }
            var index = this.index
            var speed = this.options.transitionSpeed
            var slideWidth = this.slideWidth
            var isShortDuration = Number(Date.now() - this.touchStart.time) < 250
            // Determine if slide attempt triggers next/prev slide:
            var isValidSlide =
                (isShortDuration && Math.abs(this.touchDelta.x) > 20) ||
                Math.abs(this.touchDelta.x) > slideWidth / 2
            // Determine if slide attempt is past start or end:
            var isPastBounds = (!index && this.touchDelta.x > 0) ||
                (index === this.num - 1 && this.touchDelta.x < 0)
            var isValidClose = !isValidSlide && this.options.closeOnSwipeUpOrDown &&
                ((isShortDuration && Math.abs(this.touchDelta.y) > 20) ||
                Math.abs(this.touchDelta.y) > this.slideHeight / 2)
            var direction
            var indexForward
            var indexBackward
            var distanceForward
            var distanceBackward
            if (this.options.continuous) {
                isPastBounds = false
            }
            // Determine direction of swipe (true: right, false: left):
            direction = this.touchDelta.x < 0 ? -1 : 1
            if (!this.isScrolling) {
                if (isValidSlide && !isPastBounds) {
                    indexForward = index + direction
                    indexBackward = index - direction
                    distanceForward = slideWidth * direction
                    distanceBackward = -slideWidth * direction
                    if (this.options.continuous) {
                        this.move(this.circle(indexForward), distanceForward, 0)
                        this.move(this.circle(index - 2 * direction), distanceBackward, 0)
                    } else if (indexForward >= 0 &&
                        indexForward < this.num) {
                        this.move(indexForward, distanceForward, 0)
                    }
                    this.move(index, this.positions[index] + distanceForward, speed)
                    this.move(
                        this.circle(indexBackward),
                        this.positions[this.circle(indexBackward)] + distanceForward,
                        speed
                    )
                    index = this.circle(indexBackward)
                    this.onslide(index)
                } else {
                    // Move back into position
                    if (this.options.continuous) {
                        this.move(this.circle(index - 1), -slideWidth, speed)
                        this.move(index, 0, speed)
                        this.move(this.circle(index + 1), slideWidth, speed)
                    } else {
                        if (index) {
                            this.move(index - 1, -slideWidth, speed)
                        }
                        this.move(index, 0, speed)
                        if (index < this.num - 1) {
                            this.move(index + 1, slideWidth, speed)
                        }
                    }
                }
            } else {
                if (isValidClose) {
                    this.close()
                } else {
                    // Move back into position
                    this.translateY(index, 0, speed)
                }
            }
        },

        ontouchcancel: function (event) {
            if (this.touchStart) {
                this.ontouchend(event)
                delete this.touchStart
            }
        },

        ontransitionend: function (event) {
            var slide = this.slides[this.index]
            if (!event || slide === event.target) {
                if (this.interval) {
                    this.play()
                }
                this.setTimeout(
                    this.options.onslideend,
                    [this.index, slide]
                )
            }
        },

        oncomplete: function (event) {
            var target = event.target || event.srcElement
            var parent = target && target.parentNode
            var index
            if (!target || !parent) {
                return
            }
            index = this.getNodeIndex(parent)
            $(parent).removeClass(this.options.slideLoadingClass)
            if (event.type === 'error') {
                $(parent).addClass(this.options.slideErrorClass)
                this.elements[index] = 3 // Fail
            } else {
                this.elements[index] = 2 // Done
            }
            // Fix for IE7's lack of support for percentage max-height:
            if (target.clientHeight > this.container[0].clientHeight) {
                target.style.maxHeight = this.container[0].clientHeight
            }
            if (this.interval && this.slides[this.index] === parent) {
                this.play()
            }
            this.setTimeout(
                this.options.onslidecomplete,
                [index, parent]
            )
        },

        onload: function (event) {
            this.oncomplete(event)
        },

        onerror: function (event) {
            this.oncomplete(event)
        },

        onkeydown: function (event) {
            switch (event.which || event.keyCode) {
                case 13: // Return
                    if (this.options.toggleControlsOnReturn) {
                        this.preventDefault(event)
                        this.toggleControls()
                    }
                    break
                case 27: // Esc
                    if (this.options.closeOnEscape) {
                        this.close()
                        // prevent Esc from closing other things
                        event.stopImmediatePropagation()
                    }
                    break
                case 32: // Space
                    if (this.options.toggleSlideshowOnSpace) {
                        this.preventDefault(event)
                        this.toggleSlideshow()
                    }
                    break
                case 37: // Left
                    if (this.options.enableKeyboardNavigation) {
                        this.preventDefault(event)
                        this.prev()
                    }
                    break
                case 39: // Right
                    if (this.options.enableKeyboardNavigation) {
                        this.preventDefault(event)
                        this.next()
                    }
                    break
            }
        },

        handleClick: function (event) {
            var options = this.options
            var target = event.target || event.srcElement
            var parent = target.parentNode
            function isTarget (className) {
                return $(target).hasClass(className) ||
                    $(parent).hasClass(className)
            }
            if (isTarget(options.toggleClass)) {
                // Click on "toggle" control
                this.preventDefault(event)
                this.toggleControls()
            } else if (isTarget(options.prevClass)) {
                // Click on "prev" control
                this.preventDefault(event)
                this.prev()
            } else if (isTarget(options.nextClass)) {
                // Click on "next" control
                this.preventDefault(event)
                this.next()
            } else if (isTarget(options.closeClass)) {
                // Click on "close" control
                this.preventDefault(event)
                this.close()
            } else if (isTarget(options.playPauseClass)) {
                // Click on "play-pause" control
                this.preventDefault(event)
                this.toggleSlideshow()
            } else if (parent === this.slidesContainer[0]) {
                // Click on slide background
                if (options.closeOnSlideClick) {
                    this.preventDefault(event)
                    this.close()
                } else if (options.toggleControlsOnSlideClick) {
                    this.preventDefault(event)
                    this.toggleControls()
                }
            } else if (parent.parentNode &&
                parent.parentNode === this.slidesContainer[0]) {
                // Click on displayed element
                if (options.toggleControlsOnSlideClick) {
                    this.preventDefault(event)
                    this.toggleControls()
                }
            }
        },

        onclick: function (event) {
            if (this.options.emulateTouchEvents &&
                this.touchDelta && (Math.abs(this.touchDelta.x) > 20 ||
                Math.abs(this.touchDelta.y) > 20)) {
                delete this.touchDelta
                return
            }
            return this.handleClick(event)
        },

        updateEdgeClasses: function (index) {
            if (!index) {
                this.container.addClass(this.options.leftEdgeClass)
            } else {
                this.container.removeClass(this.options.leftEdgeClass)
            }
            if (index === this.num - 1) {
                this.container.addClass(this.options.rightEdgeClass)
            } else {
                this.container.removeClass(this.options.rightEdgeClass)
            }
        },

        handleSlide: function (index) {
            if (!this.options.continuous) {
                this.updateEdgeClasses(index)
            }
            this.loadElements(index)
            if (this.options.unloadElements) {
                this.unloadElements(index)
            }
            this.setTitle(index)
        },

        onslide: function (index) {
            this.index = index
            this.handleSlide(index)
            this.setTimeout(this.options.onslide, [index, this.slides[index]])
        },

        setTitle: function (index) {
            var text = this.slides[index].firstChild.title
            var titleElement = this.titleElement
            if (titleElement.length) {
                this.titleElement.empty()
                if (text) {
                    titleElement[0].appendChild(document.createTextNode(text))
                }
            }
        },

        setTimeout: function (func, args, wait) {
            var that = this
            return func && window.setTimeout(function () {
                    func.apply(that, args || [])
                }, wait || 0)
        },

        imageFactory: function (obj, callback) {
            var that = this
            var img = this.imagePrototype.cloneNode(false)
            var url = obj
            var backgroundSize = this.options.stretchImages
            var called
            var element
            var title
            function callbackWrapper (event) {
                if (!called) {
                    event = {
                        type: event.type,
                        target: element
                    }
                    if (!element.parentNode) {
                        // Fix for IE7 firing the load event for
                        // cached images before the element could
                        // be added to the DOM:
                        return that.setTimeout(callbackWrapper, [event])
                    }
                    called = true
                    $(img).off('load error', callbackWrapper)
                    if (backgroundSize) {
                        if (event.type === 'load') {
                            element.style.background = 'url("' + url +
                                '") center no-repeat'
                            element.style.backgroundSize = backgroundSize
                        }
                    }
                    callback(event)
                }
            }
            if (typeof url !== 'string') {
                url = this.getItemProperty(obj, this.options.urlProperty)
                title = this.getItemProperty(obj, this.options.titleProperty)
            }
            if (backgroundSize === true) {
                backgroundSize = 'contain'
            }
            backgroundSize = this.support.backgroundSize &&
                this.support.backgroundSize[backgroundSize] && backgroundSize
            if (backgroundSize) {
                element = this.elementPrototype.cloneNode(false)
            } else {
                element = img
                img.draggable = false
            }
            if (title) {
                element.title = title
            }
            $(img).on('load error', callbackWrapper)
            img.src = url
            return element
        },

        createElement: function (obj, callback) {
            var type = obj && this.getItemProperty(obj, this.options.typeProperty)
            var factory = (type && this[type.split('/')[0] + 'Factory']) ||
                this.imageFactory
            var element = obj && factory.call(this, obj, callback)
            var srcset = this.getItemProperty(obj, this.options.srcsetProperty)
            if (!element) {
                element = this.elementPrototype.cloneNode(false)
                this.setTimeout(callback, [{
                    type: 'error',
                    target: element
                }])
            }
            if (srcset) {
                element.setAttribute('srcset', srcset)
            }
            $(element).addClass(this.options.slideContentClass)
            return element
        },

        loadElement: function (index) {
            if (!this.elements[index]) {
                if (this.slides[index].firstChild) {
                    this.elements[index] = $(this.slides[index])
                        .hasClass(this.options.slideErrorClass) ? 3 : 2
                } else {
                    this.elements[index] = 1 // Loading
                    $(this.slides[index]).addClass(this.options.slideLoadingClass)
                    this.slides[index].appendChild(this.createElement(
                        this.list[index],
                        this.proxyListener
                    ))
                }
            }
        },

        loadElements: function (index) {
            var limit = Math.min(this.num, this.options.preloadRange * 2 + 1)
            var j = index
            var i
            for (i = 0; i < limit; i += 1) {
                // First load the current slide element (0),
                // then the next one (+1),
                // then the previous one (-2),
                // then the next after next (+2), etc.:
                j += i * (i % 2 === 0 ? -1 : 1)
                // Connect the ends of the list to load slide elements for
                // continuous navigation:
                j = this.circle(j)
                this.loadElement(j)
            }
        },

        unloadElements: function (index) {
            var i,
                diff
            for (i in this.elements) {
                if (this.elements.hasOwnProperty(i)) {
                    diff = Math.abs(index - i)
                    if (diff > this.options.preloadRange &&
                        diff + this.options.preloadRange < this.num) {
                        this.unloadSlide(i)
                        delete this.elements[i]
                    }
                }
            }
        },

        addSlide: function (index) {
            var slide = this.slidePrototype.cloneNode(false)
            slide.setAttribute('data-index', index)
            this.slidesContainer[0].appendChild(slide)
            this.slides.push(slide)
        },

        positionSlide: function (index) {
            var slide = this.slides[index]
            slide.style.width = this.slideWidth + 'px'
            if (this.support.transform) {
                slide.style.left = (index * -this.slideWidth) + 'px'
                this.move(
                    index, this.index > index
                        ? -this.slideWidth
                        : (this.index < index ? this.slideWidth : 0),
                    0
                )
            }
        },

        initSlides: function (reload) {
            var clearSlides,
                i
            if (!reload) {
                this.positions = []
                this.positions.length = this.num
                this.elements = {}
                this.imagePrototype = document.createElement('img')
                this.elementPrototype = document.createElement('div')
                this.slidePrototype = document.createElement('div')
                $(this.slidePrototype).addClass(this.options.slideClass)
                this.slides = this.slidesContainer[0].children
                clearSlides = this.options.clearSlides ||
                    this.slides.length !== this.num
            }
            this.slideWidth = this.container[0].offsetWidth
            this.slideHeight = this.container[0].offsetHeight
            this.slidesContainer[0].style.width =
                (this.num * this.slideWidth) + 'px'
            if (clearSlides) {
                this.resetSlides()
            }
            for (i = 0; i < this.num; i += 1) {
                if (clearSlides) {
                    this.addSlide(i)
                }
                this.positionSlide(i)
            }
            // Reposition the slides before and after the given index:
            if (this.options.continuous && this.support.transform) {
                this.move(this.circle(this.index - 1), -this.slideWidth, 0)
                this.move(this.circle(this.index + 1), this.slideWidth, 0)
            }
            if (!this.support.transform) {
                this.slidesContainer[0].style.left =
                    (this.index * -this.slideWidth) + 'px'
            }
        },

        unloadSlide: function (index) {
            var slide,
                firstChild
            slide = this.slides[index]
            firstChild = slide.firstChild
            if (firstChild !== null) {
                slide.removeChild(firstChild)
            }
        },

        unloadAllSlides: function () {
            var i,
                len
            for (i = 0, len = this.slides.length; i < len; i++) {
                this.unloadSlide(i)
            }
        },

        toggleControls: function () {
            var controlsClass = this.options.controlsClass
            if (this.container.hasClass(controlsClass)) {
                this.container.removeClass(controlsClass)
            } else {
                this.container.addClass(controlsClass)
            }
        },

        toggleSlideshow: function () {
            if (!this.interval) {
                this.play()
            } else {
                this.pause()
            }
        },

        getNodeIndex: function (element) {
            return parseInt(element.getAttribute('data-index'), 10)
        },

        getNestedProperty: function (obj, property) {
            property.replace(
                // Matches native JavaScript notation in a String,
                // e.g. '["doubleQuoteProp"].dotProp[2]'
                /\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,
                function (str, singleQuoteProp, doubleQuoteProp, arrayIndex, dotProp) {
                    var prop = dotProp || singleQuoteProp || doubleQuoteProp ||
                        (arrayIndex && parseInt(arrayIndex, 10))
                    if (str && obj) {
                        obj = obj[prop]
                    }
                }
            )
            return obj
        },

        getDataProperty: function (obj, property) {
            if (obj.getAttribute) {
                var prop = obj.getAttribute('data-' +
                    property.replace(/([A-Z])/g, '-$1').toLowerCase())
                if (typeof prop === 'string') {
                    if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/
                            .test(prop)) {
                        try {
                            return $.parseJSON(prop)
                        } catch (ignore) {}
                    }
                    return prop
                }
            }
        },

        getItemProperty: function (obj, property) {
            var prop = obj[property]
            if (prop === undefined) {
                prop = this.getDataProperty(obj, property)
                if (prop === undefined) {
                    prop = this.getNestedProperty(obj, property)
                }
            }
            return prop
        },

        initStartIndex: function () {
            var index = this.options.index
            var urlProperty = this.options.urlProperty
            var i
            // Check if the index is given as a list object:
            if (index && typeof index !== 'number') {
                for (i = 0; i < this.num; i += 1) {
                    if (this.list[i] === index ||
                        this.getItemProperty(this.list[i], urlProperty) ===
                        this.getItemProperty(index, urlProperty)) {
                        index = i
                        break
                    }
                }
            }
            // Make sure the index is in the list range:
            this.index = this.circle(parseInt(index, 10) || 0)
        },

        initEventListeners: function () {
            var that = this
            var slidesContainer = this.slidesContainer
            function proxyListener (event) {
                var type = that.support.transition &&
                that.support.transition.end === event.type
                    ? 'transitionend'
                    : event.type
                that['on' + type](event)
            }
            $(window).on('resize', proxyListener)
            $(document.body).on('keydown', proxyListener)
            this.container.on('click', proxyListener)
            if (this.support.touch) {
                slidesContainer
                    .on('touchstart touchmove touchend touchcancel', proxyListener)
            } else if (this.options.emulateTouchEvents &&
                this.support.transition) {
                slidesContainer
                    .on('mousedown mousemove mouseup mouseout', proxyListener)
            }
            if (this.support.transition) {
                slidesContainer.on(
                    this.support.transition.end,
                    proxyListener
                )
            }
            this.proxyListener = proxyListener
        },

        destroyEventListeners: function () {
            var slidesContainer = this.slidesContainer
            var proxyListener = this.proxyListener
            $(window).off('resize', proxyListener)
            $(document.body).off('keydown', proxyListener)
            this.container.off('click', proxyListener)
            if (this.support.touch) {
                slidesContainer
                    .off('touchstart touchmove touchend touchcancel', proxyListener)
            } else if (this.options.emulateTouchEvents &&
                this.support.transition) {
                slidesContainer
                    .off('mousedown mousemove mouseup mouseout', proxyListener)
            }
            if (this.support.transition) {
                slidesContainer.off(
                    this.support.transition.end,
                    proxyListener
                )
            }
        },

        handleOpen: function () {
            if (this.options.onopened) {
                this.options.onopened.call(this)
            }
        },

        initWidget: function () {
            var that = this
            function openHandler (event) {
                if (event.target === that.container[0]) {
                    that.container.off(
                        that.support.transition.end,
                        openHandler
                    )
                    that.handleOpen()
                }
            }
            this.container = $(this.options.container)
            if (!this.container.length) {
                this.console.log(
                    'blueimp Gallery: Widget container not found.',
                    this.options.container
                )
                return false
            }
            this.slidesContainer = this.container.find(
                this.options.slidesContainer
            ).first()
            if (!this.slidesContainer.length) {
                this.console.log(
                    'blueimp Gallery: Slides container not found.',
                    this.options.slidesContainer
                )
                return false
            }
            this.titleElement = this.container.find(
                this.options.titleElement
            ).first()
            if (this.num === 1) {
                this.container.addClass(this.options.singleClass)
            }
            if (this.options.onopen) {
                this.options.onopen.call(this)
            }
            if (this.support.transition && this.options.displayTransition) {
                this.container.on(
                    this.support.transition.end,
                    openHandler
                )
            } else {
                this.handleOpen()
            }
            if (this.options.hidePageScrollbars) {
                // Hide the page scrollbars:
                this.bodyOverflowStyle = document.body.style.overflow
                document.body.style.overflow = 'hidden'
            }
            this.container[0].style.display = 'block'
            this.initSlides()
            this.container.addClass(this.options.displayClass)
        },

        initOptions: function (options) {
            // Create a copy of the prototype options:
            this.options = $.extend({}, this.options)
            // Check if carousel mode is enabled:
            if ((options && options.carousel) ||
                (this.options.carousel && (!options || options.carousel !== false))) {
                $.extend(this.options, this.carouselOptions)
            }
            // Override any given options:
            $.extend(this.options, options)
            if (this.num < 3) {
                // 1 or 2 slides cannot be displayed continuous,
                // remember the original option by setting to null instead of false:
                this.options.continuous = this.options.continuous ? null : false
            }
            if (!this.support.transition) {
                this.options.emulateTouchEvents = false
            }
            if (this.options.event) {
                this.preventDefault(this.options.event)
            }
        }

    })

    return Gallery
}))
;
/**
 * Header animation
 */

define('layout/header_login',[
    'jquery',
    'app/util'
], ($, Util) => {
    'use strict';

    let config = {
        headerId: 'pf-landing-top',                                 // id for page header
        canvasId: 'pf-header-canvas',                               // id for canvas background
        previewElementClass: 'pf-header-preview-element'            // class for "preview" elements
    };

    class Color {
        constructor(r, g, b, a = 1){
            this._r = r;
            this._g = g;
            this._b = b;
            this._a = a;
        }

        get r(){
            return this._r;
        }

        get g(){
            return this._g;
        }

        get b(){
            return this._b;
        }

        style(a = this.a){
            return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
        }
    }

    class Node {
        constructor(x, y, ctx, config = {}){
            this._anchorX = x;
            this._anchorY = y;
            this._ctx = ctx;
            this._config = config;
            this._x = Math.random() * (x - (x - this._config.anchorLength)) + (x - this._config.anchorLength);
            this._y = Math.random() * (y - (y - this._config.anchorLength)) + (y - this._config.anchorLength);
            this._vx = Math.random() * 2 - 1;
            this._vy = Math.random() * 2 - 1;
            this._energy = Math.random() * 100;
            this._radius = Math.random();
            this._siblings = [];
            this._brightness = 0;
            this._isPointer = false;
        }

        set x(x){
            this._x = x;
        }

        get x(){
            return this._x;
        }

        set y(y){
            this._y = y;
        }

        get y(){
            return this._y;
        }

        set siblings(siblings){
            this._siblings = siblings;
        }

        get siblings(){
            return this._siblings;
        }

        get radius(){
            if(this.isPointer){
                return 3;
            }
            return 2 * this._radius + 2 * this._siblings.length / this._config.siblingsLimit;
        }

        set brightness(brightness){
            this._brightness = brightness;
        }

        get brightness(){
            return this.isPointer ? 1 : this._brightness;
        }

        set color(color){
            this._color = color;
        }

        get color(){
            return this._color;
        }

        set isPointer(isPointer){
            this._isPointer = isPointer;
        }

        get isPointer(){
            return this._isPointer;
        }

        drawNode(){
            this._ctx.beginPath();
            this._ctx.arc(this.x, this.y, this.radius, 0, StarCanvas.circ);
            this._ctx.fillStyle = this.color.style(this.brightness * this._config.brightnessMultiplierNode);
            this._ctx.fill();
        }

        drawConnections(){
            for(let i = 0; i < this._siblings.length; i++){
                this._ctx.beginPath();
                this._ctx.moveTo(this.x, this.y);
                this._ctx.lineTo(this._siblings[i].x, this._siblings[i].y);
                this._ctx.lineWidth = 1 - StarCanvas.calcDistance(this, this._siblings[i]) / this._config.sensitivity;
                if(this.color === this._siblings[i].color){
                    // no gradient
                    this._ctx.strokeStyle = this.color.style(this.brightness * this._config.brightnessMultiplierConnection);
                }else{
                    // gradient
                    this._ctx.strokeStyle = this.gradient(this._siblings[i], StarCanvas.lineStyle(this, this._siblings[i])) ;
                }
                this._ctx.stroke();
            }
        }

        gradient(node2, midColor){
            let grad = this._ctx.createLinearGradient(Math.floor(this.x), Math.floor(this.y), Math.floor(node2.x), Math.floor(node2.y));
            grad.addColorStop(0, this.color.style(this.brightness * this._config.brightnessMultiplierConnection));
            grad.addColorStop(0.5, midColor);
            grad.addColorStop(1, node2.color.style(node2.brightness * this._config.brightnessMultiplierConnection));
            return grad;
        }

        moveNode(){
            this._energy -= 2;
            if(this._energy < 1){
                this._energy = Math.random() * 100;
                if(this.x - this._anchorX < -this._config.anchorLength){
                    this._vx = Math.random() * 2;
                }else if(this.x - this._anchorX > this._config.anchorLength){
                    this._vx = Math.random() * -2;
                }else{
                    this._vx = Math.random() * 4 - 2;
                }
                if(this.y - this._anchorY < -this._config.anchorLength){
                    this._vy = Math.random() * 2;
                }else if (this.y - this._anchorY > this._config.anchorLength){
                    this._vy = Math.random() * -2;
                }else{
                    this._vy = Math.random() * 4 - 2;
                }
            }
            this.x += this._vx * this._energy / 100;
            this.y += this._vy * this._energy / 100;
        }
    }

    class StarCanvas {
        constructor(canvas, config = {}) {
            this._canvas = canvas;
            this._config = Object.assign({}, new.target.defaultConfig, config);
            this._nodes = [];
            this._nodesQty = 0;
            this._updateActive = true;
            this._minWait = Math.floor(1 / this._config.fps * 1000);

            this.resizeWindow();
            this._mouse = this._config.startCoordinates(this._canvas);

            this._ctx = this._canvas.getContext('2d', {
                alpha: true,
                desynchronized: false,
                preserveDrawingBuffer: true
            });
            this.initHandlers();

            // must be bind to this instance -> https://stackoverflow.com/a/46014225/4329969
            this.onPointerDown = this.onPointerDown.bind(this);
            this.onPointerOver = this.onPointerOver.bind(this);
            this.onPointerEnter = this.onPointerEnter.bind(this);
            this.onPointerOut = this.onPointerOut.bind(this);
            this.onPointerLeave = this.onPointerLeave.bind(this);
            this.onPointerMove = this.onPointerMove.bind(this);

            this.initPointerLock();
            this.initIntersectionObserver();
            this.setColorBase();
            this.initNodes();
            this.redrawCheck();
        }

        setColorBase(){
            // if base color does not change -> re-use same instance for all nodes
            this._colorBase = Array.isArray(this._config.colorBase) ? new Color(...this._config.colorBase) : null;
        }

        isPaused(){
            return (typeof this._config.isPaused === 'function') ? this._config.isPaused(this) : this._config.isPaused;
        }

        eventContainer(){
            return this._config.container ? this._config.container : this._canvas;
        }

        findSiblings(){
            let node1, node2, distance;
            for(let i = 0; i < this._nodesQty; i++){
                node1 = this._nodes[i];
                node1.siblings = [];
                for(let j = 0; j < this._nodesQty; j++){
                    node2 = this._nodes[j];
                    if(node1 !== node2){
                        distance = StarCanvas.calcDistance(node1, node2);
                        if(distance < this._config.sensitivity){
                            if(node1.siblings.length < this._config.siblingsLimit){
                                node1.siblings.push(node2);
                            }else{
                                let node_sibling_distance = 0;
                                let max_distance = 0;
                                let s;
                                for(let k = 0; k < this._config.siblingsLimit; k++){
                                    node_sibling_distance = StarCanvas.calcDistance(node1, node1.siblings[k]);
                                    if(node_sibling_distance > max_distance){
                                        max_distance = node_sibling_distance;
                                        s = k;
                                    }
                                }
                                if(distance < max_distance){
                                    node1.siblings.splice(s, 1);
                                    node1.siblings.push(node2);
                                }
                            }
                        }
                    }
                }
            }
        }

        redrawScene(){
            //this.resizeWindow();
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this.findSiblings();
            // skip nodes move to move if they are outside the visible radius -> performance boost
            let haltRadius = this._config.mouseRadius + this._config.anchorLength;
            // mouse pointer node moves on mousemove
            this._pointerNode.x = this._mouse.x;
            this._pointerNode.y = this._mouse.y;
            let skipNodesMove = [0]; // pointer node

            let i, node, distance;
            for(i = 0; i < this._nodesQty; i++){
                node = this._nodes[i];
                distance = StarCanvas.calcDistance({
                    x: this._mouse.x,
                    y: this._mouse.y
                }, node);

                if(distance < this._config.mouseRadius){
                    node.brightness = 1 - distance / this._config.mouseRadius;
                }else{
                    node.brightness = 0;
                }

                if(distance > haltRadius){
                    skipNodesMove.push(i);
                }
                skipNodesMove = [];
            }

            for(i = 0; i < this._nodesQty; i++){
                node = this._nodes[i];
                if(node.brightness){
                    node.drawNode();
                    node.drawConnections();
                }

                if(!skipNodesMove.includes(i)){
                    node.moveNode();
                }
            }
        }

        redrawCheck(){
            if(this._animationFrameId){
                cancelAnimationFrame(this._animationFrameId);
            }

            this._animationFrameId = requestAnimationFrame(() => {
                let now = Date.now();

                if(
                    this._updateActive && !this.isPaused() &&
                    now - (this._lastRender || 0) >= this._minWait
                ){
                    this._lastRender = now;
                    this.redrawScene();
                }


                this._animationFrameId = null;
                this.redrawCheck();
            });
        }

        initNodes(){
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this._nodes = [];
            for(let i = this._config.density; i < this._canvas.width; i += this._config.density) {
                for(let j = this._config.density; j < this._canvas.height; j += this._config.density) {
                    let node = new Node(i, j, this._ctx, this._config);
                    if(typeof this._config.colorBase === 'function'){
                        node.color = this._config.colorBase(node, this);
                    }else{
                        node.color = this._colorBase;
                    }
                    this._nodes.push(node);
                    this._nodesQty++;
                }
            }

            // mouse cursor node
            this._pointerNode = new Node(
                this._mouse.x,
                this._mouse.y,
                this._ctx,
                this._config
            );
            this._pointerNode.color = new Color(...this._config.colorCursor);
            this._pointerNode.brightness = 1;
            this._pointerNode.isPointer = true;
            this._nodes.unshift(this._pointerNode);
            this._nodesQty++;
        }

        initHandlers(){
            let passive = true;
            this.eventContainer().addEventListener('pointerover', e => this.onPointerOver(e), {passive: passive});
            this.eventContainer().addEventListener('pointerenter', e => this.onPointerEnter(e), {passive: passive});

            this.eventContainer().addEventListener('pointermove', e => this.onPointerMove(e), {passive: passive});

            this.eventContainer().addEventListener('pointerout', e => this.onPointerOut(e), {passive: passive});
            this.eventContainer().addEventListener('pointerleave', e => this.onPointerLeave(e), {passive: passive});
        }

        initPointerLock(){
            if(!this._config.pointerLock){
                return;
            }

            let lockChange = (e) => {
                if(document.pointerLockElement === this._canvas){
                    this.eventContainer().classList.add(this._config.pointerLockedClass);
                    //this.eventContainer().addEventListener('pointermove', this.onPointerMove, {passive: true});
                }else{
                    this.eventContainer().classList.remove(this._config.pointerLockedClass);
                    //this.eventContainer().removeEventListener('pointermove', this.onPointerMove, {passive: true});
                }
            };

            //this._canvas.requestPointerLock()
            this._canvas.addEventListener('pointerdown', this.onPointerDown, false);

            document.addEventListener('pointerlockchange', lockChange, false);
        }

        initIntersectionObserver(){
            let intersectionCallback = entries => {
                let visiblePct = Math.floor(entries[0].intersectionRatio * 100);
                this._updateActive = visiblePct > 0;
            };

            this._intersectionObserver = new IntersectionObserver(intersectionCallback, {
                threshold: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]
            });
            this._intersectionObserver.observe(this._canvas);
        }

        mousemoveHandler(e){
            this._mouse.x = e.clientX;
            this._mouse.y = e.clientY;
        }

        onPointerMove(e){
            e.preventDefault();
            let x = this._mouse.x + Math.floor(e.movementX);
            let y = this._mouse.y + Math.floor(e.movementY);

            this._mouse.x = Math.min(this._canvas.width, Math.max(0, x));
            this._mouse.y = Math.min(this._canvas.height, Math.max(0, y));

            /*
            if(x !== this._mouse.x || y !== this._mouse.y){
                // cursor outside canvas
                document.exitPointerLock();
            }
            */
        }

        onPointerDown(e){
            this._mouse.x = e.clientX;
            this._mouse.y = e.clientY;
            if(document.pointerLockElement === this._canvas){
                document.exitPointerLock();
            }else{
                this._canvas.requestPointerLock();
            }
        }

        onPointerOver(e){
            e.preventDefault();
            this._mouse.x = e.clientX;
            this._mouse.y = e.clientY;
        }

        onPointerEnter(e){}

        onPointerOut(e){}

        onPointerLeave(e){
            e.preventDefault();
            document.exitPointerLock();
        }

        resizeWindow(){
            let dimension = this._config.newDimension(this);
            this._canvas.width = dimension.width;
            this._canvas.height = dimension.height;
        }
    }

    StarCanvas.circ = 2 * Math.PI;

    StarCanvas.calcDistance = (node1, node2) => {
        return Math.sqrt(Math.pow(node1.x - node2.x, 2) + (Math.pow(node1.y - node2.y, 2)));
    };

    StarCanvas.lineStyle = (node1, node2) => {
        let r = StarCanvas.mixComponents(node1.color.r, node2.color.r, node1.radius, node2.radius);
        let g = StarCanvas.mixComponents(node1.color.g, node2.color.g, node1.radius, node2.radius);
        let b = StarCanvas.mixComponents(node1.color.b, node2.color.b, node1.radius, node2.radius);
        let a = (node1.brightness + node2.brightness) / 2;
        return `rgba(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)}, ${a})`;
    };

    StarCanvas.mixComponents = (comp1, comp2, weight1, weight2) => {
        return (comp1*weight1 + comp2*weight2) / (weight1 + weight2);
    };

    StarCanvas.getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    };


    StarCanvas.defaultConfig = {
        pointerLockedClass: 'pointer-locked',
        // limit render interval to max fps
        // lower fps == less CPU
        fps: 80,
        // how close next node must be to activate connection (in px)
        // shorter distance == better connection (line width)
        sensitivity: 90,
        // note that siblings limit is not 'accurate' as the node can actually have more connections than this value
        // that's because the node accepts sibling nodes with no regard to their current connections this is acceptable
        // because potential fix would not result in significant visual difference
        // more siblings == bigger node
        siblingsLimit: 15,
        // default node margin
        density: 50,
        // avoid nodes spreading
        anchorLength: 80,
        // highlight radius
        mouseRadius: 150,
        // values < 1 will lower the calculated node brightness [0-1]
        brightnessMultiplierNode: 1,
        // values < 1 will lower the calculated connection brightness [0-1]
        brightnessMultiplierConnection: 1,
        colorBase: [108, 174, 173],     // teal
        colorCursor: [226, 138, 13],    // orange
        // callback for canvas dimension re-calc
        newDimension: () => ({width: window.innerWidth, height: window.innerHeight}),
        // start coordinates (before mouse move)
        startCoordinates: canvas => ({
            x: canvas.width / 2,
            y: canvas.height / 2
        }),
        // callback/boolean to pause canvas updated (e.g. while page scroll). Better scroll performance
        isPaused: false,
        // wrapper container for pointer events (e.g. document)
        container: false,
        // enables Pointer Lock API - https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
        pointerLock: true
    };

    // custom configuration -------------------------------------------------------------------------------------------
    let defaultConfig = {
        brightnessMultiplierConnection: 0.95,
        colorCursor: [200,  184,  71], // yellow dark
        newDimension: starCanvas => ({
            width: window.innerWidth,
            height: 354 // max height + 1px border
        }),
        startCoordinates: canvas => ({
            x: canvas.width / 2 + 500,
            y: canvas.height / 2 + 50
        }),
        isPaused: () => document.body.classList.contains('on-scroll'),
        container: document.getElementById(config.headerId)
    };

    if(navigator.userAgent.indexOf('Chrome') > -1){
        // Chrome user
        Object.assign(defaultConfig, {
            sensitivity: 85,
            siblingsLimit: 10,
            density: 60,
            anchorLength: 20,
            colorBase: (node, instance) => {
                let colorId = StarCanvas.getRandomIntInclusive(0, 4);
                let colorKey = `_randColor${colorId}`;
                if(instance[colorKey]){
                    return instance[colorKey];
                }

                let rgb = StarCanvas.defaultConfig.colorBase;
                switch(colorId){
                    case 1: rgb = [ 92, 184,  92]; break; // green
                    case 2: rgb = [ 68, 170, 130]; break; // aqua
                    case 3: rgb = [194, 118,  12]; break; // orange dark
                    case 4: rgb = StarCanvas.defaultConfig.colorBase; break;
                }

                instance[colorKey] = new Color(...rgb);
                return instance[colorKey];
            }
        });
    }else{
        // Non Chrome user
        Object.assign(defaultConfig, {
            sensitivity: 85,
            siblingsLimit: 6,
            density: 60,
            anchorLength: 20,
            mouseRadius: 120
        });
    }

    let init = () => {

        let canvas = document.getElementById(config.canvasId);
        // not on mobile
        if(canvas){
            let starCanvasInstance = new StarCanvas(canvas, defaultConfig);
            canvas.classList.add('in');

            // watch for resize
            Util.getResizeManager().observe(
                canvas.parentNode,
                (el, contentRect) => {
                    // ignore "height" change (css transition) (no canvas repaint)
                    if(canvas.width !== contentRect.width){
                        starCanvasInstance.resizeWindow();
                    }
                },
                {debounce: true, ms: 260}
            );
        }
    };

    return {
        init
    };
});
/**
 *  user settings/share dialog
 */

define('dialog/account_settings',[
    'jquery',
    'app/init',
    'app/util',
    'bootbox'
], ($, Init, Util, bootbox) => {
    'use strict';

    let config = {
        // select character dialog
        settingsDialogId: 'pf-settings-dialog',                                 // id for "settings" dialog
        settingsAccountContainerId: 'pf-settings-dialog-account',               // id for the "account" container
        settingsShareContainerId: 'pf-settings-dialog-share',                   // id for the "share" container
        settingsCharacterContainerId: 'pf-settings-dialog-character',           // id for the "character" container

        // captcha
        captchaKeyUpdateAccount: 'SESSION.CAPTCHA.ACCOUNT.UPDATE',              // key for captcha reason
        captchaImageWrapperId: 'pf-dialog-captcha-wrapper',                     // id for "captcha image" wrapper
        captchaImageId: 'pf-dialog-captcha-image',                              // id for "captcha image"

        loadingOptions: {                                                       // config for loading overlay
            icon: {
                size: 'fa-2x'
            }
        }
    };

    /**
     * show "register/settings" dialog
     * @returns {boolean}
     */
    $.fn.showSettingsDialog = function(){

        // check if there are other dialogs open
        let openDialogs = Util.getOpenDialogs();
        if(openDialogs.length > 0){
            return false;
        }

        requirejs(['text!templates/dialog/settings.html', 'mustache'], function(template, Mustache){

            let data = {
                id: config.settingsDialogId,
                settingsAccountContainerId: config.settingsAccountContainerId,
                settingsShareContainerId: config.settingsShareContainerId,
                settingsCharacterContainerId: config.settingsCharacterContainerId,
                userData: Init.currentUserData,
                captchaImageWrapperId: config.captchaImageWrapperId,
                captchaImageId: config.captchaImageId,
                formErrorContainerClass: Util.config.formErrorContainerClass,
                ccpImageServer: Init.url.ccpImageServer,
                roleLabel: Util.getLabelByRole(Util.getCurrentCharacterData('role')).prop('outerHTML'),
                characterAutoLocationSelectEnabled: Boolean(Util.getObjVal(Init, 'character.autoLocationSelect')),
                hasRightCorporationShare: Util.hasRight('map_share', 'corporation')
            };

            let content = Mustache.render(template, data);

            let accountSettingsDialog = bootbox.dialog({
                title: 'Account settings',
                message: content,
                show: false,
                buttons: {
                    close: {
                        label: 'cancel',
                        className: 'btn-default'
                    },
                    success: {
                        label: '<i class="fas fa-check fa-fw"></i>&nbsp;save',
                        className: 'btn-success',
                        callback: function(){

                            // get the current active form
                            let form = $('#' + config.settingsDialogId).find('form').filter(':visible');

                            // validate form
                            form.validator('validate');

                            // check whether the form is valid
                            let formValid = form.isValidForm();

                            if(formValid === true){
                                let tabFormValues = form.getFormValues();

                                // send Tab data and store values
                                let requestData = {
                                    formData: tabFormValues
                                };

                                accountSettingsDialog.find('.modal-content').showLoadingAnimation();

                                $.ajax({
                                    type: 'POST',
                                    url: Init.path.saveUserConfig,
                                    data: requestData,
                                    dataType: 'json'
                                }).done(function(responseData){
                                    accountSettingsDialog.find('.modal-content').hideLoadingAnimation();

                                    // set new captcha for any request
                                    // captcha is required for sensitive data (not for all data)
                                    if(
                                        responseData.error &&
                                        responseData.error.length > 0
                                    ){
                                        form.showFormMessage(responseData.error);

                                        $('#' + config.captchaImageWrapperId).showCaptchaImage(config.captchaKeyUpdateAccount, function(){
                                            $('#captcha').resetFormFields();
                                        });
                                    }else{
                                        // store new/updated user data -> update head
                                        if(responseData.userData){
                                            Util.setCurrentUserData(responseData.userData);
                                        }

                                        form.find('.alert').velocity('transition.slideDownOut',{
                                            duration: 500,
                                            complete: function(){
                                                $('#' + config.captchaImageWrapperId).showCaptchaImage(config.captchaKeyUpdateAccount, function(){
                                                    $('#captcha').resetFormFields();
                                                });
                                            }
                                        });

                                        Util.showNotify({title: 'Account saved', type: 'success'});

                                        // close dialog/menu
                                        Util.triggerMenuAction(document, 'Close');
                                        accountSettingsDialog.modal('hide');
                                    }
                                }).fail(function(jqXHR, status, error){
                                    accountSettingsDialog.find('.modal-content').hideLoadingAnimation();

                                    let reason = status + ' ' + error;
                                    Util.showNotify({title: jqXHR.status + ': saveAccountSettings', text: reason, type: 'error'});

                                    // set new captcha for any request
                                    // captcha is required for sensitive data (not for all)
                                    $('#' + config.captchaImageWrapperId).showCaptchaImage(config.captchaKeyUpdateAccount, function(){
                                        $('#captcha').resetFormFields();
                                    });

                                    // check for DB errors
                                    if(jqXHR.status === 500){

                                        if(jqXHR.responseText){
                                            let errorObj = $.parseJSON(jqXHR.responseText);

                                            if(
                                                errorObj.error &&
                                                errorObj.error.length > 0
                                            ){
                                                form.showFormMessage(errorObj.error);
                                            }
                                        }
                                    }

                                    $(document).setProgramStatus('problem');

                                });
                            }

                            return false;
                        }
                    }
                }
            });

            accountSettingsDialog.on('show.bs.modal', function(e){
                // request captcha image and show
                let captchaImageWrapperContainer = $('#' + config.captchaImageWrapperId);
                captchaImageWrapperContainer.showCaptchaImage(config.captchaKeyUpdateAccount);

                // init captcha refresh button
                captchaImageWrapperContainer.find('i').on('click', function(){
                    captchaImageWrapperContainer.showCaptchaImage(config.captchaKeyUpdateAccount);
                });
            });

            // after modal is shown =======================================================================
            accountSettingsDialog.on('shown.bs.modal', function(e){
                let dialogElement = $(this);
                let form = dialogElement.find('form');

                dialogElement.initTooltips();

                form.initFormValidation();

                // init "toggle" switches
                dialogElement.find('input[type="checkbox"][data-toggle="toggle"]').bootstrapToggle({
                    on: '<i class="fas fa-fw fa-check"></i>&nbsp;Enable',
                    off: 'Disable&nbsp;<i class="fas fa-fw fa-ban"></i>',
                    onstyle: 'success',
                    offstyle: 'warning',
                    width: 100,
                    height: 30
                });
            });

            // show dialog
            accountSettingsDialog.modal('show');
        });
    };
});
/**
 *  notification dialog
 */

define('dialog/notification',[
    'jquery',
    'app/init',
    'app/util',
    'bootbox'
], ($, Init, Util, bootbox) => {

    'use strict';

    let config = {

        // shutdown dialog
        notificationDialogId: 'pf-notification-dialog',                                 // id for "notification" dialog
        notificationDialogClass: 'pf-notification-dialog'                               // class for "notification" dialog
    };

    /**
     * show/animate dialog page content
     * @param dialog
     */
    let showPageContent = function(dialog){
        let headlineElement = dialog.find('h1');

        headlineElement.delay(300).velocity('transition.shrinkIn', {
            duration: 500
        }).delay(500);

        headlineElement.velocity({
            scale: 1.05
        }, {
            duration: 600,
            loop: 5
        });
    };

    /**
     * show "notification" dialog
     * @param dialogData
     */
    $.fn.showNotificationDialog = function(dialogData){

        // check if there is already a notification dialog open
        let notificationDialogClassDialoges = $('.' + config.notificationDialogClass);

        if(notificationDialogClassDialoges.length === 0){

            // close all modals
            $('.modal').modal('hide');

            requirejs(['text!templates/dialog/notification.html', 'mustache'], (template, Mustache) => {
                let data = {
                    id: config.notificationDialogId,
                    content: dialogData.content
                };

                let content = Mustache.render(template, data);

                // show dialog
                let shutdownDialog = bootbox.dialog({
                    title: dialogData.content.title,
                    message: content,
                    className: config.notificationDialogClass,
                    buttons: dialogData.buttons
                });


                shutdownDialog.on('shown.bs.modal', function(e){
                    // remove close button
                    let dialog = $(this);

                    dialog.find('.bootbox-close-button').remove();
                    dialog.find('button').blur();

                    // show error message
                    showPageContent(dialog);
                });
            });
        }
    };


});
/**
 *  map manual dialog
 */

define('dialog/manual',[
    'jquery',
    'app/init',
    'app/util',
    'bootbox',
], ($, Init, Util, bootbox) => {

    'use strict';

    let config = {
        // global dialog
        dialogNavigationClass: 'pf-dialog-navigation-list',                     // class for dialog navigation bar
        dialogNavigationListItemClass: 'pf-dialog-navigation-list-item',        // class for map manual li main navigation elements

        // map manual dialog
        mapManualScrollspyId: 'pf-manual-scrollspy'                             // id for map manual scrollspy
    };

    /**
     * shows the map manual modal dialog
     */
    $.fn.showMapManual = function(){

        requirejs(['text!templates/dialog/map_manual.html', 'mustache'], (template, Mustache) => {
            let data = {
                dialogNavigationClass: config.dialogNavigationClass,
                dialogNavLiClass: config.dialogNavigationListItemClass,
                scrollspyId: config.mapManualScrollspyId,
                pieChartClass : Init.classes.pieChart.class,
                mapCounterClass : Init.classes.pieChart.pieChartMapCounterClass,
                imgSrcBubble: `${Util.imgRoot()}svg/bubble.svg`,
            };

            let content = Mustache.render(template, data);

            // show dialog
            let manualDialog = bootbox.dialog({
                title: 'Manual',
                message: content,
                size: 'large',
                buttons: {
                    close: {
                        label: 'close',
                        className: 'btn-default'
                    }
                },
                show: false
            });

            let dialogEl = manualDialog[0];

            // scroll breakpoints
            let scrollBreakpointElements = dialogEl.getElementsByClassName('pf-manual-scroll-break');

            // scroll navigation links
            let scrollNavLiElements = dialogEl.getElementsByClassName(config.dialogNavigationListItemClass);

            let scrollspyElement = dialogEl.querySelector(`#${config.mapManualScrollspyId}`);

            // set navigation button observer
            let mainNavigationLinks = dialogEl.querySelectorAll(`.${config.dialogNavigationClass} a`);
            // text anchor links
            let subNavigationLinks = scrollspyElement.querySelectorAll('a[data-target]');
            let navigationLinks = [...mainNavigationLinks, ...subNavigationLinks];

            manualDialog.on('shown.bs.modal', e => {
                // disable on scroll event
                let disableOnScrollEvent = false;

                let whileScrolling = () => {
                    if(disableOnScrollEvent === false){
                        let scrollOffset = scrollspyElement.mcs.top;
                        for(let [i, scrollBreakpointEl] of Object.entries(scrollBreakpointElements)){
                            let offset = scrollBreakpointEl.offsetTop;
                            if((offset + scrollOffset) > 0){
                                if(!scrollNavLiElements[i].classList.contains('active')){
                                    // remove all active classes
                                    // -> remove focus on links
                                    [...scrollNavLiElements].forEach(el => {
                                        el.classList.remove('active');
                                        el.getElementsByTagName('a')[0].blur();
                                    });

                                    scrollNavLiElements[i].classList.add('active');
                                }
                                break;
                            }
                        }
                    }
                };

                // init scrollbar
                $(scrollspyElement).mCustomScrollbar({
                    axis: 'y',
                    theme: 'light-3',
                    scrollInertia: 200,
                    autoExpandScrollbar: false,
                    scrollButtons:{
                        enable: true,
                        scrollAmount: 30
                    },
                    advanced: {
                        updateOnContentResize: true
                    },
                    callbacks:{
                        onInit: function(){
                            // init fake-map update counter
                            let counterEl = scrollspyElement.querySelector(`.${data.mapCounterClass}`);
                            $(counterEl).initMapUpdateCounter();

                            $(navigationLinks).on('click', function(e){
                                e.preventDefault();
                                disableOnScrollEvent = true;

                                // scroll to anchor
                                $(scrollspyElement).mCustomScrollbar('scrollTo', $(this).attr('data-target'));

                                let mainNavigationLiElement = this.closest(`.${config.dialogNavigationListItemClass}`);

                                whileScrolling();

                                // if link is a main navigation link (not an anchor link)
                                if(mainNavigationLiElement){
                                    // remove all active classes
                                    [...scrollNavLiElements].forEach(el => el.classList.remove('active'));

                                    // set new active class
                                    this.parentNode.classList.add('active');
                                }
                            });
                        },
                        onScroll: function(){
                            disableOnScrollEvent = false;
                            whileScrolling();
                        },
                        whileScrolling: whileScrolling
                    },
                    mouseWheel:{
                        enable: true,
                        scrollAmount: 200,
                        axis: 'y',
                        preventDefault: true // do not scroll parent at the end
                    },
                    scrollbarPosition: 'outsite',
                    autoDraggerLength: true
                });
            });

            manualDialog.on('hide.bs.modal', e => {
                let dialogEl = e.target;

                $(navigationLinks).off('click');

                $(dialogEl.querySelector(`#${config.mapManualScrollspyId}`))
                    .mCustomScrollbar('destroy');
            });

            // show dialog
            manualDialog.modal('show');
        });

    };

});
/**
 *  changelog dialog (GitHub API repository information)
 */

define('dialog/changelog',[
    'jquery',
    'app/init',
    'app/util',
    'bootbox'
], ($, Init, Util, bootbox) => {
    'use strict';

    let config = {
        changelogDialogClass: 'pf-changelog-dialog',                            // class for "changelog" dialog
        dynamicMessageContainerClass: 'pf-dynamic-message-container',           // class for "dynamic" (JS) message container
        timelineClass: 'timeline'                                               // class for "timeline"

    };

    /**
     * show version information
     * @param changelogDialog
     * @param versionData
     */
    let showVersion = (changelogDialog, versionData) => {
        let type = 'error';
        let title = versionData.current;
        let text = 'Installed version check failed';

        if(versionData.dev){
            // developer version
            type = 'info';
            title = versionData.current + ' (dev)';
            text = 'This installation is ahead of current stable version <kbd>' + versionData.last + '</kbd>.';
        }else{
            // standard version
            if(versionData.delta === 0){
                // last stable
                type = 'success';
                title = versionData.current;
                text = 'This installation is up2date.';
            }else{
                // outdated...
                type = 'warning';
                title = versionData.current;
                text = 'This installation is ' + versionData.delta + ' version behind current stable <kbd>' + versionData.last + '</kbd>.';
            }
        }

        changelogDialog.find('.' + config.dynamicMessageContainerClass).showMessage({
            dismissible: false,
            type: type,
            title: title,
            text: text
        });
    };

    /**
     * load changelog information in dialog
     * @param changelogDialog
     */
    let loadDialogData = (changelogDialog) => {

        // lock dialog
        let dialogContent = changelogDialog.find('.modal-content');
        dialogContent.showLoadingAnimation();

        $.ajax({
            type: 'POST',
            url: Init.path.gitHubReleases,
            dataType: 'json',
            context: {
                changelogDialog: changelogDialog
            }
        }).done(function(data){
            let changelogDialog = this.changelogDialog;
            let versionData = data.version;
            let releasesData = data.releasesData;

            showVersion(changelogDialog, versionData);

            requirejs(['text!templates/ui/timeline_element.html', 'mustache'], function(template, Mustache){
                for(let i = 0; i < releasesData.length; i++){
                    let releaseData = releasesData[i];

                    // template vars
                    let data = {
                        isFirst: (i === 0),
                        isOdd: (i % 2 !== 0),
                        releaseDate: releaseData.publishedAt.substr(0, 10),
                        releaseData: releaseData
                    };

                    let content = Mustache.render(template, data);
                    changelogDialog.find('ul.' + config.timelineClass).append(content);
                }

                changelogDialog.find('.timeline > li').velocity('transition.expandIn', {
                    stagger: 300,
                    duration: 240,
                    //display: 'auto',
                    complete: function(){}
                });
            });
        }).fail(function(jqXHR, status, error){
            let reason = status + ' ' + jqXHR.status + ': ' + error;
            Util.showNotify({title: jqXHR.status + ': login', text: reason, type: 'error'});
        }).always(function(){
            dialogContent.hideLoadingAnimation();
        });
    };

    /**
     * show changelog dialog
     */
    $.fn.changelogsDialog = function(){
        let content = $('<div>').append(
            $('<div>', {
                class: config.dynamicMessageContainerClass
            }),
            $('<ul>', {
                class: config.timelineClass
            })
        );

        let changelogDialog = bootbox.dialog({
            className: config.changelogDialogClass,
            title: 'Changelog',
            size: 'large',
            message: content
        });

        // after modal is shown =======================================================================
        changelogDialog.on('shown.bs.modal', function(e){
            loadDialogData(changelogDialog);
        });
    };

});
/**
 *  credits dialog
 */

define('dialog/credit',[
    'jquery',
    'app/init',
    'app/util',
    'bootbox'
], ($, Init, Util, bootbox) => {
    'use strict';

    let config = {
        creditsDialogClass: 'pf-credits-dialog'
    };

    /**
     * show jump info dialog
     */
    $.fn.showCreditsDialog = function(){
        requirejs(['text!templates/dialog/credit.html', 'mustache'], (template, Mustache) => {
            let data = {
                version: Util.getVersion(),
                imgSrcBackground: `${Util.imgRoot()}header/pf-header-780.webp`,
                imgSrcPatreon: `${Util.imgRoot()}misc/donate_patreon.png`,
                imgSrcPaypal: `${Util.imgRoot()}misc/donate_paypal.png`,
            };

            let content = Mustache.render(template, data);

            bootbox.dialog({
                className: config.creditsDialogClass,
                title: 'Licence',
                message: content
            });
        });
    };
});
/**
 *  changelog dialog (GitHub API repository information)
 */

define('dialog/api_status',[
    'jquery',
    'app/init',
    'app/util',
    'bootbox'
], ($, Init, Util, bootbox) => {
    'use strict';

    let config = {
        apiStatusDialogClass: 'pf-api-status-dialog'                            // class for "api status" dialog
    };

    /**
     * show api status dialog
     * @param apiData
     */
    $.fn.apiStatusDialog = function(apiData){

        let data = {
            apiData: apiData,
            methodFormat: () => {
                return (val, render) => {
                    switch(render(val)){
                        case 'get':     return 'txt-color-blue';
                        case 'post':    return 'txt-color-green';
                        case 'put':     return 'txt-color-yellow';
                        case 'delete':  return 'txt-color-red';
                        default:        return '';
                    }
                };
            },
            statusTitle: () => {
                return (val, render) => {
                    switch(render(val)){
                        case 'green':   return 'ok';
                        case 'yellow':  return 'degraded: Slow or potentially dropping requests';
                        case 'orange':  return 'bad: Most requests are not succeeding and/or are very slow (5s+) on average';
                        case 'red':     return 'error: Status data not available. Either offline or any other fatal error';
                        default:        return 'unknown';
                    }
                };
            },
            secondsFormat: () => {
                return (val, render) => {
                    return parseFloat(render(val)).toFixed(2) + 's';
                };
            }
        };

        requirejs(['text!templates/dialog/api_status.html', 'mustache'], (template, Mustache) => {
            let apiStatusDialog = bootbox.dialog({
                className: config.apiStatusDialogClass,
                title: 'API status',
                message: Mustache.render(template, data),
                show: false,
                buttons: {
                    close: {
                        label: 'cancel',
                        className: 'btn-default'
                    }
                }
            });

            apiStatusDialog.initTooltips();

            // show dialog
            apiStatusDialog.modal('show');

        });
    };

});
/**
 * Main loginPage application
 */

define('login',[
    'jquery',
    'app/init',
    'app/util',
    'app/render',
    'blueImpGallery',
    'layout/header_login',
    'lazyload',
    'bootbox',
    'dialog/account_settings',
    'dialog/notification',
    'dialog/manual',
    'dialog/changelog',
    'dialog/credit',
    'dialog/api_status'
], ($, Init, Util, Render, Gallery, HeaderLogin, LazyLoad, bootbox) => {

    'use strict';

    let config = {
        splashOverlayClass: 'pf-splash',                                        // class for "splash" overlay

        // header
        headerId: 'pf-landing-top',                                             // id for header
        headerContainerId: 'pf-header-container',                               // id for header container
        headHeaderMapId: 'pf-header-map',                                       // id for header image (svg animation)

        // map bg
        headMapBgId: 'pf-header-map-bg',                                        // id for header background container
        mapNeocomId: 'pf-map-neocom',                                           // id for map "neocom" image
        mapBrowserId: 'pf-map-browser',                                         // id for "browser" image
        mapBgImageId: 'pf-map-bg-image',                                        // id for "background" map image

        // navigation
        navigationElementId: 'pf-navbar',                                       // id for navbar element
        navigationLinkManualClass: 'pf-navbar-manual',                          // class for "manual" trigger link
        navigationLinkLicenseClass: 'pf-navbar-license',                        // class for "license" trigger link
        navigationVersionLinkClass: 'pf-navbar-version-info',                   // class for "version information"

        // cookie hint
        cookieHintId: 'pf-cookie-hint',                                         // id for "cookie hint" element

        // login
        ssoButtonClass: 'pf-sso-login-button',                                  // class for SSO login button

        // character select
        characterSelectionClass: 'pf-character-selection',                      // class for character boxes
        characterBoxClass: 'pf-character-box',                                  // class for outer character box
        characterImageWrapperClass: 'pf-character-image-wrapper',               // class for image wrapper (animated)
        characterImageInfoClass: 'pf-character-info',                           // class for character info layer (visible on hover)
        dynamicMessageContainerClass: 'pf-dynamic-message-container',           // class for "dynamic" (JS) message container

        // gallery
        galleryId: 'pf-gallery',                                                // id for gallery container
        galleryThumbImageClass: 'pf-landing-image-preview',                     // class for gallery thumb images
        galleryThumbContainerId: 'pf-landing-gallery-thumb-container',          // id for gallery thumb images
        galleryCarouselId: 'pf-landing-gallery-carousel',                       // id for "carousel" element

        // notification panel
        notificationPanelId: 'pf-notification-panel',                           // id for "notification panel" (e.g. last update information)

        // sticky panel
        stickyPanelClass: 'pf-landing-sticky-panel',                            // class for sticky panels
        stickyPanelServerId: 'pf-landing-server-panel',                         // id for EVE Online server status panel
        stickyPanelAdminId: 'pf-landing-admin-panel',                           // id for admin login panel

        apiStatusTriggerClass: 'pf-api-status-trigger',                         // class for "api status" dialog trigger elements

        // animation
        animateElementClass: 'pf-animate-on-visible',                           // class for elements that will be animated to show

        defaultAcceptCookieExpire: 365                                          // default expire for "accept coolies" cookie
    };

    /**
     * set link observer for "version info" dialog
     */
    let setVersionLinkObserver = () => {
        $('.' + config.navigationVersionLinkClass).off('click').on('click', function(e){
            $.fn.changelogsDialog();
        });
    };

    /**
     * move panel out of "cookie" accept hint
     * @param direction
     */
    let moveAdminPanel = (direction) => {
        let adminPanel = $('#' + config.stickyPanelAdminId);
        adminPanel.css({bottom: ((direction === 'up') ? '+' : '-') + '=35px'});
    };

    let setAcceptCookie = () => {
        Util.setCookie('cookie', 1, config.defaultAcceptCookieExpire, 'd');
    };

    /**
     * set page observer
     */
    let setPageObserver = () => {
        let ssoButtonElement = $('.' + config.ssoButtonClass);
        let cookieHintElement = $('#' + config.cookieHintId);

        $(document).on('click', '.' + config.characterSelectionClass + ' a', function(){
            $('.' + config.splashOverlayClass).showSplashOverlay();
        });

        $(document).on('click', '.' + config.ssoButtonClass , function(){
            if(Util.getCookie('cookie') === '1'){
                // ... cookies accepted no "confirm" shown
                $('.' + config.splashOverlayClass).showSplashOverlay();
            }
        });

        // cookie hint --------------------------------------------------------
        cookieHintElement.find('.btn-success').on('click', function(){
            setAcceptCookie();
            // confirmation no longer needed on SSO login button
            ssoButtonElement.confirmation('destroy');
        });

        cookieHintElement.on('show.bs.collapse', function(){
            // move admin panel upwards (prevents overlapping with cookie notice)
            moveAdminPanel('up');
        });

        cookieHintElement.on('hidden.bs.collapse', function(){
            moveAdminPanel('down');
        });

        if(Util.getCookie('cookie') !== '1'){
            // hint not excepted
            cookieHintElement.collapse('show');

            // show Cookie accept hint on SSO login button
            let confirmationSettings = {
                placement: 'bottom',
                title: 'Accept cookies',
                btnCancelClass: 'btn btn-sm btn-success',
                btnCancelLabel: 'accept',
                btnCancelIcon: 'fas fa-fw fa-check',
                btnOkClass: 'btn btn-sm btn-default',
                btnOkLabel: 'dismiss',
                btnOkIcon: 'fas fa-fw fa-sign-in-alt',
                onCancel: function(e, target){
                    // "Accept cookies"
                    setAcceptCookie();

                    // set "default" href
                    let href = $(target).data('bs.confirmation').getHref();
                    $(e.target).attr('href', href);
                },
                onConfirm : function(e, target){
                    // "NO cookies" => trigger "default" href link action
                },
                href: function(target){
                    return $(target).attr('href');
                }
            };

            ssoButtonElement.confirmation(confirmationSettings);
        }

        // manual -------------------------------------------------------------
        $('.' + config.navigationLinkManualClass).on('click', function(e){
            e.preventDefault();
            $.fn.showMapManual();
        });

        // license ------------------------------------------------------------
        $('.' + config.navigationLinkLicenseClass).on('click', function(e){
            e.preventDefault();
            $.fn.showCreditsDialog();
        });

        // releases -----------------------------------------------------------
        setVersionLinkObserver();

        // tooltips -----------------------------------------------------------
        let mapTooltipOptions = {
            toggle: 'tooltip',
            delay: 150
        };

        let tooltipElements = $('[title]').not('.slide img');
        tooltipElements.tooltip(mapTooltipOptions);

        // initial show some tooltips
        tooltipElements.filter('[data-show="1"]').tooltip('show');
    };

    /**
     * init image carousel
     */
    let initCarousel = () => {

        // check if carousel exists
        if($('#' + config.galleryCarouselId).length === 0){
            return;
        }

        // extent "blueimp" gallery for a textFactory method to show HTML templates
        Gallery.prototype.textFactory = function(obj, callback){
            let newSlideContent = $('<div>')
                .addClass('text-content')
                .attr('imgTitle', obj.title);

            // render HTML file (template)
            let moduleData = {
                id: config.headHeaderMapId,
                bgId: config.headMapBgId,
                neocomId: config.mapNeocomId,
                browserId: config.mapBrowserId,
                mapBgImageId: config.mapBgImageId
            };

            Render.render(obj.href, moduleData)
                .then(payload => newSlideContent.append(payload))
                .then(payload => callback({type: 'complete', target: payload[0]}));

            return newSlideContent[0];
        };

        // initialize carousel ------------------------------------------------
        let carousel = new Gallery([
            {
                imgTitle: 'Browser',
                href: 'ui/map',
                type: 'text/html'
            },
            {
                href: 'public/img/landing/responsive.jpg',
                imgTitle: 'Responsive layout',
                type: 'image/jpg',
                thumbnail: ''
            },
            {
                href: 'public/img/landing/pathfinder_1.jpg',
                imgTitle: 'Map view',
                type: 'image/jpg',
                thumbnail: ''
            },
            {
                href: 'public/img/landing/pathfinder_3.jpg',
                imgTitle: 'Map information',
                type: 'image/jpg',
                thumbnail: ''
            },
            {
                href: 'public/img/landing/pathfinder_2.jpg',
                imgTitle: 'System information',
                type: 'image/jpg',
                thumbnail: ''
            }
        ], {
            container: '#' + config.galleryCarouselId,
            carousel: true,
            startSlideshow: false,
            titleProperty: 'imgTitle',
            transitionSpeed: 600,
            slideshowInterval: 5000,
            preloadRange: 1,
            onopened: function(){
                // Callback function executed when the Gallery has been initialized
                // and the initialization transition has been completed.
                // -> show "demo" map

                // set title for first slide
                $(this.options.container).find(this.options.titleElement).text('Browser view');

                $('#' + config.headHeaderMapId).drawDemoMap(function(){

                    // zoom map SVGs
                    $('#' + config.headHeaderMapId + ' svg').velocity({
                        scaleX: 0.66,
                        scaleY: 0.66
                    }, {
                        duration: 360
                    });

                    // position map container
                    $('#' + config.headHeaderMapId).velocity({
                        marginTop: '130px',
                        marginLeft: '-50px'
                    }, {
                        duration: 360,
                        complete: function(){
                            // show browser
                            $('#' +  config.mapBrowserId).velocity('transition.slideUpBigIn', {
                                duration: 360,
                                complete: function(){
                                    // show neocom
                                    $('#' +  config.mapNeocomId).velocity('transition.slideLeftIn', {
                                        duration: 180
                                    });

                                    // show background
                                    $('#' +  config.mapBgImageId).velocity('transition.shrinkIn', {
                                        duration: 360
                                    });

                                    // when map is shown -> start carousel looping
                                    carousel.play();
                                }
                            });
                        }
                    });
                });
            }
        });
    };

    /**
     * get all thumbnail elements
     * @returns {*|jQuery|HTMLElement}
     */
    let getThumbnailElements = () => {
        return $('a[data-gallery="#' + config.galleryId + '"]').not('.disabled');
    };

    /**
     * init gallery for thumbnail elements
     * @param newElements
     */
    let initGallery = (newElements) => {
        if( newElements.length > 0){
            // We have to add ALL thumbnail elements to the gallery!
            // -> even those which are invisible (not lazyLoaded) now!
            // -> This is required for "swipe" through all images
            let allThumbLinks = getThumbnailElements();

            requirejs(['blueImpGalleryBootstrap'], () => {
                $(newElements).each(function(){
                    let borderless = false;

                    let galleryElement = $('#' + config.galleryId);
                    galleryElement.data('useBootstrapModal', !borderless);
                    galleryElement.toggleClass('blueimp-gallery-controls', borderless);

                    $(this).on('click', function(e){
                        e.preventDefault();

                        e = e || window.event;
                        let target = e.target || e.srcElement;
                        let link = target.src ? target.parentNode : target;

                        let options = {
                            index: link,
                            event: e,
                            container: '#' + config.galleryId,
                            titleProperty: 'description'
                        };

                        new Gallery(allThumbLinks, options);
                    });
                });
            });
        }
    };

    /**
     * init "YouTube" video preview
     */
    let initYoutube = () => {

        $('.youtube').each(function(){
            // Based on the YouTube ID, we can easily find the thumbnail image
            $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

            // Overlay the Play icon to make it look like a video player
            $(this).append($('<div/>', {'class': 'play'}));

            $(document).delegate('#' + this.id, 'click', function(){
                // Create an iFrame with autoplay set to true
                let iFrameUrl = '//www.youtube.com/embed/' + this.id + '?autoplay=1&autohide=1';
                if( $(this).data('params') ){
                    iFrameUrl += '&'+$(this).data('params');
                }

                // The height and width of the iFrame should be the same as parent
                let iFrame = $('<iframe/>', {
                    frameborder: '0',
                    src: iFrameUrl,
                    width: $(this).width(),
                    height: $(this).height(),
                    class: 'pricing-big'
                });

                // Replace the YouTube thumbnail with YouTube HTML5 Player
                $(this).replaceWith(iFrame);
            });
        });
    };


    /**
     * init scrollSpy for navigation bar
     */
    let initScrollSpy = () => {
        let scrollElement = document;
        let timeout;

        // show elements that are currently in the viewport
        let showVisibleElements = () => {
            // find all elements that should be animated
            let visibleElements = Util.findInViewport($('.' + config.animateElementClass));
            $(visibleElements).removeClass( config.animateElementClass );

            $(visibleElements).velocity('transition.flipXIn', {
                duration: 600,
                stagger: 60,
                delay: 500,
                complete: function(element){
                    // show "fade" modules (e.g. ribbons)
                    $(element).find('.fade').addClass('in');

                    // init gallery for "now" visible elements
                    let newGalleryElements = $(element).filter('[data-gallery="#' + config.galleryId + '"]');
                    initGallery(newGalleryElements);
                },
                visibility: 'visible'
            });
        };

        let scrollHandler = () => {
            // If there's a timer, cancel it
            if(timeout){
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(showVisibleElements);
        };

        scrollElement.addEventListener('scroll', scrollHandler, false);

        // initial check for visible elements
        showVisibleElements();


        Util.initScrollSpy(document.getElementById(config.navigationElementId), scrollElement, {
            offset: 150
        });
    };

    /**
     * get current EVE-Online server status
     * -> show "server panel"
     */
    let initServerStatus = () => {
        $.ajax({
            type: 'GET',
            url: Init.path.getServerStatus,
            dataType: 'json'
        }).done(function(responseData, textStatus, request){

            let dateLastModified = new Date(request.getResponseHeader('Last-Modified') || Date.now());
            let dateExpires = new Date(request.getResponseHeader('Expires') || Date.now());

            var options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC', timeZoneName: 'short' };
            responseData.api.cache = dateLastModified.toLocaleTimeString('en-US', options);
            responseData.api.cacheExpire = 'TTL ' + (dateExpires - dateLastModified) / 1000 + 's';

            let data = {
                stickyPanelServerId: config.stickyPanelServerId,
                stickyPanelClass: config.stickyPanelClass,
                apiStatusTriggerClass: config.apiStatusTriggerClass,
                server: responseData.server,
                api: responseData.api,
                statusFormat: () => {
                    return (val, render) => {
                        switch(render(val)){
                            case 'online':
                            case 'green':   return 'txt-color-green';
                            case 'vip':
                            case 'yellow':  return 'txt-color-yellow';
                            case 'orange':  return 'txt-color-orange';
                            case 'offline':
                            case 'red':     return 'txt-color-red';
                            default:        return '';
                        }
                    };
                }
            };

            requirejs(['text!templates/ui/server_panel.html', 'mustache'], function(template, Mustache){
                let content = Mustache.render(template, data);
                $('#' + config.headerId).prepend(content);
                let stickyPanelServer = $('#' + config.stickyPanelServerId);
                stickyPanelServer.velocity('transition.slideRightBigIn', {
                    duration: 240
                });

                // set observer for api status dialog
                stickyPanelServer.on('pointerdown', '.' + config.apiStatusTriggerClass, e => {
                    e.stopPropagation();
                    $.fn.apiStatusDialog(data.api);
                });
            });

        }).fail(handleAjaxErrorResponse);
    };

    /**
     * show "notification panel" to user
     * -> checks if panel not already shown
     */
    let initNotificationPanel = () => {
        let storageKey = 'notification_panel';
        let currentVersion = Util.getVersion();

        let showNotificationPanel = () => {
            let data = {
                version: currentVersion
            };

            requirejs(['text!templates/ui/notice.html', 'mustache'], (template, Mustache) => {
                let content = Mustache.render(template, data);

                let notificationPanel = $('#' + config.notificationPanelId);
                notificationPanel.html(content);
                notificationPanel.velocity('transition.slideUpIn', {
                    duration: 300,
                    complete: function(){
                        setVersionLinkObserver();

                        // mark panel as "shown"
                        Util.getLocalStore('default').setItem(storageKey, currentVersion);
                    }
                });
            });
        };

        Util.getLocalStore('default').getItem(storageKey).then(data => {
            // check if panel was shown before
            if(data){
                if(data !== currentVersion){
                    // show current panel
                    showNotificationPanel();
                }
            }else{
                // show current panel
                showNotificationPanel();
            }
        });
    };

    /**
     * load character data from cookie information
     * -> all validation is done server side!
     */
    let initCharacterSelect = () => {

        /**
         * init panel animation for an element
         * @param imageWrapperElement
         */
        let initCharacterAnimation = imageWrapperElement => {
            $(imageWrapperElement).velocity('stop').velocity('transition.flipBounceXIn', {
                display: 'block',
                drag: true,
                duration: 500
            });

            // Hover effect for character info layer
            $(imageWrapperElement).hoverIntent(function(e){
                let characterInfoElement = $(this).find('.' + config.characterImageInfoClass);

                characterInfoElement.velocity('finish').velocity({
                    width: ['100%', [ 400, 15 ] ]
                },{
                    easing: 'easeOutSine'
                });
            }, function(e){
                let characterInfoElement = $(this).find('.' + config.characterImageInfoClass);

                characterInfoElement.velocity('finish').velocity({
                    width: 0
                },{
                    duration: 150,
                    easing: 'easeOutSine'
                });
            });
        };

        // --------------------------------------------------------------------
        let removeCharacterPanel = panelElement => {
            let charBox = panelElement.closest(`.${config.characterBoxClass}`);
            charBox.classList.add('remove');
            charBox.addEventListener('animationend', () => charBox.parentNode.removeChild(charBox));
        };

        // --------------------------------------------------------------------
        let getCharacterAuthLabel = authStatus => {
            let label = '';
            switch(authStatus){
                case 'UNKNOWN':
                    label = 'ERROR';
                    break;
                case 'CHARACTER':
                case 'CORPORATION':
                case 'ALLIANCE':
                    label = 'INVALID';
                    break;
                default:
                    label = authStatus;
                    break;
            }
            return label;
        };

        // --------------------------------------------------------------------
        // request character data for each character panel
        requirejs(['text!templates/ui/character_panel.html', 'mustache'], (template, Mustache) => {

            [...document.querySelectorAll(`.${config.characterSelectionClass} .${Util.config.dynamicAreaClass}`)].forEach(charEl => {
                $(charEl).showLoadingAnimation();

                let requestData = {
                    cookie: charEl.dataset.cookie
                };

                $.ajax({
                    type: 'POST',
                    url: Init.path.getCookieCharacterData,
                    data: requestData,
                    dataType: 'json',
                    context: {
                        cookieName: requestData.cookie,
                        charEl: charEl,
                        browserTabId: Util.getBrowserTabId()
                    }
                }).done(function(responseData, textStatus, request){
                    $(this.charEl).hideLoadingAnimation();

                    if(
                        responseData.error &&
                        responseData.error.length > 0
                    ){
                        $('.' + config.dynamicMessageContainerClass).showMessage({
                            dismissible: false,
                            type: responseData.error[0].type,
                            title: 'Character verification failed',
                            text: responseData.error[0].message
                        });
                    }

                    if(responseData.hasOwnProperty('character')){
                        let data = {
                            link: this.charEl.dataset.href,
                            cookieName: this.cookieName,
                            browserTabId: this.browserTabId,
                            ccpImageServer: responseData.ccpImageServer,
                            character: responseData.character,
                            isManager: Util.getObjVal(responseData, 'character.role.name') === 'CORPORATION',
                            isAdmin: Util.getObjVal(responseData, 'character.role.name') === 'SUPER',
                            authLabel: getCharacterAuthLabel(responseData.character.authStatus),
                            authOK: responseData.character.authStatus === 'OK',
                            hasActiveSession: responseData.character.hasActiveSession === true
                        };

                        this.charEl.innerHTML = Mustache.render(template, data);

                        // show character panel (animation settings)
                        initCharacterAnimation(this.charEl.querySelector(`.${config.characterImageWrapperClass}`));
                    }else{
                        // character data not available -> remove panel
                        removeCharacterPanel(this.charEl);
                    }
                }).fail(function(jqXHR, status, error){
                    $(this.charEl).hideLoadingAnimation();

                    // character data not available -> remove panel
                    removeCharacterPanel(this.charEl);
                });
            });
        });
    };

    /**
     * default ajax error handler
     * -> show user notifications
     * @param jqXHR
     * @param status
     * @param error
     */
    let handleAjaxErrorResponse = (jqXHR, status, error) => {

        let type = status;
        let title = 'Status ' + jqXHR.status + ': ' + error;
        let message = '';

        if(jqXHR.responseText){
            let errorObj = $.parseJSON(jqXHR.responseText);

            if(
                errorObj.error &&
                errorObj.error.length > 0
            ){
                for(let i = 0; i < errorObj.error.length; i++){
                    let errorData = errorObj.error[i];
                    type = errorData.type;
                    title = 'Status  ' + errorData.code + ': ' + errorData.status;
                    message = errorData.message;

                    Util.showNotify({title: title, text: message, type: type});
                }
            }
        }else{
            Util.showNotify({title: title, text: message, type: type});
        }
    };

    /**
     * main init "landing" page
     */
    $(() => {
        // passive event listener
        Util.initPassiveEvents();

        // clear sessionStorage
        Util.clearSessionStorage();

        // set default AJAX config
        Util.ajaxSetup();

        // set Dialog default config
        Util.initDefaultBootboxConfig();

        // show app information in browser console
        Util.showVersionInfo();

        // show log off message
        let searchParams = new URLSearchParams(location.search); // jshint ignore:line
        if(
            searchParams.has('logout') ||
            searchParams.has('logoutGraceful')
        ){
            let cls = 'txt-color-warning';
            let text = [
                'For security reasons, you were logged out automatically',
                'Please log in again'
            ];

            if(searchParams.has('logoutGraceful')){
                cls = 'txt-color-success';
                text = ['You have successfully logged out'];
            }

            // show logout dialog
            let options = {
                buttons: {
                    close: {
                        label: 'close',
                        className: 'btn-default'
                    }
                },
                content: {
                    icon: 'fa-sign-out-alt',
                    class: cls,
                    title: 'Logout',
                    headline: 'Logout',
                    text: text
                }
            };

            $.fn.showNotificationDialog(options);

            // change url (remove logout parameter)
            if(history.pushState){
                history.pushState({}, '', location.protocol + '//' + location.host + location.pathname);
            }
        }

        // "Lock" default link action (=> open in new tab)!
        // -> until "gallery" is initialized (=> wait animation complete!)
        getThumbnailElements().on('click', function(e){
            e.preventDefault();
        });

        // init "lazy loading" for images
        let lazyLoadInstance = new LazyLoad({
            elements_selector: `.${config.galleryThumbImageClass}`,
            use_native: true
        });

        // hide splash loading animation
        $('.' + config.splashOverlayClass + '[data-status="ok"]').hideSplashOverlay();

        // init server status information
        initServerStatus();

        // init notification panel
        initNotificationPanel();

        // init character select
        initCharacterSelect();

        // init page observer
        setPageObserver();

        // init carousel
        initCarousel();

        // init scrollSpy
        // -> after "Carousel"! required for correct "viewport" calculation (Gallery)!
        initScrollSpy();

        // init youtube videos
        initYoutube();

        // draw header logo
        document.querySelector(`.logo-ploygon-top-right`).addEventListener('animationend', () => {
            HeaderLogin.init();
        });
    });
});
/**
 * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */

define('text',['module'], function (module) {
    'use strict';

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.12',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.indexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1, name.length);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config && config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file.indexOf('\uFEFF') === 0) {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                if (errback) {
                    errback(e);
                }
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status || 0;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        if (errback) {
                            errback(err);
                        }
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});

