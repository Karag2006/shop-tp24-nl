(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[575],{"3i4f":function(e,t,r){"use strict";r.r(t);var n=Shopware.State;t.default={template:'\n{% block sw_order_create_create_initial %}\n<div class="sw-order-create-initial">\n    <sw-order-create-initial-modal\n        @modal-close="onCloseCreateModal"\n        @order-preview="onPreviewOrder"\n    />\n</div>\n{% endblock %}\n',created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this.$route.params.customer;e&&n.commit("swOrder/setCustomer",e)},onCloseCreateModal:function(){var e=this;this.$nextTick((function(){e.$router.push({name:"sw.order.index"})}))},onPreviewOrder:function(){var e=this;this.$nextTick((function(){e.$router.push({name:"sw.order.create.general"})}))}}}}}]);