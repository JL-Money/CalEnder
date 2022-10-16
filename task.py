import string


class Task:
    def __init__(self):
        pass
    def set_name(self, name):
        assert type(name) == string
        self.name = name
    def set_time(self, start, end):
        self.start = start
        self.end = end
    def set_priority(self, priority):
        assert priority >= 1 and priority <= 5
        assert type(priority) == int
        self.priority = priority
    
