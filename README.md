# Space Explorer

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vite](https://img.shields.io/badge/vite-%5E4.0.0-brightgreen)
![React](https://img.shields.io/badge/react-%5E18.0.0-blue)

## Introduction

**Space Explorer** is an open-source web application built with React and Vite, designed to provide users with seamless access to Mars rover photographs taken on specified dates. Additionally, it offers comprehensive information on approaching asteroids, including their size, approach date, and risk level. This tool is invaluable for astronomy researchers and enthusiasts who seek timely and accurate data on extraterrestrial exploration and potential celestial threats.

## Features

- **Mars Rover Photos**: Access photos captured by all Mars rovers on any selected date.
- **Asteroid Information**: View details about upcoming asteroids, including size, approach date, and risk assessment.
- **Real-Time Data**: Leverage NASA's APIs to fetch the latest information.
- **Hot Module Replacement (HMR)**: Experience instant feedback during development with Vite's HMR.
- **ESLint Integration**: Maintain code quality and consistency with predefined ESLint rules.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Language**: JavaScript
- **Styling**: [CSS Modules](https://github.com/css-modules/css-modules) / [Tailwind CSS](https://tailwindcss.com/) *(optional)*
- **Bundler Plugins**:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) using [Babel](https://babeljs.io/) for Fast Refresh

## Environment Setup

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
VITE_API_URL=https://api.nasa.gov/
VITE_NASA_API_KEY=YOUR_API_KEY
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. **Space Explorer** welcomes contributions from everyone. Whether you're fixing a bug, improving documentation, or suggesting new features, your input is highly valued.

### How to Contribute

1. **Fork the Project**  
2. **Create a Feature Branch**  
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit Your Changes**  
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push to the Branch**  
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
