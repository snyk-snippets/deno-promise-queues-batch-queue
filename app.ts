import { BatchQueue } from "https://deno.land/x/batch_queue/mod.ts";
import ProgressBar from "https://deno.land/x/progress/mod.ts";

// URLs to make HTTP requests to
const urls = [
  'https://registry.npmjs.org/package1',
  'https://registry.npmjs.org/package2',
  'https://registry.npmjs.org/package3'
];

const totalRequests = urls.length;
let currentRequest = 0;
const progressBar = new ProgressBar({
  total: totalRequests,
  complete: '=',
  incomplete: ' ',
  display: ':bar :percent',
});

// Initialize the queue with a concurrency of 2
const q = new BatchQueue(2);

// Function to make HTTP request
async function makeHttpRequest(url) {
  progressBar.render(++currentRequest);
  const response = await fetch(url);
  const data = await response.json();
  // @TODO do something with the data...
}

for (const url of urls) {
	q.queue(() => makeHttpRequest(url));
}

await q.run()
await q.allSettled
