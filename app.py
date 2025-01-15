from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    
    # Example Bot Response Logic
    if "hello" in user_message.lower():
        reply = "Hello! How can I assist you today?"
    elif "stress" in user_message.lower():
        reply = "I'm here to help. Let me suggest some relaxation techniques."
    else:
        reply = "I'm sorry, I didn't understand that. Can you please rephrase?"

    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
