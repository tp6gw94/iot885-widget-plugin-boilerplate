var a=Object.create;var s=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var F=(i,n,o,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of c(n))!P.call(i,r)&&r!==o&&s(i,r,{get:()=>n[r],enumerable:!(t=m(n,r))||t.enumerable});return i};var l=(i,n,o)=>(o=i!=null?a(h(i)):{},F(n||!i||!i.__esModule?s(o,"default",{value:i,enumerable:!0}):o,i));var f=l(require("fs")),g=l(require("path")),J=g.default.join(process.cwd(),"plugin.json");function u(i){let n={...i.getInfo(),editor:{fields:i.getFields()}},o=JSON.stringify(n,null,2);f.default.writeFile(J,o,"utf-8",t=>{if(t){console.error(t);return}console.log("plugin json created")})}var e=class{constructor({author:n,description:o,name:t,official:r=!1,version:d,image:p}){this.fields=[];this.info={author:n,description:o,name:t,official:r,version:d,image:p}}addField(n){return this.fields.push(n),this}getInfo(){return this.info}getFields(){return this.fields}};u(new e({author:"author",name:"name",version:"0.0.1",description:"description"}));
