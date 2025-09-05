import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readmePath = path.join(__dirname, 'README.md');
const readme = fs.readFileSync(readmePath, 'utf-8');

// Find the table under "## Results"
const tableRegex = /(\|[^\n]+\|\n\|[-| ]+\|\n(?:\|.*\|\n?)+)/m;
const match = readme.match(tableRegex);

if (!match) {
  console.error('Table not found in README.md');
  process.exit(1);
}

const table = match[1].trim();
const lines = table.split('\n');
const header = lines[0];
const separator = lines[1];
const rows = lines.slice(2);

// Find the "Improvement" column index
const headers = header.split('|').map(h => h.trim());
const improvementIdx = headers.findIndex(h => h.toLowerCase().startsWith('build speed change'));

function extractFirstXValue(cell: string): number {
  // Find the first value like 3.5x or 2.6x in the cell
  const match = cell.match(/(\d+(\.\d+)?)x/);
  return match ? parseFloat(match[1]) : -Infinity;
}

// Sort rows by the Build Speed Change column (descending, by first x value)
const sortedRows = rows
  .map(row => row.trim())
  .filter(row => row.length > 0)
  .sort((a, b) => {
    const aCols = a.split('|').map(c => c.trim());
    const bCols = b.split('|').map(c => c.trim());
    const aVal = extractFirstXValue(aCols[improvementIdx]);
    const bVal = extractFirstXValue(bCols[improvementIdx]);
    console.log(`Comparing: ${aCols[improvementIdx]} (${aVal}) vs ${bCols[improvementIdx]} (${bVal})`);
    return bVal - aVal;
  });

// Reconstruct the table
const sortedTable = [header, separator, ...sortedRows].join('\n');

// Replace the old table with the sorted one in the README
const newReadme = readme.replace(table, sortedTable);

fs.writeFileSync(readmePath, newReadme, 'utf-8');
console.log('Table sorted by Build Speed Change column (x value).');
