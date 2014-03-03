(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/compositeview_demo'
		],
		function( CompositeviewDemo ) {

			describe('CompositeviewDemo Compositeview', function () {

				it('should be an instance of CompositeviewDemo Compositeview', function () {
					var compositeview_demo = new CompositeviewDemo();
					expect( compositeview_demo ).to.be.an.instanceof( CompositeviewDemo );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );