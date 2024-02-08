(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[410],{"4jZf":function(n,e,o){"use strict";o.r(e);o("9TFh"),e.default={template:'\n{% block sw_sales_channel_detail_product_comparison_preview %}\n<div class="sw-sales-channel-detail-product-comparison-preview">\n\n    \n    {% block sw_sales_channel_detail_product_comparison_preview_modal %}\n    <sw-modal\n        v-if="content"\n        variant="large"\n        :title="$tc(\'sw-sales-channel.detail.titleProductComparisonPreview\')"\n        @modal-close="onModalClose"\n    >\n\n        \n        {% block sw_sales_channel_detail_product_comparison_preview_modal_errors %}\n        <div v-if="displayErrors">\n            <h3>{{ $tc(\'sw-sales-channel.detail.titleProductComparisonPreviewErrors\') }}</h3>\n            <div class="sw-sales-channel-detail-product-comparison-preview__scrollable-container">\n                <p\n                    v-for="error in errors"\n                    :key="error.message"\n                >\n                    \n                    <a\n                        href="#"\n                        @click.prevent="navigateToLine(error.line)"\n                    >\n                        <sw-icon\n                            name="regular-times-hexagon"\n                            color="#c0392b"\n                            small\n                        />\n                    </a>\n                    {{ error.message }}\n                </p>\n            </div>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_detail_product_comparison_preview_modal_content %}\n        <sw-code-editor\n            ref="previewEditor"\n            mode="text"\n            :editor-config="editorConfig"\n            :soft-wraps="true"\n            :set-focus="false"\n            :value="content"\n        />\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{content:{type:String,required:!1,default:null},errors:{type:Array,required:!1,default:function(){return[]}}},computed:{editorConfig:function(){return{readOnly:!0}},displayErrors:function(){return this.errors.length>0}},methods:{onModalClose:function(){this.content=null,this.errors=null,this.$emit("close")},navigateToLine:function(n){n&&(this.$refs.previewEditor.editor.scrollToLine(n,!0,!0,(function(){})),this.$refs.previewEditor.editor.gotoLine(n,0,!0))}}}},"9TFh":function(n,e,o){var r=o("YwTb");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,o("P8hj").default)("d481b2d2",r,!0,{})},YwTb:function(n,e,o){}}]);