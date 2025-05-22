class Solution:
    def dfs(self, grid, row, col, LEN_ROWS, LEN_COLS):
        if row < 0 or col < 0 or row >= LEN_ROWS or col >= LEN_COLS:
            return
        
        if grid[row][col] == "1":
            grid[row][col] = "0"
            self.dfs(grid, row - 1, col, LEN_ROWS, LEN_COLS)
            self.dfs(grid, row + 1, col, LEN_ROWS, LEN_COLS)
            self.dfs(grid, row, col - 1, LEN_ROWS, LEN_COLS)
            self.dfs(grid, row, col + 1, LEN_ROWS, LEN_COLS)

    def numIslands(self, grid: List[List[str]]) -> int:
        LEN_ROWS = len(grid)
        LEN_COLS = len(grid[0])
        count = 0
        for row in range(LEN_ROWS):
            for col in range(LEN_COLS):
                if grid[row][col] == "1":
                    self.dfs(grid, row, col, LEN_ROWS, LEN_COLS)
                    count += 1

        return count