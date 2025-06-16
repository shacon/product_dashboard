import pytest
from django.urls import reverse
from .models import Product


@pytest.fixture
def test_products():
    product1 = Product.objects.create(name="Test Product", rating=4.5, total_reviews=10, price=30)
    product2 = Product.objects.create(name="Test Product 2", rating=3.2, total_reviews=50, price=30)
    product3 = Product.objects.create(name="Test Product 4", rating=3.1, total_reviews=51, price=30)
    product4 = Product.objects.create(name="Test Product 3", total_reviews=100, price=300)
    return [product1, product2, product3, product4]

@pytest.mark.django_db
def test_products_endpoint_returns_best_rated_products(client, test_products):
    response = client.get(reverse('products'), {
      'filter_type': 'best_rated',
      'limit': 2
    })

    assert response.status_code == 200

    response_data = response.json()
    products = response_data['products']
    assert len(products) == 2
    assert products[0]['rating'] == '4.50'
    assert products[1]['rating'] == '3.20'

@pytest.mark.django_db
def test_products_endpoint_returns_most_reviewed_products(client, test_products):
    response = client.get(reverse('products'), {
      'filter_type': 'most_reviewed',
      'limit': 2
    })

    assert response.status_code == 200
    response_data = response.json()
    products = response_data['products']
    assert len(products) == 2
    assert products[0]['total_reviews'] == 100
    assert products[1]['total_reviews'] == 51
