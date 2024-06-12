import bodyParser from "body-parser";
import express from "express";

class App {
  public app: express.Application;
  public port = 5000;
  constructor(controllers: Array<any>, port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    // Without the body parser, the request.body property wouldn’t be accessible.
    this.app.use(bodyParser.json());
  }
  private initializeControllers(controllers: Array<any>) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

export default App;