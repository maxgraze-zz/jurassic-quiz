var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
const index = 4;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/quiz/_page.svelte.js")))).default;
const file = "_app/immutable/components/pages/quiz/_page.svelte-eb172b65.js";
const imports = ["_app/immutable/components/pages/quiz/_page.svelte-eb172b65.js", "_app/immutable/chunks/index-acbc8b99.js", "_app/immutable/chunks/index-8b7308b2.js", "_app/immutable/chunks/index-7e150a3e.js"];
const stylesheets = ["_app/immutable/assets/+page-9cba61d7.css", "_app/immutable/assets/index-69fea6d3.css"];
