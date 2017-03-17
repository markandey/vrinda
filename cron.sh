#refresh node
cd /home/pi/vrinda
git pull
pkill node
pkill epiphany-browse
/usr/local/bin/node /home/pi/vrinda/serverjs/host.js 8888 /home/pi/vrinda< /dev/null &