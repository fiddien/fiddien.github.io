---
layout: default
title: Slides
icon: fas fa-floppy-disk
order: 7
---

<div id="gallery">
  {% for slide in site.data.slides %}
    <a class="gallery-item" href="{{ slide.src | relative_url }}" target="_blank">
        <div class="gallery-preview">
            <img class="cover" src="/assets/img/slides_cover/{{ slide.cover | relative_url }}" alt="{{ slide.title }}" />
            <h1 class="gallery-item-title">{{ slide.title }}</h1>
        </div>
    </a>
  {% endfor %}
</div>