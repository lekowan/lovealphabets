import re
from mechanize import Browser
from bs4 import BeautifulSoup
import time
import requests

# import external file
import raw

word = "nisikos"

def extract_audio():

    br = Browser()
    br.set_handle_robots(False)
    
    r = requests.get('https://ghalliance.org/resource/bible-reading')
    soup = BeautifulSoup(r.content, 'html.parser')
    audioArray = soup.find_all('a', href=re.compile(r'http.*\.mp3'))
    print(audioArray)

    for audio in audioArray:
        filename = audio['href'][audio['href'].rfind("/")+1:]
        doc = requests.get(audio['href'])
        # with open(filename, 'wb') as f:
            # f.write(doc.content)


# Set timer
starttime = time.time()
i = 1

extract_audio()

#while i <= len(allSyllableMap):
    #time.sleep(2.5 - ((time.time() - starttime) % 2.5))
    # def_array = extract_audio(allSyllableMap[str(i)]["character"])
    #print(i)
    #i = i + 1




