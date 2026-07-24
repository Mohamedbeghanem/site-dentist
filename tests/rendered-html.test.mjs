import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the premium clinic homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Lumière Dental Atelier/);
  assert.match(html, /Your smile deserves/);
  assert.match(html, /Book appointment/);
  assert.match(html, /Complete care, one place/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|taking shape/i);
});

test("renders every patient-facing route", async () => {
  const routes = [
    "/about", "/dentists", "/treatments", "/emergency", "/gallery",
    "/technology", "/testimonials", "/pricing", "/insurance", "/blog",
    "/faq", "/contact", "/book-appointment", "/patient-portal",
  ];
  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /Lumière/);
    assert.match(html, /Book appointment/);
  }
});

test("gives key navigation destinations distinct page experiences", async () => {
  const signatures = new Map([
    ["/treatments", "START WITH WHAT YOU NEED"],
    ["/technology", "THE DIGITAL CLINICAL LAB"],
    ["/gallery", "REAL PATIENT CASE STUDIES"],
    ["/faq", "PLAN YOUR VISIT"],
    ["/patient-portal", "YOUR PRIVATE CARE SPACE"],
  ]);
  for (const [route, signature] of signatures) {
    const response = await render(route);
    const html = await response.text();
    assert.match(html, new RegExp(signature), route);
  }
});

test("includes local SEO, structured data, and social preview metadata", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"Dentist"/);
  assert.match(html, /og:image/);
  assert.match(html, /\/og\.png/);
  assert.match(html, /summary_large_image/);
  assert.match(html, /dentist Algiers/);
});

test("removes the disposable starter experience", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(packageJson, /lumiere-dental-atelier/);
});
