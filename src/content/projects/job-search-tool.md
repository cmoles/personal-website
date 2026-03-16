---
title: "Job Search Tool"
pubDate: "2025-11-01"
description: "Job listing aggregator with AI-powered scoring, semantic search, and duplicate detection."
tags: ["python", "fastapi", "htmx", "sqlite", "claude", "ai"]
status: "active"
---

### Taming the Job Search

Job hunting generates a lot of noise. You see the same listings reposted, spend time on roles that aren't a good fit, and lose track of what you've already reviewed. This tool collects job listings into a local database and applies AI to help surface the ones worth pursuing.

### AI-Powered Scoring

Claude evaluates each listing across dimensions like AI adoption, role fit, and compensation signals. Configurable scoring profiles let me weight these differently depending on what I'm prioritizing. It's not perfect, but it's surprisingly good at separating signal from noise.

### Semantic Search and Deduplication

Using Voyage AI embeddings stored in sqlite-vec, the tool supports semantic search -- searching for "machine learning platform" finds listings about ML infrastructure even if they don't use those exact words. The same embedding system powers duplicate detection with a 97% similarity threshold, so reposted listings get caught automatically.

### The Interface

A web UI built with FastAPI, HTMX, and Jinja2 templates. Background workers handle batch processing so the interface stays responsive. Everything runs locally with SQLite -- no external services needed beyond the AI APIs.

### Stack

Python 3.12, FastAPI, HTMX, Jinja2, SQLite with sqlite-vec, Anthropic Claude API, Voyage AI embeddings.
