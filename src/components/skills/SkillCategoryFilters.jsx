import FilterTabs from '../common/FilterTabs';

const desktopRows = [
  ['FE', 'UI/State', 'Visual'],
  ['Lang', 'BE', 'DB', 'AI', 'Infra'],
  ['Tools', 'Collab', 'Extra']
];

const mobileRows = [
  ['FE', 'UI/State', 'Visual'],
  ['Lang', 'BE'],
  ['DB', 'AI', 'Infra'],
  ['Tools', 'Collab', 'Extra']
];

const rowItems = (categories, titles) => (
  titles.map((title) => categories.find((category) => category.title === title)).filter(Boolean)
);

const SkillCategoryFilterSet = ({ categories, rows, selected, onSelect, className }) => (
  <div className={className}>
    {rows.map((row) => (
      <FilterTabs
        key={row.join('-')}
        items={rowItems(categories, row)}
        selected={selected}
        onSelect={onSelect}
        getKey={(category) => category.title}
        getLabel={(category) => category.title}
        className="skills-filter-row"
      />
    ))}
  </div>
);

const SkillCategoryFilters = ({ categories, selected, onSelect }) => (
  <div className="skills-filter-container">
    <SkillCategoryFilterSet
      categories={categories}
      rows={desktopRows}
      selected={selected}
      onSelect={onSelect}
      className="skills-filter-desktop"
    />
    <SkillCategoryFilterSet
      categories={categories}
      rows={mobileRows}
      selected={selected}
      onSelect={onSelect}
      className="skills-filter-mobile"
    />
  </div>
);

export default SkillCategoryFilters;

