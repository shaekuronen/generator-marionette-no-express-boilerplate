define([
	'backbone',
	'models/model_demo'
],
function( Backbone, ModelDemo ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a CollectionDemoLinked collection");
		},

		model: ModelDemo
		
	});
});
