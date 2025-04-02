import{Z as g,aa as P,ca as F}from"./chunk-46H3OTOU.js";import{Ac as d,Dc as m,Eb as C,Lb as x,Ma as u,Mb as c,Ob as w,P as h,Q as y,V as b,Xa as v,Z as s,_ as M,bb as i,cb as a,db as S,ia as k,ja as f,lb as o,mb as p,nb as l,xc as D}from"./chunk-HCFYYDRK.js";var L=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.color.1")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.color.1")};
    }
    40% {
        stroke: ${e("progressspinner.color.2")};
    }
    66% {
        stroke: ${e("progressspinner.color.3")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.color.4")};
    }
}
`,N={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},_=(()=>{class e extends P{name="progressspinner";theme=L;classes=N;static \u0275fac=(()=>{let n;return function(t){return(n||(n=f(e)))(t||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var B=(()=>{class e extends F{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=b(_);static \u0275fac=(()=>{let n;return function(t){return(n||(n=f(e)))(t||e)}})();static \u0275cmp=s({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},standalone:!0,features:[x([_]),v,c],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(r,t){r&1&&(o(0,"div",0),k(),o(1,"svg",1),l(2,"circle",2),p()()),r&2&&(a("ngStyle",t.style)("ngClass",t.styleClass),i("aria-label",t.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),u(),S("animation-duration",t.animationDuration),i("data-pc-section","root"),u(),i("fill",t.fill)("stroke-width",t.strokeWidth))},dependencies:[m,D,d,g],encapsulation:2,changeDetection:0})}return e})(),I=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=M({type:e});static \u0275inj=y({imports:[B,g,g]})}return e})();var $=e=>({height:e}),U=(()=>{class e{constructor(){this.height="5 cm",this.class=""}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=s({type:e,selectors:[["app-loading-spinner"]],inputs:{height:"height",class:"class"},standalone:!0,features:[c],decls:4,vars:3,consts:[[1,"flex","align-items-center","justify-content-center","flex-column",3,"ngStyle"],[1,"loader","mb-3"],[1,"text-xl"]],template:function(r,t){r&1&&(o(0,"div",0),l(1,"span",1),o(2,"div",2),C(3,"Chargement"),p()()),r&2&&a("ngStyle",w(1,$,t.height))},dependencies:[m,d,I],styles:['.loader[_ngcontent-%COMP%]{transform:rotate(45deg);perspective:1000px;border-radius:50%;width:70px;height:70px;color:#d1d1d1}.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;top:0;left:0;width:inherit;height:inherit;border-radius:50%;transform:rotateX(70deg);animation:1s _ngcontent-%COMP%_spin linear infinite}.loader[_ngcontent-%COMP%]:after{color:#c23210;transform:rotateY(70deg);animation-delay:.4s}@keyframes _ngcontent-%COMP%_rotate{0%{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}@keyframes _ngcontent-%COMP%_rotateccw{0%{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(-360deg)}}@keyframes _ngcontent-%COMP%_spin{0%,to{box-shadow:.2em 0 0 0 currentcolor}12%{box-shadow:.2em .2em 0 0 currentcolor}25%{box-shadow:0 .2em 0 0 currentcolor}37%{box-shadow:-.2em .2em 0 0 currentcolor}50%{box-shadow:-.2em 0 0 0 currentcolor}62%{box-shadow:-.2em -.2em 0 0 currentcolor}75%{box-shadow:0 -.2em 0 0 currentcolor}87%{box-shadow:.2em -.2em 0 0 currentcolor}}']})}}return e})();export{U as a};
