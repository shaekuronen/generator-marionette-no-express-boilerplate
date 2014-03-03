define([
	'backbone',
	'hbs!tmpl/layout/layout_demo_tmpl'
],
function( Backbone, LayoutDemoTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a LayoutDemo Layout");
		},
		
    	template: LayoutDemoTmpl,
    	

    	/* Layout sub regions */
    	regions: {},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
