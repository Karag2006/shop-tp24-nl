(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[246],{"3+Bs":function(n,i,a){},g9zG:function(n,i,a){"use strict";a.r(i);a("jdmg"),i.default={template:'\n{% block sw_first_run_wizard_paypal_info %}\n<div class="sw-first-run-wizard-paypal">\n    <div\n        v-if="!isInstallingPlugin"\n        class="sw-first-run-wizard-paypal-info"\n    >\n        <img\n            class="sw-first-run-wizard-paypal-info__icon"\n            :src="\'/administration/static/img/paypal-official-logo.svg\' | asset"\n            alt=""\n        >\n\n        <h3 class="headline">\n            {{ $tc(\'sw-first-run-wizard.paypalInfo.headline\') }}\n        </h3>\n\n        <sw-container\n            columns="1fr 1fr 1fr 1fr"\n            class="paymethods"\n        >\n            <div class="paymethod">\n                <sw-icon\n                    name="regular-check-circle"\n                    size="12px"\n                />\n                <span>{{ $tc(\'sw-first-run-wizard.paypalInfo.paymethod.paypal\') }}</span>\n            </div>\n            <div class="paymethod">\n                <sw-icon\n                    name="regular-check-circle"\n                    size="12px"\n                />\n                <span>{{ $tc(\'sw-first-run-wizard.paypalInfo.paymethod.debit\') }}</span>\n            </div>\n            <div class="paymethod">\n                <sw-icon\n                    name="regular-check-circle"\n                    size="12px"\n                />\n                <span>{{ $tc(\'sw-first-run-wizard.paypalInfo.paymethod.creditcard\') }}</span>\n            </div>\n            <div class="paymethod">\n                <sw-icon\n                    name="regular-check-circle"\n                    size="12px"\n                />\n                <span>{{ $tc(\'sw-first-run-wizard.paypalInfo.paymethod.invoice\') }}**</span>\n            </div>\n        </sw-container>\n        <div\n            v-if="pluginInstallationFailed"\n            class="sw-first-run-wizard-paypal__error"\n        >\n            <sw-alert\n                :title="pluginError.title"\n                variant="error"\n                appearance="notification"\n            >\n                {{ pluginError.detail }}\n            </sw-alert>\n        </div>\n        <div class="disclaimer">\n            <p>{{ $tc(\'sw-first-run-wizard.paypalInfo.disclaimerLineOne\') }}</p>\n            <p>{{ $tc(\'sw-first-run-wizard.paypalInfo.disclaimerLineTwo\') }}</p>\n        </div>\n    </div>\n    <div\n        v-else\n        class="sw-first-run-wizard-paypal-install"\n    >\n        <sw-loader size="48px" />\n        <p\n            class="sw-loader-info-text"\n            v-html="$tc(\'sw-first-run-wizard.paypalInstall.loadingMessage\')"\n        ></p>\n    </div>\n</div>\n{% endblock %}\n',inject:["extensionStoreActionService"],data:function(){return{isInstallingPlugin:!1,pluginInstallationFailed:!1,pluginError:null,pluginName:"SwagPayPal",installPromise:Promise.resolve()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.updateButtons(),this.setTitle(),this.installPromise=this.installPayPal()},setTitle:function(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.paypalInfo.modalTitle"))},updateButtons:function(){var n=[{key:"back",label:this.$tc("sw-first-run-wizard.general.buttonBack"),position:"left",variant:null,action:"sw.first.run.wizard.index.mailer.selection",disabled:!1},{key:"skip",label:this.$tc("sw-first-run-wizard.general.buttonSkip"),position:"right",variant:null,action:"sw.first.run.wizard.index.plugins",disabled:!1},{key:"configure",label:this.$tc("sw-first-run-wizard.general.buttonNextPayPalInfo"),position:"right",variant:"primary",action:this.activatePayPalAndRedirect.bind(this),disabled:!1}];this.$emit("buttons-update",n)},installPayPal:function(){var n=this;return this.extensionStoreActionService.downloadExtension(this.pluginName).then((function(){return n.extensionStoreActionService.installExtension(n.pluginName,"plugin")}))},activatePayPalAndRedirect:function(){var n=this;this.isInstallingPlugin=!0,this.installPromise.then((function(){return n.extensionStoreActionService.activateExtension(n.pluginName,"plugin")})).then((function(){var n=document.location,i=n.origin,a=n.pathname,t="".concat(i).concat(a,"/#/sw/first/run/wizard/index/paypal/credentials");return document.location.href=t,Promise.resolve(!0)})).catch((function(i){var a,t;return n.isInstallingPlugin=!1,n.pluginInstallationFailed=!0,null!==(a=i.response)&&void 0!==a&&null!==(t=a.data)&&void 0!==t&&t.errors&&(n.pluginError=i.response.data.errors.pop()),!0}))}}}},jdmg:function(n,i,a){var t=a("3+Bs");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,a("P8hj").default)("0f164bc3",t,!0,{})}}]);