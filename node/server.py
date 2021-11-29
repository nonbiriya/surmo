from flask import Flask, request, jsonify, make_response
import csv
app = Flask(__name__)

@app.route("/", methods=['GET'])
def getHoge():
    csv_file = open("./ondo.txt", "r", errors="", newline="" )
    f = csv.reader(csv_file, delimiter=",", doublequote=True, lineterminator="\r\n", quotechar='"', skipinitialspace=True)
    values = {}
    meter = {}
    for i in f:
        values = {"ondo":i[1],"shitsudo":i[2]}
        meter[i[0]] = values
    # URLパラメータ
    params = request.args
    response = meter
    return make_response(jsonify(response))

app.run(host="0.0.0.0", port=5000)