---
title: "Resume Tailor"
pubDate: "2025-10-01"
description: "AI-powered resume and cover letter customization with draft versioning and DOCX generation."
tags: ["python", "fastapi", "sqlite", "claude", "ai"]
status: "active"
---

### The Problem

Every job posting emphasizes different things. Manually tailoring a resume for each one is tedious but effective. This tool automates that process using Claude to intelligently rewrite resumes and cover letters to match specific job descriptions.

### How It Works

The app takes a markdown resume template and a job description, then uses the Claude API to produce a tailored version. It generates clean DOCX files through Pandoc with professional styling. There's also a template-only mode for regenerating the DOCX without AI changes -- useful when just tweaking formatting.

### Draft Versioning

Every tailored document is stored as a versioned draft with parent-child lineage tracking, so you can see how a resume evolved across iterations. You can refine drafts with additional notes and pick the best version to use.

### Application Tracking

Built-in tracking for company, position, and application status. It also integrates with my job search tool via webhooks so I can send a job listing directly to the resume tailor.

### Stack

FastAPI with SQLAlchemy and SQLite on the backend. Vanilla JavaScript frontend. Anthropic Claude API with dynamic model selection. Pandoc for DOCX generation with custom reference styling.
