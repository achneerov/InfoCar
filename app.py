from flask import Flask, render_template, request, jsonify

from functions.YearMakeModelArrFunc import year_make_model_arr
from functions.AccidentDamageArrFunc import accident_damage_arr
from functions.RegistrationArrFunc import registration_arr
from functions.ServiceRecordsArrFunc import service_records_arr
from functions.OpenRecallsArrFunc import open_recalls_arr
from functions.StolenVehicleArrFunc import stolen_vehicle_arr
from functions.DetailedHistoryArrFunc import detailed_history_arr

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_report', methods=['POST'])
def generate_report():
    vin = request.form['vin']

    p0 = year_make_model_arr(vin)
    p1 = accident_damage_arr(vin)
    p2 = registration_arr(vin)
    p3 = service_records_arr(vin)
    p4 = open_recalls_arr(vin)
    p5 = stolen_vehicle_arr(vin)
    p6 = detailed_history_arr(vin)

    result = {
        "YearMakeModel": p0,
        "AccidentDamage": p1,
        "Registration": p2,
        "ServiceRecords": p3,
        "OpenRecalls": p4,
        "StolenVehicleCheck": p5,
        "DetailedHistory": p6,
    }

    return jsonify(result=result)

@app.route('/<vin>')
def report_by_vin(vin):
    return render_template('report.html', vin=vin)


if __name__ == '__main__':
    app.run(debug=True)
