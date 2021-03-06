from flask import Flask
from flask_mako import MakoTemplates, render_template
from plim import preprocessor

app = Flask(__name__)
mako = MakoTemplates(app)
app.config['MAKO_PREPROCESSOR'] = preprocessor

@app.route('/')
def hello():
    name="mako"
    lists = ['apple','banana','pineapple']
    html = '<p>I\'m p</p>'
    return render_template('hello.plim', user=locals())

if __name__ == "__main__":
    app.run(debug=True)
