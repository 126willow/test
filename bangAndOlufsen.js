$(function() {
			$(".index_top_banner_next").on("click", function() {
				$(".index_top_banner .index_top_banner_list").animate({
					"left": "-=1920px"
				}, 860);

				var dotIndex = $(".index_top_banner_dots").index($(".dots_on"));
				var dotNextIndex = dotIndex + 1;

				$(".index_top_banner_dots").eq(dotIndex).removeClass("dots_on");
				$(".index_top_banner_dots").eq(dotNextIndex).addClass("dots_on");
				console.log("dotIndex", dotIndex);
				console.log("dotNextIndex", dotNextIndex);

				if (dotIndex == 0) {
					$(".index_top_banner_prev").fadeIn();
				} else if (dotIndex == 3) {
					$(".index_top_banner_next").fadeOut();
				}
			})

			$(".index_top_banner_prev").on("click", function() {
				$(".index_top_banner .index_top_banner_list").animate({
					"left": "+=1920px"
				}, 860);

				var dotIndex = $(".index_top_banner_dots").index($(".dots_on"));
				var dotNextIndex = dotIndex - 1;
				console.log("dotIndex", dotIndex);
				console.log("dotNextIndex", dotNextIndex);

				$(".index_top_banner_dots").eq(dotIndex).removeClass("dots_on");
				$(".index_top_banner_dots").eq(dotNextIndex).addClass("dots_on");

				if (dotIndex == 4) {
					$(".index_top_banner_next").fadeIn();
				}
				else if(dotIndex == 1){
					$(".index_top_banner_prev").fadeOut();
				}
			})
		})