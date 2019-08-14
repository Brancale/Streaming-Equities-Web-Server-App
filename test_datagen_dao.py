import unittest
import datagen_dao
import requests

class test_dao(unittest.TestCase):
    def test_as_user(self):
        loginJSON = {"username":"user","password":"pass"}
        userObj = datagen_dao.as_user(loginJSON)
        assert userObj.username == "user", "Should return user"

    def test_as_pass(self):
        loginJSON = {"username":"user","password":"pass"}
        userObj = datagen_dao.as_user(loginJSON)
        assert userObj.password == "pass", "Should return pass"

    def test_auth(self):
        loginJSON = {"username":"user","password":"pass"}
        datagen_dao.login()
        response = requests.post("http://127.0.0.1:5000", json=loginJSON)
        assert response.status_code == 200


if __name__ == "__main__":
    unittest.main()
