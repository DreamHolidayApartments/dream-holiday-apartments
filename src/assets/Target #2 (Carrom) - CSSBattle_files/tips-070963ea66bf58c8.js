(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2916],{7981:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tips",function(){return n(2499)}])},5805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(237).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,s=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?s.loader=function(){return e}:"function"===typeof e?s.loader=e:"object"===typeof e&&(s=o({},s,e));!1;(s=o({},s,t)).suspense&&(delete s.ssr,delete s.loading);s.loadableGenerated&&delete(s=o({},s,s.loadableGenerated)).loadableGenerated;if("boolean"===typeof s.ssr&&!s.suspense){if(!s.ssr)return delete s.ssr,i(n,s);delete s.ssr}return n(s)},t.noSSR=i;var o=n(9419).Z,s=n(3903).Z,a=(s(n(2784)),s(n(2060)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6941:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(3903).Z)(n(2784)).default.createContext(null);t.LoadableContext=r},2060:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(616).Z,o=n(416).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(9419).Z,a=(0,n(3903).Z)(n(2784)),i=n(6941),l=n(2784).useSyncExternalStore,d=[],c=[],u=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var f=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=function(){if(!d){var t=new f(e,o);d={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return d.promise()},r=function(){n();var e=a.default.useContext(i.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach((function(t){e(t)}))},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=a.default.lazy(o.loader));var d=null;if(!u){var h=o.webpack?o.webpack():o.modules;h&&c.push((function(e){var t=!0,r=!1,o=void 0;try{for(var s,a=h[Symbol.iterator]();!(t=(s=a.next()).done);t=!0){var i=s.value;if(-1!==e.indexOf(i))return n()}}catch(l){r=!0,o=l}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}))}var p=o.suspense?function(e,t){return r(),a.default.createElement(o.lazy,s({},e,{ref:t}))}:function(e,t){r();var n=l(d.subscribe,d.getCurrentValue,d.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:d.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:d.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",a.default.forwardRef(p)}(h,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){m(d).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return u=!0,t()};m(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var y=p;t.default=y},1453:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(2322),o=n(6746),s=n(5598);function a(e){var t=e.children,n=e.sticky,a=e.keyCombo,i=e.extraContent,l=e.meta;a&&a.split("+");return(0,r.jsxs)("div",{className:"item__header  ".concat(n?"item__header--sticky":""),children:[(0,r.jsxs)(s.HStack,{gap:"0.5rem",children:[(0,r.jsx)("h3",{className:"header__title",children:t}),i,a?(0,r.jsx)(o.M,{value:a}):null]}),(0,r.jsx)("div",{className:"header__extra-info",children:l})]})}},6746:function(e,t,n){"use strict";n.d(t,{M:function(){return d}});var r=n(6383),o=n(930),s=n(2322),a=n(2784),i=n(5598);function l(e){return"Control"===e?"ctrl":e.toLowerCase()}var d=function(e){var t=e.value,n=t&&t.split("+"),d=(0,r.Z)(a.useState([]),2),c=d[0],u=d[1];(0,a.useEffect)((function(){var e=function(e){var t=l(e.key);n.includes(t)&&!c.includes(t)&&(c.push(t),u((0,o.Z)(c)))},t=function(e){var t=l(e.key);n.includes(t)&&c.includes(t)&&(c.splice(c.indexOf(t),1),u((0,o.Z)(c)))};return document.body.addEventListener("keydown",e,{capture:!0}),document.body.addEventListener("keyup",t,{capture:!0}),function(){removeEventListener("keydown",e),removeEventListener("keyup",t)}}),[]);c.length;return(0,s.jsx)(i.HStack,{gap:"0.25rem",children:n&&n.map((function(e,t){return(0,s.jsx)("p",{className:"pill  pill--key ".concat(c.includes(e)?"pill--key-pressed":""),children:e},t)}))})}},2499:function(e,t,n){"use strict";n.r(t);var r=n(2322),o=(n(2784),n(7729)),s=n.n(o),a=n(5237),i=n.n(a),l=n(1251),d=n(1453),c=i()((function(){return Promise.all([n.e(8917),n.e(284),n.e(2141),n.e(7015)]).then(n.bind(n,7755)).then((function(e){return e.TipCodeBox}))}),{loadableGenerated:{webpack:function(){return[7755]}},ssr:!1,loading:function(){return(0,r.jsx)(l.e9,{})}});function u(e){var t=e.title,n=e.children,o=e.beforeCode,s=e.afterCode;return(0,r.jsxs)("div",{className:"scoring-tip",children:[(0,r.jsx)("h2",{className:"scoring-tip__title",children:t}),(0,r.jsx)("p",{className:"scoring-tip__desc",children:n}),(0,r.jsxs)("div",{className:"scoring-tip__code-container",children:[(0,r.jsx)(c,{code:o,isBefore:!0}),(0,r.jsx)(c,{code:s,isAfter:!0})]})]})}function h(e){var t=e.name,n=e.username;return(0,r.jsx)("a",{className:"link",href:"https://cssbattle.dev/player/".concat(n),children:t})}t.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Tips & Tricks | CSSBattle"},"title"),(0,r.jsx)("meta",{property:"og:title",content:"Tips & Tricks | CSSBattle"},"ogTitle")]}),(0,r.jsxs)("div",{className:"container__item container__item--aside container__item--choose-leaderboard",children:[(0,r.jsx)(d.M,{children:"Info"}),(0,r.jsxs)("div",{className:"item__content item__content--inner-page",children:[(0,r.jsxs)("p",{className:"para",style:{marginTop:0},children:["Here, we list some tips and tricks for CSS code-golfing that can help you get better scores. These tips are curated from numerous sources, many of which are generously shared by some of our awesome CSSBattle-ers:"," ",(0,r.jsx)(h,{name:"Alex Zaworski",username:"alexzaworski"}),","," ",(0,r.jsx)(h,{name:"Ilya Streltsyn",username:"selenit"}),","," ",(0,r.jsx)(h,{name:"Praveen",username:"apnerve"}),","," ",(0,r.jsx)(h,{name:"Stas Lashmanov",username:"cyberap"}),","," ",(0,r.jsx)(h,{name:"Jon Uleis",username:"jon"})," and many more \ud83d\ude4f!"]}),(0,r.jsxs)("p",{className:"para tip-disclaimer",children:[(0,r.jsx)("strong",{children:"DISCLAIMER"}),": The strategies listed here are not meant to be used in real projects. They mostly help you in CSSBattle code-golfing (expect for few which can be used elsewhere). In real world you'll probably use a minifier to make your files smaller."]}),(0,r.jsxs)("p",{className:"para",children:["Want to add a tip you discovered?"," ",(0,r.jsx)("a",{href:"mailto:contact@cssbattle.dev",children:"Mail us"}),"."]})]})]}),(0,r.jsxs)("div",{className:"container__item container__item--padded container__item--main",children:[(0,r.jsx)(d.M,{children:"Tips & Tricks"}),(0,r.jsxs)("div",{className:"item__content item__content--inner-page",children:[(0,r.jsx)(u,{title:"White-space removal",beforeCode:"<style>\n\tdiv {\n\t\tcolor: red;\n\t}\n</style>",afterCode:"<style>div{color:red;}</style>",children:"The most basic strategy for code-golfing \u2014 remove unnecessary spaces, tabs, newlines, etc. These characters are not necessary for the code to work functionally. This is one of the things that minifiers do to your code too."}),(0,r.jsx)(u,{title:"Omit the last semi-colon",beforeCode:"<style>\n\tdiv {\n\t\tbackground: red;\n\t\theight: 200px;\n\t}\n</style>",afterCode:"<style>\n\tdiv {\n\t\tbackground: red;\n\t\theight: 200px\n\t}\n</style>",children:"Semi-colon for the last CSS declaration in a declaration block can be omitted."}),(0,r.jsx)(u,{title:"Omit the closing tags",beforeCode:"<div></div>\n<style>\n\tdiv {\n\t\tcolor: red;\n\t}\n</style>",afterCode:"<div>\n<style>\n\tdiv {\n\t\tcolor: red;\n\t}",children:"In most cases, you can omit the closing tag of an element. This works because the Browser closes them for you, to make the HTML valid. Though, be cautious as in some cases seemingly unclosed sibling tags can become parent-child of each other."}),(0,r.jsxs)(u,{title:"Remove Double Quotes",beforeCode:'<div style="border:1px solid blue"></div>',afterCode:"<div style=border:solid+10px#00f></div>",children:["You can remove the quotes from HTML attributes and replace the white-spaces before numbers with a ",(0,r.jsx)("code",{children:"+"}),"/",(0,r.jsx)("code",{children:"-"}),". Though, some re-ordering might be required to make things work. This is a very good example of exploiting how parsers understand your code. In the following example, we reorder things such that"," ",(0,r.jsx)("code",{children:"+"})," marks the beginning of ",(0,r.jsx)("code",{children:"border-width"})," and"," ",(0,r.jsx)("code",{children:"#"})," marks the start of ",(0,r.jsx)("code",{children:"border-color"}),"."]}),(0,r.jsxs)(u,{title:"Shorten selectors with made-up attributes",beforeCode:"<p><p><p><p><p>\n<style>\n\tp:nth-child(3){\n\t\tbackground: red;\n\t}\n</style>",afterCode:"<p><p><p i><p><p>\n<style>\n\tp[i]{\n\t\tbackground: red;\n\t}\n</style>",children:["You can assign made-up attribute to any element to target it specifically in your selectors. Here is an example where you want to select the 3rd ",(0,r.jsx)("code",{children:"<P>"})," tag."]}),(0,r.jsxs)(u,{title:"position:fixed beats position:absolute, mostly",beforeCode:"<style>\n\tdiv{\n\t\tposition: absolute;\n\t}\n</style>",afterCode:"<style>\n\tdiv{\n\t\tposition: fixed;\n\t}\n</style>",children:["In most cases, you might want to absolutely position an element with respect to the window/viewport instead of another element. In such"," ",(0,r.jsx)("code",{children:"position: fixed"})," can save you a good 3 characters! Neat, right?!"]}),(0,r.jsxs)(u,{title:"Play with the units",beforeCode:"<style>\n\tdiv{\n\t\twidth: 100px;\n\t}\n</style>",afterCode:"<style>\n\tdiv{\n\t\twidth: 25vw;\n\t}\n</style>",children:["Experimenting with different units can save you a character or two, and give you that extra edge. For eg. ",(0,r.jsx)("code",{children:"100px"})," is better written as ",(0,r.jsx)("code",{children:"25vw"})," for CSSBattle's 400px target width. And guess what,"," ",(0,r.jsx)(h,{name:"Alex Zaworski",username:"alexzaworski"})," also has created a wonderful open-source tool to help you with just this, called"," ",(0,r.jsx)("a",{href:"https://github.com/alexzaworski/unit-golfer",rel:"external noopener",children:"unit-golf"}),"!"]}),(0,r.jsxs)(u,{title:"You don't always need to add an HTML element to style!",beforeCode:"<div>\n<style>\n\tdiv{\n\t\tbackground: red;\n\t}\n</style>",afterCode:"<style>\n\tbody{\n\t\tbackground: red;\n\t}\n</style>",children:["By default, you have the ",(0,r.jsx)("code",{children:"html"})," and ",(0,r.jsx)("code",{children:"body"})," ","elements to style in your code!"]}),(0,r.jsxs)(u,{title:"Omit the 'px' unit",beforeCode:"<div>\n<style>\n\tdiv {\n\t\twidth: 100px;\n\t\tmargin: 8px;\n\t}\n</style>",afterCode:"<div>\n<style>\n\tdiv {\n\t\twidth: 100;\n\t\tmargin: 8;\n\t}\n</style>",children:["For many properties, you can omit the ",(0,r.jsx)("code",{children:"px"})," unit and just write the numeric value."]}),(0,r.jsxs)(u,{title:"<body> has some ancient super-attributes!",beforeCode:"<style>\n\tbody {\n\t\tbackground: red;\n\t\tcolor:green;\n\t}\n</style>",afterCode:"<body bgcolor=red text=green>",children:["There are old deprecated attributes available on ",(0,r.jsx)("code",{children:"body"})," ","tag to give background and text color. These can prove deadly in battles!"]}),(0,r.jsx)("p",{className:"para",children:"We'll keep adding more mind-blowing tips here. Check back for more!"})]})]})]})}},5237:function(e,t,n){e.exports=n(5805)}},function(e){e.O(0,[9774,2888,179],(function(){return t=7981,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=tips-070963ea66bf58c8.js.map