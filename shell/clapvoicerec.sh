#!/bin/bash

AMPLITUDE_THRESHOLD=0.5
ENERGY_THRESHOLD=0.2
SILENCE_THRESHOLD=2
export AUDIODEV=hw:1,0
export AUDIODRIVER=alsa
AUDIODEV=hw:1,0
AUDIODRIVER=alsa

control_c()
{
  exit 0
}

trap control_c SIGINT

while true; do
	# Read in some sound!
	( /usr/bin/sox -t .wav "|arecord -d 2 -D plug${AUDIODEV}" -n stat 3>&1 1>&2- 2>&3- ) > /tmp/soxout

	# Extract the max amplitude and RMS amplitude of the recorded data
	INVOL=$(cat /tmp/soxout| grep "Maximum.*amplitude"|tr -d ' ' | cut -d ':' -f 2)
	RMSVOL=$(cat /tmp/soxout| grep "RMS.*amplitude"|tr -d ' ' | cut -d ':' -f 2)
	
	# If our listening was interrupted, then give up, comment out if needed
	if [ -z "$INVOL" ]; then
		exit 0;
	fi

	# Was it a clap? A characteristic feature is a high max amplitude but a low RMS amplitude.
	if (( $(echo "$INVOL > $AMPLITUDE_THRESHOLD" | bc -l) )); then
		if (( $(echo "$RMSVOL < $ENERGY_THRESHOLD" | bc -l) )); then
			echo "listening"
			#RECORD AND POST TO GOOGLE
			/usr/bin/sox -q -b 16 -d -t flac - rate 16000 channels 1 silence 1 0.1 ${SILENCE_THRESHOLD}% 1 1.0 ${SILENCE_THRESHOLD}% 2>/dev/null |curl -X POST --data-binary @- --user-agent 'Mozilla/5.0' --header 'Content-Type: audio/x-flac; rate=16000;' "https://www.google.com/speech-api/v2/recognize?output=json&lang=$lang&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&client=Mozilla/5.0" 2>/dev/null | sed -e 's/[{}]/''/g' | awk -F":" '{print $4}' | awk -F"," '{print $1}' | tr -d '\n'
			echo "done"
		fi
	fi
done
echo "done clapping"
exit 0
