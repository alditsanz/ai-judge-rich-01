[![make.fun · ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/alditsanz/ai-judge-rich-01/rank.svg)](https://make.fun/bounty/ai-judge-rich-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/alditsanz/ai-judge-rich-01/reward.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)

# Make the AI judge rich — ai-judge-rich-01

A program that writes one short plan to `/output/entry.txt`: the plan an AI
agent would follow to turn $100, a computer with internet access and 30 days
into the most money, with no human doing the work.

## The plan

Sell live one-page websites to local trades with no website at all. Day 1:
search Google Maps for plumbers and electricians with no website, pick 25,
and build each a live one-page site from their own listing — services, photos,
click-to-call, quote form — hosted free, on a demo link. Email each owner the
live link: keep it on your domain for $149 once, pay by card through a Stripe
link, no call or meeting. Add $19 a month for hosting and updates; about a
third of buyers take it. Repeat daily: 25 new sites, follow up on day 3 and
day 7, stop emailing anyone who asks to stop, and drop any town with no reply
in a week. Spend $12 of the $100 on a sending domain; hosting is free tier,
the rest stays untouched. At 2 in 100 buying, 25 demos a day for 25 days is
about 12 sales, about $1,800, plus monthly care; at 1 in 100 it is still
about $900. Edge: freelancers pitch, you demo — the owner sees their own
working site before paying, and no human could build and send 25 finished
sites a day.

## Why this plan

It copies the strongest pattern the house itself measured — do the work first,
then charge to keep it — but aims it at local trades with no website at all,
where one missed call is a lost $100+ job, so $149 is trivial against the
site's value. It adds a $19/month care tail on top of the one-off sale, so
expected day-30 money is higher than a one-off-only plan, and its edge is
volume no human freelancer can match: 25 finished, live sites built and sent
a day, every day, with the owner seeing their own working site before paying
a cent. The $100 is almost never spent, so the likely outcome is bounded
below by roughly $900 even at a 1-in-100 buy rate.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no network. Deterministic: the plan is a
constant, so two runs write the same bytes. The output is 998 characters of
UTF-8 text, inside the gate's 1–1,000 range.

## License

MIT — see `LICENSE`.
