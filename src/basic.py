def reverse_words_order_and_swap_cases(sentence):
    # Implement a function that takes a string consisting of words separated by single spaces and returns a string containing all those words but in the reverse order and such that all cases of letters in the original string are swapped, i.e. lowercase letters become uppercase and uppercase letters become lowercase.
    # Example: "aWESOME is cODING"  -> "Coding IS Awesome"
    return " ".join(sentence.split(" ")[::-1]).swapcase()

class Car:
    # The constructor for Car must take two arguments. The first of them is its maximum speed, and the second one is a string that denotes the units in which the speed is given: either "km/h" or "mph". The class must be implemented to return a string based on the arguments. For example, if car is an object of class Car with a maximum speed of 120, and the unit is "km/h", then printing car prints the following string: "Car with the maximum speed of 120 km/h", without quotes. If the maximum speed is 94 and the unit is "mph", then printing car prints in the following string: "Car with the maximum speed of 94 mph", without quotes.
    def __init__(self, speed, unitSpeed):
        self.speed = speed
        self.unitSpeed = unitSpeed
    def __new__(cls, speed, unitSpeed):
        return f"Car with the maximum speed of {speed} {unitSpeed}"

class Boat:
    # The constructor for Boat must take a single argument denoting its maximum speed in knots. The class must be implemented to return a string based on the argument. For example, if boat is an object of class Boat with a maximum speed of 82, then printing boat prints the following string: "Boat with the maximum speed of 82 knots", without quotes.
    def __init__(self, speed):
        self.speed = speed
    def __new__(cls, speed):
        return f"Boat with the maximum speed of {speed} knots"


class Multiset():
    # A multiset is the same as a set except that an element might occur more than once in a multiset. Implement a multiset data structure in Python. 
    def __init__(self):
        self.multiset = []

    def add(self, val):
        # adds one occurrence of val from the multiset, if any
        self.multiset.append(val)

    def remove(self, val):
        # removes one occurrence of val from the multiset, if any
        self.multiset.remove(val)

    def __contains__(self, val):
        # returns True when val is in the multiset, else returns False
        return val in self.multiset

    def __len__(self):
        # returns the number of elements in the multiset
        return len(self.multiset)

    def __repr__(self):
        return f"{self.multiset}"
