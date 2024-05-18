var barcodeScale = 1; // Default barcode size



function generateBarcode() {
    var password = document.getElementById('password').value.trim();
    if (password === '') {
        alert('Please enter data.');
        return;
    }

    var canvas = document.getElementById('barcode');
    canvas.innerHTML = ''; // Clear previous barcode if any

    bwipjs.toCanvas(canvas, {
        bcid: 'code128',       // Barcode type
        text: password,        // Text to encode
        scale: barcodeScale,   // Scaling factor
        includetext: true,     // Show human-readable text
        textxalign: 'center',  // Text horizontal alignment
        textsize: 20           // Text size
    }, function (err) {
        if (err) {
            alert(err);
        }
    });
}

///////////////////////////////////////
///////////////////////////////////////

function clearBarcode() {
    var canvas = document.getElementById('barcode');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clearData() {
    document.getElementById('password').value = ''; // Clear password input field
}


///////////////////////////////////////
///////////////////////////////////////

// Function to open settings pop-out window
function openSettings() {
    document.getElementById("settingsPopup").style.width = "330px";
}

// Function to close settings pop-out window
function closeSettings() {
    document.getElementById("settingsPopup").style.width = "0px";
}



////////////////////////
////////////////////////


// Function to select barcode size
function selectSize(button, scale) {
    barcodeScale = scale;
    
    // Remove 'selected' class from all buttons
    var sizeButtons = document.querySelectorAll("#sizeButtons button");
    sizeButtons.forEach(function(btn) {
        btn.classList.remove("selected");
    });
    
    // Add 'selected' class to the clicked button
    button.classList.add("selected");
}