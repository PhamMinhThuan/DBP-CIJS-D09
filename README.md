# Public trang web lên GitHub Pages

## Các bước public

1. Cài đặt package `gh-pages`:
	```bash
	npm install --save gh-pages
	```

2. Thêm các script sau vào file `package.json`:
	```json
	"scripts": {
	  ...existing code...
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d build"
	}
	```

3. Deploy lên GitHub Pages:
	```bash
	npm run deploy
	```

Sau khi chạy lệnh trên, trang web sẽ được public tại:
https://PhamMinhThuan.github.io/DBP-CIJS-D09
## Description

Đây là thư mục của Thuân dành cho lớp DBP-CIJS-D09
