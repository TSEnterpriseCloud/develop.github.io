"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[9247],{7483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var o=t(4848),s=t(8453),i=t(1470),r=t(9365);const a={sidebar_position:6,title:"Join & Transform issued documents",slug:"invoice-join-transform",description:"Join & Transform documents",tags:["guides","invoice","transform","join"]},c=void 0,u={id:"scenario/invoice-join-transform",title:"Join & Transform issued documents",description:"Join & Transform documents",source:"@site/docs/scenario/invoice-join-transform.mdx",sourceDirName:"scenario",slug:"/scenario/invoice-join-transform",permalink:"/docs/scenario/invoice-join-transform",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scenario/invoice-join-transform.mdx",tags:[{inline:!0,label:"guides",permalink:"/docs/tags/guides"},{inline:!0,label:"invoice",permalink:"/docs/tags/invoice"},{inline:!0,label:"transform",permalink:"/docs/tags/transform"},{inline:!0,label:"join",permalink:"/docs/tags/join"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Join & Transform issued documents",slug:"invoice-join-transform",description:"Join & Transform documents",tags:["guides","invoice","transform","join"]},sidebar:"tutorialSidebar",previous:{title:"E-Invoice XML customization",permalink:"/docs/scenario/e-invoice-xml-customisation"},next:{title:"Syncronization using Polling",permalink:"/docs/scenario/syncronization-using-polling"}},d={},l=[{value:"\u2753 Join or Transform",id:"question-join-or-transform",level:2},{value:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\xa0 Join",id:"family_man_woman_girl_boy-join",level:3},{value:"\ud83d\udd00\xa0 Transform",id:"twisted_rightwards_arrows-transform",level:3},{value:"\ud83d\udcec\xa0 Send It!",id:"mailbox_with_mail-send-it",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"TSE in Cloud makes it possible to transform a document into another type, for example, a proforma into an invoice, or to join two documents together.\nOf course, our APIs provide the same functionality, here we explain how to do it."}),"\n",(0,o.jsx)(n.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,o.jsxs)(n.p,{children:["In this example, we'll suppose you have to manage just one Company, so we simply inserted its ID directly in the code. If instead, you need to be able to manage multiple companies, you'll need to retrieve the ID of the current company in some way.\nCheck the ",(0,o.jsx)(n.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,o.jsxs)(n.h2,{id:"question-join-or-transform",children:["\u2753"," Join or Transform"]}),"\n",(0,o.jsx)(n.p,{children:"Although the transform and join use cases may seem very different, our APIs similarly treat them."}),"\n",(0,o.jsx)(n.admonition,{title:"These calls will NOT create the document",type:"danger",children:(0,o.jsx)(n.p,{children:"Executing a join or transform call will NOT create the new document but, instead, it will return a body that you will need to pass to the create document method."})}),"\n",(0,o.jsx)(n.p,{children:"Before diving into the functionality details it's better to define the two methods:"}),"\n",(0,o.jsxs)(n.h3,{id:"family_man_woman_girl_boy-join",children:["\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66","\xa0 Join"]}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.a,{href:"/api-reference#get-/c/-company_id-/issued_documents/join",children:"Join Issued Document"})," method to merge two documents into an invoice. The type of documents that can be joined are ",(0,o.jsx)(n.strong,{children:"delivery_notes"}),", ",(0,o.jsx)(n.strong,{children:"orders"}),", ",(0,o.jsx)(n.strong,{children:"quotes"}),", and ",(0,o.jsx)(n.strong,{children:"work_reports"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The required query parameters for the request are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"ids"}),": List of the document ids you want to join (eg. ",(0,o.jsx)(n.em,{children:'"876991,876993,876997"'}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"group"}),": If this flag is set to 1, the request will group the items (e.g. if you have the same products in two different documents, they will be grouped); otherwise the items will be kept separate."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"e_invoice"}),": If this flag is set to 1, your new document will be electronic."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:"GET /c/1235/issued_documents/join?ids=876991,876993,876997&group=1&e_invoice=1 HTTP/1.1\nAccept: application/json\nHost: api-v2.fattureincloud.it\n"})}),"\n",(0,o.jsx)(n.p,{children:"The corresponding code with our SDKs:"}),"\n",(0,o.jsxs)(i.A,{groupId:"languages",children:[(0,o.jsx)(r.A,{value:"cs",label:"C#",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",children:'using System;\nusing It.FattureInCloud.Sdk.Api;\nusing It.FattureInCloud.Sdk.Client;\nusing It.FattureInCloud.Sdk.Model;\n\nnamespace test\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Configuration config = new Configuration();\n\n            //set your access token\n            config.AccessToken = "YOUR_ACCESS_TOKEN";\n            //set your company id\n            var companyId = 12345;\n\n            var apiInstance = new IssuedDocumentsApi(config);\n\n            // Join documents: https://github.com/fattureincloud/fattureincloud-csharp-sdk/blob/master/docs/IssuedDocumentsApi.md#joinissueddocuments\n            try\n            {\n                JoinIssuedDocumentsResponse result = apiInstance.JoinIssuedDocuments(companyId, "876991,876993,876997", 1, 1);\n                Console.Write(result);\n            }\n            catch (ApiException e)\n            {\n                Console.WriteLine("Exception when calling IssuedDocumentsApi.JoinIssuedDocuments: " + e.Message);\n                Console.WriteLine("Status Code: " + e.ErrorCode);\n                Console.WriteLine(e.StackTrace);\n            }\n        }\n    }\n}\n'})})}),(0,o.jsx)(r.A,{value:"go",label:"Go",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n    "os"\n\n    fattureincloudapi "github.com/fattureincloud/fattureincloud-go-sdk/v2/api"\n)\n\nfunc main() {\n    //set your access token\n    auth := context.WithValue(context.Background(), fattureincloudapi.ContextAccessToken, "YOUR_ACCESS_TOKEN")\n    configuration := fattureincloudapi.NewConfiguration()\n    apiClient := fattureincloudapi.NewAPIClient(configuration)\n\n    //set your company id\n    companyId := int32(12345)\n\n    // Transform the document: https://github.com/fattureincloud/fattureincloud-go-sdk/blob/master/docs/IssuedDocumentsAPI.md#joinissueddocuments\n    resp, r, err := apiClient.IssuedDocumentsAPI.JoinIssuedDocuments(auth, companyId).Ids("876991,876993,876997").Group(1).EInvoice(1).Execute()\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error when calling `IssuedDocumentsAPI.JoinIssuedDocuments``: %v\\n", err)\n        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n    }\n    json.NewEncoder(os.Stdout).Encode(resp)\n}\n'})})}),(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import it.fattureincloud.sdk.ApiClient;\nimport it.fattureincloud.sdk.ApiException;\nimport it.fattureincloud.sdk.Configuration;\nimport it.fattureincloud.sdk.auth.*;\nimport it.fattureincloud.sdk.model.*;\nimport it.fattureincloud.sdk.api.IssuedDocumentsApi;\n\npublic class Application {\n    public static void main(String[] args) {\n        ApiClient defaultClient = Configuration.getDefaultApiClient();\n\n        //set your access token\n        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");\n        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR_ACCESS_TOKEN");\n\n        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);\n        //set your company id\n        Integer companyId = 12345;\n\n        // Join documents: https://github.com/fattureincloud/fattureincloud-java-sdk/blob/master/docs/IssuedDocumentsApi.md#joinissueddocuments\n        try {\n            JoinIssuedDocumentsResponse result = apiInstance.joinIssuedDocuments(companyId, "876991,876993,876997", 1, 1);\n            System.out.println(result);\n        } catch (ApiException e) {\n            System.err.println("Exception when calling IssuedDocumentsApi#joinIssuedDocuments");\n            System.err.println("Status code: " + e.getCode());\n            System.err.println("Reason: " + e.getResponseBody());\n            System.err.println("Response headers: " + e.getResponseHeaders());\n            e.printStackTrace();\n        }\n    }\n}\n'})})}),(0,o.jsx)(r.A,{value:"php",label:"PHP",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\nuse FattureInCloud\\Configuration;\nuse FattureInCloud\\Api\\IssuedDocumentsApi;\n\n//set your access token\n$config = Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n$apiInstance = new IssuedDocumentsApi(\n    new GuzzleHttp\\Client(),\n    $config\n);\n\n//set your company id\n$company_id = 12345;\n\n// Join documents: https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/IssuedDocumentsApi.md#joinissueddocuments\ntry {\n    $result = $apiInstance->joinIssuedDocuments($company_id, \"876991,876993,876997\", 1, 1);\n    print_r($result);\n} catch (Exception $e) {\n    echo 'Exception when calling IssuedDocumentsApi->joinIssuedDocuments: ', $e->getMessage(), PHP_EOL;\n}\n"})})}),(0,o.jsx)(r.A,{value:"js",label:"JavaScript",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'var fattureInCloudSdk = require("@fattureincloud/fattureincloud-js-sdk");\nlet defaultClient = fattureInCloudSdk.ApiClient.instance;\n\n//set your access token\nlet OAuth2AuthenticationCodeFlow =\n  defaultClient.authentications["OAuth2AuthenticationCodeFlow"];\nOAuth2AuthenticationCodeFlow.accessToken = "YOUR_ACCESS_TOKEN";\n\nlet apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();\n//set your company id\nlet companyId = 12345;\n\nlet opts = {\n  group: 1,\n  eInvoice: 1,\n};\n\n// Join documents: https://github.com/fattureincloud/fattureincloud-js-sdk/blob/master/docs/IssuedDocumentsApi.md#joinIssuedDocuments\napiInstance.joinIssuedDocuments(companyId, "876991,876993,876997", opts).then(\n  (result) => {\n    console.log(\n      "API called successfully. Returned result: " + JSON.stringify(result)\n    );\n  },\n  (error) => {\n    console.error(error);\n  }\n);\n'})})}),(0,o.jsx)(r.A,{value:"py",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'import fattureincloud_python_sdk\nfrom fattureincloud_python_sdk.api import issued_documents_api\n\nfrom pprint import pprint\n\n# set your access token\nconfiguration = fattureincloud_python_sdk.Configuration()\nconfiguration.access_token = "YOUR_ACCESS_TOKEN"\n\n# set your company id\ncompany_id = 12345\n\n# Join documents: https://github.com/fattureincloud/fattureincloud-python-sdk/blob/master/docs/IssuedDocumentsApi.md#join_issued_documents\nwith fattureincloud_python_sdk.ApiClient(configuration) as api_client:\n\n    api_instance = issued_documents_api.IssuedDocumentsApi(api_client)\n    try:\n        api_response = api_instance.join_issued_documents(company_id, "876991,876993,876997", group=1, e_invoice=1)\n        pprint(api_response)\n    except fattureincloud_python_sdk.ApiException as e:\n        print("Exception when calling IssuedDocumentsApi->join_issued_documents: %s\\n" % e)\n'})})}),(0,o.jsx)(r.A,{value:"rb",label:"Ruby",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rb",children:"require 'time'\nrequire 'fattureincloud_ruby_sdk'\n\nFattureInCloud_Ruby_Sdk.configure do |config|\n  # set your access token\n  config.access_token = 'YOUR ACCESS TOKEN'\nend\n\napi_instance = FattureInCloud_Ruby_Sdk::IssuedDocumentsApi.new\n# set your company id\ncompany_id = 12345\n\nopts = {\n  group: 1,\n  e_invoice: 1\n}\n\n# Join documents: https://github.com/fattureincloud/fattureincloud-ruby-sdk/blob/master/docs/IssuedDocumentsApi.md#join_issued_documents\nbegin\n  result = api_instance.join_issued_documents(company_id, \"876991,876993,876997\", opts)\n  p result\nrescue FattureInCloud_Ruby_Sdk::ApiError => e\n  puts \"Error when calling IssuedDocumentsApi->join_issued_documents: #{e}\"\nend\n"})})}),(0,o.jsx)(r.A,{value:"ts",label:"TypeScript",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import {\n  Configuration,\n  IssuedDocumentsApi,\n} from "@fattureincloud/fattureincloud-ts-sdk";\n\n//set your access token\nconst apiConfig = new Configuration({\n  accessToken: "YOUR_ACCESS_TOKEN",\n});\n\nlet apiInstance = new IssuedDocumentsApi(apiConfig);\n\n//set your company id\nlet companyId = 12345;\n\n// Join documents: https://github.com/fattureincloud/fattureincloud-ts-sdk/blob/master/docs/IssuedDocumentsApi.md#joinIssuedDocuments\napiInstance.joinIssuedDocuments(companyId, "876991,876993,876997", 1, 1).then(\n  (data) => {\n    console.log(data);\n  },\n  (error) => {\n    console.error(error);\n  }\n);\n'})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"twisted_rightwards_arrows-transform",children:["\ud83d\udd00","\xa0 Transform"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/api-reference#get-/c/-company_id-/issued_documents/transform",children:"Transform Issued Document"})," method makes it possible to transform a document into another type of document. Here you can find which types can be transformed and what they can become."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Actual Type"}),(0,o.jsx)(n.th,{children:"New Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Quote"}),(0,o.jsx)(n.td,{children:"Order, Proforma, Receipt, Invoice"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Work Report"}),(0,o.jsx)(n.td,{children:"Order, Proforma, Receipt, Invoice"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Order"}),(0,o.jsx)(n.td,{children:"Proforma, Receipt, Invoice"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Proforma"}),(0,o.jsx)(n.td,{children:"Receipt, Invoice"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"The required query parameters for the request are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"original_document_id"}),": The id of the document you want to transform (eg. ",(0,o.jsx)(n.em,{children:"876993"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"new_type"}),": The type of document you want to obtain (eg. ",(0,o.jsx)(n.em,{children:'"invoice"'}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"e_invoice"}),": If this flag is set to 1, your new document will be electronic."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"transform_keep_copy"}),": If this flag is set to 1, your old document will be preserved."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:"GET /c/1235/issued_documents/transform?original_document_id=876993&new_type=invoice&e_invoice=1&transform_keep_copy=1 HTTP/1.1\nAccept: application/json\nHost: api-v2.fattureincloud.it\n"})}),"\n",(0,o.jsx)(n.p,{children:"The correspondig code with our SDKs:"}),"\n",(0,o.jsxs)(i.A,{groupId:"languages",children:[(0,o.jsx)(r.A,{value:"cs",label:"C#",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cs",children:'using System;\nusing It.FattureInCloud.Sdk.Api;\nusing It.FattureInCloud.Sdk.Client;\nusing It.FattureInCloud.Sdk.Model;\n\nnamespace test\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Configuration config = new Configuration();\n\n            //set your access token\n            config.AccessToken = "YOUR_ACCESS_TOKEN";\n            //set your company id\n            var companyId = 12345;\n\n            var apiInstance = new IssuedDocumentsApi(config);\n\n            // Transform the document: https://github.com/fattureincloud/fattureincloud-csharp-sdk/blob/master/docs/IssuedDocumentsApi.md#transformissueddocument\n            try\n            {\n                TransformIssuedDocumentResponse result = apiInstance.TransformIssuedDocument(companyId, 876993, "invoice", 1, 1);\n                Console.Write(result);\n            }\n            catch (ApiException e)\n            {\n                Console.WriteLine("Exception when calling IssuedDocumentsApi.TransformIssuedDocument: " + e.Message);\n                Console.WriteLine("Status Code: " + e.ErrorCode);\n                Console.WriteLine(e.StackTrace);\n            }\n        }\n    }\n}\n'})})}),(0,o.jsx)(r.A,{value:"go",label:"Go",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n    "os"\n\n    fattureincloudapi "github.com/fattureincloud/fattureincloud-go-sdk/v2/api"\n)\n\nfunc main() {\n    //set your access token\n    auth := context.WithValue(context.Background(), fattureincloudapi.ContextAccessToken, "YOUR_ACCESS_TOKEN")\n    configuration := fattureincloudapi.NewConfiguration()\n    apiClient := fattureincloudapi.NewAPIClient(configuration)\n\n    //set your company id\n    companyId := int32(12345)\n\n    // Transform the document: https://github.com/fattureincloud/fattureincloud-go-sdk/blob/master/docs/IssuedDocumentsAPI.md#transformIssuedDocument\n    resp, r, err := apiClient.IssuedDocumentsAPI.TransformIssuedDocument(auth, companyId).OriginalDocumentId(876993).NewType("invoice").EInvoice(1).TransformKeepCopy(1).Execute()\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error when calling `IssuedDocumentsAPI.TransformIssuedDocument``: %v\\n", err)\n        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n    }\n    json.NewEncoder(os.Stdout).Encode(resp)\n}\n'})})}),(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import it.fattureincloud.sdk.ApiClient;\nimport it.fattureincloud.sdk.ApiException;\nimport it.fattureincloud.sdk.Configuration;\nimport it.fattureincloud.sdk.auth.*;\nimport it.fattureincloud.sdk.model.*;\nimport it.fattureincloud.sdk.api.IssuedDocumentsApi;\n\npublic class Application {\n    public static void main(String[] args) {\n        ApiClient defaultClient = Configuration.getDefaultApiClient();\n\n        //set your access token\n        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");\n        OAuth2AuthenticationCodeFlow.setAccessToken("YOUR_ACCESS_TOKEN");\n\n        IssuedDocumentsApi apiInstance = new IssuedDocumentsApi(defaultClient);\n        //set your company id\n        Integer companyId = 12345;\n\n        // Transform the document: https://github.com/fattureincloud/fattureincloud-java-sdk/blob/master/docs/IssuedDocumentsApi.md#transformissueddocument\n        try {\n            TransformIssuedDocumentResponse result = apiInstance.transformIssuedDocument(companyId, 876993, "invoice", 1, 1);\n            System.out.println(result);\n        } catch (ApiException e) {\n            System.err.println("Exception when calling IssuedDocumentsApi#transformIssuedDocument");\n            System.err.println("Status code: " + e.getCode());\n            System.err.println("Reason: " + e.getResponseBody());\n            System.err.println("Response headers: " + e.getResponseHeaders());\n            e.printStackTrace();\n        }\n    }\n}\n'})})}),(0,o.jsx)(r.A,{value:"php",label:"PHP",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\nuse FattureInCloud\\Configuration;\nuse FattureInCloud\\Api\\IssuedDocumentsApi;\n\n//set your access token\n$config = Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n$apiInstance = new IssuedDocumentsApi(\n    new GuzzleHttp\\Client(),\n    $config\n);\n\n//set your company id\n$company_id = 12345;\n\n// Transform the document: https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/IssuedDocumentsApi.md#transformissueddocument\ntry {\n    $result = $apiInstance->transformIssuedDocument($company_id, 876993, \"invoice\", 1, 1);\n    print_r($result);\n} catch (Exception $e) {\n    echo 'Exception when calling IssuedDocumentsApi->transformIssuedDocument: ', $e->getMessage(), PHP_EOL;\n}\n"})})}),(0,o.jsx)(r.A,{value:"js",label:"JavaScript",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'var fattureInCloudSdk = require("@fattureincloud/fattureincloud-js-sdk");\nlet defaultClient = fattureInCloudSdk.ApiClient.instance;\n\n//set your access token\nlet OAuth2AuthenticationCodeFlow =\n  defaultClient.authentications["OAuth2AuthenticationCodeFlow"];\nOAuth2AuthenticationCodeFlow.accessToken = "YOUR_ACCESS_TOKEN";\n\nlet apiInstance = new fattureInCloudSdk.IssuedDocumentsApi();\n//set your company id\nlet companyId = 12345;\n\nlet opts = {\n  eInvoice: 1,\n  transformKeepCopy: 1,\n};\n\n// Transform issued document: https://github.com/fattureincloud/fattureincloud-js-sdk/blob/master/docs/IssuedDocumentsApi.md#transformIssuedDocument\napiInstance.transformIssuedDocument(companyId, 876993, "invoice", opts).then(\n  (result) => {\n    console.log(\n      "API called successfully. Returned result: " + JSON.stringify(result)\n    );\n  },\n  (error) => {\n    console.error(error);\n  }\n);\n'})})}),(0,o.jsx)(r.A,{value:"py",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'import fattureincloud_python_sdk\nfrom fattureincloud_python_sdk.api import issued_documents_api\n\nfrom pprint import pprint\n\n# set your access token\nconfiguration = fattureincloud_python_sdk.Configuration()\nconfiguration.access_token = "YOUR_ACCESS_TOKEN"\n\n# set your company id\ncompany_id = 12345\n\n# Transform the document: https://github.com/fattureincloud/fattureincloud-python-sdk/blob/master/docs/IssuedDocumentsApi.md#transform_issued_document\nwith fattureincloud_python_sdk.ApiClient(configuration) as api_client:\n\n    api_instance = issued_documents_api.IssuedDocumentsApi(api_client)\n    try:\n        api_response = api_instance.transform_issued_document(company_id, 876993, "invoice", e_invoice=1, transform_keep_copy=1)\n        pprint(api_response)\n    except fattureincloud_python_sdk.ApiException as e:\n        print("Exception when calling IssuedDocumentsApi->transform_issued_document: %s\\n" % e)\n'})})}),(0,o.jsx)(r.A,{value:"rb",label:"Ruby",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rb",children:"require 'time'\nrequire 'fattureincloud_ruby_sdk'\n\nFattureInCloud_Ruby_Sdk.configure do |config|\n  # set your access token\n  config.access_token = 'YOUR ACCESS TOKEN'\nend\n\napi_instance = FattureInCloud_Ruby_Sdk::IssuedDocumentsApi.new\n# set your company id\ncompany_id = 12345\n\nopts = {\n  e_invoice: 1,\n  transform_keep_copy: 1\n}\n\n# Transform the document: https://github.com/fattureincloud/fattureincloud-ruby-sdk/blob/master/docs/IssuedDocumentsApi.md#transform_issued_document\nbegin\n  result = api_instance.transform_issued_document(company_id, 876993, \"invoice\", opts)\n  p result\nrescue FattureInCloud_Ruby_Sdk::ApiError => e\n  puts \"Error when calling IssuedDocumentsApi->transform_issued_document: #{e}\"\nend\n"})})}),(0,o.jsx)(r.A,{value:"ts",label:"TypeScript",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import {\n  Configuration,\n  IssuedDocumentsApi,\n} from "@fattureincloud/fattureincloud-ts-sdk";\n\n//set your access token\nconst apiConfig = new Configuration({\n  accessToken: "YOUR_ACCESS_TOKEN",\n});\n\nlet apiInstance = new IssuedDocumentsApi(apiConfig);\n\n//set your company id\nlet companyId = 12345;\n\n// Transform the document: https://github.com/fattureincloud/fattureincloud-ts-sdk/blob/master/docs/IssuedDocumentsApi.md#transformIssuedDocument\napiInstance.transformIssuedDocument(companyId, 876993, "invoice", 1, 1).then(\n  (data) => {\n    console.log(data);\n  },\n  (error) => {\n    console.error(error);\n  }\n);\n'})})})]}),"\n",(0,o.jsxs)(n.h2,{id:"mailbox_with_mail-send-it",children:["\ud83d\udcec","\xa0 Send It!"]}),"\n",(0,o.jsx)(n.p,{children:"The two methods above won't perform any modification, but they will just return the body that you'll need to use to perform the desired action. This lets you eventually review the final result and modify it if needed."}),"\n",(0,o.jsxs)(n.p,{children:["The request also includes an ",(0,o.jsx)(n.strong,{children:"options"})," section, that makes it possible for our APIs to distinguish a normal document creation from a join or transform request; it is critical that you don't modify this section, but you must send it exactly as it is returned by the API."]}),"\n",(0,o.jsx)(n.admonition,{title:"THE OPTIONS",type:"warning",children:(0,o.jsxs)(n.p,{children:["Make sure to pass also the ",(0,o.jsx)(n.strong,{children:"options"})," field to the creation call, it's the most important part of the process."]})}),"\n",(0,o.jsx)(n.p,{children:"The response will look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:'HTTP/1.1 200 OK\nContent-Type: application/json;charset=UTF-8\n\n{\n    "data": {\n        "type": "invoice",\n        "e_invoice": true,\n        ...,\n    },\n    "options": {\n        "create_from": [\n            "89144071"\n        ],\n        "transform": true,\n        "keep_copy": true\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To persist the operation you must use the ",(0,o.jsx)(n.a,{href:"/api-reference#post-/c/-company_id-/issued_documents",children:"Create Issued Document"})," method, using the previously returned body as input of the request; of course, you can modify it if needed, but please remember to leave the options section as it is. You can also check the ",(0,o.jsx)(n.a,{href:"/guides/invoice-creation.mdx",children:"Issued Document Creation Guide"})," for more details."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var o=t(4164);const s={tabItem:"tabItem_Ymn6"};var i=t(4848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,r),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>x});var o=t(6540),s=t(4164),i=t(3104),r=t(6347),a=t(205),c=t(7485),u=t(1682),d=t(679);function l(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return l(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=p(e),[r,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[u,l]=h({queryString:t,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),y=(()=>{const e=u??f;return m({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{y&&c(y)}),[y]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),l(e),g(e)}),[l,g,i]),tabValues:i}}var g=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var I=t(4848);function _(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=a[t].value;s!==o&&(u(n),r(s))},l=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,I.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,I.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:l,onClick:d,...i,className:(0,s.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,I.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=f(e);return(0,I.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,I.jsx)(_,{...n,...e}),(0,I.jsx)(j,{...n,...e})]})}function x(e){const n=(0,g.A)();return(0,I.jsx)(b,{...e,children:l(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);