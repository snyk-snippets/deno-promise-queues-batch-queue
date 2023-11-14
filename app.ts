import { serve } from "https://deno.land/std/http/server.ts";

serve((req) => new Response("Hello World\n"), { port: 8000 });
console.log("Server running on http://localhost:8000/");
