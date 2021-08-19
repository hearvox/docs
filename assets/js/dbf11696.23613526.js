(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[7484],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3925:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],l={id:"adls_gen2",title:"Azure Data Lake Storage Gen2"},s={unversionedId:"how_to_guides/datastores/adls_gen2",id:"how_to_guides/datastores/adls_gen2",isDocsHomePage:!1,title:"Azure Data Lake Storage Gen2",description:"Only supported on Databricks compute",source:"@site/docs/how_to_guides/datastores/Azure Data Lake Storage Gen2.md",sourceDirName:"how_to_guides/datastores",slug:"/how_to_guides/datastores/adls_gen2",permalink:"/docs/how_to_guides/datastores/adls_gen2",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/datastores/Azure Data Lake Storage Gen2.md",version:"current",frontMatter:{id:"adls_gen2",title:"Azure Data Lake Storage Gen2"},sidebar:"sideBar",previous:{title:"Azure Data Factory",permalink:"/docs/how_to_guides/datastores/azure_data_factory"},next:{title:"Azure SQL",permalink:"/docs/how_to_guides/datastores/azure_sql"}},c=[{value:"Steps to create Datastore  for ADLS Gen2",id:"steps-to-create-datastore--for-adls-gen2",children:[]},{value:"Interface for ADLS Gen2 datastore",id:"interface-for-adls-gen2-datastore",children:[]},{value:"Known Limitation",id:"known-limitation",children:[]}],p={toc:c};function d(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only supported on Databricks compute"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction"},"Azure Data Lake Storage Gen2 ")," (ADLS Gen2) is a set of big data analytics capabilities, offered on Azure Blob Storage. ADLS Gen2 allows enterprises to deploy data lake solutions on Azure in order to store petadata bytes of data across a large number of data files."),(0,o.kt)("p",null,"When we want to read big data such as blob files, log files, IoT data, click streams, large datasets from cloud or write data to cloud we can use this datastore.\nThis contains folders, which in turn contains data stored as files."),(0,o.kt)("p",null,"Guzzle\u2019s Ingestion activity supports ADLS Gen2 as both source and sink < target > and allows copy data to/from using storage access keys or service principal. "),(0,o.kt)("h2",{id:"steps-to-create-datastore--for-adls-gen2"},"Steps to create Datastore  for ADLS Gen2"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the action button (",(0,o.kt)("img",{alt:"image alt text",src:a(5745).Z}),") from the ",(0,o.kt)("strong",{parentName:"p"},"Datastores "),"section in Left Navigation and select ",(0,o.kt)("strong",{parentName:"p"},"ADLS Gne2 "),"connector. Alternatively user can launch from ",(0,o.kt)("strong",{parentName:"p"},"Create New Datastore "),"link in Activity authoring UI or Copy Data tool")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the Datastore name for the new datastore and click Ok")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the connection name or leave the default. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"http://http"},"Connection and Environments ")," for more details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the additional properties for the storage account as described below:"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Account Name"),(0,o.kt)("td",{parentName:"tr",align:null},"storage account name"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Container name"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the ADLS Gen2 Container to connect"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Credential Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Authentication type to use when connecting to ADLS. Two options are provided Service Principal and Access Key. ",(0,o.kt)("br",null),"Following mechanisms are supported:",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Service principal :")," To uses Service principal which to access selected container or folder in the storage account. Follow the steps at Register your application with an Azure AD tenant to create Application Registration and capture following information Application (client) ID, Client secret,Directory (Tenant) ID.",(0,o.kt)("br",null),"Also ensure following permission:",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"As source:")," Grant Execute permission for all  parent folders, along with Read permission for the files to copy. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Reader role at container or storage account level.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"As sink target:")," Grant Execute permission for all parents folders, along with Write permission for the sink folders. Alternatively, in Access control (IAM), grant at least the Storage Blob Data Contributor role at container or storage account level.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Access Key:"),"  To use storage account access keys to access  the data. provide access key from azure portal. Which is available in storage account.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Recommendation is to use ",(0,o.kt)("strong",{parentName:"td"},"Service principal.")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Client ID*"),(0,o.kt)("td",{parentName:"tr",align:null},"Service principal\u2019s client id"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes (for Credential type of Service Principal)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,o.kt)("td",{parentName:"tr",align:null},"Service principal secret"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes (for Credential type of Service Principal)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tenant ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Directory id of of the service principal"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes (for Credential type of Service Principal)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Account access key"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes (for Credential Type : Access Key)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Path"),(0,o.kt)("td",{parentName:"tr",align:null},"This is the folder path within the ADLS container. You can specify  / (root path) to point to entire container"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Save the Datastore config. Optionally you can also Test the connection. ")),(0,o.kt)("h2",{id:"interface-for-adls-gen2-datastore"},"Interface for ADLS Gen2 datastore"),(0,o.kt)("p",null,"Sample config when using Credential Type as : Service Principal ",(0,o.kt)("img",{alt:"image alt text",src:a(9259).Z})),(0,o.kt)("p",null,"Sample config when using Credential Type as : Access Key"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:a(4450).Z})),(0,o.kt)("h2",{id:"known-limitation"},"Known Limitation"),(0,o.kt)("p",null,"--"))}d.isMDXComponent=!0},9259:function(t,e,a){"use strict";e.Z=a.p+"assets/images/Azure_Data_Lake_Storage_1-6b2dc82c43b29a32fcb1d373896df041.png"},4450:function(t,e,a){"use strict";e.Z=a.p+"assets/images/Azure_Data_Lake_Storage_2-557e9e60f9cb92a9be34621723407e2a.png"},5745:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAIAAAAA3/ihAAAAA3NCSVQICAjb4U/gAAAA5UlEQVRIiWNMXXOHgfZgVrAyAwMD49tPX+lgmRAvFwMDA0vqnAN0sGxtoRcDAwMTHWyCg1HLRi0btWyYWcaCR85KTdJMWVxdSnD/tSerjt8Os1TVkRFmYGC48uQthOuoJXPz2ftTd18eu/WcGMvw+cxIUdRWQ0qMjzPcQpWBgcFKVVJbRkhbRshKVZKBgSHcQlWMj9NWQ8pIUZRInw2aYDx3/zULExMkGBkYGI7dfq7zHRqMDAwMK0/chgTjufuvibSMMahvK8UuJgxGq5hRy0YtG7VsSFlG37Z+xS6i6j0KAaQXAwBAp0CiDoMpLQAAAABJRU5ErkJggg=="}}]);