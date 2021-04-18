import App from "./App";
import PostController from "./areas/post/controllers/post.controller";
import AuthenticationController from "./areas/authentication/controllers/Authentication.controller";
import { MockAuthenticationService } from "./areas/authentication/services/Authentication.service.mock";
import { AuthenticationService } from "./areas/authentication/services/Authentication.service";
import { PostService, MockPostService } from "./areas/post/services";

const server = new App([
  new PostController(new MockPostService()),
  new AuthenticationController(new AuthenticationService()),
]);

server.start();
