const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  console.error('Error: set OPENROUTER_API_KEY environment variable.');
  process.exit(1);
}

const model = process.env.OPENROUTER_MODEL || 'MODEL_NAME_REPLACE_WITH_FREE_MODEL';

async function run() {
  const res = await fetch('https://api.openrouter.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'user', content: 'Halo dari VSCode sample menggunakan OpenRouter (contoh)' }
      ],
      max_tokens: 300
    }),
  });

  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

run().catch(err => {
  console.error('Request failed:', err);
  process.exit(1);
});
