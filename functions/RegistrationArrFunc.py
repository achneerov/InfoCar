import requests

def registration_arr(vin):
    '''
    url = 'https://www.ibc.ca/industry-resources/insurance-data-tools/vin-verify'
    
    # Assuming "vin_number" is the name of the input field
    data = {
        'vin_number': vin,
        # Add other form fields if needed
    }

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    try:
        response = requests.post(url, data=data, headers=headers)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            print("Form submitted successfully")
            # Now you can parse the response content or perform further actions
        else:
            print(f"Form submission failed with status code {response.status_code}")

    except requests.RequestException as e:
        print(f"Request failed: {e}")
    '''

    return ["2022", "Registered"]

