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
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../../chunks/index.js");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".gradient.svelte-15yudv9{overflow:hidden;background:linear-gradient(\n			to right,\n			theme('colors.purple') 0%,\n			theme('colors.purple') 50%,\n			theme('colors.blackish') 50%,\n			theme('colors.blackish') 100%\n		)}body.svelte-15yudv9{position:absolute;top:0px;right:0px;bottom:0px;left:0px;background:linear-gradient(\n			to right,\n			theme('colors.blackish') 0%,\n			theme('colors.blackish') 50%,\n			theme('colors.cream') 50%,\n			theme('colors.cream') 100%\n		)}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<html class="${"gradient svelte-15yudv9"}" lang="${"en"}"><body class="${"svelte-15yudv9"}"><div class="${"grid grid-cols-2 grid-rows-1"}"><div class="${"align-center mt-20 justify-center flex"}">content</div>
			<div class="${"align-center mt-20 justify-center flex"}"></div></div></body>
</html>`;
});
