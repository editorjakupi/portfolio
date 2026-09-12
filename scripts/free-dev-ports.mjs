/**
 * Free common Vite ports so `npm run dev` can bind the first free one cleanly.
 * Windows (Git Bash) + Unix.
 */
import { execSync } from 'node:child_process';

const PORTS = [5173, 5174, 5175, 5176, 5177, 5178, 5179, 5180];

function killPid(pid) {
  if (!pid || pid === '0' || pid === String(process.pid)) return;
  try {
    if (process.platform === 'win32') {
      execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
    } else {
      execSync(`kill -9 ${pid}`, { stdio: 'ignore' });
    }
  } catch {
    /* already gone */
  }
}

function pidsOnPort(port) {
  const pids = new Set();
  try {
    if (process.platform === 'win32') {
      const out = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' });
      for (const line of out.split(/\r?\n/)) {
        if (!/LISTENING/i.test(line)) continue;
        const parts = line.trim().split(/\s+/);
        const pid = parts[parts.length - 1];
        if (/^\d+$/.test(pid)) pids.add(pid);
      }
    } else {
      const out = execSync(`lsof -ti tcp:${port} -sTCP:LISTEN || true`, {
        encoding: 'utf8',
        shell: '/bin/bash',
      });
      for (const pid of out.split(/\s+/)) {
        if (/^\d+$/.test(pid)) pids.add(pid);
      }
    }
  } catch {
    /* nothing listening */
  }
  return [...pids];
}

for (const port of PORTS) {
  for (const pid of pidsOnPort(port)) {
    console.log(`Freeing port ${port} (pid ${pid})`);
    killPid(pid);
  }
}
