from django.http import HttpResponse
from django.shortcuts import render, redirect
from app.models.Prices import Prices
from app.forms.Form_prices import Form_prices

def home(request):
    return HttpResponse('Home')

def templateMenu(request):
    return render(request,'precios.html')

def listadoMenu(request):
    model=Prices.objects.all().order_by('plan')
    planes=[f"{e.plan}" for e in model]
    return HttpResponse(f"Planes : {', '.join(planes)}")

def registroPlanes(request):
    if request.method=="POST":
        form=Form_prices(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("Registro Exitoso")
    else:
        form=Form_prices()
    return render(request,"registro_precios.html",{"form":form})