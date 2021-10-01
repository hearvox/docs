(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[9611],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2606:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o=["components"],i={id:"schedule",title:"Schedule"},u={unversionedId:"how_to_guides/author/schedule",id:"how_to_guides/author/schedule",isDocsHomePage:!1,title:"Schedule",description:"This article provides information about Scheduler support in Guzzle and what are different ways to schedule a guzzle job.",source:"@site/docs/how_to_guides/author/Schedule.md",sourceDirName:"how_to_guides/author",slug:"/how_to_guides/author/schedule",permalink:"/docs/how_to_guides/author/schedule",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/author/Schedule.md",version:"current",frontMatter:{id:"schedule",title:"Schedule"},sidebar:"sideBar",previous:{title:"Git Integration and Version Control",permalink:"/docs/how_to_guides/author/git_integration_and_version_control"},next:{title:"Copy Data Tool",permalink:"/docs/how_to_guides/author/copy_data_tool"}},c=[{value:"Jobs to run",id:"jobs-to-run",children:[]}],s={toc:c};function p(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article provides information about Scheduler support in Guzzle and what are different ways to schedule a guzzle job."),(0,l.kt)("p",null,"In Guzzle Users can schedule their job as per specific rules and periods. "),(0,l.kt)("p",null,"For scheduling jobs users can schedule by GUI or Cron settings"),(0,l.kt)("p",null,"Guzzle provider below functionality and parameters for Schedule"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Recurrence by"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the recurrence to follow by which rules. It mainly contains By Months, Week Days, Days, Hours, Minutes, Seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Days"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Every"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify to continue cycle on every period"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Exactly"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify for follow exact time period"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"As per requirements.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Activated"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify if you want to activate the schedule from now."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allow Concurrent Runs"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify to run jobs concurrently"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Runs Jobs in"),(0,l.kt)("td",{parentName:"tr",align:null},"Sequential : ",(0,l.kt)("br",null),"Jobs will run in sequential manner user have to specify to continue on failure as true or false. ",(0,l.kt)("br",null)," Parallel : Jobs will run in a parallel manner."),(0,l.kt)("td",{parentName:"tr",align:null},"Sequential"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h2",{id:"jobs-to-run"},"Jobs to run"),(0,l.kt)("p",null,"In this section the user has to specify the list of jobs they want to run on scheduled time."),(0,l.kt)("p",null,"Guzzle provides global level parameter settings to give in all scheduled job by clicking on Global Parameter and also user can put their specific job parameter by clicking on add parameters"),(0,l.kt)("p",null,"For the specified jobs select type, Job Name, Stage Name (only if type is batch), Parameters."),(0,l.kt)("p",null,"User can provide specific compute, environment, and quantity resource by clicking on (",(0,l.kt)("img",{alt:"settings",src:n(9255).Z}),")"))}p.isMDXComponent=!0},9255:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAuCAIAAADRMBwaAAAAA3NCSVQICAjb4U/gAAACy0lEQVRYhe1Xz28SQRQezALb0CZsE7pCapHdQ0shi1YOAh4UEi94MWvixas3vXntf+Ct3vRP0HgpFw2cBHugGIj2x2EX2ybgcuiQwIaVkuBhIyG7MwOsKDXhO8E3896X7Hvfmxlbv98Hs8OVGWrP5efyc/nZgLIWBtVOs61VFThgAizjXqQZ18K/kN/Z3ft50TOQtJ3afnxvojwWP75ZGwCgoci/Ij8tWJGHasfCEhI28olXkmpVBSYjnN5TUO3kynJJrhFCtjifYX+AZbZ438Tyddh6ldnTf6cE3u2iM8XjcQpM26l0dL2patmKpDPP0re9zNIE8lq3t5P53FS1kWLjwO2in6djtMNoNGzt80cn09IGADRVLX90YubR8lq3Vzg8nZa2jsLhqdY1Fg4tvy/VLJiYDO2ity8ZexY99Q7OGiPTBVc98aCfYxkAgKzAbFn63oDkkIOzRiK4NsygW68OW28LX3/ANi6RGAuZvZStSLmKjAu5yiw+iocN/U8yXkmq7RaPzfM1uOp5cvcGMuT1h6L5Gzjt1IPoOtL6pKmHmxXxoB8XkorwZnLBQeFSjRi6yKNFrzcSyCWCgS/3keO0I6whK9gOR1oGmWS0fEmq2VB8ATW/dORRw8oGAO6UwhrvXeFbHbZwMimBTwqcgSQbz8ssifHQWMZD+seAAMukBD7we+zkKlIVXxQd11eYp/ejwwy6KpvXVkbKVxX45mORvMec1sCga3+L9xH6xTI21zxjydMOyjCc/xxJgTNfw7Gdn9jwu130tLTdLjqxgZiVWHnaQYnx8OBvUuDEWGjMijjtlBgLDVtDjIfNVx0wzlVTVs5TEX5wdcyWpS9ynRByk/Ma9nPsspWrJg5Q7bx8/wm59OLhnYneWVZmPkFg0jfe5T5ycED2oIVRYaX2AACodmBbqyrnAybALjOTP7Atyk8L/2ft5/LTwC9v5ibJPg8jYwAAAABJRU5ErkJggg=="}}]);