async function findNearestHospital() {
    const zipCode = document.querySelector('input[type="text"]').value.trim();
    
    if (!zipCode) {
        alert('Please enter a valid ZIP code');
        return;
    }

    try {
        // Step 1: Convert ZIP code to coordinates using Nominatim API
        const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&postalcode=${zipCode}&country=india`;
        const coordResponse = await fetch(nominatimUrl);
        const coordData = await coordResponse.json();

        if (!coordData.length) {
            alert('Could not find location for this ZIP code');
            return;
        }

        const { lat, lon } = coordData[0];

        // Step 2: Find nearby hospitals using Overpass API
        const overpassQuery = `
            [out:json];
            node
            ["amenity"="hospital"]
            (around:5000,${lat},${lon});
            out body;
        `;
        
        const overpassUrl = 'https://overpass-api.de/api/interpreter';
        const hospitalResponse = await fetch(overpassUrl, {
            method: 'POST',
            body: overpassQuery
        });
        
        const hospitalData = await hospitalResponse.json();
        const hospitals = hospitalData.elements;

        if (hospitals.length === 0) {
            alert('No hospitals found within 5km of this location');
            return;
        }

        // Step 3: Display results
        const nearestHospital = hospitals[0];
        const hospitalName = nearestHospital.tags.name || 'Unnamed Hospital';
        const latDiff = nearestHospital.lat - lat;
        const lonDiff = nearestHospital.lon - lon;
        const distance = Math.sqrt(latDiff * latDiff + lonDiff * lonDiff) * 111; // Rough km conversion

        alert(`Nearest Hospital Found!\nName: ${hospitalName}\nApproximate Distance: ${distance.toFixed(1)} km`);
        
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while searching for hospitals');
    }
}

// Update the button onclick event
document.querySelector('button').onclick = findNearestHospital;

// Optional: Add Enter key support
document.querySelector('input[type="text"]').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        findNearestHospital();
    }
});