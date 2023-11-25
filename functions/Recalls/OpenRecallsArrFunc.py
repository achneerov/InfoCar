from functions.Recalls.HyundaiRecall import HyundaiRecallFunc
from functions.Recalls.HyundaiRecall import HyundaiRecallFuncTest


def open_recalls_arr(VIN, make):
    make = make.lower()

    if make == "hyundai":
        return HyundaiRecallFunc(VIN)

def open_recalls_arr_test(VIN, make):
    make = make.lower()
    if make == "hyundai":
        return HyundaiRecallFuncTest(VIN)