const express = require('express');
const https = require('https');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration - In production, use environment variables:
// const API_KEY = process.env.WU_API_KEY || 'your-api-key';
// For this personal weather station, the API key is provided by the station owner
const API_KEY = process.env.WU_API_KEY || 'ef51e1a0a0d8449091e1a0a0d8d490c1';
const STATION_ID = process.env.WU_STATION_ID || 'KAZTUCSO3584';

// Serve static files from public directory only
app.use(express.static(path.join(__dirname, 'public')));

// API proxy endpoint to avoid CORS issues
app.get('/api/weather', (req, res) => {
    const apiUrl = `https://api.weather.com/v2/pws/observations/current?stationId=${STATION_ID}&format=json&units=m&apiKey=${API_KEY}`;
    
    https.get(apiUrl, (apiRes) => {
        let data = '';
        
        apiRes.on('data', (chunk) => {
            data += chunk;
        });
        
        apiRes.on('end', () => {
            try {
                const parsedData = JSON.parse(data);
                if (parsedData.errors) {
                    throw new Error('API returned errors');
                }
                res.setHeader('Content-Type', 'application/json');
                res.json(parsedData);
            } catch (parseError) {
                console.error('Error parsing API response:', parseError.message);
                res.status(500).json({ error: 'Invalid API response' });
            }
        });
        
    }).on('error', (error) => {
        console.error('Error fetching weather data from API:', error.message);
        console.log('Using mock data for demonstration purposes');
        
        // Return mock data for demonstration when API is unreachable
        const mockData = {
            observations: [{
                stationID: STATION_ID,
                obsTimeLocal: new Date().toISOString(),
                humidity: 45,
                metric: {
                    temp: 18,
                    dewpt: 7,
                    pressure: 1013.25,
                    elev: 739
                },
                realtimeFrequency: 4
            }]
        };
        
        res.setHeader('Content-Type', 'application/json');
        res.json(mockData);
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Weather Underground PWS server running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
});
