from functions.Recalls.HyundaiRecall import HyundaiRecallFunc

def open_recalls_arr(VIN, make):
    make = make.lower()

    if make == "hyundai":
        return HyundaiRecallFunc(VIN)
