(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/collectionview_demo'
		],
		function( CollectionviewDemo ) {

			describe('CollectionviewDemo Collectionview', function () {

				it('should be an instance of CollectionviewDemo Collectionview', function () {
					var collectionview_demo = new CollectionviewDemo();
					expect( collectionview_demo ).to.be.an.instanceof( CollectionviewDemo );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );