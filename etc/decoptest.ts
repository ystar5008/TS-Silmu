import { Controller } from "./controller.decorator";
import { LoggerWithPrefix } from "./decorator";
import globParent from "./";

@LoggerWithPrefix("Prefix")
class Add {}
const obj = {
  flipBackslashes: true,
};
const a = globParent("김용식", obj);
console.log(a);

@Controller()
class MovieController {}
