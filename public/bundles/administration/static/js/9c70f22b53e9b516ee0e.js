(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[549],{"9kBt":function(t,e,n){"use strict";n.r(e);var o=n("CsSd"),s=n.n(o);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=Shopware.Component.getComponentHelper().mapState;e.default={template:'\n{% block sw_flow_change_customer_status_modal %}\n<sw-modal\n    class="sw-flow-change-customer-status-modal"\n    :title="$tc(\'sw-flow.modals.customerStatus.titleChangeCustomerStatus\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_change_customer_status_modal_select %}\n    <sw-single-select\n        {% if VUE3 %}\n        v-model:value="active"\n        {% else %}\n        v-model="active"\n        {% endif %}\n        required\n        :highlight-search-term="false"\n        class="sw-flow-change-customer-status-modal__type-select"\n        :options="options"\n        :label="$tc(\'sw-flow.modals.customerStatus.labelCustomerStatus\')"\n        :placeholder="$tc(\'sw-flow.modals.customerStatus.placeholderCustomerStatus\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_change_customer_status_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_flow_change_customer_status_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-change-customer-status-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_change_customer_status_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-change-customer-status-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onAddAction"\n        >\n            {{ sequence.id ? $tc(\'sw-flow.modals.buttonSaveAction\') : $tc(\'sw-flow.modals.buttonAddAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory"],props:{sequence:{type:Object,required:!0}},data:function(){return{active:!0,fieldError:null}},computed:a(a({},l("swFlowState",["customerStatus"])),{},{options:function(){return[{value:!0,label:this.$tc("sw-flow.modals.customerStatus.active")},{value:!1,label:this.$tc("sw-flow.modals.customerStatus.inactive")}]}}),created:function(){this.createdComponent()},methods:{createdComponent:function(){var t,e;null!==(t=this.sequence)&&void 0!==t&&t.config?this.active=null===(e=this.sequence)||void 0===e?void 0:e.config.active:this.active=!0},onClose:function(){this.$emit("modal-close")},onAddAction:function(){this.sequence.config={active:this.active},this.$emit("process-finish",this.sequence)}}}}}]);