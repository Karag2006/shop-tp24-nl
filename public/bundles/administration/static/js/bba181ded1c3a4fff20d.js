(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[426],{"6qbz":function(e,n,l){},"9/2w":function(e,n,l){"use strict";l.r(n);var t=l("CsSd"),a=l.n(t),i=(l("Ov5k"),Shopware.Mixin);n.default={template:'\n{% block sw_custom_field_translated_labels %}\n<div class="sw-custom-field-translated-labels">\n    \n    {% block sw_custom_field_translated_labels_single %}\n    <template v-if="localeCount == 1">\n        <div\n            v-for="locale in locales"\n            :key="locale"\n        >\n            <sw-text-field\n                v-for="(label, name) in propertyNames"\n                :key="getInlineSnippet(name)"\n                {% if VUE3 %}\n                v-model:value="config[name][locale]"\n                {% else %}\n                v-model="config[name][locale]"\n                {% endif %}\n                :disabled="disabled"\n                :label="getLabel(label, locale)"\n                {% if VUE3 %}\n                @update:value="onInput($event, name, locale)"\n                {% else %}\n                @input="onInput($event, name, locale)"\n                {% endif %}\n            />\n        </div>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_translated_labels_translated %}\n    <sw-tabs\n        v-else\n        variant="minimal"\n        position-identifier="sw-custom-field-translated-labels"\n        :default-item="fallbackLocale"\n    >\n        \n        {% block sw_custom_field_translated_labels_translated_tabs %}\n        <template #default="{ active }">\n            <sw-tabs-item\n                v-for="locale in locales"\n                :key="locale"\n                class="sw-custom-field-translated-labels__translated-labels-field"\n                variant="minimal"\n                :name="locale"\n                :active-tab="active"\n            >\n                {{ $tc(`locale.${locale}`) }}\n            </sw-tabs-item>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_custom_field_translated_labels_translated_content %}\n        <template\n            #content="{ active }"\n        >\n            \n            <div\n                v-for="locale in locales"\n                v-if="active === locale"\n                :key="locale"\n            >\n                \n                {% block sw_custom_field_translated_labels_translated_content_field %}\n                <sw-text-field\n                    v-for="(label, name) in propertyNames"\n                    :key="getInlineSnippet(name)"\n                    {% if VUE3 %}\n                    v-model:value="config[name][locale]"\n                    {% else %}\n                    v-model="config[name][locale]"\n                    {% endif %}\n                    class="sw-custom-field-translated-labels__translated-content-field"\n                    :disabled="disabled"\n                    :label="getLabel(label, locale)"\n                    {% if VUE3 %}\n                    @update:value="onInput($event, name, locale)"\n                    {% else %}\n                    @input="onInput($event, name, locale)"\n                    {% endif %}\n                />\n                {% endblock %}\n            </div>\n        </template>\n        {% endblock %}\n    </sw-tabs>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl"],mixins:[i.getByName("sw-inline-snippet")],model:{prop:"config"},props:{locales:{required:!0},config:{type:Object,required:!0},propertyNames:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{locale:function(){return this.$root.$i18n.locale},fallbackLocale:function(){return this.$root.$i18n.fallbackLocale},localeCount:function(){return Object.keys(this.locales).length}},watch:{locales:function(){this.initializeConfiguration()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initializeConfiguration()},initializeConfiguration:function(){var e=this;Object.keys(this.propertyNames).forEach((function(n){e.config.hasOwnProperty(n)||e.$set(e.config,n,a()({},e.fallbackLocale,null))}))},getLabel:function(e,n){var l=this.getInlineSnippet(e),t=this.$tc("locale.".concat(n));return"".concat(l," (").concat(t,")")},onInput:function(e,n,l){""===e&&(this.config[n][l]=null)}}}},Ov5k:function(e,n,l){var t=l("6qbz");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,l("P8hj").default)("5abea475",t,!0,{})}}]);