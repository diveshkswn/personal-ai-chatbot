export interface ChatHistoryProps {
  role?: 'user' | 'model';
  parts: { text: string }[];
}

export interface ChatResponseProps {
  candidates: { content: ChatHistoryProps }[];
}

const SYSTEM_INSTRUCTION = {
  parts: [
    {
      text: 'You are a ChatBot named Jarvis. Divesh Keswani has created you. When Giving Response and required formatting, keep it simple mostly with bullets tables and bold items whenever required.',
    },
  ],
};

export async function generateGemeniAiResponse({
  text,
  currentHistory,
}: {
  text: string;
  currentHistory: ChatHistoryProps[];
}) {
  try {
    const newQuery: ChatHistoryProps = {
      role: 'user',
      parts: [{ text: text }],
    };

    const payload: { system_instruction: ChatHistoryProps; contents: ChatHistoryProps[] } = {
      system_instruction: SYSTEM_INSTRUCTION,
      contents: [...currentHistory, newQuery],
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    );
    const data: ChatResponseProps = await response.json();
    return data;
  } catch (e) {
    console.log('Error at', e);
  }
}

export async function generateGeminiAiResponseStream() {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system_instruction: SYSTEM_INSTRUCTION,
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: 'Explain React.js in Few Words',
              },
            ],
          },
          {
            parts: [
              {
                text: 'React.js is a JavaScript library for building user interfaces (UIs) that are dynamic, reusable, and efficient.\n',
              },
            ],
            role: 'model',
          },
          { role: 'user', parts: [{ text: 'some famous websites which use it.' }] },
        ],
      }),
    },
  );
  const reader = response?.body?.getReader();
  const decoder = new TextDecoder('utf-8');
  let result = '';

  while (true) {
    const { done, value } = (await reader?.read()) || {};
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    result += chunk;
  }
  return result;
}
