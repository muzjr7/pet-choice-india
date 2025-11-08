#!/usr/bin/env node
/**
 * Fetches image renders of Figma component nodes for assets.
 * Usage: FIGMA_TOKEN=xxx FIGMA_FILE_ID=yyy node scripts/figma/fetch-assets.mjs
 */
import fs from 'fs';
import path from 'path';
import https from 'https';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_ID = process.env.FIGMA_FILE_ID;
if (!FIGMA_TOKEN || !FILE_ID) {
  console.error('Missing FIGMA_TOKEN or FIGMA_FILE_ID env variables');
  process.exit(1);
}

function figmaGet(endpoint) {
  return new Promise((resolve, reject) => {
    const opts = { hostname: 'api.figma.com', path: `/v1${endpoint}`, headers: { 'X-Figma-Token': FIGMA_TOKEN } };
    https.get(opts, res => { let data=''; res.on('data', c => data+=c); res.on('end', ()=>{ try{ resolve(JSON.parse(data)); }catch(e){ reject(e);} }); }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

(async () => {
  console.log('Fetching file components...');
  const compData = await figmaGet(`/files/${FILE_ID}/components`);
  const components = compData.meta?.components || [];
  const nodeIds = components.map(c => c.node_id).slice(0, 20); // limit for demo
  if (!nodeIds.length) {
    console.log('No components found to export.');
    return;
  }
  console.log(`Requesting images for ${nodeIds.length} components...`);
  const images = await figmaGet(`/images/${FILE_ID}?ids=${encodeURIComponent(nodeIds.join(','))}&format=png`);

  const outDir = path.resolve('frontend/public/assets/figma');
  fs.mkdirSync(outDir, { recursive: true });
  for (const id of Object.keys(images.images || {})) {
    const url = images.images[id];
    if (!url) continue;
    const name = `component-${id}.png`;
    const dest = path.join(outDir, name);
    console.log('Downloading', name);
    await download(url, dest);
  }
  console.log('Asset export complete.');
})();
