
import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    
   // Si la condición (ej. la falta de un token) se cumple, enviamos la respuesta de error Y TERMINAMOS.
    if (!req.headers.authorization) { // Ejemplo de verificación de condición
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición.' // ⬅️ Enviamos y terminamos aquí
        });
    }
    
    // Si la ejecución llega hasta aquí, significa que todo salió bien.
    res.json({
        ok: true,
        msg: 'Todo salió bien' // ⬅️ Segunda posible respuesta, solo si la anterior no se envió
    });
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
