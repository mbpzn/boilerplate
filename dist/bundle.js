!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=document.querySelector("#secret-button"),o=document.querySelector("#secret-paragraph")},function(e,t,n){"use strict";function r(){i=!i,u(),o()}function o(){c.a.textContent=i?"Hide the Secret":"Show the Secret"}function u(){c.b.style.display=i?"block":"none"}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=!1;c.a.addEventListener("click",r),u()}]);