(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[6086],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1238:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={},c={unversionedId:"processing-changes",id:"processing-changes",isDocsHomePage:!1,title:"processing-changes",description:"- Incremental flag is moved from source section to target section in UI and yml. If it is used in existing processing configs then upgrade utility will move this property to target section during upgrade",source:"@site/docs/processing-changes.md",sourceDirName:".",slug:"/processing-changes",permalink:"/docs/processing-changes",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/processing-changes.md",version:"current",frontMatter:{}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Incremental flag is moved from source section to target section in UI and yml. If it is used in existing processing configs then upgrade utility will move this property to target section during upgrade"),(0,o.kt)("li",{parentName:"ul"},"Additional Columns section is moved from source section to target section in UI and yml. If it is used in existing processing configs then upgrade utility will move this section to target section during upgrade"),(0,o.kt)("li",{parentName:"ul"},'Framework generated flag is now removed for framework columns specified in additional columns. If value is specified for framework column then specified value will be used otherwise value will be always framework generated. If it is used in existing processing configs then upgrade utility will remove framework_generated flag from additional columns if its value is "true". If any other value is specified in yml then upgrade utility will keep that framework_generated flag as is and mark the respective config as non-upgradable. When framework_generated flag value is other than "true", upgrade utility will move "incremental" and "additional_columns" section to target but that config will be later marked as non-upgradable. This may result the config to be partrially upgradable if the previous phases of upgrade have succeeded'),(0,o.kt)("li",{parentName:"ul"},"Specifying value for framework column is now only supported for certain framework columns and that depends on operation and incremental settings of the config. New config validation rules are introduced for this so if invalid framework column setting are used then that config will be considered invalid. Consider operation v2 sheet from ",(0,o.kt)("a",{parentName:"li",href:"https://justanalytics.sharepoint.com/:x:/r/teams/Guzzle/Shared%20Documents/Guzzle%20Devt/Specs/Backend/processing%20module.xlsx?d=wbcea376cdeed435ba5664772975b74db&csf=1&web=1&e=WOElaT"},"processing module")," for more details"),(0,o.kt)("li",{parentName:"ul"},"Support for w_created_busines_ts framework column is now removed"),(0,o.kt)("li",{parentName:"ul"},"Processing template engine was treating specified value of additional column as column from source. This behavior is now changed and made consistent with processing spark engine. All value specified in additional columns are now treated as literal (constant) values"),(0,o.kt)("li",{parentName:"ul"},"Processing module usage and behavior of some framework column is now updated. Refer to clarifications sheet from ",(0,o.kt)("a",{parentName:"li",href:"https://justanalytics.sharepoint.com/:x:/r/teams/Guzzle/Shared%20Documents/Guzzle%20Devt/Specs/Backend/processing%20module.xlsx?d=wbcea376cdeed435ba5664772975b74db&csf=1&web=1&e=WOElaT"},"processing module")," for details"),(0,o.kt)("li",{parentName:"ul"},"When using spark engine - statistics of processing job run like inserted, updated,soft deleted etc are stored in job_info record. Values in these columns might not be correct"),(0,o.kt)("li",{parentName:"ul"},"When using template engine - if the strings are provided as single quotes in existing configs, we need to remove quotes manually")))}d.isMDXComponent=!0}}]);