// 纪录图片
var imgData = {
	items: {
		logo: {
			src: 'logo.png', // 图片路径
		},
		background: {
			src: 'bg_activity.png',
		},
		btn_close: {
			src: 'btn_active_close.png',
		},
		btn_scale: {
			src: 'btn_active_scale.png',
		},
		btn_save: {
			src: 'btn_save.png',
		},
		btn_activity: {
			src: 'btn_activity.png',
		},
		nav_btn: {
			src: 'nav_btn.png',
		},
		head: {
			src: 'head.png',
		},
		code: {
			src: 'code.png',
		},
		nav_item01: {
			src: 'nav_icon01.png',
			type: 'nav',
			items: {
				id: 10,
				src: '',
				items: [
					{id: 1001, src: 'works/works01_01.png'},
					{id: 1002, src: 'works/works01_02.png'},
					{id: 1003, src: 'works/works01_03.png'},
					{id: 1004, src: 'works/works01_04.png'},
					{id: 1005, src: 'works/works01_05.png'},
					{id: 1006, src: 'works/works01_06.png'},
					{id: 1007, src: 'works/works01_07.png'},
					{id: 1008, src: 'works/works01_08.png'},
					{id: 1009, src: 'works/works01_09.png'},
					{id: 1010, src: 'works/works01_10.png'},
					{id: 1011, src: 'works/works01_11.png'},
					{id: 1012, src: 'works/works01_12.png'},
					{id: 1013, src: 'works/works01_13.png'},
					{id: 1014, src: 'works/works01_14.png'},
					{id: 1015, src: 'works/works01_15.png'},
					{id: 1016, src: 'works/works01_16.png'},
					{id: 1017, src: 'works/works01_17.png'},
					{id: 1018, src: 'works/works01_18.png'},
					{id: 1019, src: 'works/works01_19.png'}
				],
				load_type: false // 加载状态 true已加载 false未加载
			},
			load_type: false // 加载状态 true已加载 false未加载
		},
		nav_item02: {
			src: 'nav_icon02.png',
			type: 'nav',
			items: {
				marge_items: [
					{
						id: 201,
						items: [2001, 2113, '', 2301, 2409],
						result_items: []
					},
					{
						id: 202,
						items: [2001, 2101, '', 2302, 2410],
						result_items: []
					}
				],
				nav_items: {
					items: [
						{id: 20, src: 'sub_nav_icon01.png'},
						{id: 21, src: 'sub_nav_icon02.png'},
						{id: 22, src: 'sub_nav_icon03.png'},
						{id: 23, src: 'sub_nav_icon04.png'},
						{id: 24, src: 'sub_nav_icon05.png'}
					],
					load_type: false // 加载状态 true已加载 false未加载
				},
				items: [
					{id: 2001, src: 'works/works0201_01.png', source: 20, vx: 107, vy: 89},
					{id: 2002, src: 'works/works0201_02.png', source: 20, vx: 110, vy: 85},
					{id: 2003, src: 'works/works0201_03.png', source: 20, vx: 112, vy: 88},
					{id: 2004, src: 'works/works0201_04.png', source: 20, vx: 112, vy: 88},
					{id: 2005, src: 'works/works0201_05.png', source: 20, vx: 108, vy: 84},
					{id: 2006, src: 'works/works0201_06.png', source: 20, vx: 110, vy: 90},
					{id: 2007, src: 'works/works0201_07.png', source: 20, vx: 108, vy: 88},
					{id: 2008, src: 'works/works0201_08.png', source: 20, vx: 108, vy: 88},
					{id: 2009, src: 'works/works0201_09.png', source: 20, vx: 110, vy: 88},
					{id: 2010, src: 'works/works0201_10.png', source: 20, vx: 86, vy: 62},
					{id: 2011, src: 'works/works0201_11.png', source: 20, vx: 110, vy: 86},
					{id: 2012, src: 'works/works0201_12.png', source: 20, vx: 108, vy: 88},
					{id: 2013, src: 'works/works0201_13.png', source: 20, vx: 108, vy: 88},
					{id: 2014, src: 'works/works0201_14.png', source: 20, vx: 105, vy: 88},
					{id: 2015, src: 'works/works0201_15.png', source: 20, vx: 107, vy: 88},
					{id: 2016, src: 'works/works0201_16.png', source: 20, vx: 107, vy: 88},
					{id: 2017, src: 'works/works0201_17.png', source: 20, vx: 104, vy: 88},
					{id: 2018, src: 'works/works0201_18.png', source: 20, vx: 102, vy: 88},
					{id: 2019, src: 'works/works0201_19.png', source: 20, vx: 106, vy: 88},
					{id: 2020, src: 'works/works0201_20.png', source: 20, vx: 102, vy: 88},
					{id: 2021, src: 'works/works0201_21.png', source: 20, vx: 108, vy: 88},

					{id: 2101, src: 'works/works0212_01.png', source: 21, classId: 202, vx: 71, vy: 39},
					{id: 2102, src: 'works/works0212_02.png', source: 21, classId: 202, vx: 74, vy: 35},
					{id: 2103, src: 'works/works0212_03.png', source: 21, classId: 202, vx: 91, vy: 43},
					{id: 2104, src: 'works/works0212_04.png', source: 21, classId: 202, vx: 95, vy: 60},
					{id: 2105, src: 'works/works0212_05.png', source: 21, classId: 202, vx: 85, vy: 42},
					{id: 2106, src: 'works/works0212_06.png', source: 21, classId: 202, vx: 61, vy: 48},
					{id: 2107, src: 'works/works0212_07.png', source: 21, classId: 202, vx: 93, vy: 41},
					{id: 2108, src: 'works/works0212_08.png', source: 21, classId: 202, vx: 70, vy: 15},
					{id: 2109, src: 'works/works0212_09.png', source: 21, classId: 202, vx: 81, vy: 38},
					{id: 2110, src: 'works/works0212_10.png', source: 21, classId: 202, vx: 96, vy: 33},
					{id: 2111, src: 'works/works0212_11.png', source: 21, classId: 202, vx: 89, vy: 40},
					{id: 2112, src: 'works/works0212_12.png', source: 21, classId: 202, vx: 94, vy: 44},
					{id: 2113, src: 'works/works0222_01.png', source: 21, classId: 201, vx: 96, vy: 40},
					{id: 2114, src: 'works/works0222_02.png', source: 21, classId: 201, vx: 91, vy: 45},
					{id: 2115, src: 'works/works0222_03.png', source: 21, classId: 201, vx: 95, vy: 53},
					{id: 2116, src: 'works/works0222_04.png', source: 21, classId: 201, vx: 93, vy: 43},
					{id: 2117, src: 'works/works0222_05.png', source: 21, classId: 201, vx: 99, vy: 46},
					{id: 2118, src: 'works/works0222_06.png', source: 21, classId: 201, vx: 98, vy: 46},
					{id: 2119, src: 'works/works0222_07.png', source: 21, classId: 201, vx: 98, vy: 30},
					{id: 2120, src: 'works/works0222_08.png', source: 21, classId: 201, vx: 87, vy: 28},
					{id: 2121, src: 'works/works0222_09.png', source: 21, classId: 201, vx: 96, vy: 45},

					{id: 2201, src: 'works/works0203_01.png', source: 22, vx: 87, vy: 52},
					{id: 2202, src: 'works/works0203_02.png', source: 22, vx: 158, vy: 97},
					{id: 2203, src: 'works/works0203_03.png', source: 22, vx: 97, vy: 94},
					{id: 2204, src: 'works/works0203_04.png', source: 22, vx: 123, vy: 30},
					{id: 2205, src: 'works/works0203_05.png', source: 22, vx: 102, vy: 91},
					{id: 2206, src: 'works/works0203_06.png', source: 22, vx: 87, vy: 34},
					{id: 2207, src: 'works/works0203_07.png', source: 22, vx: 79, vy: 37},
					{id: 2208, src: 'works/works0203_08.png', source: 22, vx: 85, vy: 42},
					{id: 2209, src: 'works/works0203_09.png', source: 22, vx: 78, vy: 29},
					{id: 2210, src: 'works/works0203_10.png', source: 22, vx: 84, vy: 43},
					{id: 2211, src: 'works/works0203_11.png', source: 22, vx: 101, vy: 68},
					{id: 2212, src: 'works/works0203_12.png', source: 22, vx: 105, vy: 86},
					{id: 2213, src: 'works/works0203_13.png', source: 22, vx: 104, vy: 84},
					{id: 2214, src: 'works/works0203_14.png', source: 22, vx: 101, vy: 88},
					{id: 2215, src: 'works/works0203_15.png', source: 22, vx: 102, vy: 82},
					{id: 2216, src: 'works/works0203_16.png', source: 22, vx: 104, vy: 26},

					{id: 2301, src: 'works/works0204_01.png', source: 23, vx: 49, vy: 136},
					{id: 2302, src: 'works/works0204_02.png', source: 23, vx: 47, vy: 6},
					{id: 2303, src: 'works/works0204_03.png', source: 23, vx: 55, vy: 139},
					{id: 2304, src: 'works/works0204_04.png', source: 23, vx: 17, vy: 14},
					{id: 2305, src: 'works/works0204_05.png', source: 23, vx: 68, vy: 106},
					{id: 2306, src: 'works/works0204_06.png', source: 23, vx: 58, vy: 106},
					{id: 2307, src: 'works/works0204_07.png', source: 23, vx: -18, vy: 139},
					{id: 2308, src: 'works/works0204_08.png', source: 23, vx: 65, vy: -56},
					{id: 2309, src: 'works/works0204_09.png', source: 23, vx: 52, vy: 138},
					{id: 2310, src: 'works/works0204_10.png', source: 23, vx: 68, vy: 31},
					{id: 2311, src: 'works/works0204_11.png', source: 23, vx: 67, vy: 138},
					{id: 2312, src: 'works/works0204_12.png', source: 23, vx: 46, vy: 81},
					{id: 2313, src: 'works/works0204_13.png', source: 23, vx: 47, vy: 137},
					{id: 2314, src: 'works/works0204_14.png', source: 23, vx: 49, vy: 135},

					{id: 2315, src: 'works/works0214_01.png', source: 23, classId: 201, vx: 54, vy: 129},
					{id: 2316, src: 'works/works0214_02.png', source: 23, classId: 201, vx: 31, vy: 23},
					{id: 2317, src: 'works/works0214_03.png', source: 23, classId: 201, vx: 54, vy: 139},
					{id: 2318, src: 'works/works0214_04.png', source: 23, classId: 201, vx: 35, vy: 30},

					{id: 2319, src: 'works/works0224_01.png', source: 23, classId: 202, vx: 36, vy: 27},
					{id: 2320, src: 'works/works0224_02.png', source: 23, classId: 202, vx: 20, vy: 137},
					{id: 2321, src: 'works/works0224_03.png', source: 23, classId: 202, vx: 34, vy: 39},
					{id: 2322, src: 'works/works0224_04.png', source: 23, classId: 202, vx: 54, vy: 137},

					{id: 2401, src: 'works/works0205_01.png', source: 24, vx: 85, vy: 260},
					{id: 2402, src: 'works/works0205_02.png', source: 24, vx: 70, vy: 260},
					{id: 2403, src: 'works/works0205_03.png', source: 24, vx: 90, vy: 260},
					{id: 2404, src: 'works/works0205_04.png', source: 24, vx: 50, vy: 260},
					{id: 2405, src: 'works/works0205_05.png', source: 24, vx: 45, vy: 260},
					{id: 2406, src: 'works/works0205_06.png', source: 24, vx: 30, vy: 260},
					{id: 2407, src: 'works/works0205_07.png', source: 24, vx: 7, vy: 260},
					{id: 2408, src: 'works/works0205_08.png', source: 24, vx: 80, vy: 260},

					{id: 2409, src: 'works/works0215_01.png', source: 24, classId: 201, vx: 70, vy: 260},

					{id: 2410, src: 'works/works0225_01.png', source: 24, classId: 202, vx: 92, vy: 260}
				],
				load_type: false // 加载状态 true已加载 false未加载
			}
		},
		nav_item03: {
			src: 'nav_icon03.png',
			type: 'nav',
			items: {
				id: 30,
				src: '',
				items: [
					{id: 3001, src: 'works/works03_01.png'},
					{id: 3002, src: 'works/works03_02.png'},
					{id: 3003, src: 'works/works03_03.png'},
					{id: 3004, src: 'works/works03_04.png'},
					{id: 3005, src: 'works/works03_05.png'},
					{id: 3006, src: 'works/works03_06.png'},
					{id: 3007, src: 'works/works03_07.png'},
					{id: 3008, src: 'works/works03_08.png'},
					{id: 3009, src: 'works/works03_09.png'},
					{id: 3010, src: 'works/works03_10.png'}
				],
				load_type: false // 加载状态 true已加载 false未加载
			},
			load_type: false // 加载状态 true已加载 false未加载
		},
		nav_item04: {
			src: 'nav_icon04.png',
			type: 'nav',
			items: {
				id: 40,
				src: '',
				items: [
					{id: 4001, src: 'works/works04_01.png'},
					{id: 4002, src: 'works/works04_02.png'},
					{id: 4003, src: 'works/works04_03.png'},
					{id: 4004, src: 'works/works04_04.png'},
					{id: 4005, src: 'works/works04_05.png'},
					{id: 4006, src: 'works/works04_06.png'},
					{id: 4007, src: 'works/works04_07.png'},
					{id: 4008, src: 'works/works04_08.png'},
					{id: 4009, src: 'works/works04_09.png'},
					{id: 4010, src: 'works/works04_10.png'},
					{id: 4011, src: 'works/works04_11.png'},
					{id: 4012, src: 'works/works04_12.png'},
					{id: 4013, src: 'works/works04_13.png'},
					{id: 4014, src: 'works/works04_14.png'},
					{id: 4015, src: 'works/works04_15.png'},
					{id: 4016, src: 'works/works04_16.png'}
				],
				load_type: false // 加载状态 true已加载 false未加载
			},
			load_type: false // 加载状态 true已加载 false未加载
		}
	},
	load_type: false // 加载状态 true已加载 false未加载
};

// 页面适配屏幕
function pageSize(pageObj) {
	var parentObj = pageObj.parent();
	var parentH = parentObj.outerHeight();
	var pageH = pageObj.outerHeight();
	var r = 1;
	if(parentH < pageH) {
		r = parentH / pageH;
		pageObj.css({'transform': 'scale('+ (parentH / pageH) +')', '-webkit-transform': 'scale('+ (parentH / pageH) +')'});
	}
	return r;
}


// 页面显示
function pageShow(id) {
	var pageObj = $('#' + id)
	pageObj.show().siblings('.wrap').hide();
	if(pageObj.find('.page-box').length > 0) {
		pageSize(pageObj.find('.page-box'));
	}
}

// 图片加载
function load(data, fun) {
	if(data.load_type) {
		// 若图片已加载则不需要再次加载
		if(fun && typeof fun == 'function') {
			fun(data);
		}
		return;
	}

	var sourceArr = data.items;
	var imgPath = "images/";
	var imgLength = 0;
	for (var i in sourceArr) {
		 sourceArr[i].src = (imgPath + sourceArr[i].src);
		 imgLength ++;
	}
	function loadImage(path, callback){
		var img = new Image();
		img.onload = function(){
			img.onload = null;
			path.image = img;
			callback(path);
		};
		img.src = path.src;
	};
	function imgLoader(imgs, callback){
		var j = 0;
		for(var i in imgs){
			loadImage(imgs[i], function(path){
				callback(path, ++j, imgLength);
			});
		}
	};
	imgLoader(sourceArr, function(path, curNum, total){
		var percent = curNum / total;
		$('.loading-info').css('width', percent * 100 + '%');
		if(percent == 1) {
			data.load_type = true;
			if(fun && typeof fun == 'function') {
				fun(data);
			}
		}
	});
};