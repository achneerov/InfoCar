import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

def open_recalls_arr(VIN, make, province="ON"):
    make = make.lower()

    if make == "hyundai":
        # URL of the website
        url = "https://www.hyundaicanada.com/en/owners-section/recalls"

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
                region_popup = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'your_region_popup_id_here')))
                region_popup.click()
            except Exception as e:
                print(f"Error handling region/language popup: {str(e)}")

            # Find the input field with the specific class and id
            target_input_field = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CSS_SELECTOR, '.op-recalls__vin-input#recallsVIN')))

            # Set the VIN in the input field
            target_input_field.send_keys(VIN)

            # Submit the form
            target_input_field.submit()

            # Wait for 15 seconds after the form submission (you may need to adjust the sleep duration)
            time.sleep(15)

            # Choose a language and province
            language_radio = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'input-english')))
            language_radio.click()

            province_select = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'formelement-select-provice')))
            province_select.send_keys(province)

            # Click the "Submit" button
            submit_button = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.XPATH, '//form[@id="proviceSelectorForm"]//button[@type="submit"]')))
            submit_button.click()

            # Wait for 15 seconds after clicking the submit button (you may need to adjust the sleep duration)
            time.sleep(15)

            # Get the updated page source after form submission
            updated_page_source = driver.page_source

            # Parse the updated HTML content
            soup = BeautifulSoup(updated_page_source, 'html.parser')

            # Print the entire HTML content of the page
            print(soup.prettify())

        except Exception as e:
            print(f"An error occurred: {str(e)}")

        finally:
            # Close the browser
            driver.quit()

    return ["Unknown Vehicle"]

# Example usage:
# VIN and make parameters are not used in the provided code, you might want to incorporate them as needed.
open_recalls_arr("5XYZUDLB1HG476246", "hyundai")
