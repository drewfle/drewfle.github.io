# Drewfle Blog Theme

## Setup

### In this theme

Install below according to [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/):

```sh
npm i -g postcss-cli autoprefixer
```

Run `npm i`

## Good Stuff from [dirkolbrich/hugo-tailwindcss-starter-theme](https://github.com/dirkolbrich/hugo-tailwindcss-starter-theme)

Copied from the theme...

Included are some helpers for the development phase (not visible in production):

- `/partials/dev/parameters.html` shows basic Hugo page parameters
- `/partials/dev/size-indicator.html` displays a floating circle in the upper right corner to indicate the current Tailwind CSS responsive breakpoint
- `/partials/dev/container-indicator.html` shows the container area as a color filled backgroud

If you don't need any of these helpers anymore, just delete the `{{- partial "dev/dev-tools.html" . -}}` line from `/layouts/_default/baseof.html`.
