!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.w={},r(r.s=2)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";var n=u(r(1)),o=u(r(0));function u(e){return e&&e.__esModule?e:{default:e}}const i=(0,n.default)(),s=process.env.PORT||3030;i.use("/scripts",n.default.static(o.default.join(__dirname,"./scripts"))),i.use("/",(e,t)=>{t.sendFile(o.default.join(__dirname,"./index.html"))}),i.listen(s,()=>{console.log(`Server started on port ${s}`)})}]);