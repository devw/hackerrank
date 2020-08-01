import basic
import unittest

class TestReverseWords(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        pass

    @classmethod
    def tearDownClass(cls):
        pass

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_reverse_words_order_and_swap_cases(self):
        self.assertEqual(basic.reverse_words_order_and_swap_cases("fUn"), "FuN")
        self.assertEqual(basic.reverse_words_order_and_swap_cases("rUns dOg"), "DoG RuNS")
        self.assertEqual(basic.reverse_words_order_and_swap_cases("aWESOME is cODING"), "Coding IS Awesome")
    
    def test_car_object(self):
        self.assertEqual(basic.Car(251, "km/h"), "Car with the maximum speed of 251 km/h")
    
    def test_boat_object(self):
        self.assertEqual(basic.Boat(101), "Boat with the maximum speed of 101 knots")

if __name__ == '__main__':
    unittest.main()
