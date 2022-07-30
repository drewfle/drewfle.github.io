# Drewfle Blog

Install Hugo in user bin:

```sh
# $ sudo apt remove hugo
cd ~; \
mkdir bin; \
cd bin; \
wget https://github.com/gohugoio/hugo/releases/download/v0.101.0/hugo_0.101.0_Linux-64bit.tar.gz; \
tar -xvf hugo_0.101.0_Linux-64bit.tar.gz; \
rm hugo_0.101.0_Linux-64bit.tar.gz
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

### Render a raw post

```md
---
...

## layout: 'raw'
```

### Embedding raw html

In a md file:

```html
{{< rawhtml >}}
<script src="index.js"></script>
{{< /rawhtml >}}
```

The `rawhtml` is defined in `themes/drewfle-blog/layouts/shortcodes/rawhtml.html`

Caveat: A CSS class in rawhtml will be global when posts are rendered in the same screen.
