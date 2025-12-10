# n8n RAG Chatbot Integration Guide

## ✅ Chat is Ready for Your n8n Webhook!

Your chat component is now configured to call your n8n RAG chatbot webhook for intelligent AI responses.

## 🔧 Setup Instructions

### Step 1: Add Your Webhook URL

1. Open the file: `src/components/DemoCard2.tsx`
2. Find line ~9 that says:
   ```typescript
   const N8N_WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL_HERE";
   ```
3. Replace with your actual n8n webhook URL:
   ```typescript
   const N8N_WEBHOOK_URL = "https://your-n8n-instance.com/webhook/your-webhook-id";
   ```

### Step 2: Configure Response Format

The code expects your n8n webhook to return JSON. Update the response parsing if needed (around line 29):

**Default configuration** tries these fields in order:
```typescript
return data.response || data.message || data.output || data.text
```

**Common n8n response formats:**

**Format 1: Simple response**
```json
{
  "response": "Your AI response here"
}
```

**Format 2: Message field**
```json
{
  "message": "Your AI response here"
}
```

**Format 3: Output field**
```json
{
  "output": "Your AI response here"
}
```

**Format 4: Nested data**
```json
{
  "data": {
    "response": "Your AI response here"
  }
}
```
If your format is nested, update line 29 to:
```typescript
return data.data.response || data.data.message;
```

### Step 3: Customize Request Body (Optional)

If your n8n webhook expects specific fields, update the request body (around line 17):

**Current format:**
```typescript
body: JSON.stringify({
  message: userMessage,
}),
```

**Example with session ID:**
```typescript
body: JSON.stringify({
  message: userMessage,
  sessionId: "demo-chat-" + Date.now(),
  userId: "website-demo"
}),
```

## 🧪 Testing Your Integration

1. Make sure your n8n workflow is **active**
2. Test your webhook in n8n first to ensure it's working
3. Go to **http://localhost:3000**
4. Scroll to "Test It Out" section
5. Open browser console (F12) to see any errors
6. Send a test message in the chat

## 🔍 Troubleshooting

### Webhook Returns Error
- Check that your n8n workflow is active
- Verify the webhook URL is correct
- Check CORS settings in n8n (might need to allow your domain)

### No Response Appears
- Open browser console (F12) and check for errors
- Verify your webhook returns the expected JSON format
- Check the network tab to see the actual response

### "I'm having trouble connecting"
This appears when:
- The webhook URL is incorrect
- n8n workflow is not active
- Network/CORS issues
- Webhook returns unexpected format

### CORS Issues

If you see CORS errors in the console, you need to configure CORS in n8n:

**In your n8n webhook node:**
1. Add "Respond to Webhook" node
2. Enable "Options" → "Response Headers"
3. Add header: `Access-Control-Allow-Origin: *`
4. Add header: `Access-Control-Allow-Methods: POST, OPTIONS`
5. Add header: `Access-Control-Allow-Headers: Content-Type`

## 📝 Example n8n Workflow Setup

**Simple RAG Chatbot Workflow:**

1. **Webhook Node** (Trigger)
   - Method: POST
   - Path: `/chat` (or your preference)
   
2. **Set Variables** (Optional)
   - Extract message: `{{ $json.body.message }}`
   
3. **Your RAG Logic**
   - Vector store retrieval
   - LLM processing
   - Response generation
   
4. **Respond to Webhook**
   - Response Body:
     ```json
     {
       "response": "{{ $json.aiResponse }}"
     }
     ```

## 🎯 Advanced: Chat History

To maintain conversation context across messages, you can add a session ID:

```typescript
const [sessionId] = useState(() => `session-${Date.now()}`);

// Then in the fetch call:
body: JSON.stringify({
  message: userMessage,
  sessionId: sessionId,
  chatHistory: messages.map(m => ({
    role: m.isUser ? "user" : "assistant",
    content: m.text
  }))
}),
```

## ✨ Features Working

- ✅ Real-time chat with your n8n RAG bot
- ✅ Loading state while waiting for response
- ✅ Error handling for failed requests
- ✅ Automatic retry capability
- ✅ Clean, user-friendly interface

## 📚 Need Help?

1. Check n8n webhook is active
2. Test webhook directly with Postman/Insomnia
3. Check browser console for detailed errors
4. Verify JSON response format matches expected structure

---

**Once configured, your chat will use your powerful n8n RAG chatbot!** 🚀

