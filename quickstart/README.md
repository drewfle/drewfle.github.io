# Drewfle Blog

Install Hugo in user bin:

```sh
# $ sudo apt remove hugo
cd ~; \
mkdir bin; \
cd bin; \
HUGO_VER=0.104.2; \
HUGO_FILENAME="hugo_extended_${HUGO_VER}_Linux-64bit.tar.gz"; \
HUGO_URL="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VER}/${HUGO_FILENAME}"
wget $HUGO_URL; \
tar -xvf $HUGO_FILENAME; \
rm $HUGO_FILENAME; \
hugo version
# now pull tooling repo and make sure user path is added
```

Common commands:

```sh
hugo new posts/my-first-post.md
```

## This and That

### Homepage

Homepage content: `content/_index.md`

Template: `themes/drewfle-blog/layouts/index.html`

> When `content/index.md` exists, it overrides the template styles and renders itself as a standalone index page.

### Custom 404 page

View the page at [/404.html](http://localhost:1313/404.html).

> Hugo server doesn't serve the custom 404 page. That's up to the configurtion of the actual web server or service. See [Automatic Loading](https://gohugo.io/templates/404/#automatic-loading)

### Rendering without default layout

In the front matter:

```md
---
layout: "raw"
...
```

### Static File path

**Path should start with `/`, otherwise the static file won't be resolved in multilingual pages**

```html
<img src="/<path-in-static>/foo.jpg" />
```

### Rendering raw html

Rendering raw html is enabled from the Markdown renderer:

```toml
[markup.goldmark.renderer]
  unsafe = true
```

To supress the warning on raw html, add below on the top of Markdown file:

```md
<!-- markdownlint-disable MD033 -->
```

Alternatively, use `rawhtml` shortcode:

```html
{{< rawhtml >}}
<script src="index.js"></script>
{{< /rawhtml >}}
```

The `rawhtml` is defined in `themes/drewfle-blog/layouts/shortcodes/rawhtml.html`

Caveat: A CSS class in rawhtml will be global when posts are rendered in the same screen.

## Rendering Images

TBD

## Multilingual

- `/post` lists `content/en/posts`
- `/cn/post` lists `content/cn/posts`

## Notes

### Template

Theme:

- `layouts/`
  - `_default`
    - `baseof.html`:
      - Top level layout for homepage and all pages
    - `list.html`
      - Page layout for `/posts` (can be top level)
    - `single.html`
      - Page layout for all pages (can be top level)
  - `about`
    - `single.html`
      - Overrides `_default/single.html`
  - `partials/`
    - `dev/`
      - `container-indicator.html`
      - `dev-tools.html`
      - `grid-indicator.html`
      - `parameters.html`
      - `size-indicator.html`
    - `[unused] footer.html`
      - Fragment for `<footer>`
    - `head.html`
      - Fragment for `<head>`
      - Used in `_default/baseof.html`
    - `[broken]langs.html`
      - Fragment for listing langs
    - `homepage/`
      - `[unused] header.html`
        - Fragment for `<header>`
    - `shortcodes`
      - `rawhtml.html`
  - `404.html`
  - `index.html`
    - Page layout for homepage (can be top level)

## Snippets

```hugo
{{ $keys := slice "foo" "bar" }}
{{ $bp := dict }}
{{ range $i := (slice 0 1) }}
  {{ $key := (index $keys $i) }}
  {{ $bp = merge $bp (dict $key $i) }}
{{ end }}
```

```hugo
{{ $posts := .Pages }}
{{ $nposts := len $posts }}
{{ $nposts := sub $nposts 9 }}
<h1>{{ $nposts }}</h1>
{{ range first 999 (after 9 .Pages.ByLastmod.Reverse) }}
	<p>{{ .Title }}</p>
{{ end }}
```

```hugo
{{ $option := dict }}
  {{ range $key := $bp_keys }}
  {{ $val := printf "%sx webp q90" (index $bp $key) }}
  {{ $option = merge $option (dict $key $val) }}
{{ end }}
```

```hugo
{{ $chars := dict
    "b" "2"
    "a" "1"
  }}
{{ range $char := $chars }}
  {{ $bp_num }}
  {{ /* ite alpha order */ }}
  {{ /* a */ }}
  {{ /* b */ }}
{{ end }}
```

## Links

- [Hugo Slices and Dict](https://www.thenewdynamic.com/article/hugo-data/manipulation-slices-and-maps/)
