import basic
import unittest

class TestReverseWords(unittest.TestCase):
    def test_reverse_words_order_and_swap_cases(self):
        self.assertEqual(basic.reverse_words_order_and_swap_cases("fUn"), "FuN")
        self.assertEqual(basic.reverse_words_order_and_swap_cases("rUns dOg"), "DoG RuNS")
        self.assertEqual(basic.reverse_words_order_and_swap_cases("aWESOME is cODING"), "Coding IS Awesome")

if __name__ == '__main__':
    unittest.main()
