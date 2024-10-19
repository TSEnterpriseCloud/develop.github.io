"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[4317],{5328:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=s(4848),n=s(8453);const i={sidebar_position:1,title:"Common Terms",slug:"common-terms",description:"Most common terms list",tags:["basics","terms","concepts"]},a=void 0,r={id:"stepbystep/common-terms",title:"Common Terms",description:"Most common terms list",source:"@site/docs/stepbystep/common-terms.md",sourceDirName:"stepbystep",slug:"/stepbystep/common-terms",permalink:"/develop/docs/stepbystep/common-terms",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stepbystep/common-terms.md",tags:[{inline:!0,label:"basics",permalink:"/develop/docs/tags/basics"},{inline:!0,label:"terms",permalink:"/develop/docs/tags/terms"},{inline:!0,label:"concepts",permalink:"/develop/docs/tags/concepts"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Common Terms",slug:"common-terms",description:"Most common terms list",tags:["basics","terms","concepts"]},sidebar:"tutorialSidebar",previous:{title:"Step by step overview",permalink:"/develop/docs/stepbystep/"},next:{title:"Company methods",permalink:"/develop/docs/stepbystep/company-methods"}},c={},l=[{value:"<IIcon></IIcon> Common Terms List",id:"-common-terms-list",level:2},{value:"<IIcon></IIcon> URL",id:"-url",level:3},{value:"<IIcon></IIcon> CID",id:"-cid",level:3},{value:"<IIcon></IIcon> APIGateway",id:"-apigateway",level:3},{value:"<IIcon></IIcon>  apigwt_base_url",id:"--apigwt_base_url",level:3},{value:"<IIcon></IIcon>  webapi_base_url",id:"--webapi_base_url",level:3},{value:"<IIcon></IIcon>  Scope",id:"--scope",level:3},{value:"<IIcon></IIcon> ResourceName",id:"-resourcename",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components},{IIcon:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IIcon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"If you are a newbie in the TSE in Cloud world, you will most probably feel overwhelmed by the amount of information that you can find in this documentation."}),"\n",(0,o.jsx)(t.p,{children:"This is why we suggest you get started by learning what we're talking about: we think that you need to get accustomed to the terms used by the TSE in Cloud API as a very first step."}),"\n",(0,o.jsxs)(t.h2,{id:"-common-terms-list",children:[(0,o.jsx)(s,{icon:"material-symbols:bookmark-flag-outline"})," Common Terms List"]}),"\n",(0,o.jsxs)(t.p,{children:["Below you can find a list of the ",(0,o.jsx)(t.strong,{children:"main concepts"})," that you need to know:"]}),"\n",(0,o.jsxs)(t.h3,{id:"-url",children:[(0,o.jsx)(s,{icon:"mdi:globe"})," URL"]}),"\n",(0,o.jsx)(t.p,{children:"It is the URL that you connect to to access the application; it has a structure like"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"[protocol]://[cid].domain\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For example ",(0,o.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})]}),"\n",(0,o.jsxs)(t.h3,{id:"-cid",children:[(0,o.jsx)(s,{icon:"mdi:identification-card-outline"})," CID"]}),"\n",(0,o.jsx)(t.p,{children:"Customer identification is assigned uniquely to a customer"}),"\n",(0,o.jsx)(t.p,{children:"For example csdemo"}),"\n",(0,o.jsxs)(t.h3,{id:"-apigateway",children:[(0,o.jsx)(s,{icon:"lsicon:offline-gateway-outline"})," APIGateway"]}),"\n",(0,o.jsx)(t.p,{children:"An API gateway is the gatekeeper for access to APIs, which protects and manages traffic between API consumers and applications that expose those APIs. Adopting an API gateway provides several benefits by ensuring:"}),"\n",(0,o.jsx)(t.p,{children:"authentication and authorization,\nrouting to backends,\nrate limiting to avoid overloading systems and protecting against DDoS attacks,\noffloading SSL / TLS traffic to improve performance and handling errors or exceptions,\ntracking and monitoring access to resources.\nTSE APIs intended for integration are exposed downstream of the Teamsystem PaaS API Gateway."}),"\n",(0,o.jsxs)(t.h3,{id:"--apigwt_base_url",children:[(0,o.jsx)(s,{icon:"mdi:globe"}),"  apigwt_base_url"]}),"\n",(0,o.jsx)(t.p,{children:"It is the base url for calling services; it has the form"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"[protocol]://[cid].APIGatewayDomain\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For example: ",(0,o.jsx)(t.a,{href:"https://csdemo.ts-paas.com",children:"https://csdemo.ts-paas.com"})]}),"\n",(0,o.jsxs)(t.h3,{id:"--webapi_base_url",children:[(0,o.jsx)(s,{icon:"mdi:globe"}),"  webapi_base_url"]}),"\n",(0,o.jsx)(t.p,{children:"webapi_base_url: https://[apigwt_base_url]/api"}),"\n",(0,o.jsxs)(t.p,{children:["it is the rootpath that will be referred to below with webapi_base_url, unless otherwise indicated, it is usually composed of api+CID.domain,\nfor example: ",(0,o.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})]}),"\n",(0,o.jsxs)(t.h3,{id:"--scope",children:[(0,o.jsx)(s,{icon:"mdi:compass-outline"}),"  Scope"]}),"\n",(0,o.jsx)(t.p,{children:"Also referred to as [environment] or [environment] represents the set of data to which you have access; although other configurations are possible in Teamsystem Enterprise Cloud, each installation has access to only one environment."}),"\n",(0,o.jsxs)(t.h3,{id:"-resourcename",children:[(0,o.jsx)(s,{icon:"mdi:perm-identity"})," ResourceName"]}),"\n",(0,o.jsx)(t.p,{children:"It is the REST resource name assigned to the application entity; it is used in the rest call."}),"\n",(0,o.jsx)(t.p,{children:"For example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"{{webapi_base_url}}/api/v1/{{scope}}/CO/CustomerSupplierCo/search?company=2\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var o=s(6540);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);