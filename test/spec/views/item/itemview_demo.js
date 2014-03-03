(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/itemview_demo'
		],
		function( ItemviewDemo ) {

			describe('ItemviewDemo Itemview', function () {

				it('should be an instance of ItemviewDemo Itemview', function () {
					var itemview_demo = new ItemviewDemo();
					expect( itemview_demo ).to.be.an.instanceof( ItemviewDemo );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );