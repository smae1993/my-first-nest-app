# 1. Image پایه
FROM node:20

# 2. ست کردن پوشه کاری داخل کانتینر
WORKDIR /app

# 3. کپی کردن فایل‌های مربوط به پکیج‌ها و نصب
COPY package*.json ./
RUN npm install

# 4. کپی کل پروژه و build کردن Nest
COPY . .
RUN npm run build

# 5. مشخص کردن پورت
EXPOSE 3000

# 6. دستور اجرای اپ
CMD ["node", "dist/main.js"]