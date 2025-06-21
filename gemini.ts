// async function fetchResponse() {
//   const response = await fetch(
//     'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:cacheContent?key=YOUR_API_KEY',
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         contents: [{ role: 'user', parts: [{ text: 'This is the context I want to remember.' }] }],
//         ttl: '3600s', // 1 hour
//       }),
//     },
//   );

//   const data = await response.json();
//   const cacheId = data.name; // Save this for future use
// }

// const reply = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=YOUR_API_KEY", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     contents: [
//       { role: "user", parts: [{ text: "What should I do next?" }] }
//     ],
//     cachedContent: cacheId
//   })
// });

// const result = await reply.json();
// console.log(result.candidates[0].content.parts[0].text);
