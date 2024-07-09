document.addEventListener("DOMContentLoaded", function() {
    let selectYear = document.getElementById("carYear");
    for (let year = 2024; year >= 1980; year--) {
        let option = document.createElement("option");
        option.text = year;
        option.value = year;
        selectYear.appendChild(option);
    }
  
    function previewImage(input, preview) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                preview.attr("src", e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
  
    $("#frontImage").change(function () {
        previewImage(this, $("#frontImagePreview"));
    });
  
    $("#backImage").change(function () {
        previewImage(this, $("#backImagePreview"));
    });
  
    $("#sideImage").change(function () {
        previewImage(this, $("#sideImagePreview"));
    });
  
    $("#topImage").change(function () {
        previewImage(this, $("#topImagePreview"));
    });
  });
  
  $('#addCarForm').submit(function(e) {
    e.preventDefault();
  
    var carMake = $('#carMake').val();
    var carModel = $('#carModel').val();
    var carYear = $('#carYear').val();
    var carNumberPlate = $('#carNumberPlate').val();
    var carDescription = $('#carDescription').val();
    var frontImageUrl = $('#frontImagePreview').attr('src');
    var backImageUrl = $('#backImagePreview').attr('src');
    var sideImageUrl = $('#sideImagePreview').attr('src');
    var topImageUrl = $('#topImagePreview').attr('src');
  
    var newCarEntry = `
        <div class="car-entry">
            <h3>${carMake} ${carModel} (${carYear})</h3>
            <img src="${frontImageUrl}" alt="Front Image">
            <p>${carDescription}</p>
            <p>Number Plate: ${carNumberPlate}</p>
        </div>
    `;
  
    $('#popularCarSet').append(newCarEntry);
  
    $('#carMake').val('');
    $('#carModel').val('');
    $('#carYear').val('');
    $('#carNumberPlate').val('');
    $('#carDescription').val('');
  
    $('#frontImagePreview').attr('src', '#');
    $('#backImagePreview').attr('src', '#');
    $('#sideImagePreview').attr('src', '#');
    $('#topImagePreview').attr('src', '#');
  });
  