import ProductController from "./controllers/products.controller";
import App from "./index";
const port = 5000;
const app = new App([new ProductController()], port);

app.listen();
