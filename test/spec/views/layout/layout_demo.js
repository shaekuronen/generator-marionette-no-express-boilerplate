(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/layout_demo'
		],
		function( LayoutDemo ) {

			describe('LayoutDemo Layout', function () {

				it('should be an instance of LayoutDemo Layout', function () {
					var layout_demo = new LayoutDemo();
					expect( layout_demo ).to.be.an.instanceof( LayoutDemo );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );