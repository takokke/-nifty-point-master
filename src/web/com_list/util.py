import json
import os

from flask import current_app


def get_json_data():
    filename = "com_list.JSON"
    data_path = os.path.join(current_app.root_path, "com_list/data", filename)

    # デバッグ用にファイルパスを出力
    # print(f"Loading JSON file from: {data_path}")

    with open(data_path) as f:
        data = json.load(f)
    return data
