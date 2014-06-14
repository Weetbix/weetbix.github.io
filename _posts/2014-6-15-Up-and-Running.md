---
layout: post
title: Up and Running
---

I spent some time looking over the best options to host a micro site where I can
post blog entries and photos while traveling.

I decided to go with using [Jekyll](http://jekyllrb.com) to build a site hosted
on [Github Pages](https://pages.github.com/) which has a few advantages:

* Completely *free* hosting
* Write blog posts in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* Publishing a new post is as simple as pushing a new markdown file to the git
  repository.
* Can write and preview new posts online, from the github file editor
* All posts and changes are version controlled
* Github pages even [support custom domains](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages),
  so you can't tell it's free.

##The process, in more detail

Jekyll is a simple, blog aware, static site generator. It takes a bunch of template
files, processes them and spits out a *completely static website*. It's fully supported
by Github pages which means you push the *source* files to your repository, and
Github runs Jekyll on them and spits out the static site which it hosts.

Jekyll processes all your html and [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
files, which can contain [YAML](http://www.yaml.org/) and
[Liquid](https://github.com/Shopify/liquid). To add a new post, I simply add a
new .md file in the `_posts` folder and push it to my git repository.

Here's an example of a blog post .md file:

{% highlight markdown %}
---
layout: post
title: Up and Running
---

I spent some time looking over the best options to host a micro site where I can
post blog entries and photos while traveling.

I decided to go with using [Jekyll](http://jekyllrb.com) to build a site hosted
on [Github Pages](https://pages.github.com/) which has a few advantages:
{% endhighlight %}

You can view the full source for this site [here](https://github.com/Weetbix/weetbix.github.io)

There are a few more projects which deserve a note:

* [Poole](https://github.com/poole/poole) is a tiny example site built with Jeykll and
  provides a good starting point.
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/) provides hundreds of
  font based icons - no more images!
* [Disqus](http://disqus.com/) lets you embed comments on your pages
* [PortableJekyll](https://github.com/madhur/PortableJekyll) a folder of binaries
  so you don't need to fight to build Jekyll for testing.
