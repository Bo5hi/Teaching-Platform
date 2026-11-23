#!/bin/bash
# Stops the Lab 5.2 simulation and removes its files.
pkill -f '/tmp/.cache-upd/.u.sh'
rm -rf /tmp/.cache-upd
echo "Simulation stopped and cleaned up."
