class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None
        self.prev = None

class LRUCache:

    def __init__(self, capacity: int):
        self.hashMap = {}
        self.left = Node(0, 0)
        self.right = Node(0,0)
        self.capacity = capacity

        self.left.next = self.right
        self.right.prev = self.left

    def remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

        node.next = None
        node.prev = None
    
    def insert(self, node):
        self.right.prev.next = node
        node.prev = self.right.prev
        self.right.prev = node
        node.next = self.right

    def get(self, key: int) -> int:
        if key in self.hashMap:
            node = self.hashMap[key]
            self.remove(node)
            self.insert(node)
            return node.value
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        if key in self.hashMap:
            node = self.hashMap[key]
            node.value = value
            self.remove(node)
            self.insert(node)
        
        else:
            newNode = Node(key, value)
            self.insert(newNode)
            self.hashMap[key] = newNode

        if len(self.hashMap) > self.capacity:
            deleteNode = self.left.next
            del self.hashMap[deleteNode.key]
            self.remove(deleteNode)

# DOCUMENTATION