(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[355],{f05L:function(n,e,r){var t=r("iVQq");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,r("P8hj").default)("fdc19cfc",t,!0,{})},"i97+":function(n,e,r){"use strict";r.r(e);var t=r("7yzw"),o=r.n(t),c=r("92Mt"),i=r.n(c),a=(r("f05L"),Shopware.Data.Criteria);e.default={template:'\n{% block sw_product_clone_modal %}\n<sw-modal\n    v-if="cloningVariants"\n    :title="$tc(\'sw-product.general.cloneTitle\')"\n    :closable="false"\n    variant="small"\n    class="clone-variant__modal"\n>\n    \n    {% block sw_product_clone_modal_description %}\n    <div class="clone-variant__description">\n        {{ $tc(\'sw-product.general.cloneNotice\') }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_clone_modal_progress_bar %}\n    <sw-progress-bar\n        class="clone-variant-progress-bar"\n        :value="progressInPercentage"\n    />\n    {% endblock %}\n\n    \n    {% block sw_product_clone_modal_progress_bar_description %}\n    <div class="clone-variant-progress-bar__description">\n        {{ cloneProgress }} {{ $tc(\'sw-product.variations.progressTypeOf\') }} {{ cloneMaxProgress }} {{ $tc(\'sw-product.general.cloneSuffix\') }}\n    </div>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","numberRangeService"],props:{product:{type:Object,required:!0}},data:function(){return{cloningVariants:!1,cloneMaxProgress:0,cloneProgress:0}},computed:{progressInPercentage:function(){return 100/(this.cloneMaxProgress*this.cloneProgress)},repository:function(){return this.repositoryFactory.create("product")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.duplicate()},duplicate:function(){this.numberRangeService.reserve("product").then(this.cloneParent).then(this.verifyVariants)},cloneParent:function(n){var e=this;return o()(i.a.mark((function r(){var t,o;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={cloneChildren:!1,overwrites:{productNumber:n.number,name:"".concat(e.product.name," ").concat(e.$tc("global.default.copy")),active:!1,mainVariantId:null}},r.next=3,e.repository.save(e.product);case 3:return r.next=5,e.repository.clone(e.product.id,Shopware.Context.api,t);case 5:return o=r.sent,r.abrupt("return",{id:o.id,productNumber:n.number});case 7:case"end":return r.stop()}}),r)})))()},verifyVariants:function(n){var e=this;this.getChildrenIds().then((function(r){r.length<=0?e.$emit("clone-finish",{id:n.id}):(e.cloningVariants=!0,e.cloneProgress=1,e.cloneMaxProgress=r.length,e.duplicateVariant(n,r,(function(){e.cloningVariants=!1,e.$emit("clone-finish",{id:n.id})})))}))},getChildrenIds:function(){var n=new a(1,null);return n.addFilter(a.equals("parentId",this.product.id)),this.repository.searchIds(n).then((function(n){return n.data}))},duplicateVariant:function(n,e,r){var t=this;if(e.length<=0)r();else{var o=e.shift(),c={overwrites:{parentId:n.id,productNumber:"".concat(n.productNumber,".").concat(this.cloneProgress)},cloneChildren:!1};this.repository.clone(o,Shopware.Context.api,c).then((function(){t.cloneProgress+=1,t.duplicateVariant(n,e,r)}))}}}}},iVQq:function(n,e,r){}}]);