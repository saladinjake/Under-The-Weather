# Weather Dashboard

A comprehensive weather monitoring application built with Angular. It provides current conditions, hourly breakdowns, and multi-day forecasts for cities worldwide using a public weather API. Users can search for any city and view detailed atmospheric data without authentication.

## Features

The dashboard displays the current temperature, weather condition, humidity, wind speed, visibility, and feels-like temperature for the searched city. A five-day forecast panel shows daily high and low temperatures with weather descriptions. An hourly breakdown chart presents temperature trends throughout the day. Users can search for a city using the search bar and trigger a data refresh by pressing Enter or clicking the search button. Error handling is in place for invalid city names or failed API requests.

## Technology Stack

- Angular: Component-based framework for all dashboard views and data binding.
- Angular Router: Manages navigation within the application.
- Angular Services: WeatherService handles HTTP requests to the public weather API and maps the response data to typed models.
- Angular HttpClient: Used for making GET requests to the weather API endpoint.
- TypeScript: Typed interfaces for weather response payloads, current conditions, and forecast data.
- Angular Material: Used for cards, input fields, and layout components.
- RxJS: Observables used for managing async HTTP requests and search input debouncing.
- Public weather API: A free weather data endpoint available in 2022 that does not require an API key.

## Project Structure

The source directory contains the search bar component, the current conditions card, the forecast panel, and the hourly chart component. The WeatherService abstracts the API call and data transformation. Environment files store the API base URL.

## Running the Project

Install dependencies and start the development server:

    npm install
    ng serve

The application is available at http://localhost:4200.

Last updated: 2026-05-01
