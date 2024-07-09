document.addEventListener("DOMContentLoaded", function() {
    var allCarData = JSON.parse(localStorage.getItem('carData')) || [];

    allCarData.forEach(function(car) {
        displayCar(car);
    });
});

function displayCar(car) {
    var carEntry = `
        <div class="car-entry">
            <h3>${car.make} ${car.model} (${car.year})</h3>
            <img src="${car.frontImage}" alt="Front Image">
            <p>${car.description}</p>
            <p>Number Plate: ${car.numberPlate}</p>
        </div>
    `;
  
    $('#popularCarSet').append(carEntry);


    $('#carMake').val('');
    $('#carModel').val('');
    $('#carYear').val('');
    $('#carNumberPlate').val('');
    $('#carDescription').val('');
  
    $('#frontImagePreview').attr('src', '#');
    $('#backImagePreview').attr('src', '#');
    $('#sideImagePreview').attr('src', '#');
    $('#topImagePreview').attr('src', '#');
  };

  function removeCar(index) {
    var existingCarData = JSON.parse(localStorage.getItem('carData')) || [];

    existingCarData.splice(index, 1);
    
    localStorage.setItem('carData', JSON.stringify(existingCarData));
    
    $('.car-entry').eq(index).remove();
};
