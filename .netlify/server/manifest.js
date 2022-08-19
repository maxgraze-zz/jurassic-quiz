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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "data/data.csv", "favicon.png", "font/JANGKUY-BlackExpanded.otf", "font/JANGKUY-BoldExpanded.otf", "font/JANGKUY-RegularExpanded.otf", "images/annoying_child.png", "images/annoying_child_av.png", "images/arrow.png", "images/die_illustration.png", "images/dino1.png", "images/employee_av.png", "images/expert.png", "images/expert_av.png", "images/keep_moving.png", "images/live_illustration.png", "images/park_employee.png", "images/question_illustration.png", "images/social_share.png", "images/start_again.png", "questions.json"]),
  mimeTypes: { ".csv": "text/csv", ".png": "image/png", ".otf": "font/otf", ".json": "application/json" },
  _: {
    entry: { "file": "_app/immutable/start-da218563.js", "imports": ["_app/immutable/start-da218563.js", "_app/immutable/chunks/index-acbc8b99.js", "_app/immutable/chunks/index-8b7308b2.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [0],
        leaf: 2
      },
      {
        type: "page",
        id: "blurb",
        pattern: /^\/blurb\/?$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [0],
        leaf: 3
      },
      {
        type: "page",
        id: "quiz",
        pattern: /^\/quiz\/?$/,
        names: [],
        types: [],
        errors: [1],
        layouts: [0],
        leaf: 4
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
