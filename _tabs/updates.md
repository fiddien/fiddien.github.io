---
layout: default
title: Updates
emoji: fas fa-timeline
order: 99
---

{% assign df_strftime_m = site.data.locales[lang].df.archives.strftime | default: '%b' %}
{% assign df_dayjs_m = site.data.locales[lang].df.archives.dayjs | default: '%b' %}
{% assign updates = site.data.updates | sort: 'date' | reverse %}
{% assign cv_url='assets/pdf/cv_IlmaAliyaFiddien_202311.pdf' | relative_url %}
{% assign portfolio_url='assets/pdf/Portfolio.pdf' | relative_url %}


<div id="core-wrapper" class="col-12 col-lg-11 col-xl-9 pe-xl-4" style="margin-top: 3rem; padding-left: 0.8rem!important; width: 100%;">
  <div class="post {{ padding | strip }} px-md-2">
    <p>Life updates. Hover over the emojis to see more information. The links are pointing to relevant materials.</p>
    <p>If you are looking for my CV instead, then it's <a href="{{ cv_url }}">here</a>. A brief portfolio is also available <a href="{{ portfolio_url }}">here</a>.</p>
    <!-- The timeline -->
    <div id="updates" class="pl-xl-3">
      {% for update in updates %}
        {% capture cur_year %}{{ update.date | date: "%Y" }}{% endcapture %}
        {% if cur_year != last_year %}
          {% unless forloop.first %}</ul>{% endunless %}
          <div class="year">{{ cur_year }}</div>
          <ul class="list-unstyled">
          {% assign last_year = cur_year %}
        {% endif %}
        <li>
        {% assign ts = update.date | date: '%s' %}
          <!-- emoji with description -->
          <span class="date day">
            {% assign desc = "<b>"| append: update.title | append: "</b><br>" | append: update.desc %}
            {% include tooltip.html shown=update.emoji hidden=desc %}
          </span>
          <!-- Month -->
          <span class="date month small text-muted ms-1" data-ts="{{ ts }}" data-df="{{ df_dayjs_m }}">
            {{ update.date | date: df_strftime_m }}
          </span>
          <!-- Event update content -->
          {% if update.url != null %}
            <a href="{{ update.url | relative_url }}" target="_blank">
              {% include tooltip.html shown=update.title hidden=update.urld %}
            </a>
          {% else %}
            <a href="#">{% include tooltip.html shown=update.title hidden=update.urld %}</a>
          {% endif %}
          <!-- {% if update.desc != null %}
            <div class="description">{{ update.desc }}</div>
          {% endif %} -->
          <!-- End of content -->
        </li>
        {% if forloop.last %}</ul>{% endif %}
      {% endfor %}
    </div>
  </div>
</div>
<!-- </div> -->
