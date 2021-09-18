from random_word import RandomWords

r = RandomWords()
def random_sentence():
    a = r.get_random_word(includePartOfSpeech="adjective", excludePartOfSpeech="noun")
    while (not a) :
        a = r.get_random_word(includePartOfSpeech="adjective", excludePartOfSpeech="noun")
    b = r.get_random_word(excludePartOfSpeech="adjective,adverb,verb")
    while (not b) :
        b = r.get_random_word(excludePartOfSpeech="adjective,adverb,verb")
    c = r.get_random_word(excludePartOfSpeech="adjective,noun,verb")
    while (not c) :
        c = r.get_random_word(excludePartOfSpeech="adjective,noun,verb")
    d = r.get_random_word(excludePartOfSpeech="adjective,noun,adverb")
    while (not d) :
        d = r.get_random_word(excludePartOfSpeech="adjective,noun,adverb")
    e = r.get_random_word(includePartOfSpeech="adjective")
    while (not e) :
        e = r.get_random_word(includePartOfSpeech="adjective")
    f = r.get_random_word(excludePartOfSpeech="adjective,adverb,verb")
    while (not f) :
        f = r.get_random_word(excludePartOfSpeech="adjective,adverb,verb")
    print("The", a, b, c, d,"the", e, f)

random_sentence()