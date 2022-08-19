var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Error_1
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
throw new Error("@migration task: Replace error load function (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3293209)");
const Error_1 = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"grid min-h-[80vh] items-center"}"><div class="${"text-center flex flex-col gap-8"}"><div><h2 class="${"font-semibold bg-clip-text bg-gradient-to-br from-blue-300 to-teal-700 text-6xl text-transparent"}">${(0, import_chunks.e)(title)}</h2>
			<p class="${"text-gray-300"}">Looks like you&#39;re lost.</p></div>

		<div class="${"flex flex-col gap-2"}"><p class="${"text-gray-400"}">It&#39;s Okay!</p>
			<div><a href="${"/"}" class="${"btn bg-teal-600 text-xs"}">Home</a></div></div></div></div>`;
});
