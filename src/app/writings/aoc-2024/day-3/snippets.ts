const example_input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

const regex_exp = `mul\\(\\d+,\\d+\\)`;

const snippet_1 = `#include <bits/stdc++.h>

int main()
{
  std::ifstream input("day3_input.txt");
  std::string line;
  std::regex mul_regex("mul\\\\(\\\\d+,\\\\d+\\\\)");

  long sum_of_products = 0;

  while(std::getline(input, line))
  {
    auto mul_ops_begin = std::sregex_iterator(line.begin(), line.end(), mul_regex);
    auto mul_ops_end   = std::sregex_iterator();

    for (std::sregex_iterator iter = mul_ops_begin; iter != mul_ops_end; ++iter)
    {
      std::string mul_op = (*iter).str();
      std::stringstream mul_op_ss(mul_op);
      char c;
      int num1, num2;
      mul_op_ss >> c >> c >> c >> c >> num1 >> c >> num2 >> c;
      
      sum_of_products += num1 * num2;
    }
  }

  std::cout << "sum of products: " << sum_of_products << std::endl;

  input.close();
  return 0;
}`;

const snippet_2 = `#include <bits/stdc++.h>

int main()
{
  std::ifstream input("day3_input.txt");
  std::string line;
  std::regex op_regex("mul\\\\(\\\\d+,\\\\d+\\\\)|do\\\\(\\\\)|don't\\\\(\\\\)");

  long sum_of_products = 0;
  bool is_multiplying = true;

  while(std::getline(input, line))
  {
    auto ops_begin = std::sregex_iterator(line.begin(), line.end(), op_regex);
    auto ops_end   = std::sregex_iterator();

    for (std::sregex_iterator iter = ops_begin; iter != ops_end; ++iter)
    {
      std::string op = (*iter).str();
      
      if (op == "do()") 
      {
        is_multiplying = true;
        continue;
      } else if (op == "don't()")
      {
        is_multiplying = false;
        continue;
      }

      if (is_multiplying) {
        std::stringstream op_ss(op);

        char c;
        int num1, num2;
        op_ss >> c >> c >> c >> c >> num1 >> c >> num2 >> c;

        sum_of_products += num1 * num2;
      }
    }
  }

  std::cout << "sum of products: " << sum_of_products << std::endl;

  input.close();
  return 0;
}`;

export { example_input, regex_exp, snippet_1, snippet_2 };
