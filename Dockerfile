# Angular uygulamasını derlemek için Node.js kullanıyoruz
FROM node:22 AS build
WORKDIR /app

# Bağımlılıkları yükle
COPY package*.json ./
RUN npm install

# Kodları kopyala ve build et
COPY . .
RUN npm run build --prod

# Nginx kullanarak build edilen dosyaları sunuyoruz
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist/semdin.com/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
