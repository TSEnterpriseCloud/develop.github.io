"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[8600],{3729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(4848),o=n(8453),s=n(3514),i=n(5068);const c={title:"General Knowledge",description:"Facultative documentation for beginners",tags:["general knowledge","beginner","concepts"]},l=void 0,a={id:"support/general-knowledge/index",title:"General Knowledge",description:"Facultative documentation for beginners",source:"@site/docs/support/general-knowledge/index.mdx",sourceDirName:"support/general-knowledge",slug:"/support/general-knowledge/",permalink:"/docs/support/general-knowledge/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/support/general-knowledge/index.mdx",tags:[{inline:!0,label:"general knowledge",permalink:"/docs/tags/general-knowledge"},{inline:!0,label:"beginner",permalink:"/docs/tags/beginner"},{inline:!0,label:"concepts",permalink:"/docs/tags/concepts"}],version:"current",frontMatter:{title:"General Knowledge",description:"Facultative documentation for beginners",tags:["general knowledge","beginner","concepts"]},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/docs/support/FAQs"},next:{title:"OAuth 2.0",permalink:"/docs/support/general-knowledge/oauth2"}},u={},d=[];function p(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"If you need to brush up your knowledge of the general concepts described in this documentation, we wrote some pages for you."}),"\n",(0,r.jsx)(s.A,{items:(0,i.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>w});n(6540);var r=n(4164),o=n(6972),s=n(8774),i=n(5846),c=n(6654),l=n(1312),a=n(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:o,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function g(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},5068:(e,t,n)=>{n.d(t,{$S:()=>r});n(4586);function r(){return n(4070).$S(...arguments)}},5846:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(6540),o=n(4586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);