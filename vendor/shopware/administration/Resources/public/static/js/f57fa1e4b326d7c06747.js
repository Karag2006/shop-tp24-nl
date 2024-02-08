(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[309],{pndg:function(e,t,n){"use strict";n.r(t);var i=n("7yzw"),s=n.n(i),l=n("92Mt"),r=n.n(l),a=(n("yhYo"),Shopware),c=a.Mixin,o=a.Data,p=o.Criteria,_=o.EntityCollection;t.default={template:'\n{% block sw_newsletter_recipient_list %}\n<sw-page class="sw-newsletter-recipient-list">\n    \n    {% block sw_newsletter_recipient_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="newsletter_recipient"\n            :placeholder="$tc(\'sw-newsletter-recipient.general.placeholderSearchBarSnippets\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_newsletter_recipient_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_newsletter_recipient_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_newsletter_recipientlist_list_smart_bar_header_title_text %}\n            {{ $tc(\'global.sw-admin-menu.navigation.mainMenuItemMarketing\') }}\n            <sw-icon name="regular-chevron-right-xs" />\n            {{ $tc(\'sw-newsletter-recipient.list.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_newsletter_recipient_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_newsletter_recipientlist_list_content %}\n    <template #content>\n        \n        {% block sw_newsletter_recipientlist_list_content_card %}\n        \n        {% block sw_newsletter_recipientlist_list_grid %}\n        <sw-entity-listing\n            v-if="items && entitySearchable"\n            ref="swNewsletterRecipientGrid"\n            class="sw-newsletter-recipient-list__grid"\n            :is-loading="isLoading"\n            identifier="sw-newsletter-recipient"\n            :show-selection="false"\n            :items="items"\n            :columns="columns"\n            :repository="repository"\n            detail-route="sw.newsletter.recipient.detail"\n            :sort-by="currentSortBy"\n            :sort-direction="sortDirection"\n            :disable-data-fetching="true"\n            :allow-view="acl.can(\'newsletter_recipient.viewer\')"\n            :allow-edit="acl.can(\'newsletter_recipient.editor\')"\n            :allow-inline-edit="acl.can(\'newsletter_recipient.editor\')"\n            :allow-delete="acl.can(\'newsletter_recipient.deleter\')"\n            @page-change="onPageChange"\n            @column-sort="onSortColumn"\n        >\n\n            \n            {% block sw_newsletter_recipientlist_list_grid_name %}\n            <template\n                #column-firstName="{ item, compact, isInlineEdit }"\n            >\n\n                \n                {% block sw_newsletter_recipientlist_list_grid_inline_edit_name %}\n                <template v-if="isInlineEdit">\n                    \n                    {% block sw_newsletter_recipientlist_list_grid_inline_edit_first_name %}\n                    <sw-text-field\n                        {% if VUE3 %}\n                        v-model:value="item.firstName"\n                        {% else %}\n                        v-model="item.firstName"\n                        {% endif %}\n                        class="sw-newsletter-recipient-list__inline-edit-first-name"\n                        :size="compact ? \'small\' : \'default\'"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_newsletter_recipientlist_list_grid_inline_edit_last_name %}\n                    <sw-text-field\n                        {% if VUE3 %}\n                        v-model:value="item.lastName"\n                        {% else %}\n                        v-model="item.lastName"\n                        {% endif %}\n                        class="sw-newsletter-recipient-list__inline-edit-last-name"\n                        :size="compact ? \'small\' : \'default\'"\n                    />\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_newsletter_recipientlist_list_grid_name_link %}\n                <template v-else>\n                    {{ item.firstName }} {{ item.lastName }}\n                </template>\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_newsletter_recipientlist_list_grid_status %}\n            <template\n                #column-status="{ item, compact, isInlineEdit }"\n            >\n                \n                {% block sw_newsletter_recipientlist_list_grid_status_notSet %}\n                <template v-if="item.status === \'notSet\'">\n                    <sw-label\n                        size="medium"\n                        appearance="pill"\n                    >\n                        {{ $tc(\'sw-newsletter-recipient.list.notSet\') }}\n                    </sw-label>\n                </template>\n                {% endblock %}\n                \n                {% block sw_newsletter_recipientlist_list_grid_status_optIn %}\n                <template v-else-if="item.status === \'optIn\'">\n                    <sw-label\n                        size="medium"\n                        appearance="pill"\n                    >\n                        {{ $tc(\'sw-newsletter-recipient.list.optIn\') }}\n                    </sw-label>\n                </template>\n                {% endblock %}\n                \n                {% block sw_newsletter_recipientlist_list_grid_status_optOut %}\n                <template v-else-if="item.status === \'optOut\'">\n                    <sw-label\n                        size="medium"\n                        appearance="pill"\n                    >\n                        {{ $tc(\'sw-newsletter-recipient.list.optOut\') }}\n                    </sw-label>\n                </template>\n                {% endblock %}\n                \n                {% block sw_newsletter_recipientlist_list_grid_status_direct %}\n                <template v-else-if="item.status === \'direct\'">\n                    <sw-label\n                        size="medium"\n                        appearance="pill"\n                    >\n                        {{ $tc(\'sw-newsletter-recipient.list.direct\') }}\n                    </sw-label>\n                </template>\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_newsletter_recipientlist_list_grid_updated_at %}\n            <template\n                #column-updatedAt="{ item }"\n            >\n                {{ item.updatedAt | date() }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_newsletter_recipientlist_list_grid_created_at %}\n            <template\n                #column-createdAt="{ item }"\n            >\n                {{ item.createdAt | date() }}\n            </template>\n            {% endblock %}\n\n        </sw-entity-listing>\n\n        \n        {% block sw_newsletter_recipient_list_empty_state %}\n        <template v-if="!isLoading && !total">\n            <sw-empty-state\n                v-if="isValidTerm(term)"\n                :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n            >\n                <template #default>\n                    {{ $tc(\'sw-empty-state.messageNoResultSublineBefore\') }}\n                    <router-link\n                        class="sw-empty-state__description-link"\n                        :to="{ name: \'sw.profile.index.searchPreferences\' }"\n                    >\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineLink\') }}\n                    </router-link>\n                    {{ $tc(\'sw-empty-state.messageNoResultSublineAfter\') }}\n                </template>\n            </sw-empty-state>\n\n            <sw-empty-state\n                v-else\n                :title="$tc(\'sw-newsletter-recipient.list.messageEmpty\')"\n            />\n        </template>\n        {% endblock %}\n        {% endblock %}\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_newsletter_recipient_list_sidebar %}\n    <template #sidebar>\n        <sw-sidebar>\n            \n            {% block sw_newsletter_recipient_list_sidebar_refresh %}\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'sw-newsletter-recipient.list.titleSidebarItemRefresh\')"\n                @click="onRefresh"\n            />\n            {% endblock %}\n\n            \n            {% block sw_newsletter_recipient_list_sidebar_filter %}\n            <sw-sidebar-item\n                ref="filterSideBar"\n                icon="regular-filter"\n                :title="$tc(\'sw-newsletter-recipient.list.titleSidebarItemFilter\')"\n                @sw-sidebar-item-close-content="closeContent"\n                @click="closeContent"\n            >\n\n                \n                {% block sw_newsletter_recipient_list_sidebar_filter_status %}\n                <sw-sidebar-collapse>\n                    <template #header>\n                        {{ $tc(\'sw-newsletter-recipient.list.status\') }}\n                    </template>\n                    <template #content>\n                        \n                        {% block sw_newsletter_recipient_list_sidebar_filter_status_not_set %}\n                        <sw-newsletter-recipient-filter-switch\n                            id="notSet"\n                            group="status"\n                            :label="$tc(\'sw-newsletter-recipient.list.notSet\')"\n                            @change="onChange"\n                        />\n                        {% endblock %}\n                        \n                        {% block sw_newsletter_recipient_list_sidebar_filter_status_direct %}\n                        <sw-newsletter-recipient-filter-switch\n                            id="direct"\n                            group="status"\n                            :label="$tc(\'sw-newsletter-recipient.list.direct\')"\n                            @change="onChange"\n                        />\n                        {% endblock %}\n                        \n                        {% block sw_newsletter_recipient_list_sidebar_filter_status_opt_in %}\n                        <sw-newsletter-recipient-filter-switch\n                            id="optIn"\n                            group="status"\n                            :label="$tc(\'sw-newsletter-recipient.list.optIn\')"\n                            @change="onChange"\n                        />\n                        {% endblock %}\n                        \n                        {% block sw_newsletter_recipient_list_sidebar_filter_status_opt_out %}\n                        <sw-newsletter-recipient-filter-switch\n                            id="optOut"\n                            group="status"\n                            :label="$tc(\'sw-newsletter-recipient.list.optOut\')"\n                            @change="onChange"\n                        />\n                        {% endblock %}\n                    </template>\n                </sw-sidebar-collapse>\n                {% endblock %}\n\n                \n                {% block sw_newsletter_recipient_list_sidebar_filter_language %}\n                <sw-sidebar-collapse>\n                    <template #header>\n                        {{ $tc(\'sw-newsletter-recipient.general.language\') }}\n                    </template>\n                    <template #content>\n                        \n                        {% block sw_newsletter_recipient_list_sidebar_filter_language_items %}\n                        <div\n                            v-for="(item, index) in languageFilters"\n                            :key="index"\n                        >\n                            <sw-newsletter-recipient-filter-switch\n                                :id="item.id"\n                                group="languageId"\n                                :label="item.name"\n                                @change="onChange"\n                            />\n                        </div>\n                        {% endblock %}\n                    </template>\n                </sw-sidebar-collapse>\n                {% endblock %}\n\n                \n                {% block sw_newsletter_recipient_list_sidebar_filter_sales_channel %}\n                <sw-sidebar-collapse>\n                    <template #header>\n                        {{ $tc(\'sw-newsletter-recipient.general.salesChannel\') }}\n                    </template>\n                    <template #content>\n                        \n                        {% block sw_newsletter_recipient_list_sidebar_filter_sales_channel_items %}\n                        <div\n                            v-for="(item, index) in salesChannelFilters"\n                            :key="index"\n                        >\n                            <sw-newsletter-recipient-filter-switch\n                                :id="item.id"\n                                group="salesChannelId"\n                                :label="item.translated.name"\n                                @change="onChange"\n                            />\n                        </div>\n                        {% endblock %}\n                    </template>\n                </sw-sidebar-collapse>\n                {% endblock %}\n\n                \n                {% block sw_newsletter_recipient_list_sidebar_filter_sales_tags %}\n                <sw-sidebar-collapse>\n                    <template #header>\n                        {{ $tc(\'sw-newsletter-recipient.general.tags\') }}\n                    </template>\n                    <template #content>\n                        \n                        {% block sw_newsletter_recipient_list_sidebar_filter_sales_tags_select %}\n                        <sw-entity-multi-select\n                            {% if VUE3 %}\n                            v-model:entityCollection="tagCollection"\n                            {% else %}\n                            v-model="tagCollection"\n                            {% endif %}\n                            {% if VUE3 %}\n                            @update:entity-collection="onChange"\n                            {% else %}\n                            @change="onChange"\n                            {% endif %}\n                        />\n                        {% endblock %}\n                    </template>\n                </sw-sidebar-collapse>\n                {% endblock %}\n            </sw-sidebar-item>\n            {% endblock %}\n\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[c.getByName("listing")],data:function(){return{isLoading:!1,items:null,total:0,repository:null,sortBy:"createdAt",sortDirection:"DESC",filterSidebarIsOpen:!1,languageFilters:[],salesChannelFilters:[],tagFilters:[],internalFilters:{},tagCollection:null,searchConfigEntity:"newsletter_recipient"}},metaInfo:function(){return{title:this.$createTitle()}},computed:{columns:function(){return this.getColumns()},salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},tagRepository:function(){return this.repositoryFactory.create("tag")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.tagCollection=new _("/tag","tag",Shopware.Context.api,new p(1,25));var t=new p(1,100);this.repositoryFactory.create("language").search(t,Shopware.Context.api).then((function(t){e.languageFilters=t})),this.salesChannelRepository.search(new p(1,100)).then((function(t){e.salesChannelFilters=t})),this.getList()},getList:function(){var e=this;return s()(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,(n=new p(e.page,e.limit)).setTerm(e.term),n.addSorting(p.sort(e.sortBy,e.sortDirection)),n.addAssociation("salesChannel"),Object.values(e.internalFilters).forEach((function(e){n.addFilter(e)})),t.next=8,e.addQueryScores(e.term,n);case 8:if(n=t.sent,e.entitySearchable){t.next=13;break}return e.isLoading=!1,e.total=0,t.abrupt("return");case 13:e.freshSearchTerm&&n.resetSorting(),e.repository=e.repositoryFactory.create("newsletter_recipient"),e.repository.search(n).then((function(t){e.items=t,e.total=t.total,e.isLoading=!1})).catch((function(){e.isLoading=!1}));case 16:case"end":return t.stop()}}),t)})))()},handleTagFilter:function(e){if(0!==e.length){var t=e.map((function(e){return e.id}));this.internalFilters.tags=p.equalsAny("tags.id",t)}else delete this.internalFilters.tags},handleBooleanFilter:function(e){if(Array.isArray(this[e.group])||(this[e.group]=[]),!e.value)return this[e.group]=this[e.group].filter((function(t){return t!==e.id})),void(this[e.group].length>0?this.internalFilters[e.group]=p.equalsAny(e.group,this[e.group]):delete this.internalFilters[e.group]);this[e.group].push(e.id),this.internalFilters[e.group]=p.equalsAny(e.group,this[e.group])},onChange:function(e){if(null===e&&(e=[]),Array.isArray(e))return this.handleTagFilter(e),void this.getList();this.handleBooleanFilter(e),this.getList()},closeContent:function(){if(this.filterSidebarIsOpen)return this.$refs.filterSideBar.closeContent(),void(this.filterSidebarIsOpen=!1);this.$refs.filterSideBar.openContent(),this.filterSidebarIsOpen=!0},getColumns:function(){return[{property:"email",label:"sw-newsletter-recipient.list.email",routerLink:"sw.newsletter.recipient.detail",allowResize:!0,inlineEdit:"string"},{property:"firstName",dataIndex:"firstName,lastName",inlineEdit:"string",label:"sw-newsletter-recipient.list.name",allowResize:!0,primary:!0},{property:"salesChannel.name",label:"sw-newsletter-recipient.list.salesChannel",allowResize:!0,primary:!1,visible:!1},{property:"status",label:"sw-newsletter-recipient.list.status",allowResize:!0},{property:"zipCode",label:"sw-newsletter-recipient.list.zipCode",allowResize:!0,align:"right"},{property:"city",label:"sw-newsletter-recipient.list.city",allowResize:!0},{property:"street",label:"sw-newsletter-recipient.list.street",allowResize:!0,visible:!1},{property:"updatedAt",label:"sw-newsletter-recipient.list.updatedAt",allowResize:!0,visible:!1},{property:"createdAt",label:"sw-newsletter-recipient.list.createdAt",allowResize:!0,visible:!1}]}}}},sgDS:function(e,t,n){},yhYo:function(e,t,n){var i=n("sgDS");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("P8hj").default)("8f1b4626",i,!0,{})}}]);