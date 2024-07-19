Desarrollo de una Aplicación con Web API .NET Core y Frontend Angular

Este README te guiará a través de los pasos básicos para desarrollar una aplicación web utilizando Web API con .NET Core como backend y Angular como frontend. Este es un esquema general y cada sección puede requerir ajustes específicos según los detalles y requisitos de tu proyecto.
1. Configuración del Proyecto Backend con Web API .NET Core
Creación del Proyecto

    Instalación de Herramientas Necesarias:
        Asegúrate de tener instalado el SDK de .NET Core: Descargar .NET Core SDK
        Instala un editor de código como Visual Studio Code o Visual Studio.
   
   Configuración y Ejecución:

    Verifica la configuración de tu proyecto en appsettings.json, especialmente la cadena de conexión a la base de datos u otros servicios.
    Ejecuta tu proyecto para asegurarte de que todo esté funcionando correctamente:
    
    dotnet run

Visita https://localhost:5001/api/Post/GetList en tu navegador para verificar que puedas obtener datos.

 2. Configuración del Proyecto Frontend con Angular
Configuración Inicial

    Instalación de Angular CLI:

        Asegúrate de tener Node.js y npm instalados: Descargar Node.js

        Instala Angular CLI globalmente
    Configuración y Ejecución:

      Verifica tu configuración de entorno y el endpoint de servicio y ejecuta el siguiente comando para iniciar el front

        npm install
        npm run start
    
