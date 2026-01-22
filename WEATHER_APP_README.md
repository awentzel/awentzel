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

### Prerequisites

You need to have Node.js installed on your system. Download it from [nodejs.org](https://nodejs.org/) (LTS version recommended).

### Windows Installation

1. **Install Node.js (if not already installed)**
   - Download the Windows installer from [https://nodejs.org/](https://nodejs.org/)
   - Run the installer (.msi file)
   - Follow the installation wizard (keep default settings)
   - Verify installation by opening Command Prompt or PowerShell and running:
     ```cmd
     node --version
     npm --version
     ```

2. **Download or Clone the Repository**
   - Using Git (if installed):
     ```cmd
     git clone https://github.com/awentzel/awentzel.git
     cd awentzel
     ```
   - Or download and extract the ZIP file from GitHub

3. **Install Dependencies**
   - Open Command Prompt or PowerShell in the project directory
   - Run:
     ```cmd
     npm install
     ```

4. **Run the Application**
   - Start the server:
     ```cmd
     npm start
     ```
   - Open your web browser and navigate to: `http://localhost:3000`

5. **Stop the Server**
   - Press `Ctrl+C` in the Command Prompt/PowerShell window

### macOS/Linux Installation

1. Install Node.js dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser to: `http://localhost:3000`

## Configuration

The weather station configuration can be set via environment variables or defaults to the provided values in `server.js`:

### Using Environment Variables (Recommended for Production)

Create a `.env` file (see `.env.example`):
```bash
WU_API_KEY=your-api-key
WU_STATION_ID=your-station-id
```

### Default Configuration (Development)
- Station ID: KAZTUCSO3584
- Location: 32.23°N, 110.76°W
- API Key: Configured in server.js

## Technology Stack

- Frontend: HTML, CSS, JavaScript (Vanilla)
- Backend: Node.js with Express
- API: Weather Underground PWS API

## Architecture

The application uses a simple proxy server to avoid CORS issues:
1. Frontend (`public/index.html`) makes requests to `/api/weather`
2. Backend server (`server.js`) proxies requests to Weather Underground API
3. Weather data is returned in JSON format and displayed in the UI
4. Static files are served only from the `public` directory for security
