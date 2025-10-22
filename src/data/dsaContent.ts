export interface DSAContent {
  title: string;
  sections: DSASection[];
}

export interface DSASection {
  title: string;
  content: DSATopic[];
}

export interface DSATopic {
  topic: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  code: string;
  problems: string[];
  keyPoints?: string[];
}

export const DSA_CONTENT_DATA: Record<string, DSAContent> = {
  'DSA sheet.pdf': {
    title: 'Complete DSA Reference Sheet - Structured, Comprehensive, Results-Driven',
    sections: [
      {
        title: '01 ARRAYS',
        content: [
          {
            topic: '1-D Array Problems',
            description: 'Essential 1D array problems covering basic operations',
            timeComplexity: 'O(n) for most operations',
            spaceComplexity: 'O(1) to O(n)',
            keyPoints: [
              'Master array traversal patterns',
              'Handle edge cases like empty arrays',
              'Understand in-place vs extra space solutions'
            ],
            code: `def two_sum(nums, target):
    """Find two numbers that add up to target"""
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []

def maximum_wealth(accounts):
    """Find richest customer wealth"""
    return max(sum(account) for account in accounts)

def next_permutation(nums):
    """Find next lexicographically greater permutation"""
    i = len(nums) - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    if i >= 0:
        j = len(nums) - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    nums[i + 1:] = reversed(nums[i + 1:])`,
            problems: [
              'Richest Customer Wealth',
              'Two Sum', 
              'Count Negative Numbers in Sorted Matrix',
              'Next Permutation',
              'Median of Two Sorted Arrays',
              'Find Greatest Common Divisor of Array',
              'Self Dividing Numbers',
              'Inversion of Array',
              'Reverse Pairs'
            ]
          },
          {
            topic: '2-D Array Problems',
            description: 'Matrix operations and 2D array manipulations',
            timeComplexity: 'O(m*n) for matrix operations',
            spaceComplexity: 'O(1) to O(m*n)',
            keyPoints: [
              'Understand row-major vs column-major traversal',
              'Master matrix rotation and transposition',
              'Practice spiral and zigzag patterns'
            ],
            code: `def spiral_order(matrix):
    """Return matrix elements in spiral order"""
    if not matrix:
        return []
    
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        for col in range(left, right + 1):
            result.append(matrix[top][col])
        top += 1
        
        for row in range(top, bottom + 1):
            result.append(matrix[row][right])
        right -= 1
        
        if top <= bottom:
            for col in range(right, left - 1, -1):
                result.append(matrix[bottom][col])
            bottom -= 1
        
        if left <= right:
            for row in range(bottom, top - 1, -1):
                result.append(matrix[row][left])
            left += 1
    
    return result

def transpose(matrix):
    """Transpose matrix"""
    return [[matrix[j][i] for j in range(len(matrix))] 
            for i in range(len(matrix[0]))]`,
            problems: [
              'Special Positions in Binary Matrix',
              'Transpose Matrix',
              '01 Matrix',
              'Spiral Matrix',
              'Pascal\'s Triangle'
            ]
          },
          {
            topic: 'Prefix Sum',
            description: 'Efficient range sum queries using prefix sums',
            timeComplexity: 'O(n) preprocessing, O(1) query',
            spaceComplexity: 'O(n)',
            keyPoints: [
              'Build prefix array for O(1) range queries',
              'Useful for subarray sum problems',
              'Can extend to 2D prefix sums'
            ],
            code: `def running_sum(nums):
    """Calculate running sum of array"""
    for i in range(1, len(nums)):
        nums[i] += nums[i - 1]
    return nums

class NumMatrix:
    """2D Range Sum Query"""
    def __init__(self, matrix):
        if not matrix or not matrix[0]:
            return
        m, n = len(matrix), len(matrix[0])
        self.prefix = [[0] * (n + 1) for _ in range(m + 1)]
        
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                self.prefix[i][j] = (matrix[i-1][j-1] + 
                                   self.prefix[i-1][j] + 
                                   self.prefix[i][j-1] - 
                                   self.prefix[i-1][j-1])`,
            problems: [
              'Minimum Size Subarray Sum',
              'Running Sum of 1d Array',
              'Range Sum Query 2D Immutable'
            ]
          },
          {
            topic: 'Kadane\'s Algorithm',
            description: 'Maximum subarray sum using dynamic programming',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            keyPoints: [
              'Track maximum sum ending at current position',
              'Reset when sum becomes negative',
              'Handle all negative numbers case'
            ],
            code: `def max_subarray(nums):
    """Maximum subarray sum (Kadane's Algorithm)"""
    max_sum = nums[0]
    current_sum = nums[0]
    
    for i in range(1, len(nums)):
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum

def max_subarray_circular(nums):
    """Maximum sum circular subarray"""
    def kadane(arr):
        max_sum = current_sum = arr[0]
        for i in range(1, len(arr)):
            current_sum = max(arr[i], current_sum + arr[i])
            max_sum = max(max_sum, current_sum)
        return max_sum
    
    max_kadane = kadane(nums)
    total_sum = sum(nums)
    max_circular = total_sum + kadane([-x for x in nums])
    
    return max_kadane if max_circular == 0 else max(max_kadane, max_circular)`,
            problems: [
              'Maximum Subarray',
              'Maximum Sum Circular Subarray',
              'Longest Turbulent Subarray'
            ]
          },
          {
            topic: 'Sliding Window',
            description: 'Fixed and variable size sliding window problems',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(k)',
            keyPoints: [
              'Fixed window: maintain constant size',
              'Variable window: expand/contract based on condition',
              'Use hash map for frequency counting'
            ],
            code: `def length_of_longest_substring(s):
    """Longest substring without repeating characters"""
    char_set = set()
    left = max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length

def min_subarray_len(target, nums):
    """Minimum size subarray sum"""
    left = 0
    min_len = float('inf')
    current_sum = 0
    
    for right in range(len(nums)):
        current_sum += nums[right]
        while current_sum >= target:
            min_len = min(min_len, right - left + 1)
            current_sum -= nums[left]
            left += 1
    
    return min_len if min_len != float('inf') else 0`,
            problems: [
              'Contains Duplicate II',
              'Number of Sub-arrays of Size K and Average Greater than Threshold',
              'Minimum Size Subarray Sum',
              'Longest Substring Without Repeating Characters',
              'Longest Repeating Character Replacement'
            ]
          },
          {
            topic: 'Two Pointers',
            description: 'Efficient array traversal using two pointers',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            keyPoints: [
              'Opposite direction: start from ends',
              'Same direction: both from beginning',
              'Great for sorted arrays'
            ],
            code: `def container_with_most_water(height):
    """Container with most water"""
    left, right = 0, len(height) - 1
    max_area = 0
    
    while left < right:
        width = right - left
        area = min(height[left], height[right]) * width
        max_area = max(max_area, area)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_area

def trap_rain_water(height):
    """Trapping rain water"""
    if not height:
        return 0
    
    left, right = 0, len(height) - 1
    left_max = right_max = water = 0
    
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    
    return water`,
            problems: [
              'Container With Most Water',
              'Trapping Rain Water',
              'Two Sum II - Input Array Is Sorted',
              'K-diff Pairs in an Array',
              'Find K Closest Elements'
            ]
          }
        ]
      },
      {
        title: '02 Binary Search',
        content: [
          {
            topic: 'Binary Search Fundamentals',
            description: 'Efficient searching in sorted arrays',
            timeComplexity: 'O(log n)',
            spaceComplexity: 'O(1)',
            keyPoints: [
              'Array must be sorted',
              'Divide search space in half',
              'Handle edge cases carefully'
            ],
            code: `def search_rotated_array(nums, target):
    """Search in rotated sorted array"""
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1

def search_range(nums, target):
    """Find first and last position"""
    def find_bound(nums, target, is_first):
        left, right = 0, len(nums) - 1
        result = -1
        
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                result = mid
                if is_first:
                    right = mid - 1
                else:
                    left = mid + 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return result
    
    return [find_bound(nums, target, True), find_bound(nums, target, False)]`,
            problems: [
              'Search in Rotated Sorted Array',
              'Remove Duplicates from Sorted Array',
              'Find First and Last Position of Element in Sorted Array',
              'Search a 2D Matrix',
              'Find Peak Element',
              'Single Element in a Sorted Array',
              'Preimage Size of Factorial Zeroes Function'
            ]
          }
        ]
      },
      {
        title: '03 Sorting',
        content: [
          {
            topic: 'Sorting Algorithms & Applications',
            description: 'Various sorting techniques and their real-world applications',
            timeComplexity: 'O(n log n) for efficient algorithms',
            spaceComplexity: 'O(1) to O(n)',
            keyPoints: [
              'Quick Sort: average O(n log n), worst O(n²)',
              'Merge Sort: stable, guaranteed O(n log n)',
              'Heap Sort: in-place, O(n log n)'
            ],
            code: `def sort_colors(nums):
    """Sort colors (Dutch National Flag)"""
    red, white, blue = 0, 0, len(nums) - 1
    
    while white <= blue:
        if nums[white] == 0:
            nums[red], nums[white] = nums[white], nums[red]
            red += 1
            white += 1
        elif nums[white] == 1:
            white += 1
        else:
            nums[white], nums[blue] = nums[blue], nums[white]
            blue -= 1

def find_kth_largest(nums, k):
    """Find kth largest using quickselect"""
    import random
    
    def partition(left, right):
        pivot_idx = random.randint(left, right)
        nums[pivot_idx], nums[right] = nums[right], nums[pivot_idx]
        
        i = left
        for j in range(left, right):
            if nums[j] <= nums[right]:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        nums[i], nums[right] = nums[right], nums[i]
        return i
    
    def quickselect(left, right, k):
        if left == right:
            return nums[left]
        
        pivot_idx = partition(left, right)
        if k == pivot_idx:
            return nums[k]
        elif k < pivot_idx:
            return quickselect(left, pivot_idx - 1, k)
        else:
            return quickselect(pivot_idx + 1, right, k)
    
    return quickselect(0, len(nums) - 1, len(nums) - k)`,
            problems: [
              'Check if Two Arrays Are Equal or Not',
              'Binary Array Sorting',
              'Sort Colors',
              'Kth Largest Element in an Array',
              'Minimum Absolute Difference',
              'K Closest Points to Origin',
              'Max Chunks To Make Sorted'
            ]
          }
        ]
      },
      {
        title: '04 Hashing',
        content: [
          {
            topic: 'Hash Map & Hash Set Applications',
            description: 'Efficient lookups, counting, and duplicate detection',
            timeComplexity: 'O(1) average for hash operations',
            spaceComplexity: 'O(n)',
            keyPoints: [
              'Hash maps for key-value storage',
              'Hash sets for membership testing',
              'Handle hash collisions'
            ],
            code: `def subarray_sum_k(nums, k):
    """Subarray sum equals k"""
    count = 0
    prefix_sum = 0
    sum_count = {0: 1}
    
    for num in nums:
        prefix_sum += num
        if prefix_sum - k in sum_count:
            count += sum_count[prefix_sum - k]
        sum_count[prefix_sum] = sum_count.get(prefix_sum, 0) + 1
    
    return count

def longest_consecutive(nums):
    """Longest consecutive sequence"""
    num_set = set(nums)
    longest = 0
    
    for num in num_set:
        if num - 1 not in num_set:
            current_num = num
            current_length = 1
            
            while current_num + 1 in num_set:
                current_num += 1
                current_length += 1
            
            longest = max(longest, current_length)
    
    return longest

def is_anagram(s, t):
    """Valid anagram check"""
    if len(s) != len(t):
        return False
    
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    for char in t:
        if char not in char_count:
            return False
        char_count[char] -= 1
        if char_count[char] == 0:
            del char_count[char]
    
    return len(char_count) == 0`,
            problems: [
              'Contiguous Array',
              'Longest Consecutive Sequence',
              'Subarray Sum Equals K',
              'Valid Anagram',
              'Valid Sudoku',
              'Ugly Number II',
              'Max Points on a Line',
              'Palindrome Pairs'
            ]
          }
        ]
      },
      {
        title: '05 Linked Lists',
        content: [
          {
            topic: 'Linked List Fundamentals',
            description: 'Basic linked list operations and manipulations',
            timeComplexity: 'O(n) for traversal',
            spaceComplexity: 'O(1) for most operations',
            keyPoints: [
              'Understand pointer manipulation',
              'Handle edge cases: empty list, single node',
              'Use dummy nodes for simplification'
            ],
            code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    """Reverse linked list"""
    prev = None
    current = head
    
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    
    return prev

def merge_two_lists(list1, list2):
    """Merge two sorted lists"""
    dummy = ListNode(0)
    current = dummy
    
    while list1 and list2:
        if list1.val <= list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next
    
    current.next = list1 or list2
    return dummy.next

def has_cycle(head):
    """Detect cycle using Floyd's algorithm"""
    if not head or not head.next:
        return False
    
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    
    return False`,
            problems: [
              'Middle of the Linked List',
              'Maximum Twin Sum of a Linked List',
              'Merge Two Sorted Lists',
              'Linked List Cycle',
              'Reverse Nodes in k Group',
              'Remove Nth Node From End of List',
              'Linked List Cycle II',
              'Delete Node in a Linked List',
              'Reverse Linked List',
              'Palindrome Linked List',
              'Remove Linked List Elements',
              'Convert Binary Number in a Linked List to Integer',
              'Remove Duplicates from Sorted List II',
              'Reverse Linked List II',
              'Sort List'
            ]
          }
        ]
      },
      {
        title: '06 Stack and Queue',
        content: [
          {
            topic: 'Stack & Queue Operations',
            description: 'LIFO and FIFO data structures and their applications',
            timeComplexity: 'O(1) for push/pop operations',
            spaceComplexity: 'O(n)',
            keyPoints: [
              'Stack: Last In First Out (LIFO)',
              'Queue: First In First Out (FIFO)',
              'Great for parsing and expression evaluation'
            ],
            code: `def is_valid_parentheses(s):
    """Valid parentheses"""
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return not stack

def daily_temperatures(temperatures):
    """Daily temperatures"""
    result = [0] * len(temperatures)
    stack = []
    
    for i, temp in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temp:
            prev_index = stack.pop()
            result[prev_index] = i - prev_index
        stack.append(i)
    
    return result

class MinStack:
    """Min stack with O(1) operations"""
    def __init__(self):
        self.stack = []
        self.min_stack = []
    
    def push(self, val):
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    
    def pop(self):
        if self.stack:
            val = self.stack.pop()
            if val == self.min_stack[-1]:
                self.min_stack.pop()
    
    def getMin(self):
        return self.min_stack[-1] if self.min_stack else None`,
            problems: [
              'Implement Stack using Queues',
              'Implement Queue using Stacks',
              'Backspace String Compare',
              'Baseball Game',
              'Longest Valid Parentheses',
              'Evaluate Reverse Polish Notation',
              'Daily Temperatures',
              'Largest Rectangle in Histogram',
              'Min Stack',
              'Minimum Remove to Make Valid Parentheses'
            ]
          }
        ]
      },
      {
        title: '07 Heap',
        content: [
          {
            topic: 'Heap Data Structure',
            description: 'Priority queue implementation for efficient min/max operations',
            timeComplexity: 'O(log n) for insert/delete, O(1) for peek',
            spaceComplexity: 'O(n)',
            keyPoints: [
              'Complete binary tree property',
              'Min-heap: parent ≤ children, Max-heap: parent ≥ children',
              'Efficient for finding kth largest/smallest elements'
            ],
            code: `import heapq

def find_median_data_stream():
    """Find median from data stream using two heaps"""
    def __init__(self):
        self.max_heap = []  # For smaller half (negated for max behavior)
        self.min_heap = []  # For larger half
    
    def add_number(self, num):
        if not self.max_heap or num <= -self.max_heap[0]:
            heapq.heappush(self.max_heap, -num)
        else:
            heapq.heappush(self.min_heap, num)
        
        # Balance heaps
        if len(self.max_heap) > len(self.min_heap) + 1:
            heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
        elif len(self.min_heap) > len(self.max_heap) + 1:
            heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))
    
    def find_median(self):
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0] + self.min_heap[0]) / 2.0
        elif len(self.max_heap) > len(self.min_heap):
            return -self.max_heap[0]
        else:
            return self.min_heap[0]

def merge_k_sorted_lists(lists):
    """Merge k sorted linked lists using heap"""
    heap = []
    
    # Add first node of each list to heap
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst.val, i, lst))
    
    dummy = ListNode(0)
    current = dummy
    
    while heap:
        val, i, node = heapq.heappop(heap)
        current.next = node
        current = current.next
        
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    
    return dummy.next`,
            problems: [
              'Find Median from Data Stream',
              'Merge k Sorted Lists',
              'Find K Pairs with Smallest Sums',
              'Meeting Rooms II',
              'Top K Frequent Elements',
              'K Closest Points to Origin'
            ]
          }
        ]
      },
      {
        title: '08 Recursion & Backtracking',
        content: [
          {
            topic: 'Recursion Fundamentals',
            description: 'Solve problems by breaking them into smaller subproblems',
            timeComplexity: 'Varies by problem',
            spaceComplexity: 'O(depth) for recursion stack',
            keyPoints: [
              'Base case to stop recursion',
              'Recursive case that reduces problem size',
              'Stack space consideration'
            ],
            code: `def count_good_numbers(n):
    """Count good numbers using recursion"""
    MOD = 10**9 + 7
    
    def power(base, exp):
        if exp == 0:
            return 1
        if exp % 2 == 0:
            half = power(base, exp // 2)
            return (half * half) % MOD
        else:
            return (base * power(base, exp - 1)) % MOD
    
    # Even positions: 5 choices (0,2,4,6,8)
    # Odd positions: 4 choices (2,3,5,7)
    even_positions = (n + 1) // 2
    odd_positions = n // 2
    
    return (power(5, even_positions) * power(4, odd_positions)) % MOD

def generate_permutations(nums):
    """Generate all permutations"""
    result = []
    
    def backtrack(current_perm):
        if len(current_perm) == len(nums):
            result.append(current_perm[:])
            return
        
        for num in nums:
            if num not in current_perm:
                current_perm.append(num)
                backtrack(current_perm)
                current_perm.pop()
    
    backtrack([])
    return result`,
            problems: [
              'Count Good Numbers',
              'Permutations',
              'Permutations II',
              'Subsets',
              'Basic Calculator',
              'Wildcard Matching'
            ]
          },
          {
            topic: 'Backtracking Patterns',
            description: 'Systematic way to explore all possible solutions',
            timeComplexity: 'Exponential in most cases',
            spaceComplexity: 'O(depth)',
            keyPoints: [
              'Choose, explore, unchoose pattern',
              'Pruning to avoid unnecessary exploration',
              'State restoration after recursive calls'
            ],
            code: `def combination_sum(candidates, target):
    """Find combinations that sum to target"""
    result = []
    
    def backtrack(start, current_combination, remaining):
        if remaining == 0:
            result.append(current_combination[:])
            return
        
        for i in range(start, len(candidates)):
            if candidates[i] <= remaining:
                current_combination.append(candidates[i])
                backtrack(i, current_combination, remaining - candidates[i])
                current_combination.pop()
    
    backtrack(0, [], target)
    return result

def solve_n_queens(n):
    """Solve N-Queens problem"""
    result = []
    board = ['.' * n for _ in range(n)]
    
    def is_safe(row, col):
        # Check column
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        
        # Check diagonals
        for i, j in zip(range(row-1, -1, -1), range(col-1, -1, -1)):
            if board[i][j] == 'Q':
                return False
        
        for i, j in zip(range(row-1, -1, -1), range(col+1, n)):
            if board[i][j] == 'Q':
                return False
        
        return True
    
    def backtrack(row):
        if row == n:
            result.append(board[:])
            return
        
        for col in range(n):
            if is_safe(row, col):
                board[row] = board[row][:col] + 'Q' + board[row][col+1:]
                backtrack(row + 1)
                board[row] = board[row][:col] + '.' + board[row][col+1:]
    
    backtrack(0)
    return result`,
            problems: [
              'Combinations',
              'Combination Sum',
              'Combination Sum III',
              'Letter Combinations of a Phone Number',
              'Gray Code',
              'Letter Case Permutation',
              'N-Queens',
              'Sudoku Solver'
            ]
          }
        ]
      },
      {
        title: '09 Trees',
        content: [
          {
            topic: 'Binary Tree Operations',
            description: 'Fundamental tree operations and traversals',
            timeComplexity: 'O(n) for traversals',
            spaceComplexity: 'O(h) where h is height',
            keyPoints: [
              'Recursive nature of tree problems',
              'Different traversal orders serve different purposes',
              'Height vs depth considerations'
            ],
            code: `def build_tree_inorder_postorder(inorder, postorder):
    """Construct tree from inorder and postorder traversal"""
    if not inorder or not postorder:
        return None
    
    root = TreeNode(postorder.pop())
    inorder_index = inorder.index(root.val)
    
    # Build right subtree first (postorder: left, right, root)
    root.right = build_tree_inorder_postorder(inorder[inorder_index + 1:], postorder)
    root.left = build_tree_inorder_postorder(inorder[:inorder_index], postorder)
    
    return root

def has_path_sum(root, target_sum):
    """Check if tree has path with given sum"""
    if not root:
        return False
    
    if not root.left and not root.right:
        return root.val == target_sum
    
    return (has_path_sum(root.left, target_sum - root.val) or
            has_path_sum(root.right, target_sum - root.val))

def level_order_traversal(root):
    """Level order traversal using BFS"""
    if not root:
        return []
    
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.pop(0)
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result`,
            problems: [
              'Construct Binary Tree from Inorder and Postorder Traversal',
              'Construct Binary Tree from Preorder and Inorder Traversal',
              'Path Sum',
              'Same Tree',
              'Binary Tree Level Order Traversal',
              'Invert Binary Tree',
              'Minimum Cost Tree From Leaf Values',
              'Binary Tree Zigzag Level Order Traversal',
              'Maximum Depth of Binary Tree',
              'Sum of Left Leaves',
              'Binary Tree Right Side View',
              'Path Sum II',
              'Path Sum III'
            ]
          },
          {
            topic: 'Binary Search Tree',
            description: 'Specialized binary tree with ordering property',
            timeComplexity: 'O(log n) average, O(n) worst case',
            spaceComplexity: 'O(log n) average, O(n) worst case',
            keyPoints: [
              'Left subtree < root < right subtree',
              'Inorder traversal gives sorted sequence',
              'Self-balancing variants maintain O(log n) operations'
            ],
            code: `def lowest_common_ancestor_bst(root, p, q):
    """Find LCA in BST"""
    if not root:
        return None
    
    if p.val < root.val and q.val < root.val:
        return lowest_common_ancestor_bst(root.left, p, q)
    elif p.val > root.val and q.val > root.val:
        return lowest_common_ancestor_bst(root.right, p, q)
    else:
        return root

def closest_bst_value(root, target):
    """Find closest value in BST"""
    closest = root.val
    
    while root:
        if abs(root.val - target) < abs(closest - target):
            closest = root.val
        
        if target < root.val:
            root = root.left
        else:
            root = root.right
    
    return closest

def trim_bst(root, low, high):
    """Trim BST to given range"""
    if not root:
        return None
    
    if root.val < low:
        return trim_bst(root.right, low, high)
    elif root.val > high:
        return trim_bst(root.left, low, high)
    else:
        root.left = trim_bst(root.left, low, high)
        root.right = trim_bst(root.right, low, high)
        return root`,
            problems: [
              'Lowest Common Ancestor of a Binary Search Tree',
              'Closest Binary Search Tree Value II',
              'Trim a Binary Search Tree',
              'Search in a Binary Search Tree'
            ]
          }
        ]
      },
      {
        title: '10 Graphs',
        content: [
          {
            topic: 'Graph Traversal (BFS & DFS)',
            description: 'Fundamental graph traversal algorithms',
            timeComplexity: 'O(V + E)',
            spaceComplexity: 'O(V)',
            keyPoints: [
              'BFS uses queue, DFS uses stack/recursion',
              'BFS finds shortest path in unweighted graphs',
              'DFS useful for detecting cycles and topological sorting'
            ],
            code: `def rotting_oranges(grid):
    """BFS to find time for all oranges to rot"""
    from collections import deque
    
    rows, cols = len(grid), len(grid[0])
    queue = deque()
    fresh_count = 0
    
    # Find all rotten oranges and count fresh ones
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                queue.append((r, c, 0))
            elif grid[r][c] == 1:
                fresh_count += 1
    
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    max_time = 0
    
    while queue:
        row, col, time = queue.popleft()
        max_time = max(max_time, time)
        
        for dr, dc in directions:
            new_row, new_col = row + dr, col + dc
            
            if (0 <= new_row < rows and 0 <= new_col < cols and
                grid[new_row][new_col] == 1):
                grid[new_row][new_col] = 2
                fresh_count -= 1
                queue.append((new_row, new_col, time + 1))
    
    return max_time if fresh_count == 0 else -1

def find_provinces(is_connected):
    """Find number of provinces using DFS"""
    n = len(is_connected)
    visited = [False] * n
    provinces = 0
    
    def dfs(city):
        visited[city] = True
        for neighbor in range(n):
            if is_connected[city][neighbor] == 1 and not visited[neighbor]:
                dfs(neighbor)
    
    for i in range(n):
        if not visited[i]:
            dfs(i)
            provinces += 1
    
    return provinces`,
            problems: [
              'Rotting Oranges',
              'Word Ladder',
              'Number of Provinces',
              'Number of Enclaves'
            ]
          },
          {
            topic: 'Shortest Path Algorithms',
            description: 'Find shortest paths in weighted graphs',
            timeComplexity: 'O((V + E) log V) for Dijkstra',
            spaceComplexity: 'O(V)',
            keyPoints: [
              'Dijkstra for non-negative weights',
              'Bellman-Ford for negative weights',
              'Floyd-Warshall for all pairs shortest paths'
            ],
            code: `def network_delay_time(times, n, k):
    """Dijkstra's algorithm for shortest path"""
    import heapq
    from collections import defaultdict
    
    graph = defaultdict(list)
    for u, v, w in times:
        graph[u].append((v, w))
    
    distances = {i: float('inf') for i in range(1, n + 1)}
    distances[k] = 0
    heap = [(0, k)]
    
    while heap:
        current_dist, node = heapq.heappop(heap)
        
        if current_dist > distances[node]:
            continue
        
        for neighbor, weight in graph[node]:
            distance = current_dist + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))
    
    max_dist = max(distances.values())
    return max_dist if max_dist != float('inf') else -1

def shortest_path_binary_matrix(grid):
    """Shortest path in binary matrix using BFS"""
    from collections import deque
    
    n = len(grid)
    if grid[0][0] == 1 or grid[n-1][n-1] == 1:
        return -1
    
    queue = deque([(0, 0, 1)])
    visited = set([(0, 0)])
    directions = [(-1,-1), (-1,0), (-1,1), (0,-1), (0,1), (1,-1), (1,0), (1,1)]
    
    while queue:
        row, col, path_length = queue.popleft()
        
        if row == n - 1 and col == n - 1:
            return path_length
        
        for dr, dc in directions:
            new_row, new_col = row + dr, col + dc
            
            if (0 <= new_row < n and 0 <= new_col < n and
                grid[new_row][new_col] == 0 and
                (new_row, new_col) not in visited):
                visited.add((new_row, new_col))
                queue.append((new_row, new_col, path_length + 1))
    
    return -1`,
            problems: [
              'Network Delay Time',
              'Shortest Path in Binary Matrix',
              'Path With Minimum Effort',
              'Cheapest Flights Within K Stops'
            ]
          }
        ]
      },
      {
        title: '11 Dynamic Programming',
        content: [
          {
            topic: 'Climbing Stairs Pattern',
            description: 'Basic DP pattern for step-by-step problems',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n) or O(1) optimized',
            keyPoints: [
              'Each step depends on previous steps',
              'Can be optimized to O(1) space',
              'Foundation for more complex DP problems'
            ],
            code: `def climb_stairs(n):
    """Number of ways to climb stairs"""
    if n <= 2:
        return n
    
    prev2, prev1 = 1, 2
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    
    return prev1

def decode_ways(s):
    """Number of ways to decode string"""
    if not s or s[0] == '0':
        return 0
    
    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = dp[1] = 1
    
    for i in range(2, n + 1):
        # Single digit
        if s[i-1] != '0':
            dp[i] += dp[i-1]
        
        # Two digits
        two_digit = int(s[i-2:i])
        if 10 <= two_digit <= 26:
            dp[i] += dp[i-2]
    
    return dp[n]`,
            problems: [
              'Climbing Stairs',
              'Decode Ways',
              'Frog Jump'
            ]
          },
          {
            topic: 'Coin Change Pattern',
            description: 'DP for optimization problems with choices',
            timeComplexity: 'O(amount * coins)',
            spaceComplexity: 'O(amount)',
            keyPoints: [
              'Unbounded knapsack variant',
              'Build solution bottom-up',
              'Consider all possible choices at each step'
            ],
            code: `def coin_change(coins, amount):
    """Minimum coins to make amount"""
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

def coin_change_2(amount, coins):
    """Number of ways to make amount"""
    dp = [0] * (amount + 1)
    dp[0] = 1
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]
    
    return dp[amount]`,
            problems: [
              'Coin Change',
              'Minimum Jumps to Reach Home'
            ]
          }
        ]
      },
      {
        title: '12 Math',
        content: [
          {
            topic: 'Mathematical Algorithms',
            description: 'Number theory and mathematical problem solving',
            timeComplexity: 'Varies by algorithm',
            spaceComplexity: 'Usually O(1)',
            keyPoints: [
              'GCD and LCM calculations',
              'Prime number algorithms',
              'Modular arithmetic'
            ],
            code: `def gcd(a, b):
    """Greatest Common Divisor using Euclidean algorithm"""
    while b:
        a, b = b, a % b
    return a

def find_gcd_array(nums):
    """Find GCD of array"""
    result = nums[0]
    for i in range(1, len(nums)):
        result = gcd(result, nums[i])
        if result == 1:
            break
    return result

def self_dividing_numbers(left, right):
    """Find self-dividing numbers in range"""
    def is_self_dividing(num):
        temp = num
        while temp > 0:
            digit = temp % 10
            if digit == 0 or num % digit != 0:
                return False
            temp //= 10
        return True
    
    return [num for num in range(left, right + 1) if is_self_dividing(num)]

def trailing_zeroes(n):
    """Count trailing zeroes in n!"""
    count = 0
    i = 5
    while i <= n:
        count += n // i
        i *= 5
    return count`,
            problems: [
              'Find Greatest Common Divisor of Array',
              'Self Dividing Numbers',
              'Number of Good Pairs',
              'Four Divisors',
              'Day of the Week',
              'Subtract the Product and Sum of Digits of an Integer',
              'Count of Matches in Tournament',
              'Max Consecutive Ones',
              'Rectangle Overlap',
              'Excel Sheet Column',
              'Unique Paths',
              'Rectangle Area',
              'Check If Array Pairs Are Divisible by k',
              'Factorial Trailing Zeroes',
              'Nth Magical Number',
              'Permutation Sequence'
            ]
          }
        ]
      },
      {
        title: '13 Miscellaneous',
        content: [
          {
            topic: 'Bit Manipulation',
            description: 'Efficient operations using bitwise operators',
            timeComplexity: 'O(1) for most operations',
            spaceComplexity: 'O(1)',
            keyPoints: [
              'XOR properties: a ^ a = 0, a ^ 0 = a',
              'Bit shifting for multiplication/division by 2',
              'Useful for space-efficient algorithms'
            ],
            code: `def single_number(nums):
    """Find single number using XOR"""
    result = 0
    for num in nums:
        result ^= num
    return result

def reverse_bits(n):
    """Reverse bits of 32-bit integer"""
    result = 0
    for _ in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result

def single_number_ii(nums):
    """Find single number when others appear 3 times"""
    ones = twos = 0
    for num in nums:
        ones = (ones ^ num) & ~twos
        twos = (twos ^ num) & ~ones
    return ones

def count_bits(n):
    """Count 1 bits in each number from 0 to n"""
    result = [0] * (n + 1)
    for i in range(1, n + 1):
        result[i] = result[i >> 1] + (i & 1)
    return result`,
            problems: [
              'Single Number',
              'Reverse Bits',
              'Single Number II',
              'Number of 1 Bits',
              'Factorial Trailing Zeroes',
              'Binary Number with Alternating Bits',
              'Number of Even and Odd Bits'
            ]
          },
          {
            topic: 'String Algorithms',
            description: 'Advanced string processing techniques',
            timeComplexity: 'O(n + m) for pattern matching',
            spaceComplexity: 'O(m) for pattern',
            keyPoints: [
              'Rolling hash for efficient string matching',
              'Polynomial rolling hash function',
              'Collision handling in hash-based algorithms'
            ],
            code: `def str_str(haystack, needle):
    """Find first occurrence using Rabin-Karp"""
    if not needle:
        return 0
    
    n, m = len(haystack), len(needle)
    if m > n:
        return -1
    
    # Rolling hash parameters
    base = 256
    mod = 10**9 + 7
    
    # Calculate hash of needle and first window
    needle_hash = 0
    window_hash = 0
    base_power = 1
    
    for i in range(m):
        needle_hash = (needle_hash * base + ord(needle[i])) % mod
        window_hash = (window_hash * base + ord(haystack[i])) % mod
        if i < m - 1:
            base_power = (base_power * base) % mod
    
    # Check first window
    if window_hash == needle_hash and haystack[:m] == needle:
        return 0
    
    # Roll the hash
    for i in range(m, n):
        # Remove leftmost character
        window_hash = (window_hash - ord(haystack[i - m]) * base_power) % mod
        # Add rightmost character
        window_hash = (window_hash * base + ord(haystack[i])) % mod
        
        if window_hash == needle_hash and haystack[i - m + 1:i + 1] == needle:
            return i - m + 1
    
    return -1

def find_repeated_dna_sequences(s):
    """Find repeated DNA sequences using rolling hash"""
    if len(s) < 10:
        return []
    
    seen = set()
    repeated = set()
    
    for i in range(len(s) - 9):
        sequence = s[i:i + 10]
        if sequence in seen:
            repeated.add(sequence)
        else:
            seen.add(sequence)
    
    return list(repeated)`,
            problems: [
              'Find the Index of the First Occurrence in a String',
              'Repeated DNA Sequences',
              'Longest Duplicate Substring'
            ]
          }
        ]
      }
    ]
  }
};