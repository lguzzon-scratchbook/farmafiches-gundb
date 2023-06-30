# FarmaFiches - F7 - GunDB

FarmaFiches is a Cordova application designed to support doctors in consulting "fiches" (pdf files) from health care companies.

## Tech Stack

- Framework 7 - v 8.10
- Svelte
- GunDB (Back end)

## Features

- Display a list of "Fiches"
- Each "fiche" is a PDF file stored in the back end
- User authentication
- Save analytics data in the back end

## Installation

1. Clone the repository
```
git clone https://github.com/yourusername/FarmaFiches.git
```
2. Navigate to the project directory
```
cd FarmaFiches
```
3. Install dependencies
```
npm install
```
4. Run the application
```
npm start
```

## File Structure

The application is structured as follows:

- `src/` - Contains the source code for the application
  - `index.html` - The main HTML file
  - `js/` - Contains JavaScript files
    - `app.js` - The main JavaScript file
    - `routes.js` - Defines the application routes
    - `services/` - Contains service files
      - `authService.js` - Handles user authentication
      - `ficheService.js` - Handles operations related to "fiches"
      - `analyticsService.js` - Handles analytics data
    - `views/` - Contains view files
      - `home.js` - The home view
      - `login.js` - The login view
      - `fiche.js` - The "fiche" view
  - `css/` - Contains CSS files
    - `app.css` - The main CSS file
    - `home.css` - CSS for the home view
    - `login.css` - CSS for the login view
    - `fiche.css` - CSS for the "fiche" view
  - `assets/pdf/` - Contains the "fiche" PDF files
- `www/` - Contains the built application
- `cordova.xml` - The Cordova configuration file
- `package.json` - Defines the project dependencies
- `webpack.config.js` - The Webpack configuration file
- `.gitignore` - Specifies files to ignore in version control
- `README.md` - This file

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.