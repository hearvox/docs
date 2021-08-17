(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[205],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,l(l({ref:e},c),{},{components:a})):n.createElement(h,l({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},997:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=["components"],o={},s={unversionedId:"How to guides/Ingest data/Working with Multiple files",id:"How to guides/Ingest data/Working with Multiple files",isDocsHomePage:!1,title:"Working with Multiple files",description:"This article outlines how to work with multiple files for source and target in Ingestion activity.  The Source section of Ingestion activity provides the property File Pattern  that allow user to specify the dynamic file name pattern using Glob expression language. More details on Glob expression can be found here",source:"@site/docs/How to guides/Ingest data/Working with Multiple files.md",sourceDirName:"How to guides/Ingest data",slug:"/How to guides/Ingest data/Working with Multiple files",permalink:"/docs/How to guides/Ingest data/Working with Multiple files",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Ingest data/Working with Multiple files.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Working with JSON Files",permalink:"/docs/How to guides/Ingest data/Working with JSON Files"},next:{title:"Working with Text and Log Files",permalink:"/docs/How to guides/Ingest data/Working with Text and Log Files"}},p=[{value:"Support for File Pattern in Source Section",id:"support-for-file-pattern-in-source-section",children:[]},{value:"Using File Data Store in Target or Reject section",id:"using-file-data-store-in-target-or-reject-section",children:[]},{value:"Illustration of how file based source are copied in Target",id:"illustration-of-how-file-based-source-are-copied-in-target",children:[]},{value:"Illustration of how table based source are copied in target",id:"illustration-of-how-table-based-source-are-copied-in-target",children:[]},{value:"Parallel Processing of Files",id:"parallel-processing-of-files",children:[]},{value:"Partial Load setting in Guzzle",id:"partial-load-setting-in-guzzle",children:[]}],c={toc:p};function d(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article outlines how to work with multiple files for source and target in Ingestion activity.  The Source section of Ingestion activity provides the property ",(0,i.kt)("strong",{parentName:"p"},"File Pattern"),"  that allow user to specify the dynamic file name pattern using Glob expression language. More details on Glob expression can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/essential/io/fileOps.html#glob"},"here")," "),(0,i.kt)("p",null,"For Target  section of Ingestion activity, Ingestion activity provides various settings to determine the how the files are copied over from source folder or table into the target section"),(0,i.kt)("h2",{id:"support-for-file-pattern-in-source-section"},"Support for File Pattern in Source Section"),(0,i.kt)("p",null,"Ingestion activity allows specifying the initial (or root) path when defining the data store as explained. The ",(0,i.kt)("inlineCode",{parentName:"p"},"File Pattern")," setting is treated as relative to the path  specified in the data store. Ingestion activity has the same treatment of File Pattern for all the types of. "),(0,i.kt)("p",null,"Below describes different options of how ",(0,i.kt)("inlineCode",{parentName:"p"},"File Pattern")," can be specified and its treatment by Ingestion activity"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Static file path"),(0,i.kt)("td",{parentName:"tr",align:null},"csv/customer.csv"),(0,i.kt)("td",{parentName:"tr",align:null},"This will retrieve specific file from the file system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Recursive"),(0,i.kt)("td",{parentName:"tr",align:null},"customer/*",(0,i.kt)("em",{parentName:"td"},"/data"),".csv"),(0,i.kt)("td",{parentName:"tr",align:null},"This will cause it to enumerate all the files recursively in the customer subfolder in the from the file system and file matching the patter data*.csv will be considered for processing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dynamic folder and file path"),(0,i.kt)("td",{parentName:"tr",align:null},"cus*/",(0,i.kt)("strong",{parentName:"td"},"/customer customer_","[0-9][0-9]","/"),"/customer"),(0,i.kt)("td",{parentName:"tr",align:null},"Since the first component of file pattern contains wildcard or regular expression, this will result in enumeration of all the files in the root directory , of which it will pick those which match the file pattern is used to  recursively search the files within a given directory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Static folder name and dynamic sub-folder and file name"),(0,i.kt)("td",{parentName:"tr",align:null},"customer/asia/data_<sg, hk, my>/*.csv"),(0,i.kt)("td",{parentName:"tr",align:null},"Since the first two level of folders are statically specified (and does not contain wildcard or reg-exp), it will enumerate all the files in the sub-directory customer/asia and match the resultant files with the rest of file pattern")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For optimal performance and to utilize the service-side filter, it is recommended to provide static directory name where possible to reduce the amount of metadata (file listing) that Ingestion activity has to retrieve before applying filename pattern. This is crucial if the source file system contains large of number of files"))),(0,i.kt)("h2",{id:"using-file-data-store-in-target-or-reject-section"},"Using File Data Store in Target or Reject section"),(0,i.kt)("p",null,"Ingestion activity provides following properties which determines how the files and folders are generated when using File datastore as target. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Path"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the directory in which the target files and folder shall be created. This path is relative to the root path that is specified when defining the File datastore"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Generate Single File"),(0,i.kt)("td",{parentName:"tr",align:null},"When set as true, this will generate a single file corresponding to each source file. Similarly for when the source is a table it will generate one file for entire table for non-partitioned table or one data file per each partition in the respective partition folder"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"If the settings is set to false, it will create a folder for each source file or source table and generate multiple part files as an output in these folders. For partitioned table it will contain generate multiple part files within the partition folder"),(0,i.kt)("td",{parentName:"tr",align:null},"No  (default value: is false)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Preserve Hierarchy"),(0,i.kt)("td",{parentName:"tr",align:null},'When set to true, it will mirror the folder structure as per source folder structure inside the target directory specified as per File Path. The entire folder structure of source as per "File Pattern" is mirrored.'),(0,i.kt)("td",{parentName:"tr",align:null},"No  (default value: is false)")))),(0,i.kt)("p",null,"Apat from the above properties, there are additional settings that are meant to specify File Format and its associated properties. This is covered in detail in section :"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Any existing file within the same folder and file name shall be overwritten "))),(0,i.kt)("h2",{id:"illustration-of-how-file-based-source-are-copied-in-target"},"Illustration of how file based source are copied in Target"),(0,i.kt)("p",null,"Assuming that source file pattern results below files:"),(0,i.kt)("p",null,"customer/"),(0,i.kt)("p",null,"   customer1.csv"),(0,i.kt)("p",null,"   customer2.csv"),(0,i.kt)("p",null,"the folders and files that shall be generated in the target folder path (which is root path in Data store + File path specified in target section) shall be as per below: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Generate Single File"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Preserve Hierarchy"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"customer/customer1.csv customer2.csv"),(0,i.kt)("td",{parentName:"tr",align:null},"customer/customer1.csv\\part_001.csv part_002.csv customer2.csv\\part_001.csv part_002.csv")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"customer1.csv.12321312213213 customer2.csv.12321312213214"),(0,i.kt)("td",{parentName:"tr",align:null},"customer1.csv.12321312213213 part_001.csv part_002.csv customer2.csv.12321312213214 part_001.csv part_002.csv")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"The suffix files or folder when peserver hierarchy is not selected is publish id that is generated "),(0,i.kt)("li",{parentName:"ol"},"The part file are generated by spark and the naming convention will depend on implementation of Spark connector")))),(0,i.kt)("h2",{id:"illustration-of-how-table-based-source-are-copied-in-target"},"Illustration of how table based source are copied in target"),(0,i.kt)("p",null,"Assuming the source table ",(0,i.kt)("strong",{parentName:"p"},"customer "),"is non partitioned, it shall generate the files as per below"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Generate Single File"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Preserve Hierarchy"),(0,i.kt)("td",{parentName:"tr",align:null},"true or false"),(0,i.kt)("td",{parentName:"tr",align:null},"customer.csv"),(0,i.kt)("td",{parentName:"tr",align:null},"customer/ part_001.csv part_002.csv")))),(0,i.kt)("p",null,"Considering the source table, the customer** ",(0,i.kt)("strong",{parentName:"p"},"is partitioned with two levels at "),"region ",(0,i.kt)("strong",{parentName:"p"},"and "),"country **level with below as sample set of partitions:"),(0,i.kt)("p",null,"customer"),(0,i.kt)("p",null,"  region=asia"),(0,i.kt)("p",null,"  country=sg",(0,i.kt)("br",null),"\ncountry=my"),(0,i.kt)("p",null,"  region=europe"),(0,i.kt)("p",null,"  country=fr"),(0,i.kt)("p",null,"The target files and folder will following below structure as per different settings of "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Generate Single File"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Preserve Hierarchy"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"customer/region=asia/country=sg/customer.csv country=my/customer.csv region=europe/country=fr/customer.csv"),(0,i.kt)("td",{parentName:"tr",align:null},"customer/region=asia/country=sg/part_001.csv part_002.csv country=my/part_001.csv part_002.csv region=europe/country=fr/part_001.csv part_002.csv")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"customer.csv"),(0,i.kt)("td",{parentName:"tr",align:null},"customer/part_001.csvpart_002.csv")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The partitioned settings of the tales are taken from the table metadata (and not from Ingestion config)"))),(0,i.kt)("h2",{id:"parallel-processing-of-files"},"Parallel Processing of Files"),(0,i.kt)("p",null,"When ingesting data from multiple source files, Ingestion activity will read and process individual files in separate threads. It will spawn a fixed number of threads which will pick one file at a time once it's done processing the previous file. Each of this thread will read the file, perform control total and schema validations and apply transformation before publishing it to target. "),(0,i.kt)("p",null,"The number of threads that Ingestion activity spawns to process the files concurrently is determined by the parameter: ",(0,i.kt)("strong",{parentName:"p"},"guzzle.batchpipeline.threads "),"which can be specified when running the activity or passed when calling the activity from ",(0,i.kt)("strong",{parentName:"p"},"Pipeline")),(0,i.kt)("h2",{id:"partial-load-setting-in-guzzle"},"Partial Load setting in Guzzle"),(0,i.kt)("p",null,"When processing multiple source files, Ingestion Activity will process individual files in separate threads. It reads the files, performs control total and schema validations and applies transformation before publishing it to target. A subset of files can fail during this process due to one of the below reasons: :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the control total of the file does not match with the actual file content")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If validations are specified the number of records failing the validation breaches the reject threshold set for a given file")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The file becomes unavailable when Ingestion activity is trying to process it"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Partial Load  "),"setting in Source section determines whether Ingestion activity should write the data to Target if a subset of files have failed the validations. Below describes the behavior of this setting: . "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"will proceed to write to the target datastore excluding the files which had failure. The activity will be marked with the status WARNING")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"false (default)"),(0,i.kt)("td",{parentName:"tr",align:null},"None of the data will be written to the to target datastore and job will be marked with status  FAILED")))))}d.isMDXComponent=!0}}]);