"use strict";(self.webpackChunkaya_documentation_web=self.webpackChunkaya_documentation_web||[]).push([[963],{3963:(G,u,n)=>{n.r(u),n.d(u,{ControlDocsModule:()=>Y});var h=n(6895),v=n(4006),T=n(1943),l=n(3848),y=n(4859),g=n(4144),b=n(9549),x=n(7009),p=n(3546),P=n(7084),A=n(5662),e=n(4650),U=n(655),M=n(4080),m=n(9933),c=n(8184),S=n(1135);const O=["*"];let H=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["aya-popover"]],ngContentSelectors:O,decls:2,vars:0,consts:[[1,"popover-container"]],template:function(o,i){1&o&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},styles:["[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]{padding:12px;border-radius:4px;box-shadow:0 2px 8px #00000029;z-index:999999999;background-color:#fff}[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:14px}"]}),t})(),C=(()=>{class t{constructor(){this._state$=new S.X(!1)}getState(){return this._state$.asObservable()}setState(o){this._state$.next(o)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),I=(()=>{let t=class{constructor(o,i,d){this._overlay=o,this._vcr=i,this._popoverService=d,this.onClick=this.openPopover,this.closeOnClickOutside=!1,this.horizontalAdjustPx=-250,this.verticalAdjustPx=120,this.horizontalAdjust="",this.verticalAdjust=""}ngOnInit(){this.setPosition(),this.createOverlay(),this.overLayState$=this._popoverService.getState(),this.overLayState$.pipe((0,m.t)(this)).subscribe(o=>{o&&this.detachOverlay()})}ngOnDestroy(){this.detachOverlay()}openPopover(){this.attachOverlay()}setPosition(){this.horizontalAdjust=`${this.horizontalAdjustPx}px`,this.verticalAdjust=`${this.verticalAdjustPx}px`}createOverlay(){const o=this._overlay.scrollStrategies.block(),i=this._overlay.position().global().centerHorizontally(this.horizontalAdjust).centerVertically(this.verticalAdjust);this.overlayRef||(this.overlayRef=this._overlay.create({positionStrategy:i,scrollStrategy:o,hasBackdrop:!0}),this.overLayClickListener$=this.overlayRef.backdropClick().pipe((0,m.t)(this)),this.overLayClickListener$.subscribe(()=>{this.closeOnClickOutside&&this.detachOverlay()}))}attachOverlay(){if(this.overlayRef&&!this.overlayRef.hasAttached()){const o=new M.UE(this.popoverTrigger,this._vcr);this.overlayRef.attach(o)}}detachOverlay(){this.overlayRef&&this.overlayRef?.hasAttached()&&this.overlayRef.detach()}};return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.aV),e.Y36(e.s_b),e.Y36(C))},t.\u0275dir=e.lG2({type:t,selectors:[["","popoverTrigger",""]],hostBindings:function(o,i){1&o&&e.NdJ("click",function(){return i.onClick()})},inputs:{popoverTrigger:"popoverTrigger",closeOnClickOutside:"closeOnClickOutside",horizontalAdjustPx:"horizontalAdjustPx",verticalAdjustPx:"verticalAdjustPx"}}),t=(0,U.gn)([(0,m.c)()],t),t})(),w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[c.aV,C],imports:[h.ez,c.U8]}),t})();var f=n(9147),E=n(1793),q=n(5590),D=n(7012),J=n(5852),Z=n(9132),r=n(7511),s=n(1973);function Q(t,a){1&t&&(e.TgZ(0,"aya-popover"),e._uU(1,"Content inside the popover."),e.qZA())}let L=(()=>{class t{constructor(){this.htmlExample='<button mat-flat-button color="primary" [popoverTrigger]="popover" [closeOnClickOutside]="true">Open</button>\n\n<ng-template #popover>\n    <aya-popover>Content inside the popover.</aya-popover>\n</ng-template>'}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["aya-popover-documentation"]],decls:23,vars:4,consts:[["animationDuration","0ms",1,"documentation-tabs",3,"dynamicHeight"],["label","OVERVIEW"],[1,"display-2"],["href","https://medium.com/@JoaoPoggioli/creating-a-custom-popover-with-overlay-in-angular-dfb330cfd124"],["label","API"],["folder","popover","title","Popover","name","AyaPopoverModule","type","Module"],["name","AyaPopoverComponent","type","Component"],["name","AyaPopoverDirective","type","Directive"],["name","AyaPopoverService","type","Service"],["label","EXAMPLES"],["title","Popover with Trigger Button",3,"htmlCode"],["mat-flat-button","","color","primary",3,"popoverTrigger","closeOnClickOutside"],["popover",""]],template:function(o,i){if(1&o&&(e.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"h1",2),e._uU(3,"Popover"),e.qZA(),e.TgZ(4,"p"),e._uU(5," A popover is an element that appears as a small overlay or a dialog box on top of the main content when a user clicks or hovers over a designated trigger area, such as a button or an icon. Popovers are often used to display contextual information or options that are related to the user's current task or the content they are viewing. "),e.qZA(),e.TgZ(6,"p"),e._uU(7," This popover directive is based on this article:"),e._UZ(8,"br"),e.TgZ(9,"a",3),e._uU(10,"https://medium.com/@JoaoPoggioli/creating-a-custom-popover-with-overlay-in-angular-dfb330cfd124"),e.qZA(),e._uU(11,". "),e.qZA()(),e.TgZ(12,"mat-tab",4),e._UZ(13,"aya-api-documentation",5)(14,"aya-api-documentation",6)(15,"aya-api-documentation",7)(16,"aya-api-documentation",8),e.qZA(),e.TgZ(17,"mat-tab",9)(18,"aya-code-example-viewer",10)(19,"button",11),e._uU(20,"Open"),e.qZA(),e.YNc(21,Q,2,0,"ng-template",null,12,e.W1O),e.qZA()()()),2&o){const d=e.MAs(22);e.Q6J("dynamicHeight",!0),e.xp6(18),e.Q6J("htmlCode",i.htmlExample),e.xp6(1),e.Q6J("popoverTrigger",d)("closeOnClickOutside",!0)}},dependencies:[l.SP,l.uX,y.lW,r.O,s.l,H,I],encapsulation:2}),t})(),N=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["aya-header-documentation"]],decls:24,vars:6,consts:[["animationDuration","0ms",1,"documentation-tabs",3,"dynamicHeight"],["label","OVERVIEW"],[1,"display-2"],["title","Example Header"],["label","API"],["folder","header","title","Header","name","AyaHeaderModule","type","Module"],["folder","header","name","AyaHeaderComponent","type","Component"],["label","EXAMPLES"],["title","Blank header",3,"htmlCode"],["title","Header with title",3,"htmlCode"],["title","Header with title and back button",3,"htmlCode"],["title","Example Header",3,"showBackButton"],["title","Additional Content",3,"htmlCode"],["title","Example Header with Content"]],template:function(o,i){1&o&&(e.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"h1",2),e._uU(3,"Header"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"The top header bar can display a title related to the current screen, actions, navigation, menu, and back button."),e.qZA(),e._UZ(6,"aya-header",3),e.qZA(),e.TgZ(7,"mat-tab",4),e._UZ(8,"aya-api-documentation",5)(9,"aya-api-documentation",6),e.qZA(),e.TgZ(10,"mat-tab",7)(11,"h1",2),e._uU(12,"Header Examples"),e.qZA(),e.TgZ(13,"aya-code-example-viewer",8),e._UZ(14,"aya-header"),e.qZA(),e.TgZ(15,"aya-code-example-viewer",9),e._UZ(16,"aya-header",3),e.qZA(),e.TgZ(17,"aya-code-example-viewer",10),e._UZ(18,"aya-header",11),e.qZA(),e.TgZ(19,"aya-code-example-viewer",12)(20,"p"),e._uU(21,"More content (such as actions) can be shown in the header and will display to the right of the title."),e.qZA(),e.TgZ(22,"aya-header",13),e._uU(23," Content "),e.qZA()()()()),2&o&&(e.Q6J("dynamicHeight",!0),e.xp6(13),e.Q6J("htmlCode","<aya-header></aya-header>"),e.xp6(2),e.Q6J("htmlCode",'<aya-header title="Example Header"></aya-header>'),e.xp6(2),e.Q6J("htmlCode",'<aya-header title="Example Header" [showBackButton]="true"></aya-header>'),e.xp6(1),e.Q6J("showBackButton",!0),e.xp6(1),e.Q6J("htmlCode",'<aya-header title="Example Header">Content</aya-header>'))},dependencies:[l.SP,l.uX,r.O,s.l,A.Z],encapsulation:2}),t})();var B=n(1917);let X=(()=>{class t{constructor(){this.menuItems=[{title:"Home",path:"/home",icon:"home"}],this.exampleHtml='<aya-side-navigation [menuList]="menuItems">Content</aya-side-navigation>',this.exampleTs="import { Component } from '@angular/core';\nimport { AyaMenuItem } from '@aya/controls/side-navigation';\n\n@Component({\n    selector: 'aya-example',\n    templateUrl: './example.component.html'\n})\nexport class ExampleComponent {\n    menuItems: AyaMenuItem[] = [{\n        title: 'Home',\n        path: '/home',\n        icon: 'home'\n    }];\n}",this.exampleLogoHtml='<aya-side-navigation [menuList]="menuItems">\n    <img src="/assets/logo.png" logo />\n    Content\n</aya-side-navigation>',this.exampleContentHtml='<aya-side-navigation [menuList]="menuItems">\n    <img src="/assets/logo.png" logo />\n    Content\n    <div class="side-nav-content" optionalSidebarContent>\n        Version 1.0.0\n    </div>\n</aya-side-navigation>'}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["aya-side-navigation-documentation"]],decls:53,vars:10,consts:[["animationDuration","0ms",1,"documentation-tabs",3,"dynamicHeight"],["label","OVERVIEW"],[1,"display-2"],["label","API"],["folder","side-navigation","title","Side Navigation","name","AyaSideNavigationModule","type","Module"],["name","AyaSideNavigationComponent","type","Component"],["name","AyaMenuItem","type","Interface"],["name","AyaSubMenuItem","type","Interface"],["label","EXAMPLES"],[1,"highlight"],["title","Basic Side Navigation",3,"htmlCode","tsCode"],[1,"side-nav-example",3,"menuList"],["title","Side Navigation with Logo",3,"htmlCode","tsCode"],["logo",""],["title","Side Navigation",3,"htmlCode","tsCode"],["optionalSidebarContent","",1,"side-nav-content"]],template:function(o,i){1&o&&(e.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"h1",2),e._uU(3,"Side Navigation"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Side Navigation provides access to destinations and app functionality. Can be permanently on-screen or controlled by a navigation menu icon. Can display a logo or additional content below the navigation (such as copyright information). "),e.qZA(),e._uU(6," <--- Side navigation example "),e.qZA(),e.TgZ(7,"mat-tab",3),e._UZ(8,"aya-api-documentation",4)(9,"aya-api-documentation",5)(10,"aya-api-documentation",6)(11,"aya-api-documentation",7),e.qZA(),e.TgZ(12,"mat-tab",8)(13,"h1",2),e._uU(14,"Side Navigation Examples"),e.qZA(),e.TgZ(15,"h2"),e._uU(16,"Basic Side Navigation"),e.qZA(),e.TgZ(17,"p"),e._uU(18,"Basic side navigation with one menu item (home) and nothing else."),e.qZA(),e.TgZ(19,"p"),e._uU(20,"Anything placed inside the selector "),e.TgZ(21,"span",9),e._uU(22,"aya-side-navigation"),e.qZA(),e._uU(23,' will display to the right of the side navigation (such as the text "Content" in this example). '),e.TgZ(24,"aya-code-example-viewer",10)(25,"aya-side-navigation",11),e._uU(26," Content "),e.qZA()()(),e.TgZ(27,"h2"),e._uU(28,"Logo"),e.qZA(),e.TgZ(29,"p"),e._uU(30,"Add the "),e.TgZ(31,"span",9),e._uU(32,"logo"),e.qZA(),e._uU(33," directive to element you wish to appear as the logo (such as an image, icon, or another component)."),e.qZA(),e.TgZ(34,"p"),e._uU(35,'The logo will automatically be placed above the navigation items and will redirect the user to the home page("/") when interacted with.'),e.qZA(),e.TgZ(36,"aya-code-example-viewer",12)(37,"aya-side-navigation",11),e._UZ(38,"aya-logo",13),e._uU(39," Content "),e.qZA()(),e.TgZ(40,"h2"),e._uU(41,"Additional Options"),e.qZA(),e.TgZ(42,"p"),e._uU(43,"If any other content needs to be displayed in the sidebar (for example, a promotional offer or version number) add the "),e.TgZ(44,"span",9),e._uU(45,"optionalSidebarContent"),e.qZA(),e._uU(46," directive to the element containing the content."),e.qZA(),e.TgZ(47,"aya-code-example-viewer",14)(48,"aya-side-navigation",11),e._UZ(49,"aya-logo",13),e._uU(50," Content "),e.TgZ(51,"div",15),e._uU(52," Version 1.0.0 "),e.qZA()()()()()),2&o&&(e.Q6J("dynamicHeight",!0),e.xp6(24),e.Q6J("htmlCode",i.exampleHtml)("tsCode",i.exampleTs),e.xp6(1),e.Q6J("menuList",i.menuItems),e.xp6(11),e.Q6J("htmlCode",i.exampleLogoHtml)("tsCode",i.exampleTs),e.xp6(1),e.Q6J("menuList",i.menuItems),e.xp6(10),e.Q6J("htmlCode",i.exampleContentHtml)("tsCode",i.exampleTs),e.xp6(1),e.Q6J("menuList",i.menuItems))},dependencies:[l.SP,l.uX,r.O,s.l,f.S,B.o],styles:[".side-nav-example[_ngcontent-%COMP%]{height:180px}.side-nav-example[_ngcontent-%COMP%]     .mat-sidenav{left:200px;width:200px;visibility:visible!important}.side-nav-example[_ngcontent-%COMP%]     .mat-sidenav-content{left:220px}.side-nav-content[_ngcontent-%COMP%]{text-align:center;margin-top:16px}"]}),t})();var j=n(9504);const k=[{path:"index",component:(()=>{class t{constructor(){this.appModule="\n    import { NgModule } from '@angular/core';\n    import { AppComponent } from './app.component';\n    import { AyaHeaderModule } from '@aya/controls/header';\n    import { AyaSideNavigationModule } from '@aya/controls/side-navigation';\n    \n    @NgModule({\n        declarations: [\n            AppComponent,\n        ],\n        imports: [\n            AyaHeaderModule,\n            AyaSideNavigationModule,\n        ],\n        providers: [],\n        bootstrap: [AppComponent],\n    })\n    export class AppModule { }"}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["aya-controls-index"]],decls:20,vars:2,consts:[[1,"tab-content-wrapper"],[1,"headline-4"],[1,"indent"],[3,"code"],[1,"card-section"],["fileName","app.module.ts",3,"code"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"How to Use"),e.qZA(),e.TgZ(3,"mat-card")(4,"mat-card-title"),e._uU(5,"Installation"),e.qZA(),e.TgZ(6,"mat-card-content")(7,"p",2),e._uU(8,"Open a command prompt and run the following command:"),e.qZA(),e._UZ(9,"aya-code-viewer",3),e.qZA()(),e._UZ(10,"br"),e.TgZ(11,"mat-card",4)(12,"mat-card-title"),e._uU(13,"Using in an Angular Application"),e.qZA(),e.TgZ(14,"mat-card-content")(15,"p"),e._uU(16,"Import modules as needed in your project, such as Header and Side Navigation from the library."),e.qZA(),e.TgZ(17,"p"),e._uU(18,"Here is an example of how the app.module.ts file should look using those two modules from the @aya/controls library:"),e.qZA(),e._UZ(19,"aya-code-viewer",5),e.qZA()()()),2&o&&(e.xp6(9),e.Q6J("code","npm install @aya/controls"),e.xp6(10),e.Q6J("code",i.appModule))},dependencies:[p.a8,p.dn,p.n5,j.V],encapsulation:2}),t})()},{path:"header",component:N},{path:"popover",component:L},{path:"side-navigation",component:X},{path:"table",component:(()=>{class t{constructor(){this.exampleHtml="",this.exampleTs=""}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["aya-table"]],decls:26,vars:3,consts:[["animationDuration","0ms",1,"documentation-tabs",3,"dynamicHeight"],["label","OVERVIEW"],[1,"display-2"],["label","API"],["folder","table","title","Table","name","AyaTableModule","type","Module"],["name","AyaTableComponent","type","Component"],["name","AyaTableColumnDirective","type","Directive"],["name","FetchArgs","type","Interface"],["name","FetchArgs2","type","Interface"],["name","PagingToken","type","Interface"],["name","PagingTokenFixed","type","Interface"],["name","emptyPagingToken","type","Function"],["name","TableFilterType","type","Interface"],["label","EXAMPLES"],["title","Basic Table",3,"htmlCode","tsCode"]],template:function(o,i){1&o&&(e.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"h1",2),e._uU(3,"Table"),e.qZA(),e.TgZ(4,"h3"),e._uU(5,"Create a row that can be edited based on flag"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"https://stackoverflow.com/questions/55469754/angular-6-ng-container-ng-template-inside-mat-table-is-not-working"),e.qZA(),e.TgZ(8,"h3"),e._uU(9,"Table example"),e.qZA(),e.TgZ(10,"p"),e._uU(11,"https://decodedscript.com/angular-material-table-dynamic-columns-and-event/"),e.qZA()(),e.TgZ(12,"mat-tab",3),e._UZ(13,"aya-api-documentation",4)(14,"aya-api-documentation",5)(15,"aya-api-documentation",6)(16,"aya-api-documentation",7)(17,"aya-api-documentation",8)(18,"aya-api-documentation",9)(19,"aya-api-documentation",10)(20,"aya-api-documentation",11)(21,"aya-api-documentation",12),e.qZA(),e.TgZ(22,"mat-tab",13)(23,"h1",2),e._uU(24,"Table Examples"),e.qZA(),e._UZ(25,"aya-code-example-viewer",14),e.qZA()()),2&o&&(e.Q6J("dynamicHeight",!0),e.xp6(25),e.Q6J("htmlCode",i.exampleHtml)("tsCode",i.exampleTs))},dependencies:[l.SP,l.uX,r.O,s.l],encapsulation:2}),t})()},{path:"toolbar",component:(()=>{class t{constructor(){this.exampleHtml="",this.exampleTs=""}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-toolbar"]],decls:12,vars:3,consts:[["animationDuration","0ms",1,"documentation-tabs",3,"dynamicHeight"],["label","OVERVIEW"],[1,"display-2"],["label","API"],["folder","table","title","Table","name","AyaToolbarModule","type","Module"],["name","AyaDetailToolbarComponent","type","Component"],["label","EXAMPLES"],["title","Basic Table",3,"htmlCode","tsCode"]],template:function(o,i){1&o&&(e.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"h1",2),e._uU(3,"Toolbar"),e.qZA(),e._UZ(4,"p"),e.qZA(),e.TgZ(5,"mat-tab",3),e._UZ(6,"aya-api-documentation",4)(7,"aya-api-documentation",5),e.qZA(),e.TgZ(8,"mat-tab",6)(9,"h1",2),e._uU(10,"Toolbar Examples"),e.qZA(),e._UZ(11,"aya-code-example-viewer",7),e.qZA()()),2&o&&(e.Q6J("dynamicHeight",!0),e.xp6(11),e.Q6J("htmlCode",i.exampleHtml)("tsCode",i.exampleTs))},dependencies:[l.SP,l.uX,r.O,s.l],encapsulation:2}),t})()},{path:"tooltip",component:n(266).KZ}];let $=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Z.Bz.forChild(k),Z.Bz]}),t})();const W=[g.c,b.lN,x.ZX,l.Nh,y.ot,g.c,p.QW,P.To];let Y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.ez,$,v.u5,v.UX,W,D.x,q.Qw,w,A.n,f.I,E.p,J.Q,T.JP.forChild()]}),t})()}}]);