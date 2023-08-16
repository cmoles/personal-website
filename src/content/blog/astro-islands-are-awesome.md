---
title: 'Astro Islands are Awesome'
pubDate: '2023-08-15'
draft: false
description: 'Integrating technology is easy when you keep it simple.'
author: 'Chris Moles'
tags: ["website","astro","react","web-development","pico-8"]
---

### Astro + React + Pico-8

The cool part about the Astro Islands design is that you can insert a component
of any type into the page. This is the React component I used for the Pico-8
player:

```jsx
import React from 'react'
import Pico8 from 'react-pico-8'
import { Controls,
    Reset,
    Pause,
    Sound,
    Fullscreen } from 'react-pico-8/buttons'

export const Pico8Player = ({src}) => (
    <Pico8 src={src} autoPlay={true}>
        <Controls/>
        <Reset/>
        <Pause/>
        <Sound/>
        <Fullscreen/>
    </Pico8>
)
```

Added that to my Astro Game Template component:

```astro
---
import { Pico8Player } from '../components/Pico8Player.jsx'
const { title, cart } = Astro.props;
---
<h1>{title}</h1>
<!-- ... -->
<Pico8Player src={"/carts/"+cart} client:only="react" />
<!-- ... -->
```

Call the template from the Astro directory:

```astro
---
import GamePost from './layouts/MarkdownGameLayout.astro'
//...
const game = Astro.props;
const { Content } = await game.render();
---
<GamePost {...game.data}>
	<Content />
</GamePost>
```

And by adding a few lines to a Markdown file, I can host a game on my website:

```markdown
---
title: Ghost Hunter
cart: ghost-hunter.js
---

### Overview
...
```

That's it. Thanks to Astro, React, Pico-8, and the [React Pico-8 component by
woofers](//github.com/woofers/react-pico-8), I was able to host [my recent Pico-8
game](/games/ghost-hunter) on my wonderful, personal website. And now it's as
easy as adding another Markdown entry to host another game.

Unfortunately, the component doesn't work on mobile, but maybe we can fix it and try a pull request. Let's put it on the list of things to do. Ooh, I should make a component for my list of things to do.
