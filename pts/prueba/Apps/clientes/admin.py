from django.contrib import admin
from Apps.clientes.models import Cliente

# Register your models here.

class ClienteAdmin(admin.ModelAdmin):
    readonly_fields = ('correo',) #No permite edicion de create y update
    # readonly_fields = ('created', 'updated') #No permite edicion de create y update
    list_display = ('nombre', 'direccion', 'telefono', 'correo')
    ordering = ('nombre', 'direccion', 'correo')  # En caso que sea una sola ordering('column',)
    #form de busqueda
    search_fields = ('nombre','correo') #Campo relacionado

    list_filter = ('nombre', 'correo','direccion') # Campos relacionados


admin.site.register(Cliente, ClienteAdmin)
