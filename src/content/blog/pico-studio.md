---
title: "Pico-Studio"
pubDate: "2025-12-01"
description: "Browser-based IDE for Pico-8 game development powered by AI chat interactions."
author: "Chris Moles"
tags: ["react", "typescript", "python", "fastapi", "docker", "mcp", "claude"]
---

### From Fantasy Console to Fantasy IDE

If you've read my earlier post about [playing with the Pico-8](/blog/playing-with-the-pico8), you know I fell in love with this little fantasy console. But the more I used it, the more I wanted to build games from anywhere -- not just from the machine that had Pico-8 installed. So I built Pico-Studio, a browser-based IDE that lets you create, edit, and play Pico-8 games right from your browser.

### The AI Part

What makes this project different from just slapping a code editor in a browser is that it's powered by Claude through MCP (Model Context Protocol). You can chat with Claude and it can directly manipulate your game -- editing code, sprites, maps, and sound effects. It's like pair programming, but your partner actually knows how to draw pixel art. I built 43 tool actions across 6 groups so Claude can do pretty much anything you'd do in the native Pico-8 editor.

### Building It

The frontend is React with TypeScript and Vite, using Monaco for the code editor and HTML5 Canvas for the sprite, map, and SFX editors. The backend is FastAPI with FastMCP running on Python 3.12. I've got it all containerized with Docker, sitting behind a Caddy reverse proxy on a Hetzner VPS.

One of my favorite features is game publishing -- you can push your game to a public URL and share it with anyone. I also added git integration so you can version control your projects, which has saved me more than once when I've accidentally broken something.

### What's Next

I'm still tweaking things, especially around mobile responsiveness. It works on a phone, but let's be honest, writing Lua on a phone screen isn't exactly ideal. The real magic is sitting down with a full keyboard and just chatting with Claude about what kind of game you want to make.
