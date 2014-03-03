(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/router_demo'
		],
		function( RouterDemo ) {

			describe('RouterDemo Router', function () {

				it('should be an instance of RouterDemo Router', function () {
					var router_demo = new RouterDemo();
					expect( router_demo ).to.be.an.instanceof( RouterDemo );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );