"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[8125],{6993:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=o(4848),i=o(8453);const s={sidebar_position:1,title:"Postman Collection",slug:"postman-collection",description:"The official Postman Collection for the TSE in Cloud APIs",tags:["quickstarts","postman","code example"]},a=void 0,r={id:"stepbystep/quickstarts/postman-collection",title:"Postman Collection",description:"The official Postman Collection for the TSE in Cloud APIs",source:"@site/docs/stepbystep/quickstarts/postman-collection.md",sourceDirName:"stepbystep/quickstarts",slug:"/stepbystep/quickstarts/postman-collection",permalink:"/docs/stepbystep/quickstarts/postman-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stepbystep/quickstarts/postman-collection.md",tags:[{inline:!0,label:"quickstarts",permalink:"/docs/tags/quickstarts"},{inline:!0,label:"postman",permalink:"/docs/tags/postman"},{inline:!0,label:"code example",permalink:"/docs/tags/code-example"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Postman Collection",slug:"postman-collection",description:"The official Postman Collection for the TSE in Cloud APIs",tags:["quickstarts","postman","code example"]},sidebar:"tutorialSidebar",previous:{title:"Quickstarts Overview",permalink:"/docs/stepbystep/quickstarts/"},next:{title:"C# SDK Quickstart",permalink:"/docs/stepbystep/quickstarts/csharp-sdk-quickstart"}},l={},c=[{value:"0\ufe0f\u20e3\xa0 Install Postman",id:"zero-install-postman",level:2},{value:"1\ufe0f\u20e3\xa0 Import the Collection",id:"one-import-the-collection",level:2},{value:"2\ufe0f\u20e3\xa0 Authorization",id:"two-authorization",level:2},{value:"3\ufe0f\u20e3\xa0 Test our APIs!",id:"three-test-our-apis",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["To test our API without writing a single line of code, we used our ",(0,n.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"})," to generate a dedicated ",(0,n.jsx)(t.strong,{children:"Postman Collection"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Postman is an API Platform for building and using APIs. Postman Collections can describe all the methods exposed by an API, making it possible for the user to modify the different request parameters and perform actual calls towards the API, obtaining the HTTP response as a result."}),"\n",(0,n.jsxs)(t.h2,{id:"zero-install-postman",children:["0\ufe0f\u20e3","\xa0 Install Postman"]}),"\n",(0,n.jsxs)(t.p,{children:["To use our collection, we suggest ",(0,n.jsx)(t.a,{href:"https://www.postman.com/downloads/",children:"downloading Postman on your device"}),"; it is available for Windows, Mac, and Linux."]}),"\n",(0,n.jsxs)(t.p,{children:["Next, sign up to Postman: don't worry, to use our collection the ",(0,n.jsx)(t.em,{children:"Free Plan"})," is enough ","\ud83d\ude09"]}),"\n",(0,n.jsxs)(t.h2,{id:"one-import-the-collection",children:["1\ufe0f\u20e3","\xa0 Import the Collection"]}),"\n",(0,n.jsxs)(t.p,{children:["Our Collection is generated automatically using our ",(0,n.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),", and can be downloaded from our ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/openapi-fattureincloud",children:"GitHub Repository"})," at the ",(0,n.jsx)(t.strong,{children:"postman/fic-api.json"})," position; it is updated every time a new version of the Specification is released, so you can just redownload it to keep in sync."]}),"\n",(0,n.jsxs)(t.p,{children:["Once you downloaded the JSON file of the collection, you can import it following ",(0,n.jsx)(t.a,{href:"https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman",children:"this procedure"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Now you're almost ready to interact with our API!"}),"\n",(0,n.jsx)(t.admonition,{title:"Not satisfied by our collection?",type:"info",children:(0,n.jsxs)(t.p,{children:["If you prefer, you can instead use our OpenAPI Specification directly, importing the ",(0,n.jsx)(t.em,{children:"openapi.yaml"})," file using ",(0,n.jsx)(t.a,{href:"https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-api-specifications",children:"this procedure"}),". You just need to be sure to download also the files in the ",(0,n.jsx)(t.em,{children:"models"})," folder, otherwise, the import will fail. Also, you need to select the right parameters to import the collection correctly."]})}),"\n",(0,n.jsxs)(t.h2,{id:"two-authorization",children:["2\ufe0f\u20e3","\xa0 Authorization"]}),"\n",(0,n.jsxs)(t.p,{children:["Next, to be able to interact with our API you need to be authorized: see the ",(0,n.jsx)(t.a,{href:"/basics/authentication.mdx",children:"Authentication"})," page for further info."]}),"\n",(0,n.jsx)(t.p,{children:"You have two main options to retrieve a valid token:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Manual Authentication"}),": since Postman is mainly used to test and discover our API behavior, this is a great use case for ",(0,n.jsx)(t.a,{href:"/authentication/manual-authentication.mdx",children:"Manual Authentication"}),". Just generate a new token with the required scopes and insert it in Postman!"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"OAuth 2.0 Authorization Code"}),": if you want to test the authentication step, you can try to ",(0,n.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"retrieve the token"})," and insert it in Postman."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Once you retrieved a valid token, you can just insert it as a Bearer token following ",(0,n.jsx)(t.a,{href:"https://learning.postman.com/docs/sending-requests/authorization/#bearer-token",children:"this procedure"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want, you can also use Postman to ",(0,n.jsx)(t.a,{href:"https://learning.postman.com/docs/sending-requests/authorization/#authorization-code",children:"retrieve your Access Token automatically"})," from its interface.\nTo set it up, click on the collection and select the ",(0,n.jsx)(t.em,{children:"Authorization"})," tab, then compile the ",(0,n.jsx)(t.strong,{children:"Configure New Token"})," form."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Configure New Token Form",src:o(4045).A+"#gh-light-mode-only",width:"1082",height:"1320"}),"\n",(0,n.jsx)(t.img,{alt:"Configure New Token Form",src:o(5834).A+"#gh-dark-mode-only",width:"611",height:"665"})]}),"\n",(0,n.jsx)(t.p,{children:"The parameters are:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Auth URL"}),": ",(0,n.jsx)(t.a,{href:"https://api-v2.fattureincloud.it/oauth/authorize",children:"https://api-v2.fattureincloud.it/oauth/authorize"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Access Token URL"}),": ",(0,n.jsx)(t.a,{href:"https://api-v2.fattureincloud.it/oauth/token",children:"https://api-v2.fattureincloud.it/oauth/token"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Callback URL"}),": The redirect URL declared for the OAuth2 Application"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["All the other parameters can be found on the ",(0,n.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})," page."]}),"\n",(0,n.jsxs)(t.h2,{id:"three-test-our-apis",children:["3\ufe0f\u20e3","\xa0 Test our APIs!"]}),"\n",(0,n.jsxs)(t.p,{children:["You're finally ready to test our API using Postman. Select the method you want to try, compile the request parameters and click the ",(0,n.jsx)(t.strong,{children:"Send"})," button! Have fun!"]}),"\n",(0,n.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"warning",children:(0,n.jsxs)(t.p,{children:["Many of our methods are Company-scoped, which means they require to indicate the ID of the Company we're operating on.",(0,n.jsx)(t.br,{}),"\n","The good news is that you can use Postman to retrieve it! Check the ",(0,n.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info!"]})}),"\n",(0,n.jsx)(t.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.postman.com/",children:"Postman API Platform"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.postman.com/downloads/",children:"Download Postman"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5834:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/dark-postman-1-16befb079b12cd6454b1440b019877b8.png"},4045:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/postman-1-7aed67d84e87cdcf39b075236bd44b5e.png"},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);