from flask import Flask, render_template

app = Flask(__name__, static_folder='static')


@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/")
def simplespage():
    return render_template("regraDeTres.html")

@app.route("/")
def gotaspage():
    return render_template("gotas.html")

@app.route("/")
def microgotaspage():
    return render_template("microgotas.html")

@app.route("/")
def insulinapage():
    return render_template("insulina.html")


if __name__ == "__main__":
    app.run(debug=True)
