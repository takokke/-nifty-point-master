from flask import Blueprint, render_template


SIMULATION_BP = Blueprint(
    "simulation", __name__, url_prefix="/simulation", template_folder="templates"
)

@SIMULATION_BP.route("/", methods=["GET"])
def simulation():
    init_data = {
        "current_point": 0,
        "monthly_point": 0,
        "goal_point": 0,
    }
    return render_template("simulation.html", init_data=init_data), 409
