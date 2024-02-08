(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[486],{"0yrP":function(e,i,s){},"2uy9":function(e,i,s){var n=s("0yrP");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s("P8hj").default)("c644c7ee",n,!0,{})},"U2/n":function(e,i,s){"use strict";s.r(i);var n=s("6lmj"),t=s.n(n);s("2uy9"),i.default={template:'\n{% block sw_users_permissions_detailed_additional_permissions %}\n<sw-card\n    class="sw-users-permissions-detailed-additional-permissions"\n    position-identifier="sw-users-permissions-detailed-additional-permissions"\n    :title="$tc(\'sw-users-permissions.roles.detailed-additional-permissions.title\')"\n>\n    \n    {% block sw_users_permissions_detailed_additional_permissions_additional_privileges %}\n    <template v-for="privilege in detailedAdditionalPermissions">\n        \n        {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_headline %}\n        <h4\n            :key="privilege.key"\n            :class="\'sw-users-permissions-additional-permissions_\' + privilege.key"\n        >\n            \n            {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_headline_content %}\n            <strong>\n                {{ $tc(\'sw-privileges.additional_permissions.\' + privilege.key + \'.label\') }}\n            </strong>\n            {% endblock %}\n        </h4>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_switches %}\n        <div\n            :key="`body-${privilege.key}`"\n            class="sw-users-permissions-detailed-additional-permissions__switches"\n        >\n            \n            {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_switches_content %}\n            <template v-for="(value, roleName) in privilege.roles">\n                \n                {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_switches_content_switch %}\n                <sw-switch-field\n                    :key="`field-${privilege.key}-${roleName}`"\n                    :class="\'sw_users_permissions_detailed_additional_permissions_\' + privilege.key + \'_\' + roleName"\n                    :value="isEntitySelected(roleName)"\n                    :disabled="isEntityDisabled(roleName) || disabled"\n                    :label="roleName"\n                    :bordered="true"\n                    {% if VUE3 %}\n                    @update:value="changePermissionForEntity(roleName)"\n                    {% else %}\n                    @change="changePermissionForEntity(roleName)"\n                    {% endif %}\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["privileges","aclApiService"],props:{role:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1},detailedPrivileges:{type:Array,required:!0}},data:function(){return{detailedAdditionalPermissions:[]}},computed:{allGeneralSelectedPrivileges:function(){return this.privileges.getPrivilegesForAdminPrivilegeKeys(this.role.privileges)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.setDetailedAdditionalPermissions()},setDetailedAdditionalPermissions:function(){var e=this;this.aclApiService.additionalPrivileges().then((function(i){var s={};i.forEach((function(e){s[e]={privileges:[e],dependencies:[]}})),e.detailedAdditionalPermissions.push({category:"additional_permissions",parent:null,key:"routes",roles:s})}))},isEntitySelected:function(e){return[].concat(t()(this.allGeneralSelectedPrivileges),t()(this.detailedPrivileges)).includes(e)},isEntityDisabled:function(e){return!!this.disabled||this.allGeneralSelectedPrivileges.includes(e)},changePermissionForEntity:function(e){var i=this.detailedPrivileges.indexOf(e);i>=0?this.detailedPrivileges.splice(i,1):this.detailedPrivileges.push(e)}}}}}]);