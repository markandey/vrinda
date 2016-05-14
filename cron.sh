#refresh node
cd /home/pi/vrinda
git pull
killall -TERM node
killall -TERM chromium 2>/dev/null;
/usr/local/bin/node /home/pi/vrinda/serverjs/host.js 8888 /home/pi/vrinda< /dev/null &
/usr/bin/chromium  --app=http://localhost:8888&
