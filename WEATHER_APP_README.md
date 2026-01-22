# Weather Underground PWS Web App

A single-page web application that displays real-time weather data from Weather Underground Personal Weather Station (PWS).

## Features

- Real-time weather data from PWS station KAZTUCSO3584
- Displays key metrics in metric units:
  - Temperature (°C)
  - Humidity (%)
  - Dew Point (°C)
  - Pressure (mb)
  - Elevation (m)
  - Realtime Frequency
- Auto-refresh every 4 minutes
- Clean, responsive design
- Works on mobile and desktop

## Installation

1. Install Node.js dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Configuration

The weather station configuration is set in `server.js`:
- Station ID: KAZTUCSO3584
- Location: 32.23°N, 110.76°W
- API Key: Configured in server.js

## Technology Stack

- Frontend: HTML, CSS, JavaScript (Vanilla)
- Backend: Node.js with Express
- API: Weather Underground PWS API

## Architecture

The application uses a simple proxy server to avoid CORS issues:
1. Frontend (`index.html`) makes requests to `/api/weather`
2. Backend server (`server.js`) proxies requests to Weather Underground API
3. Weather data is returned in JSON format and displayed in the UI
