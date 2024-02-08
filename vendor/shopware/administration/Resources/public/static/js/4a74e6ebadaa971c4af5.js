(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[268],{Oav9:function(t,e,n){},eXkn:function(t,e,n){var l=n("Oav9");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);(0,n("P8hj").default)("5f1efa45",l,!0,{})},tZa2:function(t,e,n){"use strict";n.r(e);var l=n("CsSd"),o=n.n(l);n("eXkn");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}var s=Shopware,a=s.Mixin,c=s.Data.Criteria,r=s.Component.getComponentHelper().mapState;e.default={template:'\n{% block sw_flow_list %}\n<div class="sw-flow-list">\n    \n    {% block sw_flow_list_search_bar %}{% endblock %}\n\n    \n    {% block sw_flow_list_smart_bar_header %}{% endblock %}\n\n    \n    {% block sw_flow_list_smart_bar_actions %}{% endblock %}\n\n    \n    {% block sw_flow_list_content %}\n    <sw-card\n        class="sw-flow-list-card"\n        position-identifier="sw-flow-list-card"\n    >\n        <sw-entity-listing\n            class="sw-flow-list__grid"\n            show-selection\n            :show-settings="false"\n            :allow-column-edit="false"\n            :allow-view="acl.can(\'flow.viewer\')"\n            :allow-edit="acl.can(\'flow.editor\')"\n            :allow-delete="acl.can(\'flow.deleter\')"\n            :columns="flowColumns"\n            :sort-by="sortBy"\n            :sort-direction="sortDirection"\n            :repository="flowRepository"\n            :items="flows"\n            :is-loading="isLoading"\n            :full-page="false"\n            :plain-appearance="true"\n            @column-sort="onSortColumn"\n            @page-change="onPageChange"\n            @update-records="updateRecords"\n            @selection-change="selectionChange"\n        >\n            \n            {% block sw_flow_list_grid_columns %}\n\n            \n            {% block sw_flow_list_grid_columns_active %}\n            <template #column-active="{ item }">\n                \n                {% block sw_flow_list_columns_active_label %}\n                <sw-icon\n                    size="12px"\n                    :color="item.active ? `#37d046` : `#de294c`"\n                    :name="item.active ? `regular-checkmark-xs` : `regular-times-s`"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_flow_list_grid_columns_event_name %}\n            <template #column-eventName="{ item }">\n                <div v-if="isValidTrigger(item.eventName)">\n                    <strong>\n                        {{ getTranslatedEventName(item.eventName) }}\n                    </strong>\n                    <p>{{ item.eventName }}</p>\n                </div>\n                <div v-else>\n                    <p>{{ $tc(\'sw-flow.list.unknownTrigger\') }}</p>\n                </div>\n            </template>\n            {% endblock %}\n            {% endblock %}\n\n            \n            {% block sw_flow_list_grid_actions %}\n            <template #actions="{ item }">\n\n                \n                {% block sw_flow_list_grid_actions_duplicate %}\n                <sw-context-menu-item\n                    class="sw-flow-list__item-duplicate"\n                    :disabled="!acl.can(\'flow.creator\')"\n                    @click="onDuplicateFlow(item)"\n                >\n                    {{ $tc(\'global.default.duplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_flow_list_grid_actions_edit %}\n                <sw-context-menu-item\n                    class="sw-flow-list__item-edit"\n                    :disabled="!acl.can(\'flow.editor\') && !acl.can(\'flow.viewer\')"\n                    @click="onEditFlow(item)"\n                >\n                    {{ detailPageLinkText }}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_flow_list_grid_actions_custom %}\n                {% endblock %}\n\n                \n                {% block sw_flow_list_grid_actions_delete %}\n                <sw-context-menu-item\n                    class="sw-context-menu-item--danger sw-flow-list__item-delete"\n                    :disabled="!acl.can(\'flow.deleter\')"\n                    @click="onDeleteFlow(item)"\n                >\n                    {{ $tc(\'global.default.delete\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_flow_list_grid_action_modal %}\n            <template #action-modals="{ item }">\n                <sw-modal\n                    v-if="currentFlow.id === item.id && isDeleting"\n                    variant="small"\n                    :title="$tc(\'global.default.warning\')"\n                    @modal-close="onCloseDeleteModal"\n                >\n                    \n                    {% block sw_flow_list_grid_action_modal_confirm_delete_text %}\n                    <sw-alert variant="warning">\n                        {{ deleteWarningMessage() }}\n                    </sw-alert>\n                    {% endblock %}\n\n                    <template #modal-footer>\n                        \n                        {% block sw_flow_list_grid_action_modal_buttons %}\n                        <sw-button\n                            size="small"\n                            @click="onCloseDeleteModal"\n                        >\n                            {{ $tc(\'global.default.cancel\') }}\n                        </sw-button>\n                        <sw-button\n                            size="small"\n                            variant="danger"\n                            @click="onConfirmDelete(item)"\n                        >\n                            {{ $tc(\'global.default.delete\') }}\n                        </sw-button>\n                        {% endblock %}\n                    </template>\n                </sw-modal>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_flow_list_grid_bulk_modal_delete_confirm_text %}\n            <template #bulk-modal-delete-confirm-text="{ selectionCount }">\n                <sw-alert variant="warning">\n                    {{ bulkDeleteWarningMessage(selectionCount) }}\n                </sw-alert>\n            </template>\n            {% endblock %}\n        </sw-entity-listing>\n\n        \n        {% block sw_flow_list_empty_state %}\n        <sw-empty-state\n            v-if="!total && !isLoading"\n            class="sw-flow-list__empty-state"\n            :title="$tc(\'sw-flow.list.emptyStateTitle\')"\n            :subline="$tc(\'sw-flow.list.emptyStateSubTitle\')"\n        >\n            \n            {% block sw_flow_list_empty_state_icon %}\n            <template #icon>\n                <img\n                    :alt="$tc(\'sw-flow.list.emptyStateTitle\')"\n                    :src="\'/administration/static/img/empty-states/settings-empty-state.svg\' | asset"\n                >\n            </template>\n            {% endblock %}\n        </sw-empty-state>\n        {% endblock %}\n\n        \n        {% block sw_flow_list_modal_content_custom %}\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl","repositoryFactory"],mixins:[a.getByName("notification"),a.getByName("listing")],props:{searchTerm:{type:String,required:!1,default:""}},data:function(){return{sortBy:"createdAt",sortDirection:"DESC",total:0,isLoading:!1,isDeleting:!1,isDownloading:!1,flows:null,currentFlow:{},selectedItems:[]}},metaInfo:function(){return{title:this.$createTitle()}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({flowRepository:function(){return this.repositoryFactory.create("flow")},flowCriteria:function(){var t=new c(this.page,this.limit);return this.searchTerm&&t.setTerm(this.searchTerm),t.addSorting(c.sort(this.sortBy,this.sortDirection)).addSorting(c.sort("updatedAt","DESC")),t},flowColumns:function(){return[{property:"active",label:this.$tc("sw-flow.list.labelColumnActive"),width:"80px",sortable:!0},{property:"name",dataIndex:"name",label:this.$tc("sw-flow.list.labelColumnName"),allowResize:!0,routerLink:"sw.flow.detail",primary:!0},{property:"eventName",dataIndex:"eventName",label:this.$tc("sw-flow.list.labelColumnTrigger"),allowResize:!0,multiLine:!0},{property:"description",label:this.$tc("sw-flow.list.labelColumnDescription"),allowResize:!0,sortable:!1}]},detailPageLinkText:function(){return!this.acl.can("flow.editor")&&this.acl.can("flow.viewer")?this.$tc("global.default.view"):this.$tc("global.default.edit")}},r("swFlowState",["triggerEvents"])),watch:{searchTerm:function(t){this.onSearch(t)}},created:function(){this.createComponent()},methods:{createComponent:function(){this.getList()},getList:function(){var t=this;this.isLoading=!0,Shopware.State.dispatch("swFlowState/fetchTriggerActions"),this.flowRepository.search(this.flowCriteria).then((function(e){t.total=e.total,t.flows=e})).finally((function(){t.isLoading=!1}))},isValidTrigger:function(t){return this.triggerEvents.some((function(e){return e.name===t}))},onDuplicateFlow:function(t){var e=this,n={overwrites:{name:"".concat(t.name," - ").concat(this.$tc("global.default.copy"))}};this.flowRepository.clone(t.id,Shopware.Context.api,n).then((function(t){e.createNotificationSuccess({message:e.$tc("sw-flow.flowNotification.messageDuplicateSuccess")}),null!=t&&t.id&&e.$router.push({name:"sw.flow.detail",params:{id:t.id}})})).catch((function(){e.createNotificationError({message:e.$tc("sw-flow.flowNotification.messageDuplicateError")})}))},onEditFlow:function(t){null!=t&&t.id&&this.$router.push({name:"sw.flow.detail",params:{id:t.id}})},onDeleteFlow:function(t){this.isDeleting=!0,this.currentFlow=t},onCloseDeleteModal:function(){this.isDownload=!1,this.currentFlow={}},onConfirmDelete:function(t){var e=this;return this.isDeleting=!1,this.currentFlow={},this.flowRepository.delete(t.id).then((function(){e.createNotificationSuccess({message:e.$tc("sw-flow.flowNotification.messageDeleteSuccess")}),e.getList()})).catch((function(){e.createNotificationError({message:e.$tc("sw-flow.flowNotification.messageDeleteError")})}))},updateRecords:function(t){this.flows=t,this.total=t.total,this.$emit("on-update-total",this.total)},getTranslatedEventName:function(t){var e=t.replace(/\./g,"_"),n="global.businessEvents.".concat(e),l="sw-flow-custom-event.flow-list.".concat(e);return this.$te(n)?this.$tc(n):this.$tc(l)},selectionChange:function(t){this.selectedItems=Object.values(t)},deleteWarningMessage:function(){return"".concat(this.$tc("sw-flow.list.warningDeleteText")," ").concat(this.$tc("sw-flow.list.confirmText"))},bulkDeleteWarningMessage:function(t){return"".concat(this.$tc("sw-flow.list.warningDeleteText"),"\n            ").concat(this.$tc("global.entity-components.deleteMessage",t,{count:t}))}}}}}]);