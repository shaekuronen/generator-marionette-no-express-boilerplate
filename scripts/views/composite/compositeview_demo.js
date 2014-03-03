define([
	'backbone',
	'views/item/itemview_demo',
	'hbs!tmpl/composite/compositeview_demo_tmpl'
],
function( Backbone, ItemviewDemo, CompositeviewDemoTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a CompositeviewDemo CompositeView");
		},
		
    	itemView: ItemviewDemo,
    	
    	template: CompositeviewDemoTmpl,
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: "",

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
