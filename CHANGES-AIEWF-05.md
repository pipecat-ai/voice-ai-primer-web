# Change list: port AIEWF-05 (June 2026) PDF → index.html

> **RESOLVED DECISIONS (user):**
> - **Images:** apply all text/table/structure changes now; KEEP current PNGs; flag figures needing new assets (items 23, 27). Do not fabricate charts.
> - **Deletions:** REMOVE all to match PDF — §5.4.3, §5.4.4 (+code/prompt), interactive cost calculator, footnotes [13] & [49] (items 21, 29, 30, 42, 48).
> - **Cross-refs / cosmetic:** SKIP — keep web anchor links (do not insert literal section numbers); keep current realtime/real-time & khz spelling. Affects items 4, 14, 43 and all [PRINT?] tags → keep existing link, no number.
> - **Contributors:** UPDATE to match PDF (item 53).


Source: `indd/Daily-Whitepaper-Book-AIEWF-05.pdf` (84 pp). Baseline: current working-tree `index.html` (March 2026 draft).
Each item: PDF page → web section. Status legend: **[TEXT]** portable prose/number change · **[STRUCT]** heading/numbering/section change · **[DEL]** deletion · **[IMG]** needs a chart/image asset I cannot extract · **[PRINT?]** print-only cross-ref number — likely should NOT port to web (web uses anchor links) · **[META]** metadata.

---

## A. Front matter / metadata

1. **[META]** Footnote [2] (§3 About this guide), p9: "This update was published in **March 2026**" → "**June 2026**".
2. **[META]** Footnote [4] (§3), p9: "more than **90** AI models and services" → "more than **100**".

## B. §2 "Voice AI is not just 'voice'" (p7)

3. **[TEXT]** Bullet list — add two bullets and reorder tail. New list: multi-modal agents; multi-model orchestration; asynchronous tool calling; context compaction; hybrid local/cloud inference; progressive "skills" loading; agent memory; **continual learning**; sandboxes; **dynamically generated user interfaces**. (Web currently ends "...agent memory, and sandboxes".)
4. **[TEXT]** "Teams building **real-time** video models" → "**realtime**" (PDF spelling). *(Low value; see global note on realtime/real-time.)*

## C. §3 "About this guide" (p9)

5. **[TEXT]** "This guide was **directly inspired**" → "This guide was **inspired**" (drop "directly").
6. **[TEXT]** Pipecat sentence: "...all of the large AI labs, **and hundreds of startups** leveraging..." → "...all of the large AI labs, **Fortune 500 companies like ServiceNow, and thousands of startups, scale-ups, and individual developers** leveraging and contributing to the codebase."

## D. §5.1 Latency (pp12–14) — no substantive change (numbers already match: total 1293, llm ttfb 650, 1,500 ms target). Confirm only.

## E. §5.2 LLMs for voice use cases (pp14–17) — MAJOR REWRITE + RESTRUCTURE

7. **[TEXT]** "Today, the most widely used models for voice agents are **GPT-4.1, GPT-4o, and Gemini 2.5 Flash**" → "**GPT 4.1, GPT 5.1, and Gemini 2.5 Flash**".
8. **[TEXT]** Replace the "No other models have, until recently, challenged…" + "Anthropic Claude 4.5 Haiku / AWS Nova 2 Pro / NVIDIA Nemotron 3 Nano" + "Our thinking has evolved…" passage with the new p14–15 prose: "Recently, several model families are challenging GPT and Gemini model families on the Pareto frontier of intelligence and latency." + new paragraph "You'll notice that GPT 4.1 and Gemini 2.5 Flash are both relatively old models. Newer models in both families are 'reasoning' models. They are much slower to produce content tokens. Gemini 3 models are particularly slow, so even though they perform well on intelligence benchmarks we generally can't use them for voice agents."
9. **[STRUCT]** Remove the **5.2.1 "LLM Latency"** sub-heading AND its lead-in sentence "**Here are latency (time to first token) numbers for these models, in our February monitoring.**" (web-only, not in PDF — pass 3). The TTFT table + "rough rule of thumb" prose now sit directly under 5.2 (no subsection). The "as quickly as humans"/empirical-evidence/1,500 ms paragraphs remain (p14). *(Note: PDF places "Our thinking has evolved…" + "It is critical, though…" at the end of §5.1; web keeps them at the start of §5.2 — content identical, leave web placement.)*
10. **[TEXT/table]** TTFT table (p15) replaced:
    - GPT 4.1 — 536 / 1771
    - Gemini 2.5 Flash — 597 / 1137
    - Claude 4.5 Haiku — 637 / 1615
    - GPT 5.1 — 739 / 1492
    - Nemotron 3 Ultra (self-hosted) — 541 / 712
    (Removes AWS Nova 2 Pro row + "Nemotron 3 Nano" row; note table caption line is gone in PDF.)
11. **[TEXT]** After the table, the "It is possible, at scale…committed inference compute from AWS, GCP, and Azure" sentence is split; "(for example, **Nemotron**)" → "(for example, **NVIDIA Nemotron**)".
12. **[STRUCT]** Renumber **5.2.2 Cost comparison → 5.2.1 Cost comparison** (p16).
13. **[TEXT/table]** Cost table (p16) replaced (cols: 3-min / 10-min / 30-min):
    - Gemini 2.5 Flash — $0.002 / $0.006 / $0.024
    - Claude 4.5 Haiku — $0.006 / $0.019 / $0.075
    - GPT 5.1 — $0.008 / $0.025 / $0.100
    - GPT 4.1 — $0.019 / $0.069 / $0.318
    (Removes AWS Nova 2 Pro row; GPT 4.1 30-min now $0.318; Gemini 30-min now $0.024.)
14. **[TEXT]** Cost §: PDF says "See Section 11.2 for a discussion of estimating voice agent total costs (not just LLM costs)." **[PRINT?] → per policy keep web wording "See below for a discussion…" (already present; no change).**
14b. **[DEL]** Remove web-only sentence (not in PDF): "**The above table shows an example total cost for three conversation lengths.**" (web line ~612). *(added via review pass 2)*
15. **[STRUCT]** Renumber **5.2.3 Open source / open weights → 5.2.2** (p16–17). Rewrite body: "Voice AI use cases are demanding enough that it generally makes sense to use the best available model **that can operate at realtime latency.** This has limited the models that are used for voice AI to proprietary models. However, **open weights models are beginning to match closed models on important benchmarks.** This is exciting… fine-tune on **our own data**… Several promising open models have been released recently that we are beginning to use in voice agents and **task subagents: the NVIDIA Nemotron 3 model family, Kimi 2.6, Gemma 4, and GLM 5.** See below for benchmark charts and Pareto frontier diagrams." (Removes the "Nemotron 3 Nano…first open model…" sentence.)
16. **[STRUCT]** Renumber **5.2.4 What about speech-to-speech models? → 5.2.3** (p17). Edits: drop "Speech-to-speech models are an exciting, relatively new, development." opening sentence (PDF starts "A speech-to-speech LLM can be prompted…"). Providers line: "OpenAI, Google, **and AWS** all offer speech-to-speech models served via their APIs. **NVIDIA and several other research labs have shipped speech-to-speech demos and research artifacts.**" (Removes "Ultravox"; removes "production-grade".)
17. **[TEXT]** Replace the "However, most current speech-to-speech models…Only the Ultravox model…" paragraph with: "Speech-to-speech models do not follow instructions or call tools as reliably as text-mode LLMs. They are also slower, more expensive, less configurable, and harder to integrate into real-world agent systems." Then "On the other hand, today's best speech-to-speech models do sound **very natural**. OpenAI's **gpt-realtime** model really does sound like a preview of the voice AI future." (Removes footnote [12] ultravox.ai.)
18. **[TEXT]** "Here's how speech-to-speech models stack up…" bullets (p17–18):
    - Lower-latency bullet: "...In practice, today, **both the OpenAI and Google speech-to-speech models are slower than a well-tuned cascaded (multi-model) voice agent.**" (was Ultravox-specific).
    - Understanding bullet: "...particularly apparent for **Gemini 2.5 Flash and Gemini 3 Flash** audio input."
    - (natural-voice bullet unchanged.)
19. **[TEXT]** Flexibility bullet (p18): "...significantly less flexible than **they need to be for production voice agent engineering**…Gemini Live API, **which is best regarded as an alpha release that is not ready for production.**" (was "...than we would like…"; adds alpha-release clause). "bookkeeping" one word.
20. **[DEL/TEXT]** Cost paragraph (p18): keep OpenAI Realtime calculator text; the trailing "We expect to see continued progress…in **2026**" loses the "in 2026" (PDF: "continued progress on the speech-to-speech front. But how quickly…"). Footnote becomes "OpenAI Realtime API cost calculator — https://dub.sh/voice-agents-010".
21. **[DEL]** Remove web footnote [13] ("This latency issue for audio models is clearly fixable…") — not present in PDF. **[VERIFY]**

## F. §5.3 Benchmarks (pp19–21) — MAJOR REWRITE + NEW SUBSECTION + NEW CHARTS

22. **[STRUCT]** Replace current §5.3 body (the "We maintain open source benchmarks… github.com/kwindla/aiewf-eval … 30-turn conversations … leaderboard" + the two image headings) with new structure:
    - New **5.3.1 "The intelligence/latency Pareto frontier"** (p19–20) with new prose about intelligence/latency/cost trade-off, reasoning models outputting thinking tokens, "user-visible response latency … time to first non-thinking token," 30-turn benchmark [L https://github.com/kwindla/aiewf-eval], benchmark saturation since late 2025, TTFT < 700 ms requirement, "Nemotron 3 Ultra is the first open model that scores 100%…".
    - New p20 prose: "two Pareto frontiers on the benchmark chart. Nemotron 3 Ultra (self-hosted), Kimi 2.6 (hosted on Cerebras) and Gemma 4 31b (hosted on Lilac) define an open model Pareto frontier. GPT 4.1, Claude Haiku 4.5, and Claude Sonnet 5.6 form a separate proprietary model/first-party API frontier. Open models outperform the closed models for latency-sensitive use cases. The caveat… self-host or commit significant inference volume to a new platform like Cerebras or Lilac…" [L https://www.cerebras.ai/ and https://getlilac.com/].
23. **[IMG]** §5.3 charts on pp20–21 are NEW benchmark/Pareto-frontier plots (open vs proprietary frontiers). Current repo images `aiewf-speech.png` / `aiewf-text.png` correspond to the OLD §5.3. **Needs new chart assets** — cannot extract from PDF at fidelity. DECISION NEEDED.

## G. §5.4 Speech-to-text (pp23–24) — REWRITE + 2 SUBSECTIONS REMOVED

24. **[TEXT]** Intro: "Today there are **several very good** transcription models that deliver excellent accuracy at very low latency" → "Today there are **a number of** transcription models…".
25. **[STRUCT]** Rename **5.4.1 "The Pareto frontier" → "The STT Pareto frontier"**.
26. **[TEXT]** Replace 5.4.1 body (Deepgram/Soniox/Speechmatics three-model prose) with p23 version: benchmark repo [L https://github.com/pipecat-ai/stt-benchmark/]; "On the chart, you can see a Pareto frontier cluster with models from **NVIDIA, Deepgram, Soniox, Cartesia, AssemblyAI, and Speechmatics** all performing extremely well." Provider descriptions add **AssemblyAI** ("multi-turn context carry-over"), **Cartesia** ("now shipping competitive speech-to-text models"), and "**NVIDIA's model is completely open source.**" Self-host reasons unchanged. Fine-tuning sentence: "**Several providers also offer** fine-tuning services, which can help lower error rates…" + new sentence "**Fine-tuning on your own data is also a good reason to explore using the NVIDIA open models.**"
27. **[IMG]** §5.4.1 STT Pareto chart (p23–24). Repo has `stt_pareto_frontier.png`; PDF chart may differ (now includes NVIDIA/Cartesia/AssemblyAI). DECISION NEEDED — confirm whether current PNG is acceptable or needs replacement.
28. **[STRUCT]** Renumber **5.4.2 "Prompting can help the LLM"** stays 5.4.2 (content unchanged; the embedded prompt date "February 3, 2025" unchanged).
29. **[DEL]** **Remove §5.4.3 "Open weights models"** (Whisper / Nemotron Speech ASR) entirely — not in AIEWF-05 (folded into 5.4.1). **DECISION NEEDED** (large deletion). The Nemotron streaming model is now referenced via TTS-page footnote [L huggingface.co/nvidia/nemotron-speech-streaming-en-0.6b].
30. **[DEL]** **Remove §5.4.4 "Transcribing with Google Gemini"** entirely — the whole subsection incl. the ParallelPipeline code block, the parallel-inference explanation, footnote [15] (~10x token reduction), and the transcription system-prompt block. Not in AIEWF-05. **DECISION NEEDED** (large deletion of code + prose).

## H. §5.5 Text-to-speech (pp25–27) — TABLE + PROVIDER CHANGES

31. **[TEXT]** Provider list (p26): now five, alphabetical — Cartesia ("innovative state-space model architecture"); Deepgram ("Prioritizes latency and low cost. **Deepgram's transcription models were the original low-latency/high-accuracy ML models for voice AI.**"); ElevenLabs ("emotional and contextual realism"); **Gradium** ("commercial spin-out of the non-profit French lab, Kyutai, which has produced some of the world's most innovative speech model work"); **Inworld** ("Roots in AI technology innovations for video games"). (Removes Rime; adds Gradium + Inworld.)
32. **[TEXT]** "All **three** companies…Cartesia and Deepgram models can be deployed" → "All **four** companies have strong models, experienced engineering teams, and stable and performant APIs. The **Cartesia, Deepgram, and Gradium** models can be deployed on your own infrastructure." *(Note: PDF says "four" though five are listed — verbatim from PDF; flag potential PDF typo.)*
33. **[TEXT/table]** TTS table (p26) replaced — cols: Cost per min (approx) / Median TTFA (ms) / P95 TTFA (ms):
    - Cartesia Sonic 3.5 — $0.028 / 195 / 240
    - Deepgram Aura-2 — $0.024 / 310 / 600
    - ElevenLabs Turbo v2.5 — $0.050 / 330 / 670
    - Gradium — $0.032 / 235 / 320
    - Inworld TTS 1.5 Max — $0.009 / 337 / 560
    Caption → "Approximate cost per minute (at scale) and time-to-first-audio metrics – **June 2025**. Note that cost depends on committed volume and features used." (Removes ElevenLabs Flash v2.5 row and the Coval-benchmark caption.)
34. **[TEXT]** Word-timestamp paragraph (p27): "All of the models in the table above except **ElevenLabs Flash** support word-level timestamps." (unchanged text, but the table no longer lists ElevenLabs Flash — flag inconsistency).
35. **[TEXT]** Streaming paragraph (p27): "...correlate each inference request to **one output stream**. Streaming APIs from voice model providers are all relatively new and still evolving." (Removes the "Currently, Cartesia and Rime have the most mature streaming support in Pipecat." sentence.)

## I. §5.6 Audio processing (pp28–32) — minor

36. **[TEXT]** "**bluetooth**" → "**Bluetooth**" (capitalized, 2×, p28).
37. **[TEXT]** §5.6.5 (p32): "The best available speaker isolation model…sold by **Krisp**." + "**OpenAI includes noise reduction as a feature of their Realtime API.**" (Web phrasing "OpenAI recently shipped a new noise reduction feature… Reference docs are here." → PDF tightens to "OpenAI includes noise reduction as a feature of their Realtime API." with footnote dub.sh/voice-ai-L20.) Krisp footnote krisp.ai.

## I2. §5.7.3 QUIC and MoQ (p36) — wording change *(added via review)*

37b. **[TEXT]** Safari/WebTransport sentence: web "One blocker… is that Safari **does not yet support** the QUIC-based evolution of WebSockets, WebTransport." → PDF "…Safari **support for** the QUIC-based evolution of WebSockets, WebTransport **is very new.**" (PDF text is garbled "WebTransport[L] very new.," — port the corrected meaning + footnote [L] IETF MoQ working group, datatracker.ietf.org/group/moq/about/).

## J. §5.8 Turn detection (pp42–44) — minor

38. **[TEXT]** p43 code: "**audio_accumulator**" (web has typo "audio_accumulater").
39. **[TEXT]** Semantic-VAD bullet (p43): "In March, OpenAI **now has** context-aware turn detection for their Realtime API…" (web: "shipped a new context-aware turn detection capability"). Adds footnotes: Tavus tavus.io, Tavus blog dub.sh/voice-ai-L30, smart-turn github.
39b. **[TEXT]** §5.8.4 code caption (p43): "Pipecat pipeline code for context-aware turn detection using **Gemini 2.0 Flash** native audio input." → "**Gemini 2.5 Flash**". *(added via review)*

## K. §5.12 Multimodality (pp55–56) — minor

40. **[TEXT]** §5.12 Multimodality (p55): "**GPT-4.1, Gemini Flash, and Claude Sonnet** all have very good vision" → "**GPT, Gemini, and Claude models** all have very good vision capabilities".
41. **[TEXT]** p56 model-capability bullet: PDF reads "**gpt-reatime**" (typo) — port as correct "**gpt-realtime**".

## L. §6 Using multiple AI models (pp58–66) — minor

42c. **[TEXT]** §6 footnote [44] (p58): "Even the **beta** speech-to-speech APIs from OpenAI and Google…" → remove "beta". *(review pass 4)*

42. **[TEXT]** §6.2 (p61): "The amazing **recent progress** in reasoning models [49]" → "The amazing **progress last year** in reasoning models" — and **remove footnote [49]** ("Examples of reasoning models include DeepSeek R1, Gemini Flash 2.0 Thinking, OpenAI o3-mini"). **DECISION/VERIFY** (footnote removal).

## M. §8 Voice AI Evals (pp70–72) — REWRITE of 8.2 / 8.3

43. **[TEXT]** §8.1 (p70): "voice AI tests have **non-binary** results" → "**nonbinary**" (cosmetic; keep web hyphenation if preferred).
44. **[TEXT]** §8.2 Failure modes (p71) rewritten: "Voice AI apps **are challenging to test, eval, and monitor. Voice agents are multi-model and multi-modal. Latency is critical.**" (replaces the "particular shapes and failure modes…" sentence). Bullets gain trailing periods and hyphenated forms ("time-to-first-speech and time-to-agent-response").
45. **[TEXT]** New paragraph (p71, §8.3 area): "**Pipecat includes core functionality to support building your own evals. The intended use case is 'closing the loop' so that coding agents can iteratively test agents during development.**"
46. **[TEXT]** §8.3 platforms (p72): "Three platforms that have invested early… are **Coval, FreePlay, and Weights & Biases Weave**. All three have **good** Pipecat integrations." → "**Several platforms that are leading the way in developing tools for audio evals, testing, simulation, and monitoring are Cekura, Coval, and Bluejay. All three have excellent Pipecat integrations.**" (URLs: cekura.ai, coval.dev, getbluejay.ai.)

## N. §11 Hosting and scaling (pp79–82) — additions + a deletion

47. **[TEXT]** §11.1 (p80): add new paragraph "**Daily's Pipecat Cloud agent hosting platform manages all of the Kubernetes pain points for you. You can 'docker push' your Pipecat agents to Pipecat Cloud and run them at scale, in multiple global regions, with native telephony and WebRTC network support.**" [L docs.pipecat.ai/deployment/platforms/pipecat-cloud].
48. **[DEL+TEXT]** §11.2 (p81): **Remove the interactive cost calculator** ("Here is an interactive cost calculator, developed by Gustavo Garcia." + its `<img>`/caption "An interactive cost calculator"). Then reword the surviving spreadsheet sentence "**Or, if you prefer a spreadsheet, here is a spreadsheet** that you can copy and use as a starting point for calculating per-minute cost." → "**Here is a spreadsheet that you can copy and use as a starting point for calculating per-minute cost.**" Keep the spreadsheet image + its caption. *(reword added via review pass 2)*
49. **[TEXT]** §11.2 (p82): "The numbers in **the spreadsheet screenshot**" → "the screenshot"; "Deepgram, GPT-4o, and Cartesia" unchanged. Bullets gain trailing periods.

## O. §12 What's coming (p83) — RETITLE + EDITS

50. **[STRUCT]** Heading + TOC: "**What's coming in 2026**" → "**What's coming in 2026 and 2027**".
51. **[TEXT]** First bullet: "New programming abstractions for using **subagents, multiple models, and multiple inference loops**…and also **start, stop, and steer subagents** for specialized processing…" (web: "multiple models and multiple inference loops"… "use parallel pipelines").
52. **[TEXT]** Last paragraph: "everything is moving towards **natural language and continual learning**… we're learning how to specify everything in natural language, **how to make these 'natural language systems' composable, and how to build loops that automatically improve our agents.**"

## P. Contributors (pp2–3)

53. **[TEXT]** Update the contributing-authors username list to match AIEWF-05 (PDF list is larger / adds names e.g. OmerCohenAviv, BismeetSingh, anteverse, Mudit-Arora, MHamdyK, marcelodiaz558, denxxs, etc.). Mechanical; low risk. "Lead Author / Thanks to CKK for editorial support. / Design — Sascha Mombartz" unchanged.
53b. **[PRINT? — do NOT port]** PDF footer meta differs: footnote "Pipecat GitHub contributor usernames:" (web: "[61] GitHub usernames,") and "Online edition: https://voiceaiandvoiceagents.com/" (web: "View and contribute to this guide on GitHub."). The "Online edition" line is the PRINT book pointing readers to the website; on the website itself it is circular. **Keep the web's "View and contribute… on GitHub" footer.** (Optional: align footnote [61] text — low value; leaving as-is.) *(review pass 2)*

---

## GLOBAL POLICY DECISIONS (affect many items)

- **Print cross-reference numbers** — PDF adds section numbers in running text ("see 5.7.4 Network routing", "the 7. Scripting…", "5.2.2 Cost comparison", "5.6.5 Server-side…", "5.11.6 Asynchronous…", "8. Voice AI Evals", "10. RAG and memory", "5.5 Text-to-speech", "5.12 Multimodality"). The web version uses hyperlinked section titles instead. **Recommend: do NOT port the literal numbers; keep existing anchor links.**
- **`realtime` vs `real-time`** — PDF standardizes on "realtime"/"8 khz"/"48 khz" spacing. The web uses mixed forms. **Recommend: skip these purely cosmetic spelling/spacing changes** unless you want a full normalization pass.
- **Charts/images (items 23, 27)** — the new benchmark Pareto-frontier and STT charts cannot be faithfully extracted from the PDF. Need PNG/SVG assets from the design source. **DECISION NEEDED.**
- **Large deletions (items 29, 30, 48; footnote removals 21, 42)** — confirm before removing the Gemini-transcription subsection (code + prompts), the STT "Open weights models" subsection, and the interactive cost calculator.
