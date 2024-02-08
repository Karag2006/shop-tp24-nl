(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[637],{qW8h:function(n,e,s){"use strict";s.r(e);e.default={template:'\n{% block sw_settings_search_view_general %}\n<div class="sw-settings-search__view-general">\n    \n    {% block sw_settings_search_search_behaviour_card %}\n    <sw-settings-search-search-behaviour\n        :is-loading="isLoading"\n        :search-behaviour-configs="productSearchConfigs"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_search_searchable_content_card %}\n    <sw-settings-search-searchable-content\n        :product-search-configs="productSearchConfigs"\n        :search-config-id="searchConfigId"\n        v-on="$listeners"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_search_excluded_search_terms_card %}\n    <sw-settings-search-excluded-search-terms\n        :search-configs="productSearchConfigs"\n        :is-excluded-terms-loading="isLoading"\n        v-on="$listeners"\n        @data-load="loadData"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{productSearchConfigs:{type:Object,required:!1,default:function(){}},isLoading:{type:Boolean,required:!1,default:!1}},data:function(){return{searchConfigId:""}},watch:{productSearchConfigs:function(n){this.searchConfigId=n.id||""}},methods:{loadData:function(){this.$emit("excluded-search-terms-load")}}}}}]);