# Rolldown-Vite Performance Wins

> A collection of perf improvement stats when users switch from current Vite (powered by Rollup) to Rolldown-powered-Vite. 

Interested in trying it yourself? Check out [the guide](https://vite.dev/guide/rolldown.html).
Got cool results to share? **PR welcome!**

## Results

| Project | Source | Social | Plain Vite | Rolldown-Vite (no native [^1]) | Rolldown-Vite (native v1 [^2]) | Build Speed Change | Build Memory Usage Change |
|---------|--------|--------|--------------|-------------------|---------------------|-------------|----|
| Outline | [PR](https://github.com/outline/outline/pull/9523) | [Twitter](https://x.com/youyuxi/status/1944604243786428448) | 47.27s | 5.40s | 2.12s | 22.3x | - |
| StructDB | (private repo) | [Website](https://structdb.net) | 20.98s | 4.53s | 1.19s  | 17x | - |
| Excalidraw | [GitHub](https://github.com/sapphi-red/excalidraw/tree/trim-down-build) | [Twitter](https://x.com/youyuxi/status/1914278629875540368) | 22.9s | - | 1.4s | 16x | - |
| PLAID, inc. (front end 1) | - | [Bluesky](https://bsky.app/profile/kazupon.dev/post/3lnk7bieifs2v) | 1m 20s | 10s | 5s | 16x | - |
| Bright software | (private repo) | [website](https://brightit.com.np/) | 4m34s | 1m20s | 18s  | 15.22x | - |
| Vibe Dashboard | [GitHub] (https://github.com/voidzero-dev/vibe-dashboard) | [PR](https://github.com/voidzero-dev/vibe-dashboard/pull/12) | 4.3s | - | 315ms | 13.6x | - |
| Particl | - | [Twitter 1](https://x.com/gill_kyle/status/1912336077152829745), [Twitter 2](https://x.com/gill_kyle/status/1915088866324967839) | 1m 2s (Vite), 3m (Next.js) | 27.16s | 6.36s | 9.7x <br> (28.8x compared to Next.js) | - |
| Meess (Server build) | - | [Twitter](https://x.com/ThisIsGengar/status/1928741941916618956) | 2.9s | 0.82s | 0.35s | 8.29x | - |
| PLAID, inc. (front end 2) | - | [Bluesky](https://bsky.app/profile/kazupon.dev/post/3lnk7bieifs2v) | 40s | 9s | 5s | 8x |  - |
| Halo (Client build) | [GitHub](https://github.com/halo-dev/halo) | [Twitter](https://x.com/ryanwang_ya/status/1928664440100237678) | 18.98s | 3.19s | 2.35s | 8x |  - |
| Meess (Client build) | - | [Twitter](https://x.com/ThisIsGengar/status/1928741941916618956) | 3.3s | 0.85s | 0.48s | 6.88x |  - |
| GitLab | [MR 180509](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/180509) | [Twitter](https://x.com/youyuxi/status/1914481681203102021) | 2.5m | 1m (esbuild for minification) | ~22s | 6.82x | 100x
| bzbub2 | - | [Reddit Comment 1](https://www.reddit.com/r/javascript/comments/1kz7dsp/comment/mv9z5or/), [Reddit Comment 2](https://www.reddit.com/r/javascript/comments/1kz7dsp/comment/mvt30dp/) | 33.56s | 10.22s | 4.97s | 6.8x | - |
| Saurabh | - | [Twitter](https://x.com/Saurabh_kakran/status/1914593323781603467) | 5m 10s | 1m 4s | 53s | 5.8x | - |
| Ecksters | - | [Reddit Comment 1](https://www.reddit.com/r/javascript/comments/1kz7dsp/comment/mv3q5qc/), [Reddit Comment 2](https://www.reddit.com/r/javascript/comments/1kz7dsp/comment/mv5avxx/)| 48s | 25s | 5.5s | 5.45x | - |
| Payfit | - | [Twitter](https://x.com/youyuxi/status/1907327848052109500) | 55s | - | 11.74s | 4.7x | - |
| Acre Software | (private repo) | [website](https://www.acresoftware.com/) | 1m54s | 38.96s | 25.41s | 4.49x | - |
| Todor Andonov | - | [Twitter](https://x.com/andonov_t/status/1915215035992821831) | 47s | - | 12s | 4x | - |
| Sanity | - | [Bluesky](https://bsky.app/profile/evanyou.me/post/3lqruv5a2ck2n) | 21.9 | 5.1s | - | 4x (no native plugins enabled) | - |
| Appwrite | [PR 1933](https://github.com/appwrite/website/pull/1933) | [Twitter](https://x.com/DittmannTorsten/status/1915763729586606125) | 12m 27s | 5m 38s | 3m 21s | 3.7x | 4x |
| ast-grep | [GitHub](https://github.com/ast-grep/ast-grep.github.io) | [Twitter](https://x.com/hd_nvim/status/1928482034055274917) | 23.9s | 8.71s | 6.86s | 3.5x | - |
| hanford | - | [Discord Thread](https://discord.com/channels/1171783886200643635/1379507924610842664/1379517855619612783) | 5m | - | 1m 30s (only native resolver) | 3.33x (only native resolver) | - |
| Mercedes-Benz.io | - | [Blog Post](https://www.mercedes-benz.io/blog/2025-05-16-how-can-modern-tooling-save-mercedes-benz-io-engineering-time) | - | - | - | 3x | - |
| Minimal Nuxt.js application | [CodSpeed](https://codspeed.io/nuxt/nuxt/branches/feat%2Ftest-rolldown-vite) | - | 5.4s | 2.1s | - | 2.6x | - |
| Storybook | - | [Bluesky](https://bsky.app/profile/shilman.net/post/3lnnmagmqtc2s) | 80s | 56s | 51s | 1.56x | - |

[^1]: Native plugins were not enabled by default before `rolldown-vite` v7.1.2

[^2]: A lot of native plugins are enabled by default since `rolldown-vite` v7.1.2 as "first generation" of native plugins support.
