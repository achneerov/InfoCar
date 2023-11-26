window.onload = function() {
    const vinFromUrl = window.location.pathname.split('/').pop();
    console.log('VIN from URL:', vinFromUrl);

    if (vinFromUrl) {
        generateReport(vinFromUrl);
    }
};

function generateReport(VIN) {
    console.log('Generating report for VIN:', VIN);

    // Make an AJAX request to the Flask server
    fetch('/generate_report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'vin': VIN,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Report data received:', data);

        document.getElementById('reportDate').innerHTML = `Report Date: ${new Date().toLocaleString()}`;
        document.getElementById('yearMakeModelSection').innerHTML = `<h2>${data.result.YearMakeModel.join(' ')}</h2>`;
        document.getElementById('openRecallsSection').innerHTML = `<h2>Open Recalls</h2>
            <p>${data.result.OpenRecalls}</p>`;
        document.getElementById('stolenVehicleSection').innerHTML = `<h2>Stolen Vehicle Check</h2>
            <p>${data.result.StolenVehicleCheck}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
