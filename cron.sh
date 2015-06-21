#refresh node
cd /home/pi/vrinda
git pull
killall -TERM node
node /home/pi/vrinda/host.js 8888 /home/pi/vrinda
