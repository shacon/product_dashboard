from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Product


def index(request):
    return HttpResponse("Hello, world. You're at the dashboard index.")


def products(request):
  queryset = Product.objects.all()
  if request.GET.get('best_rated') is not None:
    queryset = queryset.filter(rating__isnull=False).order_by('-rating')
  elif request.GET.get('most_reviewed') is not None:
    queryset = queryset.filter(total_reviews__isnull=False).order_by('-total_reviews')
  limit = request.GET.get('limit')
  if limit:
    queryset = queryset[:int(limit)]

  products_list = []
  for product in queryset:
      products_list.append({
          'id': product.id,
          'name': product.name,
          'price': str(product.price),
          'total_reviews': product.total_reviews,
          'rating': str(product.rating) if product.rating else None,
          'image_url': product.image_url,
      })
    
  return JsonResponse({'products': products_list})
