/**
 * /api/mcp/route.ts
 *
 * MCP (Model Context Protocol) server endpoint for Akash Singh's portfolio.
 *
 * Implements the 2026-07-28 MCP specification via `mcp-handler@^2` +
 * `@modelcontextprotocol/server@^2`. A single GET/POST handler supports
 * Streamable HTTP (stateless, serverless-friendly) and transparently falls
 * back to 2025-era clients.
 *
 * Tools exposed:
 *   - get_portfolio_summary  → profile, skills, stats, journey
 *   - list_projects          → all 8 projects with tech stacks & links
 *   - get_contact_info       → email, phone, GitHub, LinkedIn
 *
 * Resource exposed:
 *   - portfolio://resume     → full structured resume / bio blob
 *
 * Local testing:
 *   npx @modelcontextprotocol/inspector http://localhost:3000/api/mcp
 *
 * Or with curl:
 *   curl -X POST http://localhost:3000/api/mcp \
 *     -H "Content-Type: application/json" \
 *     -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2026-07-28","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}'
 */

import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import {
  profileSummary,
  stats,
  skillCategories,
  projects,
  journey,
  highlights,
  contactInfo,
} from "@/lib/mcp-data";

// ---------------------------------------------------------------------------
// Prevent Next.js from statically caching this route at build time.
// Serverless MCP handlers must always execute at request time.
// ---------------------------------------------------------------------------
export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// MCP handler
// ---------------------------------------------------------------------------

const handler = createMcpHandler(
  (server) => {
    // -----------------------------------------------------------------------
    // Tool: get_portfolio_summary
    // -----------------------------------------------------------------------
    server.registerTool(
      "get_portfolio_summary",
      {
        title: "Get Portfolio Summary",
        description:
          "Returns a comprehensive overview of Akash Singh's professional profile, including his bio, educational background, specialization, current focus, GitHub stats, skill categories, journey timeline, and a list of key highlights.",
        inputSchema: z.object({}),
      },
      async () => {
        const payload = {
          profile: profileSummary,
          stats,
          skillCategories,
          journey,
          highlights,
        };

        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(payload, null, 2),
            },
          ],
        };
      },
    );

    // -----------------------------------------------------------------------
    // Tool: list_projects
    // -----------------------------------------------------------------------
    server.registerTool(
      "list_projects",
      {
        title: "List Projects",
        description:
          "Returns the full list of Akash Singh's projects. Each entry includes the project title, description, key features, tech stack, live demo URL, and GitHub repository link. Projects span grocery delivery, discussion forums, event management, doctor booking, link trees, AI todos, background removal, and URL shortening.",
        inputSchema: z.object({}),
      },
      async () => {
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify({ projects, totalProjects: projects.length }, null, 2),
            },
          ],
        };
      },
    );

    // -----------------------------------------------------------------------
    // Tool: get_contact_info
    // -----------------------------------------------------------------------
    server.registerTool(
      "get_contact_info",
      {
        title: "Get Contact Information",
        description:
          "Returns Akash Singh's public contact details including email address, phone number, location, GitHub profile URL, LinkedIn profile URL, and portfolio website URL.",
        inputSchema: z.object({}),
      },
      async () => {
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(contactInfo, null, 2),
            },
          ],
        };
      },
    );

    // -----------------------------------------------------------------------
    // Resource: portfolio://resume
    // -----------------------------------------------------------------------
    server.registerResource(
      "portfolio-resume",
      "portfolio://resume",
      {
        title: "Akash Singh — Full Resume & Bio",
        description:
          "Complete structured resume of Akash Singh: profile overview, all skill categories, every project with tech stacks and links, career journey timeline, and key highlights. Ideal for AI agents that need the entire portfolio context in one call.",
        mimeType: "application/json",
      },
      async (uri) => {
        const resume = {
          $schema: "portfolio-resume-v1",
          generatedAt: new Date().toISOString(),
          profile: profileSummary,
          stats,
          skillCategories,
          projects,
          journey,
          highlights,
          contact: contactInfo,
        };

        return {
          contents: [
            {
              uri: uri.href,
              mimeType: "application/json",
              text: JSON.stringify(resume, null, 2),
            },
          ],
        };
      },
    );
  },
  {
    serverInfo: {
      name: "akash-singh-portfolio-mcp",
      version: "1.0.0",
    },
  },
);

// ---------------------------------------------------------------------------
// Next.js App Router Route Handler exports
// ---------------------------------------------------------------------------
export { handler as GET, handler as POST };
