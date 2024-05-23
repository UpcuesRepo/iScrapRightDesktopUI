


$(document).ready(function() {
    // ----floatin input label in input and select

$('.form-group').find('.floating-control').each(function (index, ele) {
	var $ele = $(ele);
	if($ele.val() != '' || $ele.is(':selected') === true){
		$ele.parents('.floating-group').addClass('focused');
	}
})


$('.floating-control').on('focus', function (e) {
	$(this).parents('.floating-group').addClass('focused');	
}).on('blur', function(){
	if($(this).val().length > 0){
		$(this).parents('.floating-group').addClass('focused');		
	}else{
		$(this).parents('.floating-group').removeClass('focused');
	}
});
$('.floating-control').on('change', function (e) {
	if($(this).is('select')){
		if($(this).val() === $("option:first", $(this)).val()) {
			$(this).parents('.floating-group').removeClass('focused');
		}
		else{
			$(this).parents('.floating-group').addClass('focused');
		}
	}
})
	//---- select2 single----
	$('.customSelect').each(function() {
		var dropdownParents = $(this).parents('.select2Part')
		$(this).select2({
			dropdownParent: dropdownParents,
			minimumResultsForSearch: -1
		}).on("select2:open", function (e) { 
			$(this).parents('.floating-group').addClass('focused');
		}).on("select2:close", function (e) {
			if($(this).find(':selected').val() === ''){
				$(this).parents('.floating-group').removeClass('focused');
			}
		});
});
});



// BROWSE FILES

$('#file-upload').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename').text(filename);
});
$('#file-upload-2').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-2').text(filename);
});
$('#file-upload-3').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-3').text(filename);
});
$('#file-upload-4').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-4').text(filename);
});
$('#file-upload-5').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-5').text(filename);
});
$('#file-upload-6').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-6').text(filename);
});
$('#file-upload-7').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-7').text(filename);
});
$('#file-upload-8').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-8').text(filename);
});

//CHECKBOX
$(".form-check .add-after").after('<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
$(".form-check.style-2 .add-after").after('<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
// END CHECKBOX

//RADIO
    $(".add-after2").after('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" rx="5" transform="matrix(1 0 0 -1 5 15)" fill="#3384D8"/></svg>');
// END RADIO

