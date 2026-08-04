# Debounced Product Search

A simple JavaScript application that displays products fetched from an API and provides a responsive live search experience.

## Features

- Display products fetched from an external API
- Live product search
- Debounced search input to prevent unnecessary API requests
- AbortController implementation to cancel previous pending requests
- Responsive and clean user interface

## Technologies

- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- Fetch API
- Debounce
- AbortController

## How It Works

1. When the page loads, all products are fetched from the API and displayed.
2. As the user types in the search input, the search function is debounced to avoid sending a request for every keystroke.
3. If the user continues typing before the previous request finishes, the previous request is canceled using **AbortController**.
4. Only the latest search request is processed and the matching products are displayed.

## Project Structure

```
├── index.html
├── app.js
└── README.md
```

## Demo

This project demonstrates how to build an efficient search experience using **Debounce** and **AbortController** to optimize API requests and improve performance.
