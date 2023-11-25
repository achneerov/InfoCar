from functions.Recalls.HyundaiRecall import hyundai_recall_func
from functions.Recalls.HyundaiRecall import hyundai_recall_func_test


def open_recalls_arr(VIN, make):
    make = make.lower()

    if make == "hyundai":
        return hyundai_recall_func(VIN)

def open_recalls_arr_test(VIN, make):
    make = make.lower()
    if make == "hyundai":
        return hyundai_recall_func_test(VIN)