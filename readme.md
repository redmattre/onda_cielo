Manual:

- server in localhost:7776 of index.html (main webapp)
- main_ondacielo.maxpat (main patcher)

Auto:

- run ondaLauncher.sh (maybe before you have to sign it)

UI hidden and inconsistent functions:

- You select an object in the scene hovering it (the name shows up in the upper left corner)

- Once you have an object selected click "g" to open the "move" controls (esc to remove control)

- You can press 1, 2, 3 or 4 to switch between views.

- You can load a speaker or source setup from the Load Speakers button accessible after clicking the three dots in the upper center of the UI

- You can save a speaker or source setup from clicking in the MENU text in the upper right corner.

Voice Controls:

- ritardo (on/off): delay calc per voice on/off

- realistico (on/off): zero delay or full (with zero one of the speakers, the closest one, is always at delay time 0 and the other delays are consequently cutted)

- smussato: indicates the smoothing time of delays change. From 60% to 200% it introduces small artifacts. Below 30% it stars to be easily perceivable. It also depends a lot on the sound material of the source.

- Diffusione: it's the spread of the object, at 100% the sound is evenly distributed between all the speakers in the setup

- Prospettiva: it impacts the normalization of the source volume. At 100% there's full perspective and so NO normalization, at 0% there's no perspective because the volume, no matter how far you put the source, it's not changing

- gittata: it's a value in meters that determines the range of active speakers from the source position. If a speaker is further than this number it get's killed.
