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

    $('#addCarForm').submit(function(e) {
        e.preventDefault();
      
        var carData = {
            make: $('#carMake').val(),
            model: $('#carModel').val(),
            year: $('#carYear').val(),
            numberPlate: $('#carNumberPlate').val(),
            description: $('#carDescription').val(),
            frontImage: $('#frontImagePreview').attr('src')
        };
    
        // Retrieve existing car data array from localStorage
        var existingCarData = JSON.parse(localStorage.getItem('carData')) || [];
    
        // Append the new car data to the existing array
        existingCarData.push(carData);
    
        // Store the updated array back in localStorage
        localStorage.setItem('carData', JSON.stringify(existingCarData));
    
        window.location.href = 'car-auction2.html';
    });
});
