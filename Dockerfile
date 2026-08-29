FROM python:3.11-slim AS backend
WORKDIR /app/backend
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ .

FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM nginx:alpine
COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html
EXPOSE 80 8000
CMD ["nginx", "-g", "daemon off;"]
