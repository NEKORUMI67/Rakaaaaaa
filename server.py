import http.server
import socketserver

PORT = 8080

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Biar JS, CSS, emoji, dll kebaca sempurna
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Server berjalan di http://localhost:{PORT}")
    print("Tekan CTRL + C untuk stop")
    httpd.serve_forever()
