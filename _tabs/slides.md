---
layout: default
title: Slides
icon: fas fa-floppy-disk
order: 5
---

<div class="row">
    <div id="core-wrapper" class="col-12 col-lg-11 col-xl-9 pe-xl-4">
        <div class="post {{ padding | strip }} px-md-2">
            {% assign tab_key = page.title | downcase %}
            {% assign title = site.data.locales[lang].tabs[tab_key] | default: page.title %}
            <h1 class="dynamic-title">
            {{ title }}
            </h1>
            The slides files I presented in various occassions. The contents are my liability and are not representative of any entity mentioned.
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
        </div>
    </div>
</div>
