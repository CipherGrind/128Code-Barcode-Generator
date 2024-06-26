var barcodeScale = 1;

function generateBarcode() {
    var password = document.getElementById('password').value.trim();
    if (password === '') {
        alert('Please enter data.');
        return;
    }

    var canvas = document.getElementById('barcode');
    canvas.innerHTML = ''; 

    bwipjs.toCanvas(canvas, {
        bcid: 'code128',
        text: password,
        scale: barcodeScale,
        includetext: true,
        textxalign: 'center',
        textsize: 20
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
    document.getElementById('password').value = '';
}

///////////////////////////////////////
///////////////////////////////////////

function openSettings() {
    document.getElementById("settingsPopup").style.width = "330px";
}

function closeSettings() {
    document.getElementById("settingsPopup").style.width = "0px";
}

////////////////////////
////////////////////////

function selectSize(button, scale) {
    barcodeScale = scale;
    
    var sizeButtons = document.querySelectorAll("#sizeButtons button");
    sizeButtons.forEach(function(btn) {
        btn.classList.remove("selected");
    });
    
    button.classList.add("selected");
}

////////////////////////
////////////////////////

function downloadBarcode() {
    const barcode128 = document.getElementById('barcode');

    html2canvas(barcode128, {
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'barcode.png';
        link.click();
    }).catch(err => {
        console.error('Error generating image:', err);
        alert('An error occurred while generating the badge image.');
    });
}