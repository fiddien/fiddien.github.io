---
layout: default
title: Presentations
icon: fas fa-floppy-disk
order: 5
---

<article class="px-1">
    <div class="row">
        <div class="post {{ padding | strip }} px-md-2">
            {% assign tab_key = page.title | downcase %}
            {% assign title = site.data.locales[lang].tabs[tab_key] | default: page.title %}
            <h1 class="dynamic-title">
            {{ title }}
            </h1>
            The slides I presented in various occassions. The contents are my liability and are not representative of any entity mentioned.
            <div id="gallery">
                {% for slide in site.data.slides %}
                    {% capture slideUrl %}{{ slide.src }}{% endcapture %}
                    {% if slideUrl contains '://' %}
                        {% comment %} Absolute URL - no modification needed {% endcomment %}
                        {% assign finalUrl = slide.src %}
                    {% else %}
                        {% comment %} Relative URL - prepend /assets/pdf/slides/ {% endcomment %}
                        {% assign finalUrl = '/assets/pdf/slides/' | append: slide.src %}
                    {% endif %}
                    <a class="gallery-item" href="{{ finalUrl }}" target="_blank">
                        <div class="gallery-preview">
                            <img class="cover" src="/assets/img/slides_cover/{{ slide.cover | relative_url }}" alt="{{ slide.title }}" loading="lazy" />
                            <h1 class="gallery-item-title">{{ slide.title }}</h1>
                            <em>{{ slide.date | date: "%b %d, %Y" }}</em>
                        </div>
                    </a>
                {% endfor %}
            </div>
        </div>
    </div>
</article>
