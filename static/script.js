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





        // Assume data.result.OpenRecalls is your array of arrays
        const openRecallsData = data.result.OpenRecalls;

        // Get the element where you want to display open recalls
        const openRecallsSection = document.getElementById('openRecallsSection');

        // Create a table element
        const table = document.createElement('table');

        // Add a header row
        const headerRow = table.insertRow();
        ['Recall ID', 'Description', 'Status'].forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        // Iterate over the array and create rows for each set of recalls
        openRecallsData.forEach(recall => {
            const row = table.insertRow();
            recall.forEach(cellText => {
                const cell = row.insertCell();
                cell.textContent = cellText;
            });
        });

        // Append the table to the open recalls section
        openRecallsSection.innerHTML = '<h2>Open Recalls</h2>';
        openRecallsSection.appendChild(table);





        //document.getElementById('openRecallsSection').innerHTML = `<h2>Open Recalls</h2>
            //<p>${data.result.OpenRecalls}</p>`;
        document.getElementById('stolenVehicleSection').innerHTML = `<h2>Stolen Vehicle Check</h2>
            <p>${data.result.StolenVehicleCheck}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
