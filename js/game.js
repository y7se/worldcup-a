// 游戏界面初始化
var gameEvent = function() {
	this._listener = {};
	this.data = {};
};

gameEvent.prototype = {
	init: function(canObj) {
		var _this = this;
		var parentObj = $(canObj).parent();
		var parentW = parentObj.width();
		var parentH = parentObj.height();
		var cantext = canObj.getContext('2d');

		var worksCan = document.createElement('canvas');
		var detailsCan = document.createElement('canvas');

		_this.ctxt = cantext;

		canObj.width = parentW;
		canObj.height = parentH;

		var boxWidth = canObj.width,
			boxHeight = canObj.height - 200; // 获取显示区域的宽高
		// 处理背景
		var bgArr = {image: imgData.items.background.image};

		if(boxWidth / boxHeight < bgArr.image.width / bgArr.image.height) {
			bgArr.h = boxHeight;
			bgArr.w = boxHeight * bgArr.image.width / bgArr.image.height;
		} else {
			bgArr.w = boxWidth;
			bgArr.h = boxWidth * bgArr.image.height / bgArr.image.width;
		}

		bgArr.x = (boxWidth - bgArr.w) / 2;
		bgArr.y = boxHeight - bgArr.h;

		// 处理logo
		var logoArr = {image: imgData.items.logo.Image};
		logoArr.w = logoArr.image.width;
		logoArr.h = logoArr.image.height;
		logoArr.x = (boxWidth - logoArr.w) / 2;
		logoArr.y = boxHeight + 26;

		// 处理导航按钮
		var navBtnArr = {image: imgData.items.nav_btn.image};
		navBtnArr.w = navBtnArr.image.width;
		navBtnArr.h = navBtnArr.image.height;
		navBtnArr.x = boxWidth - 90;
		navBtnArr.y = parentH - 65;

		// 处理导航
		var navArr = [];
		for(var i in imgData.items) {
			if(imgData.items[i].type == 'nav') {
				(function(n) {
					var navItems = {};
					navItems.image = imgData.items[n].image;
					navItems.items = imgData.items[n].items;

					navArr.push(navItems);
				})(i)
			}
		}

		// 处理删除按钮
		var closeArr = {image: imgData.items.btn_close.image};

		// 处理放大缩小按钮
		var scaleArr = {image: imgData.items.btn_scale.image};

		// 处理人物头部
		var headArr = {image: imgData.items.head.image};

		// 处理保存按钮
		var saveArr = {image: imgData.items.btn_save.image};

		// 活动跳转按钮
		var activityArr = {image: imgData.items.btn_activity.image};

		// 二维码
		var codeArr = {image: imgData.items.code.image};

		_this.data.bgArr = bgArr;
		_this.data.logoArr = logoArr;
		_this.data.navArr = navArr;
		_this.data.navBtnArr = navBtnArr;
		_this.data.closeArr = closeArr;
		_this.data.scaleArr = scaleArr;
		_this.data.headArr = headArr;
		_this.data.saveArr = saveArr;
		_this.data.activityArr = activityArr;
		_this.data.codeArr = codeArr;

		_this.data.jump_show = true;

		_this.data.worksCanTxt = worksCan.getContext('2d');
		_this.data.detailsCanTxt = detailsCan.getContext('2d');

		_this.canDraw();
		_this.canBind(canObj);
	},
	canDraw: function(type) {
		// 绘制画布
		var _this = this;

		var navHeight = _this.data.navHeight ? _this.data.navHeight : 65;

		_this.ctxt.clearRect(0, 0, _this.ctxt.canvas.width, _this.ctxt.canvas.height); // 清除画布内容
		// 背景
		var bgArr = _this.data.bgArr;
		_this.ctxt.drawImage(bgArr.image, bgArr.x, bgArr.y, bgArr.w, bgArr.h);

		// 绘制内容
		var detailsArr = _this.data.detailsArr ? _this.data.detailsArr : [];

		var navArr = _this.data.navArr;
		var navShow = _this.data.nav_show ? _this.data.nav_show : 0; // 获取当前选择框，默认第一个
		var navWidth = (_this.ctxt.canvas.width - 90) / navArr.length;

		var worksBoxArr = {};
		var worksShow = _this.data.work_show ? _this.data.work_show : 0; // 获取当前二级选择框，0
		var worksItems = navArr[navShow].items;
		var workTop = _this.data.workTop ? _this.data.workTop : 0; // 初始化选择框高度

		if(detailsArr.length != 0) {
			var detailsCanTxt = _this.data.detailsCanTxt;
			var detailsCan = detailsCanTxt.canvas;
			var closeArr = _this.data.closeArr;
			var scaleArr = _this.data.scaleArr;
			if(_this.data.peopleArr) {
				var peopleArr = _this.data.peopleArr;
				var peopleItems = detailsArr[detailsArr.length - 1];
				var peopleResultCon = document.createElement('canvas');
				var peopleResultConTxt = peopleResultCon.getContext('2d');
				peopleResultCon.width = 290;
				peopleResultCon.height = 580;

				var headArr = _this.data.headArr;
				var margeResultItems = peopleItems.result_items;

				if(margeResultItems) {
					for(var i=0; i<margeResultItems.length; i++) {
						if(peopleArr.source == margeResultItems[i].source) {
							margeResultItems[i].id = peopleArr.id;
							margeResultItems[i].src = peopleArr.src;
							margeResultItems[i].image = peopleArr.image;
							margeResultItems[i].vx = peopleArr.vx ? peopleArr.vx : 0;
							margeResultItems[i].vy = peopleArr.vy ? peopleArr.vy : 0;
							margeResultItems[i].x = peopleArr.x;
							margeResultItems[i].y = peopleArr.y;
							margeResultItems[i].w = peopleArr.w;
							margeResultItems[i].h = peopleArr.h;
						}
					}
					if(margeResultItems[4].image) {
						peopleResultConTxt.drawImage(margeResultItems[4].image, margeResultItems[4].vx + 20, margeResultItems[4].vy + 60, margeResultItems[4].image.width, margeResultItems[4].image.height);	
					}
					if(margeResultItems[3].image) {
						peopleResultConTxt.drawImage(margeResultItems[3].image, margeResultItems[3].vx + 20, margeResultItems[3].vy + 60, margeResultItems[3].image.width, margeResultItems[3].image.height);
					}
					peopleResultConTxt.drawImage(headArr.image, 116, 110, headArr.image.width, headArr.image.height);
					if(margeResultItems[0].image) {
						peopleResultConTxt.drawImage(margeResultItems[0].image, margeResultItems[0].vx + 20, margeResultItems[0].vy + 60, margeResultItems[0].image.width, margeResultItems[0].image.height);
					}
					if(margeResultItems[1].image) {
						peopleResultConTxt.drawImage(margeResultItems[1].image, margeResultItems[1].vx + 20, margeResultItems[1].vy + 60, margeResultItems[1].image.width, margeResultItems[1].image.height);
					}
					if(margeResultItems[2].image) {
						peopleResultConTxt.drawImage(margeResultItems[2].image, margeResultItems[2].vx + 20, margeResultItems[2].vy + 60, margeResultItems[2].image.width, margeResultItems[2].image.height);
					}

					detailsArr[detailsArr.length - 1].image = peopleResultCon;
				}
				// console.log(margeResultItems)
			}
			for(var i=0; i<detailsArr.length; i++) {
				detailsCan.width = detailsArr[i].w + 20;
				detailsCan.height = detailsArr[i].h + 20;

				detailsCanTxt.clearRect(0, 0, detailsCan.width, detailsCan.height);
				detailsCanTxt.drawImage(detailsArr[i].image, 10, 10, detailsArr[i].w, detailsArr[i].h);
				_this.ctxt.drawImage(detailsCan, detailsArr[i].x, detailsArr[i].y, detailsCan.width, detailsCan.height);

				if(!type && detailsArr[i].select) {
					closeArr.w = closeArr.image.width;
					closeArr.h = closeArr.image.height;
					closeArr.x = detailsArr[i].x - closeArr.w / 2;
					closeArr.y = detailsArr[i].y + detailsCan.height - closeArr.h / 2;

					scaleArr.w = scaleArr.image.width;
					scaleArr.h = scaleArr.image.height;
					scaleArr.x = detailsArr[i].x + detailsCan.width - scaleArr.w / 2;
					scaleArr.y = detailsArr[i].y - scaleArr.h / 2;

					_this.ctxt.lineWidth = 2;
					_this.ctxt.strokeStyle = '#fff';
					_this.ctxt.strokeRect(detailsArr[i].x, detailsArr[i].y, detailsCan.width, detailsCan.height);
					_this.ctxt.drawImage(closeArr.image, closeArr.x, closeArr.y, closeArr.w, closeArr.h);
					_this.ctxt.drawImage(scaleArr.image, scaleArr.x, scaleArr.y, scaleArr.w, scaleArr.h);
				}
			}
			if(type) {
				_this.ctxt.fillStyle = '#fff';
				_this.ctxt.fillRect(0, _this.ctxt.canvas.height - 200, _this.ctxt.canvas.width, 200);
				// 绘制二维码
				_this.ctxt.drawImage(_this.data.codeArr.image, 30, _this.ctxt.canvas.height - 176, _this.data.codeArr.image.width, _this.data.codeArr.image.height);
				_this.canSave();
			}
		}
		if(!type) {
			if(!_this.data.show_type) {
				// 绘制logo
				var logoArr = _this.data.logoArr;
				_this.ctxt.fillStyle = '#d6d6d6';
				_this.ctxt.fillRect(0, _this.ctxt.canvas.height - navHeight, _this.ctxt.canvas.width, navHeight);

				_this.ctxt.fillStyle = '#fff';
				_this.ctxt.fillRect(0, _this.ctxt.canvas.height - 200, _this.ctxt.canvas.width, 200);
				_this.ctxt.drawImage(logoArr.image, logoArr.x, logoArr.y, logoArr.w, logoArr.h);
				// 绘制导航（关闭状态）
				for(var i=0; i<navArr.length; i++) {
					if(i % 2 == 0) {
						_this.ctxt.fillStyle = '#e6e6e6';
					} else {
						_this.ctxt.fillStyle = '#d6d6d6';
					}
					navArr[i].x = i * navWidth;
					navArr[i].y = _this.ctxt.canvas.height - navHeight;
					navArr[i].w = navWidth;
					navArr[i].h = 65;
					_this.ctxt.fillRect(navArr[i].x, navArr[i].y, navWidth, 65);
					_this.ctxt.drawImage(navArr[i].image, navArr[i].x + (navWidth - navArr[i].image.width) / 2, _this.ctxt.canvas.height - navHeight + (65 - navArr[i].image.height) / 2, navArr[i].image.width, navArr[i].image.height);
				}
			} else {

				// 绘制导航（显示状态）
				_this.ctxt.fillStyle = '#e6e6e6';
				_this.ctxt.fillRect(0, _this.ctxt.canvas.height - navHeight, _this.ctxt.canvas.width, navHeight);
				for(var i=0; i<navArr.length; i++) {
					if(i == navShow) {
						_this.ctxt.fillStyle = '#e6e6e6';
					} else {
						_this.ctxt.fillStyle = '#f7f7f7';
					}
					navArr[i].x = i * navWidth;
					navArr[i].y = _this.ctxt.canvas.height - navHeight;
					navArr[i].w = navWidth;
					navArr[i].h = 65;
					_this.ctxt.fillRect(navArr[i].x, navArr[i].y, navWidth, 65);
					_this.ctxt.drawImage(navArr[i].image, navArr[i].x + (navWidth - navArr[i].image.width) / 2, _this.ctxt.canvas.height - navHeight + (65 - navArr[i].image.height) / 2, navArr[i].image.width, navArr[i].image.height);
				}
				// 获取选择列表
				
				worksBoxArr.x = 0;
				worksBoxArr.y = _this.ctxt.canvas.height - navHeight + 65;
				worksBoxArr.w = _this.ctxt.canvas.width;
				worksBoxArr.h = navHeight - 65;

				_this.canLoad('请稍候...');

				load(worksItems, function(data) {
					navShow = _this.data.nav_show ? _this.data.nav_show : 0;
					worksShow = _this.data.work_show ? _this.data.work_show : 0;
					var items = data.items;
					var worksBoxItems = [];
					var workImgW, workImgH;

					// 绘制人物
					if(data.marge_items) {
						var margeArr = data.marge_items;
						var navsArr = data.nav_items.items;
						for(var i=0; i<margeArr.length; i++) {
							var peopleCon = document.createElement('canvas');
							var peopleConTxt = peopleCon.getContext('2d');
							peopleCon.width = 290;
							peopleCon.height = 580;

							var headArr = _this.data.headArr;
							var margeItems = margeArr[i].items;
							for(var j=0; j<margeItems.length; j++) {
								margeArr[i].result_items[j] = {};
								margeArr[i].result_items[j].source = navsArr[j].id;
								for(var k=0; k<items.length; k++) {
									
									if(items[k].id == margeItems[j]) {
										margeArr[i].result_items[j].id = items[k].id;
										margeArr[i].result_items[j].src = items[k].src;
										margeArr[i].result_items[j].image = items[k].image;
										margeArr[i].result_items[j].vx = items[k].vx ? items[k].vx : 0;
										margeArr[i].result_items[j].vy = items[k].vy ? items[k].vy : 0;
									}
								}
							}
							if(margeArr[i].result_items[4].image) {
								peopleConTxt.drawImage(margeArr[i].result_items[4].image, margeArr[i].result_items[4].vx + 20, margeArr[i].result_items[4].vy + 60, margeArr[i].result_items[4].image.width, margeArr[i].result_items[4].image.height);	
							}
							if(margeArr[i].result_items[3].image) {
								peopleConTxt.drawImage(margeArr[i].result_items[3].image, margeArr[i].result_items[3].vx + 20, margeArr[i].result_items[3].vy + 60, margeArr[i].result_items[3].image.width, margeArr[i].result_items[3].image.height);
							}
							peopleConTxt.drawImage(headArr.image, 116, 110, headArr.image.width, headArr.image.height);
							if(margeArr[i].result_items[0].image) {
								peopleConTxt.drawImage(margeArr[i].result_items[0].image, margeArr[i].result_items[0].vx + 20, margeArr[i].result_items[0].vy + 60, margeArr[i].result_items[0].image.width, margeArr[i].result_items[0].image.height);
							}
							if(margeArr[i].result_items[1].image) {
								peopleConTxt.drawImage(margeArr[i].result_items[1].image, margeArr[i].result_items[1].vx + 20, margeArr[i].result_items[1].vy + 60, margeArr[i].result_items[1].image.width, margeArr[i].result_items[1].image.height);
							}
							if(margeArr[i].result_items[2].image) {
								peopleConTxt.drawImage(margeArr[i].result_items[2].image, margeArr[i].result_items[2].vx + 20, margeArr[i].result_items[2].vy + 60, margeArr[i].result_items[2].image.width, margeArr[i].result_items[2].image.height);
							}

							margeArr[i].image = peopleCon;
						}
						items = margeArr;
					}

					if(worksShow && navArr[navShow].items.nav_items) {
						// 显示二级导航
						worksBoxArr.x = navWidth;
						worksBoxArr.y = _this.ctxt.canvas.height - navHeight + 65;
						worksBoxArr.w = _this.ctxt.canvas.width - navWidth;
						worksBoxArr.h = navHeight - 65;

						load(navArr[navShow].items.nav_items, function(data) {
							var subNavItems = data.items;
							var subNavArr = {};
							subNavArr.w = navWidth;
							subNavArr.h = worksBoxArr.h / subNavItems.length;

							_this.data.work_show = worksShow;
							for(var i=0; i<subNavItems.length; i++) {
								var subNavImg = subNavItems[i].image;

								subNavArr.x = 0;
								subNavArr.y = i * subNavArr.h + worksBoxArr.y;

								subNavItems[i].x = subNavArr.x;
								subNavItems[i].y = subNavArr.y;
								subNavItems[i].w = subNavArr.w;
								subNavItems[i].h = subNavArr.h;
								if(subNavItems[i].id == worksShow) {
									_this.ctxt.fillStyle = '#e6e6e6';
								} else {
									_this.ctxt.fillStyle = '#d8d8d8';
								}
								if(_this.data.show_type) {
									_this.ctxt.fillRect(subNavArr.x, subNavArr.y, subNavArr.w, subNavArr.h);
									_this.ctxt.drawImage(subNavImg, subNavArr.x + (subNavArr.w - subNavImg.width) / 2, subNavArr.y + (subNavArr.h - subNavImg.height) / 2, subNavImg.width, subNavImg.height);
								}
							}
						});

						items = navArr[navShow].items.items;
					}

					_this.data.worksBoxArr = worksBoxArr;

					var worksCanTxt = _this.data.worksCanTxt;
					worksCanTxt.canvas.width = worksBoxArr.w;
					worksCanTxt.canvas.height = worksBoxArr.h;

					worksCanTxt.clearRect(0, 0, worksCanTxt.canvas.width, worksCanTxt.canvas.height);

					worksCanTxt.fillStyle = '#e6e6e6';
					worksCanTxt.fillRect(0, 0, worksCanTxt.canvas.width, worksCanTxt.canvas.height);
					_this.data.worksItems = worksItems;

					var workW = worksBoxArr.w / (items.length > 3 ? 3 : 2);
					var workH = worksBoxArr.h / (items.length > 3 ? 3 : 1);

					for(var i=0; i<items.length; i++) {
						items[i].nid = navShow;
						if(items[i].source) {
							if(items[i].source == worksShow) {
								if(!items[i].classId) {
									worksBoxItems.push(items[i]);
								} else {
									if(items[i].classId == _this.data.class_show) {
										worksBoxItems.push(items[i]);
									}
								}
							}
						} else {
							worksBoxItems = items;
						}
					}
					for(var i=0; i<worksBoxItems.length; i++) {
						var worksImg = worksBoxItems[i].image;
						var zoom = items.length > 3 ? .6 : .8
						if(worksImg.width > workW * zoom || worksImg.height > workH * zoom) {
							if(workW / workH > worksImg.width / worksImg.height) {
								workImgH = workH * zoom;
								workImgW = worksImg.width / worksImg.height * workImgH;
							} else {
								workImgW = workW * zoom;
								workImgH = workImgW * worksImg.height / worksImg.width;
							}	
						} else {
							workImgW = worksImg.width;
							workImgH = worksImg.height;
						}

						var workX = (i % 3) * workW + (workW - workImgW) / 2;
						var workY = parseInt(i / 3) * workH + (workH - workImgH) / 2 + workTop;
						worksBoxItems[i].x = workX;
						worksBoxItems[i].y = workY;
						worksBoxItems[i].w = workW;
						worksBoxItems[i].h = workH;

						if(_this.data.show_type && data.id == navArr[navShow].items.id) {
							_this.data.worksBoxItems = worksBoxItems;
							_this.data.worksItems = data;
							worksCanTxt.drawImage(worksImg, workX, workY, workImgW, workImgH);
						}
					}
					if(_this.data.show_type && data.id == navArr[navShow].items.id) {
						_this.ctxt.drawImage(worksCanTxt.canvas, worksBoxArr.x, worksBoxArr.y, worksBoxArr.w, worksBoxArr.h);
					}
				});
			}
			// 绘制导航按钮
			_this.ctxt.save();
			var navBtnArr = _this.data.navBtnArr;
			navBtnArr.y = _this.ctxt.canvas.height - navHeight;
			_this.ctxt.fillStyle = _this.data.show_type ? '#f7f7f7' : '#e6e6e6';
			_this.ctxt.fillRect(navBtnArr.x, navBtnArr.y, 90, 65);
			_this.ctxt.translate(navBtnArr.x + 90 / 2, navBtnArr.y + 65 / 2);
			_this.ctxt.rotate(navBtnArr.rotate * Math.PI / 180);
			_this.ctxt.translate(-(navBtnArr.x + 90 / 2), -(navBtnArr.y + 65 / 2));
			_this.ctxt.drawImage(navBtnArr.image, navBtnArr.x + (90 - navBtnArr.image.width) / 2, navBtnArr.y + (65 - navBtnArr.image.height) / 2, navBtnArr.w, navBtnArr.h);
			_this.ctxt.restore();

			// 绘制保存按钮
			if(detailsArr.length > 0) {
				var saveArr = _this.data.saveArr;
				saveArr.x = _this.ctxt.canvas.width - saveArr.image.width - 28;
				saveArr.y = _this.ctxt.canvas.height - (navHeight > 200 ? navHeight : 200) - saveArr.image.height - 16;
				saveArr.w = saveArr.image.width;
				saveArr.h = saveArr.image.height;
				_this.ctxt.drawImage(saveArr.image, saveArr.x, saveArr.y, saveArr.w, saveArr.h);
			}

			// 绘制跳转按钮
			if(_this.data.jump_show && _this.data.show_type) {
				var activityArr = _this.data.activityArr;
				activityArr.x = 10;
				activityArr.y = _this.ctxt.canvas.height - activityArr.image.height - 500;
				activityArr.w = activityArr.image.width;
				activityArr.h = activityArr.image.height;
				_this.ctxt.drawImage(activityArr.image, activityArr.x, activityArr.y, activityArr.w, activityArr.h);

				// 绘制跳转关闭按钮
				var closeArr = _this.data.closeArr;

				closeArr.w = closeArr.image.width;
				closeArr.h = closeArr.image.height;
				closeArr.jx = 20 + activityArr.w - closeArr.w;
				closeArr.jy = _this.ctxt.canvas.height - activityArr.image.height - 510;
				_this.ctxt.drawImage(closeArr.image, closeArr.jx, closeArr.jy, closeArr.w, closeArr.h);
			}	
		}
	},
	canBind: function(obj) {
		// 点击事件
		var _this = this;
		var touchType = false; // 判断是否可以点击
		var scrollType = false; // 判断是否可以滑动
		var worksType = false; // 判断是否可以点击物品
		var scaleType = false; // 判断是否可以放大缩小物品
		var moveType = false; // 判断物品是否可以移动
		var closeType = false; // 判断物品是否可以删除
		var selectType = false; // 判断物品是否可以选择
		var moveNum = 0;
		var startArr = {x: 0, y: 0}, endArr = {x: 0, y: 0};
		var workTop = 0;
		var worksNum = 0;
		var worksBoxArr;
		var worksItems;
		var worksArr;
		var closeArr;
		var scaleArr;
		var detailsArr;
		var detailsItems = {};
		var navArr;
		var navBtnArr;
		obj.addEventListener('touchstart', function() {
			event.preventDefault();
			var touch = event.touches[0];
			touchType = true;
			moveNum = 0;
			startArr.x = touch.pageX;
			startArr.y = touch.pageY;

			detailsItems = {};

			_this.data.sub_nav_show = false;

			navArr = _this.data.navArr;
			navBtnArr = _this.data.navBtnArr;

			worksBoxArr = _this.data.worksBoxArr;
			worksArr = _this.data.worksItems ? _this.data.worksItems : '';
			detailsArr = _this.data.detailsArr ? _this.data.detailsArr : [];
			worksItems = _this.data.worksBoxItems;
			if(_this.data.show_type && worksBoxArr && startArr.x > worksBoxArr.x && startArr.x < worksBoxArr.x + worksBoxArr.w && startArr.y > worksBoxArr.y && startArr.y < worksBoxArr.y + worksBoxArr.h) {
				if(worksArr.load_type) {
					if(worksItems.length > 9) {
						scrollType = true;
					}
					selectType = true;
				}
			} else {
				selectType = false;
			}

			scaleArr = _this.data.scaleArr;
			if(startArr.x > scaleArr.x && startArr.x < scaleArr.x + scaleArr.w && startArr.y > scaleArr.y && startArr.y < scaleArr.y + scaleArr.h) {
				for(var i=0; i<detailsArr.length; i++) {
					if(detailsArr[i].select) {
						scaleType = true;
						detailsItems = detailsArr[i];
					}
				}
			}
			// 删除内容
			closeArr = _this.data.closeArr;
			if(startArr.x > closeArr.x && startArr.x < closeArr.x + closeArr.w && startArr.y > closeArr.y && startArr.y < closeArr.y + closeArr.h) {
				if(detailsArr[detailsArr.length - 1].select) {
					closeType = true;	
				}
			}
			// 移动内容
			if(!scaleType && !closeType && detailsArr.length > 0) {
				var selectArr = [];
				for(var i=0; i<detailsArr.length; i++) {
					detailsArr[i].select = false;
					detailsArr[i].sid = i;
					if(startArr.x > detailsArr[i].x && startArr.x < detailsArr[i].x + detailsArr[i].w && startArr.y > detailsArr[i].y && startArr.y < detailsArr[i].y + detailsArr[i].h) {
						moveType = true;
						selectArr.push(detailsArr[i]);
					}
				}
				if(moveType) {
					detailsItems = selectArr[selectArr.length - 1];
					for(var i=0; i<detailsArr.length; i++) {
						if(detailsArr[i].sid == detailsItems.sid) {

							_this.data.nav_show = detailsArr[i].nid;

							detailsArr.splice(i, 1);
							detailsItems.select = true;
							detailsArr.push(detailsItems);
							if(detailsItems.result_items) {
								_this.data.peopleArr = '';
								_this.data.work_show = navArr[1].items.nav_items.items[0].id;
								_this.data.class_show = detailsItems.id;
							}
							_this.canDraw();
						}
					}
				}
				if(!moveType && startArr.x > 0 && startArr.x < obj.width && startArr.y > 0 && startArr.y < obj.height - _this.data.navHeight) {
					for(var i=0; i<detailsArr.length; i++) {
						detailsArr[i].select = false;
					}
					_this.canDraw();
				}
			}

		}, false);

		obj.addEventListener('touchmove', function() {
			event.preventDefault();
			var touch = event.touches[0];
			moveNum ++;
			if(moveNum > 5) {
				touchType = false;
				selectType = false;
			}
			if(scrollType) {
				endArr.x = touch.pageX;
				endArr.y = touch.pageY;
				workTop += parseInt(endArr.y - startArr.y);
				if(workTop >= 0) {
					workTop = 0;
				}
				if(workTop <= worksBoxArr.h - Math.ceil(worksItems.length / 3) * (worksBoxArr.h / 3)) {
					workTop = worksBoxArr.h - Math.ceil(worksItems.length / 3) * (worksBoxArr.h / 3)
				}
				_this.data.workTop = workTop;
				startArr.x = endArr.x;
				startArr.y = endArr.y;
				_this.canDraw();
			}
			if(scaleType) {
				endArr.x = touch.pageX;
				endArr.y = touch.pageY;
				var scale = parseInt(endArr.x - startArr.x) + parseInt(startArr.y - endArr.y);
				if(detailsItems.w < 20) {
					detailsItems.w = 20;
				} else {
					detailsItems.x -= scale / 2;
					detailsItems.y -= scale / 2;
				}
				detailsItems.w += scale;
				detailsItems.h = detailsItems.w * detailsItems.image.height / detailsItems.image.width;

				startArr.x = endArr.x;
				startArr.y = endArr.y;
				_this.canDraw();
			}
			if(moveType) {
				endArr.x = touch.pageX;
				endArr.y = touch.pageY;
				detailsItems.x += parseInt(endArr.x - startArr.x);
				detailsItems.y += parseInt(endArr.y - startArr.y);

				startArr.x = endArr.x;
				startArr.y = endArr.y;
				_this.canDraw();
			}
		}, false);

		obj.addEventListener('touchend', function() {
			event.preventDefault();
			scrollType = false;
			scaleType = false;
			moveType = false;
			if(touchType) {
				// 点击导航按钮
				if(startArr.x > navBtnArr.x && startArr.x < navBtnArr.x + 90 && startArr.y > navBtnArr.y && startArr.y < navBtnArr.y + 65) {
					workTop = 0;
					_this.data.workTop = 0;
					setTimeout(function () {
						if(_this.data.show_type) {
							_this.data.show_type = false;
							_this.data.navHeight = 65;
							navBtnArr.rotate = 0;
						} else {
							_this.data.show_type = true;
							_this.data.navHeight = 410;
							navBtnArr.rotate = 180;
						}
						_this.canDraw();
					}, 50);
				}
				// 点击导航模块
				for(var i=0; i<navArr.length; i++) {
					var subNavArr = navArr[i].items.nav_items ? navArr[i].items.nav_items.items : [];
					// 点击一级导航
					if(startArr.x > navArr[i].x && startArr.x < navArr[i].x + navArr[i].w && startArr.y > navArr[i].y && startArr.y < navArr[i].y + navArr[i].h) {

						workTop = 0;
						_this.data.sub_nav_items = subNavArr;
						_this.data.workTop = 0;
						_this.data.nav_show = i;
						_this.data.work_show = 0;

						if(navArr[i].items.nav_items) {
							_this.data.sub_nav_show = true;
						}
						setTimeout(function () {
							_this.data.show_type = true;
							_this.data.navHeight = 410;
							navBtnArr.rotate = 180;

							_this.canDraw();
						}, 50);
					}
					// 点击二级导航
					if(subNavArr.length > 0) {
						for(var j=0; j<subNavArr.length; j++) {
							if(_this.data.nav_show == i && startArr.x > subNavArr[j].x && startArr.x < subNavArr[j].x + subNavArr[j].w && startArr.y > subNavArr[j].y && startArr.y < subNavArr[j].y + subNavArr[j].h) {
								if(_this.data.work_show != subNavArr[j].id) {
									workTop = 0;
									_this.data.workTop = 0;
									_this.data.nav_show = i;
									_this.data.work_show = subNavArr[j].id;
									_this.canDraw();
								}
							}
						}
					}
				}
				if(_this.data.show_type) {
					// 点击显示内容
					if(selectType && worksArr.load_type) {
						var worksCoor = {};
						_this.data.peopleArr = '';
						for(var i=0; i<worksItems.length; i++) {
							worksCoor.x = (i % 3) * worksItems[i].w + worksBoxArr.x;
							worksCoor.y = parseInt(i / 3) * worksItems[i].h + worksBoxArr.y + workTop;
							detailsItems = {};
							if(startArr.x > worksCoor.x && startArr.x < worksCoor.x + worksItems[i].w && startArr.y > worksCoor.y && startArr.y < worksCoor.y + worksItems[i].h) {
								for(var j=0; j<detailsArr.length; j++) {
									detailsArr[j].select = false;
								}
								detailsItems.id = worksItems[i].id;
								detailsItems.nid = worksItems[i].nid;
								detailsItems.image = worksItems[i].image;
								detailsItems.select = true; // 是否选中
								detailsItems.scale = 0;  // 缩放参数
								detailsItems.w = detailsItems.image.width;
								detailsItems.h = detailsItems.image.height;
								detailsItems.x = (obj.width - worksItems[i].image.width) / 2 + (worksItems[i].offsetX ? worksItems[i].offsetX : 0);
								detailsItems.y = obj.height - 460 - worksItems[i].image.height + (worksItems[i].offsetY ? worksItems[i].offsetY : 0);

								if(worksItems[i].result_items) {
									var subNavItems = _this.data.sub_nav_items;
									detailsItems.result_type = true;
									detailsItems.result_items = [];
									for(var k=0; k<worksItems[i].result_items.length; k++) {
										detailsItems.result_items.push(worksItems[i].result_items[k])
									}
									_this.data.work_show = subNavItems[0].id;
									_this.data.class_show = detailsItems.id;
								}

								if(worksItems[i].source) {
									_this.data.peopleArr = worksItems[i];
									detailsArr[detailsArr.length - 1].select = true;
								} else {
									detailsArr.push(detailsItems);
									_this.data.detailsArr = detailsArr;
								}
								_this.canDraw();
							}
						}
					}
				} else {
					// 点击logo
					var logoArr = _this.data.logoArr;
					if(startArr.x > logoArr.x && startArr.x < logoArr.x + logoArr.w && startArr.y > logoArr.y && startArr.y < logoArr.y + logoArr.h) {
						window.open('#');
					}
				}
				// 点击删除按钮
				if(closeType) {
					closeType = false;
					detailsArr.splice(detailsArr.length - 1, 1);
					_this.canDraw();
				}

				var saveArr = _this.data.saveArr;
				var activityArr = _this.data.activityArr;

				// 点击保存按钮
				if(startArr.x > saveArr.x && startArr.x < saveArr.x + saveArr.w && startArr.y > saveArr.y && startArr.y < saveArr.y + saveArr.h) {
					_this.canDraw(true);
				}

				// 关闭跳转按钮
				if(startArr.x > closeArr.jx && startArr.x < closeArr.jx + closeArr.w && startArr.y > closeArr.jy && startArr.y < closeArr.jy + closeArr.h) {
					_this.data.jump_show = false;
					_this.canDraw();
				}
				// 点击跳转按钮
				setTimeout(function() {
					if(_this.data.jump_show && startArr.x > activityArr.x && startArr.x < activityArr.x + activityArr.w && startArr.y > activityArr.y && startArr.y < activityArr.y + activityArr.h) {
						window.open('#');
					}
				}, 50);
			}
		}, false);
	},
	canLoad: function(text) {
		var _this = this;
		_this.ctxt.font = "12px Arial";
		_this.ctxt.textAlign = "center"; 
		_this.ctxt.fillStyle = '#000';
		_this.ctxt.fillText(text, _this.ctxt.canvas.width / 2, _this.ctxt.canvas.height - 180);
	},
	canSave: function() {
		// 生成图片
		var _this = this;
		var canvas = _this.ctxt.canvas;
		var cardImg = new Image();
		var cardUrl = canvas.toDataURL("image/png", 0.8);//0.8 为图片的压缩率
		cardImg.src = cardUrl;
		cardImg.onload = function() {
			canvas.style.display = 'none';
			document.getElementById('activityImage').appendChild(cardImg);
			document.getElementById('activityImage').style.display = 'block';
		}
	}
};