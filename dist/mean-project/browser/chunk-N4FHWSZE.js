import{Z as g,aa as O,ca as k}from"./chunk-46H3OTOU.js";import{$a as c,Ab as y,Ac as N,Bc as $,Dc as w,Lb as B,Ma as r,Mb as j,P as _,Q as M,V as C,Xa as x,Z as h,_ as S,bb as p,cb as a,gb as D,ja as T,lb as s,mb as d,qb as m,tb as u,ub as I,vb as F,xb as f,xc as Q,zb as b,zc as E}from"./chunk-HCFYYDRK.js";var q=({dt:e})=>`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${e("toolbar.padding")};
    background: ${e("toolbar.background")};
    border: 1px solid ${e("toolbar.border.color")};
    color: ${e("toolbar.color")};
    border-radius: ${e("toolbar.border.radius")};
    gap: ${e("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`,R={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},L=(()=>{class e extends O{name="toolbar";theme=q;classes=R;static \u0275fac=(()=>{let t;return function(o){return(t||(t=T(e)))(o||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var J=["start"],P=["end"],V=["center"],z=["*"];function A(e,l){e&1&&m(0)}function G(e,l){if(e&1&&(s(0,"div",4),c(1,A,1,0,"ng-container",5),d()),e&2){let t=u();p("data-pc-section","start"),r(),a("ngTemplateOutlet",t.startTemplate)}}function H(e,l){e&1&&m(0)}function K(e,l){if(e&1&&(s(0,"div",6),c(1,H,1,0,"ng-container",5),d()),e&2){let t=u();p("data-pc-section","center"),r(),a("ngTemplateOutlet",t.centerTemplate)}}function U(e,l){e&1&&m(0)}function W(e,l){if(e&1&&(s(0,"div",7),c(1,U,1,0,"ng-container",5),d()),e&2){let t=u();p("data-pc-section","end"),r(),a("ngTemplateOutlet",t.endTemplate)}}var X=(()=>{class e extends k{style;styleClass;ariaLabelledBy;_componentStyle=C(L);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;static \u0275fac=(()=>{let t;return function(o){return(t||(t=T(e)))(o||e)}})();static \u0275cmp=h({type:e,selectors:[["p-toolbar"]],contentQueries:function(n,o,v){if(n&1&&(f(v,J,5),f(v,P,5),f(v,V,5)),n&2){let i;b(i=y())&&(o.startTemplate=i.first),b(i=y())&&(o.endTemplate=i.first),b(i=y())&&(o.centerTemplate=i.first)}},inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},standalone:!0,features:[B([L]),x,j],ngContentSelectors:z,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-start",4,"ngIf"],["class","p-toolbar-center",4,"ngIf"],["class","p-toolbar-end",4,"ngIf"],[1,"p-toolbar-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-center"],[1,"p-toolbar-end"]],template:function(n,o){n&1&&(I(),s(0,"div",0),F(1),c(2,G,2,2,"div",1)(3,K,2,2,"div",2)(4,W,2,2,"div",3),d()),n&2&&(D(o.styleClass),a("ngClass","p-toolbar p-component")("ngStyle",o.style),p("aria-labelledby",o.ariaLabelledBy)("data-pc-name","toolbar"),r(2),a("ngIf",o.startTemplate),r(),a("ngIf",o.centerTemplate),r(),a("ngIf",o.endTemplate))},dependencies:[w,Q,E,$,N,g],encapsulation:2,changeDetection:0})}return e})(),ue=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=S({type:e});static \u0275inj=M({imports:[X,g,g]})}return e})();export{X as a,ue as b};
