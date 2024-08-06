from flask import Blueprint, render_template


SIMULATION_BP = Blueprint(
    "simulation", __name__, url_prefix="/simulation", template_folder="templates"
)

@SIMULATION_BP.route("/", methods=["GET"])
def simulation():
    return render_template("simulation.html"), 409
