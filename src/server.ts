import "reflect-metadata";
import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "./routes/routes";
import * as dotenv from 'dotenv';
import * as swaggerUi from 'swagger-ui-express';

dotenv.config();

export const app = express();
const spec = require('./../swagger.json');

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(spec));
RegisterRoutes(app);

const port = process.env.APP_PORT || 3000;

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
