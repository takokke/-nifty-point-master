import json
import os

from flask import (
    Blueprint,
    current_app,
    flash,
    jsonify,
    redirect,
    render_template,
    request,
    url_for,
)
from flask_login import login_user, logout_user
from sqlalchemy.exc import IntegrityError
from werkzeug.security import check_password_hash, generate_password_hash

from ..models import DB
from .forms import LoginForm, SignupForm
from .util import get_json_data

COMLIST_BP = Blueprint(
    "comlist", __name__, url_prefix="/com_list", template_folder="templates"
)


@COMLIST_BP.route("/", methods=["GET"])
def com_list():
    form = LoginForm()
    return render_template("login.html", form=form)


@COMLIST_BP.route("/data")
def get_com_list():
    products = get_json_data()["content"]
    return render_template("test.html", products=products)
