import unittest
import datagen_dao
import requests

class test_dao(unittest.TestCase):
    def test_as_user(self):
        loginJSON = {"username":"user","password":"pass"}
        userObj = datagen_dao.as_user(loginJSON)
        assert userObj.username == "user", "Should return user"

    def test_as_user(self):
        loginJSON = {"username":"user","password":"pass"}
        userObj = datagen_dao.as_user(loginJSON)
        assert userObj.username == "pass", "Should return pass"

    def test_auth(self):
        loginJSON = {"username":"user","password":"pass"}
        datagen_dao.login()
        response = requests.post("http://127.0.0.1:5001", json=loginJSON)
        assert response == "200"


if __name__ == "__main__":
    unittest.main()