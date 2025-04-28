# Rolldown-Vite Performance Wins

> A collection of perf improvement stats when users switch from current Vite (powered by Rollup) to Rolldown-powered-Vite. 

Interested in trying it yourself? Check out [the guide](https://vite.dev/guide/rolldown.html).
Got cool results to share? **PR welcome!**

## Results

| Project | Source | Social | Before (Vite) | After (No Native) | After (With Native) | Improvement |
|---------|--------|--------|--------------|-------------------|---------------------|-------------|
| GitLab | [MR 180509](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/180509) | [Twitter](https://x.com/youyuxi/status/1914481681203102021) | ~2.5m | ~1m (esbuild for minification) | ~40s (only native resolver plugins) | ~2.6x faster, 100x less memory |
| Excalidraw | [GitHub](https://github.com/sapphi-red/excalidraw/tree/trim-down-build) | [Twitter](https://x.com/youyuxi/status/1914278629875540368) | 22.9s | - | 1.4s | ~16x faster |
| Storybook | - | [Bluesky](https://bsky.app/profile/shilman.net/post/3lnnmagmqtc2s) | - | - | - | - |
| kazupon (front end 1) | - | [Bluesky](https://bsky.app/profile/kazupon.dev/post/3lnk7bieifs2v) | 1m 20s | 10s | 5s | 16x |
| kazupon (front end 2) | - | [Bluesky](https://bsky.app/profile/kazupon.dev/post/3lnk7bieifs2v) | 40s | 9s | 5s | 8x |
| Saurabh | - | [Twitter](https://x.com/Saurabh_kakran/status/1914593323781603467) | - | - | - | - |
| Appwrite | [PR 1933](https://github.com/appwrite/website/pull/1933) | [Twitter](https://x.com/DittmannTorsten/status/1915763729586606125) | 12m 27s | 5m 38s | 3m 21s | ~3.7x faster, 4x less memory |
| Particl | [Twitter 1](https://x.com/gill_kyle/status/1912336077152829745), [Twitter 2](https://x.com/gill_kyle/status/1915088866324967839) | - | 1m 2s (Vite), 3m (Next.js) | 27.16s | 6.36s | ~9.7x faster vs Vite, ~28.8x vs Next.js |
| Todor Andonov | [Twitter](https://x.com/andonov_t) | - | 47s | - | 12s | ~4x faster |
| Payfit | - | [Twitter](https://x.com/youyuxi/status/1907327848052109500) | 55s | - | 11.74s | ~4.7x faster |