# Sử dụng image cơ sở
FROM node:16

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và cài đặt dependencies
COPY package.json .
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Expose cổng ứng dụng (ví dụ: 3000)
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["node", "app.js"]
