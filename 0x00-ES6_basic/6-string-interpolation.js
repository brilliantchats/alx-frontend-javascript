export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  const text1 = `As of ${year}, it was the seventh-highest income county in the United States, `;
  const text2 = `with a per capita personal income of ${budget.income}. As of 2015, San Francisco `;
  const text3 = `proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
  const resultStr = text1 + text2 + text3;

  return resultStr;
}
