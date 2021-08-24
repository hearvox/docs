(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[6415],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(k,o(o({ref:e},c),{},{components:r})):n.createElement(k,o({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7236:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=["components"],p={id:"local_spark",title:"Local Spark"},i={unversionedId:"how_to_guides/computes/local_spark",id:"how_to_guides/computes/local_spark",isDocsHomePage:!1,title:"Local Spark",description:"This article provides information about Local spark support in Guzzle.",source:"@site/docs/how_to_guides/computes/Local Spark.md",sourceDirName:"how_to_guides/computes",slug:"/how_to_guides/computes/local_spark",permalink:"/docs/how_to_guides/computes/local_spark",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/computes/Local Spark.md",version:"current",frontMatter:{id:"local_spark",title:"Local Spark"},sidebar:"sideBar",previous:{title:"Azure Databricks",permalink:"/docs/how_to_guides/computes/azure_databricks"},next:{title:"Yarn",permalink:"/docs/how_to_guides/computes/yarn"}},u=[],c={toc:u};function s(t){var e=t.components,p=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article provides information about Local spark support in Guzzle."),(0,l.kt)("p",null,"Local spark users will only use it for development, learning and lightweight purposes."),(0,l.kt)("p",null,"Local spark does not support various features like : "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"ADLS"),(0,l.kt)("li",{parentName:"ol"},"DBFS"),(0,l.kt)("li",{parentName:"ol"},"DELTA"),(0,l.kt)("li",{parentName:"ol"},"HIVE")),(0,l.kt)("p",null,"Guzzle provides below parameter and configs for local spark"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of executors"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the number of spark executor on you want to run job"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Driver memory"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the allocated driver memory for running jobs"),(0,l.kt)("td",{parentName:"tr",align:null},"512\xa0m"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Executor memory"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the allocated executor memory for running jobs"),(0,l.kt)("td",{parentName:"tr",align:null},"512\xa0m"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Driver classpath"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the driver classpath of jobs"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Executor classpath"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the executor classpath"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Jars"),(0,l.kt)("td",{parentName:"tr",align:null},"Put the jar path with comma separated"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Additional arguments"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the spark arguments. ",(0,l.kt)("br",null)," Ex: --conf spark.development=true"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Interface for Local Spark Compute ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image alt text",src:r(8034).Z})))}s.isMDXComponent=!0},8034:function(t,e,r){"use strict";e.Z=r.p+"assets/images/local_spark_1-f2e3bb76193c0a06e99b6c889f1bae01.jpg"}}]);