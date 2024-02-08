(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[647],{ybLz:function(n,s,e){"use strict";e.r(s);var t=Shopware.Mixin;s.default={template:'\n{% block sw_settings_store_index %}\n<sw-page class="sw-settings-store">\n\n    \n    {% block sw_settings_store_search_bar %}\n    <template #search-bar>\n        <sw-search-bar />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_store_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_store_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_store_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-store.general.textHeadline\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_store_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_store_actions_save %}\n        <sw-button-process\n            class="sw-store-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading"\n            variant="primary"\n            {% if VUE3 %}\n            @update:process-success="saveFinish"\n            {% else %}\n            @process-finish="saveFinish"\n            {% endif %}\n            @click="onSave()"\n        >\n            {{ $tc(\'sw-settings-store.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_store_content %}\n    <template #content>\n        <sw-card-view>\n            <sw-skeleton v-if="isLoading" />\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <sw-system-config\n                v-show="!isLoading"\n                ref="systemConfig"\n                domain="core.store"\n                @loading-changed="onLoadingChanged"\n            />\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',mixins:[t.getByName("notification")],data:function(){return{isLoading:!1,isSaveSuccessful:!1}},saveFinish:function(){this.isSaveSuccessful=!1},metaInfo:function(){return{title:this.$createTitle()}},methods:{saveFinish:function(){this.isSaveSuccessful=!1},onSave:function(){var n=this;this.isSaveSuccessful=!1,this.isLoading=!0,this.trimHost(),this.$refs.systemConfig.saveAll().then((function(){n.isLoading=!1,n.isSaveSuccessful=!0})).catch((function(s){n.isLoading=!1,n.createNotificationError({message:s})}))},trimHost:function(){var n,s=this.$refs.systemConfig.actualConfigData;null!==(n=s.null)&&void 0!==n&&n["core.store.licenseHost"]&&(s.null["core.store.licenseHost"]=s.null["core.store.licenseHost"].trim())},onLoadingChanged:function(n){this.isLoading=n}}}}}]);