---
layout: default
title: Slides
icon: fas fa-floppy-disk
order: 7
---

<div id="gallery">
  {% for slide in site.data.slides %}
    <a href="{{ slide.src | relative_url }}" class="gallery-item" target="_blank">
        <div class="gallery-preview">
            <img src="/assets/img/slides_cover/{{ slide.cover | relative_url }}" class="cover"/>
            <h1 class="gallery-item-title">{{ slide.title }}</h1>
        </div>
    </a>
  {% endfor %}
</div>