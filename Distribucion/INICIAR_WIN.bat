@echo off
setlocal
cd /d "%~dp0"

echo ===================================================
echo        INICIANDO PLATAFORMA WIN ASESORES
echo ===================================================
echo.

:: Verificar si el puerto 3000 está en uso
netstat -ano | findstr :3000 >nul

if %errorlevel% neq 0 (
    echo [INFO] Servidor apagado. Levantando backend...
    if not exist logs mkdir logs
    
    :: Se comprueba si existe el ejecutable, para iniciar ese en vez del script si ya fue empaquetado
    if exist "WIN_FIDELIZACIONES.exe" (
        start "" "WIN_FIDELIZACIONES.exe" > logs\error_inicio.log 2>&1
    ) else (
        start /B python app\app.py > logs\error_inicio.log 2>&1
    )
    
    :: Esperar 4 segundos a que el servidor Flask inicie correctamente
    timeout /t 4 /nobreak >nul
) else (
    echo [INFO] El servidor ya se encuentra en ejecucion.
)

echo [INFO] Abriendo navegador...
start http://localhost:3000
exit
