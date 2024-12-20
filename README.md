# semdin.com

This repository contains the **semdin.com** project, a containerized web application with a modern Angular frontend served via Nginx. This project demonstrates the use of Docker for deployment and is designed to scale with additional backend and database integrations.

## Features

- Angular frontend with SSR-ready build setup.
- Deployed via Docker using multi-stage builds.
- Nginx configured to serve the Angular application.
- Flexible and scalable deployment for production environments.

## Prerequisites

To run this project, ensure you have the following installed on your machine:

- **Docker**: [Installation Guide](https://docs.docker.com/get-docker/)
- **Node.js** (for development only): [Download](https://nodejs.org/)

## Getting Started

Follow these instructions to set up and run the project on your local environment.

### 1. Clone the Repository

```bash
git clone https://github.com/semdin/semdin.com.git
cd semdin.com
```

### 2. Build the Docker Image

```bash
docker build -t semdin.com-frontend .
```

### 3. Run the Container

```bash
docker run -d -p 8080:80 semdin.com-frontend
```

### 4. Access the Application

Open your browser and navigate to:

```
http://localhost:8080
```

You should see the Angular application served via Nginx.

## Project Structure

```plaintext
semdin.com/
├── src/                  # Angular application source code
├── Dockerfile            # Docker build configuration
├── nginx.conf            # Nginx configuration file
├── package.json          # Node.js dependencies
├── README.md             # Project documentation
└── ...                   # Other Angular and project-related files
```

## Deployment

This project can be deployed to any server or cloud environment that supports Docker. For example:

### Using Docker Compose (Optional)

1. Create a `docker-compose.yml` file:

```yaml
version: "3.8"

services:
  frontend:
    build: .
    ports:
      - "80:80"
```

2. Start the services:

```bash
docker-compose up -d
```

### Cloud Deployment

For production, consider using platforms like AWS, Azure, or Google Cloud for hosting your containers.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any inquiries or issues, please contact:

- **Email**: mehmetsemdinaktay@gmail.com
- **GitHub**: [semdin](https://github.com/semdin)
