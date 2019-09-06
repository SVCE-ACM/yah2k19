// Validation to be done 

var participant_count;
$('#tab-0 .next').click(function (event) {
	event.preventDefault();
	participant_count = $('#tab-0 select').val();
	for (var input of document.querySelectorAll('#tab-0 input')) {
		if (!input.checkValidity()) {
			document.forms['form-container'].reportValidity();
			return;
		}
	}
	$('#tab-0').css("display", 'none');
	$('#tab-1').css('display', 'flex');
});

$('#tab-1 .next').click(function (event) {
	event.preventDefault();
	for (var input of document.querySelectorAll('#tab-1 input')) {
		if (!input.checkValidity()) {
			document.forms['form-container'].reportValidity();
			return;
		}
	}
	$('#tab-1').css("display", 'none');
	if (participant_count > 1) {
		$('#tab-2').css('display', 'flex');
	} else {
		$('#tab-5').css('display', 'flex');
	}
});

$('#tab-2 .next').click(function (event) {
	event.preventDefault();
	for (var input of document.querySelectorAll('#tab-2 input')) {
		if (!input.checkValidity()) {
			document.forms['form-container'].reportValidity();
			return;
		}
	}

	$('#tab-2').css("display", 'none');
	if (participant_count > 2) {
		$('#tab-3').css('display', 'flex');
	} else {
		$('#tab-5').css('display', 'flex');
	}
	document.forms['form-container'].reportValidity();
});

$('#tab-3 .next').click(function (event) {
	event.preventDefault();
	for (var input of document.querySelectorAll('#tab-3 input')) {
		if (!input.checkValidity()) {
			document.forms['form-container'].reportValidity();
			return;
		}
	}
	$('#tab-3').css("display", 'none');
	if (participant_count > 3) {
		$('#tab-4').css('display', 'flex');
	} else {
		$('#tab-5').css('display', 'flex');
	}
});

$('#tab-4 .next').click(function (event) {
	event.preventDefault();
	for (var input of document.querySelectorAll('#tab-4 input')) {
		if (!input.checkValidity()) {
			document.forms['form-container'].reportValidity();
			return;
		}
	}
	$('#tab-4').css("display", 'none');
	$('#tab-5').css('display', 'flex');
});

$('#tab-5 .next').click(function (event) {
	event.preventDefault();
	for (var input of document.querySelectorAll('#tab-5 input')) {
		if (!input.checkValidity()) {
			document.forms['form-container'].reportValidity();
			return;
		}
	}
	if (!document.getElementById('abstract').checkValidity()) {
		document.forms['form-container'].reportValidity();
		return;
	}
	// Do validation
	$('form').submit();
})

$('#tab-1 .back').click(function(event) {
	event.preventDefault();
	$('#tab-1').css("display", 'none');
	$('#tab-0').css("display", "flex");
});

$('#tab-2 .back').click(function(event) {
	event.preventDefault();
	$('#tab-2').css("display", 'none');
	$('#tab-1').css("display", "flex");
});

$('#tab-3 .back').click(function(event) {
	event.preventDefault();
	$('#tab-3').css("display", 'none');
	$('#tab-2').css("display", "flex");
});

$('#tab-4 .back').click(function(event) {
	event.preventDefault();
	$('#tab-4').css("display", 'none');
	$('#tab-3').css("display", "flex");
});

$('#tab-5 .back').click(function(event) {
	event.preventDefault();
	$('#tab-5').css('display', 'none');
	if (participant_count == 4) {
		$('#tab-4').css('display', 'flex');
	} else if (participant_count == 3) {
		$('#tab-3').css('display', 'flex');
	} else if (participant_count == 2) {
		$('#tab-2').css('display', 'flex');
	} else if (participant_count == 1) {
		$('#tab-1').css('display', 'flex');
	}
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateURL(url) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(url);
}