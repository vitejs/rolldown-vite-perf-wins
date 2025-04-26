# rolldown-vite-perf-wins

---
Name: GitLab
Source: https://gitlab.com/gitlab-org/gitlab/-/merge_requests/180509
Social: https://x.com/youyuxi/status/1914481681203102021
Build time before (Vite): ~2.5m
Build time after (no native): ~1m (esbuild for minification)
Build time after (only native resolver plugins): ~40s
Performance improvement: ~2.6x faster but 100x less memory consumption
---
Name: Excalidraw
Source: https://github.com/sapphi-red/excalidraw/tree/trim-down-build
Social: https://x.com/youyuxi/status/1914278629875540368
Build time before (Vite): 22.9s
Build time after (with native plugins): 1.4s
Performance improvement: ~16x faster
---
Name: Storybook
Social: https://bsky.app/profile/shilman.net/post/3lnnmagmqtc2s
---
Name: kazupon
Social: https://bsky.app/profile/kazupon.dev/post/3lnk7bieifs2v
---
Name: Saurabh
Social: https://x.com/Saurabh_kakran/status/1914593323781603467