import pandas as pd
import networkx as nx
from pyvis.network import Network
import community.community_louvain as community_louvain
import matplotlib.cm as cm
import numpy as np

df = pd.read_csv("data.csv")
# Membaca data dari df
connections = []

for idx, row in df.iterrows():
    source = row['Source'].strip()  # Menghapus spasi di awal dan akhir
    targets = [target.strip() for target in row['Target'].split(', ')]  # Menghapus spasi di awal dan akhir dari setiap target
    for target in targets:
        connections.append((source, target))

# Membuat graf
G = nx.DiGraph()
G.add_edges_from(connections)

# Mendeteksi komunitas menggunakan algoritma Louvain
partition = community_louvain.best_partition(G.to_undirected())

# Mendapatkan jumlah komunitas unik
num_communities = len(set(partition.values()))

# Menggunakan colormap 'tab20' dari matplotlib
cmap = cm.get_cmap('tab20', 20)  # Maksimal 20 warna
colors = [cmap(i) for i in range(20)]

# Membuat graf dengan Pyvis
net = Network(notebook=True, directed=True, cdn_resources='remote')

# Menambahkan node dan edge ke graf
for source, target in connections:
    net.add_node(source, label=source)
    net.add_node(target, label=target)
    net.add_edge(source, target)

# Memberi warna pada node berdasarkan komunitas
community_colors = {comm: colors[i] for i, comm in enumerate(set(partition.values()))}
for node, comm in partition.items():
    rgba_color = community_colors[comm]
    hex_color = '#%02x%02x%02x' % (int(rgba_color[0]*255), int(rgba_color[1]*255), int(rgba_color[2]*255))
    net.get_node(node)['color'] = hex_color

# Menambahkan opsi untuk menampilkan judul
options = """
var options = {
  "interaction": {
    "navigationButtons": true,
    "keyboard": true
  },
  "physics": {
    "enabled": true
  }
}
"""
net.set_options(options)

# Menambahkan judul ke graf
net.heading = "Social Network Analysis Anggota INCODE"

# Menyimpan grafik ke file HTML
net.show("index.html")

# Membuat bagian legenda
legend_html = """
<div id="legend" style="padding: 10px; background: #fff; border: 1px solid #ccc; border-radius: 4px; position: absolute; top: 10px; left: 10px; z-index: 9999;">
  <h3>Legend</h3>
"""
for comm, rgba_color in community_colors.items():
    hex_color = '#%02x%02x%02x' % (int(rgba_color[0]*255), int(rgba_color[1]*255), int(rgba_color[2]*255))
    legend_html += f'<div class="legend-item" style="display: flex; align-items: center; margin-bottom: 5px;"><div class="legend-color" style="width: 15px; height: 15px; margin-right: 10px; background: {hex_color}; border: 1px solid #ccc;"></div>Community {comm}</div>'
legend_html += '</div>'

# Menyimpan bagian legenda ke file HTML
with open('index.html', 'r') as file:
    html_content = file.read()

html_content = html_content.replace('<body>', f'<body>{legend_html}', 1)

with open('index.html', 'w') as file:
    file.write(html_content)
