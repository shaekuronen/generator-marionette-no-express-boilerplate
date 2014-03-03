define([
	'backbone',
	'hbs!tmpl/item/itemview_demo_tmpl'
],
function( Backbone, ItemviewDemoTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a ItemviewDemo ItemView");
		},
		
    	template: ItemviewDemoTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
