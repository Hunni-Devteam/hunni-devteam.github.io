(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{560:function(t,e,n){var content=n(564);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("23bf5efc",content,!0,{sourceMap:!1})},563:function(t,e,n){"use strict";var r=n(560);n.n(r).a},564:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".article-wrapper{background-color:#fff;margin:0 24px 24px}",""])},565:function(t,e,n){"use strict";n.r(e);var r=n(7),c={components:{"article-breadcrumb":Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"48px","line-height":"48px","background-color":"#fff",margin:"0px 0px 24px 0px",padding:"0px 24px"}},t._l(t.$nuxt.$route.path.split("/"),function(path,e){return n("span",{key:path},[0==e?n("span",{on:{click:function(e){return t.$router.push("/")}}},[t._v("home")]):n("span",[n("span",[t._v(" / ")]),t._v(" "),n("span",[t._v(t._s(path))])])])}),0)},[],!1,null,null,null).exports,"article-navigator":Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"post-navigator"}},[n("div",{staticClass:"container",staticStyle:{display:"flex"},attrs:{id:"article-navigator"}},[t.$store.getters.prevPage.src?n("div",{staticStyle:{cursor:"pointer","font-size":"14px"},on:{click:function(e){return t.$router.push(t.$store.getters.prevPage.src)}}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[n("div",{staticStyle:{"font-weight":"bold","font-size":"24px","margin-right":"8px"}},[t._v("<")]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[t._m(0),t._v("\n          "+t._s(t.$store.getters.prevPage.title)+"\n        ")])])]):t._e(),t._v(" "),n("div",{staticStyle:{flex:"1",margin:"0px 4px"}}),t._v(" "),t.$store.getters.nextPage.src?n("div",{staticStyle:{cursor:"pointer","font-size":"14px","text-align":"right"},on:{click:function(e){return t.$router.push(t.$store.getters.nextPage.src)}}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[n("div",{staticStyle:{flex:"1"}},[t._m(1),t._v("\n          "+t._s(t.$store.getters.nextPage.title)+"\n        ")]),t._v(" "),n("div",{staticStyle:{"font-weight":"bold","font-size":"24px","margin-left":"8px"}},[t._v(">")])])]):t._e()])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b",{staticStyle:{"line-height":"24px"}},[this._v("이전 글")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b",{staticStyle:{"line-height":"24px"}},[this._v("다음 글")])])}],!1,null,null,null).exports},watch:{$route:function(){window.scrollTo(0,0)}}},l=(n(563),Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-content-wrapper"},[e("article-breadcrumb"),this._v(" "),e("router-view"),this._v(" "),e("article-navigator")],1)},[],!1,null,null,null));e.default=l.exports}}]);