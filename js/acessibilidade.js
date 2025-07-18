$(document).ready(function(){
    
	try {
		if($.browser.opera){
			$('a[href]').attr('tabindex', 0);
		}
	} catch (err) {}

	_toggleVisaoi();


	//menu fixo
	

	/*
	$("#topMain li.dropdown").focusin(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function(){
		$('.dropdown-menu', this).fadeOut('fast');
	});

	//navegaÃƒÂ§ÃƒÂ£o no menu via teclado
	$("#topMain>li").focusin(function() {
		$("#topMain li").removeClass('active');
		$(this).addClass('active');
		$('.dropdown-menu', this).fadeIn();
		$(this).find('ul').attr('aria-hidden','false');
	});

	$("#topMain>li").focusout(function() {
		$(this).removeClass('active');
		$('.dropdown-menu', this).fadeOut('fast');
		$(this).find('ul').attr('aria-hidden','true');
	});*/

	//menu acessibilidade
	jQuery("#hideMenuAcessibilidade, #showMenuAcessibilidade").click(function () {
		marginLeft = jQuery("#showMenuAcessibilidade").css('margin-left');
        if (marginLeft == '0px') {
			var _identifier = "#showMenuAcessibilidade";
            jQuery("#menuAcessibilidade").animate({"margin-left": "0px"}, 500);
            $('#linkConteudo').focus();
        } else {
			var _identifier = "#menuAcessibilidade";
            jQuery("#showMenuAcessibilidade").show().animate({"margin-left": "0"}, 500);
        }

		jQuery(_identifier).animate({"margin-left": "-500px"}, 500, function () {
			//jQuery(this).hide();
		});

		return false;
    });

	var fonteOriginal = 14;

	//aumentar fonte
	$("#aumentarFonte").click(function(){
		tamanhoFonte = $('body').css('font-size');
		tamanhoFonte = parseInt(tamanhoFonte.substr(0,2));

		if(tamanhoFonte <= 16){
			tamanhoFonte++;
			$('body').css('font-size',tamanhoFonte);
		}
	});

	//diminuit fonte
	$("#diminuirFonte").click(function(){
		tamanhoFonte = $('body').css('font-size');
		tamanhoFonte = parseInt(tamanhoFonte.substr(0,2));

		if(tamanhoFonte >= 10){
			tamanhoFonte--;
			$('body').css('font-size',tamanhoFonte);
		}
	});

	//fonte original
	$("#fonteOriginal").click(function(){
		$('body').css('font-size',fonteOriginal);
	});

	//contraste
	jQuery("input.contraste").bind("click", function() {
		var color_skin = jQuery(this).attr('value');

		if(color_skin == 'contraste') {
			jQuery("#css_contraste").remove();
			jQuery("head").append('<link id="css_contraste" href="css/contraste.css" rel="stylesheet" type="text/css" title="dark" />');
		} else {
			jQuery("#css_contraste").remove();
		}
	});

	
});



/** 09. Toggle (Reescrevo funÃƒÂ§ÃƒÂ£o _toggle para funcionar com a tag (span.toogle-span))
 **************************************************************** **/
function _toggleVisaoi() {

	var $_t = this,
		previewParClosedHeight = 25;

	jQuery("div.toggle.active > p").addClass("preview-active");
	jQuery("div.toggle.active > div.toggle-content").slideDown(400);
	jQuery("div.toggle > a.toggle-a").click(function(e) {

		var parentSection 	= jQuery(this).parent(),
			parentWrapper 	= jQuery(this).parents("div.toggle"),
			previewPar 		= false,
			isAccordion 	= parentWrapper.hasClass("toggle-accordion");

		if(isAccordion && typeof(e.originalEvent) != "undefined") {
			parentWrapper.find("div.toggle.active > a.toggle-a").trigger("click");
		}

		parentSection.toggleClass("active");

		if(parentSection.find("> p").get(0)) {

			previewPar 					= parentSection.find("> p");
			var previewParCurrentHeight = previewPar.css("height");
			var previewParAnimateHeight = previewPar.css("height");
			previewPar.css("height", "auto");
			previewPar.css("height", previewParCurrentHeight);

		}

		var toggleContent = parentSection.find("> div.toggle-content");

		if(parentSection.hasClass("active")) {

			jQuery(previewPar).animate({height: previewParAnimateHeight}, 350, function() {jQuery(this).addClass("preview-active");});
			toggleContent.slideDown(350);

		} else {

			jQuery(previewPar).animate({height: previewParClosedHeight}, 350, function() {jQuery(this).removeClass("preview-active");});
			toggleContent.slideUp(350);

		}

	});
}

 $(document).ready(function() {
  $('.rotate').rotaterator({fadeSpeed:300, pauseSpeed:3500});
 });

