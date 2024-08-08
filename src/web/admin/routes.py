from flask import Blueprint, flash, redirect, render_template, request, url_for
from flask_login import current_user, login_required

from ..auth.models import User
from ..models import DB

ADMIN_BP = Blueprint(
    "admin", __name__, url_prefix="/admin", template_folder="templates"
)


@ADMIN_BP.route("/", methods=["GET", "POST"])
@login_required
def admin():
    if not current_user.is_admin:
        return redirect(url_for("app.profile.profile"))
    users = User.query.all()
    data = [
        {
            "id": user.id,
            "username": user.username,
            "current_point": user.current_point,
            "monthly_point": user.monthly_point,
            "goal_point": user.goal_point,
            "is_admin": user.is_admin,
        }
        for user in users
    ]

    return render_template("admin.html", data=data)


@ADMIN_BP.route("/update", methods=["GET", "POST"])
@login_required
def update():
    if not current_user.is_admin:
        return redirect(url_for("app.update.update"))

    if request.method == "POST":
        data = {
            "id": request.form.get("id"),
            "username": request.form.get("username"),
            "current_point": request.form.get("current_point"),
            "monthly_point": request.form.get("monthly_point"),
            "goal_point": request.form.get("goal_point"),
        }

        response = request.put(url_for("app.api.update_user"), json=data)
        if response.status_code == 200:
            flash("更新しました", "success")
        else:
            flash("更新に失敗しました", "danger")

        return redirect(url_for("app.admin.admin"))

    elif request.method == "GET":
        user_id = request.args.get("user_id")
        user = User.query.get(user_id)
        if user and user.id != current_user.id:
            return render_template("update.html", user=user)
        return redirect(url_for("app.admin.admin"))
