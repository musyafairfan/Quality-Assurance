import unittest
import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

class TestLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())

    def test_a_success_login(self):
        driver = self.driver
        driver.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(1)
        driver.find_element(By.ID, "email").send_keys("musyafairfan1000@gmail.com")
        time.sleep(3)
        driver.find_element(By.ID, "password").send_keys("sukses123")
        time.sleep(3)
        driver.find_element(By.XPATH, "/html/body/div/div[2]/form/input[3]").click()
        time.sleep(2)
        respon_welcome = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[1]/h2").text
        respon_berhasil = driver.find_element(By.XPATH,'/html/body/div[2]/div/div[2]/div[1]').text
        self.assertEqual(respon_welcome, "Welcome Musyafa' Irfan")
        self.assertEqual(respon_berhasil, "Anda Berhasil Login")

    def test_b_failed_login_email_not_registered(self):
        driver = self.driver
        driver.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(1)
        driver.find_element(By.ID, "email").send_keys("wjwkj@gmail.com")
        time.sleep(3)
        driver.find_element(By.ID, "password").send_keys("12345678")
        time.sleep(3)
        driver.find_element(By.XPATH, "/html/body/div/div[2]/form/input[3]").click()
        time.sleep(2)
        respon_berhasil = driver.find_element(By.XPATH,'/html/body/div[2]/div/div[2]/div[1]').text
        self.assertEqual(respon_berhasil, 'Email atau Password Anda Salah')
    
    def test_c_failed_login_invalid_password(self):
        driver = self.driver
        driver.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(1)
        driver.find_element(By.ID, "email").send_keys("musyafairfan1000@gmail.com")
        time.sleep(3)
        driver.find_element(By.ID, "password").send_keys("")
        time.sleep(3)
        driver.find_element(By.XPATH, "/html/body/div/div[2]/form/input[3]").click()
        time.sleep(2)
        respon_berhasil = driver.find_element(By.XPATH,'/html/body/div[2]/div/div[2]/div[1]').text
        self.assertEqual(respon_berhasil, "Email atau Password Anda Salah")
    
    def test_d_failed_login_invalid_email(self):
        driver = self.driver
        driver.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(1)
        driver.find_element(By.ID, "email").send_keys("")
        time.sleep(3)
        driver.find_element(By.ID, "password").send_keys("sukses123")
        time.sleep(3)
        driver.find_element(By.XPATH, "/html/body/div/div[2]/form/input[3]").click()
        time.sleep(2)
        respon_berhasil = driver.find_element(By.XPATH,'/html/body/div[2]/div/div[2]/div[1]').text
        self.assertEqual(respon_berhasil, "Cek kembali email anda")
    
    def test_e_failed_login_invalid_email_and_password(self):
        driver = self.driver
        driver.get("http://barru.pythonanywhere.com/daftar")
        time.sleep(1)
        driver.find_element(By.ID, "email").send_keys("")
        time.sleep(3)
        driver.find_element(By.ID, "password").send_keys("")
        time.sleep(3)
        driver.find_element(By.XPATH, "/html/body/div/div[2]/form/input[3]").click()
        time.sleep(2)
        respon_berhasil = driver.find_element(By.XPATH,'/html/body/div[2]/div/div[2]/div[1]').text
        self.assertEqual(respon_berhasil, "Cek kembali email anda")
   
    def tearDown(self):
        self.driver.close()
        
if __name__ == "__main__":
 unittest.main()