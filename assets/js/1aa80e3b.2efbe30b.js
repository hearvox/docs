(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[2864],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4537:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=["components"],l={id:"repository_database",title:"Repository Database"},s={unversionedId:"how_to_guides/administration/environment_config/repository_database",id:"how_to_guides/administration/environment_config/repository_database",isDocsHomePage:!1,title:"Repository Database",description:"Updating Guzzle Repository Database",source:"@site/docs/how_to_guides/administration/environment_config/Repository database.md",sourceDirName:"how_to_guides/administration/environment_config",slug:"/how_to_guides/administration/environment_config/repository_database",permalink:"/docs/how_to_guides/administration/environment_config/repository_database",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/administration/environment_config/Repository database.md",version:"current",frontMatter:{id:"repository_database",title:"Repository Database"},sidebar:"sideBar",previous:{title:"Connection and Environment",permalink:"/docs/how_to_guides/connection_and_environment/connection_and_environment"},next:{title:"Setup Shared Storage",permalink:"/docs/how_to_guides/administration/environment_config/setup_shared_storage"}},p=[{value:"Updating Guzzle Repository Database",id:"updating-guzzle-repository-database",children:[]},{value:"Steps to Update Repository database",id:"steps-to-update-repository-database",children:[]},{value:"Steps to Initialize Guzzle Repository database",id:"steps-to-initialize-guzzle-repository-database",children:[]},{value:"Repository Databse Credentials",id:"repository-databse-credentials",children:[]},{value:"Repository Databse Initilize Audit Metadata",id:"repository-databse-initilize-audit-metadata",children:[]},{value:"Steps to Update Repository database",id:"steps-to-update-repository-database-1",children:[]}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"updating-guzzle-repository-database"},"Updating Guzzle Repository Database"),(0,i.kt)("p",null,"User has to define there database configs to store guzzle related repository data. Once initialized the repository database guzzle will create database table in the given config database."),(0,i.kt)("p",null,"One of the important components of Guzzle instance is the repository database. Guzzle repository contains two types of table as described below: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Audit Metadata: This table compromises of Run-time audits of job runs, output of reconciliation, data quality checks and housekeeping, watermark values of incremental data load and ",(0,i.kt)("inlineCode",{parentName:"p"},"batch")," audit tables. Full list of Audit metadata tables can be found here. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"App Metadata: Metadata tables that are used by Guzzle App.  These are tables storing user authentication and authorization information, personalization settings and other metadata required by Guzzle app"))),(0,i.kt)("p",null,"The marketplace deployment of Guzzle comes bundled with a local MySQL database which is meant for trial and development purposes. When using Azure Databricks compute for running activities, it is mandatory to configure an external database to host Guzzle repository. The supported databases are: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Azure SQL ",(0,i.kt)("strong",{parentName:"p"},"(recommended)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"SQL Server 2016 and above")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Azure MySQL")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"MySQL Database version 5.7 and above"))),(0,i.kt)("p",null,"You will need to ensure the database used for Guzzle repository is accessible by both Guzzle VM and Azure Databricks workspace."),(0,i.kt)("p",null,"Below diagram explains typical setup of configuring Azure SQL DB to host Guzzle repository.  "),(0,i.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/repository_db01.png",target:"_self"},(0,i.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/administrator/environment-config/repository_db01.png"})),(0,i.kt)("h2",{id:"steps-to-update-repository-database"},"Steps to Update Repository database"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"Manage")," menu from the top navigation bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to Environment Config -> Repository Database. Select ",(0,i.kt)("strong",{parentName:"p"},"Credentials")," tab")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter following configuration details:"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Credential type"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify credential type to be used to connect to repository database: - Native : This is native Azure SQL, SQL Server or MySQL account - Azure service principal: To use Azure service principal and secret to connect to Azure SQL database. This is not supported for other database"),(0,i.kt)("td",{parentName:"tr",align:null},"Native"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Driver class"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the driver class name which database is going to be used. This can be left empty if standard Driver provided by Guzzle are to be used"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JDBC Url"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify JDBC URL of the Repository database.",(0,i.kt)("br",null),"For specify URL the following options are available:",(0,i.kt)("br",null),"1. ",(0,i.kt)("strong",{parentName:"td"},"Manual"),": For Azure SQL/ SQL server, you can use the below format to specify JDBC URL: ",(0,i.kt)("inlineCode",{parentName:"td"},"jdbc:sqlserver://<server name>.database.windows.net;database=<database_name>;encrypt=true;trustServerCertificate=true;create=false;loginTimeout=30;socketKeepAlive=true")," For Azure MySQL / MySQL Server following format can be used: ",(0,i.kt)("inlineCode",{parentName:"td"},"jdbc:mysql://<server_name>:3306/<database name>"),(0,i.kt)("br",null),"2. ",(0,i.kt)("strong",{parentName:"td"},"Azure Key Vault"),": To use Azure key vault feature user have to integrate Key Vault with Guzzle for that visit ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../../features/how_key_vault_is_used_to_integrate_guzzle"},"here")),". Give value of the key vault name and secret name where URL is stored in Azure Key Vault instance."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Username"),(0,i.kt)("td",{parentName:"tr",align:null},"Username to connect to repository database Applicable for Native credential type"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Password"),(0,i.kt)("td",{parentName:"tr",align:null},"Password to connect to repository database Applicable for Native credential type.",(0,i.kt)("br",null)," For specify password the following options are available:",(0,i.kt)("br",null),"1. ",(0,i.kt)("strong",{parentName:"td"},"Manual"),": Provide password directly. ",(0,i.kt)("br",null),"2. ",(0,i.kt)("strong",{parentName:"td"},"Azure Key Vault"),": To use Azure key vault feature user have to integrate Key Vault with Guzzle for that visit ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../../features/how_key_vault_is_used_to_integrate_guzzle"},"here")),". Give value of the key vault name and secret name where password is stored in Azure Key Vault instance."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client Id"),(0,i.kt)("td",{parentName:"tr",align:null},"Client id of Azure Service Principal Applicable for Azure service principal credential type"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,i.kt)("td",{parentName:"tr",align:null},"Client Secret of Azure Service Principal Applicable for Azure service principal credential type"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tenant Id"),(0,i.kt)("td",{parentName:"tr",align:null},"Tenant id of Azure Service Principal Applicable for Azure service principal credential type"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Validate")," to validate the connection details of the repository database. Its strongly recommended to validate the connection details before updating it, as incorrect repository database details may impact your Guzzle instance to work properly")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once successfully validated, you click on ",(0,i.kt)("strong",{parentName:"p"},"Update")," to update the repository database details. Guzzle initializes  above database with required tables for Guzzle app if these are not present"))),(0,i.kt)("h2",{id:"steps-to-initialize-guzzle-repository-database"},"Steps to Initialize Guzzle Repository database"),(0,i.kt)("p",null,"As mentioned above, Guzzle repository contains two types of tables. Of this ",(0,i.kt)("strong",{parentName:"p"},"Guzzle App Metadata")," tables are automatically created when Guzzle app is brought up. However, ",(0,i.kt)("strong",{parentName:"p"},"Audit Metadata")," has to be explicitly initialized in repository database when using new database. This section describes initializing the ",(0,i.kt)("strong",{parentName:"p"},"Audit Metadata")," tables."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Audit Metadata")," tables contains additional columns which are referred as context columns or context parameters. This context columns are included in all Guzzle audit tables. Also, this context columns will show as additional parameter when running jobs namely: ",(0,i.kt)("inlineCode",{parentName:"p"},"activity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"batch"),". This can be optionally included when running the batches for better tracking of the audit information for the job runs."),(0,i.kt)("h2",{id:"repository-databse-credentials"},"Repository Databse Credentials"),(0,i.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/repository_database_1.png",target:"_self"},(0,i.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/administrator/environment-config/repository_database_1.png"})),(0,i.kt)("h2",{id:"repository-databse-initilize-audit-metadata"},"Repository Databse Initilize Audit Metadata"),(0,i.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/administrator/environment-config/repository_database_2.png",target:"_self"},(0,i.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/administrator/environment-config/repository_database_2.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"At a minimum, one context columns needs to be defined"),". By default, Guzzle instance comes with one context column named ",(0,i.kt)("strong",{parentName:"p"},"batch"),". For most of the Guzzle deployment this default context column can be left as is.  This column shall also capture the ",(0,i.kt)("inlineCode",{parentName:"p"},"batch")," name when an ",(0,i.kt)("inlineCode",{parentName:"p"},"activity")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline")," is run as part of a ",(0,i.kt)("inlineCode",{parentName:"p"},"batch"),". "),(0,i.kt)("p",null,"More details of Guzzle Batches can be found ",(0,i.kt)("a",{parentName:"p",href:"../../batch/batch"},"here"),".  Additionally, the Guzzle ",(0,i.kt)("inlineCode",{parentName:"p"},"batch")," is composed of stages. The master list of stages that are available for defining ",(0,i.kt)("inlineCode",{parentName:"p"},"batch")," can be customized for your Guzzle instance. The default list of stages that are provided in Guzzle instance are below. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SRI : Represent source image layer"),(0,i.kt)("li",{parentName:"ul"},"FND : Foundation layer tables or data"),(0,i.kt)("li",{parentName:"ul"},"UCL : Use-case data layer"),(0,i.kt)("li",{parentName:"ul"},"OUT : These are output files")),(0,i.kt)("p",null,"Above stages represents a typical stage through which data from particular source system flows through. However you can amend this list and add additional stages. A batch can be composed of one or more stages from this list."),(0,i.kt)("h2",{id:"steps-to-update-repository-database-1"},"Steps to Update Repository database"),(0,i.kt)("p",null,"Guzzle UI will auto-detect if the repository tables are present or not and if it is present than Guzzle will show option as reinitialize database. If you reinitialize your all existing data in guzzle tables will be vanished and create new one."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Manage")," menu from the top navigation bar."),(0,i.kt)("li",{parentName:"ol"},"Navigate to Environment Config \u2192 Repository Database. Select ",(0,i.kt)("strong",{parentName:"li"},"Initialize Database")," tab"),(0,i.kt)("li",{parentName:"ol"},"Update the Context Columns and Stages as per your requirement"),(0,i.kt)("li",{parentName:"ol"},'The UI shall show either "Initialize" button if repo data does not have any ',(0,i.kt)("strong",{parentName:"li"},"Audit Metadata")," tables. However, if there are existing ",(0,i.kt)("strong",{parentName:"li"},"Audit Metadata"),' tables, the UI shall show "Reinitialize".  It ',(0,i.kt)("strong",{parentName:"li"},"must")," to Reinitialize the ",(0,i.kt)("strong",{parentName:"li"},"Audit Metadata")," tables if there are amendments done to Context columns or Stages. ")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do take note On ",(0,i.kt)("strong",{parentName:"p"},"Reinitialize")," of ",(0,i.kt)("strong",{parentName:"p"},"Audit Metadata"),' will drop and re-crate these tables. Any existing audit information shall get deleted in this database. Its recommended not to take necessary backup before doing the "Reinitialize".'),(0,i.kt)("p",{parentName:"div"},"Also, it's mandatory to have minimum one Context Columns and one Stage defined"),(0,i.kt)("p",{parentName:"div"},'When doing "Reinitialize", do ensure there are running jobs and batches.\nOn Initialize guzzle will create a database table related to guzzle jobs if the database is already initialized then guzzle will show an option as reinitialize to reinitialize the database.'))))}u.isMDXComponent=!0}}]);