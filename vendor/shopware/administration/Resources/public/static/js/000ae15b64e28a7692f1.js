(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[4,459],{"DSG/":function(e,s,n){"use strict";n.r(s);n("mZdV"),n("mUqK");var a=Shopware.Mixin,t=Shopware.Data.Criteria;s.default={template:'\n{% block sw_settings_search_view_live_search_card %}\n<sw-card\n    class="sw-settings-search-live-search"\n    position-identifier="sw-settings-search-live-search"\n    :title="$tc(\'sw-settings-search.liveSearchTab.titleCard\')"\n>\n\n    \n    {% block sw_settings_search_view_live_search_rebuild_index_row %}\n    <div class="sw-settings-search-live-search__rebuild-index-row">\n\n        \n        {% block sw_settings_search_view_live_search_description %}\n        <div class="sw-settings-search-live-search__description">\n            {{ $tc(\'sw-settings-search.liveSearchTab.textDescription\') }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_view_live_search_show_example_link %}\n        <sw-container\n            columns="1fr"\n            justify="end"\n        >\n            \n            <a\n                class="sw-settings-search-live-search__show-example-link"\n                role="button"\n                tabindex="0"\n                @click="onShowExampleModal"\n            >\n                {{ $tc(\'sw-settings-search.generalTab.linkExample\') }}\n                <sw-icon\n                    name="regular-long-arrow-right"\n                    small\n                />\n            </a>\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_show_example_modal %}\n        <sw-settings-search-example-modal\n            v-if="showExampleModal"\n            @modal-close="onCloseExampleModal"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_settings_search_view_live_search_sales_channel %}\n    <sw-single-select\n        class="sw-settings-search-live-search__sales-channel-select"\n        value-property="id"\n        label-property="translated.name"\n        :placeholder="$tc(\'sw-settings-search.liveSearchTab.textPlaceholderSalesChannel\')"\n        :label="$tc(\'sw-settings-search.liveSearchTab.labelSalesChannelSelect\')"\n        :value="salesChannelId"\n        :options="salesChannels"\n        show-clearable-button\n        {% if VUE3 %}\n        @update:value="changeSalesChannel"\n        {% else %}\n        @change="changeSalesChannel"\n        {% endif %}\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_search_view_live_search_input %}\n    <sw-simple-search-field\n        v-model="liveSearchTerm"\n        class="sw-settings-search-live-search__search_box"\n        variant="form"\n        :delay="1000"\n        :disabled="!isSearchEnable"\n        @search-term-change="searchOnStorefront"\n    >\n\n        \n        {% block sw_settings_search_view_live_search_search_icon_wrapper %}\n        <template #sw-simple-search-field-icon>\n            \n            {% block sw_settings_search_view_live_search_search_icon %}\n            <sw-icon\n                class="sw-settings-search-live-search__search-icon"\n                name="regular-search-s"\n                small\n                @click="searchOnStorefront"\n            />\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n    </sw-simple-search-field>\n    {% endblock %}\n\n    \n    {% block sw_settings_search_view_live_search_results %}\n    <div class="sw-settings-search-live-search__search-results">\n\n        \n        {% block sw_search_bar_results_empty_state %}\n        <sw-loader v-if="searchInProgress" />\n        {% endblock %}\n\n        \n        {% block sw_settings_search_view_live_search_results_no_result %}\n        <div\n            v-if="products && products.length === 0"\n            class="sw-settings-search-live-search__no-result"\n        >\n            {{ $tc(\'sw-settings-search.liveSearchTab.textNoResult\') }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_view_live_search_results_search_grid %}\n        <sw-data-grid\n            v-if="products && products.length > 0"\n            class="sw-settings-search-live-search__grid-result"\n            :plain-appearance="true"\n            :show-selection="false"\n            :show-actions="false"\n            :data-source="products"\n            :is-loading="searchInProgress"\n            :columns="searchColumns"\n        >\n\n            \n            {% block sw_settings_search_view_live_search_results_search_grid_columns %}\n            \n            {% block sw_settings_search_view_live_search_results_search_grid_name %}\n            <template #column-name="{ item }">\n                <sw-product-variant-info\n                    :variations="item.variation"\n                    :show-tooltip="false"\n                >\n                    <sw-settings-search-live-search-keyword\n                        :text="(item.name || item.translated.name)"\n                        :search-term="liveSearchTerm"\n                    />\n                </sw-product-variant-info>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_settings_search_view_live_search_results_search_grid_score %}\n            <template #column-score="{ item }">\n                <span class="sw-settings-search-live-search__grid-result__score">\n                    {{ Math.round(parseFloat(item.extensions.search._score)) }}\n                </span>\n            </template>\n            {% endblock %}\n            {% endblock %}\n\n        </sw-data-grid>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","liveSearchService"],mixins:[a.getByName("notification")],props:{currentSalesChannelId:{type:String,required:!1,default:null},searchTerms:{type:String,required:!1,default:null},searchResults:{type:Object,required:!1,default:null}},data:function(){return{liveSearchTerm:"",salesChannels:[],salesChannelId:this.currentSalesChannelId,liveSearchResults:null,searchInProgress:!1,showExampleModal:!1}},computed:{salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},isSearchEnable:function(){return null!==this.salesChannelId},searchColumns:function(){return[{property:"name",label:this.$tc("sw-settings-search.liveSearchTab.labelName"),rawData:!0},{property:"score",label:this.$tc("sw-settings-search.liveSearchTab.labelScore"),rawData:!0}]},products:function(){return this.liveSearchResults&&this.liveSearchResults.elements}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.fetchSalesChannels(),this.liveSearchTerm=this.searchTerms,this.liveSearchResults=this.searchResults},searchOnStorefront:function(){var e=this;this.liveSearchTerm.length&&(this.searchInProgress=!0,this.liveSearchService.search({salesChannelId:this.salesChannelId,search:this.liveSearchTerm},{},{},{"sw-language-id":Shopware.Context.api.languageId}).then((function(s){e.liveSearchResults=s.data,e.searchInProgress=!1,e.$emit("live-search-results-change",{searchTerms:e.liveSearchTerm,searchResults:e.liveSearchResults})})).catch((function(s){var n=500===s.response.status?e.$tc("sw-settings-search.notification.notSupportedLanguageError"):s.message;e.createNotificationError({message:n})})).finally((function(){e.searchInProgress=!1})))},fetchSalesChannels:function(){var e=this;this.salesChannelRepository.search(new t(1,25)).then((function(s){e.salesChannels=s}))},changeSalesChannel:function(e){this.salesChannelId=e,this.$emit("sales-channel-change",e)},onShowExampleModal:function(){this.showExampleModal=!0},onCloseExampleModal:function(){this.showExampleModal=!1}}}},NNsT:function(e,s,n){},QcDl:function(e,s,n){var a=n("V7wD");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("P8hj").default)("3893af8a",a,!0,{})},V7wD:function(e,s,n){},mUqK:function(e,s,n){"use strict";n.r(s);n("QcDl"),s.default={template:'\n{% block sw_settings_search_view_live_search_keyword %}\n<div class="sw-settings-search-live-search-keyword">\n\n    \n    {% block sw_settings_search_view_live_search_keyword_highlight %}\n    <span\n        v-for="(keyword, i) in parsedMsg"\n        :key="i"\n        :class="getClass(i%2)"\n    >{{ keyword }}</span>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',props:{text:{type:String,required:!0,default:null},searchTerm:{type:String,required:!0,default:null},highlightClass:{type:String,required:!1,default:"sw-settings-search-live-search-keyword__highlight"}},computed:{parsedSearch:function(){return"(".concat(this.searchTerm.trim().replace(/ +/g,"|"),")")},parsedMsg:function(){return this.text.split(new RegExp(this.parsedSearch,"gi"))}},methods:{getClass:function(e){return e?this.highlightClass:{}}}}},mZdV:function(e,s,n){var a=n("NNsT");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("P8hj").default)("59b49aee",a,!0,{})}}]);