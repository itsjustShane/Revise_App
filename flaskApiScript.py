# Flask API Script for reference 

from flask import Flask, jsonify, request, render_template
import openai
import os
from dotenv import load_dotenv 

app = Flask(__name__)

load_dotenv()

openai_client = openai.OpenAI(api_key=f"{os.getenv("OPENAI_API_KEY")}")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "No input provided"}), 400
    
    try:
        response = openai_client.chat.completions.create(
            model="gpt-4o", 
            messages=[{"role": "user", "content": user_input}]
        )
        reply = response.choices[0].message.content if response.choices else "Error: No response received"
        return jsonify({"response": reply})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__== '__main__':
    app.run(debug = True)




