(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[6291],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},102:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o=["components"],i={id:"external",title:"External"},p={unversionedId:"how_to_guides/author/external",id:"how_to_guides/author/external",isDocsHomePage:!1,title:"External",description:"This article provides information about External support in Guzzle and what are different external library Guzzle supports.",source:"@site/docs/how_to_guides/author/External.md",sourceDirName:"how_to_guides/author",slug:"/how_to_guides/author/external",permalink:"/docs/how_to_guides/author/external",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/author/External.md",version:"current",frontMatter:{id:"external",title:"External"},sidebar:"sideBar",previous:{title:"Author",permalink:"/docs/how_to_guides/author/author"},next:{title:"Git Integration and Version Control",permalink:"/docs/how_to_guides/author/git_integration_and_version_control"}},u=[{value:"Libraries :",id:"libraries-",children:[]},{value:"Dependency :",id:"dependency-",children:[]}],d={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article provides information about External support in Guzzle and what are different external library Guzzle supports."),(0,l.kt)("p",null,"Guzzle supports External Framework and tools. "),(0,l.kt)("p",null,"Guzzle External supports below Datastore"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Databricks")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"JDBC")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"ADF"))),(0,l.kt)("p",null,"Guzzle provider below functionality and parameters for External"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Datastore"),(0,l.kt)("td",{parentName:"tr",align:null},"You can choose any of the available Datastore from drop-down (as appropriate). If the connection is not available in drop-down then you can create new data store"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Script (Only Applicable for JDBC)"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify script to run as external"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Run Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify external Run name to identify"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timeout Seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify When guzzle tries to connect external tools and how long stick this."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Task"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify external tool type guzzle supports 1) Notebook, 2) Spark Jar, 3) PySpark"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Notebook Path (only applicable if Task is Notebook)"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify the Databricks Notebook full path"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Main Class (only applicable if Task is Spark Jar)"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify the main class name of the spark jar file."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Script Path (Only applicable if Task is PySpark)"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify the script path of an external file."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Revision Timestamp"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify Parameter it\u2019s name and value pair which guzzle used while running external library."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Libraries"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify external libraries"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"libraries-"},"Libraries :"),(0,l.kt)("p",null,"Guzzle User can add a new library by click on click to add library, Guzzle supports below libraries configs."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"DBFS")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"PyPi")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Maven")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"CRAN"))),(0,l.kt)("h2",{id:"dependency-"},"Dependency :"),(0,l.kt)("p",null,"Guzzle used to know dependency between lineages so while the user ran the job under pipeline guzzle will prepare dependency stack and follow that stack."),(0,l.kt)("p",null,"Users can specify source and target dependency by clicking on dependency tab."),(0,l.kt)("p",null,"User has to specify "),(0,l.kt)("p",null,"Endpoints : Select dependent endpoint from dropdowns."),(0,l.kt)("p",null,"Property : it is autopopulated based on selected endpoints."),(0,l.kt)("p",null,"Value : Specify dependent value it may be table, files ..."))}s.isMDXComponent=!0}}]);