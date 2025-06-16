
## Overview

### Backend

One model - Product

One endpoint with different options that will filter based on rating or reviews

### Frontend

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
*Be sure to be within the product_frontend director*
`npm test`


## Assumptions
- Ratings are on a 0-5 scale
- Review counts are an integer count and 0 indicates no reviews
- Current implementation assumes local backend server will be on port 8000 - if using a different port edit API_BASE_URL in [ProductCard](product_frontend/src/ProductCard/ProductCard.tsx) to map to the appropriate port
- Best rated and most reviewed will limit data to 15 as a default but the endpoint accepts an optional limit param which can alter the number of results


