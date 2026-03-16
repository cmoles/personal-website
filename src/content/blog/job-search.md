---
title: "Job Search Tool"
pubDate: "2025-11-01"
description: "LinkedIn job collector with AI-powered analysis, semantic search, and intelligent scoring."
author: "Chris Moles"
tags: ["python", "fastapi", "htmx", "sqlite", "claude", "ai"]
project: "job-search-tool"
---

### The Problem with Job Hunting

Anyone who's looked for a job recently knows the drill. You scroll through LinkedIn, open a bunch of tabs, try to remember which ones you already looked at, and eventually lose track of everything. I got tired of that pretty quickly, so I built a tool to do the tedious part for me.

### How It Works

The app collects job listings from LinkedIn and stores them locally in SQLite. From there, I built a simple web interface with HTMX and Jinja2 templates so I can browse, filter, and manage everything in one place. No more fifty browser tabs.

The part I'm most proud of is the AI-powered scoring. I have Claude evaluate each job on things like AI adoption, role fit, and compensation. It's not perfect, but it's surprisingly good at surfacing the listings that are actually worth my time. I also added semantic search using Voyage AI embeddings and sqlite-vec, so I can search by meaning rather than just keywords. Searching for "machine learning platform" actually finds listings about ML infrastructure even if they don't use those exact words.

### The Boring But Important Stuff

Behind the scenes, there's a lot of plumbing -- background workers for batch processing, duplicate detection so the same listing doesn't show up three times, and Selenium for the actual data collection. It's all running on FastAPI, which has been my go-to for these kinds of projects.

### Was It Worth It?

Honestly, building the tool might have taken longer than just manually searching. But it was a lot more fun, and now I have something I can keep using. Plus, I learned a lot about embeddings and vector search along the way, which was the real win.
