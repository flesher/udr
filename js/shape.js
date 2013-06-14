(function(jQuery){
	var _self = this;

	_self.shape = function(id ,x, y, scale, heading, subheading, copy, map){
		var expose = {};
		var nan = isNaN(heading);
		var num;
		
		expose.properties = {
			id      : id,
			x       : x,
			y       : y,
			scale   : scale * windowH/7.5,
			heading : heading,
			subheading : subheading,
			copy    : copy,
			map 		: map
		}

		
		expose.init = function(){

			if (!nan){
				num = 0;
			} else if (nan){
				num = expose.properties.heading;
			}

			_create();
		}

		expose.update = function(){
			

			if(num < expose.properties.heading && !nan){
				num += 1;
			} else if(num >= expose.properties.heading && !nan ) {
				num = expose.properties.heading;
			}
			_create();
		}

		function _create(){
      var radius = expose.properties.scale;

      var el = document.createElement('div');
      el.id  = expose.properties.id;
      $(el).addClass('item');
      $(el).css({
      	'width'         : radius * 1.75,
      	'height'        : radius * 1.75,
      	'top'						: expose.properties.y - radius,
      	'left'          : expose.properties.x - radius
      });
      var cult = document.getElementById('culture');
			cult.insertBefore(el, cult.firstChild);

			var el2       = document.createElement('h1');
			el2.innerHTML = num;
      el2.id        = "item-" + expose.properties.id + "-prim";
      $(el2).addClass('item-heading');      
			el.insertBefore(el2, el.firstChild);

			var el2p2       = document.createElement('h2');
			el2p2.innerHTML = expose.properties.subheading;
      el2p2.id        = "item-" + expose.properties.id + "-sub";
      $(el2p2).addClass('item-subheading');      
			el.insertBefore(el2p2, el.firstChild);

			var el3       = document.createElement('p');
			el3.innerHTML = expose.properties.copy;
      el3.id        = "item-" + expose.properties.id + "-copy";
      $(el3).addClass('item-copy');      
			el.insertBefore(el3, el.firstChild);

			var el4       = document.createElement('img');
			el4.src       = expose.properties.map;
      el4.id        = "item-" + expose.properties.id + "-map";
      $(el4).addClass('item-map');      
			el.insertBefore(el4, el.firstChild);

			var num = 0;
			var nan = isNaN(expose.properties.heading);

			var Int = setInterval(function(){
				if(num < expose.properties.heading && !nan) {
					num += 1;
					el2.innerHTML = num;
				} else if (num >= expose.properties.heading || nan) {
					num = expose.properties.heading;
					el2.innerHTML = num;
					clearInterval(Int);
				}
			}, 24);

			$('.item').click(function(){
				console.log('boom');
				$('.item').hide();
				$(this).show();
				$(this).css({
					'left'   : 2 * windowW / 5 - radius,
					'top'    : windowH / 5 - radius
				});
				$('#close').fadeIn(100);
				setTimeout(function(){
					$('.item-subheading').fadeIn(500);
					$('.item-copy').fadeIn(500);
					$('.item-map').fadeIn(500);
				}, 1000);
					
			});

			$('#close').click(function(e){
				$('.item').fadeIn();
				$(el).css({
	      	'top'						: expose.properties.y - radius,
	      	'left'          : expose.properties.x - radius
	      });
	      $(el2p2).fadeOut(100);
	      $(el3).fadeOut(100);
	      $(el4).fadeOut(100);
	      $(this).fadeOut(100);

				
			});

		}

		expose.init();
		return expose;
	}
})();
