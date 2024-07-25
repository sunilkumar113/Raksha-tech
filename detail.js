document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/data') 
        .then(response => response.json())
        .then(data => {
            const chartLabels = data.map(item => item.computer);
            const chartData = data.map(item => item.errorCode); 

            const ctx = document.getElementById('dataChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: chartLabels,
                    datasets: [{
                        label: 'Error Code Frequency',
                        data: chartData,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:5000/api/data')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#data-table tbody');
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.computer}</td>
                    <td>${item.osVersion}</td>
                    <td>${item.deploymentStatus}</td>
                    <td>${item.detailedStatus}</td>
                    <td>${item.errorCode}</td>
                    <td>${item.manufacturer}</td>
                    <td>${item.model}</td>
                    <td>${item.expectedInstall}</td>
                    <td>${item.lastScan}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
