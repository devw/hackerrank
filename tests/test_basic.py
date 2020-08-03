from src import basic
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
    
    def test_car_class(self):
        self.assertEqual(basic.Car(251, "km/h"), "Car with the maximum speed of 251 km/h")
    
    def test_boat_class(self):
        self.assertEqual(basic.Boat(101), "Boat with the maximum speed of 101 knots")

    def test_multiset_class(self):
        def performOperations(operations):
            m = basic.Multiset()
            result = []
            for op_str in operations:
                elems = op_str.split()
                if elems[0] == 'size':
                    result.append(len(m))
                else:
                    op, val = elems[0], int(elems[1])
                    if op == 'query':
                        result.append(val in m)
                    elif op == 'add':
                        m.add(val)
                    elif op == 'remove':
                        m.remove(val)
            return result
        res = performOperations(['query 1', 'add 1', 'query 1', 'remove 1','query 1', 'add 2', 'add 2', 'size', 'query 2', 'remove 2', 'query 2', 'size'])
        self.assertEqual(res, [False, True, False, 2, True, True, 1]) 
