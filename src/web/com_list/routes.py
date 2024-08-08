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

COMLIST_BP = Blueprint(
    "comlist", __name__, url_prefix="/com_list", template_folder="templates"
)


@COMLIST_BP.route("/", methods=["GET"])
def com_list():
    form = LoginForm()
    return render_template("product.html", form=form)


@COMLIST_BP.route("/data")
def get_com_list():
    data_path = os.path.join(current_app.root_path, "com_list/data/com_list.JSON")

    # デバッグ用にファイルパスを出力
    print(f"Looking for file at: {data_path}")

    with open(data_path) as f:
        data = json.load(f)
    return jsonify(data)
