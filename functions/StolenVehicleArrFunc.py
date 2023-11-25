


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

def stolen_vehicle_arr(VIN):
    StolenArr = []

    # URL of the website
    url = "https://www.cpic-cipc.ca/sve-rve-eng.htm"

    # Start a non-headless Selenium browser (visible browser for debugging)
    driver = webdriver.Chrome()

    try:
        # Load the website
        driver.get(url)

        # Handle cookies popup
        try:
            # Wait for the "Accept cookies" button to be clickable
            cookies_button = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CLASS_NAME, 'accept-cookies')))
            cookies_button.click()
        except Exception as e:
            print(f"Error handling cookies popup: {str(e)}")

        # Handle region/language popup
        try:
            region_popup = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CLASS_NAME, 'province-selector-form-container-formelements-submit')))
            region_popup.click()
        except Exception as e:
            print(f"Error handling region/language popup: {str(e)}")

        # Find the input field with the specific class and id
        vin_input = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'recallsVIN')))

        # Set the VIN in the input field
        vin_input.send_keys(VIN)

        # Locate the form and submit it
        submit_button = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CLASS_NAME, 'op-cta')))
        submit_button.click()

        # Wait for the recalls section to load
        recalls_section = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CLASS_NAME, 'op-safety-recalls')))

        # Parse the HTML content
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        # recall_codes = soup.select('.op-safety-recalls__cell-value recall-number')
        recall_codes = soup.select('.op-safety-recalls__cell.recall-number')
        recall_titles = soup.select('.op-safety-recalls__accordion-content-heading')
        recall_descs = soup.select('.op-safety-recalls__accordion-content-description')

        if recall_codes:
            for i in range(len(recall_codes)):
                StolenArr.append([recall_codes[i].text.strip(), recall_titles[i].text.strip(), recall_descs[i].text.strip()])
        else:
            print("None")
            StolenArr.append("The car is not actively stolen.")

    except Exception as e:
        print(f"An error occurred: {str(e)}")

    finally:
        # Close the browser
        driver.quit()

    return StolenArr



