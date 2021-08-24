(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[1215],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4459:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=["components"],l={id:"working_with_jdbc",title:"Working with JDBC Database"},c={unversionedId:"how_to_guides/ingest_data/working_with_jdbc",id:"how_to_guides/ingest_data/working_with_jdbc",isDocsHomePage:!1,title:"Working with JDBC Database",description:"Java Database Connectivity (JDBC) is an application programming interface (API) for the programming language Java, which defines how a client may access a database. It is a Java-based data access technology used for Java database connectivity.",source:"@site/docs/how_to_guides/ingest_data/Working with Databases- JDBC.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/working_with_jdbc",permalink:"/docs/how_to_guides/ingest_data/working_with_jdbc",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Working with Databases- JDBC.md",version:"current",frontMatter:{id:"working_with_jdbc",title:"Working with JDBC Database"},sidebar:"sideBar",previous:{title:"Working with Hive and Delta",permalink:"/docs/how_to_guides/ingest_data/working_with_hive_and_delta"},next:{title:"Working with AzureSQL Database",permalink:"/docs/how_to_guides/ingest_data/working_with_azureSQL"}},s=[{value:"JDBC as a Source",id:"jdbc-as-a-source",children:[]},{value:"Example of a JDBC source without a filter:",id:"example-of-a-jdbc-source-without-a-filter",children:[]},{value:"Example of a JDBC source with a filter:",id:"example-of-a-jdbc-source-with-a-filter",children:[]},{value:"JDBC as a Target or Reject",id:"jdbc-as-a-target-or-reject",children:[]}],d={toc:s};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Java Database Connectivity (JDBC) is an application programming interface (API) for the programming language Java, which defines how a client may access a database. It is a Java-based data access technology used for Java database connectivity."),(0,i.kt)("p",null,"This article outlines how to use JDBC as source or target in Ingestion activity. Ingestion Active lets you leverage this native connector offered by Databricks and allows you to specify different configurations that are supported by this connector. "),(0,i.kt)("h2",{id:"jdbc-as-a-source"},"JDBC as a Source"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the Datastore section we can choose to read full Data either as a Table name or through SQL query (in the form of a query)."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Table + Filter"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the table from where to read data.",(0,i.kt)("br",null),"[database name]",".","[schema name]",".","[table name]",(0,i.kt)("br",null),"Note: Depending on the database technology used: ","[database name]"," and ","[schema name]"," can be optionally specified along with the table name. ",(0,i.kt)("br",null),"Database name and JDBC URL all this will be stored in datastore.",(0,i.kt)("br",null)," In source or target section we have to select datastore name and give table name and give filter (if required)."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Along with the Table option, you can also specify the Filter property \u2014 which is SQL filter condition in native SQL of the underlying JDBC technology to filter subset of records from the table"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SQL"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the SQL query which will be run as-is on the source"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h2",{id:"example-of-a-jdbc-source-without-a-filter"},"Example of a JDBC source without a filter:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image alt text",src:a(855).Z})),(0,i.kt)("p",null,"In the animation above, no filter has been applied to our JDBC source. Hence, the entire Source Data is visible when we Sample our Data."),(0,i.kt)("h2",{id:"example-of-a-jdbc-source-with-a-filter"},"Example of a JDBC source with a filter:"),(0,i.kt)("p",null,"In the animation below, we add a filter to the column ID that is ID>3. In the Sample Data we now only see the Data entries which satisfy this condition. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image alt text",src:a(3279).Z})),(0,i.kt)("h2",{id:"jdbc-as-a-target-or-reject"},"JDBC as a Target or Reject"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Table (In Target /Reject Section)"),(0,i.kt)("td",{parentName:"tr",align:null},"To specify the Target Table where the data from source is loaded"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The data is always appended to target table"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},855:function(e,t,a){"use strict";t.Z=a.p+"assets/images/jdbc1-f4c3f3dd2313835eb475929d46704584.gif"},3279:function(e,t,a){"use strict";t.Z=a.p+"assets/images/jdbc2-c81c75ffe36ea808bc8c92dca39e89a2.gif"}}]);