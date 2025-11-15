import http.server
import socketserver
import os

PORT = 8000

os.chdir("site")  # folder tempat file HTML & CSS

class Handler(http.server.SimpleHTTPRequestHandler):
    pass

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server berjalan di http://localhost:{PORT}")
    httpd.serve_forever()
