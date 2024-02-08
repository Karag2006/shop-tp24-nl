(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[11],{"5R61":function(e,t,n){"use strict";n.r(t);var s=n("7yzw"),o=n.n(s),a=n("92Mt"),i=n.n(a),c=(n("sQMa"),n("LSHN")),u=Shopware.Mixin,l=Shopware.Data.Criteria,r=Shopware.Utils.types,d=Shopware.Utils.array.chunk,m=Shopware.Utils.object.cloneDeep;t.default={template:'\n{% block sw_bulk_edit_customer %}\n<sw-page class="sw-bulk-edit-customer">\n    \n    {% block sw_bulk_edit_customer_search_bar %}\n    <template #search-bar>\n        <sw-search-bar />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_customer_smart_bar_header %}\n    <template #smart-bar-header>\n        <h2>{{ $tc(\'sw-bulk-edit.customer.textTitle\', selectedIds.length, { customerTotal: selectedIds.length }) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_customer_content_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_customer_content_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_bulk_edit_customer_actions_save %}\n        <sw-button-process\n            class="sw-bulk-edit-customer__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :process-success="false"\n            :disabled="isLoading || !hasChanges"\n            @click="openModal"\n        >\n            {{ $tc(\'sw-bulk-edit.applyChanges\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_customer_content %}\n    <template #content>\n        <sw-card-view\n            v-if="selectedIds.length > 0 && isLoadedData"\n        >\n            \n            {% block sw_bulk_edit_customer_content_account_card %}\n            <sw-card\n                class="sw-bulk-edit-customer-base__account"\n                position-identifier="sw-bulk-edit-customer-account"\n                :title="$tc(\'sw-bulk-edit.customer.account.cardTitle\')"\n                :is-loading="isLoading"\n            >\n                \n                {% block sw_bulk_edit_customer_content_account_section %}\n                <sw-bulk-edit-change-type-field-renderer\n                    :form-fields="accountFormFields"\n                    :bulk-edit-data="bulkEditData"\n                    :entity="customer"\n                />\n                {% endblock %}\n            </sw-card>\n            {% endblock %}\n\n            \n            {% block sw_bulk_edit_customer_tags_card %}\n            <sw-card\n                class="sw-bulk-edit-customer-base__tags"\n                position-identifier="sw-bulk-edit-customer-tags"\n                :title="$tc(\'sw-bulk-edit.customer.tags.cardTitle\')"\n                :is-loading="isLoading"\n            >\n                \n                {% block sw_bulk_edit_customer_tags %}\n                <sw-bulk-edit-change-type-field-renderer\n                    :form-fields="tagsFormFields"\n                    :bulk-edit-data="bulkEditData"\n                    :entity="customer"\n                />\n                {% endblock %}\n            </sw-card>\n            {% endblock %}\n\n            \n            {% block sw_bulk_edit_customer_custom_field_card %}\n            <sw-card\n                class="sw-bulk-edit-customer-base__custom_fields"\n                position-identifier="sw-bulk-edit-customer-custom-field"\n                :title="$tc(\'sw-bulk-edit.customer.customFields.cardTitle\')"\n                :is-loading="isLoading"\n            >\n                <sw-bulk-edit-custom-fields\n                    class="sw-bulk-edit__custom-fields"\n                    :sets="customFieldSets"\n                    @change="onCustomFieldsChange"\n                />\n            </sw-card>\n            {% endblock %}\n        </sw-card-view>\n\n        \n        {% block sw_bulk_edit_customer_empty_state %}\n        <sw-empty-state\n            v-if="selectedIds.length <= 0 && !isLoading"\n            :title="$tc(\'sw-bulk-edit.customer.messageEmptyTitle\')"\n            :subline="$tc(\'sw-bulk-edit.customer.messageEmptySubline\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_bulk_edit_customer_save_modal %}\n        <router-view\n            :item-total="selectedIds.length"\n            :is-loading="isLoading"\n            :process-status="processStatus"\n            :bulk-edit-data="bulkEditData"\n            @modal-close="closeModal"\n            @bulk-save="onSave"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["feature","bulkEditApiFactory","repositoryFactory"],mixins:[u.getByName("notification")],data:function(){return{isLoading:!1,isLoadedData:!1,isSaveSuccessful:!1,bulkEditData:{},customFieldSets:[],processStatus:"",customer:{}}},metaInfo:function(){return{title:this.$createTitle()}},computed:{selectedIds:function(){return Shopware.State.get("shopwareApps").selectedIds},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},customerRepository:function(){return this.repositoryFactory.create("customer")},customFieldSetCriteria:function(){var e=new l(1,null);return e.addFilter(l.equals("relations.entityName","customer")),e},hasChanges:function(){var e,t=null===(e=this.bulkEditData.customFields)||void 0===e?void 0:e.value,n=Object.values(this.bulkEditData).some((function(e){return e.isChanged})),s=!r.isEmpty(t)&&Object.keys(t).length>0;return n||s},actionsRequestGroup:function(){return[{value:"accept",label:this.$tc("sw-bulk-edit.customer.account.customerGroupRequest.options.accept")},{value:"decline",label:this.$tc("sw-bulk-edit.customer.account.customerGroupRequest.options.decline")}]},accountFormFields:function(){return[{name:"groupId",config:{componentName:"sw-entity-single-select",entity:"customer_group",changeLabel:this.$tc("sw-bulk-edit.customer.account.customerGroup.label"),placeholder:this.$tc("sw-bulk-edit.customer.account.customerGroup.placeholder")}},{name:"defaultPaymentMethodId",config:{componentName:"sw-entity-single-select",entity:"payment_method",changeLabel:this.$tc("sw-bulk-edit.customer.account.defaultPaymentMethod.label"),placeholder:this.$tc("sw-bulk-edit.customer.account.defaultPaymentMethod.placeholder")}},{name:"active",type:"bool",config:{type:"switch",changeLabel:this.$tc("sw-bulk-edit.customer.account.status.label")}},{name:"languageId",config:{componentName:"sw-entity-single-select",entity:"language",changeLabel:this.$tc("sw-bulk-edit.customer.account.language.label"),placeholder:this.$tc("sw-bulk-edit.customer.account.language.placeholder")}},{name:"requestedCustomerGroupId",labelHelpText:this.$tc("sw-bulk-edit.customer.account.customerGroupRequest.helpText"),config:{componentName:"sw-single-select",entity:"customer_group",changeLabel:this.$tc("sw-bulk-edit.customer.account.customerGroupRequest.label"),placeholder:this.$tc("sw-bulk-edit.customer.account.customerGroupRequest.placeholder"),options:this.actionsRequestGroup}}]},tagsFormFields:function(){return[{name:"tags",config:{componentName:"sw-entity-tag-select",entityCollection:this.customer.tags,allowOverwrite:!0,allowClear:!0,allowAdd:!0,allowRemove:!0,changeLabel:this.$tc("sw-bulk-edit.order.tags.changeLabel"),placeholder:this.$tc("sw-bulk-edit.order.tags.placeholder")}}]}},beforeCreate:function(){Shopware.State.registerModule("swBulkEdit",c.a)},created:function(){this.createdComponent()},beforeDestroy:function(){Shopware.State.unregisterModule("swBulkEdit")},methods:{createdComponent:function(){var e=this;this.setRouteMetaModule(),Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault"),this.isLoading=!0,this.customer=this.customerRepository.create(Shopware.Context.api),this.loadCustomFieldSets().then((function(){e.loadBulkEditData(),e.isLoadedData=!0})).catch((function(t){e.createNotificationError({title:e.$tc("global.default.error"),message:t})})).finally((function(){e.isLoading=!1}))},setRouteMetaModule:function(){this.$set(this.$route.meta.$module,"color","#F88962"),this.$set(this.$route.meta.$module,"icon","regular-users")},defineBulkEditData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"overwrite",s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.bulkEditData[e]||this.$set(this.bulkEditData,e,{isChanged:s,type:n,value:t})},loadBulkEditData:function(){var e=this;[this.accountFormFields,this.tagsFormFields].forEach((function(t){t.forEach((function(t){e.defineBulkEditData(t.name)}))})),this.$set(this.bulkEditData,"customFields",{type:"overwrite",value:null})},loadCustomFieldSets:function(){var e=this;return this.customFieldSetRepository.search(this.customFieldSetCriteria).then((function(t){e.customFieldSets=t}))},onCustomFieldsChange:function(e){Object.keys(e).length<=0?this.bulkEditData=this.bulkEditData.filter((function(e){return"customFields"!==e.field})):this.bulkEditData.customFields.value=e},onProcessData:function(){var e=this,t={requestData:[],syncData:[]};return Object.keys(this.bulkEditData).forEach((function(n){var s=m(e.bulkEditData[n]),o=e.customer[n];"active"!==n||o||(o=!1),"customFields"===n&&(o=s.value);var a={field:n,type:s.type,value:o};(s.isChanged||"customFields"===n&&s.value)&&("requestedCustomerGroupId"===n?t.requestData.push(a):t.syncData.push(a))})),t},openModal:function(){this.$router.push({name:"sw.bulk.edit.customer.save"})},onSave:function(){var e=this;return o()(i.a.mark((function t(){var n,s,o,a,c,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,n=e.onProcessData(),s=n.requestData,o=n.syncData,a=e.bulkEditApiFactory.getHandler("customer"),c=d(e.selectedIds,50),u=[],s.length&&u.push(a.bulkEditRequestedGroup(e.selectedIds,s)),c.forEach((function(e){o.length&&u.push(a.bulkEdit(e,o))})),t.abrupt("return",Promise.all(u).then((function(){e.processStatus="success"})).catch((function(t){console.error(t),e.processStatus="fail"})).finally((function(){e.isLoading=!1})));case 8:case"end":return t.stop()}}),t)})))()},closeModal:function(){this.$router.push({name:"sw.bulk.edit.customer"})},onChangeLanguage:function(e){Shopware.State.commit("context/setApiLanguageId",e)}}}},LDHZ:function(e,t,n){},LSHN:function(e,t,n){"use strict";var s=n("c1oF"),o=n.n(s);t.a={namespaced:!0,state:function(){var e=(new Date).toISOString();return{isFlowTriggered:!0,orderDocuments:{invoice:{isChanged:!1,value:{documentDate:e,documentComment:null}},storno:{isChanged:!1,value:{documentDate:e,documentComment:null}},delivery_note:{isChanged:!1,value:{custom:{deliveryDate:e,deliveryNoteDate:e},documentDate:e,documentComment:null}},credit_note:{isChanged:!1,value:{documentDate:e,documentComment:null}},download:{isChanged:!1,value:[]}}}},mutations:{setIsFlowTriggered:function(e,t){e.isFlowTriggered=t},setOrderDocumentsIsChanged:function(e,t){var n=t.type,s=t.isChanged;e.orderDocuments[n].isChanged=s},setOrderDocumentsValue:function(e,t){var n=t.type,s=t.value;e.orderDocuments[n].value=s}},getters:{documentTypeConfigs:function(e){var t=[];return Object.entries(e.orderDocuments).forEach((function(e){var n=o()(e,2),s=n[0],a=n[1];"download"!==s&&!0===a.isChanged&&t.push({fileType:"pdf",type:s,config:a.value})})),t}}}},sQMa:function(e,t,n){var s=n("LDHZ");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n("P8hj").default)("4f8ba557",s,!0,{})}}]);