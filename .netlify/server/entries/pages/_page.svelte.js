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
var import_chunks = require("../../chunks/index.js");
var import_d3 = require("d3");
var import_axios = require("axios");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1h9qhic{min-height:100vh}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let box;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>sveltekit-tailwind</title>`, ""}`, ""}


<div class="${"container mx-auto box items-center"}"${(0, import_chunks.b)("this", box, 0)}><div class="${"flex flex-col min-h-screen text-center "}"><h1 class="${"basis-1/3 text-h1 font-janguky md:text-6xl xl:text-7xl "}">How would <br>you <span class="${"text-purple"}">die</span> in <br>Jurassic movies?
		</h1>
		<p class="${"text-lg pt-6 uppercase"}">A data game by Max Graze &amp; Datacitron</p>

		<div class="${"flex flex-col min-h-[20vh] gap-8 pt-6 justify-center items-center text-center"}">
			<a href="${"#s1"}"><img src="${"/images/arrow.png"}" alt="${"down arrow"}"></a></div></div>
	<section class="${"mx-auto pt-28 svelte-1h9qhic"}" id="${"s1"}">accusamus harum ipsam corrupti impedit suscipit at sit! Saepe voluptates quibusdam expedita
		minima culpa provident, ut eum, aliquam velit vel quia debitis nisi optio, hic natus. Pariatur
		voluptatibus, autem rem deleniti exercitationem numquam nam saepe dolores optio nulla odit
		laudantium facilis ut? Corporis sapiente adipisci, commodi temporibus beatae dolor, tempora
		rerum ducimus perferendis veritatis facere quia cumque nisi? Enim incidunt debitis ipsam
		molestiae officiis culpa dolore est nulla eaque molestias earum assumenda iusto aspernatur, modi
		possimus iure! Aspernatur error, aperiam voluptates magnam praesentium sequi accusantium
		obcaecati delectus facere dicta doloribus nobis fugiat? Voluptates quasi magni accusantium
		laborum placeat tempore asperiores ex amet dicta recusandae fuga minima, id obcaecati, itaque
		dolor numquam quo, commodi quisquam eos nam dolore vitae aspernatur! Eaque, voluptas ipsa
		repellat inventore quaerat, id alias nam distinctio deserunt nulla iste dolores corrupti! Sit
		aliquid cum explicabo, ea nemo asperiores, alias, qui libero blanditiis veritatis maxime
		mollitia voluptatem at dicta rem soluta perferendis ratione. Expedita saepe incidunt sunt,
		cumque, excepturi rerum facere laudantium repudiandae iste quis animi neque repellat voluptatum
		doloremque perspiciatis dolorem alias esse corporis maxime quaerat! Voluptatum sequi cum culpa
		nulla accusamus dignissimos! Unde aliquid possimus dicta incidunt officiis perspiciatis ex
		corporis ut, quaerat molestiae illo deserunt, asperiores consectetur. Consectetur, asperiores.
		<div class="${"w-full relative flex "}"><img class="${""}" src="${"/images/dino1.png"}" alt="${"dino"}">
			<a href="${"/quiz"}"><button class="${"btn absolute bottom-1/4 left-44"}">Start Playing!</button></a></div></section>
	</div>


`;
});
