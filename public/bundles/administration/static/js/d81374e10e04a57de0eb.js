(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[349],{CHaQ:function(e,t,n){"use strict";n.r(t);var i=n("CsSd"),a=n.n(i);n("EEvL");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Shopware.Data.Criteria;t.default={template:'\n{% block sw_product_stream_value %}\n<div\n    class="sw-product-stream-value"\n    :class="componentClasses"\n>\n\n    <template v-if="!fieldDefinition">\n        \n        {% block sw_product_stream_value_no_definition_placeholder %}\n        <sw-container class="sw-product-stream-value__placeholder" />\n        {% endblock %}\n    </template>\n\n    <template v-else-if="fieldType === \'boolean\'">\n        \n        {% block sw_product_stream_value_boolean_value %}\n        <sw-single-select\n            class="sw-product-stream-value__select"\n            size="medium"\n            :options="booleanOptions"\n            :value="condition.value"\n            :disabled="disabled"\n            show-clearable-button\n            {% if VUE3 %}\n            @update:value="setBooleanValue"\n            {% else %}\n            @change="setBooleanValue"\n            {% endif %}\n        />\n        {% endblock %}\n    </template>\n\n    <template v-else-if="fieldType === \'empty\'">\n        \n        {% block sw_product_stream_value_empty_value %}\n        <sw-single-select\n            {% if VUE3 %}\n            v-model:value="emptyValue"\n            {% else %}\n            v-model="emptyValue"\n            {% endif %}\n            class="sw-product-stream-value__select"\n            size="medium"\n            :options="reversedEmptyOptions"\n            :disabled="disabled"\n            show-clearable-button\n        />\n        {% endblock %}\n    </template>\n\n    <template v-else>\n        \n        {% block sw_product_stream_value_operator_select %}\n        <sw-arrow-field\n            class="sw-product-stream-value__operator-select"\n            :disabled="!acl.can(\'product_stream.editor\')"\n        >\n            <sw-single-select\n                {% if VUE3 %}\n                v-model:value="filterType"\n                {% else %}\n                v-model="filterType"\n                {% endif %}\n                size="medium"\n                :options="operators"\n                :placeholder="$tc(\'sw-product-stream.filter.placeholderOperatorSelect\')"\n                :disabled="disabled"\n                show-clearable-button\n            />\n        </sw-arrow-field>\n        {% endblock %}\n\n        <template v-if="fieldType === \'product_state_list\'">\n            <sw-single-select\n                {% if VUE3 %}\n                v-model:value="actualCondition.value"\n                {% else %}\n                v-model="actualCondition.value"\n                {% endif %}\n                :options="productStateOptions"\n                :disabled="disabled"\n            />\n        </template>\n\n        <template v-else-if="fieldType === \'uuid\'">\n            \n            {% block sw_product_stream_value_entity_single_value %}\n            <sw-entity-single-select\n                v-if="definition.entity === \'product\' && actualCondition.type === \'equals\'"\n                v-model="actualCondition.value"\n                size="medium"\n                show-clearable-button\n                :entity="definition.entity"\n                :criteria="productCriteria"\n                :context="context"\n                :disabled="disabled"\n                advanced-selection-component="sw-advanced-selection-product"\n            >\n                <template #selection-label-property="{ item }">\n                    <slot\n                        name="selection-label-property"\n                        v-bind="{ item }"\n                    >\n                        \n                        {% block sw_product_stream_value_results_variant_info %}\n                        <sw-product-variant-info\n                            :variations="item.variation"\n                        >\n                            {{ item.translated.name || item.name }}\n                        </sw-product-variant-info>\n                        {% endblock %}\n                    </slot>\n                </template>\n\n                <template #result-item="{ item, index }">\n                    <slot\n                        name="result-item"\n                        v-bind="{ item, index }"\n                    >\n                        <sw-select-result\n                            v-bind="{ item, index }"\n                        >\n                            \n                            {% block sw_product_stream_value_results_list_result_label %}\n                            <span class="sw-select-result__result-item-text">\n                                <sw-product-variant-info\n                                    :variations="item.variation"\n                                >\n                                    {{ item.translated.name || item.name }}\n                                </sw-product-variant-info>\n                            </span>\n                            {% endblock %}\n                        </sw-select-result>\n                    </slot>\n                </template>\n            </sw-entity-single-select>\n\n            <sw-entity-single-select\n                v-else-if="definition.entity === \'property_group_option\' && actualCondition.type === \'equals\'"\n                v-model="actualCondition.value"\n                size="medium"\n                :entity="definition.entity"\n                :criteria="propertyCriteria"\n                :context="context"\n                :disabled="disabled"\n                show-clearable-button\n                @select-collapsed="onSelectCollapsed"\n                @search-term-change="setSearchTerm"\n            >\n\n                <template #selection-label-property="{ item }">\n                    <slot\n                        name="selection-label-property"\n                        v-bind="{ item }"\n                    >\n                        {{ item.group.translated.name || item.group.name }}: {{ item.translated.name || item.name }}\n                    </slot>\n                </template>\n\n                <template #result-description-property="{ item }">\n                    <slot\n                        name="result-description-property"\n                        v-bind="{ item }"\n                    >\n                        {{ item.group.translated.name || item.group.name }}\n                    </slot>\n                </template>\n            </sw-entity-single-select>\n\n            \n            {% block sw_product_stream_value_entity_single_value_visibilities %}\n            <sw-entity-single-select\n                v-else-if="definition.entity === \'product_visibility\' && actualCondition.type === \'equals\'"\n                v-model="actualCondition.value"\n                size="medium"\n                :entity="definition.entity"\n                :criteria="visibilitiesCriteria"\n                :label-callback="visibilitiesLabelCallback"\n                :context="context"\n                :disabled="disabled"\n                show-clearable-button\n                @search-term-change="setSearchTerm"\n            />\n            {% endblock %}\n\n            <sw-entity-single-select\n                v-else-if="actualCondition.type === \'equals\'"\n                {% if VUE3 %}\n                v-model:value="actualCondition.value"\n                {% else %}\n                v-model="actualCondition.value"\n                {% endif %}\n                size="medium"\n                :entity="definition.entity"\n                :context="context"\n                :disabled="disabled"\n                description-position="bottom"\n                show-clearable-button\n            >\n                <template #result-description-property="{ item }">\n                    \n                    {% block sw_product_stream_value_equals_result_label %}\n                    <slot\n                        v-if="definition.entity === \'category\'"\n                        name="result-description-property"\n                        v-bind="{ item }"\n                    >\n                        \n                        {% block sw_product_stream_value_equals_result_label_default %}\n                        {{ getCategoryBreadcrumb(item) }}\n                        {% endblock %}\n                    </slot>\n                    {% endblock %}\n                </template>\n            </sw-entity-single-select>\n            {% endblock %}\n\n            \n            {% block sw_product_stream_value_entity_multi_value %}\n            <sw-entity-multi-id-select\n                v-else-if="definition.entity === \'property_group_option\' && actualCondition.type === \'equalsAny\'"\n                v-model="multiValue"\n                size="medium"\n                :repository="repository"\n                :criteria="propertyCriteria"\n                :context="context"\n                :disabled="disabled"\n                @select-collapsed="onSelectCollapsed"\n                @search-term-change="setSearchTerm"\n            >\n\n                <template #selection-label-property="{ item }">\n                    <slot\n                        name="selection-label-property"\n                        v-bind="{ item }"\n                    >\n                        {{ item.group.translated.name || item.group.name }}: {{ item.translated.name || item.name }}\n                    </slot>\n                </template>\n\n                <template #result-label-property="{ item, searchTerm, highlightSearchTerm }">\n                    <slot\n                        name="result-label-property"\n                        v-bind="{ item, searchTerm, highlightSearchTerm }"\n                    >\n                        {{ item.translated.name || item.name }}\n                    </slot>\n                </template>\n\n                <template #result-description-property="{ item, searchTerm, highlightSearchTerm }">\n                    <slot\n                        name="result-description-property"\n                        v-bind="{ item, searchTerm, highlightSearchTerm }"\n                    >\n                        {{ item.group.translated.name || item.group.name }}\n                    </slot>\n                </template>\n            </sw-entity-multi-id-select>\n\n            <sw-entity-multi-id-select\n                v-else-if="definition.entity === \'product\' && actualCondition.type === \'equalsAny\'"\n                v-model="multiValue"\n                size="medium"\n                :repository="repository"\n                :criteria="productCriteria"\n                :context="context"\n                :disabled="disabled"\n                advanced-selection-component="sw-advanced-selection-product"\n            >\n                <template #selection-label-property="{ item }">\n                    <slot\n                        name="selection-label-property"\n                        v-bind="{ item }"\n                    >\n                        <sw-product-variant-info\n                            class="product-view"\n                            :variations="item.variation"\n                        >\n                            {{ item.translated.name || item.name }}\n                        </sw-product-variant-info>\n                    </slot>\n                </template>\n\n                <template #result-label-property="{ item, index }">\n                    <slot\n                        name="result-label-property"\n                        v-bind="{ item, index }"\n                    >\n                        \n                        {% block sw_product_stream_value_results_list_result_label %}\n                        <span class="sw-select-result__result-item-text">\n                            <sw-product-variant-info :variations="item.variation">\n                                {{ item.translated.name || item.name }}\n                            </sw-product-variant-info>\n                        </span>\n                        {% endblock %}\n                    </slot>\n                </template>\n            </sw-entity-multi-id-select>\n\n            \n            {% block sw_product_stream_value_entity_multi_value_visibilities %}\n            <sw-entity-multi-id-select\n                v-else-if="definition.entity === \'product_visibility\' && (actualCondition.type === \'equalsAny\' || actualCondition.type === \'equalsAll\')"\n                v-model="multiValue"\n                size="medium"\n                :repository="repository"\n                :criteria="visibilitiesCriteria"\n                :context="context"\n                :disabled="disabled"\n                @search-term-change="setSearchTerm"\n            >\n                <template #selection-label-property="{ item }">\n                    <slot\n                        name="selection-label-property"\n                        v-bind="{ item }"\n                    >\n                        {{ item.salesChannel.translated.name }}: {{ item.product.translated.name }}\n                    </slot>\n                </template>\n\n                <template #result-label-property="{ item, searchTerm, highlightSearchTerm }">\n                    <slot\n                        name="result-label-property"\n                        v-bind="{ item, searchTerm, highlightSearchTerm }"\n                    >\n                        {{ item.salesChannel.translated.name }}: {{ item.product.translated.name }}\n                    </slot>\n                </template>\n            </sw-entity-multi-id-select>\n            {% endblock %}\n\n            <sw-entity-multi-id-select\n                v-else-if="isMultiSelectValue"\n                {% if VUE3 %}\n                v-model:ids="multiValue"\n                {% else %}\n                v-model="multiValue"\n                {% endif %}\n                size="medium"\n                description-position="bottom"\n                :repository="repository"\n                :context="context"\n                :disabled="disabled"\n                :advanced-selection-component="definition.entity === \'product\' ? \'sw-advanced-selection-product\' : \'\'"\n            >\n                <template #result-description-property="{ item }">\n                    \n                    {% block sw_product_stream_value_multi_select_result_label %}\n                    <slot\n                        v-if="definition.entity === \'category\'"\n                        name="result-description-property"\n                        v-bind="{ item }"\n                    >\n                        \n                        {% block sw_product_stream_value_multi_select_result_label_default %}\n                        {{ getCategoryBreadcrumb(item) }}\n                        {% endblock %}\n                    </slot>\n                    {% endblock %}\n                </template>\n            </sw-entity-multi-id-select>\n            {% endblock %}\n\n            \n            {% block sw_product_stream_value_entity_no_operator_selected_placeholder %}\n            <sw-container\n                v-else\n                class="sw-product-stream-value__placeholder"\n            />\n            {% endblock %}\n        </template>\n\n        <template v-else-if="getConditionType(condition) === \'range\'">\n            \n            {% block sw_product_stream_value_range_value %}\n            <template v-if="filterType === \'range\'">\n                \n                {% block sw_product_stream_value_range_from_value %}\n                <sw-arrow-field :disabled="disabled">\n                    <component\n                        :is="inputComponent"\n                        v-model="gte"\n                        size="medium"\n                        :disabled="disabled"\n                    />\n                </sw-arrow-field>\n                {% endblock %}\n\n                \n                {% block sw_product_stream_value_range_to_value %}\n                <component\n                    :is="inputComponent"\n                    v-model="lte"\n                    size="medium"\n                    :disabled="disabled"\n                />\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_product_stream_value_range_one_limit %}\n                <component\n                    :is="inputComponent"\n                    v-model="currentParameter"\n                    size="medium"\n                    :disabled="disabled"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </template>\n\n        \n        <template v-else-if="actualCondition.type === \'equalsAny\'">\n            \n            {% block sw_product_stream_value_multi_value %}\n            <sw-tagged-field\n                {% if VUE3 %}\n                v-model:value="multiValue"\n                {% else %}\n                v-model="multiValue"\n                {% endif %}\n                size="medium"\n            />\n            {% endblock %}\n        </template>\n\n        <template v-else-if="filterType === \'since\' || filterType === \'until\'">\n            \n            {% block sw_product_stream_value_relative_time_operator %}\n            <sw-arrow-field :disabled="disabled">\n                <sw-single-select\n                    {% if VUE3 %}\n                    v-model:value="operator"\n                    {% else %}\n                    v-model="operator"\n                    {% endif %}\n                    size="medium"\n                    :options="relativeTimeOperators"\n                    :placeholder="$tc(\'sw-product-stream.filter.placeholderOperatorSelect\')"\n                    :disabled="disabled"\n                />\n            </sw-arrow-field>\n            {% endblock %}\n\n            \n            {% block sw_product_stream_value_relative_time_value %}\n            <sw-number-field\n                {% if VUE3 %}\n                v-model:value="stringValue"\n                {% else %}\n                v-model="stringValue"\n                {% endif %}\n                class="sw-product-stream-value__time-input"\n                size="medium"\n                number-type="int"\n                :min="0"\n                :step="1"\n                :disabled="disabled"\n            >\n                <template #suffix>\n                    <span>{{ $tc(\'sw-product-stream.filter.timeUnits.days\') }}</span>\n                </template>\n            </sw-number-field>\n            {% endblock %}\n        </template>\n\n        <template v-else>\n            \n            {% block sw_product_stream_value_single_value %}\n            <component\n                :is="inputComponent"\n                v-model="stringValue"\n                size="medium"\n                :disabled="disabled"\n            />\n            {% endblock %}\n        </template>\n    </template>\n</div>\n{% endblock %}\n',inject:["repositoryFactory","conditionDataProviderService","productCustomFields","acl","feature"],props:{condition:{type:Object,required:!0},fieldName:{type:String,required:!1,default:null},definition:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,childComponents:null,searchTerm:""}},computed:{repository:function(){return this.repositoryFactory.create(this.definition.entity)},componentClasses:function(){return[this.growthClass,this.disabledClass]},growthClass:function(){return null===this.childComponents?"sw-product-stream-value--grow-0":"sw-product-stream-value--grow-".concat(this.childComponents.length)},disabledClass:function(){return this.disabled?"is--disabled":null},actualCondition:function(){return"not"===this.condition.type?this.condition.queries[0]:this.condition},isMultiSelectValue:function(){return"equalsAny"===this.actualCondition.type||"equalsAll"===this.actualCondition.type||"notEqualsAll"===this.actualCondition.type},filterType:{get:function(){var e=this.getConditionType(this.condition);return"range"===e?this.getRangeType(this.actualCondition):e},set:function(e){this.conditionDataProviderService.isRangeType(e)?this.onChangeType("range",this.getParameters(e)):this.conditionDataProviderService.isRelativeTimeType(e)?this.onChangeType(e,this.getParameters(e)):this.onChangeType(e,null)}},fieldDefinition:function(){var e=this.definition.getField(this.fieldName);return!e&&"product"===this.definition.entity&&this.fieldName?this.conditionDataProviderService.allowedJsonAccessors.hasOwnProperty(this.fieldName)?this.conditionDataProviderService.allowedJsonAccessors[this.fieldName]:this.productCustomFields[this.fieldName.replace("customFields.","")]||null:e},operators:function(){var e=this;return null===this.fieldType?[]:this.conditionDataProviderService.getOperatorSet(this.fieldType).map((function(t){return{label:e.$tc(t.label),value:t.identifier}}))},relativeTimeOperators:function(){var e=this;return this.conditionDataProviderService.getOperator(this.filterType).operators.map((function(t){var n=e.conditionDataProviderService.getOperator(t);return{label:e.$tc(n.label),value:n.identifier}}))},productStateOptions:function(){return[{label:this.$tc("sw-product-stream.filter.values.productStates.physical"),value:"is-physical"},{label:this.$tc("sw-product-stream.filter.values.productStates.digital"),value:"is-download"}]},fieldType:function(){var e=this;if(!this.fieldDefinition)return null;if("json_list"===this.fieldDefinition.type&&"states"===this.fieldName)return"product_state_list";if(this.definition.isJsonField(this.fieldDefinition))return"object";if("uuid"===this.fieldDefinition.type&&Object.keys(this.definition.filterProperties((function(t){return t.localField===e.fieldName&&"many_to_one"===t.relation}))).length>0)return"empty";return this.fieldDefinition.type},booleanOptions:function(){return[{label:this.$tc("global.default.yes"),value:"1"},{label:this.$tc("global.default.no"),value:"0"}]},reversedEmptyOptions:function(){return[{label:this.$tc("global.default.yes"),value:!1},{label:this.$tc("global.default.no"),value:!0}]},multiValue:{get:function(){return"string"!=typeof this.actualCondition.value||""===this.actualCondition.value?[]:this.actualCondition.value.split("|")},set:function(e){this.actualCondition.value=e.join("|")}},inputComponent:function(){switch(this.fieldType){case"uuid":return"sw-entity-multi-id-select";case"float":case"int":return"sw-number-field";case"date":return"sw-datepicker";case"string":case"object":default:return"sw-text-field"}},currentParameter:{get:function(){return this.actualCondition.parameters?this.actualCondition.parameters[this.getParameterName(this.filterType)]:null},set:function(e){var t=this.getParameterName(this.filterType);this.actualCondition.parameters=a()({},t,e)}},gte:{get:function(){return this.actualCondition.parameters?this.actualCondition.parameters.gte:null},set:function(e){this.actualCondition.parameters.gte=e}},lte:{get:function(){return this.actualCondition.parameters?this.actualCondition.parameters.lte:null},set:function(e){this.actualCondition.parameters.lte=e}},operator:{get:function(){return this.actualCondition.parameters?this.getParameterType(this.actualCondition.parameters.operator):null},set:function(e){this.actualCondition.parameters.operator=this.getParameterName(e)}},emptyValue:{get:function(){return null!==this.condition.type?"equals"===this.filterType:null},set:function(e){null!=e?this.$emit("empty-change",{type:e?"equals":"notEquals"}):this.$emit("empty-change",{type:null})}},stringValue:{get:function(){return["int","float"].includes(this.fieldType)?Number.parseFloat(this.actualCondition.value):"string"!=typeof this.actualCondition.value?null:this.conditionDataProviderService.isRelativeTimeType(this.filterType)&&this.actualCondition.value?this.actualCondition.value.match(/\d+/)[0]:this.actualCondition.value},set:function(e){this.conditionDataProviderService.isRelativeTimeType(this.filterType)?this.actualCondition.value="P".concat(e,"D"):this.actualCondition.value=e.toString()}},context:function(){return r(r({},Shopware.Context.api),{},{inheritance:!0})},productCriteria:function(){var e=new s(1,25);return e.addAssociation("options.group"),e},propertyCriteria:function(){var e=new s(1,25);return"property_group_option"===this.definition.entity&&(e.addAssociation("group"),"string"==typeof this.searchTerm&&this.searchTerm.length>0&&e.addQuery(s.contains("group.name",this.searchTerm),500)),e},visibilitiesCriteria:function(){var e=new s(1,25);return e.addAssociation("salesChannel"),e.addAssociation("product"),"string"==typeof this.searchTerm&&this.searchTerm.length>0&&(e.addQuery(s.contains("salesChannel.name",this.searchTerm),400),e.addQuery(s.contains("product.name",this.searchTerm),500)),e},resultCriteria:function(){var e=new s(1,25);return e.addAssociation("options.group"),e},visibilitiesLabelCallback:function(){return function(e){return e?e.salesChannel&&e.product?"".concat(e.salesChannel.translated.name,": ").concat(e.product.translated.name):e.id:""}}},mounted:function(){this.childComponents=this.$children},methods:{onChangeType:function(e,t){this.$emit("type-change",{type:e,parameters:t})},getConditionType:function(e){if("not"===this.condition.type){var t=e.queries[0].type;return this.conditionDataProviderService.negateOperator(t).identifier}return this.condition.type},getRangeType:function(e){if(null===e.parameters)return null;var t=e.parameters.hasOwnProperty("lte"),n=e.parameters.hasOwnProperty("gte");return n&&t?this.conditionDataProviderService.getOperator("range").identifier:n?this.conditionDataProviderService.getOperator("greaterThanEquals").identifier:t?this.conditionDataProviderService.getOperator("lessThanEquals").identifier:this.condition.parameters.hasOwnProperty("lt")?this.conditionDataProviderService.getOperator("lessThan").identifier:this.condition.parameters.hasOwnProperty("gt")?this.conditionDataProviderService.getOperator("greaterThan").identifier:null},getParameters:function(e){if("range"===e)return{lte:null,gte:null};if("since"===e||"until"===e)return{operator:null};var t=this.getParameterName(e);return t?a()({},t,null):null},getParameterName:function(e){switch(e){case"greaterThanEquals":return"gte";case"lessThanEquals":return"lte";case"lessThan":return"lt";case"greaterThan":return"gt";case"equals":return"eq";case"notEquals":return"neq";default:return null}},getParameterType:function(e){switch(e){case"gte":return"greaterThanEquals";case"lte":return"lessThanEquals";case"lt":return"lessThan";case"gt":return"greaterThan";case"eq":return"equals";case"neq":return"notEquals";default:return null}},setBooleanValue:function(e){this.$emit("boolean-change",{type:+e?"equals":"notEquals",value:e})},setSearchTerm:function(e){this.searchTerm=e},onSelectCollapsed:function(){this.searchTerm=""},getCategoryBreadcrumb:function(e){return e.breadcrumb&&0!==Object.keys(e.breadcrumb).length?Object.values(e.breadcrumb).join(" / "):e.name}}}},EEvL:function(e,t,n){var i=n("lNZZ");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("P8hj").default)("133c00f0",i,!0,{})},lNZZ:function(e,t,n){}}]);