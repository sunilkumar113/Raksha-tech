document.addEventListener('DOMContentLoaded', () => {
    const ctxPatchCompliance = document.getElementById('patchComplianceChart').getContext('2d');
    const ctxActionStatus = document.getElementById('actionStatusChart').getContext('2d');
    const ctxRegionalCompliance = document.getElementById('regionalComplianceChart').getContext('2d');
    const ctxOutletLevelCompliance = document.getElementById('outletLevelComplianceChart').getContext('2d');
    const ctxRelayHealth = document.getElementById('relayHealthChart').getContext('2d');
    const ctxPendingPatch = document.getElementById('pendingPatchChart').getContext('2d');
    const ctxContentWise = document.getElementById('contentWiseChart').getContext('2d');
    const ctxSeverityBased = document.getElementById('severityBasedChart').getContext('2d');
    const ctxOverallCompliance = document.getElementById('overallComplianceChart').getContext('2d');
    const ctxComplianceLevel = document.getElementById('complianceLevelChart').getContext('2d');

    const dataPatchCompliance = {
        labels: ['Compliant', 'Non-compliant'],
        datasets: [{
            data: [62.53, 37.47],
            backgroundColor: ['#6e8efb', '#f44336'],
        }]
    };

    const dataActionStatus = {
        labels: ['In Progress', 'Failed', 'Completed', 'Not Started'],
        datasets: [{
            data: [29.31, 28.02, 41.38, 1.29],
            backgroundColor: ['#ff9800', '#f44336', '#6e8efb', '#9e9e9e'],
        }]
    };

    const dataRegionalCompliance = {
        labels: ['Region 1', 'Region 2', 'Region 3', 'Region 4', 'Region 5'],
        datasets: [{
            data: [20, 30, 25, 15, 10],
            backgroundColor: ['#6e8efb', '#f44336', '#ffeb3b', '#2196f3', '#9c27b0'],
        }]
    };

    const dataOutletLevelCompliance = {
        labels: ['Outlet 1', 'Outlet 2', 'Outlet 3', 'Outlet 4', 'Outlet 5'],
        datasets: [{
            data: [10, 20, 30, 25, 15],
            backgroundColor: ['#ff5722', '#8bc34a', '#00bcd4', '#ffc107', '#e91e63'],
        }]
    };

    const dataRelayHealth = {
        labels: ['Relays'],
        datasets: [{
            data: [98.67, 1.33],
            backgroundColor: ['#f44336', '#6e8efb'],
        }]
    };

    const dataPendingPatch = {
        labels: ['Pending', 'Applied'],
        datasets: [{
            data: [5.33, 94.67],
            backgroundColor: ['#f44336', '#6e8efb'],
        }]
    };

    const dataContentWise = {
        labels: ['Content 1', 'Content 2'],
        datasets: [{
            data: [47.81, 52.19],
            backgroundColor: ['#6e8efb', '#f44336'],
        }]
    };

    const dataSeverityBased = {
        labels: ['Critical', 'Important', 'Moderate', 'Low', 'Unspecified'],
        datasets: [{
            label: 'Compliant',
            data: [53.96, 52.59, 41.03, 58.97, 47.41],
            backgroundColor: '#6e8efb',
        }, {
            label: 'Non-compliant',
            data: [46.04, 47.41, 58.97, 41.03, 52.59],
            backgroundColor: '#f44336',
        }]
    };

    const dataOverallCompliance = {
        labels: ['Compliant', 'Non-compliant', 'Partially Compliant'],
        datasets: [{
            data: [74.47, 14.89, 10.64],
            backgroundColor: ['#6e8efb', '#f44336', '#ff9800'],
        }]
    };

    const dataComplianceLevel = {
        labels: ['0%-20%', '20%-40%', '40%-60%', '60%-80%', '80%-100%'],
        datasets: [{
            data: [14.67, 8.00, 29.33, 14.67, 33.33],
            backgroundColor: ['#f44336', '#ff9800', '#6e8efb', '#2196f3', '#9c27b0'],
        }]
    };

    new Chart(ctxPatchCompliance, {
        type: 'doughnut',
        data: dataPatchCompliance,
    });

    new Chart(ctxActionStatus, {
        type: 'doughnut',
        data: dataActionStatus,
    });

    new Chart(ctxRegionalCompliance, {
        type: 'doughnut',
        data: dataRegionalCompliance,
    });

    new Chart(ctxOutletLevelCompliance, {
        type: 'doughnut',
        data: dataOutletLevelCompliance,
    });

    new Chart(ctxRelayHealth, {
        type: 'doughnut',
        data: dataRelayHealth,
    });

    new Chart(ctxPendingPatch, {
        type: 'doughnut',
        data: dataPendingPatch,
    });

    new Chart(ctxContentWise, {
        type: 'doughnut',
        data: dataContentWise,
    });

    new Chart(ctxSeverityBased, {
        type: 'bar',
        data: dataSeverityBased,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(ctxOverallCompliance, {
        type: 'doughnut',
        data: dataOverallCompliance,
    });

    new Chart(ctxComplianceLevel, {
        type: 'bar',
        data: dataComplianceLevel,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = './detailedpage.html';  // Adjust this URL to match your detailed page
    });
});

