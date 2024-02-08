(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[56],{Drzh:function(t,n,e){var o=e("IX7i");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e("P8hj").default)("527dcf9a",o,!0,{})},IX7i:function(t,n,e){},yVSx:function(t,n,e){"use strict";e.r(n);e("Drzh"),n.default={template:'\n{% block sw_bulk_edit_save_modal %}\n<sw-modal\n    class="sw-bulk-edit-save-modal"\n    variant="small"\n    :title="title"\n    @modal-close="onModalClose"\n>\n\n    \n    {% block sw_bulk_edit_save_modal_body %}\n    <div class="sw-bulk-edit-save-modal-body">\n        <router-view\n            :item-total="itemTotal"\n            :bulk-edit-data="bulkEditData"\n            @changes-apply="applyChanges"\n            @buttons-update="updateButtons"\n            @redirect="redirect"\n            @title-set="setTitle"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_save_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_bulk_edit_save_modal_footer_left %}\n        <div class="footer-left">\n            <sw-button\n                v-for="button in buttons.left"\n                :key="button.key"\n                size="small"\n                :variant="button.variant"\n                :disabled="button.disabled"\n                @click="onButtonClick(button.action)"\n            >\n                {{ button.label }}\n            </sw-button>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_bulk_edit_save_modal_footer_right %}\n        <div class="footer-right">\n            <sw-button\n                v-for="button in buttons.right"\n                :key="button.key"\n                size="small"\n                :variant="button.variant"\n                :disabled="button.disabled"\n                @click="onButtonClick(button.action)"\n            >\n                {{ button.label }}\n            </sw-button>\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',props:{itemTotal:{required:!0,type:Number},isLoading:{required:!0,type:Boolean},processStatus:{required:!0,type:String},bulkEditData:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{title:null,buttonConfig:[]}},computed:{currentStep:function(){return this.isLoading&&!this.processStatus?"process":this.isLoading||"success"!==this.processStatus?this.isLoading||"fail"!==this.processStatus?"confirm":"fail":"success"},buttons:function(){return{right:this.buttonConfig.filter((function(t){return"right"===t.position})),left:this.buttonConfig.filter((function(t){return"left"===t.position}))}}},watch:{currentStep:function(t){"success"===t&&this.redirect("success"),"fail"===t&&this.redirect("error")}},created:function(){this.createdComponent()},beforeDestroy:function(){this.beforeDestroyComponent()},methods:{createdComponent:function(){this.addEventListeners()},beforeDestroyComponent:function(){this.removeEventListeners()},addEventListeners:function(){var t=this;window.addEventListener("beforeunload",(function(n){return t.beforeUnloadListener(n)}))},removeEventListeners:function(){var t=this;window.removeEventListener("beforeunload",(function(n){return t.beforeUnloadListener(n)}))},beforeUnloadListener:function(t){return this.isLoading?(t.preventDefault(),t.returnValue=this.$tc("sw-bulk-edit.modal.messageBeforeTabLeave"),this.$tc("sw-bulk-edit.modal.messageBeforeTabLeave")):""},onModalClose:function(){this.$emit("modal-close")},applyChanges:function(){this.$emit("bulk-save")},redirect:function(t){t?this.$router.push({path:t}):this.$emit("modal-close")},setTitle:function(t){this.title=t},updateButtons:function(t){this.buttonConfig=t},onButtonClick:function(t){"string"!=typeof t?"function"==typeof t&&t.call():this.redirect(t)}}}}}]);