(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/collection_demo_linked'
		],
		function( CollectionDemoLinked ) {

			describe('CollectionDemoLinked Collection', function () {

				it('should be an instance of CollectionDemoLinked Collection', function () {
					var collection_demo_linked = new CollectionDemoLinked();
					expect( collection_demo_linked ).to.be.an.instanceof( CollectionDemoLinked );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );