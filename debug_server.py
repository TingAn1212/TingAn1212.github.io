from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def index():
    # Specify the full path to your 'index.html' file
    # Adjust the path as needed to match the location of your HTML file
    return send_file('index.html')
@app.route('/<page_name>')
def load_page(page_name):
    return send_file(page_name)

if __name__ == '__main__':
    app.run(debug=True)