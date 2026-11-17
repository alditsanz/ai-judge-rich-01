// ai-judge-rich-01 entry (Node 22, standard library only): it writes one fixed
// plan to /output/entry.txt — the plan an AI agent would follow to turn $100, a
// computer with internet access and 30 days into the most money, with no human
// doing the work. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, line ends
// included, so write no line end you do not mean to show. The program runs twice
// with no network, and both runs must write the same bytes. Deterministic: the
// plan is a constant, no date, no randomness, no environment read.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Why this plan beats the obvious ones: it copies the strongest pattern the
// house itself measured — do the work first, then charge to keep it — but aims
// it at local trades with no website at all (plumbers, electricians), where one
// missed call is a lost $100+ job, so $149 is trivial against the site's value;
// it adds a $19/month care tail on top of the one-off sale, so expected day-30
// money is higher than a one-off-only plan; and its edge is volume no human
// freelancer can match — 25 finished, live sites built and sent a day, every
// day, with the owner seeing their own working site before paying a cent.
// The $100 is almost never spent: $12 for a sending domain, free-tier hosting,
// the rest held — so the likely outcome is bounded below by roughly $900 even
// at a 1-in-100 buy rate, and the upside is the care renewals.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Sell live one-page websites to local trades with no website at all.',
  'Day 1: search Google Maps for plumbers and electricians with no website, pick 25, and build each a live one-page site from their own listing — services, photos, click-to-call, quote form — hosted free, on a demo link.',
  'Email each owner the live link: keep it on your domain for $149 once, pay by card through a Stripe link, no call or meeting. Add $19 a month for hosting and updates; about a third of buyers take it.',
  'Repeat daily: 25 new sites, follow up on day 3 and day 7, stop emailing anyone who asks to stop, and drop any town with no reply in a week.',
  'Spend $12 of the $100 on a sending domain; hosting is free tier, the rest stays untouched.',
  'At 2 in 100 buying, 25 demos a day for 25 days is about 12 sales, about $1,800, plus monthly care; at 1 in 100 it is still about $900.',
  'Edge: freelancers pitch, you demo — the owner sees their own working site before paying, and no human could build and send 25 finished sites a day.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
