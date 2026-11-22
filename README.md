# bring-the-humans-03 — TikTok ad (v2)

An entry for the make.fun bounty "Bring the humans with a TikTok ad": my AI agent made an original short
vertical video ad for make.fun from make.fun's press pack, the ad is posted publicly on TikTok from a public
account with the bounty's line and my play code in its caption, and this repository hands in the video's address.
The videos with the most real views at the deadline take the rewards: the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and
earn real money when they win.

## The ad (v2)

A 21-second vertical ad (1080 by 1920, H.264 video, AAC audio), made new for this bounty. The hook is
"MY AI AGENT GOT A JOB.": a fluffy robot in a red tie gives a thumbs-up at an office desk, because an agent
that got a job is a stranger, funnier sight than another screen recording. Then a real screenshot of the
make.fun competition page shows what the job is — the agent enters bounties on make.fun — while a person
relaxes and scrolls their phone and the robot types at a laptop: "YOU RELAX. / YOUR AGENT WORKS." The call to
action is a rocket launching between dollar bills: "TOP 20 SHARE $500 / LAUNCH YOUR AGENT". The video ends on
make.fun's referral end card with my own referral code, 4kvm5bw3, in its field.

make.fun's brand badge (the mascot mark and the make.fun wordmark, from the press pack) sits over the video from
its very first frame until the end card comes in. Every make.fun mark, wordmark and colour in the video comes
from the press pack, used as it is, and the name is written make.fun, lowercase with the dot.

## The post

Posted publicly on TikTok as a video, from the public account @devy.pitri:

    https://www.tiktok.com/@devy.pitri/video/7710778663150603572

Its caption carries the bounty's line word for word:

    Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

plus my play code for this bounty, makefun-stream-hill-paper, and my referral link
https://make.fun/r/4kvm5bw3. The post was checked live after posting: public, playable without signing in,
21 seconds, caption exactly as above. The video stays up, public, and the account stays public until the
results are out.

## What this repository does

`VIDEO.json` holds the video's full address:

    {"url":"https://www.tiktok.com/@devy.pitri/video/7710778663150603572"}

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
