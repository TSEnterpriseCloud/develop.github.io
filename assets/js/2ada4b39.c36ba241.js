"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[4811],{3246:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(4848),i=s(8453);const o={sidebar_position:5,title:"PHP SDK",slug:"php-sdk",description:"The official TSE in Cloud PHP SDK",tags:["sdk","code example","php"]},r=void 0,a={id:"sdks/php-sdk",title:"PHP SDK",description:"The official TSE in Cloud PHP SDK",source:"@site/docs/sdks/php-sdk.md",sourceDirName:"sdks",slug:"/sdks/php-sdk",permalink:"/develop/docs/sdks/php-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdks/php-sdk.md",tags:[{inline:!0,label:"sdk",permalink:"/develop/docs/tags/sdk"},{inline:!0,label:"code example",permalink:"/develop/docs/tags/code-example"},{inline:!0,label:"php",permalink:"/develop/docs/tags/php"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"PHP SDK",slug:"php-sdk",description:"The official TSE in Cloud PHP SDK",tags:["sdk","code example","php"]},sidebar:"tutorialSidebar",previous:{title:"JavaScript SDK",permalink:"/develop/docs/sdks/javascript-sdk"},next:{title:"Python SDK",permalink:"/develop/docs/sdks/python-sdk"}},l={},d=[{value:"\u2611\ufe0f\xa0 Requirements and Dependencies",id:"ballot_box_with_check-requirements-and-dependencies",level:2},{value:"\u2b07\ufe0f\xa0 Download and Installation",id:"arrow_down-download-and-installation",level:2},{value:"\ud83c\udfbb\xa0 Installation with Composer",id:"violin-installation-with-composer",level:3},{value:"\ud83d\udd27\xa0 Installation without Composer",id:"wrench-installation-without-composer",level:3},{value:"\ud83d\udc77\xa0 SDK Structure",id:"construction_worker_man-sdk-structure",level:2},{value:"\ud83d\udce2\xa0 API calls",id:"loudspeaker-api-calls",level:2},{value:"\ud83c\udfa9\xa0 Response customization",id:"tophat-response-customization",level:3},{value:"\ud83d\udd03\xa0 Sorting",id:"arrows_clockwise-sorting",level:3},{value:"\ud83d\udcc3\xa0 Pagination",id:"page_with_curl-pagination",level:3},{value:"\ud83c\udff7\xa0 Filtering",id:"label-filtering",level:3},{value:"\ud83d\udd11\xa0 Authentication &amp; Authorization",id:"key-authentication--authorization",level:2},{value:"\ud83d\udc24\xa0 Getting started",id:"baby_chick-getting-started",level:2},{value:"\ud83d\uddd2\xa0 Retrieve the JSON request body",id:"spiral_notepad-retrieve-the-json-request-body",level:2},{value:"\ud83e\udd65\xa0 Use raw JSON as request body",id:"coconut-use-raw-json-as-request-body",level:2},{value:"\u274c\xa0 Improve error handling",id:"x-improve-error-handling",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2},{value:"\ud83d\udcda Additional resources",id:"books-additional-resources",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"TSE in Cloud PHP SDK"})," is a ",(0,n.jsx)(t.a,{href:"https://www.php.net/",children:"PHP"})," library that offers models and methods to interact with the ",(0,n.jsx)(t.strong,{children:"TSE in Cloud v2 REST API"}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"Do you need a generic intro?",type:"info",children:(0,n.jsxs)(t.p,{children:["If you want to know more generic information about our SDKs, please check the ",(0,n.jsx)(t.a,{href:"/develop/docs/sdks/",children:"SDK Overview"})," page."]})}),"\n",(0,n.jsxs)(t.h2,{id:"ballot_box_with_check-requirements-and-dependencies",children:["\u2611\ufe0f","\xa0 Requirements and Dependencies"]}),"\n",(0,n.jsxs)(t.p,{children:["This SDK supports ",(0,n.jsx)(t.a,{href:"https://www.php.net/supported-versions.php",children:"PHP 7.1 and later"}),". It is mainly based on the ",(0,n.jsx)(t.a,{href:"https://docs.guzzlephp.org/",children:"Guzzle HTTP Client"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"arrow_down-download-and-installation",children:["\u2b07\ufe0f","\xa0 Download and Installation"]}),"\n",(0,n.jsxs)(t.p,{children:["The SDK code and detailed documentation can be found in the ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk",children:"GitHub repository"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"violin-installation-with-composer",children:["\ud83c\udfbb","\xa0 Installation with Composer"]}),"\n",(0,n.jsxs)(t.p,{children:["The SDK is published into ",(0,n.jsx)(t.a,{href:"https://packagist.org/packages/fattureincloud/fattureincloud-php-sdk",children:"Packagist"})," and it can be installed using ",(0,n.jsx)(t.a,{href:"https://getcomposer.org/",children:"Composer"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"composer require fattureincloud/fattureincloud-php-sdk\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Important!",type:"danger",children:(0,n.jsxs)(t.p,{children:["Make sure you always import the newest version of our SDK, you can check which version is the latest on ",(0,n.jsx)(t.a,{href:"https://packagist.org/packages/fattureincloud/fattureincloud-php-sdk",children:"Packagist"})]})}),"\n",(0,n.jsxs)(t.h3,{id:"wrench-installation-without-composer",children:["\ud83d\udd27","\xa0 Installation without Composer"]}),"\n",(0,n.jsx)(t.p,{children:"If you can't install our library using composer there are three routes you can take:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["the first and recommended one is to download the latest release of the sdk ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk/releases",children:"Phar Archive"}),", then you can simply include it in your project."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"require_once('./fattureincloud-php-sdk.phar');\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["the second route is to download our sdk using ",(0,n.jsx)(t.a,{href:"https://php-download.com/package/fattureincloud/fattureincloud-php-sdk",children:"php-download"})," and include it in your project"]}),"\n",(0,n.jsxs)(t.li,{children:["the third route is to create your own custom autoloader and download all the dependencies (transitive included) as explained ",(0,n.jsx)(t.a,{href:"https://ehikioya.com/how-to-install-php-packages-without-composer/",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"construction_worker_man-sdk-structure",children:["\ud83d\udc77","\xa0 SDK Structure"]}),"\n",(0,n.jsx)(t.p,{children:"Our SDK is mainly split into two different packages:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Api"}),": Here you can find the classes that implement our API methods, you will need an instance of one of those classes to actually call our APIs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Model"}),": This package contains all the classes that represent our API requests and responses; when using one of the methods above, you'll have to manage some of those classes."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"There are some special classes in the Model package:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The classes with a name ending for ",(0,n.jsx)(t.em,{children:"Request"})," can be used as request body for one of our methods."]}),"\n",(0,n.jsxs)(t.li,{children:["The classes with a name ending for ",(0,n.jsx)(t.em,{children:"Response"})," will be returned after the execution of one of the methods.\nInstances of all the other classes will be used to compose the requests or responses for our methods."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can think about Request and Response classes as wrappers: each one of them are dedicated to a single method of the API, and they will most of the time contain a single attribute called ",(0,n.jsx)(t.em,{children:"data"}),", that contains the real body of the request or the response represented through a composition of the other classes. Each method will accept at most one instance of the Request classes and will return at most one instance of the Response classes."]}),"\n",(0,n.jsxs)(t.p,{children:["Let's take for example the ",(0,n.jsx)(t.a,{href:"/api-reference#put-/c/-company_id-/entities/suppliers/-supplier_id-",children:"Modify Supplier"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:["It is included in the ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/SuppliersApi.md#modifySupplier",children:"SuppliersApi"})," class, it accepts one instance of the ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Model/ModifySupplierRequest.md",children:"ModifySupplierRequest"})," class and it returns an instance of the ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Model/ModifySupplierResponse.md",children:"ModifySupplierResponse"})," class. In both cases, the ",(0,n.jsx)(t.em,{children:"data"})," parameter will contain an instance of the ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Model/Supplier.md",children:"Supplier"})," class, that represents the modifies to apply to the supplier (for the request) and the final status of the supplier (for the response)."]}),"\n",(0,n.jsxs)(t.p,{children:["In contrast, the ",(0,n.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/entities/suppliers",children:"List Suppliers"})," method is still contained in the ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/SuppliersApi.md#listSuppliers",children:"SuppliersApi"})," class, but it doesn't need any request body and returns a single instance of the ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Model/ListSuppliersResponse.md",children:"ListSuppliersResponse"})," class, where the ",(0,n.jsx)(t.em,{children:"data"})," parameter will contain an array of instances of the Supplier class."]}),"\n",(0,n.jsxs)(t.h2,{id:"loudspeaker-api-calls",children:["\ud83d\udce2","\xa0 API calls"]}),"\n",(0,n.jsx)(t.p,{children:"The API methods can be categorized as follows:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Category (prefix)"}),(0,n.jsx)(t.th,{children:"Request Body"}),(0,n.jsx)(t.th,{children:"Response Body"}),(0,n.jsx)(t.th,{children:"Notes"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"List (list)"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"#-response-customization",children:"\ud83c\udfa9"}),"\xa0 + ",(0,n.jsx)(t.a,{href:"#-sorting",children:"\ud83d\udd03"}),"\xa0 + ",(0,n.jsx)(t.a,{href:"#-pagination",children:"\ud83d\udcc3"})," + ",(0,n.jsx)(t.a,{href:"#%EF%B8%8F-filtering",children:"\ud83c\udff7"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Create (create)"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Get (get)"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#-response-customization",children:"\ud83c\udfa9"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Modify (modify)"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Delete (delete)"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"In addition to the Request, every method could require some additional parameters like the IDs of the company and of the resource."}),"\n",(0,n.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,n.jsxs)(t.p,{children:["In this example, we'll suppose you have to manage just one Company, so we simply inserted its ID directly in the code. If instead, you need to be able to manage multiple companies, you'll need to retrieve the ID of the current company in some way.\nCheck the ",(0,n.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info. Additionally, the ",(0,n.jsx)(t.a,{href:"/quickstarts/php-sdk-quickstart.mdx",children:"PHP Quickstart"})," contains an example of Company ID retrieval using the SDK."]})}),"\n",(0,n.jsxs)(t.h3,{id:"tophat-response-customization",children:["\ud83c\udfa9","\xa0 Response customization"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"List"})," and ",(0,n.jsx)(t.strong,{children:"Post"})," methods include some parameters dedicated to the ",(0,n.jsx)(t.a,{href:"/develop/docs/basics/additional-capabilities/customize-response",children:"response customization"}),". These parameters are passed as method arguments."]}),"\n",(0,n.jsxs)(t.h3,{id:"arrows_clockwise-sorting",children:["\ud83d\udd03","\xa0 Sorting"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"List"})," methods are a particular case because they are related to a set of resources instead of a single one; this means that the API will need to assign an order to the resources that will be returned. If needed, you can explicitly define a ",(0,n.jsx)(t.a,{href:"/develop/docs/basics/additional-capabilities/sort-results",children:"sorting"})," rule by passing the ",(0,n.jsx)(t.strong,{children:"scope"})," parameter."]}),"\n",(0,n.jsxs)(t.h3,{id:"page_with_curl-pagination",children:["\ud83d\udcc3","\xa0 Pagination"]}),"\n",(0,n.jsxs)(t.p,{children:["Strictly related to the Sorting functionality is the Pagination. The ",(0,n.jsx)(t.strong,{children:"List"})," methods return a potentially huge set of resources, making it necessary to ",(0,n.jsx)(t.a,{href:"/develop/docs/basics/additional-capabilities/paginate-results",children:"paginate the results"})," to make the responses manageable; each method will then accept an additional set of ",(0,n.jsx)(t.strong,{children:"pagination parameters"}),", and the Response classes will contain some pagination details along with the ",(0,n.jsx)(t.em,{children:"data"})," parameter."]}),"\n",(0,n.jsxs)(t.h3,{id:"label-filtering",children:["\ud83c\udff7","\xa0 Filtering"]}),"\n",(0,n.jsxs)(t.p,{children:["By default, the ",(0,n.jsx)(t.strong,{children:"List"})," methods will return the whole set of available resources for a certain method. If you instead want to focus on a particular subset of resources, you can apply specific ",(0,n.jsx)(t.a,{href:"/develop/docs/basics/additional-capabilities/filter-results",children:"filters"})," to reduce the size of the result and retrieve only what you need."]}),"\n",(0,n.jsxs)(t.h2,{id:"key-authentication--authorization",children:["\ud83d\udd11","\xa0 Authentication & Authorization"]}),"\n",(0,n.jsxs)(t.p,{children:["This SDK allows you to retrieve and refresh the access token with the integrated OAuth Helper, you can find a complete guide about it ",(0,n.jsx)(t.a,{href:"/authentication/code-flow/sdk-oauth-helper.mdx",children:"here"}),", in case you are using the manual auth you can always set the token manually."]}),"\n",(0,n.jsxs)(t.h2,{id:"baby_chick-getting-started",children:["\ud83d\udc24","\xa0 Getting started"]}),"\n",(0,n.jsx)(t.p,{children:"After you followed the installation procedure and retrieved a valid Access Token (see above), you can start using our APIs."}),"\n",(0,n.jsxs)(t.p,{children:["First, you need to create a new instance of the ",(0,n.jsx)(t.em,{children:"Configuration"})," class:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"$config = FattureInCloud\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The configuration, along with the HTTP client instance, can be used to instantiate one or more of the ",(0,n.jsx)(t.em,{children:"Api"})," classes, for example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"$supplierApi = new FattureInCloud\\Api\\SuppliersApi(\n    // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n    // This is optional, `GuzzleHttp\\Client` will be used as default.\n    new GuzzleHttp\\Client(),\n    $config\n);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Once you obtained the needed ",(0,n.jsx)(t.em,{children:"Api"})," instance, you can start using the methods it provides."]}),"\n",(0,n.jsx)(t.admonition,{title:"Select the correct APIs!",type:"warning",children:(0,n.jsx)(t.p,{children:"If you want to use a method declared in two different API classes, you'll not be able to use the same instance. Instead, you'll need two different instances, one for each of the needed APIs."})}),"\n",(0,n.jsxs)(t.p,{children:["Let's implement the ",(0,n.jsx)(t.em,{children:"listSuppliers"})," and ",(0,n.jsx)(t.em,{children:"modifySupplier"})," methods explained above:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"$company_id = 12345; // int | The ID of the company.\n$fields = 'fields_example'; // string | List of comma-separated fields.\n$fieldset = 'fieldset_example'; // string | Name of the fieldset.\n$sort = 'sort_example'; // string | List of comma-separated fields for result sorting (minus for desc sorting).\n$page = 1; // int | The page to retrieve.\n$per_page = 5; // int | The size of the page.\n\ntry {\n    $result = $suppliersApi->listSuppliers($company_id, $fields, $fieldset, $sort, $page, $per_page);\n    print_r($result);\n} catch (Exception $e) {\n    echo 'Exception when calling SuppliersApi->listSuppliers: ', $e->getMessage(), PHP_EOL;\n}\n\n$supplier_id = 56; // int | The ID of the supplier.\n\n$supplier = new FattureInCloud\\Model\\Supplier;\n$supplier->setName(\"nuovo nome\");\n$supplier->setPhone(\"03561234312\");\n\n$modify_supplier_request = new FattureInCloud\\Model\\ModifySupplierRequest;\n$modify_supplier_request->setData($supplier);\n\ntry {\n    $result = $suppliersApi->modifySupplier($company_id, $supplier_id, $modify_supplier_request);\n    print_r($result);\n} catch (Exception $e) {\n    echo 'Exception when calling SuppliersApi->modifySupplier: ', $e->getMessage(), PHP_EOL;\n}\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"We're done!",type:"tip",children:(0,n.jsx)(t.p,{children:"You can finally start interacting with the TSE in Cloud API!"})}),"\n",(0,n.jsxs)(t.h2,{id:"spiral_notepad-retrieve-the-json-request-body",children:["\ud83d\uddd2","\xa0 Retrieve the JSON request body"]}),"\n",(0,n.jsxs)(t.p,{children:["If you are experiencing some kind of issue and you want to check the raw JSON sent as the body for your request (and maybe send it to our ",(0,n.jsx)(t.a,{href:"/support.md",children:"customer support"}),") you can do it as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"echo(json_encode($modify_supplier_request));\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"coconut-use-raw-json-as-request-body",children:["\ud83e\udd65","\xa0 Use raw JSON as request body"]}),"\n",(0,n.jsx)(t.p,{children:"If you already have a complete json that you want to use to call our APIs with the SDK without having to build the request object you can do it as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:'$modify_supplier_request = json_decode("{\\"data\\":{\\"name\\":\\"nuovo nome\\", \\"phone\\":\\"03561234312\\"}}");\n'})}),"\n",(0,n.jsxs)(t.h2,{id:"x-improve-error-handling",children:["\u274c","\xa0 Improve error handling"]}),"\n",(0,n.jsx)(t.p,{children:"If you have ever run into a Guzzle exception, you probably know that the error message gets truncated like this one:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:'Exception when calling IssuedDocumentsApi - > createIssuedDocument: [422]\nClient error: `POST http://api-v2.local.fattureincloud.it//c/2/issued_documents`\nresulted in a `422 Unprocessable Entity`\nresponse: {\n\t\t"error": {\n\t\t\t"message": "Invalid request.",\n\t\t\t"validation_result": {\n\t\t\t\t"data": ["The data field is required."],\n\t\t\t\t"data.entity": ["The d (truncated...)\n'})}),"\n",(0,n.jsx)(t.p,{children:"With an incomplete error like this most of the times it's difficult to understand where the actual problem is to proceed to fix it, luckily our SDK error handling can be improved like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"// set your access token\n$config = FattureInCloud\\Configuration::getDefaultConfiguration()->setAccessToken('YUOR_ACCESS_TOKEN');\n\n$stack = new HandlerStack(Utils::chooseHandler());\n// define a custom error size\n$stack->push(Middleware::httpErrors(new BodySummarizer(2048)), 'http_errors');\n$stack->push(Middleware::redirect(), 'allow_redirects');\n$stack->push(Middleware::cookies(), 'cookies');\n$stack->push(Middleware::prepareBody(), 'prepare_body');\n\n// create a custom client\n$client = new Client(['handler' => $stack /* other options here */ ]);\n\n$apiInstance = new FattureInCloud\\Api\\IssuedDocumentsApi(\n    new Client(),\n    $config\n);\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,n.jsxs)(t.p,{children:["If you need a more detailed example, you can check our ",(0,n.jsx)(t.a,{href:"/quickstarts/php-sdk-quickstart.mdx",children:"PHP SDK Quickstart"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Here you can find the full documentation of the available methods and models:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk",children:"PHP SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://packagist.org/packages/fattureincloud/fattureincloud-php-sdk",children:"Packagist page"}),": The main package page on Packagist"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"books-additional-resources",children:["\ud83d\udcda"," Additional resources"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://restfulapi.net/",children:"REST APIs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.php.net/",children:"PHP"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/PHP",children:"PHP on WIkipedia"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.php.net/supported-versions.php",children:"PHP Versions"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://packagist.org/",children:"Packagist"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://getcomposer.org/",children:"Composer"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.guzzlephp.org/",children:"Guzzle HTTP Client"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);