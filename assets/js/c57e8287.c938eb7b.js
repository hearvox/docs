(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4911],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7280:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],p={id:"azure_synapse_spark",title:"Azure Synapse Spark"},l={unversionedId:"how_to_guides/computes/azure_synapse_spark",id:"how_to_guides/computes/azure_synapse_spark",isDocsHomePage:!1,title:"Azure Synapse Spark",description:"Guzzle supports computing environments on the Azure cloud. In Guzzle, Azure cloud setup, we can use Azure Synapse Spark Pool to execute our workloads. This article helps in using Azure Synapse Spark Pool as a computing environment in Guzzle.",source:"@site/docs/how_to_guides/computes/Azure Synapse Spark.md",sourceDirName:"how_to_guides/computes",slug:"/how_to_guides/computes/azure_synapse_spark",permalink:"/docs/how_to_guides/computes/azure_synapse_spark",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/computes/Azure Synapse Spark.md",version:"current",frontMatter:{id:"azure_synapse_spark",title:"Azure Synapse Spark"},sidebar:"sideBar",previous:{title:"Yarn",permalink:"/docs/how_to_guides/computes/yarn"},next:{title:"Datastore Overview",permalink:"/docs/how_to_guides/datastores/datastore_overview"}},s=[{value:"Below are the steps user has to perform to work with azure synapse compute",id:"below-are-the-steps-user-has-to-perform-to-work-with-azure-synapse-compute",children:[]},{value:"Steps to create Azure Synapse Spark Pool compute",id:"steps-to-create-azure-synapse-spark-pool-compute",children:[]},{value:"Interface for Azure Synapse Spark compute",id:"interface-for-azure-synapse-spark-compute",children:[]},{value:"Known Limitations",id:"known-limitations",children:[]}],u={toc:s};function c(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Guzzle supports computing environments on the Azure cloud. In Guzzle, Azure cloud setup, we can use Azure Synapse Spark Pool to execute our workloads. This article helps in using Azure Synapse Spark Pool as a computing environment in Guzzle."),(0,o.kt)("h2",{id:"below-are-the-steps-user-has-to-perform-to-work-with-azure-synapse-compute"},"Below are the steps user has to perform to work with azure synapse compute"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create the Azure Synapse Analytics workspace from Azure portal."),(0,o.kt)("li",{parentName:"ol"},"Create Application in Azure Active Directory and create Client credentials and save it for later use.",(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_app_registration.png",target:"_self"},(0,o.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/synapse_app_registration.png"}))),(0,o.kt)("li",{parentName:"ol"},"Create the Apache Spark pool in the Azure Synapse Analytics workspace.",(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/create_apache_spark_pool.png",target:"_self"},(0,o.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/create_apache_spark_pool.png"}))),(0,o.kt)("li",{parentName:"ol"},"Assign ",(0,o.kt)("strong",{parentName:"li"},"Storage Blob Data Contributor")," role to the application on Azure Synapse Analytics ADLS gen2 account.",(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_aglsgen2_app_access.png",target:"_self"},(0,o.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/synapse_aglsgen2_app_access.png"}))),(0,o.kt)("li",{parentName:"ol"},"Assign ",(0,o.kt)("strong",{parentName:"li"},"Storage Blob Data Contributor")," role to the application on Guzzle Shared storage account.",(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_storage_app_access.png",target:"_self"},(0,o.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/synapse_storage_app_access.png"}))),(0,o.kt)("li",{parentName:"ol"},"Create access policy in Guzzle Key Vault and allow secret permissions to the application.",(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_keyvault_app_access.png",target:"_self"},(0,o.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/synapse_keyvault_app_access.png"}))),(0,o.kt)("li",{parentName:"ol"},"Open the Azure Synapse studio from Azure Synapse workspace.",(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/azure_synapse_studio.png",target:"_self"},(0,o.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/azure_synapse_studio.png"}))),(0,o.kt)("li",{parentName:"ol"},"In Synapse studio assign ",(0,o.kt)("strong",{parentName:"li"},"Synapse Administrator")," role to the created application.",(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/synapse_studio_app_access.png",target:"_self"},(0,o.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/synapse_studio_app_access.png"})))),(0,o.kt)("h2",{id:"steps-to-create-azure-synapse-spark-pool-compute"},"Steps to create Azure Synapse Spark Pool compute"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the action button (",(0,o.kt)("img",{alt:"image alt text",src:a(5745).Z}),") from ",(0,o.kt)("strong",{parentName:"li"},"Compute")," section in ",(0,o.kt)("strong",{parentName:"li"},"Left Navigation")," and select ",(0,o.kt)("strong",{parentName:"li"},"Azure Synapse Spark")," compute option."),(0,o.kt)("li",{parentName:"ol"},"Provide name of compute and click on OK button."),(0,o.kt)("li",{parentName:"ol"},"Provide more properties to initialize Azure synapse Spark compute as describe below.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Synapse workspace URL"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the URL of the Azure Synapse workspace. You will find this url as ",(0,o.kt)("strong",{parentName:"td"},"Development endpoint")," in Synapse workspace overview page in Azure portal"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spark pool name"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the spark pool name that will be used by Guzzle"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Credential Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the credential type to connect to the Azure Synapse"),(0,o.kt)("td",{parentName:"tr",align:null},"Service Principle"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Client Id"),(0,o.kt)("td",{parentName:"tr",align:null},"Azure Active Directory provided client Id( also called an application ID). The register app in Azure Active Directory provides one unique id for associate to application. The client id of the created application in above steps."),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,o.kt)("td",{parentName:"tr",align:null},"Azure Active Directory Client Secret. Provide the client secret of the application that is created in above steps. Guzzle used this for verify and generate access key of the user authentication"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tenant Id"),(0,o.kt)("td",{parentName:"tr",align:null},"The unique identifier of the Azure Active Directory instance also called directory ID. A tenant represents an organization. Provide the tenant id of the application. It's a dedicated instance of Azure AD that an organization or app developer receives at the beginning of a relationship with Microsoft"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Driver Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the allocated driver memory for running jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Driver Cores"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the allocated driver cores for running jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Executor Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the allocated executor memory for running jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Executor Cores"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the allocated executor cores for running jobs"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number of executors"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the number of spark executors you want the job to run"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Customize spark config"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify additional Spark configuration options. Specify the config name and config value"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom cluster tags"),(0,o.kt)("td",{parentName:"tr",align:null},"Apply tags to the cluster. Specify the name of tag and value"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h2",{id:"interface-for-azure-synapse-spark-compute"},"Interface for Azure Synapse Spark compute"),(0,o.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/azure_synapse_spark_1.png",target:"_self"},(0,o.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/azure_synapse_spark_1.png"})),(0,o.kt)("h2",{id:"known-limitations"},"Known Limitations"),(0,o.kt)("p",null,"The following features are not supported with Azure Synapse Spark compute:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LFS datastore is not supported.")))}c.isMDXComponent=!0},5745:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAIAAAAA3/ihAAAAA3NCSVQICAjb4U/gAAAA5UlEQVRIiWNMXXOHgfZgVrAyAwMD49tPX+lgmRAvFwMDA0vqnAN0sGxtoRcDAwMTHWyCg1HLRi0btWyYWcaCR85KTdJMWVxdSnD/tSerjt8Os1TVkRFmYGC48uQthOuoJXPz2ftTd18eu/WcGMvw+cxIUdRWQ0qMjzPcQpWBgcFKVVJbRkhbRshKVZKBgSHcQlWMj9NWQ8pIUZRInw2aYDx3/zULExMkGBkYGI7dfq7zHRqMDAwMK0/chgTjufuvibSMMahvK8UuJgxGq5hRy0YtG7VsSFlG37Z+xS6i6j0KAaQXAwBAp0CiDoMpLQAAAABJRU5ErkJggg=="}}]);