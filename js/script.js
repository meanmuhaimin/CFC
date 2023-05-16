// Global variables to store user input
let transportationEmissions = 0;
let energyEmissions = 0;
let wasteEmissions = 0;

// Function to calculate carbon footprint
function calculateCarbonFootprint() {
    // Calculate total emissions based on user input
    const totalEmissions = transportationEmissions + energyEmissions + wasteEmissions;

    // Display the result and breakdown
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h2>Carbon Footprint Result</h2>
        <p>Your total carbon emissions are: <strong>${totalEmissions} kg CO2e</strong></p>
        <h3>Emissions Breakdown</h3>
        <ul>
            <li>Transportation: ${transportationEmissions} kg CO2e</li>
            <li>Energy Usage: ${energyEmissions} kg CO2e</li>
            <li>Waste Generation: ${wasteEmissions} kg CO2e</li>
        </ul>
        <p>Take steps to reduce your carbon footprint and contribute to a greener future!</p>
    `;
}

// Event listeners for transportation form
document.getElementById('car-distance').addEventListener('input', function() {
    const carDistance = parseFloat(this.value);
    transportationEmissions = carDistance * 0.2; // Assuming 0.2 kg CO2e per km
});

document.getElementById('public-transport-distance').addEventListener('input', function() {
    const publicTransportDistance = parseFloat(this.value);
    transportationEmissions = publicTransportDistance * 0.1; // Assuming 0.1 kg CO2e per km
});

// Event listener for energy form
document.getElementById('electricity-usage').addEventListener('input', function() {
    const electricityUsage = parseFloat(this.value);
    energyEmissions = electricityUsage * 0.5; // Assuming 0.5 kg CO2e per kWh
});

document.getElementById('gas-usage').addEventListener('input', function() {
    const gasUsage = parseFloat(this.value);
    energyEmissions = gasUsage * 2.5; // Assuming 2.5 kg CO2e per cubic meter
});

// Event listener for waste form
document.getElementById('waste-amount').addEventListener('input', function() {
    const wasteAmount = parseFloat(this.value);
    wasteEmissions = wasteAmount * 0.3; // Assuming 0.3 kg CO2e per kg of waste
});

// Event listener for form submission
document.getElementById('carbon-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    calculateCarbonFootprint(); // Calculate and display the carbon footprint result
});
