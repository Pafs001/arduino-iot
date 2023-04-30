import app from './app.js'
import 'dotenv/config';

const APPNAME = 'App Express';
const PORT = process.env.SRV_PORT || 80;
const URL = process.env.HOST || 'localhost';
const testMessage = `${APPNAME} Server running at http://${URL}:${PORT}/`;

app.listen(PORT, () => console.log(testMessage));
