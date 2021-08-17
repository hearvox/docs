(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[1171],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:e},u),{},{components:n})):a.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5921:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o=["components"],i={},c={unversionedId:"How to guides/Governance/Consraint Checks",id:"How to guides/Governance/Consraint Checks",isDocsHomePage:!1,title:"Consraint Checks",description:"Guzzle will Perform Data Quality (DQ) validation on specific columns and tables, Logging of records and statistics failing the constraint checks and The validation rules applicable for structured data and can currently be specified as SQL.",source:"@site/docs/How to guides/Governance/Consraint Checks.md",sourceDirName:"How to guides/Governance",slug:"/How to guides/Governance/Consraint Checks",permalink:"/docs/How to guides/Governance/Consraint Checks",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Governance/Consraint Checks.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Azure Synapse Analytics",permalink:"/docs/How to guides/Datastores/Azure Synapse Analytics"},next:{title:"Housekeeping Hive and Delta tables",permalink:"/docs/How to guides/Governance/Housekeeping Hive and Delta tables"}},s=[{value:"Validation Rules",id:"validation-rules",children:[]}],u={toc:s};function p(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Guzzle will Perform ",(0,l.kt)("strong",{parentName:"p"},"Data Quality (DQ)")," validation on specific columns and tables, Logging of records and statistics failing the constraint checks and The validation rules applicable for structured data and can currently be specified as SQL."),(0,l.kt)("p",null,"Guzzle Support below datastores for Constraint Checks."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Jdbc"),(0,l.kt)("li",{parentName:"ol"},"Hive"),(0,l.kt)("li",{parentName:"ol"},"Delta")),(0,l.kt)("p",null,"Guzzle provider below functionality and parameters for Constraint Checks."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Datastore"),(0,l.kt)("td",{parentName:"tr",align:null},"You can choose any of the available datastore from drop-down (as appropriate). If the connection is not available in drop-down then you have to create new."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table   +   Filter"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the table from where to read data. The table can contain schema and also database name. We can specify the Schema Name along with the Table Name. If it is not specified it is taken from the Datastore.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Also when the Table option is selected, you can also specify the Filter. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Alternatively Specify the SQL query which will be run as-is on the source"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Primary Keys"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify primary key columns to be logged into constraint_check_detail table if constraint check fails for a record. You can specify up to 10 columns if it is a composite primary key"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grouping Columns"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify grouping columns in source table if source data has to be aggregated before performing constraint check. All grouping column names and values are logged into constraint_check_summary, constraint_check_detail tables if constraint check fails for a record. You can specify up to 10 columns for group by to perform aggregation."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,l.kt)("p",null,"You can specify constraint checks to be performed on the source table. Below are the properties in that we can mention constraint checks with some rules."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a name for validation rule"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify validation sql which should evaluate to TRUE if the record passes the constraint check. Records which doesn't qualify the rule specified under this option are logged into constraint_check_summary, constraint_check_detail tables"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Constraint Data"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify list of columns for which additional data to be logged into constraint_check_summary, constraint_check_detail tables"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Detail Check Enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify if you want to bring detailed information on reconciliation records, if it\u2019s true then guzzle will calculate results for the mis-mathced records and store them in the guzzle repository table constraint_check_detail."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))))}p.isMDXComponent=!0}}]);