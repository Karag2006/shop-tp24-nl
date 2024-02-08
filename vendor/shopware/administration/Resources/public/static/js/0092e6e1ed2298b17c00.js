(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[480],{FDlr:function(e,n,t){},OQw4:function(e,n,t){"use strict";t.r(n);var a=t("CsSd"),s=t.n(a),r=t("7yzw"),i=t.n(r),c=t("92Mt"),l=t.n(c),o=t("oFIT");t("kb9h"),n.default=Shopware.Component.wrapComponentConfig({template:'\n{% block sw_settings_usage_data_index %}\n<sw-page class="sw-settings-usage-data">\n\n    \n    {% block sw_settings_usage_data_search_bar %}\n    <template #search-bar>\n        <sw-search-bar />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_usage_data_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_usage_data_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_usage_data_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-usage-data.general.textHeadline\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_usage_data_content %}\n    <template #content>\n        <sw-card-view>\n            <sw-card\n                :title="$tc(\'sw-settings-usage-data.general.textHeadline\')"\n                position-identifier="sw-settings-usage-data"\n            >\n                <sw-settings-usage-data-intro />\n\n                <sw-switch-field\n                    {% if VUE3 %}\n                    v-model:value="shareUsageData"\n                    {% else %}\n                    v-model="shareUsageData"\n                    {% endif %}\n                    :label="$tc(\'sw-settings-usage-data.general.shareUsageData\')"\n                    :disabled="!isAdmin"\n                    {% if VUE3 %}\n                    @update:value="saveSystemConfig"\n                    {% else %}\n                    @change="saveSystemConfig"\n                    {% endif %}\n                />\n\n                <sw-alert\n                    variant="neutral"\n                >\n                    {{ alertText }}\n                </sw-alert>\n            </sw-card>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["acl","systemConfigApiService"],data:function(){return{shareUsageData:!1}},computed:{alertText:function(){var e=this.$tc("sw-settings-usage-data.general.alertText");return this.isAdmin||(e+=" ".concat(this.$tc("sw-settings-usage-data.general.alertTextOnlyAdmins"))),e},isAdmin:function(){return this.acl.isAdmin()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;return i()(l.a.mark((function n(){var t,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.systemConfigApiService.getValues(o.METRICS_SYSTEM_CONFIG_DOMAIN);case 2:a=n.sent,e.shareUsageData=null!==(t=a[o.ALLOW_USAGE_DATA_SYSTEM_CONFIG_KEY])&&void 0!==t&&t;case 4:case"end":return n.stop()}}),n)})))()},saveSystemConfig:function(){var e=this;return i()(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.systemConfigApiService.saveValues(s()({},o.ALLOW_USAGE_DATA_SYSTEM_CONFIG_KEY,e.shareUsageData));case 2:case"end":return n.stop()}}),n)})))()}}})},kb9h:function(e,n,t){var a=t("FDlr");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t("P8hj").default)("0af06904",a,!0,{})}}]);