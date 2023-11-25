from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

def HyundaiRecallFuncTest(VIN):
    return[['Recall Number\n R0153 (80CA08)', 'Product Improvement Campaign - Ksds Update', 'Issue: Hyundai Auto Canada is conducting a Product Improvement Campaign that provides an update to the engine control module to detect potential problems before an engine fails. An engine failure would cause a sudden loss of power with an inability to restart. Safety Risk: A sudden loss of engine power could increase the risk of an accident. Corrective Actions: The company will notify owners by mail. Owners will be instructed to take their vehicle to a dealer to update the software for the engine control module. Note: The Transport Canada Campaign number was changed to 2019-640.  Vehicles previously repaired under Transport Canada Campaign number 2019-130 do not require this software update.\n\nAdditional information at www.hyundaiengineinfo.ca'], ['Recall Number\n R0165 (01CC01)', 'Accessory Trailer Module Replacement', 'Issue: Certain vehicles may be equipped with an accessory trailer wiring harness kit that could fail. Over time, moisture could enter the control module and cause a short circuit. Note: This recall only affects Hyundai Genuine Accessory trailer wiring harness kits that were manufactured by third parties and sold in Canada. These kits may have been ordered at the time of a vehicle purchase, or purchased separately from a dealer as an aftermarket accessory. \n\nSafety Risk: A short circuit could create a fire risk. This risk remains even when the vehicle is parked. \n\nCorrective Actions: Hyundai will notify owners by mail and instruct you to inspect your vehicle to see if it has an affected trailer wiring harness installed. If it does, Hyundai will advise you to take your vehicle to a dealer to install a redesigned trailer wiring harness. Hyundai recommends that you should park your vehicle outdoors, and away from other vehicles or structures until the recall repairs have been completed.'], ['Recall Number\n R0208 (21D023)', 'Abs  Control Module', 'Issue:\nOn certain vehicles, the control module for the antilock brake system (ABS) could short circuit.\nNote: This recall does not affect vehicles equipped with smart cruise control (SCC).\n \nSafety Risk:\nA short circuit could create a fire risk.\n \nCorrective Actions:\nHyundai will notify owners by mail and instruct you to take your vehicle to a dealer to inspect the ABS module and replace it, if necessary. The dealer will also replace the ABS multi-fuse. Hyundai advises that you may continue to drive your vehicle, however recommends that you should park it outdoors and away from other vehicles or structures until the recall repairs have been completed.']]

def HyundaiRecallFunc(VIN):
    recallArr = []

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
                recallArr.append([recall_codes[i].text.strip(), recall_titles[i].text.strip(), recall_descs[i].text.strip()])
        else:
            print("No recalls section found.")

    except Exception as e:
        print(f"An error occurred: {str(e)}")

    finally:
        # Close the browser
        driver.quit()
    print(recallArr)
    return recallArr



