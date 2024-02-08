(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[399],{ZNQd:function(e,n,t){"use strict";t.r(n);var i=t("CsSd"),s=t.n(i);t("emuW");function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var r=Shopware.Data.Criteria;n.default={template:'\n{% block sw_review_detail %}\n<sw-page class="sw-review-detail">\n\n    \n    {% block sw_review_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(review, \'title\', $tc(\'sw-review.detail.textHeadline\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_review_detail_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_review_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_review_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-review-detail__save-action"\n            variant="primary"\n            :disabled="isLoading || !acl.can(\'review.editor\')"\n            :process-success="isSaveSuccessful"\n            {% if VUE3 %}\n            @update:process-success="onSaveFinish"\n            {% else %}\n            @process-finish="onSaveFinish"\n            {% endif %}\n            @click="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_review_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton variant="detail-bold" />\n            </template>\n\n            <template v-else>\n\n                \n                {% block sw_review_detail_basic_info_card %}\n                <sw-card\n                    v-if="review"\n                    position-identifier="sw-review-detail-basic-info"\n                    :title="$tc(\'sw-review.detail.cardTitleReviewInfo\')"\n                >\n\n                    \n                    {% block sw_customer_card_rows %}\n                    <template #grid>\n                        <sw-container rows="auto auto">\n\n                            \n                            {% block sw_customer_card_row_primary %}\n                            <sw-card-section divider="bottom">\n\n                                \n                                {% block sw_customer_card_metadata_container %}\n                                <sw-container>\n\n                                    \n                                    {% block sw_customer_card_metadata %}\n                                    <div class="sw-review-detail__metadata">\n\n                                        \n                                        {% block sw_customer_card_metadata_customer_name %}\n                                        \n                                        {% block sw_custsomer_card_metadata_customer_name_label %}\n                                        <div class="sw-review-detail__metadata-review-headline">\n                                            <sw-container\n                                                columns="auto 150px"\n                                                gap="0px 15px"\n                                            >\n                                                <div class="sw-review-detail__metadata-review-title">\n                                                    {{ review.title }}\n                                                </div>\n                                                <div\n                                                    v-if="stars"\n                                                    class="sw-review-detail__metadata-review-stars"\n                                                >\n                                                    <sw-rating-stars\n                                                        v-model="review.points"\n                                                        class="star-count-display"\n                                                    />\n                                                    <div class="star-count-description">\n                                                        {{ $tc(`sw-review.detail.review${Math.round(stars)}PointRatingText`) }}\n                                                    </div>\n                                                </div>\n                                            </sw-container>\n                                        </div>\n                                        <p class="sw-review-detail__metadata-review-content">\n                                            {{ review.content }}\n                                        </p>\n                                        {% endblock %}\n                                        {% endblock %}\n                                    </div>\n                                    {% endblock %}\n                                </sw-container>\n                                {% endblock %}\n                            </sw-card-section>\n                            {% endblock %}\n\n                            \n                            {% block sw_customer_card_row_secondary %}\n                            <sw-card-section\n                                secondary\n                                slim\n                            >\n                                <slot name="default">\n\n                                    <sw-container\n                                        class="sw-review-base-info"\n                                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                                        gap="0px 15px"\n                                    >\n                                        <div class="sw-review-base-info-columns">\n\n                                            \n                                            {% block sw_customer_base_metadata_created_at %}\n                                            <sw-description-list>\n\n                                                \n                                                {% block sw_customer_base_metadata_created_at_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelCreatedAt\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_created_at_content %}\n                                                <dd>\n                                                    {{ review.createdAt | date({hour: \'2-digit\', minute: \'2-digit\', second: \'2-digit\'}) }}\n                                                </dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n\n                                            \n                                            {% block sw_customer_base_metadata_sales_channel %}\n                                            <sw-description-list>\n\n                                                \n                                                {% block sw_customer_base_metadata_sales_channel_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelSalesChannel\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_sales_channel_content %}\n                                                <dd>\n                                                    {{ review.salesChannel.name }}\n                                                </dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n\n                                            \n                                            {% block sw_customer_base_metadata_product %}\n                                            <sw-description-list>\n\n                                                \n                                                {% block sw_customer_base_metadata_product_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelProduct\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_product_content %}\n                                                <dd>{{ review.product.translated.name }}</dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n                                        </div>\n                                        <div class="sw-review-base-info-columns">\n\n                                            \n                                            {% block sw_customer_base_metadata_customer %}\n                                            <sw-description-list>\n\n                                                \n                                                {% block sw_customer_base_metadata_customer_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelCustomer\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_customer_content %}\n                                                <dd v-if="review.customer">\n                                                    {{ salutation(review.customer) }}\n                                                </dd>\n                                                <dd v-else>\n                                                    {{ review.externalUser }}\n                                                </dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n\n                                            \n                                            {% block sw_customer_base_metadata_email %}\n                                            <sw-description-list>\n                                                \n                                                {% block sw_customer_base_metadata_email_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelEmail\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_email_content %}\n                                                <dd v-if="review.customer">\n                                                    {{ review.customer.email }}\n                                                </dd>\n                                                <dd v-else>\n                                                    {{ review.externalEmail }}\n                                                </dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n                                        </div>\n                                    </sw-container>\n                                </slot>\n                            </sw-card-section>\n                            {% endblock %}\n                        </sw-container>\n                    </template>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                <sw-card\n                    v-if="review"\n                    position-identifier="sw-review-detail-properties"\n                    class="sw-review-properties"\n                    :title="$tc(\'sw-review.detail.cardTitleReviewProperties\')"\n                >\n\n                    \n                    {% block sw_review_detail_basic_info_card_description_list %}\n                    <sw-container\n                        columns="1fr 1fr"\n                        gap="16px"\n                    >\n\n                        \n                        {% block sw_review_detail_description_list_language %}\n                        <sw-entity-single-select\n                            id="language"\n                            {% if VUE3 %}\n                            v-model:value="review.languageId"\n                            {% else %}\n                            v-model="review.languageId"\n                            {% endif %}\n                            entity="language"\n                            class="sw-review__language-select"\n                            required\n                            show-clearable-button\n                            :disabled="!acl.can(\'review.editor\')"\n                            :label="$tc(\'sw-review.detail.labelLanguage\')"\n                            :criteria="languageCriteria"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_review_detail_description_list_status %}\n                        <sw-switch-field\n                            {% if VUE3 %}\n                            v-model:value="review.status"\n                            {% else %}\n                            v-model="review.status"\n                            {% endif %}\n                            class="status-switch"\n                            :disabled="!acl.can(\'review.editor\')"\n                            :label="$tc(\'sw-review.detail.labelStatus\')"\n                            bordered\n                        />\n                        {% endblock %}\n                    </sw-container>\n                    {% endblock %}\n                </sw-card>\n\n                <sw-card\n                    v-if="review"\n                    position-identifier="sw-review-detail-comment"\n                    :title="$tc(\'sw-review.detail.labelComment\')"\n                >\n\n                    \n                    {% block sw_review_detail_basic_info_card_comment %}\n                    <sw-textarea-field\n                        {% if VUE3 %}\n                        v-model:value="review.comment"\n                        {% else %}\n                        v-model="review.comment"\n                        {% endif %}\n                        class="sw-review__comment-field"\n                        :disabled="!acl.can(\'review.editor\')"\n                        :label="$tc(\'sw-review.detail.titleCardComment\')"\n                        :placeholder="$tc(\'sw-review.detail.placeholderComment\')"\n                    />\n                    {% endblock %}\n                </sw-card>\n\n                \n                {% block sw_review_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-review-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="review"\n                        :disabled="!acl.can(\'review.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","customFieldDataProviderService"],mixins:["placeholder","notification","salutation"],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.acl.can("review.editor")},method:"onSave"},ESCAPE:"onCancel"},data:function(){return{isLoading:null,isSaveSuccessful:!1,reviewId:null,review:{},customFieldSets:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{identifier:function(){return this.review.title},repository:function(){return this.repositoryFactory.create("product_review")},stars:function(){return this.review.points>=0?this.review.points:0},languageCriteria:function(){var e=new r(1,25);return e.addSorting(r.sort("name","ASC",!1)),e},tooltipSave:function(){if(!this.acl.can("review.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:!0,showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},showCustomFields:function(){return this.review&&this.customFieldSets&&this.customFieldSets.length>0}},watch:{"$route.params.id":function(){this.createdComponent()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){Shopware.ExtensionAPI.publishData({id:"sw-review-detail__review",path:"review",scope:this}),this.$route.params.id&&(this.reviewId=this.$route.params.id,this.loadEntityData(),this.loadCustomFieldSets())},loadEntityData:function(){var e=this;this.isLoading=!0;var n=new r(1,25);n.addAssociation("customer"),n.addAssociation("salesChannel"),n.addAssociation("product");var t=o(o({},Shopware.Context.api),{},{inheritance:!0});this.repository.get(this.reviewId,t,n).then((function(n){e.review=n,e.isLoading=!1}))},loadCustomFieldSets:function(){var e=this;this.customFieldDataProviderService.getCustomFieldSets("product_review").then((function(n){e.customFieldSets=n}))},onSave:function(){var e=this;this.isSaveSuccessful=!1;var n=this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid");this.repository.save(this.review).then((function(){e.isSaveSuccessful=!0})).catch((function(){e.createNotificationError({message:n})}))},onSaveFinish:function(){this.loadEntityData(),this.isSaveSuccessful=!1},onCancel:function(){this.$router.push({name:"sw.review.index"})}}}},emuW:function(e,n,t){var i=t("onq9");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("P8hj").default)("23688740",i,!0,{})},onq9:function(e,n,t){}}]);