
## Running Locally

1. Install uv (if you don't already have it)
2. git clone
3. Go into the main project directory `cd product-dashboard`
4. Install dependencies and create virutal env with `uv sync`
5. Activate the virtual environment with `source .venv/bin/activate` (optional - can otherwise run commands with uv which will run within virtualenv)
6. Make Migrations `uv run python manage.py makemigrations`
7. Apply Migrations `uv run python manage.py migrate`
8. Load fixture data `uv run python manage.py loaddata products`
9. Start the backend server `uv run python manage.py runserver`
10. Install node dependencies * Make sure to cd into product_frontend * and run `npm install`
11. Start the fronend server - * Make sure to cd into product_frontend * and then run `npm run dev`

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
`uv run pytest`

Running Frontend Tests
*Be sure to be within the product_frontend director*
`npm test`

## Code Overview

### Backend

One model - Product

One endpoint with different options that will filter based on rating or reviews

### Frontend

The app is made up of the folllowing main components:
- [Dasboard](product_frontend/src/ProductDashboard/ProductDashboard.tsx)
- [ProductGallery](product_frontend/src/ProductGallery/ProductGallery.tsx)
- [ProductCard](product_frontend/src/ProductCard/ProductCard.tsx)

## Assumptions
- Ratings are on a 0-5 scale
- Review counts are an integer count and 0 indicates no reviews
- Current implementation assumes local backend server will be on port 8000


