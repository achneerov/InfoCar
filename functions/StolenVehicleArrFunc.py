from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time

def stolen_vehicle_arr_test(VIN):
    return ['No records were found as of: November 25, 2023']

def stolen_vehicle_arr(VIN):
    StolenArr = []

    # URL of the website
    url = "https://www.cpic-cipc.ca/sve-rve-eng.htm"

    # Start a non-headless Selenium browser (visible browser for debugging)
    driver = webdriver.Chrome()

    try:
        # Load the website
        driver.get(url)

        # Find the input field with the specific class and id
        vin_input = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'searchItem')))
        time.sleep(2)  # Add a sleep interval

        # Set the VIN in the input field
        vin_input.send_keys(VIN)



        # Find the checkbox element by ID
        checkbox = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'tou')))
        time.sleep(2)  # Add a sleep interval

        # Check the checkbox
        checkbox.click()

        time.sleep(2)

        submit_button = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'search')))
        submit_button.click()

        time.sleep(2)

        results_message = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'rsltsMsg')))

        StolenArr.append(results_message.text)

    except Exception as e:
        print(f"An error occurred: {str(e)}")

    finally:
        driver.quit()

    return StolenArr

