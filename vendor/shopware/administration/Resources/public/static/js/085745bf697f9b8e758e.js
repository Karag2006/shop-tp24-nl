(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[324],{"BmS/":function(e,t,r){var n=r("WOlo");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("P8hj").default)("7bb93e84",n,!0,{})},WOlo:function(e,t,r){},wSdm:function(e,t,r){"use strict";r.r(t);var n=r("CsSd"),a=r.n(n);r("BmS/");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=Shopware.Mixin,d=Shopware.Data,l=d.Criteria,c=d.EntityCollection,h=Shopware.Component.getComponentHelper(),u=h.mapGetters,m=h.mapState,_=Shopware.Utils.object.cloneDeep;t.default={template:'\n{% block sw_order_detail_base_general_info %}\n<div class="sw-order-general-info">\n    \n    {% block sw_order_detail_base_general_info_summary %}\n    <div class="sw-order-general-info__summary">\n        \n        {% block sw_order_detail_base_general_info_summary_main %}\n        <div class="sw-order-general-info__summary-main">\n            \n            {% block sw_order_detail_base_general_info_summary_main_header %}\n            <div class="sw-order-general-info__summary-main-header">\n                {{ summaryMainHeader }}\n            </div>\n            {% endblock %}\n            \n            {% block sw_order_detail_base_general_info_summary_main_total %}\n            <div class="sw-order-general-info__summary-main-total">\n                {{ order.amountTotal | currency(order.currency.translated.shortName, order.totalRounding.decimals) }}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_detail_base_general_info_summary_sub %}\n        <div class="sw-order-general-info__summary-sub">\n            \n            {% block sw_order_detail_base_general_info_summary_sub_description %}\n            <div class="sw-order-general-info__summary-sub-description">\n                {{ $tc(\'sw-order.generalTab.info.summary.on\') }}\n                {{ order.orderDateTime | date({\n                hour: \'2-digit\',\n                minute: \'2-digit\',\n                day: \'2-digit\',\n                month: \'2-digit\',\n                year: \'numeric\'\n                }) }}\n                {{ $tc(\'sw-order.generalTab.info.summary.with\') }}\n                {{ order.transactions.last().paymentMethod.translated.distinguishableName }}\n                <template v-if="order.deliveries.last()">\n                    {{ $tc(\'sw-order.generalTab.info.summary.and\') }}\n                    {{ order.deliveries.last().shippingMethod.translated.name }}\n                </template>\n            </div>\n            {% endblock %}\n            \n            {% block sw_order_detail_base_general_info_summary_sub_last_changed %}\n            <div class="sw-order-general-info__summary-sub-last-changed">\n                \n                {% block sw_order_detail_base_general_info_summary_sub_last_changed_time %}\n                <div\n                    v-if="lastChangedDateTime"\n                    class="sw-order-general-info__summary-sub-last-changed-time"\n                >\n                    {{ $tc(\'sw-order.generalTab.info.summary.lastChanged\') }}:\n                    {{ lastChangedDateTime | date({\n                    hour: \'2-digit\',\n                    minute: \'2-digit\',\n                    day: \'2-digit\',\n                    month: \'2-digit\',\n                    year: \'numeric\'\n                    }) }}\n                </div>\n                {% endblock %}\n                \n                {% block sw_order_detail_base_general_info_summary_sub_last_changed_user %}\n                <div\n                    v-if="lastChangedUser"\n                    class="sw-order-general-info__summary-sub-last-changed-user"\n                >\n                    {{ $tc(\'sw-order.generalTab.info.summary.by\') }}\n                    {{ lastChangedUser.firstName }} {{ lastChangedUser.lastName }}\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_state_change_card_modal %}\n    <sw-order-state-change-modal\n        v-if="showModal"\n        :order="order"\n        :is-loading="isLoading"\n        :technical-name="\'\'"\n        @page-leave="onLeaveModalClose"\n        @page-leave-confirm="onLeaveModalConfirm"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_detail_base_general_info_order_states %}\n    <div class="sw-order-general-info__order-states">\n        \n        {% block sw_order_detail_base_general_info_order_states_payment %}\n        <div class="sw-order-general-info__order-state">\n            <sw-order-state-select-v2\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'order.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-order-general-info__order-state-payment"\n                :transition-options="paymentStateOptions"\n                state-type="order_transaction"\n                rounded-style\n                :placeholder="transaction.stateMachineState.translated.name"\n                :label="$tc(\'sw-order.stateCard.headlineTransactionState\')"\n                :background-style="backgroundStyle(\'order_transaction\')"\n                :disabled="!acl.can(\'order.editor\')"\n                @state-select="onStateSelected"\n            />\n        </div>\n        {% endblock %}\n        \n        {% block sw_order_detail_base_general_info_order_states_shipping %}\n        <div\n            v-if="delivery"\n            class="sw-order-general-info__order-state"\n        >\n            <sw-order-state-select-v2\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'order.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-order-general-info__order-state-delivery"\n                :transition-options="deliveryStateOptions"\n                state-type="order_delivery"\n                rounded-style\n                :placeholder="delivery.stateMachineState.translated.name"\n                :label="$tc(\'sw-order.stateCard.headlineDeliveryState\')"\n                :background-style="backgroundStyle(\'order_delivery\')"\n                :disabled="!acl.can(\'order.editor\')"\n                @state-select="onStateSelected"\n            />\n        </div>\n        {% endblock %}\n        \n        {% block sw_order_detail_base_general_info_order_states_order %}\n        <div class="sw-order-general-info__order-state">\n            <sw-order-state-select-v2\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'order.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-order-general-info__order-state-order"\n                :transition-options="orderStateOptions"\n                rounded-style\n                state-type="order"\n                :placeholder="order.stateMachineState.translated.name"\n                :label="$tc(\'sw-order.stateCard.headlineOrderState\')"\n                :background-style="backgroundStyle(\'order\')"\n                :disabled="!acl.can(\'order.editor\')"\n                @state-select="onStateSelected"\n            />\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_base_general_info_order_tags %}\n    <sw-entity-tag-select\n        class="sw-order-general-info__order-tags"\n        size="small"\n        :entity-collection="tagCollection"\n        :disabled="!acl.can(\'order.editor\')"\n        :placeholder="$tc(\'sw-order.generalTab.tagSelect.placeholder\')"\n        :always-show-placeholder="true"\n        @item-add="onTagAdd"\n        @item-remove="onTagRemove"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl","repositoryFactory","stateMachineService","orderStateMachineService","stateStyleDataProviderService"],mixins:[s.getByName("notification")],props:{order:{type:Object,required:!0}},data:function(){return{currentActionName:null,currentStateType:null,deliveryStateOptions:[],liveOrder:null,modalConfirmed:!1,orderStateOptions:[],paymentStateOptions:[],showModal:!1,tagCollection:null}},computed:o(o(o({},u("swOrderDetail",["isLoading"])),m("swOrderDetail",["savedSuccessful"])),{},{lastChangedUser:function(){if(this.liveOrder){if(this.liveOrder.updatedBy)return this.liveOrder.updatedBy;if(this.liveOrder.createdBy)return this.liveOrder.createdBy}return null},lastChangedDateTime:function(){if(this.liveOrder){if(this.liveOrder.updatedAt)return this.liveOrder.updatedAt;if(this.liveOrder.createdAt)return this.liveOrder.createdAt}return null},lastChangedByCriteria:function(){var e=new l(1,25);return e.setIds([this.order.id]),e.addAssociation("createdBy").addAssociation("updatedBy"),e},summaryMainHeader:function(){return"".concat(this.order.orderNumber," - ").concat(this.order.orderCustomer.firstName," ").concat(this.order.orderCustomer.lastName," (").concat(this.order.orderCustomer.email,")")},orderRepository:function(){return this.repositoryFactory.create("order")},orderTagRepository:function(){return this.repositoryFactory.create(this.order.tags.entity,this.order.tags.source)},stateMachineStateRepository:function(){return this.repositoryFactory.create("state_machine_state")},stateMachineStateCriteria:function(){var e=new l(1,null);return e.addSorting({field:"name",order:"ASC"}),e.addAssociation("stateMachine"),e.addFilter(l.equalsAny("state_machine_state.stateMachine.technicalName",["order.state","order_transaction.state","order_delivery.state"])),e},transaction:function(){for(var e=0;e<this.order.transactions.length;e+=1)if(!["cancelled","failed"].includes(this.order.transactions[e].stateMachineState.technicalName))return this.order.transactions[e];return this.order.transactions.last()},delivery:function(){return this.order.deliveries[0]}}),watch:{savedSuccessful:function(){this.savedSuccessful&&this.getLiveOrder()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=_(this.order.tags);this.tagCollection=new c(this.order.tags.source,this.order.tags.entity,Shopware.Context.api,null,e,e.length),this.getLiveOrder(),this.getTransitionOptions()},getLiveOrder:function(){var e=this;this.orderRepository.search(this.lastChangedByCriteria,Shopware.Context.api).then((function(t){t&&t.first()&&(e.liveOrder=t.first())}))},onTagAdd:function(e){var t=this;this.orderTagRepository.assign(e.id).then((function(){t.tagCollection.add(e)}))},onTagRemove:function(e){var t=this;this.orderTagRepository.delete(e.id).then((function(){t.tagCollection.remove(e.id)}))},getAllStates:function(){return this.stateMachineStateRepository.search(this.stateMachineStateCriteria)},buildTransitionOptions:function(e,t,r){var n=t.filter((function(t){return t.stateMachine.technicalName===e})).map((function(e,t){return{stateName:e.technicalName,id:t,name:e.translated.name,disabled:!0}}));return n.forEach((function(e){var t=r.filter((function(t){return t.toStateName===e.stateName}));t.length>=1&&(e.disabled=!1,e.id=t[0].actionName)})),n},backgroundStyle:function(e){var t;switch(e){case"order_transaction":t=this.transaction.stateMachineState.technicalName;break;case"order_delivery":t=this.delivery.stateMachineState.technicalName;break;case"order":t=this.order.stateMachineState.technicalName;break;default:return null}return this.stateStyleDataProviderService.getStyle("".concat(e,".state"),t).selectBackgroundStyle},getTransitionOptions:function(){var e=this;Shopware.State.commit("swOrderDetail/setLoading",["states",!0]);var t=[this.stateMachineService.getState("order",this.order.id)];return this.transaction&&t.push(this.stateMachineService.getState("order_transaction",this.transaction.id)),this.delivery&&t.push(this.stateMachineService.getState("order_delivery",this.delivery.id)),Promise.all([this.getAllStates()].concat(t)).then((function(t){var r=t[0],n=t[1];if(e.orderStateOptions=e.buildTransitionOptions("order.state",r,n.data.transitions),e.transaction){var a=t[2];e.paymentStateOptions=e.buildTransitionOptions("order_transaction.state",r,a.data.transitions)}if(e.delivery){var i=t[3];e.deliveryStateOptions=e.buildTransitionOptions("order_delivery.state",r,i.data.transitions)}return Promise.resolve()})).finally((function(){Shopware.State.commit("swOrderDetail/setLoading",["states",!1])}))},onStateSelected:function(e,t){if(e&&t)return this.modalConfirmed?void(this.modalConfirmed=!1):(this.currentActionName=t,this.currentStateType=e,void(this.showModal=!0));this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"))},onLeaveModalClose:function(){this.modalConfirmed=!1,this.currentActionName=null,this.currentStateType=null,this.showModal=!1},onLeaveModalConfirm:function(e){var t=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.showModal=!1;var n=null;switch(this.currentStateType){case"order_transaction":n=this.orderStateMachineService.transitionOrderTransactionState(this.transaction.id,this.currentActionName,{documentIds:e,sendMail:r});break;case"order_delivery":n=this.orderStateMachineService.transitionOrderDeliveryState(this.delivery.id,this.currentActionName,{documentIds:e,sendMail:r});break;case"order":n=this.orderStateMachineService.transitionOrderState(this.order.id,this.currentActionName,{documentIds:e,sendMail:r});break;default:return void this.createNotificationError({message:this.$tc("sw-order.stateCard.labelErrorStateChange")})}n&&n.then((function(){t.loadHistory()})).catch((function(e){t.createStateChangeErrorNotification(e)})),this.currentActionName=null,this.currentStateType=null},loadHistory:function(){var e=this;this.statesLoading=!0,this.modalConfirmed=!1,this.getTransitionOptions().then((function(){e.$emit("save-edits")})).catch((function(t){e.createNotificationError(t)}))},createStateChangeErrorNotification:function(e){this.createNotificationError({message:this.$tc("sw-order.stateCard.labelErrorStateChange")+e})}}}}}]);