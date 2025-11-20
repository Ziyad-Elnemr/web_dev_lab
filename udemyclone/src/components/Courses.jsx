import "./Courses.css";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "The Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      reviews: "398,054",
      price: "$84.99",
      image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg",
    },
    {
      id: 2,
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      reviews: "365,943",
      price: "$84.99",
      image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    },
    {
      id: 3,
      title: "React - The Complete Guide 2024",
      instructor: "Maximilian Schwarzmüller",
      rating: 4.6,
      reviews: "234,567",
      price: "$89.99",
      image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    },
    {
      id: 4,
      title: "The Complete JavaScript Course 2024",
      instructor: "Jonas Schmedtmann",
      rating: 4.7,
      reviews: "178,234",
      price: "$84.99",
      image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    },
  ];

  return (
    <section className="courses-section">
      <div className="courses-container">
        <h2 className="courses-title">A broad selection of courses</h2>
        <p className="courses-subtitle">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>

        <div className="courses-tabs">
          <button className="tab-btn active">Python</button>
          <button className="tab-btn">Excel</button>
          <button className="tab-btn">Web Development</button>
          <button className="tab-btn">JavaScript</button>
          <button className="tab-btn">Data Science</button>
          <button className="tab-btn">AWS Certification</button>
          <button className="tab-btn">Drawing</button>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image-wrapper">
                <div className="course-image-placeholder">
                  <span>📚</span>
                </div>
              </div>
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">{course.instructor}</p>
                <div className="course-rating">
                  <span className="rating-value">{course.rating}</span>
                  <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-count">({course.reviews})</span>
                </div>
                <p className="course-price">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
