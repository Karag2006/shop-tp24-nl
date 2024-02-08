(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[447],{D30Q:function(t,n,e){"use strict";e.r(n);var s=e("6lmj"),o=e.n(s),a=(e("XqLi"),Shopware.Mixin);n.default={template:'\n{% block sw_settings_payment_sorting_modal %}\n<sw-modal\n    class="sw-settings-payment-sorting-modal"\n    :title="$tc(\'sw-settings-payment.sorting-modal.modalTitle\')"\n    @modal-close="closeModal"\n>\n\n    \n    {% block sw_settings_payment_sorting_modal_content %}\n    <template #body>\n\n        \n        {% block sw_settings_payment_sorting_modal_content_subtitle %}\n        <div class="sw-modal__body sw-settings-payment-sorting-modal__subtitle">\n            {{ $tc(\'sw-settings-payment.sorting-modal.subTitle\') }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_settings_payment_sorting_modal_content_list %}\n        <div class="sw-modal__body">\n            <sw-sortable-list\n                class="sw-settings-payment-sorting-modal__payment-method-list"\n                :items="sortedPaymentMethods"\n                :scroll-on-drag="true"\n                :scroll-on-drag-conf="scrollOnDragConf"\n                @items-sorted="onSort"\n            >\n                \n                {% block sw_settings_payment_sorting_modal_content_payment_method %}\n                <template #item="{ item: paymentMethod }">\n                    <div\n                        class="sw-settings-payment-sorting-modal__payment-method-list-item"\n                        :class="!paymentMethod.active ? \'is--disabled\' : \'\'"\n                    >\n                        \n                        {% block sw_settings_payment_sorting_modal_content_payment_method_action %}\n                        <sw-icon\n                            class="sw-settings-payment-sorting-modal__payment-method-list-item__action"\n                            name="regular-grip-vertical"\n                        />\n                        {% endblock %}\n                        \n                        {% block sw_settings_payment_sorting_modal_content_payment_method_icon %}\n                        <img\n                            v-if="isShopwareDefaultPaymentMethod(paymentMethod)"\n                            class="sw-settings-payment-sorting-modal__payment-method-list-item__icon"\n                            :src="\'/administration/static/img/checkout/shopware_payment_method.svg\' | asset"\n                            alt=""\n                        >\n                        <sw-media-preview-v2\n                            v-else\n                            class="sw-settings-payment-sorting-modal__payment-method-list-item__icon"\n                            :source="paymentMethod.media ? paymentMethod.media : null"\n                        />\n                        {% endblock %}\n                        \n                        {% block sw_settings_payment_sorting_modal_content_payment_method_name %}\n                        <div class="sw-settings-payment-sorting-modal__payment-method-list-item__name">\n                            {{ paymentMethod.translated.distinguishableName }}\n                        </div>\n                        {% endblock %}\n                    </div>\n                </template>\n                {% endblock %}\n            </sw-sortable-list>\n        </div>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_payment_sorting_modal_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_settings_payment_sorting_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-settings-payment-sorting-modal__cancel-button"\n            @click="closeModal"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_payment_sorting_modal_footer_save_button %}\n        <sw-button-process\n            class="sw-settings-payment-sorting-modal__save-button"\n            variant="primary"\n            :is-loading="isSaving"\n            :disabled="!acl.can(\'category.editor\')"\n            :process-success="false"\n            @click="applyChanges"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n</sw-modal>\n{% endblock %}\n',inject:["acl","repositoryFactory","feature"],mixins:[a.getByName("notification")],props:{paymentMethods:{type:Array,required:!0}},data:function(){return{isSaving:!1,originalPaymentMethods:o()(this.paymentMethods),sortedPaymentMethods:o()(this.paymentMethods),scrollOnDragConf:{speed:50,margin:130,accelerationMargin:-10}}},computed:{paymentMethodRepository:function(){return this.repositoryFactory.create("payment_method")}},methods:{closeModal:function(){this.$emit("modal-close")},applyChanges:function(){var t=this;return this.isSaving=!0,this.sortedPaymentMethods.map((function(t,n){return t.position=n+1,t})),this.paymentMethodRepository.saveAll(this.sortedPaymentMethods,Shopware.Context.api).then((function(){t.isSaving=!1,t.$emit("modal-close"),t.$emit("modal-save"),t.createNotificationSuccess({message:t.$tc("sw-settings-payment.sorting-modal.saveSuccessful")})})).catch((function(){t.createNotificationError({message:t.$tc("sw-settings-payment.sorting-modal.errorMessage")})}))},onSort:function(t){this.sortedPaymentMethods=t},isShopwareDefaultPaymentMethod:function(t){return["Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\DebitPayment","Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\InvoicePayment","Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\CashPayment","Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\PrePayment"].includes(t.handlerIdentifier)}}}},XqLi:function(t,n,e){var s=e("yuni");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("P8hj").default)("6dbf64ff",s,!0,{})},yuni:function(t,n,e){}}]);