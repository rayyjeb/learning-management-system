# 📚 Learning Management System (LMS)

A **Next.js-based Learning Management System** built for scalability, security, and performance, powered by AWS serverless infrastructure.  
This project uses modern tech like **Docker, AWS Lambda, DynamoDB, Clerk authentication, Shadcn UI components**, and more.

---

## 🚀 Tech Stack

- **Frontend:** [Next.js 15](https://nextjs.org/), [Shadcn UI](https://ui.shadcn.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [Clerk](https://clerk.dev/)
- **Backend / APIs:** Serverless via **AWS Lambda**
- **Database:** [DynamoDB](https://aws.amazon.com/dynamodb/)
- **Storage:** [Amazon S3](https://aws.amazon.com/s3/) for course assets
- **Containerization:** [Docker](https://www.docker.com/)
- **Deployment:** [AWS ECR](https://aws.amazon.com/ecr/) (Elastic Container Registry), AWS ECS / Lambda
- **Others:** Server-side Rendering (SSR), Incremental Static Regeneration (ISR)

---

## 📦 Features

- 🧑‍🎓 **Student and Instructor Accounts** (using Clerk auth)
- 📚 **Course Creation, Management, and Enrollment**
- 🎥 **Video Upload and Streaming** (stored in S3)
- 📜 **Quizzes and Certifications**
- 🧩 **Dynamic Content Rendering** (Markdown / Rich text)
- 📈 **Progress Tracking**
- 💬 **Commenting / Discussions**
- 🛠️ **Admin Tools** (user and content moderation)
- 🌍 **Global Scalability** with AWS serverless services

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (>=18.x)
- Docker
- AWS CLI configured
- Clerk Account (for auth)
- AWS Services: Lambda, DynamoDB, S3, ECR, IAM permissions

