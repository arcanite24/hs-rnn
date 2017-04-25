from flask import Flask, render_template
from nn import sample

app = Flask(__name__)
app.jinja_env.add_extension('pyjade.ext.jinja.PyJadeExtension')

@app.route('/')
def index(output=None):
    output = sample.main()
    return render_template('index.jade', output=output.decode('utf-8'))
