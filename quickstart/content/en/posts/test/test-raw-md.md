---
title: "Test Raw Markdown"
date: 2022-07-20T23:38:58-04:00
draft: true
layout: "raw"
---

<!-- Works as expected -->

hi

<!-- Works as expected and uses full screen width -->

{{< figure
src="/homepage/img/2016-11-29-waterloo-bridge.jpg"
class="h-48 overflow-hidden"
    >}}

<!-- Below gets omitted -->
<h1 class="font-serif font-extralight text-5xl">{{ .Title }}</h1>

<script>
  console.log("cool");
</script>

<!-- Below gets rendered correctly -->

{{< rawhtml >}}

<h1 class="font-serif font-extralight text-5xl">{{ .Title }}</h1>
{{< /rawhtml >}}

{{< highlight html >}}

<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< /highlight >}}
