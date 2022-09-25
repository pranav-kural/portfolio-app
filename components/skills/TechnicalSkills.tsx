import TechnicalSkillsPieChart from "./technical_skills_pie_chart";

export default function TechnicalSkills() {
  return (
    <li className="skillContent uk-card uk-card-default uk-card-body">
      <a className="uk-accordion-title" href="#">
        Languages & Frameworks
      </a>
      <div className="uk-accordion-content">
        <TechnicalSkillsPieChart />
      </div>
    </li>
  );
}
