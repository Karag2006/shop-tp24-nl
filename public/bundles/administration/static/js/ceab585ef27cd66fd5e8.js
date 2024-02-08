(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[488],{"/hqr":function(s,e,i){var n=i("050F");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,i("P8hj").default)("73a0d745",n,!0,{})},"050F":function(s,e,i){},i5du:function(s,e,i){"use strict";i.r(e);var n=i("6lmj"),r=i.n(n);i("/hqr"),e.default={template:'\n{% block sw_users_permissions_permissions_grid %}\n<sw-card\n    class="sw-users-permissions-permissions-grid"\n    position-identifier="sw-users-permissions-permissions-grid"\n    :title="$tc(\'sw-users-permissions.roles.grid.title\')"\n>\n    <div class="sw-users-permissions-permissions-grid__grid">\n        \n        {% block sw_users_permissions_permissions_grid_header %}\n        <div class="sw-users-permissions-permissions-grid__entry sw-users-permissions-permissions-grid__entry-header">\n            \n            {% block sw_users_permissions_permissions_grid_header_title %}\n            <div class="sw-users-permissions-permissions-grid__title">\n                \n                {% block sw_users_permissions_permissions_grid_header_title_content %}\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_users_permissions_permissions_grid_header_roles %}\n            <div\n                v-for="role in roles"\n                :key="role"\n                class="sw-users-permissions-permissions-grid__checkbox-wrapper"\n            >\n                \n                {% block sw_users_permissions_permissions_grid_header_roles_name %}\n                {{ $tc(\'sw-privileges.roles.\' + role) }}\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_users_permissions_permissions_grid_header_all_roles %}\n            <div class="sw-users-permissions-permissions-grid__all">\n                \n                {% block sw_users_permissions_permissions_grid_header_all_roles_name %}\n                {{ $tc(\'sw-privileges.roles.all\') }}\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_permissions_grid_permissions %}\n        <template v-for="permission in permissionsWithParents">\n            <div\n                v-if="permission.type === \'parent\'"\n                :key="permission.value"\n                :class="\'sw-users-permissions-permissions-grid__parent_\' + permission.value"\n                class="sw-users-permissions-permissions-grid__entry\n                                sw-users-permissions-permissions-grid__parent"\n            >\n                \n                {% block sw_users_permissions_permissions_grid_parent_title %}\n                <div class="sw-users-permissions-permissions-grid__title">\n                    \n                    {% block sw_users_permissions_permissions_grid_parent_title_content %}\n                    {{ $tc(\'sw-privileges.permissions.parents.\' + (permission.value || \'other\')) }}\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_users_permissions_permissions_grid_parent_roles %}\n                <div\n                    v-for="role in roles"\n                    :key="`${permission.value}-${role}`"\n                    :class="\'sw-users-permissions-permissions-grid__role_\' + role"\n                    class="sw-users-permissions-permissions-grid__checkbox-wrapper"\n                >\n                    \n                    {% block sw_users_permissions_permissions_grid_parent_roles_field %}\n                    <sw-checkbox-field\n                        v-if="parentRoleHasChildRoles(permission.value, role)"\n                        :value="areAllChildrenRolesSelected(permission.value, role)"\n                        :ghost-value="areSomeChildrenRolesSelected(permission.value, role)"\n                        :disabled="isParentRoleDisabled(permission.value, role) || disabled"\n                        {% if VUE3 %}\n                        @update:value="toggleAllChildrenWithRole(permission.value, role)"\n                        {% else %}\n                        @change="toggleAllChildrenWithRole(permission.value, role)"\n                        {% endif %}\n                    />\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_users_permissions_permissions_grid_parent_all_roles %}\n                <div class="sw-users-permissions-permissions-grid__all sw-users-permissions-permissions-grid__role_all">\n                    \n                    {% block sw_users_permissions_permissions_grid_parent_all_roles_field %}\n                    <sw-checkbox-field\n                        :value="areAllChildrenWithAllRolesSelected(permission.value)"\n                        :ghost-value="areSomeChildrenWithAllRolesSelected(permission.value)"\n                        :disabled="disabled"\n                        {% if VUE3 %}\n                        @update:value="toggleAllChildrenWithAllRoles(permission.value)"\n                        {% else %}\n                        @change="toggleAllChildrenWithAllRoles(permission.value)"\n                        {% endif %}\n                    />\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </div>\n\n            <div\n                v-else\n                :key="`else-${permission.key}`"\n                :class="\'sw-users-permissions-permissions-grid__entry_\' + permission.key"\n                class="sw-users-permissions-permissions-grid__entry"\n            >\n                \n                {% block sw_users_permissions_permissions_grid_permissions_title %}\n                <div class="sw-users-permissions-permissions-grid__title">\n                    \n                    {% block sw_users_permissions_permissions_grid_permissions_title_content %}\n                    {{ $tc(\'sw-privileges.permissions.\' + permission.key + \'.label\') }}\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_users_permissions_permissions_grid_permissions_roles %}\n                <div\n                    v-for="role in roles"\n                    :key="`else-${permission.key}${role}`"\n                    :class="\'sw-users-permissions-permissions-grid__role_\' + role"\n                    class="sw-users-permissions-permissions-grid__checkbox-wrapper"\n                >\n                    \n                    {% block sw_users_permissions_permissions_grid_permissions_roles_field %}\n                    <sw-checkbox-field\n                        v-if="permission.roles[role]"\n                        v-tooltip="{\n                            message: $tc(\'sw-users-permissions.roles.grid.disabledCheckboxMessage\'),\n                            disabled: !isPermissionDisabled(permission.key, role) || disabled,\n                            showOnDisabledElements: false\n                        }"\n                        :value="isPermissionSelected(permission.key, role)"\n                        :disabled="isPermissionDisabled(permission.key, role) || disabled"\n                        {% if VUE3 %}\n                        @update:value="changePermission(permission.key, role)"\n                        {% else %}\n                        @change="changePermission(permission.key, role)"\n                        {% endif %}\n                    />\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_users_permissions_permissions_grid_permissions_all_roles %}\n                <div class="sw-users-permissions-permissions-grid__all sw-users-permissions-permissions-grid__role_all">\n                    \n                    {% block sw_users_permissions_permissions_grid_permissions_all_roles_field %}\n                    <sw-checkbox-field\n                        v-if="Object.keys(permission.roles).length > 0"\n                        :value="allPermissionsForKeySelected(permission.key)"\n                        :disabled="disabled"\n                        {% if VUE3 %}\n                        @update:value="changeAllPermissionsForKey(permission.key)"\n                        {% else %}\n                        @change="changeAllPermissionsForKey(permission.key)"\n                        {% endif %}\n                    />\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </div>\n        </template>\n        {% endblock %}\n    </div>\n</sw-card>\n{% endblock %}\n',inject:["privileges"],props:{role:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{permissionsWithParents:function(){var s=this,e=[];return this.parents.forEach((function(i){e.push({type:"parent",value:i}),s.getPermissionsForParent(i).forEach((function(s){e.push(s)}))})),e},permissions:function(){var s=this;return this.privileges.getPrivilegesMappings().filter((function(s){return"permissions"===s.category})).sort((function(e,i){var n=s.$tc("sw-privileges.permissions.".concat(e.key,".label")),r=s.$tc("sw-privileges.permissions.".concat(i.key,".label"));return n.localeCompare(r)}))},parents:function(){var s=this;return this.permissions.reduce((function(s,e){return s.includes(e.parent)?s:[].concat(r()(s),[e.parent])}),[]).sort((function(e,i){var n=s.$tc("sw-privileges.permissions.parents.".concat(e||"other")),r=s.$tc("sw-privileges.permissions.parents.".concat(i||"other"));return n.localeCompare(r)}))},usedDependencies:function(){var s=this,e=new Set;return this.role.privileges.forEach((function(i){var n=s.privileges.getPrivilegeRole(i);n&&n.dependencies.forEach((function(s){e.add(s)}))})),r()(e)},roles:function(){return["viewer","editor","creator","deleter"]}},methods:{changePermission:function(s,e){var i="".concat(s,".").concat(e);this.role.privileges.includes(i)?this.removePermission(i):this.addPermission(i)},addPermission:function(s){this.role.privileges.includes(s)||(this.role.privileges.push(s),this.addDependenciesForRole(s))},addDependenciesForRole:function(s){var e=this,i=this.privileges.getPrivilegeRole(s);i&&i.dependencies.forEach((function(s){e.addPermission(s)}))},removePermission:function(s){this.role.privileges=this.role.privileges.filter((function(e){return e!==s}))},isPermissionSelected:function(s,e){return this.role.privileges.some((function(i){return i==="".concat(s,".").concat(e)}))},isPermissionDisabled:function(s,e){return this.usedDependencies.includes("".concat(s,".").concat(e))},changeAllPermissionsForKey:function(s){var e=this,i=this.allPermissionsForKeySelected(s);this.roles.forEach((function(n){var r="".concat(s,".").concat(n);e.privileges.existsPrivilege(r)&&(i?e.removePermission(r):e.addPermission(r))}))},allPermissionsForKeySelected:function(s){var e=this;return!this.roles.some((function(i){return!!e.privileges.existsPrivilege("".concat(s,".").concat(i))&&!e.isPermissionSelected(s,i)}))},getPermissionsForParent:function(s){return this.permissions.filter((function(e){return e.parent===s}))},areAllChildrenRolesSelected:function(s,e){var i=this;return!this.getPermissionsForParent(s).some((function(s){return void 0!==s.roles[e]&&!i.isPermissionSelected(s.key,e)}))},areAllChildrenWithAllRolesSelected:function(s){var e=this;return this.roles.every((function(i){return e.areAllChildrenRolesSelected(s,i)}))},areSomeChildrenRolesSelected:function(s,e){var i=this,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=this.getPermissionsForParent(s);return r.some((function(s){if(!n&&!i.privileges.existsPrivilege("".concat(s.key,".").concat(e)))return!0;return i.isPermissionSelected(s.key,e)}))},areSomeChildrenWithAllRolesSelected:function(s){var e=this;return this.roles.every((function(i){return e.areSomeChildrenRolesSelected(s,i,!1)}))},isParentRoleDisabled:function(s,e){var i=this;return this.getPermissionsForParent(s).every((function(s){return i.isPermissionDisabled(s.key,e)}))},toggleAllChildrenWithRole:function(s,e){var i=this,n=this.getPermissionsForParent(s),r=this.areAllChildrenRolesSelected(s,e);n.forEach((function(s){if(s.roles[e]){var n="".concat(s.key,".").concat(e);i.isPermissionDisabled(s.key,e)||(r?i.removePermission(n):i.addPermission(n))}}))},toggleAllChildrenWithAllRoles:function(s){var e=this,i=this.getPermissionsForParent(s),n=this.areAllChildrenWithAllRolesSelected(s);return this.roles.forEach((function(s){i.forEach((function(i){var r="".concat(i.key,".").concat(s);n?e.removePermission(r):e.addPermission(r)}))}))},parentRoleHasChildRoles:function(s,e){return this.getPermissionsForParent(s).some((function(s){return void 0!==s.roles[e]}))}}}}}]);