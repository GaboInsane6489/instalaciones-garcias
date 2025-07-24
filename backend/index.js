import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Para __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde src/pages/
app.use(express.static(path.join(__dirname, '../src/pages')));

// Ruta raíz: servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
