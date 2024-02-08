(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[635],{xMtC:function(e,n,t){"use strict";t.r(n);var i=Shopware.Mixin;n.default={template:'\n{% block sw_settings_search_searchable_content_general %}\n<div class="sw-settings-search__searchable-content-general">\n    \n    {% block sw_settings_search_searchable_content_general_empty_state %}\n    <sw-empty-state\n        v-if="isEmpty"\n        :title="$tc(\'sw-settings-search.generalTab.textEmptyStateSearchableContent\')"\n        :show-description="false"\n        :has-action-slot="true"\n        :absolute="false"\n    >\n        <template #icon>\n            \n            {% block sw_settings_search_searchable_content_general_state_image %}\n            <img\n                :src="\'administration/static/img/empty-states/settings-empty-state.svg\' | asset"\n                :alt="$tc(\'sw-settings-search.generalTab.textEmptyStateSearchableContent\')"\n            >\n            {% endblock %}\n        </template>\n    </sw-empty-state>\n    {% endblock %}\n\n    \n    {% block sw_settings_search_searchable_content_general_grid %}\n    <sw-entity-listing\n        v-if="!isEmpty"\n        ref="swSettingsSearchableContentGrid"\n        class="sw-settings-search__searchable-content-list"\n        :columns="columns"\n        :repository="repository"\n        :allow-column-edit="false"\n        :full-page="false"\n        :show-settings="false"\n        :show-selection="false"\n        :is-loading="isLoading"\n        :items="searchConfigs"\n        :skeleton-item-amount="searchConfigs && searchConfigs.length"\n        :allow-inline-edit="acl.can(\'product_search_config.editor\')"\n        @inline-edit-save="onInlineEditSave"\n        @inline-edit-cancel="onInlineEditCancel"\n    >\n        \n        {% block sw_settings_search_searchable_content_general_field %}\n        <template #column-field="{ item, isInlineEdit }">\n            <template v-if="item._isNew && isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_general_field_editor %}\n                <sw-single-select\n                    {% if VUE3 %}\n                    v-model:value="item.field"\n                    {% else %}\n                    v-model="item.field"\n                    {% endif %}\n                    class="sw-settings-search-field-select"\n                    size="small"\n                    show-clearable-button\n                    :options="fieldConfigs"\n                    {% if VUE3 %}\n                    @update:value="onSelectField(item)"\n                    {% else %}\n                    @change="onSelectField(item)"\n                    {% endif %}\n                />\n                {% endblock %}\n            </template>\n            <template v-else>\n                \n                {% block sw_settings_search_searchable_content_general_field_label %}\n                {{ getMatchingFields(item.field) }}\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_general_ranking %}\n        <template #column-ranking="{ item, isInlineEdit }">\n            <template v-if="isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_general_ranking_editor %}\n                <sw-number-field\n                    {% if VUE3 %}\n                    v-model:value="item.ranking"\n                    {% else %}\n                    v-model="item.ranking"\n                    {% endif %}\n                    number-type="int"\n                    size="small"\n                />\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_general_searchable %}\n        <template #column-searchable="{ item, isInlineEdit }">\n            <template v-if="isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_general_searchable_editor %}\n                <sw-checkbox-field\n                    {% if VUE3 %}\n                    v-model:value="item.searchable"\n                    {% else %}\n                    v-model="item.searchable"\n                    {% endif %}\n                />\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_search_searchable_content_general_searchable_label %}\n                <sw-data-grid-column-boolean v-model="item.searchable" />\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_general_tokenize %}\n        <template #column-tokenize="{ item, isInlineEdit }">\n            <template v-if="isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_general_tokenize_editor %}\n                <sw-checkbox-field\n                    {% if VUE3 %}\n                    v-model:value="item.tokenize"\n                    {% else %}\n                    v-model="item.tokenize"\n                    {% endif %}\n                />\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_search_searchable_content_general_tokenize_label %}\n                <sw-data-grid-column-boolean v-model="item.tokenize" />\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_general_columns_actions %}\n        <template #actions="{ item }">\n            <sw-context-menu-item\n                class="sw-settings-search__searchable-content-list-action sw-settings-search__searchable-content-list-edit"\n                :disabled="!acl.can(\'product_search_config.editor\')"\n                @click="onInlineEditItem(item)"\n            >\n                {{ $tc(\'global.default.edit\') }}\n            </sw-context-menu-item>\n\n            \n            {% block sw_settings_search_searchable_content_general_columns_actions_edit %}\n            <sw-context-menu-item\n                class="sw-settings-search__searchable-content-list-action sw-settings-search__searchable-content-list-reset"\n                :disabled="!acl.can(\'product_search_config.editor\')"\n                @click="onResetRanking(item)"\n            >\n                {{ $tc(\'sw-settings-search.generalTab.list.textResetRanking\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_general_pagination %}\n        <template #pagination>\n            <sw-pagination\n                :page="page"\n                :limit="limit"\n                :total="total"\n                auto-hide\n            />\n        </template>\n        {% endblock %}\n    </sw-entity-listing>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl"],mixins:[i.getByName("listing"),i.getByName("notification")],props:{isEmpty:{type:Boolean,required:!0},columns:{type:Array,required:!0},repository:{type:Object,required:!0},searchConfigs:{type:Array,required:!1,default:function(){return null}},fieldConfigs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},methods:{getMatchingFields:function(e){if(!e)return"";var n=this.fieldConfigs.find((function(n){return n.value===e}));return n?n.label:""},onSelectField:function(e){var n=this.fieldConfigs.find((function(n){return n.value===e.field})).defaultConfigs;this.searchConfigs.forEach((function(e){return e._isNew&&(e.ranking=n.ranking,e.searchable=n.searchable,e.tokenize=n.tokenize),e}))},onInlineEditSave:function(e){var n=this;e.then((function(){n.createNotificationSuccess({message:n.$tc("sw-settings-search.notification.saveSuccess")})})).catch((function(){n.createNotificationError({message:n.$tc("sw-settings-search.notification.saveError")})})).finally((function(){n.$emit("data-load")}))},onInlineEditCancel:function(){this.$emit("data-load")},onInlineEditItem:function(e){this.$refs.swSettingsSearchableContentGrid.onDbClickCell(e)},onResetRanking:function(e){if(!e.field)return this.createNotificationError({message:this.$tc("sw-settings-search.notification.saveError")}),void this.$emit("data-load");var n=this.searchConfigs.find((function(n){return n.field===e.field}));n?(n.ranking=this.getConfigRankingDefault(e.field),this.$emit("config-save")):this.createNotificationError({message:this.$tc("sw-settings-search.notification.saveError")})},getConfigRankingDefault:function(e){if(!e)return 0;var n=this.fieldConfigs.find((function(n){return n.value===e}));return n?n.defaultConfigs.ranking:0}}}}}]);