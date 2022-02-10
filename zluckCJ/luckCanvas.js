; (function ($) {
    /**
     * @param {Object} options
     * @param {Array}  options.list  存储奖品的的列表，example [{1:{name:'谢谢参与',image:'1.jpg'}}]
     * @param {Object} options.outerCircle {color:'#df1e15'} 外圈颜色，默认红色
     * @param {Object} options.innerCircle {color:'#f4ad26'} 里圈颜色，默认黄色
     * @param {Array}  options.dots ['#fbf0a9', '#fbb936'] 装饰点颜色 ，默认深黄浅黄交替
     * @param {Array}  options.disk ['#ffb933', '#ffe8b5', '#ffb933', '#ffd57c', '#ffb933', '#ffe8b5', '#ffd57c'] 中心奖盘的颜色，默认7彩
     * @param {Object} options.title {color:'#5c1e08',font:'19px Arial'} 奖品标题颜色
     */
    $.fn.WheelSurf = function (options) {
      var _default = {
        disk: [
          '#fff',
          '#8dd2fd'
        ],
        title: {
          color: [
            '#ff6969',
            '#1a3cba'
          ],
          font: '19px Arial'
        },
        width: 1200
      }
  
      $.extend(_default, options)
      // 画布中心移动到canvas中心
      var _this = this[0]
      _this.width = _default.width
      _this.height = _default.width
      var width = _this.width,
        height = _this.height,
        ctx = _this.getContext('2d'),
        awardTitle = []
  
      for (var item in _default.list) {
        awardTitle.push(_default.list[item].prize)
      }
      var num = awardTitle.length
      // 圆心
      var x = width / 2
      var y = height / 2
      ctx.translate(x, y)
  
      return {
        init: function (angelTo) {
          var outerCircleW = _default.width / 28
          var innerCircleW = outerCircleW - 8
          var urntableW = _this.width / 2 - outerCircleW - innerCircleW
          var PI = Math.PI
          angelTo = angelTo || 0
          ctx.clearRect(-_this.width / 2, -_this.height / 2, _this.width, _this.height)
          // 平分角度
          var angel = 2 * PI / num
          var startAngel = -PI / 2
          var endAngel = -PI / 2 + angel
          // 旋转画布
          ctx.save()
          ctx.rotate((PI / 180 * angelTo))
          // 画里转盘
          var colors = _default.disk
           for (var i = 0; i < num; i++) {
            ctx.beginPath()
            ctx.stroke()
            ctx.moveTo(0, 0)
            ctx.fillStyle = colors[i % 2]
            ctx.arc(0, 0, urntableW, startAngel, endAngel)
            ctx.fill()
            startAngel = endAngel
            endAngel += angel
          }
          startAngel = angel / 2
          for (var i = 0; i < num; i++) {
            ctx.save()
            ctx.rotate(startAngel)
            // ctx.drawImage(awardPIc[i], -48, -48 - 130);
            ctx.font = _default.title.font
            ctx.fillStyle = _default.title.color[i % 2]
            ctx.textAlign = 'center'
            // ctx.fillText(awardTitle[i], 0, -urntableW / 1.5)
            // 计算文字的最大宽度
            var angelTwo = ((180 - 360 / num) / 2) * (PI / 180)
            var maxW = Math.floor((urntableW / 1.5 / Math.sin(angelTwo)) * Math.sin(angel))
            this.wrapText(awardTitle[i], 0, -urntableW / 1.5, maxW - 10, 80)
            //  -urntableW / 1.5
            startAngel += angel
            ctx.restore()
          }
          ctx.restore()
        },
        /**
         * @param angel 旋转角度
         * @param callback 转完后的回调函数
         */
        lottery: function (angel, callback) {
            console.log(angel,callback)
          angel = angel || 0
          angel = 360 - angel
          angel += 360*12
          // 基值（减速）
          var baseStep = 90
          // 起始滚动速度
          var baseSpeed = 0.4
          // 步长
          var count = 2
          var _this = this
          var timer = setInterval(function () {
            _this.init(count)
            count = count + baseStep * ((angel - count) / angel > baseSpeed  ? baseSpeed : (angel - count) / angel)
            if (angel - count < 1.6) {
              count = angel
            }
            if (count == angel) {
              clearInterval(timer)
              if (typeof callback == 'function') {
                callback()
              }
            }
            // console.log(count, angel, angel - count)
          }, 25)
        },
        wrapText: function (text, x, y, maxWidth, lineHeight) {
          if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
            return;
          }
  
          if (typeof maxWidth == 'undefined') {
            maxWidth = (_this && _this.width) || 300;
          }
          if (typeof lineHeight == 'undefined') {
            lineHeight = (_this && parseInt(window.getComputedStyle(_this).lineHeight)) || parseInt(window.getComputedStyle(document.body).lineHeight);
          }
  
          // 字符分隔为数组
          var arrText = text.split('');
          var line = '';
  
          for (var n = 0; n < arrText.length; n++) {
            var testLine = line + arrText[n];
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
              y = y *1.05
              ctx.fillText(line, x, y);
              line = arrText[n];
              y += lineHeight;
            } else {
              line = testLine;
            }
          }
          ctx.fillText(line, x, y);
        }
      }
    }
  })(jQuery)
  