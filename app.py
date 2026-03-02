from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return 'Helo'

@app.route('/user/<name>')
def user(name):
    return f'hey {name}!'

@app.route('/search')
def search():
    term = request.args.get('term', 'null')

@app.route('/text')
def text():
    return 'plaintextbaby'

@app.route('/html')
def html():
    return '<h1>YO</h1><p>htmlbabyyyy</p>'

@app.route('/json')
def json():
    return jsonify({"message": "Success", "status": "ok"})
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
