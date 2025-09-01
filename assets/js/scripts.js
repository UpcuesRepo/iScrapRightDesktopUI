// CLICKABLE ROW DATA TABLE
$(document).ready(function (){
    function format(d) {
    // `d` is the original data object for the row
    return (
        '<dl>' +
        '<dt>Full name:</dt>' +
        '<dd>' +
        d.name +
        '</dd>' +
        '<dt>Extra info:</dt>' +
        '<dd>And any further details here (images etc)...</dd>' +
        '</dl>'
    );
}
 
let table = new DataTable('#example', {
    ajax: '../assets/ajax/data/objects.json',
    columns: [
        {
            className: 'dt-control',
            orderable: false,
            data: null,
            defaultContent: ''
        },
        { data: 'name' },
        { data: 'username' },
        { data: 'permission level' },
        {
            data: 'action',
                render: function (data, type, row) {
                return `
                    <a href="${data}" target="_blank" title="View Profile">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_478_10492)">
                            <path d="M9.16699 3.33344H5.66699C4.26686 3.33344 3.5668 3.33344 3.03202 3.60593C2.56161 3.84561 2.17916 4.22806 1.93948 4.69847C1.66699 5.23324 1.66699 5.93331 1.66699 7.33344V14.3334C1.66699 15.7336 1.66699 16.4336 1.93948 16.9684C2.17916 17.4388 2.56161 17.8213 3.03202 18.061C3.5668 18.3334 4.26686 18.3334 5.66699 18.3334H12.667C14.0671 18.3334 14.7672 18.3334 15.302 18.061C15.7724 17.8213 16.1548 17.4388 16.3945 16.9684C16.667 16.4336 16.667 15.7336 16.667 14.3334V10.8334M6.66697 13.3334H8.06242C8.47007 13.3334 8.6739 13.3334 8.86571 13.2874C9.03577 13.2466 9.19835 13.1792 9.34747 13.0878C9.51566 12.9848 9.65979 12.8406 9.94804 12.5524L17.917 4.58344C18.6073 3.89309 18.6073 2.7738 17.917 2.08344C17.2266 1.39309 16.1073 1.39308 15.417 2.08344L7.44802 10.0524C7.15977 10.3406 7.01564 10.4848 6.91257 10.653C6.82119 10.8021 6.75385 10.9647 6.71302 11.1347C6.66697 11.3265 6.66697 11.5304 6.66697 11.938V13.3334Z" stroke="#3384D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                            <defs>
                            <clipPath id="clip0_478_10492">
                            <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="${data}" target="_blank" title="View Profile">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 4.99984V4.33317C13.3333 3.39975 13.3333 2.93304 13.1517 2.57652C12.9919 2.26292 12.7369 2.00795 12.4233 1.84816C12.0668 1.6665 11.6001 1.6665 10.6667 1.6665H9.33333C8.39991 1.6665 7.9332 1.6665 7.57668 1.84816C7.26308 2.00795 7.00811 2.26292 6.84832 2.57652C6.66667 2.93304 6.66667 3.39975 6.66667 4.33317V4.99984M8.33333 9.58317V13.7498M11.6667 9.58317V13.7498M2.5 4.99984H17.5M15.8333 4.99984V14.3332C15.8333 15.7333 15.8333 16.4334 15.5608 16.9681C15.3212 17.4385 14.9387 17.821 14.4683 18.0607C13.9335 18.3332 13.2335 18.3332 11.8333 18.3332H8.16667C6.76654 18.3332 6.06647 18.3332 5.53169 18.0607C5.06129 17.821 4.67883 17.4385 4.43915 16.9681C4.16667 16.4334 4.16667 15.7333 4.16667 14.3332V4.99984" stroke="#3384D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>

                `;
                }
        }
    ],
    order: [[1, 'asc']]
});
 
// Add event listener for opening and closing details
table.on('click', 'tbody td.dt-control', function (e) {
    let tr = e.target.closest('tr');
    let row = table.row(tr);
 
    if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
    }
    else {
        // Open this row
        row.child(format(row.data())).show();
    }
});
});
//END CLICKABLE ROW DATA TABLE

$(document).ready(function () {
    $('#myTable').DataTable();
});
// $(document).ready(function() {
//    $('#subscriTable').DataTable();  
// });


$(document).ready(function () {
    $('#myDatepicker').datepicker({
        format: 'dd-mm-yyyy', // Define the date format
        autoclose: true,     // Close the datepicker when a date is selected
        todayHighlight: true // Highlight today's date
    });
});
$(document).ready(function () {
    $('#myDatepicker2').datepicker({
        format: 'dd-mm-yyyy', // Define the date format
        autoclose: true,     // Close the datepicker when a date is selected
        todayHighlight: true // Highlight today's date
    });
});
$(document).ready(function () {
    $('.calender-simple').datepicker({
        format: 'dd-mm-yyyy', // Define the date format
        autoclose: true,     // Close the datepicker when a date is selected
        todayHighlight: true // Highlight today's date
    });
});
$(document).ready(function () {
    $('.calender-rgba').datepicker({
        format: 'dd-mm-yyyy', // Define the date format
        autoclose: true,     // Close the datepicker when a date is selected
        todayHighlight: true // Highlight today's date
    });
});

// SUBSCRIPTION-NEW STEPS
let currentStep = 0;
const steps = document.querySelectorAll('.step');
const contents = document.querySelectorAll('.content');

function updateStepper() {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index <= currentStep);
    });
    contents.forEach((content, index) => {
        content.classList.toggle('active', index === currentStep);
    });
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStepper();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        updateStepper();
    }
}
// END SUBSCRIPTION -NEW STEPS






$(document).ready(function () {

    //CHECKBOX
    $(".form-check .add-after").after('<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    $(".form-check.style-2 .add-after").after('<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    // END CHECKBOX

    //RADIO
    $(".add-after2").after('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" rx="5" transform="matrix(1 0 0 -1 5 15)" fill="#3384D8"/></svg>');
    // END RADIO

    // SLICK
    $('.pricing-slide').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // END SLICK


    //plus minus
    $('.btn-number').click(function (e) {
        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type == 'minus') {

                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if (type == 'plus') {

                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function () {
        $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function () {

        minValue = parseInt($(this).attr('min'));
        maxValue = parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());

        name = $(this).attr('name');
        if (valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if (valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }


    });
    $(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    //end plus minus

    // ----floating input label in input and select

    $('.form-group').find('.floating-control').each(function (index, ele) {
        var $ele = $(ele);
        if ($ele.val() != '' || $ele.is(':selected') === true) {
            $ele.parents('.floating-group').addClass('focused');
        }
    })




    $('.floating-control').on('focus', function (e) {
        $(this).parents('.floating-group').addClass('focused');
    }).on('blur', function () {
        if ($(this).val().length > 0) {
            $(this).paren
            ts('.floating-group').addClass('focused');
        } else {
            $(this).parents('.floating-group').removeClass('focused');
        }
    });
    $('.floating-control').on('change', function (e) {
        if ($(this).is('select')) {
            if ($(this).val() === $("option:first", $(this)).val()) {
                $(this).parents('.floating-group').removeClass('focused');
            }
            else {
                $(this).parents('.floating-group').addClass('focused');
            }
        }
    })






    //---- select2 single----
    $('.customSelect').each(function () {
        var dropdownParents = $(this).parents('.select2Part')
        $(this).select2({
            dropdownParent: dropdownParents,
            minimumResultsForSearch: -1
        }).on("select2:open", function (e) {
            $(this).parents('.floating-group').addClass('focused');
        }).on("select2:close", function (e) {
            if ($(this).find(':selected').val() === '') {
                $(this).parents('.floating-group').removeClass('focused');
            }
        });
    });

    // PRICING STEPS
    const slidePage = document.querySelector(".slide-page");
    const selectBtnFirst2Step1 = document.querySelector(".selectBtnFirst2Step1");
    const selectBtnFirst2Step2 = document.querySelector(".selectBtnFirst2Step2");
    const selectBtnFirst2Step3 = document.querySelector(".selectBtnFirst2Step3");
    const selectBtnFirst2Step4 = document.querySelector(".selectBtnFirst2Step4");
    const selectBtnFirst2Step5 = document.querySelector(".selectBtnFirst2Step5");
    const selectBtnFirst2Step6 = document.querySelector(".selectBtnFirst2Step6");
    const selectBtnFirst2Step7 = document.querySelector(".selectBtnFirst2Step7");
    const selectBtnFirst2Step8 = document.querySelector(".selectBtnFirst2Step8");
    const nextBtnFirst = document.querySelector(".firstNext");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");
    const nextBtnThird = document.querySelector(".next-2");
    const nextBtnFourth = document.querySelector(".next-3");
    const prevBtnFourth = document.querySelector(".prev-3");
    const nextBtnFifth = document.querySelector(".next-4");
    const prevBtnFifth = document.querySelector(".prev-4");
    const prevBtnSixth = document.querySelector(".prev-5");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const step = document.querySelectorAll(".step");
    let current = 1;

    if (selectBtnFirst2Step1) {
        selectBtnFirst2Step1.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            slidePage.style.marginLeft = "-50%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (selectBtnFirst2Step2) {
        selectBtnFirst2Step2.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            slidePage.style.marginLeft = "-50%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (selectBtnFirst2Step3) {
        selectBtnFirst2Step3.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            slidePage.style.marginLeft = "-50%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (selectBtnFirst2Step4) {
        selectBtnFirst2Step4.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            slidePage.style.marginLeft = "-50%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (selectBtnFirst2Step5) {
        selectBtnFirst2Step5.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            slidePage.style.marginLeft = "-50%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (selectBtnFirst2Step6) {
        selectBtnFirst2Step6.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            slidePage.style.marginLeft = "-50%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (selectBtnFirst2Step7) {
        selectBtnFirst2Step7.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            slidePage.style.marginLeft = "-50%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (selectBtnFirst2Step8) {
        selectBtnFirst2Step8.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            slidePage.style.marginLeft = "-50%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (nextBtnFirst) {
        nextBtnFirst.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (nextBtnSec) {
        nextBtnSec.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-50%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (nextBtnThird) {
        nextBtnThird.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-75%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (nextBtnFourth) {
        nextBtnFourth.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-100%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (nextBtnFifth) {
        nextBtnFifth.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-125%";
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    }
    if (submitBtn) {
        submitBtn.addEventListener("click", function () {
            step[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
            setTimeout(function () {
                alert("Your Form Successfully Signed up");
                location.reload();
            }, 800);
        });
    }
    if (prevBtnSec) {
        prevBtnSec.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "0%";
            step[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    }
    if (prevBtnThird) {
        prevBtnThird.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-20%";
            step[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    }
    if (prevBtnFourth) {
        prevBtnFourth.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-50%";
            step[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    }
    if (prevBtnFifth) {
        prevBtnFifth.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-75%";
            step[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    }
    if (prevBtnSixth) {
        prevBtnSixth.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = "-100%";
            step[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    }
    // END PRICING STEPS


});



// BROWSE FILES

$('#file-upload').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename').text(filename);
});
$('#file-upload-2').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-2').text(filename);
});
$('#file-upload-3').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-3').text(filename);
});
$('#file-upload-4').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-4').text(filename);
});
$('#file-upload-5').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-5').text(filename);
});
$('#file-upload-6').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-6').text(filename);
});
$('#file-upload-7').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-7').text(filename);
});
$('#file-upload-8').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename-8').text(filename);
});



///// Script For Height Calculation

var mainHeight = $(window).innerHeight();
var headerHeight = $('.ticket-landing-navbar').innerHeight();
var FooterHeight = $('.ticket-footer').innerHeight();
var innercontentHeight = mainHeight - (headerHeight + FooterHeight);
var skyblueHeight = $('#skyblue-strip-scroll').innerHeight();

$('#content-part-scroll').css('height', mainHeight - (headerHeight + FooterHeight) + 'px');
$('#rightscroll').css('height', mainHeight - (headerHeight + FooterHeight + skyblueHeight) + 'px');

console.log(FooterHeight);
console.log(headerHeight);
console.log(innercontentHeight);
console.log(mainHeight);
console.log(skyblueHeight);

window.onresize = function (event) {
    var mainHeight = $(window).innerHeight();
    var headerHeight = $('.ticket-landing-navbar').innerHeight();
    var FooterHeight = $('.ticket-footer').innerHeight();
    var innercontentHeight = mainHeight - (headerHeight + FooterHeight);
    var skyblueHeight = $('#skyblue-strip-scroll').innerHeight();

    $('#content-part-scroll').css('height', mainHeight - (headerHeight + FooterHeight) + 'px');
    $('#rightscroll').css('height', mainHeight - (headerHeight + FooterHeight + skyblueHeight) + 'px');

    console.log(FooterHeight);
    console.log(headerHeight);
    console.log(innercontentHeight);
    console.log(mainHeight);
    console.log(skyblueHeight);

};


