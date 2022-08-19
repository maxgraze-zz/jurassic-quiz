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
  default: () => Layout_1
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
const MetaTags = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let updatedTitle;
  let { title = "" } = $$props;
  let { titleTemplate = "" } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { robotsProps = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { mobileAlternate = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { additionalMetaTags = void 0 } = $$props;
  let { additionalLinkTags = void 0 } = $$props;
  let robotsParams = "";
  if (robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, maxVideoPreview, noarchive, noimageindex, notranslate, unavailableAfter } = robotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleTemplate === void 0 && $$bindings.titleTemplate && titleTemplate !== void 0)
    $$bindings.titleTemplate(titleTemplate);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.robotsProps === void 0 && $$bindings.robotsProps && robotsProps !== void 0)
    $$bindings.robotsProps(robotsProps);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.mobileAlternate === void 0 && $$bindings.mobileAlternate && mobileAlternate !== void 0)
    $$bindings.mobileAlternate(mobileAlternate);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.additionalMetaTags === void 0 && $$bindings.additionalMetaTags && additionalMetaTags !== void 0)
    $$bindings.additionalMetaTags(additionalMetaTags);
  if ($$props.additionalLinkTags === void 0 && $$bindings.additionalLinkTags && additionalLinkTags !== void 0)
    $$bindings.additionalLinkTags(additionalLinkTags);
  updatedTitle = titleTemplate ? titleTemplate.replace(/%s/g, title) : title;
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.e)(updatedTitle)}</title>`, ""}<meta name="${"robots"}"${(0, import_chunks.b)("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)} data-svelte="svelte-1v2a5gq"><meta name="${"googlebot"}"${(0, import_chunks.b)("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)} data-svelte="svelte-1v2a5gq">${description ? `<meta name="${"description"}"${(0, import_chunks.b)("content", description, 0)} data-svelte="svelte-1v2a5gq">` : ``}${canonical ? `<link rel="${"canonical"}"${(0, import_chunks.b)("href", canonical, 0)} data-svelte="svelte-1v2a5gq">` : ``}${mobileAlternate ? `<link rel="${"alternate"}"${(0, import_chunks.b)("media", mobileAlternate.media, 0)}${(0, import_chunks.b)("href", mobileAlternate.href, 0)} data-svelte="svelte-1v2a5gq">` : ``}${languageAlternates && languageAlternates.length > 0 ? `${(0, import_chunks.d)(languageAlternates, (languageAlternate) => {
    return `<link rel="${"alternate"}"${(0, import_chunks.b)("hreflang", languageAlternate.hrefLang, 0)}${(0, import_chunks.b)("href", languageAlternate.href, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}${twitter ? `${twitter.cardType ? `<meta name="${"twitter:card"}"${(0, import_chunks.b)("content", twitter.cardType, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.site ? `<meta name="${"twitter:site"}"${(0, import_chunks.b)("content", twitter.site, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.handle ? `<meta name="${"twitter:creator"}"${(0, import_chunks.b)("content", twitter.handle, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.title ? `<meta name="${"twitter:title"}"${(0, import_chunks.b)("content", twitter.title, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.description ? `<meta name="${"twitter:description"}"${(0, import_chunks.b)("content", twitter.description, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.image ? `<meta name="${"twitter:image"}"${(0, import_chunks.b)("content", twitter.image, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.imageAlt ? `<meta name="${"twitter:image:alt"}"${(0, import_chunks.b)("content", twitter.imageAlt, 0)} data-svelte="svelte-1v2a5gq">` : ``}` : ``}${facebook ? `<meta property="${"fb:app_id"}"${(0, import_chunks.b)("content", facebook.appId, 0)} data-svelte="svelte-1v2a5gq">` : ``}${openGraph ? `${openGraph.url || canonical ? `<meta property="${"og:url"}"${(0, import_chunks.b)("content", openGraph.url || canonical, 0)} data-svelte="svelte-1v2a5gq">` : ``}

    ${openGraph.type ? `<meta property="${"og:type"}"${(0, import_chunks.b)("content", openGraph.type.toLowerCase(), 0)} data-svelte="svelte-1v2a5gq">
      ${openGraph.type.toLowerCase() === "profile" && openGraph.profile ? `${openGraph.profile.firstName ? `<meta property="${"profile:first_name"}"${(0, import_chunks.b)("content", openGraph.profile.firstName, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.profile.lastName ? `<meta property="${"profile:last_name"}"${(0, import_chunks.b)("content", openGraph.profile.lastName, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.profile.username ? `<meta property="${"profile:username"}"${(0, import_chunks.b)("content", openGraph.profile.username, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.profile.gender ? `<meta property="${"profile:gender"}"${(0, import_chunks.b)("content", openGraph.profile.gender, 0)} data-svelte="svelte-1v2a5gq">` : ``}` : `${openGraph.type.toLowerCase() === "book" && openGraph.book ? `${openGraph.book.authors && openGraph.book.authors.length ? `${(0, import_chunks.d)(openGraph.book.authors, (author) => {
    return `<meta property="${"book:author"}"${(0, import_chunks.b)("content", author, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.book.isbn ? `<meta property="${"book:isbn"}"${(0, import_chunks.b)("content", openGraph.book.isbn, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.book.releaseDate ? `<meta property="${"book:release_date"}"${(0, import_chunks.b)("content", openGraph.book.releaseDate, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.book.tags && openGraph.book.tags.length ? `${(0, import_chunks.d)(openGraph.book.tags, (tag) => {
    return `<meta property="${"book:tag"}"${(0, import_chunks.b)("content", tag, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "article" && openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="${"article:published_time"}"${(0, import_chunks.b)("content", openGraph.article.publishedTime, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.article.modifiedTime ? `<meta property="${"article:modified_time"}"${(0, import_chunks.b)("content", openGraph.article.modifiedTime, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.article.expirationTime ? `<meta property="${"article:expiration_time"}"${(0, import_chunks.b)("content", openGraph.article.expirationTime, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.article.authors && openGraph.article.authors.length ? `${(0, import_chunks.d)(openGraph.article.authors, (author) => {
    return `<meta property="${"article:author"}"${(0, import_chunks.b)("content", author, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.article.section ? `<meta property="${"article:section"}"${(0, import_chunks.b)("content", openGraph.article.section, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.article.tags && openGraph.article.tags.length ? `${(0, import_chunks.d)(openGraph.article.tags, (tag) => {
    return `<meta property="${"article:tag"}"${(0, import_chunks.b)("content", tag, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video ? `${openGraph.video.actors && openGraph.video.actors.length ? `${(0, import_chunks.d)(openGraph.video.actors, (actor) => {
    return `${actor.profile ? `<meta property="${"video:actor"}"${(0, import_chunks.b)("content", actor.profile, 0)} data-svelte="svelte-1v2a5gq">` : ``}
            ${actor.role ? `<meta property="${"video:actor:role"}"${(0, import_chunks.b)("content", actor.role, 0)} data-svelte="svelte-1v2a5gq">` : ``}`;
  })}` : ``}

        ${openGraph.video.directors && openGraph.video.directors.length ? `${(0, import_chunks.d)(openGraph.video.directors, (director) => {
    return `<meta property="${"video:director"}"${(0, import_chunks.b)("content", director, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.video.writers && openGraph.video.writers.length ? `${(0, import_chunks.d)(openGraph.video.writers, (writer) => {
    return `<meta property="${"video:writer"}"${(0, import_chunks.b)("content", writer, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.video.duration ? `<meta property="${"video:duration"}"${(0, import_chunks.b)("content", openGraph.video.duration.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.video.releaseDate ? `<meta property="${"video:release_date"}"${(0, import_chunks.b)("content", openGraph.video.releaseDate, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.video.tags && openGraph.video.tags.length ? `${(0, import_chunks.d)(openGraph.video.tags, (tag) => {
    return `<meta property="${"video:tag"}"${(0, import_chunks.b)("content", tag, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.video.series ? `<meta property="${"video:series"}"${(0, import_chunks.b)("content", openGraph.video.series, 0)} data-svelte="svelte-1v2a5gq">` : ``}` : ``}`}`}`}` : ``}

    ${openGraph.title || updatedTitle ? `<meta property="${"og:title"}"${(0, import_chunks.b)("content", openGraph.title || updatedTitle, 0)} data-svelte="svelte-1v2a5gq">` : ``}

    ${openGraph.description || description ? `<meta property="${"og:description"}"${(0, import_chunks.b)("content", openGraph.description || description, 0)} data-svelte="svelte-1v2a5gq">` : ``}

    ${openGraph.images && openGraph.images.length ? `${(0, import_chunks.d)(openGraph.images, (image) => {
    return `<meta property="${"og:image"}"${(0, import_chunks.b)("content", image.url, 0)} data-svelte="svelte-1v2a5gq">
        ${image.alt ? `<meta property="${"og:image:alt"}"${(0, import_chunks.b)("content", image.alt, 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${image.width ? `<meta property="${"og:image:width"}"${(0, import_chunks.b)("content", image.width.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${image.height ? `<meta property="${"og:image:height"}"${(0, import_chunks.b)("content", image.height.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}`;
  })}` : ``}

    ${openGraph.videos && openGraph.videos.length ? `${(0, import_chunks.d)(openGraph.videos, (video) => {
    return `<meta property="${"og:video"}"${(0, import_chunks.b)("content", video.url, 0)} data-svelte="svelte-1v2a5gq">
        ${video.alt ? `<meta property="${"og:video:alt"}"${(0, import_chunks.b)("content", video.alt, 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${video.width ? `<meta property="${"og:video:width"}"${(0, import_chunks.b)("content", video.width.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${video.height ? `<meta property="${"og:video:height"}"${(0, import_chunks.b)("content", video.height.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${video.secureUrl ? `<meta property="${"og:video:secure_url"}"${(0, import_chunks.b)("content", video.secureUrl.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${video.type ? `<meta property="${"og:video:type"}"${(0, import_chunks.b)("content", video.type.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}`;
  })}` : ``}

    ${openGraph.locale ? `<meta property="${"og:locale"}"${(0, import_chunks.b)("content", openGraph.locale, 0)} data-svelte="svelte-1v2a5gq">` : ``}

    ${openGraph.site_name ? `<meta property="${"og:site_name"}"${(0, import_chunks.b)("content", openGraph.site_name, 0)} data-svelte="svelte-1v2a5gq">` : ``}` : ``}${additionalMetaTags && additionalMetaTags.length > 0 ? `${(0, import_chunks.d)(additionalMetaTags, (tag) => {
    return `<meta${(0, import_chunks.f)([(0, import_chunks.g)(tag)], {})} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}${(additionalLinkTags == null ? void 0 : additionalLinkTags.length) ? `${(0, import_chunks.d)(additionalLinkTags, (tag) => {
    return `<link${(0, import_chunks.f)([(0, import_chunks.g)(tag)], {})} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}`, ""}`;
});
const DefaultMetaTags = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_chunks.v)(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: "sveltekit-tw",
      description: "Svelte Kit starter template with TailwindCSS setup",
      canonical: "https://sveltekit-tw.sznm.dev",
      openGraph: {
        url: "https://sveltekit-tw.sznm.dev",
        title: "Svelte Kit + Tailwind",
        description: "Svelte Kit starter template with TailwindCSS setup",
        site_name: "sveltekit-tw"
      },
      twitter: {
        handle: "@sozonome",
        site: "https://sznm.dev",
        cardType: "summary_large_image"
      }
    },
    {},
    {}
  )}`;
});
const Layout = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_chunks.v)(DefaultMetaTags, "DefaultMetaTags").$$render($$result, {}, {}, {})}


<main class="${"min-h-screen px-8 md:pt-24 md:mx-48 no-scrollbar select-none"}">${slots.default ? slots.default({}) : ``}</main>
`;
});
const latin = "";
const app = "";
const Layout_1 = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_chunks.v)(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
