---
title: "Pico-Studio"
pubDate: "2025-12-01"
description: "Browser-based IDE for Pico-8 game development powered by Claude AI and MCP."
tags: ["react", "typescript", "python", "fastapi", "docker", "mcp", "claude"]
status: "active"
---

### Browser-Based Game Development with AI

Pico-Studio is a browser-based IDE that lets you create, edit, and play Pico-8 games from anywhere. What makes it different is the AI integration -- you can chat with Claude and it directly manipulates your game code, sprites, maps, and sound effects through MCP (Model Context Protocol).

### Why One Big Tool?

One key design decision was building the MCP integration as a single large tool with 43 actions across 6 groups, rather than exposing each action as its own tool. The reason: every tool definition eats into the context window. With dozens of small tools, Claude would spend a significant chunk of its context just on tool schemas before it even starts thinking about your game. A single tool with structured action parameters keeps the context lean and leaves more room for actual conversation and code reasoning.

### The Stack

The frontend is React with TypeScript and Vite, using Monaco for the code editor and HTML5 Canvas for the sprite, map, and SFX editors. The backend is FastAPI with FastMCP on Python 3.12, containerized with Docker behind a Caddy reverse proxy on a Hetzner VPS.

### Features

- Full code editor with syntax highlighting
- Sprite, map, and SFX editors in the browser
- AI chat that can directly edit game assets
- Game publishing to shareable public URLs
- Git integration for version control
- Mobile-responsive layout
