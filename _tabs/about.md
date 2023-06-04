---
# the default layout is 'page'
icon: fas fa-info-circle
order: 0
hidden: true
---

Ilma (`/ˈil.mɑ/`) is a student of MSc Speech and Language Processing at the University of Edinburgh, sponsored by Indonesia Endowment Fund for Education (LPDP).

She writes in <i class="fas fa-pen-square fa-fw"></i> this blog and <a href="https://fiddien.medium.com"><i class="fab fa-medium fa-fw"></i> Medium</a> to reflect from her experiences and to cristalise what she has learned.


<!-- <p>
    Posts language: 
        <a href="/en/" class="post-tag no-text-decoration">🇬🇧</a>
        <a href="/id/" class="post-tag no-text-decoration">🇮🇩</a>
</p> -->

Highlighted:

{% assign fronted = site.posts | where: "front", "true" %}
{% assign default = site.posts | where_exp: "item", "item.front != true and item.hidden != true" %}
{% assign posts = "" | split: "" %}
{% assign offset = paginator.page | minus: 1 | times: paginator.per_page %}
{% assign fronted_num = fronted.size | minus: offset %}

<!-- {% if fronted_num > 0 %}
  {% for i in (offset..fronted.size) limit: fronted_num %}
    {% assign posts = posts | push: fronted[i] %}
  {% endfor %}
{% else %}
  {% assign fronted_num = 0 %}
{% endif %} -->


<ul>
    <li><a href="https://fiddien.com/categories/essay/" class="post-tag no-text-decoration">Essays</a></li>

    {% for post in posts %}
    
    <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <sup> 
            <!-- time to read -->
            <span>
                {% include read-time.html content=post.content %}
            </span>

            <!-- post language -->
            {% if post.languages %}
                <span>
                    | {{ post.languages }}
                </span>
            {% endif %}
            <!-- language -->
            
        </sup>
    </li>

    {% endfor %}
</ul>
    
<hr>
<p>
    <a href="mailto:ilmaaliyaf@gmail.com"><i class="fas fa-envelope fa-fw"></i> Email</a>, <a href="https://linkedin.com/in/fiddien"><i class="fab fa-linkedin fa-fw"></i> connect</a>, or follow along her <a href="https://goodreads.com/fiddien"><i class="fab fa-goodreads fa-fw"></i> reading list</a>.
</p>