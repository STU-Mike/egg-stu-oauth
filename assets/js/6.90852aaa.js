(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("该部分参数是业务后台组装，以下为GET请求重query所带的参数：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("更多Oauth安全性可以到网上查找资料")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.chrisyue.com/security-issue-about-oauth-2-0-you-should-know.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于 OAuth2.0 安全性你应该要知道的一些事"),s("OutboundLink")],1),t._v("，这篇文章说得比较全，但得花点时间看")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("state参数，是由业务后台动态生成的唯一的随机值，这样确保了，不同的客户端，都拥有着不同的state。将请求加密放入session中，然后跟认证后台重定向后的state进行比对，一致才能确保授权请求来源于同一个客户端。")]),t._v(" "),s("p",[t._v("如果没有state参数，举个可能的攻击例子：")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("业务后台服务器没有办法知道重定向过来的请求，是否为用户A发出的")]),t._v(" "),s("p",[t._v("如果加入了state参数，在业务后台组装授权URL时，会给用户浏览器设置带有state的session，用户每次向业务后台发送请求，都会带上该session。在用户A在请求业务后台时，业务后台能从cookie中取出session，而黑客B的客户端发起的请求，是没有该session的，因此会导致授权失败")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"授权码模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授权码模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 授权码模式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们使用了Oauth2.0的"),e("strong",[this._v("授权码模式")]),this._v("（authorization code），它是功能最完整、流程最严密的授权模式。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"授权流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授权流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 授权流程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/egg-stu-oauth/%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8%8B.jpg",alt:"[授权流程]"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"C:%5CUsers%5C56337%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1551193519455.png",alt:"1551193519455"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"核心流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 核心流程")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("A. 访问业务服务器接口")]),t._v(" "),s("p",[t._v("该接口由第三方应用传入，在服务器中生成"),s("a",{attrs:{href:"#state%E4%BD%9C%E7%94%A8"}},[t._v("state")]),t._v("并写入session，组装好授权URL（详见"),s("a",{attrs:{href:"#%E8%AE%A4%E8%AF%81%E5%8F%82%E6%95%B0"}},[t._v("认证参数")]),t._v("），并重定向到授权URL")])]),t._v(" "),s("li",[s("p",[t._v("B. 访问授权页面")]),t._v(" "),s("p",[t._v("访问授权页面前需要先登录，未登录会重定向到登录页面，如果之前登陆过但没有进行授权，且认证服务器的登录态仍有效，则直接能访问授权页面")])]),t._v(" "),s("li",[s("p",[t._v("C. 重定向到指定url，并带上授权码code")]),t._v(" "),s("p",[t._v("重定向的URL是由第三方应用在调起浏览器过程中传入的，认证服务器会在URL的query中在加入code参数和state参数，重定向请求到第三方应用的业务后台，然后从query中取出授权码code和state，比对session的state与query中的state是否一致")]),t._v(" "),s("ul",[s("li",[t._v("如果不一致，证明该请求不是来自需要授权的客户端，授权失败，可能遭到CSRF攻击")])])]),t._v(" "),s("li",[s("p",[t._v("D. code换取用去用户凭证token")]),t._v(" "),s("p",[t._v("业务后台拿到授权码后，需要请求认证服务器换取登录凭证token，token可用于调用开放平台所提供的服务")])]),t._v(" "),s("li",[s("p",[t._v("E. 授权成功，返回业务后台登录态")]),t._v(" "),s("p",[t._v("授权成功后，业务后台需要根据自身需求，管理用户的登录态，并给客户端返回自身后台的登录态")])]),t._v(" "),s("li",[s("p",[t._v("F. 获取业务后台登录态，退出浏览器")]),t._v(" "),s("p",[t._v("第三方应用客户端获取到登录态，并退出浏览器")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"认证参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认证参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 认证参数")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v('response_type：表示授权类型，必选项，此处的值固定为"code"')]),t._v(" "),s("li",[t._v("client_id：表示客户端的ID，必选项")]),t._v(" "),s("li",[t._v("redirect_uri：表示重定向URI，填业务后台的相关接口URL，可选项")]),t._v(" "),s("li",[t._v("scope：表示申请的权限范围，可选项")]),t._v(" "),s("li",[t._v("state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值，用于防止CSRF。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安全性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全性","aria-hidden":"true"}},[this._v("#")]),this._v(" 安全性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("用户无需在第三方APP输入账号密码，进行登录的流程在开放平台所提供的登录页面完成")]),this._v(" "),e("li",[this._v("附带code的重定向URL，必须在开放平台登记，不能为任意URL，确保code被送到第三方应用的后台服务器")]),this._v(" "),e("li",[this._v("校验session的state与query中的state必须一致，否则拒绝授权，详见"),e("a",{attrs:{href:"#state%E4%BD%9C%E7%94%A8"}},[this._v("state作用")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"state作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state作用","aria-hidden":"true"}},[this._v("#")]),this._v(" state作用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("用户A在点击授权后，认证服务器将请求重定向到业务后台指定URL，并带上授权码")]),this._v(" "),e("li",[this._v("黑客B通过技术手段截取了用户A的重定向请求")]),this._v(" "),e("li",[this._v("黑客B在自己客户端发起重定向URL的请求")]),this._v(" "),e("li",[this._v("用户A的授权被黑客B窃取。")])])}],!1,null,null,null);e.default=r.exports}}]);