from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def landing_page():
	return render_template("homepage.html")

@app.route("/scribis")
def scribis():
  return render_template("scribis.html")





if __name__ == "__main__":
	app.run(debug=True)
