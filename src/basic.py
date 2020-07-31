def reverse_words_order_and_swap_cases(sentence):
    # Implement a function that takes a string consisting of words separated by single spaces and returns a string containing all those words but in the reverse order and such that all cases of letters in the original string are swapped, i.e. lowercase letters become uppercase and uppercase letters become lowercase.
    # Example: "aWESOME is cODING"  -> "Coding IS Awesome"
    return " ".join(sentence.split(" ")[::-1]).swapcase()
