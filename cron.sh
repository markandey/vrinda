#refresh node
cd /home/pi/vrinda
git pull
killall -TERM node
node host.js 8888
