from flask import Blueprint, flash, redirect, render_template, request, url_for
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
    return render_template("login.html", form=form)
