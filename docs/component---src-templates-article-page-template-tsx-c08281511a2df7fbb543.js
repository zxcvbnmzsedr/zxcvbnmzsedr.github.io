"use strict";(self.webpackChunkztianzeng_com=self.webpackChunkztianzeng_com||[]).push([[325],{6458:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(1597),r=a(7294),l=a(7175),i=a(9123),c=a(2667),d=a(9231),o=a(6028),m=(0,i.default)(n.Link).withConfig({displayName:"ArticleTag__Tag",componentId:"sc-1wldawb-0"})(["margin-right:4px;"]),u=function(e){var t=e.tag,a=(0,c.oR)(o.Z),n=(0,d.QT)(),l=a.getTagOfLang(t,n.currentLanguage.id)||t,i=n.translate("articleFrontmatter.tagLinkTitle",[" "+l+" "]),u="/posts/search?query="+l;return r.createElement(m,{className:"badge badge-info article-tag",to:u,title:i},l)},s=a(4225),g=(0,d.O4)("articleFrontmatter."),p=i.default.span.withConfig({displayName:"ArticleFrontmatter__Span",componentId:"sc-5sdns6-0"})(["margin-right:8px;padding-right:8px;margin-bottom:4px;display:inline-block;"]),f=(0,i.default)(p).withConfig({displayName:"ArticleFrontmatter__Tags",componentId:"sc-5sdns6-1"})([""]),E=i.default.div.withConfig({displayName:"ArticleFrontmatter__ContainerRow",componentId:"sc-5sdns6-2"})(["font-size:0.9em;margin:8px 0;vertical-align:center;"]),h="yyyy-MM-dd",y=function(e){var t=e.date,a=e.timeToRead,n=e.tags,i=e.lastUpdated,c=e.setItemProp,o=e.wordCount,m=(0,d.QT)().translate,y=(0,s.Z)((function(){return t.toFormat(h)})),w=(0,s.Z)((function(){return null==i?void 0:i.toFormat(h)})),Z=m(g("date")),C=m(g("lastUpdated"));return r.createElement(E,null,n&&r.createElement(f,null,r.createElement(l.YxP,null),n.map((function(e){return r.createElement(u,{tag:e,key:e})}))),r.createElement(p,{title:Z},r.createElement(l.XdU,null),c?r.createElement("time",{itemProp:"datePublished",dateTime:t.toISO()},y):y),w?r.createElement(p,{title:C},r.createElement(l.OS,null),c?r.createElement("time",{itemProp:"dateModified",dateTime:i.toISO()},w):w):void 0,r.createElement(p,null,r.createElement(l.baU,null),r.createElement(d.Vd,{id:g("wordCount"),args:[o]})),r.createElement(p,null,r.createElement(l.ziV,null),r.createElement(d.Vd,{id:g("timeToRead"),args:[a]})))};(0,i.default)(n.Link).withConfig({displayName:"ArticleFrontmatter",componentId:"sc-5sdns6-3"})(["margin-right:8px;"])},1560:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var n=a(2982),r=a(7294),l=a(6185),i=a(8730),c=a(2667),d=a(9123),o=a(1312),m=a(6458),u=function(e){var t=e.title,a=e.id,n=e.tags,l=e.date,i=e.lastUpdated,c=e.timeToRead,d=e.currentArticleLanguage,u=e.wordCount;return r.createElement(r.Fragment,null,r.createElement(o.r,null,t),r.createElement(m.Z,{currentArticleLanguage:d,articleId:a,tags:n,date:l,lastUpdated:i,timeToRead:c,wordCount:u,setItemProp:!0}))},s=a(6079),g=a(9288),p=a(2630),f=a(4826),E=a(9231),h=a(2671),y=a(594),w=a(6028),Z=a(3779),C=a(4667),T=a(4225),I=(0,d.keyframes)(["from{opacity:0;}to{opacity:1;}"]),k=(0,d.default)(h.Z).withConfig({displayName:"ArticlePageTemplate__PageWithHeader",componentId:"sc-sx6wfu-0"})(["animation:"," 0.2s ease-in-out;"],I),v=function(e){var t=e.hasHeader,a=e.children;return t?r.createElement(k,null,a):r.createElement(h.Z,null,a)},A=function(e){var t=e.article,a=e.children,n=e.lang,l=e.date,i=e.lastUpdated,c=t.frontmatter,d=c.id,m=c.title,s=c.tags,g=t.timeToRead,p=t.wordCountChinese;return r.createElement(o.ZP,{transparentHeader:!1,banner:r.createElement(u,{title:m,id:d,tags:s,date:l,lastUpdated:i,timeToRead:g,currentArticleLanguage:n,wordCount:p})},a)},_=function(e){var t=(0,E.QT)(),a=(0,c.oR)(w.Z),d=(0,c.oR)(y.Z),o=e.pageContext,m=o.id,u=o.lang,h=o.htmlAst,Z=o.headings,I=a.getArticleOfLang(m,u);(0,r.useEffect)((function(){return d.setArticle(I),function(){d.setArticle(null)}}),[I]);var k=I.path,_=I.excerpt,x=I.frontmatter,L=x.title,P=x.date,R=x.tags,F=a.getLangPathMap(e.pageContext.id),N=(0,T.Z)((function(){return(0,C.E)(P)})),U=(0,T.Z)((function(){}));return r.createElement(A,{article:I,lang:u,date:N,lastUpdated:U},r.createElement("div",null,r.createElement(f.d,{title:L,description:_,url:k,locale:E.fV.cn.detailedId,meta:[{name:"og:type",content:"article"},{name:"og:article:published_time",content:N.toISO()}].concat((0,n.Z)((R||[]).map((function(e){return{name:"og:article:tag",content:e}}))),(0,n.Z)(Object.keys(F).filter((function(e){return e!==u})).map((function(e){return{name:"og:locale:alternate",content:E.fV[e].detailedId}}))))}),r.createElement(v,{hasHeader:!0},r.createElement(l.Z,null,r.createElement(i.Z,{md:9,sm:12},r.createElement(g.Z,{htmlAst:h,headings:Z})),r.createElement(i.Z,{md:3,className:"d-none d-md-block"},r.createElement(b,null,r.createElement(p.Z,{headings:Z})))),r.createElement("hr",null),r.createElement(s.Z,{language:E.fV[t.currentLanguage.id].gitalkLangId,articleId:m,articleTitle:L}))))},b=d.default.div.withConfig({displayName:"ArticlePageTemplate__StickySidePanel",componentId:"sc-sx6wfu-1"})(["position:sticky;top:","px;"],Z.Db.header+32)}}]);
//# sourceMappingURL=component---src-templates-article-page-template-tsx-c08281511a2df7fbb543.js.map