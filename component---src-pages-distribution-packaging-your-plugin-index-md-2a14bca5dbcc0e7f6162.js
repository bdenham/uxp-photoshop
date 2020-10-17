(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{GFCo:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return u}));var o,i=n("wx14"),a=n("zLVn"),l=(n("q1tI"),n("7ljp")),c=n("LHWr"),r=(n("qKvR"),{}),d=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.mdx)("div",e)}),s={_frontmatter:r},p=c.a;function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.mdx)(p,Object(i.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"packaging-your-plugin"},"Packaging Your Plugin"),Object(l.mdx)("p",null,"Taking your plugin code and packaging it has never been easier."),Object(l.mdx)("p",null,"UXP plugins for Photoshop are distributed in the form of a ",Object(l.mdx)("inlineCode",{parentName:"p"},".ccx")," file. Under the hood, this is a zip file. Unless you have some special requirements, you should not be creating this zip file yourself."),Object(l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"IMPORTANT"),":\nBefore you package your plugin for distribution outside your own computer, make sure you've obtained a valid ID from the ",Object(l.mdx)("a",Object(i.a)({parentName:"p"},{href:"https://console.adobe.io",target:"_blank",rel:"nofollow noopener noreferrer"}),"Adobe Developer Console"),". Without an id (which goes in the ",Object(l.mdx)("inlineCode",{parentName:"p"},"id")," field of your plugin's ",Object(l.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file), you won't be able to distribute your plugin in the Creative Cloud Marketplace."),Object(l.mdx)("p",null,"Using the ",Object(l.mdx)("a",Object(i.a)({parentName:"p"},{href:"../guides/uxp-developer-tool"}),"UXP Developer Tool"),", choose ",Object(l.mdx)("inlineCode",{parentName:"p"},"Package")," from the Actions menu (the ellipsis on the right side of the Developer Tool window, on the same line as your plugin name):"),Object(l.mdx)("p",null,Object(l.mdx)("img",{alt:"Package Menu",src:n("Hwdg")})),Object(l.mdx)("p",null,'This shows a "Select target directory" dialog. Choose a directory where your built plugin ',Object(l.mdx)("inlineCode",{parentName:"p"},".ccx")," file should reside."),Object(l.mdx)("p",null,"After the ",Object(l.mdx)("inlineCode",{parentName:"p"},".ccx")," file has been created, you should see this message at the bottom of the Developer Tool window:"),Object(l.mdx)("p",null,Object(l.mdx)("img",{alt:"Package Success",src:n("K3+6")})),Object(l.mdx)("p",null,"If instead, you see this:"),Object(l.mdx)("p",null,Object(l.mdx)("img",{alt:"Package Failed",src:n("j29P")})),Object(l.mdx)("p",null,"Click on ",Object(l.mdx)("inlineCode",{parentName:"p"},"Details")," to view a window that shows why the packaging failed."),Object(l.mdx)("p",null,"Once your ",Object(l.mdx)("inlineCode",{parentName:"p"},".ccx")," file has been built, you should test it locally before doing anything else. To install a .ccx file into any Creative Cloud application, double click it. This will open the Creative Cloud application, and you'll get a warning that your plugin hasn't been verified by Adobe:"),Object(l.mdx)("p",null,Object(l.mdx)("img",{alt:"Verify Failed",src:n("qffi")})),Object(l.mdx)("p",null,"Since you wrote the plugin, it's probably safe to install. Click ",Object(l.mdx)("inlineCode",{parentName:"p"},"Install locally")," and you'll see another warning:"),Object(l.mdx)("p",null,Object(l.mdx)("img",{alt:"Install Warning",src:n("t+mI")})),Object(l.mdx)("p",null,"Since, in this case, ",Object(l.mdx)("em",{parentName:"p"},"you")," are the third-party developer, it's safe to click OK. Obviously, if someone else sends you a ",Object(l.mdx)("inlineCode",{parentName:"p"},".ccx")," file and you get this dialog, you should make sure you trust the person who sent it."),Object(l.mdx)("p",null,"Now that you have your plugin installed, test it again to make sure the packaged version performs correctly. Then move on to ",Object(l.mdx)("a",Object(i.a)({parentName:"p"},{href:"../distribution-options"}),"Options for Distribution")," to get your plugin out into the world."))}u.isMDXComponent=!0},Hwdg:function(e,t,n){e.exports=n.p+"static/udt-package-menu-15139edff2136f8ebc716710fc7f54fc.png"},"K3+6":function(e,t,n){e.exports=n.p+"static/package-success-f1bdd32ca30c6a49ec9754b201dea5a6.png"},j29P:function(e,t,n){e.exports=n.p+"static/package-failed-ae9f0d6fdff6a0eec3482a2cf2a550e5.png"},qffi:function(e,t,n){e.exports=n.p+"static/verify-failed-34e794f7595a5a11641c2c56ffc5077d.png"},"t+mI":function(e,t,n){e.exports=n.p+"static/install-warning-9f2b1998096aac9e60a920bea16d1e51.png"}}]);
//# sourceMappingURL=component---src-pages-distribution-packaging-your-plugin-index-md-2a14bca5dbcc0e7f6162.js.map