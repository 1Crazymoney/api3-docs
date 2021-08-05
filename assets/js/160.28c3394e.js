(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{679:function(e,t,s){"use strict";s.r(t);var a=s(8),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("TocHeader"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),s("p",[e._v("An authorizer is a contract with the following interface:")]),e._v(" "),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IAuthorizer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("checkIfAuthorized")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" requestId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" providerId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" endpointId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint256")]),e._v(" requesterIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" designatedWallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" clientAddress\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("external")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bool")]),e._v(" status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[e._v("When an Airnode receives a request, it will use authorizers to verify if it should be responded to.\nTherefore, an authorizer contract can be used to implement an arbitrary authorization policy depending on the arguments above ("),s("code",[e._v("requestId")]),e._v(", "),s("code",[e._v("providerId")]),e._v(", etc.).\nNote that the authorizer does not have to use all of the arguments, and can even decide on external criteria such as "),s("code",[e._v("blockNumber")]),e._v(' (e.g., "do not respond to anyone after block number N").')]),e._v(" "),s("p",[e._v("Providers can assign a list of authorizer contract addresses to their endpoints.\nThese authorizers can be general purpose ones, but also custom-implemented by the provider to fit a specific need.")]),e._v(" "),s("h2",{attrs:{id:"why-is-the-authorizer-scheme-needed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-authorizer-scheme-needed"}},[e._v("#")]),e._v(" Why is the authorizer scheme needed?")]),e._v(" "),s("p",[e._v("Providers have to be able to fulfill requests selectively.\nThis is required for two main reasons:")]),e._v(" "),s("ol",[s("li",[e._v("The provider only fulfills requests made by requesters who have made payment, which allows them to monetize their services.")]),e._v(" "),s("li",[e._v("The services of the provider are sensitive and can only be accessed by certain requesters, e.g., who have gone through KYC.")])]),e._v(" "),s("p",[e._v("A protocol that does not have the authorizer scheme or equivalent functionality cannot be considered as permissionless, and will not be able to achieve wide-spread adoption.")]),e._v(" "),s("h2",{attrs:{id:"how-are-authorizers-implemented"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-are-authorizers-implemented"}},[e._v("#")]),e._v(" How are authorizers implemented?")]),e._v(" "),s("p",[e._v("There are two main points to consider about how authorization policies are implemented:")]),e._v(" "),s("ol",[s("li",[e._v("If the policies are kept off-chain, the requester cannot see them or check if they satisfy them.\nFurthermore, the provider updating the policies (e.g., increasing the service fees) requires off-chain coordination with the requester.")]),e._v(" "),s("li",[e._v("Embedding the policies in the request–response loop results in a gas cost overhead.")])]),e._v(" "),s("p",[e._v("Based on these considerations, Airnode uses a hybrid method.\nA provider announces their policy for a specific endpoint on-chain by setting a list of authorizers.\nWhenever the provider's Airnode receives a request, it checks if it should fulfill this request by making a static call that queries this on-chain policy.\nSimilarly, the requester can use this on-chain policy by making a static call to check if they are authorized.\nThis scheme both allows the provider to set transparent and flexible policies, and this to be done with no gas overhead.")]),e._v(" "),s("h2",{attrs:{id:"authorizer-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorizer-list"}},[e._v("#")]),e._v(" Authorizer list")]),e._v(" "),s("p",[e._v('An authorizer typically checks for a single condition ("has the requester made their monthly payment", "is this client address whitelisted", etc.).\nAuthorizers can be combined to enforce more complex policies.')]),e._v(" "),s("p",[e._v("Say we have authorizer contracts X, Y, Z, T, and our authorizer list is")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[X, Y, 0, Z, T]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("This means that the following must be satisfied")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("(X AND Y) OR (Z AND T)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("for the request to be considered authorized.\nIn other words, consequent authorizer contracts need to verify authorization simultaneously, while "),s("code",[e._v("0")]),e._v(" represents the start of an independent authorization policy.")]),e._v(" "),s("p",[e._v("From a logical standpoint, consequent authorizers get "),s("code",[e._v("AND")]),e._v("ed while "),s("code",[e._v("0")]),e._v(" acts as an "),s("code",[e._v("OR")]),e._v(" gate, providing great flexibility in forming a policy out of simple building blocks.\nWe could also define a "),s("code",[e._v("NOT")]),e._v(' gate here to achieve a full set of universal logic gates, but this not very useful in this context because authorizers tend to check for positive conditions ("have paid", "is whitelisted", etc.) and we generally would not need policies that require these to be false.\nNote that authorizer lists with multiple elements should not start or end with '),s("code",[e._v("0")]),e._v(", and "),s("code",[e._v("0")]),e._v("s should not be used consecutively, e.g., "),s("code",[e._v("[X, Y, 0, 0, Z, T]")]),e._v(".")]),e._v(" "),s("p",[e._v("It should also be noted that one can implement a single proxy authorizer that does all the required checks.")]),e._v(" "),s("h2",{attrs:{id:"default-behavior-deny-all-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-behavior-deny-all-access"}},[e._v("#")]),e._v(" Default behavior: Deny all access")]),e._v(" "),s("p",[e._v("An authorizer list of "),s("code",[e._v("[]")]),e._v(' means "deny everyone", '),s("code",[e._v("[0]")]),e._v(' means "let everyone through".\nThe authorizers of an endpoint will be '),s("code",[e._v("[]")]),e._v(" by default, and will deny access to everyone as a safety measure.\nTherefore, a provider cannot serve an endpoint without updating its authorizers first.")]),e._v(" "),s("h2",{attrs:{id:"authorizer-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorizer-examples"}},[e._v("#")]),e._v(" Authorizer examples")]),e._v(" "),s("p",[e._v("Authorizers allow providers to implement a wide variety of policies.\nHere are some examples:")]),e._v(" "),s("ul",[s("li",[e._v("Respond to requests from requesters that have paid their monthly subscription fee in DAI")]),e._v(" "),s("li",[e._v("Respond to individual requests for which a per-call fee has been paid in API3 tokens")]),e._v(" "),s("li",[e._v("Respond to requests made by clients that were whitelisted by the API3 DAO")]),e._v(" "),s("li",[e._v("Respond to requests made by requesters who have been whitelisted by the API provider backend (for example, based on Paypal payments)")]),e._v(" "),s("li",[e._v("...")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);