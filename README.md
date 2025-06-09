

Running Locally


1. Install uv (if you don't already have it)
2. git clone
3. Go into the main project directory `cd product-dashboard`
4. Install dependencies and create virutal env with `uv sync`
5. Activate the virtual environment with `source .venv/bin/activate` (optional - can otherwise run commands with uv which will run within virtualenv)


Make Migrations
`uv run python manage.py makemigrations`

Apply Migrations
`uv run python manage.py migrate`


Running Tests
`uv run pytest`
