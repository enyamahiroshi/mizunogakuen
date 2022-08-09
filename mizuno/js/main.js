(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.init();
  }

  _createClass(Menu, [{
    key: 'init',
    value: function init() {
      jQuery('.js-menu-switch').on('click', function (e) {
        var $html = jQuery('body');
        if ($html.hasClass('is-menu')) {
          $html.removeClass('is-menu');
        } else {
          $html.addClass('is-menu');
        }
      });

      //スマホでメニュクリック時サイドメニューが消えるように
      jQuery('.side-menu a').on('click', function (e) {
        if (window.innerWidth < 768) {
          var $html = jQuery('body');
          $html.removeClass('is-menu');
        }
      });
      //SP PCあべこべ設定
      var $win = jQuery(window);
      var width = null;
      $win.on('load resize', function () {
        if (width > 0) {
          if (width < 768 && window.innerWidth >= 768 || width >= 768 && window.innerWidth < 768) {
            jQuery('.js-menu-switch').trigger('click');
          }
        } else {
          if (window.innerWidth < 768) {
            jQuery('.js-menu-switch').trigger('click');
            setTimeout(function () {
              jQuery('.js-side-bar,.js-menu-switch').css('opacity', 1);
            }, 1000);
          } else {
            jQuery('.js-side-bar,.js-menu-switch').css('opacity', 1);
          }
        }
        width = window.innerWidth;
      });
    }

    // close() {
    //   jQuery('.js-main-menu').removeClass('is-active');
    //   jQuery('.js-menu-switch').removeClass('is-active');
    // }

  }]);

  return Menu;
}();

exports.default = Menu;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scroll = function () {
  function Scroll() {
    _classCallCheck(this, Scroll);

    this.init();
  }

  _createClass(Scroll, [{
    key: "init",
    value: function init() {
      // jQuery('.js-scroll').on('click', (e) => {
      //   let target = jQuery(e.currentTarget).attr('href');
      //   console.log(target)
      //   if (target == '#') {
      //     target = 'html';
      //   }
      //   this.move(jQuery(target));
      //   // jQuery('.js-menu').removeClass('is-active');
      //   return false;
      // });


      //   let hash = location.hash;
      //   if(hash.length>0){
      //   this.move(jQuery(hash));
      //   }

      var hash = location.hash;
      if (hash) {
        this.move(hash);
      };
    }
  }, {
    key: "move",
    value: function move(target) {
      jQuery("html,body").animate({
        scrollTop: jQuery(target).offset().top - 80
      }, 500);
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

},{}],3:[function(require,module,exports){
'use strict';

var _Scroll = require('./Scroll');

var _Scroll2 = _interopRequireDefault(_Scroll);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import News from './News';
// import Parallax from './Parallax';
//  import Mv from './Mv';

jQuery(function () {
  new _Scroll2.default();
  new _Menu2.default();
  //  new Mv();
  // new News();
  // new Parallax();

  setTimeout(function () {
    var $slider = jQuery('.js-slick-slider-pc');
    $slider.slick({
      infinite: true,
      lazyLoad: 'ondemand',
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      //レスポンシブでの動作を指定
      responsive: [{
        breakpoint: 768, //ブレイクポイントを指定
        settings: {
          arrows: false
        }
      }]
    });
  }, 2500);

  jQuery('.js-slick-slider-sp').slick({
    infinite: true,
    lazyLoad: 'ondemand',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    //レスポンシブでの動作を指定
    responsive: [{
      breakpoint: 768, //ブレイクポイントを指定
      settings: {
        arrows: false
      }
    }]
  });

  // //スクロール位置
  var $header = jQuery('.js-header');
  jQuery(window).on('scroll load resize', function () {
    var top = jQuery(window).scrollTop();
    if (100 < top) {
      $header.addClass('is-acroll');
    } else {
      $header.removeClass('is-acroll');
    }
  });

  // ロゴ消去
  setTimeout(function () {
    jQuery('.js-slider-logo').fadeOut(2000);
  }, 2500);
});

//タイプキッド
(function (d) {
  var config = {
    kitId: 'sxh1hrs',
    scriptTimeout: 3000,
    async: true
  },
      h = d.documentElement,
      t = setTimeout(function () {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

},{"./Menu":1,"./Scroll":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYnJvd3NlcmlmeS9NZW51LmpzIiwiZXM2L2Jyb3dzZXJpZnkvU2Nyb2xsLmpzIiwiZXM2L2Jyb3dzZXJpZnkvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBTSxJO0FBQ0osa0JBQWM7QUFBQTs7QUFDWixTQUFLLElBQUw7QUFDRDs7OzsyQkFFTTtBQUNMLGFBQU8saUJBQVAsRUFBMEIsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsVUFBQyxDQUFELEVBQU87QUFDM0MsWUFBSSxRQUFRLE9BQU8sTUFBUCxDQUFaO0FBQ0EsWUFBSSxNQUFNLFFBQU4sQ0FBZSxTQUFmLENBQUosRUFBK0I7QUFDN0IsZ0JBQU0sV0FBTixDQUFrQixTQUFsQjtBQUNELFNBRkQsTUFFTztBQUNMLGdCQUFNLFFBQU4sQ0FBZSxTQUFmO0FBQ0Q7QUFDRixPQVBEOztBQVNKO0FBQ0ksYUFBTyxjQUFQLEVBQXVCLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFVBQUMsQ0FBRCxFQUFPO0FBQ3hDLFlBQUksT0FBTyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQzNCLGNBQUksUUFBUSxPQUFPLE1BQVAsQ0FBWjtBQUNBLGdCQUFNLFdBQU4sQ0FBa0IsU0FBbEI7QUFDRDtBQUNGLE9BTEQ7QUFNSjtBQUNJLFVBQUksT0FBTyxPQUFPLE1BQVAsQ0FBWDtBQUNBLFVBQUksUUFBUSxJQUFaO0FBQ0EsV0FBSyxFQUFMLENBQVEsYUFBUixFQUF1QixZQUFZO0FBQ2pDLFlBQUksUUFBUSxDQUFaLEVBQWU7QUFDYixjQUFJLFFBQVEsR0FBUixJQUFlLE9BQU8sVUFBUCxJQUFxQixHQUFwQyxJQUEyQyxTQUFTLEdBQVQsSUFBZ0IsT0FBTyxVQUFQLEdBQW9CLEdBQW5GLEVBQXdGO0FBQ3RGLG1CQUFPLGlCQUFQLEVBQTBCLE9BQTFCLENBQWtDLE9BQWxDO0FBQ0Q7QUFDRixTQUpE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O0FBQ3pCLE1BQUUsU0FBRixHQUFjLEVBQUUsU0FBRixDQUFZLE9BQVosQ0FBb0IsaUJBQXBCLEVBQXVDLEVBQXZDLElBQTZDLGNBQTNEO0FBQ0QsR0FGRyxFQUVELE9BQU8sYUFGTixDQU5OO0FBQUEsTUFTRSxLQUFLLEVBQUUsYUFBRixDQUFnQixRQUFoQixDQVRQO0FBQUEsTUFVRSxJQUFJLEtBVk47QUFBQSxNQVdFLElBQUksRUFBRSxvQkFBRixDQUF1QixRQUF2QixFQUFpQyxDQUFqQyxDQVhOO0FBQUEsTUFZRSxDQVpGO0FBYUEsSUFBRSxTQUFGLElBQWUsYUFBZjtBQUNBLEtBQUcsR0FBSCxHQUFTLDZCQUE2QixPQUFPLEtBQXBDLEdBQTRDLEtBQXJEO0FBQ0EsS0FBRyxLQUFILEdBQVcsSUFBWDtBQUNBLEtBQUcsTUFBSCxHQUFZLEdBQUcsa0JBQUgsR0FBd0IsWUFBWTtBQUM5QyxRQUFJLEtBQUssVUFBVDtBQUNBLFFBQUksS0FBSyxLQUFLLEtBQUssVUFBVixJQUF3QixLQUFLLFFBQXRDLEVBQWdEO0FBQ2hELFFBQUksSUFBSjtBQUNBLGlCQUFhLENBQWI7QUFDQSxRQUFJO0FBQ0YsY0FBUSxJQUFSLENBQWEsTUFBYjtBQUNELEtBRkQsQ0FFRSxPQUFPLENBQVAsRUFBVSxDQUFFO0FBQ2YsR0FSRDtBQVNBLElBQUUsVUFBRixDQUFhLFlBQWIsQ0FBMEIsRUFBMUIsRUFBOEIsQ0FBOUI7QUFDRCxDQTNCRCxFQTJCRyxRQTNCSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIE1lbnUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgalF1ZXJ5KCcuanMtbWVudS1zd2l0Y2gnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBsZXQgJGh0bWwgPSBqUXVlcnkoJ2JvZHknKTtcclxuICAgICAgaWYgKCRodG1sLmhhc0NsYXNzKCdpcy1tZW51JykpIHtcclxuICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcygnaXMtbWVudScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRodG1sLmFkZENsYXNzKCdpcy1tZW51Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuLy/jgrnjg57jg5vjgafjg6Hjg4vjg6Xjgq/jg6rjg4Pjgq/mmYLjgrXjgqTjg4njg6Hjg4vjg6Xjg7zjgYzmtojjgYjjgovjgojjgYbjgatcclxuICAgIGpRdWVyeSgnLnNpZGUtbWVudSBhJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgbGV0ICRodG1sID0galF1ZXJ5KCdib2R5Jyk7XHJcbiAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ2lzLW1lbnUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbi8vU1AgUEPjgYLjgbnjgZPjgbnoqK3lrppcclxuICAgIHZhciAkd2luID0galF1ZXJ5KHdpbmRvdyk7XHJcbiAgICB2YXIgd2lkdGggPSBudWxsO1xyXG4gICAgJHdpbi5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh3aWR0aCA+IDApIHtcclxuICAgICAgICBpZiAod2lkdGggPCA3NjggJiYgd2luZG93LmlubmVyV2lkdGggPj0gNzY4IHx8IHdpZHRoID49IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgICAgalF1ZXJ5KCcuanMtbWVudS1zd2l0Y2gnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgIGpRdWVyeSgnLmpzLW1lbnUtc3dpdGNoJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5qcy1zaWRlLWJhciwuanMtbWVudS1zd2l0Y2gnKS5jc3MoJ29wYWNpdHknLCAxKTtcclxuICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGpRdWVyeSgnLmpzLXNpZGUtYmFyLC5qcy1tZW51LXN3aXRjaCcpLmNzcygnb3BhY2l0eScsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBjbG9zZSgpIHtcclxuICAvLyAgIGpRdWVyeSgnLmpzLW1haW4tbWVudScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAvLyAgIGpRdWVyeSgnLmpzLW1lbnUtc3dpdGNoJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gIC8vIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJjbGFzcyBTY3JvbGwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgLy8galF1ZXJ5KCcuanMtc2Nyb2xsJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIC8vICAgbGV0IHRhcmdldCA9IGpRdWVyeShlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKTtcclxuICAgIC8vICAgY29uc29sZS5sb2codGFyZ2V0KVxyXG4gICAgLy8gICBpZiAodGFyZ2V0ID09ICcjJykge1xyXG4gICAgLy8gICAgIHRhcmdldCA9ICdodG1sJztcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICB0aGlzLm1vdmUoalF1ZXJ5KHRhcmdldCkpO1xyXG4gICAgLy8gICAvLyBqUXVlcnkoJy5qcy1tZW51JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgLy8gICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vICAgbGV0IGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xyXG4gICAgLy8gICBpZihoYXNoLmxlbmd0aD4wKXtcclxuICAgIC8vICAgdGhpcy5tb3ZlKGpRdWVyeShoYXNoKSk7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XHJcbiAgICBpZihoYXNoKXtcclxuICAgICAgdGhpcy5tb3ZlKGhhc2gpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbW92ZSh0YXJnZXQpIHtcclxuICAgIGpRdWVyeShcImh0bWwsYm9keVwiKS5hbmltYXRlKHtcclxuICAgICAgc2Nyb2xsVG9wOiBqUXVlcnkodGFyZ2V0KS5vZmZzZXQoKS50b3AgLSA4MFxyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbDtcclxuIiwiaW1wb3J0IFNjcm9sbCBmcm9tICcuL1Njcm9sbCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XHJcbi8vIGltcG9ydCBOZXdzIGZyb20gJy4vTmV3cyc7XHJcbi8vIGltcG9ydCBQYXJhbGxheCBmcm9tICcuL1BhcmFsbGF4JztcclxuLy8gIGltcG9ydCBNdiBmcm9tICcuL012JztcclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoKSB7XHJcbiAgbmV3IFNjcm9sbCgpO1xyXG4gIG5ldyBNZW51KCk7XHJcbiAgLy8gIG5ldyBNdigpO1xyXG4gIC8vIG5ldyBOZXdzKCk7XHJcbiAgLy8gbmV3IFBhcmFsbGF4KCk7XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyICRzbGlkZXIgPSBqUXVlcnkoJy5qcy1zbGljay1zbGlkZXItcGMnKTtcclxuICAgICRzbGlkZXIuc2xpY2soe1xyXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgLy/jg6zjgrnjg53jg7Pjgrfjg5bjgafjga7li5XkvZzjgpLmjIflrppcclxuICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsIC8v44OW44Os44Kk44Kv44Od44Kk44Oz44OI44KS5oyH5a6aXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XVxyXG4gICAgfSlcclxuICB9LCAyNTAwKVxyXG5cclxuICBqUXVlcnkoJy5qcy1zbGljay1zbGlkZXItc3AnKS5zbGljayh7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIC8v44Os44K544Od44Oz44K344OW44Gn44Gu5YuV5L2c44KS5oyH5a6aXHJcbiAgICByZXNwb25zaXZlOiBbe1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsIC8v44OW44Os44Kk44Kv44Od44Kk44Oz44OI44KS5oyH5a6aXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfV1cclxuICB9KVxyXG5cclxuICAvLyAvL+OCueOCr+ODreODvOODq+S9jee9rlxyXG4gIGxldCAkaGVhZGVyID0galF1ZXJ5KCcuanMtaGVhZGVyJyk7XHJcbiAgalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCBsb2FkIHJlc2l6ZScsICgpID0+IHtcclxuICAgIGxldCB0b3AgPSBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgIGlmICgxMDAgPCB0b3ApIHtcclxuICAgICAgJGhlYWRlci5hZGRDbGFzcygnaXMtYWNyb2xsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKCdpcy1hY3JvbGwnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8g44Ot44K05raI5Y67XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBqUXVlcnkoJy5qcy1zbGlkZXItbG9nbycpLmZhZGVPdXQoMjAwMClcclxuICB9LCAyNTAwKVxyXG59KTtcclxuXHJcbi8v44K/44Kk44OX44Kt44OD44OJXHJcbihmdW5jdGlvbiAoZCkge1xyXG4gIHZhciBjb25maWcgPSB7XHJcbiAgICAgIGtpdElkOiAnc3hoMWhycycsXHJcbiAgICAgIHNjcmlwdFRpbWVvdXQ6IDMwMDAsXHJcbiAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaCA9IGQuZG9jdW1lbnRFbGVtZW50LFxyXG4gICAgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBoLmNsYXNzTmFtZSA9IGguY2xhc3NOYW1lLnJlcGxhY2UoL1xcYndmLWxvYWRpbmdcXGIvZywgXCJcIikgKyBcIiB3Zi1pbmFjdGl2ZVwiO1xyXG4gICAgfSwgY29uZmlnLnNjcmlwdFRpbWVvdXQpLFxyXG4gICAgdGsgPSBkLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksXHJcbiAgICBmID0gZmFsc2UsXHJcbiAgICBzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXSxcclxuICAgIGE7XHJcbiAgaC5jbGFzc05hbWUgKz0gXCIgd2YtbG9hZGluZ1wiO1xyXG4gIHRrLnNyYyA9ICdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nICsgY29uZmlnLmtpdElkICsgJy5qcyc7XHJcbiAgdGsuYXN5bmMgPSB0cnVlO1xyXG4gIHRrLm9ubG9hZCA9IHRrLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGEgPSB0aGlzLnJlYWR5U3RhdGU7XHJcbiAgICBpZiAoZiB8fCBhICYmIGEgIT0gXCJjb21wbGV0ZVwiICYmIGEgIT0gXCJsb2FkZWRcIikgcmV0dXJuO1xyXG4gICAgZiA9IHRydWU7XHJcbiAgICBjbGVhclRpbWVvdXQodCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBUeXBla2l0LmxvYWQoY29uZmlnKVxyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9O1xyXG4gIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGssIHMpXHJcbn0pKGRvY3VtZW50KTtcclxuIl19
