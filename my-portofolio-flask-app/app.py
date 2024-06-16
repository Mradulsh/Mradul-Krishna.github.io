from flask import Flask, jsonify

app = Flask(__name__)

projects = [
    {'id': 1, 'name': 'Project 1', 'description': 'Description of Project 1'},
    {'id': 2, 'name': 'Project 2', 'description': 'Description of Project 2'},
    # Add more projects here
]

@app.route('/api/projects')
def get_projects():
    return jsonify(projects)

if __name__ == '__main__':
    app.run(debug=True)
