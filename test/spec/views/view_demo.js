(function() {
	'use strict';

	var root = this;

	root.define([
		'views/view_demo'
		],
		function( ViewDemo ) {

			describe('ViewDemo View', function () {

				it('should be an instance of ViewDemo View', function () {
					var view_demo = new ViewDemo();
					expect( view_demo ).to.be.an.instanceof( ViewDemo );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );