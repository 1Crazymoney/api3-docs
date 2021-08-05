(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{631:function(t,e,a){"use strict";a.r(e);var s=a(8),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("TocHeader"),t._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),a("p",[t._v("An oracle request has many parameters.\nIt is very common for "),a("RouterLink",{attrs:{to:"/next/reference/protocols/request-response/client.html"}},[t._v("clients")]),t._v(" (e.g., a data feed) to make repeated requests with the exact same parameters.\nIn such instances, it is wasteful to pass all of these parameters repeatedly.")],1),t._v(" "),a("p",[t._v("Templates are on-chain records of request parameters that the clients can refer to while making requests.\nAdditional advantages are reducing boilerplate code required to make a request, improving UX and allowing large parameter payloads (e.g., off-chain computation specifications) at no additional gas cost.")]),t._v(" "),a("h2",{attrs:{id:"templateid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templateid"}},[t._v("#")]),t._v(" "),a("code",[t._v("templateId")])]),t._v(" "),a("p",[t._v("Each template is identified by a "),a("code",[t._v("templateId")]),t._v(", which is the hash of its contents:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[t._v("templateId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    airnodeId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    endpointId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    requesterIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    designatedWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fulfillAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fulfillFunctionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    parameters\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("This allows Airnode to fetch templates with a static call, and verify that the received parameters are not tampered with.")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);