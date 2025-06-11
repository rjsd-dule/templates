# Templates Django

Plantilla base para Django, totalmente configurada, escalable y personalizable.
Diseñada como punto de partida para proyectos desarrollados con Django, esta plantilla incluye vistas limpias y profesionales para mostrar precios de productos y servicios. Su estructura modular y clara facilita la integración en aplicaciones web, landing pages o presentaciones comerciales dentro del ecosistema Django.

Además, sirve como ejemplo básico de cómo estructurar un proyecto Django de forma general: incluye la organización de carpetas típica, configuración inicial, y buenas prácticas para escalar aplicaciones conforme crecen en complejidad.

---

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Python 3.8 o superior  
- pip (gestor de paquetes de Python)  
- (Opcional) Docker y Docker Compose

Instala las dependencias desde el archivo `requirements.txt`:

```bash
pip install -r requirements.txt
```

---

## Ejecución local

Para ejecutar el proyecto en modo local:

```bash
python manage.py runserver
```

Luego, abre tu navegador en `http://127.0.0.1:8000/` para ver la aplicación en funcionamiento.

---

## Ejecución con Docker (opcional)

Este proyecto incluye un archivo `Dockerfile` para facilitar su despliegue en contenedores. Si prefieres ejecutar la aplicación usando Docker, sigue estos pasos:

1. **Construye la imagen del contenedor:**

   ```bash
   docker build -t django-templates .
   ```

2. **Ejecuta el contenedor:**

   ```bash
   docker run -p 8000:8000 django-templates
   ```

La aplicación estará disponible en `http://localhost:8000/`.

---

## Estructura del proyecto

```plaintext
template/
├── app/                    # Aplicación principal
│   ├── models.py
│   ├── views.py
│   ├── forms.py
│   ├── templates/          # Archivos HTML
│   ├── static/             # Archivos estáticos (CSS, JS, imágenes)
│   └── migrations/
├── template/               # Configuración global del proyecto
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── manage.py
├── requirements.txt
├── Dockerfile
```

---

## Características

- Estructura clara y modular.
- Compatible con despliegue en Docker.
- Plantillas de precios y servicios listas para usar.
- Fácilmente integrable en cualquier proyecto Django.

---

## rutas (url)

- http://localhost:8000/precios

---
