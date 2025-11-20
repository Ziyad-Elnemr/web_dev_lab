import "./TrustedCompanies.css";

const TrustedCompanies = () => {
  const companies = [
    { name: "Nasdaq", logo: "NASDAQ" },
    { name: "Volkswagen", logo: "VW" },
    { name: "Box", logo: "BOX" },
    { name: "NetApp", logo: "NetApp" },
    { name: "Eventbrite", logo: "Eventbrite" },
  ];

  return (
    <section className="trusted-companies">
      <div className="trusted-container">
        <h2 className="trusted-title">
          Trusted by over 15,000 companies and millions of learners around the
          world
        </h2>
        <div className="companies-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-logo">
              <span>{company.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
