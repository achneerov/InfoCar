import requests

def year_make_model_arr(VIN):
    url = f'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/{VIN}?format=json&modelyear=2011/440?format=json'
    r = requests.get(url)
    
    # Check if the request was successful
    if r.status_code == 200:
        data = r.json()

        # Initialize an array to store Year, Make, and Model
        vehicle_info = []

        # Extract Year
        year_info = next((result for result in data["Results"] if result["Variable"] == "Model Year"), None)
        year = year_info["Value"] if year_info else None
        vehicle_info.append(year)

        # Extract Make
        make_info = next((result for result in data["Results"] if result["Variable"] == "Make"), None)
        make = make_info["Value"] if make_info else None
        vehicle_info.append(make)

        # Extract Model
        model_info = next((result for result in data["Results"] if result["Variable"] == "Model"), None)
        model = model_info["Value"] if model_info else None
        vehicle_info.append(model)

        return vehicle_info
    else:
        # If the request was not successful, print an error message
        print(f"Error: Unable to fetch data. Status code: {r.status_code}")
        return None

# Example usage:
#VIN = 'JM1DE1HY9B0101995'
#result = year_make_model_arr(VIN)
#if result:
#    print(result)
