define([
	'backbone',
	'views/item/itemview_demo'
],
function( Backbone, ItemviewDemo  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a CollectionviewDemo CollectionView");
		},
		
    	itemView: ItemviewDemo,
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
