from flask import Blueprint, flash, redirect, render_template, request, url_for
from sqlalchemy.exc import IntegrityError


SIMULATION_BP = Blueprint(
    "simulation", __name__, url_prefix="/simulation", template_folder="templates"
)

@SIMULATION_BP.route("/", methods=["GET"])
def simulation():
    return render_template("simulation.html"), 409
