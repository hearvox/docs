(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[2229],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},253:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],o={id:"aws_databricks",title:"AWS Databricks"},s={unversionedId:"how_to_guides/computes/aws_databricks",id:"how_to_guides/computes/aws_databricks",isDocsHomePage:!1,title:"AWS Databricks",description:"Guzzle supports Computing environments on the AWS Cloud. In Guzzle AWS cloud setup, we can use Databricks to execute our workloads. This article helps in using AWS Databricks as a computing environment in Guzzle.",source:"@site/docs/how_to_guides/computes/AWS Databricks.md",sourceDirName:"how_to_guides/computes",slug:"/how_to_guides/computes/aws_databricks",permalink:"/docs/how_to_guides/computes/aws_databricks",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/computes/AWS Databricks.md",version:"current",frontMatter:{id:"aws_databricks",title:"AWS Databricks"},sidebar:"sideBar",previous:{title:"AWS EMR Serverless",permalink:"/docs/how_to_guides/computes/aws_emr-serverless"},next:{title:"Datastore Overview",permalink:"/docs/how_to_guides/datastores/datastore_overview"}},u=[{value:"Use of AWS Databricks as a computing environment",id:"use-of-aws-databricks-as-a-computing-environment",children:[]},{value:"Interface of AWS Databricks compute for cluster type : Data Engineering",id:"interface-of-aws-databricks-compute-for-cluster-type--data-engineering",children:[]},{value:"Interface of AWS Databricks compute for cluster type : Data Analytics.",id:"interface-of-aws-databricks-compute-for-cluster-type--data-analytics",children:[]}],c={toc:u};function p(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Guzzle supports Computing environments on the AWS Cloud. In Guzzle AWS cloud setup, we can use Databricks to execute our workloads. This article helps in using AWS Databricks as a computing environment in Guzzle."),(0,l.kt)("h2",{id:"use-of-aws-databricks-as-a-computing-environment"},"Use of AWS Databricks as a computing environment"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cluster type"),(0,l.kt)("td",{parentName:"tr",align:null},"There are 2 types of Databricks clusters available in Guzzle:",(0,l.kt)("br",null),(0,l.kt)("br",null)," Data Engineering :\xa0Data engineering cluster is recommended for automated workloads. It is recommended to use it for your BAU data loads.",(0,l.kt)("br",null),(0,l.kt)("br",null)," Data Analytics : Data analytics cluster is recommended for interactive queries along with concurrent user support. This cluster type is configurable in Guzzle, and it can also execute the workloads, but it is not recommended to use it for your BAU data loads. Data Analytics cluster is costlier than Data Engineering cluster for per DBU usage and meant for interactive queries through Databricks notebook in a shared environment where multiple people have to collaborate as a team."),(0,l.kt)("td",{parentName:"tr",align:null},"Data Engineering"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify AWS Databricks environment URL."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API token"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify Databricks access token for authentication and to communicate with AWS databricks environment. User can generate token from databricks workspace using ",(0,l.kt)("strong",{parentName:"td"},"User Settings -> Access Tokens -> Generate new token")," option. ",(0,l.kt)("br",null)," To specify the token following options are available:",(0,l.kt)("br",null),"1. ",(0,l.kt)("strong",{parentName:"td"},"Manual"),": Provide api token directly. ",(0,l.kt)("br",null),"2. ",(0,l.kt)("strong",{parentName:"td"},"Secret Manager"),": Use it through AWS Secret manager feature. Give value of the secret name where api token is stored in AWS secret manager instance."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cluster id (applicable for data analytics cluster)"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify analytics cluster name which is precreated in Databricks environment. ",(0,l.kt)("br",null)," Guzzle will show available clusters once a valid API token and URL are configured.",(0,l.kt)("br",null)," UI will show cluster name, but it stores cluster ID in the underlying YML file"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configure retry when job submit fails"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable job resubmittion when Guzzle is not able to successfully submit the job (possibly due to issues like unavailability of cloud resources or error in control plane). by default, Guzzle not perform any retry when job submittion failed. ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Max retry:")," Provide the number of maximum retry ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Min retry interval:")," Provide the interval time between retry in milliseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spark version (applicable for data engineering cluster)"),(0,l.kt)("td",{parentName:"tr",align:null},"Select the spark version that will run on cluster.",(0,l.kt)("br",null)," This drop-down is populated once a valid API token and URL are provided."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable cluster pool"),(0,l.kt)("td",{parentName:"tr",align:null},"To reduce cluster start time, you can attach a cluster to a predefined pool of idle instances, for the driver and worker nodes."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instance pool id (applicable when cluster pool is enableded)"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the predefined pool from the drop-down. Available predefined pools are listed in the drop-down once a valid API token and URL are configured."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Driver node type (applicable for data engineering cluster)"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the instance type for the driver node."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Worker node type (applicable for data engineering cluster)"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the instance type for the worker node."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Workers"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the Fix number of workers to use in cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable autoscaling"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable autoscaling to choose the appropriate number of workers for job, whose requirements changes over time or requirements are unknown."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min workers (applicable when autoscaling is enableded)"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the minimum number of workers to use in cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max workers (applicable when autoscaling is enableded)"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the maximum number of workers to use in cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"On-demand nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"The on-demand size determines the number of on-demand nodes. The rest of the nodes in the cluster will attempt to be spot nodes. The driver will be on demand."),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spot fall back to on-demand"),(0,l.kt)("td",{parentName:"tr",align:null},"If the EC2 spot price exceeds the bid, use on-demand instances instead of spot instances. This applies during both creation and lifetime of the cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max spot price"),(0,l.kt)("td",{parentName:"tr",align:null},"Max price you are willing to pay for Spot instances."),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instance profile"),(0,l.kt)("td",{parentName:"tr",align:null},"Instance profile is used to securely access AWS resources without using AWS keys. ",(0,l.kt)("a",{parentName:"td",href:"https://docs.databricks.com/administration-guide/cloud-configurations/aws/instance-profiles.html"},"Click here")," for more information about how to create and configure instance profiles. Once you have created an instance profile, you can select it in the Instance Profile drop-down list. Make sure your instance profile has permission to access the guzzle config storage and secret manager."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Availability zone"),(0,l.kt)("td",{parentName:"tr",align:null},"Select a specific cluster availability zone where your cluster will launch."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable local storage auto-scaling"),(0,l.kt)("td",{parentName:"tr",align:null},"If you don\u2019t want to allocate a fixed number of EBS volumes at cluster creation time, use autoscaling local storage. When worker begins to run too low on disk, it automatically attaches a new EBS volume to the worker before it runs out of disk space."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EBS volume type (applicable when local storage auto-scaling is disabled)"),(0,l.kt)("td",{parentName:"tr",align:null},"For instance types that do not have a local disk, or if you want to increase your Spark shuffle storage space, you can specify additional EBS volumes. Consider the 'Enable local storage auto-scaling' option if you are not sure how to size them."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Volume counts (applicable when local storage auto-scaling is disabled)"),(0,l.kt)("td",{parentName:"tr",align:null},"Provision the number of volumes for each instance. Users can choose up to 10 volumes per instance."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Volume size in GB (applicable when local storage auto-scaling is disabled)"),(0,l.kt)("td",{parentName:"tr",align:null},"The size of each EBS volume (in GB) for each instance. For general purpose SSD, this value must be within the range 32 - 4096. For throughput optimized HDD, this value must be within the range 500 - 4096."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Customize spark config"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to provide custom Spark configuration properties in a cluster configuration ",(0,l.kt)("br",null),"Ex: conf : spark.sql.broadcastTimeout ",(0,l.kt)("br",null),"value : 5000"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Customize environment variables"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify environment variables to use in spark computes.",(0,l.kt)("br",null)," Ex: Variable : MY_ENVIRONMENT_VARIABLE.",(0,l.kt)("br",null)," Value    : VARIABLE_VALUE"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Init script"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure cluster node initialization or init-script that is a shell script that runs during startup for each cluster node before the Spark driver or worker JVM starts. You can use init scripts to install packages and libraries not included in the Databricks runtime, modify the JVM system classpath, set system properties and environment variables used by the JVM, or modify Spark configuration parameters, among other configuration tasks."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom cluster tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Cluster tags allow you to easily monitor the cost of cloud resources used by various groups in your organization. You can specify tags as key-value pairs, it applies to cluster and its cloud resources like VMs and disk volumes, as well as DBU usage reports."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"interface-of-aws-databricks-compute-for-cluster-type--data-engineering"},"Interface of AWS Databricks compute for cluster type : Data Engineering"),(0,l.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/aws_databricks_2.png",target:"_self"},(0,l.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/aws_databricks_2.png"})),(0,l.kt)("h2",{id:"interface-of-aws-databricks-compute-for-cluster-type--data-analytics"},"Interface of AWS Databricks compute for cluster type : Data Analytics."),(0,l.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/compute/aws_databricks_1.png",target:"_self"},(0,l.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/compute/aws_databricks_1.png"})))}p.isMDXComponent=!0}}]);