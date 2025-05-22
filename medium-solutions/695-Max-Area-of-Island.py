class Solution:
    def dfs(self, grid, row, col, rows, cols):
        if row < 0 or col < 0 or row >= rows or col >= cols or grid[row][col] == 0:
            return 0

        count = 1
        grid[row][col] = 0

        count += self.dfs(grid, row - 1, col, rows, cols)
        count += self.dfs(grid, row + 1, col, rows, cols)
        count += self.dfs(grid, row, col - 1, rows, cols)
        count += self.dfs(grid, row, col + 1, rows, cols)

        return count

    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        highest_island_size = 0

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 1:
                    island_size = self.dfs(grid, row, col, rows, cols)
                    highest_island_size = max(highest_island_size, island_size)

        return highest_island_size