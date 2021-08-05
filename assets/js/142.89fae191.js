(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{656:function(e,t,r){"use strict";r.r(t);var o=r(8),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),r("TocHeader"),e._v(" "),r("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),r("p",[e._v("After "),r("RouterLink",{attrs:{to:"/pre-alpha/guides/provider/api-integration.html"}},[e._v("integrating your API")]),e._v(" and "),r("RouterLink",{attrs:{to:"/pre-alpha/guides/provider/configuring-airnode.html"}},[e._v("creating the configuration files")]),e._v(", the next step is to deploy your Airnode.\nAirnode comes with a "),r("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/deployer",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployer"),r("OutboundLink")],1),e._v(", which uses "),r("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://www.serverless.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless Framework"),r("OutboundLink")],1),e._v(" to automate the entire deployment process.\nThis deployer is also containerized as a "),r("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),r("OutboundLink")],1),e._v(" image, which allows you to deploy your Airnode on any platform without worrying about installing dependencies.\nSo let's begin!")],1),e._v(" "),r("h2",{attrs:{id:"installing-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installing-docker"}},[e._v("#")]),e._v(" Installing Docker")]),e._v(" "),r("p",[e._v("The upside of containerizing the deployer is that you only need to install Docker.\nThe downside is that you need to install Docker.\nGo to the "),r("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker website"),r("OutboundLink")],1),e._v(" and install it first.")]),e._v(" "),r("h2",{attrs:{id:"creating-cloud-credentials"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-cloud-credentials"}},[e._v("#")]),e._v(" Creating cloud credentials")]),e._v(" "),r("p",[e._v("The deployer interacts with your cloud provider to deploy Airnode programmatically, without requiring you to click through a lot of ever-changing graphical interfaces.\nFor it to be able to do that, you need to give it permission.")]),e._v(" "),r("p",[e._v("To be able to do this, you need to create a new user in your AWS account, give it programmatic access, retrieve its access key ID and secret access keys, and feed these to the deployer.\nFortunately, this is not nearly as complicated as it sounds.\nFollow "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=KngM5bfpttA",target:"_blank",rel:"noopener noreferrer"}},[e._v("this video"),r("OutboundLink")],1),e._v(", get your keys, and put them in a file named "),r("code",[e._v(".env")]),e._v(" as below (values are made up, you need to replace these with your own):")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("AWS_ACCESS_KEY_ID=JSDYNDRUA1XAF2W3UGPA\nAWS_SECRET_KEY=q4JiOfPP4wQOuRj01/6/7RAodTAg6lFb99IoB4XH\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("Here is an "),r("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/pre-alpha/packages/deployer/.env.example",target:"_blank",rel:"noopener noreferrer"}},[e._v("example file"),r("OutboundLink")],1),e._v(" that is left blank.\nMake sure that you do not push your credentials to a repository or leave them around!\nThese credentials can be used to gain access to your Airnode's private key.")]),e._v(" "),r("h2",{attrs:{id:"deployment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),r("p",[e._v("Get the "),r("code",[e._v("config.json")]),e._v(" and "),r("code",[e._v("security.json")]),e._v(" files you have created while "),r("RouterLink",{attrs:{to:"/pre-alpha/guides/provider/configuring-airnode.html"}},[e._v("configuring your Airnode")]),e._v(", your "),r("code",[e._v(".env")]),e._v(" file with your "),r("RouterLink",{attrs:{to:"/pre-alpha/guides/provider/deploying-airnode.html#creating-cloud-credentials"}},[e._v("cloud provider credentials")]),e._v(", and place these three files in the same directory.\nThen, in this same directory, run the following command.")],1),e._v(" "),r("Tabs",{attrs:{type:"border-card"}},[r("Tab",{attrs:{label:"Linux/Mac"}},[r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("docker run -it --rm "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env-file .env "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("COMMAND")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("deploy-first-time "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(":/airnode/out "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:pre-alpha\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])])]),e._v(" "),r("Tab",{attrs:{label:"Windows"}},[r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("docker run -it --rm ^\n  --env-file .env ^\n  --env "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("COMMAND")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("deploy-first-time ^\n  -v "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%"')]),e._v(":/airnode/out ^\n  api3/airnode-deployer:pre-alpha\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])])])],1),e._v(" "),r("p",[e._v("This will first download the deployer image, which may take a few minutes depending on the speed of your Internet connection.\nThen, it will read your configuration files and start deployment.\nThis process will be entirely automatic, with the exception that at one stage, the deployer will display the mnemonic of your Airnode's private key.\nPlease note this down with pen and paper (do not copy paste to a text file on your computer) and keep it in a secure place.")]),e._v(" "),r("p",[e._v("Another point to mention is that the deployer will display your master wallet address, and ask you to deposit some ETH in it for it to create your provider record.\nFollow the instructions for your Airnode to create your provider record using your master wallet, and it will send any unused ETH to the "),r("code",[e._v("providerAdminForRecordCreation")]),e._v(" you have set in your "),r("code",[e._v("config.json")]),e._v(".\nYou can see the "),r("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/provider.html#creating-a-provider-record"}},[e._v("docs")]),e._v(" for more information about this process.")],1),e._v(" "),r("p",[e._v("A couple minutes after noting down your mnemonic and hitting "),r("code",[e._v("ENTER")]),e._v(", you should be done!\nThe deployer will output a receipt file ending with "),r("code",[e._v(".receipt.json")]),e._v(".\nThis file does not include any sensitive information, so feel free to share it as needed.\nThe receipt contains your "),r("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/provider.html#providerid"}},[r("code",[e._v("providerId")])]),e._v(", "),r("code",[e._v("providerIdShort")]),e._v(" and "),r("code",[e._v("masterWalletAddress")]),e._v(" that you will need to fund for it to create your provider record (if you have not already).\nYou will need to add your "),r("code",[e._v("providerIdShort")]),e._v(" to your "),r("code",[e._v("config.json")]),e._v(" to be able to redeploy your node with updated configurations.")],1),e._v(" "),r("p",[e._v("To find out how to redeploy your node or remove it from your cloud provider account, see the "),r("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/pre-alpha/Docker.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployer image docs"),r("OutboundLink")],1),e._v(".\nNow, the next step is to configure the authorization policies for the endpoints you will be serving.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);