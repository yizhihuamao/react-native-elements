(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(234)),c=n(236),i={id:"bottomsheet",title:"Bottom Sheet"},l={unversionedId:"bottomsheet",id:"version-2.2.1/bottomsheet",isDocsHomePage:!1,title:"Bottom Sheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/versioned_docs/version-2.2.1/bottomsheet.md",permalink:"/react-native-elements/docs/2.2.1/bottomsheet",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.2.1/bottomsheet.md",version:"2.2.1",sidebar:"version-2.2.1/docs",previous:{title:"Badge",permalink:"/react-native-elements/docs/2.2.1/badge"},next:{title:"Button",permalink:"/react-native-elements/docs/2.2.1/button"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>list</code>",id:"list",children:[]},{value:"<code>cancelButtonIndex</code>",id:"cancelbuttonindex",children:[]},{value:"<code>buttonProps</code>",id:"buttonprops",children:[]}]}],p={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Overlay Modal that displays content from the bottom of the screen."),Object(o.b)("img",{src:Object(c.a)("img/bottomsheet.gif"),alt:"Bottom Sheet Component"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\n<BottomSheet\n  list={[\n    {title: 'List Item 1'},\n    {title: 'List Item 2'},\n    {\n      title: 'Cancel',\n      containerStyle: {backgroundColor: 'red'},\n      titleStyle: {color: 'white'},\n    },\n  ]}\n  cancelButtonIndex={1}\n  buttonProps={{title: 'Open Bottom Sheet'}}\n/>\n\n<BottomSheet\n  list={[\n    {\n      title: 'Appointments',\n      leftIcon: {name: 'av-timer'},\n    },\n    {\n      title: 'Trips',\n      leftIcon: {name: 'flight-takeoff'},\n    },\n    {\n      title: 'Cancel',\n      leftIcon: {name: 'close', color: 'white'},\n      containerStyle: {backgroundColor: 'red'},\n      titleStyle: {color: 'white'},\n    },\n  ]}\n  cancelButtonIndex={1}\n  buttonProps={{title: 'Open Bottom Sheet'}}\n/>\n\n\n<BottomSheet\n  list={[\n    {\n      title: 'Appointments',\n      leftIcon: {name: 'av-timer'},\n    },\n    {\n      title: 'Trips',\n      leftIcon: {name: 'flight-takeoff'},\n    },\n    {\n      title: 'Cancel',\n      leftIcon: {name: 'close', color: 'white'},\n      containerStyle: {backgroundColor: 'red'},\n      titleStyle: {color: 'white'},\n    },\n  ]}\n  cancelButtonIndex={2}\n  buttonProps={{\n    title: 'Open Buttom Sheet',\n    icon: {\n      name: 'chevron-down',\n      size: 15,\n      color: 'white',\n      type: 'entypo',\n    },\n  }}\n/>\n\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#list"}),Object(o.b)("inlineCode",{parentName:"a"},"list"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#cancelbuttonindex"}),Object(o.b)("inlineCode",{parentName:"a"},"cancelButtonIndex"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#buttonprops"}),Object(o.b)("inlineCode",{parentName:"a"},"buttonProps")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("h3",{id:"list"},Object(o.b)("inlineCode",{parentName:"h3"},"list")),Object(o.b)("p",null,"Array of List Item props of the React Native Element ",Object(o.b)("inlineCode",{parentName:"p"},"ListItem")," component"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"[{",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/react-native-elements/docs/2.2.1/listitem#props"}),"...ListItem props"),"}]"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"[]")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"cancelbuttonindex"},Object(o.b)("inlineCode",{parentName:"h3"},"cancelButtonIndex")),Object(o.b)("p",null,"index of the list item which closes Bottom Sheet Component"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"number"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"null")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"buttonprops"},Object(o.b)("inlineCode",{parentName:"h3"},"buttonProps")),Object(o.b)("p",null,"props of the React Native Element ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," Component"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"{",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/react-native-elements/docs/2.2.1/button#props"}),"...Button props"),"}"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"null")))))}u.isMDXComponent=!0},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},235:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},236:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(235),a=n(237);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,l=o.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return b?e+p:p}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},237:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);