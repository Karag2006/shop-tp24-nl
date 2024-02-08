(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[22,438],{"1lAq":function(t,i,n){},D25k:function(t,i,n){"use strict";n.r(i);n("Jthn");var e=Shopware.Mixin,r=Shopware.Data.Criteria;i.default={template:'\n{% block sw_settings_listing_option_base %}\n<sw-page class="sw-settings-listing-base">\n    \n    {% block sw_settings_listing_option_base_smart_bar_heading %}\n    <template #smart-bar-header>\n        <h2>{{ smartBarHeading }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_base_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_base_smart_bar_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_settings_listing_option_base_smart_bar_actions_save %}\n        <sw-button\n            variant="primary"\n            :disabled="isSaveButtonDisabled"\n            @click="onSave"\n        >\n            {{ $t(\'global.default.save\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_base_smart_content %}\n    <template #content>\n\n        \n        {% block sw_settings_listing_option_base_smart_content_general_info %}\n        <sw-settings-listing-option-general-info\n            v-if="productSortingEntity"\n            :sorting-option="productSortingEntity"\n            :is-default-sorting="isDefaultSorting"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_base_smart_bar_actions_grid %}\n        <sw-settings-listing-option-criteria-grid\n            v-if="productSortingEntity"\n            :product-sorting-entity="productSortingEntity"\n            @criteria-delete="onDeleteCriteria"\n            @criteria-add="onAddCriteria"\n            @inline-edit-save="onSave"\n            @inline-edit-cancel="onCancelEditCriteria"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_base_smart_bar_actions_grid_delete_modal %}\n        <sw-settings-listing-delete-modal\n            v-if="toBeDeletedCriteria"\n            :title="$tc(\'sw-settings-listing.base.delete.modalTitle\')"\n            :description="$tc(\'sw-settings-listing.base.delete.modalDescription\')"\n            @cancel="toBeDeletedCriteria = null"\n            @delete="onConfirmDeleteCriteria"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","systemConfigApiService"],mixins:[e.getByName("notification")],data:function(){return{productSortingEntity:null,toBeDeletedCriteria:null,customFieldOptions:[],customFields:[],defaultSortingKey:null}},computed:{productSortingRepository:function(){return this.repositoryFactory.create("product_sorting")},customFieldRepository:function(){return this.repositoryFactory.create("custom_field")},smartBarHeading:function(){return this.productSortingEntity&&this.productSortingEntity.label?this.productSortingEntity.label:this.$tc("sw-settings-listing.base.smartBarTitle")},isGeneralCardLoading:function(){return!this.productSortingEntity},customFieldCriteria:function(){return new r(1,25)},productSortingEntityCriteria:function(){return new r(1,25)},isSaveButtonDisabled:function(){return!this.productSortingEntity||this.productSortingEntity.fields.length<=0||this.productSortingEntity.fields.some((function(t){return!t.field||"customField"===t.field}))},isDefaultSorting:function(){return this.defaultSortingKey===this.productSortingEntity.key}},created:function(){this.createdComponent()},methods:{createdComponent:function(){Promise.all([this.fetchProductSortingEntity(),this.fetchCustomFields(),this.fetchDefaultSorting()])},fetchProductSortingEntity:function(){var t=this,i=this.getProductSortingEntityId();this.productSortingRepository.get(i,Shopware.Context.api,this.productSortingEntityCriteria).then((function(i){Array.isArray(i.fields)||(i.fields=[]),t.productSortingEntity=i}))},fetchCustomFields:function(){var t=this;return this.customFieldRepository.search(this.customFieldCriteria).then((function(i){t.customFields=i}))},fetchDefaultSorting:function(){var t=this;this.systemConfigApiService.getValues("core.listing").then((function(i){t.defaultSortingKey=i["core.listing.defaultSorting"]}))},getProductSortingEntityId:function(){return this.$route.params.id},saveProductSorting:function(){return this.productSortingRepository.save(this.productSortingEntity)},onSave:function(){var t=this;return this.transformCustomFieldCriterias(),this.productSortingEntity.fields=this.productSortingEntity.fields.filter((function(t){return"customField"!==t.field})),this.saveProductSorting().then((function(){var i=t.productSortingEntity.label;t.createNotificationSuccess({message:t.$t("sw-settings-listing.base.notification.saveSuccess",{sortingOptionName:i})})})).catch((function(){var i=t.productSortingEntity.label;t.createNotificationError({message:t.$t("sw-settings-listing.base.notification.saveError",{sortingOptionName:i})})}))},getCriteriaTemplate:function(t){return{field:t,order:"asc",priority:1,naturalSorting:0}},onDeleteCriteria:function(t){this.toBeDeletedCriteria=t},onConfirmDeleteCriteria:function(){var t=this;this.productSortingEntity.fields=this.productSortingEntity.fields.filter((function(i){return i.field!==t.toBeDeletedCriteria.field})),this.saveProductSorting(),this.toBeDeletedCriteria=null},onAddCriteria:function(t){if(t){var i=this.getCriteriaTemplate(t);this.productSortingEntity.fields||(this.productSortingEntity.fields=[]),this.productSortingEntity.fields.push(i)}},onCancelEditCriteria:function(t){this.getProductSortingEntityId()?this.fetchProductSortingEntity():this.productSortingEntity.fields=this.productSortingEntity.fields.filter((function(i){return i.field!==t.field}))},isCriteriaACustomField:function(t){return this.customFields.some((function(i){return i.name===t}))},transformCustomFieldCriterias:function(){var t=this;this.productSortingEntity.fields=this.productSortingEntity.fields.map((function(i){return t.isCriteriaACustomField(i.field)?(i.field="customFields.".concat(i.field),i):i}))},onChangeLanguage:function(){this.fetchProductSortingEntity()}}}},Jthn:function(t,i,n){var e=n("1lAq");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,n("P8hj").default)("2f6b12f8",e,!0,{})},NP5d:function(t,i,n){"use strict";n.r(i);var e=n("KRBy");n("D25k"),i.default={template:'\n{% block sw_settings_listing_option_edit_smart_bar_actions_grid %}\n<sw-settings-listing-option-criteria-grid\n    v-if="productSortingEntity"\n    :product-sorting-entity="productSortingEntity"\n    @criteria-delete="onDeleteCriteria"\n    @criteria-add="onAddCriteria"\n/>\n{% endblock %}\n\n\n{% block sw_settings_listing_option_base_language_switch %}\n\n<template #language-switch>\n    <sw-language-switch\n        :disabled="isNewProductSorting"\n        @on-change="onChangeLanguage"\n    />\n</template>\n{% endblock %}\n',computed:{smartBarHeading:function(){return this.productSortingEntity&&this.productSortingEntity.label?this.productSortingEntity.label:this.$tc("sw-settings-listing.create.smartBarTitle")},isNewProductSorting:function(){return!this.productSortingEntity||this.productSortingEntity._isNew}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var t=this;this.fetchCustomFields().then((function(){t.productSortingEntity=t.createProductSortingEntity(),Shopware.State.commit("context/resetLanguageToDefault")}))},createProductSortingEntity:function(){var t=this.productSortingRepository.create();return t.fields=[],t.priority=1,t.active=!1,t},onSave:function(){var t=this;return this.transformCustomFieldCriterias(),this.productSortingEntity.fields=this.productSortingEntity.fields.filter((function(t){return"customField"!==t.field})),this.productSortingEntity.key=Object(e.kebabCase)(this.productSortingEntity.label),this.productSortingRepository.save(this.productSortingEntity).then((function(i){var n=JSON.parse(i.config.data);t.$router.push({name:"sw.settings.listing.edit",params:{id:n.id}})})).catch((function(){var i=t.productSortingEntity.label;t.createNotificationError({message:t.$t("sw-settings-listing.base.notification.saveError",{sortingOptionName:i})})}))},onAddCriteria:function(t){if(t){var i=this.getCriteriaTemplate(t);this.productSortingEntity.fields||(this.productSortingEntity.fields=[]),this.productSortingEntity.fields.push(i)}},onConfirmDeleteCriteria:function(){var t=this;this.productSortingEntity.fields=this.productSortingEntity.fields.filter((function(i){return i.field!==t.toBeDeletedCriteria.field})),this.toBeDeletedCriteria=null}}}}}]);