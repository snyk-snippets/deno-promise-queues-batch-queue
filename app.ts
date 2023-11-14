import { BatchQueue } from "https://deno.land/x/batch_queue/mod.ts";

// URLs to make HTTP requests to
const urls = [
  'https://registry.npmjs.org/package1',
  'https://registry.npmjs.org/package2',
  'https://registry.npmjs.org/package3'
];

// Initialize the queue with a concurrency of 2
const q = new BatchQueue(2);

// Function to make HTTP request
async function makeHttpRequest(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching URL:', url, error);
  }
}

for (const url of urls) {
  q.queue(() => makeHttpRequest(url));
}

await q.run()
await q.allSettled
