from collections import deque

class Solution:
    def shortestPathBinaryMatrix(self, grid):
        if grid[0][0] == 1: return -1

        N = len(grid)
        queue = deque()
        visited = set()
        queue.append((0, 0))
        visited.add((0, 0))

        length = 1

        while queue:
            for i in range(len(queue)):
                row, col = queue.popleft()
                if row == N - 1 and col == N - 1:
                    return length

                directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]
                for dr, dc in directions:
                    if row + dr < 0 or col + dc < 0 or row + dr >= N or col + dc >= N or grid[row + dr][col + dc] == 1 or (row + dr, col + dc) in visited:
                        continue

                    queue.append((row + dr, col + dc))
                    visited.add((row + dr, col + dc))

            length += 1

        
        return -1

# DESCRIPTION
"""
In this problem we are given a 2D grid. We are tasked with finding the shortest path from (0, 0) to (n - 1, n - 1). A valid path is denoted by a 0 and a blocked path is denoted with a 1
In the problem it states shortest path so we can use BFS. This will search layer by layer. We will continue to search layer by layer until we reach the end point. Then we will return the
total number of layers. This works because the firstttt instance of the last node is considered the shortest path since it is the first layer to hit the last node.
"""

# NEETCODES Solution
class Solution:
    def shortestPathBinaryMatrix(self, grid):
        N = len(grid)
        q = deque([(0, 0, 1)]) #r, c, length
        visit = set((0, 0))
        direct = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]
        while q:
            r, c, length = q.popleft()
            if (min(r, c) < 0 or max(r, c) >= N or grid[r][c]) == 1:
                continue
            if r == N - 1 and c == N - 1:
                return length
            for dr, dc in direct:
                if (r + dr, c + dc) not in visit:
                    q.append((r + dr, c + dc, length + 1))
                    visit.add((r + dr, c + dc))

        return -1
    
# Difference Analysis
"""
One main difference is that in my solution I am only adding to the queue if the next element is a valid path.
 In the neetcode solution he adds all the next valid paths regardless if its valid or not. The only thing he is checking is that if its been in visited yet.
 So i'm wondering which solution is more efficient. I think it depends on the q.append execution. 

 He doesnt use a for loop.
 I primarily use the for loop to keep track of when to increase length. However he doesnt use a for loop and instead keeps the length with the row, col state. This eliminates the need for the extra for loop. 
 With the properties of the queue we are already performing the for loop anyways. We do use a for loop to loop through the directions. 
"""
