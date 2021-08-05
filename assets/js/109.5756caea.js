(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{621:function(t,e,s){"use strict";s.r(e);var a=s(8),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("TocHeader"),t._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),s("p",[t._v("Use Airnode to serve one or more APIs to smart contracts (clients). Each Airnode has only one private key, which they use across all chains.")]),t._v(" "),s("h2",{attrs:{id:"airnodeid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#airnodeid"}},[t._v("#")]),t._v(" "),s("code",[t._v("airnodeId")])]),t._v(" "),s("p",[t._v("Airnodes are identified by their "),s("code",[t._v("airnodeId")]),t._v(", which is of type "),s("code",[t._v("bytes32")]),t._v(". An Airnode's "),s("code",[t._v("airnodeId")]),t._v(" is derived from its owner's private key, and there is a one-to-one mapping between the two. Since the Airnode uses the same private key across all chains, they will have the same "),s("code",[t._v("airnodeId")]),t._v(" across all chains.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("To derive "),s("code",[t._v("airnodeId")]),t._v(" in Solidity:")]),t._v(" "),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[t._v("airnodeId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("masterWalletAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("To derive "),s("code",[t._v("airnodeId")]),t._v(" in JS (using ethers.js):")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("airnodeId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultAbiCoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'address'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("masterWalletAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("p",[t._v("For both of the above examples the "),s("code",[t._v("masterWalletAddress")]),t._v(" is the address of the wallet derived from the private key of the owner with the path "),s("code",[t._v("m")]),t._v(". (For deriving wallets from a private key using a path, see "),s("a",{attrs:{href:"https://github.com/ethereumbook/ethereumbook/blob/develop/05wallets.asciidoc#hd_wallets",target:"_blank",rel:"noopener noreferrer"}},[t._v("HD wallets"),s("OutboundLink")],1),t._v(".) To derive the master wallet address from the mnemonic in JS (using ethers.js):")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("masterHdNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HDNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromMnemonic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmasterWalletAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" masterHdNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"creating-an-airnode-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-airnode-record"}},[t._v("#")]),t._v(" Creating an Airnode record")]),t._v(" "),s("p",[t._v("Before being able to serve on a chain, an Airnode record must be created. To do this, the new Airnode owner's master wallet has to be used to call "),s("code",[t._v("setAirnodeParameters()")]),t._v(" of "),s("code",[t._v("AirnodeParameterStore.sol")]),t._v(", where the contract assigns the corresponding "),s("code",[t._v("airnodeId")]),t._v(" as follows:")]),t._v(" "),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAirnodeParameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" xpub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" authorizers\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),t._v("\n    override\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" airnodeId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        airnodeId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("Note that since "),s("code",[t._v("msg.sender")]),t._v(" is used to derive the "),s("code",[t._v("airnodeId")]),t._v(", no one but the Airnode owner can claim their "),s("code",[t._v("airnodeId")]),t._v(" on any chain.")]),t._v(" "),s("p",[t._v("The Airnode parameters record creation is done automatically by Airnode. The Airnode owner only needs to fund their master wallet for it to be able to afford this transaction, and the master wallet will send the remaining funds to "),s("code",[t._v("airnodeAdmin")]),t._v(" along with this transaction. The Airnode deployment displays instructions for how to do this, and the "),s("code",[t._v("masterWalletAddress")]),t._v(" is included in the receipt that the deployer outputs for future reference.")]),t._v(" "),s("h2",{attrs:{id:"airnodeadmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#airnodeadmin"}},[t._v("#")]),t._v(" "),s("code",[t._v("airnodeAdmin")])]),t._v(" "),s("p",[s("code",[t._v("airnodeAdmin")]),t._v(" is an address that is authorized to update airnode-related properties (e.g., endpoint authorizers). Airnode sets a "),s("code",[t._v("airnodeAdmin")]),t._v(" while creating the Airnode parameters record, and this is sourced from "),s("RouterLink",{attrs:{to:"/next/reference/deployment-files/config-json.html"}},[t._v("config.json")]),t._v(" under the name "),s("code",[t._v("airnodeAdmin")]),t._v(".")],1),t._v(" "),s("p",[s("code",[t._v("airnodeAdmin")]),t._v(" can transfer its authority to another address. The master wallet can reclaim the authority by calling "),s("code",[t._v("setAirnodeParameters()")]),t._v(" and setting "),s("code",[t._v("admin")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"xpub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xpub"}},[t._v("#")]),t._v(" "),s("code",[t._v("xpub")])]),t._v(" "),s("p",[t._v("The Airnode owner announces their extended public key ("),s("code",[t._v("xpub")]),t._v(") as stored in "),s("code",[t._v("AirnodeParameterStore.sol")]),t._v(" for requesters to be able to derive their designated wallets. The "),s("code",[t._v("xpub")]),t._v(" that the owner has announced is not verified on-chain. However, the requester can verify it off-chain. For example, in JS (using ethers.js):")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("hdNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HDNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromExtendedKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xpub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmasterNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hdNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("derivePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'m'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nairnodeIdDerivedFromXpub "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("masterNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("airnodeIdDerivedFromXpub "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" airnodeId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("See the "),s("RouterLink",{attrs:{to:"/next/reference/protocols/request-response/designated-wallet.html"}},[t._v("section about designated wallets")]),t._v(" to see how requesters can use "),s("code",[t._v("xpub")]),t._v(" to derive their designated wallets.")],1),t._v(" "),s("h2",{attrs:{id:"setting-endpoint-authorizers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-endpoint-authorizers"}},[t._v("#")]),t._v(" Setting endpoint authorizers")]),t._v(" "),s("p",[t._v("An important responsibility of the "),s("code",[t._v("airnodeAdmin")]),t._v(" is to set endpoint authorizers. Authorizers are used to enforce rules about which requests will be responded to, and this can be used to enforce KYC, monthly subscription payments, etc. See the sections about "),s("RouterLink",{attrs:{to:"/next/reference/protocols/request-response/endpoint.html"}},[t._v("endpoints")]),t._v(" and "),s("RouterLink",{attrs:{to:"/next/reference/protocols/request-response/authorizer.html"}},[t._v("authorizers")]),t._v(" for more details.")],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);