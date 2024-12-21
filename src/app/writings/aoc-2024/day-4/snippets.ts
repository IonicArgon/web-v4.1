const example_search = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const example_correct = `....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX`;

const node_class = `enum class Direction { N, NE, E, SE, S, SW, W, NW };

struct Node 
{
  char letter;
  std::unordered_map<Direction, Node*> neighbours;
  Node(char letter) : letter(letter) 
  {
    for (Direction dir = Direction::N; dir <= Direction::NW; dir = static_cast<Direction>(static_cast<int>(dir) + 1))
    {
      neighbours[dir] = nullptr;
    }
  }
};`;

const build_graph = `std::vector<Node*> build_graph(std::ifstream& file)
{
  std::string line;
  std::vector<std::vector<Node*>> temp_grid; // store positional info
  std::unordered_map<int, Node*> node_map; // quick access to nodes
  std::vector<Node*> nodes; // the actual return vector
  int node_id = 0;

  int row = 0;
  while (std::getline(file, line))
  {
    std::vector<Node*> row_nodes;
    std::istringstream iss(line);
    char letter;
    int col = 0;
    while (iss >> letter)
    {
      Node* node = new Node(letter);
      row_nodes.push_back(node);
      node_map[node_id++] = node;
      nodes.push_back(node);
      ++col;
    }
    temp_grid.push_back(row_nodes);
    ++row;
  }

  int num_rows = temp_grid.size();
  int num_cols = temp_grid.at(0).size();
  for (int i = 0; i < num_rows; ++i)
  {
    for (int j = 0; j < num_cols; ++j)
    {
      int id = i * num_cols + j;
      if (i > 0) node_map.at(id)->neighbours.at(Direction::N) = node_map.at(id - num_cols);
      if (i > 0 && j < num_cols - 1) node_map.at(id)->neighbours.at(Direction::NE) = node_map.at(id - num_cols + 1);
      if (j < num_cols - 1) node_map.at(id)->neighbours.at(Direction::E) = node_map.at(id + 1);
      if (i < num_rows - 1 && j < num_cols - 1) node_map.at(id)->neighbours.at(Direction::SE) = node_map.at(id + num_cols + 1);
      if (i < num_rows - 1) node_map.at(id)->neighbours.at(Direction::S) = node_map.at(id + num_cols);
      if (i < num_rows - 1 && j > 0) node_map.at(id)->neighbours.at(Direction::SW) = node_map.at(id + num_cols - 1);
      if (j > 0) node_map.at(id)->neighbours.at(Direction::W) = node_map.at(id - 1);
      if (i > 0 && j > 0) node_map.at(id)->neighbours.at(Direction::NW) = node_map.at(id - num_cols - 1);
    }
  }

  temp_grid.clear();
  node_map.clear();
  return nodes;
}`;

const search_xmas = `int search_for_xmas(Node* root)
{
  int num_xmases = 0;

  std::queue<std::pair<Node*, Direction>> search_queue;
  for (Direction dir = Direction::N; dir <= Direction::NW; dir = static_cast<Direction>(static_cast<int>(dir) + 1))
  {
    if (root->neighbours.at(dir) != nullptr && root->neighbours.at(dir)->letter == 'M')
    {
      search_queue.push({ root->neighbours.at(dir), dir });
    }
  }

  while (!search_queue.empty())
  {
    auto [node, dir] = search_queue.front();
    search_queue.pop();
    auto letterA_node = node->neighbours.at(dir);
    auto letterS_node = letterA_node != nullptr ? letterA_node->neighbours.at(dir) : nullptr;

    if (letterA_node != nullptr && letterA_node->letter == 'A' && letterS_node != nullptr && letterS_node->letter == 'S')
    {
      ++num_xmases;
    }
  }

  return num_xmases;
}`;

const part1 = `#include <bits/stdc++.h>

enum class Direction { N, NE, E, SE, S, SW, W, NW };

struct Node 
{
  char letter;
  std::unordered_map<Direction, Node*> neighbours;
  Node(char letter) : letter(letter) 
  {
    for (Direction dir = Direction::N; dir <= Direction::NW; dir = static_cast<Direction>(static_cast<int>(dir) + 1))
    {
      neighbours[dir] = nullptr;
    }
  }
};

std::vector<Node*> build_graph(std::ifstream& file)
{
  std::string line;
  std::vector<std::vector<Node*>> temp_grid; // store positional info
  std::unordered_map<int, Node*> node_map; // quick access to nodes
  std::vector<Node*> nodes; // the actual return vector
  int node_id = 0;

  int row = 0;
  while (std::getline(file, line))
  {
    std::vector<Node*> row_nodes;
    std::istringstream iss(line);
    char letter;
    int col = 0;
    while (iss >> letter)
    {
      Node* node = new Node(letter);
      row_nodes.push_back(node);
      node_map[node_id++] = node;
      nodes.push_back(node);
      ++col;
    }
    temp_grid.push_back(row_nodes);
    ++row;
  }

  int num_rows = temp_grid.size();
  int num_cols = temp_grid.at(0).size();
  for (int i = 0; i < num_rows; ++i)
  {
    for (int j = 0; j < num_cols; ++j)
    {
      int id = i * num_cols + j;
      if (i > 0) node_map.at(id)->neighbours.at(Direction::N) = node_map.at(id - num_cols);
      if (i > 0 && j < num_cols - 1) node_map.at(id)->neighbours.at(Direction::NE) = node_map.at(id - num_cols + 1);
      if (j < num_cols - 1) node_map.at(id)->neighbours.at(Direction::E) = node_map.at(id + 1);
      if (i < num_rows - 1 && j < num_cols - 1) node_map.at(id)->neighbours.at(Direction::SE) = node_map.at(id + num_cols + 1);
      if (i < num_rows - 1) node_map.at(id)->neighbours.at(Direction::S) = node_map.at(id + num_cols);
      if (i < num_rows - 1 && j > 0) node_map.at(id)->neighbours.at(Direction::SW) = node_map.at(id + num_cols - 1);
      if (j > 0) node_map.at(id)->neighbours.at(Direction::W) = node_map.at(id - 1);
      if (i > 0 && j > 0) node_map.at(id)->neighbours.at(Direction::NW) = node_map.at(id - num_cols - 1);
    }
  }

  temp_grid.clear();
  node_map.clear();
  return nodes;
}

int search_for_xmas(Node* root)
{
  int num_xmases = 0;

  std::queue<std::pair<Node*, Direction>> search_queue;
  for (Direction dir = Direction::N; dir <= Direction::NW; dir = static_cast<Direction>(static_cast<int>(dir) + 1))
  {
    if (root->neighbours.at(dir) != nullptr && root->neighbours.at(dir)->letter == 'M')
    {
      search_queue.push({ root->neighbours.at(dir), dir });
    }
  }

  while (!search_queue.empty())
  {
    auto [node, dir] = search_queue.front();
    search_queue.pop();
    auto letterA_node = node->neighbours.at(dir);
    auto letterS_node = letterA_node != nullptr ? letterA_node->neighbours.at(dir) : nullptr;

    if (letterA_node != nullptr && letterA_node->letter == 'A' && letterS_node != nullptr && letterS_node->letter == 'S')
    {
      ++num_xmases;
    }
  }

  return num_xmases;
}

int main()
{
  std::ifstream input("day4_input.txt");
  auto nodes = build_graph(input);
  auto roots = nodes | std::views::filter([&](Node* node) { return node->letter == 'X'; });
  auto root_nodes = std::vector<Node*>(roots.begin(), roots.end());

  int total_xmases = 0;
  for (auto root : root_nodes)
  {
    total_xmases += search_for_xmas(root);
  }

  std::cout << "all xmases: " << total_xmases << std::endl;

  input.close();
  root_nodes.clear();
  nodes.clear();
  return 0;
}`;

const x_mas = `M.S
.A.
M.S`;

const search_x_mas = `int search_for_x_mases(Node* root)
{
  std::queue<std::pair<Node*, Direction>> search_queue;
  std::vector<Direction> valid_m_directions = { Direction::NE, Direction::SE, Direction::SW, Direction::NW };
  for (auto const dir : valid_m_directions)
  {
    if (root->neighbours.at(dir) && root->neighbours.at(dir)->letter == 'M')
    {
      search_queue.push(std::make_pair(root->neighbours.at(dir), dir));
    }
  }

  if (search_queue.size() < 2)
  {
    return 0;
  }

  while (!search_queue.empty())
  {
    auto [node, dir] = search_queue.front();
    search_queue.pop();
    auto opposing_neighbour_dir = [&](){
      switch(dir){
        case Direction::NE:
          return Direction::SW;
          break;
        case Direction::SE:
          return Direction::NW;
          break;
        case Direction::SW:
          return Direction::NE;
          break;
        case Direction::NW:
          return Direction::SE;
          break;
        default:
          // smth terribly bad happened
          throw std::runtime_error("uh oh");
      }
    }();
    auto opposing_neighbour = root->neighbours.at(opposing_neighbour_dir);
    if (opposing_neighbour == nullptr || opposing_neighbour->letter != 'S') {
      return 0;
    }
  }

  return 1;
}`;

const part2 = `#include <bits/stdc++.h>

enum class Direction { N, NE, E, SE, S, SW, W, NW };

struct Node 
{
  char letter;
  std::unordered_map<Direction, Node*> neighbours;
  Node(char letter) : letter(letter) 
  {
    for (Direction dir = Direction::N; dir <= Direction::NW; dir = static_cast<Direction>(static_cast<int>(dir) + 1))
    {
      neighbours[dir] = nullptr;
    }
  }
};

std::vector<Node*> build_graph(std::ifstream& file)
{
  std::string line;
  std::vector<std::vector<Node*>> temp_grid; // store positional info
  std::unordered_map<int, Node*> node_map; // quick access to nodes
  std::vector<Node*> nodes; // the actual return vector
  int node_id = 0;

  int row = 0;
  while (std::getline(file, line))
  {
    std::vector<Node*> row_nodes;
    std::istringstream iss(line);
    char letter;
    int col = 0;
    while (iss >> letter)
    {
      Node* node = new Node(letter);
      row_nodes.push_back(node);
      node_map[node_id++] = node;
      nodes.push_back(node);
      ++col;
    }
    temp_grid.push_back(row_nodes);
    ++row;
  }

  int num_rows = temp_grid.size();
  int num_cols = temp_grid.at(0).size();
  for (int i = 0; i < num_rows; ++i)
  {
    for (int j = 0; j < num_cols; ++j)
    {
      int id = i * num_cols + j;
      if (i > 0) node_map.at(id)->neighbours.at(Direction::N) = node_map.at(id - num_cols);
      if (i > 0 && j < num_cols - 1) node_map.at(id)->neighbours.at(Direction::NE) = node_map.at(id - num_cols + 1);
      if (j < num_cols - 1) node_map.at(id)->neighbours.at(Direction::E) = node_map.at(id + 1);
      if (i < num_rows - 1 && j < num_cols - 1) node_map.at(id)->neighbours.at(Direction::SE) = node_map.at(id + num_cols + 1);
      if (i < num_rows - 1) node_map.at(id)->neighbours.at(Direction::S) = node_map.at(id + num_cols);
      if (i < num_rows - 1 && j > 0) node_map.at(id)->neighbours.at(Direction::SW) = node_map.at(id + num_cols - 1);
      if (j > 0) node_map.at(id)->neighbours.at(Direction::W) = node_map.at(id - 1);
      if (i > 0 && j > 0) node_map.at(id)->neighbours.at(Direction::NW) = node_map.at(id - num_cols - 1);
    }
  }

  temp_grid.clear();
  node_map.clear();
  return nodes;
}

int search_for_x_mases(Node* root)
{
  std::queue<std::pair<Node*, Direction>> search_queue;
  std::vector<Direction> valid_m_directions = { Direction::NE, Direction::SE, Direction::SW, Direction::NW };
  for (auto const dir : valid_m_directions)
  {
    if (root->neighbours.at(dir) && root->neighbours.at(dir)->letter == 'M')
    {
      search_queue.push(std::make_pair(root->neighbours.at(dir), dir));
    }
  }

  if (search_queue.size() < 2)
  {
    return 0;
  }

  while (!search_queue.empty())
  {
    auto [node, dir] = search_queue.front();
    search_queue.pop();
    auto opposing_neighbour_dir = [&](){
      switch(dir){
        case Direction::NE:
          return Direction::SW;
          break;
        case Direction::SE:
          return Direction::NW;
          break;
        case Direction::SW:
          return Direction::NE;
          break;
        case Direction::NW:
          return Direction::SE;
          break;
        default:
          // smth terribly bad happened
          throw std::runtime_error("uh oh");
      }
    }();
    auto opposing_neighbour = root->neighbours.at(opposing_neighbour_dir);
    if (opposing_neighbour == nullptr || opposing_neighbour->letter != 'S') {
      return 0;
    }
  }

  return 1;
}

int main()
{
  std::ifstream input("day4_input.txt");
  auto nodes = build_graph(input);
  auto roots = nodes | std::views::filter([&](Node* node) { return node->letter == 'A'; });
  auto root_nodes = std::vector<Node*>(roots.begin(), roots.end());

  int total_xmases = 0;
  for (auto root : root_nodes)
  {
    total_xmases += search_for_x_mases(root);
  }

  std::cout << "all xmases: " << total_xmases << std::endl;

  input.close();
  root_nodes.clear();
  nodes.clear();
  return 0;
}`;

export {
  example_search,
  example_correct,
  node_class,
  build_graph,
  search_xmas,
  part1,
  x_mas,
  search_x_mas,
  part2,
};
