'use strict';
/* ================================================================
   AgentOS Portfolio — script.js
   Living Agent Graph · Keyword Chips · Bot Wanderers · Chat · Modal
   ================================================================ */

/* ── PROJECT DATA ───────────────────────────────────────────────── */
const KEYWORDS = [
  /* ── REAL PROJECTS ────────────────────────────────────────────── */
  {
    text: 'A2A',
    project: {
      tag: 'A2A',
      title: 'A2A Agent Discovery & Chat Platform',
      desc: 'A web application for discovering, connecting to, and chatting with agents via Google\'s A2A protocol. Supports standard A2A agents and a lightweight JSON-RPC fallback. Features user auth, persistent chat sessions mapped to A2A context IDs, agent comparison playground, and streaming response handling.',
      tech: ['Python', 'FastAPI', 'A2A Protocol', 'React', 'SQLite', 'JWT'],
      github: 'https://github.com/SatyaHimavanth/A2A_Chat_Bot',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/A2A_Chat_Bot'
    }
  },
  {
    text: 'MCP',
    project: {
      tag: 'MCP',
      title: 'Solr MCP Server & Agent',
      desc: 'A custom Python MCP server for Apache Solr — a lightweight alternative to the official Java/Spring Boot MCP server. Enables natural language search over Solr indices through any MCP-compatible AI client. Integrated with LibreChat for an end-to-end agent experience with test questions included.',
      tech: ['Python', 'MCP', 'Apache Solr', 'Docker', 'LibreChat', 'uv'],
      github: 'https://github.com/SatyaHimavanth/Solr_MCP_Agent',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/Solr_MCP_Agent'
    }
  },
  {
    text: 'Orchestration',
    project: {
      tag: 'Orchestration',
      title: 'Agent Governance Hub',
      desc: 'A multi-role enterprise platform for registering, managing, and distributing A2A agents across teams. Admins maintain an agent registry and approve requests; managers coordinate team access; users chat with assigned agents. Includes audit logs, group-based access control, and full lifecycle management for production agent deployments.',
      tech: ['Python', 'FastAPI', 'A2A Protocol', 'React', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/SatyaHimavanth/Agent-Governance-Hub',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/Agent-Governance-Hub'
    }
  },
  {
    text: 'Agents',
    project: {
      tag: 'Agents',
      title: 'ServiceNow AI Agent Workspace',
      desc: 'A full ServiceNow-style workspace powered by an AI agent that handles incidents, requests, tasks, knowledge base queries, and user management through natural language. Built with a FastAPI backend, React/Vite frontend, lazy-loaded data tables, and a floating in-page assistant with persistent chat history.',
      tech: ['Python', 'FastAPI', 'React', 'Vite', 'LangChain', 'SQLite'],
      github: 'https://github.com/SatyaHimavanth/Service_Now_Agent',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/Service_Now_Agent'
    }
  },
  {
    text: 'Tools',
    project: {
      tag: 'Tools',
      title: 'Natural Language SQL Agent',
      desc: 'Chat with any database in plain English. Connects to Postgres, MySQL, SQLite, SQL Server, Oracle, and Databricks. Features table-level visibility control so agents only see permitted tables, custom per-agent system prompts, full chat history with rename/archive/delete, and light/dark mode UI.',
      tech: ['Python', 'FastAPI', 'LangChain', 'React', 'Multi-DB', 'SQLAlchemy'],
      github: 'https://github.com/SatyaHimavanth/SQL_Agent',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/SQL_Agent'
    }
  },
  {
    text: 'Agent Harness',
    project: {
      tag: 'Agent Harness',
      title: 'Universal Agent Observability Platform',
      desc: 'A production observability system that traces Python LLM calls, agent runs, tool calls, and multi-agent workflows with a single import. Ships with LangChain/LangGraph tracing, an HTTP fallback for direct SDK calls, a FastAPI collector, live browser UI, and LangSmith-style project/tag/user attribution.',
      tech: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'SQLAlchemy', 'React'],
      github: 'https://github.com/SatyaHimavanth/Open-LLM-Observability',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/Open-LLM-Observability'
    }
  },
  {
    text: 'Skills',
    project: {
      tag: 'Skills',
      title: 'AI-Powered Assessment & Training Platform',
      desc: 'A full-stack platform for managing AI-assisted assessments, practice tests, and training evaluations. Generates questions automatically using Azure OpenAI, supports coding and SQL challenges, exports results, and uses pgvector for semantic similarity in candidate matching. Built with FastAPI, React, and PostgreSQL.',
      tech: ['FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Azure OpenAI', 'LangChain'],
      github: 'https://github.com/SatyaHimavanth/AI_Powered_Assessment_and_Training_Evaluation_System',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/AI_Powered_Assessment_and_Training_Evaluation_System'
    }
  },
  {
    text: 'LangChain',
    project: {
      tag: 'LangChain',
      title: 'Multi-User LangChain AI Workspace',
      desc: 'A production-grade multi-user AI workspace with streaming chat, tool use, generated file downloads, full conversation history, and per-request model switching. Admins control user registration approval, assign roles (user/admin/disabled), set monthly token quotas, and monitor usage statistics across the platform.',
      tech: ['Python', 'LangChain', 'FastAPI', 'React', 'JWT', 'SQLite'],
      github: 'https://github.com/SatyaHimavanth/Advanced_Langchain_ChatBot',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/Advanced_Langchain_ChatBot'
    }
  },
  {
    text: 'LangGraph',
    project: {
      tag: 'LangGraph',
      title: 'LangGraph Agent via A2A Protocol',
      desc: 'A LangGraph/LangChain agent exposed as a fully A2A-compatible service. Implements the A2A handshake, tool-calling flows, and both public and authorized auth modes via environment token configuration. Includes a test client for end-to-end protocol validation and reference links to the official A2A samples.',
      tech: ['Python', 'LangGraph', 'LangChain', 'A2A Protocol', 'uv', 'FastAPI'],
      github: 'https://github.com/SatyaHimavanth/Langchain_A2A_Agent',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/Langchain_A2A_Agent'
    }
  },
  {
    text: 'RAG',
    project: {
      tag: 'RAG',
      title: 'Multimodal RAG with CLIP Embeddings',
      desc: 'A local-first multimodal RAG system that embeds both text and images into a shared CLIP vector space and retrieves from a single FAISS index. A text query can surface both relevant text chunks and images. Supports PDF, plain text, and image file types. Runs fully offline; optional OpenAI generator for richer answers.',
      tech: ['Python', 'CLIP', 'FAISS', 'pypdf', 'OpenAI (optional)', 'uv'],
      github: 'https://github.com/SatyaHimavanth/MultiModel_RAG',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/MultiModel_RAG'
    }
  },
  {
    text: 'Local LLM',
    project: {
      tag: 'Local LLM',
      title: 'Fully Offline Local RAG Bot',
      desc: 'A self-contained RAG chatbot with zero cloud dependencies. Bundles an embedded Python 3.11 runtime and llama.cpp binaries — no system Python or GPU required. Uses Qwen GGUF models for both chat and embeddings. Designed for air-gapped, privacy-critical, or low-resource environments.',
      tech: ['Python', 'llama.cpp', 'Qwen GGUF', 'Embedded Runtime', 'RAG', 'FAISS'],
      github: 'https://github.com/SatyaHimavanth/Local_RAG_Bot',
      demo: '#',
      deepwiki: 'https://deepwiki.com/SatyaHimavanth/Local_RAG_Bot'
    }
  },

  /* ── DUMMY — FUTURE PROJECT PLACEHOLDER ───────────────────────── */
  {
    text: 'Google ADK',
    project: {
      tag: '🚧 Coming Soon',
      title: 'Google ADK Multi-Agent Ecosystem',
      desc: 'Future project. Planning a suite of specialized agents on Google\'s Agent Development Kit integrated with Google Workspace — a calendar planner, email triage agent, and document summarizer all communicating via the A2A protocol. Watch this space.',
      tech: ['Google ADK', 'Python', 'Gemini', 'A2A', 'Google APIs', 'Cloud Run'],
      github: '#',
      demo: '#',
      deepwiki: null    // no repo yet
    }
  },
];

/* ── BOT MESSAGES ───────────────────────────────────────────────── */
const BOT_MSGS = [
  'init context_window[128k]',
  'tool_call: solr_search()',
  'A2A handshake: ✓',
  'routing → ServiceNow agent',
  'vector_search: k=5 docs',
  'MCP server: connected',
  'LangGraph: node[3/7]',
  'SQL query generated',
  'trace_id: obs-4827',
  'CLIP embedding: ✓',
  'agent_card.json fetched',
  'governance check: passed',
  'tool_result: success',
  'pgvector: similarity 0.91',
  're-ranking results...',
  'spawning sub-agent...',
];

/* ── CHAT RESPONSES ─────────────────────────────────────────────── */
const CHAT = {
  default:       `I'm a portfolio agent trained on Satya's projects. Try asking about A2A, MCP, LangChain, RAG, the SQL Agent, observability, or how to get in touch!`,
  greet:         `Hey! I'm AgentBot — running on Satya's observability stack. Ask me about any project or how to reach him.`,
  mcp:           `Satya built a custom Python MCP server for Apache Solr — much lighter than the official Java version. Integrates with LibreChat for a full agent experience. Click the 'MCP' chip floating in the background!`,
  a2a:           `Satya has two A2A projects: the A2A_Chat_Bot (a UI for discovering and chatting with A2A agents) and the Agent Governance Hub (enterprise management of A2A agents across teams). Click 'A2A' or 'Orchestration' to explore!`,
  langchain:     `Satya built a full multi-user LangChain workspace with streaming chat, tool use, token quotas, and an admin approval workflow. Click the 'LangChain' chip in the background!`,
  langgraph:     `Satya exposed a LangGraph agent via the A2A protocol — full handshake, tool-calling, and auth modes. Click 'LangGraph' to see it.`,
  swarm:         `No Swarms project yet — that's on the roadmap! In the meantime, check out the Agent Governance Hub for multi-agent coordination, or the Multimodal RAG for parallel retrieval.`,
  adk:           `Google ADK is a future project — Satya is planning a Workspace-integrated multi-agent system with it. The 'Google ADK' chip shows the roadmap. Stay tuned!`,
  rag:           `Satya built a multimodal RAG system using CLIP embeddings that retrieves both text and images from a single FAISS index — fully offline. Click 'RAG' in the background!`,
  orchestration: `The Agent Governance Hub manages the full lifecycle of A2A agents across enterprise teams — registry, group access, audit logs. Click 'Orchestration' to learn more!`,
  hire:          `Satya is open to new projects! Head to the Contact section or reach out via GitHub: github.com/SatyaHimavanth.`,
  skills:        `The AI Assessment Platform uses Azure OpenAI to auto-generate questions, runs coding and SQL challenges, and uses pgvector for semantic matching. Click 'Skills' to see it!`,
  harness:       `The Open-LLM-Observability platform traces every LangChain/LangGraph call, tool use, and agent run with one import — LangSmith-style grouping and a live browser UI. Click 'Agent Harness'!`,
  tools:         `The SQL Agent lets you chat with Postgres, MySQL, SQLite, SQL Server, Oracle, and Databricks in plain English — with table-level visibility control. Click 'Tools'!`,
  local:         `The Local RAG Bot runs 100% offline — bundled Python runtime, llama.cpp, and Qwen GGUF models. Zero cloud dependencies. Click 'Local LLM' in the background!`,
  sql:           `The SQL Agent supports 6 database types with per-agent system prompts and table-level access control. Very handy for internal tooling — click 'Tools'!`,
  servicenow:    `The ServiceNow Agent Workspace has a floating AI assistant that handles incidents, requests, tasks, and knowledge queries over a full React UI. Click 'Agents'!`,
  observe:       `Open-LLM-Observability is Satya's universal tracing platform for LLM apps — traces model calls, tool use, and multi-agent workflows with a live dashboard. Click 'Agent Harness'!`,
};

function getReply(text) {
  const t = text.toLowerCase();
  if (/\b(hi|hello|hey|sup|yo|howdy)\b/.test(t))           return CHAT.greet;
  if (/\bmcp\b|solr/.test(t))                               return CHAT.mcp;
  if (/\ba2a\b|agent.to.agent/.test(t))                    return CHAT.a2a;
  if (/langgraph/.test(t))                                  return CHAT.langgraph;
  if (/langchain/.test(t))                                  return CHAT.langchain;
  if (/swarm/.test(t))                                      return CHAT.swarm;
  if (/adk|google adk/.test(t))                            return CHAT.adk;
  if (/\brag\b|retriev|multimod/.test(t))                  return CHAT.rag;
  if (/orchestrat|governance/.test(t))                     return CHAT.orchestration;
  if (/hire|contact|work|job|avail/.test(t))               return CHAT.hire;
  if (/\bskill|assess|train/.test(t))                      return CHAT.skills;
  if (/harness|obs|trace|observ/.test(t))                  return CHAT.harness;
  if (/\bsql\b|database|db/.test(t))                       return CHAT.sql;
  if (/servicenow|service.now/.test(t))                    return CHAT.servicenow;
  if (/local|offline|llama|gguf/.test(t))                  return CHAT.local;
  if (/\btool/.test(t))                                    return CHAT.tools;
  return CHAT.default;
}

/* ── STATE ──────────────────────────────────────────────────────── */
let isDark      = false;
let chips       = [];  // { el, x, y, vx, vy, w, h }
let bots        = [];  // { el, wrap, parts, bubble, health, state, buildMission, ... }
let looseParts  = [];  // { el, x, y, color, createdAt } — parts fallen off bots
let canvas, ctx;

/* ── BOOTSTRAP ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setupCanvas();
  createChips();
  createBots();
  buildProjects();
  initTheme();
  initModal();
  initChat();
  initChatResize();
  initReveal();
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  setInterval(cleanupLooseParts, 15000); // purge very old loose parts
  requestAnimationFrame(loop);
});

/* ── CANVAS ──────────────────────────────────────────────────────── */
function setupCanvas() {
  canvas = document.getElementById('constellation-canvas');
  ctx = canvas.getContext('2d');
  resize();
  window.addEventListener('resize', resize);
}

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  // Re-measure chips after resize
  chips.forEach(c => {
    c.w = c.el.offsetWidth;
    c.h = c.el.offsetHeight;
  });
}

/* ── KEYWORD CHIPS ───────────────────────────────────────────────── */
function createChips() {
  const layer = document.getElementById('keyword-layer');
  const W = window.innerWidth;
  const H = window.innerHeight;
  // Fewer chips on mobile — they clutter a small screen
  const kwToShow = W < 640 ? KEYWORDS.slice(0, 6) : KEYWORDS;

  kwToShow.forEach(kw => {
    const el = document.createElement('button');
    el.className = 'kw-chip';
    el.textContent = kw.text;
    el.setAttribute('aria-label', `View project: ${kw.project.title}`);
    layer.appendChild(el);

    const x = rand(60, W - 180);
    const y = rand(60, H - 60);
    const spd = rand(0.22, 0.50);
    const angle = rand(0, Math.PI * 2);

    const chip = {
      el,
      x, y,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      w: 80, h: 28,          // initial estimate, measured below
    };

    el.style.left = x + 'px';
    el.style.top  = y + 'px';
    el.addEventListener('click', () => showModal(kw));
    chips.push(chip);
  });

  // Measure actual sizes after paint
  requestAnimationFrame(() => {
    chips.forEach(c => {
      c.w = c.el.offsetWidth;
      c.h = c.el.offsetHeight;
    });
  });
}

function stepChips() {
  const W = window.innerWidth;
  const H = window.innerHeight;
  chips.forEach(c => {
    c.x += c.vx;
    c.y += c.vy;
    if (c.x < 0)       { c.x = 0;       c.vx = Math.abs(c.vx); }
    if (c.x > W - c.w) { c.x = W - c.w; c.vx = -Math.abs(c.vx); }
    if (c.y < 0)       { c.y = 0;       c.vy = Math.abs(c.vy); }
    if (c.y > H - c.h) { c.y = H - c.h; c.vy = -Math.abs(c.vy); }
    c.el.style.left = c.x + 'px';
    c.el.style.top  = c.y + 'px';
  });
}

/* ── CONSTELLATION ───────────────────────────────────────────────── */
function drawLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const MAX_DIST = 200;

  for (let i = 0; i < chips.length; i++) {
    for (let j = i + 1; j < chips.length; j++) {
      const a = chips[i], b = chips[j];
      const ax = a.x + a.w * 0.5;
      const ay = a.y + a.h * 0.5;
      const bx = b.x + b.w * 0.5;
      const by = b.y + b.h * 0.5;
      const dist = Math.hypot(ax - bx, ay - by);
      if (dist >= MAX_DIST) continue;
      const t = 1 - dist / MAX_DIST;
      const alpha = isDark ? t * 0.28 : t * 0.20;
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
}

/* ── AGENT PARTS SYSTEM ──────────────────────────────────────────── */
/*
   LIFECYCLE:
   1. Born → parts orbit inward and snap together (animateAssembly)
   2. Each part pops off at its health threshold and PHYSICALLY FALLS.
      Legs go first (68%), arms (44%), body (22%), head (12%), antenna (6%).
      Part springs away from bot, arcs under simulated gravity, lands on screen.
   3. Bot wanders with visible gaps where parts used to be.
   4. A healthy bot that sees ≥5 loose parts walks toward them,
      picks them up, and assembles a brand-new agent on the spot.
   5. When all parts have fallen and health reaches 0, ghost fades quietly.
   6. Emergency respawn fires only if population drops to <2 with no loose parts.
*/

const DETACH_AT = {   /* part CSS class → health level at which it pops off */
  'p-leg-r':   0.68,
  'p-leg-l':   0.62,
  'p-arm-r':   0.44,
  'p-arm-l':   0.40,
  'p-body':    0.22,
  'p-head':    0.12,
  'p-antenna': 0.06,
};

/* Wide spread so each bot has a visibly different lifespan */
const LIFESPAN_SLOTS = [32000, 62000, 90000, 48000, 115000]; // 32 s … 115 s
const MAX_BOTS       = 5;

const BUILD_WORDS = [
  'task.run()', 'ctx.init()', 'tool.call()', 'agent.new()',
  'memory.save()', 'pipe.start', 'llm.query()', 'skill.load',
  'embed.run()', 'loop.tick()', 'ret.search', 'doc.parse()',
  'stream.on()', 'eval.run()', 'chain.exec', 'trace.log()',
];

function makeBotParts(color, sz) {
  const s = sz / 40, rn = v => Math.round(v);
  return [
    { cls: 'p-antenna',
      html: `<svg width="${rn(8*s)}" height="${rn(10*s)}" viewBox="0 0 8 10" fill="none">
        <line x1="4" y1="9" x2="4" y2="1" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="4" cy="1.8" r="2.4" fill="${color}"/>
      </svg>`,
      ox: rn(-4*s),  oy: rn(-28*s) },

    { cls: 'p-head',
      html: `<svg width="${rn(24*s)}" height="${rn(18*s)}" viewBox="0 0 24 18" fill="none">
        <rect x="0" y="0" width="24" height="18" rx="4.5" fill="${color}"/>
        <circle cx="6.5"  cy="9" r="4" fill="white"/>
        <circle cx="17.5" cy="9" r="4" fill="white"/>
        <circle cx="7.5"  cy="9.5" r="2" fill="${color}"/>
        <circle cx="18.5" cy="9.5" r="2" fill="${color}"/>
        <rect x="7" y="14.5" width="10" height="2" rx="1" fill="rgba(255,255,255,0.36)"/>
      </svg>`,
      ox: rn(-12*s), oy: rn(-22*s) },

    { cls: 'p-body',
      html: `<svg width="${rn(28*s)}" height="${rn(20*s)}" viewBox="0 0 28 20" fill="none">
        <rect x="0" y="0" width="28" height="20" rx="5" fill="${color}"/>
        <rect x="3" y="2" width="22" height="12" rx="3" fill="rgba(255,255,255,0.13)"/>
        <circle cx="8"  cy="8" r="2" fill="rgba(255,255,255,0.68)"/>
        <circle cx="14" cy="8" r="2" fill="rgba(255,255,255,0.42)"/>
        <circle cx="20" cy="8" r="2" fill="rgba(255,255,255,0.24)"/>
        <rect x="5" y="11.5" width="18" height="1.8" rx="0.9" fill="rgba(255,255,255,0.28)"/>
      </svg>`,
      ox: rn(-14*s), oy: rn(-2*s)  },

    { cls: 'p-arm-l',
      html: `<svg width="${rn(6*s)}" height="${rn(12*s)}" viewBox="0 0 6 12" fill="none">
        <rect x="0" y="0" width="6" height="12" rx="3" fill="${color}" opacity="0.82"/>
        <rect x="1" y="2" width="4" height="1.8" rx="0.9" fill="rgba(255,255,255,0.28)"/>
      </svg>`,
      ox: rn(-20*s), oy: rn(1*s)   },

    { cls: 'p-arm-r',
      html: `<svg width="${rn(6*s)}" height="${rn(12*s)}" viewBox="0 0 6 12" fill="none">
        <rect x="0" y="0" width="6" height="12" rx="3" fill="${color}" opacity="0.82"/>
        <rect x="1" y="2" width="4" height="1.8" rx="0.9" fill="rgba(255,255,255,0.28)"/>
      </svg>`,
      ox: rn(14*s),  oy: rn(1*s)   },

    { cls: 'p-leg-l',
      html: `<svg width="${rn(8*s)}" height="${rn(10*s)}" viewBox="0 0 8 10" fill="none">
        <rect x="0" y="0" width="8" height="10" rx="4" fill="${color}" opacity="0.80"/>
      </svg>`,
      ox: rn(-10*s), oy: rn(16*s)  },

    { cls: 'p-leg-r',
      html: `<svg width="${rn(8*s)}" height="${rn(10*s)}" viewBox="0 0 8 10" fill="none">
        <rect x="0" y="0" width="8" height="10" rx="4" fill="${color}" opacity="0.80"/>
      </svg>`,
      ox: rn(2*s),   oy: rn(16*s)  },
  ];
}

/* ── createBots — stagger births so assembly animations don't overlap */
function createBots() {
  const W = window.innerWidth, H = window.innerHeight;
  const count = W < 640 ? 2 : 3;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const b = spawnBot(rand(100, W - 100), rand(100, H - 100), 1.0);
      if (b) setTimeout(() => animateAssembly(b), 80);
    }, i * 700);
  }
}

function spawnBot(x, y, initialHealth) {
  if (bots.length >= MAX_BOTS) return null;
  const layer = document.getElementById('agent-layer');

  const palette = [
    { color: '#6366F1', size: 44 },
    { color: '#06B6D4', size: 36 },
    { color: '#8B5CF6', size: 40 },
    { color: '#10B981', size: 38 },
    { color: '#F59E0B', size: 42 },
  ];
  const cfg = palette[bots.length % palette.length];

  const el   = document.createElement('div');
  el.className = 'agent';
  const wrap = document.createElement('div');
  wrap.className = 'agent-body-wrap';
  el.appendChild(wrap);

  const partDefs = makeBotParts(cfg.color, cfg.size);
  const parts = partDefs.map(def => {
    const div = document.createElement('div');
    div.className = `agent-part ${def.cls}`;
    div.style.left = def.ox + 'px';
    div.style.top  = def.oy + 'px';
    div.innerHTML  = def.html;
    wrap.appendChild(div);
    return { el: div, ox: def.ox, oy: def.oy, cls: def.cls, detached: false };
  });

  const bubble = document.createElement('div');
  bubble.className = 'agent-bubble';
  el.appendChild(bubble);
  layer.appendChild(el);

  const W = window.innerWidth, H = window.innerHeight;
  const angle    = rand(0, Math.PI * 2);
  const spd      = rand(0.45, 0.85);
  const lifespan = LIFESPAN_SLOTS[bots.length % LIFESPAN_SLOTS.length] + rand(0, 7000);

  const bot = {
    el, wrap, parts, bubble, color: cfg.color,
    x, y,
    vx: Math.cos(angle) * spd,
    vy: Math.sin(angle) * spd,
    tx: rand(80, W - 80),
    ty: rand(80, H - 80),
    msgTtl:      rand(150, 300) | 0,
    msgBusy:     false,
    health:      initialHealth,
    birthTime:   Date.now() - (1 - initialHealth) * lifespan,
    lifespan,
    state:       'wandering',
    buildTimer:  rand(240, 500) | 0,
    buildMission: null,
  };
  bots.push(bot);
  return bot;
}

function stepBots() {
  const W = window.innerWidth, H = window.innerHeight;

  bots.forEach(b => {
    if (b.state === 'dying') return;

    /* Health → triggers part detachment in applyPartDegradation */
    b.health = Math.max(0, 1 - (Date.now() - b.birthTime) / b.lifespan);
    applyPartDegradation(b);
    if (b.health <= 0) { killBot(b); return; }

    /* Builder: check if we've reached the loose-parts cluster */
    if (b.state === 'building' && b.buildMission?.phase === 'moving') {
      const { cx, cy } = b.buildMission;
      if (Math.hypot(b.x - cx, b.y - cy) < 55) {
        b.buildMission.phase = 'assembling';
        startBuildAssembly(b);
      }
    }

    /* Activity (wandering bots only) */
    if (b.state === 'wandering') {
      b.buildTimer--;

      if (looseParts.length >= 5 && b.health > 0.55 && Math.random() < 0.004) {
        tryStartBuilding(b);                               // become a builder
      } else if (b.buildTimer <= 0 && b.health > 0.30) {
        if (Math.random() < 0.72) triggerBuildChip(b);
        else if (bots.length < MAX_BOTS && b.health > 0.68) triggerClone(b);
        b.buildTimer = rand(260, 520) | 0;
      }

      if (Math.random() < 0.0014) checkAndPingNearby(b);
    }

    /* Steering */
    const dx = b.tx - b.x, dy = b.ty - b.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 60 && b.state === 'wandering') {
      b.tx = rand(80, W - 80); b.ty = rand(80, H - 80);
    }
    b.vx += (dx / dist) * 0.016; b.vy += (dy / dist) * 0.016;
    b.vx *= 0.975;               b.vy *= 0.975;
    if (b.health < 0.25) {
      b.vx += (Math.random() - 0.5) * 0.14;
      b.vy += (Math.random() - 0.5) * 0.14;
    }
    const spd2 = Math.hypot(b.vx, b.vy);
    if (spd2 > 1.2) { b.vx = b.vx/spd2*1.2; b.vy = b.vy/spd2*1.2; }
    b.x += b.vx; b.y += b.vy;
    const M = 60;
    if (b.x < M) b.x = M; if (b.x > W-M) b.x = W-M;
    if (b.y < M) b.y = M; if (b.y > H-M) b.y = H-M;

    b.el.style.transform   = `translate(${b.x}px, ${b.y}px)`;
    b.wrap.style.transform = `scaleX(${b.vx < -0.05 ? -1 : 1})`;

    /* Bubble */
    b.msgTtl--;
    if (b.msgTtl <= 0 && !b.msgBusy && b.health > 0.15 && b.state !== 'building') {
      triggerBubble(b);
      b.msgTtl = rand(250, 500) | 0;
    }
  });
}

/* ── PART DEGRADATION — drift grows as part nears its detach point ── */
function applyPartDegradation(b) {
  const h   = b.health;
  const now = Date.now() / 1000;

  b.parts.forEach((part, i) => {
    if (part.detached) return;

    const threshold = DETACH_AT[part.cls] || 0;
    if (h <= threshold) { detachPart(b, part); return; }

    /* Wobble intensity rises as we approach the detach threshold */
    const proximity = Math.max(0, 1 - h / threshold); // 0→1 as health closes on threshold
    const maxDrift  = Math.pow(proximity, 1.5) * 20;
    const freq      = 0.52 + i * 0.11;
    const phase     = i * 1.08;

    const dx  = Math.sin(now * freq       + phase)         * maxDrift;
    const dy  = Math.cos(now * freq * 0.72 + phase + 0.5) * maxDrift * 0.65;
    const rot = Math.sin(now * freq * 0.42 + phase + 1.2) * maxDrift * 1.2;
    const gx  = h < 0.20 && Math.random() < 0.05 ? (Math.random()-0.5)*18 : 0;
    const gy  = h < 0.20 && Math.random() < 0.05 ? (Math.random()-0.5)*12 : 0;

    part.el.style.transform =
      `translate(${(dx+gx).toFixed(1)}px,${(dy+gy).toFixed(1)}px) rotate(${rot.toFixed(1)}deg)`;

    const tLife = Math.min(1, (h - threshold) / Math.max(0.01, 1 - threshold));
    part.el.style.filter  = `saturate(${Math.round(tLife*100)}%) brightness(${(0.35+tLife*0.65).toFixed(2)})`;
    part.el.style.opacity = Math.max(0.15, tLife).toFixed(2);
  });
}

/* ── PART DETACHMENT — spring off body, fall under gravity, land ─── */
function detachPart(b, part) {
  if (part.detached) return;
  part.detached = true;

  const el    = part.el;
  const layer = document.getElementById('agent-layer');

  /* Capture exact screen position before removing from bot hierarchy */
  const rect = el.getBoundingClientRect();
  el.remove();

  /* Re-insert into agent-layer at the same screen coordinates */
  el.style.cssText =
    `position:absolute;left:${rect.left}px;top:${rect.top}px;` +
    `transform:none;transition:none;opacity:1;filter:;`;
  layer.appendChild(el);

  /* Phase 1 — spring pop (fast upward burst with rotation) */
  const sprX = (Math.random() - 0.5) * 64;
  const sprY = -(22 + Math.random() * 30);

  requestAnimationFrame(() => {
    el.style.transition = 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1)';
    el.style.transform  = `translate(${sprX}px,${sprY}px) rotate(${(sprX*2.2).toFixed(1)}deg)`;

    /* Phase 2 — gravity arc: land at final spot and stay */
    const landLeft = rect.left + sprX * 1.3 + (Math.random()-0.5)*38;
    const landTop  = Math.min(window.innerHeight - 22, rect.top + 88 + Math.random() * 95);
    const landRot  = (Math.random()-0.5) * 165;

    setTimeout(() => {
      el.style.transition =
        `left 0.46s cubic-bezier(0.55,0,1,0.45),
         top  0.46s cubic-bezier(0.55,0,1,0.45),
         transform 0.46s ease-out,
         opacity   0.28s ease-in,
         filter    0.28s ease-in`;
      el.style.left      = landLeft + 'px';
      el.style.top       = landTop  + 'px';
      el.style.transform = `rotate(${landRot}deg) scale(0.74)`;
      el.style.opacity   = '0.48';
      el.style.filter    = 'saturate(10%) brightness(0.30)';
    }, 230);

    /* Register as available loose part once settled */
    setTimeout(() => {
      looseParts.push({ el, x: landLeft, y: landTop, color: b.color, createdAt: Date.now() });
    }, 730);
  });
}

/* ── BUILDER — healthy bot walks to parts and builds a new agent ─── */
function tryStartBuilding(b) {
  if (looseParts.length < 5 || b.state !== 'wandering') return;

  const claimed = looseParts.splice(0, Math.min(7, looseParts.length));
  const cx = claimed.reduce((s, p) => s + p.x, 0) / claimed.length;
  const cy = claimed.reduce((s, p) => s + p.y, 0) / claimed.length;

  b.state        = 'building';
  b.buildMission = { claimedParts: claimed, phase: 'moving', cx, cy };
  b.tx           = cx;
  b.ty           = cy;
  b.msgBusy      = true;

  b.bubble.textContent = 'building...';
  b.bubble.classList.add('show');
}

function startBuildAssembly(b) {
  const m      = b.buildMission;
  const newBot = spawnBot(b.x, b.y, 1.0);

  if (!newBot) {                         // max bots — abort
    looseParts.push(...m.claimedParts);
    b.state        = 'wandering';
    b.buildMission = null;
    b.msgBusy      = false;
    b.bubble.classList.remove('show');
    return;
  }

  /* Loose parts fly from ground toward the builder, then new bot assembles */
  m.claimedParts.forEach((lp, i) => {
    setTimeout(() => {
      lp.el.style.transition =
        `left 0.55s cubic-bezier(0.34,1.56,0.64,1),
         top  0.55s cubic-bezier(0.34,1.56,0.64,1),
         transform 0.55s ease-in,
         opacity   0.40s ease-in,
         filter    0.50s ease-in`;
      lp.el.style.left      = b.x + 'px';
      lp.el.style.top       = b.y + 'px';
      lp.el.style.transform = 'rotate(0deg) scale(0.4)';
      lp.el.style.opacity   = '0';
    }, i * 88);
  });

  setTimeout(() => {
    m.claimedParts.forEach(lp => lp.el.remove());
    b.state        = 'wandering';
    b.buildMission = null;
    b.msgBusy      = false;
    b.bubble.classList.remove('show');
    animateAssembly(newBot);   // newBot's own parts orbit in from outside
  }, m.claimedParts.length * 88 + 580);
}

/* ── DEATH — most parts already gone; fade the empty shell ──────── */
function killBot(b) {
  if (b.state === 'dying') return;
  b.state = 'dying';

  /* Any parts that somehow didn't detach yet — quick flick off */
  b.parts.forEach(part => {
    if (part.detached) return;
    part.detached = true;
    const el    = part.el;
    const layer = document.getElementById('agent-layer');
    const rect  = el.getBoundingClientRect();
    el.remove();
    el.style.cssText =
      `position:absolute;left:${rect.left}px;top:${rect.top}px;` +
      `transform:none;transition:none;`;
    layer.appendChild(el);
    requestAnimationFrame(() => {
      el.style.transition = 'transform 0.25s ease-out, opacity 0.25s';
      el.style.transform  =
        `translate(${((Math.random()-0.5)*50).toFixed(1)}px,${(-(20+Math.random()*30)).toFixed(1)}px) scale(0)`;
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 300);
    });
  });

  b.bubble.classList.remove('show');
  b.el.style.transition = 'opacity 0.35s';
  b.el.style.opacity    = '0';

  setTimeout(() => {
    b.el.remove();
    bots.splice(bots.indexOf(b), 1);
    /* Emergency respawn only if population is critically low AND no parts to collect */
    setTimeout(() => {
      if (bots.length < 2 && looseParts.length < 3) {
        const W = window.innerWidth, H = window.innerHeight;
        const nb = spawnBot(rand(100, W-100), rand(100, H-100), 1.0);
        if (nb) animateAssembly(nb);
      }
    }, 3500);
  }, 380);
}

/* ── ASSEMBLY — parts orbit in from outside and snap together ────── */
function animateAssembly(bot) {
  bot.parts.forEach((part, i) => {
    const angle  = (i / bot.parts.length) * Math.PI * 2 + Math.random() * 0.6;
    const dist   = 72 + Math.random() * 55;
    const sX     = (Math.cos(angle)*dist).toFixed(1);
    const sY     = (Math.sin(angle)*dist).toFixed(1);
    const sRot   = (Math.random()*200-100).toFixed(0);

    part.el.style.transition = 'none';
    part.el.style.transform  = `translate(${sX}px,${sY}px) rotate(${sRot}deg) scale(0.42)`;
    part.el.style.opacity    = '0';
    part.el.style.filter     = 'saturate(25%) brightness(0.45)';

    setTimeout(() => {
      part.el.style.transition =
        `transform 0.62s cubic-bezier(0.34,1.56,0.64,1),
         opacity   0.35s ease-out,
         filter    0.55s ease-out`;
      part.el.style.transform = 'translate(0px,0px) rotate(0deg) scale(1)';
      part.el.style.opacity   = '1';
      part.el.style.filter    = '';
    }, i * 72 + 55);
  });
}

/* ── CLONE — sequential part flash, then child assembles nearby ──── */
function triggerClone(b) {
  b.state = 'building';
  const live = b.parts.filter(p => !p.detached);
  live.forEach((part, i) => {
    setTimeout(() => {
      part.el.style.transition = 'filter 0.18s, transform 0.18s';
      part.el.style.filter     = 'brightness(3.8) saturate(260%)';
      part.el.style.transform  = 'translate(0px,0px) rotate(0deg) scale(1.18)';
      setTimeout(() => {
        part.el.style.transition = '';
        part.el.style.transform  = '';
        part.el.style.filter     = '';
      }, 230);
    }, i * 38);
  });

  setTimeout(() => {
    b.state = 'wandering';
    const child = spawnBot(b.x + 24, b.y + 14, b.health * 0.42);
    if (child) {
      child.vx = -b.vx + (Math.random()-0.5)*0.5;
      child.vy = -b.vy + (Math.random()-0.5)*0.5;
      animateAssembly(child);
    }
  }, live.length * 38 + 320);
}

/* ── BUILD CHIP ──────────────────────────────────────────────────── */
function triggerBuildChip(b) {
  b.state = 'building';
  const word = BUILD_WORDS[Math.floor(Math.random() * BUILD_WORDS.length)];
  const chip = document.createElement('button');
  chip.className = 'kw-chip agent-built';
  chip.style.cssText =
    `left:${b.x}px;top:${b.y-52}px;opacity:0;transform:scale(0.55);` +
    `transition:opacity 0.35s,transform 0.35s;pointer-events:none;`;
  chip.setAttribute('aria-hidden', 'true');
  document.getElementById('keyword-layer').appendChild(chip);
  requestAnimationFrame(() => { chip.style.opacity='1'; chip.style.transform='scale(1)'; });

  let i = 0;
  const type = setInterval(() => {
    chip.textContent = word.substring(0, ++i);
    chip.style.left  = b.x + 'px';
    chip.style.top   = (b.y-52) + 'px';
    if (i >= word.length) {
      clearInterval(type);
      b.state = 'wandering';
      setTimeout(() => {
        chip.style.transition = 'opacity 1.1s, transform 1.1s';
        chip.style.opacity    = '0';
        chip.style.transform  = 'scale(0.82) translateY(-22px)';
        setTimeout(() => chip.remove(), 1200);
      }, 2600);
    }
  }, 82);
}

/* ── PING NEARBY ELEMENT ─────────────────────────────────────────── */
function checkAndPingNearby(b) {
  const targets = [
    ...document.querySelectorAll('.pill:not(.agent-ping)'),
    ...document.querySelectorAll('.metric-card:not(.agent-ping)'),
    ...document.querySelectorAll('.badge:not(.agent-ping)'),
    ...document.querySelectorAll('.feature-card:not(.agent-ping)'),
  ];
  for (const el of targets) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.bottom < 0 || r.top > window.innerHeight) continue;
    if (Math.hypot(b.x-(r.left+r.width/2), b.y-(r.top+r.height/2)) < 115) {
      el.classList.add('agent-ping');
      setTimeout(() => el.classList.remove('agent-ping'), 1900);
      return;
    }
  }
}

/* ── LOOSE PART CLEANUP — remove parts that have sat too long ────── */
function cleanupLooseParts() {
  const now = Date.now();
  looseParts = looseParts.filter(lp => {
    if (now - lp.createdAt > 90000) {
      lp.el.style.transition = 'opacity 1.2s';
      lp.el.style.opacity    = '0';
      setTimeout(() => lp.el.remove(), 1300);
      return false;
    }
    return true;
  });
}
function triggerBubble(b) {
  b.msgBusy = true;
  b.bubble.textContent = BOT_MSGS[Math.floor(Math.random() * BOT_MSGS.length)];
  b.bubble.classList.add('show');
  setTimeout(() => {
    b.bubble.classList.remove('show');
    b.msgBusy = false;
  }, 2800);
}

/* ── ANIMATION LOOP ──────────────────────────────────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function loop() {
  if (!prefersReducedMotion) {
    stepChips();
    stepBots();
    drawLines();
  }
  requestAnimationFrame(loop);
}

/* ── GITHUB API ─────────────────────────────────────────────────── */
const GITHUB_API = 'https://api.github.com';
const repoCache = new Map();

async function fetchGitHubActivity(repoUrl) {
  if (!repoUrl || repoUrl === '#') return null;

  const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) return null;

  const cacheKey = `${match[1]}/${match[2]}`;
  if (repoCache.has(cacheKey)) return repoCache.get(cacheKey);

  try {
    const [commitsRes, pullsRes] = await Promise.all([
      fetch(`${GITHUB_API}/repos/${match[1]}/${match[2]}/commits?per_page=1`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      }),
      fetch(`${GITHUB_API}/repos/${match[1]}/${match[2]}/pulls?state=open&per_page=1`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      })
    ]);

    let lastCommit = null;
    let openPRs = 0;

    if (commitsRes.ok) {
      const commits = await commitsRes.json();
      if (commits.length > 0) {
        lastCommit = new Date(commits[0].commit.author.date);
      }
    }

    if (pullsRes.ok) {
      const pulls = await pullsRes.json();
      openPRs = pulls.length;
    }

    const data = { lastCommit, openPRs };
    repoCache.set(cacheKey, data);
    return data;
  } catch (e) {
    console.warn('GitHub API error:', e);
    return null;
  }
}

function formatRelativeDate(date) {
  if (!date) return null;
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

/* ── PROJECTS GRID ───────────────────────────────────────────────── */
async function buildProjects() {
  const grid = document.getElementById('projects-grid');
  const projects = KEYWORDS;

  for (const kw of projects) {
    const p = kw.project;

    const card = document.createElement('article');
    card.className = 'glass-card project-card reveal';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');

    let activityHTML = '';
    card.innerHTML = `
      <span class="project-kw">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc.substring(0, 128)}…</p>
      ${activityHTML}
      <div class="tech-strip">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    `;
    card.addEventListener('click', () => showModal(kw));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') showModal(kw); });
    grid.appendChild(card);

    // Fetch GitHub activity in background (non-blocking)
    fetchGitHubActivity(p.github).then(ghData => {
      if (ghData && (ghData.lastCommit || ghData.openPRs > 0)) {
        const lastCommitStr = ghData.lastCommit ? formatRelativeDate(ghData.lastCommit) : '';
        const prStr = ghData.openPRs > 0 ? `${ghData.openPRs} open PR${ghData.openPRs > 1 ? 's' : ''}` : '';
        const parts = [lastCommitStr, prStr].filter(Boolean);
        if (parts.length > 0) {
          const activityEl = card.querySelector('.project-activity') || document.createElement('div');
          activityEl.className = 'project-activity';
          activityEl.textContent = parts.join(' · ');
          if (!card.querySelector('.project-activity')) {
            card.querySelector('p').insertAdjacentElement('afterend', activityEl);
          }
        }
      }
    }).catch(() => {}); // Silently ignore GitHub API errors
  }
}

/* ── MODAL ───────────────────────────────────────────────────────── */
function initModal() {
  const overlay = document.getElementById('modal');
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !overlay.hidden) closeModal(); });
}

function showModal(kw) {
  const p = kw.project;
  const overlay  = document.getElementById('modal');
  const demoBtn  = document.getElementById('modal-demo');
  const ghBtn    = document.getElementById('modal-gh');

  document.getElementById('modal-tag').textContent   = p.tag;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent  = p.desc;
  document.getElementById('modal-tech').innerHTML    =
    p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

  // GitHub button — hide if no real link
  if (p.github && p.github !== '#') {
    ghBtn.href   = p.github;
    ghBtn.hidden = false;
  } else {
    ghBtn.hidden = true;
  }

  // Demo button — only shown when a real URL is provided
  if (p.demo && p.demo !== '#') {
    demoBtn.href   = p.demo;
    demoBtn.hidden = false;
  } else {
    demoBtn.hidden = true;
  }

  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close').focus();
}

function closeModal() {
  document.getElementById('modal').hidden = true;
  document.body.style.overflow = '';
}

/* ── THEME ───────────────────────────────────────────────────────── */
function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  // Always default to light — only switch dark if user explicitly saved it.
  // OS dark-mode preference is intentionally ignored; the portfolio is designed light-first.
  let saved;
  try { saved = localStorage.getItem('agentos-theme'); } catch (_) { }
  if (saved === 'dark') applyTheme(true);

  btn.addEventListener('click', () => applyTheme(!isDark));

  function applyTheme(dark) {
    isDark = dark;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    icon.textContent = dark ? '☀️' : '🌙';
    try { localStorage.setItem('agentos-theme', dark ? 'dark' : 'light'); } catch (_) { }
  }
}

/* ================================================================
   CHAT — Options-tree state machine (mock assistant, no live API)
   ================================================================
   This is a scripted, button-driven assistant — no free-text input,
   no API calls. Project-specific questions are redirected to the
   real sources of truth: the GitHub repo (README + code) or the
   project's DeepWiki docs.
   ================================================================ */

/* ── CHAT STATE ─────────────────────────────────────────────────── */
const chatSt = {
  screen:  'root',   // root | projects | project | ai
  project: null,     // currently focused KEYWORDS entry
};

/* ── OPTION TREES ───────────────────────────────────────────────── */
function rootOptions() {
  return [
    { label: '🗂  Browse all projects',          action: 'goto_projects' },
    { label: '❓  Ask about a project',          action: 'goto_ai_select' },
    { label: '⚡  Explore the tech stack',        action: 'goto_tech' },
    { label: '📬  Hire Satya / Contact',         action: 'goto_hire' },
  ];
}

function projectListOptions() {
  const opts = KEYWORDS.map(kw => ({
    label: `${kw.text}  —  ${kw.project.title.substring(0, 38)}${kw.project.title.length > 38 ? '…' : ''}`,
    action: 'select_project',
    kw,
  }));
  opts.push({ label: '← Back', action: 'goto_root', back: true });
  return opts;
}

function projectDetailOptions(kw) {
  const p   = kw.project;
  const opts = [
    { label: '📋  What does this project do?',  action: 'proj_desc' },
    { label: '🛠  Tech stack breakdown',         action: 'proj_tech' },
    { label: '🔗  Open on GitHub',              action: 'open_url', url: p.github,   ext: true },
  ];
  if (p.deepwiki) {
    opts.push({ label: '📚  DeepWiki docs',     action: 'open_url', url: p.deepwiki, ext: true });
  }
  opts.push({ label: '❓  Have a specific question?', action: 'redirect_question' });
  opts.push({ label: '← Back to projects',     action: 'goto_projects', back: true });
  return opts;
}

function aiSelectOptions() {
  const opts = KEYWORDS.map(kw => ({
    label: kw.text + ' — ' + kw.project.title.substring(0, 35) + (kw.project.title.length > 35 ? '…' : ''),
    action: 'select_project_ai',
    kw,
  }));
  opts.push({ label: '← Back', action: 'goto_root', back: true });
  return opts;
}

/* ── CHAT INIT ──────────────────────────────────────────────────── */
function initChat() {
  const panel      = document.getElementById('chat-panel');
  const msgs       = document.getElementById('chat-messages');
  const optsArea   = document.getElementById('chat-options-area');
  const toggle     = document.getElementById('chat-toggle');
  const closeBtn   = document.getElementById('chat-close');
  const statusTxt  = document.getElementById('chat-status-text');
  let greeted      = false;

  /* open / close panel */
  toggle.addEventListener('click', () => {
    const opening = panel.hidden;
    panel.hidden  = !opening;
    toggle.setAttribute('aria-expanded', String(opening));
    if (opening && !greeted) {
      greeted = true;
      setTimeout(() => {
        addMsg('👋 I\'m AgentBot — Satya\'s portfolio assistant. Choose an option below to get started.', 'bot');
        renderOptions(rootOptions());
      }, 320);
    }
  });

  closeBtn.addEventListener('click', () => {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  });

  /* ── PROJECT Q&A REDIRECT (no live AI — points to real sources) ── */
  function renderQuestionRedirect(kw) {
    const p = kw.project;
    addMsg(
      `Good questions about "${p.title}" deserve a real answer, not a guess — ` +
      `here's where to find one:`,
      'bot'
    );
    const linkOpts = [];
    if (p.github && p.github !== '#') {
      linkOpts.push({ label: '🔗  Open GitHub repo (README + code)', action: 'open_url', url: p.github, ext: true });
    }
    if (p.deepwiki) {
      linkOpts.push({ label: '📚  Open DeepWiki docs', action: 'open_url', url: p.deepwiki, ext: true });
    }
    linkOpts.push({ label: '← Back to project',   action: 'select_project', kw, back: true });
    renderOptions(linkOpts);
  }

  /* ── RENDER OPTION CHIPS ──────────────────────────────────────── */
  function renderOptions(opts) {
    optsArea.innerHTML = '';
    opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'chat-opt-btn' +
        (opt.back ? ' back-opt' : '') +
        (opt.ext  ? ' ext-link' : '');
      btn.textContent = opt.label;
      btn.addEventListener('click', () => handleOption(opt));
      optsArea.appendChild(btn);
    });
  }

  /* ── HANDLE OPTION CLICKS ─────────────────────────────────────── */
  function handleOption(opt) {
    switch (opt.action) {

      case 'goto_root':
        chatSt.screen  = 'root';
        chatSt.project = null;
        renderOptions(rootOptions());
        break;

      case 'goto_projects':
        chatSt.screen = 'projects';
        addMsg('Here are all my projects. Pick one to explore:', 'bot');
        renderOptions(projectListOptions());
        break;

      case 'goto_ai_select':
        chatSt.screen = 'ai_select';
        addMsg('Which project do you have a question about?', 'bot');
        renderOptions(aiSelectOptions());
        break;

      case 'select_project':
        chatSt.screen  = 'project';
        chatSt.project = opt.kw;
        addMsg(`📦 ${opt.kw.project.title}`, 'user');
        addMsg(`What would you like to know about "${opt.kw.project.title}"?`, 'bot');
        renderOptions(projectDetailOptions(opt.kw));
        break;

      case 'select_project_ai':
        chatSt.screen  = 'project';
        chatSt.project = opt.kw;
        addMsg(`❓ Question about: ${opt.kw.project.title}`, 'user');
        renderQuestionRedirect(opt.kw);
        break;

      case 'proj_desc':
        addMsg('📋 What does this project do?', 'user');
        addMsg(chatSt.project.project.desc, 'bot');
        break;

      case 'proj_tech':
        addMsg('🛠 Tech stack?', 'user');
        addMsg(`Tech stack: ${chatSt.project.project.tech.join(' · ')}`, 'bot');
        break;

      case 'redirect_question':
        addMsg('❓ Have a specific question?', 'user');
        renderQuestionRedirect(chatSt.project);
        break;

      case 'open_url':
        if (opt.url && opt.url !== '#') {
          window.open(opt.url, '_blank', 'noopener,noreferrer');
        }
        break;

      case 'goto_tech':
        chatSt.screen = 'root';
        addMsg('⚡ Tech stack?', 'user');
        addMsg(
          'Satya\'s core stack:\n\n' +
          '🤖 Agents: LangChain · LangGraph · A2A · MCP · Google ADK\n' +
          '🧠 Models: Claude · GPT-4o · Gemini · Qwen · Mistral\n' +
          '🗄 Data: PostgreSQL · SQLite · Qdrant · FAISS · pgvector\n' +
          '⚙️ Infra: FastAPI · Docker · React · Vite · uv\n' +
          '📊 Ops: Open-LLM-Observability (self-built) · LangSmith',
          'bot'
        );
        renderOptions(rootOptions());
        break;

      case 'goto_hire':
        chatSt.screen = 'root';
        addMsg('📬 How to get in touch?', 'user');
        addMsgHtml(`<div class="contact-links-msg">
  <p>Satya is open to GenAI projects, consulting, and collaborations.</p>
  <a href="https://github.com/SatyaHimavanth" target="_blank" rel="noopener noreferrer" class="contact-link-btn">⌥&nbsp;&nbsp;github.com/SatyaHimavanth</a>
  <a href="mailto:himavantht31@gmail.com" class="contact-link-btn">✉&nbsp;&nbsp;himavantht31@gmail.com</a>
  <a href="https://www.linkedin.com/in/satyahimavanth-tripurari/" target="_blank" rel="noopener noreferrer" class="contact-link-btn">◈&nbsp;&nbsp;linkedin.com/in/satyahimavanth-tripurari</a>
  <a href="#contact" class="contact-link-btn" onclick="document.getElementById('chat-panel').hidden=true;document.getElementById('chat-toggle').setAttribute('aria-expanded','false')">↓&nbsp;&nbsp;Jump to contact section</a>
</div>`, 'bot');
        renderOptions(rootOptions());
        break;
    }
    msgs.scrollTop = msgs.scrollHeight;
  }

  /* ── MESSAGE HELPERS ──────────────────────────────────────────── */
  function addMsg(text, role) {
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  function addMsgHtml(html, role) {
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.innerHTML = html; // safe — all content is authored by us
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  function addTyping() {
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }
}

/* ── CHAT RESIZE ─────────────────────────────────────────────────── */
function initChatResize() {
  const handle = document.getElementById('chat-resize-handle');
  const panel  = document.getElementById('chat-panel');
  if (!handle || !panel) return;

  let startX, startY, startW, startH;

  function beginResize(clientX, clientY) {
    startX = clientX;
    startY = clientY;
    startW = panel.offsetWidth;
    startH = panel.offsetHeight;
    document.body.style.userSelect = 'none';
  }

  function doResize(clientX, clientY) {
    // Panel is anchored bottom-right: drag left → wider, drag up → taller
    const newW = Math.max(280, Math.min(620, startW + (startX - clientX)));
    const newH = Math.max(360, Math.min(760, startH + (startY - clientY)));
    panel.style.width  = newW + 'px';
    panel.style.height = newH + 'px';
  }

  function endResize() {
    document.body.style.userSelect = '';
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup',   onMouseUp);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend',  onTouchEnd);
  }

  function onMouseMove(e) { doResize(e.clientX, e.clientY); }
  function onMouseUp()    { endResize(); }
  function onTouchMove(e) { doResize(e.touches[0].clientX, e.touches[0].clientY); }
  function onTouchEnd()   { endResize(); }

  handle.addEventListener('mousedown', e => {
    beginResize(e.clientX, e.clientY);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup',   onMouseUp);
    e.preventDefault();
  });

  handle.addEventListener('touchstart', e => {
    beginResize(e.touches[0].clientX, e.touches[0].clientY);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend',  onTouchEnd);
    e.preventDefault();
  }, { passive: false });
}

/* ── SCROLL REVEAL ───────────────────────────────────────────────── */
function initReveal() {
  const targets = document.querySelectorAll(
    '.feature-card, .project-card, .skill-group, .metric-card, .contact-card'
  );

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.10 });

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 0.09}s`;
    obs.observe(el);
  });
}

/* ── UTILS ───────────────────────────────────────────────────────── */
function rand(min, max) {
  return Math.random() * (max - min) + min;
}