const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const gamePath = path.join(__dirname, '..', 'dist', 'index.html');
const html = fs.readFileSync(gamePath, 'utf8');

test('distributable game file exists and has a valid HTML shell', () => {
  assert.match(html, /<!doctype html>/i);
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /<\/html>/i);
});

test('game includes its title and start screen', () => {
  assert.match(html, /LAST GUARD/);
  assert.match(html, /START GAME/);
  assert.match(html, /id="start"/);
});

test('game includes core FPS controls and HUD', () => {
  assert.match(html, /WASD move/i);
  assert.match(html, /Mouse look/i);
  assert.match(html, /Left-click shoot/i);
  assert.match(html, /id="health"/);
  assert.match(html, /id="ammo"/);
  assert.match(html, /id="bothealth"/);
});

test('game includes shooting, reloading, and win/loss logic', () => {
  assert.match(html, /function shoot\(\)/);
  assert.match(html, /function doReload\(\)/);
  assert.match(html, /CONTROL POINT SECURED!/);
  assert.match(html, /MISSION FAILED/);
});
