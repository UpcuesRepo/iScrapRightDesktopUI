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

//CHECKBOX
$(".form-check .add-after").after('<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
$(".form-check.style-2 .add-after").after('<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
// END CHECKBOX