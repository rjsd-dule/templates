from django import forms
from app.models.Prices import Prices

class Form_prices(forms.ModelForm):
    class Meta:
        model=Prices
        fields=['plan','prices','caracteristicas']