(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{585:function(e,t,r){"use strict";r.r(t);var s=r(8),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),r("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),r("p",[e._v("An oracle node requires access to a blockchain (e.g., Ethereum) node to listen for request events and send transactions to fulfill requests.\nThe Airnode model aims to minimize the node operation effort using managed services wherever possible.\nAccordingly, it is assumed that the typical user will be using an Ethereum provider such as Infura, Alchemy, etc.\nThese services will only increase in variety, so designing a solution depending on these is not expected to cause a problem in the future.\nIn addition, among these Ethereum providers, Infura provides 100,000 calls per day for free.\nAn oracle that doesn't get any requests makes less than 3,000 calls per day (2 calls per minute), which allows the user to keep an oracle online for free, and upgrade to a paid plan once it gains traction.")]),e._v(" "),r("p",[e._v("Although it is assumed that the user will be using an Ethereum provider, there is no reason for providers to not be able to use a private Ethereum node.\nFurthermore, Airnode is designed to allow the usage of multiple Ethereum providers simultaneously.\nThis is achieved by treating all integrated providers individually.\nAs a result, the operations of an Airnode cannot be disrupted reliably unless all of its providers are malicious.\nTherefore, using multiple Ethereum providers is a better strategy to achieve the best availability than using a private Ethereum node.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);