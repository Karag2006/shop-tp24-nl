(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[470],{cpX8:function(t,e,n){"use strict";n.r(e);var i=n("4fmW"),s=n.n(i),r=n("7yzw"),o=n.n(r),a=n("CsSd"),l=n.n(a),p=n("92Mt"),c=n.n(p),d=n("myxz");n("m3hH");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=Shopware,g=h.Mixin,_=h.Data.Criteria;e.default={template:'\n{% block sw_settings_snippet_list %}\n<sw-page class="sw-settings-snippet-list">\n\n    \n    {% block sw_settings_snippet_set_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="snippet"\n            :placeholder="$tc(\'sw-settings-snippet.general.placeholderSearchBarSnippets\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_snippet_list_smart_bar_header_title %}\n        <h2\n            v-if="!isLoading && snippetSets"\n            class="sw-settings-snippet-list__smart_bar_header"\n        >\n            \n            {% block sw_settings_snippet_list_smart_bar_header_title_text %}\n            <span class="sw-settings_snippet_list__smart-bar-title-text">\n                {{ $tc(\'sw-settings-snippet.list.textSnippetList\', snippetSets.length, { setName: metaName }) }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_settings_snippet_list_smart_bar_header_amount %}\n            <span class="sw-page__smart-bar-amount">\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_snippet_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip.bottom="getNoPermissionsTooltip(\'snippet.creator\')"\n            :router-link="{ name: \'sw.settings.snippet.create\', query: { ids: queryIds, limit, page } }"\n            :disabled="isLoading || !acl.can(\'snippet.creator\')"\n            variant="primary"\n        >\n            {{ $tc(\'sw-settings-snippet.list.buttonAdd\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_list_content %}\n    <template #content>\n        <div class="sw-settings-snippet-list__content">\n\n            \n            {% block sw_settings_snippet_list_grid %}\n            <sw-data-grid\n                :is-loading="isLoading || !snippetSets"\n                :data-source="grid"\n                :columns="columns"\n                class="sw-settings-snippet-list__grid"\n                :full-page="true"\n                :skeleton-item-amount="skeletonItemAmount"\n                :sort-by="sortBy"\n                :sort-direction="sortDirection"\n                :allow-inline-edit="acl.can(\'snippet.editor\')"\n                :allow-column-edit="true"\n                :show-settings="true"\n                :show-selection="false"\n                @column-sort="onSortColumn"\n                @page-change="onPageChange"\n                @inline-edit-cancel="onInlineEditCancel"\n                @inline-edit-save="onInlineEditSave"\n            >\n\n                \n                {% block sw_settings_salutations_list_columns %}\n                \n                {% block sw_settings_snippet_list_column_id %}\n                <template\n                    #column-id="{ item, isInlineEdit }"\n                >\n                    \n                    {% block sw_settings_snippet_list_column_id_inline_edit %}\n                    <template v-if="isInlineEdit">\n                        {{ item.id }}\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_snippet_list_column_id_content %}\n                    <template v-else>\n                        <router-link\n                            :to="{\n                                name: \'sw.settings.snippet.detail\',\n                                params: { key: item[metaId].translationKey, origin: item[metaId].translationKey },\n                                query: { ids: queryIds, limit, page }\n                            }"\n                        >\n                            {{ item.id }}\n                        </router-link>\n                    </template>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_snippet_list_column_value %}\n                <template\n                    v-for="set in snippetSets"\n                    #[`column-${set.id}`]="{ item, compact, isInlineEdit }"\n                >\n                    \n                    {% block sw_settings_snippet_list_column_value_inline_edit %}\n                    <template v-if="isInlineEdit">\n                        <sw-text-field\n                            :key="set.id"\n                            {% if VUE3 %}\n                            v-model:value="item[set.id].value"\n                            {% else %}\n                            v-model="item[set.id].value"\n                            {% endif %}\n                            :placeholder="item[set.id].origin || $tc(\'sw-settings-snippet.general.placeholderValue\')"\n                            :size="compact ? \'small\' : \'default\'"\n                        />\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_snippet_list_column_value_content %}\n                    <template v-else>\n                        {{ item[set.id].value }}\n                    </template>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_snippet_list_grid_column_actions %}\n                <template #actions="{ item }">\n                    \n                    {% block sw_settings_snippet_list_grid_column_actions_edit %}\n                    <sw-context-menu-item\n                        class="sw-settings-snippet-list__edit-action"\n                        :router-link="{\n                            name: \'sw.settings.snippet.detail\',\n                            params: { key: item[metaId].translationKey, origin: item[metaId].translationKey },\n                            query: { ids: queryIds, limit, page }\n                        }"\n                    >\n                        {{ contextMenuEditSnippet }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_snippet_list_grid_column_actions_delete %}\n                    <sw-context-menu-item\n                        v-tooltip.left="getNoPermissionsTooltip(\'snippet.deleter\')"\n                        class="sw-settings-snippet-list__delete-action"\n                        variant="danger"\n                        :disabled="!acl.can(\'snippet.deleter\')"\n                        @click="onReset(item)"\n                    >\n                        {{ $tc(\'sw-settings-snippet.list.contextMenuDelete\', item.isCustomSnippet) }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_salutation_list_action_modals %}\n                \n                {% block sw_settings_snippet_list_delete_modal %}\n                <template\n                    #action-modals="{ item }"\n                >\n                    <sw-modal\n                        v-if="showDeleteModal === item"\n                        class="sw-settings-snippet-list__delete-modal"\n                        :title="$tc(\'global.default.warning\')"\n                        variant="large"\n                        @modal-close="onCloseDeleteModal"\n                    >\n                        \n                        {% block sw_settings_snippet_list_delete_modal_text %}\n                        \n                        {% block sw_settings_snippet_list_delete_modal_text_reset %}\n                        <span\n                            v-if="!item.isCustomSnippet"\n                            class="sw-settings-snippet-list__delete-modal-confirm-reset-text"\n                        >\n                            {{ $tc(\'sw-settings-snippet.list.textResetConfirm\', queryIdCount, { key: item[metaId].translationKey }) }}\n                        </span>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_snippet_list_delete_modal_text_delete %}\n                        <span\n                            v-else\n                            class="sw-settings-snippet-list__delete-modal-confirm-delete-text"\n                        >\n                            {{ $tc(\'sw-settings-snippet.list.textDeleteConfirm\', 0, { key: item[metaId].translationKey }) }}\n                        </span>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_snippet_list_delete_modal_grid %}\n                        <sw-grid\n                            v-if="!item.isCustomSnippet && resetItems.length > 1"\n                            class="sw-settings-snippet-list__delete-modal-grid"\n                            :items="resetItems"\n                            table\n                            @sw-grid-select-item="onSelectionChanged"\n                            @sw-grid-select-all="onSelectionChanged"\n                        >\n                            \n                            {% block sw_settings_snippet_list_delete_modal_grid_template %}\n                            <template\n                                #columns="{ item }"\n                            >\n                                \n                                {% block sw_settings_snippet_list_delete_modal_grid_name %}\n                                <sw-grid-column\n                                    :label="$tc(\'sw-settings-snippet.list.columnHeaderGridColumnTitleSet\')"\n                                    flex="minmax(150px, 1fr)"\n                                >\n                                    {{ item.setName }}\n                                </sw-grid-column>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_snippet_list_delete_modal_grid_value %}\n                                <sw-grid-column\n                                    :label="$tc(\'sw-settings-snippet.list.columnValue\')"\n                                    flex="minmax(50px,1fr)"\n                                >\n                                    {{ item.value }}\n                                </sw-grid-column>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_snippet_list_delete_modal_grid_origin %}\n                                <sw-grid-column\n                                    :label="$tc(\'sw-settings-snippet.list.columnHeaderResetTo\')"\n                                    flex="minmax(50px,1fr)"\n                                >\n                                    {{ item.origin }}\n                                </sw-grid-column>\n                                {% endblock %}\n                            </template>\n                            {% endblock %}\n                        </sw-grid>\n                        {% endblock %}\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_snippet_list_delete_modal_footer %}\n                        <template #modal-footer>\n                            \n                            {% block sw_settings_snippet_list_delete_modal_cancel %}\n                            <sw-button\n                                size="small"\n                                @click="onCloseDeleteModal"\n                            >\n                                {{ $tc(\'sw-settings-snippet.list.buttonCancel\', item.isCustomSnippet) }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_snippet_list_delete_modal_confirm %}\n                            <sw-button\n                                :disabled="hasResetableItems && !item.isCustomSnippet && resetItems.length !== 1"\n                                variant="danger"\n                                size="small"\n                                @click="onConfirmReset(item)"\n                            >\n                                {{ $tc(\'sw-settings-snippet.list.contextMenuDelete\', item.isCustomSnippet) }}\n                            </sw-button>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-modal>\n                </template>\n                {% endblock %}\n                {% endblock %}\n                {% endblock %}\n\n                \n                {% block sw_settings_snippet_list_grid_pagination %}\n                <template #pagination>\n                    <sw-pagination\n                        :page="page"\n                        :limit="limit"\n                        :total="total"\n                        :total-visible="7"\n                        :steps="steps"\n                        @page-change="onPageChange"\n                    />\n                </template>\n                {% endblock %}\n\n            </sw-data-grid>\n            {% endblock %}\n        </div>\n    </template>\n\n    <template #sidebar>\n        \n        {% block sw_settings_snippet_list_grid_sidebar %}\n        <sw-settings-snippet-sidebar\n            class="sw-settings-snippet-list__grid-sidebar"\n            :filter-items="filterItems"\n            :author-filters="authorFilters"\n            :filter-settings="filterSettings"\n            @sidebar-reset-all="onResetAll"\n            @change="onChange"\n            @sw-sidebar-collaps-refresh-grid="getList"\n            @sw-sidebar-close="onSidebarClose"\n        />\n        {% endblock %}\n    </template>\n\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["snippetSetService","snippetService","userService","repositoryFactory","acl","userConfigService"],mixins:[g.getByName("sw-settings-list")],data:function(){return{entityName:"snippet",sortBy:"id",sortDirection:"ASC",metaId:"",currentAuthor:"",snippetSets:null,hasResetableItems:!0,showOnlyEdited:!1,showOnlyAdded:!1,emptySnippets:!1,grid:[],resetItems:[],filterItems:[],authorFilters:[],appliedFilter:[],appliedAuthors:[],emptyIcon:this.$route.meta.$module.icon,skeletonItemAmount:25,filterSettings:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{identifier:function(){return this.snippetSets?this.$tc("sw-settings-snippet.list.identifier",this.snippetSets.length,{setName:this.metaName}):""},columns:function(){return this.getColumns()},snippetRepository:function(){return this.repositoryFactory.create("snippet")},snippetSetRepository:function(){return this.repositoryFactory.create("snippet_set")},queryIds:function(){return Array.isArray(this.$route.query.ids)?this.$route.query.ids:[this.$route.query.ids]},snippetSetCriteria:function(){var t=new _(1,25);return t.addFilter(_.equalsAny("id",this.queryIds)),t.addSorting(_.sort("name","ASC")),this.term&&t.setTerm(this.term),t},queryIdCount:function(){return this.queryIds.length},metaName:function(){var t;return null===(t=this.snippetSets[0])||void 0===t?void 0:t.name},filter:function(){var t={};return this.showOnlyEdited&&(t.edited=!0),this.showOnlyAdded&&(t.added=!0),this.emptySnippets&&(t.empty=!0),this.term&&(t.term=this.term),this.appliedFilter.length>0&&(t.namespace=this.appliedFilter),this.appliedAuthors.length>0&&(t.author=this.appliedAuthors),t},contextMenuEditSnippet:function(){return this.acl.can("snippet.editor")?this.$tc("global.default.edit"):this.$tc("global.default.view")},hasActiveFilters:function(){return!!this.filterSettings&&Object.values(this.filterSettings).some((function(t){return!0===t}))},activeFilters:function(){var t=this,e={};return this.hasActiveFilters?(this.filterSettings.editedSnippets&&(e=m(m({},e),{},{edited:!0})),this.filterSettings.addedSnippets&&(e=m(m({},e),{},{added:!0})),this.filterSettings.emptySnippets&&(e=m(m({},e),{},{empty:!0})),e=m(m({},e),{},{author:[]}),this.authorFilters.forEach((function(n){!0===t.filterSettings[n]&&e.author.push(n)})),e=m(m({},e),{},{namespace:[]}),this.filterItems.forEach((function(n){!0===t.filterSettings[n]&&e.namespace.push(n)})),e):e}},created:function(){this.createdComponent()},beforeDestroy:function(){this.beforeDestroyComponent()},methods:{createdComponent:function(){var t=this;return o()(c.a.mark((function e(){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addEventListeners(),t.snippetSetRepository.search(t.snippetSetCriteria).then((function(e){t.snippetSets=e})),t.userService.getUser().then((function(e){t.currentAuthor="user/".concat(e.data.username)})),e.next=5,t.snippetService.getFilter();case 5:return n=e.sent,t.filterItems=n.data,e.next=9,t.snippetSetService.getAuthors();case 9:return i=e.sent,t.authorFilters=i.data,e.next=13,t.getFilterSettings();case 13:t.hasActiveFilters&&t.initializeSnippetSet(t.activeFilters);case 14:case"end":return e.stop()}}),e)})))()},beforeDestroyComponent:function(){this.saveUserConfig(),this.removeEventListeners()},addEventListeners:function(){var t=this;window.addEventListener("beforeunload",(function(e){return t.beforeUnloadListener(e)}))},removeEventListeners:function(){var t=this;window.removeEventListener("beforeunload",(function(e){return t.beforeUnloadListener(e)}))},beforeUnloadListener:function(t){this.saveUserConfig()},getFilterSettings:function(){var t=this;return o()(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUserConfig();case 2:n=e.sent,t.filterSettings=n.data["grid.filter.setting-snippet-list"]?n.data["grid.filter.setting-snippet-list"]:t.createFilterSettings();case 4:case"end":return e.stop()}}),e)})))()},getUserConfig:function(){return this.userConfigService.search(["grid.filter.setting-snippet-list"])},saveUserConfig:function(){return this.userConfigService.upsert({"grid.filter.setting-snippet-list":this.filterSettings})},createFilterSettings:function(){var t=this.authorFilters.reduce((function(t,e){return m(m({},t),{},l()({},e,!1))}),{}),e=this.filterItems.reduce((function(t,e){return m(m({},t),{},l()({},e,!1))}),{});return m(m({emptySnippets:!1,editedSnippets:!1,addedSnippets:!1},t),e)},getList:function(){this.hasActiveFilters?this.initializeSnippetSet(this.activeFilters):this.initializeSnippetSet()},getColumns:function(){var t=[{property:"id",label:"sw-settings-snippet.list.columnKey",inlineEdit:!0,allowResize:!0,rawData:!0,primary:!0}];return this.snippetSets&&this.snippetSets.forEach((function(e){t.push({property:e.id,label:e.name,allowResize:!0,inlineEdit:"string",rawData:!0})})),t},initializeSnippetSet:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.filter;if(this.$route.query.ids){this.isLoading=!0;var n={sortBy:this.sortBy,sortDirection:this.sortDirection};this.snippetSetService.getCustomList(this.page,this.limit,e,n).then((function(e){t.metaId=t.queryIds[0],t.total=e.total,t.grid=t.prepareGrid(e.data),t.isLoading=!1}))}else this.backRoutingError()},prepareGrid:function(t){return Object.values(t).reduce((function(t,e){return t.push(function(t){var e=t.reduce((function(t,e){return e.resetTo=e.value,t[e.setId]=e,t.isCustomSnippet=e.author.includes("user/"),t}),{});return e.id=t[0].translationKey,e}(e)),t}),[])},onEdit:function(t){null!=t&&t.id&&this.$router.push({name:"sw.settings.snippet.detail",params:{id:t.id}})},onInlineEditSave:function(t){var e=this,n=[],i=t[this.metaId].translationKey;this.snippetSets.forEach((function(i){var s=t[i.id];if(s.value=d.a.sanitize(s.value),s.value||"string"==typeof s.value||(s.value=s.origin),s.hasOwnProperty("author")&&""!==s.author||(s.author=e.currentAuthor),s.origin!==s.value){var r=e.snippetRepository.create();s.id&&(r._isNew=!1),r.author=s.author,r.id=s.id,r.value=s.value,r.origin=s.origin,r.translationKey=s.translationKey,r.setId=s.setId,n.push(e.snippetRepository.save(r))}else null===s.id||s.author.startsWith("user/")||n.push(e.snippetRepository.delete(s.id))})),Promise.all(n).then((function(){e.inlineSaveSuccessMessage(i),e.getList()})).catch((function(){e.inlineSaveErrorMessage(i),e.getList()}))},onInlineEditCancel:function(t){Object.keys(t).forEach((function(e){var n=t[e];"object"===s()(n)&&void 0!==n.value&&(n.value=n.resetTo)}))},onEmptyClick:function(){this.showOnlyEdited=!1,this.getList()},onSearch:function(t){this.term=t,this.page=1,this.updateRoute({term:t,page:1},{ids:this.queryIds})},backRoutingError:function(){this.$router.push({name:"sw.settings.snippet.index"}),this.createNotificationError({message:this.$tc("sw-settings-snippet.general.errorBackRoutingMessage")})},inlineSaveSuccessMessage:function(t){var e=this.$tc("global.default.success"),n=this.$tc("sw-settings-snippet.list.messageSaveSuccess",this.queryIdCount,{key:t});this.createNotificationSuccess({title:e,message:n})},inlineSaveErrorMessage:function(t){var e=this.$tc("global.default.error"),n=this.$tc("sw-settings-snippet.list.messageSaveError",this.queryIdCount,{key:t});this.createNotificationError({title:e,message:n})},onReset:function(t){var e=this;this.isLoading=!0,this.snippetSetRepository.search(this.snippetSetCriteria).then((function(n){var i=[],s=Array.isArray(e.$route.query.ids)?e.$route.query.ids:[e.$route.query.ids];Object.values(t).forEach((function(t,r){t instanceof Object&&s.find((function(e){return e===t.setId}))&&(t.setName=e.getName(n,t.setId),null===t.id&&(t.id=r,t.isFileSnippet=!0),i.push(t))})),e.resetItems=i.sort((function(t,e){return t.setName<=e.setName?-1:1})),e.showDeleteModal=t})).finally((function(){e.isLoading=!1}))},getName:function(t,e){var n="";return t.forEach((function(t){t.id===e&&(n=t.name)})),n},onSelectionChanged:function(t){this.snippetSelection=t,this.hasResetableItems=0===Object.keys(t).length},onConfirmReset:function(t){var e,n=this,i=[];e=this.showOnlyEdited?Object.values(t).filter((function(t){return"string"!=typeof t})):void 0!==this.snippetSelection?Object.values(this.snippetSelection):Object.values(this.resetItems),this.showDeleteModal=!1,this.$nextTick((function(){e.forEach((function(e){e.hasOwnProperty("isFileSnippet")||null===e.id||(e.isCustomSnippet=t.isCustomSnippet,n.isLoading=!0,i.push(n.snippetRepository.delete(e.id).then((function(){n.createSuccessMessage(e)})).catch((function(){n.createResetErrorNote(e)}))))})),Promise.all(i).then((function(){n.isLoading=!1,n.getList()})).catch((function(){n.isLoading=!1,n.getList()}))}))},createSuccessMessage:function(t){var e=this.$tc("global.default.success"),n=this.$tc("sw-settings-snippet.list.resetSuccessMessage",!t.isCustomSnippet,{key:t.value});this.createNotificationSuccess({title:e,message:n})},createResetErrorNote:function(t){var e=this.$tc("global.default.error"),n=this.$tc("sw-settings-snippet.list.resetErrorMessage",t.isCustomSnippet?2:0,{key:t.value});this.createNotificationError({title:e,message:n})},onChange:function(t){if(this.$set(this.filterSettings,[t.name],t.value),this.page=1,"editedSnippets"===t.group)return this.showOnlyEdited=t.value,void this.initializeSnippetSet();if("addedSnippets"===t.group)return this.showOnlyAdded=t.value,void this.initializeSnippetSet();if("emptySnippets"===t.group)return this.emptySnippets=t.value,void this.initializeSnippetSet();var e="appliedFilter";if("authorFilter"===t.group&&(e="appliedAuthors"),t.value){if(-1!==this[e].indexOf(t.name))return;return this[e].push(t.name),void this.initializeSnippetSet()}this[e].splice(this[e].indexOf(t.name),1),this.initializeSnippetSet()},onSidebarClose:function(){this.showOnlyEdited=!1,this.emptySnippets=!1,this.appliedAuthors=[],this.appliedFilter=[],this.initializeSnippetSet()},onSortColumn:function(t){"ASC"===this.sortDirection&&t.dataIndex===this.sortBy?this.sortDirection="DESC":this.sortDirection="ASC",this.updateRoute({sortDirection:this.sortDirection,sortBy:t.dataIndex},{ids:this.queryIds})},onPageChange:function(t){var e=t.page,n=t.limit;this.updateRoute({page:e,limit:n},{ids:this.queryIds})},getNoPermissionsTooltip:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{showDelay:300,appearance:"dark",showOnDisabledElements:e,disabled:this.acl.can(t),message:this.$tc("sw-privileges.tooltip.warning")}},onResetAll:function(){var t=this;this.showOnlyEdited=!1,this.showOnlyAdded=!1,this.emptySnippets=!1,this.appliedFilter=[],this.appliedAuthors=[],Object.keys(this.filterSettings).forEach((function(e){t.$set(t.filterSettings,e,!1)})),this.initializeSnippetSet({})}}}},m3hH:function(t,e,n){var i=n("wxQF");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("P8hj").default)("6c428b26",i,!0,{})},wxQF:function(t,e,n){}}]);