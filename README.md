Proyecto Consumo de Agua en Cataluña
Este proyecto crea una API con Node.js y Express que lee datos de consumo de agua por comarcas en Cataluña desde un archivo CSV y los expone a través de un endpoint. También incluye una página web que muestra los datos en una tabla interactiva y gráficos generados con Recharts.
Estructura del proyecto
proyecto/
├── data/
│   └── Consum_d_aigua_a_Catalunya_per_comarques_20250525.csv
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md

Requisitos

Node.js instalado
Navegador web (Google Chrome recomendado para Codespaces)
Entorno de GitHub Codespaces

Instrucciones

Instalar dependencias:npm install


Iniciar el servidor:npm start


En GitHub Codespaces, abrir el puerto 3000 en el panel de Puertos (hacerlo público si es necesario).
Acceder a la URL proporcionada (por ejemplo, https://<your-codespace-name>-3000.app.github.dev) para ver la página web.

Endpoints

GET /api/datos: Devuelve los datos del archivo Consum_d_aigua_a_Catalunya_per_comarques_20250525.csv en formato JSON.

Características de la página web

Tabla interactiva: Muestra los datos del CSV con opciones de filtrado, ordenación y paginación usando DataTables.
Gráficos:
Gráfico de barras: Consumo total de agua por comarca en 2023.
Gráfico de líneas: Consumo doméstico per cápita promedio por año (2012–2023).


Diseño: Estilizado con Tailwind CSS para un diseño responsivo y moderno.

Notas

Asegúrate de que el archivo Consum_d_aigua_a_Catalunya_per_comarques_20250525.csv esté en la carpeta data/ con el formato correcto.
Para producción, considera agregar validaciones y seguridad adicional.
En Codespaces, usa la URL del puerto 3000 para acceder a la página y la API.

