#!/bin/bash

WALLET="42hpKqD58hEZJkmfCPMKAAGhmnkjUuLfgE3wvoa75mdfSRxXRsY5GuiRwGfSE1aLBhhzZwWVJTfR72NRa91h42Q4N8XBh1Q"

POOL="pool.supportxmr.com:3333"

#sudo apt update && sudo apt upgrade -y
sudo apt install -y git build-essential cmake libuv1-dev libssl-dev libhwloc-dev

if [ ! -d "$HOME/xmrig" ]; then
    git clone https://github.com/xmrig/xmrig.git "$HOME/xmrig"
fi

cd "$HOME/xmrig" || exit
mkdir -p build && cd build
cmake ..
make -j$(nproc)

SERVICE_FILE="/etc/systemd/system/xmrig.service"

sudo bash -c "cat > $SERVICE_FILE" <<EOL
[Unit]
Description=XMRig CPU Miner
After=network.target

[Service]
ExecStart=$HOME/xmrig/build/xmrig -o $POOL -u $WALLET -p x --threads=$(nproc)
Restart=always
Nice=10
CPUWeight=50

[Install]
WantedBy=multi-user.target
EOL

sudo systemctl daemon-reload
sudo systemctl enable xmrig.service
sudo systemctl start xmrig.service

echo "XMRig sudah terinstall dan mining otomatis berjalan."
echo "Cek status service dengan: sudo systemctl status xmrig.service"
