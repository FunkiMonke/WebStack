from flask import Flask
import flask_sqlalchemy

app = Flask(__name__)

# Configure the SQLite database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:/Users/imran/Desktop/School Work/WebStack/week9/database.db'
db = flask_sqlalchemy.SQLAlchemy(app)

@app.route('/')
def home():
    return "Welcome to the F1 Team Management System!"

# Ensure database tables are created
def create_tables():
    with app.app_context():
        db.create_all()
        print(f"Database created at ")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
