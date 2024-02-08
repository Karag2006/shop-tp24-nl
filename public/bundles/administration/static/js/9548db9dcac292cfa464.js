(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[359],{"0MwU":function(e,o,t){var n=t("UxxN");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("P8hj").default)("7108ceae",n,!0,{})},"5IJb":function(e,o,t){"use strict";t.r(o);var n=t("7yzw"),r=t.n(n),i=t("CsSd"),d=t.n(i),a=t("92Mt"),s=t.n(a);t("0MwU");function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){d()(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}var l=Shopware,p=l.Component,f=l.Mixin,w=Shopware.Utils.format,m=p.getComponentHelper().mapGetters;o.default={template:'<div\n    class="sw-product-download-form"\n    :class="{ \'is--disabled\': disabled }"\n>\n    <sw-upload-listener\n        v-if="!isLoading"\n        :upload-tag="`downloads-${product.id}`"\n        auto-upload\n        @media-upload-finish="successfulUpload"\n        @media-upload-fail="onUploadFailed"\n    />\n\n    <sw-media-upload-v2\n        v-if="!isLoading && acl.can(\'product.editor\')"\n        :class="swFieldClasses"\n        variant="regular"\n        :upload-tag="`downloads-${product.id}`"\n        :scroll-target="$parent.$el"\n        :private-filesystem="true"\n        :extension-accept="fileAccept"\n        default-folder="product_download"\n        v-bind="$attrs"\n    />\n\n    <sw-field-error :error="error" />\n\n    <div\n        v-if="!isLoading"\n        class="sw-product-download-form__previews sw-product-download-form__grid"\n    >\n        <div\n            v-for="download in productDownloads"\n            :key="download.id"\n            class="sw-product-download-form__row"\n        >\n            <span\n                v-tooltip="{\n                    message: getFileName(download),\n                    disabled: false,\n                    width: \'auto\'\n                }"\n                class="sw-product-download-form-row__name"\n            >\n                {{ getFileName(download) }}\n            </span>\n\n            <div class="sw-product-download-form-row__info">\n                <span class="sw-product-download-form-row__mime">\n                    {{ download.media.mimeType }}\n                </span>\n\n                <span class="sw-product-download-form-row__size">\n                    {{ getFileSize(download) }}\n                </span>\n\n                <span class="sw-product-download-form-row__changed-date">\n                    {{ createdAt(download) }}\n                </span>\n            </div>\n\n            <sw-context-button class="sw-product-download-form-row__context">\n                <sw-context-menu-item\n                    class="sw-product-download-form-row__context-remove"\n                    variant="danger"\n                    :disabled="isLoading || !acl.can(\'product.editor\')"\n                    @click="onRemoveDownload(download)"\n                >\n                    {{ $tc(\'global.default.remove\') }}\n                </sw-context-menu-item>\n            </sw-context-button>\n\n        </div>\n    </div>\n    <sw-loader v-else />\n</div>\n',inject:["repositoryFactory","acl","configService"],mixins:[f.getByName("notification")],props:{disabled:{type:Boolean,required:!1,default:!1},isInherited:{type:Boolean,required:!1,default:!1}},data:function(){return{isMediaLoading:!1,fileAcceptedExtensions:[]}},computed:u(u(u({},m("error",["getApiError"])),{},{product:function(){var e=Shopware.State.get("swProductDetail");return this.isInherited?e.parentProduct:e.product}},m("swProductDetail",{isStoreLoading:"isLoading"})),{},{isLoading:function(){return this.isMediaLoading||this.isStoreLoading},productDownloadRepository:function(){return this.repositoryFactory.create("product_download")},productDownloads:function(){return this.product?this.product.downloads:[]},mediaRepository:function(){return this.repositoryFactory.create("media")},error:function(){return this.getApiError(this.product,"downloads")},hasError:function(){return!!this.error},swFieldClasses:function(){return{"has--error":this.hasError}},fileAccept:function(){return this.fileAcceptedExtensions.join(", ")}}),created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;return r()(s.a.mark((function o(){return s.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e.configService.getConfig().then((function(o){e.fileAcceptedExtensions=o.settings.private_allowed_extensions}));case 1:case"end":return o.stop()}}),o)})))()},onOpenMedia:function(){this.$emit("media-open")},getFileSize:function(e){return w.fileSize(e.media.fileSize)},getFileName:function(e){return e.media.fileExtension?"".concat(e.media.fileName,".").concat(e.media.fileExtension):e.media.fileName},createdAt:function(e){var o=e.media.uploadedAt||e.media.createdAt;return w.date(o,{month:"numeric"})},onRemoveDownload:function(e){this.product.downloads.remove(e.id)},successfulUpload:function(e){var o=this;return r()(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.targetId,!o.product.downloads.find((function(e){return e.mediaId===n}))){t.next=3;break}return t.abrupt("return");case 3:return r=o.createDownloadAssociation(n),t.next=6,o.mediaRepository.get(n);case 6:r.media=t.sent,o.product.downloads.add(r),o.error&&Shopware.State.dispatch("error/removeApiError",{expression:o.error.selfLink});case 9:case"end":return t.stop()}}),t)})))()},createDownloadAssociation:function(e){var o=this.productDownloadRepository.create();return o.productId=this.product.id,o.mediaId=e,o.position=this.product.downloads.length,o},onUploadFailed:function(e){var o=this.product.media.find((function(o){return o.mediaId===e.targetId}));o&&(this.product.coverId===o.id&&(this.product.coverId=null),this.product.media.remove(o.id)),this.product.isLoading=!1},removeFile:function(e){this.product.coverId===e.id&&(this.product.cover=null,this.product.coverId=null),null===this.product.coverId&&this.product.media.length>0&&(this.product.coverId=this.product.media.first().id),this.product.media.remove(e.id)},updateMediaItemPositions:function(){this.productMedia.forEach((function(e,o){e.position=o}))}}}},UxxN:function(e,o,t){}}]);