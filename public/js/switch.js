$(document).ready(function(){var n=!1;$(".switch").click(function(){!1===n?($(".switch").addClass("switch-on"),$(".monitor .light").addClass("light-on"),$(".monitor .center").addClass("center-on"),$(".nintendoPixel").addClass("nintendoPixel-on"),setTimeout(function(){$(".sound").trigger("play")},2500),n=!0):($(".switch").removeClass("switch-on"),$(".monitor .light").removeClass("light-on"),$(".monitor .center").removeClass("center-on"),$(".nintendoPixel").removeClass("nintendoPixel-on"),$(".sound").trigger("pause"),n=!1)})});