from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////workspace/database.db'
db = SQLAlchemy(app)

@app.route('/')
def home():
    return "yo"

def create_tables():
    with app.app_context():
        db.create_all()
        print(f"Database created at {db_path}")

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8000)