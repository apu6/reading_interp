from flask import Flask
from flask import render_template
from flask import ( request )

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def read():
    if request.method == 'GET':
        return render_template('poem.html')
