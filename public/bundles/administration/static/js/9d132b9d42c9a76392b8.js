(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[145],{D7M1:function(e,n,t){"use strict";t.r(n);var s=t("CsSd"),o=t.n(s);t("o3QE");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}var c=Shopware,l=c.Component,a=c.Mixin,r=c.Filter,d=l.getComponentHelper().mapPropertyErrors;n.default={template:'\n{% block sw_cms_section %}\n<div\n    class="sw-cms-section"\n    :class="[sectionClasses, customSectionClass, sectionTypeClass]"\n>\n\n    \n    {% block sw_cms_section_actions %}\n    <sw-cms-section-actions\n        :section="section"\n        :disabled="disabled"\n    />\n    {% endblock %}\n\n    <div\n        class="sw-cms-section__wrapper"\n        :style="sectionStyles"\n    >\n        <sw-cms-visibility-toggle\n            v-if="isVisible"\n            :text="toggleButtonText"\n            :is-collapsed="isCollapsed"\n            :class="expandedClass"\n            @toggle="toggleVisibility"\n        />\n        \n        {% block sw_cms_section_sidebar %}\n        <div\n            v-if="isSideBarType && (!isCollapsed || !isVisible)"\n            class="sw-cms-section__sidebar"\n            :class="sectionSidebarClasses"\n        >\n\n            <template v-if="sideBarEmpty">\n                \n                {% block sw_cms_section_sidebar_block_empty %}\n                <div\n                    v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(blockCount, \'sidebar\') }"\n                    class="sw-cms-section__empty-stage"\n                    role="button"\n                    tabindex="0"\n                    @click="openBlockBar"\n                    @keydown.enter="openBlockBar"\n                >\n\n                    <sw-icon\n                        name="regular-plus-circle"\n                        size="24"\n                    />\n                    <p>{{ $tc(\'sw-cms.detail.label.addBlocks\') }}</p>\n                </div>\n                {% endblock %}\n            </template>\n\n            <template v-else>\n\n                \n                {% block sw_cms_section_sidebar_add_first_block %}\n                <sw-cms-stage-add-block\n                    v-if="isSystemDefaultLanguage && !disabled"\n                    :key="0"\n                    v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(0, \'sidebar\') }"\n                    @stage-block-add="onAddSectionBlock"\n                />\n                {% endblock %}\n\n                <template v-for="(block, index) in sideBarBlocks">\n                    \n                    {% block sw_cms_section_sidebar_block %}\n                    <sw-cms-block\n                        :key="block.id"\n                        class="sw-cms-stage-block"\n                        :block="block"\n                        :disabled="disabled"\n                        :active="selectedBlock !== null && selectedBlock.id === block.id"\n                        :has-errors="hasBlockErrors(block)"\n                        @block-overlay-click="onBlockSelection(block)"\n                    >\n\n                        \n                        {% block sw_cms_section_sidebar_block_component %}\n                        <component :is="`sw-cms-block-${block.type}`">\n                            \n                            {% block sw_cms_section_content_block_slot %}\n                            <template\n                                v-for="el in block.slots"\n                                #[el.slot]\n                            >\n                                <sw-cms-slot\n                                    :key="el.id"\n                                    :element="el"\n                                    :disabled="disabled"\n                                    :active="selectedBlock !== null && selectedBlock.id === block.id"\n                                />\n                            </template>\n                            {% endblock %}\n                        </component>\n                        {% endblock %}\n                    </sw-cms-block>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_section_add_sidebar_block %}\n                    <sw-cms-stage-add-block\n                        v-if="isSystemDefaultLanguage && !disabled"\n                        :key="index + 1"\n                        v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(block.position + 1, \'sidebar\') }"\n                        @stage-block-add="onAddSectionBlock"\n                    />\n                    {% endblock %}\n                </template>\n            </template>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_section_content %}\n        <div\n            v-if="!isCollapsed || !isVisible"\n            class="sw-cms-section__content"\n            :class="sectionContentClasses"\n        >\n            <template v-if="mainContentEmpty">\n                \n                {% block sw_cms_section_content_block_empty %}\n                <div\n                    v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(blockCount, \'main\') }"\n                    class="sw-cms-section__empty-stage"\n                    role="button"\n                    tabindex="0"\n                    @click="openBlockBar"\n                    @keydown.enter="openBlockBar"\n                >\n\n                    <sw-icon\n                        name="regular-plus-circle"\n                        size="24"\n                    />\n                    <p>{{ $tc(\'sw-cms.detail.label.addBlocks\') }}</p>\n                </div>\n                {% endblock %}\n            </template>\n\n            <template v-else>\n\n                \n                {% block sw_cms_section_content_add_first_block %}\n                <sw-cms-stage-add-block\n                    v-if="isSystemDefaultLanguage && !disabled"\n                    :key="0"\n                    v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(0) }"\n                    @stage-block-add="onAddSectionBlock"\n                />\n                {% endblock %}\n\n                <template v-for="(block, index) in mainContentBlocks">\n                    \n                    {% block sw_cms_section_content_block %}\n                    <sw-cms-block\n                        :key="block.id"\n                        class="sw-cms-stage-block"\n                        :block="block"\n                        :disabled="disabled"\n                        :active="selectedBlock !== null && selectedBlock.id === block.id"\n                        :has-errors="hasBlockErrors(block)"\n                        @block-overlay-click="onBlockSelection(block)"\n                    >\n\n                        \n                        {% block sw_cms_section_content_block_component %}\n                        <component :is="`sw-cms-block-${block.type}`">\n                            \n                            {% block sw_cms_section_content_block_component_slot %}\n                            <template\n                                v-for="el in block.slots"\n                                #[el.slot]\n                            >\n                                <sw-cms-slot\n                                    :key="el.id"\n                                    :element="el"\n                                    :disabled="disabled"\n                                    :active="selectedBlock !== null && selectedBlock.id === block.id"\n                                />\n                            </template>\n                            {% endblock %}\n                        </component>\n                        {% endblock %}\n                    </sw-cms-block>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_section_add_content_block %}\n                    <sw-cms-stage-add-block\n                        v-if="isSystemDefaultLanguage && !disabled"\n                        :key="index + 1"\n                        v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(block.position + 1) }"\n                        @stage-block-add="onAddSectionBlock"\n                    />\n                    {% endblock %}\n                </template>\n            </template>\n        </div>\n        {% endblock %}\n    </div>\n</div>\n{% endblock %}\n',inject:["cmsService","repositoryFactory"],mixins:[a.getByName("cms-state")],props:{page:{type:Object,required:!0},section:{type:Object,required:!0},active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{isCollapsed:!0}},computed:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({blockRepository:function(){return this.repositoryFactory.create("cms_block")},slotRepository:function(){return this.repositoryFactory.create("cms_slot")},sectionClasses:function(){return{"is--active":this.active,"is--boxed":"boxed"===this.section.sizingMode}},sectionTypeClass:function(){return"is--".concat(this.section.type)},customSectionClass:function(){return this.section.cssClass},sectionStyles:function(){var e=null;return this.section.backgroundMedia&&(e=this.section.backgroundMedia.id?'url("'.concat(this.section.backgroundMedia.url,'")'):"url('".concat(this.assetFilter(this.section.backgroundMedia.url),"')")),{"background-color":this.section.backgroundColor||"transparent","background-image":e,"background-size":this.section.backgroundMediaMode}},sectionSidebarClasses:function(){return{"is--empty":this.sideBarEmpty,"is--hidden":this.sectionMobileAndHidden,"is--expanded":this.expandedClass}},sectionMobileAndHidden:function(){return"mobile"===Shopware.State.get("cmsPageState").currentCmsDeviceView&&"hidden"===this.section.mobileBehavior},isSideBarType:function(){return"sidebar"===this.section.type},sideBarEmpty:function(){return 0===this.sideBarBlocks.length},blockCount:function(){return this.section.blocks.length},mainContentEmpty:function(){return 0===this.mainContentBlocks.length},sideBarBlocks:function(){var e=this,n=this.section.blocks.filter((function(n){return e.blockTypeExists(n.type)&&"sidebar"===n.sectionPosition}));return n.sort((function(e,n){return e.position-n.position}))},mainContentBlocks:function(){var e=this,n=this.section.blocks.filter((function(n){return e.blockTypeExists(n.type)&&"sidebar"!==n.sectionPosition}));return n.sort((function(e,n){return e.position-n.position}))},assetFilter:function(){return r.getByName("asset")},blockTypes:function(){return Object.keys(this.cmsService.getCmsBlockRegistry())},isVisible:function(){var e=Shopware.State.get("cmsPageState").currentCmsDeviceView;return"desktop"===e&&!this.section.visibility.desktop||"tablet-landscape"===e&&!this.section.visibility.tablet||"mobile"===e&&!this.section.visibility.mobile},toggleButtonText:function(){return this.$tc("sw-cms.sidebar.contentMenu.visibilitySectionTextButton",!this.isCollapsed)},expandedClass:function(){return{"is--expanded":this.isVisible&&!this.isCollapsed}},sectionContentClasses:function(){return{"is--empty":this.mainContentEmpty,"is--expanded":this.isVisible&&!this.isCollapsed}}},d("page",["slots","slotConfig"])),created:function(){this.createdComponent()},methods:{createdComponent:function(){this.section.backgroundMediaMode||(this.section.backgroundMediaMode="cover")},openBlockBar:function(){this.disabled||this.$emit("page-config-open","blocks")},onAddSectionBlock:function(){this.openBlockBar()},onBlockSelection:function(e){Shopware.State.dispatch("cmsPageState/setBlock",e),this.$emit("page-config-open","itemConfig")},onBlockDuplicate:function(e,n){this.$emit("block-duplicate",e,n)},onBlockDelete:function(e){this.section.blocks.remove(e),this.selectedBlock&&this.selectedBlock.id===e&&Shopware.State.commit("cmsPageState/removeSelectedBlock"),this.updateBlockPositions()},updateBlockPositions:function(){this.section.blocks.forEach((function(e,n){e.position=n}))},getDropData:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main";return{dropIndex:e,section:this.section,sectionPosition:n}},blockTypeExists:function(e){return this.blockTypes.includes(e)},hasBlockErrors:function(e){return[this.hasUniqueBlockErrors(e),this.hasSlotConfigErrors(e)].some((function(e){return!!e}))},hasUniqueBlockErrors:function(e){var n,t,s=null===(n=this.pageSlotsError)||void 0===n||null===(t=n.parameters)||void 0===t?void 0:t.elements;return!!s&&s.some((function(n){return n.blockIds.includes(e.id)}))},hasSlotConfigErrors:function(e){var n,t,s=null===(n=this.pageSlotConfigError)||void 0===n||null===(t=n.parameters)||void 0===t?void 0:t.elements;return!!s&&s.some((function(n){return n.blockId===e.id}))},toggleVisibility:function(){this.isCollapsed=!this.isCollapsed}}}},Zjbs:function(e,n,t){},o3QE:function(e,n,t){var s=t("Zjbs");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("P8hj").default)("60c9a3aa",s,!0,{})}}]);