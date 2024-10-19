"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[5472],{1853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(4848),s=n(8453),i=n(1470),a=n(9365);const l={sidebar_position:4,title:"Filter Results",slug:"filter-results",description:"Filter the results",tags:["basics","additional capabilities","customize","optional","filter","query","list","code example","c#","java","javascript","php","python","ruby","typescript"]},o=void 0,d={id:"basics/additional-capabilities/filter-results",title:"Filter Results",description:"Filter the results",source:"@site/docs/basics/additional-capabilities/filter-results.mdx",sourceDirName:"basics/additional-capabilities",slug:"/basics/additional-capabilities/filter-results",permalink:"/docs/basics/additional-capabilities/filter-results",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/additional-capabilities/filter-results.mdx",tags:[{inline:!0,label:"basics",permalink:"/docs/tags/basics"},{inline:!0,label:"additional capabilities",permalink:"/docs/tags/additional-capabilities"},{inline:!0,label:"customize",permalink:"/docs/tags/customize"},{inline:!0,label:"optional",permalink:"/docs/tags/optional"},{inline:!0,label:"filter",permalink:"/docs/tags/filter"},{inline:!0,label:"query",permalink:"/docs/tags/query"},{inline:!0,label:"list",permalink:"/docs/tags/list"},{inline:!0,label:"code example",permalink:"/docs/tags/code-example"},{inline:!0,label:"c#",permalink:"/docs/tags/c"},{inline:!0,label:"java",permalink:"/docs/tags/java"},{inline:!0,label:"javascript",permalink:"/docs/tags/javascript"},{inline:!0,label:"php",permalink:"/docs/tags/php"},{inline:!0,label:"python",permalink:"/docs/tags/python"},{inline:!0,label:"ruby",permalink:"/docs/tags/ruby"},{inline:!0,label:"typescript",permalink:"/docs/tags/typescript"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Filter Results",slug:"filter-results",description:"Filter the results",tags:["basics","additional capabilities","customize","optional","filter","query","list","code example","c#","java","javascript","php","python","ruby","typescript"]},sidebar:"tutorialSidebar",previous:{title:"Customize response",permalink:"/docs/basics/additional-capabilities/customize-response"},next:{title:"Debug your integration",permalink:"/docs/basics/debug-your-integration"}},c={},u=[{value:"\ud83d\udd27\xa0 Building a query",id:"wrench-building-a-query",level:2},{value:"\ud83d\udd0d\xa0 Filterable fields",id:"mag-filterable-fields",level:2},{value:"\ud83d\udcda\xa0 Additional Resources",id:"books-additional-resources",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Some of our APIs (e.g. the ",(0,r.jsx)(t.em,{children:"LIST"})," methods) return a set of resources instead of a single one. This means that the returned response could be potentially huge, involving a high number of complex resources, making the response difficult to manage and send to your application. For this reason, you should filter the results to get only the data you need."]}),"\n",(0,r.jsx)(t.admonition,{title:"Check the fields",type:"info",children:(0,r.jsx)(t.p,{children:"Our APIs let you apply a filter only on a certain set of fields. Please check the table below for the available fields for each method."})}),"\n",(0,r.jsxs)(t.p,{children:['To filter the returned resources, all you have to do is to add the "',(0,r.jsx)(t.strong,{children:"q"}),'" parameter to the query string, containing the desired query filter.\nThis parameter must be provided as an URL-encoded string to avoid issues related to special characters in the string.']}),"\n",(0,r.jsx)(t.p,{children:"For example, this request will filter all the clients, returning only the client with the specified vat_number.\nThe query parameter value is the following:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Original value"}),(0,r.jsx)(t.th,{children:"URL-encoded value"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vat_number = '11553420156'"}),(0,r.jsx)(t.td,{children:"vat_number%20%3D%20%2711553420156%27"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"This translates to the following code:"}),"\n",(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(a.A,{value:"curl",label:"cURL",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl --request GET \\\n     --url 'https://api-v2.fattureincloud.it/c/company_id/entities/clients?q=vat_number%20%3D%20%2711553420156%27' \\\n     --header 'Accept: application/json'\n     --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'\n"})})}),(0,r.jsx)(a.A,{value:"http",label:"HTTP",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:"GET https://api-v2.fattureincloud.it/c/{companyId}/entities/clients?q=vat_number%20%3D%20%2711553420156%27\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"The corresponding code examples:"}),"\n",(0,r.jsxs)(i.A,{groupId:"languages",children:[(0,r.jsx)(a.A,{value:"cs",label:"C#",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",children:'// this code uses RestSharp Client: https://restsharp.dev\n// you can install it with the following command:\n// dotnet add package RestSharp\n\nusing System;\nusing RestSharp;\n\nnamespace restclient\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            // for this example we define the token as a string, but you should have obtained it in the previous steps\n            // the token is valid for the "received_documents:r" scope needed to perform this operation\n            var token = "YOUR_ACCESS_TOKEN";\n\n            // these parameters are usually retrieved through our APIs or stored in a DB\n            var companyId = 17;\n\n            var query = System.Web.HttpUtility.ParseQueryString(string.Empty);\n            query.Add("q", "vat_number = \'11553420156\'");\n\n            var url = "https://api-v2.fattureincloud.it/c/" + companyId  + "/entities/clients" + "?" + query;\n\n            var client = new RestClient(url);\n            var request = new RestRequest(Method.GET);\n\n            request.AddHeader("authorization", "Bearer " + token);\n            IRestResponse response = client.Execute(request);\n            Console.Write(response.Content.ToString());\n        }\n    }\n}\n'})})}),(0,r.jsx)(a.A,{value:"go",label:"Go",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'// NOTE: this is a complete request, but please customize it!!!\n// In the next step we\'ll explain how to perform the request to the API.\n\n// in this example we are using our Go SDK\n// https://github.com/fattureincloud/fattureincloud-go-sdk\npackage main\n\nimport (\n\t"io/ioutil"\n\t"log"\n\t"net/http"\n\t"net/url"\n)\n\nfunc main() {\n\n\tvar bearer = "Bearer " + "a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJtUm80MXlpSVFTbHN0bXRadG5jNEZhYk5QaW41ejJmdiIsImV4cCI6MTY2MjU1NDg5NX0.bvYHc9et0p9lsaTIWGX8vGqE6uHKiwBPyQlXwZqIH3o"\n\n\tvalues := url.Values{}\n\tvalues.Add("q", "vat_number = \'11553420156\'")\n\tquery := values.Encode()\n\n\tcompanyId := "2"\n\turi := "http://api-v2.local.fattureincloud.it/c/" + companyId + "/received_documents?" + query\n\n\treq, _ := http.NewRequest("GET", uri, nil)\n\treq.Header.Add("Authorization", bearer)\n\n\tclient := &http.Client{}\n\tresp, err := client.Do(req)\n\tif err != nil {\n\t\tlog.Println("Error on response.\\n[ERROR] -", err)\n\t}\n\tdefer resp.Body.Close()\n\n\tbody, err := ioutil.ReadAll(resp.Body)\n\tif err != nil {\n\t\tlog.Println("Error while reading the response bytes:", err)\n\t}\n\tlog.Println(string([]byte(body)))\n\n}\n'})})}),(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import okhttp3.HttpUrl;\nimport okhttp3.OkHttpClient;\nimport okhttp3.Request;\nimport okhttp3.Response;\nimport java.io.IOException;\nimport java.net.URL;\n\npublic class Application {\n    public static void main(String[] args) throws IOException {\n\n        // for this example we define the token as a string, but you should have obtained it in the previous steps\n        // the token is valid for the "received_documents:r" scope needed to perform this operation\n        String token = "YOUR_ACCESS_TOKEN";\n\n        // these parameters are usually retrieved through our APIs or stored in a DB\n        Integer companyId = 16;\n\n        URL url = new HttpUrl.Builder()\n                .scheme("https")\n                .host("api-v2.fattureincloud.it")\n                .addPathSegments("c/" + companyId  + "/entities/clients")\n                .addQueryParameter("q", "vat_number=\'11553420156")\n                .addQueryParameter("type", "expense")\n                .build().url();\n\n        OkHttpClient client = new OkHttpClient();\n        Request request = new Request.Builder()\n                .header("Authorization", "Bearer " + token)\n                .url(url)\n                .build();\n        Response response = client.newCall(request).execute();\n        System.out.println(response.body().string());\n    }\n}\n'})})}),(0,r.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'var http = require("https");\n\n// for this example we define the token as a string, but you should have obtained it in the previous steps\n// the token is valid for the "received_documents:r" scope needed to perform this operation\nvar token = "YOUR_ACCESS_TOKEN";\n\n// these parameters are usually retrieved through our APIs or stored in a DB\nvar companyId = 16;\n\nvar params = {\n  q: "vat_number = \'11553420156\'",\n};\n\nvar query = new URLSearchParams(params).toString(); // url-encoded query string\n\nvar options = {\n  method: "GET",\n  hostname: "api-v2.fattureincloud.it",\n  port: null,\n  path: "/c/" + companyId + "/entities/clients" + query,\n  headers: {\n    authorization: "Bearer " + token,\n  },\n};\n\nvar req = http.request(options, function (res) {\n  var chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'})})}),(0,r.jsx)(a.A,{value:"php",label:"PHP",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"// this code uses Guzzle HTTP Client: https://docs.guzzlephp.org/en/stable/\n// and also ext-json\n// you can install them with the following command:\n// composer require guzzlehttp/guzzle ext-json\nrequire 'vendor/autoload.php';\nuse GuzzleHttp\\Client;\nuse GuzzleHttp\\Exception\\ClientException;\nuse GuzzleHttp\\Psr7;\n\n\n// for this example we define the token as a string, but you should have obtained it in the previous steps\n// the token is valid for the \"received_documents:r\" scope needed to perform this operation\n$token = 'YOUR_ACCESS_TOKEN';\n\n// these parameters are usually retrieved through our APIs or stored in a DB\n$companyId = 17;\n\n$client = new Client();\n\n$params = array(\n  'q' => \"vat_number = '11553420156'\"\n);\n\n$query = http_build_query($params); // url-encoded query string\n\n$url = \"https://api-v2.fattureincloud.it/c/$companyId/entities/clients\". '?' . $query;\n\ntry {\n  $response = $client->request('GET', $url, [\n    'headers' => [\n      'Accept' => 'application/json',\n      'Authorization' => 'Bearer ' . $token,\n    ],\n  ]);\n\n    echo $response->getBody();\n} catch (ClientException $e) {\n    echo Psr7\\Message::toString($e->getRequest());\n    echo Psr7\\Message::toString($e->getResponse());\n}\n"})})}),(0,r.jsx)(a.A,{value:"py",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'# pip install requests\nimport requests\n\n# for this example we define the token as a string, but you should have obtained it in the previous steps\n# the token is valid for the "received_documents:r" scope needed to perform this operation\ntoken = "YOUR_ACCESS_TOKEN"\n\n# these parameters are usually retrieved through our APIs or stored in a DB\ncompany_id = 2\n\nparams = {\n    "q": "vat_number = \'11553420156\'"\n}\nheaders = { \'authorization\': "Bearer " + token }\nresponse = requests.get(f"https://api-v2.fattureincloud.it/c/\\{company_id\\}/entities/clients", params=params, headers=headers)\n\nprint(response.json())\n'})})}),(0,r.jsx)(a.A,{value:"rb",label:"Ruby",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rb",children:'require \'uri\'\nrequire \'net/http\'\n\n# for this example we define the token as a string, but you should have obtained it in the previous steps\n# the token is valid for the "received_documents:r" scope needed to perform this operation\ntoken = "YOUR_ACCESS_TOKEN"\n\n# these parameters are usually retrieved through our APIs or stored in a DB\ncompany_id = 16\n\nparams = {\n    "q": "vat_number = \'11553420156\'"\n}\n\nuri = URI("https://api-v2.fattureincloud.it/c/#\\{company_id\\}/entities/clients")\nuri.query = URI.encode_www_form(params)\nheaders = { authorization: "Bearer " + token}\nres = Net::HTTP.get_response(uri, headers)\n\nputs res.body\n'})})}),(0,r.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'// in this example we are using the node-fetch library to make the request\nimport fetch, { Headers } from "node-fetch";\n\n// for this example we define the token as a string, but you should have obtained it in the previous steps\n// the token is valid for the "received_documents:r" scope needed to perform this operation\nvar token = "YOUR_ACCESS_TOKEN";\n\n// these parameters are usually retrieved through our APIs or stored in a DB\nvar companyId = 16;\n\nvar params = {\n  q: "vat_number = \'11553420156\'",\n};\n\nvar query = new URLSearchParams(params).toString(); // url-encoded query string\n\nvar headers = new Headers({\n  "Content-Type": "application/json",\n  Authorization: "Bearer " + token,\n});\n\nvar options = {\n  method: "GET",\n  headers: headers,\n};\n\ntry {\n  var res = await fetch(\n    "https://api-v2.fattureincloud.it/c/" +\n      companyId +\n      "/entities/clients?" +\n      query,\n    options\n  );\n  var json = await res.json();\n  console.log(json);\n} catch (err) {\n  console.log(err);\n}\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"Here you can find an example response:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "current_page": 1,\n  "data": [\n    {\n      "id": 25330671,\n      "code": "",\n      "name": "ACEA S.P.A.",\n      "vat_number": "2711553420156",\n      "tax_code": "",\n      "address_city": "Marioloso",\n      "address_province": "RM",\n      "country": "Italia"\n    }\n  ],\n  "first_page_url": "https://api-v2.fattureincloud.it/c/2/entities/clients?q=vat_number+%3D+%2707305361003%27&page=1",\n  "from": 1,\n  "last_page": 1,\n  "last_page_url": "https://api-v2.fattureincloud.it/c/2/entities/clients?q=vat_number+%3D+%2707305361003%27&page=1",\n  "next_page_url": null,\n  "path": "https://api-v2.fattureincloud.it/c/2/entities/clients",\n  "per_page": 50,\n  "prev_page_url": null,\n  "to": 1,\n  "total": 1\n}\n'})}),"\n",(0,r.jsxs)(t.h2,{id:"wrench-building-a-query",children:["\ud83d\udd27","\xa0 Building a query"]}),"\n",(0,r.jsxs)(t.p,{children:["Our API uses a ",(0,r.jsx)(t.strong,{children:"SQL-like query language"}),", which means that it is a subset of the ",(0,r.jsx)(t.em,{children:"where"})," clause of the SQL language and can be used in a similar way to build the filter string."]}),"\n",(0,r.jsxs)(t.p,{children:["The string is based on triplets: ",(0,r.jsx)(t.strong,{children:"field op value"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"field"})," is a lowercase string, with dots and underscores, containing the name of the field the filter applies to; all the fields used in a single query must be included in the list of the authorized fields for the specific request type that is going to be performed, otherwise, an error will be returned. Check below for the list of authorized fields."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"op"})," is one of the following (unquoted):"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Operator"}),(0,r.jsx)(t.th,{children:"Symbol"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Equal"}),(0,r.jsx)(t.td,{children:"'='"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Greater than"}),(0,r.jsx)(t.td,{children:"'>'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Greater than or equal to"}),(0,r.jsx)(t.td,{children:"'>='"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Less than"}),(0,r.jsx)(t.td,{children:"'<'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Less than or equal to"}),(0,r.jsx)(t.td,{children:"'<='"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Not equal"}),(0,r.jsx)(t.td,{children:"'<>', '!='"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Some additional operators are available to ",(0,r.jsx)(t.strong,{children:"match a string against a Pattern"})," (unquoted), they can't be used on another kind of parameters:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Operator"}),(0,r.jsx)(t.th,{children:"Symbol"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Like"}),(0,r.jsx)(t.td,{children:"'like', 'LIKE'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Not like"}),(0,r.jsx)(t.td,{children:"'not like', 'NOT LIKE'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Contains"}),(0,r.jsx)(t.td,{children:"'contains', 'CONTAINS'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Not contains"}),(0,r.jsx)(t.td,{children:"'not contains', 'NOT CONTAINS'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Starts with"}),(0,r.jsx)(t.td,{children:"'starts with', 'STARTS WITH'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Ends with"}),(0,r.jsx)(t.td,{children:"'ends with', 'ENDS WITH'"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"value"})," can be one of the following types:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"'value'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"true, false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"46"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Double"}),(0,r.jsx)(t.td,{children:"12.34"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Additionally, it is possible to check if a field has a value or not, using NULL:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"The value is Null (doesn't have a value)"}),(0,r.jsxs)(t.td,{children:["1. IS NULL",(0,r.jsx)("br",{}),"2. is null",(0,r.jsx)("br",{}),"3. = NULL",(0,r.jsx)("br",{}),"4. = null"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"The value is Not Null (has a value)"}),(0,r.jsxs)(t.td,{children:["1. IS NOT NULL",(0,r.jsx)("br",{}),"2. is not null",(0,r.jsx)("br",{}),"3. != NULL",(0,r.jsx)("br",{}),"4. != null",(0,r.jsx)("br",{}),"5. <> NULL",(0,r.jsx)("br",{}),"6. <> null"]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["You can ",(0,r.jsx)(t.strong,{children:"combine multiple triplets"})," to compose a more complex filter, using the following ",(0,r.jsx)(t.em,{children:"boolean operators"})," and using ",(0,r.jsx)(t.em,{children:"parenthesis"})," to define the order of the composition."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Operator"}),(0,r.jsx)(t.th,{children:"Symbol"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Conjunction"}),(0,r.jsx)(t.td,{children:"'and', 'AND'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Disjunction"}),(0,r.jsx)(t.td,{children:"'or', 'OR'"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Here you can find some syntactically-valid queries (the field names used in the examples could not exist in our API):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"vat_number = '11553420156'\n\nage < 30\n\ncredit >= 123.45\n\ndev = true\n\nsurname is not null\n\nemployer starts with 'Fatture'\n\nname like '%Pier%'\n\nsurname = 'Rossi' and name contains 'Luca'\n\ncity = 'Bergamo' and (age < 30 or (dev = true and (name = 'Giorgio' and surname is not null) or employer starts with 'Fatture'))\n"})}),"\n",(0,r.jsx)(t.p,{children:"Once the query is composed, it must be URL-encoded before using it in a query; most HTTP frameworks perform this step automatically while composing the request, otherwise, you can use dedicated libraries to apply the encoding explicitly."}),"\n",(0,r.jsxs)(t.h2,{id:"mag-filterable-fields",children:["\ud83d\udd0d","\xa0 Filterable fields"]}),"\n",(0,r.jsxs)(t.p,{children:["Here you can find the list of fields that can be used to filter the result for each ",(0,r.jsx)(t.em,{children:"List method"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Fields"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listClients"}),(0,r.jsx)(t.td,{children:"id, code, name, type, vat_number, tax_code, address_street, address_postal_code, address_city, address_province, country, email, certified_email, phone, fax, notes, imported, atoka_show, e_invoice, ei_code, created_at, updated_at"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listSuppliers"}),(0,r.jsx)(t.td,{children:"id, code, name, type, vat_number, tax_code, address_street, address_postal_code, address_city, address_province, country, email, certified_email, phone, fax, notes, imported, atoka_show, e_invoice, ei_code, created_at, updated_at"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listProducts"}),(0,r.jsx)(t.td,{children:"id, name, code, net_price, gross_price, net_cost, description, category, notes, in_stock, created_at, updated_at"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listIssuedDocuments"}),(0,r.jsx)(t.td,{children:"type, entity.id, entity.name, entity.vat_number, entity.tax_code, entity.city, entity.province, entity.country, date, number, numeration, any_subject, amount_net, amount_vat, amount_gross, next_due_date, created_at, updated_at"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listReceivedDocuments"}),(0,r.jsx)(t.td,{children:"id, type, category, description, entity.id, entity.name, date, next_due_date, amount_gross, amount_net, amount_vat, invoice_number, created_at, updated_at"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listReceipts"}),(0,r.jsx)(t.td,{children:"date, type, description, rc_center, created_at, updated_at"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listF24"}),(0,r.jsx)(t.td,{children:"due_date, status, amount, description"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listArchiveDocuments"}),(0,r.jsx)(t.td,{children:"date, category, description"})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional Resources"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Percent-encoding",children:"Percent Encoding (also known as URL-encoding)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_message",children:"HTTP Request"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Query_string",children:"Query string"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.w3schools.com/tags/ref_urlencode.ASP",children:"HTML Url Encoding Reference"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/SQL",children:"SQL (Structured Query Language)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.w3schools.com/sql/",children:"SQL Tutorial"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://meyerweb.com/eric/tools/dencoder/",children:"Online URL Decoder/Encoder (for testing purposes)"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var i=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>_});var r=n(6540),s=n(4164),i=n(3104),a=n(6347),l=n(205),o=n(7485),d=n(1682),c=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,u]=m({queryString:n,groupId:s}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),b=(()=>{const e=d??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==r&&(d(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function _(e){const t=(0,j.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);