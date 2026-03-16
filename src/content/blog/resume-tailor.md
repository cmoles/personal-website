---
title: "Resume Tailor"
pubDate: "2025-10-01"
description: "AI-powered resume and cover letter customization with DOCX generation."
author: "Chris Moles"
tags: ["python", "fastapi", "sqlite", "claude", "ai"]
project: "resume-tailor"
---

### The Resume Problem

Every job posting is a little different. Some want you to emphasize leadership, others want deep technical skills, and others care most about specific domain experience. Sending the same resume to every listing felt like a waste, but manually tailoring each one was taking forever. So, naturally, I built a tool for it.

### What It Does

Resume Tailor is a web app that takes my resume in markdown, reads a job description, and uses Claude to intelligently rewrite the resume to match what the job is looking for. It does the same thing for cover letters. Once it's done, it generates a clean DOCX file through Pandoc so everything looks professional.

I added draft versioning so I can track how my resume evolved across iterations -- kind of like git, but for resumes. There's also a template-only mode for when I just want to regenerate the DOCX without any AI changes, which is handy when I'm just tweaking formatting.

### Keeping Track of Applications

On top of the resume stuff, I built in basic application tracking. I can log which company, position, and status each application is in. It's not a full-blown ATS, but it keeps me from losing track of where I've applied.

### The Stack

The backend is FastAPI with SQLAlchemy and SQLite -- my usual combo for personal projects. The frontend is just vanilla JavaScript because I didn't need anything fancy. The AI side uses the Anthropic Claude API, and I added dynamic model selection so I can pick the right Claude model depending on how complex the tailoring needs to be.

### Lessons Learned

The biggest takeaway was how much difference a tailored resume actually makes. Once I had the tool running, I could see side-by-side how generic my original resume looked compared to the tailored version. It's one of those projects where the tool taught me something about the problem I was trying to solve.
