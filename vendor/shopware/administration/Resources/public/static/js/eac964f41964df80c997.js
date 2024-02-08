(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[631],{lt2e:function(e,n,t){"use strict";t.r(n);n.default={template:'\n{% block sw_settings_rule_detail_base %}\n<div class="sw-settings-rule-detail-base">\n    \n    {% block sw_settings_rule_detail_base_content_card %}\n    <sw-card\n        position-identifier="sw-settings-rule-detail-base-content"\n        :large="true"\n        :is-loading="isLoading"\n        :title="$tc(\'sw-settings-rule.detail.titleCard\')"\n    >\n        <template v-if="rule">\n            <sw-container\n                columns="2fr 1fr"\n                gap="0px 32px"\n            >\n                \n                {% block sw_settings_rule_detail_base_content_card_field_name %}\n                <sw-text-field\n                    {% if VUE3 %}\n                    v-model:value="rule.name"\n                    {% else %}\n                    v-model="rule.name"\n                    {% endif %}\n                    :label="$tc(\'sw-settings-rule.detail.labelName\')"\n                    :placeholder="$tc(\'sw-settings-rule.detail.placeholderName\')"\n                    :error="ruleNameError"\n                    :disabled="!acl.can(\'rule.editor\')"\n                    required\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_rule_detail_base_content_card_field_priority %}\n                <sw-number-field\n                    {% if VUE3 %}\n                    v-model:value="rule.priority"\n                    {% else %}\n                    v-model="rule.priority"\n                    {% endif %}\n                    :label="$tc(\'sw-settings-rule.detail.labelPriority\')"\n                    :placeholder="$tc(\'sw-settings-rule.detail.placeholderPriority\')"\n                    :error="rulePriorityError"\n                    :disabled="!acl.can(\'rule.editor\')"\n                    required\n                />\n                {% endblock %}\n            </sw-container>\n\n            \n            {% block sw_settings_rule_detail_base_content_card_field_description %}\n            <sw-textarea-field\n                {% if VUE3 %}\n                v-model:value="rule.description"\n                {% else %}\n                v-model="rule.description"\n                {% endif %}\n                :label="$tc(\'sw-settings-rule.detail.labelDescription\')"\n                :placeholder="$tc(\'sw-settings-rule.detail.placeholderDescription\')"\n                :disabled="!acl.can(\'rule.editor\')"\n            />\n            {% endblock %}\n\n            <sw-container\n                columns="1fr 1fr"\n                gap="0px 32px"\n            >\n                \n                {% block sw_settings_rule_detail_base_content_card_field_type %}\n                <sw-multi-select\n                    v-if="rule"\n                    {% if VUE3 %}\n                    v-model:value="moduleTypes"\n                    {% else %}\n                    v-model="moduleTypes"\n                    {% endif %}\n                    class="sw-settings-rule-detail__type-field"\n                    value-property="id"\n                    label-property="name"\n                    :label="$tc(\'sw-settings-rule.detail.labelType\')"\n                    :disabled="!acl.can(\'rule.editor\')"\n                    :options="availableModuleTypes"\n                >\n                    <template #selection-label-property="{ item }">\n                        {{ $tc(item.name) }}\n                    </template>\n\n                    <template #result-label-property="{ item }">\n                        {{ $tc(item.name) }}\n                    </template>\n                </sw-multi-select>\n                {% endblock %}\n\n                \n                {% block sw_settings_rule_detail_base_content_card_field_tags %}\n                <sw-entity-tag-select\n                    v-if="rule"\n                    v-model="rule.tags"\n                    class="sw-settings-rule-detail__tags-field"\n                    :label="$tc(\'global.sw-tag-field.title\')"\n                    :disabled="!acl.can(\'rule.editor\')"\n                    :placeholder="$tc(\'sw-settings-rule.detail.placeholderTags\')"\n                />\n                {% endblock %}\n            </sw-container>\n        </template>\n        <sw-loader v-else />\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_detail_base_conditions_card %}\n    <sw-card\n        class="sw-settings-rule-detail__condition_container"\n        position-identifier="sw-settings-rule-detail-base-conditions"\n        :large="true"\n        :is-loading="isLoading"\n        :title="$tc(\'sw-settings-rule.detail.ruleCard\')"\n    >\n        <sw-condition-tree\n            :initial-conditions="conditions"\n            :condition-repository="conditionRepository"\n            :condition-data-provider-service="ruleConditionDataProviderService"\n            association-field="ruleId"\n            :association-value="rule.id"\n            :association-entity="rule"\n            :root-condition="null"\n            :disabled="!acl.can(\'rule.editor\')"\n            @conditions-changed="onConditionsChanged"\n            @initial-loading-done="$emit(\'tree-finished-loading\')"\n        />\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_detail_custom_field_sets %}\n    <sw-card\n        v-if="showCustomFields"\n        position-identifier="sw-settings-rule-detail-base-custom-field-sets"\n        :large="true"\n        :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n        :is-loading="isLoading"\n    >\n        <sw-custom-field-set-renderer\n            :entity="rule"\n            :disabled="!acl.can(\'rule.editor\')"\n            :sets="customFieldSets"\n        />\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["ruleConditionDataProviderService","acl","customFieldDataProviderService"],props:{rule:{type:Object,required:!0},conditions:{type:Array,required:!1,default:null},conditionRepository:{type:Object,required:!0},isLoading:{type:Boolean,required:!0},ruleNameError:{type:Object,required:!1,default:null},rulePriorityError:{type:Object,required:!1,default:null}},data:function(){return{currentConditions:null,customFieldSets:null}},computed:{availableModuleTypes:function(){return this.ruleConditionDataProviderService.getModuleTypes((function(e){return e}))},moduleTypes:{get:function(){return this.rule&&this.rule.moduleTypes?this.rule.moduleTypes.types:[]},set:function(e){null!==e&&0!==e.length?this.rule.moduleTypes={types:e}:this.rule.moduleTypes=null}},showCustomFields:function(){return this.rule&&this.customFieldSets&&this.customFieldSets.length>0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadCustomFieldSets()},loadCustomFieldSets:function(){var e=this;this.customFieldDataProviderService.getCustomFieldSets("rule").then((function(n){e.customFieldSets=n}))},onConditionsChanged:function(e){this.$emit("conditions-changed",e)}}}}}]);