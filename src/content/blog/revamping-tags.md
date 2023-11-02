---
title: 'Revamping Tags'
pubDate: '2023-11-01'
description: 'Adding more content to my tags.'
author: 'Chris Moles'
tags: ["astro","web-development"]
---

I neglected this website for a little bit. Recently, I added some AI generated
content for my own reviewing purposes. I didn't want to clog up my blog with
these kinds of posts, but I did want to see all the tags together.

```astro
---
const allBlogPosts = await getCollection('blog');
const allAIPosts = await getCollection('ai');
const allWebPosts = await getCollection('web');
const allGamePosts = await getCollection('games');
```

That was easy. Astro is great for this kind of thing. I can just import more
content and concatenate the collections. I could also automatically add tags
for certain kinds of posts, e.g. add [pico-8](/tags/pico-8) to all posts in
the games collection, but I'm not sure if I want to do that. Could create more problems than it solves. I'll have to think about it. Programming is fun. 😎
