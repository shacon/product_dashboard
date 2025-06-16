
## Overview

A responsive web app that displays products. Currently two product galleries are displayed on the dashboard:
1. Best rated - products with highest ratings
2. Most reviewed - products with the highest number of reviews

### Backend (Django)

Django project with `product_backend/` for configuration and `dashboard/` app for the products API.

One model - Product

One endpoint with different options that will filter based on rating or reviews:

`GET /api/products/`
- `filter_type`: `best_rated` | `most_reviewed`
- `limit`: Number (1-100, default: 15)

Example: `GET /api/products/?filter_type=best_rated&limit=10`

### Frontend (React/Typescript)

The app is made up of the folllowing main components:
- [Dasboard](product_frontend/src/ProductDashboard/ProductDashboard.tsx)
- [ProductGallery](product_frontend/src/ProductGallery/ProductGallery.tsx)
- [ProductCard](product_frontend/src/ProductCard/ProductCard.tsx)


## Requirements

- uv (Python package manager)
- Node.js 18+ (nvm recommended for Node version management)


## Running Locally

1. `git clone https://github.com/shacon/products.git`
2. Go into the main project directory `cd product_dashboard`
3. Install dependencies and create virutal env with `uv sync`
4. Apply Migrations `uv run python manage.py migrate`
5. Load fixture data `uv run python manage.py loaddata products`
6. Start the backend server `uv run python manage.py runserver`
7. If you use nvm as the node versioning tool do `nvm use` to use version 18 - otherwise switch to Node.js 18+
8. Install node dependencies * Make sure to cd into product_frontend * and run `npm install`
9. Start the frontend server - * Make sure to cd into product_frontend * and then run `npm run dev`

Access: Frontend at http://localhost:5173, Backend at http://localhost:8000
Note: If backend port on your local machine is different - images may not load properly

## Useful commands:

Make Migrations
`uv run python manage.py makemigrations`

Apply Migrations
`uv run python manage.py migrate`

Django Shell
`uv run python manage.py shell`

Running Backend Tests
`uv run pytest` from product_dashboard

Running Frontend Tests
*Be sure to be within the product_frontend directory*
`npm test`


## Assumptions
- Ratings are on a 0-5 scale
- Review counts are an integer count and 0 indicates no reviews
- Current implementation assumes local backend server will be on port 8000 - if using a different port edit API_BASE_URL in [ProductCard](product_frontend/src/ProductCard/ProductCard.tsx) to map to the appropriate port
- Best rated and most reviewed will limit data to 15 as a default but the endpoint accepts an optional limit param which can alter the number of results


## Responsive Design

Gallery will show a number of products based on screen size - 5 for desktop/large 3 for tablet and 1 for mobile

Screenshots:

<img width="1375" alt="Screenshot 2025-06-16 at 11 20 22 AM" src="https://github.com/user-attachments/assets/835f989c-c0de-46d5-b970-59548d83c221" />


<img width="450" alt="Screenshot 2025-06-16 at 11 21 10 AM" src="https://github.com/user-attachments/assets/12d5e90a-72a7-4209-bda4-0d4111602794" />


<img width="307" alt="Screenshot 2025-06-16 at 11 16 56 AM" src="https://github.com/user-attachments/assets/db084d27-a6db-4b46-9807-02017ec71b7c" />


