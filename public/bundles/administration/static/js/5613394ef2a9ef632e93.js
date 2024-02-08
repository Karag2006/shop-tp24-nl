(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[433],{GqqV:function(e,t,n){var a=n("KjbH");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("P8hj").default)("16724c12",a,!0,{})},KjbH:function(e,t,n){},"p/9o":function(e,t,n){"use strict";n.r(t);var a=n("CsSd"),l=n.n(a);n("GqqV");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var s=Shopware.Mixin,r=Shopware.Data.Criteria,o=Shopware.Component.getComponentHelper().mapPropertyErrors;t.default={template:'\n{% block sw_settings_language_detail %}\n<sw-page class="sw-settings-language-detail">\n\n    \n    {% block sw_settings_language_detail_header %}\n    <template #smart-bar-header>\n        <h2\n            v-if="languageHasName"\n            key="sw-setting-language-header"\n        >\n            {{ language.name }}\n        </h2>\n        <h2\n            v-else\n            key="sw-setting-language-header"\n        >\n            {{ $tc(\'sw-settings-language.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_language_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_language_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-language.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_language_detail_actions_save %}\n        <sw-button-process\n            {% if VUE3 %}\n            v-model:processSuccess="isSaveSuccessful"\n            {% else %}\n            v-model="isSaveSuccessful"\n            {% endif %}\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-language-detail__save-action"\n            :is-loading="isLoading"\n            :disabled="isLoading || !allowSave"\n            variant="primary"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-language.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_language_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <sw-skeleton v-if="isLoading" />\n\n            <template v-else>\n                \n                {% block sw_settings_language_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="language.name"\n                    :is-new-entity="isNewLanguage"\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_language_detail_content_card %}\n                <sw-card\n                    :title="$tc(\'sw-settings-language.detail.titleCard\')"\n                    position-identifier="sw-settings-language-detail-content"\n                >\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                        gap="0px 30px"\n                    >\n\n                        \n                        {% block sw_settings_language_detail_content_field_name %}\n                        <sw-text-field\n                            {% if VUE3 %}\n                            v-model:value="language.name"\n                            {% else %}\n                            v-model="language.name"\n                            {% endif %}\n                            :disabled="!acl.can(\'language.editor\')"\n                            :label="$tc(\'sw-settings-language.detail.labelName\')"\n                            :placeholder="$tc(\'sw-settings-language.detail.placeholderName\')"\n                            :error="languageNameError"\n                            validation="required"\n                            required\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_language_detail_content_field_localeId %}\n                        <sw-entity-single-select\n                            id="locales"\n                            {% if VUE3 %}\n                            v-model:value="language.localeId"\n                            {% else %}\n                            v-model="language.localeId"\n                            {% endif %}\n                            required\n                            show-clearable-button\n                            class="sw-settings-language-detail__select-locale"\n                            :disabled="!acl.can(\'language.editor\')"\n                            :label="$tc(\'sw-settings-language.detail.labelLocale\')"\n                            entity="locale"\n                            :placeholder="$tc(\'sw-settings-language.detail.placeholderPleaseSelect\')"\n                            :error="languageLocaleIdError"\n                        >\n                            <template #selection-label-property="{ item, getKey }">\n                                {{ getKey(item, \'translated.name\') }}, {{ getKey(item, \'translated.territory\') }}\n                            </template>\n\n                            <template #result-label-property="{ item, index, labelProperty, searchTerm, highlightSearchTerm, getKey }">\n                                <sw-highlight-text\n                                    v-if="highlightSearchTerm"\n                                    :text="`${getKey(item, \'translated.name\')}, ${getKey(item, \'translated.territory\')}`"\n                                    :search-term="searchTerm"\n                                />\n                                <template v-else>\n                                    {{ getKey(item, \'translated.name\') }}, {{ getKey(item, \'translated.territory\') }}\n                                </template>\n                            </template>\n                        </sw-entity-single-select>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_language_detail_content_field_iso_code %}\n                        <sw-inherit-wrapper\n                            {% if VUE3 %}\n                            v-model:value="language.translationCodeId"\n                            {% else %}\n                            v-model="language.translationCodeId"\n                            {% endif %}\n                            :inherited-value="parentTranslationCodeId"\n                            :label="$tc(\'sw-settings-language.detail.labelIsoCode\')"\n                            :required="isIsoCodeRequired"\n                            :error="translationCodeError"\n                        >\n                            <template #content="{ currentValue, updateCurrentValue, isInherited, isInheritField, toggleInheritance, restoreInheritance, removeInheritance, error }">\n                                <sw-entity-single-select\n                                    id="iso-codes"\n                                    :value="currentValue"\n                                    class="sw-settings-language-detail__select-iso-code"\n                                    :disabled="isInherited || !acl.can(\'language.editor\')"\n                                    label-property="code"\n                                    show-clearable-button\n                                    :placeholder="$tc(\'sw-settings-language.detail.placeholderPleaseSelect\')"\n                                    :error="error"\n                                    entity="locale"\n                                    @change="updateCurrentValue"\n                                >\n                                    <template #result-item="{ isSelected, setValue, item, index, labelProperty, searchTerm, highlightSearchTerm, getKey }">\n                                        <sw-select-result\n                                            v-tooltip="{\n                                                showDelay: 300,\n                                                message: $tc(\'sw-settings-language.detail.textIsoCodeIsInUse\'),\n                                                disabled: !isLocaleAlreadyUsed(item)\n                                            }"\n                                            :disabled="isLocaleAlreadyUsed(item)"\n                                            :selected="isSelected(item)"\n                                            v-bind="{ item, index }"\n                                            @item-select="setValue"\n                                        >\n                                            <sw-highlight-text\n                                                v-if="highlightSearchTerm"\n                                                :text="getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`)"\n                                                :search-term="searchTerm"\n                                            />\n                                            <template v-else>\n                                                {{ getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`) }}\n                                            </template>\n                                        </sw-select-result>\n                                    </template>\n                                </sw-entity-single-select>\n                            </template>\n                        </sw-inherit-wrapper>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_language_detail_content_field_parentId %}\n                        <sw-entity-single-select\n                            id="inherit"\n                            {% if VUE3 %}\n                            v-model:value="language.parentId"\n                            {% else %}\n                            v-model="language.parentId"\n                            {% endif %}\n                            class="sw-settings-language-detail__select-parent"\n                            :criteria="parentLanguageCriteria"\n                            :disabled="!acl.can(\'language.editor\') || isSystemDefaultLanguageId"\n                            :label="$tc(\'sw-settings-language.detail.labelParent\')"\n                            :placeholder="$tc(\'sw-settings-language.detail.placeholderPleaseSelect\')"\n                            :help-text="inheritanceTooltipText"\n                            entity="language"\n                            show-clearable-button\n                            @change="onInputLanguage"\n                        >\n                            <template #result-item="{ isSelected, setValue, item, index, labelProperty, searchTerm, highlightSearchTerm, getKey }">\n                                <sw-select-result\n                                    v-tooltip="{\n                                        showDelay: 300,\n                                        message: $tc(\'sw-settings-language.detail.textLanguageHasParent\'),\n                                        disabled: !item.parentId\n                                    }"\n                                    :disabled="!!item.parentId"\n                                    :selected="isSelected(item)"\n                                    v-bind="{ item, index }"\n                                    @item-select="setValue"\n                                >\n                                    <sw-highlight-text\n                                        v-if="highlightSearchTerm"\n                                        :text="getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`)"\n                                        :search-term="searchTerm"\n                                    />\n                                    <template v-else>\n                                        {{ getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`) }}\n                                    </template>\n                                </sw-select-result>\n                            </template>\n                        </sw-entity-single-select>\n                        {% endblock %}\n                    </sw-container>\n                    \n                    {% block sw_settings_language_detail_content_alert_change_parent %}\n                    <sw-alert\n                        v-if="showAlertForChangeParentLanguage"\n                        class="sw-settings-language--alert-change-parent"\n                        :title="$tc(\'global.default.warning\')"\n                        variant="warning"\n                    >\n                        {{ $tc(\'sw-settings-language.detail.textAlertChangeParent\') }}\n                    </sw-alert>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_language_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-language-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="language"\n                        :disabled="!acl.can(\'language.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","customFieldDataProviderService","feature"],mixins:[s.getByName("notification"),s.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},props:{languageId:{type:String,required:!1,default:null}},data:function(){return{language:null,usedLocales:[],showAlertForChangeParentLanguage:!1,isLoading:!1,isSaveSuccessful:!1,customFieldSets:null,parentTranslationCodeId:null,translationCodeError:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({identifier:function(){return this.languageHasName?this.language.name:""},languageRepository:function(){return this.repositoryFactory.create("language")},isIsoCodeRequired:function(){return!this.language.parentId},languageHasName:function(){return null!==this.language&&this.language.name},isNewLanguage:function(){return!(!this.language||"function"!=typeof this.language.isNew)&&this.language.isNew()},usedLocaleCriteria:function(){return new r(1,1).addAggregation(r.terms("usedLocales","language.locale.code",null,null,null))},allowSave:function(){return this.isNewLanguage?this.acl.can("language.creator"):this.acl.can("language.editor")},tooltipSave:function(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},parentLanguageCriteria:function(){var e=new r(1,25);return e.addFilter(r.not("and",[r.equals("id",this.language.id)])),e},isSystemDefaultLanguageId:function(){return this.language.id===Shopware.Context.api.systemLanguageId},inheritanceTooltipText:function(){return this.isSystemDefaultLanguageId?this.$tc("sw-settings-language.detail.tooltipInheritanceNotPossible"):this.$tc("sw-settings-language.detail.tooltipLanguageNotChoosable")},showCustomFields:function(){return this.customFieldSets&&this.customFieldSets.length>0}},o("language",["localeId","name"])),watch:{languageId:function(){null===this.languageId&&this.createdComponent()},"language.translationCodeId":function(){this.translationCodeError=null}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.languageId?(this.loadEntityData(),this.loadCustomFieldSets()):(Shopware.State.commit("context/resetLanguageToDefault"),this.language=this.languageRepository.create()),this.languageRepository.search(this.usedLocaleCriteria).then((function(t){var n=t.aggregations;e.usedLocales=n.usedLocales.buckets}))},loadEntityData:function(){var e=this;this.isLoading=!0,this.languageRepository.get(this.languageId).then((function(t){e.isLoading=!1,e.language=t,t.parentId&&e.setParentTranslationCodeId(t.parentId)})).catch((function(){e.isLoading=!1}))},loadCustomFieldSets:function(){var e=this;this.customFieldDataProviderService.getCustomFieldSets("language").then((function(t){e.customFieldSets=t}))},checkTranslationCodeInheritance:function(e){return e===this.parentTranslationCodeId},setParentTranslationCodeId:function(e){var t=this;this.languageRepository.get(e,Shopware.Context.api).then((function(e){t.parentTranslationCodeId=e.translationCodeId}))},onInputLanguage:function(e){this.translationCodeError=null,e&&this.setParentTranslationCodeId(e);var t=this.language.getOrigin();!this.language.isNew()&&t.parentId&&(this.showAlertForChangeParentLanguage=t.parentId!==this.language.parentId)},isLocaleAlreadyUsed:function(e){return!!this.usedLocales.some((function(t){return e.code===t.key}))||!!this.language.locale&&e.code===this.language.locale.code},onSave:function(){var e=this;this.isLoading=!0,this.language.parentId||this.language.translationCodeId||(this.translationCodeError={detail:this.$tc("global.error-codes.c1051bb4-d103-4f74-8988-acbcafc7fdc3")}),this.languageRepository.save(this.language).then((function(){e.isLoading=!1,e.isSaveSuccessful=!0,e.languageId||e.$router.push({name:"sw.settings.language.detail",params:{id:e.language.id}})})).catch((function(){e.isLoading=!1}))},onCancel:function(){this.$router.push({name:"sw.settings.language.index"})}}}}}]);