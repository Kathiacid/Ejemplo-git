1. git status

Definición: Muestra el estado actual del proyecto. Te dice qué archivos han sido modificados, cuáles son nuevos y cuáles están listos para ser guardados.

Ejemplo:
`git status`

2. git add

Definición: Prepara los archivos para el guardado. Mueve los cambios desde tu carpeta de trabajo al "área de preparación" (staging area).

Ejemplo:
`git add .` (Para agregar todo)
`git add archivo.txt` (Para uno solo)

3. git commit

Definición: Guarda los cambios que preparaste en el paso anterior creando una "foto" en el historial con un mensaje descriptivo.

Ejemplo:
`git commit -m "Agregada nueva funcionalidad de login"`

4. git push

Definición: Sube tus cambios confirmados desde tu computadora al repositorio remoto (GitHub, GitLab, etc.).

Ejemplo:
`git push origin main`