import string
from enum import Enum

class Priority(Enum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3

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
        assert type(priority) == Priority
        self.priority = priority
    
