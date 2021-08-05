(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{620:function(t,e,a){"use strict";a.r(e);var s=a(8),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("TocHeader"),t._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),a("p",[t._v("("),a("a",{attrs:{href:"https://github.com/api3dao/api3-dao/tree/main/packages/pool/contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("contract code"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("p",[t._v("The API3 Pool contract is where API3 token holders can stake their tokens to gain voting power in the DAO. Stakers receive rewards in API3 tokens for staking, and they can also delegate their voting power to another user, if they wish. Lastly, the pool contract will be responsible for paying claims out of the DAO pool — "),a("em",[t._v("not yet implemented")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"key-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-functions"}},[t._v("#")]),t._v(" Key Functions")]),t._v(" "),a("h3",{attrs:{id:"depositing-staking-unstaking-and-withdrawing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#depositing-staking-unstaking-and-withdrawing"}},[t._v("#")]),t._v(" Depositing, Staking, Unstaking, and Withdrawing")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Signature")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("depositRegular(uint256 amount)")])]),t._v(" "),a("td",[t._v("Deposits your API3 tokens into the pool. Tokens must be deposited before they can be staked.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stake(uint256 amount)")])]),t._v(" "),a("td",[t._v("Stakes deposited API3 tokens. Staked tokens will earn rewards, grant voting power (and may be slashed if there is a claim on the pool—not yet implemented).")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("depositAndStake(address source, uint256 amount)")])]),t._v(" "),a("td",[t._v("Deposits and stakes API3 tokens in one transaction.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("scheduleUnstake(uint256 shares)")])]),t._v(" "),a("td",[t._v("Schedules staked tokens to be unstaked. In order to unstake API3 tokens, members must first schedule an unstake and wait the scheduled period before unstaking (currently ~1 week). Tokens scheduled to be unstaked no longer grant voting power or earn rewards.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("unstake(address userAddress) returns(uint256)")])]),t._v(" "),a("td",[t._v("Unstakes API3 tokens, allowing them to be withdrawn from the pool (unstaking and withdrawing are separate steps). Can only be called after scheduling an unstake and waiting the scheduled amount of time.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("withdrawRegular(uint256 amount)")])]),t._v(" "),a("td",[t._v("Withdraws your API3 tokens from the Pool contract.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("unstakeAndWithdraw(address destination)")])]),t._v(" "),a("td",[t._v("Unstakes and withdraws tokens in one transaction.")])])])]),t._v(" "),a("h3",{attrs:{id:"timelock-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timelock-functions"}},[t._v("#")]),t._v(" Timelock Functions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Signature")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("function deposit(address source, uint256 amount, address userAddress)")])]),t._v(" "),a("td",[t._v("Callable only by the Timelock Manager contract. Deposits tokens on behalf of a user.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("function depositWithVesting(address source, uint256 amount, address userAddress, uint256 releaseStart, uint256 releaseEnd)")])]),t._v(" "),a("td",[t._v("Callable only by the Timelock Manager contract. Deposits tokens on a vesting schedule on behalf of a user. These vesting tokens cannot be withdrawn by the user until they have vested, but they "),a("em",[t._v("can")]),t._v(" be staked.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("function updateTimelockStatus(address userAddress, address timelockManagerAddress)")])]),t._v(" "),a("td",[t._v("Updates the vesting status of a user's deposited vesting tokens (i.e. unlocks tokens) according to the schedule in the Timelock Manager contract.")])])])]),t._v(" "),a("h3",{attrs:{id:"voting-power"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voting-power"}},[t._v("#")]),t._v(" Voting Power")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Signature")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("userVotingPowerAt(address userAddress, uint256 _block)")])]),t._v(" "),a("td",[t._v("Returns a user's current voting power (0 if they have delegated it).")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("delegateVotingPower(address delegate)")])]),t._v(" "),a("td",[t._v("Delegates a member's voting power, as decided by their share of the DAO pool, to another address. It is not necessary to undelegate before redelegating to a new address.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("undelegateVotingPower()")])]),t._v(" "),a("td",[t._v("Undelegates a member's voting power.")])])])]),t._v(" "),a("h3",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" Other")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Signature")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("mintReward()")])]),t._v(" "),a("td",[t._v("Distributes new API3 tokens into the DAO pool, where they can be unstaked and withdrawn by members using their share of the pool")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("payOutClaim(address recipient, uint256 amount)")])]),t._v(" "),a("td",[t._v("A special function callable only by approved claims manager contracts to pay out claims directly from the pool.")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);