$(document).ready(function(){"use strict";var a=$(window).height(),b=$(".lookbook-item"),c=$(".grid-item"),d=$(".profile-grid-item"),e=$(".model-info"),f=$("#splash"),g=$("a.is-toggle-login"),h=$("#login-container"),i=$("#login"),j=function(){b.removeClass("active"),b.removeClass("inactive")};g.on("click",function(){h.toggleClass("active"),j(),l()}),b.on("click",function(){h.removeClass("active"),$(this).hasClass("active")?j():(j(),$(this).toggleClass("active"),b.not(this).toggleClass("inactive"))});var k=$(".contact-option"),l=function(){k.removeClass("active"),k.removeClass("inactive")};k.on("click",function(){$(this).hasClass("active")?l():(l(),$(this).toggleClass("active"),k.not(this).toggleClass("inactive"))}),$("#look").add(".overlay").on("click",function(){f.add(".navbar").add("body").toggleClass("active-look"),f.removeClass("active-learn"),h.removeClass("hide")}),$(".js-toggle-contact").on("click",function(){f.add("body").toggleClass("active-learn"),$(".navbar").toggleClass("active-look")}),$(".js-toggle-social").on("click",function(){$(".navbar").toggleClass("active-look"),$("html, body").animate({scrollTop:$("body").offset().top},500)}),$(".back").on("click",function(){f.add(".navbar").add("body").removeClass("active-look"),f.add("body").removeClass("active-learn"),j(),l(),h.removeClass("active"),$("#profiles-wrap").removeClass("active"),$("#social-wrap").removeClass("active"),h.removeClass("hide"),$("#lookbook").add(f).removeClass("logged-in")}),$(".logo").on("click",function(){f.add(".navbar").add("body").removeClass("active-look"),f.add("body").removeClass("active-learn"),j(),l(),h.removeClass("active"),$("#profiles-wrap").removeClass("active"),$("#social-wrap").removeClass("active"),h.addClass("hide"),$("#lookbook").add(f).removeClass("logged-in")}),i.on("click",function(a){a.preventDefault(),window.location="http://fcflamingo.github.io/mymodelmgmt/profiles-home.html"}),$("#profiles-wrap").addClass("active"),$(".profile-overlay").addClass("active"),$("#social-wrap").addClass("active");var m=function(a){var b=c.width();$(a).css({height:b+"px"})};-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")?setTimeout(function(){c.each(function(){m(this)})},2e3):c.each(function(){m(this)}),$(window).resize(function(){c.each(function(){m(this)})}),c.on("click",function(a){a.preventDefault(),window.location="http://fcflamingo.github.io/mymodelmgmt/profiles-individual.html"}),d.on("mouseenter",function(){d.not(this).addClass("is-not-hovered")}),d.on("mouseleave",function(){d.not(this).removeClass("is-not-hovered")});var n=function(a){var b=$(window).height();$(a).css({height:b-"60"+"px"})};-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&setTimeout(function(){$(".modal-content").each(function(){n(this)})},2e3);var o=function(a){var b=d.width();$(a).css({height:b+"px"})};-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")?setTimeout(function(){d.each(function(){o(this)})},2e3):d.each(function(){o(this)}),$(window).resize(function(){d.each(function(){o(this)})});var p=function(b){$(b).css({height:a+"px"})};e.each(function(){p(this)}),$(window).resize(function(){e.each(function(){p(this)})});var q=new $.BigVideo;q.init(),Modernizr.touch?setTimeout(function(){q.show("images/poster.jpg")},2e3):-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")?setTimeout(function(){q.init(),q.show("videos/samplevid.mp4",{ambient:!0})},2e3):(q.init(),q.show("videos/samplevid.mp4",{ambient:!0}))});