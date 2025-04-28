# rolldown-vite-perf-wins

---
Name: GitLab
Source: https://gitlab.com/gitlab-org/gitlab/-/merge_requests/180509
Social: https://x.com/youyuxi/status/1914481681203102021
Build time before (Vite): ~2.5m
Build time after (no native): ~1m (esbuild for minification)
Build time after (only native resolver plugins): ~40s
Performance improvement: ~2.6x faster and 100x less memory consumption
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
---
Name: Appwrite
Source: https://github.com/appwrite/website/pull/1933
Social: https://x.com/DittmannTorsten/status/1915763729586606125
Build time before (Vite): 12m 27s
Build time after (no native): 5m 38s
Build time after (with native plugins): 3m 21s
Performance improvement: ~3.7x faster and 4x less memory consumption
---
name: Particl
Source: https://x.com/gill_kyle/status/1912336077152829745, https://x.com/gill_kyle/status/1915088866324967839
Build time before (Next.js & Webpack): 3m
Build time before (Vite): 1m 2s
Build time after (no native plugins): 27.16s
Build time after (with native plugins): 6.36s
Performance improvement (compared to Vite): ~9.7x faster
Performance improvement (compared to Next.js & Webpack): ~28.8x faster
---
name: Todor Andonov
Source: https://x.com/andonov_t
Build time before (Vite): 47s
Build time after (with native plugins): 12s
Performance improvement: ~4x faster
---
name: Payfit
Source: https://x.com/youyuxi/status/1907327848052109500
Build time before (Vite): 55s
Build time after (with native plugins): 11.74s
Performance improvement: ~4.7x faster

