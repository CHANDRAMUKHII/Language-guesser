import { franc } from "franc";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const langs = require("langs");
const colors = require("colors");
const trans = franc(process.argv[2]);
if (trans == "und") {
  console.log("Please be more specific".red);
} else {
  console.log(langs.where("3", `${trans}`).name.green);
}
