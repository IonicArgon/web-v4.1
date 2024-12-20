const snippet_1 = `#include <bits/stdc++.h>

int main() 
{
  std::ifstream input("day1_input.txt");

  std::string line;
  std::vector<int> list1 = {};
  std::vector<int> list2 = {};

  while (std::getline(input, line))
  {
    int delim_pos = line.find("   ");
    std::string list1_elem = line.substr(0, delim_pos);
    std::string list2_elem = line.substr(delim_pos);
    list1.push_back(std::stoi(list1_elem));
    list2.push_back(std::stoi(list2_elem));
  }

  std::sort(list1.begin(), list1.end());
  std::sort(list2.begin(), list2.end());

  int total_distance = std::transform_reduce(
    list1.begin(), list1.end(), list2.begin(), 0, std::plus<int>(), 
    [](int a, int b) { return std::abs(a - b); }
  );

  std::cout << "total distance: " << total_distance << std::endl;
  input.close();
  return 0;
}`;

const snippet_2 = `#include <bits/stdc++.h>
#include <ranges>

int main()
{
  std::ifstream input("day1_input.txt");

  std::string line;
  std::string_view delim = "   ";
  std::vector<int> list1 = {};
  std::vector<int> list2 = {};

  while (std::getline(input, line))
  {
    auto split = line | std::views::split(delim)
                      | std::views::transform([](auto rng) {
                        auto str = std::string(&*rng.begin(), std::ranges::distance(rng));
                        return std::stoi(str);
                      });
    list1.push_back(*split.begin());
    list2.push_back(*std::next(split.begin()));
  }

  std::ranges::sort(list1);
  std::ranges::sort(list2);

  int total_distance = std::ranges::fold_left(
    std::views::iota(0, (int)list1.size())
    | std::views::transform([&list1, &list2](int i) {
      return std::abs(list1[i] - list2[i]);
    }), 
    0, std::plus<int>()
  );

  std::cout << "total distance: " << total_distance << std::endl;
  input.close();
  return 0;
}`;

const snippet_3 = `#include <bits/stdc++.h>

int main()
{
  std::ifstream input("day1_input.txt");

  std::string line;
  std::vector<int> list1 = {};
  std::vector<int> list2 = {};

  while (std::getline(input, line))
  {
    int delim_pos = line.find("   ");
    list1.push_back(std::stoi(line.substr(0, delim_pos)));
    list2.push_back(std::stoi(line.substr(delim_pos + 3)));
  }

  std::unordered_map<int, std::pair<int, int>> similarity_scores = {};
  for (const auto& id : list1)
  {
    if (similarity_scores.contains(id)) 
    {
      auto previous_pair = similarity_scores.at(id);
      similarity_scores.at(id) = std::make_pair(
        previous_pair.first, 
        previous_pair.second + previous_pair.first
      );
    }

    int instances_in_second = std::count(list2.begin(), list2.end(), id);
    similarity_scores.insert({
      id, 
      std::make_pair(id * instances_in_second, id * instances_in_second)
    });
  }

  int total_similarity_score = std::accumulate(similarity_scores.begin(), similarity_scores.end(), 0, 
    [](int acc, const std::pair<int, std::pair<int, int>>& pair) {
      return acc + pair.second.second;
    }
  );

  std::cout << "total similarity score: " << total_similarity_score << std::endl;
  input.close();
  return 0;
}`;

const sample_list = `3   4
4   3
2   5
1   3
3   9
3   3`;

export { snippet_1, snippet_2, snippet_3, sample_list };
