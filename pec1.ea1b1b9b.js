parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
window.addEventListener("scroll",function(e){var t=document.querySelector(".topicHeader"),r=document.querySelector(".scroller"),o=document.querySelectorAll("ul.side li"),l=window.pageYOffset,n=1;if(l<=0)n=1,r.style.opacity=1;else if(l<=200&&(n=Math.max(1-l/200,.1),t.style.opacity=n,r.style.opacity=0,window.innerHeight>window.innerWidth&&window.innerWidth<768))for(var a=Math.max(1-l/200,0),i=0;i<o.length;i++)o[i].style.opacity=a;for(var c=document.querySelectorAll(".scroll"),d=0,s=c.length;d<s;d++){var y=l*c[d].dataset.rate;c[d].style.transform="translate3d(0px,-".concat(y,"px,0px)")}});
},{}]},{},["Focm"], null)
//# sourceMappingURL=WebDevManual/pec1.ea1b1b9b.js.map