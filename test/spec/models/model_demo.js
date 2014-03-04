(function() {
	'use strict';

	var root = this;

	root.define([
		'models/model_demo'
		],
		function( ModelDemo ) {

			describe('ModelDemo Model', function () {

				it('should be an instance of ModelDemo Model', function () {
					var model_demo = new ModelDemo();
					expect( model_demo ).to.be.an.instanceof( ModelDemo );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );