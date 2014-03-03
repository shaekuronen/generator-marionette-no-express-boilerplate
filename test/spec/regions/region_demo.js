(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/region_demo'
		],
		function( RegionDemo ) {

			describe('RegionDemo Region', function () {

				it('should be an instance of RegionDemo Region', function () {
					var region_demo = new RegionDemo();
					expect( region_demo ).to.be.an.instanceof( RegionDemo );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );