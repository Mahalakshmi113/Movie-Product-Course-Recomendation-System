# 🎯 Multi-System Recommendation Engine

Three intelligent recommendation systems: **Movies**, **Courses**, and **Products**. Each uses different ML algorithms to provide personalized recommendations.

##  Quick Start

### Prerequisites
- Python 3.8+
- pip

### Run Systems
```bash
# Movie System (Django - Port 8000)
cd movie-recommendation-system-master
python manage.py runserver

# Course System (Flask - Port 5000)
cd course-recommender-main
python app.py

# Product System (Flask - Port 8001)
cd Product-Recommendation-Engine-master
python app.py
```

## 🎬 Movie Recommendations
- **Tech:** Django + Content-based filtering
- **Port:** 8000
- **Features:** Movie metadata analysis, similarity algorithms

```bash
cd movie-recommendation-system-master
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## 📚 Course Recommendations
- **Tech:** Flask + TF-IDF + Machine Learning
- **Port:** 5000
- **Features:** Skill-based matching, Coursera dataset

```bash
cd course-recommender-main
pip install -r requirements.txt
python app.py
```

**Algorithm:** TF-IDF vectorization → Sigmoid kernel → Returns top 10 similar courses

## 🛍️ Product Recommendations
- **Tech:** Flask + Association Rules
- **Port:** 8001
- **Features:** Market basket analysis, cross-selling

```bash
cd Product-Recommendation-Engine-master
pip install -r Requirements.txt
python app.py
```

**Algorithm:** Association rule mining → Probability-based recommendations

## 🔧 Tech Stack

| System | Framework | Algorithm | Port |
|--------|-----------|-----------|------|
| Movies | Django | Content-based filtering | 8000 |
| Courses | Flask | TF-IDF + Sigmoid kernel | 5000 |
| Products | Flask | Association rules | 8001 |

## 🌐 Access Points
- **Movie System:** http://localhost:8000
- **Course System:** http://localhost:5000
- **Product System:** http://localhost:8001

## 🚀 Deployment
```bash
# Production
gunicorn -w 4 -b 0.0.0.0:5000 app:app  # Course
gunicorn -w 4 -b 0.0.0.0:8001 app:app  # Product
python manage.py runserver 0.0.0.0:8000  # Movie
```

---
