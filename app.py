from flask import Flask, render_template, request, jsonify
from functions.YearMakeModelArrFunc import year_make_model_arr
from functions.Recalls.OpenRecallsArrFunc import open_recalls_arr
from functions.Recalls.OpenRecallsArrFunc import open_recalls_arr_test
from functions.StolenVehicleArrFunc import stolen_vehicle_arr
from functions.StolenVehicleArrFunc import stolen_vehicle_arr_test


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_report', methods=['POST'])
def generate_report():
    vin = request.form['vin']

    p0 = year_make_model_arr(vin)
    p1 = open_recalls_arr_test(vin, p0[1])
    p2 = stolen_vehicle_arr_test(vin)

    result = {
        "YearMakeModel": p0,
        "OpenRecalls": p1,
        "StolenVehicleCheck": p2,
    }

    return jsonify(result=result)

@app.route('/<vin>')
def report_by_vin(vin):
    return render_template('report.html', vin=vin)


if __name__ == '__main__':
    app.run(debug=True)
