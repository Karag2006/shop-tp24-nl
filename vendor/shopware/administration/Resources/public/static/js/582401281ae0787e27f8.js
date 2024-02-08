(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[381],{"0+FH":function(e,t,n){},GvJK:function(e,t,n){var i=n("0+FH");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("P8hj").default)("4abf2711",i,!0,{})},"XPu+":function(e,t,n){"use strict";n.r(t);var i=n("7yzw"),r=n.n(i),c=n("6lmj"),s=n.n(c),a=n("CsSd"),l=n.n(a),d=n("92Mt"),o=n.n(d);n("GvJK");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=Shopware.Mixin,m=Shopware.Data.Criteria,h=Shopware.Component.getComponentHelper(),f=h.mapState,w=h.mapGetters;t.default={template:'\n{% block sw_product_detail_prices %}\n<div v-if="isLoading">\n    <sw-skeleton />\n    <sw-skeleton />\n</div>\n\n<sw-container\n    v-else\n    rows="auto"\n    columns="100%"\n    class="sw-product-detail-context-prices"\n>\n\n    \n    {% block sw_product_detail_prices_price_card %}\n    <sw-container\n        v-if="priceRuleGroupsExists"\n        columns="100%"\n    >\n        <sw-card\n            v-for="(priceGroup, key, index) in priceRuleGroups"\n            :key="priceGroup.ruleId"\n            class="context-price"\n            position-identifier="sw-product-detail-context-prices-context-price"\n            :class="getPriceRuleGroupClass(index)"\n            :title="priceGroup.rule ? priceGroup.rule.name : $tc(\'sw-product.prices.cardTitlePriceRule\')"\n            :large="true"\n        >\n\n            \n            {% block sw_product_detail_prices_price_card_toolbar %}\n            <div class="sw-product-detail-context-prices__toolbar">\n                <sw-container\n                    columns="1fr minmax(50px, max-content) minmax(50px, max-content)"\n                    gap="0 10px"\n                >\n\n                    \n                    {% block sw_product_detail_prices_price_card_toolbar_rule_selection %}\n                    <sw-select-rule-create\n                        v-if="rules.entity"\n                        id="rule"\n                        :rule-id="priceGroup.ruleId"\n                        :placeholder="$tc(\'sw-product.advancedPrices.selectRule\')"\n                        :disabled="!acl.can(\'product.editor\')"\n                        class="sw-product-detail-context-prices__toolbar-selection"\n                        size="small"\n                        rule-aware-group-key="productPrices"\n                        :restricted-rule-ids="Object.keys(priceRuleGroups)"\n                        :restricted-rule-ids-tooltip-label="$tc(\'sw-product.advancedPrices.ruleAlreadyUsed\')"\n                        @save-rule="onRuleChange($event, priceGroup.ruleId)"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_product_detail_prices_price_card_toolbar_rule_delete %}\n                    <sw-button\n                        v-tooltip="{\n                            message: $tc(\'sw-privileges.tooltip.warning\'),\n                            disabled: acl.can(\'product.editor\'),\n                            showOnDisabledElements: true\n                        }"\n                        size="small"\n                        :disabled="!acl.can(\'product.editor\')"\n                        @click="onPriceGroupDelete(priceGroup.ruleId)"\n                    >\n                        {{ $tc(\'sw-product.prices.buttonPriceRuleDelete\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                    \n                    {% block sw_product_detail_prices_price_card_toolbar_add_price_rule %}\n                    <sw-button\n                        v-if="canAddPriceRule"\n                        v-tooltip="{\n                            message: $tc(\'sw-privileges.tooltip.warning\'),\n                            disabled: acl.can(\'product.editor\'),\n                            showOnDisabledElements: true\n                        }"\n                        class="sw-product-detail-context-prices__toolbar-duplicate"\n                        size="small"\n                        :disabled="priceGroup.ruleId === null || !acl.can(\'product.editor\')"\n                        @click="onPriceGroupDuplicate(priceGroup)"\n                    >\n                        {{ $tc(\'sw-product.prices.buttonPriceRuleDuplicate\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                </sw-container>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_prices_price_card_price_group_grid %}\n            <sw-data-grid\n                v-if="priceGroup.ruleId"\n                :data-source="priceGroup.prices"\n                :columns="pricesColumns"\n                show-settings\n                :show-selection="false"\n                :compact-mode="true"\n            >\n                \n                {% block sw_product_detail_prices_price_card_price_group_grid_settings %}\n                <template #additionalSettings>\n                    \n                    {% block sw_product_detail_prices_price_card_price_group_grid_settings_list_prices %}\n                    <sw-switch-field\n                        size="medium"\n                        :value="showListPrices[priceGroup.ruleId] !== false"\n                        no-margin-top\n                        :label="$tc(\'sw-product.prices.settingShowListPrices\')"\n                        {% if VUE3 %}\n                        @update:value="onChangeShowListPrices($event, priceGroup.ruleId)"\n                        {% else %}\n                        @change="onChangeShowListPrices($event, priceGroup.ruleId)"\n                        {% endif %}\n                    />\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_prices_price_card_price_group_grid_type %}\n                <template\n                    #column-type="{ item, itemIndex, compact }"\n                >\n                    <div class="sw-product-detail-context-prices__type-label">\n                        \n                        <label>{{ $tc(\'sw-product.advancedPrices.advancedListPricePriceLabel\') }}</label>\n                        \n                        <label v-if="showListPrices[priceGroup.ruleId] !== false">\n                            {{ $tc(\'sw-product.advancedPrices.advancedListPriceLabel\') }}\n                        </label>\n                        \n                        <label v-if="showListPrices[priceGroup.ruleId] !== false">\n                            {{ $tc(\'sw-product.advancedPrices.labelRegulationPrice\') }}\n                        </label>\n                    </div>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_prices_price_card_price_group_grid_quantity_start %}\n                <template\n                    #column-quantityStart="{ item, itemIndex, compact }"\n                >\n                    \n                    {% block sw_product_detail_prices_price_card_price_group_grid_quantity_start_field %}\n                    <sw-number-field\n                        {% if VUE3 %}\n                        v-model:value="item.quantityStart"\n                        {% else %}\n                        v-model="item.quantityStart"\n                        {% endif %}\n                        v-tooltip="getStartQuantityTooltip(itemIndex, item.quantityStart)"\n                        :name="`${item.ruleId}-${item.quantityStart}-quantityStart`"\n                        validation="required"\n                        :min="priceGroup.prices[itemIndex - 1] ? priceGroup.prices[itemIndex - 1].quantityEnd + 1 : 1"\n                        :max="item.quantityEnd ? item.quantityEnd : null"\n                        :size="compact ? \'small\' : \'default\'"\n                        :disabled="(itemIndex === 0 && item.quantityStart === 1) || !acl.can(\'product.editor\')"\n                    />\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_prices_price_card_price_group_grid_quantity_end %}\n                <template\n                    #column-quantityEnd="{ item, itemIndex, compact }"\n                >\n                    \n                    {% block sw_product_detail_prices_price_card_price_group_grid_quantity_end_field %}\n                    <sw-number-field\n                        {% if VUE3 %}\n                        v-model:value="item.quantityEnd"\n                        {% else %}\n                        v-model="item.quantityEnd"\n                        {% endif %}\n                        :validation="item.quantityEnd === null || item.quantityEnd > item.quantityStart"\n                        placeholder="∞"\n                        :name="`${item.ruleId}-${item.quantityStart}-quantityEnd`"\n                        :min="item.quantityStart"\n                        :max="priceGroup.prices[itemIndex + 1] ? priceGroup.prices[itemIndex + 1].quantityStart - 1 : null"\n                        :size="compact ? \'small\' : \'default\'"\n                        :disabled="!acl.can(\'product.editor\')"\n                        @change="onQuantityEndChange(item, priceGroup)"\n                    />\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_prices_price_card_price_group_grid_currencies_list %}\n                <template\n                    v-for="currency in currencies"\n                    #[`column-price-${currency.isoCode}`]="{ item, column, compact }"\n                >\n                    <template v-if="showListPrices[priceGroup.ruleId] === false">\n                        <div\n                            :key="currency"\n                            class="product-detail-context-prices__price-field-wrapper"\n                        >\n                            \n                            {% block sw_product_detail_prices_price_card_price_group_grid_currencies_list_inherit_field %}\n                            <sw-inheritance-switch\n                                v-if="!currency.isSystemDefault"\n                                class="sw-product-detail-context-prices__inherited-icon"\n                                :is-inherited="isPriceFieldInherited(item, currency)"\n                                :disabled="!acl.can(\'product.editor\')"\n                                @inheritance-restore="onInheritanceRestore(item, currency)"\n                                @inheritance-remove="onInheritanceRemove(item, currency)"\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_product_detail_prices_price_card_price_group_grid_currencies_list_price_field %}\n                            <sw-price-field\n                                :price="item.price"\n                                :default-price="findDefaultPriceOfRule(item)"\n                                :tax-rate="productTaxRate"\n                                :label="false"\n                                :compact="compact"\n                                :name="`${item.ruleId}-${currency.isoCode}-${item.quantityStart}`"\n                                :currency="currency"\n                                :disabled="!acl.can(\'product.editor\')"\n                            />\n                            {% endblock %}\n                        </div>\n                    </template>\n\n                    <template v-if="showListPrices[priceGroup.ruleId] !== false">\n                        <div\n                            :key="`else-${currency}`"\n                            class="product-detail-context-prices__price-field-wrapper"\n                        >\n                            <sw-inheritance-switch\n                                v-if="!currency.isSystemDefault"\n                                class="sw-product-detail-context-prices__inherited-icon"\n                                :is-inherited="isPriceFieldInherited(item, currency)"\n                                :disabled="!acl.can(\'product.editor\')"\n                                @inheritance-restore="onInheritanceRestore(item, currency)"\n                                @inheritance-remove="onInheritanceRemove(item, currency)"\n                            />\n                            <sw-list-price-field\n                                :price="item.price"\n                                :default-price="findDefaultPriceOfRule(item)"\n                                :vertical="true"\n                                :tax-rate="productTaxRate"\n                                :label="false"\n                                :compact="compact"\n                                :disabled="!acl.can(\'product.editor\')"\n                                :currency="currency"\n                                hide-purchase-prices\n                            />\n                        </div>\n                    </template>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_prices_price_card_price_group_grid_actions %}\n                <template\n                    #actions="{ item }"\n                >\n\n                    \n                    {% block sw_product_detail_prices_price_card_price_group_grid_actions_delete %}\n                    <sw-context-menu-item\n                        variant="danger"\n                        class="product-detail-context-prices__context-delete"\n                        :disabled="!acl.can(\'product.editor\')"\n                        @click="onPriceRuleDelete(item)"\n                    >\n                        {{ $tc(\'sw-product.prices.contextMenuDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n            </sw-data-grid>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_prices_price_card_price_group_empty_state %}\n            <div\n                v-else\n                class="sw-product-detail-context-prices__empty-state"\n            >\n\n                \n                {% block sw_product_detail_prices_price_card_price_group_empty_state_warning %}\n                <p>{{ $tc(\'sw-product.advancedPrices.newRuleWarning\') }}</p>\n                {% endblock %}\n\n            </div>\n            {% endblock %}\n\n        </sw-card>\n\n        \n        {% block sw_product_detail_prices_price_card_price_group_add_price_rule %}\n        <sw-container\n            justify="center"\n            columns="250x"\n        >\n            \n            {% block sw_product_detail_prices_price_card_price_group_add_price_rule_button %}\n            <sw-button\n                v-if="canAddPriceRule"\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'product.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-product-detail-context-prices__add-new-rule"\n                variant="ghost"\n                :disabled="emptyPriceRuleExists || !acl.can(\'product.editor\')"\n                size="small"\n                @click="onAddNewPriceGroup(null)"\n            >\n                {{ $tc(\'sw-product.prices.buttonAddAdditionalPriceRuleGroup\') }}\n            </sw-button>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n\n    </sw-container>\n\n    <sw-card\n        v-else\n        class="sw-product-detail-context-prices__empty-state-card"\n        position-identifier="sw-product-detail-context-prices-empty-state-card"\n    >\n        \n        {% block sw_product_detail_prices_price_empty_state %}\n        <div class="sw-product-detail-context-prices__empty-state">\n\n            \n            {% block sw_product_detail_prices_empty_state_image %}\n            <img\n                :src="\'/administration/static/img/empty-states/products-empty-state.svg\' | asset"\n                alt=""\n            >\n            {% endblock %}\n\n            \n            {% block sw_product_detail_prices_price_empty_state_text %}\n            <template v-if="isChild">\n                \n                {% block sw_product_detail_prices_price_empty_state_text_child %}\n                <template v-if="isInherited">\n                    \n                    {% block sw_product_detail_prices_price_empty_state_text_inherited %}\n                    <p>{{ $tc(\'sw-product.advancedPrices.advancedPricesInherited\') }}</p>\n                    \n                    {% block sw_product_detail_prices_price_empty_state_text_link %}\n                    <router-link\n                        v-if="isInherited"\n                        :to="{ name: \'sw.product.detail.prices\', params: { id: product.parentId } }"\n                        class="sw-product-detail-context-prices__parent-prices-link"\n                    >\n                        {{ $tc(\'sw-product.advancedPrices.linkAdvancedPricesOfParent\') }}\n                        <sw-icon\n                            name="regular-long-arrow-right"\n                            small\n                        />\n                    </router-link>\n                    {% endblock %}\n                    {% endblock %}\n                </template>\n\n                <template v-else>\n                    \n                    {% block sw_product_detail_prices_price_empty_state_text_not_inherited %}\n                    <p>{{ $tc(\'sw-product.advancedPrices.advancedPricesNotInherited\') }}</p>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_product_detail_prices_price_empty_state_text_empty %}\n                <p>{{ $tc(\'sw-product.advancedPrices.advancedPricesNotExisting\') }}</p>\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_prices_price_empty_state__inherit_switch %}\n            <template v-if="isChild">\n                <div\n                    class="sw-product-detail-context-prices__inherit-toggle-wrapper"\n                    :class="{ \'is--inherited\': isInherited }"\n                >\n                    <sw-switch-field\n                        {% if VUE3 %}\n                        v-model:value="isInherited"\n                        {% else %}\n                        v-model="isInherited"\n                        {% endif %}\n                        class="sw-product-detail-context-prices__inherit-switch"\n                        :disabled="!acl.can(\'product.editor\')"\n                    />\n                    <sw-inheritance-switch\n                        class="sw-product-detail-context-prices__inheritance-icon"\n                        :is-inherited="isInherited"\n                        :disabled="!acl.can(\'product.editor\')"\n                        @inheritance-restore="restoreInheritance"\n                        @inheritance-remove="removeInheritance"\n                    />\n                    \n                    <label class="sw-product-detail-context-prices__inheritance-label">\n                        {{ $tc(\'sw-product.advancedPrices.inheritSwitchLabel\') }}\n                    </label>\n                </div>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_prices_price_empty_state_select_rule %}\n            <sw-select-rule-create\n                v-if="rules.entity"\n                id="rule"\n                class="sw-product-detail-context-prices__empty-state-select-rule"\n                :placeholder="$tc(\'sw-product.advancedPrices.selectRule\')"\n                :disabled="isInherited || !acl.can(\'product.editor\')"\n                rule-aware-group-key="productPrices"\n                :restricted-rule-ids="Object.keys(priceRuleGroups)"\n                :restricted-rule-ids-tooltip-label="$tc(\'sw-product.advancedPrices.ruleAlreadyUsed\')"\n                @save-rule="onAddNewPriceGroup($event)"\n            />\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </sw-card>\n\n    {% endblock %}\n</sw-container>\n{% endblock %}\n',inject:["repositoryFactory","acl","feature"],mixins:[_.getByName("notification")],props:{isSetDefaultPrice:{type:Boolean,required:!1,default:!1},canSetLoadingRules:{type:Boolean,required:!1,default:!0}},data:function(){return{rules:[],totalRules:0,isInherited:!1,showListPrices:{}}},computed:p(p(p({},f("swProductDetail",["product","parentProduct","taxes","currencies"])),w("swProductDetail",["isLoading","defaultCurrency","defaultPrice","productTaxRate","isChild"])),{},{priceRepository:function(){return this.product&&this.product.prices?this.repositoryFactory.create(this.product.prices.entity,this.product.prices.source):null},ruleRepository:function(){return this.repositoryFactory.create("rule")},priceRuleGroups:function(){var e=this,t={};return this.product.prices&&this.rules?(this.product.prices.sort((function(t,n){var i=e.findRuleById(t.ruleId),r=e.findRuleById(n.ruleId);return i&&i.name&&r&&r.name?i.name>r.name?1:-1:0})).forEach((function(n){t[n.ruleId]||(t[n.ruleId]={ruleId:n.ruleId,rule:e.findRuleById(n.ruleId),prices:e.findPricesByRuleId(n.ruleId)})})),Object.values(t).forEach((function(e){e.prices.sort((function(e,t){return e.quantityStart-t.quantityStart}))})),t):t},priceRuleGroupsExists:function(){return Object.values(this.priceRuleGroups).length>0},canAddPriceRule:function(){return Object.keys(this.priceRuleGroups).length!==this.rules.length},emptyPriceRuleExists:function(){return void 0!==this.priceRuleGroups.null},isLoaded:function(){return!this.isLoading&&this.currencies&&this.taxes&&this.product},currencyColumns:function(){return this.sortCurrencies(),this.currencies.map((function(e){return{property:"price-".concat(e.isoCode),label:e.translated.name||e.name,visible:!0,allowResize:!0,primary:!1,rawData:!1,width:"270px",multiLine:!0}}))},pricesColumns:function(){return[].concat([{property:"quantityStart",label:"sw-product.advancedPrices.columnFrom",visible:!0,allowResize:!0,primary:!0,rawData:!1,width:"120px"},{property:"quantityEnd",label:"sw-product.advancedPrices.columnTo",visible:!0,allowResize:!0,primary:!0,rawData:!1,width:"120px"},{property:"type",label:"sw-product.advancedPrices.columnType",visible:!0,allowResize:!0,width:"250px",multiLine:!0}],s()(this.currencyColumns))}}),watch:{"product.prices":{handler:function(e){e&&(this.isInherited=this.isChild&&!this.product.prices.total)},immediate:!0}},mounted:function(){this.mountedComponent()},methods:{mountedComponent:function(){var e=this,t=new m(1,500);t.addFilter(m.multi("OR",[m.contains("rule.moduleTypes.types","price"),m.equals("rule.moduleTypes",null)])),this.canSetLoadingRules&&Shopware.State.commit("swProductDetail/setLoading",["rules",!0]),this.ruleRepository.search(t).then((function(t){e.rules=t,e.totalRules=t.total,Shopware.State.commit("swProductDetail/setLoading",["rules",!1])})),this.isInherited=this.isChild&&!this.product.prices.total},sortCurrencies:function(){this.currencies.sort((function(e,t){return e.isSystemDefault?-1:t.isSystemDefault?1:e.translated.name<t.translated.name?-1:e.translated.name>t.translated.name?1:0}))},onRuleChange:function(e,t){var n=this;this.$nextTick((function(){n.product.prices.forEach((function(n){n.ruleId===t&&(n.ruleId=e)}))}))},onAddNewPriceGroup:function(){var e=arguments,t=this;return r()(o.a.mark((function n(){var i,r,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.length>0&&void 0!==e[0]?e[0]:null,n.next=3,t.$nextTick();case 3:if(!t.emptyPriceRuleExists){n.next=5;break}return n.abrupt("return");case 5:return(r=t.priceRepository.create()).ruleId=i,r.productId=t.product.id,r.quantityStart=1,r.quantityEnd=null,r.currencyId=t.defaultCurrency.id,r.price=[{currencyId:t.defaultCurrency.id,gross:t.isSetDefaultPrice?0:t.defaultPrice.gross,linked:t.defaultPrice.linked,net:t.isSetDefaultPrice?0:t.defaultPrice.net,listPrice:null}],t.defaultPrice.listPrice&&(r.price[0].listPrice={currencyId:t.defaultCurrency.id,gross:t.defaultPrice.listPrice.gross,linked:t.defaultPrice.listPrice.linked,net:t.defaultPrice.listPrice.net}),t.product.prices.add(r),n.next=16,t.$nextTick();case 16:(c=t.$parent.$el.children.item(0))&&c.scrollTo({top:c.scrollHeight,behavior:"smooth"});case 18:case"end":return n.stop()}}),n)})))()},onPriceGroupDelete:function(e){var t=this;this.product.prices.map((function(e){return{id:e.id,ruleId:e.ruleId}})).forEach((function(n){e===n.ruleId&&t.product.prices.remove(n.id)}))},onPriceGroupDuplicate:function(e){var t=this;void 0===this.priceRuleGroups.null&&e.prices.forEach((function(e){t.duplicatePriceRule(e,null)}))},onPriceRuleDelete:function(e){var t=this.priceRuleGroups[e.ruleId];if(t.prices.length<=1)this.createNotificationError({message:this.$tc("sw-product.advancedPrices.deletionNotPossibleMessage")});else{var n=t.prices.indexOf(e);if(void 0===e.quantityEnd||null===e.quantityEnd)t.prices[n-1].quantityEnd=null;else t.prices[n+1].quantityStart=e.quantityStart;this.product.prices.remove(e.id)}},onInheritanceRestore:function(e,t){var n=e.price.findIndex((function(e){return e.currencyId===t.id}));this.$delete(e.price,n)},onInheritanceRemove:function(e,t){var n=this.findDefaultPriceOfRule(e),i={currencyId:t.id,gross:this.convertPrice(n.gross,t),linked:n.linked,net:this.convertPrice(n.net,t),listPrice:null};n.listPrice&&(i.listPrice={currencyId:t.id,gross:this.convertPrice(n.listPrice.gross,t),linked:n.listPrice.linked,net:this.convertPrice(n.listPrice.net,t)}),this.$set(e.price,e.price.length,i)},isPriceFieldInherited:function(e,t){return e.price.findIndex((function(e){return e.currencyId===t.id}))<0},convertPrice:function(e,t){var n=(e*t.factor).toFixed(t.decimalPrecision);return Number(n)},findRuleById:function(e){return this.rules.find((function(t){return t.id===e}))},findPricesByRuleId:function(e){return this.product.prices.filter((function(t){return t.ruleId===e}))},findDefaultPriceOfRule:function(e){var t=this;return e.price.find((function(e){return e.currencyId===t.defaultCurrency.id}))},onQuantityEndChange:function(e,t){t.prices.indexOf(e)+1===t.prices.length&&this.createPriceRule(t)},createPriceRule:function(e){var t=this.priceRepository.create();t.productId=this.product.id,t.ruleId=e.ruleId;var n=Math.max.apply(Math,s()(e.prices.map((function(e){return e.quantityEnd}))));t.quantityStart=n+1,t.price=[{currencyId:this.defaultCurrency.id,gross:this.defaultPrice.gross,linked:this.defaultPrice.linked,net:this.defaultPrice.net,listPrice:null}],this.defaultPrice.listPrice&&(t.price[0].listPrice={currencyId:this.defaultCurrency.id,gross:this.defaultPrice.listPrice?this.defaultPrice.listPrice.gross:null,linked:!this.defaultPrice.listPrice||this.defaultPrice.listPrice.linked,net:this.defaultPrice.listPrice?this.defaultPrice.listPrice.net:null}),this.product.prices.add(t)},canCreatePriceRule:function(e){return!!e.prices.filter((function(e){return!e.quantityEnd})).length},duplicatePriceRule:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.priceRepository.create();i.productId=e.productId,i.quantityEnd=e.quantityEnd,i.quantityStart=e.quantityStart,i.ruleId=n,i.price=[],e.price.forEach((function(e,n){t.$set(i.price,n,p({},e))})),this.product.prices.add(i)},getPriceRuleGroupClass:function(e){return["context-price-group-".concat(e)]},restoreInheritance:function(){this.isInherited=!0},removeInheritance:function(){this.isInherited=!1},onChangeShowListPrices:function(e,t){this.$set(this.showListPrices,t,e)},getStartQuantityTooltip:function(e,t){return{message:this.$tc("sw-product.advancedPrices.advancedPriceDisabledTooltip"),width:275,showDelay:200,disabled:0!==e||1!==t}}}}}}]);