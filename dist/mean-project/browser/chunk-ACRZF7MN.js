import{a as pe,b as me}from"./chunk-N4FHWSZE.js";import{a as Be,b as ke}from"./chunk-3JAB2GRY.js";import{a as Le,b as $}from"./chunk-ZZBX7JAL.js";import{a as A,b as Ee,c as Te,d as Ie,e as ze}from"./chunk-54YOY2DV.js";import{a as De}from"./chunk-VQYPX5UL.js";import{a as $e}from"./chunk-UXJZGTZ5.js";import{k as ye,n as Pe,o as we,p as Me,q as Fe}from"./chunk-CWIWXQ3X.js";import{Aa as ge,Ca as he,Da as ve,Fa as O,Ja as xe,La as _e,Ma as Se,Oa as Ce,Pa as be,Q as M,U as F,aa as se,b as ae,ca as le,oa as ce,pa as N,qa as z,wa as de,xa as ue,ya as fe}from"./chunk-46H3OTOU.js";import{$ as Z,$a as d,Dc as L,Eb as p,Fb as C,Ib as b,Ja as R,Jb as y,Kb as P,Lb as w,Ma as s,Mb as I,Na as g,Nb as U,P as B,Q as G,U as K,V as Q,Xa as te,Ya as ie,Z as T,Zb as _,_ as X,cb as l,eb as ne,fb as V,ga as v,ha as x,hb as j,hc as J,ja as ee,lb as r,mb as o,na as k,nb as u,rb as S,sb as h,tb as f,xc as oe,yc as re,zc as W}from"./chunk-HCFYYDRK.js";var He=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding: ${e("textarea.padding.y")} ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${e("textarea.invalid.border.color")}
};

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${e("textarea.sm.font.size")};
    padding-block: ${e("textarea.sm.padding.y")};
    padding-inline: ${e("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${e("textarea.lg.font.size")};
    padding-block: ${e("textarea.lg.padding.y")};
    padding-inline: ${e("textarea.lg.padding.x")};
}
`,qe={root:({instance:e,props:a})=>["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":a.autoResize,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled","p-textarea-fluid":a.fluid}]},Re=(()=>{class e extends se{name="textarea";theme=He;classes=qe;static \u0275fac=(()=>{let t;return function(i){return(t||(t=ee(e)))(i||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var Ve=(()=>{class e extends le{ngModel;control;autoResize;variant="outlined";fluid=!1;pSize;onResize=new k;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=Q(Re);constructor(t,n){super(),this.ngModel=t,this.control=n}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(t){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(t){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(t||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)(g(O,8),g(he,8))};static \u0275dir=Z({type:e,selectors:[["","pTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(n,i){n&1&&h("input",function(c){return i.onInput(c)}),n&2&&ne("p-filled",i.filled)("p-textarea-resizable",i.autoResize)("p-variant-filled",i.variant==="filled"||i.config.inputStyle()==="filled"||i.config.inputVariant()==="filled")("p-textarea-fluid",i.hasFluid)("p-textarea-sm",i.pSize==="small")("p-inputfield-sm",i.pSize==="small")("p-textarea-lg",i.pSize==="large")("p-inputfield-lg",i.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",J],variant:"variant",fluid:[2,"fluid","fluid",J],pSize:"pSize"},outputs:{onResize:"onResize"},standalone:!0,features:[w([Re]),ie,te]})}return e})(),je=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=X({type:e});static \u0275inj=G({})}return e})();var D=(()=>{class e{constructor(t){this.http=t,this.apiUrl=`${de.apiUrl}/api/prestations`}getAllPrestations(){return this.http.get(`${this.apiUrl}`)}createPrestation(t){return this.http.post(this.apiUrl,t)}updatePrestation(t,n){return this.http.put(`${this.apiUrl}/${t}`,n)}deletePrestation(t){return this.http.delete(`${this.apiUrl}/${t}`)}static{this.\u0275fac=function(n){return new(n||e)(K(ae))}}static{this.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Ye(e,a){if(e&1&&u(0,"img",15),e&2){let t=f();l("src",t.prestation.image,R)("alt",t.prestation.image)}}function Ge(e,a){e&1&&(r(0,"small",16),p(1,"Name is required."),o())}function Ke(e,a){if(e&1){let t=S();r(0,"div",17)(1,"p-radiobutton",18),P("ngModelChange",function(i){v(t);let m=f();return y(m.prestation.category,i)||(m.prestation.category=i),x(i)}),o(),r(2,"label",19),p(3),o()()}if(e&2){let t=a.$implicit,n=f();s(),l("inputId","category"+t._id)("value",t),b("ngModel",n.prestation.category),s(),l("for","category"+t._id),s(),C(t.name)}}var q=(()=>{class e{constructor(t,n){this.categoryService=t,this.prestationService=n,this.prestation=new $,this.onSave=new k,this.submitted=!1,this.categories=[],this.isUpdating=!1,this.newFileSelected=!1,this.selectedFile=null,this.imageBase64=""}ngOnInit(){this.categoryService.getCategories().subscribe({next:t=>{this.categories=t,this.prestation.category=this.categories.find(n=>n._id===this.prestation.category._id)||new Le(this.prestation.category)}}),this.isUpdating=!!this.prestation._id}confirmSave(t){this.messageService.clear();let n=this.isUpdating?"la mise \xE0 jour":"l'enregistrement";this.confirmationService.confirm({target:t.target,message:"Confirmation de "+n+" de la prestation ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",closable:!0,closeOnEscape:!0,rejectButtonProps:{label:"Annuler",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Enregistrer"},rejectButtonStyleClass:"p-button-text",accept:()=>{this.savePrestation(),this.confirmationService.close()},reject:()=>{}})}savePrestation(){this.isUpdating?(console.log("Updating the prestation"),this.imageBase64&&(this.prestation.image=this.imageBase64),this.prestationService.updatePrestation(this.prestation._id,this.prestation).subscribe({next:t=>{this.onSave.emit(t),this.messageService.add({severity:"info",detail:"La prestation a \xE9t\xE9 mise \xE0 jour",life:3e3})},error:t=>{console.log(t.message),this.messageService.add({severity:"danger",detail:"Une erreur est survenue lors de la mise \xE0 jour :"+t.error.message,life:3e3})}})):this.prestationService.createPrestation(this.prestation).subscribe({next:t=>{this.onSave.emit(t),this.messageService.add({severity:"info",detail:"La prestation a \xE9t\xE9 enregistr\xE9e",life:3e3})},error:t=>{this.messageService.add({severity:"danger",detail:"Une erreur est survenue lors de l'enregistrement :"+t.error.message,life:3e3})}})}onFileSelected(t){let n=t.target.files[0];if(n){this.selectedFile=n;let i=new FileReader;i.onload=()=>{this.imageBase64=i.result,this.prestation.image=this.imageBase64},i.readAsDataURL(n)}}static{this.\u0275fac=function(n){return new(n||e)(g($e),g(D))}}static{this.\u0275cmp=T({type:e,selectors:[["app-prestation-form"]],inputs:{prestation:"prestation",messageService:"messageService",confirmationService:"confirmationService"},outputs:{onSave:"onSave"},standalone:!0,features:[w([F,M]),I],decls:19,vars:5,consts:[[1,"grid","gap-3"],["class"," m-auto pb-4","width","250px",3,"src","alt",4,"ngIf"],["type","file",3,"change"],[1,"w-full"],["for","name",1,"font-bold"],["type","text","pInputText","","id","name","required","","autofocus","","fluid","",3,"ngModelChange","ngModel"],["class","text-red-500",4,"ngIf"],[1,"col-12"],["for","description",1,"font-bold"],["id","description","pTextarea","","required","","rows","3","cols","20","fluid","",3,"ngModelChange","ngModel"],[1,"font-bold"],[1,"grid","grid-cols-12","gap-4","mt-4"],["class","flex items-center gap-2 col-span-6",4,"ngFor","ngForOf"],[1,"flex","flex-col","mt-4","gap-2"],["pButton","","pRipple","","label","Valider","icon","pi pi-check",3,"click"],["width","250px",1,"m-auto","pb-4",3,"src","alt"],[1,"text-red-500"],[1,"flex","items-center","gap-2","col-span-6"],["name","category",3,"ngModelChange","inputId","value","ngModel"],[3,"for"]],template:function(n,i){n&1&&(r(0,"div",0),d(1,Ye,1,2,"img",1),r(2,"input",2),h("change",function(c){return i.onFileSelected(c)}),o(),r(3,"div",3)(4,"label",4),p(5,"Name"),o(),r(6,"input",5),P("ngModelChange",function(c){return y(i.prestation.name,c)||(i.prestation.name=c),c}),o(),d(7,Ge,2,0,"small",6),o(),r(8,"div",7)(9,"label",8),p(10,"Description"),o(),r(11,"textarea",9),P("ngModelChange",function(c){return y(i.prestation.description,c)||(i.prestation.description=c),c}),o()(),r(12,"div",7)(13,"span",10),p(14,"Category"),o(),r(15,"div",11),d(16,Ke,4,5,"div",12),o()()(),r(17,"div",13)(18,"button",14),h("click",function(c){return i.confirmSave(c)}),o()()),n&2&&(s(),l("ngIf",i.prestation.image),s(5),b("ngModel",i.prestation.name),s(),l("ngIf",i.submitted&&!i.prestation.name),s(4),b("ngModel",i.prestation.description),s(5),l("ngForOf",i.categories))},dependencies:[L,re,W,ye,we,Pe,_e,ge,ve,xe,O,Se,be,Ce,je,Ve,z,ce],encapsulation:2})}}return e})();var Qe=()=>({width:"500px"});function Xe(e,a){e&1&&(r(0,"tr")(1,"th"),p(2,"Image"),o(),r(3,"th"),p(4,"Nom"),o(),r(5,"th"),p(6,"Description"),o(),r(7,"th"),p(8,"Categorie"),o(),u(9,"th"),o())}function Ze(e,a){if(e&1&&u(0,"img",8),e&2){let t=f().$implicit;l("src",t.image,R)}}function et(e,a){if(e&1){let t=S();r(0,"tr")(1,"td"),d(2,Ze,1,1,"img",5),o(),r(3,"td"),p(4),o(),r(5,"td"),p(6),o(),r(7,"td"),p(8),o(),r(9,"td")(10,"p-button",6),h("click",function(){let i=v(t).$implicit,m=f(2);return x(m.editPrestation(i))}),o(),r(11,"p-button",7),h("click",function(){let i=v(t).$implicit,m=f(2);return x(m.confirmDelete(i._id))}),o()()()}if(e&2){let t=a.$implicit;s(2),l("ngIf",t.image),s(2),C(t.name),s(2),C(t.description),s(2),C(t.category.name),s(2),l("rounded",!0)("outlined",!0),s(),l("rounded",!0)("outlined",!0)}}function tt(e,a){if(e&1&&(r(0,"p-table",3),d(1,Xe,10,0,"ng-template",null,1,_)(3,et,12,8,"ng-template",null,2,_),o()),e&2){let t=f();l("value",t.prestations)}}function it(e,a){e&1&&u(0,"app-message-block")}function nt(e,a){if(e&1&&u(0,"app-prestation-form",9),e&2){let t=f();l("prestation",t.selectedPretation)("messageService",t.messageService)("confirmationService",t.confirmationService)}}var Ne=(()=>{class e{constructor(t){this.prestationService=t,this.prestations=[],this.selectedPretation=new $,this.showPrestationForm=!1}editPrestation(t){this.selectedPretation=t,this.showPrestationForm=!0}confirmDelete(t){this.confirmationService.confirm({header:"Confirmation",message:"Voulez-vous vraiment supprimer cette prestation.",icon:"pi pi-exclamation-circle",rejectButtonProps:{label:"Annuler",icon:"pi pi-times",outlined:!0,size:"small"},acceptButtonProps:{label:"Supprimer",icon:"pi pi-check",size:"small"},accept:()=>{this.prestationService.deletePrestation(t),this.messageService.add({severity:"info",summary:"Confirmed",detail:"Prestation supprim\xE9e",life:3e3})},reject:()=>{}})}static{this.\u0275fac=function(n){return new(n||e)(g(D))}}static{this.\u0275cmp=T({type:e,selectors:[["app-prestation-list"]],inputs:{prestations:"prestations",messageService:"messageService",confirmationService:"confirmationService"},standalone:!0,features:[w([F,M]),I],decls:5,vars:6,consts:[["content",""],["header",""],["body",""],[3,"value"],["header","Prestation Details",1,"overflow-hidden",3,"visibleChange","visible","modal"],["alt","img","width","200px",3,"src",4,"ngIf"],["icon","pi pi-pencil","severity","info",1,"mr-2",3,"click","rounded","outlined"],["icon","pi pi-trash","severity","danger",3,"click","rounded","outlined"],["alt","img","width","200px",3,"src"],[3,"prestation","messageService","confirmationService"]],template:function(n,i){if(n&1){let m=S();d(0,tt,5,1,"p-table",3)(1,it,1,0,"app-message-block"),r(2,"p-dialog",4),P("visibleChange",function(E){return v(m),y(i.showPrestationForm,E)||(i.showPrestationForm=E),x(E)}),d(3,nt,1,3,"ng-template",null,0,_),o()}n&2&&(j(i.prestations.length>0?0:1),s(2),V(U(5,Qe)),b("visible",i.showPrestationForm),l("modal",!0))},dependencies:[L,W,Fe,Me,z,N,A,q,ze],encapsulation:2})}}return e})();var ot=()=>({width:"500px"});function rt(e,a){}function at(e,a){if(e&1){let t=S();r(0,"p-button",7),h("click",function(){v(t);let i=f();return x(i.showPrestationFormDialog())}),o()}}function st(e,a){e&1&&u(0,"app-loading-spinner")}function lt(e,a){if(e&1&&u(0,"app-prestation-list",5),e&2){let t=f();l("prestations",t.prestations)("messageService",t.messageService)("confirmationService",t.confirmationService)}}function pt(e,a){if(e&1&&(r(0,"div",8),u(1,"i",9),r(2,"p"),p(3),o()()),e&2){let t=a.$implicit;s(),l("ngClass",t.icon),s(2),C(t.message)}}function mt(e,a){if(e&1&&u(0,"app-prestation-form",10),e&2){let t=f();l("prestation",t.newPrestation)("messageService",t.messageService)("confirmationService",t.confirmationService)}}var Oe=(()=>{class e{constructor(t,n,i){this.prestationService=t,this.messageService=n,this.confirmationService=i,this.prestations=[],this.isPrestationLoagin=!0,this.showPrestationForm=!1,this.newPrestation=new $}ngOnInit(){this.prestationService.getAllPrestations().subscribe({next:t=>{this.prestations=t,this.isPrestationLoagin=!1},error:t=>{this.messageService.add({severity:"error",summary:"Erreur",detail:"Erreur lors de la r\xE9cuperation des prestations "+t.error.message}),this.prestations=[],this.isPrestationLoagin=!1}})}showPrestationFormDialog(){this.showPrestationForm=!0}static{this.\u0275fac=function(n){return new(n||e)(g(D),g(F),g(M))}}static{this.\u0275cmp=T({type:e,selectors:[["app-prestation-list-page"]],standalone:!0,features:[w([F,M]),I],decls:18,vars:6,consts:[["start",""],["end",""],["message",""],["content",""],["styleClass","mb-6"],[3,"prestations","messageService","confirmationService"],["header","Prestation Details",3,"visibleChange","visible","modal"],["label","Ajouter","icon","pi pi-plus",1,"mr-2",3,"click"],[1,"flex","flex-col","items-center","w-full","gap-4","border-b","border-surface-200","dark:border-surface-700"],[1,"!text-6xl","text-primary-500",3,"ngClass"],[3,"prestation","messageService","confirmationService"]],template:function(n,i){if(n&1){let m=S();r(0,"p-card")(1,"h2"),p(2,"Liste des Prestations"),o(),r(3,"p-toolbar",4),d(4,rt,0,0,"ng-template",null,0,_)(6,at,1,0,"ng-template",null,1,_),o(),d(8,st,1,0,"app-loading-spinner")(9,lt,1,3,"app-prestation-list",5),o(),r(10,"p-confirmDialog"),d(11,pt,4,2,"ng-template",null,2,_),o(),u(13,"p-toast"),r(14,"p-dialog",6),P("visibleChange",function(E){return v(m),y(i.showPrestationForm,E)||(i.showPrestationForm=E),x(E)}),d(15,mt,1,3,"ng-template",null,3,_),o(),u(17,"p-toast")}n&2&&(s(8),j(i.isPrestationLoagin==!0?8:9),s(6),V(U(5,ot)),b("visible",i.showPrestationForm),l("modal",!0))},dependencies:[L,oe,fe,ue,De,Ne,me,pe,z,N,Ie,Te,ke,Be,Ee,A,q],encapsulation:2})}}return e})();var xi=[{path:"",component:Oe}];export{xi as default};
