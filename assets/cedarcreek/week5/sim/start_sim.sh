#!/bin/bash
# MCCoE Lab 5.2 training simulation. Harmless.
# It starts one background loop that writes a line of text to a log file every 5 seconds.
# It sends nothing over the network and changes nothing outside /tmp/.cache-upd.
mkdir -p /tmp/.cache-upd
cat > /tmp/.cache-upd/.u.sh <<'EOF'
while true; do
  echo "$(date +%Y-%m-%dT%H:%M:%S) check-in to browser-update-cdn.example.net/api/check (simulated: nothing is sent)" >> /tmp/.cache-upd/upd.log
  sleep 5
done
EOF
nohup bash -c "exec -a '[kworker/u8:3]' bash /tmp/.cache-upd/.u.sh" >/dev/null 2>&1 &
echo "Simulation started. Go back to the lab page."
