(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{501:function(t,e,a){t.exports=a.p+"assets/img/new-proposal.b318cae5.png"},502:function(t,e,a){t.exports=a.p+"assets/img/executable-proposal.37e75c66.png"},675:function(t,e,a){"use strict";a.r(e);var r=a(8),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),r("TocHeader"),t._v(" "),r("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),r("p",[t._v("To create a proposal, you must hold at least 0.1% of the total pool shares. This required percentage is set in the Pool contract can be adjusted by the DAO.")]),t._v(" "),r("h2",{attrs:{id:"proposal-creation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposal-creation"}},[t._v("#")]),t._v(" Proposal Creation")]),t._v(" "),r("p",[t._v('Proposals can be created from the "Governance" tab of the DAO portal. Connect an account with sufficient voting power and click "New Proposal." Then fill out the form. Note the tooltips and the formatting in this example:')]),t._v(" "),r("p",{attrs:{align:"center"}},[r("img",{attrs:{src:a(501),width:"700"}})]),t._v(" "),r("p",[t._v("Proposals can be submitted to either the "),r("em",[t._v("Primary")]),t._v(" or "),r("em",[t._v("Secondary")]),t._v(" voting app. These two apps have access to separate treasuries, have different voting settings, and have different permissions to change contract settings.")]),t._v(" "),r("p",[t._v("In general, the Primary voting app has a larger treasury and more permissions but has more stringent voting settings. For a technical breakdown of the different permissions granted to the DAO's two voting apps (and corresponding Agents) see this "),r("a",{attrs:{href:"https://github.com/api3dao/api3-dao/blob/develop/packages/dao/README.md#permissions",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"proposal-types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposal-types"}},[t._v("#")]),t._v(" Proposal Types")]),t._v(" "),r("p",[t._v("The following parameters can be updated via DAO proposal, by proposing to call functions in the "),r("RouterLink",{attrs:{to:"/pre-alpha/members/"}},[t._v("pool contract")]),t._v(":")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter Name")]),t._v(" "),r("th",[t._v("Initial Value (units)")]),t._v(" "),r("th",[t._v("Function Signature")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("stakeTarget")]),t._v(" "),r("td",[t._v("50 * 10^16 (%*10^16)")]),t._v(" "),r("td",[r("code",[t._v("setStakeTarget(uint256 _stakeTarget)")])]),t._v(" "),r("td",[t._v("Percentage of all tokens targeted to be staked")])]),t._v(" "),r("tr",[r("td",[t._v("aprUpdateStep")]),t._v(" "),r("td",[t._v("1 * 10^16 (%*10^16)")]),t._v(" "),r("td",[r("code",[t._v("setAprUpdateStep(uint256 _aprUpdateStep)")])]),t._v(" "),r("td",[t._v("Percentage reward APR will be increased or decreased by")])]),t._v(" "),r("tr",[r("td",[t._v("maxApr")]),t._v(" "),r("td",[t._v("75 * 10^16 (%*10^16)")]),t._v(" "),r("td",[r("code",[t._v("setMaxApr(uint256 _maxApr)")])]),t._v(" "),r("td",[t._v("Maximum reward APR")])]),t._v(" "),r("tr",[r("td",[t._v("minApr")]),t._v(" "),r("td",[t._v("2.5 * 10^16 (%*10^16)")]),t._v(" "),r("td",[r("code",[t._v("setMinApr(uint256 _minApr)")])]),t._v(" "),r("td",[t._v("Minimum reward APR")])]),t._v(" "),r("tr",[r("td",[t._v("proposalVotingPowerThreshold")]),t._v(" "),r("td",[t._v("1 * 10^17 (%*10^16)")]),t._v(" "),r("td",[r("code",[t._v("setProposalVotingPowerThreshold(uint256 _proposalVotingPowerThreshold)")])]),t._v(" "),r("td",[t._v("Percentage of all shares that must be held to create a new proposal")])]),t._v(" "),r("tr",[r("td",[t._v("unstakeWaitPeriod")]),t._v(" "),r("td",[t._v("604800 (seconds)")]),t._v(" "),r("td",[r("code",[t._v("setUnstakeWaitPeriod(uint256 _unstakeWaitPeriod)")])]),t._v(" "),r("td",[t._v("Length of time a member must wait after scheduling unstake before unstaking tokens from the pool")])])])]),t._v(" "),r("h2",{attrs:{id:"proposal-execution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposal-execution"}},[t._v("#")]),t._v(" Proposal Execution")]),t._v(" "),r("p",[t._v("If a proposal is "),r("RouterLink",{attrs:{to:"/pre-alpha/members/contract-architecture/voting.html#key-functions"}},[t._v("ready for execution")]),t._v(", the execute button will appear on its details page:")],1),t._v(" "),r("p",{attrs:{align:"center"}},[r("img",{attrs:{src:a(502),width:"700"}})])],1)}),[],!1,null,null,null);e.default=o.exports}}]);