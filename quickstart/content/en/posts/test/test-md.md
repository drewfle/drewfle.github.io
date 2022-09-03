---
title: "Test Markdown"
date: 2022-07-20T23:38:58-04:00
draft: true
---

<!-- Markdown ************************************************************* -->

<!-- Works. Markdown styling is up to stylesheet. -->

hi

# hi

**hi**

```html
<div>Snippet</div>
```

![Waterloo](/homepage/img/2016-11-29-waterloo-bridge.jpg)

<!--
Rendered as:
<p><img src="/homepage/img/2016-11-29-waterloo-bridge.jpg" alt="Waterloo"></p>
-->

<!-- HTML ***************************************************************** -->

<!-- Works. Same as Markdown, styling is up to stylesheet. -->
<h1>HTML plain cool</h1>
<h1 class="font-serif font-extralight text-5xl">HTML Tailwind cool</h1>

<!-- Uses full screen width as expected -->
<img src="/homepage/img/2016-11-29-waterloo-bridge.jpg" alt="Waterloo">

<script>
  console.log("cool");
</script>

<!-- Shortcode ************************************************************ -->

{{< figure
src="/homepage/img/2016-11-29-waterloo-bridge.jpg"
class="h-48 overflow-hidden"
    >}}

{{< rawhtml >}}

<h1 class="font-serif font-extralight text-5xl">Shortcode Tailwind cool</h1>
{{< /rawhtml >}}

{{< highlight html >}}

<div>Shortcode snippet</div>
{{< /highlight >}}
