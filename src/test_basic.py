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
        car = basic.Car(151, "km/h")
        # self.assertEqual(car, "car 151 km/h")

if __name__ == '__main__':
    unittest.main()
