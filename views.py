from flask import Blueprint, render_template, redirect, request, url_for

my_view= Blueprint('my_view',__name__)

@my_view.route("/")
def index():
    return render_template("index.html")

@my_view.route("/index")
def indexed():
    return redirect(url_for("my_view.index"))

@my_view.route("/home")
def home():
    return redirect(url_for("my_view.index"))

@my_view.route("/PCOverview")
def PCOverview():
    return redirect(url_for("my_view.index"))

@my_view.route("/Cooling")
def cooling():
    return render_template("Cooling.html")

@my_view.route("/Cpu")
def cpu():
    return render_template("Cpu.html")

@my_view.route("/Gpu")
def gpu():
    return render_template("Gpu.html")

@my_view.route("/RSPA",)
def rspa():
    return render_template("RSPA.html")
